import { describe, it, expect } from "vitest";
import { QUIZ_TOPICS } from "@/data/quiz";
import { LESSONS } from "@/data/lessons";

describe("Quiz-Lektionsbezug", () => {
  it("verweist nur auf existierende Lektionen", () => {
    const ids = new Set(LESSONS.map((l) => l.id));
    const bad = QUIZ_TOPICS.flatMap((t) => t.qs.filter((q) => q[5] && !ids.has(q[5])).map((q) => `${t.id}:${q[5]}`));
    expect(bad).toEqual([]);
  });
  it("Abdeckung (Info)", () => {
    const cnt = new Map<string, number>();
    for (const t of QUIZ_TOPICS) for (const q of t.qs) if (q[5]) cnt.set(q[5], (cnt.get(q[5]) ?? 0) + 1);
    const missing = LESSONS.filter((l) => !cnt.get(l.id)).map((l) => l.id);
    require("fs").writeFileSync("/tmp/claude-0/coverage.json", JSON.stringify({ lessons: LESSONS.length, covered: LESSONS.length - missing.length, missing }));
    expect(true).toBe(true);
  });
});
