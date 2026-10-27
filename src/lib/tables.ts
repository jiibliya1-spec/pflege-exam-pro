/**
 * Tabellen aus dem Buchtext.
 *
 * Der OCR-Text liefert Tabellen nur verflacht ("[Tabelle: Kopf | Kopf | 12345]" bei Aufgaben,
 * "⟦Tabelle⟧ … ⟦/Tabelle⟧" bei Musterlösungen). Diese Funktionen rekonstruieren daraus Tabellen –
 * aber nur, wenn die Struktur eindeutig ist. Sonst geben sie null zurück und die Oberfläche zeigt
 * den Originaltext unverändert. Der Inhalt wird nie verändert oder ergänzt, nur anders angeordnet.
 */

export interface QuestionTable {
  headers: string[];
  /** Zeilenbezeichner (z. B. "1.", "S", "P:"); leer = Anzahl unbekannt */
  rowLabels: string[];
}

export interface AnswerTable {
  headers: string[];
  rows: string[][];
  /** Wie die Zeilen erkannt wurden (für Transparenz in der Oberfläche) */
  mode: "nummeriert" | "buchstaben" | "paare";
}

const JE = /\((?:je )?[\d,.]+ ?P\.?\)/g;

/** Zeilenmarken am Ende einer Aufgabentabelle: 12345 | 1.2.3. | P:E:S:R: | S =12B =34 */
function parseTail(tail: string): string[] | null {
  const t = tail.trim();
  if (!t) return null;
  if (/^(\d+\.)+$/.test(t)) return t.match(/\d+\./g)!;
  if (/^([A-Za-zÄÖÜ]:)+$/.test(t)) return t.match(/[A-Za-zÄÖÜ]:/g)!;
  if (/^(?:[A-Z] =\d+)+$/.test(t)) return [...t.matchAll(/([A-Z]) =\d+/g)].map((m) => m[1]);
  if (/^\d+$/.test(t)) {
    for (let n = 2; n <= 20; n++) {
      let s = "";
      for (let i = 1; i <= n; i++) s += i;
      if (s === t) return Array.from({ length: n }, (_, i) => `${i + 1}.`);
      if (s.length > t.length) break;
    }
  }
  return null;
}

function headerLike(part: string): boolean {
  const p = part.trim();
  if (!p || p.length > 140) return false;
  if (/[a-zäöüß][A-ZÄÖÜ]/.test(p)) return false; // zusammengeklebte Überschriften
  if (/\d/.test(p.replace(JE, ""))) return false;
  return true;
}

/** Trennt eine am Textende angeklebte Zeilenmarkierung ab: "Erklärung (je 2 P.)1.2.3." */
function splitGluedTail(part: string): { head: string; labels: string[] | null } {
  const whole = parseTail(part);
  if (whole) return { head: "", labels: whole };
  const m = /((?:\d+\.)+|(?:[A-Za-zÄÖÜ]:)+|(?:\d+-)+|(?:\d+(?=\d)|\d)+)$/.exec(part.trim());
  if (!m) return { head: part, labels: null };
  const tail = m[1];
  const head = part.trim().slice(0, part.trim().length - tail.length);
  if (/^(\d+[-·])+$/.test(tail)) return { head, labels: tail.match(/\d+/g)!.map((n) => `${n}.`) };
  // Ziffernfolge: längster passender Suffix 1,2,3 … (nicht an eine Zahl im Text anhängen)
  if (/^\d+$/.test(tail) && !/\d$/.test(head)) {
    const labels = parseTail(tail);
    if (labels) return { head, labels };
    return { head: part, labels: null };
  }
  const labels = parseTail(tail);
  return labels ? { head, labels } : { head: part, labels: null };
}

export function parseQuestionTable(inner: string): QuestionTable | null {
  const parts = inner.split("|").map((p) => p.trim());
  if (!parts.length || parts.every((p) => !p)) return null;
  const { head, labels } = splitGluedTail(parts[parts.length - 1]);
  const headParts = [...parts.slice(0, -1), ...(head.trim() ? [head.trim()] : [])];
  if (headParts.some((p) => !headerLike(p))) return null;
  if (!labels && headParts.length < 2) return null;
  return { headers: headParts.length ? headParts : [""], rowLabels: labels ?? [] };
}

