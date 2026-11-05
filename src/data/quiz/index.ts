import { AREAS, type LessonGroup } from "../lessons";
import type { QTuple } from "./types";
import { Q_A } from "./qA";
import { Q_B } from "./qB";
import { Q_C } from "./qC";
import { Q_D } from "./qD";
import { Q_E } from "./qE";
import { Q_F } from "./qF";
import { Q_G } from "./qG";
export type { QTuple, Level } from "./types";

/** Arabische Namen und Akzentfarben der Themenbereiche (Schlüssel = Lektions-Bereich). */
const META: Record<string, { ar: string; color: string }> = {
  herz: { ar: "القلب والدورة الدموية", color: "#e11d48" },
  atmung: { ar: "التنفس", color: "#0ea5e9" },
  stoffwechsel: { ar: "الأيض والغدد", color: "#10b981" },
  nerven: { ar: "الأعصاب والدماغ", color: "#8b5cf6" },
  bewegung: { ar: "الجهاز الحركي", color: "#a16207" },
  verdauung: { ar: "الهضم والكبد", color: "#ea580c" },
  niere: { ar: "الكلى والمسالك البولية", color: "#0891b2" },
  psyche: { ar: "النفس", color: "#6366f1" },
  infektion: { ar: "العدوى", color: "#65a30d" },
  notfall: { ar: "الطوارئ", color: "#dc2626" },
  haut: { ar: "الجلد والجروح", color: "#db2777" },
  schmerz: { ar: "الألم والرعاية التلطيفية", color: "#f97316" },
  blut: { ar: "الدم والمناعة", color: "#be123c" },
  sinne: { ar: "العينان والأذنان", color: "#0d9488" },
  geschlecht: { ar: "الجهاز التناسلي", color: "#c026d3" },
  start: { ar: "التكوين والامتحان", color: "#2563eb" },
  pflege: { ar: "التمريض والوقاية", color: "#0b8f8f" },
  kommunikation: { ar: "التواصل", color: "#f59e0b" },
  recht: { ar: "القانون والمسؤولية", color: "#7c3aed" },
  qualitaet: { ar: "الجودة والمعايير", color: "#475569" },
  ethik: { ar: "الأخلاقيات والمهنة", color: "#b45309" },
  gesundheit: { ar: "صحة الممرضين", color: "#16a34a" },
  system: { ar: "النظام الصحي", color: "#4f46e5" },
  modelle: { ar: "نماذج ونظريات التمريض", color: "#9333ea" },
  mensch: { ar: "الإنسان والفريق", color: "#0284c7" },
  technik: { ar: "تقنيات التمريض", color: "#0f766e" },
  lebensphasen: { ar: "مراحل الحياة", color: "#84cc16" },
  therapie: { ar: "العلاج والحالات الخاصة", color: "#e11d48" },
  konzepte: { ar: "مفاهيم التمريض", color: "#0e7490" },
  assessment: { ar: "التقييم والتقدير", color: "#7c2d12" },
};

export interface QuizTopic { id: string; group: LessonGroup; de: string; ar: string; icon: string; color: string; qs: QTuple[] }

const BANK: Record<string, QTuple[]> = {};
for (const part of [Q_A, Q_B, Q_C, Q_D, Q_E, Q_F, Q_G]) for (const k of Object.keys(part)) (BANK[k] ??= []).push(...part[k]);

export const QUIZ_TOPICS: QuizTopic[] = (["krank", "ausbildung"] as LessonGroup[]).flatMap((g) =>
  AREAS[g].map((a) => ({ id: a.id, group: g, de: a.label, ar: META[a.id]?.ar ?? a.label, icon: a.icon, color: META[a.id]?.color ?? "#0b8f8f", qs: BANK[a.id] ?? [] })).filter((t) => t.qs.length > 0),
);
export const QUIZ_BANK_KEYS = Object.keys(BANK);
