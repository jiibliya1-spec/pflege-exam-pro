import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Stoffwechsel, Nerven, Gehirn. Lernhilfe der App, eigene Worte. Anordnungen gehen vor. */
export const EXTRA_NERVEN: Record<string, Extra> = {
  diabetes: {
    d: [
      {
        kind: "compare",
        title: "Diabetes Typ 1 und Typ 2",
        cols: [
          { t: "Typ 1", icon: "Syringe", tone: "info", items: ["Autoimmun: Beta-Zellen werden zerstört", "Insulinmangel, meist jung und schlank", "Beginn oft plötzlich", "Insulin lebenslang nötig"] },
          { t: "Typ 2", icon: "Utensils", tone: "warn", items: ["Insulin wirkt schlechter (Resistenz)", "Meist später, oft Übergewicht", "Schleichender Beginn", "Ernährung, Bewegung, Tabletten, später Insulin"] },
        ],
      },
      {
        kind: "tree",
        title: "Folgeschäden bei schlecht eingestelltem Zucker",
        root: { t: "Dauerhaft hoher Blutzucker", icon: "Candy", tone: "warn" },
        kids: [
          { t: "Augen", icon: "Eye", items: ["Retinopathie"] },
          { t: "Nieren", icon: "Droplets", items: ["Nephropathie"] },
          { t: "Nerven", icon: "Zap", items: ["Neuropathie, Gefühl fehlt"] },
          { t: "Gefäße", icon: "Activity", items: ["Herzinfarkt, Schlaganfall, pAVK"] },
          { t: "Füße", icon: "Footprints", items: ["Diabetischer Fuß"], tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Hyperglykämie und Hypoglykämie im Vergleich", li: ["Überzuckerung: entwickelt sich langsam (Stunden bis Tage), Durst, Müdigkeit, trockene Haut, tiefe Atmung, Azetongeruch.", "Unterzuckerung: kommt schnell (Minuten), Schwitzen, Zittern, Heißhunger, Verwirrtheit.", "Bei unklarer Lage: Blutzucker messen. Ist nicht messbar und der Mensch bewusstlos: Notruf."] },
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Im Zweifel messen, nicht raten.", "Prüfungstipp: HbA1c ist der Langzeitwert (etwa 8 bis 12 Wochen). Ab 6,5 % spricht er für Diabetes."] },
    ],
  },
  hypoglykaemie: {
    d: [
      {
        kind: "flow",
        title: "Unterzuckerung: Vorgehen beim wachen Patienten",
        steps: [
          { t: "Blutzucker messen", s: "unter 70 mg/dl oder Zeichen vorhanden", icon: "Droplet" },
          { t: "15–20 g schnelle Kohlenhydrate", s: "Traubenzucker oder Saft", icon: "Candy", tone: "warn" },
          { t: "15 Minuten warten, erneut messen", icon: "Clock" },
          { t: "Noch zu niedrig: wiederholen", s: "dann etwas Langsames essen, Arzt informieren", icon: "RefreshCw", tone: "info" },
        ],
      },
      {
        kind: "compare",
        title: "Wach oder bewusstlos?",
        cols: [
          { t: "Wach und schluckfähig", icon: "Smile", tone: "ok", items: ["Schnelle Kohlenhydrate geben", "Kontrolle nach 15 Minuten"] },
          { t: "Bewusstlos", icon: "Siren", tone: "bad", items: ["Nichts in den Mund geben", "Stabile Seitenlage", "Notruf", "Glukagon/Glukose nur nach Anordnung"] },
        ],
      },
    ],
  },
  schilddruese: {
    d: [
      {
        kind: "compare",
        title: "Unterfunktion und Überfunktion",
        cols: [
          { t: "Hypothyreose (zu wenig)", icon: "Snowflake", tone: "info", items: ["Kälteempfindlich, müde", "Langsamer Puls, niedriger Druck", "Verstopfung, trockene Haut", "Gewichtszunahme", "L-Thyroxin"] },
          { t: "Hyperthyreose (zu viel)", icon: "Flame", tone: "warn", items: ["Schwitzen, Wärmeintoleranz", "Schneller Puls, Unruhe", "Durchfall, Gewichtsverlust", "Zittern", "Thyreostatika, ggf. OP/Radiojod"] },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Hypo = Sparflamme, Hyper = Vollgas.", "Prüfungstipp: L-Thyroxin nüchtern, mit Wasser, mindestens 30 Minuten vor dem Frühstück. Nach Schilddrüsen-OP auf Heiserkeit, Kribbeln, Krämpfe und Luftnot achten."] },
    ],
  },
  "lipide-adipositas": {
    d: [
      {
        kind: "bar",
        title: "BMI-Bereiche (Erwachsene)",
        parts: [
          { t: "Untergewicht", s: "unter 18,5", tone: "info" },
          { t: "Normal", s: "18,5–24,9", tone: "ok", w: 1.3 },
          { t: "Übergewicht", s: "25–29,9", tone: "warn" },
          { t: "Adipositas", s: "ab 30", tone: "bad" },
        ],
        note: "BMI = Gewicht in kg geteilt durch Größe in m zum Quadrat.",
      },
      {
        kind: "tiles",
        title: "Metabolisches Syndrom: vier Bausteine",
        items: [
          { t: "Bauchfett", icon: "CircleDot", tone: "warn" },
          { t: "Bluthochdruck", icon: "Gauge", tone: "warn" },
          { t: "Blutfette erhöht", icon: "Droplet", tone: "warn" },
          { t: "Zucker erhöht", icon: "Candy", tone: "warn" },
        ],
      },
    ],
  },
  schlaganfall: {
    d: [
      {
        kind: "tiles",
        title: "FAST-Regel",
        items: [
          { t: "Face", s: "Gesicht hängt einseitig", icon: "Smile", tone: "bad" },
          { t: "Arms", s: "Arm sinkt ab, Schwäche", icon: "Hand", tone: "bad" },
          { t: "Speech", s: "Sprache undeutlich", icon: "Megaphone", tone: "bad" },
          { t: "Time", s: "Sofort Notruf 112, Zeit merken", icon: "Clock", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        title: "Zwei Ursachen",
        cols: [
          { t: "Ischämischer Schlaganfall (ca. 80 %)", icon: "CircleDot", tone: "warn", items: ["Gerinnsel verschließt Hirnarterie", "Lyse oder Gerinnsel entfernen möglich"] },
          { t: "Hirnblutung", icon: "Droplet", tone: "bad", items: ["Gefäß platzt", "Blutung stoppen, Druck senken", "Keine Lyse!"] },
        ],
        note: "Erst die Bildgebung (CT oder MRT) zeigt, um welche Form es sich handelt.",
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Time is brain. Pro Minute gehen Millionen Nervenzellen verloren.", "Prüfungstipp: Vor dem ersten Schluck einen Schlucktest durch geschulte Kräfte, sonst nüchtern lassen."] },
    ],
  },
  parkinson: {
    d: [
      {
        kind: "tiles",
        title: "Vier Leitsymptome (TRAP)",
        items: [
          { t: "Tremor", s: "Zittern in Ruhe", icon: "Waves", tone: "warn" },
          { t: "Rigor", s: "Steifheit", icon: "Lock", tone: "warn" },
          { t: "Akinese", s: "Bewegungsarmut", icon: "Hourglass", tone: "warn" },
          { t: "Posturale Instabilität", s: "Sturzgefahr", icon: "TriangleAlert", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Zu wenig Dopamin im Gehirn, zeitgenaue Tabletten sind Pflicht.", "Prüfungstipp: Akinetische Krise = Notfall, meist nach vergessenen Tabletten."] },
    ],
  },
  ms: {
    d: [
      {
        kind: "flow",
        title: "Was bei MS im Nervensystem passiert",
        steps: [
          { t: "Immunsystem greift Markscheiden an", s: "Autoimmun, Ursache unklar", icon: "Bug" },
          { t: "Entzündungsherde in Gehirn und Rückenmark", icon: "Brain", tone: "warn" },
          { t: "Nervenleitung gestört", s: "Sehstörung, Lähmung, Gefühlsstörung", icon: "Zap", tone: "warn" },
          { t: "Schub, dann oft teilweise Rückbildung", icon: "RefreshCw", tone: "info" },
        ],
      },
    ],
    b: [
      { h: "Merksatz und Prüfungstipp", li: ["Merksatz: Hitze macht MS-Beschwerden vorübergehend schlimmer, Kühlung hilft.", "Prüfungstipp: Typische Zeichen sind Sehnerventzündung, Gefühlsstörungen, Spastik, Fatigue und Blasenstörung."] },
    ],
  },
  epilepsie: {
    d: [
      {
        kind: "flow",
        title: "Krampfanfall: richtig helfen",
        steps: [
          { t: "Ruhe bewahren, Zeit messen", icon: "Clock" },
          { t: "Verletzungen verhindern", s: "Gegenstände wegräumen, Kopf weich lagern", icon: "ShieldCheck" },
          { t: "Nichts in den Mund, nicht festhalten", icon: "Hand", tone: "warn" },
          { t: "Danach: stabile Seitenlage", s: "Atmung und Bewusstsein beobachten", icon: "BedDouble" },
          { t: "Notruf bei über 5 Minuten oder Wiederholung", icon: "Siren", tone: "bad" },
        ],
      },
    ],
  },
  demenz: {
    d: [
      {
        kind: "compare",
        title: "Delir und Demenz unterscheiden",
        cols: [
          { t: "Delir", icon: "Siren", tone: "bad", items: ["Beginnt plötzlich (Stunden bis Tage)", "Schwankt im Tagesverlauf", "Meist behandelbar, Ursache suchen", "Notfall-Charakter"] },
          { t: "Demenz", icon: "Brain", tone: "info", items: ["Beginnt schleichend (Monate bis Jahre)", "Eher gleichbleibend, schreitet fort", "Nicht heilbar", "Alltag und Beziehung gestalten"] },
        ],
      },
      {
        kind: "tiles",
        title: "Was Menschen mit Demenz hilft",
        items: [
          { t: "Fester Tagesablauf", icon: "Clock" },
          { t: "Kurze, klare Sätze", icon: "MessageCircle" },
          { t: "Validation", s: "Gefühle ernst nehmen", icon: "HeartHandshake" },
          { t: "Biografie nutzen", icon: "BookOpen" },
          { t: "Sicherheit", s: "Sturz, Weglaufen", icon: "ShieldCheck" },
          { t: "Essen und Trinken", icon: "Utensils" },
        ],
      },
    ],
  },
  sht: {
    d: [
      {
        kind: "bar",
        title: "Schweregrad nach Glasgow Coma Scale (GCS, 3–15 Punkte)",
        parts: [
          { t: "Schwer", s: "3–8", tone: "bad" },
          { t: "Mittelschwer", s: "9–12", tone: "warn" },
          { t: "Leicht", s: "13–15", tone: "ok" },
        ],
        note: "Bewertet werden Augenöffnen, verbale Antwort und motorische Antwort.",
      },
      {
        kind: "tiles",
        title: "Zeichen für steigenden Hirndruck",
        items: [
          { t: "Bewusstsein sinkt", icon: "Brain", tone: "bad" },
          { t: "Kopfschmerz, Erbrechen", icon: "Frown", tone: "warn" },
          { t: "Pupillen ungleich", icon: "Eye", tone: "bad" },
          { t: "Blutdruck steigt, Puls sinkt", icon: "Activity", tone: "bad" },
        ],
      },
    ],
    b: [
      { h: "Pflege nach Schädel-Hirn-Trauma", li: ["Bewusstsein, Pupillen, Vitalzeichen und Orientierung regelmäßig nach Anordnung kontrollieren und dokumentieren.", "Oberkörper meist leicht erhöht (etwa 30 Grad) nach Anordnung, Kopf gerade, nicht pressen lassen.", "Bei Verschlechterung sofort Arzt: Auch nach einem „harmlosen“ Sturz kann sich Stunden später eine Blutung bilden."] },
    ],
  },
  "zns-entzuendung": {
    d: [
      {
        kind: "table",
        title: "Überblick",
        head: ["Krankheit", "Erreger/Ursache", "Wichtig"],
        rows: [
          ["Meningitis", "Bakterien oder Viren", "Nackensteife, Fieber, Kopfschmerz, Lichtscheu; bakteriell = Notfall"],
          ["Enzephalitis", "meist Viren (z. B. Herpes)", "Verwirrtheit, Krampfanfälle; Herpes-Form sehr gefährlich"],
          ["FSME", "Virus, Zeckenstich", "Impfung möglich"],
          ["Borreliose", "Bakterien, Zeckenstich", "Wanderröte, Antibiotika, keine Impfung"],
          ["MS", "Autoimmun", "Schübe, siehe eigene Lektion"],
        ],
      },
    ],
    b: [
      { h: "Meningitis-Zeichen und Schutz", li: ["Typisch: hohes Fieber, starke Kopfschmerzen, Nackensteifigkeit, Licht- und Lärmempfindlichkeit, Erbrechen, später Bewusstseinsstörung.", "Bei Verdacht sofort Notruf. Bei bakterieller Meningitis (Meningokokken) Isolation und Schutzmaßnahmen nach Hausstandard, Kontaktpersonen werden behandelt.", "Zecke entfernen: möglichst früh mit Pinzette oder Zeckenkarte, Stelle desinfizieren, beobachten (Wanderröte)."] },
    ],
  },
  "huntington-als": {
    d: [
      {
        kind: "compare",
        title: "Huntington und ALS",
        cols: [
          { t: "Chorea Huntington", icon: "Dna", tone: "warn", items: ["Erblich (50 % Risiko für Kinder)", "Zu viel Bewegung: ruckartig, unwillkürlich", "Später Demenz, Schluckstörung", "Hoher Kalorienbedarf"] },
          { t: "ALS", icon: "Accessibility", tone: "bad", items: ["Motoneurone sterben ab", "Lähmungen, Schluck- und Sprechstörung", "Verstand bleibt klar", "Todesursache meist Atemmuskellähmung"] },
        ],
      },
    ],
    b: [
      { h: "Pflege bei fortschreitenden Erkrankungen", li: ["Kommunikation sichern (Hilfsmittel, Computer, Zeichen), Wünsche früh festhalten (Patientenverfügung).", "Schlucken: Kostform anpassen, Aspirationszeichen melden, Entscheidung über Magensonde gemeinsam mit dem Betroffenen.", "Atmung beobachten, Beatmung nur nach dem Willen des Betroffenen.", "Angehörige entlasten und beraten, Palliativteam einbeziehen."] },
    ],
  },
  querschnitt: {
    d: [
      {
        kind: "tree",
        title: "Prophylaxen bei Querschnitt",
        root: { t: "Gelähmte Körperteile, gestörtes Gefühl", icon: "Accessibility" },
        kids: [
          { t: "Haut", icon: "Bandage", items: ["Dekubitus: häufige Lageänderung, Druckentlastung"] },
          { t: "Lunge", icon: "Wind", items: ["Pneumonie: Atemübungen, Sekret lösen"] },
          { t: "Blase/Darm", icon: "Droplets", items: ["Regelmäßig entleeren, Infekte und Verstopfung vorbeugen"] },
          { t: "Gelenke", icon: "Bone", items: ["Kontrakturen, Spastik: bewegen, richtig lagern"] },
          { t: "Venen", icon: "Droplet", items: ["Thrombose: Kompression, Bewegung, Spritzen nach Anordnung"] },
        ],
      },
    ],
    b: [
      { h: "Autonome Dysreflexie (hoher Querschnitt)", li: ["Bei Läsionen oberhalb Th6 kann ein Reiz unterhalb (volle Blase, Verstopfung, Druckstelle) einen gefährlichen Blutdruckanstieg auslösen.", "Zeichen: sehr hoher Blutdruck, Kopfschmerz, Schwitzen und Röte oberhalb der Läsion, Gänsehaut darunter.", "Maßnahmen: aufrecht setzen, enge Kleidung lösen, Auslöser suchen und beseitigen (z. B. Katheter prüfen), Arzt sofort informieren."] },
    ],
  },
  "kopfschmerz-nerven": {
    d: [
      {
        kind: "table",
        title: "Kopfschmerzformen",
        head: ["Form", "Typisch", "Pflege"],
        rows: [
          ["Spannungskopfschmerz", "beidseits, dumpf, drückend", "Entspannung, Bewegung, Wärme"],
          ["Migräne", "einseitig, pulsierend, Übelkeit, Licht- und Lärmempfindlich", "Reizarmer Raum, Medikamente nach Anordnung"],
          ["Trigeminusneuralgie", "blitzartiger einseitiger Gesichtsschmerz", "Auslöser meiden (Kauen, Kälte), Medikamente"],
        ],
      },
    ],
  },
  "anlagestoerung-nerven": {
    d: [
      {
        kind: "compare",
        title: "Zwei angeborene Störungen",
        cols: [
          { t: "Neuralrohrdefekt", icon: "Baby", tone: "info", items: ["Fehlbildung von Wirbelsäule und Rückenmark", "Beispiel: Spina bifida", "Vorbeugung: Folsäure vor und in der Frühschwangerschaft"] },
          { t: "Infantile Zerebralparese", icon: "Brain", tone: "warn", items: ["Hirnschädigung um die Geburt", "Bewegungsstörung bleibt, Verlauf nicht fortschreitend", "Förderung: Physio, Ergo, Logo"] },
        ],
      },
    ],
    b: [
      { h: "Begleitung von Kindern und Familien", li: ["Frühförderung und regelmäßige Therapien sind wichtig; Eltern anleiten, entlasten und über Hilfen informieren (Kinderärzte, Sozialpädiatrische Zentren).", "Bei Hydrozephalus mit Shunt auf Hirndruckzeichen achten: Kopfschmerz, Erbrechen, Schläfrigkeit, Krampfanfall."] },
    ],
  },
};
