/** Ergänzende Lektionen (Pflegeprozess-Modelle, Sicherheit, Isolation, Katheter, Wunde und Verband, Sterbebegleitung, Edukation, Konzepte). In eigenen Worten und vereinfacht. */
import type { Lesson } from "./lessons";

export const GAPS_LESSONS: Lesson[] = [
 {
  "id": "g-pflegeprozess-modelle",
  "group": "ausbildung",
  "area": "modelle",
  "title": "Pflegeprozess-Modelle: WHO (4 Phasen) und Fiechter/Meier (6 Schritte)",
  "icon": "RefreshCw",
  "ar": "نماذج عملية التمريض: نموذج منظمة الصحة WHO من 4 مراحل (تقييم، تخطيط، تنفيذ، تقويم) ونموذج Fiechter/Meier من 6 خطوات. تتعلم هنا جمع المعلومات، المشاكل والموارد (PÄSR)، الأهداف الذكية SMART، صياغة الإجراءات وأسباب عدم تحقق الهدف.",
  "blocks": [
   {
    "h": "Zwei bekannte Modelle",
    "li": [
     "Der Pflegeprozess ist ein geplanter Regelkreis: Man sammelt Informationen, plant, handelt und prüft das Ergebnis.",
     "WHO-Modell: 4 Phasen (Einschätzung/Pflegeanamnese, Planung, Durchführung, Evaluation). Es ist schlank und Grundlage der Entbürokratisierung der Dokumentation.",
     "Kritik am WHO-Modell: Die Zielsetzung rückt in den Hintergrund, weil sie in der Planung 'mitläuft'.",
     "Fiechter/Meier: 6 Schritte, bei denen Probleme/Ressourcen und Ziele eigene Schritte sind.",
     "Wichtig fürs Examen: Es ist ein Kreislauf – nach der Evaluation beginnt man bei Bedarf wieder mit neuen Informationen."
    ]
   },
   {
    "h": "Informationen sammeln und Pflegeanamnese",
    "li": [
     "Direkte Quellen: Patient selbst, Beobachtung, Gespräch, Angehörige. Indirekte Quellen: Akte, Arztbriefe, Übergabe, Team.",
     "Objektive Informationen sind messbar (Blutdruck, Gewicht, Temperatur). Subjektive sind das Empfinden des Patienten (Schmerz, Angst, Wünsche).",
     "Pflegeanamnese: ruhige, private Umgebung, genug Zeit (nicht länger als ca. 60 Minuten am Stück), Patient muss nicht alles beantworten.",
     "Zu den Inhalten gehören Gewohnheiten, Wünsche, Gesundheitszustand, Selbstständigkeit und das soziale Umfeld."
    ]
   },
   {
    "h": "Probleme und Ressourcen",
    "li": [
     "Aktuelles Problem: besteht jetzt. Potenzielles Problem: droht (Risiko). Verdecktes Problem: Der Patient nennt es nicht, es fällt nur durch Beobachtung auf.",
     "Generelle Probleme betreffen viele Menschen in dieser Situation, individuelle nur diesen einen Patienten.",
     "PÄSR-Schema: Problem, Ätiologie (Ursache), Symptome, Ressourcen. So wird jedes Problem nachvollziehbar beschrieben.",
     "Ressourcen sind Stärken, die man nutzt: körperliche, innere (Motivation, Wissen), räumliche, soziale (Familie) und ökonomische."
    ]
   },
   {
    "h": "Ziele nach SMART",
    "li": [
     "Ein Pflegeziel beschreibt den gewünschten Zustand des Patienten, nicht die Tätigkeit der Pflegekraft.",
     "SMART: spezifisch, messbar, akzeptiert (vom Patienten), realisierbar, terminierbar.",
     "Es gibt Nahziele (kurzfristig) und Fernziele (langfristig); Nahziele sind die Etappen zum Fernziel."
    ]
   },
   {
    "h": "Maßnahmen planen und Evaluation",
    "li": [
     "Eine Maßnahme sagt klar: Was wird getan, von wem, wann, wie oft, womit und wie?",
     "Evaluation: Wurde das Ziel erreicht? Wirken die Maßnahmen? Das Ergebnis wird dokumentiert.",
     "Gründe, warum ein Ziel nicht erreicht wird: fehlende Informationen, zu kurzer Zeitraum, zu hoch gesetztes Ziel, veränderter Zustand, Maßnahme nicht durchgeführt.",
     "Dann wird angepasst: Informationen ergänzen, Zeit verlängern, Ziel realistischer formulieren oder die Maßnahme anders planen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "WHO-Modell und Fiechter/Meier im Vergleich",
    "cols": [
     {
      "t": "WHO-Modell",
      "items": [
       "1. Einschätzung (Pflegeanamnese)",
       "2. Planung",
       "3. Durchführung",
       "4. Evaluation"
      ],
      "icon": "Layers",
      "tone": "info"
     },
     {
      "t": "Fiechter/Meier",
      "items": [
       "1. Informationen sammeln",
       "2. Probleme und Ressourcen erkennen",
       "3. Pflegeziele festlegen",
       "4. Maßnahmen planen",
       "5. Durchführung",
       "6. Evaluation"
      ],
      "icon": "ClipboardList",
      "tone": "ok"
     }
    ]
   },
   {
    "kind": "table",
    "title": "SMART-Ziele",
    "head": [
     "Buchstabe",
     "Bedeutung",
     "Beispiel"
    ],
    "rows": [
     [
      "S",
      "spezifisch (eindeutig)",
      "Herr K. geht selbstständig zur Toilette"
     ],
     [
      "M",
      "messbar",
      "mit einem Rollator, 10 Meter ohne Pause"
     ],
     [
      "A",
      "akzeptiert vom Patienten",
      "Der Patient ist damit einverstanden"
     ],
     [
      "R",
      "realistisch",
      "passt zu seinen Kräften"
     ],
     [
      "T",
      "terminiert",
      "innerhalb von 14 Tagen"
     ]
    ]
   }
  ]
 },
 {
  "id": "g-patientensicherheit",
  "group": "ausbildung",
  "area": "qualitaet",
  "title": "Patientensicherheit, Fehlerkultur und CIRS",
  "icon": "ShieldCheck",
  "ar": "سلامة المرضى: ثقافة الأخطاء لا تبحث عن مذنب بل عن ثغرات النظام. نظام CIRS لإبلاغ مجهول عن الأخطاء والحوادث الوشيكة. أنواع الأحداث (UE، Beinaheschaden، Behandlungsschaden) وجودة الرعاية حسب Donabedian ودورة PDCA.",
  "blocks": [
   {
    "h": "Patientensicherheit und Fehlerkultur",
    "li": [
     "Patientensicherheit heißt: vermeidbare Schäden durch die Behandlung und Pflege verhindern.",
     "Fehler passieren überall, wo Menschen arbeiten. Entscheidend ist, wie man damit umgeht.",
     "Gute Fehlerkultur: nicht nach Schuldigen suchen, sondern nach Ursachen im System (Zeitdruck, unklare Abläufe, Kommunikation).",
     "Fehler offen ansprechen, daraus lernen und Abläufe verbessern."
    ]
   },
   {
    "h": "CIRS – Meldesystem",
    "li": [
     "CIRS (Critical Incident Reporting System) ist ein Berichtssystem für kritische Ereignisse und Beinahefehler.",
     "Die Meldung ist freiwillig und anonym; es geht ums Lernen, nicht um Strafe.",
     "Das Team wertet die Meldungen aus, leitet Verbesserungen ab und gibt Rückmeldung an die Mitarbeitenden.",
     "Nach einem Fehler: Patienten sichern, Vorgesetzte und Arzt informieren, sachlich dokumentieren."
    ]
   },
   {
    "h": "Begriffe: Ereignisarten",
    "li": [
     "Unerwünschtes Ereignis (UE): ein Schaden, der während der Behandlung auftritt – nicht jedes UE ist ein Fehler.",
     "Vermeidbares UE: Es hätte durch andere Handlung verhindert werden können.",
     "Beinaheschaden: Es ist nichts passiert, aber es hätte leicht etwas passieren können (z. B. Verwechslung rechtzeitig bemerkt).",
     "Behandlungsschaden: ein tatsächlicher Schaden durch die Behandlung."
    ]
   },
   {
    "h": "Qualität sichern",
    "li": [
     "Donabedian unterscheidet Strukturqualität (Rahmen), Prozessqualität (Abläufe) und Ergebnisqualität (Wirkung).",
     "PDCA-Zyklus: Plan (planen), Do (umsetzen), Check (prüfen), Act (anpassen) – ein ständiger Verbesserungskreis.",
     "QM-Systeme in Einrichtungen: z. B. DIN EN ISO 9001, EFQM oder KTQ."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Ereignisarten im Überblick",
    "head": [
     "Begriff",
     "Bedeutung",
     "Beispiel"
    ],
    "rows": [
     [
      "Unerwünschtes Ereignis",
      "Schaden während der Behandlung",
      "allergische Reaktion auf ein Medikament"
     ],
     [
      "Vermeidbares UE",
      "hätte verhindert werden können",
      "Sturz wegen nicht gesicherter Bettgitter"
     ],
     [
      "Beinaheschaden",
      "nichts passiert, aber knapp",
      "falsches Medikament vor der Gabe bemerkt"
     ],
     [
      "Behandlungsschaden",
      "tatsächlicher Schaden",
      "Verbrennung durch zu heiße Wärmflasche"
     ]
    ]
   },
   {
    "kind": "cycle",
    "title": "PDCA-Zyklus",
    "steps": [
     {
      "t": "Plan: Problem erkennen, Maßnahme planen",
      "icon": "ClipboardList"
     },
     {
      "t": "Do: umsetzen",
      "icon": "Hand"
     },
     {
      "t": "Check: Wirkung prüfen",
      "icon": "Search"
     },
     {
      "t": "Act: anpassen oder festigen",
      "icon": "RefreshCw"
     }
    ]
   },
   {
    "kind": "tree",
    "title": "Qualität nach Donabedian",
    "root": {
     "t": "Qualität",
     "icon": "ShieldCheck"
    },
    "kids": [
     {
      "t": "Strukturqualität",
      "icon": "Building2",
      "tone": "info",
      "items": [
       "Personal, Ausstattung, Räume"
      ]
     },
     {
      "t": "Prozessqualität",
      "icon": "Activity",
      "tone": "ok",
      "items": [
       "Abläufe, Standards, Dokumentation"
      ]
     },
     {
      "t": "Ergebnisqualität",
      "icon": "ClipboardCheck",
      "tone": "warn",
      "items": [
       "Zustand und Zufriedenheit des Patienten"
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "g-isolation",
  "group": "ausbildung",
  "area": "technik",
  "title": "Isolation, Schutzkleidung und MRE (MRSA, ESBL, VRE, MRGN)",
  "icon": "ShieldCheck",
  "ar": "العزل إجراء وقائي لمنع انتقال الجراثيم إلى المرضى والعاملين والزوار. القواعد العامة، الملابس الواقية (FFP2 عند الانتقال الهوائي)، العزل الوقائي والعزل الجماعي، الجراثيم متعددة المقاومة (MRSA وغيرها)، فحص الأنف وخطوات التطهير، والتصرف بعد وخزة إبرة.",
  "blocks": [
   {
    "h": "Ziel und allgemeine Regeln",
    "li": [
     "Isolation ist eine vorbeugende Hygienemaßnahme, damit Erreger nicht auf andere Patienten, Personal oder Besucher übergehen.",
     "Die Maßnahmen richten sich nach dem Übertragungsweg und stehen im Hygieneplan der Einrichtung.",
     "Möglichst Einzelzimmer mit eigener Nasszelle; Schild an der Tür; Besucher melden sich vorher beim Pflegeteam.",
     "Aus Datenschutzgründen wird der Erreger nicht öffentlich genannt; das Team nutzt eine innerbetriebliche Legende.",
     "Patient verlässt das Zimmer nur für Untersuchungen und mit Schutzmaßnahmen; möglichst wenige Kontaktpersonen (Bezugspflege).",
     "Isolierte Patienten zuletzt versorgen; Pflegeutensilien patientenbezogen nutzen und täglich desinfizieren; den Pflegewagen nicht mit ins Zimmer nehmen.",
     "Flächen im Zimmer (Türgriffe, Nachttisch) täglich desinfizieren; nach Aufhebung oder Entlassung Schlussdesinfektion."
    ]
   },
   {
    "h": "Schutzausrüstung und Entsorgung",
    "li": [
     "Schutzkittel (flüssigkeitsdicht, langärmlig, am Rücken geschlossen), Handschuhe und Mund-Nasen-Schutz nach Hygieneplan.",
     "Bei Übertragung über die Luft (aerogen) ist eine FFP2-Maske nötig.",
     "Einweggeschirr im Zimmer entsorgen; normales Geschirr direkt in den Essenswagen, ohne Zwischenlagerung außerhalb.",
     "Spitze Gegenstände in durchstichsichere Behälter; niemals die Kappe wieder aufsetzen (Recapping verboten).",
     "Patienten und Angehörige über Schutzkleidung und Händedesinfektion informieren und anleiten."
    ]
   },
   {
    "h": "Besondere Isolationsarten",
    "li": [
     "Schutzisolation (Umkehrisolation): schützt den Patienten vor Keimen der Umgebung, z. B. bei geschwächter Abwehr nach Chemotherapie.",
     "Kohortenisolation: Patienten mit derselben Infektion werden gemeinsam in einem Zimmer isoliert.",
     "Ein Isolationspatient wird im OP-Programm am Ende eingeplant."
    ]
   },
   {
    "h": "Multiresistente Erreger (MRE)",
    "li": [
     "MRE sind gegen mehrere Antibiotika resistent; unüberlegter Antibiotika-Einsatz fördert Resistenzen.",
     "Wichtige Gruppen: MRSA (Methicillin-resistenter Staphylococcus aureus), ESBL (Enzym-bildende gramnegative Darmbakterien), VRE (Vancomycin-resistente Enterokokken), MRGN (multiresistente gramnegative Bakterien).",
     "Risikogruppen: chronisch Kranke (z. B. Diabetes), Wunden, Dialyse, häufige Antibiotika oder Klinikaufenthalte, liegende Zugänge (Tracheostoma, PEG), ältere Menschen, Klinikpersonal, Landwirte mit Tierkontakt.",
     "MRSA wird meist über die Hände übertragen (Kontakt), nicht über die Luft. Er überlebt Monate auf Flächen und Kleidung.",
     "Screening: Abstrich beider Nasenseiten (ggf. Rachen); bis zum Ergebnis (meist 1 Tag) im Einzelzimmer.",
     "Bei MRSA langärmliger Einmalkittel; sitzt der Erreger in Mund, Nase oder Lunge, zusätzlich Handschuhe und Mund-Nasen-Schutz.",
     "Bei bloßer Besiedelung ohne Infektion gibt es keine Antibiose, sondern eine Sanierung (siehe Tabelle)."
    ]
   },
   {
    "h": "Nadelstichverletzung",
    "li": [
     "Blutung fördern, intensiv desinfizieren, Verletzung sofort dem Durchgangs- bzw. Betriebsarzt melden.",
     "Wenn möglich die Infektionsquelle (Patient) bestimmen und auf Hepatitis B/C und HIV testen – dafür ist die Einwilligung des Patienten nötig.",
     "Vorbeugen: durchstichsichere Behälter, kein Recapping."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Drei Isolationsformen",
    "cols": [
     {
      "t": "Schutzkleidung nach Weg",
      "items": [
       "Schutz vor Erregern des Patienten",
       "Einzelzimmer, Kittel, Handschuhe, Mund-Nasen-Schutz"
      ],
      "icon": "ShieldCheck",
      "tone": "info"
     },
     {
      "t": "Schutzisolation",
      "items": [
       "Schutz des Patienten vor Keimen von außen",
       "z. B. nach Chemotherapie"
      ],
      "icon": "ShieldCheck",
      "tone": "ok"
     },
     {
      "t": "Kohortenisolation",
      "items": [
       "gleiche Infektion, gleiches Zimmer",
       "spart Einzelzimmer"
      ],
      "icon": "Users",
      "tone": "warn"
     }
    ]
   },
   {
    "kind": "table",
    "title": "MRSA-Sanierung",
    "head": [
     "Ort",
     "Maßnahme",
     "Dauer"
    ],
    "rows": [
     [
      "Nase",
      "antibiotische Nasensalbe",
      "5 Tage"
     ],
     [
      "Rachen",
      "Mundspüllösung, gurgeln",
      "5–7 Tage"
     ],
     [
      "Haut und Haare",
      "antibakterielle Waschlotion; tägliches Bettenwechseln",
      "5 Tage hintereinander"
     ],
     [
      "Kontrolle",
      "Abstriche 3 Tage nach Ende, an 3 Tagen nacheinander",
      "negativ = Isolation aufheben"
     ]
    ]
   },
   {
    "kind": "flow",
    "title": "Nach einer Nadelstichverletzung",
    "steps": [
     {
      "t": "Blutung fördern",
      "icon": "Droplet"
     },
     {
      "t": "Intensiv desinfizieren",
      "icon": "ShieldCheck"
     },
     {
      "t": "Quelle bestimmen, Test mit Einwilligung",
      "icon": "Search"
     },
     {
      "t": "Betriebs-/Durchgangsarzt melden",
      "icon": "Phone"
     }
    ]
   }
  ]
 },
 {
  "id": "g-intertrigo",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Intertrigoprophylaxe: Hautfalten schützen",
  "icon": "Layers",
  "ar": "التسلخ بين الثنايا (Intertrigo) التهاب محمرّ ورطب في ثنايا الجلد مع حكة وحرقان وقد تضاف عدوى فطرية أو بكتيرية. الأسباب: السمنة وقلة الحركة والتعرق وسلس البول والسكري. الوقاية: تجفيف بالتربيت لا بالفرك، ملابس قطنية، مراقبة، بلا بودرة ولا معجون زنك.",
  "blocks": [
   {
    "h": "Was ist Intertrigo?",
    "li": [
     "Intertrigo ist eine gerötete, oft nässende Hautschädigung in Hautfalten, die juckt und brennt.",
     "Häufig kommt eine Superinfektion mit Pilzen oder Bakterien dazu.",
     "Ursache ist das feuchtwarme Milieu in Verbindung mit Reibung."
    ]
   },
   {
    "h": "Risikofaktoren und gefährdete Stellen",
    "li": [
     "Risikofaktoren: Immobilität, Übergewicht, starkes Schwitzen, Inkontinenz, Diabetes, mangelnde Hautpflege.",
     "Bei Kindern: Hals, Achseln, Ellenbeuge, Oberschenkel, Leiste, Analfalte.",
     "Bei Erwachsenen: Leisten, Bauchfalte, unter der Brust, Achseln, Analfalte, Zehenzwischenräume, Hodensack."
    ]
   },
   {
    "h": "Maßnahmen",
    "li": [
     "Haut und Hautfalten gründlich trocknen – tupfen, nicht reiben.",
     "Hautbeobachtung, gefährdete Stellen häufiger kontrollieren.",
     "Kein Puder und keine Zinkpaste verwenden (verstärkt die Hautschädigung).",
     "Bei Bedarf Baumwollkompressen in die Hautfalten legen; geeignetes Hautpflegeprodukt verwenden.",
     "Bei Inkontinenz Hilfsmittel regelmäßig wechseln; luftige Kleidung aus Baumwolle; verschwitzte Kleidung wechseln.",
     "Ziel: intakte Haut erhalten, Feuchtigkeitsansammlung und Reibung vermeiden."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Gefährdete Hautfalten",
    "cols": [
     {
      "t": "Kinder",
      "items": [
       "Hals",
       "Achsel, Ellenbeuge",
       "Oberschenkel, Leiste",
       "Analfalte"
      ],
      "icon": "Baby",
      "tone": "info"
     },
     {
      "t": "Erwachsene",
      "items": [
       "Leiste, Bauchfalte",
       "unter der Brust, Achsel",
       "Analfalte, Hodensack",
       "Zehenzwischenräume"
      ],
      "icon": "PersonStanding",
      "tone": "warn"
     }
    ]
   },
   {
    "kind": "flow",
    "title": "Intertrigo vorbeugen",
    "steps": [
     {
      "t": "Haut beobachten",
      "icon": "Eye"
     },
     {
      "t": "Waschen, dann tupfend trocknen",
      "icon": "Droplets"
     },
     {
      "t": "Baumwolle einlegen oder tragen",
      "icon": "Layers"
     },
     {
      "t": "Nasse Kleidung und Einlagen wechseln",
      "icon": "RefreshCw"
     }
    ],
    "note": "Kein Puder, keine Zinkpaste."
   }
  ]
 },
 {
  "id": "g-isk-spk",
  "group": "ausbildung",
  "area": "technik",
  "title": "Selbstkatheterismus (ISK) und suprapubischer Katheter (SPK)",
  "icon": "Droplets",
  "ar": "ISK: المريض يفرغ مثانته بنفسه بقسطرة 4–6 مرات يومياً (مثلاً عند الشلل النصفي السفلي، السنسنة المشقوقة، التصلب المتعدد). فوائده: استقلالية وعدد أقل من التهابات المسالك. SPK: قسطرة تمر عبر جدار البطن إلى المثانة لتصريف طويل الأمد، مع عناية بالضمادة والسوائل.",
  "blocks": [
   {
    "h": "ISK – Grundlagen",
    "li": [
     "Beim intermittierenden Selbstkatheterismus entleert der Patient seine Blase mehrmals täglich selbst (ca. 4–6-mal in 24 Stunden).",
     "Indikationen: neurogene Blasenentleerungsstörung, chronische Restharnbildung (z. B. Querschnittlähmung, Spina bifida, Multiple Sklerose).",
     "Kontraindikationen: Verletzungen von Harnröhre oder Blase (Blut im Urin), Harnröhrenstriktur (Verengung).",
     "Vorteile gegenüber dem Dauerkatheter: mehr Selbstbestimmung, weniger Harnwegsinfekte, Blasenfunktion (Speichern und Entleeren) bleibt erhalten."
    ]
   },
   {
    "h": "Anleitung zum ISK",
    "li": [
     "Voraussetzung: ausreichende Beweglichkeit und kognitive Fähigkeit.",
     "Ruhige Umgebung (Schild 'Bitte nicht stören'), vertrauensvolle Beziehung, Ablauf Schritt für Schritt erklären.",
     "Am Modell vormachen und den Patienten zunehmend einbeziehen; Ziel ist sichere, selbstständige Durchführung.",
     "Zeit für Fragen, über Hilfsmittel (z. B. Spiegel für Frauen), Kathetersysteme, Hygiene und Häufigkeit zu Hause informieren, auf Ängste eingehen."
    ]
   },
   {
    "h": "Suprapubischer Katheter (SPK)",
    "li": [
     "Der SPK wird durch die Bauchdecke direkt in die Blase gelegt und dient der längerfristigen Harnableitung.",
     "Indikationen: lange Ableitung, große Rektum-/Dickdarmoperationen, Querschnittlähmung, Polytrauma, Harnröhrenverletzung oder -enge (z. B. Prostatavergrößerung).",
     "Kontraindikationen: Raumforderungen im Unterbauch (z. B. Blasentumor), Gerinnungsstörungen, Schwangerschaft, Hauterkrankung an der Einstichstelle.",
     "Vorbereitung: Gerinnungshemmer nach Rücksprache absetzen, Laborkontrolle, Unterbauch rasieren und waschen, ggf. 0,5–1 Liter trinken – die Blase braucht mindestens 200 ml."
    ]
   },
   {
    "h": "Pflege nach SPK-Anlage",
    "li": [
     "Verband auf Nachblutung kontrollieren.",
     "Urin muss ungehindert abfließen: Beutel unter Blasenniveau, kein Zug am Katheter (reizt die Einstichstelle).",
     "2–3 Liter Flüssigkeit täglich, wenn nicht kontraindiziert (z. B. Herzinsuffizienz); so verstopfen Salze oder Blutgerinnsel den Katheter nicht.",
     "Katheter nie diskonnektieren (Keimgefahr); Verbandwechsel nach Standard aseptisch.",
     "Bei Langzeiteinsatz Silikonkatheter mit Ballonblockung, bei kurzem Einsatz Einwegkatheter aus Polyurethan."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "ISK und SPK im Vergleich",
    "cols": [
     {
      "t": "ISK",
      "items": [
       "Patient katheterisiert sich selbst",
       "4–6-mal täglich",
       "Blasenfunktion bleibt erhalten"
      ],
      "icon": "Hand",
      "tone": "ok"
     },
     {
      "t": "SPK",
      "items": [
       "durch die Bauchdecke in die Blase",
       "dauerhafte Harnableitung",
       "Verbandwechsel an der Einstichstelle"
      ],
      "icon": "Syringe",
      "tone": "info"
     }
    ]
   },
   {
    "kind": "flow",
    "title": "ISK lernen in Schritten",
    "steps": [
     {
      "t": "Ruhe und Vertrauen schaffen",
      "icon": "Smile"
     },
     {
      "t": "Am Modell vormachen",
      "icon": "Eye"
     },
     {
      "t": "Patient übt mit Unterstützung",
      "icon": "Hand"
     },
     {
      "t": "Sicher und selbstständig",
      "icon": "ClipboardCheck"
     }
    ]
   }
  ]
 },
 {
  "id": "g-wunddoku",
  "group": "ausbildung",
  "area": "technik",
  "title": "Wunddokumentation: Anamnese, Analyse, Foto",
  "icon": "ClipboardList",
  "ar": "توثيق الجرح يُظهر مسار الشفاء والعلاج للجميع: 'ما لم يُوثَّق لا يمكن إثباته'. يشمل سيرة الجرح وتحليله (الحجم، الحواف، نوع النسيج، الإفرازات، علامات العدوى، الألم) والتصوير بموافقة كتابية مع مسطرة وبيانات المريض بعد التنظيف.",
  "blocks": [
   {
    "h": "Warum dokumentieren?",
    "li": [
     "Die Dokumentation macht Heilungsverlauf und Therapie für alle Beteiligten nachvollziehbar.",
     "Grundsatz: Was nicht dokumentiert wurde, ist weder nachvollziehbar noch beweisbar.",
     "Zur Wunddokumentation gehören die Wundanamnese und die Wundanalyse."
    ]
   },
   {
    "h": "Wundanamnese",
    "li": [
     "Patient und Angehörige: soziales Umfeld, Wohnsituation, Versorgung zu Hause.",
     "Krankheitsbild: Begleit- und Stoffwechselerkrankungen, Durchblutungsstörungen.",
     "Psychosoziale Aspekte (Angst, Isolation), wundauslösende Faktoren (z. B. Druck) und negative Einflüsse (Rauchen, Ernährung)."
    ]
   },
   {
    "h": "Wundanalyse – was wird beschrieben?",
    "li": [
     "Diagnose und Klassifikation: Grunderkrankung, Wundart (z. B. Dekubitus, diabetisches Fußulkus), Schweregrad (z. B. EPUAP-Einteilung).",
     "Lokalisation (ausformulieren, im Schaubild einzeichnen), Wunddauer, Zahl der Rezidive.",
     "Größe: Länge, Breite, Tiefe; Taschen oder Fisteln?",
     "Wundrand/-umgebung: mazeriert, nekrotisch, ödematös, gerötet.",
     "Häufigste Gewebeart: Nekrose, Fibrinbelag, Granulationsgewebe, Biofilm.",
     "Geruch, Exsudat (Menge, Farbe, Beschaffenheit), Infektionszeichen (Rötung, Schwellung, Schmerz, Überwärmung, Funktionseinschränkung).",
     "Wundschmerz: Intensität (Schmerzskala) und Qualität (pochend, brennend, stechend)."
    ]
   },
   {
    "h": "Fotodokumentation",
    "li": [
     "Ziel: Schriftliches ergänzen, Wundstatus sichtbar machen, Verlauf verdeutlichen.",
     "Voraussetzung: schriftliches Einverständnis des Patienten oder Betreuers.",
     "Auf dem Foto: Name, Geburtsdatum, Datum, Körperregion; Einmalmaßband für die Größe.",
     "Foto erst nach der Wundreinigung; Wundrand und Umgebung mit aufnehmen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tree",
    "title": "Wunddokumentation",
    "root": {
     "t": "Wunddokumentation",
     "icon": "ClipboardList"
    },
    "kids": [
     {
      "t": "Wundanamnese",
      "icon": "ClipboardList",
      "tone": "info",
      "items": [
       "Umfeld, Krankheiten",
       "Auslöser, Einflussfaktoren"
      ]
     },
     {
      "t": "Wundanalyse",
      "icon": "Search",
      "tone": "ok",
      "items": [
       "Größe, Rand, Gewebe",
       "Exsudat, Geruch, Infektion, Schmerz"
      ]
     },
     {
      "t": "Foto",
      "icon": "Eye",
      "tone": "warn",
      "items": [
       "Einverständnis, Maßband, Datum"
      ]
     }
    ]
   },
   {
    "kind": "table",
    "title": "Was wird bei der Wundanalyse gemessen?",
    "head": [
     "Merkmal",
     "Beispiele"
    ],
    "rows": [
     [
      "Größe",
      "Länge, Breite, Tiefe, Taschen"
     ],
     [
      "Gewebe",
      "Nekrose, Fibrin, Granulation"
     ],
     [
      "Exsudat",
      "Menge, Farbe, Geruch"
     ],
     [
      "Infektion",
      "Rötung, Schwellung, Überwärmung"
     ],
     [
      "Schmerz",
      "Skala und Qualität"
     ]
    ]
   }
  ]
 },
 {
  "id": "g-verbandarten",
  "group": "ausbildung",
  "area": "technik",
  "title": "Verbandarten: Binden-, Gips-, Schlauchmull- und Netzschlauchverband",
  "icon": "Bandage",
  "ar": "أهداف الضمادات: حماية، امتصاص الإفراز، إيقاف النزف، تصحيح الوضع، الضغط، تثبيت الأطراف. أنواع: رباط الشاش (التفاف نحو القلب، من الداخل إلى الخارج)، الجبس (مراقبة DMS)، شاش الأنبوب والشبكة للتثبيت. أربطة الشد القصير والمتوسط والطويل.",
  "blocks": [
   {
    "h": "Ziele und Einteilung",
    "li": [
     "Ziele: Schutz vor äußeren Einflüssen, Aufsaugen von Wundsekret, Blutstillung, Korrektur von Fehlstellungen, Kompression von Gefäßen, Ruhigstellung.",
     "Indikationen: Verstauchung, Ausrenkung, Bruch, Thromboseprophylaxe/-therapie, Fixieren von Wundauflagen, Auftragen lokaler Arzneimittel.",
     "Einteilung nach Lokalisation, Material, Wirkungsweise, Aussehen und Eigenname.",
     "Verbandarten: Bindenverband, Gipsverband, Schlauchmullverband, Netzschlauchverband."
    ]
   },
   {
    "h": "Bindenverband",
    "li": [
     "Die Bindenbreite richtet sich nach dem Durchmesser der Extremität.",
     "Immer herzwärts wickeln (Ausnahme: absteigender Kornährenverband); Beine von innen nach außen.",
     "In physiologischer Grundstellung anlegen; Bindenabschluss nicht über der Wunde; zu Beginn ein Kreisgang, an konischen Gliedmaßen Schraubengang, über Gelenke Kornährenverband.",
     "Kurzzugbinden (ca. 50 % dehnbar): hoher Druck bei Muskelanspannung, niedriger in Ruhe – z. B. bei tiefer Venenthrombose.",
     "Mittelzugbinden (ca. 90 %): mittlere Kompression, z. B. kompressive Wundversorgung.",
     "Langzugbinden (ca. 180 %): niedriger Druck bei Muskelanspannung, hoher in Ruhe – deshalb nicht über Nacht; für leichte Kompression, z. B. Bänder und Gelenke entlasten.",
     "Beispiele: Handverband (Schmuck ablegen), Knieverband (oft Schildkrötenverband), Fußverband (von innen nach außen, ohne Falten), Stumpfbandagierung nach Amputation."
    ]
   },
   {
    "h": "Gipsverband",
    "li": [
     "Indikation: Ruhigstellung bei Brüchen, entzündlichen Knochen-/Gelenkprozessen, Korrektur von Fehlstellungen.",
     "Es gibt geschlossene Gipse, Gipsschienen oder Kombinationen.",
     "Nach dem Aushärten wird der Gips gespalten, damit starke Weichteilschwellung keine Durchblutungs- oder Nervenschäden macht.",
     "DMS-Kontrolle: Durchblutung (Nagelbettprobe, Farbe, Wärme), Motorik (Finger/Zehen bewegen), Sensibilität (Taubheit, Kribbeln)."
    ]
   },
   {
    "h": "Schlauchmull und Netzschlauch",
    "li": [
     "Schlauchmull fixiert Verbände und Wundauflagen, ist sehr dehnbar, rutscht nicht und schnürt nicht ein.",
     "Anlegen mit Applikator: Schlauch über den Applikator rollen und über das Körperteil stülpen.",
     "Formen: Kopf-, Brust-, Desault-, Gilchrist-, Hand- und Fingerverband.",
     "Netzschlauch ist weitmaschig, extrem dehnbar, franst nicht aus und kann überall zugeschnitten werden; geeignet bei Pflasterallergie oder häufigem Verbandwechsel.",
     "Ungedehnt am Körperteil abmessen und über die Wundauflage ziehen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Binden nach Dehnbarkeit",
    "head": [
     "Bindenart",
     "Dehnbarkeit",
     "Wirkung",
     "Einsatz"
    ],
    "rows": [
     [
      "Kurzzug",
      "ca. 50 %",
      "Druck bei Anspannung hoch, in Ruhe niedrig",
      "starke Kompression, z. B. tiefe Venenthrombose"
     ],
     [
      "Mittelzug",
      "ca. 90 %",
      "mittlerer Druck",
      "kompressive Wundversorgung"
     ],
     [
      "Langzug",
      "ca. 180 %",
      "Druck in Ruhe hoch – nicht über Nacht",
      "leichte Kompression, Gelenke entlasten"
     ]
    ]
   },
   {
    "kind": "compare",
    "title": "Vier Verbandarten",
    "cols": [
     {
      "t": "Binde",
      "items": [
       "Kompression, Fixierung",
       "herzwärts wickeln"
      ],
      "icon": "Bandage",
      "tone": "info"
     },
     {
      "t": "Gips",
      "items": [
       "Ruhigstellung",
       "DMS-Kontrolle"
      ],
      "icon": "Bone",
      "tone": "warn"
     },
     {
      "t": "Schlauchmull",
      "items": [
       "fixiert Auflagen",
       "Applikator"
      ],
      "icon": "Layers",
      "tone": "ok"
     },
     {
      "t": "Netzschlauch",
      "items": [
       "sehr dehnbar",
       "bei Pflasterallergie"
      ],
      "icon": "Layers",
      "tone": "ok"
     }
    ]
   },
   {
    "kind": "flow",
    "title": "DMS-Kontrolle beim Gips",
    "steps": [
     {
      "t": "Durchblutung: Nagelbett, Farbe, Wärme",
      "icon": "Droplet"
     },
     {
      "t": "Motorik: Finger/Zehen bewegen",
      "icon": "Hand"
     },
     {
      "t": "Sensibilität: Taubheit, Kribbeln?",
      "icon": "Feather"
     }
    ],
    "note": "Auffälligkeiten sofort dem Arzt melden."
   }
  ]
 },
 {
  "id": "g-wunddrainagen",
  "group": "ausbildung",
  "area": "technik",
  "title": "Wunddrainagen: Arten und pflegerische Schwerpunkte",
  "icon": "Droplets",
  "ar": "الدرنقة أنبوب مرن يصرّف إفرازات أو دماً أو قيحاً من الجرح أو التجويف. أنواع: بسحب (Redon، نحو 0,8 بار) وبلا سحب (Robinson، شعرية). مفتوحة ونصف مفتوحة ومغلقة. التمريض: مراقبة الكمية واللون والقوام والرائحة، تثبيت بلا شد، فحص الفراغ وتغيير الزجاجة، ضمادة معقمة.",
  "blocks": [
   {
    "h": "Was ist eine Drainage?",
    "li": [
     "Drainagen sind weiche, flexible, oft gelochte Schläuche, die Sekret, Blut oder Eiter aus Wunden, Körper- oder Abszesshöhlen ableiten.",
     "Ziel: Wundheilung fördern und Komplikationen vermeiden."
    ]
   },
   {
    "h": "Arten",
    "li": [
     "Mit Sog: Unterdruck in der Sekretflasche (ca. 0,8 bar) saugt Flüssigkeit kontinuierlich ab, z. B. Redon-Drainage.",
     "Ohne Sog: Gewebedruck und Schwerkraft, z. B. Robinson- oder Kapillardrainage (Gummilasche, Easy-Flow, Penrose).",
     "Innere Drainagen werden operativ gelegt (umgehen Hindernisse); äußere leiten nach außen und sind häufiger.",
     "Offen: Sekret läuft in den Verband. Halboffen: Auffangbeutel wechselbar. Geschlossen: Beutel fest verbunden, Ventil verhindert Rückfluss."
    ]
   },
   {
    "h": "Pflegerische Schwerpunkte",
    "li": [
     "Flüssigkeit nach Menge, Farbe, Konsistenz, Beimengungen und Geruch kontrollieren und dokumentieren.",
     "Ableitung zugfrei, abgepolstert, durchgängig und unter Körperniveau fixieren.",
     "Bei Sog auf den Vakuumindikator achten; zeigt er wenig Sog, Flasche sofort wechseln.",
     "Bei Diskonnektion oder Leeren hygienisch arbeiten; Verbandwechsel aseptisch – zuerst die OP-Wunde, dann die Drainageaustrittsstelle; Entzündungszeichen dokumentieren.",
     "Patienten anleiten: keine Manipulation, Drainage nie auf den Boden legen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Drainagen mit und ohne Sog",
    "cols": [
     {
      "t": "Mit Sog",
      "items": [
       "Unterdruck ca. 0,8 bar",
       "z. B. Redon",
       "Vakuumindikator beachten"
      ],
      "icon": "Gauge",
      "tone": "info"
     },
     {
      "t": "Ohne Sog",
      "items": [
       "Schwerkraft und Gewebedruck",
       "z. B. Robinson, Penrose",
       "Beutel unter Körperniveau"
      ],
      "icon": "Droplet",
      "tone": "ok"
     }
    ]
   },
   {
    "kind": "tiles",
    "title": "Was wird beobachtet?",
    "items": [
     {
      "t": "Menge",
      "icon": "Gauge"
     },
     {
      "t": "Farbe",
      "icon": "Eye"
     },
     {
      "t": "Konsistenz",
      "icon": "Droplet"
     },
     {
      "t": "Beimengungen",
      "icon": "Search"
     },
     {
      "t": "Geruch",
      "icon": "Feather"
     }
    ],
    "note": "Alles dokumentieren."
   }
  ]
 },
 {
  "id": "g-sterbeprozess",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Sterbeprozess, Todeszeichen und Umgang mit Verstorbenen",
  "icon": "Moon",
  "ar": "الاحتضار فردي ولا يمكن التنبؤ به: مرحلة نهائية (أسابيع–أشهر) وأخيرة (أيام–ساعات). مراحل Kübler-Ross الخمس غير جامدة. علامات الاحتضار الأخيرة، الموت السريري والدماغي والبيولوجي، علامات الموت غير المؤكدة والمؤكدة، ورعاية المتوفى بكرامة.",
  "blocks": [
   {
    "h": "Sterben ist individuell",
    "li": [
     "Beginn und Dauer des Sterbens sind nicht vorhersehbar.",
     "Die Palliativmedizin unterscheidet Terminalphase (letzte Wochen bis Monate) und Finalphase (letzte Tage bis Stunden); sie sind nicht scharf trennbar.",
     "Angehörige begleiten: Besuchszeiten aufheben, Ruhephasen ermöglichen, erklären was passieren kann, Seelsorge oder Psychologen einbeziehen."
    ]
   },
   {
    "h": "Phasen nach Kübler-Ross",
    "li": [
     "1. Nicht-wahrhaben-Wollen (Schock) – 2. Zorn – 3. Verhandeln – 4. Depression – 5. Annahme.",
     "Auch Angehörige durchlaufen diese Phasen.",
     "Das Modell ist keine feste Reihenfolge: Mischformen sind möglich, nicht jeder erreicht alle Phasen oder die Annahme."
    ]
   },
   {
    "h": "Die letzte Lebenszeit",
    "li": [
     "Müdigkeit und Schwäche, bis zu 20 Stunden Schlaf am Tag; manchmal Angst und Unruhe.",
     "Das Hören bleibt lange erhalten – sprechen und Nähe sind wichtig; Reaktionen zeigen sich oft über Mimik oder Atmung.",
     "Kreislauf schwächer: kalte Gliedmaßen, blasse oder marmorierte Haut.",
     "Schluckreflex nimmt ab: Speichel sammelt sich, rasselndes Atemgeräusch.",
     "Atemveränderung; Schnappatmung zeigt Sauerstoffmangel am Ende; in den letzten Stunden Bewusstlosigkeit."
    ]
   },
   {
    "h": "Tod und Todeszeichen",
    "li": [
     "Klinischer Tod: Atmung und Kreislauf stehen still – alle unsicheren Todeszeichen sind da.",
     "Hirntod: unumkehrbarer Ausfall aller Hirnfunktionen – das anerkannte medizinische und juristische Kriterium für den Tod.",
     "Biologischer Tod: nach und nach sterben alle Zellen und Organe.",
     "Unsichere Todeszeichen: Bewusstlosigkeit, keine Atmung, kein Puls, weite lichtstarre Pupillen, erschlaffte Muskeln.",
     "Sichere Todeszeichen: Totenflecken, Leichenstarre (beginnt nach 4–12 Stunden am Kopf, löst sich nach 1–6 Tagen), Autolyse/Verwesung.",
     "Kurz nach dem Tod können noch Muskelzuckungen oder Stuhlabgang auftreten.",
     "Formalitäten: Leichenschau durch den Arzt, Totenschein, Standesamt stellt die Sterbeurkunde aus."
    ]
   },
   {
    "h": "Umgang mit Verstorbenen",
    "li": [
     "Alles würdig und achtsam; Wünsche und Rituale der Angehörigen und Religion beachten.",
     "Zugänge, Katheter, Sonden entfernen oder belassen – nach Hausstandard.",
     "Körperpflege (gern gemeinsam mit Angehörigen), Bett frisch beziehen, ankleiden.",
     "Flach auf den Rücken, Hände locker auf den Bauch, Augen schließen, Zahnprothese vor der Leichenstarre einsetzen, Unterkiefer z. B. mit Handtuchrolle stützen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Fünf Phasen nach Kübler-Ross",
    "steps": [
     {
      "t": "Nicht-wahrhaben-Wollen",
      "s": "Schock",
      "icon": "Frown"
     },
     {
      "t": "Zorn",
      "s": "Wut",
      "icon": "Flame"
     },
     {
      "t": "Verhandeln",
      "s": "Hoffnung auf Zeit",
      "icon": "Handshake"
     },
     {
      "t": "Depression",
      "s": "Trauer",
      "icon": "CloudRain"
     },
     {
      "t": "Annahme",
      "s": "Frieden",
      "icon": "Heart"
     }
    ],
    "note": "Keine starre Reihenfolge."
   },
   {
    "kind": "table",
    "title": "Todeszeichen",
    "head": [
     "Unsicher",
     "Sicher"
    ],
    "rows": [
     [
      "Bewusstlosigkeit",
      "Totenflecken"
     ],
     [
      "keine Atmung, kein Puls",
      "Leichenstarre"
     ],
     [
      "weite, lichtstarre Pupillen",
      "Autolyse/Verwesung"
     ],
     [
      "schlaffe Muskeln",
      "—"
     ]
    ]
   },
   {
    "kind": "compare",
    "title": "Drei Todesbegriffe",
    "cols": [
     {
      "t": "Klinischer Tod",
      "items": [
       "Atmung und Kreislauf stehen",
       "unsichere Zeichen"
      ],
      "icon": "Heart",
      "tone": "warn"
     },
     {
      "t": "Hirntod",
      "items": [
       "alle Hirnfunktionen erloschen",
       "anerkanntes Todeskriterium"
      ],
      "icon": "Brain",
      "tone": "bad"
     },
     {
      "t": "Biologischer Tod",
      "items": [
       "alle Zellen sterben",
       "sichere Todeszeichen"
      ],
      "icon": "Moon",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g-patientenedukation",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Patientenedukation: Informieren, Schulen, Anleiten, Beraten",
  "icon": "GraduationCap",
  "ar": "تثقيف المريض يشمل الإعلام والتدريب والإرشاد والاستشارة لتقوية استقلالية المريض وكفاءته. التدريب المصغر (15–30 دقيقة) لمهارة واحدة. الإرشاد في 4 مراحل: جمع المعلومات، المشاكل والأهداف والإجراءات، التنفيذ (عرض ثم تمرين)، والتقويم.",
  "blocks": [
   {
    "h": "Was ist Patientenedukation?",
    "li": [
     "Alle Maßnahmen, die Patienten und Angehörigen helfen, die Krankheit zu bewältigen: Informationsgespräch, Schulung/Anleitung, Beratung.",
     "Ziel: Selbstständigkeit und Kompetenz stärken, damit der Patient Kontrolle, Autonomie und Würde im Alltag zurückgewinnt.",
     "Das Krankenpflegegesetz nennt sie als wichtigen Teil der professionellen Pflege – planen, durchführen, dokumentieren und evaluieren."
    ]
   },
   {
    "h": "Informieren",
    "li": [
     "Beispiele: bevorstehende Maßnahmen, Untersuchungen, Medikamente, Stationsabläufe, zuständige Pflegekräfte.",
     "Vorher klären: Kenntnisstand (meiner und der des Patienten), Art der Vermittlung (mündlich, Broschüre, Skizze), Ort und Zeit.",
     "Bei persönlichen Themen Privatsphäre, bei komplexen Themen genug Zeit für Fragen."
    ]
   },
   {
    "h": "Schulen – Mikroschulung",
    "li": [
     "Mikroschulung: kurz (ca. 15–30 Minuten), nur eine Fertigkeit mit dem nötigen Wissen.",
     "Beispiele: Ernährungspumpe, Verbandwechsel, Kompressionsstrümpfe anziehen, Stomabeutel wechseln, Verhalten bei Angina-pectoris-Anfall.",
     "Ablauf: Vorwissen erfragen, Wissen ergänzen, vormachen, Patient führt aus (nur bei Fehlern eingreifen), Rückfragen, Material mitgeben, Wissen prüfen, dokumentieren, am nächsten Tag wiederholen.",
     "Eine vollständige Schulung (z. B. Diabetesschulung) vermittelt dagegen alles zum Krankheitsbild."
    ]
   },
   {
    "h": "Anleiten in 4 Phasen",
    "li": [
     "1. Informationen sammeln: Anleitungsbedarf und Vorkenntnisse erfragen.",
     "2. Probleme, Ressourcen, Ziele und Maßnahmen: realistische Nah- und Fernziele.",
     "3. Durchführung: Demonstrationsphase (vormachen, erklären), dann Übungsphase (Patient übt, Pflegekraft korrigiert, motiviert, zieht sich zurück).",
     "4. Evaluation: Ziele erreicht? Wenn nicht, Ziele überdenken und Anleitung wiederholen/anpassen. Beispiel: Blutzuckermessung."
    ]
   },
   {
    "h": "Beraten",
    "li": [
     "Beratung hilft, Probleme zu bewältigen, die der Patient nicht allein lösen kann.",
     "Subjektiver Beratungsbedarf: der Patient fragt selbst. Objektiver Bedarf: die Pflegekraft erkennt ihn.",
     "Häufige Themen: Versorgung nach der Entlassung, Umgang mit Einschränkungen.",
     "Zuerst Beziehung aufbauen und Vertrauen schaffen, dann Anliegen klären und Lösungen gemeinsam erarbeiten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Information, Schulung, Anleitung, Beratung",
    "cols": [
     {
      "t": "Informieren",
      "items": [
       "Wissen weitergeben",
       "spontan oder vorbereitet"
      ],
      "icon": "MessageCircle",
      "tone": "info"
     },
     {
      "t": "Schulen",
      "items": [
       "geplant und strukturiert",
       "Mikroschulung 15–30 Min."
      ],
      "icon": "GraduationCap",
      "tone": "ok"
     },
     {
      "t": "Anleiten",
      "items": [
       "Alltagsfertigkeit üben",
       "Demonstration, dann Übung"
      ],
      "icon": "Hand",
      "tone": "warn"
     },
     {
      "t": "Beraten",
      "items": [
       "Probleme gemeinsam lösen",
       "Beziehung zuerst"
      ],
      "icon": "Handshake",
      "tone": "info"
     }
    ]
   },
   {
    "kind": "cycle",
    "title": "Anleitungsprozess",
    "steps": [
     {
      "t": "Informationen sammeln",
      "icon": "Search"
     },
     {
      "t": "Probleme, Ziele, Maßnahmen",
      "icon": "ClipboardList"
     },
     {
      "t": "Durchführung: vormachen, dann üben",
      "icon": "Hand"
     },
     {
      "t": "Evaluation",
      "icon": "ClipboardCheck"
     }
    ]
   }
  ]
 },
 {
  "id": "g-basale-bobath",
  "group": "ausbildung",
  "area": "konzepte",
  "title": "Basale Stimulation und Bobath-Konzept: Hintergrund",
  "icon": "Brain",
  "ar": "التحفيز القاعدي: مفهوم لتنمية الإدراك والتواصل والحركة عند أشخاص متأثرين بشدة، ويعتمد على الحواس المبكرة (بصرية، فموية وشمية، دهليزية، سمعية إيقاعية، اهتزازية، لمسية). Bobath: مفهوم علاج حركي بعد إصابات الجهاز العصبي (سكتة): تحسين إدراك الجسم وتوتر العضلات والحركات الطبيعية بالتسهيل (Fazilitation).",
  "blocks": [
   {
    "h": "Basale Stimulation – Idee",
    "li": [
     "Konzept zur Förderung von Wahrnehmung, Kommunikation und Bewegung bei stark beeinträchtigten Menschen.",
     "'Basal' = die früh entwickelten Sinne; 'Stimulation' = Anregungen, die zum Annehmen eines Pflegeangebots einladen.",
     "Profitieren besonders Menschen mit Wahrnehmungsstörung, z. B. nach Schädel-Hirn-Trauma, Schlaganfall, Hirnschaden durch Sauerstoffmangel.",
     "Bleibt jemand lange in gleicher Lage oder reizarm, schwindet die Körperwahrnehmung; es kann zu falschen Eindrücken wie Halluzinationen kommen (sensorische Deprivation).",
     "Der Körper ist ansprechbar: über Berührung, Temperatur, Lageveränderung; Kommunikation läuft auch über Atmung und Muskelspannung."
    ]
   },
   {
    "h": "Ziele und Angebote",
    "li": [
     "Zentrale Ziele: Leben erhalten und Entwicklung erfahren, das eigene Leben spüren, Sicherheit und Vertrauen, eigenen Rhythmus, Außenwelt erfahren, Sinn geben, autonom leben.",
     "Kern: Grundvertrauen durch individuelle Rituale, Wiederholung und persönliche Pflegeangebote.",
     "Visuell: Schwarz-Weiß-Fotos, große Uhr; Blickfeld nicht verstellen.",
     "Oral/olfaktorisch: Lieblingsspeisen, vertraute Gerüche (Kleidung); verbessert Schlucken und Kauen.",
     "Vestibulär: Schaukelbewegungen für Lage- und Gleichgewichtssinn.",
     "Audiorhythmisch: Lieblingsmusik, Stimme der Angehörigen – Lautstärke beachten.",
     "Vibratorisch: z. B. elektrische Zahnbürste nahe an Gelenken, fördert Wahrnehmung von Knochen und Gelenken.",
     "Immer: Der Patient muss sich abwenden können."
    ]
   },
   {
    "h": "Bobath – Grundprinzip",
    "li": [
     "Bewegungstherapeutisches Konzept, u. a. bei Schlaganfall, Schädel-Hirn-Trauma, Multipler Sklerose.",
     "Grundannahme: Das Gehirn ist lebenslang lernfähig (Plastizität); die gesunde Hälfte kann Aufgaben übernehmen – durch Wiederholung und gezielte Reize.",
     "Alle Beteiligten, auch Angehörige, setzen es rund um die Uhr konsequent um."
    ]
   },
   {
    "h": "Ziele und Muskeltonus",
    "li": [
     "Ziele: Körperwahrnehmung fördern, Muskeltonus normalisieren, normale Bewegungsabläufe anbahnen.",
     "Tonus steigt bei Kälte, schnellen Bewegungen, Angst und Stress, kleiner Unterstützungsfläche, Überstreckung der Gelenke; er sinkt bei Wärme, langsamen Bewegungen und großer Unterstützungsfläche (am niedrigsten im Liegen).",
     "Schlüsselpunkte: Thorax (zentral), Schulter und Becken (körpernah), Hände und Füße (körperfern) – dort lassen sich Impulse wirksam setzen.",
     "Fazilitation: Anbahnen von Bewegung durch gezielten Einsatz von Händen und Sprache.",
     "Raumgestaltung bei Halbseitenlähmung: Nachttisch und Bett so, dass der Blick zur stärker betroffenen Seite geht; Klingel auf die weniger betroffene Seite."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Sinne der Basalen Stimulation",
    "items": [
     {
      "t": "Visuell",
      "s": "Schwarz-Weiß-Fotos, große Uhr",
      "icon": "Eye"
     },
     {
      "t": "Oral/olfaktorisch",
      "s": "Lieblingsspeise, vertraute Gerüche",
      "icon": "Soup"
     },
     {
      "t": "Vestibulär",
      "s": "Schaukelbewegungen",
      "icon": "PersonStanding"
     },
     {
      "t": "Audiorhythmisch",
      "s": "Musik, Stimme der Angehörigen",
      "icon": "Ear"
     },
     {
      "t": "Vibratorisch",
      "s": "elektrische Zahnbürste nahe Gelenken",
      "icon": "Activity"
     },
     {
      "t": "Taktil",
      "s": "Berührung, Temperatur",
      "icon": "Hand"
     }
    ]
   },
   {
    "kind": "compare",
    "title": "Was erhöht, was senkt den Muskeltonus?",
    "cols": [
     {
      "t": "Erhöht",
      "items": [
       "Kälte",
       "schnelle Bewegungen",
       "Angst, Stress",
       "kleine Auflagefläche"
      ],
      "icon": "Flame",
      "tone": "bad"
     },
     {
      "t": "Senkt",
      "items": [
       "Wärme",
       "langsame Bewegungen",
       "Ruhe, Sicherheit",
       "große Auflagefläche"
      ],
      "icon": "Snowflake",
      "tone": "ok"
     }
    ]
   }
  ]
 }
];
