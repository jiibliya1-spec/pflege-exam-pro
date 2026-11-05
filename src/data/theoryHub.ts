/** Sammelstelle „Theorien und Modelle“: verweist nur auf vorhandene Lektionen (siehe tests/theoryHub.test.ts). */
export const HUB: { id: "theorien" | "modelle" | "konzepte"; icon: string; lessons: string[] }[] = [
  { id: "theorien", icon: "BookOpen", lessons: ["pflegewissenschaft", "theorien-grundlagen", "orem", "peplau", "friedemann-leininger", "b-kommunikation", "g5-modelle-weitere", "g5-kohlberg", "g5-teamphasen", "g6-watzlawick", "g6-zuhoeren"] },
  { id: "modelle", icon: "Puzzle", lessons: ["roper-logan-tierney", "krohwinkel", "pflegeprozess", "g-pflegeprozess-modelle", "g4-pruefung-pflegeprozess", "g5-icf"] },
  { id: "konzepte", icon: "Layers", lessons: ["b-kinaesthetik-basal-bobath", "g-basale-bobath", "g3-validation", "g3-total-pain", "expertenstandards", "g9-pflegeorganisation"] },
];
export const HUB_IDS = new Set(HUB.flatMap((h) => h.lessons));
