/**
 * Zentrale Typen für Pflege Exam Pro.
 *
 * Wichtig: Das Quellbuch ("Pflegias Prüfungstraining") besteht überwiegend aus offenen,
 * punktebewerteten Fallbeispiel-Aufgaben. Das Datenmodell bildet deshalb nicht nur
 * Multiple-Choice ab, sondern auch offene Fragen, Tabellen- und Kurzantwort-Aufgaben.
 */

export type QuestionType =
  | "single" // Single-Choice
  | "multiple" // Multiple-Select
  | "truefalse"
  | "short" // Kurzantwort
  | "open" // offene Frage / Freitext
  | "table"; // Tabelle ausfüllen (Freitext je Zeile)

/** Anforderungsbereich (AB I–III) wie im Buch angegeben */
export type Anforderungsbereich = "I" | "II" | "III";

/** Verifikationsstatus einer Musterlösung / eines Antwortschlüssels */
export type AnswerStatus =
  | "verified" // vom Administrator gegen die Quellseite geprüft
  | "unverified" // aus OCR extrahiert, noch nicht geprüft
  | "unavailable"; // im Buch nicht vorhanden / nicht extrahierbar

/** Extraktionsstatus eines importierten Datensatzes */
export type ExtractionStatus =
  | "ok" // hohe OCR-Konfidenz, Struktur plausibel
  | "review" // Prüfung empfohlen (niedrige Konfidenz oder unsichere Struktur)
  | "approved" // vom Administrator freigegeben
  | "rejected"; // vom Administrator verworfen

export interface ChoiceOption {
  id: string; // "A", "B", ...
  text: string;
}

export interface ModelAnswer {
  /** Musterlösung als Text (Original-OCR, ggf. vom Admin korrigiert) */
  text: string;
  status: AnswerStatus;
  /** Index der richtigen Optionen (nur single/multiple/truefalse) */
  correctOptionIds?: string[];
  /** PDF-Seite, auf der die Lösung steht */
  sourcePage?: number;
  /** Aufgaben, die sich im Buch dieselbe Musterlösung teilen (Überschrift ohne eigenen Text) */
  sharedWith?: string[];
}

export interface SourceRef {
  /** 1-basierte Seitennummer im bereitgestellten PDF */
  pdfPage: number;
  /** Gedruckte Seitenzahl im Buch (pdfPage + offset), falls bekannt */
  printedPage?: number;
}

export interface Question {
  id: string;
  /** Position in der Originalreihenfolge des Buches (aufsteigend) */
  order: number;
  chapterId: string;
  topic?: string;
  caseId?: string;
  /** Originalnummer wie im Buch, z. B. "1", "2a", "2b" */
  label: string;
  type: QuestionType;
  /** Original-Aufgabentext (deutsch, aus OCR bzw. Admin-Korrektur) */
  text: string;
  /** Aufgabenstamm der übergeordneten Hauptaufgabe (z. B. "Max leidet an …"), falls Teilaufgabe */
  stem?: string;
  /** Ursprünglicher OCR-Text, damit Korrekturen vergleichbar bleiben */
  originalText: string;
  options?: ChoiceOption[];
  /** Erreichbare Punkte laut Buch, falls angegeben */
  points?: number;
  ab?: Anforderungsbereich;
  modelAnswer?: ModelAnswer;
  explanation?: string;
  source: SourceRef;
  extraction: {
    status: ExtractionStatus;
    /** mittlere OCR-Konfidenz 0–100 */
    confidence: number;
    notes?: string[];
  };
  /** true, wenn manuell im Admin-Bereich ergänzt (nicht aus OCR) */
  manual?: boolean;
  /** Kompetenzbereich (mündliche Fälle): "III" | "IV" | "V" */
  kb?: string;
  /** Anzahl vorgegebener Tabellenzeilen bei type "table" */
  tableRows?: number;
  tableColumns?: string[];
  tags: string[];
}

export interface CaseStudy {
  id: string;
  chapterId: string;
  title: string;
  /** Originaltext der Fallsituation, unverändert */
  narrative: string;
  originalNarrative: string;
  order: number;
  source: SourceRef & { endPdfPage?: number };
  totalPoints?: number | null;
  /** "written" = schriftliche Prüfung, "oral" = mündliche Prüfung */
  kind?: "written" | "oral";
  /** Themenschwerpunkte (schriftlich) */
  themes?: string;
  /** Setting (mündlich), z. B. "stationäre Akutpflege – Altersgruppe 19–59 Jahre" */
  setting?: string;
  /** Aufgabenstellung des Falls (schriftlich) */
  instruction?: string;
  /** Vorbereitungsaufgaben (mündlich) inkl. Schwerpunkte */
  preparation?: string;
  /** Fußnote(n) zur Fallsituation */
  footnote?: string;
  /** PDF-Seitenbereiche der Abschnitte des Falls */
  sections?: { tasks: [number, number]; solutions?: [number, number | null]; evaluation?: number };
  /** Roh-OCR der Seite "Auswertung" (Notenschlüssel) */
  gradingScale?: string;
  extraction: { status: ExtractionStatus; confidence: number; notes?: string[] };
}

