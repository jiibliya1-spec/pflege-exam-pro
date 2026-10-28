import { describe, expect, it } from "vitest";
import { LESSONS } from "../src/data/lessons";
import { PROFILES, PROFILE_KEYS, profileFor } from "../src/data/diseaseProfiles";

describe("Krankheitsprofile", () => {
  it("gehören zu vorhandenen Krankheits-Lektionen", () => {
    const ok = new Set(LESSONS.filter((l) => l.group === "krank").map((l) => l.id));
    expect(Object.keys(PROFILES).filter((id) => !ok.has(id))).toEqual([]);
  });
  it("jedes Profil hat Definition, Symptome, Therapie und Pflege", () => {
    for (const [id, p] of Object.entries(PROFILES)) {
      expect(p.def.length, id).toBeGreaterThan(20);
      for (const k of ["sym", "ther", "pfl"] as const) expect(p[k].length, `${id}.${k}`).toBeGreaterThan(0);
      for (const k of PROFILE_KEYS) p[k].forEach((x) => expect(x.trim().length, `${id}.${k}`).toBeGreaterThan(0));
    }
  });
  it("Arabisch hat dieselbe Form wie Deutsch", () => {
    for (const [id, de] of Object.entries(PROFILES)) {
      const r = profileFor(id, "ar")!;
      if (!r.translated) continue;
      expect(r.p.def.trim().length, id).toBeGreaterThan(0);
      for (const k of PROFILE_KEYS) {
        expect(r.p[k].length, `${id}.${k}`).toBe(de[k].length);
        r.p[k].forEach((x) => expect(x.trim().length, `${id}.${k}`).toBeGreaterThan(0));
      }
    }
  });
});
