import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Beruf, Versicherung, Team, Pflegewissenschaft und Pflegemodelle. Lernhilfe der App, eigene Worte. */
export const EXTRA_PFLEGE_3: Record<string, Extra> = {
  berufsentwicklung: {
    d: [
      {
        kind: "pyramid",
        title: "Kompetenzstufen nach Benner (oben = höchste)",
        levels: [
          { t: "5 Pflegeexperte", s: "handelt intuitiv und sicher", tone: "ok" },
          { t: "4 Erfahrene Pflegende", s: "erkennt Gesamtbild", tone: "ok" },
          { t: "3 Kompetent Pflegende", s: "plant bewusst, setzt Prioritäten", tone: "info" },
          { t: "2 Fortgeschrittener Anfänger", s: "erkennt Muster", tone: "info" },
          { t: "1 Neuling", s: "arbeitet nach Regeln", tone: "warn" },
        ],
      },
      {
        kind: "tiles",
        title: "Vier Kompetenzbereiche (Handlungskompetenz)",
        items: [
          { t: "Fachkompetenz", s: "Wissen und Können", icon: "Stethoscope" },
          { t: "Methodenkompetenz", s: "planen, Probleme lösen", icon: "Workflow" },
          { t: "Sozialkompetenz", s: "Kommunikation, Team", icon: "Users" },
          { t: "Personalkompetenz", s: "Reflexion, Verantwortung", icon: "Compass" },
        ],
      },
    ],
  },
  stress: {
    d: [
      {
        kind: "flow",
        title: "Stressmodell nach Lazarus",
        steps: [
          { t: "Reiz (Stressor)", s: "z. B. Zeitdruck, Konflikt", icon: "Zap", tone: "warn" },
          { t: "Primäre Bewertung", s: "Ist das bedrohlich?", icon: "Eye", tone: "info" },
          { t: "Sekundäre Bewertung", s: "Habe ich Mittel zur Bewältigung?", icon: "Wrench", tone: "info" },
          { t: "Bewältigung und Neubewertung", s: "Problem lösen oder Gefühl regulieren", icon: "RefreshCw", tone: "ok" },
        ],
      },
      {
        kind: "flow",
        title: "Stressreaktion nach Selye",
        steps: [
          { t: "Alarmphase", s: "Körper mobilisiert Energie", icon: "Siren", tone: "warn" },
          { t: "Widerstandsphase", s: "Anpassung, Leistung hoch gehalten", icon: "Dumbbell", tone: "info" },
          { t: "Erschöpfungsphase", s: "Kräfte aufgebraucht, krank", icon: "BedDouble", tone: "bad" },
        ],
      },
    ],
  },
  arbeitsschutz: {
    d: [
      {
        kind: "table",
        title: "Arbeitszeitgesetz: Eckdaten",
        head: ["Regel", "Wert"],
        rows: [
          ["Werktägliche Arbeitszeit", "bis 8 Std., verlängerbar auf 10 bei Ausgleich (Durchschnitt 8 Std. in 6 Monaten)"],
          ["Pause", "ab mehr als 6 Std.: 30 Min.; ab mehr als 9 Std.: 45 Min.; Blöcke mind. 15 Min."],
          ["Ruhezeit zwischen Diensten", "mind. 11 Std."],
          ["Sonntage", "mind. 15 Sonntage im Jahr frei"],
        ],
        note: "Ausnahmen regeln Tarifverträge. Aktuellen Stand prüfen.",
      },
    ],
  },
  pflegeversicherung: {
    d: [
      {
        kind: "tiles",
        title: "Sechs Module der Begutachtung (Selbstständigkeit)",
        items: [
          { t: "Mobilität", icon: "Footprints" },
          { t: "Kognition und Kommunikation", icon: "Brain" },
          { t: "Verhalten und psychische Lage", icon: "CloudRain" },
          { t: "Selbstversorgung", icon: "Utensils" },
          { t: "Umgang mit Krankheit/Therapie", icon: "Pill" },
          { t: "Alltagsleben und Kontakte", icon: "Users" },
        ],
      },
      {
        kind: "bar",
        title: "Pflegegrade 1 bis 5",
        parts: [
          { t: "1", s: "geringe", tone: "info" },
          { t: "2", s: "erhebliche", tone: "info" },
          { t: "3", s: "schwere", tone: "warn" },
          { t: "4", s: "schwerste", tone: "bad" },
          { t: "5", s: "schwerste mit besonderen Anforderungen", tone: "bad" },
        ],
        note: "Maßgeblich ist die Selbstständigkeit, nicht die Diagnose.",
      },
    ],
  },
  teamarbeit: {
    d: [
      {
        kind: "tree",
        title: "Das interprofessionelle Team um den Patienten",
        root: { t: "Patient", icon: "User", tone: "ok" },
        kids: [
          { t: "Pflege", icon: "Stethoscope", items: ["Pflegeprozess, Beobachtung, Beratung"] },
          { t: "Ärzte", icon: "Hospital", items: ["Diagnose, Therapie, Verordnung"] },
          { t: "Therapeuten", icon: "Dumbbell", items: ["Physio, Ergo, Logopädie"] },
          { t: "Sozialdienst", icon: "Landmark", items: ["Anträge, Entlassung, Hilfen"] },
          { t: "Psychologie", icon: "Brain", items: ["Seelische Belastung"] },
          { t: "Hauswirtschaft, Seelsorge", icon: "House", items: ["Alltag, Spiritualität"] },
        ],
      },
    ],
  },
  pflegewissenschaft: {
    d: [
      {
        kind: "compare",
        title: "Quantitative und qualitative Forschung",
        cols: [
          { t: "Quantitativ", icon: "Hash", tone: "info", items: ["Zahlen, viele Teilnehmende", "Prüft Hypothesen", "Deduktion: vom Allgemeinen zum Einzelfall", "Gütekriterien: Objektivität, Reliabilität, Validität"] },
          { t: "Qualitativ", icon: "MessageCircle", tone: "warn", items: ["Worte, wenige Teilnehmende", "Versteht Erleben und bildet Theorien", "Induktion: vom Einzelfall zum Allgemeinen", "Gütekriterien: Glaubwürdigkeit, Übertragbarkeit"] },
        ],
      },
      {
        kind: "cycle",
        title: "Evidence-based Nursing (6 Schritte)",
        steps: [
          { t: "Problem klären", icon: "Search" },
          { t: "Klinische Frage stellen", s: "z. B. nach dem PIKE-Schema", icon: "MessageCircle" },
          { t: "Literatur recherchieren", icon: "Library" },
          { t: "Studien kritisch bewerten", icon: "Scale" },
          { t: "Umsetzen und anpassen", icon: "HandHelping" },
          { t: "Wirkung bewerten", icon: "ChartBar" },
        ],
      },
    ],
  },
  "theorien-grundlagen": {
    d: [
      {
        kind: "pyramid",
        title: "Reichweite von Theorien (oben = abstrakt)",
        levels: [
          { t: "Große Reichweite", s: "Was ist Pflege überhaupt?", tone: "info" },
          { t: "Mittlere Reichweite", s: "Eine Pflegesituation, z. B. chronische Krankheit", tone: "warn" },
          { t: "Geringe Reichweite", s: "Ein Praxisgebiet mit konkreten Maßnahmen", tone: "ok" },
        ],
      },
      {
        kind: "table",
        title: "Drei Schwerpunkte großer Theorien",
        head: ["Schwerpunkt", "Frage", "Beispiele"],
        rows: [
          ["Bedürfnistheorien", "Was tun Pflegende?", "Henderson, Orem, Roper-Logan-Tierney, Krohwinkel"],
          ["Interaktionstheorien", "Wie tun Pflegende es?", "Peplau, Orlando"],
          ["Ergebnistheorien", "Wofür tun Pflegende es?", "Systemorientierte Ansätze (Gleichgewicht herstellen)"],
        ],
      },
    ],
  },
  orem: {
    d: [
      {
        kind: "tree",
        title: "Orems Selbstpflegedefizit-Theorie",
        root: { t: "Selbstpflege-Theorie", icon: "HandHelping" },
        kids: [
          { t: "Selbstpflege", icon: "User", items: ["Menschen sorgen selbst für Gesundheit", "Bedarf: allgemein, entwicklungsbedingt, gesundheitsbedingt"] },
          { t: "Selbstpflegedefizit", icon: "TriangleAlert", items: ["Bedarf größer als Fähigkeit", "Wissen, Urteil, Handlung eingeschränkt"], tone: "warn" },
          { t: "Pflegesysteme", icon: "Workflow", items: ["Vollständig kompensatorisch", "Teilweise kompensatorisch", "Unterstützend-erzieherisch"], tone: "ok" },
        ],
      },
      {
        kind: "table",
        title: "Die drei Pflegesysteme",
        head: ["System", "Wer macht was?", "Beispiel"],
        rows: [
          ["Vollständig kompensatorisch", "Pflegeperson übernimmt alles", "Bewusstloser Intensivpatient"],
          ["Teilweise kompensatorisch", "Aufgaben werden geteilt", "Patient wäscht sich Gesicht, Pflegeperson den Rücken"],
          ["Unterstützend-erzieherisch", "Patient handelt, Pflege berät und leitet an", "Insulin selbst spritzen lernen"],
        ],
      },
    ],
  },
  "roper-logan-tierney": {
    d: [
      {
        kind: "tiles",
        title: "Die 12 Lebensaktivitäten",
        items: [
          { t: "Sichere Umgebung", icon: "ShieldCheck" },
          { t: "Kommunizieren", icon: "MessageCircle" },
          { t: "Atmen", icon: "Wind", tone: "bad" },
          { t: "Essen und Trinken", icon: "Utensils" },
          { t: "Ausscheiden", icon: "Droplets" },
          { t: "Sauber halten, kleiden", icon: "Sparkles" },
          { t: "Temperatur regulieren", icon: "Thermometer" },
          { t: "Sich bewegen", icon: "Footprints" },
          { t: "Arbeiten und spielen", icon: "Puzzle" },
          { t: "Geschlechtlichkeit leben", icon: "Heart" },
          { t: "Schlafen", icon: "Moon" },
          { t: "Sterben", icon: "Feather" },
        ],
        note: "Atmen hat die höchste Priorität.",
      },
    ],
  },
  krohwinkel: {
    d: [
      {
        kind: "tiles",
        title: "ABEDL: Aktivitäten, Beziehungen und existenzielle Erfahrungen des Lebens",
        items: [
          { t: "Kommunizieren", icon: "MessageCircle" },
          { t: "Sich bewegen", icon: "Footprints" },
          { t: "Vitale Funktionen", icon: "HeartPulse" },
          { t: "Sich pflegen", icon: "Sparkles" },
          { t: "Sich kleiden", icon: "User" },
          { t: "Ausscheiden", icon: "Droplets" },
          { t: "Essen und Trinken", icon: "Utensils" },
          { t: "Ruhen und Schlafen", icon: "Moon" },
          { t: "Sich beschäftigen", icon: "Puzzle" },
          { t: "Sexualität leben", icon: "Heart" },
          { t: "Für Sicherheit sorgen", icon: "ShieldCheck" },
          { t: "Soziale Beziehungen", icon: "Users" },
          { t: "Mit existenziellen Erfahrungen umgehen", icon: "Compass", tone: "warn" },
        ],
      },
    ],
  },
  peplau: {
    d: [
      {
        kind: "flow",
        title: "Vier Phasen der Pflegebeziehung (Peplau)",
        steps: [
          { t: "Orientierung", s: "Fremde begegnen sich, das Problem wird verstanden", icon: "Compass" },
          { t: "Identifikation", s: "Bindung entsteht, Gefühle werden zugelassen", icon: "HeartHandshake", tone: "info" },
          { t: "Nutzung", s: "Pendeln zwischen Abhängigkeit und Unabhängigkeit, beraten und lehren", icon: "Lightbulb", tone: "warn" },
          { t: "Ablösung", s: "Der Patient sorgt wieder selbst für sich", icon: "DoorOpen", tone: "ok" },
        ],
      },
    ],
  },
  "corbin-strauss": {
    d: [
      {
        kind: "flow",
        title: "Krankheitsverlaufskurve: 9 Phasen",
        steps: [
          { t: "1 Pretrajectory", s: "Risiko, noch keine Symptome", icon: "Eye" },
          { t: "2 Trajectory onset", s: "Erste Symptome, Diagnose", icon: "Search", tone: "info" },
          { t: "3 Stable", s: "Symptome unter Kontrolle", icon: "ShieldCheck", tone: "ok" },
          { t: "4 Unstable", s: "Symptome nicht kontrolliert", icon: "TriangleAlert", tone: "warn" },
          { t: "5 Acute", s: "Schwere Symptome, Krankenhaus", icon: "Hospital", tone: "warn" },
          { t: "6 Crisis", s: "Lebensbedrohlich", icon: "Siren", tone: "bad" },
          { t: "7 Comeback", s: "Rückkehr zu einem Leben mit Grenzen", icon: "TrendingUp", tone: "ok" },
          { t: "8 Downward", s: "Starker Abbau", icon: "TrendingDown", tone: "bad" },
          { t: "9 Dying", s: "Zeit vor dem Tod", icon: "Feather", tone: "info" },
        ],
        note: "Im Buch wird einmal von „8 Phasen“ gesprochen, die Tabelle zeigt 9. Hier gilt die Tabelle.",
      },
    ],
  },
  "friedemann-leininger": {
    d: [
      {
        kind: "compare",
        title: "Friedemann und Leininger",
        cols: [
          { t: "Friedemann: Familie", icon: "Users", tone: "info", items: ["Systemtheorie: Familie als System", "Prozessdimensionen: Systemerhaltung, Systemänderung, Kohärenz, Individuation", "Ziele: Stabilität, Wachstum, Kontrolle, Spiritualität"] },
          { t: "Leininger: Kultur", icon: "Globe", tone: "warn", items: ["Fürsorge (Care) ist das Wesen der Pflege", "Universalität und Diversität", "Drei Entscheidungen: bewahren, anpassen/verhandeln, ändern/umstrukturieren"] },
        ],
      },
    ],
  },
};
