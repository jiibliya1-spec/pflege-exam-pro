#!/usr/bin/env python3
"""Text-Import: Quelltexte (scripts/source/*.txt) → strukturierte Fragenbank (public/data/bank.json).

Aufruf:
  python3 -I scripts/import_text.py --src scripts/source --out public/data

Ablauf:
  1. Seiten laden und bereinigen (scripts/textclean.py): Kopf-/Fußzeilen, Silbentrennung, Tabellen, Artefakte
  2. 30 Fälle (18 schriftlich, 12 mündlich) anhand der Überschriften "Fallsituation" abgrenzen
  3. Je Fall: Fallsituation, Aufgaben (Haupt-/Teilaufgaben), Erwartungshorizont, Auswertung trennen
  4. Aufgaben ↔ Musterlösungen über die Labels ("1 a)", "2", …) verknüpfen
  5. Unsichere Datensätze markieren, Importbericht erzeugen

Es werden KEINE Inhalte erfunden: Musterlösungen bleiben "unverified", bis sie im Admin-Bereich geprüft wurden.
"""
from __future__ import annotations

import argparse
import datetime
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import textclean as T  # noqa: E402

# ---------------------------------------------------------------- Struktur laut Inhaltsverzeichnis
CHAPTERS = [
    # id, number, title, parent, printed page
    ("k1", "1", "Auf die Prüfungen, fertig, los!", None, 10),
    ("k1-1", "1.1", "Ein paar Worte, bevor Sie loslegen", "k1", 10),
    ("k1-2", "1.2", "Kompetenzbegriff und Kompetenzbereiche", "k1", 10),
    ("k1-3", "1.3", "Operatoren und Anforderungsbereiche", "k1", 11),
    ("k1-4", "1.4", "Noten und Bewertung", "k1", 11),
    ("k1-5", "1.5", "Die Abschlussprüfungen im Überblick", "k1", 13),
    ("k1-6", "1.6", "Kompetenzschwerpunkte in den Prüfungen", "k1", 14),
    ("k1-7", "1.7", "Beste Voraussetzungen für stressfreies Lernen", "k1", 16),
    ("k1-8", "1.8", "Praktische Lerntipps für Ihren Erfolg", "k1", 18),
    ("k2", "2", "Die schriftliche Prüfung", None, 22),
    ("k2-1", "2.1", "Einführung", "k2", 22),
    ("k2-2", "2.2", "Der erste Prüfungstag", "k2", 30),
    ("k2-3", "2.3", "Der zweite Prüfungstag", "k2", 100),
    ("k2-4", "2.4", "Der dritte Prüfungstag", "k2", 168),
    ("k3", "3", "Die mündliche Prüfung", None, 240),
    ("k3-1", "3.1", "Einführung", "k3", 240),
    ("k3-2", "3.2", "Die mündlichen Prüfungsfälle", "k3", 246),
    ("k4", "4", "Meine Prüfungsvorbereitung im Überblick", None, 370),
]

# (id, Kapitel, Titel, gedruckte Seite) – Reihenfolge = Reihenfolge im Buch
CASES = [
    ("f01", "k2-2", "Aufruhr im Nachtdienst", 32),
    ("f02", "k2-2", "Paul will nach Hause", 42),
    ("f03", "k2-2", "Max' Geheimnis", 54),
    ("f04", "k2-2", "Emilia mag sich nicht waschen", 66),
    ("f05", "k2-2", "Frau Mazur hat einen Wunsch", 76),
    ("f06", "k2-2", "Herr Sommer ekelt sich", 86),
    ("f07", "k2-3", "Aslan und sein bester Freund", 102),
    ("f08", "k2-3", "Frau Krüger bekommt Besuch", 114),
    ("f09", "k2-3", "Mein Leben ändern? Das schaffe ich doch nie!", 124),
    ("f10", "k2-3", "Zu Hause bei Tom und seinen Pflegeeltern", 134),
    ("f11", "k2-3", "So eine Enttäuschung!", 146),
    ("f12", "k2-3", "Es muss ja weitergehen", 156),
    ("f13", "k2-4", "Noteinsatz beim Festival", 170),
    ("f14", "k2-4", "Neulich in der Notaufnahme", 182),
    ("f15", "k2-4", "Herr Kovac macht sich unbeliebt", 192),
    ("f16", "k2-4", "Wenn ein Augenblick alles verändert", 204),
    ("f17", "k2-4", "Frau Seifert braucht eine Pause", 214),
    ("f18", "k2-4", "Sie ist meine Sandkastenliebe", 226),
    ("m01", "k3-2", "Klara versteht die Welt nicht mehr", 248),
    ("m02", "k3-2", "Herr Sander braucht einen Plan", 256),
    ("m03", "k3-2", "Alles für die Patienten?", 266),
    ("m04", "k3-2", "Nika hat ein normales Leben verdient!", 278),
    ("m05", "k3-2", "Nichts ist mehr so, wie es einmal war", 288),
    ("m06", "k3-2", "Eine Wohnung voller Müll", 298),
    ("m07", "k3-2", "Zwischenfall in der Frühstückspause", 308),
    ("m08", "k3-2", "36 Grad, und es wird noch heißer", 318),
    ("m09", "k3-2", "Über meinen Körper bestimme ich", 328),
    ("m10", "k3-2", "Herr Konrad hätte gern ein Bier", 340),
    ("m11", "k3-2", "Willkommen im Team", 350),
    ("m12", "k3-2", "Auf dem Dorf ist es nicht so einfach", 360),
]

