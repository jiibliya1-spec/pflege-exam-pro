import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { MUSCULO_CFG, MUSCULO_PATHS, MUSCULO_QUIZ } from "@/data/atlasMusculo";

describe("Atlas Harnsystem", () => {
  const d = readFileSync("public/models/musculoskeletal.glb");
  const json = JSON.parse(d.subarray(20, 20 + d.readUInt32LE(12)).toString("utf8")) as { nodes: { name: string; extras: { layer: string } }[] };
  it("jede Struktur im Modell hat vollständige Beschriftung und umgekehrt; Ebenen stimmen", () => {
    expect(Object.keys(MUSCULO_CFG.items).sort()).toEqual(json.nodes.map((n) => n.name).sort());
    for (const n of json.nodes) expect(MUSCULO_CFG.layerOf(n.name), n.name).toBe(n.extras.layer);
    for (const [id, it] of Object.entries(MUSCULO_CFG.items)) for (const v of [it.de, it.la, it.ar, it.fn[0], it.fn[1], it.kl[0], it.kl[1]]) expect(v.trim().length, id).toBeGreaterThan(2);
  });
  it("Wege verweisen nur auf vorhandene Strukturen; mindestens 10 Prüfungsfragen mit Lösung", () => {
    for (const p of MUSCULO_PATHS) for (const s of p.steps) for (const id of s.ids) expect(MUSCULO_CFG.items[id], `${p.id}:${id}`).toBeTruthy();
    expect(MUSCULO_QUIZ.length).toBeGreaterThanOrEqual(10);
    for (const q of MUSCULO_QUIZ) { expect(new Set(q.o).size).toBe(4); expect(q.why[0].length).toBeGreaterThan(120); expect(q.why[1].length).toBeGreaterThan(60); }
  });
});
