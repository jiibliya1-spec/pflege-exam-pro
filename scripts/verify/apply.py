#!/usr/bin/env python3
"""Wendet geprüfte Fall-Dateien (scripts/verify/cases/*.json) auf public/data/bank.json an.
Jede Datei wurde Seite für Seite mit dem Buch (Bildseiten) abgeglichen.
Aufruf: python3 scripts/verify/apply.py [fall ...]"""
import json, os, re, sys, glob
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BANK = os.path.join(ROOT, "public/data/bank.json")
b = json.load(open(BANK, encoding="utf-8"))
want = set(sys.argv[1:])
files = sorted(glob.glob(os.path.join(ROOT, "scripts/verify/cases/*.json")))
for f in files:
    d = json.load(open(f, encoding="utf-8"))
    cid = d["case"]
    if want and cid not in want: continue
    qs = [q for q in b["questions"] if q.get("caseId") == cid]
    byl = {q["label"]: q for q in qs}
    tot = 0
    for lab, v in d["q"].items():
        q = byl.get(lab)
        if q is None and v.get("clone"):
            import copy
            base = byl[v["clone"]]
            q = copy.deepcopy(base)
            q["label"] = lab; q["id"] = f"{cid}-q{lab}"; q["type"] = v.get("type", "open")
            q["order"] = base["order"] + 1
            q["source"] = {"pdfPage": d["pages"]["q"][1]}
            for x in b["questions"]:
                if x["order"] > base["order"]: x["order"] += 1
            b["questions"].insert(b["questions"].index(base) + 1, q)
            byl[lab] = q
            if v.get("kb"):
                old_kb = q.get("kb")
                q["kb"] = v["kb"]
                q["tags"] = [("Kompetenzbereich " + v["kb"]) if t == "Kompetenzbereich " + str(old_kb) else t for t in q.get("tags", [])]
            if v.get("ab"): q["ab"] = v["ab"]
        if q is None:
            raise SystemExit(f"{cid}: Frage {lab} fehlt in bank.json")
        tail = ""
        m = re.search(r"\n\n(\[Tabelle:.*\])\s*$", q["text"], re.S)
        if m and q["type"] == "table": tail = "\n\n" + m.group(1)
        if v.get("tail") is not None: tail = "\n\n" + v["tail"] if v["tail"] else ""
        q["text"] = v["t"] + tail
        q["originalText"] = q["text"]
        if v.get("p") is not None: q["points"] = float(v["p"])
        else: q.pop("points", None)
        tot += v.get("p") or 0
        main = re.match(r"\d+", lab).group(0)
        if main in d.get("stems", {}): q["stem"] = d["stems"][main]
        q.pop("placeholder", None)
        q["extraction"] = {"status": "approved", "confidence": 100.0}
        ap = d["pages"]["a"][0]
        q["modelAnswer"] = {"text": v["a"], "status": "unverified", "sourcePage": ap}
    extra = set(byl) - set(d["q"])
    if extra: raise SystemExit(f"{cid}: Fragen nicht in Datei: {sorted(extra)}")
    if d.get("total") is not None and abs(tot - d["total"]) > 1e-6:
        raise SystemExit(f"{cid}: Punktesumme {tot} != {d['total']}")
    for c in b["cases"]:
        if c["id"] == cid:
            if d.get("total") is not None: c["totalPoints"] = float(d["total"])
            for ent in d.get("narr", []):
                old, new = ent[0], ent[1]
                allow_many = len(ent) > 2 and ent[2] == "all"
                if c["narrative"].count(old) == 0:
                    assert new in c["narrative"] or allow_many, (cid, old)
                    continue  # schon angewendet
                assert allow_many or c["narrative"].count(old) == 1, (cid, old, c["narrative"].count(old))
                c["narrative"] = c["narrative"].replace(old, new)
            if d.get("narr_footnote") and d["narr_footnote"] not in c["narrative"]:
                c["narrative"] = c["narrative"].rstrip() + "\n\n" + d["narr_footnote"]
            c["originalNarrative"] = c["narrative"]
            c["totalPoints"] = float(tot) if d.get("total") is not None else c.get("totalPoints")
            c["extraction"] = {**c.get("extraction", {}), "status": "approved", "notes": []}
    print("OK", cid, len(d["q"]), "Fragen,", tot, "Punkte")
json.dump(b, open(BANK, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