TOTAL_PAGES = 379

# ---------------------------------------------------------------- Muster
RE_FALL = re.compile(r"^#*\s*Fal+s*[si]+tuation\s*[:\-.]*\s*$", re.M)
RE_AUFG = re.compile(r"^#*\s*Pr[üu]fungsaufgaben\s*:?\s*$", re.M)
RE_AUFG_ORAL = re.compile(r"^Aufgaben\b.*Vorbereitungszeit", re.M)
RE_PG = re.compile(r"^Im Pr[üu]fungsgespr", re.M)
RE_EWH = re.compile(r"^#*\s*Erwartungshorizont\s*$", re.M)
RE_AUSW = re.compile(r"^#*\s*Auswertung\s*$", re.M)
RE_OVERVIEW = re.compile(r"^#*\s*Mein Pr[üu]fungstraining im Überblick", re.M)

RE_TASK = re.compile(r"^(\d{1,2})\s+(?=\S)")
RE_SUB = re.compile(r"^([a-h])\s*\)\s*(?=\S)")
RE_ANS_LABEL = re.compile(r"^(\d{1,2})\s*([a-h])\s*\)\s*(.*)$")
RE_ANS_NUM = re.compile(r"^(\d{1,2})\s+(\S.*)$")
RE_POINTS = re.compile(r"\((\d+(?:[.,]\d+)?)\s*P\.?\)")
RE_GESAMT = re.compile(r"\(\s*Gesamtpunkte\s*:?\s*(\d+(?:[.,]\d+)?)\s*\)")
RE_AB = re.compile(r"AB\s*(III|II|I)\b")
RE_AB_LINE = re.compile(r"^(?:→|->|-»|—>|-\s*>)?\s*AB\s*(III|II|I)(?:\s*(?:und|,)\s*(?:→|->|-»)?\s*AB\s*(III|II|I))?\s*$")
RE_KB = re.compile(r"^(?:\S{1,3}\s+)?Kompetenzbereich\s+([IVX]+)\s*:?\s*$")
RE_ORAL_NUM = re.compile(r"^\W*(?:[A-Za-z]{1,5}[-'’,.]*\W*)?(\d{1,2})\s+(?=[A-ZÄÖÜ„\"])")
RE_ORAL_INTRO = re.compile(r"^(?:Im Prüfungsgespräch|Wählen Sie zu Übungszwecken|Aufgaben\b|Setting)")


def num(s: str) -> float:
    return float(s.replace(",", "."))


def clean_title(t: str) -> str:
    return re.sub(r"\s+", " ", t.replace("’", "'")).strip()


# ---------------------------------------------------------------- Seitenstrom
class Stream:
    """Zeilenstrom über mehrere Seiten; jede Zeile kennt ihre Seite."""

    def __init__(self, pages: dict[int, str], p0: int, p1: int):
        self.lines: list[tuple[int, str]] = []
        for p in range(p0, p1 + 1):
            txt = pages.get(p, "")
            for ln in txt.split("\n"):
                self.lines.append((p, ln.rstrip()))

    def find(self, rx: re.Pattern, start: int = 0) -> int | None:
        for i in range(start, len(self.lines)):
            if rx.search(self.lines[i][1]):
                return i
        return None


def lines_to_text(lines: list[tuple[int, str]]) -> str:
    out = "\n".join(l for _, l in lines)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.strip()


def strip_line_numbers(text: str) -> str:
    """Entfernt Zeilennummern am Rand (5, 10, 15 …), die im Fließtext als einzelne Zahl vor Großbuchstaben stehen."""
    units = r"(?:Jahre|Jahren|Jahr|Minuten|Min|Tage|Tagen|Tag|Wochen|Woche|Stunden|Monate|Monaten|Prozent|P|mg|ml|kg|Uhr|Euro|Mal|Personen|Punkte|Schritte|Wochen)\b"
    prev_bad = {"ist", "war", "seit", "vor", "nach", "ca.", "circa", "etwa", "über", "mit", "um", "bis", "für", "alle", "jede", "jeden", "von", "auf", "in", "zu", "als", "etwa"}
    expected = 5
    out = []
    pos = 0
    for m in re.finditer(r"(?<=\s)(\d{1,2})(?=\s+[A-ZÄÖÜ„“\"])", text):
        n = int(m.group(1))
        if n != expected:
            continue
        after = text[m.end():].lstrip()
        if re.match(units, after):
            continue
        before = text[:m.start()].rstrip().split(" ")[-1].lower() if text[:m.start()].strip() else ""
        if before in prev_bad:
            continue
        out.append((m.start(), m.end()))
        expected += 5
    res = []
    last = 0
    for s, e in out:
        res.append(text[last:s])
        last = e
    res.append(text[last:])
    return re.sub(r"[ \t]{2,}", " ", "".join(res))


