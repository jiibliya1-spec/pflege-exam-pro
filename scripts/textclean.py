"""Bereinigung der Textquellen (Seiten 1–379) für den Import.

Die beiden Quelldateien enthalten je Seite einen Marker ``### **الصفحة N**``.
Datei 1 deckt die Seiten 1–197 ab, Datei 2 (Marker 198–384) beginnt mit 5 Seiten Überlappung;
ab Marker 203 gilt: einheitliche Seite = Marker − 5.

Es werden nur *formale* Korrekturen vorgenommen (Kopf-/Fußzeilen, Silbentrennung, Tabellen-Markup,
eindeutige Großbuchstaben-Artefakte wie ``deM`` → ``dem``). Inhalte werden nie ergänzt oder umformuliert.
"""
from __future__ import annotations

import collections
import html
import os
import re

MARKER = re.compile(r"### \*\*الصفحة (\d+)[^\n]*\*\*")


def split_pages(text: str) -> dict[int, str]:
    parts = MARKER.split(text)
    return {int(parts[i]): parts[i + 1] for i in range(1, len(parts), 2)}


def load_unified(src_dir: str) -> dict[int, str]:
    """Einheitliche Seitenzählung 1..379 aus den zwei Quelldateien."""
    a = split_pages(open(os.path.join(src_dir, "part1_seiten_1-197.txt"), encoding="utf-8").read())
    b = split_pages(open(os.path.join(src_dir, "part2_seiten_198-384.txt"), encoding="utf-8").read())
    pages = dict(a)
    for label, txt in b.items():
        if label >= 203:  # 198–202 sind Doppelungen von 193–197
            pages[label - 5] = txt
    return pages


# ---------------------------------------------------------------- Tabellen / Symbole
TABLE = re.compile(r"<table>(.*?)</table>", re.S)


def _table(m: re.Match) -> str:
    inner = m.group(1)
    if "□" not in inner and "<br>" not in inner:
        # Aufgabentabelle (Leer-/Rasterzellen): Zellen mit " | ", Zeilen mit " / " trennen
        rows = []
        for tr in re.findall(r"<tr[^>]*>(.*?)</tr>", inner, re.S) or [inner]:
            cells = [re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", c)).strip() for c in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", tr, re.S)]
            cells = [c for c in cells if c]
            if cells:
                rows.append(" | ".join(cells))
        if not rows:  # Tabelle ohne Zellen-Markup: Rohtext, Spalten an ")Großbuchstabe" trennen
            raw = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", inner)).strip()
            raw = re.sub(r"(\))([A-ZÄÖÜ])", r"\1 | \2", raw)
            rows = [raw]
        return "\n[Tabelle: " + " / ".join(rows) + "]\n"
    inner = re.sub(r"<td[^>]*>", "", inner)
    inner = inner.replace("</td>", "")
    if "□" in inner or "<br>" in inner:
        inner = inner.replace("<br>", "\n").replace("□", "\n□")
        inner = re.sub(r"\n{2,}", "\n", inner).strip()
        return "\n\n⟦Tabelle⟧\n" + inner + "\n⟦/Tabelle⟧\n\n"
    return "\n[Tabelle: " + re.sub(r"\s+", " ", inner).strip() + "]\n"


HEADER_LINES = [
    r"(?:\d(?:\.\d+)?\s+)?Der (?:erste|zweite|dritte) Prüfungstag",
    r"\d\s*[-=■•·.]?\s*Die schriftliche Prüfung",
    r"\d\s*[-=■•·.]?\s*Die mündliche Prüfung",
    r"\d\s*[-=■•·.]?\s*Die mündlichen? Prüfungsfälle",
    r"\d(?:\.\d+)?\s+Die mündlichen Prüf\w+",
    r"\d(?:\.\d+)?\s+Einführung",
    r"\d\s*[-=■•·.]?\s*Meine Prüfungstraining\w*",
    r"\d\s+Auf die Prüfungen, fertig, los!",
    r"_{2,}\s*/\s*\d+\s*P\.?",
    r"/\s*\d+\s*P\.?",
]
HEADER_RE = re.compile(r"^(?:" + "|".join(HEADER_LINES) + r")\s*$")
MARGIN_NUM = re.compile(r"^\d{1,3}$")


