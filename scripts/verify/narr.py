#!/usr/bin/env python3
"""Vergleicht die Fallsituation in bank.json mit der Textebene der Buchseite(n). Nur Unterschiede werden gezeigt."""
import json, re, subprocess, sys, difflib
P = "/mnt/user-data/uploads/Cornelsen_Pruefungstraining.pdf"
cid, p1, p2 = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
b = json.load(open("public/data/bank.json", encoding="utf-8"))
c = next(x for x in b["cases"] if x["id"] == cid)
raw = subprocess.run(["pdftotext", "-f", str(p1), "-l", str(p2), P, "-"], capture_output=True, text=True).stdout
i = raw.find("Fallsituation:")
t = raw[i + len("Fallsituation:"):] if i >= 0 else raw
t = re.sub(r"-\n(?=[a-zäöüß])", "", t)
t = re.sub(r"(?m)^\s*\d{1,3}\s*$", " ", t)
t = re.sub(r"(?<=\S) (\d{1,2}) (?=[A-ZÄÖÜa-zäöü„])", " ", t)
def norm(s):
    s = re.sub(r"[“”„\"]", '"', s)
    s = s.replace("–", "-").replace("’", "'")
    s = re.sub(r"(?<=[a-zäöüß])(\d{1,2})(?= [a-zäöü])", "", s)  # Zeilennummer im Wort
    s = re.sub(r"(?<=[a-zäöüß]) ?(\d{1,2}) (?=[a-zäöüß-])", " ", s)
    s = re.sub(r"(?<=\S)- (?=[a-zäöü])", "", s)
    return s
tok = lambda s: re.findall(r"\S+", norm(s))
a, bb = tok(c["narrative"]), tok(t)
sm = difflib.SequenceMatcher(None, a, bb, autojunk=False)
n = 0
for op, i1, i2, j1, j2 in sm.get_opcodes():
    if op == "equal": continue
    n += 1
    print(f"{op:7} BANK: {' '.join(a[max(0,i1-2):i2+2])!r}\n        PDF : {' '.join(bb[max(0,j1-2):j2+2])!r}")
print("Unterschiede:", n, "| Wörter bank/pdf:", len(a), len(bb))
