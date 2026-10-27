import type { Extra } from "./lessonsExtra";

/** Vertiefungen und Diagramme: Haut, Wunden, Schmerz, Palliativ, Blut, Sinne, Geschlechtsorgane. Lernhilfe der App, eigene Worte. */
export const EXTRA_KRANK_B: Record<string, Extra> = {
  wunden: {
    d: [
      {
        kind: "cycle",
        title: "Die drei Phasen der Wundheilung",
        steps: [
          { t: "Reinigungsphase", s: "Wunde blutet und sondert ab, Abwehrzellen reinigen (bis etwa Tag 3)", icon: "Droplet" },
          { t: "Granulationsphase", s: "Neues Gewebe füllt die Wunde, rot und feucht (etwa Tag 4 bis 10)", icon: "Sprout", tone: "ok" },
          { t: "Epithelisierungsphase", s: "Haut wächst von den Rändern darüber, Narbe entsteht", icon: "ShieldCheck", tone: "info" },
        ],
        note: "Chronische Wunden bleiben in der Entzündungs- oder Granulationsphase hängen und heilen nach etwa 8 Wochen nicht.",
      },
      {
        kind: "tiles",
        title: "Die fünf Infektionszeichen (Celsus)",
        items: [
          { t: "Rötung", icon: "Flame", tone: "bad" },
          { t: "Schwellung", icon: "CircleDot", tone: "warn" },
          { t: "Überwärmung", icon: "Thermometer", tone: "warn" },
          { t: "Schmerz", icon: "Zap", tone: "bad" },
          { t: "Funktionseinschränkung", icon: "Hand", tone: "warn" },
        ],
      },
    ],
  },
  ulcus: {
    d: [
      {
        kind: "compare",
        title: "Venöses und arterielles Ulcus",
        cols: [
          { t: "Venös", icon: "Droplets", tone: "info", items: ["Innenknöchel", "Bein geschwollen, bräunliche Haut", "Schmerz besser bei Hochlagern", "Kompression (nach Arterienprüfung)"] },
          { t: "Arteriell", icon: "Snowflake", tone: "bad", items: ["Zehen, Ferse, Fußrand", "Fuß blass und kalt, stark schmerzhaft", "Schmerz besser bei Tieflagern", "Keine starke Kompression, Gefäßchirurg"] },
        ],
      },
    ],
  },
  hauterkrankungen: {
    d: [
      {
        kind: "tiles",
        title: "Hilfen bei Juckreiz",
        items: [
          { t: "Kühlen", icon: "Snowflake" },
          { t: "Drücken statt Kratzen", s: "Nägel auf die Stelle drücken", icon: "Hand" },
          { t: "Haut eincremen", s: "rückfettend, parfümfrei", icon: "Pipette" },
          { t: "Kurze Nägel", s: "Baumwollhandschuhe nachts", icon: "Sparkles" },
          { t: "Kein Schwitzen, keine Reibung", icon: "Wind" },
          { t: "Medikamente nach Anordnung", icon: "Pill" },
        ],
      },
    ],
    b: [
      { h: "Wichtige Hautkrankheiten", li: ["Psoriasis (Schuppenflechte): scharf begrenzte, gerötete Herde mit silbrigen Schuppen, Ellenbogen und Knie, nicht ansteckend.", "Neurodermitis (atopisches Ekzem): trockene, stark juckende Haut, Beugen betroffen, Rückfettung ist die Basis.", "Pilzinfektionen und Läuse oder Krätze sind ansteckend: Hygiene, Hausstandard, Meldung beachten.", "Hautkrebs: Auffällige, wachsende, blutende Muttermale melden (ABCDE-Regel: Asymmetrie, Begrenzung, Colorit, Durchmesser, Entwicklung)."] },
    ],
  },
  schmerz: {
    d: [
      {
        kind: "pyramid",
        title: "WHO-Stufenschema (oben = stärkste Stufe)",
        levels: [
          { t: "Stufe 3", s: "Starke Opioide, plus Stufe 1", tone: "bad" },
          { t: "Stufe 2", s: "Schwache Opioide, plus Stufe 1", tone: "warn" },
          { t: "Stufe 1", s: "Nicht-Opioide: Paracetamol, NSAR", tone: "info" },
        ],
        note: "Co-Analgetika können jede Stufe ergänzen. Immer nach ärztlicher Anordnung.",
      },
      {
        kind: "bar",
        title: "Numerische Rangskala (NRS)",
        parts: [
          { t: "0", s: "kein Schmerz", tone: "ok", w: 0.8 },
          { t: "1–3", s: "leicht", tone: "info", w: 1.2 },
          { t: "4–6", s: "mittel", tone: "warn", w: 1.2 },
          { t: "7–10", s: "stark", tone: "bad", w: 1.6 },
        ],
        note: "Die Einteilung ist ein Richtwert. Entscheidend ist, was der Mensch sagt.",
      },
    ],
  },
  palliativ: {
    d: [
      {
        kind: "tree",
        title: "Palliative Care: vier Dimensionen",
        root: { t: "Lebensqualität bis zuletzt", icon: "Feather" },
        kids: [
          { t: "Körper", icon: "Pill", items: ["Schmerz, Atemnot, Übelkeit lindern", "Mundpflege"] },
          { t: "Seele", icon: "HeartHandshake", items: ["Angst, Trauer, Zuhören"] },
          { t: "Soziales", icon: "Users", items: ["Angehörige einbeziehen", "Ambulante Hilfen"] },
          { t: "Spiritualität", icon: "Compass", items: ["Sinnfragen, Rituale, Seelsorge"] },
        ],
      },
    ],
  },
  anaemie: {
    d: [
      {
        kind: "table",
        title: "Anämieformen nach MCV und MCH",
        head: ["Form", "MCV/MCH", "Typische Ursache"],
        rows: [
          ["Mikrozytär, hypochrom", "beide erniedrigt", "Eisenmangel, chronische Blutung"],
          ["Normozytär, normochrom", "normal", "akute Blutung, Nierenerkrankung, Hämolyse"],
          ["Makrozytär, hyperchrom", "beide erhöht", "Mangel an Vitamin B12 oder Folsäure"],
        ],
      },
    ],
    b: [
      { h: "Symptome verstehen", li: ["Der Körper bekommt zu wenig Sauerstoff: Blässe, Müdigkeit, Luftnot bei Anstrengung, Herzklopfen, Schwindel, Kopfschmerz.", "Eisenmangel: brüchige Nägel, Mundwinkelrisse, Haarausfall.", "Vitamin-B12-Mangel: Kribbeln und Taubheit, glatte rote Zunge."] },
      { h: "Eisentabletten in der Praxis", li: ["Am besten nüchtern, zusammen mit Vitamin C, nicht mit Milch, Kaffee oder Tee.", "Nebenwirkungen: dunkler Stuhl, Magenbeschwerden, Verstopfung. Bei Teerstuhl mit Schwäche trotzdem an Blutung denken und melden."] },
    ],
  },
  "leukaemie-lymphom": {
    d: [
      {
        kind: "compare",
        title: "Leukämie und Lymphom",
        cols: [
          { t: "Leukämie", icon: "Droplet", tone: "bad", items: ["Knochenmark bildet unreife weiße Blutzellen", "Akut: schnell, Notfall-Therapie", "Chronisch: langsamer", "Folgen: Infekte, Blutungen, Blutarmut"] },
          { t: "Malignes Lymphom", icon: "Network", tone: "warn", items: ["Lymphknoten und lymphatisches Gewebe", "Derbe, schmerzlose Lymphknoten", "B-Symptome: Fieber, Nachtschweiß, Gewichtsverlust", "Hodgkin und Non-Hodgkin"] },
        ],
      },
    ],
    b: [
      { h: "Pflege in der Chemotherapie", li: ["Infektionsschutz bei niedrigen Abwehrzellen: Händehygiene, Besucher begrenzen, kein rohes Fleisch oder Eier, Fieber sofort melden.", "Mundpflege gegen Schleimhautentzündung, weiche Zahnbürste, bei Schmerzen Arzt.", "Blutungszeichen bei wenig Blutplättchen: Nasenbluten, Petechien, blaue Flecken, Verletzungen vermeiden.", "Übelkeit und Erbrechen: Medikamente vor der Chemo nach Plan, kleine Mahlzeiten, Gerüche meiden."] },
    ],
  },
  hiv: {
    d: [
      {
        kind: "compare",
        title: "Übertragung: was ist ein Risiko, was nicht?",
        cols: [
          { t: "Möglich", icon: "Syringe", tone: "bad", items: ["Ungeschützter Geschlechtsverkehr", "Blutkontakt (gemeinsam benutzte Spritzen)", "Mutter auf Kind in Schwangerschaft, Geburt, Stillzeit", "Nadelstichverletzung (selten)"] },
          { t: "Kein Risiko", icon: "ShieldCheck", tone: "ok", items: ["Händeschütteln, Umarmen, Küssen", "Gemeinsames Geschirr, Toilette", "Husten, Niesen", "Normale pflegerische Kontakte mit Standardhygiene"] },
        ],
      },
      {
        kind: "flow",
        title: "Nach einer Nadelstichverletzung",
        steps: [
          { t: "Wunde bluten lassen, spülen", s: "Haut desinfizieren", icon: "Droplet" },
          { t: "Sofort Arzt/Betriebsarzt/Notaufnahme", s: "PEP wirkt am besten in den ersten Stunden", icon: "Siren", tone: "bad" },
          { t: "Meldung und Dokumentation", s: "Durchgangsarzt, Unfallanzeige", icon: "ClipboardList", tone: "info" },
        ],
      },
    ],
    b: [
      { h: "Wichtig für die Pflege", li: ["Mit Standardhygiene ist die Pflege von HIV-positiven Menschen sicher. Schweigepflicht und Datenschutz gelten besonders streng.", "Therapie (ART) zuverlässig einnehmen: Wird das Virus nicht mehr nachgewiesen, ist es nicht übertragbar (Beratung durch Fachpersonal).", "Typische Folgen des Immundefekts: Pilzbefall (Soor), Lungenentzündung durch Pilze, Kaposi-Sarkom, Tuberkulose."] },
    ],
  },
  "autoimmun-allergie": {
    d: [
      {
        kind: "table",
        title: "Die vier Allergietypen (Überblick)",
        head: ["Typ", "Reaktion", "Beispiel"],
        rows: [
          ["I (Soforttyp)", "IgE, Histamin, in Minuten", "Heuschnupfen, Insektengift, Nahrungsmittel, Anaphylaxie"],
          ["II (zytotoxisch)", "Antikörper gegen Zellen", "Transfusionszwischenfall"],
          ["III (Immunkomplex)", "Antigen-Antikörper-Komplexe", "Serumkrankheit"],
          ["IV (Spättyp)", "T-Zellen, nach 1–3 Tagen", "Kontaktekzem (Nickel), Tuberkulintest"],
        ],
      },
    ],
    b: [
      { h: "Anaphylaktischer Schock: Notfall", li: ["Zeichen: Hautrötung, Quaddeln, Juckreiz, Schwellung von Lippen und Zunge, Atemnot, Blutdruckabfall, Übelkeit.", "Sofort: Allergen stoppen (Infusion abstellen), Notruf, flach lagern (Beine hoch) oder bei Atemnot Oberkörper hoch, Adrenalin und weitere Medikamente nach Anordnung, Vitalzeichen, nicht allein lassen."] },
    ],
  },
  auge: {
    d: [
      {
        kind: "table",
        title: "Wichtige Augenerkrankungen",
        head: ["Erkrankung", "Was passiert", "Zeichen"],
        rows: [
          ["Katarakt (grauer Star)", "Linse trübt ein", "Schleier, Blendung, Operation hilft"],
          ["Glaukom (grüner Star)", "Augeninnendruck schädigt den Sehnerv", "Gesichtsfeldausfall; akuter Anfall: hartes, rotes Auge, Schmerz, Übelkeit: Notfall"],
          ["Makuladegeneration", "Schärfstes Sehen im Zentrum fällt aus", "Verzerrtes Sehen, dunkler Fleck in der Mitte"],
          ["Konjunktivitis", "Bindehautentzündung", "Rötung, Brennen, Sekret; ansteckend bei Infektion"],
        ],
      },
    ],
    b: [
      { h: "Augentropfen und Augensalbe richtig geben", li: ["Hände desinfizieren, Kopf leicht zurück, Unterlid vorsichtig herunterziehen, Tropfen in den unteren Bindehautsack, ohne das Auge mit der Flasche zu berühren.", "Danach Auge schließen, nach innen zum Tränenkanal drücken, damit weniger in die Nase abfließt.", "Bei mehreren Tropfen etwa 5 Minuten Abstand. Flaschen nicht bei mehreren Menschen benutzen."] },
      { h: "Menschen mit Sehbehinderung begleiten", li: ["Sich vorstellen, ankündigen, was geschieht, Ort der Dinge beschreiben und immer gleich lassen.", "Beim Gehen den Arm anbieten (der Mensch greift sich bei), Hindernisse nennen. Gute Beleuchtung, Kontraste, Brille sauber."] },
    ],
  },
  ohr: {
    d: [
      {
        kind: "tree",
        title: "Aufbau des Ohres und typische Störungen",
        root: { t: "Ohr", icon: "Ear" },
        kids: [
          { t: "Außenohr", icon: "Ear", items: ["Ohrmuschel, Gehörgang", "Ohrenschmalzpfropf, Entzündung"] },
          { t: "Mittelohr", icon: "Waves", items: ["Trommelfell, Gehörknöchelchen, Ohrtrompete", "Mittelohrentzündung, Cholesteatom"] },
          { t: "Innenohr", icon: "Orbit", items: ["Hörschnecke, Gleichgewichtsorgan", "Hörsturz, Tinnitus, Schwindel"] },
        ],
      },
    ],
    b: [
      { h: "Kommunikation mit schwerhörigen Menschen", li: ["Blickkontakt, gutes Licht auf das Gesicht, deutlich und etwas langsamer sprechen, nicht schreien.", "Störgeräusche reduzieren, kurze Sätze, bei Bedarf aufschreiben. Hörgerät: Batterie, Sitz und Sauberkeit prüfen, nachts abnehmen und trocken lagern."] },
      { h: "Hörsturz", li: ["Plötzlicher Hörverlust meist auf einem Ohr, oft mit Druckgefühl oder Tinnitus.", "Ärztliche Abklärung innerhalb von Tagen, besser sofort. Ruhe, Stress meiden."] },
    ],
  },
  "frauen-organe": {
    d: [
      {
        kind: "table",
        title: "Weibliche Geschlechtsorgane: Krebsarten im Überblick",
        head: ["Krebsart", "Warnzeichen", "Vorsorge/Besonderheit"],
        rows: [
          ["Brustkrebs", "Knoten, Hautveränderung, Einziehung der Brustwarze", "Selbstuntersuchung, Mammografie nach Programm"],
          ["Gebärmutterhalskrebs", "Blutung nach dem Verkehr, Ausfluss", "Abstrich beim Frauenarzt, HPV-Impfung"],
          ["Gebärmutterschleimhautkrebs", "Blutung nach den Wechseljahren", "Abklärung jeder Postmenopausenblutung"],
          ["Eierstockkrebs", "oft spät: Bauchumfang, Druckgefühl", "Keine sichere Früherkennung"],
        ],
      },
    ],
    b: [
      { h: "Pflege nach Brustoperation", li: ["Lymphödem vorbeugen: Arm der operierten Seite nicht für Blutdruck, Blutentnahme oder Spritzen verwenden, schonend hochlagern, Verletzungen vermeiden.", "Arm frühzeitig nach Plan bewegen, Physiotherapie, Wunde und Drainage beobachten.", "Seelische Belastung ernst nehmen, Gespräch anbieten, Selbsthilfegruppen und Prothesenberatung."] },
    ],
  },
  "maenner-organe": {
    d: [
      {
        kind: "compare",
        title: "Prostata: gutartig oder bösartig",
        cols: [
          { t: "Gutartige Vergrößerung (BPH)", icon: "CircleDot", tone: "info", items: ["Schwacher Harnstrahl, Nachträufeln", "Häufiger Harndrang, nachts", "Restharn, Harnverhalt", "TUR-P bei starken Beschwerden"] },
          { t: "Prostatakarzinom", icon: "Ribbon", tone: "bad", items: ["Lange symptomlos", "PSA und Tastuntersuchung", "Später Rückenschmerz (Metastasen)", "Operation, Bestrahlung, Hormontherapie"] },
        ],
      },
    ],
    b: [
      { h: "Nach der TUR-P", li: ["Blasenspülung über einen Dreiwegekatheter: Zulauf und Ablauf beobachten, Spülflüssigkeit und Urinmenge bilanzieren (Ausfuhr minus Spülmenge).", "Urin darf anfangs blutig sein. Starke Blutung, Gerinnsel, Katheterverstopfung oder Schmerzen melden.", "Verstopfung vermeiden (nicht pressen), viel trinken, nach Entlassung schwere Arbeit meiden."] },
      { h: "Hodentorsion: Notfall", li: ["Plötzlicher starker Hodenschmerz, oft mit Übelkeit, Hoden hochgezogen und geschwollen, meist junge Männer.", "Innerhalb von etwa 6 Stunden operieren, sonst droht der Verlust des Hodens. Sofort Arzt, nüchtern lassen."] },
    ],
  },
  sti: {
    d: [
      {
        kind: "tiles",
        title: "Schutz und Vorsorge",
        items: [
          { t: "Kondome", icon: "ShieldCheck", tone: "ok" },
          { t: "Impfung", s: "Hepatitis B, HPV", icon: "Syringe", tone: "ok" },
          { t: "Testen lassen", s: "bei Risiko, bei Symptomen", icon: "TestTube", tone: "info" },
          { t: "Partner mitbehandeln", icon: "Users", tone: "info" },
          { t: "Antibiotika vollständig einnehmen", icon: "Pill", tone: "warn" },
          { t: "Vertraulich beraten", icon: "HeartHandshake" },
        ],
      },
    ],
    b: [
      { h: "Weitere Erkrankungen", li: ["Chlamydien: häufig ohne Beschwerden, können zu Unfruchtbarkeit führen. Behandlung mit Antibiotika.", "Syphilis: Geschwür an der Eintrittsstelle, später Hautausschlag, spät Organschäden. Behandlung mit Antibiotika.", "Genitalherpes und HPV (Feigwarzen, Gebärmutterhalskrebs): Impfung gegen HPV schützt vor vielen Typen.", "Für die Pflege: Würde, Diskretion und Schweigepflicht, ohne Wertung."] },
    ],
  },
};
