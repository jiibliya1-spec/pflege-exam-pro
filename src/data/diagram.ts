/** Datenmodell für die Lern-Diagramme (reine Daten, die Darstellung steht in components/Diagram.tsx). */
export type Tone = "ok" | "warn" | "bad" | "info";

export interface DNode {
  /** Kurzer Titel */
  t: string;
  /** Optional: eine kurze Erklärung darunter */
  s?: string;
  /** Optional: Name eines Lucide-Icons (siehe components/Icon.tsx) */
  icon?: string;
  tone?: Tone;
}

export type Diagram =
  /** Ablauf in Schritten von oben nach unten */
  | { kind: "flow"; title: string; steps: DNode[]; note?: string }
  /** Wie flow, aber der Ablauf beginnt danach wieder von vorn */
  | { kind: "cycle"; title: string; steps: DNode[]; note?: string }
  /** Ebenen, oben = Spitze */
  | { kind: "pyramid"; title: string; levels: DNode[]; note?: string }
  /** Spalten nebeneinander vergleichen */
  | { kind: "compare"; title: string; cols: { t: string; icon?: string; tone?: Tone; items: string[] }[]; note?: string }
  /** Tabelle mit Kopfzeile */
  | { kind: "table"; title: string; head: string[]; rows: string[][]; note?: string }
  /** Oberbegriff mit Unterpunkten */
  | { kind: "tree"; title: string; root: DNode; kids: { t: string; icon?: string; tone?: Tone; items?: string[] }[]; note?: string }
  /** Gestufte Skala (z. B. Blutdruck-Bereiche), w = relative Breite */
  | { kind: "bar"; title: string; parts: { t: string; s?: string; w?: number; tone?: Tone }[]; note?: string }
  /** Kacheln mit Icon, z. B. Symptome oder Warnzeichen */
  | { kind: "tiles"; title: string; items: DNode[]; note?: string };
