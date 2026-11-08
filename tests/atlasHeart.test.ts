import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { HEART_ITEMS } from "@/data/atlasHeart";

describe("Atlas Herz", () => {
  it("jede Struktur im 3D-Modell hat Beschriftung (de, la, ar, Funktion, Klinik) und umgekehrt", () => {
    const d = readFileSync("public/models/heart.glb");
    const len = d.readUInt32LE(12);
    const json = JSON.parse(d.subarray(20, 20 + len).toString("utf8")) as { nodes: { name: string }[] };
    const names = json.nodes.map((n) => n.name).sort();
    expect(Object.keys(HEART_ITEMS).sort()).toEqual(names);
    for (const [id, it] of Object.entries(HEART_ITEMS)) {
      for (const v of [it.de, it.la, it.ar, it.fn[0], it.fn[1], it.kl[0], it.kl[1]]) expect(v.trim().length, id).toBeGreaterThan(5);
    }
  });
});
