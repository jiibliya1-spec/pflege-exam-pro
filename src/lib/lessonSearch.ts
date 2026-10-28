import type { Diagram } from "@/data/diagram";
import { AREAS, LESSONS, type Lesson } from "@/data/lessons";

/** Kleinschreibung, Umlaute und Akzente vereinheitlichen, damit "ae" und "ä" oder "Atmung" und "atmung" zusammenpassen. */
export function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function tokens(q: string): string[] {
  return norm(q).split(/[^a-z0-9؀-ۿ]+/).filter((t) => t.length >= 2);
}

function diagramTexts(d: Diagram): string[] {
  const out: string[] = [d.title];
  if (d.note) out.push(d.note);
  switch (d.kind) {
    case "flow":
    case "cycle":
      d.steps.forEach((s) => out.push(s.t, s.s ?? ""));
      break;
    case "pyramid":
      d.levels.forEach((s) => out.push(s.t, s.s ?? ""));
      break;
    case "tiles":
      d.items.forEach((s) => out.push(s.t, s.s ?? ""));
      break;
    case "compare":
      d.cols.forEach((c) => out.push(c.t, ...c.items));
      break;
    case "table":
      out.push(...d.head, ...d.rows.flat());
      break;
    case "tree":
      out.push(d.root.t, ...d.kids.flatMap((k) => [k.t, ...(k.items ?? [])]));
      break;
    case "bar":
      d.parts.forEach((p) => out.push(p.t, p.s ?? ""));
      break;
  }
  return out.filter(Boolean);
}

export interface LessonHit {
  lesson: Lesson;
  score: number;
  /** Überschrift des Blocks, in dem der Treffer liegt */
  where: string;
  snippet: string;
}

interface Indexed {
  lesson: Lesson;
  title: string;
  area: string;
  heads: string[];
  lines: { h: string; text: string; n: string }[];
  ar: string;
  dia: string;
}

let INDEX: Indexed[] | null = null;
function index(): Indexed[] {
  if (INDEX) return INDEX;
  INDEX = LESSONS.map((lesson) => {
    const area = AREAS[lesson.group].find((a) => a.id === lesson.area)?.label ?? "";
    return {
      lesson,
      title: norm(lesson.title),
      area: norm(area),
      heads: lesson.blocks.map((b) => norm(b.h)),
      lines: lesson.blocks.flatMap((b) => b.li.map((text) => ({ h: b.h, text, n: norm(text) }))),
      ar: norm(lesson.ar),
      dia: norm((lesson.diagrams ?? []).flatMap(diagramTexts).join(" ")),
    };
  });
  return INDEX;
}

/** Sucht in Titel, Bereich, Überschriften, Inhalten, Diagrammen und der arabischen Zusammenfassung. Alle Suchwörter müssen vorkommen. */
export function searchLessons(query: string, limit = 40): LessonHit[] {
  const tk = tokens(query);
  if (!tk.length) return [];
  const hits: LessonHit[] = [];
  for (const it of index()) {
    let score = 0;
    let ok = true;
    let best: { h: string; text: string } | null = null;
    let bestHead = "";
    for (const t of tk) {
      let s = 0;
      if (it.title.includes(t)) s += 12 + (it.title.startsWith(t) ? 4 : 0);
      if (it.area.includes(t)) s += 3;
      const head = it.heads.findIndex((h) => h.includes(t));
      if (head >= 0) {
        s += 5;
        bestHead = bestHead || it.lesson.blocks[head].h;
      }
      const line = it.lines.find((l) => l.n.includes(t));
      if (line) {
        s += 2;
        if (!best) best = { h: line.h, text: line.text };
      }
      if (it.ar.includes(t)) s += 2;
      if (it.dia.includes(t)) s += 1;
      if (s === 0) {
        ok = false;
        break;
      }
      score += s;
    }
    if (!ok) continue;
    hits.push({ lesson: it.lesson, score, where: best?.h ?? bestHead, snippet: best ? (best.text.length > 150 ? best.text.slice(0, 147) + "…" : best.text) : "" });
  }
  hits.sort((a, b) => b.score - a.score || a.lesson.title.localeCompare(b.lesson.title, "de"));
  return hits.slice(0, limit);
}
