import type { AttemptRecord, Question, SessionState, StudyLogEntry } from "./types";
import { gradeQuestion, isAnswered, passed, summarize, type GradeResult, type ScoreSummary } from "./grading";

export interface SessionResults {
  results: GradeResult[];
  summary: ScoreSummary;
  passed: boolean | null;
  byQuestion: Map<string, GradeResult>;
}

export function sessionQuestions(session: SessionState, byId: Map<string, Question>): Question[] {
  return session.questionIds.map((id) => byId.get(id)).filter((q): q is Question => !!q);
}

export function evaluateSession(session: SessionState, byId: Map<string, Question>): SessionResults {
  const qs = sessionQuestions(session, byId);
  const results = qs.map((q) => gradeQuestion(q, session.answers[q.id]));
  const summary = summarize(results);
  return {
    results,
    summary,
    passed: passed(summary.percent, session.config.passPercent),
    byQuestion: new Map(results.map((r) => [r.questionId, r])),
  };
}

export function attemptId(sessionId: string, questionId: string) {
  return `${sessionId}:${questionId}`;
}

/** Erzeugt Versuchsdatensätze für alle beantworteten Fragen der Sitzung (ID = Sitzung:Frage → idempotent). */
export function buildAttempts(session: SessionState, byId: Map<string, Question>, at: number): AttemptRecord[] {
  const out: AttemptRecord[] = [];
  for (const q of sessionQuestions(session, byId)) {
    const a = session.answers[q.id];
    if (!isAnswered(q, a)) continue;
    const g = gradeQuestion(q, a);
    out.push({
      id: attemptId(session.id, q.id),
      questionId: q.id,
      sessionId: session.id,
      at,
      answerText: a?.text,
      selectedOptionIds: a?.selectedOptionIds,
      tableCells: a?.tableCells,
      pointsAwarded: g.pointsAwarded,
      pointsMax: g.pointsMax,
      gradedBy: g.gradedBy,
      correct: g.correct,
      timeMs: a?.timeMs ?? 0,
    });
  }
  return out;
}

export function buildLogEntry(session: SessionState, byId: Map<string, Question>, finishedAt?: number): StudyLogEntry {
  const ev = evaluateSession(session, byId);
  const qs = sessionQuestions(session, byId);
  const answered = qs.filter((q) => isAnswered(q, session.answers[q.id])).length;
  return {
    sessionId: session.id,
    title: session.config.title || defaultTitle(session),
    mode: session.config.mode,
    startedAt: session.startedAt,
    finishedAt,
    durationMs: session.elapsedMs,
    answered,
    total: qs.length,
    scorePercent: finishedAt ? ev.summary.percent : null,
    passed: finishedAt ? ev.passed : null,
  };
}

export function defaultTitle(session: SessionState): string {
  const names: Record<string, string> = {
    practice: "Übung",
    mock: "Probeprüfung",
    chapter: "Kapitelprüfung",
    custom: "Eigenes Quiz",
    mistakes: "Fehler wiederholen",
    bookmarks: "Lesezeichen",
    case: "Fallbeispiel",
    due: "Fällige Wiederholungen",
  };
  return `${names[session.config.mode] ?? "Sitzung"} · ${new Date(session.startedAt).toLocaleDateString("de-DE")}`;
}

/** Verbleibende Gesamtzeit in ms (null = kein Limit). Basis ist die kumulierte aktive Zeit (elapsedMs). */
export function remainingMs(session: SessionState): number | null {
  const limit = session.config.timeLimitMin * 60_000;
  if (!limit) return null;
  return Math.max(0, limit - session.elapsedMs);
}

export function progressOf(session: SessionState, byId: Map<string, Question>) {
  const qs = sessionQuestions(session, byId);
  const answered = qs.filter((q) => isAnswered(q, session.answers[q.id])).length;
  return { answered, total: qs.length };
}
