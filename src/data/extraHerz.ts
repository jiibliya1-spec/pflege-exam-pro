import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Herz und Kreislauf. Lernhilfe der App, eigene Worte. Anordnungen gehen vor. */
export const EXTRA_HERZ: Record<string, Extra> = {
  hypertonie: {
    d: [
      {
        kind: "bar",
        title: "Blutdruck-Bereiche (Praxis-Richtwerte, mmHg)",
        parts: [
          { t: "Normal", s: "unter 130/85", tone: "ok" },
          { t: "Hochnormal", s: "130–139 / 85–89", tone: "info" },
          { t: "Hypertonie", s: "ab 140/90", tone: "warn", w: 1.2 },
          { t: "Krise", s: "ab ca. 180/110", tone: "bad" },
        ],
        note: "Richtwerte, Leitlinien unterscheiden sich im Detail. Maßgeblich ist die ärztliche Einschätzung.",
      },
      {
        kind: "tree",
        title: "Folgeschäden bei dauerhaft hohem Druck",
        root: { t: "Dauerhaft zu hoher Blutdruck", icon: "Gauge", tone: "warn" },
        kids: [
          { t: "Gehirn", icon: "Brain", items: ["Schlaganfall"], tone: "bad" },
          { t: "Herz", icon: "Heart", items: ["Herzinfarkt", "Herzschwäche"], tone: "bad" },
          { t: "Niere", icon: "Droplets", items: ["Nierenschaden bis Niereninsuffizienz"], tone: "warn" },
          { t: "Augen", icon: "Eye", items: ["Netzhautschäden"], tone: "warn" },
          { t: "Gefäße", icon: "Activity", items: ["Arteriosklerose", "Aneurysma"], tone: "warn" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Hoher Blutdruck tut lange nicht weh, schadet aber still den Organen.", "Prüfungstipp: Messfehler kennen. Zu kleine Manschette zeigt zu hohe Werte, Reden und Bewegung treiben den Wert hoch, Messung immer in Ruhe und am gleichen Arm."] },
    ],
  },
  herzinsuffizienz: {
    d: [
      {
        kind: "compare",
        title: "Linksherz- und Rechtsherzschwäche",
        cols: [
          { t: "Linksherz", icon: "Wind", tone: "info", items: ["Blut staut sich Richtung Lunge", "Atemnot, Husten, nachts schlechter Liegen", "Schwerer Fall: Lungenödem"] },
          { t: "Rechtsherz", icon: "Droplets", tone: "warn", items: ["Blut staut sich in den Körper zurück", "Beinödeme, dicke Halsvenen", "Wasser im Bauch, Gewichtszunahme"] },
        ],
        note: "Sind beide Seiten betroffen, spricht man von einer Globalinsuffizienz.",
      },
      {
        kind: "pyramid",
        title: "Schweregrade nach NYHA (oben = am schwersten)",
        levels: [
          { t: "NYHA IV", s: "Beschwerden schon in Ruhe", tone: "bad" },
          { t: "NYHA III", s: "Beschwerden bei leichter Belastung", tone: "warn" },
          { t: "NYHA II", s: "Beschwerden bei stärkerer Belastung", tone: "info" },
          { t: "NYHA I", s: "Keine Beschwerden im Alltag", tone: "ok" },
        ],
      },
    ],
    b: [
      { h: "Warum Wasser im Körper bleibt", li: ["Das schwache Herz pumpt weniger Blut. Die Nieren bekommen weniger Durchblutung und halten Salz und Wasser zurück.", "Mehr Flüssigkeit im Kreislauf belastet das Herz noch mehr. Ein Teufelskreis, den Entwässerung und salzarme Kost unterbrechen."] },
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Links = Lunge (Atemnot), Rechts = Rückstau in den Körper (Ödeme).", "Prüfungstipp: Tägliches Wiegen ist die wichtigste Pflegemaßnahme zur Früherkennung einer Verschlechterung."] },
    ],
  },
  herzinfarkt: {
    d: [
      {
        kind: "flow",
        title: "Vom Verschluss zum Infarkt",
        steps: [
          { t: "Arteriosklerose", s: "Ablagerungen verengen das Herzkranzgefäß", icon: "Activity" },
          { t: "Gerinnsel verschließt das Gefäß", s: "plötzlicher Verschluss", icon: "CircleDot", tone: "warn" },
          { t: "Herzmuskel bekommt kein Blut", s: "Sauerstoffmangel", icon: "HeartPulse", tone: "warn" },
          { t: "Muskelzellen sterben ab", s: "nach etwa 20–30 Minuten beginnend, Narbe bleibt", icon: "Heart", tone: "bad" },
        ],
        note: "Time is muscle: Je früher das Gefäß geöffnet wird, desto weniger Herzmuskel geht verloren.",
      },
      {
        kind: "tiles",
        title: "Warnzeichen (bei Frauen, Älteren und Diabetikern oft untypisch)",
        items: [
          { t: "Brustdruck", s: "Enge, Ausstrahlung in Arm, Kiefer, Rücken", icon: "Heart", tone: "bad" },
          { t: "Kaltschweißig", icon: "Droplet", tone: "warn" },
          { t: "Übelkeit", s: "oft Oberbauchschmerz", icon: "Frown", tone: "warn" },
          { t: "Todesangst", icon: "TriangleAlert", tone: "warn" },
          { t: "Atemnot", icon: "Wind", tone: "info" },
          { t: "Blass, grau", icon: "User", tone: "info" },
        ],
      },
    ],
    b: [
      { h: "Der Infarkt-Notfall in vier Schritten", li: ["1. Notruf 112 und Team informieren.", "2. Oberkörper hoch, enge Kleidung öffnen, nicht allein lassen.", "3. Vitalzeichen messen, Beginn der Beschwerden notieren.", "4. Alles vorbereiten, was der Arzt anordnet (Zugang, EKG)."] },
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Die Zeit bis zur Gefäßöffnung entscheidet über das Ergebnis.", "Prüfungstipp: Troponin im Blut und EKG sichern die Diagnose. Der Brustschmerz allein reicht nicht."] },
    ],
  },
  pavk: {
    d: [
      {
        kind: "table",
        title: "Stadien nach Fontaine",
        head: ["Stadium", "Beschwerden", "Pflege-Sicht"],
        rows: [
          ["I", "keine Beschwerden", "Risikofaktoren senken"],
          ["II", "Schmerz beim Gehen, besser in der Pause", "Gehtraining"],
          ["III", "Schmerz in Ruhe, nachts", "Bein tief lagern"],
          ["IV", "Gewebe stirbt ab (Nekrose, Geschwür)", "Wundversorgung, Arzt"],
        ],
      },
    ],
    b: [
      { h: "Unterschied zur Venenschwäche", li: ["pAVK: Arterien verengt, Fuß blass und kalt, Schmerz beim Gehen, Beine tief lagern.", "Venenschwäche: Venen schwach, Beine geschwollen, Haut oft bräunlich, Beine hochlagern und Kompression."] },
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Arteriell = kalt, blass, Schmerz. Venös = warm, geschwollen, schwer.", "Prüfungstipp: Beim Raucher mit Wadenschmerz beim Gehen an pAVK denken. Keine Wärme auf gefühlsgestörte Füße."] },
    ],
  },
  thrombose: {
    d: [
      {
        kind: "flow",
        title: "Von der Beinvenen-Thrombose zur Lungenembolie",
        steps: [
          { t: "Gerinnsel in der tiefen Beinvene", s: "Risiko: Immobilität, OP, Dehydratation", icon: "Droplet" },
          { t: "Bein: einseitig dick, warm, gespannt", icon: "Footprints", tone: "warn" },
          { t: "Gerinnsel löst sich und wandert", s: "über das rechte Herz", icon: "Activity", tone: "warn" },
          { t: "Lungenembolie", s: "plötzliche Atemnot, Brustschmerz", icon: "Siren", tone: "bad" },
        ],
      },
      {
        kind: "tiles",
        title: "Thromboseprophylaxe: die Bausteine",
        items: [
          { t: "Früh mobilisieren", icon: "PersonStanding" },
          { t: "Beine bewegen", s: "Fußkreisen, Anspannen", icon: "Footprints" },
          { t: "Genug trinken", icon: "Droplets" },
          { t: "Kompression", s: "richtig angelegt, ohne Falten", icon: "Bandage" },
          { t: "Spritzen", s: "nur nach Anordnung", icon: "Syringe" },
        ],
      },
    ],
  },
  khk: {
    d: [
      {
        kind: "compare",
        title: "Stabile und instabile Angina pectoris",
        cols: [
          { t: "Stabil", icon: "Heart", tone: "info", items: ["Nur bei Belastung", "Kurz, vergeht in Ruhe", "Spricht gut auf Nitro an"] },
          { t: "Instabil", icon: "Siren", tone: "bad", items: ["Neu, zunehmend oder in Ruhe", "Länger, stärker", "Akutes Koronarsyndrom: wie Herzinfarkt behandeln"] },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Stabil = Belastung, instabil = Alarm.", "Prüfungstipp: Instabile Angina, NSTEMI und STEMI gehören zum akuten Koronarsyndrom. Troponin und EKG unterscheiden sie."] },
    ],
  },
  herzrhythmus: {
    d: [
      {
        kind: "bar",
        title: "Herzfrequenz beim Erwachsenen in Ruhe",
        parts: [
          { t: "Bradykardie", s: "unter 60", tone: "warn" },
          { t: "Normal", s: "60–100", tone: "ok", w: 1.4 },
          { t: "Tachykardie", s: "über 100", tone: "warn" },
        ],
      },
      {
        kind: "tree",
        title: "Rhythmusstörungen im Überblick",
        root: { t: "Rhythmusstörung", icon: "Activity" },
        kids: [
          { t: "Zu langsam", icon: "TrendingDown", items: ["Sinusbradykardie", "AV-Block", "Therapie: ggf. Schrittmacher"] },
          { t: "Zu schnell", icon: "TrendingUp", items: ["Vorhoftachykardie", "Kammertachykardie (gefährlich)"], tone: "warn" },
          { t: "Unregelmäßig", icon: "Waves", items: ["Vorhofflimmern: häufig, Schlaganfallgefahr", "Extrasystolen"], tone: "warn" },
          { t: "Kammerflimmern", icon: "Siren", items: ["Kreislaufstillstand, sofort Reanimation und Defibrillation"], tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Warum Vorhofflimmern gefährlich ist", li: ["Die Vorhöfe zittern statt zu pumpen. Das Blut steht, es bilden sich Gerinnsel.", "Wandern sie ins Gehirn, entsteht ein Schlaganfall. Deshalb gibt es oft Gerinnungshemmer."] },
      { h: "Schrittmacher im Alltag", li: ["Ein Schrittmacher gibt Impulse bei zu langsamem Herzschlag.", "Hinweise: Ausweis immer mitführen, Kontrolltermine einhalten, starke Magnetfelder und Hochspannung meiden, Schwindel oder Schluckauf melden."] },
    ],
  },
  "herz-entzuendung": {
    d: [
      {
        kind: "compare",
        title: "Drei Herzentzündungen im Vergleich",
        cols: [
          { t: "Endokarditis", icon: "Bug", tone: "bad", items: ["Innenhaut und Klappen", "Meist Bakterien", "Antibiotika", "Folge: Klappenfehler"] },
          { t: "Myokarditis", icon: "Heart", tone: "warn", items: ["Herzmuskel", "Meist Viren", "Schonung", "Folge: Herzschwäche, Rhythmusstörung"] },
          { t: "Perikarditis", icon: "Heart", tone: "info", items: ["Herzbeutel", "Meist Viren", "Schmerz atemabhängig", "Folge: Erguss"] },
        ],
      },
    ],
    b: [
      { h: "Wichtig für die Pflege", li: ["Nach Infekt (Grippe, Angina) Belastung und Sport meiden, bis der Arzt Freigabe gibt. Sonst droht eine Herzmuskelentzündung.", "Bei Klappenfehlern oder künstlicher Klappe kann vor Eingriffen eine Antibiotika-Vorsorge angeordnet sein. Mundhygiene ist wichtig."] },
    ],
  },
  hypotonie: {
    d: [
      {
        kind: "flow",
        title: "Orthostase: Warum wird mir beim Aufstehen schwindlig?",
        steps: [
          { t: "Aufstehen", s: "Blut versackt in den Beinvenen", icon: "PersonStanding" },
          { t: "Weniger Blut zum Herzen", s: "Blutdruck fällt kurz", icon: "TrendingDown", tone: "warn" },
          { t: "Gehirn bekommt weniger Blut", s: "Schwindel, schwarz vor Augen", icon: "Brain", tone: "warn" },
          { t: "Sturz oder Kollaps", icon: "TriangleAlert", tone: "bad" },
        ],
        note: "Vorbeugen: langsam aufrichten, erst sitzen, Beine bewegen, genug trinken.",
      },
    ],
    b: [
      { h: "Sicher aufstehen in drei Schritten", li: ["Erst im Bett aufsetzen, Beine herabhängen lassen, Füße bewegen.", "Eine Minute sitzen bleiben und nach dem Befinden fragen.", "Dann aufstehen, festhalten lassen, bei Schwindel sofort wieder setzen oder legen."] },
    ],
  },
  arterienverschluss: {
    d: [
      {
        kind: "tiles",
        title: "6-P-Regel nach Pratt: Zeichen am betroffenen Bein",
        items: [
          { t: "Pain", s: "Schmerz", icon: "Zap", tone: "bad" },
          { t: "Pulselessness", s: "kein Puls", icon: "Activity", tone: "bad" },
          { t: "Paraesthesia", s: "Gefühlsstörung", icon: "Hand", tone: "warn" },
          { t: "Paleness", s: "Blässe", icon: "Snowflake", tone: "warn" },
          { t: "Paralysis", s: "Lähmung", icon: "Accessibility", tone: "bad" },
          { t: "Prostration", s: "Schockzeichen", icon: "Siren", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Time is tissue. Beim Gliedmaßenverschluss zählt jede Minute.", "Prüfungstipp: Betroffenes Bein tief lagern, nicht kühlen oder wärmen, keine Injektionen in dieses Bein."] },
    ],
  },
  aneurysma: {
    d: [
      {
        kind: "compare",
        title: "Drei Formen",
        cols: [
          { t: "Falsches Aneurysma", icon: "Droplet", tone: "info", items: ["Kleiner Wanddefekt", "Meist nach Gefäßpunktion", "Bluterguss um das Gefäß"] },
          { t: "Echtes Aneurysma", icon: "CircleDot", tone: "warn", items: ["Ausweitung aller Wandschichten", "Häufig Bauchaorta", "Ab bestimmter Größe Operation"] },
          { t: "Dissektion", icon: "Siren", tone: "bad", items: ["Einriss der Innenschicht", "Vernichtungsschmerz", "Notfall, kann platzen"] },
        ],
      },
    ],
    b: [
      { h: "Zeichen, die sofort gemeldet werden", li: ["Plötzlicher, extrem starker Schmerz in Brust, Rücken oder Bauch („wie ein Messerstich“).", "Dazu Kaltschweißigkeit, Blässe, schneller Puls, fallender Blutdruck.", "Pflege: Notruf, flach lagern oder nach Arzt, Zugang vorbereiten, nicht allein lassen, nichts essen und trinken lassen."] },
      { h: "Vorbeugen und Beraten", li: ["Wichtig sind Blutdruck-Kontrolle, Rauchstopp und Kontrolluntersuchungen bei bekannter Gefäßerweiterung.", "Schweres Heben und Pressen vermeiden, Verstopfung vorbeugen."] },
    ],
  },
};
