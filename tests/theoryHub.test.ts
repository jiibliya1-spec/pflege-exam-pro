import { describe, expect, it } from "vitest";
import { LESSONS } from "../src/data/lessons";
import { HUB } from "../src/data/theoryHub";
import { ORGAN_PARTS, ORGAN_TITLE } from "../src/data/organParts";

describe("Theorien und Modelle", () => {
  it("verweist nur auf vorhandene Lektionen, ohne Doppelte", () => {
    const ids = new Set(LESSONS.map((l) => l.id));
    const all = HUB.flatMap((h) => h.lessons);
    expect(all.filter((i) => !ids.has(i))).toEqual([]);
    expect(new Set(all).size).toBe(all.length);
  });
});
describe("Organteile", () => {
  it("jede Abbildung hat Titel und Teile in allen Sprachen", () => {
    for (const [k, parts] of Object.entries(ORGAN_PARTS)) {
      expect(ORGAN_TITLE[k], k).toBeTruthy();
      expect(parts.length, k).toBeGreaterThan(2);
      for (const p of parts) for (const l of ["de", "ar", "en", "fr", "tr"] as const) expect(p.name[l]?.trim(), `${k}/${l}`).toBeTruthy();
    }
  });
});
