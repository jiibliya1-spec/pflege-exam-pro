/** Kurz-Quiz: Fragen im Format "Deutsch|Arabisch" (genau ein „|“ pro Text). */
export type QTuple = [q: string, opts: [string, string, string, string], correct: 0 | 1 | 2 | 3, why: string];
export interface QuizTopic {
  id: string;
  de: string;
  ar: string;
  icon: string;
  /** Tailwind-unabhängige Akzentfarbe (hex) */
  color: string;
  qs: QTuple[];
}
