/** Ergänzende Lektionen 8: Schmerzmanagement (Physiologie, Erfassung, WHO-Stufen, Opioide, Spezialfälle) und Kinderkrankheiten. */
import type { Lesson } from "./lessons";

export const GAPS8_LESSONS: Lesson[] = [
 {
  "id": "g8-schmerz-grundlagen",
  "group": "krank",
  "area": "schmerz",
  "title": "Schmerz verstehen: Entstehung, Weg und Schmerzarten",
  "icon": "Zap",
  "ar": "الألم تجربة معقدة تبدأ بتنبيه المستقبلات في الأنسجة، ينتقل عبر النخاع الشوكي إلى الدماغ، ولا نشعر به إلا عند وصوله إلى الوعي. معرفة هذا المسار تفسّر لماذا تعمل المسكنات المختلفة في أماكن مختلفة.",
  "blocks": [
   {
    "h": "Definition und Aufgabe",
    "li": [
     "Schmerz ist ein unangenehmes Sinnes- und Gefühlserlebnis, das mit einer tatsächlichen oder drohenden Gewebeschädigung verbunden ist oder so beschrieben wird.",
     "Schmerz ist das, was der Patient als Schmerz empfindet. Die Selbstauskunft hat Vorrang.",
     "Akuter Schmerz hat eine Warnfunktion und schützt vor weiterer Schädigung.",
     "Chronischer Schmerz hat die Warnfunktion verloren und gilt als eigene Krankheit, meist wenn er länger als drei bis sechs Monate besteht."
    ]
   },
   {
    "h": "Der Weg des Schmerzreizes",
    "li": [
     "Nozizeptoren sind freie Nervenendigungen in Haut, Muskeln, Gelenken und Organen. Gewebeschaden setzt Botenstoffe frei (zum Beispiel Prostaglandine, Bradykinin, Histamin), die sie erregen.",
     "Schnelle A-delta-Fasern leiten den hellen, stechenden Erstschmerz, langsame C-Fasern den dumpfen, brennenden Zweitschmerz.",
     "Die Zellkörper liegen im Spinalganglion. Von dort geht der Reiz über die Hinterwurzel in das Hinterhorn des Rückenmarks.",
     "Dann steigt er über Bahnen zum Thalamus und zur Großhirnrinde auf. Erst dort wird er bewusst als Schmerz wahrgenommen.",
     "Absteigende Hemmbahnen vom Gehirn dämpfen die Weiterleitung im Hinterhorn. Opioide verstärken diese Hemmung."
    ]
   },
   {
    "h": "Wo Schmerzmittel angreifen",
    "li": [
     "NSAR und Paracetamol hemmen die Bildung von Prostaglandinen am Entstehungsort.",
     "Lokalanästhetika blockieren die Natriumkanäle der Nervenfaser und stoppen die Weiterleitung.",
     "Opioide wirken im Hinterhorn und im Gehirn und aktivieren die absteigende Hemmung.",
     "Antikonvulsiva und Antidepressiva dämpfen übererregte Nerven und eignen sich bei Nervenschmerz."
    ]
   },
   {
    "h": "Schmerzarten",
    "li": [
     "Nozizeptorschmerz: Gewebe ist gereizt oder verletzt. Somatisch (Haut, Knochen, Muskel) eher gut lokalisierbar, viszeral (Organe) dumpf, krampfartig und schlecht lokalisierbar.",
     "Neuropathischer Schmerz: Nerv selbst ist geschädigt. Brennend, einschießend, Kribbeln, Berührungsempfindlichkeit, zum Beispiel bei Zoster oder Diabetes.",
     "Mischschmerz (mixed pain): beide Anteile gleichzeitig, zum Beispiel bei Bandscheibenvorfall oder Tumor.",
     "Übertragener Schmerz: Das Organ ist erkrankt, der Schmerz wird in der Haut desselben Segments empfunden, zum Beispiel Herzinfarkt mit Schmerz im linken Arm.",
     "Deafferenzierungsschmerz: nach Ausfall von Nervenbahnen, zum Beispiel Phantomschmerz.",
     "Zentraler Schmerz: Schädigung im Rückenmark oder Gehirn, zum Beispiel nach Schlaganfall."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Der Schmerzweg",
    "steps": [
     {
      "t": "Reiz am Gewebe",
      "s": "Nozizeptor erregt",
      "icon": "Flame",
      "tone": "warn"
     },
     {
      "t": "Nervenfaser",
      "s": "A-delta und C-Fasern",
      "icon": "Zap",
      "tone": "info"
     },
     {
      "t": "Hinterhorn",
      "s": "Umschaltung im Rückenmark",
      "icon": "Network",
      "tone": "info"
     },
     {
      "t": "Thalamus",
      "s": "Weiterleitung",
      "icon": "Orbit",
      "tone": "info"
     },
     {
      "t": "Großhirnrinde",
      "s": "Bewusste Wahrnehmung",
      "icon": "Brain",
      "tone": "bad"
     }
    ],
    "note": "Hemmung von oben: absteigende Bahnen dämpfen das Hinterhorn."
   },
   {
    "kind": "table",
    "title": "Schmerzarten im Vergleich",
    "head": [
     "Art",
     "Gefühl",
     "Beispiel"
    ],
    "rows": [
     [
      "Somatisch",
      "Stechend, gut lokalisiert",
      "Knochenbruch"
     ],
     [
      "Viszeral",
      "Dumpf, kolikartig",
      "Gallenkolik"
     ],
     [
      "Neuropathisch",
      "Brennend, einschießend",
      "Gürtelrose"
     ],
     [
      "Übertragen",
      "Fern vom Organ",
      "Herzinfarkt, linker Arm"
     ]
    ]
   }
  ]
 },
 {
  "id": "g8-schmerz-erfassung",
  "group": "krank",
  "area": "schmerz",
  "title": "Schmerzerfassung: Anamnese, Skalen und Dokumentation",
  "icon": "ClipboardList",
  "ar": "لا علاج جيد للألم بدون قياس منتظم. نسأل المريض بشكل منهجي، ونستخدم مقياساً يفهمه، ونكرر القياس، ونوثّق النتيجة وتأثير العلاج.",
  "blocks": [
   {
    "h": "Schmerzanamnese: Was fragt man?",
    "li": [
     "Lokalisation: Wo genau tut es weh? Strahlt der Schmerz aus?",
     "Qualität: Wie fühlt es sich an (stechend, brennend, dumpf, drückend, krampfartig)?",
     "Intensität: Wie stark in Ruhe und bei Bewegung?",
     "Zeit: Seit wann, wie oft, dauerhaft oder in Anfällen, Tagesverlauf?",
     "Einflussfaktoren: Was verstärkt, was lindert (Wärme, Kälte, Lage, Ruhe)? Begleitsymptome wie Übelkeit?",
     "Bisherige Therapie, Selbstmedikation und pflanzliche Mittel (zum Beispiel Johanniskraut), dazu Vorstellungen und Erwartungen des Patienten."
    ]
   },
   {
    "h": "Eindimensionale Skalen",
    "li": [
     "VAS (visuelle Analogskala): 10 cm Linie, der Patient markiert, gemessen wird in Millimetern.",
     "NRS (numerische Ratingskala): Zahl von 0 (kein Schmerz) bis 10 (stärkster vorstellbarer Schmerz). Im Alltag am häufigsten.",
     "VRS (verbale Ratingskala): fünf Wörter von kein, leicht, mäßig, stark bis stärkster Schmerz. Gut, wenn Zahlen schwer fallen.",
     "Immer dieselbe Skala beim selben Patienten verwenden und sie bei Bedarf neu erklären."
    ]
   },
   {
    "h": "Regeln für die Praxis",
    "li": [
     "Schmerz regelmäßig und aktiv erfragen, nicht nur abwarten, bis der Patient klagt.",
     "Ruheschmerz und Belastungsschmerz getrennt erfassen (zum Beispiel beim Husten, Aufstehen, Verbandwechsel).",
     "Als Zielwerte gelten in der Regel Schmerz in Ruhe unter 3 und bei Belastung unter 5 auf der NRS (Orientierung des Expertenstandards).",
     "Nach jeder Maßnahme zur erwarteten Wirkzeit erneut messen und die Wirkung dokumentieren.",
     "Fremdeinschätzung unterschätzt den Schmerz meist. Nur wenn der Patient nicht selbst Auskunft geben kann, werden Beobachtungsskalen genutzt."
    ]
   },
   {
    "h": "Dokumentation",
    "li": [
     "Schmerzprotokoll oder Schmerztagebuch mit Zeit, Intensität, Auslöser, Medikament und Wirkung.",
     "Körperschema: Der Patient zeichnet ein, wo der Schmerz sitzt.",
     "Mehrdimensionale Fragebögen erfassen zusätzlich Beeinträchtigung, Stimmung und Schlaf, besonders bei chronischem Schmerz.",
     "Angst, Rückzug und Unruhe können Hinweise auf unbehandelten Schmerz sein."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Drei Skalen im Alltag",
    "cols": [
     {
      "t": "VAS",
      "items": [
       "10 cm Linie, Strich setzen",
       "Messung in mm",
       "Verständnis manchmal schwer"
      ],
      "icon": "Ruler",
      "tone": "info"
     },
     {
      "t": "NRS",
      "items": [
       "Zahl 0 bis 10",
       "Schnell, am häufigsten",
       "Mündlich möglich"
      ],
      "icon": "Hash",
      "tone": "ok"
     },
     {
      "t": "VRS",
      "items": [
       "5 Worte",
       "Kein bis stärkster Schmerz",
       "Gut bei Zahlenproblemen"
      ],
      "icon": "MessageCircle",
      "tone": "info"
     }
    ],
    "note": "Ziel: Ruhe unter 3, Belastung unter 5."
   }
  ]
 },
 {
  "id": "g8-who-stufenschema",
  "group": "krank",
  "area": "schmerz",
  "title": "WHO-Stufenschema und Nicht-Opioid-Analgetika",
  "icon": "Pill",
  "ar": "يرتّب مخطط WHO المسكنات في ثلاث درجات حسب شدة الألم. نبدأ بالدرجة المناسبة، نعطي الدواء بانتظام عن طريق الفم قدر الإمكان، ونضيف أدوية مساعدة، ونمنع الآثار الجانبية.",
  "blocks": [
   {
    "h": "Die Stufen",
    "li": [
     "Stufe I: Nicht-Opioide wie Paracetamol, NSAR (Ibuprofen, Diclofenac) und Metamizol.",
     "Stufe II: schwach wirksame Opioide wie Tramadol und Tilidin/Naloxon, oft zusätzlich mit Stufe I.",
     "Stufe III: stark wirksame Opioide wie Morphin, Oxycodon, Hydromorphon, Fentanyl, Buprenorphin und Tapentadol. Sie unterliegen dem Betäubungsmittelrecht.",
     "In jeder Stufe können Koanalgetika und Begleitmedikamente ergänzt werden.",
     "Die Stufen sind eine Orientierung. Bei starkem Schmerz kann man direkt mit Stufe III beginnen."
    ]
   },
   {
    "h": "Grundregeln der Gabe",
    "li": [
     "Möglichst oral, damit der Patient unabhängig bleibt.",
     "Nach der Uhr: feste Zeiten, nicht erst bei starkem Schmerz.",
     "Individuell dosieren und Nebenwirkungen von Anfang an vorbeugen.",
     "Retardpräparate für die Dauertherapie, schnell wirksame Präparate für Schmerzspitzen.",
     "Wirkung und Nebenwirkung regelmäßig überprüfen und dokumentieren."
    ]
   },
   {
    "h": "Paracetamol, NSAR, Metamizol",
    "li": [
     "Paracetamol: schmerz- und fiebersenkend, kaum Magenprobleme. Höchstdosis in der Regel 4 g pro Tag. Überdosierung schädigt die Leber.",
     "NSAR: schmerz-, entzündungs- und fiebersenkend. Risiken: Magenschleimhaut und Blutungen, Nierenschädigung, Wassereinlagerung, Herz-Kreislauf. Bei Risiko Magenschutz (PPI).",
     "Metamizol: stark schmerz- und krampflösend. Seltene, aber gefährliche Blutbildveränderung (Agranulozytose). Bei i.v. Gabe langsam geben, sonst Blutdruckabfall.",
     "Tilidin/Naloxon: Höchstdosis bis 600 mg pro Tag. Die Tropfen sind betäubungsmittelpflichtig, retardierte Tabletten nicht.",
     "Umrechnung auf Morphin: Tramadol und Tilidin etwa 10 zu 1 (600 mg entsprechen etwa 60 mg Morphin)."
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Magen-, Nieren- und Blutungszeichen beobachten und auf Einnahme mit Mahlzeit achten (NSAR).",
     "Bei Stufe II und III Übelkeit, Müdigkeit, Verstopfung und Verwirrtheit beachten.",
     "Doppelte Gabe mehrerer Wirkstoffe derselben Gruppe vermeiden.",
     "Patient und Angehörige über Dosis, Uhrzeit und Höchstmenge schulen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "pyramid",
    "title": "WHO-Stufenschema",
    "levels": [
     {
      "t": "Stufe III: starke Opioide",
      "s": "Morphin, Oxycodon, Fentanyl",
      "icon": "Flame",
      "tone": "bad"
     },
     {
      "t": "Stufe II: schwache Opioide",
      "s": "Tramadol, Tilidin/Naloxon",
      "icon": "Pill",
      "tone": "warn"
     },
     {
      "t": "Stufe I: Nicht-Opioide",
      "s": "Paracetamol, NSAR, Metamizol",
      "icon": "Pill",
      "tone": "ok"
     }
    ],
    "note": "Dazu in jeder Stufe: Koanalgetika und Begleitmedikamente."
   }
  ]
 },
 {
  "id": "g8-opioide",
  "group": "krank",
  "area": "schmerz",
  "title": "Opioide: Wirkung, Nebenwirkungen, Pflaster und Betäubungsmittelrecht",
  "icon": "Syringe",
  "ar": "الأفيونات أقوى المسكنات وتُستخدم بأمان عند الألم الشديد إذا أُعطيت بالجرعة الصحيحة. دور التمريض هو الإعطاء المنتظم ومراقبة الآثار الجانبية ومنع الإمساك وحفظ المخدرات وفق القانون.",
  "blocks": [
   {
    "h": "Wirkung und wichtige Substanzen",
    "li": [
     "Opioide docken an Opioidrezeptoren an (vor allem im Hinterhorn und Gehirn) und hemmen so die Schmerzweiterleitung und Schmerzverarbeitung.",
     "Morphin ist der Goldstandard und die Referenzsubstanz. Es gibt es als Retardtablette (zum Beispiel alle 12 Stunden) und schnell wirkend für Bedarf.",
     "Oxycodon, Hydromorphon und Tapentadol sind weitere Retardopioide. Bei Niereninsuffizienz sind Hydromorphon, Fentanyl und Buprenorphin oft besser verträglich, weil Morphin sich anreichern kann.",
     "Piritramid wird vor allem postoperativ i.v. gegeben."
    ]
   },
   {
    "h": "Pflaster: Fentanyl und Buprenorphin",
    "li": [
     "Fentanylpflaster wirkt etwa 72 Stunden. Der Wirkspiegel baut sich erst nach etwa 12 bis 24 Stunden auf, daher zu Beginn weiter das alte Opioid oder ein schnell wirkendes Mittel nach Plan.",
     "Wärme (Fieber, Heizkissen, Sauna, heißes Bad) lässt mehr Wirkstoff aufnehmen. Das Pflaster nicht erwärmen.",
     "Auf saubere, unbehaarte, unverletzte Haut am Oberkörper kleben, bei jedem Wechsel eine andere Stelle, Datum notieren, Reste vorsichtig entfernen. Altes Pflaster gefaltet entsorgen, besonders Kinder schützen.",
     "Buprenorphinpflaster: je nach Produkt Wechsel nach 3,5 Tagen (zweimal pro Woche) oder nach 7 Tagen."
    ]
   },
   {
    "h": "Nebenwirkungen und Maßnahmen",
    "li": [
     "Verstopfung tritt fast immer auf und bildet keine Toleranz. Von Beginn an ein Abführmittel nach Anordnung und Flüssigkeit, Bewegung, Ballaststoffe.",
     "Übelkeit und Erbrechen vor allem zu Beginn: Antiemetikum nach Anordnung, klingt meist nach Tagen ab.",
     "Müdigkeit und Sedierung, im Alter auch Verwirrtheit und Sturzgefahr.",
     "Atemdepression ist bei richtiger, einschleichender Dosierung selten. Warnzeichen: Atemfrequenz unter etwa 8 bis 10 pro Minute, schwer erweckbar, stecknadelkopfgroße Pupillen. Dann Hilfe rufen, Patient wecken und zum Atmen auffordern, Sauerstoff, Naloxon nach ärztlicher Anordnung.",
     "Weitere: Juckreiz, Mundtrockenheit, Harnverhalt, Schwitzen."
    ]
   },
   {
    "h": "Durchbruchschmerz, Sorgen und Recht",
    "li": [
     "Durchbruchschmerz: kurzer starker Schmerz trotz Dauertherapie. Dafür ein schnell wirksames Opioid, oft etwa ein Sechstel der Tagesdosis, nach Anordnung.",
     "Angst vor Sucht ist bei Schmerzpatienten meist unbegründet. Gewöhnung (Toleranz) ist nicht dasselbe wie Sucht. Beim Absetzen die Dosis langsam senken.",
     "Umrechnung (Orientierung): Morphin i.v. zu oral etwa 1 zu 2 bis 3, subkutan zu oral etwa 1 zu 1,5 bis 2. Die Umstellung ordnet der Arzt an.",
     "Betäubungsmittel: BtM-Rezept, verschlossene getrennte Aufbewahrung, Bestandsbuch mit Zugang und Abgabe, Kontrolle durch zwei Personen nach Hausregel."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Nebenwirkungen von Opioiden",
    "items": [
     {
      "t": "Verstopfung",
      "s": "Immer vorbeugen",
      "icon": "Toilet",
      "tone": "warn"
     },
     {
      "t": "Übelkeit",
      "s": "Zu Beginn, Antiemetikum",
      "icon": "Droplets",
      "tone": "info"
     },
     {
      "t": "Sedierung",
      "s": "Sturz- und Verwirrtheitsrisiko",
      "icon": "Moon",
      "tone": "info"
     },
     {
      "t": "Atemdepression",
      "s": "Selten, Naloxon",
      "icon": "Wind",
      "tone": "bad"
     }
    ]
   },
   {
    "kind": "table",
    "title": "Pflaster im Vergleich",
    "head": [
     "Pflaster",
     "Wechsel",
     "Hinweis"
    ],
    "rows": [
     [
      "Fentanyl",
      "72 Stunden",
      "Wärme erhöht Aufnahme"
     ],
     [
      "Buprenorphin (kurz)",
      "3,5 Tage",
      "Feste Wechseltage"
     ],
     [
      "Buprenorphin (lang)",
      "7 Tage",
      "Wochenpflaster"
     ]
    ]
   }
  ]
 },
 {
  "id": "g8-koanalgetika",
  "group": "krank",
  "area": "schmerz",
  "title": "Koanalgetika und Begleitmedikamente",
  "icon": "Pipette",
  "ar": "بعض الأدوية ليست مسكنات بالأصل لكنها تخفف أنواعاً معينة من الألم، خاصة ألم الأعصاب، وتُستخدم مع المسكنات. وهناك أدوية مرافقة تمنع الآثار الجانبية مثل الإمساك والغثيان.",
  "blocks": [
   {
    "h": "Koanalgetika",
    "li": [
     "Antikonvulsiva (Gabapentin, Pregabalin, Carbamazepin) bei neuropathischem, einschießendem Schmerz.",
     "Antidepressiva (Amitriptylin, Duloxetin) bei brennendem Nervenschmerz und chronischem Schmerz. Wirkung auf Schmerz oft schon in niedriger Dosis, aber erst nach etwa ein bis zwei Wochen.",
     "Glukokortikoide (Kortison) bei Schwellung, Tumorödem und Nervenkompression.",
     "Bisphosphonate bei Knochenmetastasen. Muskelrelaxanzien bei Muskelverspannung. Lokalanästhetika als Pflaster oder Salbe bei Nervenschmerz.",
     "Ketamin in niedriger Dosis kann bei schwer behandelbarem Schmerz ärztlich eingesetzt werden."
    ]
   },
   {
    "h": "Begleitmedikamente",
    "li": [
     "Abführmittel zur Vorbeugung der Opioidverstopfung.",
     "Antiemetika gegen Übelkeit (zum Beispiel Metoclopramid, Haloperidol).",
     "Magenschutz (PPI) bei NSAR oder Kortison.",
     "Schlaf- und Angstlösung nur sparsam, da sie Atmung und Sturzrisiko verstärken können."
    ]
   },
   {
    "h": "Wichtige Hinweise",
    "li": [
     "Einschleichend dosieren: niedrig anfangen, langsam steigern. So sind weniger Müdigkeit und Schwindel zu erwarten.",
     "Die Wirkung setzt oft verzögert ein. Patienten vorher sagen, dass das Mittel nicht sofort wirkt und nicht bei Bedarf, sondern regelmäßig genommen wird.",
     "Antidepressiva als Schmerzmittel bedeutet nicht, dass der Patient psychisch krank ist. Das erklären.",
     "Nicht abrupt absetzen, besonders Antikonvulsiva."
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Sturzrisiko, Schwindel, Müdigkeit und Verwirrtheit beobachten, besonders bei älteren Menschen.",
     "Wirkung auf den Schmerz und Nebenwirkungen im Schmerztagebuch festhalten.",
     "Mit dem Arzt klären, wenn Wirkung ausbleibt oder Nebenwirkungen belasten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Welches Koanalgetikum wofür?",
    "head": [
     "Gruppe",
     "Einsatz",
     "Hinweis"
    ],
    "rows": [
     [
      "Antikonvulsiva",
      "Einschießender Nervenschmerz",
      "Schwindel, Müdigkeit"
     ],
     [
      "Antidepressiva",
      "Brennender Nervenschmerz",
      "Wirkt nach 1 bis 2 Wochen"
     ],
     [
      "Kortison",
      "Schwellung, Tumorödem",
      "Magenschutz"
     ],
     [
      "Bisphosphonate",
      "Knochenmetastasen",
      "Zahnstatus beachten"
     ]
    ]
   }
  ]
 },
 {
  "id": "g8-schmerz-nichtmedikamentoes",
  "group": "krank",
  "area": "schmerz",
  "title": "Multimodale Schmerztherapie und nicht-medikamentöse Maßnahmen",
  "icon": "HandHelping",
  "ar": "أفضل علاج للألم، خاصة المزمن، يجمع عدة أساليب: أدوية، حركة وعلاج طبيعي، دعم نفسي، وإجراءات تمريضية مثل الحرارة والبرودة وTENS والاسترخاء. ويعمل فيه فريق متعدد التخصصات.",
  "blocks": [
   {
    "h": "Multimodal und interdisziplinär",
    "li": [
     "Mehrere Verfahren gleichzeitig: Medikamente, Bewegung, Psychotherapie, Pflege, Entspannung.",
     "Das Team besteht aus Ärzten, Pflege, Physio- und Ergotherapie, Psychologie und Sozialdienst.",
     "Ziel ist weniger Schmerz und mehr Alltagsfähigkeit, nicht nur Schmerzfreiheit."
    ]
   },
   {
    "h": "TENS",
    "li": [
     "Elektroden auf der Haut geben schwachen Reizstrom ab. Das Kribbeln überlagert den Schmerzreiz (Schmerzhemmung auf Rückenmarkebene), niedrige Frequenzen fördern zusätzlich körpereigene Endorphine.",
     "Der Patient lernt das Gerät selbst zu bedienen. Intensität so wählen, dass ein angenehmes Kribbeln entsteht, kein Schmerz.",
     "Nicht anwenden bei Herzschrittmacher oder Defibrillator, über dem Halsbereich (Carotis), auf verletzter oder entzündeter Haut, in der Schwangerschaft im Bauch- und Rückenbereich, bei Epilepsie nur nach ärztlicher Abklärung."
    ]
   },
   {
    "h": "Pflegerische Maßnahmen",
    "li": [
     "Wärme (Wickel, Wärmflasche, Rotlicht) bei Muskelverspannung und Krämpfen, Kälte bei frischer Verletzung, Schwellung und Entzündung. Haut schützen, Dauer begrenzen.",
     "Lagerung, Entlastung und schmerzarme Mobilisation, Bewegung vor der Schmerzspitze planen (zum Beispiel Schmerzmittel vor dem Verbandwechsel).",
     "Ablenkung, Musik, Gespräch, Atemübungen und Berührung.",
     "Ruhige Umgebung, Schlaf fördern, Angst reduzieren."
    ]
   },
   {
    "h": "Weitere Verfahren",
    "li": [
     "Physiotherapie, Ergotherapie, Massage und Training fördern Beweglichkeit und lösen Verspannungen.",
     "Entspannungsverfahren wie progressive Muskelentspannung, autogenes Training, Atemtechniken und Biofeedback.",
     "Psychologische Verfahren wie Verhaltenstherapie und Stressbewältigung bei chronischem Schmerz.",
     "Akupunktur und weitere komplementäre Verfahren können begleitend helfen, ersetzen aber keine notwendige Therapie."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tree",
    "title": "Bausteine der Schmerztherapie",
    "root": {
     "t": "Multimodale Therapie",
     "icon": "HandHelping",
     "tone": "ok"
    },
    "kids": [
     {
      "t": "Medikamente",
      "icon": "Pill",
      "tone": "info",
      "items": [
       "WHO-Stufen",
       "Koanalgetika"
      ]
     },
     {
      "t": "Bewegung",
      "icon": "PersonStanding",
      "tone": "info",
      "items": [
       "Physiotherapie",
       "Training"
      ]
     },
     {
      "t": "Psyche",
      "icon": "Brain",
      "tone": "info",
      "items": [
       "Entspannung",
       "Verhaltenstherapie"
      ]
     },
     {
      "t": "Pflege",
      "icon": "HeartHandshake",
      "tone": "ok",
      "items": [
       "Wärme oder Kälte",
       "TENS, Lagerung"
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "g8-akutschmerz-pca",
  "group": "krank",
  "area": "schmerz",
  "title": "Akuter und postoperativer Schmerz: Basisanalgesie, PCA und Katheter",
  "icon": "Syringe",
  "ar": "بعد العمليات نعطي مسكنات أساسية بانتظام ونضيف دواءً عند الحاجة. وهناك طرق متقدمة: مضخة يتحكم بها المريض (PCA) وقسطرة فوق الجافية أو قرب الأعصاب. وعلى التمريض المراقبة الدقيقة للألم والتنفس والحركة.",
  "blocks": [
   {
    "h": "Prinzipien der Akuttherapie",
    "li": [
     "Basisanalgesie nach Plan (zum Beispiel Paracetamol, NSAR oder Metamizol), dazu Bedarfsmedikation bei Schmerzspitzen.",
     "Bei stärkerem Schmerz zusätzlich Opioide, oft i.v. oder s.c. nach Anordnung.",
     "Ziel: Der Patient kann tief atmen, husten und früh mobilisiert werden. Das senkt Pneumonie- und Thromboserisiko.",
     "Intramuskuläre Spritzen sind schmerzhaft und unsicher aufgenommen und gelten als überholt."
    ]
   },
   {
    "h": "PCA: patientenkontrollierte Analgesie",
    "li": [
     "Der Patient löst per Knopfdruck eine kleine Dosis (Bolus) aus einer Pumpe aus, meist ein Opioid i.v. oder s.c.",
     "Sicherheit: Sperrzeit zwischen zwei Boli und Höchstmenge pro Stunde verhindern eine Überdosierung. Ein schläfriger Patient drückt nicht mehr.",
     "Nur der Patient darf drücken, nicht Angehörige oder Pflegende (Gefahr der Überdosierung).",
     "Voraussetzung: Der Patient versteht das Prinzip und kann den Knopf bedienen. Vor der OP erklären und üben.",
     "Überwachen: Schmerz, Sedierungsgrad, Atemfrequenz, Sauerstoffsättigung, Übelkeit, Pumpenfunktion und Zugang."
    ]
   },
   {
    "h": "Periduralkatheter (PDK) und Regionalverfahren",
    "li": [
     "Beim PDK läuft ein Lokalanästhetikum, oft mit einem Opioid, in den Raum neben dem Rückenmark. So ist der Schmerz ausgeschaltet, der Patient bleibt wach.",
     "Kontrollieren: Sensibilität und Kraft der Beine, Blutdruck, Harnverhalt, Schmerzniveau, Kathetereintrittsstelle (Rötung, Nässe), Verbandslage und Kathetermarkierung.",
     "Notfallzeichen: zunehmender Rückenschmerz, neue Schwäche oder Taubheit der Beine, Blasen- oder Darmstörung. Sofort Arzt informieren (Verdacht auf Hämatom oder Abszess).",
     "Gerinnungshemmer und Katheterentfernung zeitlich abstimmen, nach Anordnung.",
     "Periphere Nervenkatheter (zum Beispiel am Bein oder Arm) machen das Glied taub. Sturzgefahr und Druckstellen beachten, Arm oder Bein schützen."
    ]
   },
   {
    "h": "Pflegeaufgaben",
    "li": [
     "Schmerz in Ruhe und bei Bewegung erfassen, vor Mobilisation und Verbandwechsel rechtzeitig medikamentös vorbereiten.",
     "Nebenwirkungen erkennen: Übelkeit, Verstopfung, Sedierung, Atemdepression, Juckreiz.",
     "Wirkung dokumentieren, Arzt bei unzureichender Linderung informieren."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "PCA-Prinzip",
    "steps": [
     {
      "t": "Schmerz",
      "s": "Patient spürt Schmerz",
      "icon": "Frown",
      "tone": "warn"
     },
     {
      "t": "Knopfdruck",
      "s": "Nur der Patient drückt",
      "icon": "Hand",
      "tone": "info"
     },
     {
      "t": "Pumpe",
      "s": "Prüft die Sperrzeit",
      "icon": "Gauge",
      "tone": "info"
     },
     {
      "t": "Bolus",
      "s": "Kleine Dosis ins Blut",
      "icon": "Syringe",
      "tone": "ok"
     }
    ],
    "note": "Zu viel Opioid macht schläfrig, dann drückt der Patient nicht mehr."
   }
  ]
 },
 {
  "id": "g8-chronischer-schmerz",
  "group": "krank",
  "area": "schmerz",
  "title": "Chronischer Schmerz: Chronifizierung, Schmerzgedächtnis und Therapieziele",
  "icon": "Hourglass",
  "ar": "الألم المزمن لم يعد إنذاراً بل مرضاً بحد ذاته، ويتأثر بالجانب النفسي والاجتماعي. يتكوّن عندما يتعلم الجهاز العصبي الألم (ذاكرة الألم). علاجه متعدد الأوجه وهدفه تحسين الأداء اليومي لا فقط إزالة الألم.",
  "blocks": [
   {
    "h": "Akut oder chronisch?",
    "li": [
     "Akut: klare Ursache, Warnfunktion, klingt mit der Heilung ab, Behandlung der Ursache und Medikamente.",
     "Chronisch: besteht über die erwartete Heilungszeit hinaus, oft länger als drei bis sechs Monate, keine klare Warnfunktion mehr.",
     "Chronischer Schmerz gilt als eigenständige Erkrankung und wird nach dem biopsychosozialen Modell verstanden."
    ]
   },
   {
    "h": "Wie entsteht die Chronifizierung?",
    "li": [
     "Dauerreiz macht Nerven im Rückenmark und Gehirn empfindlicher (Sensibilisierung). Schmerzbahnen lernen den Schmerz, ein sogenanntes Schmerzgedächtnis entsteht.",
     "Dann kann Schmerz auch ohne neuen Gewebeschaden bestehen oder schon bei leichten Reizen auftreten.",
     "Risikofaktoren: unzureichende Schmerztherapie, Angst, Depression, Katastrophisieren, Schonhaltung und Vermeidung von Bewegung, Stress, Konflikte im Beruf oder in der Familie, soziale Isolation.",
     "Schmerz, Angst, Rückzug und Schlafmangel verstärken sich gegenseitig (Teufelskreis)."
    ]
   },
   {
    "h": "Komorbidität und Folgen",
    "li": [
     "Häufig begleitet von Depression, Angststörung und Schlafstörung.",
     "Folgen: weniger Bewegung, Verlust von Kraft, Rückzug aus Familie und Beruf, Medikamentenübergebrauch.",
     "Wichtig: Die Seele ist nicht die alleinige Ursache. Patienten nicht als eingebildet abstempeln."
    ]
   },
   {
    "h": "Therapie und Ziele",
    "li": [
     "Multimodal: Medikamente, Bewegung und Training, Psychotherapie, Entspannung, Patientenschulung.",
     "Realistische Ziele vereinbaren, zum Beispiel wieder spazieren gehen, nicht nur Schmerzfreiheit. Unrealistische Heilungserwartungen führen oft zu Frust.",
     "Aktivierung statt Schonung, Pausen einteilen (Pacing), Schlaf und Tagesstruktur.",
     "Opioide bei nicht tumorbedingtem chronischem Schmerz zurückhaltend und zeitlich begrenzt einsetzen, mit Zielkontrolle."
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Den Patienten ernst nehmen, zuhören, Schmerz nicht in Frage stellen.",
     "Schmerztagebuch anleiten, Medikamenteneinnahme nach Plan sichern, Bewegung fördern, Erfolge sichtbar machen.",
     "Auf Stimmung, Schlaf und Rückzug achten und Hilfe vermitteln."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "cycle",
    "title": "Teufelskreis des chronischen Schmerzes",
    "steps": [
     {
      "t": "Schmerz",
      "s": "Dauerreiz",
      "icon": "Zap",
      "tone": "bad"
     },
     {
      "t": "Angst und Schonung",
      "s": "Weniger Bewegung",
      "icon": "Frown",
      "tone": "warn"
     },
     {
      "t": "Schwäche und Schlafmangel",
      "s": "Mehr Empfindlichkeit",
      "icon": "Moon",
      "tone": "warn"
     },
     {
      "t": "Stimmung sinkt",
      "s": "Rückzug, Depression",
      "icon": "Cloud",
      "tone": "bad"
     }
    ],
    "note": "Ausweg: Aktivierung, Entspannung, Teamtherapie."
   },
   {
    "kind": "compare",
    "title": "Akut gegen chronisch",
    "cols": [
     {
      "t": "Akut",
      "items": [
       "Warnfunktion",
       "Ursache behandeln",
       "Klingt ab"
      ],
      "icon": "Flame",
      "tone": "warn"
     },
     {
      "t": "Chronisch",
      "items": [
       "Eigenes Krankheitsbild",
       "Multimodale Therapie",
       "Ziel: Funktion"
      ],
      "icon": "Hourglass",
      "tone": "bad"
     }
    ]
   }
  ]
 },
 {
  "id": "g8-tumorschmerz-palliativ",
  "group": "krank",
  "area": "schmerz",
  "title": "Tumorschmerz und Symptomkontrolle in der Palliativpflege",
  "icon": "Feather",
  "ar": "ألم السرطان شائع ويمكن تخفيفه بشكل كبير بأدوية منتظمة. الألم هنا له أبعاد جسدية ونفسية واجتماعية وروحية (الألم الكلي). وفي مرحلة الاحتضار نركز على الراحة وتخفيف الأعراض ودعم الأقارب.",
  "blocks": [
   {
    "h": "Ursachen von Tumorschmerz",
    "li": [
     "Der Tumor selbst: Gewebeinfiltration, Knochenmetastasen, Druck auf Nerven, Organkapseldehnung.",
     "Folgen der Behandlung: Operation, Chemotherapie (Nervenschmerz), Bestrahlung.",
     "Begleitfolgen: Liegen, Wunden, Verstopfung, Muskelverspannung."
    ]
   },
   {
    "h": "Total Pain: Schmerz mit vier Dimensionen",
    "li": [
     "Körperlich, seelisch, sozial und spirituell. Angst, Trauer, Einsamkeit, Sinnfragen und Sorgen um Angehörige verstärken den Schmerz.",
     "Behandlung betrifft darum alle Dimensionen: Medikamente, Gespräch, Seelsorge, Sozialdienst, Nähe."
    ]
   },
   {
    "h": "Therapie",
    "li": [
     "WHO-Stufenschema mit Opioiden großzügig und rechtzeitig nutzen, Dauergabe nach der Uhr plus schnell wirksames Mittel für Durchbruchschmerz.",
     "Knochenschmerz: NSAR, Bisphosphonate, Bestrahlung. Nervenschmerz: Antikonvulsiva oder Antidepressiva. Schwellung: Kortison.",
     "Wenn Schlucken nicht mehr geht: Gabe subkutan, über Pflaster oder Pumpe nach Anordnung.",
     "Verstopfung, Übelkeit, Mundtrockenheit und Müdigkeit aktiv vorbeugen und behandeln."
    ]
   },
   {
    "h": "Symptome am Lebensende und Sterbephase",
    "li": [
     "Atemnot: Oberkörper hoch, frische Luft oder Ventilator, ruhige Begleitung, Opioid nach Anordnung.",
     "Rasselatmung durch Sekret im Rachen: Seitenlage, Kopf erhöht, Anticholinergikum nach Anordnung, Angehörige beruhigen, dass es meist nicht quält.",
     "Unruhe und Angst: Ursache suchen (Schmerz, voller Darm oder Harnverhalt), ruhige Umgebung, Medikamente nach Anordnung.",
     "Mundpflege: Befeuchten, Lippenpflege, da kaum noch getrunken wird.",
     "Essen und Trinken nicht erzwingen. Bedürfnis des Sterbenden entscheidet.",
     "Angehörige begleiten, Raum für Abschied, eigene Gefühle und Grenzen der Pflegenden ernst nehmen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Total Pain: vier Dimensionen",
    "items": [
     {
      "t": "Körperlich",
      "s": "Tumor, Knochen, Nerven",
      "icon": "Bone",
      "tone": "bad"
     },
     {
      "t": "Seelisch",
      "s": "Angst, Trauer",
      "icon": "Brain",
      "tone": "warn"
     },
     {
      "t": "Sozial",
      "s": "Familie, Einsamkeit, Sorgen",
      "icon": "Users",
      "tone": "info"
     },
     {
      "t": "Spirituell",
      "s": "Sinn, Hoffnung",
      "icon": "Sparkles",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g8-schmerz-alter-demenz",
  "group": "krank",
  "area": "schmerz",
  "title": "Schmerz im Alter und bei Demenz: BESD und Beobachtung",
  "icon": "UserRound",
  "ar": "كبار السن يتألمون بكثرة لكنهم يشتكون أقل، والأدوية تؤثر فيهم بشكل مختلف. أما مرضى الخرف المتقدم فلا يستطيعون وصف ألمهم، فنقيّمه بمقاييس ملاحظة مثل BESD، وقد تعني التصرفات المزعجة أنهم يتألمون.",
  "blocks": [
   {
    "h": "Besonderheiten im Alter",
    "li": [
     "Viele Erkrankungen gleichzeitig (Arthrose, Osteoporose, Neuropathie) und viele Medikamente erhöhen Schmerz und Wechselwirkungen.",
     "Ältere Menschen klagen oft weniger, aus Zurückhaltung, Angst vor Abhängigkeit oder weil sie Schmerz als normal sehen.",
     "Seh-, Hör- und Denkprobleme erschweren die Erfassung. Einfache Skala und mehr Zeit nutzen.",
     "Leber und Niere arbeiten langsamer: niedrig beginnen, langsam steigern (start low, go slow).",
     "NSAR eher vermeiden (Magen, Niere, Herz). Paracetamol und Metamizol bevorzugen. Vorsicht mit Tramadol, Benzodiazepinen und Mitteln der PRISCUS-Liste wegen Verwirrtheit und Sturz."
    ]
   },
   {
    "h": "Schmerz bei Demenz",
    "li": [
     "Bei leichter Demenz kann der Patient oft noch selbst Auskunft geben. Einfache Fragen, VRS oder NRS ausprobieren.",
     "Bei fortgeschrittener Demenz erfolgt die Fremdbeobachtung mit einem Instrument, zum Beispiel BESD, BISAD (deutsche Version der ECPA) oder Doloplus-2.",
     "Schmerzzeichen: Stöhnen, Rufen, Grimassieren, Schonhaltung, Unruhe, Abwehr bei Pflege, Appetitverlust, Rückzug, aggressives Verhalten.",
     "Herausfordernde Verhaltensweisen immer auch als möglichen Schmerz prüfen, bevor man beruhigende Medikamente einsetzt."
    ]
   },
   {
    "h": "BESD: Beurteilung von Schmerzen bei Demenz",
    "li": [
     "Fünf Beobachtungsbereiche: Atmung, negative Lautäußerung, Gesichtsausdruck, Körpersprache, Reaktion auf Trost.",
     "Je Bereich 0 bis 2 Punkte, es zählt der höchste Wert pro Bereich. Höchstwert gesamt 10.",
     "Etwa 2 Minuten beobachten und dabei die Situation notieren (in Ruhe, beim Waschen, beim Gehen, nach Mobilisation).",
     "Ein fester Grenzwert ist nicht sicher belegt. Auch 0 Punkte schließen Schmerz nicht sicher aus. Wiederholte Beobachtung vor und nach Maßnahmen zeigt den Verlauf."
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Regelmäßige Schmerzbeobachtung, besonders vor Pflegehandlungen und bei Verhaltensänderung.",
     "Bezugspersonen und Angehörige fragen: Sie kennen das übliche Verhalten am besten.",
     "Zeit geben, ruhig, mit Berührung und Namen ansprechen. Nichtmedikamentöse Hilfe wie Wärme, Lagerung, Bewegung, Musik.",
     "Probeweise Schmerzbehandlung nach Rücksprache mit dem Arzt und Wirkung beobachten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "BESD: fünf Beobachtungsbereiche",
    "items": [
     {
      "t": "Atmung",
      "s": "Hastig, angestrengt",
      "icon": "Wind",
      "tone": "info"
     },
     {
      "t": "Lautäußerung",
      "s": "Stöhnen, Rufen",
      "icon": "Megaphone",
      "tone": "warn"
     },
     {
      "t": "Gesicht",
      "s": "Grimasse, Angst",
      "icon": "Frown",
      "tone": "warn"
     },
     {
      "t": "Körpersprache",
      "s": "Anspannung, Abwehr",
      "icon": "Hand",
      "tone": "warn"
     },
     {
      "t": "Trost",
      "s": "Lässt sich nicht beruhigen",
      "icon": "HeartHandshake",
      "tone": "bad"
     }
    ],
    "note": "Je 0 bis 2 Punkte, Summe höchstens 10."
   }
  ]
 },
 {
  "id": "g8-schmerz-kinder",
  "group": "krank",
  "area": "schmerz",
  "title": "Schmerz bei Kindern: Skalen, Maßnahmen und Medikamente",
  "icon": "Baby",
  "ar": "الأطفال، حتى الخدّج، يشعرون بالألم، لكنهم لا يستطيعون التعبير عنه دائماً. نختار طريقة التقييم حسب العمر: ملاحظة سلوك الرضع، ووجوه الألم للصغار، وأرقام للأكبر. ونستخدم الدعم غير الدوائي مع أدوية تُحسب بالوزن.",
  "blocks": [
   {
    "h": "Schmerzerfassung nach Alter",
    "li": [
     "Frühgeborene und Neugeborene: Fremdbeobachtung, zum Beispiel BPSN (Berner Schmerzscore für Neugeborene).",
     "Säuglinge und Kleinkinder: Verhaltensskalen wie KUSS (Kindliche Unbehagens- und Schmerzskala) oder FLACC (Face, Legs, Activity, Cry, Consolability).",
     "Ab etwa 4 bis 5 Jahren: Selbstauskunft mit Gesichterskala (zum Beispiel Faces Pain Scale-Revised).",
     "Ab etwa dem Schulalter: numerische Skala 0 bis 10, wenn das Kind Zahlen sicher versteht.",
     "Immer auch die Eltern fragen, sie kennen die Zeichen ihres Kindes."
    ]
   },
   {
    "h": "FLACC im Überblick",
    "li": [
     "Fünf Bereiche (Gesicht, Beine, Aktivität, Weinen, Trostbarkeit), je 0 bis 2 Punkte, Summe 0 bis 10.",
     "Gedacht für Kinder, die sich nicht selbst äußern können, zum Beispiel Kleinkinder oder nach einer Operation."
    ]
   },
   {
    "h": "Maßnahmen ohne Medikamente",
    "li": [
     "Eltern dabei lassen, Körperkontakt, Känguruhen, Pucken, Stillen oder Saugen.",
     "Bei Neugeborenen vor kleinen Eingriffen Saccharoselösung nach Anordnung.",
     "Kindgerecht erklären, Ablenkung (Spiel, Geschichte, Musik, Blasen), Mitbestimmung geben, Ehrlichkeit.",
     "Betäubende Creme oder Pflaster vor Blutentnahme oder Venenpunktion nach Anordnung und mit Einwirkzeit."
    ]
   },
   {
    "h": "Medikamente und Vorsicht",
    "li": [
     "Dosierung immer nach Körpergewicht und Alter, ärztliche Anordnung und Fachinformation beachten.",
     "Paracetamol und Ibuprofen sind häufige Mittel bei leichtem bis mittlerem Schmerz. Zäpfchen, Saft oder Tropfen kindgerecht geben.",
     "Acetylsalicylsäure (ASS) bei Kindern mit Virusinfekt vermeiden (Gefahr Reye-Syndrom).",
     "Opioide in kinderärztlich angepasster Dosis, engmaschige Überwachung der Atmung. Das Fentanylpflaster ist für Kinder nur in der kleinsten Stärke zugelassen.",
     "Schmerzen nicht aus Angst vor Nebenwirkungen unbehandelt lassen. Kinder haben Anspruch auf Schmerzlinderung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Welche Skala für welches Alter?",
    "head": [
     "Alter",
     "Instrument",
     "Art"
    ],
    "rows": [
     [
      "Früh- und Neugeborene",
      "BPSN",
      "Beobachtung"
     ],
     [
      "Säugling, Kleinkind",
      "KUSS, FLACC",
      "Beobachtung"
     ],
     [
      "ab etwa 4 bis 5 Jahren",
      "Gesichterskala",
      "Selbstauskunft"
     ],
     [
      "Schulalter",
      "NRS 0 bis 10",
      "Selbstauskunft"
     ]
    ]
   }
  ]
 },
 {
  "id": "g8-phantom-stumpf",
  "group": "krank",
  "area": "schmerz",
  "title": "Phantomschmerz und Stumpfschmerz nach Amputation",
  "icon": "Footprints",
  "ar": "بعد البتر قد يشعر المريض بالطرف المفقود (إحساس وهمي) أو يتألم فيه (ألم وهمي)، وقد يتألم الجذع نفسه. يحتاج ذلك لتسكين جيد قبل العملية وبعدها، ولعلاجات خاصة مثل العلاج بالمرآة، ولشرح يطمئن المريض أنه أمر معروف.",
  "blocks": [
   {
    "h": "Begriffe",
    "li": [
     "Phantomgefühl: Der fehlende Körperteil wird noch gespürt (Kribbeln, Druck, Lage). Es ist nicht schmerzhaft und sehr häufig.",
     "Phantomschmerz: Schmerz im nicht mehr vorhandenen Körperteil, oft brennend, stechend, einschießend oder krampfartig.",
     "Stumpfschmerz: Schmerz im verbliebenen Stumpf, zum Beispiel durch Narbe, Nervenknoten (Neurom), Durchblutungsstörung, Infektion oder schlecht sitzende Prothese.",
     "Zusammen spricht man vom Postamputationssyndrom."
    ]
   },
   {
    "h": "Entstehung und Risiko",
    "li": [
     "Nach Wegfall der Nervenbahnen ordnet das Gehirn die Körperkarte neu. Falsche Signale werden als Schmerz erlebt (Deafferenzierung, zentrale Umbauprozesse).",
     "Risiko steigt bei starken Schmerzen vor der Amputation, unzureichender Schmerztherapie rund um die Operation, Angst und Depression."
    ]
   },
   {
    "h": "Vorbeugung und Therapie",
    "li": [
     "Gute Schmerztherapie vor und nach der Operation, oft mit Regionalverfahren oder Katheter, senkt das Risiko.",
     "Medikamente: Antikonvulsiva (zum Beispiel Gabapentin) und Antidepressiva, bei Bedarf Opioide.",
     "Spiegeltherapie: Das gesunde Glied wird im Spiegel betrachtet, sodass das Gehirn das fehlende Glied bewegt sieht. Das kann Phantomschmerz lindern.",
     "Weitere Hilfen: TENS am Stumpf oder an der Gegenseite, Prothesentraining, Desensibilisierung des Stumpfs durch sanftes Streichen, Entspannung.",
     "Stumpfschmerz: Ursache beseitigen (Prothesenanpassung, Wundbehandlung, Neurom)."
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Phantomgefühle und Phantomschmerz erklären: Sie sind bekannt und ein Zeichen der Nervenanpassung, nicht von Einbildung.",
     "Stumpf beobachten: Wunde, Rötung, Schwellung, Druckstellen. Verband und Kompression nach Anordnung, Hautpflege und Stumpfhygiene.",
     "Kontrakturen vorbeugen: Gelenke gestreckt lagern, bei Unterschenkelstumpf das Knie nicht dauerhaft gebeugt, kein Kissen unter den Stumpf legen.",
     "Schmerz regelmäßig erfragen, psychische Verarbeitung begleiten, Selbsthilfe und Beratung vermitteln."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Drei Begriffe nach der Amputation",
    "cols": [
     {
      "t": "Phantomgefühl",
      "items": [
       "Glied wird gespürt",
       "Nicht schmerzhaft",
       "Sehr häufig"
      ],
      "icon": "Sparkles",
      "tone": "ok"
     },
     {
      "t": "Phantomschmerz",
      "items": [
       "Schmerz im fehlenden Glied",
       "Brennend, einschießend",
       "Koanalgetika, Spiegeltherapie"
      ],
      "icon": "Zap",
      "tone": "bad"
     },
     {
      "t": "Stumpfschmerz",
      "items": [
       "Schmerz im Stumpf",
       "Narbe, Neurom, Prothese",
       "Ursache beheben"
      ],
      "icon": "Footprints",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g8-zoster-fibromyalgie",
  "group": "krank",
  "area": "schmerz",
  "title": "Herpes zoster, Postzosterneuralgie und Fibromyalgie",
  "icon": "Flame",
  "ar": "الحزام الناري سببه تنشّط فيروس الحُماق الكامن في العقدة العصبية، فيظهر طفح مؤلم على جهة واحدة. قد يبقى الألم بعد الشفاء (ألم ما بعد الهربس). أما الألم العضلي الليفي فهو ألم منتشر مزمن مع تعب واضطراب نوم.",
  "blocks": [
   {
    "h": "Herpes zoster (Gürtelrose)",
    "li": [
     "Das Varizella-Zoster-Virus bleibt nach den Windpocken in Nervenknoten (Spinalganglien) und kann später wieder aktiv werden, besonders bei Alter, Stress oder Abwehrschwäche.",
     "Zeichen: zuerst Brennen, Jucken oder Schmerz, nach Tagen einseitiger gürtelförmiger Ausschlag mit Bläschen entlang eines Hautbereichs (Dermatom), oft am Rumpf.",
     "Gefährlich ist der Befall von Auge oder Ohr (Zoster ophthalmicus, oticus).",
     "Therapie: möglichst früh (innerhalb von etwa 72 Stunden) Virostatikum nach Anordnung, ausreichend Schmerztherapie, Hautpflege.",
     "Die Bläschen sind ansteckend für Menschen ohne Immunität gegen Windpocken, zum Beispiel Schwangere, Neugeborene und Abwehrgeschwächte. Bläschen abdecken, Händehygiene, Kontakt vermeiden."
    ]
   },
   {
    "h": "Postzosterneuralgie und Impfung",
    "li": [
     "Postzosterneuralgie: Der Nervenschmerz bleibt nach Abheilen des Ausschlags monatelang bestehen, brennend und einschießend, oft mit Berührungsempfindlichkeit. Risiko steigt mit dem Alter.",
     "Therapie: Antikonvulsiva oder Antidepressiva, Lidocainpflaster, bei Bedarf Opioide.",
     "Vorbeugung: Impfung mit dem Totimpfstoff, von der STIKO ab 60 Jahren und bei Grunderkrankungen schon ab 50 Jahren empfohlen.",
     "Beratung zur Impfung ist eine Aufgabe der Pflege."
    ]
   },
   {
    "h": "Fibromyalgie",
    "li": [
     "Chronische, ausgedehnte Schmerzen in Muskeln und Gelenken, dazu Müdigkeit, Schlafstörung, Steifigkeit und oft Konzentrationsprobleme, Stimmungstief.",
     "Ursache nicht vollständig geklärt. Es gibt eine veränderte Schmerzverarbeitung im Nervensystem. Frauen sind häufiger betroffen.",
     "Therapie: Aufklärung, regelmäßiges, sanftes Ausdauertraining, Wärme, Entspannung, psychologische Hilfe, bei Bedarf bestimmte Antidepressiva oder Antikonvulsiva.",
     "Opioide sind in der Regel nicht empfohlen.",
     "Pflege: Beschwerden ernst nehmen, Bewegung und Tagesstruktur fördern, Schlaf beachten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Vom Windpockenvirus zur Gürtelrose",
    "steps": [
     {
      "t": "Windpocken",
      "s": "Erste Infektion",
      "icon": "Bug",
      "tone": "info"
     },
     {
      "t": "Virus schläft",
      "s": "Im Nervenknoten",
      "icon": "Moon",
      "tone": "info"
     },
     {
      "t": "Reaktivierung",
      "s": "Alter, Stress, Abwehrschwäche",
      "icon": "Zap",
      "tone": "warn"
     },
     {
      "t": "Gürtelrose",
      "s": "Einseitiger Ausschlag und Schmerz",
      "icon": "Flame",
      "tone": "bad"
     }
    ],
    "note": "Mögliche Folge: Postzosterneuralgie. Vorbeugung: Impfung."
   }
  ]
 },
 {
  "id": "g8-kopfschmerz",
  "group": "krank",
  "area": "nerven",
  "title": "Kopfschmerzen: Migräne, Spannungskopfschmerz, Cluster und Co.",
  "icon": "Brain",
  "ar": "معظم الصداع أولي (بلا مرض آخر) مثل الشقيقة والتوتري والعنقودي، لكن بعضه علامة خطر. نميّز نوع الصداع بالأعراض، ونتعرف على علامات الخطر التي تستدعي طبيباً فوراً.",
  "blocks": [
   {
    "h": "Migräne",
    "li": [
     "Anfallsartig, meist einseitig, pulsierend oder pochend, mäßig bis stark, dauert etwa 4 bis 72 Stunden.",
     "Begleitend Übelkeit, Erbrechen, Licht- und Lärmempfindlichkeit. Körperliche Aktivität verschlimmert.",
     "Bei einem Teil der Patienten geht eine Aura voraus (Flimmern, Sehstörung, Kribbeln).",
     "Akut: Reizabschirmung (dunkler ruhiger Raum), Antiemetikum, NSAR oder Paracetamol, bei schwerem Anfall Triptane nach Anordnung. Vorbeugung durch Auslöser meiden und Prophylaxe-Medikamente."
    ]
   },
   {
    "h": "Spannungskopfschmerz und Cluster",
    "li": [
     "Spannungstyp: beidseitig, drückend oder ziehend wie ein Band, leicht bis mäßig, keine Übelkeit, Bewegung bessert. Häufigste Form. Hilfen: Entspannung, Bewegung, Wärme, Paracetamol oder NSAR kurzzeitig.",
     "Clusterkopfschmerz: streng einseitig um das Auge, extrem heftig, kurze Anfälle (etwa 15 bis 180 Minuten), tränendes Auge, laufende Nase, Unruhe. Tritt in Serien auf, oft nachts.",
     "Cluster akut: Sauerstoff in hoher Menge über Maske nach Anordnung, Triptan als Spritze."
    ]
   },
   {
    "h": "Weitere wichtige Formen",
    "li": [
     "Medikamentenübergebrauch-Kopfschmerz: entsteht, wenn Schmerz- oder Migränemittel zu oft genommen werden (etwa an mehr als 10 bis 15 Tagen im Monat). Therapie: Entzug unter ärztlicher Begleitung.",
     "Postpunktioneller Kopfschmerz nach Lumbalpunktion oder Periduralanästhesie: im Sitzen und Stehen schlimmer, im Liegen besser. Flach lagern, viel trinken, Arzt informieren.",
     "Trigeminusneuralgie: blitzartige, einschießende Gesichtsschmerzen, oft durch Berührung, Kauen oder Zähneputzen ausgelöst. Therapie: Antikonvulsiva wie Carbamazepin."
    ]
   },
   {
    "h": "Warnzeichen: sofort ärztlich abklären",
    "li": [
     "Plötzlicher, nie erlebter Vernichtungskopfschmerz (Verdacht auf Subarachnoidalblutung).",
     "Kopfschmerz mit Fieber und Nackensteifigkeit (Verdacht auf Meningitis).",
     "Neue neurologische Ausfälle wie Lähmung, Sprachstörung, Sehstörung, Bewusstseinsstörung oder Krampfanfall.",
     "Kopfschmerz nach Sturz oder Kopfverletzung, besonders unter Blutverdünnern.",
     "Neuer Kopfschmerz im höheren Alter oder bei Tumor- oder Immunschwäche-Vorgeschichte."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Kopfschmerzformen im Vergleich",
    "head": [
     "Form",
     "Typisch",
     "Hilfe"
    ],
    "rows": [
     [
      "Migräne",
      "Einseitig, pochend, Übelkeit",
      "Dunkler Raum, Triptan"
     ],
     [
      "Spannungstyp",
      "Beidseitig, drückend",
      "Bewegung, Entspannung"
     ],
     [
      "Cluster",
      "Um das Auge, extrem",
      "Sauerstoff, Triptan"
     ],
     [
      "Trigeminusneuralgie",
      "Blitzartig im Gesicht",
      "Carbamazepin"
     ]
    ]
   }
  ]
 },
 {
  "id": "g8-rueckenschmerz",
  "group": "krank",
  "area": "bewegung",
  "title": "Rückenschmerzen: unspezifisch, spezifisch und Warnzeichen",
  "icon": "PersonStanding",
  "ar": "أغلب آلام الظهر غير نوعية بلا سبب خطير، وتتحسن بالحركة وليس بالراحة المطولة. لكن بعضها ناتج عن سبب محدد مثل الانزلاق الغضروفي أو الكسر، وبعض العلامات (علامات الخطر) تستدعي طبيباً فوراً.",
  "blocks": [
   {
    "h": "Nichtspezifischer Rückenschmerz",
    "li": [
     "Die große Mehrheit (rund 80 bis 85 Prozent): keine klare körperliche Ursache, oft Muskelverspannung und Überlastung, begleitet von Stress und Bewegungsmangel.",
     "Meist bessert er sich innerhalb von Wochen. Chronisch wird er, wenn Schonung, Angst und psychosoziale Belastungen hinzukommen."
    ]
   },
   {
    "h": "Spezifischer Rückenschmerz",
    "li": [
     "Bandscheibenvorfall: Schmerz mit Ausstrahlung ins Bein (Ischias), Taubheit, Kribbeln, evtl. Schwäche.",
     "Spinalkanalstenose: Schmerz und Schwäche beim Gehen, besser im Sitzen oder bei vorgebeugter Haltung.",
     "Wirbelbruch bei Osteoporose oder Unfall, Tumor oder Metastasen, Entzündung oder Infektion (zum Beispiel Spondylodiszitis), entzündliche Erkrankung wie Morbus Bechterew."
    ]
   },
   {
    "h": "Warnzeichen (Red Flags)",
    "li": [
     "Lähmung, zunehmende Schwäche, Gefühlsstörung im Genital- und Gesäßbereich, Blasen- oder Mastdarmstörung: Notfall (Cauda-equina-Syndrom).",
     "Fieber, Gewichtsverlust, bekannte Krebserkrankung, nächtlicher Dauerschmerz, Schmerz nach Sturz oder Unfall.",
     "Ältere Menschen mit Osteoporose und plötzlichem Rückenschmerz an Wirbelbruch denken."
    ]
   },
   {
    "h": "Therapie und Prävention",
    "li": [
     "Aktiv bleiben statt Bettruhe, Wärme, Physiotherapie, Rückentraining.",
     "Kurzzeitig Schmerzmittel (Paracetamol, NSAR, Metamizol), bei starkem Muskelhartspann kurzzeitig Muskelrelaxans nach Anordnung.",
     "Psychosoziale Faktoren und Arbeitsplatz ansprechen, Stressabbau, Gewichtsreduktion.",
     "Pflege: rückenschonend arbeiten (Kinästhetik, Hilfsmittel, Hebehilfen, Teamarbeit), Patienten zu Bewegung und richtigem Heben anleiten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tree",
    "title": "Rückenschmerz einordnen",
    "root": {
     "t": "Rückenschmerz",
     "icon": "PersonStanding",
     "tone": "info"
    },
    "kids": [
     {
      "t": "Nichtspezifisch",
      "icon": "Hand",
      "tone": "ok",
      "items": [
       "Etwa 80 bis 85 Prozent",
       "Aktiv bleiben"
      ]
     },
     {
      "t": "Spezifisch",
      "icon": "Search",
      "tone": "warn",
      "items": [
       "Bandscheibenvorfall",
       "Wirbelbruch, Tumor"
      ]
     },
     {
      "t": "Red Flags",
      "icon": "Siren",
      "tone": "bad",
      "items": [
       "Lähmung, Blasenstörung",
       "Fieber, Tumor"
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "g8-expertenstandard-schmerz",
  "group": "krank",
  "area": "schmerz",
  "title": "Expertenstandard Schmerzmanagement in der Pflege",
  "icon": "ShieldCheck",
  "ar": "المعيار الخبير يحدد ما يجب على التمريض فعله مع كل مريض يعاني من ألم: التقييم، والتخطيط، وتنفيذ العلاج، والتثقيف، والمتابعة. هناك معيار للألم الحاد وآخر للألم المزمن.",
  "blocks": [
   {
    "h": "Worum geht es?",
    "li": [
     "Das DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege) hat Expertenstandards für das Schmerzmanagement bei akutem und bei chronischem Schmerz entwickelt.",
     "Ziel: Jeder Patient mit Schmerzen erhält ein Schmerzmanagement, das Schmerzen vermeidet, lindert oder auf ein Maß senkt, das der Patient akzeptiert.",
     "Die Pflegefachperson trägt die Verantwortung für Einschätzung, Durchführung, Überwachung und Beratung."
    ]
   },
   {
    "h": "Kernpunkte der Pflegeaufgaben",
    "li": [
     "Systematische Einschätzung bei Aufnahme und im Verlauf: Intensität, Lokalisation, Qualität, Verlauf, Auswirkung auf Alltag, Selbstmedikation.",
     "Geeignete Skala wählen, bei fehlender Selbstauskunft Beobachtungsskala.",
     "Medikamentöse Maßnahmen nach ärztlicher Anordnung durchführen und deren Wirkung und Nebenwirkung beobachten.",
     "Nicht-medikamentöse Maßnahmen individuell anbieten und mit der Wirkung vergleichen.",
     "Schmerzziele mit dem Patienten vereinbaren und regelmäßig überprüfen.",
     "Patienten und Angehörige informieren, schulen und beraten (Ursache, Medikamente, Selbstmanagement).",
     "Alles in der Pflegedokumentation festhalten und im Team abstimmen."
    ]
   },
   {
    "h": "Akuter und chronischer Schmerz",
    "li": [
     "Akut: schnelle Linderung, Zielwert Ruhe unter 3 und Belastung unter 5 auf der NRS, Vorbeugung vor schmerzhaften Maßnahmen.",
     "Chronisch: gemeinsame Ziele wie Alltagsfunktion und Lebensqualität, Selbstmanagement, Team- und Verlaufsplanung."
    ]
   },
   {
    "h": "Beispiel für Prüfungsfragen",
    "li": [
     "Wie erfasst die Pflegefachperson Schmerz bei einem verwirrten Bewohner? Mit einer Beobachtungsskala wie BESD und Angehörigenbefragung.",
     "Was gehört in die Schmerzdokumentation? Zeit, Ort, Stärke, Maßnahme, Wirkung und Nebenwirkung.",
     "Wann wird Schmerz erneut gemessen? Nach der Maßnahme zur erwarteten Wirkzeit und regelmäßig im Verlauf."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "cycle",
    "title": "Schmerzmanagement im Pflegeprozess",
    "steps": [
     {
      "t": "Erfassen",
      "s": "Skala und Anamnese",
      "icon": "ClipboardList",
      "tone": "info"
     },
     {
      "t": "Planen",
      "s": "Ziel mit dem Patienten",
      "icon": "Target",
      "tone": "info"
     },
     {
      "t": "Durchführen",
      "s": "Medikamente und Pflege",
      "icon": "Pill",
      "tone": "ok"
     },
     {
      "t": "Beraten",
      "s": "Schulung der Beteiligten",
      "icon": "MessageCircle",
      "tone": "ok"
     },
     {
      "t": "Überprüfen",
      "s": "Wirkung messen, dokumentieren",
      "icon": "RefreshCw",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g8-kind-atemnot",
  "group": "krank",
  "area": "atmung",
  "title": "Atemnot beim Kind: Pseudokrupp, Epiglottitis und Fremdkörper",
  "icon": "Wind",
  "ar": "ضيق النفس عند الأطفال حالة طارئة لأن مجرى الهواء ضيق. نفرّق بين الخانوق الفيروسي (سعال نباحي ليلي) والتهاب لسان المزمار (حمى عالية ولعاب سائل وخطر شديد) واستنشاق جسم غريب (اختناق مفاجئ أثناء الأكل أو اللعب).",
  "blocks": [
   {
    "h": "Pseudokrupp (viraler Krupp)",
    "li": [
     "Meist Kleinkinder (etwa 6 Monate bis 3 Jahre), oft nachts nach einem Infekt. Ursache sind meist Viren, die Kehlkopf und Luftröhre anschwellen lassen.",
     "Zeichen: bellender Husten, Heiserkeit, pfeifendes Einatmen (inspiratorischer Stridor), bei schwerer Form Einziehungen und Atemnot.",
     "Behandlung: Ruhe bewahren, Kind beruhigen und in aufrechter Position bei der Bezugsperson lassen, kühle frische Luft, Kortison (zum Beispiel als Zäpfchen oder Saft) und bei Bedarf Adrenalininhalation nach Anordnung.",
     "Aufregung und Weinen verschlimmern die Atemnot. Bei Ruhe-Stridor, Blauwerden oder Erschöpfung sofort Notruf."
    ]
   },
   {
    "h": "Epiglottitis (Kehldeckelentzündung)",
    "li": [
     "Bakterielle Entzündung (häufig Haemophilus influenzae Typ b), durch die Impfung heute selten.",
     "Zeichen: plötzlich hohes Fieber, starke Schluckschmerzen, kloßige Sprache, Speichelfluss, ängstliches Kind sitzt vorgebeugt (Schnüffelstellung).",
     "Lebensgefahr durch plötzlichen Verschluss der Atemwege. Notfall: Notruf, Kind nicht hinlegen, nicht in den Rachen schauen (kein Spatel), nicht aufregen, Intubationsbereitschaft.",
     "Therapie im Krankenhaus: Atemwegssicherung, Antibiotika, Intensivüberwachung."
    ]
   },
   {
    "h": "Fremdkörperaspiration",
    "li": [
     "Häufig bei Kleinkindern beim Essen oder Spielen (Nüsse, Weintrauben, Würstchenstücke, Kleinteile).",
     "Zeichen: plötzlicher Husten, Würgen, Atemnot, Stridor, Blauwerden. Das Kind kann nicht sprechen oder weinen, wenn die Atemwege fast verschlossen sind.",
     "Effektiver Husten: Kind zum Husten ermutigen, nicht auf den Rücken schlagen, Notruf bereithalten.",
     "Ineffektiver Husten, Bewusstlosigkeit: Notruf, dann beim Säugling 5 Rückenschläge und 5 Brustkompressionen im Wechsel. Beim älteren Kind 5 Rückenschläge, dann Heimlich-Handgriff. Bei Bewusstlosigkeit Wiederbelebung.",
     "Vorbeugung: Nüsse und kleine harte Stücke erst spät geben, Kinder nur sitzend und unter Aufsicht essen lassen, Kleinteile fernhalten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Krupp, Epiglottitis, Fremdkörper",
    "head": [
     "Merkmal",
     "Pseudokrupp",
     "Epiglottitis",
     "Fremdkörper"
    ],
    "rows": [
     [
      "Beginn",
      "Nachts, nach Infekt",
      "Plötzlich, hohes Fieber",
      "Schlagartig beim Essen"
     ],
     [
      "Leitzeichen",
      "Bellender Husten, Stridor",
      "Speichelfluss, kloßige Sprache",
      "Husten, Würgen"
     ],
     [
      "Erste Hilfe",
      "Ruhe, kühle Luft",
      "Nicht hinlegen, Notruf",
      "Rückenschläge, Heimlich"
     ]
    ]
   }
  ]
 },
 {
  "id": "g8-kind-fieber-viral",
  "group": "krank",
  "area": "infektion",
  "title": "Fieber, Fieberkrampf und Kinderkrankheiten: Dreitagefieber, Hand-Fuß-Mund, Kawasaki",
  "icon": "Thermometer",
  "ar": "الحمى عند الأطفال شائعة وغالباً مرافقة للعدوى. التشنج الحموي مخيف لكنه عادة بسيط. نتعلم التصرف الصحيح أثناء النوبة، ونتعرف على الحمى الثلاثية ومرض اليد والقدم والفم ومتلازمة كاواساكي.",
  "blocks": [
   {
    "h": "Fieber beim Kind",
    "li": [
     "Fieber ist eine Abwehrreaktion. Wichtiger als die Zahl ist das Allgemeinbefinden des Kindes.",
     "Maßnahmen: Ruhe, Trinken, leichte Kleidung, Raumtemperatur angenehm. Wadenwickel nur, wenn Hände und Füße warm sind. Fiebersenker (Paracetamol, Ibuprofen) nach Gewicht, wenn das Kind leidet.",
     "Arzt bei Säuglingen unter drei Monaten mit Fieber, bei langer Dauer, Nackensteifigkeit, Atemnot, Trinkverweigerung oder Apathie."
    ]
   },
   {
    "h": "Fieberkrampf",
    "li": [
     "Meist bei Kindern von 6 Monaten bis 5 Jahren, vor allem beim raschen Fieberanstieg. Meist generalisierte Zuckungen, Bewusstlosigkeit, dauert meist unter 5 Minuten.",
     "Währenddessen: Ruhe bewahren, Zeit messen, Kind in Seitenlage auf weichen Untergrund, Gefahrenquellen entfernen, nichts in den Mund stecken, nicht festhalten.",
     "Notruf bei Krampf über 5 Minuten, bei erstem Anfall, Kind unter 6 Monaten, wiederholten Anfällen oder auffälligen Zeichen danach.",
     "Danach Kind beobachten, Fieber senken, Ursache klären lassen. Fieberkrämpfe können wiederkehren, sind aber meist harmlos. Eltern beruhigen und aufklären."
    ]
   },
   {
    "h": "Dreitagefieber und Hand-Fuß-Mund-Krankheit",
    "li": [
     "Dreitagefieber (Exanthema subitum): Viren (HHV-6) bei Kleinkindern, etwa drei Tage hohes Fieber, danach beim Fieberabfall feinfleckiger Ausschlag. Allgemeinzustand oft gut, Fieberkrampf möglich.",
     "Hand-Fuß-Mund-Krankheit: Coxsackie-Viren, Bläschen im Mund und an Händen und Füßen, Fieber, Schluckschmerz. Sehr ansteckend, Händehygiene, Kind zum Trinken motivieren."
    ]
   },
   {
    "h": "Kawasaki-Syndrom",
    "li": [
     "Entzündung der Blutgefäße bei kleinen Kindern, Ursache unklar.",
     "Zeichen: Fieber über 5 Tage, gerötete Augen, rote Lippen und Himbeerzunge, Ausschlag, geschwollene Halslymphknoten, geschwollene, gerötete Hände und Füße, später Hautschuppung.",
     "Gefahr: Aneurysmen der Herzkranzgefäße. Schnelle Behandlung im Krankenhaus mit Immunglobulinen und Acetylsalicylsäure nach Anordnung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Fieberkrampf: Was tun?",
    "steps": [
     {
      "t": "Ruhe bewahren",
      "s": "Zeit messen",
      "icon": "Timer",
      "tone": "info"
     },
     {
      "t": "Sichern",
      "s": "Seitenlage, nichts in den Mund",
      "icon": "ShieldCheck",
      "tone": "ok"
     },
     {
      "t": "Notruf",
      "s": "Über 5 Minuten oder erster Anfall",
      "icon": "Siren",
      "tone": "bad"
     },
     {
      "t": "Danach",
      "s": "Beobachten, Ursache klären",
      "icon": "Search",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g8-kind-bauch",
  "group": "krank",
  "area": "verdauung",
  "title": "Akuter Bauch beim Kind: Appendizitis, Invagination, Pylorusstenose",
  "icon": "Baby",
  "ar": "الطفل لا يصف ألم بطنه بدقة، لذلك نعتمد على الملاحظة. من أهم الأسباب الجراحية: التهاب الزائدة عند الأكبر سناً، والانغلاف المعوي عند الرضيع (نوبات بكاء وبراز كالهلام)، وتضيق البواب (قيء قذفي في الأسابيع الأولى).",
  "blocks": [
   {
    "h": "Appendizitis beim Kind",
    "li": [
     "Beginn mit Schmerzen um den Nabel, später rechter Unterbauch. Dazu Übelkeit, Erbrechen, Fieber, Appetitlosigkeit.",
     "Typisch: Loslassschmerz, Schmerz beim Hüpfen oder Husten, Schonhaltung mit angezogenen Beinen. Rektal gemessen höhere Temperatur als axillär.",
     "Gefahr: Durchbruch (Perforation) mit Bauchfellentzündung. Besonders bei kleinen Kindern, weil die Zeichen unklar sind.",
     "Therapie: Operation (Appendektomie). Pflege: nüchtern lassen, keine Abführmittel, keine Wärmeanwendung, Schmerztherapie nach Anordnung, Vorbereitung, nach der OP Wunde, Schmerz und Nahrungsaufbau beobachten, Eltern einbeziehen."
    ]
   },
   {
    "h": "Invagination",
    "li": [
     "Ein Darmabschnitt stülpt sich in den nächsten. Meist Säuglinge und Kleinkinder (etwa 5 bis 9 Monate).",
     "Zeichen: plötzliche, wellenartige Koliken mit Schreien und Anziehen der Beine, dazwischen blass und apathisch, Erbrechen, später blutig-schleimiger Stuhl wie Himbeergelee.",
     "Notfall. Diagnose per Ultraschall, Therapie durch Einlauf (Reposition) oder Operation. Nüchtern lassen, Infusion nach Anordnung."
    ]
   },
   {
    "h": "Pylorusstenose",
    "li": [
     "Der Magenausgang ist verdickt und eng. Betroffen sind meist Säuglinge in den ersten Lebenswochen (etwa 2 bis 8 Wochen), häufiger Jungen.",
     "Zeichen: schwallartiges Erbrechen nach jeder Mahlzeit (nicht gallig), Kind ist hungrig, Gewichtsstillstand oder -abnahme, Austrocknung, tastbare Verdickung im Oberbauch (Olive).",
     "Therapie: Operation (Pyloromyotomie) nach Ausgleich von Flüssigkeit und Elektrolyten. Danach Nahrungsaufbau schrittweise."
    ]
   },
   {
    "h": "Pflege bei Bauchschmerzen im Kindesalter",
    "li": [
     "Schmerz mit kindgerechter Skala erfassen, Mimik und Haltung beobachten, Eltern mit einbeziehen.",
     "Erbrechen, Stuhl (Farbe, Blut), Bauchumfang und Trinkmenge beobachten und dokumentieren.",
     "Bei Verdacht auf akuten Bauch nüchtern lassen und zügig ärztlich abklären."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Akuter Bauch beim Kind",
    "head": [
     "Krankheit",
     "Alter",
     "Leitzeichen"
    ],
    "rows": [
     [
      "Appendizitis",
      "Schulkind",
      "Schmerz rechts unten, Loslassschmerz"
     ],
     [
      "Invagination",
      "Säugling 5 bis 9 Monate",
      "Koliken, Himbeergelee-Stuhl"
     ],
     [
      "Pylorusstenose",
      "Säugling 2 bis 8 Wochen",
      "Schwallartiges Erbrechen"
     ]
    ]
   }
  ]
 },
 {
  "id": "g8-fruehgeborene",
  "group": "krank",
  "area": "atmung",
  "title": "Frühgeborene: Probleme, Pflege und Entwicklungsförderung",
  "icon": "Baby",
  "ar": "الخديج مولود قبل الأسبوع 37. أعضاؤه غير ناضجة خاصة الرئتان والدماغ ومنظم الحرارة. تقوم الرعاية على الدفء والمراقبة وتقليل الإجهاد ووضعية الكنغر وتغذية بحليب الأم ومشاركة الأهل، ثم تأهيلهم للعودة إلى المنزل.",
  "blocks": [
   {
    "h": "Definition",
    "li": [
     "Frühgeboren ist ein Kind, das vor der vollendeten 37. Schwangerschaftswoche geboren wird.",
     "Sehr früh unter 32 Wochen, extrem früh unter 28 Wochen. Geburtsgewicht unter 1500 g (sehr niedrig) oder unter 1000 g (extrem niedrig)."
    ]
   },
   {
    "h": "Typische Probleme",
    "li": [
     "Atemnotsyndrom durch Mangel an Surfactant (Stoff, der die Lungenbläschen offen hält). Therapie: Atemhilfe und Surfactant nach Anordnung. Spätfolge: bronchopulmonale Dysplasie.",
     "Apnoen und Bradykardien: Atempausen und langsamer Herzschlag, Monitorüberwachung, Stimulation.",
     "Wärmeverlust, Unterzuckerung, Gelbsucht (Ikterus), Infektionsgefahr.",
     "Hirnblutung, Nekrotisierende Enterokolitis (Darmentzündung), Frühgeborenenretinopathie (Augen) und Hörprobleme."
    ]
   },
   {
    "h": "Pflege auf der Neugeborenenstation",
    "li": [
     "Wärme: Inkubator oder Wärmebett, Temperatur und Luftfeuchte beachten.",
     "Überwachung von Herzfrequenz, Atmung, Sauerstoffsättigung, Temperatur, Blutzucker, Gewicht und Ausscheidung.",
     "Entwicklungsfördernde Pflege: wenig und gebündelte Eingriffe, Lärm und Licht dämpfen, Nestlagerung mit Begrenzung, Schlafphasen schützen, Schmerz vermeiden.",
     "Känguruhmethode (Haut-an-Haut-Kontakt) fördert Wärme, Atmung, Stillen und Bindung.",
     "Ernährung bevorzugt mit Muttermilch, zunächst über Magensonde, später Trinkversuche und Stillen. Hygiene streng.",
     "Eltern früh einbeziehen, zur Pflege anleiten und emotional begleiten."
    ]
   },
   {
    "h": "Entlassung und Zuhause",
    "li": [
     "Eltern gezielt anleiten: Atemüberwachung, Notfallzeichen, Sondennahrung, Medikamente, Hygiene, sicherer Schlaf in Rückenlage.",
     "Gegebenenfalls Heimmonitor, ambulante Kinderkrankenpflege, Frühförderung und Nachsorge.",
     "Impfungen nach dem tatsächlichen Lebensalter, nicht nach dem errechneten Termin. RSV-Schutz nach ärztlicher Empfehlung.",
     "Die Eltern entlasten: Pflegeüberleitung, Beratung, Selbsthilfe."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Frühgeborenenpflege: Schutz und Nähe",
    "cols": [
     {
      "t": "Schützen",
      "items": [
       "Wärme, Inkubator",
       "Monitorüberwachung",
       "Hygiene"
      ],
      "icon": "ShieldCheck",
      "tone": "info"
     },
     {
      "t": "Fördern",
      "items": [
       "Känguruhmethode",
       "Wenig Lärm und Licht",
       "Muttermilch"
      ],
      "icon": "Sprout",
      "tone": "ok"
     },
     {
      "t": "Begleiten",
      "items": [
       "Eltern anleiten",
       "Entlassung planen",
       "Nachsorge"
      ],
      "icon": "HeartHandshake",
      "tone": "ok"
     }
    ]
   }
  ]
 }
];
