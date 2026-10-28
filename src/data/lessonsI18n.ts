/**
 * Übersetzte Lektionen im Kompaktformat. Eine Übersetzung spiegelt die deutsche Lektion Punkt für Punkt:
 *   t = Titel, b = [Überschrift, Stichpunkte[]] je Abschnitt, d = je Diagramm die Texte in fester Reihenfolge
 *   (siehe diagramStrings). Struktur, Icons und Farben kommen aus dem deutschen Original.
 * tests/lessonsI18n.test.ts prüft, dass Anzahl und Reihenfolge übereinstimmen.
 * Fehlt eine Übersetzung, zeigt die App den deutschen Text mit Hinweis.
 */
import type { Lang } from "@/lib/i18n";
import type { Lesson, LessonBlock } from "./lessons";
import type { Diagram } from "./diagram";
import { AR } from "./tr/ar";
import { EN } from "./tr/en";
import { TR } from "./tr/tr";
import { FR } from "./tr/fr";

export interface LessonTr {
  t: string;
  b: [string, string[]][];
  d?: string[][];
}

export const TRANSLATIONS: Record<Exclude<Lang, "de">, Record<string, LessonTr>> = { ar: AR, en: EN, tr: TR, fr: FR };

/** Alle übersetzbaren Texte eines Diagramms in fester Reihenfolge (Titel zuerst, Hinweis zuletzt). */
export function diagramStrings(d: Diagram): string[] {
  const out: string[] = [d.title];
  const node = (n: { t: string; s?: string }) => {
    out.push(n.t);
    if (n.s !== undefined) out.push(n.s);
  };
  switch (d.kind) {
    case "flow":
    case "cycle":
      d.steps.forEach(node);
      break;
    case "pyramid":
      d.levels.forEach(node);
      break;
    case "compare":
      d.cols.forEach((c) => {
        out.push(c.t);
        out.push(...c.items);
      });
      break;
    case "table":
      out.push(...d.head);
      d.rows.forEach((r) => out.push(...r));
      break;
    case "tree":
      node(d.root);
      d.kids.forEach((k) => {
        out.push(k.t);
        if (k.items) out.push(...k.items);
      });
      break;
    case "bar":
      d.parts.forEach(node);
      break;
    case "tiles":
      d.items.forEach(node);
      break;
  }
  if (d.note !== undefined) out.push(d.note);
  return out;
}

/** Baut aus dem deutschen Diagramm und den übersetzten Texten ein Diagramm in der Zielsprache. */
export function applyStrings(d: Diagram, s: string[]): Diagram {
  let i = 0;
  const next = () => s[i++] ?? "";
  const title = next();
  const node = <T extends { t: string; s?: string }>(n: T): T => {
    const t = next();
    return n.s !== undefined ? { ...n, t, s: next() } : { ...n, t };
  };
  let out: Diagram;
  switch (d.kind) {
    case "flow":
    case "cycle":
      out = { ...d, title, steps: d.steps.map(node) };
      break;
    case "pyramid":
      out = { ...d, title, levels: d.levels.map(node) };
      break;
    case "compare":
      out = { ...d, title, cols: d.cols.map((c) => ({ ...c, t: next(), items: c.items.map(() => next()) })) };
      break;
    case "table": {
      const head = d.head.map(() => next());
      out = { ...d, title, head, rows: d.rows.map((r) => r.map(() => next())) };
      break;
    }
    case "tree": {
      const root = node(d.root);
      out = { ...d, title, root, kids: d.kids.map((k) => ({ ...k, t: next(), ...(k.items ? { items: k.items.map(() => next()) } : {}) })) };
      break;
    }
    case "bar":
      out = { ...d, title, parts: d.parts.map(node) };
      break;
    case "tiles":
      out = { ...d, title, items: d.items.map(node) };
      break;
  }
  if (d.note !== undefined) out = { ...out, note: next() };
  return out;
}

export interface Localized {
  title: string;
  blocks: LessonBlock[];
  diagrams?: Diagram[];
  /** true, wenn der Text wirklich in der gewählten Sprache vorliegt */
  translated: boolean;
}

export function localizeLesson(l: Lesson, lang: Lang): Localized {
  const de: Localized = { title: l.title, blocks: l.blocks, diagrams: l.diagrams, translated: lang === "de" };
  if (lang === "de") return de;
  const t = TRANSLATIONS[lang]?.[l.id];
  if (!t) return de;
  return {
    title: t.t,
    blocks: t.b.map(([h, li]) => ({ h, li })),
    diagrams: l.diagrams?.map((d, i) => (t.d?.[i] ? applyStrings(d, t.d[i]) : d)),
    translated: true,
  };
}

export function translatedCount(lang: Lang): number {
  return lang === "de" ? Infinity : Object.keys(TRANSLATIONS[lang] ?? {}).length;
}