def tidy_paras(lines: list[str]) -> str:
    t = "\n".join(lines)
    t = re.sub(r"\n{3,}", "\n\n", t)
    return t.strip()


# ---------------------------------------------------------------- Aufgaben
LAX_AB = r"[aA][bB]\s*(?:([iIl1|!]{1,3})|([mM]))"
RE_AB_PREFIX = re.compile(r"^(?:[-–—»*>→=]{1,3}\s*)?" + LAX_AB + r"(?:\s+und\s*(?:[-–—»*>→=]{1,3}\s*)?" + LAX_AB + r")?\s+(?=\d{1,2}\s|[a-h]\s*\))")
RE_AB_ONLY = re.compile(r"^(?:[-–—»*>→=]{1,3}\s*)?" + LAX_AB + r"(?:\s+und\s*(?:[-–—»*>→=]{1,3}\s*)?" + LAX_AB + r")?\s*$")


def _ab_levels(m: re.Match) -> list[str]:
    out = []
    g = m.groups()
    for i in range(0, len(g), 2):
        if g[i]:
            out.append({1: "I", 2: "II", 3: "III"}[min(len(g[i]), 3)])
        elif g[i + 1]:
            out.append("III")
    return out


def parse_tasks(stream_lines: list[tuple[int, str]], standalone_ab: bool = True):
    """Parst die schriftlichen Prüfungsaufgaben in Haupt- und Teilaufgaben."""
    tasks = []
    cur = None
    sub = None
    expected = 1
    pending_ab = None
    prev_blank = True

    def target_lines():
        return sub["lines"] if sub is not None else (cur["stem"] if cur is not None else None)

    for page, raw in stream_lines:
        ln = raw.strip()
        if not ln:
            t = target_lines()
            if t is not None and t and t[-1][1] != "":
                t.append((page, ""))
            prev_blank = True
            continue
        was_blank, prev_blank = prev_blank, False
        mab = RE_AB_ONLY.match(ln)
        if mab:
            if standalone_ab:
                pending_ab = _ab_levels(mab)
            continue
        inline_ab = None
        mp = RE_AB_PREFIX.match(ln)
        if mp:
            inline_ab = _ab_levels(mp)
            ln = ln[mp.end():]
        ms = RE_SUB.match(ln)
        mt = RE_TASK.match(ln)
        has_gp = bool(RE_GESAMT.search(ln))
        new_task = None
        if mt and not ms:
            n = int(mt.group(1))
            if n == expected or (has_gp and expected < n <= expected + 3):
                new_task = (n, RE_TASK.sub("", ln, count=1))
        if new_task is None and has_gp and not ms and was_blank and cur is not None and (not RE_GESAMT.search(join_lines(cur["stem"])) or cur["subs"]):
            new_task = (expected, ln)  # Aufgabennummer fehlt im Text (OCR), Gesamtpunkte markieren die Aufgabe
        if new_task is None and ms and cur is not None and ms.group(1) == "a" and cur["subs"] and was_blank:
            new_task = (expected, "")  # Aufgabenstamm fehlt im Quelltext: neue Aufgabe beginnt direkt mit a)
            cur_missing_stem = True
            nt_missing = True
        else:
            nt_missing = False
        if new_task is not None:
            n, text = new_task
            cur = {"num": n, "stem": [(page, text)] if text else [], "subs": [], "page": page, "ab": inline_ab or pending_ab, "missing_stem": nt_missing}
            pending_ab = None
            tasks.append(cur)
            sub = None
            expected = n + 1
            if nt_missing:
                sub = {"letter": "a", "lines": [(page, RE_SUB.sub("", ln, count=1))], "page": page, "ab": inline_ab}
                cur["subs"].append(sub)
            continue
        if ms and cur is not None:
            letter = ms.group(1)
            want = chr(ord("a") + len(cur["subs"]))
            if letter == want:
                sub = {"letter": letter, "lines": [(page, RE_SUB.sub("", ln, count=1))], "page": page, "ab": inline_ab or pending_ab}
                pending_ab = None
                cur["subs"].append(sub)
                continue
        t = target_lines()
        if t is not None:
            t.append((page, ln))
        pending_ab = None
    return tasks


def join_lines(pairs: list[tuple[int, str]]) -> str:
    return tidy_paras([l for _, l in pairs])


def ab_value(vals):
    if not vals:
        return None
    order = {"I": 1, "II": 2, "III": 3}
    return max(vals, key=lambda v: order[v])


def points_of(text: str):
    ms = RE_POINTS.findall(text)
    if not ms:
        return None
    return num(ms[-1]) if len(ms) == 1 else sum(num(x) for x in ms)


