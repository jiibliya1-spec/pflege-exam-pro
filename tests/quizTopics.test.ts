import { describe, it, expect } from "vitest";
import { QUIZ_TOPICS } from "@/data/quiz";

const parts = (s: string) => s.split("|");

describe("Kurz-Quiz Fragenbank", () => {
  it("Themen eindeutig, mit Fragen aller Stufen", () => {
    const ids = new Set(QUIZ_TOPICS.map((t) => t.id));
    expect(ids.size).toBe(QUIZ_TOPICS.length);
    for (const t of QUIZ_TOPICS) for (const l of [1, 2, 3]) expect(t.qs.filter((q) => q[0] === l).length, `${t.id} Stufe ${l}`).toBeGreaterThanOrEqual(2);
  });
  it("Format: de|ar, 4 Optionen, gültige Lösung, keine doppelten Optionen", () => {
    const bad: string[] = [];
    for (const t of QUIZ_TOPICS) t.qs.forEach((q, i) => {
      const [lvl, qq, o, c, w] = q;
      const tag = `${t.id}#${i}`;
      if (![1, 2, 3].includes(lvl) || c < 0 || c > 3 || o.length !== 4) bad.push(`${tag} struktur`);
      if (parts(qq).length !== 2) bad.push(`${tag} frage`);
      if (o.some((x) => parts(x).length > 2) || new Set(o.map((x) => parts(x)[0])).size !== 4) bad.push(`${tag} optionen`);
      if (w.split("\n\n").some((p) => parts(p).length !== 2) || w.length < 120) bad.push(`${tag} erklaerung`);
    });
    expect(bad).toEqual([]);
  });
});
