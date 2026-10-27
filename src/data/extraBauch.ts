import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Bewegungsapparat und Verdauung. Lernhilfe der App, eigene Worte. Anordnungen gehen vor. */
export const EXTRA_BAUCH: Record<string, Extra> = {
  rheuma: {
    d: [
      {
        kind: "table",
        title: "Rheuma, Arthrose, Gicht im Vergleich",
        head: ["", "Rheumatoide Arthritis", "Arthrose", "Gicht"],
        rows: [
          ["Ursache", "Autoimmun-Entzündung", "Verschleiß", "Harnsäurekristalle"],
          ["Beginn", "schleichend, beidseits", "langsam, Belastung", "plötzlicher Anfall"],
          ["Typisch", "Morgensteifigkeit über 30–60 Min.", "Anlaufschmerz", "heftiger Schmerz, oft Großzeh"],
          ["Pflege", "Gelenkschutz, Kälte im Schub", "Bewegung, Wärme", "Kühlen, Medikamente, Ernährung"],
        ],
      },
    ],
  },
  osteoporose: {
    d: [
      {
        kind: "flow",
        title: "Weg zum Knochenbruch",
        steps: [
          { t: "Knochenabbau überwiegt", s: "Alter, Wechseljahre, Kortison, Bewegungsmangel", icon: "Bone" },
          { t: "Knochen werden porös", icon: "Hourglass", tone: "warn" },
          { t: "Sturz oder kleine Belastung", icon: "TriangleAlert", tone: "warn" },
          { t: "Bruch: Wirbel, Oberschenkelhals, Handgelenk", icon: "Siren", tone: "bad" },
        ],
        note: "Darum ist die Sturzprophylaxe die wichtigste Pflegemaßnahme.",
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Kalzium, Vitamin D, Bewegung und Sturzschutz.", "Prüfungstipp: Bisphosphonate nüchtern mit viel Wasser, danach 30 Minuten aufrecht bleiben."] },
    ],
  },
  "bewegungssystem-pflege": {
    d: [
      {
        kind: "tiles",
        title: "DMS-Kontrolle nach Operation",
        items: [
          { t: "Durchblutung", s: "Farbe, Wärme, Puls, Kapillarfüllung", icon: "Droplet", tone: "info" },
          { t: "Motorik", s: "Finger/Zehen bewegen lassen", icon: "Hand", tone: "info" },
          { t: "Sensibilität", s: "Berührung, Kribbeln, Taubheit", icon: "Zap", tone: "info" },
        ],
        note: "Veränderungen sofort melden, besonders nach Gips, Verband oder OP an Arm und Bein.",
      },
    ],
    b: [
      { h: "Typische Verletzungen", li: ["Distorsion (Verstauchung): Gelenk überdehnt, Bänder gezerrt, Schwellung und Schmerz.", "Luxation (Ausrenkung): Gelenkflächen stehen nicht mehr richtig zueinander.", "Fraktur (Bruch): Schmerz, Fehlstellung, abnorme Beweglichkeit, Schwellung, Bluterguss.", "Sofortmaßnahme PECH: Pause, Eis (nicht direkt auf die Haut), Compression (leichter Druckverband), Hochlagern."] },
      { h: "Gips und Schiene", li: ["Zehen/Finger auf Farbe, Wärme, Beweglichkeit und Gefühl prüfen.", "Hochlagern gegen Schwellung. Nichts in den Gips stecken.", "Bei starkem Schmerz, Blässe, Kribbeln oder Taubheit sofort Arzt informieren (Kompartmentsyndrom möglich)."] },
    ],
  },
  bandscheibe: {
    d: [
      {
        kind: "flow",
        title: "Bandscheibenvorfall: von der Enge zum Ausfall",
        steps: [
          { t: "Bandscheibenkern tritt nach hinten aus", icon: "Bone" },
          { t: "Drückt auf die Nervenwurzel", s: "Rückenschmerz, Ausstrahlung ins Bein", icon: "Zap", tone: "warn" },
          { t: "Taubheit, Schwäche, Lähmung", icon: "Hand", tone: "warn" },
          { t: "Cauda-Syndrom: Blase, Darm, Reithosenbereich", s: "Notfall, sofort Operation", icon: "Siren", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Blasen- oder Mastdarmstörung plus Taubheit im Reithosenbereich = Notfall.", "Prüfungstipp: Rückengerecht aufstehen über die Seitenlage, in die Hocke statt gebückt heben."] },
    ],
  },
  crohn: {
    d: [
      {
        kind: "compare",
        title: "Morbus Crohn und Colitis ulcerosa",
        cols: [
          { t: "Morbus Crohn", icon: "Utensils", tone: "warn", items: ["Ganzer Verdauungstrakt möglich (Mund bis After)", "Befall in Abschnitten, alle Wandschichten", "Durchfall oft ohne Blut, Bauchschmerz, Fisteln", "Rauchen verschlechtert"] },
          { t: "Colitis ulcerosa", icon: "Droplet", tone: "bad", items: ["Nur Dickdarm", "Durchgehend von unten nach oben", "Blutig-schleimige Durchfälle", "Rauchen eher günstig (kein Rat zum Rauchen!)"] },
        ],
      },
    ],
  },
  leberzirrhose: {
    d: [
      {
        kind: "flow",
        title: "Von der Leberschädigung zur Zirrhose",
        steps: [
          { t: "Dauerhafte Schädigung", s: "Alkohol, Hepatitis B/C, Fettleber", icon: "Wine" },
          { t: "Bindegewebe ersetzt Lebergewebe", icon: "BrickWall", tone: "warn" },
          { t: "Pfortaderdruck steigt", s: "Aszites, Krampfadern in der Speiseröhre", icon: "Gauge", tone: "warn" },
          { t: "Leber entgiftet schlechter", s: "Gelbsucht, Blutungsneigung, Verwirrtheit", icon: "Brain", tone: "bad" },
        ],
      },
      {
        kind: "tiles",
        title: "Komplikationen und Warnzeichen",
        items: [
          { t: "Aszites", s: "Bauchumfang und Gewicht steigen", icon: "Droplets", tone: "warn" },
          { t: "Ösophagusvarizen", s: "Bluterbrechen, Teerstuhl", icon: "Siren", tone: "bad" },
          { t: "Enzephalopathie", s: "Verwirrtheit, Schlaf-Wach-Umkehr", icon: "Brain", tone: "bad" },
          { t: "Gelbsucht", icon: "Sun", tone: "warn" },
          { t: "Blutungsneigung", icon: "Droplet", tone: "warn" },
          { t: "Juckreiz", icon: "Hand", tone: "info" },
        ],
      },
    ],
  },
  ileus: {
    d: [
      {
        kind: "compare",
        title: "Mechanischer und paralytischer Ileus",
        cols: [
          { t: "Mechanisch", icon: "Construction", tone: "bad", items: ["Darm ist verlegt (Tumor, Verwachsung, Hernie)", "Anfangs klingende, laute Darmgeräusche", "Muss meist operiert werden", "Einlauf verboten"] },
          { t: "Paralytisch", icon: "Hourglass", tone: "warn", items: ["Darm ist gelähmt (OP, Entzündung, Opiate)", "„Totenstille“, keine Darmgeräusche", "Darm anregen, Ursache behandeln"] },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Mechanisch = Verlegung, paralytisch = Lähmung.", "Prüfungstipp: Beim Ileus nichts essen und trinken, Magensonde zum Ablaufen, Infusion, Bilanz, Bauchumfang messen."] },
    ],
  },
  "akutes-abdomen": {
    d: [
      {
        kind: "flow",
        title: "Akutes Abdomen: Verhalten in der Pflege",
        steps: [
          { t: "Starke plötzliche Bauchschmerzen, harter Bauch", icon: "Siren", tone: "bad" },
          { t: "Arzt sofort informieren, Notruf bei Schock", icon: "Stethoscope" },
          { t: "Nüchtern lassen, keine Schmerzmittel ohne Anordnung", icon: "Utensils", tone: "warn" },
          { t: "Vitalzeichen, Zugang vorbereiten, nicht allein lassen", icon: "Activity" },
        ],
      },
    ],
    b: [
      { h: "Warum nüchtern und ohne Schmerzmittel?", li: ["Eine Operation kann nötig sein. Essen und Trinken erhöhen das Risiko bei der Narkose.", "Schmerzmittel können Zeichen verschleiern, bevor der Arzt untersucht hat. Nur nach Anordnung geben.", "Typische Zeichen: Abwehrspannung („brettharter Bauch“), Schonhaltung mit angezogenen Beinen, Schock."] },
    ],
  },
  divertikel: {
    d: [
      {
        kind: "compare",
        title: "Divertikulose und Divertikulitis",
        cols: [
          { t: "Divertikulose", icon: "CircleDot", tone: "info", items: ["Ausstülpungen der Darmwand", "Meist ohne Beschwerden", "Ballaststoffe, Trinken, Bewegung"] },
          { t: "Divertikulitis", icon: "Flame", tone: "bad", items: ["Entzündete Ausstülpungen", "Schmerz links unten, Fieber", "Antibiotika nach Arzt, Komplikationen: Abszess, Durchbruch"] },
        ],
      },
    ],
  },
  darmkrebs: {
    d: [
      {
        kind: "flow",
        title: "Früherkennung",
        steps: [
          { t: "Ab 50: Test auf verstecktes Blut im Stuhl", s: "jährlich (iFOBT)", icon: "TestTube" },
          { t: "Koloskopie", s: "Darmspiegelung, Polypen werden gleich entfernt", icon: "Search" },
          { t: "Entfernung von Polypen", s: "verhindert die Krebsentstehung", icon: "ShieldCheck", tone: "ok" },
        ],
        note: "Krebsvorsorge ist Teil des gesetzlichen Programms (Stand des Buchs: 2019, aktuelle Regeln prüfen).",
      },
    ],
    b: [
      { h: "Warnzeichen", li: ["Blut im Stuhl oder schwarzer Stuhl, wechselnde Stuhlgewohnheiten (Durchfall und Verstopfung im Wechsel), Bleistiftstuhl, Gewichtsverlust, Müdigkeit.", "Anämie ohne erkennbare Ursache kann ein erstes Zeichen sein."] },
    ],
  },
  hepatitis: {
    d: [
      {
        kind: "table",
        title: "Hepatitis A, B, C",
        head: ["Typ", "Übertragung", "Chronisch?", "Impfung"],
        rows: [
          ["A", "fäkal-oral (Lebensmittel, Wasser)", "nein", "ja"],
          ["B", "Blut, Sexualkontakt, Geburt", "ca. 10 %", "ja"],
          ["C", "überwiegend Blut", "50–85 %", "nein"],
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: A = Anfang bis Ende (heilt aus), B und C können chronisch werden.", "Prüfungstipp: Nach Nadelstichverletzung sofort Arzt: Bei Hepatitis B gibt es eine Notfall-Impfung und Immunglobulin."] },
    ],
  },
  galle: {
    d: [
      {
        kind: "flow",
        title: "Gallenstein: mögliche Folgen",
        steps: [
          { t: "Stein in der Gallenblase", s: "oft lange stumm", icon: "Gem" },
          { t: "Stein wandert, blockiert den Ausgang", s: "Kolik rechter Oberbauch, nach fetter Mahlzeit", icon: "Zap", tone: "warn" },
          { t: "Gallengang verlegt", s: "Gelbsucht, heller Stuhl, dunkler Urin", icon: "Sun", tone: "warn" },
          { t: "Entzündung von Gallenblase, Gallengang oder Pankreas", icon: "Flame", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Die 5 F: female, fat, forty, fertile, fair – Risikofaktoren für Gallensteine (weiblich, übergewichtig, um 40, Schwangerschaften, hellhäutig).", "Prüfungstipp: Verschlussikterus = gelbe Haut und Augen, heller (lehmfarbener) Stuhl, dunkler Urin."] },
    ],
  },
  pankreatitis: {
    d: [
      {
        kind: "compare",
        title: "Akute und chronische Pankreatitis",
        cols: [
          { t: "Akut", icon: "Siren", tone: "bad", items: ["Häufig Gallenstein oder Alkohol", "Gürtelförmiger Oberbauchschmerz, Erbrechen", "Nahrungspause, Schmerztherapie, Überwachung"] },
          { t: "Chronisch", icon: "Hourglass", tone: "warn", items: ["Meist Alkohol", "Dauerschmerz, Fettstühle, Gewichtsverlust", "Alkoholverzicht, Enzyme, später Diabetes möglich"] },
        ],
      },
    ],
  },
  hernie: {
    d: [
      {
        kind: "flow",
        title: "Hernie: wann wird es gefährlich?",
        steps: [
          { t: "Bruchpforte in der Bauchwand", s: "Leiste, Nabel, Narbe", icon: "CircleDot" },
          { t: "Bruchsack tritt hervor, oft beim Pressen", icon: "TrendingUp", tone: "warn" },
          { t: "Inkarzeration: Inhalt klemmt ein", s: "starker Schmerz, harte Schwellung, Erbrechen", icon: "Lock", tone: "bad" },
          { t: "Notfall: Durchblutung des Darms gestört", icon: "Siren", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Vorbeugen und Pflege nach der Operation", li: ["Verstopfung vermeiden, nicht pressen, schwer heben vermeiden, Übergewicht reduzieren.", "Nach OP: Wunde und Schwellung beobachten, Schmerzen, Wasserlassen (Blasenentleerung), Heben nach ärztlicher Vorgabe."] },
    ],
  },
};