# ---------------------------------------------------------------- Lösungen
def parse_answers(lines: list[tuple[int, str]], labels: list[str], mode: str):
    """Teilt den Erwartungshorizont an den Labels. mode "sub" (1 a) / "num" (1, 2, …)."""
    answers: dict[str, dict] = {}
    order: list[str] = []
    idx = 0  # Position in labels
    cur = None
    preface: list[tuple[int, str]] = []
    for page, raw in lines:
        ln = raw.strip()
        label = None
        rest = ""
        if ln:
            m = RE_ANS_LABEL.match(ln)
            if m and mode in ("sub", "mixed"):
                cand = f"{int(m.group(1))}{m.group(2)}"
                if cand in labels and labels.index(cand) >= idx:
                    label, rest = cand, m.group(3)
            if label is None and mode in ("num", "mixed"):
                m2 = RE_ANS_NUM.match(ln)
                if m2 and not RE_ANS_LABEL.match(ln):
                    cand = str(int(m2.group(1)))
                    if cand in labels and labels.index(cand) >= idx and (labels.index(cand) == idx or labels.index(cand) == idx + 1 or cur is None or (labels.index(cand) <= idx + 4 and m2.group(2).rstrip().endswith(':') and len(m2.group(2)) < 110)):
                        label, rest = cand, m2.group(2)
            if label is None and mode in ("sub", "mixed"):
                m3 = re.match(r"^(\d{1,2})\s*([a-h])\s*\)?\s*$", ln)  # "1 d)" allein oder "1 d"
                if m3:
                    cand = f"{int(m3.group(1))}{m3.group(2)}"
                    if cand in labels and labels.index(cand) >= idx:
                        label, rest = cand, ""
        if label:
            idx = labels.index(label) + 1
            cur = {"label": label, "title": rest.strip(), "lines": [], "page": page}
            answers[label] = cur
            order.append(label)
            continue
        if cur is None:
            preface.append((page, raw))
        else:
            cur["lines"].append((page, raw))
    return answers, order, preface


def answer_body(a: dict) -> str:
    body = tidy_paras([l for _, l in a["lines"]])
    return body


# ---------------------------------------------------------------- Fall-Zerlegung
def split_case(cl: dict[int, str], p0: int, p1: int, oral: bool):
    st = Stream(cl, p0, p1)
    L = st.lines
    i_fall = st.find(RE_FALL)
    i_aufg = st.find(RE_AUFG_ORAL if oral else RE_AUFG, (i_fall or 0))
    i_pg = st.find(RE_PG, (i_aufg or 0)) if oral else None
    i_ewh = st.find(RE_EWH, (i_pg or i_aufg or i_fall or 0))
    i_ausw = st.find(RE_AUSW, (i_ewh or i_aufg or 0))
    i_over = st.find(RE_OVERVIEW, (i_ausw or 0))
    end = len(L)
    if i_over is not None:
        end = i_over
    return L, dict(fall=i_fall, aufg=i_aufg, pg=i_pg, ewh=i_ewh, ausw=i_ausw, end=end)


