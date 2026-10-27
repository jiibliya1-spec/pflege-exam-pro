import type { Question } from "./types";

/**
 * Welche Aufgaben sieht ein Lernender? Nur solche, bei denen Text, Zuordnung und Musterlösung
 * eindeutig aus dem Buch hervorgehen. Unsichere Aufgaben (Platzhalter, per Layout zugeordnete oder
 * vertauschte Musterlösung, schlechte Textqualität, fehlende Musterlösung) bleiben in den Daten,
 * werden aber nicht angezeigt, bis sie geprüft sind (Status "approved").
 */
export function isLearnerVisible(q: Question): boolean {
  if (q.placeholder) return false;
  if (q.extraction.status === "rejected") return false;
  if (q.extraction.status === "review") return false;
  const ma = q.modelAnswer;
  if (!ma || ma.status === "unavailable") return false;
  const hasText = !!ma.text?.trim();
  const hasKey = (ma.correctOptionIds?.length ?? 0) > 0;
  return hasText || hasKey;
}

/** Fälle erscheinen nur, wenn mindestens die Hälfte ihrer Aufgaben (und mindestens 5) verlässlich ist. */
export function visibleCaseIds(all: Question[]): Set<string> {
  const tot = new Map<string, number>();
  const ok = new Map<string, number>();
  for (const q of all) {
    if (!q.caseId) continue;
    tot.set(q.caseId, (tot.get(q.caseId) ?? 0) + 1);
    if (isLearnerVisible(q)) ok.set(q.caseId, (ok.get(q.caseId) ?? 0) + 1);
  }
  const out = new Set<string>();
  for (const [id, n] of tot) if ((ok.get(id) ?? 0) >= 5 && (ok.get(id) ?? 0) * 2 >= n) out.add(id);
  return out;
}
