#!/usr/bin/env python3
"""show.py <von> <bis> [layout]: Textebene der Buchseiten; show.py bank <fall>: aktuelle Bank-Fragen."""
import json, subprocess, sys
P = "/mnt/user-data/uploads/Cornelsen_Pruefungstraining.pdf"
if sys.argv[1] == "bank":
    b = json.load(open("public/data/bank.json", encoding="utf-8"))
    for q in b["questions"]:
        if q.get("caseId") == sys.argv[2]:
            print(f"--- {q['label']} [{q['type']}] {q.get('points')}P | {q['extraction']['status']} | stem: {(q.get('stem') or '')[:60]}\n{q['text']}")
else:
    a, z = int(sys.argv[1]), int(sys.argv[2])
    for p in range(a, z + 1):
        args = ["pdftotext", "-f", str(p), "-l", str(p)] + (["-layout"] if len(sys.argv) > 3 else []) + [P, "-"]
        print(f"=========== SEITE {p}\n" + subprocess.run(args, capture_output=True, text=True).stdout)
