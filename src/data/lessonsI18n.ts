/**
 * Übersetzte Lektionen. Eine Übersetzung spiegelt die deutsche Lektion Punkt für Punkt:
 * gleiche Anzahl Abschnitte, gleiche Anzahl Stichpunkte, gleiche Diagramm-Arten in gleicher Reihenfolge.
 * Das prüft tests/lessonsI18n.test.ts. Fehlt eine Übersetzung, zeigt die App den deutschen Text mit Hinweis.
 */
import type { Lang } from "@/lib/i18n";
import type { Lesson, LessonBlock } from "./lessons";
import type { Diagram } from "./diagram";
import { AR } from "./tr/ar";
import { EN } from "./tr/en";
import { TR } from "./tr/tr";
import { FR } from "./tr/fr";

export interface LessonTr {
  title: string;
  blocks: LessonBlock[];
  diagrams?: Diagram[];
}

export const TRANSLATIONS: Record<Exclude<Lang, "de">, Record<string, LessonTr>> = { ar: AR, en: EN, tr: TR, fr: FR };

export interface Localized {
  title: string;
  blocks: LessonBlock[];
  diagrams?: Diagram[];
  /** true, wenn der Text wirklich in der gewählten Sprache vorliegt */
  translated: boolean;
}

export function localizeLesson(l: Lesson, lang: Lang): Localized {
  if (lang === "de") return { title: l.title, blocks: l.blocks, diagrams: l.diagrams, translated: true };
  const t = TRANSLATIONS[lang]?.[l.id];
  if (!t) return { title: l.title, blocks: l.blocks, diagrams: l.diagrams, translated: false };
  return { title: t.title, blocks: t.blocks, diagrams: t.diagrams ?? l.diagrams, translated: true };
}

export function translatedCount(lang: Lang): number {
  return lang === "de" ? Infinity : Object.keys(TRANSLATIONS[lang] ?? {}).length;
}
