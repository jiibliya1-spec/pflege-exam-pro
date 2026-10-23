import type { AttemptRecord, Chapter, Question, StudyLogEntry } from "./types";

const DAY = 24 * 60 * 60 * 1000;

export function latestAttempts(attempts: readonly AttemptRecord[]): Map<string, AttemptRecord> {
  const m = new Map<string, AttemptRecord>();
  for (const a of [...attempts].sort((x, y) => x.at - y.at)) m.set(a.questionId, a);
  return m;
}

export interface OverallStats {
  total: number;
  answered: number;
  remaining: number;
  /** Punktequote aller bewerteten Antworten (0–100) oder null */
  accuracy: number | null;
  gradedAttempts: number;
  streakDays: number;
  studyTimeMs: number;
  completedExams: number;
  avgExamScore: number | null;
  todayAnswered: number;
}

export function localDayKey(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function computeStreak(attempts: readonly AttemptRecord[], now: number): number {
  const days = new Set(attempts.map((a) => localDayKey(a.at)));
  let streak = 0;
  let cursor = now;
  if (!days.has(localDayKey(cursor))) cursor -= DAY; // heute noch nichts gelernt → Serie zählt bis gestern
  while (days.has(localDayKey(cursor))) {
    streak++;
    cursor -= DAY;
  }
  return streak;
}

export function overallStats(
  questions: readonly Question[],
  attempts: readonly AttemptRecord[],
  log: readonly StudyLogEntry[],
  now: number
): OverallStats {
  const ids = new Set(questions.map((q) => q.id));
  const relevant = attempts.filter((a) => ids.has(a.questionId));
  const answered = new Set(relevant.map((a) => a.questionId)).size;
  const graded = relevant.filter((a) => a.gradedBy !== "none" && a.pointsAwarded !== null);
  const max = graded.reduce((s, a) => s + a.pointsMax, 0);
  const got = graded.reduce((s, a) => s + (a.pointsAwarded ?? 0), 0);
  const finished = log.filter((l) => l.finishedAt && (l.mode === "mock" || l.mode === "chapter" || l.mode === "custom"));
  const scored = finished.filter((l) => l.scorePercent !== null);
  return {
    total: questions.length,
    answered,
    remaining: Math.max(0, questions.length - answered),
    accuracy: max > 0 ? Math.round((got / max) * 1000) / 10 : null,
    gradedAttempts: graded.length,
    streakDays: computeStreak(relevant, now),
    studyTimeMs: log.reduce((s, l) => s + l.durationMs, 0),
    completedExams: finished.length,
    avgExamScore: scored.length ? Math.round((scored.reduce((s, l) => s + (l.scorePercent ?? 0), 0) / scored.length) * 10) / 10 : null,
    todayAnswered: relevant.filter((a) => localDayKey(a.at) === localDayKey(now)).length,
  };
}

export interface TopicStat {
  chapterId: string;
  title: string;
  total: number;
  answered: number;
  gradedAttempts: number;
  accuracy: number | null;
}

export function chapterStats(
  chapters: readonly Chapter[],
  questions: readonly Question[],
  attempts: readonly AttemptRecord[]
): TopicStat[] {
  const byChapter = new Map<string, Question[]>();
  for (const q of questions) byChapter.set(q.chapterId, [...(byChapter.get(q.chapterId) ?? []), q]);
  const qChapter = new Map(questions.map((q) => [q.id, q.chapterId]));
  const perChapter = new Map<string, { answered: Set<string>; got: number; max: number; n: number }>();
  for (const a of attempts) {
    const ch = qChapter.get(a.questionId);
    if (!ch) continue;
    const e = perChapter.get(ch) ?? { answered: new Set<string>(), got: 0, max: 0, n: 0 };
    e.answered.add(a.questionId);
    if (a.gradedBy !== "none" && a.pointsAwarded !== null) {
      e.got += a.pointsAwarded;
      e.max += a.pointsMax;
      e.n++;
    }
    perChapter.set(ch, e);
  }
  return chapters
    .filter((c) => byChapter.has(c.id))
    .map((c) => {
      const e = perChapter.get(c.id);
      return {
        chapterId: c.id,
        title: `${c.number} ${c.title}`.trim(),
        total: byChapter.get(c.id)!.length,
        answered: e?.answered.size ?? 0,
        gradedAttempts: e?.n ?? 0,
        accuracy: e && e.max > 0 ? Math.round((e.got / e.max) * 1000) / 10 : null,
      };
    });
}

/** Schwächste Themen: mindestens `minAttempts` bewertete Antworten, aufsteigend nach Quote. */
export function weakestTopics(stats: readonly TopicStat[], minAttempts = 2, limit = 5): TopicStat[] {
  return stats
    .filter((s) => s.accuracy !== null && s.gradedAttempts >= minAttempts)
    .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))
    .slice(0, limit);
}

export function repeatedMistakes(attempts: readonly AttemptRecord[], minWrong = 2): Map<string, number> {
  const m = new Map<string, number>();
  for (const a of attempts) if (a.correct === false && a.gradedBy !== "none") m.set(a.questionId, (m.get(a.questionId) ?? 0) + 1);
  return new Map([...m].filter(([, n]) => n >= minWrong));
}

export function formatDuration(ms: number): string {
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s} s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} Min.`;
  const h = Math.floor(m / 60);
  return `${h} Std. ${m % 60} Min.`;
}
