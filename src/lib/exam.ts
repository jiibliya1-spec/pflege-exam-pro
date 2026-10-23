import type { ExamConfig, Question, QuestionType, SessionState } from "./types";
import { shuffle } from "./random";
import { isChoice } from "./grading";

export const ALL_TYPES: QuestionType[] = ["single", "multiple", "truefalse", "short", "open", "table"];

export const TYPE_LABELS: Record<QuestionType, string> = {
  single: "Single-Choice",
  multiple: "Multiple-Select",
  truefalse: "Wahr/Falsch",
  short: "Kurzantwort",
  open: "Offene Frage",
  table: "Tabellen-Aufgabe",
};

/** Nutzerbezogener Kontext für Quellenfilter. */
export interface UserContext {
  /** questionId → zuletzt erreichter Status */
  lastCorrect: Record<string, boolean | null>;
  attempted: Set<string>;
  bookmarked: Set<string>;
  dueIds: Set<string>;
}

export const EMPTY_CONTEXT: UserContext = {
  lastCorrect: {},
  attempted: new Set(),
  bookmarked: new Set(),
  dueIds: new Set(),
};

export function defaultConfig(partial: Partial<ExamConfig> = {}): ExamConfig {
  return {
    title: "",
    mode: "practice",
    source: "all",
    chapterIds: [],
    caseIds: [],
    questionCount: 10,
    questionTypes: [...ALL_TYPES],
    order: "source",
    shuffleOptions: false,
    timeLimitMin: 0,
    perQuestionSec: 0,
    feedback: "instant",
    showExplanations: "instant",
    passPercent: 60,
    allowRepeat: true,
    saveSession: true,
    seed: 1,
    ...partial,
  };
}

export interface ValidationIssue {
  field: keyof ExamConfig | "general";
  message: string;
}

export function validateConfig(config: ExamConfig): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  if (!Number.isInteger(config.questionCount) || config.questionCount < 1)
    issues.push({ field: "questionCount", message: "Die Fragenzahl muss eine ganze Zahl ≥ 1 sein." });
  if (config.questionCount > 1000)
    issues.push({ field: "questionCount", message: "Die Fragenzahl darf höchstens 1000 betragen." });
  if (config.questionTypes.length === 0)
    issues.push({ field: "questionTypes", message: "Mindestens ein Fragetyp muss gewählt sein." });
  if (!(config.passPercent >= 0 && config.passPercent <= 100))
    issues.push({ field: "passPercent", message: "Die Bestehensgrenze muss zwischen 0 und 100 % liegen." });
  if (!(config.timeLimitMin >= 0 && config.timeLimitMin <= 600))
    issues.push({ field: "timeLimitMin", message: "Das Zeitlimit muss zwischen 0 und 600 Minuten liegen." });
  if (!(config.perQuestionSec >= 0 && config.perQuestionSec <= 3600))
    issues.push({ field: "perQuestionSec", message: "Das Zeitlimit pro Frage muss zwischen 0 und 3600 Sekunden liegen." });
  if (config.source === "chapters" && config.chapterIds.length === 0)
    issues.push({ field: "chapterIds", message: "Bitte mindestens ein Kapitel auswählen." });
  if (config.source === "case" && config.caseIds.length === 0)
    issues.push({ field: "caseIds", message: "Bitte mindestens ein Fallbeispiel auswählen." });
  return issues;
}

/** Fragen, die laut Konfiguration grundsätzlich in Frage kommen (ohne Anzahl-Begrenzung). */
export function eligibleQuestions(
  all: readonly Question[],
  config: ExamConfig,
  ctx: UserContext,
  chapterDescendants: (chapterId: string) => string[] = (id) => [id]
): Question[] {
  const chapterSet = new Set(config.chapterIds.flatMap((id) => chapterDescendants(id)));
  const caseSet = new Set(config.caseIds);
  const types = new Set(config.questionTypes);
  return all
    .filter((q) => q.extraction.status !== "rejected")
    .filter((q) => types.has(q.type))
    .filter((q) => {
      switch (config.source) {
        case "all":
          return true;
        case "chapters":
          return chapterSet.has(q.chapterId);
        case "case":
          return !!q.caseId && caseSet.has(q.caseId);
        case "bookmarks":
          return ctx.bookmarked.has(q.id);
        case "incorrect":
          return ctx.lastCorrect[q.id] === false;
        case "unanswered":
          return !ctx.attempted.has(q.id);
        case "due":
          return ctx.dueIds.has(q.id);
      }
    })
    .filter((q) => (config.allowRepeat ? true : !ctx.attempted.has(q.id)))
    .sort((a, b) => a.order - b.order);
}

/** Gruppiert Fragen in "Einheiten": Fragen eines Fallbeispiels bleiben zusammen und in Originalreihenfolge. */
export function toUnits(questions: readonly Question[]): Question[][] {
  const byCase = new Map<string, Question[]>();
  const units: Question[][] = [];
  for (const q of questions) {
    if (q.caseId) {
      let u = byCase.get(q.caseId);
      if (!u) {
        u = [];
        byCase.set(q.caseId, u);
        units.push(u);
      }
      u.push(q);
    } else {
      units.push([q]);
    }
  }
  for (const u of units) u.sort((a, b) => a.order - b.order);
  return units;
}

