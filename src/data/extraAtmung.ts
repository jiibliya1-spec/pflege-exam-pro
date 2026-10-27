import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Atmung. Lernhilfe der App, eigene Worte. Anordnungen gehen vor. */
export const EXTRA_ATMUNG: Record<string, Extra> = {
  asthma: {
    d: [
      {
        kind: "flow",
        title: "Was im Asthmaanfall passiert",
        steps: [
          { t: "Auslöser", s: "Allergen, Infekt, Kälte, Anstrengung, Stress", icon: "Wind" },
          { t: "Schleimhaut schwillt an", s: "Muskeln der Bronchien verkrampfen, Schleim", icon: "Bug", tone: "warn" },
          { t: "Bronchien werden eng", s: "Ausatmen fällt besonders schwer, Pfeifen", icon: "Waves", tone: "warn" },
          { t: "Atemnot", s: "Husten, Engegefühl, Angst", icon: "Siren", tone: "bad" },
        ],
      },
      {
        kind: "compare",
        title: "Zwei Medikamenten-Typen",
        cols: [
          { t: "Bedarfsspray (Reliever)", icon: "Zap", tone: "info", items: ["Wirkt schnell", "Erweitert die Atemwege", "Im Anfall oder vor Belastung"] },
          { t: "Dauertherapie (Controller)", icon: "Pill", tone: "ok", items: ["Wirkt langsam", "Hemmt die Entzündung", "Täglich, auch ohne Beschwerden", "Nach Kortison-Spray Mund ausspülen"] },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Asthma ist anfallsweise und weitgehend umkehrbar, COPD ist dauerhaft verengt.", "Prüfungstipp: Kutschersitz und Lippenbremse im Anfall, Notruf bei Sprechen nur in Wortfetzen oder blauen Lippen."] },
    ],
  },
  copd: {
    d: [
      {
        kind: "compare",
        title: "Asthma und COPD im Vergleich",
        cols: [
          { t: "Asthma", icon: "Wind", tone: "info", items: ["Beginn oft in der Jugend", "Anfallsweise, wechselnd", "Oft Allergien", "Gut umkehrbar"] },
          { t: "COPD", icon: "Cigarette", tone: "warn", items: ["Beginn meist nach dem 40. Lebensjahr", "Dauerhaft, schleichend schlimmer", "Meist Raucher", "Nicht vollständig umkehrbar"] },
        ],
      },
    ],
    b: [
      { h: "Warum Sauerstoff bei COPD vorsichtig gegeben wird", li: ["Manche Betroffene haben dauerhaft viel CO2 im Blut. Ihr Atemantrieb hängt teilweise vom Sauerstoffmangel ab.", "Zu viel Sauerstoff kann die Atmung bremsen. Darum: nur nach ärztlicher Anordnung und in der angeordneten Menge, Atmung beobachten, bei Schläfrigkeit sofort melden."] },
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Rauchstopp ist die wichtigste Maßnahme.", "Prüfungstipp: Lippenbremse = langsam gegen leichten Widerstand ausatmen, hält die Atemwege offen."] },
    ],
  },
  pneumonie: {
    d: [
      {
        kind: "tiles",
        title: "Pneumonie erkennen",
        items: [
          { t: "Fieber, Schüttelfrost", icon: "Thermometer", tone: "warn" },
          { t: "Husten mit Auswurf", icon: "Wind", tone: "info" },
          { t: "Schnelle Atmung", s: "Sättigung kontrollieren", icon: "Activity", tone: "warn" },
          { t: "Schwäche", icon: "BedDouble" },
          { t: "Bei Älteren: Verwirrtheit", icon: "Brain", tone: "bad" },
          { t: "Schmerz beim Atmen", icon: "Zap", tone: "warn" },
        ],
      },
      {
        kind: "tree",
        title: "Pneumonieprophylaxe",
        root: { t: "Lunge belüftet halten, Sekret lösen", icon: "Wind" },
        kids: [
          { t: "Bewegung", icon: "PersonStanding", items: ["Frühmobilisation", "Positionswechsel"] },
          { t: "Atmung", icon: "Wind", items: ["Atemübungen", "Atemtrainer", "Oberkörper hoch"] },
          { t: "Flüssigkeit", icon: "Droplets", items: ["Genug trinken, damit Schleim flüssig bleibt"] },
          { t: "Mundpflege", icon: "Sparkles", items: ["Weniger Keime", "Schluckstörung melden"] },
        ],
      },
    ],
  },
  lungenembolie: {
    d: [
      {
        kind: "flow",
        title: "Sofortmaßnahmen bei Verdacht auf Lungenembolie",
        steps: [
          { t: "Arzt sofort informieren, Notruf", icon: "Siren", tone: "bad" },
          { t: "Oberkörper hoch, Bettruhe", s: "Frischluft, Sauerstoff nach Anordnung", icon: "BedDouble" },
          { t: "Vitalzeichen und Sättigung", s: "Puls, Blutdruck, Atmung", icon: "Activity" },
          { t: "Nicht allein lassen, beruhigen", icon: "HeartHandshake" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Plötzliche Atemnot plus Brustschmerz nach Bettruhe oder OP ist Lungenembolie, bis das Gegenteil bewiesen ist.", "Prüfungstipp: D-Dimere sind ein Ausschlusstest. Ein negativer Wert schließt bei niedrigem Risiko aus, ein positiver beweist nichts."] },
    ],
  },
  lungenoedem: {
    d: [
      {
        kind: "flow",
        title: "Lungenödem: vom Herz zur Luftnot",
        steps: [
          { t: "Linkes Herz schwach", s: "z. B. Herzinfarkt, Bluthochdruck", icon: "Heart" },
          { t: "Blut staut sich in die Lunge zurück", icon: "Droplets", tone: "warn" },
          { t: "Flüssigkeit tritt in die Lungenbläschen", s: "Gasaustausch gestört", icon: "Wind", tone: "warn" },
          { t: "Schwere Luftnot, brodelnde Atmung, schaumiger Auswurf", icon: "Siren", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Herzbettlage und Beruhigung", li: ["Oberkörper hoch, Beine herabhängen lassen: weniger Blut fließt zum Herzen zurück.", "Ruhig auftreten, kurze klare Sätze, bei dem Menschen bleiben. Angst verstärkt die Atemnot.", "Nach Anordnung: Sauerstoff, Entwässerung, Nitrate."] },
      { h: "Unterschied zur Lungenentzündung", li: ["Lungenödem: plötzlich, Herzursache, schaumiger Auswurf, kein Fieber nötig.", "Pneumonie: Infekt, Fieber, eitriger Auswurf, entwickelt sich über Tage."] },
    ],
  },
  tbc: {
    d: [
      {
        kind: "flow",
        title: "Übertragung und Schutz bei Tuberkulose",
        steps: [
          { t: "Erkrankter hustet Tröpfchen/Aerosole", s: "bei offener Lungen-Tbc", icon: "Wind", tone: "warn" },
          { t: "Andere atmen sie ein", icon: "User" },
          { t: "Schutz", s: "Einzelzimmer, Schutzmaske (FFP2/FFP3 nach Hausstandard), Lüften", icon: "ShieldCheck", tone: "ok" },
          { t: "Meldung", s: "Tbc ist meldepflichtig", icon: "ClipboardList", tone: "info" },
        ],
      },
    ],
    b: [
      { h: "Typische Zeichen", li: ["Langer Husten (mehr als 3 Wochen), Auswurf, auch blutig", "Gewichtsverlust, Nachtschweiß, Fieber, Müdigkeit", "Ursache: Mycobacterium tuberculosum, Stäbchenbakterium. Verbreitet bei Enge, Mangelernährung, Immunschwäche."] },
      { h: "Therapie und Pflege", li: ["Mehrere Medikamente gleichzeitig über Monate. Abbruch kann Resistenzen erzeugen.", "Einnahme sicherstellen und beobachten, Nebenwirkungen (Leber, Sehstörung, Taubheit) melden.", "Isolation erst beenden, wenn der Arzt es anordnet. Kontaktpersonen werden untersucht."] },
    ],
  },
  bronchialkarzinom: {
    d: [
      {
        kind: "tiles",
        title: "Warnzeichen",
        items: [
          { t: "Husten, der nicht weggeht", icon: "Wind", tone: "warn" },
          { t: "Blut im Auswurf", icon: "Droplet", tone: "bad" },
          { t: "Gewichtsverlust", icon: "TrendingDown", tone: "warn" },
          { t: "Atemnot", icon: "Siren", tone: "warn" },
          { t: "Brustschmerz", icon: "Zap", tone: "warn" },
          { t: "Heiserkeit", icon: "Megaphone", tone: "info" },
        ],
      },
    ],
    b: [
      { h: "Risiko und Vorbeugen", li: ["Hauptrisiko ist Rauchen. Auch Passivrauchen, Asbest, Radon und Feinstaub erhöhen das Risiko.", "Rauchstopp senkt das Risiko deutlich, in jedem Alter."] },
      { h: "Behandlung", li: ["Operation, Chemo, Bestrahlung oder Immuntherapie, je nach Tumorart (kleinzellig oder nicht kleinzellig) und Stadium.", "Pflegerisch: Atemnot lindern, Schmerzen, Ernährung, Prophylaxen, Begleitung und, wenn nötig, Palliativversorgung."] },
    ],
  },
  mukoviszidose: {
    d: [
      {
        kind: "flow",
        title: "Von der Genveränderung zu den Beschwerden",
        steps: [
          { t: "Vererbter Defekt der Chloridkanäle", icon: "Dna" },
          { t: "Sekrete werden zäh", s: "Lunge, Bauchspeicheldrüse, Darm", icon: "Droplet", tone: "warn" },
          { t: "Lunge: Dauerinfekte", s: "Husten, Bronchien erweitert", icon: "Wind", tone: "warn" },
          { t: "Bauchspeicheldrüse: Verdauung gestört", s: "Fettstühle, Untergewicht", icon: "Utensils", tone: "warn" },
        ],
      },
    ],
    b: [
      { h: "Alltag und Pflege", li: ["Täglich inhalieren, Sekret lösen (Atemtherapie, Klopf- und Drainagelagerung), regelmäßig Bewegung.", "Hochkalorische Kost und Enzympräparate zu den Mahlzeiten, Salz bei starkem Schwitzen.", "Infektionen vermeiden, Hygiene, Impfungen. Kontakt zwischen Betroffenen vermeiden (Kreuzinfektion).", "Schweißtest sichert die Diagnose (viel Salz im Schweiß)."] },
    ],
  },
  atemwegsmedikamente: {
    d: [
      {
        kind: "table",
        title: "Fünf Gruppen im Überblick",
        head: ["Gruppe", "Wirkung", "Beispiel für die Praxis"],
        rows: [
          ["Bronchodilatatoren", "Erweitern die Bronchien", "Bedarfsspray im Asthmaanfall"],
          ["Glukokortikoide", "Hemmen die Entzündung", "Dauertherapie, Mund ausspülen"],
          ["Expektoranzien", "Lösen den Schleim", "Bei zähem Schleim, viel trinken"],
          ["Antitussiva", "Dämpfen den Husten", "Nur bei trockenem Reizhusten"],
          ["Antiinfektiva", "Gegen Erreger", "Antibiotika bei bakterieller Pneumonie"],
        ],
      },
    ],
    b: [
      { h: "Inhalieren richtig", li: ["Erst ausatmen, dann Spray auslösen und langsam tief einatmen, Luft 5 bis 10 Sekunden anhalten.", "Bei Pulverinhalatoren kräftig und tief einatmen, bei Dosieraerosolen langsam. Ein Spacer hilft bei schwacher Koordination.", "Die Technik regelmäßig prüfen: Viele Fehler führen zu zu wenig Wirkung."] },
    ],
  },
};
