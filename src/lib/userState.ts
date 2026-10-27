import { z } from "zod";
import type {
  AttemptRecord,
  QuestionUserData,
  SessionState,
  Settings,
  StudyLogEntry,
  Question,
} from "./types";
import { DEFAULT_SETTINGS, STATE_VERSION } from "./defaults";

export type QuestionPatch = Partial<
  Pick<Question, "text" | "chapterId" | "caseId" | "topic" | "type" | "points" | "ab" | "explanation" | "modelAnswer" | "options" | "tags"> & {
    extractionStatus: Question["extraction"]["status"];
  }
>;

export interface UserState {
  version: number;
  settings: Settings;
  attempts: AttemptRecord[];
  sessions: Record<string, SessionState>;
  qdata: Record<string, QuestionUserData>;
  log: StudyLogEntry[];
  overrides: Record<string, QuestionPatch>;
  /** Im Admin-Bereich manuell ergänzte Aufgaben (nicht aus OCR) */
  manual: Record<string, Question>;
  /** Zur Neuverarbeitung vorgemerkte PDF-Seiten */
  rerunPages: number[];
  /** Aktive (nicht abgeschlossene) Sitzung für "Weiterlernen" */
  activeSessionId: string | null;
  /** Fertig bearbeitete Importprüfungen (Admin) */
  adminLog: { at: number; action: string; questionId?: string }[];
}

export function emptyState(): UserState {
  return {
    version: STATE_VERSION,
    settings: { ...DEFAULT_SETTINGS },
    attempts: [],
    sessions: {},
    qdata: {},
    log: [],
    overrides: {},
    manual: {},
    rerunPages: [],
    activeSessionId: null,
    adminLog: [],
  };
}

const settingsSchema = z.object({
  theme: z.enum(["light", "dark", "system"]),
  uiLanguage: z.enum(["de", "ar", "en", "fr", "tr", "de-ar"]),
  defaultMode: z.enum(["practice", "mock", "chapter", "custom", "mistakes", "bookmarks", "case", "due"]),
  defaultQuestionCount: z.number().int().min(1).max(1000),
  defaultTimeLimitMin: z.number().min(0).max(600),
  defaultFeedback: z.enum(["instant", "end"]),
  passPercent: z.number().min(0).max(100),
  shuffleQuestions: z.boolean(),
  shuffleOptions: z.boolean(),
  sound: z.boolean(),
  animations: z.boolean(),
  reducedMotion: z.boolean(),
  fontScale: z.number().min(0.8).max(1.6),
  studyGoalPerDay: z.number().int().min(1).max(500),
});

/** Validiert/repariert geladene oder importierte Daten; defekte Teile werden verworfen statt die App zu brechen. */
export function sanitizeState(raw: unknown): { state: UserState; warnings: string[] } {
  const warnings: string[] = [];
  const base = emptyState();
  if (!raw || typeof raw !== "object") {
    if (raw !== undefined && raw !== null) warnings.push("Gespeicherte Daten hatten ein ungültiges Format und wurden ignoriert.");
    return { state: base, warnings };
  }
  const r = raw as Record<string, unknown>;

  const s = settingsSchema.safeParse({ ...DEFAULT_SETTINGS, ...(r.settings as object) });
  if (s.success) base.settings = s.data;
  else warnings.push("Einstellungen waren beschädigt und wurden auf Standardwerte zurückgesetzt.");

  if (Array.isArray(r.attempts)) {
    const seen = new Set<string>();
    for (const a of r.attempts as AttemptRecord[]) {
      if (a && typeof a.id === "string" && typeof a.questionId === "string" && typeof a.at === "number" && !seen.has(a.id)) {
        seen.add(a.id);
        base.attempts.push(a);
      }
    }
    if (base.attempts.length !== (r.attempts as unknown[]).length)
      warnings.push(`${(r.attempts as unknown[]).length - base.attempts.length} defekte oder doppelte Antworteinträge wurden übersprungen.`);
  }
  if (r.sessions && typeof r.sessions === "object") {
    for (const [id, sess] of Object.entries(r.sessions as Record<string, SessionState>)) {
      if (sess && Array.isArray(sess.questionIds) && sess.config) base.sessions[id] = sess;
      else warnings.push(`Sitzung ${id} war beschädigt und wurde übersprungen.`);
    }
  }
  if (r.qdata && typeof r.qdata === "object") base.qdata = r.qdata as UserState["qdata"];
  if (Array.isArray(r.log)) base.log = (r.log as StudyLogEntry[]).filter((l) => l && typeof l.sessionId === "string");
  if (r.overrides && typeof r.overrides === "object") base.overrides = r.overrides as UserState["overrides"];
  if (r.manual && typeof r.manual === "object") {
    for (const [id, q] of Object.entries(r.manual as Record<string, Question>)) {
      if (q && typeof q.id === "string" && typeof q.text === "string") base.manual[id] = q;
    }
  }
  if (Array.isArray(r.rerunPages)) base.rerunPages = (r.rerunPages as unknown[]).filter((n): n is number => typeof n === "number");
  if (typeof r.activeSessionId === "string" && base.sessions[r.activeSessionId] && !base.sessions[r.activeSessionId].finishedAt)
    base.activeSessionId = r.activeSessionId;
  if (Array.isArray(r.adminLog)) base.adminLog = r.adminLog as UserState["adminLog"];
  return { state: base, warnings };
}