def _drop_noise_lines(text: str) -> str:
    out = []
    for ln in text.split("\n"):
        s = ln.strip()
        if HEADER_RE.match(s):
            continue
        if MARGIN_NUM.match(s) and (int(s) % 5 == 0 or int(s) >= 100):
            continue
        out.append(ln)
    return "\n".join(out)


# ---------------------------------------------------------------- Silbentrennung
KEEP_AFTER_HYPHEN = {"und", "oder", "bzw", "sowie", "bis", "bzw.", "u.", "/", "sowie"}


def dehyphenate(text: str) -> str:
    # 1) Trennstrich + Zeilenumbruch / Leerraum: "Pflege- situationen" -> "Pflegesituationen"
    def join(m: re.Match) -> str:
        nxt = m.group(2)
        if nxt.lower() in KEEP_AFTER_HYPHEN:
            return m.group(0)
        return m.group(1) + nxt

    text = re.sub(r"([A-Za-zÄÖÜäöüß])-[ \t]*\n?[ \t]*([a-zäöüß][a-zäöüß]*)", lambda m: join(m) if True else m.group(0), text)
    return text


# ---------------------------------------------------------------- Großbuchstaben-Artefakte
WORD = re.compile(r"[A-Za-zÄÖÜäöüß]+")



# Typische Erkennungsverwechslungen der Textebene von Teil 2 – bewusst nur wenige, zuverlässige Regeln.
def _cands(w: str):
    """Kandidaten (kleingeschrieben) für ein unbekanntes Wort; jede Regel ändert genau eine Stelle."""
    low = w.lower()
    if low[0] == "m":  # Missen → Wissen, Menn → Wenn, Munsch → Wunsch
        yield "w" + low[1:]
    if low[0] == "k":  # kecht → Recht, kisiko → Risiko
        yield "r" + low[1:]
    if low[0] == "b" and len(low) <= 4:  # bas → das
        yield "d" + low[1:]
    for i, ch in enumerate(low):  # cinhalten → einhalten (c ohne ch/ck/sc-Kontext ist im Deutschen selten)
        if ch == "c" and low[i - 1 : i] not in ("s", "e") and low[i + 1 : i + 2] not in ("h", "k"):
            yield low[:i] + "e" + low[i + 1 :]
    for i, ch in enumerate(low):  # Umlautverlust: fuhren → führen, Losung → Lösung, Arzte → Ärzte
        if ch in "uoa":
            yield low[:i] + {"u": "ü", "o": "ö", "a": "ä"}[ch] + low[i + 1 :]
    for a, b in (("rn", "m"), ("vv", "w")):
        j = low.find(a)
        if j >= 0:
            yield low[:j] + b + low[j + 2 :]


DENY = {"mangel", "klaren", "kegel", "mundbehandlung", "mundversorgung", "märe"}  # gültige deutsche Wörter – nie automatisch ändern