function splitHeaders(first: string): { headers: string[]; rest: string } | null {
  const headers: string[] = [];
  let rest = first.trim();
  for (;;) {
    const m = /^(.*?\(je [\d,.]+ ?P\.?\))/.exec(rest);
    if (!m) break;
    headers.push(m[1].trim());
    rest = rest.slice(m[0].length).trim();
  }
  return headers.length >= 2 ? { headers, rest } : null;
}

function clean(s: string): string {
  return s.replace(/^[•\s]+/, "").trim();
}

function cellText(items: string[]): string {
  return items.map(clean).filter(Boolean).join("\n");
}

export function parseAnswerTable(inner: string): AnswerTable | null {
  const lines = inner.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length < 3) return null;
  const sh = splitHeaders(lines[0]);
  if (!sh) return null;
  const { headers } = sh;
  const body = [...(sh.rest ? [sh.rest] : []), ...lines.slice(1)];
  const cols = headers.length;
  if (cols !== 2) return null;
  const text = body.join("\n");

  // 1) Buchstabenzeilen: "S =", "B =" …
  const letter = [...text.matchAll(/(?:^|(?<=\S))([A-Z]) =\s*(?:\n|$)/g)];
  if (letter.length >= 2) {
    const rows: string[][] = [];
    for (let i = 0; i < letter.length; i++) {
      const start = letter[i].index! + letter[i][0].length;
      const end = i + 1 < letter.length ? letter[i + 1].index! : text.length;
      const items = text.slice(start, end).split("\n").map((s) => s.trim()).filter(Boolean);
      if (items.length < 2) return null;
      rows.push([`${letter[i][1]} = ${clean(items[0])}`, cellText(items.slice(1))]);
    }
    return { headers, rows, mode: "buchstaben" };
  }

  // 2) Nummerierte Zeilen: 1, 2, 3 … (eigene Zeile, am Zeilenende angeklebt oder "2. Text")
  const pos: { k: number; at: number; len: number }[] = [];
  let from = 0;
  for (let k = 1; k <= 15; k++) {
    const rx = new RegExp(
      k === 1
        ? `(?:^|\\n)${k}(?:\\.\\s+|\\s*(?=\\n))`
        : `(?<=[.!?)\\p{L}\\n])${k}(?:\\.\\s+(?=\\p{Lu})|(?=\\n•)|(?=\\n))`,
      "u"
    );
    const m = rx.exec(text.slice(from));
    if (!m) break;
    const at = from + m.index;
    pos.push({ k, at, len: m[0].length });
    from = at + m[0].length;
  }
  if (pos.length >= 3) {
    const rows: string[][] = [];
    for (let i = 0; i < pos.length; i++) {
      const start = pos[i].at + pos[i].len;
      const end = i + 1 < pos.length ? pos[i + 1].at : text.length;
      const items = text.slice(start, end).split("\n").map((s) => s.trim()).filter(Boolean);
      if (items.length < 2) return null;
      rows.push([clean(items[0]), cellText(items.slice(1))]);
    }
    return { headers, rows, mode: "nummeriert" };
  }

  // 3) Paare aus kurzer Bezeichnung + längerem Inhalt (nur reine Aufzählungen)
  const bullets = body.filter((l) => l.startsWith("•"));
  if (bullets.length === body.length && bullets.length >= 4 && bullets.length % 2 === 0) {
    const a = bullets.filter((_, i) => i % 2 === 0).map(clean);
    const b = bullets.filter((_, i) => i % 2 === 1).map(clean);
    const avgA = a.reduce((s, x) => s + x.length, 0) / a.length;
    const avgB = b.reduce((s, x) => s + x.length, 0) / b.length;
    if (avgA < 0.6 * avgB && a.every((x) => x.length <= 80)) {
      return { headers, rows: a.map((x, i) => [x, b[i]]), mode: "paare" };
    }
  }
  return null;
}
