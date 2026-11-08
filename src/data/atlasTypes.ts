/** Gemeinsame Typen für die 3D-Atlanten (Herz, Atmung, ...). */
export interface AtlasItem {
  de: string;
  la: string;
  ar: string;
  /** Funktion und Physiologie [de, ar] */
  fn: [string, string];
  /** Klinische Bedeutung und Pflegebezug [de, ar] */
  kl: [string, string];
  /** Hinweis zum Modell (z. B. nicht separat modelliert) */
  note?: [string, string];
  /** Bestandteile als Gliederung [de, ar]; nur Text, nicht im Modell getrennt */
  parts?: [string, string][];
}
export type Row = [string, string, string, string, string];
export interface AtlasLayer { id: string; de: string; ar: string; en: string; fr: string; tr: string }
export interface AtlasStep { title: Row; text: [string, string]; ids: string[]; note?: [string, string] }
export interface AtlasPath { id: string; title: Row; intro: [string, string]; steps: AtlasStep[] }
export interface AtlasCare {
  diseases: string[]; symptoms: string[]; diagnostics?: string[]; actions: string[]; monitoring: string[];
  terms: [string, string][]; lessons: string[];
}
export interface AtlasQuiz { q: [string, string]; o: [string, string, string, string]; why: [string, string] }
export interface AtlasConfig {
  key: string;
  modelUrl: string;
  items: Record<string, AtlasItem>;
  layers: AtlasLayer[];
  layerOf: (id: string) => string;
  color: (id: string, layer: string) => number;
  /** Schichten, die in der Innenansicht durchsichtig werden */
  shell: string[];
  innerLabel: Row;
  careTitle: Row;
  target?: [number, number, number];
  shellOpacity?: number;
  /** Kamera fährt bei Schritten der Lernwege auf die hervorgehobenen Strukturen */
  stepCamera?: boolean;
  /** Schichten, die beim Öffnen zunächst ausgeblendet sind */
  hiddenLayers?: string[];
  dist: number; minDist: number; maxDist: number; clipRange: number; explodeScale: number;
  care: AtlasCare;
  quiz: AtlasQuiz[];
  paths?: AtlasPath[];
  /** Quellenangabe unter dem Modell */
  source: Row;
}