def build(cl: dict[int, str], pages_raw: dict[int, str]):
    bank_cases, questions = [], []
    notes: list[str] = []

    # --- Fallstartseiten bestimmen (nur erste "Fallsituation" je Titelseite, Doppelte verwerfen)
    starts: list[int] = []
    for p in sorted(cl):
        if p < 25:
            continue
        t = cl[p]
        if RE_FALL.search(t) and (re.search(r"^Themenschwerpunkte", t, re.M) or RE_AUFG_ORAL.search(t) or p in (181,)):
            if p == 242:  # Beispiel im Einführungskapitel (3.1.4), kein Prüfungsfall
                continue
            starts.append(p)
    # Doppelte Titelseite (152/154 'Es muss ja weitergehen'): jeweils die letzte behalten
    dedup: list[int] = []
    for p in starts:
        if dedup and p - dedup[-1] <= 2 and cl[p].strip()[:40] == cl[dedup[-1]].strip()[:40]:
            notes.append(f"Doppelte Fallseite {dedup[-1]}/{p} erkannt – Seite {p} verwendet.")
            dedup[-1] = p
        else:
            dedup.append(p)
    starts = dedup
    if len(starts) != len(CASES):
        notes.append(f"WARNUNG: {len(starts)} Fallstartseiten gefunden, erwartet {len(CASES)}")

    order = 0
    for ci, (cid, chap, title, printed) in enumerate(CASES):
        if ci >= len(starts):
            continue
        p0 = starts[ci]
        # Titelseite kann eine Seite VOR der Überschrift "Fallsituation" liegen: Titel steht auf der Seite selbst
        p1 = (starts[ci + 1] - 1) if ci + 1 < len(starts) else TOTAL_PAGES
        oral = cid.startswith("m")
        L, ix = split_case(cl, p0, p1, oral)
        cnotes: list[str] = []
        if ix["fall"] is None or ix["aufg"] is None or ix["ewh"] is None:
            cnotes.append(f"Abschnittsüberschriften unvollständig: {ix}")

        # Kopf: Titel/Themenschwerpunkte/Setting
        head_end = ix["fall"] if ix["fall"] is not None else 0
        head = lines_to_text(L[:head_end])
        themes = ""
        mth = re.search(r"Themenschwerpunkte:\s*(.*?)(?:\n\s*\n|Aufgabe:|$)", head, re.S)
        if mth:
            themes = re.sub(r"\s+", " ", mth.group(1)).strip()
        setting = ""
        ms = re.search(r"Setting:\s*(.*)", head)
        if ms:
            setting = ms.group(1).strip()
        instruction = ""
        mi = re.search(r"Aufgabe:\s*(.*?)$", head, re.S)
        if mi:
            instruction = re.sub(r"\s+", " ", mi.group(1)).strip()

        # Fallsituation
        narr_lines = L[(ix["fall"] or 0) + 1 : ix["aufg"] if ix["aufg"] is not None else ix["end"]]
        narrative_raw = lines_to_text(narr_lines)
        # Fußnote(n): letzter kurzer Absatz ohne Satzende
        paras = [x for x in re.split(r"\n\s*\n", narrative_raw) if x.strip()]
        footnote = ""
        if len(paras) >= 2 and len(paras[-1]) < 160 and not re.search(r"[.!?“”\"»]\s*$", paras[-1]):
            footnote = paras.pop().strip()
        narrative = "\n\n".join(re.sub(r"\n(?!\n)", " ", x) for x in paras)
        narrative = strip_line_numbers(narrative)

        case = {
            "id": cid, "chapterId": chap, "title": title,
            "narrative": narrative, "originalNarrative": narrative,
            "order": ci,
            "source": {"pdfPage": p0, "printedPage": printed, "endPdfPage": p1},
            "kind": "oral" if oral else "written",
        }
        if themes:
            case["themes"] = themes
        if setting:
            case["setting"] = setting
        if instruction:
            case["instruction"] = instruction
        if footnote:
            case["footnote"] = footnote

        # --- Aufgaben + Lösungen
        qs: list[dict] = []
        if not oral:
            task_lines = L[(ix["aufg"] or 0) + 1 : ix["ewh"] if ix["ewh"] is not None else ix["end"]]
            tasks = parse_tasks(task_lines, standalone_ab=p0 < 198)
            qs = written_questions(cid, chap, title, tasks, cnotes)
            ewh_lines = L[(ix["ewh"] or 0) + 1 : ix["ausw"] if ix["ausw"] is not None else ix["end"]] if ix["ewh"] is not None else []
            labels = [q["label"] for q in qs]
            mode = "mixed"
            answers, aorder, preface = parse_answers(ewh_lines, labels, mode)
            attach_answers(qs, answers, aorder, cnotes)
        else:
            qs, prep = oral_questions(cid, chap, title, L, ix, cnotes)
            case["preparation"] = prep
            ewh_lines = L[(ix["ewh"] or 0) + 1 : ix["ausw"] if ix["ausw"] is not None else ix["end"]] if ix["ewh"] is not None else []
            labels = [q["label"] for q in qs if q["label"] != "0"]
            # Zusammenfassung der Fallsituation (Frage 0) vor Kompetenzbereich-Antworten
            answers, aorder, preface = parse_answers(ewh_lines, labels, "num")
            reorder_by_headings(qs, answers, cid, cnotes)
            q0 = next((q for q in qs if q["label"] == "0"), None)
            if q0 is not None:
                txt = join_lines(preface)
                txt = re.sub(r"^Zusammenfassung der Fallsituation\s*", "", txt).strip()
                if txt:
                    q0["modelAnswer"] = {"text": txt, "status": "unverified", "sourcePage": preface[0][0] if preface else p0}
            attach_answers([q for q in qs if q["label"] != "0"], answers, aorder, cnotes)

        # Auswertung (Notenschlüssel)
        if ix["ausw"] is not None:
            case["gradingScale"] = lines_to_text(L[ix["ausw"] : ix["end"]])

        case["totalPoints"] = sum(q.get("points", 0) for q in qs if q.get("points")) or None
        case["extraction"] = {"status": "ok" if not cnotes else "review", **({"notes": cnotes} if cnotes else {})}
        for q in qs:
            order += 1
            q["order"] = order
        bank_cases.append(case)
        questions.extend(qs)
    return bank_cases, questions, notes


def written_questions(cid, chap, title, tasks, cnotes):
    out = []
    for t in tasks:
        stem = join_lines(t["stem"])
        gp = RE_GESAMT.search(stem)
        gesamt = num(gp.group(1)) if gp else None
        if t["subs"]:
            for s in t["subs"]:
                text = join_lines(s["lines"])
                out.append(make_q(cid, chap, title, f"{t['num']}{s['letter']}", text, stem, points_of(text), ab_value(s.get("ab") or t.get("ab")), s["page"], "Schriftlich", gesamt))
        else:
            out.append(make_q(cid, chap, title, str(t["num"]), stem, "", points_of(stem) if points_of(stem) else gesamt, ab_value(t.get("ab")), t["page"], "Schriftlich", gesamt))
    if not out:
        cnotes.append("Keine Aufgaben erkannt.")
    return out


