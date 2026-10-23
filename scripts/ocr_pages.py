#!/usr/bin/env python3
"""Lädt Tesseract-TSV-Dateien (eine je PDF-Seite) und liefert strukturierte Seiten.

Jede Zeile: {text, top, left, bottom, conf}. Die Seitenhöhe wird aus der größten Wortunterkante geschätzt.
"""
import csv, os, re, sys, glob

def load_page(path):
    lines = {}
    H = 0
    W = 0
    with open(path, newline='', encoding='utf-8') as f:
        rd = csv.DictReader(f, delimiter='\t', quoting=csv.QUOTE_NONE)
        for r in rd:
            try:
                lvl = int(r['level'])
            except Exception:
                continue
            if lvl == 1:
                H = int(r['height']); W = int(r['width'])
            if lvl != 5:
                continue
            t = (r['text'] or '').strip()
            if not t:
                continue
            k = (r['block_num'], r['par_num'], r['line_num'])
            l = lines.setdefault(k, {'words': [], 'top': 10**9, 'left': 10**9, 'bottom': 0, 'right': 0})
            l['words'].append((t, float(r['conf'])))
            top = int(r['top']); left = int(r['left'])
            l['top'] = min(l['top'], top); l['left'] = min(l['left'], left)
            l['bottom'] = max(l['bottom'], top + int(r['height']))
            l['right'] = max(l['right'], left + int(r['width']))
    out = []
    for k, l in lines.items():
        ws = l['words']
        out.append({
            'text': ' '.join(w for w, _ in ws),
            'conf': sum(c for _, c in ws) / len(ws),
            'top': l['top'], 'left': l['left'], 'bottom': l['bottom'], 'right': l['right'],
            'nwords': len(ws),
        })
    out.sort(key=lambda x: (x['top'] // 12, x['left']))  # grobe Leserichtung
    return {'height': H, 'width': W, 'lines': out}

def page_no(path):
    return int(re.search(r'p(\d+)\.tsv$', path).group(1))

if __name__ == '__main__':
    d = sys.argv[1]
    for p in sorted(glob.glob(os.path.join(d, 'p*.tsv')))[int(sys.argv[2]):int(sys.argv[3])]:
        pg = load_page(p)
        print('PAGE', page_no(p), 'H', pg['height'], 'W', pg['width'])
        for l in pg['lines'][:4]: print('  TOP', l['top'], round(l['conf']), l['text'][:70])
        for l in pg['lines'][-3:]: print('  BOT', l['top'], round(l['conf']), l['text'][:70])
