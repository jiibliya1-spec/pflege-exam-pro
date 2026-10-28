import { describe, expect, it } from "vitest";
import { LESSONS } from "../src/data/lessons";
import { TRANSLATIONS, applyStrings, diagramStrings } from "../src/data/lessonsI18n";
import { WHO } from "../src/data/lessonsWho";

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
  it("diagramStrings und applyStrings sind zueinander passend", () => {
    for (const l of LESSONS) {
      for (const d of l.diagrams ?? []) {
        const s = diagramStrings(d);
        expect(diagramStrings(applyStrings(d, s.map((x) => x + "!")))).toEqual(s.map((x) => x + "!"));
      }
    }
  });
  for (const [lang, table] of Object.entries(TRANSLATIONS)) {
    it(`${lang}: Struktur stimmt`, () => {
      const problems: string[] = [];
      for (const [id, t] of Object.entries(table)) {
        const l = LESSONS.find((x) => x.id === id);
        if (!l) { problems.push(`${id}: Lektion existiert nicht`); continue; }
        if (!t.t.trim()) problems.push(`${id}: Titel leer`);
        if (t.b.length !== l.blocks.length) { problems.push(`${id}: ${t.b.length} statt ${l.blocks.length} Abschnitte`); continue; }
        t.b.forEach(([h, li], i) => {
          if (!h.trim()) problems.push(`${id}: Überschrift ${i + 1} leer`);
          if (li.length !== l.blocks[i].li.length) problems.push(`${id}: Abschnitt ${i + 1} hat ${li.length} statt ${l.blocks[i].li.length} Punkte`);
          if (li.some((x) => !x.trim())) problems.push(`${id}: Abschnitt ${i + 1} hat leeren Punkt`);
        });
        const heads = t.b.map((b) => b[0]);
        if (new Set(heads).size !== heads.length) problems.push(`${id}: Überschriften nicht eindeutig`);
        const od = l.diagrams ?? [];
        if ((t.d?.length ?? 0) !== od.length) problems.push(`${id}: ${t.d?.length ?? 0} statt ${od.length} Diagramme`);
        else od.forEach((d, i) => {
          const src = diagramStrings(d);
          const got = t.d![i];
          if (got.length !== src.length) problems.push(`${id}: Diagramm ${i + 1} hat ${got.length} statt ${src.length} Texte`);
          else if (got.some((x, k) => !x.trim() && src[k].trim())) problems.push(`${id}: Diagramm ${i + 1} hat leeren Text`);
        });
      }
      expect(problems).toEqual([]);
    });
  }
});

describe("Lektionen: neue Buch-Lektionen", () => {
  it("Überschriften sind je Lektion eindeutig und jede Lektion hat Diagramme", () => {
    const ids = ["varikosis-thrombophlebitis", "lymph-erysipel", "reflux-gerd", "gastritis-ulkus", "appendizitis", "peritonitis", "urolithiasis", "vur-kinder", "bph-prostata-op", "hauttumoren", "psoriasis", "neurodermitis", "haut-infektionen", "arzneimittelexanthem", "fraktur-grundlagen", "fraktur-komplikationen", "fraktur-schaedel-wirbel", "distorsion-luxation-amputation", "arthrose-gelenkersatz", "knochen-gelenk-infekt-tumor", "hydrozephalus", "vaskulaere-demenz", "migraene", "kopfschmerz-trigeminus", "adhs-kinder", "autismus-kinder", "persoenlichkeitsstoerung", "otitis-media", "hoerstoerungen", "wasser-elektrolyte", "hirntumor", "periphere-nerven-wirbelkanal"];
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