class Fixer:
    """Korrigiert OCR-Artefakte konservativ mithilfe eines Lexikons aus dem sauberen Teil der Quelle."""

    def __init__(self, clean_texts: list[str], noisy_texts: list[str] | None = None):
        cnt: collections.Counter[str] = collections.Counter()
        self.protect: set[str] = set()
        for t in clean_texts:
            for w in WORD.findall(t):
                if self._mixed(w):
                    self.protect.add(w)
                else:
                    cnt[w.lower()] += 1
        self.lex = {w for w, c in cnt.items() if c >= 1}
        self.freq = cnt
        self.forms: dict[str, collections.Counter] = collections.defaultdict(collections.Counter)
        for t in clean_texts:
            for w in WORD.findall(t):
                self.forms[w.lower()][w] += 1
        self.stats = collections.Counter()
        ncnt: collections.Counter[str] = collections.Counter()
        for t in noisy_texts or []:
            ncnt.update(WORD.findall(t))
        # Wörter, die im unsauberen Teil sehr oft identisch vorkommen, sind meist Namen/echte Wörter
        self.protect |= {w for w, c in ncnt.items() if c >= 10 and w[0].isupper()}
        self.changes: list[tuple[str, str]] = []
        self.line_start = False

    @staticmethod
    def _mixed(w: str) -> bool:
        return len(w) > 1 and any(c.islower() for c in w) and any(c.isupper() for c in w[1:])

    def fix_word(self, w: str) -> str:
        if w in self.protect:
            return w
        if self._mixed(w):
            cand = w[0] + w[1:].lower()
            extra_upper = {c for c in w[1:] if c.isupper()}
            if cand.lower() in self.lex or extra_upper <= {"M", "O", "K", "H", "Ö"} and len(w) > 3:
                # Wortanfang klein, wenn das Original klein begann
                self.stats["case"] += 1
                return cand
            return w
        low = w.lower()
        if low not in self.lex and len(w) > 3:
            for old, new in (("w", "m"), ("ß", "ss")):
                if old in low:
                    c2 = low.replace(old, new)
                    if c2 in self.lex:
                        self.stats[old + new] += 1
                        return c2 if w.islower() else c2[0].upper() + c2[1:]
        # Einzelzeichen-Verwechslungen: nur, wenn das Wort unbekannt ist und genau ein Lexikonwort in Frage kommt
        if low not in self.lex and low not in DENY and len(w) >= 4 and w.isalpha() and w not in self.protect:
            found = {}
            for c in _cands(low):
                if c in self.lex and self.freq[c] >= 3:
                    found[c] = self.freq[c]
            if len(found) >= 1:
                best = max(found.items(), key=lambda kv: kv[1])
                # bei mehreren Kandidaten nur, wenn einer klar häufiger ist
                others = [v for k, v in found.items() if k != best[0]]
                if not others or best[1] >= 5 * max(others):
                    form = self.forms[best[0]].most_common(1)[0][0]
                    if w[0].isupper() or self.line_start:
                        form = form[0].upper() + form[1:]
                    elif w[0].islower() and form[0].isupper() and not self.forms[best[0]].get(best[0]):
                        pass
                    self.stats["conf"] += 1
                    self.changes.append((w, form))
                    return form
        return w

    def fix(self, text: str) -> str:
        text = re.sub(r"\bmax\. go Minuten", "max. 30 Minuten", text)
        text = re.sub(r"\bu m\b", "um", text)
        text = re.sub(r"\bzu m\b", "zum", text)
        text = re.sub(r"\bz\.u m\b", "zum", text)
        def rep(m: re.Match) -> str:
            before = text[max(0, m.start() - 3) : m.start()]
            self.line_start = (not before.strip(" •–-")) or before.rstrip().endswith((".", "!", "?", ":", "\n")) or "\n" in before
            return self.fix_word(m.group(0))

        return WORD.sub(rep, text)


# ---------------------------------------------------------------- Gesamtreinigung
def clean_page(raw: str, fixer: Fixer | None = None, aggressive: bool = False) -> str:
    t = html.unescape(html.unescape(raw.replace("\r", "")))
    t = t.replace("\\(\\rightarrow\\)", "→").replace("\\rightarrow", "→")
    t = TABLE.sub(_table, t)
    t = re.sub(r"^(?:Q|IQ|\|)\s*HINWEIS", "HINWEIS", t, flags=re.M)
    t = re.sub(r"^!\s*HINWEIS", "HINWEIS", t, flags=re.M)
    t = _drop_noise_lines(t)
    t = t.replace("□", "•")
    t = re.sub(r"^[OQ○◦]\s+(?=\S)", "– ", t, flags=re.M) if aggressive else t
    t = dehyphenate(t)
    if fixer is not None and aggressive:
        t = fixer.fix(t)
    t = re.sub(r"[ \t]+\n", "\n", t)
    t = re.sub(r"[ \t]{2,}", " ", t)
    t = re.sub(r"\n{3,}", "\n\n", t)
    return t.strip()


def clean_all(pages: dict[int, str]) -> tuple[dict[int, str], Fixer]:
    # Lexikon aus dem sauberen Teil (Seiten 1–197)
    base = {p: clean_page(t) for p, t in pages.items() if p <= 197}
    fixer = Fixer(list(base.values()), [t for p, t in pages.items() if p >= 198])
    out: dict[int, str] = {}
    for p, t in pages.items():
        out[p] = clean_page(t, fixer, aggressive=p >= 198)
    return out, fixer