def make_q(cid, chap, title, label, text, stem, points, ab, page, kind, gesamt=None):
    qtype = "table" if re.search(r"\[Tabelle:", text) else "open"
    q = {
        "id": f"{cid}-q{label}", "order": 0, "chapterId": chap, "topic": title, "caseId": cid,
        "label": label, "type": qtype, "text": text, "originalText": text,
        **({"stem": stem} if stem else {}),
        **({"points": points} if points else {}),
        **({"ab": ab} if ab else {}),
        "source": {"pdfPage": page},
        "extraction": {"status": "ok"},
        "tags": [title, kind],
    }
    notes = []
    if not points:
        notes.append("Keine Punktzahl erkannt.")
    if len(text) < 20:
        notes.append("Sehr kurzer Aufgabentext – evtl. unvollständig.")
    if notes:
        q["extraction"] = {"status": "review", "notes": notes}
    return q


def attach_answers(qs, answers, aorder, cnotes):
    by_label = {q["label"]: q for q in qs}
    pending: list[str] = []
    for lab in aorder:
        a = answers[lab]
        body = answer_body(a)
        title = a["title"]
        full = (title + "\n" + body).strip() if title and body else (title or body)
        only_header = not body.strip()
        if only_header:
            pending.append(lab)
            a["_hdr"] = title
            continue
        group = pending + [lab]
        pending = []
        for g in group:
            q = by_label.get(g)
            if q is None:
                continue
            hdr = answers[g].get("_hdr")
            text = full
            shared = [x for x in group if x != g]
            q["modelAnswer"] = {"text": text, "status": "unverified", "sourcePage": a["page"], **({"sharedWith": shared} if shared else {})}
    for lab in pending:  # Überschrift ohne Inhalt am Ende
        q = by_label.get(lab)
        if q is not None:
            q.setdefault("extraction", {"status": "review"})
            q["extraction"]["status"] = "review"
            q["extraction"].setdefault("notes", []).append("Musterlösung konnte nicht zugeordnet werden (nur Überschrift erkannt).")
    def has(q):
        return "modelAnswer" in q and q["modelAnswer"].get("text")

    for i, q in enumerate(qs):
        if "modelAnswer" not in q:
            prev = next((x for x in reversed(qs[:i]) if has(x)), None)
            nxt = next((x for x in qs[i + 1:] if has(x)), None)
            ma = {"text": "", "status": "unavailable"}
            note = "Musterlösung im Quelltext nicht eindeutig zuordenbar (Nummer/Überschrift fehlt im Text)."
            pages = [x["modelAnswer"].get("sourcePage") for x in (prev, nxt) if x is not None and x["modelAnswer"].get("sourcePage")]
            if pages:
                ma["sourcePage"] = pages[0]
                note += f" Mögliche Fundstelle: Seite {min(pages)}–{max(pages)} (Quelltext)"
                if prev is not None:
                    note += f", ggf. innerhalb der Musterlösung zu Aufgabe {prev['label']}"
                note += "."
            q["modelAnswer"] = ma
            q["extraction"] = {"status": "review", "notes": (q["extraction"].get("notes") or []) + [note]}


def reorder_by_headings(qs, answers, cid, cnotes):
    """Bei vertauschter Spaltenreihenfolge der Quelle: Fragen anhand der Überschriften der Musterlösung zuordnen."""
    import numpy as np
    from scipy.optimize import linear_sum_assignment

    items = [q for q in qs if q["label"] != "0"]
    labs = sorted(answers, key=lambda x: int(re.sub(r"\D", "", x) or 0))
    if len(items) != len(labs) or len(items) < 3:
        return
    def toks(t):
        g = set()
        for w in re.findall(r"[A-Za-zÄÖÜäöüß]{5,}", t.lower()):
            g |= {w[k:k + 5] for k in range(len(w) - 4)}
        return g
    S = np.zeros((len(items), len(labs)))
    for i, q in enumerate(items):
        tq = toks(q["text"])
        for j, lab in enumerate(labs):
            ta = toks(answers[lab]["title"])
            S[i, j] = len(tq & ta) / (1 + 0.05 * len(ta)) - 0.4 * abs(i - j)
    r, c = linear_sum_assignment(-S)
    ident = sum(S[i, i] for i in range(len(items)))
    best = sum(S[i, j] for i, j in zip(r, c))
    if best <= ident + 1.0:
        return
    for i, j in zip(r, c):
        items[i]["label"] = labs[j]
        items[i]["id"] = f"{cid}-q{labs[j]}"
        items[i].setdefault("extraction", {"status": "review"})
        items[i]["extraction"]["status"] = "review"
        items[i]["extraction"].setdefault("notes", []).append("Reihenfolge im Quelltext vertauscht – Nummer anhand der Überschrift der Musterlösung zugeordnet.")
    cnotes.append("Fragenreihenfolge im Quelltext vertauscht; Zuordnung über Überschriften der Musterlösung.")
    qs.sort(key=lambda q: (q["label"] != "0", int(q["label"]) if q["label"].isdigit() else 0))


