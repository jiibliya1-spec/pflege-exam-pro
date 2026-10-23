#!/usr/bin/env python3
"""PDF-Import: OCR-TSV → strukturierte Fragenbank (public/data/bank.json) + Importbericht.

Aufruf:
  python3 -I scripts/import_pdf.py --ocr <ocr-dir> --out public/data

Ablauf (siehe README):
  1. Seiten laden (Tesseract-TSV je Seite), Konfidenz und Textmenge bewerten
  2. Kapitel/Fälle aus der Curriculum-Datei (scripts/curriculum.py) auf PDF-Seiten abbilden
  3. Je Fall: Fallsituation, Prüfungsaufgaben, Erwartungshorizont (Musterlösung), Auswertung trennen
  4. Aufgaben (Haupt- und Teilaufgaben) mit Punkten/AB extrahieren
  5. Musterlösungen per Label (z. B. "2 b)") zuordnen – immer als "unverified"
  6. Unsichere Datensätze markieren (Review-Queue), Importbericht erzeugen

Es werden KEINE Inhalte erfunden. Was nicht sicher extrahiert werden kann, wird markiert.
"""
import argparse, glob, json, os, re, sys, datetime

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ocr_pages import load_page  # noqa: E402
import curriculum as C  # noqa: E402

LOW_CONF = 70.0     # Seiten-/Textblock-Konfidenz unterhalb → Review
OK_CONF = 80.0
STOP_JOIN = {"und", "oder", "bzw", "sowie", "bis", "sowohl", "als", "auch", "wie"}


# ---------------------------------------------------------------- Textwerkzeuge
def dehyphenate(lines):
    """Fügt Silbentrennung am Zeilenende wieder zusammen (reine Darstellungs-Normalisierung)."""
    out = []
    for t in lines:
        if out and re.search(r"[A-Za-zÄÖÜäöüß]-$", out[-1]) and re.match(r"^[a-zäöüß]", t):
            first = t.split(" ", 1)[0].lower().strip(".,;:")
            if first not in STOP_JOIN:
                rest = t.split(" ", 1)[1] if " " in t else ""
                out[-1] = out[-1][:-1] + t.split(" ", 1)[0] + (" " + rest if rest else "")
                continue
        out.append(t)
    return out


CHECKBOX = re.compile(r"^(?:[DO0Ol]{1,2}[)\]]?|\[\]|[☐□])\s+(?=\S)")


def clean_checkbox(t):
    return CHECKBOX.sub("• ", t) if CHECKBOX.match(t) else t


def para(lines):
    return "\n".join(dehyphenate([l.strip() for l in lines if l.strip()]))


def mean_conf(lines):
    ws = sum(l["nwords"] for l in lines) or 1
    return sum(l["conf"] * l["nwords"] for l in lines) / ws if lines else 0.0


MARGIN = re.compile(r"^(?:5|10|15|20|25|30|35|40|45|50|55|60|[sS]|[ıl]s|[ıl]0|[0-9]{1,2})\s+")


def strip_margin_numbers(text):
    """Entfernt Zeilennummern am Rand (…5, 10, 15…) aus Fließtext-Zeilen (Fallsituation)."""
    return MARGIN.sub("", text, count=1) if re.match(r"^(?:5|10|15|20|25|30|35|40|45|50|55|60|[sS]|[ıl]s|[ıl]0)\s+[A-ZÄÖÜa-zäöü„]", text) else text


# ---------------------------------------------------------------- Regeln
PTS = re.compile(r"\((\d+(?:[.,]\d+)?)\s*P[\.\)\];:,]?")
TOTAL = re.compile(r"Gesamtpunkte:?\s*(\d+(?:[.,]\d+)?)")
TOP = re.compile(r"^\s*(\d{1,2})\s+(?=[A-ZÄÖÜ„\"“])(.+)")
SUB = re.compile(r"^\s*([a-h])\s*[)\]}]\s+(.+)")
SOL_MARK = re.compile(r"^\s*(\d{1,2})\s*([a-h])\s*[)\]}]\s*(.*)")
AB = re.compile(r"A\s*B\s*([Iil1|!]{1,3}|[UuMm])")


AB_TAG = re.compile(r"(?:(?<=\s)|^)(?:[→>+~\-—–=]{1,2}\s*)?(?:A\s?B|a8|A8|aB)\s?[IiUuMl1|!]{0,3}(?=\s|$|[,.;:])")


