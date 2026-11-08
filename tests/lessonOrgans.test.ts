import { describe, it, expect } from "vitest";
import { LESSON_ORGANS } from "@/data/lessonOrgans";
import { ATLAS_CFGS } from "@/data/atlasRegistry";
import { lessonById } from "@/data/lessons";

describe("Lektion zu 3D-Organ", () => {
  it("jede Zuordnung verweist auf eine vorhandene Lektion, einen Atlas und vorhandene Strukturen", () => {
    for (const [lid, o] of Object.entries(LESSON_ORGANS)) {
      expect(lessonById(lid), lid).toBeTruthy();
      const cfg = ATLAS_CFGS.find((c) => c.key === o.atlas);
      expect(cfg, `${lid}:${o.atlas}`).toBeTruthy();
      for (const id of o.ids) expect(cfg!.items[id], `${lid}:${id}`).toBeTruthy();
    }
  });
});

import { DISEASE_STORIES, FLOW_PATHS } from "@/data/atlasFlows";
describe("Animationen", () => {
  it("Krankheitsgeschehen: Lektion, Organ-Zuordnung und Strukturen stimmen", () => {
    for (const [lid, st] of Object.entries(DISEASE_STORIES)) {
      const o = LESSON_ORGANS[lid];
      expect(o, lid).toBeTruthy();
      const cfg = ATLAS_CFGS.find((c) => c.key === o.atlas)!;
      for (const s of st.steps) for (const id of s.ids) { expect(cfg.items[id], `${lid}:${id}`).toBeTruthy(); expect(o.ids.includes(id), `${lid}:${id} nicht in der Organauswahl`).toBe(true); }
    }
  });
  it("Fließwege: Strukturen vorhanden", () => {
    for (const [key, paths] of Object.entries(FLOW_PATHS)) {
      const cfg = ATLAS_CFGS.find((c) => c.key === key)!;
      for (const p of paths) for (const s of p.steps) for (const id of s.ids) expect(cfg.items[id], `${key}:${id}`).toBeTruthy();
    }
  });
});
