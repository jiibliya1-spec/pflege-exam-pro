/** Sammelstelle „Theorien und Modelle“: verweist nur auf vorhandene Lektionen (siehe tests/theoryHub.test.ts). */
export const HUB: { id: "theorien" | "modelle" | "konzepte"; icon: string; lessons: string[] }[] = [
  { id: "theorien", icon: "BookOpen", lessons: ["pflegewissenschaft", "theorien-grundlagen", "orem", "peplau", "friedemann-leininger", "b-kommunikation"] },
  { id: "modelle", icon: "Puzzle", lessons: ["roper-logan-tierney", "krohwinkel", "pflegeprozess", "g-pflegeprozess-modelle", "g4-pruefung-pflegeprozess"] },
  { id: "konzepte", icon: "Layers", lessons: ["b-kinaesthetik-basal-bobath", "g-basale-bobath", "g3-validation", "g3-total-pain", "expertenstandards"] },
];
export const HUB_IDS = new Set(HUB.flatMap((h) => h.lessons));
