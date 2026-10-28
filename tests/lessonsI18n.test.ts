import { describe, expect, it } from "vitest";
import { LESSONS } from "../src/data/lessons";
import { TRANSLATIONS } from "../src/data/lessonsI18n";
import { WHO } from "../src/data/lessonsWho";
import type { Diagram } from "../src/data/diagram";

/** Zählt die Textfelder eines Diagramms (Struktur-Vergleich zwischen Original und Übersetzung). */
function shape(d: Diagram): string {
  switch (d.kind) {
    case "flow": case "cycle": return `${d.kind}:${d.steps.length}`;
    case "pyramid": return `pyramid:${d.levels.length}`;
    case "compare": return `compare:${d.cols.map((c) => c.items.length).join(",")}`;
    case "table": return `table:${d.head.length}x${d.rows.length}`;
    case "tree": return `tree:${d.kids.map((k) => (k.items ?? []).length).join(",")}`;
    case "bar": return `bar:${d.parts.length}`;
    case "tiles": return `tiles:${d.items.length}`;
  }
}

describe("Lektionen: Patientengruppen", () => {
  it("alle Krankheits-Lektionen haben mindestens eine Gruppe", () => {
    const missing = LESSONS.filter((l) => l.group === "krank" && !l.who?.length).map((l) => l.id);
    expect(missing).toEqual([]);
  });
  it("WHO verweist nur auf vorhandene Lektionen", () => {
    const ids = new Set(LESSONS.map((l) => l.id));
    expect(Object.keys(WHO).filter((k) => !ids.has(k))).toEqual([]);
  });
});

describe("Lektionen: Übersetzungen spiegeln das Original", () => {
  for (const [lang, table] of Object.entries(TRANSLATIONS)) {
    it(`${lang}: Struktur stimmt`, () => {
      const problems: string[] = [];
      for (const [id, t] of Object.entries(table)) {
        const l = LESSONS.find((x) => x.id === id);
        if (!l) { problems.push(`${id}: Lektion existiert nicht`); continue; }
        if (!t.title.trim()) problems.push(`${id}: Titel leer`);
        if (t.blocks.length !== l.blocks.length) { problems.push(`${id}: ${t.blocks.length} statt ${l.blocks.length} Abschnitte`); continue; }
        t.blocks.forEach((b, i) => { if (b.li.length !== l.blocks[i].li.length) problems.push(`${id}: Abschnitt ${i + 1} hat ${b.li.length} statt ${l.blocks[i].li.length} Punkte`); });
        const heads = t.blocks.map((b) => b.h);
        if (new Set(heads).size !== heads.length) problems.push(`${id}: Überschriften nicht eindeutig`);
        const od = l.diagrams ?? [], td = t.diagrams ?? od;
        if (td.length !== od.length) problems.push(`${id}: ${td.length} statt ${od.length} Diagramme`);
        else td.forEach((d, i) => { if (shape(d) !== shape(od[i])) problems.push(`${id}: Diagramm ${i + 1} ${shape(d)} statt ${shape(od[i])}`); });
      }
      expect(problems).toEqual([]);
    });
  }
});

describe("Lektionen: neue Buch-Lektionen", () => {
  it("Überschriften sind je Lektion eindeutig und jede Lektion hat Diagramme", () => {
    const ids = ["varikosis-thrombophlebitis", "lymph-erysipel", "reflux-gerd", "gastritis-ulkus", "appendizitis", "peritonitis", "urolithiasis", "vur-kinder", "bph-prostata-op", "hauttumoren", "psoriasis", "neurodermitis", "haut-infektionen", "arzneimittelexanthem", "fraktur-grundlagen", "fraktur-komplikationen", "fraktur-schaedel-wirbel", "distorsion-luxation-amputation", "arthrose-gelenkersatz", "knochen-gelenk-infekt-tumor", "hydrozephalus", "vaskulaere-demenz", "migraene", "kopfschmerz-trigeminus", "adhs-kinder", "autismus-kinder", "persoenlichkeitsstoerung", "otitis-media", "hoerstoerungen"];
    for (const id of ids) {
      const l = LESSONS.find((x) => x.id === id);
      expect(l, id).toBeTruthy();
      expect(l!.diagrams?.length, id).toBeGreaterThan(0);
      const h = l!.blocks.map((b) => b.h);
      expect(new Set(h).size, id).toBe(h.length);
      expect(l!.ar.length, id).toBeGreaterThan(40);
    }
  });
});
