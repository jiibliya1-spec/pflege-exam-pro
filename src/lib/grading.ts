import type { Question, SessionAnswer } from "./types";

/**
 * Bewertungsrichtlinie (transparent und deterministisch)
 * ------------------------------------------------------
 * - Single-Choice / Wahr-Falsch: Nur bewertbar, wenn ein VERIFIZIERTER Schlüssel vorliegt.
 *   Volle Punktzahl bei exakt richtiger Option, sonst 0.
 * - Multiple-Select: Nur bewertbar mit verifiziertem Schlüssel.
 *   Teilpunkte = max(0, (richtig gewählt − falsch gewählt) / Anzahl richtiger Optionen) × Maximalpunkte.
 * - Offene Fragen / Kurzantwort / Tabelle: Keine automatische Bewertung. Der Nutzer bewertet sich
 *   selbst (0 … Maximalpunkte) im Vergleich zur Musterlösung. Ohne Selbstbewertung gilt die Frage
 *   als "unbewertet" und wird NICHT in den Prozentwert eingerechnet; unbeantwortete offene Fragen
 *   zählen mit 0 Punkten.
 * - Maximalpunkte = im Buch angegebene Punkte, sonst 1.
 * - Unverifizierte Schlüssel werden nie als offizielle Lösung gewertet.
 */

export type GradeStatus =
  | "graded" // Punkte vergeben (automatisch oder Selbstbewertung)
  | "ungraded" // nicht bewertbar (kein verifizierter Schlüssel / Selbstbewertung fehlt)
  | "unanswered"; // nicht beantwortet (zählt 0, falls bewertbar)

export interface GradeResult {
  questionId: string;
  status: GradeStatus;
  pointsMax: number;
  pointsAwarded: number | null;
  gradedBy: "auto" | "self" | "none";
  /** true bei voller Punktzahl, null wenn unbewertet */
  correct: boolean | null;
  /** Zählt in den Prozentwert? */
  scorable: boolean;
  reason?: string;
}

export function maxPoints(q: Pick<Question, "points">): number {
  return q.points && q.points > 0 ? q.points : 1;
}

export function isChoice(q: Pick<Question, "type">): boolean {
  return q.type === "single" || q.type === "multiple" || q.type === "truefalse";
}

export function hasVerifiedKey(q: Question): boolean {
  return (
    isChoice(q) &&
    q.modelAnswer?.status === "verified" &&
    Array.isArray(q.modelAnswer.correctOptionIds) &&
    q.modelAnswer.correctOptionIds.length > 0
  );
}

export function isAnswered(q: Question, a: SessionAnswer | undefined): boolean {
  if (!a) return false;
  if (isChoice(q)) return (a.selectedOptionIds?.length ?? 0) > 0;
  if (q.type === "table" && (a.tableCells ?? []).some((c) => c.trim().length > 0)) return true;
  return (a.text ?? "").trim().length > 0;
}

export function gradeQuestion(q: Question, a: SessionAnswer | undefined): GradeResult {
  const max = maxPoints(q);
  const base = { questionId: q.id, pointsMax: max };
  const answered = isAnswered(q, a);

  if (isChoice(q)) {
    if (!hasVerifiedKey(q)) {
      return {
        ...base,
        status: answered ? "ungraded" : "unanswered",
        pointsAwarded: null,
        gradedBy: "none",
        correct: null,
        scorable: false,
        reason: "Kein verifizierter Antwortschlüssel vorhanden",
      };
    }
    if (!answered) {
      return { ...base, status: "unanswered", pointsAwarded: 0, gradedBy: "auto", correct: false, scorable: true };
    }
    const key = new Set(q.modelAnswer!.correctOptionIds!);
    const sel = new Set(a!.selectedOptionIds!);
    let awarded: number;
    if (q.type === "multiple") {
      let right = 0;
      let wrong = 0;
      for (const id of sel) {
        if (key.has(id)) right++;
        else wrong++;
      }
      awarded = Math.max(0, (right - wrong) / key.size) * max;
    } else {
      awarded = sel.size === key.size && [...sel].every((id) => key.has(id)) ? max : 0;
    }
    awarded = round2(awarded);
    return {
      ...base,
      status: "graded",
      pointsAwarded: awarded,
      gradedBy: "auto",
      correct: awarded === max,
      scorable: true,
    };
  }

  // offene Typen
  if (!answered) {
    return {
      ...base,
      status: "unanswered",
      pointsAwarded: 0,
      gradedBy: "none",
      correct: false,
      scorable: true,
      reason: "Nicht beantwortet",
    };
  }
  if (a!.selfPoints === undefined || a!.selfPoints === null) {
    return {
      ...base,
      status: "ungraded",
      pointsAwarded: null,
      gradedBy: "none",
      correct: null,
      scorable: false,
      reason: "Selbstbewertung fehlt",
    };
  }
  const pts = round2(Math.min(max, Math.max(0, a!.selfPoints)));
  return {
    ...base,
    status: "graded",
    pointsAwarded: pts,
    gradedBy: "self",
    correct: pts === max,
    scorable: true,
  };
}

export interface ScoreSummary {
  totalQuestions: number;
  correct: number;
  incorrect: number; // bewertet, aber nicht volle Punktzahl (inkl. unbeantwortet-bewertbar)
  unanswered: number;
  ungraded: number;
  pointsAwarded: number;
  pointsMax: number; // nur bewertbare Fragen
  percent: number | null; // null, wenn nichts bewertbar ist
}

export function summarize(results: GradeResult[]): ScoreSummary {
  let correct = 0,
    incorrect = 0,
    unanswered = 0,
    ungraded = 0,
    awarded = 0,
    max = 0;
  for (const r of results) {
    if (r.status === "unanswered") unanswered++;
    if (r.status === "ungraded") ungraded++;
    if (r.scorable) {
      awarded += r.pointsAwarded ?? 0;
      max += r.pointsMax;
      if (r.status !== "unanswered") {
        if (r.correct) correct++;
        else incorrect++;
      }
    }
  }
  return {
    totalQuestions: results.length,
    correct,
    incorrect,
    unanswered,
    ungraded,
    pointsAwarded: round2(awarded),
    pointsMax: round2(max),
    percent: max > 0 ? round2((awarded / max) * 100) : null,
  };
}

/** Pass/Fail anhand der vom Nutzer konfigurierten App-Schwelle (keine amtliche Bestehensgrenze). */
export function passed(percent: number | null, threshold: number): boolean | null {
  if (percent === null) return null;
  return percent >= threshold;
}

export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