def oral_questions(cid, chap, title, L, ix, cnotes):
    """Mündliche Fälle: Vorbereitung (Aufgabe 1/2), Prüfungsgespräch mit nummerierten Fragen je Kompetenzbereich."""
    out = []
    prep_lines = L[(ix["aufg"] or 0) : ix["pg"] if ix["pg"] is not None else ix["ewh"] or ix["end"]]
    prep = lines_to_text(prep_lines)
    # Frage 0: Fallanalyse
    m1 = re.search(r"^1\s+(Lesen Sie.*?)(?=^\s*2\s+Folgende|\Z)", prep, re.S | re.M)
    q0text = re.sub(r"\s*\n\s*", "\n", m1.group(1)).strip() if m1 else "Lesen Sie die Fallsituation und machen Sie sich Notizen zu den Situationsmerkmalen."
    q0 = make_q(cid, chap, title, "0", q0text, "", None, None, prep_lines[0][0] if prep_lines else 0, "Mündlich")
    q0["tags"].append("Fallanalyse")
    q0["extraction"] = {"status": "ok"}
    out.append(q0)
    region = L[(ix["aufg"] or 0) : ix["ewh"] if ix["ewh"] is not None else ix["end"]]
    start = next((i for i, (_, r) in enumerate(region) if RE_KB.match(r.strip())), None)
    pg_lines = region[start:] if start is not None else []
    kb = None
    expected = 1
    cur = None
    bare = False
    sections: list[dict] = []  # {"kb": .., "qs": [(cur, numbered)]}
    sec = None
    prev_blank = True
    skip_par = False
    hint = False
    for page, raw in pg_lines:
        ln = raw.strip()
        if not ln:
            prev_blank = True
            skip_par = False
            continue
        was_blank, prev_blank = prev_blank, False
        mk = RE_KB.match(ln)
        if mk:
            kb = mk.group(1)
            sec = {"kb": kb, "qs": []}
            hint = False
            sections.append(sec)
            cur = None
            continue
        if ln.startswith("HINWEIS"):
            hint = True
        if was_blank:
            skip_par = bool(RE_ORAL_INTRO.match(ln))
        if skip_par or hint:
            continue
        if re.fullmatch(r"\d{1,2}", ln):
            bare = True
            continue
        mt = RE_ORAL_NUM.match(ln)
        if mt and int(mt.group(1)) == expected and kb is not None:
            cur = {"label": str(expected), "kb": kb, "lines": [(page, ln[mt.end():])], "page": page}
            out.append(cur)
            sec["qs"].append((cur, True))
            expected += 1
            continue
        if bare and was_blank and re.match(r"[A-ZÄÖÜ„\"]", ln) and kb is not None:
            cur = {"label": str(expected), "kb": kb, "lines": [(page, ln)], "page": page}
            out.append(cur)
            sec["qs"].append((cur, False))
            expected += 1
            continue
        if cur is not None:
            if len(ln) > 2 or not cur["lines"]:
                cur["lines"].append((page, ln))
    # Kompetenzbereich-Überschriften ohne Fragen: gehören zu den unnummerierten Fragen eines gemischten Abschnitts
    empties = [x["kb"] for x in sections if not x["qs"]]
    for x in sections:
        if empties and x["qs"] and any(n for _, n in x["qs"]) and any(not n for _, n in x["qs"]):
            tail = [c for c, n in x["qs"] if not n]
            k = empties.pop(0)
            for c in tail:
                c["kb"] = k
    final = [out[0]]
    for c in out[1:]:
        raw = join_lines(c["lines"])
        text = re.sub(r"\s*\n\s*", " ", raw).strip()
        abm = [g for g in RE_AB.findall(text)]
        ab = ab_value(abm)
        text_clean = re.sub(r"\s*\((?:→|->|-»|—>|-\s*>)?\s*AB\s*(?:III|II|I)\s*\)", "", text).strip()
        q = make_q(cid, chap, title, c["label"], text_clean, "", None, ab, c["page"], "Mündlich")
        q["tags"].append(f"Kompetenzbereich {c['kb']}")
        q["kb"] = c["kb"]
        q["extraction"] = {"status": "ok"}
        final.append(q)
    if len(final) < 3:
        cnotes.append("Keine Prüfungsfragen erkannt.")
    return final, prep


