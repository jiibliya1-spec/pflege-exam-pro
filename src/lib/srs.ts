/**
 * Einfaches, transparentes Spaced-Repetition-Verfahren (Leitner-System).
 * Regeln:
 *  - Box 0 = neu/falsch beantwortet → sofort wieder fällig.
 *  - Volle Punktzahl → eine Box höher (max. Box 5). Sonst → zurück auf Box 0.
 *  - Intervalle je Box (Tage): 0, 1, 3, 7, 14, 30.
 */
export const SRS_INTERVAL_DAYS = [0, 1, 3, 7, 14, 30] as const;
export const SRS_MAX_BOX = SRS_INTERVAL_DAYS.length - 1;
const DAY = 24 * 60 * 60 * 1000;

export function nextSrs(box: number, correct: boolean, now: number): { box: number; dueAt: number } {
  const nb = correct ? Math.min(SRS_MAX_BOX, box + 1) : 0;
  return { box: nb, dueAt: now + SRS_INTERVAL_DAYS[nb] * DAY };
}

export function isDue(dueAt: number | null | undefined, now: number): boolean {
  return typeof dueAt === "number" && dueAt <= now;
}
