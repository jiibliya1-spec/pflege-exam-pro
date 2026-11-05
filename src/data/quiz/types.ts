/**
 * Kurz-Quiz. Texte im Format "Deutsch|Arabisch" (höchstens ein „|“).
 * Optionen dürfen ohne Arabisch stehen (Fachbegriffe, Zahlen, Medikamente).
 * Erklärung: Absätze mit \n\n trennen; „Merke:“ am Ende ist üblich.
 */
export type Level = 1 | 2 | 3;
export type QTuple = [level: Level, q: string, opts: [string, string, string, string], correct: 0 | 1 | 2 | 3, why: string];
