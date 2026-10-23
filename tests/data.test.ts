import { describe, expect, it } from "vitest";
import { parseBank } from "@/lib/bankSchema";
import { emptyState, sanitizeState } from "@/lib/userState";
import { DEFAULT_SETTINGS } from "@/lib/defaults";
import { mkQ } from "./helpers";
import { readFileSync, existsSync } from "node:fs";

describe("Import-Validierung", () => {
  it("lehnt Müll ab", () => {
    expect(parseBank(null).error).toBeTruthy();
    expect(parseBank({}).error).toBeTruthy();
  });
  it("überspringt defekte Fragen und meldet Duplikate", () => {
    const r = parseBank({ chapters: [], questions: [mkQ({ id: "a" }), { id: "kaputt" }, mkQ({ id: "a" })] });
    expect(r.bank?.questions).toHaveLength(1);
    expect(r.skipped).toHaveLength(1);
    expect(r.duplicates).toEqual(["a"]);
  });
  it("leere Bank ist gültig (Leerzustand)", () => {
    expect(parseBank({ chapters: [], questions: [] }).bank?.questions).toEqual([]);
  });
  it("die ausgelieferte bank.json besteht die Validierung ohne übersprungene Fragen", () => {
    const p = "public/data/bank.json";
    if (!existsSync(p)) return;
    const r = parseBank(JSON.parse(readFileSync(p, "utf8")));
    expect(r.error).toBeUndefined();
    expect(r.skipped).toEqual([]);
    expect(r.duplicates).toEqual([]);
    // Quelltreue: ohne Admin-Prüfung darf keine Antwort als verifiziert gelten
    for (const q of r.bank!.questions) {
      if (q.modelAnswer?.status === "verified") throw new Error(`${q.id} verifiziert ohne Admin-Prüfung`);
      expect(q.originalText).toBeTruthy();
    }
  });
});

describe("Einstellungen / Nutzerdaten", () => {
  it("Standardzustand ist gültig", () => {
    const { state, warnings } = sanitizeState(emptyState());
    expect(warnings).toEqual([]);
    expect(state.settings).toEqual(DEFAULT_SETTINGS);
  });
  it("Einstellungen überleben JSON-Roundtrip", () => {
    const s = emptyState();
    s.settings = { ...s.settings, passPercent: 75, theme: "dark", uiLanguage: "de-ar" };
    const back = sanitizeState(JSON.parse(JSON.stringify(s))).state;
    expect(back.settings.passPercent).toBe(75);
    expect(back.settings.theme).toBe("dark");
  });
  it("beschädigte Einstellungen → Standardwerte + Warnung, App bricht nicht", () => {
    const r = sanitizeState({ settings: { passPercent: 500 } });
    expect(r.state.settings).toEqual(DEFAULT_SETTINGS);
    expect(r.warnings.length).toBeGreaterThan(0);
  });
  it("defekte Antworteinträge werden verworfen", () => {
    const r = sanitizeState({ attempts: [{ id: "1", questionId: "q", at: 1 }, { id: 5 }, { id: "1", questionId: "q", at: 2 }] });
    expect(r.state.attempts).toHaveLength(1);
    expect(r.warnings.length).toBeGreaterThan(0);
  });
  it("Datenmüll als Ganzes → leerer Zustand", () => {
    expect(sanitizeState("x").state).toEqual(emptyState());
  });
});

describe("Verknüpfung Fälle ↔ Aufgaben ↔ Musterlösungen (ausgelieferte Fragenbank)", () => {
  const p = "public/data/bank.json";
  const load = () => (existsSync(p) ? parseBank(JSON.parse(readFileSync(p, "utf8"))).bank : null);
  it("jeder Fall hat Aufgaben, Fallsituation und eindeutige Aufgabennummern", () => {
    const bank = load();
    if (!bank) return;
    expect(bank.cases.length).toBeGreaterThanOrEqual(30);
    for (const c of bank.cases) {
      const qs = bank.questions.filter((q) => q.caseId === c.id);
      expect(qs.length, `${c.id} ohne Aufgaben`).toBeGreaterThan(3);
      expect(c.narrative.length, `${c.id} ohne Fallsituation`).toBeGreaterThan(300);
      const labels = qs.map((q) => q.label);
      expect(new Set(labels).size, `${c.id}: doppelte Aufgabennummern`).toBe(labels.length);
    }
  });
  it("Musterlösungen sind nie verifiziert und fehlende sind als unavailable mit Hinweis markiert", () => {
    const bank = load();
    if (!bank) return;
    let withAnswer = 0;
    for (const q of bank.questions) {
      const ma = q.modelAnswer;
      expect(ma, q.id).toBeDefined();
      if (ma!.text.trim()) {
        withAnswer++;
        expect(ma!.status).toBe("unverified");
      } else {
        expect(ma!.status).toBe("unavailable");
        expect(q.extraction.status).toBe("review");
        expect((q.extraction.notes ?? []).length).toBeGreaterThan(0);
      }
      for (const other of ma!.sharedWith ?? []) expect(bank.questions.some((x) => x.caseId === q.caseId && x.label === other), `${q.id} sharedWith ${other}`).toBe(true);
    }
    expect(withAnswer / bank.questions.length).toBeGreaterThan(0.8);
  });
  it("mündliche Fälle enthalten Fallanalyse (0) und Kompetenzbereiche", () => {
    const bank = load();
    if (!bank) return;
    for (const c of bank.cases.filter((x) => x.kind === "oral")) {
      const qs = bank.questions.filter((q) => q.caseId === c.id);
      expect(qs.some((q) => q.label === "0"), c.id).toBe(true);
      expect(qs.filter((q) => q.kb).length, c.id).toBeGreaterThanOrEqual(4);
    }
  });
});