export type BuildResult =
  | { ok: true; session: SessionState; shortage?: undefined }
  | { ok: false; errors: string[]; available: number; alternatives: number[] };

/**
 * Baut eine Sitzung. Verändert Nutzereinstellungen NIE stillschweigend:
 * Reicht der Fragenpool nicht aus, wird ein Fehler mit Alternativen zurückgegeben.
 */
export function buildSession(
  all: readonly Question[],
  config: ExamConfig,
  ctx: UserContext,
  opts: { id: string; now: number; chapterDescendants?: (id: string) => string[] }
): BuildResult {
  const issues = validateConfig(config);
  if (issues.length) return { ok: false, errors: issues.map((i) => i.message), available: 0, alternatives: [] };

  const pool = eligibleQuestions(all, config, ctx, opts.chapterDescendants);
  if (pool.length === 0)
    return {
      ok: false,
      errors: ["Mit den gewählten Filtern gibt es keine passenden Fragen."],
      available: 0,
      alternatives: [],
    };

  let units = toUnits(pool);
  if (config.order === "random") units = shuffle(units, config.seed);

  const selected: Question[][] = [];
  let total = 0;
  for (const u of units) {
    if (total === config.questionCount) break;
    if (total + u.length <= config.questionCount) {
      selected.push(u);
      total += u.length;
    }
  }

  if (total !== config.questionCount) {
    const alt = new Set<number>();
    if (pool.length <= 1000) alt.add(pool.length);
    if (total > 0) alt.add(total);
    const reason =
      pool.length < config.questionCount
        ? `Es stehen nur ${pool.length} passende Fragen zur Verfügung, gewählt waren ${config.questionCount}.`
        : `Fallbeispiele bleiben zusammen. Mit ${config.questionCount} Fragen lässt sich keine passende Auswahl bilden (erreichbar: ${total}).`;
    return {
      ok: false,
      errors: [reason],
      available: pool.length,
      alternatives: [...alt].filter((n) => n > 0).sort((a, b) => a - b),
    };
  }

  if (config.order === "source") selected.sort((a, b) => a[0].order - b[0].order);

  const chosen = selected.flat();
  const optionOrder: Record<string, string[]> = {};
  for (const q of chosen) {
    if (isChoice(q) && q.options?.length) {
      const ids = q.options.map((o) => o.id);
      optionOrder[q.id] =
        config.shuffleOptions && canShuffleOptions(q)
          ? shuffle(ids, config.seed ^ hash(q.id))
          : ids;
    }
  }

  return {
    ok: true,
    session: {
      id: opts.id,
      config,
      questionIds: chosen.map((q) => q.id),
      optionOrder,
      answers: {},
      flagged: [],
      currentIndex: 0,
      startedAt: opts.now,
      updatedAt: opts.now,
      elapsedMs: 0,
    },
  };
}

/**
 * Antwortoptionen dürfen nur gemischt werden, wenn die Bedeutung erhalten bleibt.
 * Optionen wie "Alle genannten Antworten …" oder "Keine der …" verweisen auf andere Optionen.
 */
export function canShuffleOptions(q: Question): boolean {
  if (!q.options || q.options.length < 2) return false;
  if (q.type === "truefalse") return false;
  const ref = /\b(alle|keine|beide|a\s*und\s*b|oben|vorherig|genannt)/i;
  return !q.options.some((o) => ref.test(o.text) && /(alle|keine|beide|genannt|oben|vorherig)/i.test(o.text));
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function chapterDescendantsFn(chapters: readonly { id: string; parentId?: string }[]) {
  const children = new Map<string, string[]>();
  for (const c of chapters) {
    if (c.parentId) children.set(c.parentId, [...(children.get(c.parentId) ?? []), c.id]);
  }
  const walk = (id: string): string[] => {
    const out = [id];
    for (const child of children.get(id) ?? []) out.push(...walk(child));
    return out;
  };
  return walk;
}

/** Erzeugt eine Sitzung aus einer festen Liste von Fragen-IDs (z. B. "falsche Fragen dieser Prüfung wiederholen"). */
export function sessionFromIds(
  ids: readonly string[],
  byId: Map<string, Question>,
  config: ExamConfig,
  opts: { id: string; now: number }
): SessionState {
  const qs = ids.map((id) => byId.get(id)).filter((q): q is Question => !!q).sort((a, b) => a.order - b.order);
  const optionOrder: Record<string, string[]> = {};
  for (const q of qs) {
    if (isChoice(q) && q.options?.length) {
      const base = q.options.map((o) => o.id);
      optionOrder[q.id] = config.shuffleOptions && canShuffleOptions(q) ? shuffle(base, config.seed ^ hash(q.id)) : base;
    }
  }
  return {
    id: opts.id,
    config: { ...config, questionCount: qs.length },
    questionIds: qs.map((q) => q.id),
    optionOrder,
    answers: {},
    flagged: [],
    currentIndex: 0,
    startedAt: opts.now,
    updatedAt: opts.now,
    elapsedMs: 0,
  };
}
