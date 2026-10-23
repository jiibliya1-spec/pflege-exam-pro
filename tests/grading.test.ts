import { describe, expect, it } from "vitest";
import { gradeQuestion, passed, summarize } from "@/lib/grading";
import { choice, mkQ } from "./helpers";

describe("Bewertung", () => {
  it("Single-Choice: richtig / falsch", () => {
    const q = choice("q", ["B"]);
    expect(gradeQuestion(q, { selectedOptionIds: ["B"], timeMs: 1 }).pointsAwarded).toBe(1);
    expect(gradeQuestion(q, { selectedOptionIds: ["A"], timeMs: 1 }).pointsAwarded).toBe(0);
  });
  it("Single-Choice ohne verifizierten Schlüssel ist unbewertet", () => {
    const r = gradeQuestion(choice("q", ["B"], "single", false), { selectedOptionIds: ["B"], timeMs: 1 });
    expect(r.status).toBe("ungraded");
    expect(r.scorable).toBe(false);
  });
  it("Multiple-Select: Teilpunkte, falsche Wahl zieht ab, nie negativ", () => {
    const q = choice("q", ["A", "B"], "multiple", true, { points: 4 });
    expect(gradeQuestion(q, { selectedOptionIds: ["A", "B"], timeMs: 1 }).pointsAwarded).toBe(4);
    expect(gradeQuestion(q, { selectedOptionIds: ["A"], timeMs: 1 }).pointsAwarded).toBe(2);
    expect(gradeQuestion(q, { selectedOptionIds: ["A", "C"], timeMs: 1 }).pointsAwarded).toBe(0);
    expect(gradeQuestion(q, { selectedOptionIds: ["C", "D"], timeMs: 1 }).pointsAwarded).toBe(0);
  });
  it("Offene Frage: Selbstbewertung, gedeckelt auf Maximalpunkte", () => {
    const q = mkQ({ id: "o", type: "open", points: 3 });
    expect(gradeQuestion(q, { text: "x", timeMs: 1 }).status).toBe("ungraded");
    expect(gradeQuestion(q, { text: "x", selfPoints: 2, timeMs: 1 }).pointsAwarded).toBe(2);
    expect(gradeQuestion(q, { text: "x", selfPoints: 99, timeMs: 1 }).pointsAwarded).toBe(3);
    expect(gradeQuestion(q, { text: "x", selfPoints: -5, timeMs: 1 }).pointsAwarded).toBe(0);
  });
  it("Unbeantwortete offene Frage zählt 0 Punkte", () => {
    const r = gradeQuestion(mkQ({ id: "o", type: "open", points: 3 }), undefined);
    expect(r.status).toBe("unanswered");
    expect(r.pointsAwarded).toBe(0);
    expect(r.scorable).toBe(true);
  });
  it("Zusammenfassung schließt Unbewertete aus und liefert null ohne Basis", () => {
    const a = gradeQuestion(choice("a", ["A"]), { selectedOptionIds: ["A"], timeMs: 1 });
    const b = gradeQuestion(choice("b", ["A"], "single", false), { selectedOptionIds: ["A"], timeMs: 1 });
    const s = summarize([a, b]);
    expect(s.percent).toBe(100);
    expect(s.ungraded).toBe(1);
    expect(summarize([b]).percent).toBeNull();
    expect(summarize([]).percent).toBeNull();
  });
  it("Bestehen: Schwelle ist konfigurierbar (>=)", () => {
    expect(passed(60, 60)).toBe(true);
    expect(passed(59.99, 60)).toBe(false);
    expect(passed(null, 60)).toBeNull();
  });
});
