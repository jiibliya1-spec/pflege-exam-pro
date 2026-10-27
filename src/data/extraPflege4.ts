import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Pflegetechniken, Lebensphasen, Therapie und Konzepte. Lernhilfe der App, eigene Worte.
 *  Hausstandards und ärztliche Anordnungen gehen immer vor. */
export const EXTRA_PFLEGE_4: Record<string, Extra> = {
  "b-sozialsystem": {
    d: [
      {
        kind: "tiles",
        title: "Die fünf Säulen der Sozialversicherung",
        items: [
          { t: "Krankenversicherung", s: "SGB V", icon: "Stethoscope", tone: "info" },
          { t: "Rentenversicherung", icon: "Landmark", tone: "info" },
          { t: "Arbeitslosenversicherung", icon: "Briefcase", tone: "info" },
          { t: "Unfallversicherung", icon: "Siren", tone: "info" },
          { t: "Pflegeversicherung", s: "SGB XI", icon: "HandHelping", tone: "ok" },
        ],
        note: "Teilhabe und Rehabilitation von Menschen mit Behinderung: SGB IX.",
      },
      {
        kind: "table",
        title: "Pflegeorganisationssysteme",
        head: ["System", "Prinzip", "Vorteil", "Nachteil"],
        rows: [
          ["Funktionspflege", "Aufgaben nach Tätigkeit verteilt", "Effizient", "Zerstückelt, viele Bezugspersonen"],
          ["Bereichspflege", "Team betreut einen Bereich", "Überschaubar", "Weniger persönlich als Bezugspflege"],
          ["Bezugspflege", "Eine Pflegende betreut wenige Patienten über den Aufenthalt", "Beziehung, Kontinuität", "Braucht gute Planung"],
          ["Primary Nursing", "Eine Pflegefachperson trägt die 24-Std.-Verantwortung für den Prozess", "Höchste Verantwortung und Kontinuität", "Qualifiziertes Personal nötig"],
        ],
      },
    ],
    b: [
      { h: "DRG: Fallpauschale im Krankenhaus", li: ["Das Krankenhaus erhält für eine Diagnosegruppe einen festen Betrag, unabhängig von der tatsächlichen Verweildauer.", "Folge: kürzere Liegezeiten, mehr Dokumentation und Kodierung, Druck auf Personal. Gute Pflege bleibt wichtig, weil sie Komplikationen und Wiederaufnahmen vermeidet."] },
    ],
  },
  "b-entwicklung": {
    d: [
      {
        kind: "pyramid",
        title: "Bedürfnispyramide nach Maslow (oben = zuletzt)",
        levels: [
          { t: "Selbstverwirklichung", s: "Sinn, Entfaltung", tone: "ok" },
          { t: "Wertschätzung", s: "Anerkennung, Selbstachtung", tone: "ok" },
          { t: "Soziale Bindung", s: "Zugehörigkeit, Liebe", tone: "info" },
          { t: "Sicherheit", s: "Schutz, Ordnung, Gesundheit", tone: "warn" },
          { t: "Körperliche Bedürfnisse", s: "Atmen, Essen, Trinken, Schlaf, Ausscheiden", tone: "bad" },
        ],
      },
      {
        kind: "table",
        title: "Entwicklungsmodelle im Überblick",
        head: ["Theorie", "Kernidee", "Beispiel"],
        rows: [
          ["Freud", "Psychosexuelle Phasen", "oral, anal, phallisch, Latenz, genital"],
          ["Erikson", "Psychosoziale Krise je Lebensphase", "Säugling: Urvertrauen gegen Misstrauen"],
          ["Piaget", "Denkentwicklung in Stufen", "sensomotorisch, präoperational, konkret, formal"],
          ["Havighurst", "Entwicklungsaufgaben", "z. B. Beruf wählen, Partnerschaft, Alter annehmen"],
          ["Skinner", "Lernen durch Verstärkung", "Belohnung fördert Verhalten"],
          ["Bandura", "Lernen am Modell", "Nachahmen von Vorbildern"],
        ],
      },
    ],
    b: [
      { h: "Big Five: fünf Persönlichkeitsdimensionen (OCEAN)", li: ["Offenheit für Erfahrungen, Gewissenhaftigkeit, Extraversion, Verträglichkeit, Neurotizismus (emotionale Instabilität).", "Jeder Mensch liegt irgendwo zwischen den Polen. Das erklärt, warum Menschen ähnliche Situationen verschieden erleben."] },
      { h: "Nutzen für die Pflege", li: ["Ein Jugendlicher mit Diabetes hat andere Entwicklungsaufgaben (Identität, Gruppe) als ein alter Mensch (Rückblick, Abschied). Beratung muss dazu passen.", "Nach Maslow: Zuerst Schmerz, Hunger, Atemnot und Sicherheit klären, bevor Gespräche über Wünsche und Ziele gelingen."] },
    ],
  },
  "b-kommunikation": {
    d: [
      {
        kind: "tiles",
        title: "Watzlawick: 5 Axiome",
        items: [
          { t: "1", s: "Man kann nicht nicht kommunizieren", icon: "MessageCircle" },
          { t: "2", s: "Inhalts- und Beziehungsaspekt", icon: "Handshake" },
          { t: "3", s: "Interpunktion: Ursache und Wirkung werden unterschiedlich gesehen", icon: "RefreshCw" },
          { t: "4", s: "Digital (Worte) und analog (Mimik, Ton)", icon: "Eye" },
          { t: "5", s: "Symmetrisch oder komplementär", icon: "Scale" },
        ],
      },
      {
        kind: "flow",
        title: "Aktives Zuhören",
        steps: [
          { t: "Zugewandt und offen sitzen oder stehen", icon: "User" },
          { t: "Aufmerksamkeit zeigen", s: "Blickkontakt, nicken, Schweigen aushalten", icon: "Eye", tone: "info" },
          { t: "Offen fragen", s: "„Wie ist das für Sie?“", icon: "MessageCircle", tone: "info" },
          { t: "Zusammenfassen und spiegeln", s: "„Wenn ich Sie richtig verstehe …“", icon: "RefreshCw", tone: "ok" },
          { t: "Keine vorschnellen Ratschläge", icon: "VolumeX", tone: "warn" },
        ],
      },
    ],
    b: [
      { h: "Beispiel für die vier Ohren in der Pflege", li: ["Patient sagt: „Das Essen ist schon wieder kalt.“", "Sachohr: Die Temperatur des Essens ist niedrig. Selbstoffenbarungsohr: Ich bin enttäuscht. Beziehungsohr: Ihr kümmert euch nicht. Appellohr: Bringt mir etwas Warmes.", "Gute Antwort: Gefühl aufgreifen („Das ärgert Sie.“), Lösung anbieten („Ich wärme es Ihnen auf.“)."] },
      { h: "Nähe und Distanz im Gespräch", li: ["Vor Berührungen oder Betreten der Intimzone ankündigen. Haltung zeigt Respekt.", "Auf Augenhöhe sprechen, bei Sitzenden hinsetzen. Fachbegriffe vermeiden oder erklären."] },
    ],
  },
  "b-team": {
    d: [
      {
        kind: "cycle",
        title: "Teamentwicklung nach Tuckman",
        steps: [
          { t: "Forming", s: "Kennenlernen, Orientierung, Höflichkeit", icon: "Handshake" },
          { t: "Storming", s: "Rollen und Macht werden ausgehandelt, Konflikte", icon: "Zap", tone: "warn" },
          { t: "Norming", s: "Regeln, Zusammenhalt, Vertrauen", icon: "ShieldCheck", tone: "info" },
          { t: "Performing", s: "Das Team arbeitet leistungsstark", icon: "TrendingUp", tone: "ok" },
        ],
        note: "Bei neuen Mitgliedern oder Veränderungen kann das Team zu früheren Phasen zurückfallen.",
      },
    ],
    b: [
      { h: "Konflikte im Team", li: ["Früh ansprechen, Ich-Botschaften nutzen („Ich habe bemerkt …, mir ist wichtig …“), sachlich bleiben, Lösung gemeinsam suchen.", "Bei festgefahrenen Konflikten Leitung oder Mediation einbeziehen."] },
      { h: "Grenzen in der Pflegebeziehung", li: ["Geschenke, private Kontakte und Duzen im Team klären. Der Patient ist abhängig, deshalb liegt die Verantwortung bei den Pflegenden.", "Wenn Nähe zu groß oder Ablehnung zu stark wird: Reflexion im Team, Supervision."] },
    ],
  },
  "b-koerperpflege": {
    d: [
      {
        kind: "compare",
        title: "Beruhigende und belebende Waschung",
        cols: [
          { t: "Beruhigend", icon: "Moon", tone: "info", items: ["Warmes Wasser (ca. 37–38 °C)", "In Haarwuchsrichtung, langsam, ruhig", "Fördert Entspannung und Schlaf", "Z. B. bei Unruhe, Schlafstörung, Angst"] },
          { t: "Belebend", icon: "Sun", tone: "warn", items: ["Wasser etwas kühler (ca. 25–30 °C, nach Verträglichkeit)", "Gegen Haarwuchsrichtung, zügig", "Regt Kreislauf und Wachheit an", "Z. B. bei Antriebslosigkeit, Bewusstseinsstörung"] },
        ],
        note: "Temperaturen sind Richtwerte, Wohlbefinden und Anordnung zählen.",
      },
    ],
    b: [
      { h: "Körperpflege gut planen", li: ["Vorher klären: Was kann der Mensch selbst? Hilfsmittel bereitlegen, Raum angenehm warm, Tür schließen, Intimsphäre schützen.", "Reihenfolge von sauber nach schmutzig: Gesicht, Oberkörper, Arme, Beine, zuletzt Intimbereich. Frisches Wasser nach Bedarf.", "Haut beobachten (Rötung, Druckstellen, Feuchtigkeit), Auffälligkeiten melden."] },
      { h: "Schlaf fördern", li: ["Ruhige Umgebung, Licht und Lärm reduzieren, Schmerzen behandeln, Abendrituale.", "Schlafmittel sind kein Dauermittel. Wirkung und Nebenwirkungen (Sturzgefahr) beobachten."] },
    ],
  },
  "b-ernaehrung-ausscheidung": {
    d: [
      {
        kind: "table",
        title: "Flüssigkeitsbilanz (Beispiel pro Tag)",
        head: ["Einfuhr", "ml", "Ausfuhr", "ml"],
        rows: [
          ["Trinken", "1500", "Urin", "1500"],
          ["Nahrung (Wasser)", "700", "Stuhl", "100"],
          ["Oxidationswasser", "300", "Perspiratio insensibilis (Haut, Atmung)", "900"],
          ["Summe", "2500", "Summe", "2500"],
        ],
        note: "Richtwerte. Bei Fieber, Durchfall, Schwitzen oder Infusionen verändert sich die Bilanz.",
      },
      {
        kind: "tiles",
        title: "EDEKA: Was vor dem Essen geprüft wird",
        items: [
          { t: "E", s: "Empfindlichkeiten und Unverträglichkeiten", icon: "TriangleAlert" },
          { t: "D", s: "Diätetische Kost", icon: "Utensils" },
          { t: "E", s: "Einschränkungen bei der Nahrungsaufnahme", icon: "Hand" },
          { t: "K", s: "Krankheitsbedingte Kost", icon: "Stethoscope" },
          { t: "A", s: "Allergien", icon: "Wind" },
        ],
      },
    ],
    b: [
      { h: "Bilanzieren in der Praxis", li: ["Alles zählen, was getrunken, infundiert und ausgeschieden wird, auch Sondennahrung, Spülungen, Erbrochenes und Drainagen.", "Zeitraum meist 24 Stunden (z. B. von 6 bis 6 Uhr). Positive Bilanz: mehr Einfuhr, Gefahr der Überwässerung. Negative Bilanz: mehr Ausfuhr, Gefahr der Austrocknung.", "Normwert Urin: etwa 1 bis 2 Liter pro Tag. Weniger als etwa 500 ml (Oligurie) melden."] },
      { h: "Formeln zum Merken", li: ["Flüssigkeitsbedarf Richtwert: etwa 35 ml pro kg Körpergewicht pro Tag.", "Energiebedarf = Grundumsatz (Ruheenergieumsatz) mal Aktivitätsfaktor (PAL).", "BMI = Gewicht (kg) geteilt durch Größe (m) zum Quadrat."] },
      { h: "Beobachtung von Stuhl und Erbrochenem", li: ["Teerstuhl (schwarz, klebrig, riecht stark): Blutung im oberen Magen-Darm-Trakt.", "Heller, lehmfarbener Stuhl: Gallenabfluss gestört. Hellrotes Blut: Blutung im unteren Darm.", "Kaffeesatzartiges Erbrechen: Blut, das schon im Magen verändert wurde. Frisch blutig: akute Blutung. Kotiges Erbrechen: Ileus-Verdacht. Alles sofort melden."] },
    ],
  },
  "b-katheter-injektion": {
    d: [
      {
        kind: "tiles",
        title: "Injektionsarten und Orte (Überblick)",
        items: [
          { t: "Subkutan", s: "unter die Haut: Bauch, Oberschenkel (Insulin, Heparin)", icon: "Syringe" },
          { t: "Intramuskulär", s: "in den Muskel: z. B. Gesäß (ventro-glutäal), Oberschenkel", icon: "Dumbbell" },
          { t: "Intravenös", s: "in die Vene: nur nach Anordnung und Qualifikation", icon: "Droplet" },
          { t: "Intrakutan", s: "in die Haut: z. B. Allergie- oder Tuberkulintest", icon: "Eye" },
        ],
      },
      {
        kind: "flow",
        title: "Blasenkatheter legen (Ablauf in Kurzform)",
        steps: [
          { t: "Anordnung/Indikation prüfen, Mensch informieren", icon: "ClipboardList" },
          { t: "Material richten, Händedesinfektion", s: "Steril arbeiten", icon: "Sparkles", tone: "info" },
          { t: "Intimbereich desinfizieren, Katheter einführen", s: "Urinfluss abwarten, dann blocken", icon: "Syringe", tone: "warn" },
          { t: "Beutel anschließen, unter Blasenniveau halten", icon: "Droplets" },
          { t: "Dokumentieren", s: "Größe, Menge, Besonderheiten", icon: "ClipboardList", tone: "ok" },
        ],
      },
    ],
    b: [
      { h: "Sicherheit bei Injektionen", li: ["Kanüle nie zurück in die Schutzkappe stecken (Stichgefahr), sofort in den durchstichsicheren Behälter.", "Einstichstelle gesund und ohne Verhärtung wählen, Stellen wechseln. Nach Gabe nicht reiben bei Heparin (Hämatomgefahr).", "Allergien, Gerinnungsstörung und Antikoagulation erfragen."] },
      { h: "Katheter: Pflege und Komplikationen", li: ["Verweilkatheter sind ein hoher Risikofaktor für Harnwegsinfektionen: nur wenn nötig und so kurz wie möglich.", "Beutel unter Blasenniveau, nicht auf dem Boden, Abfluss frei (nicht abknicken), Katheter ohne Zug fixieren, tägliche Intimpflege.", "Suprapubischer Katheter: durch die Bauchdecke, Eintrittsstelle beobachten."] },
    ],
  },
  "b-zugaenge-infusion": {
    d: [
      {
        kind: "compare",
        title: "Peripherer und zentraler Zugang",
        cols: [
          { t: "Peripher (Venenverweilkanüle)", icon: "Syringe", tone: "info", items: ["Meist Unterarm/Handrücken", "Kurze Liegedauer (nach Hausstandard)", "Für Standardinfusionen", "Risiko: Phlebitis, Paravasat"] },
          { t: "Zentral (ZVK, Port)", icon: "Heart", tone: "warn", items: ["Spitze liegt in großer Vene nahe dem Herzen", "Für Chemo, Ernährung, Dauertherapie", "Steril pflegen, Kontrolle der Lage", "Risiko: Infektion, Thrombose, Luftembolie"] },
        ],
      },
      {
        kind: "flow",
        title: "Bluttransfusion: Sicherheitskette",
        steps: [
          { t: "Aufklärung/Einwilligung, Anordnung", icon: "ClipboardList" },
          { t: "Identität und Blutgruppe prüfen", s: "Patient, Konserve, Begleitschein (Vier-Augen-Prinzip)", icon: "ShieldCheck", tone: "info" },
          { t: "Bedside-Test durch den Arzt", icon: "TestTube", tone: "warn" },
          { t: "Beginn langsam, Vitalzeichen eng", s: "Besonders in den ersten 15 Minuten", icon: "Activity", tone: "warn" },
          { t: "Bei Reaktion sofort stoppen, Zugang lassen, Arzt rufen", s: "Fieber, Schüttelfrost, Atemnot, Ausschlag", icon: "Siren", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Komplikationen am Zugang erkennen", li: ["Phlebitis: Rötung, Schmerz, Schwellung, tastbarer Strang entlang der Vene. Infusion stoppen, Arzt informieren, Zugang entfernen nach Anordnung.", "Paravasat (Infusion läuft ins Gewebe): Schwellung, Kühle, Schmerz. Sofort stoppen. Besonders gefährlich bei Chemotherapie.", "Infektion: Rötung, Eiter, Fieber. ZVK-Infektionen können eine Sepsis auslösen."] },
      { h: "Infusionen sicher gehen", li: ["Lösung, Menge, Geschwindigkeit, Zusätze und Verfallsdatum prüfen. Infusionsschlauch entlüften, Tropfgeschwindigkeit bzw. Pumpenrate nach Anordnung.", "Auf Überwässerung achten (Atemnot, Ödeme) bei schneller Infusion, besonders bei Herz- und Nierenkranken."] },
    ],
  },
  "b-sonden-drainagen": {
    d: [
      {
        kind: "compare",
        title: "Magensonde und PEG",
        cols: [
          { t: "Nasogastrale Sonde", icon: "Utensils", tone: "info", items: ["Durch die Nase in den Magen", "Kurz- bis mittelfristig", "Lage vor jeder Nutzung kontrollieren", "Risiko: Fehllage, Druckstellen"] },
          { t: "PEG", icon: "Syringe", tone: "ok", items: ["Durch die Bauchdecke in den Magen", "Langzeitversorgung", "Eintrittsstelle pflegen, Sonde mobilisieren", "Risiko: Infektion, Verrutschen"] },
        ],
      },
      {
        kind: "tiles",
        title: "Drainagen beobachten",
        items: [
          { t: "Menge", icon: "Droplets" },
          { t: "Farbe", s: "klar, blutig, galliger Ton", icon: "Droplet" },
          { t: "Konsistenz, Geruch", icon: "Search" },
          { t: "Zug vermeiden", icon: "TriangleAlert" },
          { t: "System geschlossen halten", icon: "Lock" },
          { t: "Auffälligkeiten melden", icon: "Siren", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Sondenkost sicher geben", li: ["Oberkörper hoch (30 bis 45 Grad), Lage der Sonde prüfen, Nahrung Zimmertemperatur, Geschwindigkeit nach Plan.", "Bei Übelkeit, Husten, Luftnot, Bauchschmerz stoppen und melden. Nach der Gabe mit Wasser spülen, Oberkörper noch etwa 30 Minuten hoch.", "Mundpflege auch bei Sondenernährung, Mund bleibt feucht und sauber."] },
      { h: "Vor Punktion und Biopsie", li: ["Aufklärung und Einwilligung, Gerinnung und Blutverdünner beachten, nüchtern nach Anordnung, Gerät und Material steril bereitlegen.", "Nach dem Eingriff: Vitalzeichen, Einstichstelle (Blutung, Schwellung), Schmerz, Lagerung und Ruhezeit nach Anordnung."] },
    ],
  },
  "b-stoma-einlauf-atem": {
    d: [
      {
        kind: "tiles",
        title: "Stoma im Blick: Was ist normal, was nicht?",
        items: [
          { t: "Normal", s: "rosig, feucht, glänzend", icon: "ShieldCheck", tone: "ok" },
          { t: "Blass oder bläulich", s: "Durchblutung gestört: melden", icon: "Snowflake", tone: "bad" },
          { t: "Schwarz", s: "Absterben: sofort Arzt", icon: "Siren", tone: "bad" },
          { t: "Haut gerötet/wund", s: "Beutel passt nicht, Hautschutz", icon: "Flame", tone: "warn" },
          { t: "Abfluss fehlt", s: "Darmverschluss möglich", icon: "Construction", tone: "warn" },
        ],
      },
      {
        kind: "flow",
        title: "Beutelwechsel am Stoma",
        steps: [
          { t: "Vorbereiten, informieren, Intimsphäre", icon: "ClipboardList" },
          { t: "Alten Beutel vorsichtig ablösen", s: "Haut mit der anderen Hand halten", icon: "Hand" },
          { t: "Haut reinigen, trocknen, beobachten", icon: "Sparkles", tone: "info" },
          { t: "Öffnung passend zuschneiden, aufkleben", s: "Faltenfrei, dicht", icon: "Scissors", tone: "ok" },
          { t: "Beratung und Selbstständigkeit fördern", icon: "HeartHandshake", tone: "ok" },
        ],
      },
    ],
    b: [
      { h: "Einlauf und Darmentleerung", li: ["Linksseitenlage mit angezogenen Knien (Darmverlauf), Lösung körperwarm, langsam einlaufen lassen, Toilette bereit.", "Nicht bei Ileus-Verdacht, frischer Darm-OP oder akutem Bauch. Immer nach Anordnung und Indikation."] },
      { h: "Atemtherapie und Tracheostoma", li: ["Atemübungen: Lippenbremse, Bauchatmung, Husten mit Unterstützung, Atemtrainer.", "Tracheostoma: Luft wird nicht angewärmt, befeuchtet und gefiltert. Befeuchtung, Kanülenwechsel nach Plan, Absaugen nur bei Bedarf, Notfallset bereit (Ersatzkanüle, Spreizer, Absaugung).", "Kommunikation sichern: Schreibtafel, Klingel in Reichweite, nicht allein lassen bei Atemnot."] },
    ],
  },
  "b-wunde-verband": {
    d: [
      {
        kind: "cycle",
        title: "Wundheilung in Phasen",
        steps: [
          { t: "Reinigungsphase", s: "Wundflüssigkeit, Abwehrzellen reinigen", icon: "Droplet" },
          { t: "Granulationsphase", s: "Neues rotes Gewebe füllt die Wunde", icon: "Sprout", tone: "ok" },
          { t: "Epithelisierungsphase", s: "Haut wächst über die Wunde", icon: "ShieldCheck", tone: "info" },
        ],
      },
      {
        kind: "flow",
        title: "Verbandwechsel steril: Ablauf",
        steps: [
          { t: "Vorbereiten und informieren", s: "Händedesinfektion, Material bereitlegen", icon: "ClipboardList" },
          { t: "Alten Verband lösen (unsterile Handschuhe)", s: "Entsorgen, Hände desinfizieren", icon: "Hand", tone: "info" },
          { t: "Wunde beurteilen", s: "Größe, Grund, Rand, Exsudat, Geruch, Schmerz", icon: "Eye", tone: "info" },
          { t: "Neue Auflage ohne Berührung der Wundfläche", s: "Sterile Handschuhe oder Pinzette (No-Touch)", icon: "ShieldCheck", tone: "ok" },
          { t: "Dokumentieren, Veränderungen melden", icon: "ClipboardList", tone: "ok" },
        ],
      },
    ],
    b: [
      { h: "Feuchte Wundbehandlung", li: ["Moderne Auflagen halten ein feuchtes Milieu, das die Heilung fördert. Verband soll nicht am Wundgrund festkleben.", "Je nach Wunde: Hydrokolloid, Alginat, Schaumverband, Silberauflagen bei Infektionsgefahr. Auswahl nach Plan des Wundexperten oder Arztes."] },
      { h: "Wann sofort melden?", li: ["Zunehmende Rötung, Überwärmung, Schwellung, Eiter, Geruch, Fieber, plötzliche starke Schmerzen, Blutung, geöffnete Wundränder.", "Offene Brust- oder Bauchwunden und Fremdkörper in der Wunde: Notfall."] },
    ],
  },
  "b-schwangerschaft": {
    d: [
      {
        kind: "compare",
        title: "Präeklampsie, Eklampsie und HELLP",
        cols: [
          { t: "Präeklampsie", icon: "Gauge", tone: "warn", items: ["Bluthochdruck plus Eiweiß im Urin ab der 20. Woche", "Kopfschmerz, Sehstörung, Ödeme", "Engmaschig überwachen"] },
          { t: "HELLP", icon: "Droplet", tone: "bad", items: ["Hämolyse, erhöhte Leberwerte, wenig Blutplättchen", "Oberbauchschmerz, Übelkeit", "Lebensbedrohlich, Klinik"] },
          { t: "Eklampsie", icon: "Siren", tone: "bad", items: ["Krampfanfall", "Notruf, Seitenlage, Atemwege schützen", "Entbindung/Magnesium nach Arzt"] },
        ],
      },
      {
        kind: "flow",
        title: "Wochenbett: Beobachtung",
        steps: [
          { t: "Gebärmutter-Rückbildung", s: "Fundusstand und Wochenfluss beobachten", icon: "Flower2" },
          { t: "Blutung, Fieber, Schmerzen", s: "Starke Blutung oder Fieber melden", icon: "Thermometer", tone: "warn" },
          { t: "Stillen anleiten, Brust beobachten", s: "Milchstau, Rötung, Schmerz", icon: "Baby", tone: "info" },
          { t: "Stimmung beobachten", s: "Baby-Blues vorübergehend, Wochenbettdepression ernst nehmen", icon: "CloudRain", tone: "warn" },
        ],
      },
    ],
    b: [
      { h: "Warnzeichen in der Schwangerschaft", li: ["Vaginale Blutung, starke Bauchschmerzen, Flüssigkeitsabgang, ausbleibende Kindsbewegungen.", "Starke Kopfschmerzen, Flimmern vor den Augen, plötzliche Ödeme, Oberbauchschmerz (Präeklampsie).", "Fieber, Schüttelfrost, Schmerzen beim Wasserlassen."] },
      { h: "Stillen und Ernährung", li: ["Stillen anleiten, Position und Anlegen zeigen, Brustwarzen beobachten.", "Folsäure vor und in der Frühschwangerschaft, kein Alkohol und Nikotin."] },
    ],
  },
  "b-kind-alter": {
    d: [
      {
        kind: "table",
        title: "Altersabhängige Atemfrequenz (Richtwerte)",
        head: ["Alter", "Atemzüge pro Minute"],
        rows: [
          ["Säugling", "40–50"],
          ["Kleinkind", "ca. 25–35"],
          ["Schulkind", "ca. 18–25"],
          ["Erwachsener", "12–18"],
        ],
        note: "Kinder atmen und pulsen schneller. Altersgerechte Tabellen nutzen.",
      },
      {
        kind: "tiles",
        title: "Pflege älterer Menschen: häufige Themen",
        items: [
          { t: "Polypharmazie", s: "Mehrere Medikamente prüfen", icon: "Pill" },
          { t: "Sturzgefahr", icon: "TriangleAlert", tone: "warn" },
          { t: "Demenz und Delir", icon: "Brain", tone: "warn" },
          { t: "Dehydratation", icon: "Droplets", tone: "warn" },
          { t: "Mangelernährung", icon: "Utensils" },
          { t: "Ressourcen fördern", icon: "Sprout", tone: "ok" },
        ],
      },
    ],
    b: [
      { h: "Kind im Krankenhaus", li: ["Altersgerecht und ehrlich erklären, zeigen, spielen lassen. Eltern einbeziehen (Rooming-in), Bezugsperson, Lieblingsspielzeug.", "Schmerz ernst nehmen und mit Gesichterskalen erfassen. Impfstatus kennen. Hygiene und Sicherheit: Bettgitter, Medikamente weg."] },
      { h: "Menschen mit geistiger Behinderung", li: ["Einfache Sprache, kurze Sätze, Zeit lassen, Bilder und Zeichen nutzen. Bezugspersonen einbeziehen.", "Nicht „für“, sondern „mit“ dem Menschen entscheiden. Selbstbestimmung und Teilhabe fördern."] },
      { h: "Häusliche Pflege", li: ["Pflegende Angehörige anleiten (Heben, Lagern, Medikamente), entlasten (Tagespflege, Verhinderungspflege), über Pflegekurse und Beratungsbesuche informieren.", "Wohnung anpassen: Stolperfallen, Haltegriffe, Pflegebett, Hilfsmittel beantragen."] },
    ],
  },
  "b-medikamente": {
    d: [
      {
        kind: "compare",
        title: "Gerinnungshemmung: wichtige Unterschiede",
        cols: [
          { t: "Heparine (Spritze)", icon: "Syringe", tone: "info", items: ["Schnell wirksam, nach Anordnung", "Thromboseprophylaxe und Therapie", "Nach Gabe nicht reiben", "Kontrolle: Blutungszeichen, Thrombozyten"] },
          { t: "Cumarine (Tablette)", icon: "Pill", tone: "warn", items: ["Vitamin-K-Antagonisten", "Wirkung über den INR-Wert gesteuert", "Vitamin-K-reiche Kost gleichmäßig halten", "Viele Wechselwirkungen"] },
        ],
      },
    ],
    b: [
      { h: "Blutungszeichen unter Gerinnungshemmung", li: ["Nasen- oder Zahnfleischbluten, blaue Flecken ohne Grund, Blut im Urin, Teerstuhl, Blut im Erbrochenen, Kopfschmerz nach Sturz.", "Sturzgefahr senken, weiche Zahnbürste, Elektrorasierer. Keine intramuskulären Spritzen, Druck auf Einstichstellen länger halten."] },
      { h: "Lyse im Überblick", li: ["Auflösung von Gerinnseln bei Herzinfarkt, Schlaganfall, Lungenembolie. Wirkt nur im engen Zeitfenster.", "Gegenanzeigen: Blutungsgefahr (frische OP, Hirnblutung, Magengeschwür). Nach Lyse engmaschig überwachen und auf Blutungen achten."] },
    ],
  },
  "b-wickel-fieber": {
    d: [
      {
        kind: "bar",
        title: "Körpertemperatur (Richtwerte)",
        parts: [
          { t: "Untertemperatur", s: "unter 36", tone: "info" },
          { t: "Normal", s: "36–37,4", tone: "ok", w: 1.3 },
          { t: "Erhöht", s: "37,5–38", tone: "warn" },
          { t: "Fieber", s: "ab 38,1", tone: "bad" },
          { t: "Hohes Fieber", s: "ab 39", tone: "bad" },
        ],
      },
      {
        kind: "flow",
        title: "Fieberverlauf und Pflege",
        steps: [
          { t: "Fieberanstieg", s: "Frieren, Schüttelfrost: wärmen, Decke", icon: "Snowflake", tone: "info" },
          { t: "Fieberhöhe", s: "Heiß, rot: leichte Bedeckung, trinken anbieten", icon: "Flame", tone: "warn" },
          { t: "Fieberabfall", s: "Schwitzen: Haut trocknen, Wäsche wechseln, Flüssigkeit ersetzen", icon: "Droplets", tone: "ok" },
        ],
      },
      {
        kind: "flow",
        title: "Perioperative Pflege",
        steps: [
          { t: "Präoperativ", s: "Aufklärung, nüchtern, Körperpflege, Prämedikation, Schmuck ab", icon: "ClipboardList" },
          { t: "Intraoperativ", s: "Identität, Seite, Lagerung (OP-Team)", icon: "Hospital", tone: "info" },
          { t: "Aufwachraum/Postoperativ", s: "Vitalzeichen, Wunde, Drainagen, Schmerz, Übelkeit", icon: "Activity", tone: "warn" },
          { t: "Frühmobilisation und Prophylaxen", icon: "PersonStanding", tone: "ok" },
        ],
      },
    ],
    b: [
      { h: "Wickel richtig anwenden", li: ["Zweck klären (kühlen, wärmen, entspannen), Hautzustand und Verträglichkeit prüfen, Temperatur testen.", "Wadenwickel nur bei Fieber, wenn Beine warm sind und der Mensch es als angenehm empfindet. Bei kalten Füßen oder Schüttelfrost nicht.", "Wärme nicht bei Entzündung oder frischer Verletzung ohne Anordnung, Kälte nicht bei Durchblutungsstörung."] },
      { h: "Fieber ernst nehmen bei", li: ["Säuglingen, alten Menschen, Immunschwäche, Chemotherapie, nach OP. Fieber über 39 °C, anhaltend mehr als 3 Tage, mit Nackensteife, Atemnot oder Verwirrtheit.", "Medikamente zur Fiebersenkung nur nach Anordnung oder Standard."] },
    ],
  },
  "b-chronisch-onko": {
    d: [
      {
        kind: "tree",
        title: "Krebstherapie und typische Nebenwirkungen",
        root: { t: "Tumorerkrankung", icon: "Ribbon" },
        kids: [
          { t: "Operation", icon: "Hospital", items: ["Wunde, Schmerz, Prophylaxen"] },
          { t: "Chemotherapie", icon: "Syringe", items: ["Übelkeit, Haarausfall", "Mundschleimhautentzündung", "Infektionsgefahr, Blutungsneigung"], tone: "warn" },
          { t: "Strahlentherapie", icon: "Zap", items: ["Hautreizung im Feld", "Müdigkeit", "Hautpflege nach Plan"], tone: "warn" },
          { t: "Immun-/Hormontherapie", icon: "Pill", items: ["Individuelle Nebenwirkungen beachten"] },
        ],
      },
      {
        kind: "pyramid",
        title: "Verbrennung: Schweregrade (oben = tiefster Schaden)",
        levels: [
          { t: "Grad 3", s: "Gewebe zerstört, oft schmerzlos", tone: "bad" },
          { t: "Grad 2", s: "Blasen, starke Schmerzen", tone: "warn" },
          { t: "Grad 1", s: "Rötung, Schmerz", tone: "info" },
        ],
        note: "Erste Hilfe: kurz mit lauwarmem Wasser kühlen (Verbrennung nicht zu stark auskühlen), steril abdecken, Notruf bei großflächig, Gesicht, Gelenken oder Kindern.",
      },
    ],
    b: [
      { h: "Intensivpflege im Überblick", li: ["Engmaschige Überwachung von Herz, Kreislauf, Atmung, Ausscheidung, Bewusstsein.", "Beatmungspflege: Tubus fixieren, Mundpflege, Absaugen nach Bedarf, Sedierung und Schmerz beobachten, Oberkörper hoch gegen Beatmungspneumonie.", "Angehörige einbeziehen, Besuch ermöglichen, Reizüberflutung vermeiden."] },
      { h: "Transplantation", li: ["Nach Organtransplantation Immunsuppression lebenslang: Infektionsschutz, regelmäßige Kontrollen, Zeichen der Abstoßung (Fieber, Schmerz am Transplantat, weniger Urin bei Niere).", "Einwilligung zur Organspende regelt das Transplantationsgesetz. Hirntod wird von zwei unabhängigen Ärzten festgestellt."] },
    ],
  },
  "b-sterben": {
    d: [
      {
        kind: "flow",
        title: "Sterbephasen nach Kübler-Ross",
        steps: [
          { t: "1 Nicht-wahrhaben-Wollen", s: "Schock, Verleugnung", icon: "CloudRain", tone: "info" },
          { t: "2 Zorn", s: "Wut, Warum ich?", icon: "Flame", tone: "bad" },
          { t: "3 Verhandeln", s: "Klammern an kleinste Hoffnung", icon: "Handshake", tone: "warn" },
          { t: "4 Depression", s: "Trauer, Rückzug", icon: "CloudRain", tone: "warn" },
          { t: "5 Annahme", s: "Frieden mit dem Schicksal", icon: "Feather", tone: "ok" },
        ],
        note: "Die Phasen laufen nicht starr ab, Mischformen sind möglich, nicht jeder erreicht alle Phasen.",
      },
      {
        kind: "compare",
        title: "Unsichere und sichere Todeszeichen",
        cols: [
          { t: "Unsicher", icon: "Eye", tone: "warn", items: ["Bewusstlosigkeit, keine Reaktion", "Kein tastbarer Puls, keine Atmung", "Weite, lichtstarre Pupillen", "Blasse, kühle Haut"] },
          { t: "Sicher", icon: "Feather", tone: "info", items: ["Totenflecke", "Totenstarre", "Fäulnis", "Mit dem Leben nicht vereinbare Verletzungen"] },
        ],
        note: "Den Tod stellt eine Ärztin oder ein Arzt fest.",
      },
    ],
    b: [
      { h: "Begleitung in der letzten Lebenszeit", li: ["Terminalphase: letzte Wochen bis Monate. Finalphase: letzte Tage bis Stunden.", "Symptome lindern (Schmerz, Atemnot, Unruhe, Mundtrockenheit), Ruhe, Nähe, Lieblingsmusik, keine Hektik.", "Das Hören bleibt lange erhalten: ruhig sprechen, Berührung, Anwesenheit anbieten.", "Rasselatmung nicht routinemäßig absaugen: Lagerung ändern, Angehörige erklären."] },
      { h: "Angehörige und Team", li: ["Besuchszeiten flexibel, Rückzugsraum, Seelsorge, Abschiedsrituale. Erklären, was passiert, um Angst zu nehmen.", "Eigene Trauer ernst nehmen: Gespräch im Team, Supervision, Rituale auf der Station."] },
    ],
  },
  "b-kultursensibel": {
    d: [
      {
        kind: "tiles",
        title: "Kultursensible Pflege: Themen",
        items: [
          { t: "Ernährung", s: "Religion, Gewohnheit", icon: "Utensils" },
          { t: "Körperpflege und Scham", s: "Geschlecht der Pflegenden", icon: "User" },
          { t: "Gebet und Rituale", icon: "Compass" },
          { t: "Sprache", s: "Dolmetscher, Bilder", icon: "MessageCircle" },
          { t: "Familie und Besuch", icon: "Users" },
          { t: "Sterben und Trauer", icon: "Feather" },
        ],
      },
    ],
    b: [
      { h: "Haltung statt Schubladen", li: ["Herkunft erklärt nie alles. Jeder Mensch ist individuell: Nachfragen („Was ist Ihnen wichtig?“) statt annehmen.", "Eigene Vorurteile reflektieren. Unterschiede respektieren, solange niemand gefährdet wird.", "Nach Leininger: kulturelle Gewohnheiten bewahren, anpassen oder verhandeln und nur dann ändern, wenn sie schaden würden."] },
      { h: "Sprachbarrieren", li: ["Professionelle Dolmetscher oder Sprachmittler bevorzugen, Angehörige nur kurz und im Notfall. Datenschutz beachten.", "Einfache Sprache, Bildtafeln, Übersetzungs-Apps nur zur Hilfe, wichtige Aufklärung nur mit qualifizierter Sprachmittlung."] },
    ],
  },
  "b-anleiten-beraten": {
    d: [
      {
        kind: "flow",
        title: "Anleiten in fünf Schritten",
        steps: [
          { t: "Bedarf und Ziel klären", s: "Was will/muss die Person können?", icon: "Target" },
          { t: "Vormachen und erklären", icon: "Eye", tone: "info" },
          { t: "Gemeinsam üben", icon: "HandHelping", tone: "info" },
          { t: "Selbst durchführen lassen, Rückmeldung geben", icon: "ThumbsUp", tone: "ok" },
          { t: "Wirkung prüfen", s: "Hat sie es verstanden und kann sie es allein?", icon: "Search", tone: "ok" },
        ],
      },
      {
        kind: "compare",
        title: "Anleiten, Beraten, Schulen",
        cols: [
          { t: "Anleiten", icon: "Hand", tone: "info", items: ["Eine Tätigkeit zeigen und üben", "Beispiel: Insulin spritzen, Verband"] },
          { t: "Beraten", icon: "MessageCircle", tone: "warn", items: ["Informieren und Entscheidungen unterstützen", "Entscheidung bleibt beim Menschen"] },
          { t: "Schulen", icon: "Users", tone: "ok", items: ["Gruppen mit Lernzielen", "Beispiel: Diabetesschulung"] },
        ],
      },
    ],
    b: [
      { h: "Gute Anleitung und Beratung", li: ["Einfache Sprache, kleine Schritte, Wiederholung, Teach-back („Zeigen Sie mir bitte, wie Sie es machen“).", "Vorwissen und Gefühle erfragen. Angst, Scham und Überforderung beeinflussen das Lernen.", "Schriftliche Hilfen (Bilder, Checklisten) geben, Termine für Rückfragen anbieten, Ergebnis dokumentieren."] },
    ],
  },
  "b-kinaesthetik-basal-bobath": {
    d: [
      {
        kind: "table",
        title: "Drei Konzepte im Vergleich",
        head: ["Konzept", "Kern", "Beispiel"],
        rows: [
          ["Kinästhetik", "Bewegung gemeinsam, natürliche Muster, Eigenbewegung nutzen", "Umlagern mit dem Menschen statt Heben"],
          ["Basale Stimulation", "Wahrnehmung anregen bei eingeschränkter Wahrnehmung", "Ganzkörperwaschung, vertraute Gerüche, Musik, Berührung"],
          ["Bobath", "Betroffene Körperseite einbeziehen und fördern", "Nach Schlaganfall: Ansprache und Lagerung zur gelähmten Seite"],
        ],
      },
    ],
    b: [
      { h: "Praxisregeln", li: ["Kinästhetik: ankündigen, Bewegung in kleinen Schritten, mit dem Menschen statt gegen ihn arbeiten. Schont den Rücken der Pflegenden.", "Basale Stimulation: Berührung ruhig und klar, immer am Körperstamm beginnen, Rituale und Vorhersehbarkeit geben.", "Bobath: nicht am gelähmten Arm ziehen, Schulter schützen, die betroffene Seite regelmäßig lagern, Alltagshandlungen über die betroffene Seite anbieten."] },
    ],
  },
};