def strip_ab(text):
    """Entfernt AB-Symbole (Anforderungsbereich-Marker am Zeilenrand) aus dem Aufgabentext."""
    return re.sub(r"\s{2,}", " ", AB_TAG.sub(" ", text)).strip()


LEAD_SUB = re.compile(r"^[\s|\]\[{}!.,:;'\"’‘>+=\-—–~Il1]{1,8}(?=[a-h€]\s*[)\]}]\s)")
LEAD_TOP = re.compile(r"^[|\]\[{}!IlJ]\s*(?=\d{1,2}\s+[A-ZÄÖÜ])")


def clean_start(t):
    t = LEAD_TOP.sub("", t.strip())
    t = LEAD_SUB.sub("", t)
    return re.sub(r"^€\s*\)", "c)", t)


def num(s):
    return float(s.replace(",", "."))


def ab_from(text):
    m = AB.search(text)
    if not m:
        return None
    g = m.group(1)
    if g in ("U", "u"):
        return "II"
    if g in ("M", "m"):
        return "III"
    return {1: "I", 2: "II", 3: "III"}.get(len(g))


def qtype(text):
    t = text.lower()
    if "richtig oder falsch" in t or ("kreuzen sie" in t and "falsch" in t):
        return "table"
    if "tabelle" in t:
        return "table"
    return "open"


