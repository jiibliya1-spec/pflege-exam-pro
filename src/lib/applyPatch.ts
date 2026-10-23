import type { Question } from "./types";
import type { QuestionPatch } from "./userState";

/** Wendet Admin-Korrekturen an; `originalText` bleibt unverändert zum Vergleich erhalten. */
export function applyPatch(q: Question, p: QuestionPatch | undefined): Question {
  if (!p) return q;
  const { extractionStatus, ...rest } = p;
  return {
    ...q,
    ...rest,
    extraction: extractionStatus ? { ...q.extraction, status: extractionStatus } : q.extraction,
  };
}
