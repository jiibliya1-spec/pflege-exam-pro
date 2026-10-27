import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Ausbildung und Pflegegrundlagen (Teil 1). Lernhilfe der App, eigene Worte. */
export const EXTRA_PFLEGE_1: Record<string, Extra> = {
  ausbildung: {
    d: [
      {
        kind: "tree",
        title: "Aufbau der Pflegeausbildung (3 Jahre)",
        root: { t: "Pflegefachfrau / Pflegefachmann", icon: "GraduationCap" },
        kids: [
          { t: "Theorie", icon: "BookOpen", items: ["Mind. 2100 Stunden", "Pflegeschule"] },
          { t: "Praxis", icon: "Hospital", items: ["Mind. 2500 Stunden", "Akut, Langzeit, ambulant, Kinder, Psychiatrie"] },
          { t: "Anleitung", icon: "HeartHandshake", items: ["Mind. 10 % der Praxiszeit geplant", "Praxisbegleitung durch die Schule"] },
          { t: "Prüfung", icon: "ClipboardList", items: ["Schriftlich, mündlich, praktisch"] },
        ],
      },
      {
        kind: "table",
        title: "Die fünf Kompetenzbereiche (Kurzform)",
        head: ["Nr.", "Thema"],
        rows: [
          ["I", "Pflegeprozesse planen, gestalten, steuern"],
          ["II", "Kommunikation und Beratung"],
          ["III", "Intra- und interprofessionell handeln"],
          ["IV", "An Gesetzen, Leitlinien, Qualität ausrichten"],
          ["V", "Handeln wissenschaftlich und ethisch begründen"],
        ],
      },
    ],
  },
  pruefung: {
    d: [
      {
        kind: "pyramid",
        title: "Anforderungsbereiche (oben = schwerer)",
        levels: [
          { t: "III Beurteilen und entwickeln", s: "abwägen, bewerten, eigene Lösung", tone: "bad" },
          { t: "II Anwenden", s: "auf den Fall übertragen, erläutern, begründen", tone: "warn" },
          { t: "I Wiedergeben", s: "nennen, beschreiben", tone: "info" },
        ],
      },
      {
        kind: "flow",
        title: "Eine Prüfungsaufgabe lösen",
        steps: [
          { t: "Fall lesen und markieren", s: "Name, Alter, Ort, Problem", icon: "Search" },
          { t: "Operator und Punkte beachten", s: "nennen, beschreiben, erläutern, begründen, beurteilen", icon: "ClipboardList" },
          { t: "Auf den Fall bezogen antworten", s: "Aussage, Begründung, Bezug zum Fall", icon: "Target", tone: "ok" },
          { t: "Zeit einteilen, alles kurz beantworten", icon: "Clock", tone: "info" },
        ],
      },
    ],
  },
  pflegeprozess: {
    d: [
      {
        kind: "cycle",
        title: "Der Pflegeprozess (WHO-Modell, 4 Schritte)",
        steps: [
          { t: "Assessment", s: "Informationen sammeln, Probleme und Ressourcen erkennen", icon: "Search" },
          { t: "Planung", s: "Ziele festlegen, Maßnahmen planen", icon: "ClipboardList", tone: "info" },
          { t: "Durchführung", s: "Maßnahmen umsetzen und dokumentieren", icon: "HandHelping", tone: "ok" },
          { t: "Evaluation", s: "Wirkung prüfen, anpassen", icon: "RefreshCw", tone: "warn" },
        ],
        note: "Fiechter und Meier teilen den Prozess in 6 Schritte: Informationen sammeln, Probleme/Ressourcen erkennen, Ziele, Planung, Durchführung, Evaluation.",
      },
    ],
    b: [
      { h: "Beispiel: Pflegeproblem formulieren (PESR)", li: ["P – Problem: Frau Meier hat ein hohes Sturzrisiko.", "E – Ätiologie: Schwindel durch Blutdruckmittel, unsichere Schuhe.", "S – Symptome: unsicherer Gang, hat sich schon zweimal festgehalten.", "R – Ressourcen: motiviert, kann mit Rollator gehen, versteht Hinweise.", "Ziel (SMART): In den nächsten 4 Wochen stürzt Frau Meier nicht und nutzt den Rollator bei jedem Weg."] },
    ],
  },
  vitalzeichen: {
    d: [
      {
        kind: "table",
        title: "Richtwerte beim gesunden Erwachsenen in Ruhe",
        head: ["Wert", "Normal", "Auffällig"],
        rows: [
          ["Puls", "60–100/min", "unter 60 Bradykardie, über 100 Tachykardie"],
          ["Blutdruck", "unter 140/90 mmHg", "ab 140/90 Hypertonie, systolisch unter 100 Hypotonie"],
          ["Atmung", "12–18/min", "schneller Tachypnoe, langsamer Bradypnoe"],
          ["Temperatur", "36–37,4 °C", "ab 38 °C Fieber"],
          ["Sauerstoffsättigung", "95–100 %", "unter 90 % alarmieren"],
          ["Blutzucker nüchtern", "70–100 mg/dl", "unter 70 Hypoglykämie"],
        ],
        note: "Richtwerte. Maßgeblich sind Anordnung und Hausstandard.",
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Veränderung ist wichtiger als der Einzelwert. Immer Uhrzeit, Wert und Beobachtung nennen.", "Prüfungstipp: Arrhythmie = eine volle Minute zählen. Kein Blutdruck am Shunt-, Lähmungs- oder Lymphödemarm."] },
    ],
  },
  prophylaxen: {
    d: [
      {
        kind: "tree",
        title: "Prophylaxen und ihre wichtigsten Maßnahmen",
        root: { t: "Risiko erkennen, vorbeugen, Wirkung prüfen", icon: "ShieldCheck" },
        kids: [
          { t: "Dekubitus", icon: "BedDouble", items: ["Druck entlasten", "Haut beobachten", "Braden-Skala"] },
          { t: "Sturz", icon: "TriangleAlert", items: ["Stolperfallen weg", "Hilfsmittel erreichbar", "Medikamente prüfen"] },
          { t: "Pneumonie", icon: "Wind", items: ["Atemübungen", "Oberkörper hoch", "Mobilisation"] },
          { t: "Thrombose", icon: "Droplet", items: ["Bewegung", "Kompression", "Trinken"] },
          { t: "Kontraktur", icon: "Bone", items: ["Gelenke bewegen", "Funktionsstellung"] },
          { t: "Dehydratation", icon: "Droplets", items: ["Trinken anbieten", "Zeichen erkennen"] },
          { t: "Aspiration", icon: "Utensils", items: ["Aufrecht sitzen", "Schluckstörung melden"] },
        ],
      },
      {
        kind: "pyramid",
        title: "Dekubitus-Grade (oben = tiefster Schaden)",
        levels: [
          { t: "Grad 4", s: "bis Muskel/Knochen", tone: "bad" },
          { t: "Grad 3", s: "alle Hautschichten, Fettgewebe sichtbar", tone: "bad" },
          { t: "Grad 2", s: "Blase oder oberflächlicher Defekt", tone: "warn" },
          { t: "Grad 1", s: "nicht wegdrückbare Rötung", tone: "info" },
        ],
      },
    ],
  },
  hygiene: {
    d: [
      {
        kind: "tiles",
        title: "Die 5 Momente der Händedesinfektion",
        items: [
          { t: "1 Vor Patientenkontakt", icon: "User", tone: "info" },
          { t: "2 Vor aseptischer Tätigkeit", s: "z. B. Verband, Injektion", icon: "Syringe", tone: "info" },
          { t: "3 Nach Kontakt mit Körperflüssigkeiten", icon: "Droplet", tone: "bad" },
          { t: "4 Nach Patientenkontakt", icon: "User", tone: "ok" },
          { t: "5 Nach Kontakt mit der Umgebung", icon: "BedDouble", tone: "ok" },
        ],
      },
      {
        kind: "table",
        title: "Übertragungswege",
        head: ["Weg", "Beispiele", "Schutz"],
        rows: [
          ["Kontakt", "MRSA, Noro", "Hände, Handschuhe, Kittel"],
          ["Tröpfchen", "Grippe, Meningokokken", "Mund-Nasen-Schutz, Abstand"],
          ["Luft (Aerosol)", "Tuberkulose, Masern", "FFP2/FFP3, Einzelzimmer, Lüften"],
          ["Blut", "Hepatitis B/C, HIV", "Handschuhe, Nadelschutz"],
          ["Fäkal-oral", "Hepatitis A, Noro", "Hände, Toilettenhygiene"],
        ],
      },
    ],
  },
  medikamente: {
    d: [
      {
        kind: "tiles",
        title: "Die 6 R (Kurzform der Gabe-Regel)",
        items: [
          { t: "Richtiger Patient", icon: "User", tone: "info" },
          { t: "Richtiges Medikament", icon: "Pill", tone: "info" },
          { t: "Richtige Dosis", icon: "Scale", tone: "info" },
          { t: "Richtige Applikation", icon: "Syringe", tone: "info" },
          { t: "Richtiger Zeitpunkt", icon: "Clock", tone: "info" },
          { t: "Richtige Dokumentation", icon: "ClipboardList", tone: "info" },
        ],
        note: "Erweiterte Listen (z. B. 10 R) ergänzen Aufbewahrung, Verfallsdatum, Information und Wirkungskontrolle.",
      },
      {
        kind: "flow",
        title: "Bei einem Medikationsfehler",
        steps: [
          { t: "Mensch zuerst: Zustand prüfen, Vitalzeichen", icon: "Activity" },
          { t: "Arzt/Pflegefachkraft sofort informieren", icon: "Stethoscope", tone: "bad" },
          { t: "Beobachten und dokumentieren", icon: "ClipboardList", tone: "info" },
          { t: "Fehlermeldesystem nutzen, daraus lernen", icon: "RefreshCw", tone: "ok" },
        ],
      },
    ],
  },
  absaugen: {
    d: [
      {
        kind: "flow",
        title: "Absaugen am Tracheostoma",
        steps: [
          { t: "Indikation prüfen", s: "Nur bei Bedarf, nicht nach Uhr", icon: "Search" },
          { t: "Vorbereiten", s: "Händedesinfektion, Schutzkleidung, steriler Katheter, Sog gering", icon: "ShieldCheck", tone: "info" },
          { t: "Absaugen", s: "Ohne Sog einführen, unter Sog drehend ziehen, höchstens 15 Sekunden", icon: "Wind", tone: "warn" },
          { t: "Beobachten", s: "Puls, Hautfarbe, Atmung", icon: "Activity" },
          { t: "Nachbereiten und dokumentieren", s: "Sekret: Menge, Farbe, Konsistenz", icon: "ClipboardList", tone: "ok" },
        ],
      },
    ],
  },
  ernaehrung: {
    d: [
      {
        kind: "tiles",
        title: "Bei Schluckstörung (Dysphagie)",
        items: [
          { t: "Aufrecht sitzen", icon: "PersonStanding" },
          { t: "Kleine Bissen", icon: "Utensils" },
          { t: "Ruhe beim Essen", s: "nicht sprechen", icon: "VolumeX" },
          { t: "Kostform nach Anordnung", s: "pürriert, angedickt", icon: "Soup" },
          { t: "Zeichen melden", s: "Husten, feuchte Stimme", icon: "TriangleAlert", tone: "warn" },
          { t: "Logopädie einbinden", icon: "Megaphone" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Sonde ja, aber Oberkörper hoch (30 bis 45 Grad) und danach noch etwa 30 Minuten.", "Prüfungstipp: Mangelernährung erkennen: BMI unter 18,5, ungewollter Gewichtsverlust, Appetitlosigkeit."] },
    ],
  },
  ausscheidung: {
    d: [
      {
        kind: "table",
        title: "Harninkontinenz: die Formen",
        head: ["Form", "Typisch", "Beispiel"],
        rows: [
          ["Belastung", "Urinverlust bei Druck", "Husten, Lachen, Heben"],
          ["Drang", "Plötzlicher starker Drang", "schafft es nicht rechtzeitig"],
          ["Überlauf", "Blase zu voll, Tröpfeln", "Prostatavergrößerung"],
          ["Reflex", "Entleerung ohne Gefühl", "Rückenmarkschaden"],
          ["Funktionell", "Toilette nicht erreichbar", "Gehbehinderung, Demenz"],
        ],
      },
      {
        kind: "compare",
        title: "Ileostoma und Colostoma",
        cols: [
          { t: "Ileostoma (Dünndarm)", icon: "Droplets", tone: "info", items: ["Dünnflüssiger Stuhl", "Viel Flüssigkeitsverlust", "Haut besonders schützen"] },
          { t: "Colostoma (Dickdarm)", icon: "CircleDot", tone: "ok", items: ["Festerer Stuhl", "Weniger Flüssigkeitsverlust", "Meist besser steuerbar"] },
        ],
      },
    ],
  },
  mobilisation: {
    d: [
      {
        kind: "flow",
        title: "Schritt für Schritt mobilisieren",
        steps: [
          { t: "Ankündigen, Hilfsmittel prüfen", icon: "ClipboardList" },
          { t: "Aufsetzen am Bettrand", s: "Kreislauf beobachten, einen Moment warten", icon: "BedDouble", tone: "info" },
          { t: "Aufstehen und stehen", s: "Sicherheit geben, Schwindel erfragen", icon: "PersonStanding", tone: "info" },
          { t: "Gehen, ggf. mit Hilfsmittel", icon: "Footprints", tone: "ok" },
          { t: "Bei Schwindel, Blässe, Atemnot sofort hinsetzen/legen", icon: "TriangleAlert", tone: "bad" },
        ],
      },
      {
        kind: "tiles",
        title: "Rückengerecht arbeiten",
        items: [
          { t: "Bett auf Arbeitshöhe", icon: "BedDouble" },
          { t: "Nah am Körper", icon: "Hand" },
          { t: "Breiter Stand", icon: "Footprints" },
          { t: "Beine statt Rücken", icon: "Dumbbell" },
          { t: "Nicht verdrehen", icon: "RefreshCw" },
          { t: "Hilfsmittel nutzen", s: "Lifter, Gleitmatte", icon: "Wrench" },
        ],
      },
    ],
  },
  sbar: {
    d: [
      {
        kind: "table",
        title: "SBAR mit Beispiel",
        head: ["Buchstabe", "Frage", "Beispiel"],
        rows: [
          ["S Situation", "Worum geht es gerade?", "Frau Meier, Zi. 4: seit 20 Min. Atemnot"],
          ["B Background", "Vorgeschichte?", "Herzschwäche, neues Entwässerungsmittel"],
          ["A Assessment", "Meine Einschätzung?", "AF 28, SpO2 89 %, Puls 110"],
          ["R Recommendation", "Was brauche ich?", "Bitte sofortige Untersuchung, Sauerstoff-Anordnung"],
        ],
      },
    ],
  },
};
