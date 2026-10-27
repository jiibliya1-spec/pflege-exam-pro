import { describe, it, expect } from "vitest";
import { SCENES } from "@/data/caseScenes";
import { GLOSSARY, splitGloss } from "@/lib/glossary";
import { translate } from "@/lib/i18n";
import bank from "../public/data/bank.json";

describe("Szenen", () => {
  it("decken alle Fälle ab, mit Texten in allen 5 Sprachen", () => {
    const ids = (bank as { cases: { id: string }[] }).cases.map((c) => c.id);
    expect(SCENES.map((s) => s.id).sort()).toEqual([...ids].sort());
    for (const s of SCENES) {
      expect(s.steps.length).toBeGreaterThanOrEqual(3);
      for (const t of [s.problem, ...s.steps.map((x) => x.t)]) for (const l of ["de", "ar", "en", "fr", "tr"] as const) expect(t[l]?.trim(), `${s.id} ${l}`).toBeTruthy();
    }
  });
});

describe("Wörterbuch", () => {
  it("hat alle Übersetzungen", () => {
    for (const g of GLOSSARY) for (const l of ["ar", "en", "fr", "tr"] as const) expect(g.tr[l], g.de).toBeTruthy();
  });
  it("erkennt Fachwörter und Beugungen", () => {
    const parts = splitGloss("Die Dekubitusprophylaxe und der Pflegeprozess sind wichtig.", new Set());
    expect(parts.filter((p) => typeof p !== "string").length).toBe(2);
  });
  it("UI-Texte existieren in allen Sprachen", () => {
    for (const l of ["de", "ar", "en", "fr", "tr"] as const) expect(translate(l, "nav.dashboard")).not.toBe("nav.dashboard");
  });
});
