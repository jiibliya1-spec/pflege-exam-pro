import { describe, expect, it } from "vitest";
import { buildSession, defaultConfig, EMPTY_CONTEXT, eligibleQuestions, validateConfig } from "@/lib/exam";
import { remainingMs } from "@/lib/session";
import { shuffle } from "@/lib/random";
import { nextSrs } from "@/lib/srs";
import { choice, mkQ } from "./helpers";

const pool = [
  ...Array.from({ length: 6 }, (_, i) => choice(`s${i}`, ["A"], "single", true, { order: i + 1 })),
  mkQ({ id: "k1", caseId: "K", order: 10, type: "open" }),
  mkQ({ id: "k2", caseId: "K", order: 11, type: "open" }),
  mkQ({ id: "k3", caseId: "K", order: 12, type: "open" }),
  mkQ({ id: "rej", order: 20, extraction: { status: "rejected", confidence: 1 } }),
];
const opts = { id: "sess", now: 1000 };

describe("Prüfungsaufbau", () => {
  it("validiert Konfiguration", () => {
    expect(validateConfig(defaultConfig({ questionCount: 0 })).length).toBeGreaterThan(0);
    expect(validateConfig(defaultConfig({ questionTypes: [] })).length).toBeGreaterThan(0);
    expect(validateConfig(defaultConfig({ source: "chapters" })).length).toBeGreaterThan(0);
    expect(validateConfig(defaultConfig())).toEqual([]);
  });
  it("verworfene Fragen sind nie wählbar", () => {
    expect(eligibleQuestions(pool, defaultConfig(), EMPTY_CONTEXT, undefined).some((q) => q.id === "rej")).toBe(false);
  });
  it("ändert die Fragenzahl nie stillschweigend, bietet Alternativen", () => {
    const r = buildSession(pool, defaultConfig({ questionCount: 50 }), EMPTY_CONTEXT, opts);
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors[0]).toMatch(/nur 9/);
      expect(r.alternatives).toContain(9);
    }
  });
  it("leere Fragenbank → verständlicher Fehler", () => {
    const r = buildSession([], defaultConfig(), EMPTY_CONTEXT, opts);
    expect(r.ok).toBe(false);
  });
  it("Fallbeispiel-Fragen bleiben zusammen und in Reihenfolge (auch bei Zufall)", () => {
    for (let seed = 1; seed <= 30; seed++) {
      const r = buildSession(pool, defaultConfig({ questionCount: 5, order: "random", seed }), EMPTY_CONTEXT, opts);
      if (!r.ok) continue;
      const ids = r.session.questionIds;
      const has = ids.filter((i) => i.startsWith("k"));
      expect([0, 3]).toContain(has.length);
      if (has.length) {
        const idx = ids.indexOf("k1");
        expect(ids.slice(idx, idx + 3)).toEqual(["k1", "k2", "k3"]);
      }
    }
  });
  it("Zufall ist mit gleichem Seed reproduzierbar, verliert keine Fragen", () => {
    const a = shuffle([1, 2, 3, 4, 5, 6], 42);
    expect(shuffle([1, 2, 3, 4, 5, 6], 42)).toEqual(a);
    expect([...a].sort()).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("Quellenfilter: Lesezeichen, Fehler, fällig", () => {
    const ctx = { ...EMPTY_CONTEXT, bookmarked: new Set(["s1"]), lastCorrect: { s2: false }, dueIds: new Set(["s3"]) };
    const ids = (source: "bookmarks" | "incorrect" | "due") => eligibleQuestions(pool, defaultConfig({ source }), ctx).map((q) => q.id);
    expect(ids("bookmarks")).toEqual(["s1"]);
    expect(ids("incorrect")).toEqual(["s2"]);
    expect(ids("due")).toEqual(["s3"]);
  });
  it("Zeitlimit: Restzeit basiert auf aktiver Zeit", () => {
    const r = buildSession(pool, defaultConfig({ questionCount: 2, timeLimitMin: 10 }), EMPTY_CONTEXT, opts);
    if (!r.ok) throw new Error("build");
    expect(remainingMs({ ...r.session, elapsedMs: 60_000 })).toBe(540_000);
    expect(remainingMs({ ...r.session, elapsedMs: 9e9 })).toBe(0);
    const n = buildSession(pool, defaultConfig({ questionCount: 2 }), EMPTY_CONTEXT, opts);
    if (n.ok) expect(remainingMs(n.session)).toBeNull();
  });
  it("Sitzung enthält Antworten/Fortschritt und lässt sich serialisieren (Autosave/Resume)", () => {
    const r = buildSession(pool, defaultConfig({ questionCount: 3 }), EMPTY_CONTEXT, opts);
    if (!r.ok) throw new Error("build");
    const s = { ...r.session, currentIndex: 2, answers: { s0: { selectedOptionIds: ["A"], timeMs: 5 } } };
    expect(JSON.parse(JSON.stringify(s))).toEqual(s);
  });
});

describe("Wiederholung (Leitner)", () => {
  it("richtig → höhere Box, falsch → Box 0, Maximum Box 5", () => {
    const day = 86_400_000;
    expect(nextSrs(0, true, 0)).toEqual({ box: 1, dueAt: day });
    expect(nextSrs(3, false, 0).box).toBe(0);
    expect(nextSrs(5, true, 0).box).toBe(5);
  });
});
