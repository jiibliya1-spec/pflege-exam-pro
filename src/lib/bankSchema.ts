import { z } from "zod";
import type { Question, QuestionBank } from "./types";

const source = z.object({ pdfPage: z.number().int().min(1), printedPage: z.number().int().optional() });
const extraction = z.object({
  status: z.enum(["ok", "review", "approved", "rejected"]),
  confidence: z.number().min(0).max(100),
  notes: z.array(z.string()).optional(),
});
const modelAnswer = z.object({
  text: z.string(),
  status: z.enum(["verified", "unverified", "unavailable"]),
  correctOptionIds: z.array(z.string()).optional(),
  sourcePage: z.number().int().optional(),
  sharedWith: z.array(z.string()).optional(),
});

export const questionSchema = z.object({
  id: z.string().min(1),
  order: z.number(),
  chapterId: z.string(),
  topic: z.string().optional(),
  caseId: z.string().optional(),
  label: z.string(),
  type: z.enum(["single", "multiple", "truefalse", "short", "open", "table"]),
  text: z.string().min(1),
  stem: z.string().optional(),
  manual: z.boolean().optional(),
  originalText: z.string(),
  placeholder: z.boolean().optional(),
  options: z.array(z.object({ id: z.string(), text: z.string() })).optional(),
  points: z.number().positive().optional(),
  ab: z.enum(["I", "II", "III"]).optional(),
  modelAnswer: modelAnswer.optional(),
  explanation: z.string().optional(),
  source,
  extraction,
  kb: z.string().optional(),
  tableRows: z.number().int().optional(),
  tableColumns: z.array(z.string()).optional(),
  tags: z.array(z.string()),
});

export interface BankLoadResult {
  bank: QuestionBank | null;
  skipped: { id: string; reason: string }[];
  duplicates: string[];
  error?: string;
}

/** Validiert eine Fragenbank tolerant: defekte Einzelfragen werden übersprungen, Duplikate gemeldet. */
export function parseBank(raw: unknown): BankLoadResult {
  if (!raw || typeof raw !== "object") return { bank: null, skipped: [], duplicates: [], error: "Fragenbank hat ein ungültiges Format." };
  const b = raw as Partial<QuestionBank>;
  if (!Array.isArray(b.questions) || !Array.isArray(b.chapters))
    return { bank: null, skipped: [], duplicates: [], error: "Fragenbank enthält keine Fragen- oder Kapitelliste." };
  const skipped: { id: string; reason: string }[] = [];
  const duplicates: string[] = [];
  const seen = new Set<string>();
  const questions: Question[] = [];
  for (const q of b.questions) {
    const r = questionSchema.safeParse(q);
    if (!r.success) {
      skipped.push({ id: String((q as { id?: string })?.id ?? "?"), reason: r.error.issues[0]?.message ?? "ungültig" });
      continue;
    }
    if (seen.has(r.data.id)) {
      duplicates.push(r.data.id);
      continue;
    }
    seen.add(r.data.id);
    questions.push(r.data as Question);
  }
  questions.sort((a, b) => a.order - b.order);
  return {
    bank: {
      version: b.version ?? 1,
      report: b.report as QuestionBank["report"],
      chapters: b.chapters,
      cases: b.cases ?? [],
      pages: b.pages ?? [],
      questions,
    },
    skipped,
    duplicates,
  };
}
