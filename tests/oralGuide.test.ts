import { readFileSync, writeFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { findOperators, focusPoints, parseSetting } from "../src/data/oralGuide";

const bank = JSON.parse(readFileSync("public/data/bank.json", "utf8"));
const oral = bank.cases.filter((c: { kind: string }) => c.kind === "oral");

describe("Mündliche Prüfung: Hilfen", () => {
  it("12 mündliche Fälle mit Schwerpunkten und Setting", () => {
    expect(oral.length).toBe(12);
    for (const c of oral) {
      expect(focusPoints(c.preparation).length, c.id).toBeGreaterThan(0);
      expect(parseSetting(c.setting).age, c.id).not.toBe("");
    }
  });
  it("fast jede mündliche Aufgabe bekommt einen Operator-Hinweis", () => {
    const qs = bank.questions.filter((q: { caseId?: string }) => q.caseId?.startsWith("m"));
    const none = qs.filter((q: { text: string }) => findOperators(q.text).length === 0);
    if (process.env.DUMP_OP) writeFileSync("/tmp/claude-0/op-none.txt", none.map((q: { id: string; text: string }) => `${q.id}: ${q.text.slice(0, 160).replace(/\n/g, " ")}`).join("\n"));
    expect(none.length / qs.length).toBeLessThan(0.12);
  });
  it("erkennt typische Operatoren", () => {
    expect(findOperators("Nennen Sie die Prinzipien und erläutern Sie diese.").map((h) => h.op.id)).toEqual(["nennen", "erklaeren"]);
    expect(findOperators("Beurteilen Sie das Handeln.")[0].op.ab).toBe(3);
  });
});
