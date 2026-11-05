/** Ergänzende Lektionen 9: Pflegeorganisation, Sozialgesetzbuch (SGB V, XI), Medizinischer Dienst, Rechtsgrundlagen, Krankenhausfinanzierung. */
import type { Lesson } from "./lessons";

export const GAPS9_LESSONS: Lesson[] = [
 {
  "id": "g9-pflegeorganisation",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Formen der Pflegeorganisation: Funktions-, Bereichs-, Gruppen-, Bezugspflege und Primary Nursing",
  "icon": "Users",
  "ar": "يحدد شكل تنظيم الرعاية كيف يتوزع المرضى والمهام على الممرضين. هناك أشكال تركز على المهمة (الرعاية الوظيفية) وأشكال تركز على المريض والعلاقة (التمريض المرجعي والتمريض الأولي). كلٌّ منها له مزايا وعيوب، وكثير من المؤسسات تستخدم مزيجاً.",
  "blocks": [
   {
    "h": "Funktionspflege",
    "li": [
     "Jede Pflegekraft übernimmt eine Aufgabe für alle Patienten, zum Beispiel eine Person macht alle Blutdruckmessungen, eine andere alle Verbandwechsel.",
     "Vorteile: effizient, klare Abläufe, geringe Einarbeitung, Fachkräfte gezielt einsetzbar.",
     "Nachteile: ganzheitliche Sicht fehlt, viele wechselnde Personen, wenig Beziehung, Informationsverlust, geringe Zufriedenheit."
    ]
   },
   {
    "h": "Bereichspflege und Zimmerpflege",
    "li": [
     "Eine Pflegekraft oder ein kleines Team betreut eine feste Anzahl von Zimmern oder einen Bereich der Station, meist im Schichtdienst von A bis Z.",
     "Zimmerpflege ist eine Form davon: Zuständigkeit pro Zimmer.",
     "Vorteile: weniger Personen am Patienten, kürzere Wege, bessere Übersicht über die Patienten des Bereichs.",
     "Nachteile: Zuständigkeit gilt nur für die Schicht, die Pflegeplanung kann bei Schichtwechsel abbrechen, hoher Abstimmungsbedarf."
    ]
   },
   {
    "h": "Gruppenpflege",
    "li": [
     "Ein festes Pflegeteam betreut eine feste Patientengruppe über die ganze Schicht. Das Team plant gemeinsam, die Aufgaben werden im Team verteilt.",
     "Vorteile: Teamgeist, gegenseitige Unterstützung, kontinuierliche Betreuung, flexible Aufgabenverteilung.",
     "Nachteile: Verantwortung kann verschwimmen, Absprachen kosten Zeit, Gefahr der Rollenüberschneidung."
    ]
   },
   {
    "h": "Bezugspflege (Bezugspflegesystem)",
    "li": [
     "Eine Pflegefachperson ist als Bezugsperson für einen Patienten oder Bewohner zuständig. Sie plant, steuert und evaluiert die Pflege und ist Ansprechpartner für den Patienten und die Angehörigen.",
     "Bei Abwesenheit übernimmt eine feste Vertretung (Zweitbezugsperson). Die Planung wird im Team abgestimmt.",
     "Vorteile: Beziehung und Vertrauen, ganzheitliche Sicht, bessere Pflegeplanung, höhere Zufriedenheit bei Patient und Team.",
     "Nachteile: braucht Fachkräfte und Zeit, Konflikte bei fehlender Chemie, Abhängigkeit von der Bezugsperson."
    ]
   },
   {
    "h": "Primary Nursing",
    "li": [
     "Die Primary Nurse trägt die 24-Stunden-Verantwortung für die Pflegeplanung eines Patienten vom Aufnahme- bis zum Entlasstag, auch wenn sie nicht im Dienst ist. Sie entscheidet über die Pflege, die Kolleginnen führen sie in ihrer Abwesenheit nach dem Plan aus.",
     "Entwickelt in den USA (Marie Manthey, 1960er). Sie ist hoch qualifiziert und hat die Entscheidungsbefugnis.",
     "Unterschied zur Bezugspflege: Die Verantwortung ist rund um die Uhr, die Entscheidungsbefugnis ist größer, es gibt weniger Hierarchie.",
     "Voraussetzungen: genügend qualifiziertes Personal, klare Führung, Teamkultur."
    ]
   },
   {
    "h": "Mischform und Praxis",
    "li": [
     "In der Praxis werden Formen kombiniert, zum Beispiel Bezugspflege mit Gruppenpflege, mit funktionalen Anteilen (zum Beispiel ein Mitarbeiter übernimmt alle Insulingaben oder Dokumentation) je nach Personal und Situation.",
     "Wichtig ist, dass der Pflegeprozess nicht abreißt und die Verantwortung klar ist.",
     "Faktoren für die Wahl: Personalbesetzung und Qualifikation, Patientenstruktur, Einrichtung (Akut, Langzeit, Ambulant), Leitbild, Wirtschaftlichkeit."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Pflegeorganisation im Vergleich",
    "head": [
     "Form",
     "Kernidee",
     "Stärke",
     "Schwäche"
    ],
    "rows": [
     [
      "Funktionspflege",
      "Aufgabe für alle Patienten",
      "Effizient",
      "Wenig Beziehung"
     ],
     [
      "Bereichs-/Zimmerpflege",
      "Feste Zimmer pro Schicht",
      "Kurze Wege",
      "Bricht beim Schichtwechsel"
     ],
     [
      "Gruppenpflege",
      "Team für Patientengruppe",
      "Teamgeist",
      "Verantwortung diffus"
     ],
     [
      "Bezugspflege",
      "Eine Bezugsperson",
      "Beziehung, Ganzheit",
      "Braucht Fachkräfte"
     ],
     [
      "Primary Nursing",
      "24-Stunden-Verantwortung",
      "Höchste Kontinuität",
      "Sehr hohe Anforderungen"
     ]
    ]
   },
   {
    "kind": "pyramid",
    "title": "Von Aufgaben- zu Patientenorientierung",
    "levels": [
     {
      "t": "Primary Nursing",
      "s": "24-Stunden-Verantwortung",
      "icon": "Heart",
      "tone": "ok"
     },
     {
      "t": "Bezugspflege",
      "s": "Feste Bezugsperson",
      "icon": "HeartHandshake",
      "tone": "ok"
     },
     {
      "t": "Gruppen- und Bereichspflege",
      "s": "Feste Zuständigkeit",
      "icon": "Users",
      "tone": "info"
     },
     {
      "t": "Funktionspflege",
      "s": "Aufgabenorientiert",
      "icon": "ClipboardList",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g9-sgb5-krankenversicherung",
  "group": "ausbildung",
  "area": "system",
  "title": "SGB V: Gesetzliche Krankenversicherung, Leistungen und Zuzahlungen",
  "icon": "Stethoscope",
  "ar": "القانون الاجتماعي الخامس (SGB V) ينظم التأمين الصحي القانوني. فيه مبادئ التضامن والعلاج بالخدمة العينية والمساهمة المشتركة، وتفاصيل الخدمات مثل العلاج والأدوية والمستشفى والتمريض المنزلي وبدل المرض، وحدود المشاركة المالية للمريض.",
  "blocks": [
   {
    "h": "Grundprinzipien",
    "li": [
     "Solidarprinzip: Alle Versicherten zahlen nach Einkommen, Leistungen erhalten alle nach Bedarf.",
     "Sachleistungsprinzip: Die Kasse zahlt direkt mit dem Leistungserbringer (Gesundheitskarte), der Versicherte zahlt nicht vor.",
     "Paritätische Finanzierung: Beitrag zu etwa gleichen Teilen von Arbeitnehmer und Arbeitgeber, dazu ein Zusatzbeitrag je Kasse.",
     "Selbstverwaltung: Kassen, Ärzte und Kliniken regeln vieles selbst. Der Gemeinsame Bundesausschuss (G-BA) legt fest, welche Leistungen zum Katalog gehören.",
     "Wirtschaftlichkeitsgebot (§ 12): Leistungen müssen ausreichend, zweckmäßig und wirtschaftlich sein und dürfen das Maß des Notwendigen nicht überschreiten."
    ]
   },
   {
    "h": "Wer ist versichert?",
    "li": [
     "Pflichtversicherte: Arbeitnehmer bis zur Versicherungspflichtgrenze, Auszubildende, Rentner, Studierende, Arbeitslose.",
     "Freiwillig Versicherte: Besserverdienende, Selbstständige, die freiwillig in der GKV bleiben.",
     "Familienversicherung: Ehepartner und Kinder ohne eigenes höheres Einkommen sind beitragsfrei mitversichert.",
     "Private Krankenversicherung (PKV) ist eine Alternative für bestimmte Gruppen, zum Beispiel Beamte und Selbstständige."
    ]
   },
   {
    "h": "Leistungen",
    "li": [
     "Prävention und Früherkennung, zum Beispiel Vorsorge, Impfungen, Krebsfrüherkennung (§§ 20 ff., 25).",
     "Ärztliche und zahnärztliche Behandlung, Arznei-, Heil- und Hilfsmittel.",
     "Krankenhausbehandlung (§ 39), Rehabilitation (§ 40) und Anschlussheilbehandlung.",
     "Häusliche Krankenpflege (§ 37): Behandlungspflege nach ärztlicher Verordnung, und bei Krankheit zeitlich begrenzt auch Grundpflege und Hauswirtschaft, wenn niemand im Haushalt helfen kann.",
     "Spezialisierte ambulante Palliativversorgung SAPV (§ 37b) für Menschen mit weit fortgeschrittener, unheilbarer Erkrankung.",
     "Krankengeld (§ 44): Nach sechs Wochen Entgeltfortzahlung durch den Arbeitgeber zahlt die Kasse etwa 70 Prozent des Bruttoentgelts, höchstens 90 Prozent des Nettos, bis zu 78 Wochen innerhalb von drei Jahren wegen derselben Krankheit."
    ]
   },
   {
    "h": "Zuzahlungen und Belastungsgrenze",
    "li": [
     "Arznei- und Verbandmittel: 10 Prozent des Preises, mindestens 5 und höchstens 10 Euro pro Packung.",
     "Krankenhaus: 10 Euro pro Tag für höchstens 28 Tage im Kalenderjahr.",
     "Heilmittel und häusliche Krankenpflege: 10 Prozent der Kosten plus 10 Euro je Verordnung.",
     "Belastungsgrenze: Zuzahlungen sind auf 2 Prozent des Bruttoeinkommens im Jahr begrenzt, bei chronisch Kranken auf 1 Prozent. Kinder und Jugendliche unter 18 sind meist befreit."
    ]
   },
   {
    "h": "Pflege im Alltag",
    "li": [
     "Verordnung häuslicher Krankenpflege: Der Arzt verordnet zum Beispiel Wundversorgung, Injektionen, Blutzuckermessung. Der Pflegedienst rechnet mit der Krankenkasse ab.",
     "Abgrenzung zur Pflegeversicherung (SGB XI): Behandlungspflege kommt von der Krankenkasse, Grundpflege bei Pflegebedürftigkeit von der Pflegekasse.",
     "Bei Fragen zu Leistungen und Hilfsmitteln Patienten an Kasse und Beratungsstellen verweisen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Prinzipien der Krankenversicherung",
    "items": [
     {
      "t": "Solidarität",
      "s": "Nach Einkommen zahlen, nach Bedarf erhalten",
      "icon": "Handshake",
      "tone": "ok"
     },
     {
      "t": "Sachleistung",
      "s": "Kasse zahlt direkt",
      "icon": "Stethoscope",
      "tone": "info"
     },
     {
      "t": "Parität",
      "s": "Arbeitgeber und Arbeitnehmer",
      "icon": "Scale",
      "tone": "info"
     },
     {
      "t": "Wirtschaftlichkeit",
      "s": "Ausreichend, zweckmäßig, wirtschaftlich",
      "icon": "Gauge",
      "tone": "warn"
     }
    ]
   },
   {
    "kind": "table",
    "title": "Zuzahlungen im Überblick",
    "head": [
     "Leistung",
     "Zuzahlung"
    ],
    "rows": [
     [
      "Arzneimittel",
      "10 Prozent, min. 5 und max. 10 Euro"
     ],
     [
      "Krankenhaus",
      "10 Euro pro Tag, max. 28 Tage"
     ],
     [
      "Heilmittel, HKP",
      "10 Prozent plus 10 Euro je Verordnung"
     ],
     [
      "Grenze",
      "2 Prozent des Bruttoeinkommens, chronisch krank 1 Prozent"
     ]
    ]
   }
  ]
 },
 {
  "id": "g9-sgb11-pflegeversicherung",
  "group": "ausbildung",
  "area": "system",
  "title": "SGB XI: Soziale Pflegeversicherung, Pflegegrade und Leistungen",
  "icon": "Landmark",
  "ar": "التأمين التمريضي (SGB XI) يقدّم دعماً جزئياً للأشخاص المحتاجين إلى الرعاية. تحدد الدرجات (1 إلى 5) مقدار الدعم، وتشمل الخدمات بدل رعاية نقدي وخدمات عينية ورعاية للراحة والرعاية النهارية وبدل التخفيف ووسائل المساعدة والاستشارة.",
  "blocks": [
   {
    "h": "Grundsätze",
    "li": [
     "Die Pflegeversicherung folgt der Krankenversicherung: Wer gesetzlich versichert ist, ist in der sozialen Pflegeversicherung, wer privat versichert ist, in der privaten Pflegepflichtversicherung.",
     "Teilleistungssystem (Teilkasko): Die Versicherung deckt nur einen Teil der Kosten. Den Rest tragen Pflegebedürftige, Familie oder Sozialhilfe (Hilfe zur Pflege).",
     "Ambulant vor stationär: Pflege zu Hause hat Vorrang.",
     "Prävention und Rehabilitation vor Pflege: Pflegebedürftigkeit vermeiden, mindern oder verhindern, dass sie schlimmer wird.",
     "Anspruch: Pflegebedürftigkeit voraussichtlich mindestens sechs Monate, Antrag bei der Pflegekasse, Vorversicherungszeit von zwei Jahren in den letzten zehn Jahren."
    ]
   },
   {
    "h": "Pflegegrade 1 bis 5",
    "li": [
     "Seit 2017 gibt es fünf Pflegegrade statt Pflegestufen. Entscheidend ist der Grad der Selbstständigkeit, nicht die Minuten Pflegeaufwand.",
     "Gesamtpunkte: Pflegegrad 1 ab 12,5, Pflegegrad 2 ab 27, Pflegegrad 3 ab 47,5, Pflegegrad 4 ab 70, Pflegegrad 5 ab 90 bis 100 Punkte.",
     "Pflegegrad 1: geringe, Pflegegrad 2: erhebliche, Pflegegrad 3: schwere, Pflegegrad 4: schwerste Beeinträchtigung, Pflegegrad 5: schwerste Beeinträchtigung mit besonderen Anforderungen an die Versorgung."
    ]
   },
   {
    "h": "Leistungen für zu Hause (Stand 2026)",
    "li": [
     "Pflegegeld bei Pflege durch Angehörige: Pflegegrad 2 etwa 347, Pflegegrad 3 etwa 599, Pflegegrad 4 etwa 800, Pflegegrad 5 etwa 990 Euro im Monat.",
     "Pflegesachleistung bei Pflege durch einen ambulanten Dienst: Pflegegrad 2 bis 5 etwa 796, 1497, 1859 und 2299 Euro im Monat.",
     "Kombinationsleistung: Pflegegeld und Sachleistung anteilig verbinden.",
     "Entlastungsbetrag ab Pflegegrad 1: etwa 131 Euro im Monat für anerkannte Angebote (zum Beispiel Betreuung, Haushaltshilfe, Tagespflege).",
     "Verhinderungspflege und Kurzzeitpflege: gemeinsamer Jahresbetrag von etwa 3539 Euro ab Pflegegrad 2, wenn die Pflegeperson verhindert ist oder nach einem Krankenhausaufenthalt eine Übergangszeit nötig ist (bis zu 8 Wochen pro Jahr).",
     "Tages- und Nachtpflege (teilstationär) zusätzlich zu Pflegegeld oder Sachleistung.",
     "Pflegehilfsmittel zum Verbrauch (zum Beispiel Handschuhe, Desinfektion) bis etwa 42 Euro im Monat, technische Hilfsmittel (Pflegebett, Rollator), wohnumfeldverbessernde Maßnahmen bis etwa 4180 Euro je Maßnahme.",
     "Beträge ändern sich. Immer den aktuellen Stand prüfen."
    ]
   },
   {
    "h": "Weitere Leistungen und Beratung",
    "li": [
     "Vollstationäre Pflege: pauschaler Zuschuss zu den pflegebedingten Kosten je Pflegegrad, Unterkunft, Verpflegung und Investitionskosten zahlt der Bewohner selbst, dazu ein Leistungszuschlag mit steigender Wohndauer.",
     "Pflegeberatung (§ 7a): Anspruch auf individuelle Beratung und Pflegeplanung durch Pflegeberater, zum Beispiel im Pflegestützpunkt.",
     "Beratungseinsatz (§ 37 Abs. 3) bei Pflegegeld: Pflegegrad 2 und 3 halbjährlich, Pflegegrad 4 und 5 vierteljährlich, Pflegegrad 1 freiwillig. Durch einen Pflegedienst. Ohne Beratung kann das Pflegegeld gekürzt werden.",
     "Pflegekurse für Angehörige, Rentenversicherungsbeiträge und Unfallversicherung für Pflegepersonen.",
     "Pflegeunterstützungsgeld bei akuter Pflegesituation: bis zu 10 Arbeitstage Freistellung mit Lohnersatz."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Pflegegrade und Gesamtpunkte",
    "head": [
     "Pflegegrad",
     "Punkte",
     "Beeinträchtigung"
    ],
    "rows": [
     [
      "1",
      "12,5 bis unter 27",
      "Gering"
     ],
     [
      "2",
      "27 bis unter 47,5",
      "Erheblich"
     ],
     [
      "3",
      "47,5 bis unter 70",
      "Schwer"
     ],
     [
      "4",
      "70 bis unter 90",
      "Schwerste"
     ],
     [
      "5",
      "90 bis 100",
      "Schwerste mit besonderen Anforderungen"
     ]
    ]
   },
   {
    "kind": "compare",
    "title": "Pflegegeld oder Sachleistung?",
    "cols": [
     {
      "t": "Pflegegeld",
      "items": [
       "Angehörige pflegen",
       "Geld geht an den Pflegebedürftigen",
       "Beratungseinsatz Pflicht"
      ],
      "icon": "Home",
      "tone": "ok"
     },
     {
      "t": "Sachleistung",
      "items": [
       "Ambulanter Pflegedienst",
       "Abrechnung mit der Kasse",
       "Höherer Betrag"
      ],
      "icon": "Truck",
      "tone": "info"
     },
     {
      "t": "Kombination",
      "items": [
       "Beides anteilig",
       "Pflegegeld wird gekürzt",
       "Flexibel"
      ],
      "icon": "Shuffle",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g9-md-begutachtung",
  "group": "ausbildung",
  "area": "system",
  "title": "Medizinischer Dienst (MD, früher MDK): Begutachtung und Qualitätsprüfung",
  "icon": "ClipboardCheck",
  "ar": "الخدمة الطبية (MD) جهة مستقلة تقيّم لصالح صناديق التأمين مدى الاعتماد على الرعاية وتحدد الدرجة، وتفحص أيضاً جودة دور الرعاية والخدمات المنزلية. يعتمد التقييم على أداة NBA بستة وحدات ذات أوزان مختلفة.",
  "blocks": [
   {
    "h": "Wer und was?",
    "li": [
     "Der Medizinische Dienst (MD) hieß bis 2020 Medizinischer Dienst der Krankenversicherung (MDK). Er ist eine unabhängige Körperschaft und arbeitet im Auftrag der Kassen.",
     "Aufgaben: Begutachtung der Pflegebedürftigkeit, Beratung der Kassen in medizinischen Fragen, Prüfung von Krankenhausabrechnungen, Qualitätsprüfungen von Pflegeeinrichtungen.",
     "Für Privatversicherte übernimmt Medicproof die Begutachtung.",
     "Der MD entscheidet nicht selbst. Die Pflegekasse erlässt den Bescheid auf Grundlage des Gutachtens."
    ]
   },
   {
    "h": "Ablauf der Begutachtung",
    "li": [
     "Antrag bei der Pflegekasse (formlos möglich, sofort Anspruch ab Antragsmonat).",
     "Die Kasse beauftragt den MD, der Termin wird angekündigt. Besuch meist zu Hause, auch in Einrichtungen.",
     "Gutachter (Pflegefachperson oder Arzt) führen ein Gespräch, beobachten Fähigkeiten und füllen das Neue Begutachtungsassessment (NBA) aus.",
     "Gutachten mit Pflegegrad-Empfehlung und Empfehlungen zu Hilfsmitteln, Prävention, Rehabilitation und Pflegeplanung gehen an die Kasse. Die Kasse sendet den Bescheid.",
     "Fristen: Entscheidung in der Regel innerhalb von 25 Arbeitstagen nach Antrag. Bei Krankenhaus, Reha, Hospiz oder Palliativversorgung innerhalb von etwa einer Woche.",
     "Widerspruch gegen den Bescheid innerhalb eines Monats. Höherstufung oder neue Begutachtung kann bei veränderter Lage beantragt werden."
    ]
   },
   {
    "h": "NBA: Neues Begutachtungsassessment",
    "li": [
     "Bewertet wird die Selbstständigkeit in sechs Modulen. Jedes Modul ergibt Punkte, die gewichtet in die Gesamtpunktzahl eingehen.",
     "Modul 1 Mobilität: 10 Prozent.",
     "Module 2 und 3 kognitive und kommunikative Fähigkeiten sowie Verhaltensweisen und psychische Problemlagen: zusammen 15 Prozent, es zählt der höhere Wert.",
     "Modul 4 Selbstversorgung (Waschen, Ankleiden, Essen, Toilette): 40 Prozent. Das gewichtigste Modul.",
     "Modul 5 Umgang mit krankheits- und therapiebedingten Anforderungen (Medikamente, Wundversorgung, Arztbesuche, Diäten): 20 Prozent.",
     "Modul 6 Gestaltung des Alltagslebens und sozialer Kontakte: 15 Prozent.",
     "Die Module 7 (außerhäusliche Aktivitäten) und 8 (Haushaltsführung) werden erhoben, gehen aber nicht in die Punktzahl ein.",
     "Selbstständigkeit wird je Kriterium von selbstständig bis unselbstständig eingeschätzt (Stufen von 0 bis 3)."
    ]
   },
   {
    "h": "Qualitätsprüfungen von Einrichtungen",
    "li": [
     "Der MD prüft stationäre und ambulante Pflegeeinrichtungen regelmäßig (Regelprüfung, jährlich) und bei Beschwerden anlassbezogen.",
     "Geprüft werden Ergebnisqualität (Wohlbefinden, Gesundheitszustand der Bewohner), Prozess- und Strukturqualität. Bei Heimen gibt es zusätzlich Qualitätsindikatoren, die die Einrichtung halbjährlich meldet (zum Beispiel Mobilität, Dekubitus, Sturzfolgen, Gewichtsverlust).",
     "Die Prüfung wird kurz vorher angekündigt, geprüft werden Bewohner im Gespräch und die Dokumentation. Ergebnisse werden veröffentlicht."
    ]
   },
   {
    "h": "Rolle der Pflegefachperson",
    "li": [
     "Begutachtung vorbereiten: Pflegedokumentation, Medikamentenplan, Arztbriefe, Hilfsmittel bereithalten, Pflegetagebuch führen, Angehörige oder Bezugsperson dabei.",
     "Den Zustand ehrlich und im schlechtesten Alltag schildern, nicht an einem guten Tag beschönigen.",
     "Bei Qualitätsprüfung Dokumentation aktuell halten, Fragen offen und fachlich beantworten, Pflegeplanung nachvollziehbar machen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Vom Antrag zum Pflegegrad",
    "steps": [
     {
      "t": "Antrag",
      "s": "Bei der Pflegekasse",
      "icon": "PenLine",
      "tone": "info"
     },
     {
      "t": "Auftrag an den MD",
      "s": "Terminankündigung",
      "icon": "Phone",
      "tone": "info"
     },
     {
      "t": "Begutachtung",
      "s": "Gespräch, NBA, Beobachtung",
      "icon": "ClipboardCheck",
      "tone": "ok"
     },
     {
      "t": "Gutachten",
      "s": "Empfehlung Pflegegrad",
      "icon": "ScrollText",
      "tone": "info"
     },
     {
      "t": "Bescheid",
      "s": "Von der Pflegekasse",
      "icon": "Award",
      "tone": "ok"
     }
    ],
    "note": "Frist etwa 25 Arbeitstage. Widerspruch innerhalb eines Monats."
   },
   {
    "kind": "bar",
    "title": "NBA: Gewichtung der Module",
    "parts": [
     {
      "t": "Selbstversorgung",
      "s": "40 Prozent",
      "w": 40,
      "tone": "ok"
     },
     {
      "t": "Krankheitsbezogen",
      "s": "20 Prozent",
      "w": 20,
      "tone": "info"
     },
     {
      "t": "Mobilität",
      "s": "10 Prozent",
      "w": 10,
      "tone": "info"
     },
     {
      "t": "Kognition oder Verhalten",
      "s": "15 Prozent",
      "w": 15,
      "tone": "warn"
     },
     {
      "t": "Alltagsleben",
      "s": "15 Prozent",
      "w": 15,
      "tone": "info"
     }
    ],
    "note": "Insgesamt 100 Prozent."
   }
  ]
 },
 {
  "id": "g9-sozialversicherung-sgb",
  "group": "ausbildung",
  "area": "system",
  "title": "Sozialversicherung und Sozialgesetzbuch (SGB): Überblick, Teilhabe und Sozialhilfe",
  "icon": "Landmark",
  "ar": "يضم القانون الاجتماعي (SGB) عدة كتب. التأمين الاجتماعي له خمسة فروع (الصحي، التمريضي، التقاعدي، الحوادث، البطالة)، وتُموَّل بالاشتراكات. وهناك أيضاً قوانين التأهيل والمشاركة (IX) والمساعدة الاجتماعية (XII) التي تدعم من لا يكفيه التأمين.",
  "blocks": [
   {
    "h": "Die fünf Säulen der Sozialversicherung",
    "li": [
     "Krankenversicherung (SGB V): Behandlung von Krankheit, Krankengeld.",
     "Pflegeversicherung (SGB XI): Hilfe bei Pflegebedürftigkeit.",
     "Rentenversicherung (SGB VI): Altersrente, Erwerbsminderungsrente, Rehabilitation, Hinterbliebenenrente.",
     "Unfallversicherung (SGB VII): Arbeitsunfälle, Wegeunfälle, Berufskrankheiten. Träger sind Berufsgenossenschaften, Beitrag zahlt allein der Arbeitgeber.",
     "Arbeitslosenversicherung (SGB III): Arbeitslosengeld, Arbeitsförderung."
    ]
   },
   {
    "h": "Finanzierung und Prinzipien",
    "li": [
     "Beiträge werden vom Bruttolohn abgezogen und meist von Arbeitgeber und Arbeitnehmer geteilt (Ausnahme Unfallversicherung).",
     "Umlageverfahren: Die Beiträge der heute Erwerbstätigen finanzieren die Leistungen der heute Leistungsberechtigten (Generationenvertrag).",
     "Pflichtversicherung für Arbeitnehmer bis zu bestimmten Einkommensgrenzen.",
     "Grundprinzipien: Solidarität, Subsidiarität (zuerst Selbsthilfe, dann Staat) und Selbstverwaltung."
    ]
   },
   {
    "h": "Weitere wichtige Bücher",
    "li": [
     "SGB IX: Rehabilitation und Teilhabe von Menschen mit Behinderungen, Bundesteilhabegesetz. Schwerbehinderung ab einem Grad der Behinderung (GdB) von 50, Nachteilsausgleiche und Schwerbehindertenausweis.",
     "SGB XII: Sozialhilfe, darunter Hilfe zur Pflege, wenn Einkommen und Vermögen nicht reichen, und Grundsicherung im Alter.",
     "SGB II: Bürgergeld (Grundsicherung für Arbeitsuchende).",
     "SGB VIII: Kinder- und Jugendhilfe. SGB I und X: allgemeine Regeln und Verwaltungsverfahren.",
     "SGB XIV: Soziale Entschädigung, zum Beispiel für Opfer von Gewalt."
    ]
   },
   {
    "h": "Zusammenspiel in der Pflege",
    "li": [
     "Behandlung im Krankenhaus und Behandlungspflege: Krankenkasse (SGB V). Hilfe bei Alltag und Grundpflege bei Pflegebedürftigkeit: Pflegekasse (SGB XI).",
     "Rehabilitation: Rentenversicherung (Erwerbsfähigkeit) oder Krankenversicherung (Gesundheit). Arbeitsunfall: Unfallversicherung.",
     "Reicht das Geld nicht, springt die Sozialhilfe (SGB XII) ein.",
     "Pflegende beraten und an Sozialdienst oder Pflegestützpunkt verweisen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Fünf Säulen der Sozialversicherung",
    "items": [
     {
      "t": "Kranken",
      "s": "SGB V",
      "icon": "Stethoscope",
      "tone": "info"
     },
     {
      "t": "Pflege",
      "s": "SGB XI",
      "icon": "HandHelping",
      "tone": "info"
     },
     {
      "t": "Rente",
      "s": "SGB VI",
      "icon": "Hourglass",
      "tone": "info"
     },
     {
      "t": "Unfall",
      "s": "SGB VII",
      "icon": "Siren",
      "tone": "warn"
     },
     {
      "t": "Arbeitslosen",
      "s": "SGB III",
      "icon": "Briefcase",
      "tone": "info"
     }
    ]
   },
   {
    "kind": "table",
    "title": "Wichtige SGB-Bücher",
    "head": [
     "Buch",
     "Inhalt"
    ],
    "rows": [
     [
      "SGB V",
      "Krankenversicherung"
     ],
     [
      "SGB XI",
      "Pflegeversicherung"
     ],
     [
      "SGB IX",
      "Rehabilitation und Teilhabe"
     ],
     [
      "SGB XII",
      "Sozialhilfe, Hilfe zur Pflege"
     ],
     [
      "SGB VI, VII, III",
      "Rente, Unfall, Arbeitslosigkeit"
     ]
    ]
   }
  ]
 },
 {
  "id": "g9-patientenrechte-haftung",
  "group": "ausbildung",
  "area": "recht",
  "title": "Patientenrechte, Dokumentation, Schweigepflicht und Haftung",
  "icon": "Scale",
  "ar": "قانون حقوق المريض (المواد 630أ وما بعدها من القانون المدني) يجعل العلاقة بين المريض ومقدم الخدمة عقداً. يشمل التزامات الإعلام والموافقة والتوثيق والسرية. وإذا حدث خطأ قد تترتب مسؤولية مدنية أو جنائية، ويتحمل الممرض مسؤولية ما يقوم به.",
  "blocks": [
   {
    "h": "Behandlungsvertrag (§§ 630a ff. BGB)",
    "li": [
     "Das Patientenrechtegesetz regelt den Behandlungsvertrag zwischen Behandelndem und Patient. Der Behandelnde schuldet eine Behandlung nach dem allgemein anerkannten fachlichen Standard.",
     "Informationspflicht: Der Patient wird verständlich über Diagnose, Verlauf und Therapie informiert, auch über Kosten, wenn die Kasse sie nicht übernimmt.",
     "Aufklärung: Muss rechtzeitig, mündlich und verständlich durch eine Person mit der notwendigen Ausbildung erfolgen, über Risiken und Alternativen. Die ärztliche Aufklärung ist Sache des Arztes.",
     "Einwilligung: Jeder Eingriff braucht die wirksame Einwilligung des aufgeklärten Patienten. Sie ist jederzeit widerrufbar. Bei Einwilligungsunfähigkeit entscheidet der Vertreter oder der mutmaßliche Wille."
    ]
   },
   {
    "h": "Dokumentation und Einsicht",
    "li": [
     "Dokumentationspflicht: Alle wesentlichen Maßnahmen und Ergebnisse zeitnah in der Patientenakte festhalten. Berichtigungen so, dass der ursprüngliche Inhalt erkennbar bleibt.",
     "Aufbewahrung in der Regel zehn Jahre nach Abschluss der Behandlung.",
     "Einsichtsrecht: Der Patient darf seine vollständige Akte einsehen und Kopien erhalten (gegen Kosten).",
     "Fehlende Dokumentation kann dazu führen, dass eine nicht dokumentierte Maßnahme als nicht durchgeführt gilt (Beweislast)."
    ]
   },
   {
    "h": "Schweigepflicht und Datenschutz",
    "li": [
     "Schweigepflicht nach § 203 StGB: Ärzte und Pflegefachpersonen dürfen Geheimnisse ihrer Patienten nicht unbefugt weitergeben. Auch nach dem Tod gilt sie.",
     "Entbindung durch den Patienten, gesetzliche Meldepflichten (zum Beispiel Infektionsschutz) oder rechtfertigender Notstand sind Ausnahmen.",
     "Datenschutz (DSGVO, Landesrecht): Gesundheitsdaten sind besonders geschützt. Nur an Beteiligte weitergeben, die sie für die Behandlung brauchen. Kein Austausch über private Messenger, keine Fotos ohne Einwilligung.",
     "Auskunft an Angehörige nur mit Einverständnis des Patienten."
    ]
   },
   {
    "h": "Haftung und Verantwortung",
    "li": [
     "Zivilrecht: Schadensersatz und Schmerzensgeld bei einem Behandlungsfehler, wenn Pflichtverletzung und Schaden nachweisbar sind.",
     "Strafrecht: fahrlässige Körperverletzung oder Tötung bei Sorgfaltspflichtverletzung, Körperverletzung ohne wirksame Einwilligung, unterlassene Hilfeleistung.",
     "Arbeitsrecht: Abmahnung oder Kündigung bei Pflichtverstößen.",
     "Durchführungsverantwortung: Wer eine Maßnahme ausführt, haftet dafür, auch wenn der Arzt sie angeordnet hat. Bei offensichtlich falscher Anordnung Rückfrage, Ausführung verweigern und dokumentieren.",
     "Übernahmeverschulden: Wer eine Aufgabe übernimmt, der er nicht gewachsen ist, handelt fahrlässig. Überforderung und Mängel offen melden (Überlastungsanzeige).",
     "Garantenstellung: Pflegefachpersonen müssen Schaden von Patienten abwenden."
    ]
   },
   {
    "h": "Rollen und Befugnisse",
    "li": [
     "Vorbehaltene Tätigkeiten nach § 4 PflBG: Erhebung und Feststellung des Pflegebedarfs, Organisation, Gestaltung und Steuerung des Pflegeprozesses, Analyse, Evaluation, Sicherung und Entwicklung der Pflegequalität. Das dürfen nur Pflegefachpersonen.",
     "Delegation: Aufgaben dürfen an qualifizierte Personen übertragen werden. Die delegierende Person bleibt für Auswahl, Anleitung und Kontrolle verantwortlich.",
     "Ärztliche Anordnungen (Medikamente, Injektionen, Verbände) müssen schriftlich und eindeutig sein. Mündliche Anordnungen nur im Notfall und danach schriftlich bestätigen lassen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Rechtmäßiger Eingriff",
    "steps": [
     {
      "t": "Indikation",
      "s": "Medizinisch begründet",
      "icon": "Stethoscope",
      "tone": "info"
     },
     {
      "t": "Aufklärung",
      "s": "Verständlich, rechtzeitig",
      "icon": "MessageCircle",
      "tone": "info"
     },
     {
      "t": "Einwilligung",
      "s": "Freiwillig, widerrufbar",
      "icon": "ThumbsUp",
      "tone": "ok"
     },
     {
      "t": "Durchführung",
      "s": "Nach Standard",
      "icon": "ClipboardCheck",
      "tone": "ok"
     },
     {
      "t": "Dokumentation",
      "s": "Zeitnah, 10 Jahre",
      "icon": "PenLine",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g9-arbeitsrecht-pflegezeit",
  "group": "ausbildung",
  "area": "recht",
  "title": "Arbeitsrecht in der Pflege: Arbeitszeit, Jugend- und Mutterschutz, Pflegezeit",
  "icon": "Briefcase",
  "ar": "هناك قوانين تحمي العاملين: قانون وقت العمل يحدد الساعات والراحات، وقانون حماية الشباب والأمومة يحمي المتدربين والحوامل، وقانون إجازة الرعاية يسمح برعاية قريب مع الحفاظ على الوظيفة.",
  "blocks": [
   {
    "h": "Arbeitszeitgesetz (ArbZG)",
    "li": [
     "Werktägliche Arbeitszeit grundsätzlich 8 Stunden, verlängerbar auf bis zu 10 Stunden, wenn im Durchschnitt von 6 Kalendermonaten oder 24 Wochen 8 Stunden nicht überschritten werden.",
     "Ruhepausen: mindestens 30 Minuten bei mehr als 6 bis 9 Stunden Arbeit, 45 Minuten bei mehr als 9 Stunden. Pausen werden nicht vergütet und gehören nicht zur Arbeitszeit.",
     "Ruhezeit: mindestens 11 Stunden ohne Unterbrechung nach Ende der täglichen Arbeitszeit. In Krankenhäusern und Pflegeeinrichtungen kann sie um bis zu eine Stunde verkürzt werden, wenn sie innerhalb eines Monats ausgeglichen wird.",
     "Nachtarbeit 23 bis 6 Uhr: Nachtarbeitnehmer haben Anspruch auf arbeitsmedizinische Untersuchung und Ausgleich. Sonn- und Feiertagsarbeit ist in der Pflege erlaubt, es gibt Ersatzruhetage.",
     "Bereitschaftsdienst und Rufbereitschaft werden unterschiedlich behandelt: Bereitschaft ist Arbeitszeit, Rufbereitschaft nur der tatsächliche Einsatz."
    ]
   },
   {
    "h": "Jugendarbeitsschutz und Mutterschutz",
    "li": [
     "Jugendarbeitsschutzgesetz: für Personen unter 18 Jahren, höchstens 8 Stunden täglich und 40 Stunden pro Woche, Pausen und Freistellung für die Berufsschule. Beschränkung von Nacht- und Wochenendarbeit.",
     "Mutterschutzgesetz: Schutzfrist 6 Wochen vor und 8 Wochen nach der Geburt (12 Wochen bei Früh-, Mehrlings- oder Geburt mit Behinderung). Beschäftigungsverbote bei Gefährdung, zum Beispiel Heben schwerer Lasten oder Infektionsrisiko.",
     "Kündigungsverbot ab Bekanntgabe der Schwangerschaft bis vier Monate nach der Entbindung.",
     "Nachtarbeit für Schwangere ist in der Regel zwischen 20 und 6 Uhr verboten, Sonn- und Feiertagsarbeit nur mit Einwilligung."
    ]
   },
   {
    "h": "Pflegezeit und Familienpflegezeit",
    "li": [
     "Kurzzeitige Arbeitsverhinderung: bis zu 10 Arbeitstage frei, wenn ein naher Angehöriger akut pflegebedürftig wird. Dazu Pflegeunterstützungsgeld der Pflegekasse.",
     "Pflegezeit: bis zu 6 Monate vollständige oder teilweise Freistellung, Anspruch in Betrieben mit mehr als 15 Beschäftigten.",
     "Familienpflegezeit: bis zu 24 Monate Teilzeit mit mindestens 15 Wochenstunden, Anspruch in Betrieben mit mehr als 25 Beschäftigten. Zinsloses Darlehen möglich.",
     "Besonderer Kündigungsschutz während der Freistellung."
    ]
   },
   {
    "h": "Weitere Regeln",
    "li": [
     "Kündigungsschutzgesetz: gilt in Betrieben ab mehr als 10 Beschäftigten nach 6 Monaten Betriebszugehörigkeit. Kündigung muss sozial gerechtfertigt sein.",
     "Arbeitsschutz: Gefährdungsbeurteilung, Schutz vor Rückenschäden, Nadelstichverletzungen und Infektionen, Betriebsarzt.",
     "Betriebsrat und Tarifvertrag regeln Mitbestimmung, Entgelt und Schichtmodelle.",
     "Überlastungsanzeige: Wer unter den gegebenen Bedingungen nicht sicher arbeiten kann, meldet dies schriftlich der Leitung. Das schützt auch rechtlich."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Arbeitszeit auf einen Blick",
    "head": [
     "Regel",
     "Wert"
    ],
    "rows": [
     [
      "Regelarbeitszeit",
      "8 Stunden, bis 10 mit Ausgleich"
     ],
     [
      "Pause",
      "30 Minuten ab 6 Stunden, 45 ab 9"
     ],
     [
      "Ruhezeit",
      "11 Stunden"
     ],
     [
      "Mutterschutz",
      "6 Wochen vor, 8 Wochen nach der Geburt"
     ],
     [
      "Pflegezeit",
      "bis 6 Monate, Familienpflegezeit bis 24"
     ]
    ]
   }
  ]
 },
 {
  "id": "g9-btm-ifsg-medizinprodukte",
  "group": "ausbildung",
  "area": "recht",
  "title": "Betäubungsmittelrecht, Infektionsschutzgesetz und Medizinprodukte",
  "icon": "ShieldCheck",
  "ar": "ثلاثة قوانين يتعامل معها الممرض يومياً: قانون المخدرات (حفظ وتوثيق الأدوية المخدرة)، وقانون الوقاية من العدوى (الإبلاغ والنظافة)، وقانون الأجهزة الطبية (التدريب على الأجهزة وتسجيلها).",
  "blocks": [
   {
    "h": "Betäubungsmittelrecht (BtMG, BtMVV)",
    "li": [
     "Betäubungsmittel (BtM) wie Morphin, Fentanyl oder Oxycodon dürfen nur auf einem besonderen BtM-Rezept verordnet werden.",
     "Aufbewahrung: in einem abgeschlossenen, gesicherten Behältnis (Tresor), getrennt von anderen Arzneimitteln, vor unbefugtem Zugriff geschützt.",
     "Dokumentation: Betäubungsmittelbuch oder Karteikarte, jeder Zugang und Abgang mit Datum, Patient, Menge, Bestand und Unterschrift. Regelmäßige Bestandskontrolle.",
     "Nicht mehr benötigte oder verfallene BtM werden unter Zeugen vernichtet und dokumentiert. Bei Tod eines Patienten Rückgabe oder Vernichtung nach Vorschrift.",
     "Missbrauch, Diebstahl und Verlust sofort der Leitung melden."
    ]
   },
   {
    "h": "Infektionsschutzgesetz (IfSG)",
    "li": [
     "Ziel: Übertragbare Krankheiten vorbeugen, früh erkennen und ihre Weiterverbreitung verhindern.",
     "Meldepflicht: Bestimmte Krankheiten und Erreger werden namentlich dem Gesundheitsamt gemeldet (Ärzte, Labore, Leitung von Einrichtungen), zum Beispiel Masern, Tuberkulose, Hepatitis, Norovirus-Häufungen.",
     "Hygiene: Krankenhäuser und Pflegeeinrichtungen müssen Hygienepläne haben (§§ 23 und 36), Infektionen erfassen und bewerten, Hygienefachpersonal einsetzen.",
     "Tätigkeitsverbote: Wer an bestimmten Infektionen erkrankt ist, darf in Pflege oder Küche vorübergehend nicht arbeiten.",
     "Masernschutz: Beschäftigte in Gesundheitseinrichtungen und Gemeinschaftseinrichtungen brauchen einen Nachweis über Impfschutz oder Immunität.",
     "Absonderung (Quarantäne) und Schutzmaßnahmen können vom Gesundheitsamt angeordnet werden."
    ]
   },
   {
    "h": "Medizinprodukte (MPDG, MPBetreibV)",
    "li": [
     "Medizinprodukte sind zum Beispiel Infusionspumpen, Blutdruckmessgeräte, Rollstühle, Verbandstoffe und Spritzen.",
     "Betreiber und Anwender müssen sie nach Zweckbestimmung und sicherheitsgerecht verwenden und regelmäßig warten (sicherheitstechnische und messtechnische Kontrollen).",
     "Einweisung: Anwender werden in Geräte (zum Beispiel Spritzenpumpe) eingewiesen, dies wird dokumentiert. Bestandsverzeichnis und, bei bestimmten Geräten, ein Medizinproduktebuch.",
     "Vorkommnisse und Beinahe-Vorkommnisse (Fehler, Ausfälle, Verletzungen) werden gemeldet, defekte Geräte aus dem Verkehr gezogen und gekennzeichnet.",
     "Nur eingewiesene Personen bedienen Geräte. Bedienungsanleitung ist verfügbar."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Drei Gesetze im Pflegealltag",
    "items": [
     {
      "t": "BtM-Recht",
      "s": "Tresor, Buch, Rezept",
      "icon": "Lock",
      "tone": "warn"
     },
     {
      "t": "Infektionsschutz",
      "s": "Meldepflicht, Hygieneplan",
      "icon": "Bug",
      "tone": "info"
     },
     {
      "t": "Medizinprodukte",
      "s": "Einweisung, Wartung",
      "icon": "Wrench",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g9-krankenhausfinanzierung",
  "group": "ausbildung",
  "area": "system",
  "title": "Krankenhausfinanzierung: DRG, Pflegebudget und Personalvorgaben",
  "icon": "Hospital",
  "ar": "تُموَّل المستشفيات بالنظام المزدوج: الولايات للاستثمارات والصناديق للتشغيل. تُحاسَب الحالات بنظام الحالات المجمّعة (DRG)، وتُموَّل تكاليف التمريض بشكل منفصل (ميزانية التمريض)، وهناك حدود دنيا لعدد الممرضين.",
  "blocks": [
   {
    "h": "Duale Finanzierung",
    "li": [
     "Die Bundesländer zahlen die Investitionskosten (Gebäude, Großgeräte) nach dem Krankenhausfinanzierungsgesetz (KHG).",
     "Die Krankenkassen zahlen die laufenden Betriebskosten für die Behandlung.",
     "In der Praxis reichen die Landesmittel oft nicht, daher werden Investitionen teilweise aus Betriebsmitteln gedeckt."
    ]
   },
   {
    "h": "DRG: Fallpauschalen",
    "li": [
     "Jeder Behandlungsfall wird einer diagnosebezogenen Fallgruppe (DRG) zugeordnet. Hauptdiagnose, Nebendiagnosen, Prozeduren, Alter und Schweregrad bestimmen sie.",
     "Aus der DRG ergibt sich ein Relativgewicht (Bewertungsrelation), multipliziert mit einem Basisfallwert entsteht der Erlös.",
     "Die Kodierung erfolgt mit ICD-10 (Diagnosen) und OPS (Prozeduren). Gute Dokumentation sichert korrekte Abrechnung.",
     "Anreize: kürzere Verweildauer, mehr Fälle. Kritik: Druck zu früher Entlassung, Ökonomisierung, Unterfinanzierung der Pflege.",
     "Die Verweildauer: Verweilt ein Patient kürzer als die untere Grenze, gibt es Abschläge, länger als die obere Grenze Zuschläge."
    ]
   },
   {
    "h": "Pflegebudget und Personalvorgaben",
    "li": [
     "Seit 2020 werden die Pflegepersonalkosten am Bett aus den DRG herausgenommen und über das Pflegebudget nach tatsächlichen Kosten finanziert.",
     "Ziel: mehr Pflegepersonal am Bett, kein Einsparen an der Pflege.",
     "Pflegepersonaluntergrenzen: In pflegesensitiven Bereichen (zum Beispiel Intensiv, Geriatrie, Kardiologie) darf ein Verhältnis von Patienten pro Pflegekraft nicht überschritten werden.",
     "Pflegepersonalbemessung (PPR 2.0): Instrument, das den Personalbedarf nach dem tatsächlichen Pflegeaufwand der Patienten berechnet.",
     "Wichtig für Pflegende: Qualifikation, Fachkraftquote und Dokumentation sind Teil der Qualitätssicherung."
    ]
   },
   {
    "h": "Weitere Begriffe",
    "li": [
     "Fallzahl, Verweildauer, Case Mix Index (durchschnittliche Fallschwere), Entlassmanagement, Überleitung in Reha oder Pflege.",
     "Ambulante Operationen und Hybrid-DRG fördern Behandlungen ohne Übernachtung.",
     "Krankenhausplanung der Länder bestimmt Standorte und Leistungsgruppen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Wer zahlt was im Krankenhaus?",
    "cols": [
     {
      "t": "Bundesland",
      "items": [
       "Investitionen",
       "Gebäude, Großgeräte",
       "Krankenhausplanung"
      ],
      "icon": "Landmark",
      "tone": "info"
     },
     {
      "t": "Krankenkasse",
      "items": [
       "Laufende Behandlung",
       "DRG-Fallpauschalen",
       "Pflegebudget"
      ],
      "icon": "Stethoscope",
      "tone": "ok"
     },
     {
      "t": "Patient",
      "items": [
       "Zuzahlung 10 Euro pro Tag",
       "Maximal 28 Tage",
       "Wahlleistungen"
      ],
      "icon": "User",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g9-donabedian",
  "group": "ausbildung",
  "area": "qualitaet",
  "title": "Pflegequalität nach Donabedian: Struktur-, Prozess- und Ergebnisqualität",
  "icon": "Layers",
  "ar": "الطبيب أفيديس دونابيديان قسّم الجودة إلى ثلاثة مستويات مترابطة: جودة البنية (الإمكانات)، وجودة العملية (طريقة العمل)، وجودة النتيجة (ما تحقق للمريض). البنية الجيدة تسهّل العملية الجيدة وهي تؤدي إلى نتيجة جيدة.",
  "blocks": [
   {
    "h": "Die drei Dimensionen",
    "li": [
     "Strukturqualität: die Rahmenbedingungen, also Voraussetzungen für gute Pflege.",
     "Prozessqualität: die Art und Weise, wie die Pflege geplant und durchgeführt wird.",
     "Ergebnisqualität: die Wirkung der Pflege, also was beim Patienten erreicht wurde.",
     "Die drei Ebenen hängen zusammen: Gute Struktur erleichtert gute Prozesse, gute Prozesse führen zu besseren Ergebnissen."
    ]
   },
   {
    "h": "Beispiele Strukturqualität",
    "li": [
     "Genug und ausreichend qualifiziertes Personal (Fachkraftquote), Personalschlüssel.",
     "Räume, Ausstattung, Hilfsmittel, Pflegebetten, Hebehilfen, Barrierefreiheit.",
     "Konzepte, Leitbild, Standards, Dienstpläne, Fortbildungsangebote.",
     "Rechtliche Vorgaben, Zulassung, Verträge."
    ]
   },
   {
    "h": "Beispiele Prozessqualität",
    "li": [
     "Pflegeprozess nach dem Regelkreis: Assessment, Planung, Durchführung, Evaluation.",
     "Einhaltung von Expertenstandards und hausinternen Standards (zum Beispiel Dekubitusprophylaxe, Sturzprophylaxe).",
     "Übergabe, Dokumentation, Informationsfluss, Zusammenarbeit im Team, Pflegevisite.",
     "Beteiligung von Patienten und Angehörigen, Schmerzassessment, Hygienemaßnahmen."
    ]
   },
   {
    "h": "Beispiele Ergebnisqualität",
    "li": [
     "Wohlbefinden und Zufriedenheit von Patienten, Bewohnern und Angehörigen.",
     "Gesundheitszustand und Selbstständigkeit: wenig Dekubitus, wenige Stürze mit Folgen, Gewicht stabil, Schmerz im Zielbereich.",
     "Kennzahlen: Infektionsrate, Wiederaufnahmerate, Beschwerden, Mitarbeiterzufriedenheit.",
     "Ergebnisqualität wird über Qualitätsindikatoren sichtbar, die regelmäßig erhoben werden."
    ]
   },
   {
    "h": "Prüfungstipp",
    "li": [
     "Bei Beispielen immer fragen: Ist es eine Voraussetzung (Struktur), ein Vorgehen (Prozess) oder ein Ergebnis?",
     "Dienstplan und Personalschlüssel sind Struktur. Die Durchführung der Mobilisation nach Standard ist Prozess. Die Sturzrate ist Ergebnis."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Donabedian: drei Ebenen",
    "steps": [
     {
      "t": "Struktur",
      "s": "Rahmen: Personal, Ausstattung",
      "icon": "Building2",
      "tone": "info"
     },
     {
      "t": "Prozess",
      "s": "Ablauf: Pflegeprozess, Standards",
      "icon": "Workflow",
      "tone": "info"
     },
     {
      "t": "Ergebnis",
      "s": "Wirkung: Zustand, Zufriedenheit",
      "icon": "Target",
      "tone": "ok"
     }
    ],
    "note": "Gute Struktur erleichtert gute Prozesse und gute Ergebnisse."
   },
   {
    "kind": "table",
    "title": "Beispiele zuordnen",
    "head": [
     "Beispiel",
     "Ebene"
    ],
    "rows": [
     [
      "Personalschlüssel",
      "Struktur"
     ],
     [
      "Pflegebett vorhanden",
      "Struktur"
     ],
     [
      "Expertenstandard eingehalten",
      "Prozess"
     ],
     [
      "Pflegevisite durchgeführt",
      "Prozess"
     ],
     [
      "Anzahl neuer Dekubitus",
      "Ergebnis"
     ],
     [
      "Zufriedenheit der Bewohner",
      "Ergebnis"
     ]
    ]
   }
  ]
 },
 {
  "id": "g9-qualitaetsinstrumente-fehler",
  "group": "ausbildung",
  "area": "qualitaet",
  "title": "Instrumente der Pflegequalität und Fehlermanagement (CIRS)",
  "icon": "ChartBar",
  "ar": "تُقاس الجودة وتُحسَّن بأدوات مثل المعايير والتقييمات وزيارة التمريض والتدقيق ودوائر الجودة والمقارنة المرجعية والشهادات. وإدارة الأخطاء تعني تعلُّم المؤسسة من الأخطاء دون البحث عن مذنب، ومن أدواتها نظام الإبلاغ CIRS.",
  "blocks": [
   {
    "h": "Instrumente der Qualitätssicherung",
    "li": [
     "Expertenstandards des DNQP: evidenzbasierte Vorgaben zu wichtigen Pflegethemen, zum Beispiel Sturzprophylaxe oder Dekubitusprophylaxe.",
     "Leitlinien und hausinterne Standards, Verfahrensanweisungen und Checklisten.",
     "Assessmentinstrumente: Skalen wie Braden, Barthel, NRS, MNA, Sturzrisikoskalen.",
     "Pflegevisite: Pflegefachperson und Patient besprechen gemeinsam Stand, Wirkung und Ziele der Pflege.",
     "Audits: systematische Überprüfung von Abläufen und Dokumentation, intern oder extern.",
     "Qualitätszirkel: Mitarbeitende besprechen regelmäßig Probleme und erarbeiten Lösungen.",
     "Benchmarking: Vergleich von Kennzahlen mit anderen Einrichtungen, um von den Besten zu lernen.",
     "Zertifizierung und QM-Systeme: zum Beispiel DIN EN ISO 9001, KTQ oder EFQM.",
     "Beschwerdemanagement, Befragungen und Qualitätsindikatoren."
    ]
   },
   {
    "h": "PDCA-Zyklus",
    "li": [
     "Plan: Problem erkennen, Ziel und Maßnahme planen.",
     "Do: Maßnahme umsetzen, am besten zuerst im kleinen Rahmen.",
     "Check: Wirkung prüfen und mit dem Ziel vergleichen.",
     "Act: Erfolgreiche Lösung verankern oder nachbessern, danach beginnt der Kreis neu."
    ]
   },
   {
    "h": "Fehlermanagement",
    "li": [
     "Fehlerkultur: Fehler gelten als Chance zur Verbesserung. Man sucht Schwachstellen im System, nicht den Schuldigen.",
     "Fehlerarten: Fehler (tatsächlicher Schaden), Beinahe-Fehler (kein Schaden, aber möglich), kritisches Ereignis, unerwünschtes Ereignis.",
     "CIRS (Critical Incident Reporting System): anonymes Meldesystem für kritische Ereignisse und Beinahe-Fehler. Ziel ist Lernen aus Meldungen, nicht Strafe.",
     "Vorgehen: Ereignis melden, Ursachen analysieren (zum Beispiel Fischgräten- oder Ursache-Wirkungs-Diagramm), Maßnahmen ableiten, umsetzen, Wirkung prüfen.",
     "Ursachen liegen oft in Kommunikation, Zeitdruck, Personalmangel, unklaren Abläufen, nicht in Einzelversagen.",
     "Bei einem Fehler mit Schaden: Patient versorgen, Arzt und Leitung informieren, offen mit Patient und Angehörigen sprechen, sachlich dokumentieren.",
     "Typische Beispiele: Medikamentenverwechslung, Sturz, falsche Patientenidentifikation, Hygienefehler. Hilfen: 6-R-Regel, Vier-Augen-Prinzip, Checklisten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "cycle",
    "title": "PDCA-Zyklus",
    "steps": [
     {
      "t": "Plan",
      "s": "Ziel und Maßnahme",
      "icon": "PenLine",
      "tone": "info"
     },
     {
      "t": "Do",
      "s": "Umsetzen",
      "icon": "Wrench",
      "tone": "info"
     },
     {
      "t": "Check",
      "s": "Wirkung prüfen",
      "icon": "Search",
      "tone": "warn"
     },
     {
      "t": "Act",
      "s": "Verankern oder anpassen",
      "icon": "RefreshCw",
      "tone": "ok"
     }
    ]
   },
   {
    "kind": "flow",
    "title": "Wie läuft CIRS?",
    "steps": [
     {
      "t": "Melden",
      "s": "Anonym, ohne Schuldzuweisung",
      "icon": "Megaphone",
      "tone": "info"
     },
     {
      "t": "Analysieren",
      "s": "Ursachen im System suchen",
      "icon": "Search",
      "tone": "info"
     },
     {
      "t": "Maßnahme",
      "s": "Abläufe verbessern",
      "icon": "Wrench",
      "tone": "ok"
     },
     {
      "t": "Prüfen",
      "s": "Hat es gewirkt?",
      "icon": "ClipboardCheck",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g9-kuendigung",
  "group": "ausbildung",
  "area": "recht",
  "title": "Kündigung: Arten, Fristen, Kündigungsschutz und Abmahnung",
  "icon": "DoorOpen",
  "ar": "إنهاء عقد العمل قد يكون عادياً بمهلة أو فورياً لسبب خطير. يجب أن يكون كتابياً. وفي المنشآت الأكبر يحمي قانون الحماية من الفصل العامل فلا يُفصل إلا لسبب مبرر. وهناك فئات لها حماية خاصة، ومهلة قصيرة لرفع الدعوى.",
  "blocks": [
   {
    "h": "Arten der Kündigung",
    "li": [
     "Ordentliche Kündigung: mit Kündigungsfrist, durch Arbeitgeber oder Arbeitnehmer. Der Grund muss beim Arbeitnehmer nicht genannt werden.",
     "Außerordentliche (fristlose) Kündigung: nur bei wichtigem Grund (§ 626 BGB), wenn die Fortsetzung bis zum Fristende unzumutbar ist, zum Beispiel Diebstahl, schwere Verletzung der Pflichten, Gewalt. Sie muss innerhalb von zwei Wochen ab Kenntnis des Grundes ausgesprochen werden.",
     "Änderungskündigung: Kündigung verbunden mit dem Angebot, zu geänderten Bedingungen weiterzuarbeiten.",
     "Aufhebungsvertrag: Arbeitgeber und Arbeitnehmer beenden das Arbeitsverhältnis einvernehmlich. Vorsicht: Beim Arbeitslosengeld kann eine Sperrzeit drohen.",
     "Befristung endet automatisch zum vereinbarten Datum."
    ]
   },
   {
    "h": "Form und Frist",
    "li": [
     "Schriftform ist Pflicht (§ 623 BGB): Eigenhändig unterschrieben auf Papier. E-Mail, WhatsApp und Fax genügen nicht.",
     "Gesetzliche Grundfrist (§ 622 BGB): vier Wochen zum 15. oder zum Ende eines Kalendermonats.",
     "Für Kündigungen durch den Arbeitgeber verlängert sich die Frist mit der Betriebszugehörigkeit: nach 2 Jahren 1 Monat, nach 5 Jahren 2 Monate, nach 8 Jahren 3 Monate, nach 10 Jahren 4 Monate, nach 12 Jahren 5 Monate, nach 15 Jahren 6 Monate, nach 20 Jahren 7 Monate, jeweils zum Monatsende.",
     "Probezeit: längstens sechs Monate, in dieser Zeit mit einer Frist von zwei Wochen kündbar.",
     "Tarifvertrag oder Arbeitsvertrag können abweichende Fristen regeln. Die Kündigung muss dem Empfänger zugehen."
    ]
   },
   {
    "h": "Kündigungsschutzgesetz (KSchG)",
    "li": [
     "Gilt in Betrieben mit mehr als 10 Beschäftigten und nach mehr als 6 Monaten Betriebszugehörigkeit.",
     "Der Arbeitgeber darf nur kündigen, wenn die Kündigung sozial gerechtfertigt ist, aus drei Gründen: personenbedingt (zum Beispiel lange Krankheit mit negativer Prognose), verhaltensbedingt (Pflichtverletzung) oder betriebsbedingt (Wegfall des Arbeitsplatzes).",
     "Verhaltensbedingte Kündigung setzt in der Regel eine vorherige Abmahnung voraus.",
     "Bei betriebsbedingter Kündigung ist eine Sozialauswahl nötig (Betriebszugehörigkeit, Alter, Unterhaltspflichten, Schwerbehinderung).",
     "Ein Betriebsrat muss vor jeder Kündigung angehört werden. Sonst ist die Kündigung unwirksam."
    ]
   },
   {
    "h": "Abmahnung und Klage",
    "li": [
     "Abmahnung: Rüge einer konkreten Pflichtverletzung mit Hinweis auf die Folgen bei Wiederholung. Sie hat Rüge-, Dokumentations- und Warnfunktion.",
     "Arbeitnehmer können Stellung nehmen, die Abmahnung kann mit Gegendarstellung in der Personalakte ergänzt werden.",
     "Kündigungsschutzklage: Innerhalb von 3 Wochen nach Zugang der Kündigung beim Arbeitsgericht erheben, sonst gilt die Kündigung als wirksam.",
     "Arbeitsagentur: Wer gekündigt wird, muss sich spätestens drei Tage nach Kenntnis arbeitssuchend melden."
    ]
   },
   {
    "h": "Besonderer Kündigungsschutz",
    "li": [
     "Schwangere und Mütter bis vier Monate nach der Geburt, Beschäftigte in Elternzeit.",
     "Schwerbehinderte Menschen: Kündigung nur mit Zustimmung des Integrationsamts.",
     "Betriebsratsmitglieder, Auszubildende (nach der Probezeit nur außerordentlich kündbar), Beschäftigte in Pflegezeit."
    ]
   },
   {
    "h": "Nach der Kündigung",
    "li": [
     "Anspruch auf ein Arbeitszeugnis (einfach oder qualifiziert) und Resturlaub oder dessen Abgeltung.",
     "Eigenkündigung: Schriftlich, Frist beachten, Resturlaub und Überstunden klären, Zeugnis verlangen.",
     "Bei Unsicherheit Beratung bei Gewerkschaft, Betriebsrat, Fachanwalt oder Arbeitsgericht-Rechtsantragsstelle suchen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Ordentlich oder fristlos?",
    "cols": [
     {
      "t": "Ordentlich",
      "items": [
       "Mit Kündigungsfrist",
       "Grund beim Arbeitnehmer nicht nötig",
       "KSchG gilt bei Arbeitgeberkündigung"
      ],
      "icon": "Calendar",
      "tone": "info"
     },
     {
      "t": "Fristlos",
      "items": [
       "Nur wichtiger Grund (§ 626)",
       "Innerhalb von 2 Wochen",
       "Meist nach Abmahnung"
      ],
      "icon": "Siren",
      "tone": "bad"
     }
    ]
   },
   {
    "kind": "flow",
    "title": "Kündigung erhalten: was tun?",
    "steps": [
     {
      "t": "Prüfen",
      "s": "Schriftform, Unterschrift, Frist",
      "icon": "Search",
      "tone": "info"
     },
     {
      "t": "Melden",
      "s": "Arbeitsagentur binnen 3 Tagen",
      "icon": "Phone",
      "tone": "warn"
     },
     {
      "t": "Beraten lassen",
      "s": "Gewerkschaft, Anwalt",
      "icon": "Users",
      "tone": "info"
     },
     {
      "t": "Klagen",
      "s": "Innerhalb von 3 Wochen",
      "icon": "Scale",
      "tone": "bad"
     }
    ]
   }
  ]
 }
];