# ---------------------------------------------------------------- Hauptprogramm
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", default=os.path.join(os.path.dirname(os.path.abspath(__file__)), "source"))
    ap.add_argument("--out", required=True)
    ap.add_argument("--dump", default=None, help="optional: bereinigte Seiten als Textdatei ausgeben")
    ap.add_argument("--debug", action="store_true", help="zusätzlich _debug.json schreiben")
    args = ap.parse_args()
    os.makedirs(args.out, exist_ok=True)

    raw = T.load_unified(args.src)
    cl, fixer = T.clean_all(raw)
    if args.dump:
        with open(args.dump, "w", encoding="utf-8") as f:
            for p in sorted(cl):
                f.write(f"\n===== SEITE {p} =====\n{cl[p]}\n")
    cases, questions, notes = build(cl, raw)

    # --- Textqualität je Seite: Anteil der Wörter (≥4 Buchstaben), die im Lexikon der sauberen Quellseiten 1–197 vorkommen
    def quality(txt: str) -> float:
        ws = [w.lower() for w in T.WORD.findall(txt) if len(w) >= 4]
        if not ws:
            return 100.0
        return round(100.0 * sum(1 for w in ws if w in fixer.lex) / len(ws), 1)

    qual = {p: quality(t) for p, t in cl.items()}

    # --- Kapitel
    def find_chapter_page(number: str, title: str, printed: int) -> int:
        pat = re.compile(r"^\s*" + re.escape(number) + r"\s+" + re.escape(title[:18]), re.M)
        lo = max(1, printed - 8)
        for p in range(lo, min(T_PAGES, printed + 8) + 1):
            if p in cl and p > 12 and pat.search(cl[p]):
                return p
        return min(max(1, printed), T_PAGES)

    T_PAGES = max(cl)
    chapters = []
    anchors: dict[int, int] = {}
    for i, (cid, num_, title, parent, printed) in enumerate(CHAPTERS):
        pg = find_chapter_page(num_, title, printed)
        anchors[pg] = printed
        ch = {"id": cid, "number": num_, "title": title, "order": i, "source": {"pdfPage": pg, "printedPage": printed}}
        if parent:
            ch["parentId"] = parent
        chapters.append(ch)
    for c in cases:
        anchors.setdefault(c["source"]["pdfPage"], c["source"]["printedPage"])

    for c in cases:
        c["extraction"] = {"status": c["extraction"]["status"], "confidence": qual.get(c["source"]["pdfPage"], 100.0), **({"notes": c["extraction"]["notes"]} if c["extraction"].get("notes") else {})}
    n_ans = 0
    for q in questions:
        pg = q["source"]["pdfPage"]
        conf = qual.get(pg, 100.0)
        ex = q["extraction"]
        ex["confidence"] = conf
        if conf < 60 and ex["status"] == "ok":
            ex["status"] = "review"
            ex.setdefault("notes", []).append("Textqualität der Quellseite geringer (Texterkennungsfehler möglich) – bitte mit dem Buch abgleichen.")
        q["source"] = {"pdfPage": pg, **({"printedPage": anchors[pg]} if pg in anchors else {})}
        if q["modelAnswer"].get("text"):
            n_ans += 1

    pages_info, pages_txt = [], []
    for p in sorted(cl):
        txt = cl[p]
        st = "empty" if len(txt) < 30 else ("low-confidence" if qual[p] < 60 else "ok")
        pr = anchors.get(p)
        pages_info.append({"pdfPage": p, **({"printedPage": pr} if pr else {}), "chars": len(txt), "meanConfidence": qual[p], "status": st})
        pages_txt.append({"pdfPage": p, **({"printedPage": pr} if pr else {}), "meanConfidence": qual[p], "text": txt})

    qtypes: dict[str, int] = {}
    for q in questions:
        qtypes[q["type"]] = qtypes.get(q["type"], 0) + 1
    review_pages = sorted({q["source"]["pdfPage"] for q in questions if q["extraction"]["status"] == "review"})
    report = {
        "generatedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "sourceFile": "Buchtext (2 Textdateien, Seiten 1–379 vereinheitlicht)",
        "pagesInPdf": len(cl),
        "pagesProcessed": len(cl),
        "printedPageOffset": None,
        "ocr": {"engine": "bereitgestellte Textebene (bereinigt)", "language": "deu", "dpi": 0, "textLayerPresent": True},
        "chapters": len(chapters),
        "cases": len(cases),
        "questions": len(questions),
        "questionTypes": qtypes,
        "questionsWithModelAnswer": n_ans,
        "questionsVerified": 0,
        "pagesNeedingReview": review_pages,
        "lowConfidencePages": [i["pdfPage"] for i in pages_info if i["status"] == "low-confidence"],
        "emptyPages": [i["pdfPage"] for i in pages_info if i["status"] == "empty"],
        "errors": [],
        "notes": notes + [
            "Quelle ist eine Textebene; Seiten ab 198 (Teil 2) haben mehr Erkennungsfehler als Seiten 1–197. Es wurden nur formale Korrekturen vorgenommen (Kopfzeilen, Silbentrennung, Tabellen, eindeutige Buchstabenfehler).",
            "Seitenzahlen: 'Seite' = einheitliche Zählung der Textdateien (1–379); die gedruckte Buchseite ist nur an Kapitel-/Fallanfängen bekannt.",
            "Alle Musterlösungen sind 'unverified' (automatisch zugeordnet), bis sie im Admin-Bereich geprüft wurden.",
            "Fehlt im Quelltext die Nummer/Überschrift einer Musterlösung, ist sie 'unavailable' und mit Hinweis auf die mögliche Fundstelle markiert.",
        ],
        "coverageVerified": False,
    }
    bank = {"version": 2, "report": report, "chapters": chapters, "cases": cases, "questions": questions, "pages": pages_info}
    json.dump(bank, open(os.path.join(args.out, "bank.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    json.dump(pages_txt, open(os.path.join(args.out, "pages.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    print(json.dumps({"cases": len(cases), "questions": len(questions), "withAnswer": n_ans, "review": len(review_pages), "unavailable": sum(1 for q in questions if q["modelAnswer"]["status"] == "unavailable")}, ensure_ascii=False))


if __name__ == "__main__":
    main()
