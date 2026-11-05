import { describe, it, expect } from "vitest";
import { QUIZ_TOPICS } from "@/data/quiz";

const two = (s: string) => s.split("|").length === 2 && s.split("|").every((x) => x.trim().length > 0);

describe("Kurz-Quiz Fragenbank", () => {
  it("hat eindeutige Themen mit Fragen", () => {
    const ids = new Set(QUIZ_TOPICS.map((t) => t.id));
    expect(ids.size).toBe(QUIZ_TOPICS.length);
    for (const t of QUIZ_TOPICS) expect(t.qs.length).toBeGreaterThanOrEqual(8);
  });
  it("jede Frage: 4 Optionen, gültige Lösung, de|ar", () => {
    const bad: string[] = [];
    for (const t of QUIZ_TOPICS) t.qs.forEach((q, i) => {
      const [qq, o, c, w] = q;
      if (![qq, w, ...o].every(two) || o.length !== 4 || c < 0 || c > 3) bad.push(`${t.id}#${i}: ${qq}`);
    });
    expect(bad).toEqual([]);
  });
});