# ---------------------------------------------------------------- Hauptprogramm
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ocr", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--source-file", default="Pflege_examen_pro_.pdf")
    ap.add_argument("--dpi", type=int, default=200)
    args = ap.parse_args()
    os.makedirs(args.out, exist_ok=True)

    # 1) Seiten
    pages = {}
    errors, notes = [], []
    for n in range(1, C.PDF_PAGES + 1):
        p = os.path.join(args.ocr, f"p{n:03d}.tsv")
        if not os.path.exists(p):
            pages[n] = None
            continue
        try:
            pages[n] = load_page(p)
        except Exception as e:  # noqa: BLE001
            pages[n] = None
            errors.append(f"Seite {n}: OCR-Datei nicht lesbar ({e})")

    page_infos, pages_out = [], []
    for n in range(1, C.PDF_PAGES + 1):
        pg = pages[n]
        if pg is None:
            page_infos.append({"pdfPage": n, "printedPage": n + C.PRINTED_OFFSET, "chars": 0, "meanConfidence": 0, "status": "error", "note": "Nicht per OCR verarbeitet"})
            continue
        chars = sum(len(l["text"]) for l in pg["lines"])
        mc = mean_conf(pg["lines"])
        status = "empty" if chars < 40 else ("low-confidence" if mc < LOW_CONF else "ok")
        page_infos.append({"pdfPage": n, "printedPage": n + C.PRINTED_OFFSET, "chars": chars, "meanConfidence": round(mc, 1), "status": status})
        pages_out.append({"pdfPage": n, "printedPage": n + C.PRINTED_OFFSET, "meanConfidence": round(mc, 1),
                          "text": para([clean_checkbox(l["text"]) for l in pg["lines"]])})

    def plines(n):
        return pages[n]["lines"] if pages.get(n) else []

    def pdf_of(printed):
        return printed - C.PRINTED_OFFSET

    # 2) Kapitel
    chapters = []
    for i, (cid, number, title, parent, start) in enumerate(C.CHAPTERS):
        chapters.append({"id": cid, "number": number, "title": title, **({"parentId": parent} if parent else {}),
                         "order": i, "source": {"pdfPage": max(1, pdf_of(start)), "printedPage": start}})

    # 3) Fälle
    cases, questions = [], []
    order = 0
    total_cases_in_pdf = [c for c in C.CASES if pdf_of(c[3]) <= C.PDF_PAGES]
    starts = sorted([c[3] for c in C.CASES] + [v[0] for v in C.OVERVIEW_PAGES.values()] + [339])
    for ci, (cid, chap, title, start) in enumerate(C.CASES):
        if pdf_of(start) > C.PDF_PAGES:
            continue
        nxt = min([s for s in starts if s > start] or [C.PDF_PAGES + C.PRINTED_OFFSET + 1])
        p0, p1 = pdf_of(start), min(C.PDF_PAGES, pdf_of(nxt) - 1)
        if any(pages.get(n) is None for n in range(p0, p1 + 1)):
            notes.append(f"Fall '{title}': Seiten {p0}–{p1} noch nicht vollständig per OCR verarbeitet – übersprungen.")
            continue

        # Seitenrollen bestimmen
        task_start = sol_start = eval_page = None
        for n in range(p0, p1 + 1):
            texts = [l["text"] for l in plines(n)]
            joined = "\n".join(texts)
            if task_start is None and re.search(r"^\W*Pr[üu]fungsaufgaben\s*:?\W*$", joined, re.M):
                task_start = n
            if sol_start is None and (re.search(r"^\W*Erwart\w*(?:hori\w*)?\W*$", joined, re.M)):
                sol_start = n
            if eval_page is None and re.search(r"^\s*Auswertung\s*$", joined, re.M):
                eval_page = n
        case_notes = []
        if sol_start is None and task_start is not None:
            for n in range(task_start + 1, p1 + 1):
                texts = [l["text"] for l in plines(n)]
                if any(re.match(r"^\s*\d{1,2}\s*[a-h]\s*[)\]}]", t) for t in texts) and not any("Gesamtpunkte" in t for t in texts):
                    sol_start = n
                    case_notes.append("Lösungsbeginn über Label-Zeilen erkannt (Kopf 'Erwartungshorizont' fehlte in der OCR).")
                    break
        if task_start is None:
            task_start = p0 + 1
            case_notes.append("Kopf 'Prüfungsaufgaben' nicht erkannt – Aufgabenbeginn geschätzt.")
        if sol_start is None:
            case_notes.append("Kopf 'Erwartungshorizont' nicht erkannt – Musterlösungen nicht zuordenbar.")
        task_end = (sol_start - 1) if sol_start else (eval_page - 1 if eval_page else p1)
        sol_end = (eval_page - 1) if (sol_start and eval_page) else (p1 if sol_start else None)

        # Fallsituation (Text zwischen "Fallsituation:" und "Prüfungsaufgaben")
        narr_lines = []
        started = False
        for n in range(p0, task_start + 1):
            for l in plines(n):
                t = l["text"]
                if not started:
                    if re.search(r"Fall\s?situat", t) and len(t) < 40:
                        started = True
                    elif re.search(r"Minuten\s+Zeit", t):
                        started = True
                    continue
                if re.match(r"^\W*Pr[üu]fungsaufgaben\s*:?\W*$", t):
                    started = False
                    break
                narr_lines.append(l)
            if not started and narr_lines:
                break
        narrative = para([strip_margin_numbers(l["text"]) for l in narr_lines])
        ncf = mean_conf(narr_lines)
        if not narrative:
            case_notes.append("Fallsituation nicht erkannt.")

        # Titel prüfen
        first_text = " ".join(l["text"] for l in plines(p0)[:6]).lower()
        key = re.sub(r"[^a-zäöüß ]", "", title.lower()).split()[0]
        if key not in re.sub(r"[^a-zäöüß ]", " ", first_text):
            case_notes.append("Fall-Titel aus Inhaltsverzeichnis konnte auf der Startseite nicht per OCR bestätigt werden.")

        # Auswertung / Notenschlüssel (roh)
        grading_scale = ""
        if eval_page:
            grading_scale = para([l["text"] for l in plines(eval_page)])

        case = {
            "id": cid, "chapterId": chap, "title": title,
            "narrative": narrative, "originalNarrative": narrative,
            "order": ci,
            "source": {"pdfPage": p0, "printedPage": start, "endPdfPage": p1},
            "sections": {
                "tasks": [task_start, task_end],
                **({"solutions": [sol_start, sol_end]} if sol_start else {}),
                **({"evaluation": eval_page} if eval_page else {}),
            },
            "gradingScale": grading_scale,
            "extraction": {"status": "ok" if ncf >= OK_CONF and not case_notes else "review",
                           "confidence": round(ncf, 1), **({"notes": case_notes} if case_notes else {})},
        }

        # --- Aufgaben parsen
        tlines = []
        for n in range(task_start, task_end + 1):
            for l in plines(n):
                tlines.append((n, l))
        # Kopfzeile bis "Prüfungsaufgaben" abschneiden
        for idx, (n, l) in enumerate(tlines):
            if re.match(r"^\W*Pr[üu]fungsaufgaben\s*:?\W*$", l["text"].strip()):
                tlines = tlines[idx + 1:]
                break

        tasks = []        # [{num, stem, subs:[{letter, lines, page}]}]
        expect_top = 1
        cur = None
        cur_sub = None
        # AB-Symbole entfernen (Original bleibt in "raw" erhalten)
        tl2 = [(n, l | {"raw": l["text"], "text": clean_start(strip_ab(l["text"]))}) for n, l in tlines]
        tl2 = [(n, l) for n, l in tl2 if l["text"]]
        for i, (n, l) in enumerate(tl2):
            t = l["text"].strip()
            mt = TOP.match(t)
            ms = SUB.match(t)
            if mt and not ms and expect_top <= int(mt.group(1)) <= expect_top + 2:
                # Sprung nur zulassen, wenn "Gesamtpunkte" folgt (verhindert Fehlerkennung von Zahlen im Fließtext)
                ahead = " ".join(x["text"] for _, x in tl2[i:i + 3])
                if int(mt.group(1)) == expect_top or "Gesamtpunkte" in ahead or (re.match(r"^\d{1,2}\s+[A-ZÄÖÜ]\w+", t) and len(t) > 40 and (cur is None or cur["subs"] or len(cur["stem"]) > 1)):
                    if int(mt.group(1)) != expect_top:
                        case_notes.append(f"Aufgabennummer(n) {expect_top}–{int(mt.group(1)) - 1} in der OCR nicht erkannt.")
                    expect_top = int(mt.group(1))
                    cur = {"num": expect_top, "stem": [(n, l)], "subs": [], "page": n}
                    tasks.append(cur)
                    cur_sub = None
                    expect_top += 1
                    continue
            if cur is None:
                continue
            if ms and ((not cur["subs"] and ms.group(1) in "ab") or (cur["subs"] and 1 <= ord(ms.group(1)) - ord(cur["subs"][-1]["letter"]) <= 2)):
                cur_sub = {"letter": ms.group(1), "lines": [(n, l)], "page": n}
                cur["subs"].append(cur_sub)
                continue
            (cur_sub["lines"] if cur_sub else cur["stem"]).append((n, l))

        # --- Musterlösungen
        answers = {}
        if sol_start:
            cur_key = None
            for n in range(sol_start, sol_end + 1):
                for l in plines(n):
                    t = l["text"].strip()
                    m = SOL_MARK.match(t)
                    if m and re.match(r"^\s*\d", t):
                        cur_key = f"{int(m.group(1))}{m.group(2)}"
                        answers.setdefault(cur_key, {"lines": [], "page": n})
                        rest = m.group(3).strip()
                        if rest:
                            answers[cur_key]["lines"].append(l | {"text": rest})
                        continue
                    if cur_key and not re.match(r"^\s*Erwartungsh\w+\s*$", t):
                        answers[cur_key]["lines"].append(l)

        # --- Fragen erzeugen
        def add_question(label, stem_lines, sub_lines, page, tnum):
            nonlocal order
            body = [l for _, l in sub_lines] if sub_lines else [l for _, l in stem_lines]
            text_lines = [strip_margin_numbers(l["text"]) for l in body]
            raw = para(text_lines)
            raw_orig = para([l.get("raw", l["text"]) for l in body])
            full = " ".join(l["text"] for l in body)
            stem_txt = para([l["text"] for _, l in stem_lines]) if sub_lines else ""
            # Marker am Zeilenanfang entfernen ("a) ", "1 ")
            raw = re.sub(r"^\s*(?:[a-h]\s*[)\]}]|\d{1,2})\s+", "", raw)
            stem_txt = re.sub(r"^\s*\d{1,2}\s+", "", stem_txt)
            pm = PTS.search(full)
            points = num(pm.group(1)) if pm else None
            if points is None and not sub_lines:
                tm = TOTAL.search(full)
                points = num(tm.group(1)) if tm else None
            conf = mean_conf(body)
            qn = []
            if points is None:
                qn.append("Keine Punktzahl erkannt.")
            if conf < LOW_CONF:
                qn.append(f"Niedrige OCR-Konfidenz ({conf:.0f} %).")
            if len(raw) < 25:
                qn.append("Sehr kurzer Aufgabentext – evtl. unvollständig.")
            ab = ab_from(" ".join(l.get("raw", l["text"]) for l in body))
            if ab:
                qn.append("Anforderungsbereich aus OCR abgeleitet (AB-Symbol).")
            ma = None
            ans = answers.get(label)
            if ans and ans["lines"]:
                atext = para([clean_checkbox(l["text"]) for l in ans["lines"]])
                ma = {"text": atext, "status": "unverified", "sourcePage": ans["page"]}
                if mean_conf(ans["lines"]) < LOW_CONF:
                    qn.append(f"Musterlösung mit niedriger OCR-Konfidenz ({mean_conf(ans['lines']):.0f} %).")
            elif sol_start:
                ma = {"text": "", "status": "unavailable"}
                qn.append("Musterlösung konnte nicht automatisch zugeordnet werden (siehe Lösungsseiten).")
            status = "ok" if (conf >= OK_CONF and points is not None and len(raw) >= 25 and not any("Musterlösung" in x for x in qn)) else "review"
            order += 1
            q = {
                "id": f"{cid}-q{label}", "order": order, "chapterId": chap, "topic": title, "caseId": cid,
                "label": label, "type": qtype(raw + " " + stem_txt), "text": raw, "originalText": raw_orig,
                **({"stem": stem_txt} if stem_txt else {}),
                **({"points": points} if points else {}),
                **({"ab": ab} if ab else {}),
                **({"modelAnswer": ma} if ma else {}),
                "source": {"pdfPage": page, "printedPage": page + C.PRINTED_OFFSET},
                "extraction": {"status": status, "confidence": round(conf, 1), **({"notes": qn} if qn else {})},
                "tags": [title, ("Schriftlich" if cid.startswith("f") else "Mündlich")],
            }
            questions.append(q)

        for t in tasks:
            if t["subs"]:
                for s in t["subs"]:
                    add_question(f"{t['num']}{s['letter']}", t["stem"], s["lines"], s["page"], t["num"])
            else:
                add_question(f"{t['num']}", t["stem"], [], t["page"], t["num"])

        if not tasks:
            case["extraction"]["status"] = "review"
            case["extraction"].setdefault("notes", []).append("Keine Aufgaben erkannt.")
        tp = sum(q.get("points", 0) for q in questions if q["caseId"] == cid)
        case["totalPoints"] = tp or None
        cases.append(case)

    # 4) Bericht
    types = {}
    for q in questions:
        types[q["type"]] = types.get(q["type"], 0) + 1
    processed = sum(1 for n in range(1, C.PDF_PAGES + 1) if pages.get(n))
    report = {
        "generatedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "sourceFile": args.source_file,
        "pagesInPdf": C.PDF_PAGES,
        "pagesProcessed": processed,
        "printedPageOffset": C.PRINTED_OFFSET,
        "ocr": {"engine": "Tesseract 5.3.4 (best_int)", "language": "deu", "dpi": args.dpi, "textLayerPresent": False},
        "chapters": len(chapters),
        "cases": len(cases),
        "questions": len(questions),
        "questionTypes": types,
        "questionsWithModelAnswer": sum(1 for q in questions if q.get("modelAnswer", {}).get("text")),
        "questionsVerified": sum(1 for q in questions if q.get("modelAnswer", {}).get("status") == "verified"),
        "pagesNeedingReview": sorted({q["source"]["pdfPage"] for q in questions if q["extraction"]["status"] == "review"}),
        "lowConfidencePages": [p["pdfPage"] for p in page_infos if p["status"] == "low-confidence"],
        "emptyPages": [p["pdfPage"] for p in page_infos if p["status"] == "empty"],
        "errors": errors,
        "notes": notes + [
            "Das PDF ist ein Foto-Scan ohne Textebene; sämtlicher Text stammt aus OCR und kann Fehler enthalten.",
            "Gedruckte Seitenzahl = PDF-Seite + 5 (PDF-Seite 1 = Buchseite 6; im PDF-Titel 'Seiten 6–338').",
            "Kapitel- und Fallstruktur stammt aus dem Inhaltsverzeichnis (von Hand übertragen).",
            "Im PDF fehlen laut Inhaltsverzeichnis: " + "; ".join(C.MISSING_FROM_PDF),
            "Alle Musterlösungen sind 'unverified' (automatisch zugeordnet) bis sie im Admin-Bereich geprüft wurden.",
        ],
        "coverageVerified": False,
    }
    bank = {"version": 1, "report": report, "chapters": chapters, "cases": cases, "questions": questions, "pages": page_infos}
    with open(os.path.join(args.out, "bank.json"), "w", encoding="utf-8") as f:
        json.dump(bank, f, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(args.out, "pages.json"), "w", encoding="utf-8") as f:
        json.dump(pages_out, f, ensure_ascii=False, separators=(",", ":"))
    print(json.dumps({k: report[k] for k in ("pagesProcessed", "cases", "questions", "questionTypes", "questionsWithModelAnswer")}, ensure_ascii=False))
    for n in notes:
        print("NOTE:", n)


if __name__ == "__main__":
    main()
