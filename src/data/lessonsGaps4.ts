/** Ergänzende Lektionen 4: Glasl, Testament, BGM, Geschichte der Pflege, Sozialrecht/UN-BRK, Praktische Prüfung. */
import type { Lesson } from "./lessons";

export const GAPS4_LESSONS: Lesson[] = [
 {
  "id": "g4-glasl",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Konflikteskalation nach Glasl",
  "icon": "Flame",
  "ar": "يصف غلاسل تصاعد النزاع في تسع مراحل وثلاث مستويات. في المستوى الأول يمكن للطرفين الربح معاً، في الثاني يصبح أحدهما رابحاً والآخر خاسراً، وفي الثالث يخسر الجميع. كلما كان التدخل أبكر كان الحل أسهل.",
  "blocks": [
   {
    "h": "Neun Stufen in drei Phasen",
    "li": [
     "Phase 1 (gewinnen – gewinnen): 1 Verhärtung, 2 Debatte und Polemik, 3 Taten statt Worte.",
     "Phase 2 (gewinnen – verlieren): 4 Sorge um Image und Koalitionen, 5 Gesichtsverlust, 6 Drohstrategien.",
     "Phase 3 (verlieren – verlieren): 7 begrenzte Vernichtungsschläge, 8 Zersplitterung, 9 gemeinsam in den Abgrund."
    ]
   },
   {
    "h": "Umgang im Team",
    "li": [
     "Früh ansprechen: auf Stufe 1 bis 3 helfen Klärungsgespräche und Ich-Botschaften.",
     "Ab Stufe 4 braucht es oft Moderation durch eine neutrale Person (Stationsleitung, Mediator).",
     "Ab Stufe 7 ist meist eine Machtinstanz nötig (Vorgesetzte, Schlichtung).",
     "Sachebene und Beziehungsebene trennen, Interessen statt Positionen klären."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Eskalationsstufen nach Glasl",
    "steps": [
     {
      "t": "Verhärtung, Debatte, Taten",
      "s": "Phase 1: gewinnen–gewinnen",
      "icon": "Handshake",
      "tone": "ok"
     },
     {
      "t": "Image, Gesichtsverlust, Drohung",
      "s": "Phase 2: gewinnen–verlieren",
      "icon": "Frown",
      "tone": "warn"
     },
     {
      "t": "Vernichtung, Zersplitterung, Abgrund",
      "s": "Phase 3: verlieren–verlieren",
      "icon": "Flame",
      "tone": "bad"
     }
    ]
   }
  ]
 },
 {
  "id": "g4-testament",
  "group": "ausbildung",
  "area": "recht",
  "title": "Testament, Nottestament und Vollmachten",
  "icon": "BookOpen",
  "ar": "يمكن للمريض أن يكتب وصيته بخط يده كاملة أو عند الموثق. في حالة الخطر الداهم على الحياة يمكن إجراء وصية الطوارئ أمام ثلاثة شهود. على الممرضة ألا تكون شاهداً إن كانت مستفيدة، وألا تؤثر على قرار المريض. التوكيل يختلف عن الوصية: الأول للحياة والثاني بعد الموت.",
  "blocks": [
   {
    "h": "Ordentliche Testamente",
    "li": [
     "Eigenhändiges Testament: vollständig handschriftlich, mit Ort, Datum und Unterschrift.",
     "Öffentliches Testament: vor einem Notar, auch wenn die Person nicht schreiben kann.",
     "Voraussetzung: Testierfähigkeit, also Einsicht in die Bedeutung der Erklärung."
    ]
   },
   {
    "h": "Nottestament",
    "li": [
     "Bei naher Todesgefahr kann mündlich vor drei Zeugen testiert werden (Dreizeugentestament).",
     "Über die Erklärung wird ein Protokoll geschrieben und unterschrieben.",
     "Zeugen dürfen nicht begünstigt werden. Pflegende sollten nicht beeinflussen und sich Rat bei der Leitung holen.",
     "Das Nottestament gilt nur begrenzt (drei Monate, wenn die Person überlebt)."
    ]
   },
   {
    "h": "Abgrenzung",
    "li": [
     "Testament regelt den Nachlass nach dem Tod.",
     "Vorsorgevollmacht und Patientenverfügung gelten zu Lebzeiten, wenn die Person nicht mehr selbst entscheiden kann.",
     "Pflegende beraten nicht rechtlich, sondern verweisen an Notar oder Betreuungsbehörde."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Testament oder Verfügung?",
    "cols": [
     {
      "t": "Testament",
      "items": [
       "gilt nach dem Tod",
       "regelt Erbe"
      ],
      "icon": "BookOpen",
      "tone": "info"
     },
     {
      "t": "Vollmacht und Verfügung",
      "items": [
       "gilt zu Lebzeiten",
       "regelt Entscheidungen"
      ],
      "icon": "ShieldCheck",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g4-bgm",
  "group": "ausbildung",
  "area": "gesundheit",
  "title": "Betriebliches Gesundheitsmanagement",
  "icon": "Users",
  "ar": "إدارة الصحة المهنية تشمل حماية العمل (إلزامية) وإدارة إعادة الإدماج وتعزيز الصحة في العمل (طوعي). في التمريض تهدف إلى تقليل الإرهاق والأمراض الظهرية والإنهاك النفسي وتحسين رضا العاملين.",
  "blocks": [
   {
    "h": "Drei Säulen",
    "li": [
     "Arbeitsschutz: gesetzlich vorgeschrieben (Gefährdungsbeurteilung, Schutzkleidung, Impfangebote).",
     "Betriebliches Eingliederungsmanagement (BEM): bei längerer Krankheit Wiedereingliederung.",
     "Betriebliche Gesundheitsförderung: freiwillig, z. B. Rückenschule, Supervision, Sportangebote."
    ]
   },
   {
    "h": "Belastungen in der Pflege",
    "li": [
     "Körperlich: Heben und Tragen, Rückenschmerzen, Schichtarbeit.",
     "Psychisch: Zeitdruck, Leid und Tod, Konflikte, Burn-out-Gefahr.",
     "Hilfen: kinästhetische Hilfsmittel, verlässliche Dienstpläne, Supervision, Pausen, Fortbildung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "BGM auf einen Blick",
    "items": [
     {
      "t": "Arbeitsschutz",
      "s": "Pflicht",
      "icon": "ShieldCheck",
      "tone": "ok"
     },
     {
      "t": "BEM",
      "s": "nach Krankheit",
      "icon": "HeartHandshake",
      "tone": "info"
     },
     {
      "t": "Förderung",
      "s": "freiwillig",
      "icon": "Sparkles",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g4-geschichte",
  "group": "ausbildung",
  "area": "start",
  "title": "Geschichte der Pflege: Von der Nächstenliebe bis zur Profession",
  "icon": "BookOpen",
  "ar": "بدأ التمريض بدافع ديني وإنساني (الرهبان والراهبات)، ثم أصبح مهنة بفضل فلورنس نايتنغيل. في العهد النازي تعرّض التمريض لجرائم مثل برنامج القتل «Aktion T4». اليوم التمريض مهنة مستقلة قائمة على العلم وأخلاقيات المهنة.",
  "blocks": [
   {
    "h": "Meilensteine",
    "li": [
     "Mittelalter: Pflege vor allem durch Orden und Klöster aus christlicher Nächstenliebe.",
     "19. Jahrhundert: Florence Nightingale begründet die moderne Krankenpflege (Hygiene, Ausbildung, Statistik).",
     "Rotes Kreuz, Diakonie und Caritas bauen die Pflege in Deutschland aus.",
     "20. Jahrhundert: staatliche Ausbildung, Krankenpflegegesetz, später Pflegewissenschaft an Hochschulen.",
     "Seit 2020: Pflegeberufegesetz mit generalistischer Ausbildung zur Pflegefachperson."
    ]
   },
   {
    "h": "Nationalsozialismus: Verantwortung",
    "li": [
     "Pflegende waren an den Krankenmorden (Aktion T4) beteiligt; Menschen mit Behinderung wurden getötet.",
     "Die Erinnerung mahnt: Würde, Selbstbestimmung und Menschenrechte sind Grundlage der Pflege."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Wege zur Profession",
    "steps": [
     {
      "t": "Nächstenliebe",
      "s": "Klöster, Orden",
      "icon": "Heart",
      "tone": "info"
     },
     {
      "t": "Nightingale",
      "s": "Ausbildung, Hygiene",
      "icon": "Sparkles",
      "tone": "ok"
     },
     {
      "t": "Pflegeberufegesetz",
      "s": "Generalistik",
      "icon": "BookOpen",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g4-sozialrecht",
  "group": "ausbildung",
  "area": "recht",
  "title": "Sozialrecht-Prinzipien und Rechte behinderter Menschen",
  "icon": "Layers",
  "ar": "يقوم الضمان الاجتماعي الألماني على التضامن والمساواة والتكافل. اتفاقية الأمم المتحدة لحقوق ذوي الإعاقة تضمن المشاركة وتقرير المصير. يمكن لذوي الإعاقة الزواج وتأسيس أسرة، وللتمريض دور في التمكين لا في الوصاية.",
  "blocks": [
   {
    "h": "Prinzipien der Sozialversicherung",
    "li": [
     "Solidarprinzip: Gesunde tragen mit, Kranke werden unterstützt.",
     "Versicherungs- und Äquivalenzprinzip: Beiträge nach Einkommen, Leistungen nach Bedarf.",
     "Subsidiaritätsprinzip: erst Eigenhilfe, dann Familie, dann Staat.",
     "Sachleistungsprinzip: Behandlung wird direkt von der Kasse bezahlt."
    ]
   },
   {
    "h": "UN-Behindertenrechtskonvention",
    "li": [
     "Ziele: Teilhabe, Selbstbestimmung, Inklusion, Barrierefreiheit.",
     "Menschen mit Behinderung dürfen heiraten, eine Familie gründen und über ihren Körper selbst bestimmen.",
     "Unterstützte Entscheidungsfindung statt Entmündigung: Betreuung nur so weit wie nötig.",
     "Pflege stärkt Ressourcen und begleitet, statt zu bevormunden."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "pyramid",
    "title": "Von Selbsthilfe zu staatlicher Hilfe",
    "levels": [
     {
      "t": "Staat",
      "s": "Subsidiarität",
      "icon": "Layers",
      "tone": "info"
     },
     {
      "t": "Familie, Netzwerk",
      "icon": "Users",
      "tone": "info"
     },
     {
      "t": "Eigenverantwortung",
      "icon": "Handshake",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g4-pruefung-pflegeprozess",
  "group": "ausbildung",
  "area": "start",
  "title": "Praktische Prüfung: Pflegeprozess und Ablaufplan",
  "icon": "ClipboardList",
  "ar": "في الامتحان العملي تتلقى تسليماً لحالة ثم تحلل الموقف، تخطط الرعاية (الموارد والمشكلات والأهداف والإجراءات)، تضع خطة زمنية، تنفذ وتشرح الإجراءات، تقيّم، ثم تختم. الأهم الأولويات والمواعيد الثابتة والسلامة والتواصل.",
  "blocks": [
   {
    "h": "Ablauf der Prüfung",
    "li": [
     "Übergabe der Pflegesituation erhalten und Informationen ordnen.",
     "Situation analysieren: Akteure, Informationen, Handlungsanlässe.",
     "Pflegeplanung: Ressourcen, Probleme, Ziele, Maßnahmen.",
     "Ablaufplan mit Zeiten und Prioritäten erstellen und begründen.",
     "Pflegemaßnahmen durchführen und erklären (Hygiene, Sicherheit, Kommunikation).",
     "Evaluieren, dokumentieren, übergeben und reflektieren."
    ]
   },
   {
    "h": "Pflegeprozessmodelle",
    "li": [
     "Fiechter und Meier: sechs Schritte (Informationen, Probleme und Ressourcen, Ziele, Planung, Durchführung, Evaluation).",
     "WHO und Krohwinkel: vier Schritte (Einschätzung, Planung, Durchführung, Evaluation).",
     "NANDA: fünf Schritte mit Pflegediagnosen.",
     "Strukturierungshilfen: ATL, ABEDL, SIS (Strukturmodell)."
    ]
   },
   {
    "h": "Tipps",
    "li": [
     "Feste Termine (Infusion, Untersuchung) zuerst einplanen, Puffer lassen.",
     "Immer laut mitdenken: was, warum, wie.",
     "Dokumentation darf handschriftlich oder digital erfolgen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "cycle",
    "title": "Pflegeprozess",
    "steps": [
     {
      "t": "Informationen",
      "icon": "Eye",
      "tone": "info"
     },
     {
      "t": "Probleme, Ziele",
      "icon": "ClipboardList",
      "tone": "info"
     },
     {
      "t": "Planung",
      "icon": "Compass",
      "tone": "info"
     },
     {
      "t": "Durchführung",
      "icon": "Stethoscope",
      "tone": "ok"
     },
     {
      "t": "Evaluation",
      "icon": "Activity",
      "tone": "ok"
     }
    ]
   }
  ]
 }
];
