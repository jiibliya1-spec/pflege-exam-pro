import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Niere, Psyche, Infektionen, Notfälle. Lernhilfe der App, eigene Worte. Anordnungen gehen vor. */
export const EXTRA_KRANK_A: Record<string, Extra> = {
  harnweg: {
    d: [
      {
        kind: "compare",
        title: "Unterer und oberer Harnwegsinfekt",
        cols: [
          { t: "Blasenentzündung (unterer HWI)", icon: "Droplets", tone: "warn", items: ["Brennen beim Wasserlassen", "Häufiger Harndrang, wenig Urin", "Trüber, riechender Urin", "Meist kein hohes Fieber"] },
          { t: "Nierenbeckenentzündung (oberer HWI)", icon: "Siren", tone: "bad", items: ["Fieber, Schüttelfrost", "Flankenschmerz", "Allgemein krank", "Sofort melden, Gefahr der Urosepsis"] },
        ],
      },
    ],
    b: [
      { h: "Vorbeugen im Alltag", li: ["Genug trinken (wenn nichts dagegen spricht), regelmäßig Blase entleeren, nicht zurückhalten.", "Intimpflege von vorn nach hinten, Inkontinenzmaterial rechtzeitig wechseln.", "Katheter nur bei klarer Indikation und so kurz wie möglich."] },
    ],
  },
  niereninsuff: {
    d: [
      {
        kind: "flow",
        title: "Was bei Nierenversagen im Körper passiert",
        steps: [
          { t: "Nieren filtern zu wenig", s: "Ursache: Diabetes, Bluthochdruck, Entzündung, Medikamente", icon: "Droplets" },
          { t: "Wasser und Salz bleiben", s: "Ödeme, Bluthochdruck, Lungenödem", icon: "Waves", tone: "warn" },
          { t: "Giftstoffe und Kalium steigen", s: "Übelkeit, Juckreiz, Rhythmusstörungen", icon: "Zap", tone: "bad" },
          { t: "Weitere Folgen", s: "Blutarmut, Knochenschwäche", icon: "Bone", tone: "warn" },
        ],
      },
    ],
    b: [
      { h: "Akut oder chronisch", li: ["Akutes Nierenversagen: Urinmenge sinkt schnell (Oligurie unter 500 ml/Tag, Anurie unter 100 ml/Tag), oft umkehrbar, wenn die Ursache behoben wird (Volumenmangel, Medikamente, Verschluss).", "Chronisch: schleichend über Jahre, Dialyse oder Transplantation im Endstadium."] },
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Am Shuntarm nichts messen, nichts spritzen, nichts drücken.", "Prüfungstipp: Kalium im Blut steigt: Herzrhythmusstörungen sind die gefährlichste Folge."] },
    ],
  },
  glomerulonephritis: {
    d: [
      {
        kind: "compare",
        title: "Nephritisches und nephrotisches Syndrom",
        cols: [
          { t: "Nephritisch", icon: "Droplet", tone: "bad", items: ["Blut im Urin (Hämaturie)", "Bluthochdruck", "Ödeme, wenig Urin"] },
          { t: "Nephrotisch", icon: "Droplets", tone: "warn", items: ["Starker Eiweißverlust (über 3 g/Tag)", "Starke Ödeme, auch im Gesicht", "Schaumiger Urin, Fettwerte hoch"] },
        ],
      },
    ],
    b: [
      { h: "Ursachen und Verlauf", li: ["Häufig nach einem Infekt mit Streptokokken (Mandel- oder Hautinfektion) oder durch Autoimmunreaktion.", "Behandlung: Ursache angehen, Blutdruck senken, entwässern, Eiweiß und Salz nach Arztplan, bei Bedarf Immunsuppression.", "Pflege: Gewicht täglich, Bilanz, Blutdruck, Urin beobachten, Infektionen früh melden, Haut schützen."] },
    ],
  },
  dialyse: {
    d: [
      {
        kind: "compare",
        title: "Hämodialyse und Peritonealdialyse",
        cols: [
          { t: "Hämodialyse", icon: "RefreshCw", tone: "info", items: ["Blut läuft über Maschine und Filter", "Meist 3 mal pro Woche, 4–6 Stunden", "Zugang: Shunt oder Katheter", "Heparin: Blutungsgefahr beachten"] },
          { t: "Peritonealdialyse", icon: "House", tone: "ok", items: ["Bauchfell als Filter", "Beutelwechsel meist täglich, oft zu Hause", "Zugang: Bauchkatheter", "Risiko: Bauchfellentzündung, Hygiene wichtig"] },
        ],
      },
    ],
    b: [
      { h: "Vor und nach der Dialyse", li: ["Vor der Dialyse wiegen, Blutdruck messen. Nach der Dialyse wieder: Gewichtsverlust zeigt die entzogene Menge.", "Nach der Dialyse: Kreislauf (Blutdruckabfall, Schwindel), Punktionsstellen (Nachblutung), Shuntkontrolle. Medikamente, die ausgewaschen werden, nach der Dialyse geben (Absprache)."] },
    ],
  },
  "saeure-basen": {
    d: [
      {
        kind: "bar",
        title: "Arterieller pH-Wert",
        parts: [
          { t: "Azidose", s: "unter 7,37", tone: "warn" },
          { t: "Normal", s: "7,37–7,43", tone: "ok", w: 0.7 },
          { t: "Alkalose", s: "über 7,43", tone: "warn" },
        ],
      },
      {
        kind: "table",
        title: "Vier Grundformen",
        head: ["Form", "Ursache (Beispiele)", "Pflege-Hinweis"],
        rows: [
          ["Respiratorische Azidose", "zu flache Atmung, COPD, Überdosis Opioide", "Atmung beobachten, Arzt informieren"],
          ["Respiratorische Alkalose", "Hyperventilation, Angst, Schmerz", "Beruhigen, ruhig atmen lassen"],
          ["Metabolische Azidose", "Ketoazidose, Nierenversagen, Durchfall", "Grunderkrankung behandeln, Bilanz"],
          ["Metabolische Alkalose", "Erbrechen, Diuretika", "Flüssigkeit, Kalium nach Anordnung"],
        ],
      },
    ],
  },
  depression: {
    d: [
      {
        kind: "tiles",
        title: "Hauptzeichen und Zusatzzeichen",
        items: [
          { t: "Gedrückte Stimmung", icon: "CloudRain", tone: "warn" },
          { t: "Interessenverlust", icon: "Hourglass", tone: "warn" },
          { t: "Antriebsmangel", icon: "BedDouble", tone: "warn" },
          { t: "Schlafstörung", icon: "Moon", tone: "info" },
          { t: "Appetitverlust", icon: "Utensils", tone: "info" },
          { t: "Hoffnungslosigkeit, Schuldgefühle", icon: "Frown", tone: "bad" },
        ],
        note: "Hält es länger als etwa zwei Wochen an, ist eine ärztliche Abklärung nötig.",
      },
    ],
  },
  "affektive-stoerung": {
    d: [
      {
        kind: "compare",
        title: "Depression und Manie",
        cols: [
          { t: "Depression", icon: "CloudRain", tone: "info", items: ["Antrieb und Stimmung unten", "Rückzug, Grübeln", "Schlaf gestört, Appetit weg", "Suizidgefahr beachten"] },
          { t: "Manie", icon: "Zap", tone: "warn", items: ["Antrieb und Stimmung oben", "Kaum Schlafbedarf", "Selbstüberschätzung, riskantes Verhalten", "Reizarme Umgebung, klare Grenzen"] },
        ],
        note: "Wechseln sich beide Phasen ab, spricht man von einer bipolaren Störung.",
      },
    ],
  },
  schizophrenie: {
    d: [
      {
        kind: "compare",
        title: "Plus- und Minussymptome",
        cols: [
          { t: "Plussymptome (zu viel)", icon: "Zap", tone: "bad", items: ["Wahn (z. B. Verfolgung)", "Halluzinationen (Stimmen hören)", "Ich-Störungen", "Denkstörungen"] },
          { t: "Minussymptome (zu wenig)", icon: "Hourglass", tone: "info", items: ["Antriebslosigkeit", "Gefühlsarmut", "Sozialer Rückzug", "Verarmte Sprache"] },
        ],
      },
    ],
  },
  "alkohol-sucht": {
    d: [
      {
        kind: "flow",
        title: "Therapieweg bei Alkoholabhängigkeit",
        steps: [
          { t: "Kontaktphase", s: "Motivation, Einsicht fördern", icon: "HeartHandshake" },
          { t: "Entgiftung (Entzug)", s: "körperlich, meist stationär und überwacht", icon: "Wine", tone: "warn" },
          { t: "Entwöhnung", s: "Therapie über Wochen bis Monate", icon: "Sprout", tone: "info" },
          { t: "Nachsorge", s: "Selbsthilfegruppe, Beratung, Rückfallvorbeugung", icon: "Users", tone: "ok" },
        ],
      },
    ],
    b: [
      { h: "Entzugszeichen und Delir", li: ["Frühe Zeichen nach Stunden: Zittern, Schwitzen, Unruhe, Herzrasen, Übelkeit.", "Gefährlich: Alkoholentzugsdelir nach 2 bis 3 Tagen mit Verwirrtheit, Halluzinationen (z. B. kleine Tiere), starker Unruhe, Krampfanfällen. Lebensgefahr. Sofort Arzt.", "Pflege: reizarme, sichere Umgebung, nicht allein lassen, Vitalzeichen, Flüssigkeit, Medikamente nach Anordnung."] },
      { h: "Haltung", li: ["Abhängigkeit ist eine Krankheit, kein Charakterfehler. Respektvoll, ehrlich und ohne Vorwürfe sprechen.", "Rückfall gehört oft zum Weg und ist kein Scheitern."] },
    ],
  },
  essstoerungen: {
    d: [
      {
        kind: "compare",
        title: "Anorexie und Bulimie",
        cols: [
          { t: "Anorexia nervosa", icon: "TrendingDown", tone: "bad", items: ["Starkes Untergewicht (BMI unter 17,5)", "Angst vor Gewichtszunahme", "Verzerrtes Körperbild: fühlt sich zu dick", "Folgen: Kreislauf, Knochen, Zyklusausfall"] },
          { t: "Bulimia nervosa", icon: "RefreshCw", tone: "warn", items: ["Meist Normalgewicht", "Essanfälle, dann Erbrechen/Abführmittel", "Scham, Heimlichkeit", "Folgen: Elektrolytmangel, Zahnschäden"] },
        ],
      },
    ],
    b: [
      { h: "Gefahren", li: ["Kalium-Mangel durch Erbrechen oder Abführmittel kann Herzrhythmusstörungen auslösen.", "Beim Wiederaufbau der Ernährung (Refeeding) kann es zu gefährlichen Elektrolytverschiebungen kommen: Nur unter ärztlicher Aufsicht."] },
    ],
  },
  delir: {
    d: [
      {
        kind: "tiles",
        title: "Delir: wichtige Zeichen",
        items: [
          { t: "Plötzlicher Beginn", icon: "Zap", tone: "bad" },
          { t: "Verwirrtheit", s: "Ort, Zeit, Person", icon: "Brain", tone: "warn" },
          { t: "Schwankend im Tagesverlauf", icon: "Clock", tone: "warn" },
          { t: "Unruhe oder Schläfrigkeit", icon: "Moon", tone: "info" },
          { t: "Halluzinationen", icon: "Eye", tone: "warn" },
          { t: "Schlaf-Wach-Umkehr", icon: "BedDouble", tone: "info" },
        ],
      },
    ],
    b: [
      { h: "Vorbeugen im Krankenhaus und Heim", li: ["Orientierung geben: Uhr, Kalender, Tageslicht, vertraute Gegenstände, Brille und Hörgerät benutzen.", "Ausreichend trinken, Schmerz behandeln, Schlaf schützen, Infekte früh erkennen, früh mobilisieren.", "Medikamente überprüfen lassen (zu viele oder ungeeignete)."] },
    ],
  },
  "belastung-angst": {
    d: [
      {
        kind: "flow",
        title: "Drei Phasen der Traumabehandlung",
        steps: [
          { t: "Stabilisierung", s: "Sicherheit, Symptome lindern, der Mensch bestimmt das Tempo", icon: "ShieldCheck" },
          { t: "Traumabearbeitung", s: "in der Therapie, durch Fachpersonal", icon: "Brain", tone: "info" },
          { t: "Integration", s: "Alltag, Beziehungen, Zukunft aufbauen", icon: "Sprout", tone: "ok" },
        ],
      },
    ],
    b: [
      { h: "Bei Flashback oder Panik helfen", li: ["Ruhig und deutlich sprechen, Namen nennen, Ort und Zeit sagen („Sie sind im Krankenhaus, es ist …“).", "Atmung begleiten, Sicherheit geben, Körperkontakt nur nach Erlaubnis.", "Nicht zum Erzählen drängen: Das Trauma wird in der Therapie bearbeitet."] },
    ],
  },
  "psych-pflege": {
    d: [
      {
        kind: "flow",
        title: "Deeskalation bei Aggression (Stufen)",
        steps: [
          { t: "Früh erkennen", s: "Unruhe, laute Stimme, Anspannung", icon: "Eye" },
          { t: "Ruhig bleiben, Abstand halten", s: "freundlich, klar, Fluchtweg frei", icon: "HeartHandshake", tone: "ok" },
          { t: "Reize senken, anbieten", s: "ruhiger Raum, Gespräch, Medikament nach Anordnung", icon: "Moon", tone: "info" },
          { t: "Team holen, Grenzen setzen", s: "Freiheitsbeschränkung nur mit Rechtsgrundlage", icon: "Users", tone: "warn" },
        ],
      },
    ],
    b: [
      { h: "Eigenschutz und Nachsorge", li: ["Nie allein in einem Raum eingeschlossen bleiben, Fluchtweg im Blick, gefährliche Gegenstände entfernen.", "Nach einem Zwischenfall: Dokumentation, Besprechung im Team, Hilfe für Betroffene und Mitarbeitende."] },
    ],
  },
  mrsa: {
    d: [
      {
        kind: "flow",
        title: "Schutzmaßnahmen bei MRSA",
        steps: [
          { t: "Händedesinfektion", s: "vor und nach jedem Kontakt", icon: "Sparkles", tone: "ok" },
          { t: "Schutzkittel und Handschuhe", s: "bei Pflege, nach Hygieneplan", icon: "ShieldCheck" },
          { t: "Einzelzimmer/Isolation", s: "Flächen und Material desinfizieren", icon: "DoorOpen" },
          { t: "Mensch nicht vergessen", s: "Gespräche, Besuch, Beschäftigung", icon: "HeartHandshake", tone: "info" },
        ],
      },
    ],
  },
  kinderkrankheiten: {
    d: [
      {
        kind: "table",
        title: "Kinderkrankheiten im Vergleich",
        head: ["Krankheit", "Erkennungszeichen", "Komplikation"],
        rows: [
          ["Masern", "Koplik-Flecken, Fieber, großfleckiger Ausschlag, Lichtscheu", "Pneumonie, Enzephalitis"],
          ["Röteln", "kleinfleckiger Ausschlag, geschwollene Nackenlymphknoten", "Gefahr in der Schwangerschaft"],
          ["Windpocken", "Bläschen in allen Stadien („Sternenhimmel“), starker Juckreiz", "Bakterielle Hautinfektion, Zoster später"],
          ["Mumps", "Schwellung der Ohrspeicheldrüse", "Hodenentzündung, Meningitis"],
        ],
      },
    ],
    b: [
      { h: "Impfen und Schutz", li: ["Impfungen nach STIKO-Empfehlung: Masern, Mumps, Röteln, Windpocken sind Teil des Kinderimpfplans. Aktuellen Plan prüfen.", "Schwangere ohne Immunschutz meiden Kontakt mit Röteln und Windpocken. Pflegekräfte sollten ihren Impfstatus kennen.", "Isolation nach Hausstandard, bis die Ansteckungsgefahr vorbei ist."] },
    ],
  },
  clostridien: {
    d: [
      {
        kind: "table",
        title: "Clostridien im Überblick",
        head: ["Erkrankung", "Quelle", "Zeichen"],
        rows: [
          ["Tetanus", "Erde, verschmutzte Wunde", "Kiefersperre, Risus sardonicus, Krämpfe"],
          ["Botulismus", "Konserven, Honig bei Säuglingen", "Lähmungen, Doppelbilder, Schluckstörung"],
          ["Gasbrand", "tiefe, verschmutzte Wunde", "Knistern, Schmerz, Schock, Notfall"],
          ["C.-difficile-Kolitis", "Darmflora nach Antibiotika", "Wässrige, übelriechende Durchfälle, Fieber"],
        ],
      },
    ],
    b: [
      { h: "Hygiene bei C. difficile", li: ["Sporen überleben Alkohol. Händewaschen mit Wasser und Seife zusätzlich zur Händedesinfektion.", "Einzelzimmer mit eigener Toilette, Schutzkittel und Handschuhe, Flächen mit sporenwirksamen Mitteln desinfizieren."] },
    ],
  },
  "legionellen-salmonellen": {
    d: [
      {
        kind: "compare",
        title: "Legionellose und Salmonellose",
        cols: [
          { t: "Legionellose", icon: "Wind", tone: "info", items: ["Erreger im Wasser (Duschen, Klimaanlagen)", "Einatmen feiner Tröpfchen", "Pneumonie, Fieber", "Keine Ansteckung von Mensch zu Mensch"] },
          { t: "Salmonellose", icon: "Egg", tone: "warn", items: ["Rohe Eier, Geflügel, Fleisch", "Fäkal-oral, Lebensmittel", "Durchfall, Erbrechen, Fieber", "Flüssigkeit ersetzen, Hygiene"] },
        ],
      },
    ],
  },
  reanimation: {
    d: [
      {
        kind: "flow",
        title: "Reanimation: die Kette",
        steps: [
          { t: "Erkennen", s: "Ansprechen, Atmung prüfen (bis 10 Sekunden)", icon: "Search" },
          { t: "Notruf 112, AED holen lassen", icon: "Siren", tone: "bad" },
          { t: "Herzdruckmassage", s: "Brustbeinmitte, 5–6 cm tief, 100–120/min", icon: "HeartPulse", tone: "bad" },
          { t: "30 : 2 beatmen oder nur drücken", icon: "Wind", tone: "warn" },
          { t: "AED: Anweisungen folgen", s: "Elektroden kleben, bei Schock nicht berühren", icon: "Zap", tone: "info" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Prüfen, Rufen, Drücken.", "Prüfungstipp: Frequenz 100 bis 120 pro Minute, Tiefe 5 bis 6 cm, Verhältnis 30 : 2, nach jeder Kompression Brustkorb voll entlasten."] },
    ],
  },
  schock: {
    d: [
      {
        kind: "table",
        title: "Schockformen",
        head: ["Form", "Ursache", "Besonderheit"],
        rows: [
          ["Hypovolämisch", "Blutung, Flüssigkeitsverlust", "Schocklage (Beine hoch)"],
          ["Kardiogen", "Herz pumpt zu schwach", "Oberkörper eher hoch"],
          ["Anaphylaktisch", "Allergie", "Adrenalin nach Anordnung"],
          ["Septisch", "Infektion", "Warm oder kalt, Antibiotika schnell"],
          ["Neurogen", "Nervenschaden, Gefäße weit", "Haut oft warm"],
        ],
      },
      {
        kind: "bar",
        title: "Schockindex = Puls : systolischer Blutdruck",
        parts: [
          { t: "Normal", s: "ca. 0,5", tone: "ok" },
          { t: "Grenzbereich", s: "um 0,8", tone: "warn" },
          { t: "Schock droht", s: "ab 1", tone: "bad" },
        ],
      },
    ],
  },
  sepsis: {
    d: [
      {
        kind: "tiles",
        title: "qSOFA-Hinweise (zwei Zeichen sind ein Alarm)",
        items: [
          { t: "Atemfrequenz hoch", s: "22 oder mehr", icon: "Wind", tone: "bad" },
          { t: "Blutdruck niedrig", s: "systolisch etwa 100 oder weniger", icon: "TrendingDown", tone: "bad" },
          { t: "Bewusstsein verändert", s: "Verwirrt, schläfrig", icon: "Brain", tone: "bad" },
        ],
        note: "Dazu: Fieber oder Untertemperatur, schneller Puls, wenig Urin, marmorierte Haut.",
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Bei Sepsis zählt die erste Stunde.", "Prüfungstipp: Bei alten Menschen ist neue Verwirrtheit oft das erste Zeichen. Sofort melden (SBAR)."] },
    ],
  },
  verlegung: {
    d: [
      {
        kind: "flow",
        title: "Fremdkörper in den Atemwegen",
        steps: [
          { t: "Husten wirksam?", s: "Ja: zum Husten ermutigen, beobachten", icon: "Wind", tone: "ok" },
          { t: "Husten unwirksam", s: "bis zu 5 Schläge zwischen die Schulterblätter", icon: "Hand", tone: "warn" },
          { t: "Nicht besser: Heimlich-Handgriff", s: "bis zu 5 mal, im Wechsel mit Schlägen", icon: "Hand", tone: "bad" },
          { t: "Bewusstlos: Notruf, Reanimation", icon: "Siren", tone: "bad" },
        ],
      },
    ],
  },
};
