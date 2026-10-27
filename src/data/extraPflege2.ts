import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Kommunikation, Recht, Qualität, Ethik. Lernhilfe der App, eigene Worte. Gesetze ändern sich, aktuellen Stand prüfen. */
export const EXTRA_PFLEGE_2: Record<string, Extra> = {
  kommunikation: {
    d: [
      {
        kind: "tree",
        title: "Vier-Seiten-Modell: „Es ist kalt hier.“",
        root: { t: "Nachricht", icon: "MessageCircle" },
        kids: [
          { t: "Sachinhalt", icon: "Thermometer", items: ["Die Raumtemperatur ist niedrig."] },
          { t: "Selbstoffenbarung", icon: "User", items: ["Mir ist kalt."] },
          { t: "Beziehung", icon: "Handshake", items: ["Du sorgst nicht gut für mich?"] },
          { t: "Appell", icon: "Megaphone", items: ["Mach bitte das Fenster zu."] },
        ],
      },
      {
        kind: "flow",
        title: "Gewaltfreie Kommunikation (4 Schritte)",
        steps: [
          { t: "Beobachtung", s: "ohne Bewertung beschreiben", icon: "Eye" },
          { t: "Gefühl", s: "was ich dabei empfinde", icon: "HeartHandshake" },
          { t: "Bedürfnis", s: "was mir wichtig ist", icon: "Compass" },
          { t: "Bitte", s: "konkret und machbar", icon: "MessageCircle", tone: "ok" },
        ],
      },
    ],
  },
  delegation: {
    d: [
      {
        kind: "flow",
        title: "Delegation: wer ist wofür verantwortlich?",
        steps: [
          { t: "Anordnung", s: "Der Delegierende wählt eine geeignete Person aus, ordnet klar an, kontrolliert", icon: "ClipboardList", tone: "info" },
          { t: "Übernahme", s: "Die Person prüft: Kann ich das? Bei Unsicherheit nein sagen/nachfragen", icon: "Handshake", tone: "warn" },
          { t: "Durchführung", s: "Sorgfältig nach Wissensstand ausführen und dokumentieren", icon: "HandHelping", tone: "ok" },
        ],
      },
      {
        kind: "flow",
        title: "Remonstration: wenn eine Anweisung gefährlich scheint",
        steps: [
          { t: "Nicht blind ausführen", icon: "TriangleAlert", tone: "bad" },
          { t: "Bedenken sofort äußern", s: "am besten schriftlich", icon: "MessageCircle", tone: "warn" },
          { t: "Verantwortliche Person einbeziehen", icon: "Users", tone: "info" },
          { t: "Patient wird nicht gefährdet", s: "Lebensrettende Hilfe immer leisten", icon: "ShieldCheck", tone: "ok" },
        ],
      },
    ],
  },
  recht: {
    d: [
      {
        kind: "flow",
        title: "Einwilligung: so prüft man es",
        steps: [
          { t: "Aufklärung", s: "verständlich, rechtzeitig, durch die zuständige Person", icon: "MessageCircle" },
          { t: "Einwilligungsfähig?", s: "versteht, bewertet, kann seinen Willen äußern", icon: "Brain", tone: "info" },
          { t: "Ja: Mensch entscheidet", s: "auch Ablehnung gilt", icon: "ShieldCheck", tone: "ok" },
          { t: "Nein: Vertretung entscheidet", s: "Betreuer, Vollmacht, Patientenverfügung, mutmaßlicher Wille", icon: "Users", tone: "warn" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Keine Maßnahme ohne Einwilligung, außer im Notfall nach dem mutmaßlichen Willen.", "Prüfungstipp: Schweigepflicht gilt auch gegenüber Angehörigen, solange der Patient nicht zugestimmt hat."] },
    ],
  },
  vorbehalt: {
    d: [
      {
        kind: "compare",
        title: "Wer darf was? (Prozess steuern)",
        cols: [
          { t: "Pflegefachperson", icon: "GraduationCap", tone: "ok", items: ["Pflegebedarf erheben", "Pflegeprozess organisieren und steuern", "Qualität sichern"] },
          { t: "Auszubildende", icon: "User", tone: "info", items: ["Üben unter Anleitung", "Keine alleinige Verantwortung für diese Aufgaben"] },
          { t: "Hilfskraft", icon: "HandHelping", tone: "warn", items: ["Unterstützt Grundpflege und Alltag", "Ersetzt nicht die vorbehaltenen Aufgaben"] },
        ],
      },
    ],
  },
  kinder: {
    d: [
      {
        kind: "flow",
        title: "Verdacht auf Kindeswohlgefährdung",
        steps: [
          { t: "Beobachten und sachlich dokumentieren", icon: "Eye" },
          { t: "Mit Leitung/Kinderschutzfachkraft sprechen", icon: "Users", tone: "info" },
          { t: "Gemeinsam Hilfe einleiten (z. B. Jugendamt)", icon: "Landmark", tone: "warn" },
          { t: "Akute Gefahr: Notruf/Polizei/Schutz", icon: "Siren", tone: "bad" },
        ],
        note: "Nicht allein entscheiden und nichts ungeprüft unterstellen.",
      },
    ],
  },
  "grundgesetz-arbeitsrecht": {
    d: [
      {
        kind: "pyramid",
        title: "Rangfolge der Rechtsquellen (oben = höchste)",
        levels: [
          { t: "Grundgesetz", s: "Verfassung", tone: "bad" },
          { t: "Bundesgesetze (SGB, BGB, StGB, PflBG)", tone: "warn" },
          { t: "Verordnungen, Landesrecht", tone: "info" },
          { t: "Tarifvertrag, Betriebsvereinbarung, Arbeitsvertrag", tone: "ok" },
        ],
        note: "Vereinfachte Darstellung: Höheres Recht geht vor niedrigerem.",
      },
    ],
  },
  "weisung-haftung": {
    d: [
      {
        kind: "table",
        title: "Delegation ärztlicher Leistungen: drei Gruppen",
        head: ["Gruppe", "Bedeutung", "Beispiele"],
        rows: [
          ["Allgemein delegierbar", "Arzt muss nicht dabei sein, wenn Personal qualifiziert ist", "Messungen, einfache Verbandwechsel, Katheterwechsel"],
          ["Im Einzelfall delegierbar", "Arzt prüft Kompetenz und Risiko pro Fall", "Injektionen, Infusionen, Blutentnahmen"],
          ["Nicht delegierbar", "Besonders riskant, Arzt selbst", "Invasive Eingriffe, Diagnose, Indikation"],
        ],
      },
    ],
  },
  "freiheit-betreuung": {
    d: [
      {
        kind: "flow",
        title: "Freiheitsentziehende Maßnahme: Prüfreihenfolge",
        steps: [
          { t: "Alternativen zuerst", s: "Niedrigbett, Sensormatte, Begleitung, Beschäftigung", icon: "Lightbulb", tone: "ok" },
          { t: "Einwilligung des Betroffenen?", s: "Nur wenn einwilligungsfähig und freiwillig", icon: "ShieldCheck", tone: "info" },
          { t: "Sonst: rechtliche Grundlage", s: "Betreuer/Gericht, Anordnung, Dokumentation", icon: "Scale", tone: "warn" },
          { t: "Akute Notlage", s: "Kurz, dokumentieren, sofort Genehmigung einholen", icon: "Siren", tone: "bad" },
        ],
        note: "Betreuungsrecht ist 2023 reformiert worden, Paragrafennummern im Buch (Stand 2019) sind teils überholt. Aktuellen Text prüfen.",
      },
    ],
    b: [
      { h: "Patientenverfügung, Vollmacht, Betreuung", li: ["Patientenverfügung: schriftlich festgelegter Wille für spätere Behandlungssituationen. Gilt, wenn sie auf die Situation zutrifft.", "Vorsorgevollmacht: Eine vertraute Person darf in festgelegten Bereichen für den Menschen entscheiden. Betreuung durch das Gericht ist dann meist nicht nötig.", "Rechtliche Betreuung: das Gericht bestellt eine Betreuerin oder einen Betreuer für bestimmte Aufgabenkreise, wenn jemand seine Angelegenheiten nicht mehr selbst regeln kann."] },
    ],
  },
  spezialgesetze: {
    d: [
      {
        kind: "table",
        title: "Gesetze im Pflegealltag: Übersicht",
        head: ["Gesetz", "Regelt", "Beispiel"],
        rows: [
          ["AMG", "Arzneimittel", "Sichere Versorgung, Lagerung"],
          ["MPG/MDR", "Medizinprodukte", "Abgelaufenes Produkt nicht verwenden"],
          ["IfSG", "Infektionsschutz", "Meldepflicht, Hygiene"],
          ["TPG", "Organspende", "Einwilligung nötig"],
          ["PflBG", "Pflegeberuf", "Vorbehaltene Tätigkeiten, Ausbildung"],
          ["SGB V / XI / IX", "Kranken-, Pflegeversicherung, Teilhabe", "Pflegegrade, Rehabilitation"],
        ],
      },
    ],
    b: [
      { h: "Meldepflicht nach dem Infektionsschutzgesetz", li: ["Bestimmte Krankheiten und Erreger sind meldepflichtig (z. B. Tuberkulose, Masern, Hepatitis, Salmonellen). Die Meldung läuft über Ärzte und Leitungen ans Gesundheitsamt, nach Hausstandard.", "Pflegende informieren sofort die zuständige Person, wenn sie eine Häufung oder einen Verdacht bemerken (z. B. mehrere Durchfallerkrankungen auf einer Station)."] },
    ],
  },
  qualitaet: {
    d: [
      {
        kind: "tiles",
        title: "Qualität nach Donabedian",
        items: [
          { t: "Struktur", s: "Personal, Räume, Hilfsmittel", icon: "Building2", tone: "info" },
          { t: "Prozess", s: "Standards, Planung, Dokumentation", icon: "Workflow", tone: "warn" },
          { t: "Ergebnis", s: "Zufriedenheit, Sturz-, Dekubitusrate", icon: "ChartBar", tone: "ok" },
        ],
      },
      {
        kind: "cycle",
        title: "PDCA-Zyklus",
        steps: [
          { t: "Plan", s: "Problem erkennen, Ziel und Maßnahmen planen", icon: "ClipboardList" },
          { t: "Do", s: "Umsetzen (oft zuerst im kleinen Rahmen)", icon: "HandHelping", tone: "info" },
          { t: "Check", s: "Wirkung prüfen, Daten auswerten", icon: "Search", tone: "warn" },
          { t: "Act", s: "Verbessern, zum Standard machen", icon: "TrendingUp", tone: "ok" },
        ],
      },
    ],
  },
  expertenstandards: {
    d: [
      {
        kind: "tiles",
        title: "Wichtige Expertenstandards (Auswahl)",
        items: [
          { t: "Dekubitusprophylaxe", icon: "BedDouble" },
          { t: "Sturzprophylaxe", icon: "TriangleAlert" },
          { t: "Schmerzmanagement", icon: "Zap" },
          { t: "Entlassungsmanagement", icon: "DoorOpen" },
          { t: "Förderung der Harnkontinenz", icon: "Droplets" },
          { t: "Chronische Wunden", icon: "Bandage" },
          { t: "Ernährungsmanagement", icon: "Utensils" },
          { t: "Mobilität", icon: "Footprints" },
          { t: "Beziehungsgestaltung bei Demenz", icon: "Brain" },
          { t: "Mundgesundheit", icon: "Sparkles" },
        ],
      },
    ],
  },
  entlassung: {
    d: [
      {
        kind: "cycle",
        title: "Entlassungsmanagement",
        steps: [
          { t: "Früh einschätzen", s: "Bedarf und Risiken kurz nach Aufnahme (ca. 24 h)", icon: "Search" },
          { t: "Entlassung planen", s: "Mensch und Angehörige beraten, Hilfsmittel, Pflegegrad, Dienste", icon: "ClipboardList", tone: "info" },
          { t: "Koordinieren und übergeben", s: "Entlassbrief, Medikamentenplan, Überleitungsbogen", icon: "Handshake", tone: "warn" },
          { t: "Nachfragen", s: "Kurz nach der Entlassung prüfen, ob alles funktioniert", icon: "Phone", tone: "ok" },
        ],
      },
    ],
  },
  ethik: {
    d: [
      {
        kind: "tiles",
        title: "Vier ethische Prinzipien",
        items: [
          { t: "Autonomie", s: "Selbstbestimmung", icon: "Compass", tone: "info" },
          { t: "Nicht schaden", s: "Schadensvermeidung", icon: "ShieldCheck", tone: "bad" },
          { t: "Fürsorge", s: "Wohl fördern", icon: "HeartHandshake", tone: "ok" },
          { t: "Gerechtigkeit", s: "Fair verteilen", icon: "Scale", tone: "warn" },
        ],
      },
      {
        kind: "flow",
        title: "Ethisches Dilemma durchdenken",
        steps: [
          { t: "Situation und Perspektiven beschreiben", icon: "Eye" },
          { t: "Konflikt benennen", s: "z. B. Autonomie gegen Schadensvermeidung", icon: "Scale", tone: "warn" },
          { t: "Optionen abwägen", icon: "Lightbulb", tone: "info" },
          { t: "Begründet entscheiden, dokumentieren, überprüfen", icon: "ClipboardList", tone: "ok" },
        ],
      },
    ],
  },
  pflegecharta: {
    d: [
      {
        kind: "table",
        title: "Die acht Artikel der Pflege-Charta",
        head: ["Art.", "Inhalt"],
        rows: [
          ["1", "Selbstbestimmung und Hilfe zur Selbsthilfe"],
          ["2", "Körperliche und seelische Unversehrtheit, Freiheit und Sicherheit"],
          ["3", "Privatheit"],
          ["4", "Pflege, Betreuung und Behandlung"],
          ["5", "Information, Beratung und Aufklärung"],
          ["6", "Wertschätzung, Kommunikation und Teilhabe"],
          ["7", "Religion, Kultur und Weltanschauung"],
          ["8", "Palliative Begleitung, Sterben und Tod"],
        ],
      },
    ],
  },
};