export interface Chapter {
  id: string;
  /** Hierarchie-Nummer wie im Buch, z. B. "2.2" */
  number: string;
  title: string;
  parentId?: string;
  order: number;
  source: SourceRef;
}

export interface PageInfo {
  pdfPage: number;
  printedPage?: number;
  chars: number;
  meanConfidence: number;
  status: "ok" | "low-confidence" | "empty" | "error";
  note?: string;
}

export interface ImportReport {
  generatedAt: string;
  sourceFile: string;
  pagesInPdf: number;
  pagesProcessed: number;
  printedPageOffset: number | null;
  ocr: { engine: string; language: string; dpi: number; textLayerPresent: boolean };
  chapters: number;
  cases: number;
  questions: number;
  questionTypes: Record<string, number>;
  questionsWithModelAnswer: number;
  questionsVerified: number;
  pagesNeedingReview: number[];
  lowConfidencePages: number[];
  emptyPages: number[];
  errors: string[];
  notes: string[];
  /** true nur, wenn Abdeckung geprüft wurde */
  coverageVerified: boolean;
}

export interface QuestionBank {
  version: number;
  report: ImportReport;
  chapters: Chapter[];
  cases: CaseStudy[];
  questions: Question[];
  pages: PageInfo[];
}

// -------------------- Nutzerdaten --------------------

export interface AttemptRecord {
  id: string;
  questionId: string;
  sessionId: string;
  at: number; // epoch ms
  /** Antworttext (open/short/table) oder gewählte Option-IDs */
  answerText?: string;
  selectedOptionIds?: string[];
  tableCells?: string[];
  /** erreichte Punkte (Selbstbewertung oder automatisch) */
  pointsAwarded: number | null;
  pointsMax: number;
  /** "auto" = automatisch gegen verifizierten Schlüssel, "self" = Selbstbewertung, "none" = unbewertet */
  gradedBy: "auto" | "self" | "none";
  correct: boolean | null; // true wenn volle Punktzahl
  timeMs: number;
}

export type ExamMode = "practice" | "mock" | "chapter" | "custom" | "mistakes" | "bookmarks" | "case" | "due";

export type QuestionSource =
  | "all"
  | "chapters"
  | "bookmarks"
  | "incorrect"
  | "unanswered"
  | "due"
  | "case";

export interface ExamConfig {
  title: string;
  mode: ExamMode;
  source: QuestionSource;
  chapterIds: string[];
  caseIds: string[];
  questionCount: number;
  questionTypes: QuestionType[];
  order: "source" | "random";
  shuffleOptions: boolean;
  /** Gesamtzeitlimit in Minuten, 0 = kein Limit */
  timeLimitMin: number;
  /** Zeitlimit pro Frage in Sekunden, 0 = kein Limit */
  perQuestionSec: number;
  feedback: "instant" | "end";
  showExplanations: "instant" | "end";
  passPercent: number;
  allowRepeat: boolean;
  saveSession: boolean;
  seed: number;
}

export interface SessionState {
  id: string;
  config: ExamConfig;
  questionIds: string[];
  /** gewählte Optionsreihenfolge je Frage (nach Shuffle) */
  optionOrder: Record<string, string[]>;
  answers: Record<string, SessionAnswer>;
  flagged: string[];
  currentIndex: number;
  startedAt: number;
  updatedAt: number;
  elapsedMs: number;
  finishedAt?: number;
}

export interface SessionAnswer {
  selectedOptionIds?: string[];
  text?: string;
  tableCells?: string[];
  /** Selbstbewertung offener Fragen */
  selfPoints?: number;
  submitted?: boolean;
  timeMs: number;
}

export interface QuestionUserData {
  bookmarked: boolean;
  note: string;
  /** Spaced Repetition (Leitner-Boxen) */
  box: number;
  dueAt: number | null;
}

export interface Settings {
  theme: "light" | "dark" | "system";
  uiLanguage: "de" | "de-ar";
  defaultMode: ExamMode;
  defaultQuestionCount: number;
  defaultTimeLimitMin: number;
  defaultFeedback: "instant" | "end";
  passPercent: number;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  sound: boolean;
  animations: boolean;
  reducedMotion: boolean;
  fontScale: number; // 0.9 – 1.4
  studyGoalPerDay: number; // Fragen pro Tag
}

export interface StudyLogEntry {
  sessionId: string;
  title: string;
  mode: ExamMode;
  startedAt: number;
  finishedAt?: number;
  durationMs: number;
  answered: number;
  total: number;
  scorePercent: number | null;
  passed: boolean | null;
}
