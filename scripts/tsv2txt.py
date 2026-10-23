#!/usr/bin/env python3
"""Convert a tesseract TSV (level 5 word rows) to plain text lines + mean confidence."""
import csv, sys, collections
def load(path):
    lines = collections.OrderedDict()
    with open(path, newline='', encoding='utf-8') as f:
        rd = csv.DictReader(f, delimiter='\t', quoting=csv.QUOTE_NONE)
        for r in rd:
            if r['level'] != '5' or not r['text'].strip(): continue
            k = (r['block_num'], r['par_num'], r['line_num'])
            lines.setdefault(k, []).append((r['text'], float(r['conf'])))
    out = []
    for k, ws in lines.items():
        out.append((' '.join(w for w, _ in ws), sum(c for _, c in ws)/len(ws)))
    return out
if __name__ == '__main__':
    for t, c in load(sys.argv[1]): print(t)
