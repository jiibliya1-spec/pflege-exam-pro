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
