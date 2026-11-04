/** Ergänzende Lektionen 3 (Psychiatrie-Überblick, Total Pain, Entspannung, Kreative Therapie, Psychopharmaka, Geriatrie, Validation, Gewalt, Ethik, Pflegediagnosen, Sucht, Somatoforme Störungen, Borderline/Narzissmus, Trauma und Krisen). In eigenen Worten und vereinfacht. */
import type { Lesson } from "./lessons";

export const GAPS3_LESSONS: Lesson[] = [
 {
  "id": "g3-psychiatrie-ueberblick",
  "group": "ausbildung",
  "area": "therapie",
  "title": "Psychiatrie: Fachgebiet, Berufe und Therapieformen",
  "icon": "Brain",
  "ar": "الطب النفسي تخصص يعالج تشخيص الاضطرابات النفسية وعلاجها والوقاية منها. الطبيب النفسي (Psychiater) طبيب متخصص ويصف الأدوية، أما المعالج النفسي (Psychotherapeut) فيعالج بالحديث بلا أدوية، وعالم النفس (Psychologe) يقدم الإرشاد. العلاجات: علاج نفسي، أدوية، تثقيف، تقنيات استرخاء، علاج وظيفي، علاج بالضوء، علاج بالصدمة الكهربائية (EKT)، تأهيل، علاج إبداعي.",
  "blocks": [
   {
    "h": "Was ist Psychiatrie?",
    "li": [
     "Ein medizinisches Fachgebiet für Diagnose, Behandlung und Vorbeugung psychischer Störungen.",
     "Ziele: Heilung oder Linderung von Symptomen, Eingliederung ins gesellschaftliche Leben, Förderung der psychischen Gesundheit und bessere Lebensqualität.",
     "Ein weiteres Ziel ist der Kampf gegen Stigmatisierung: Menschen mit psychischen Erkrankungen sollen nicht ausgegrenzt werden."
    ]
   },
   {
    "h": "Wer macht was?",
    "li": [
     "Psychologe: Beratung und Coaching, keine Behandlung von Krankheiten.",
     "Psychotherapeut: Diagnose und Behandlung seelischer Erkrankungen durch Gespräche, aber keine Verschreibung von Medikamenten.",
     "Psychiater (Facharzt): Diagnose und Therapie, darf Medikamente verschreiben.",
     "Neurologe (Facharzt): Diagnose und Therapie von Erkrankungen des Nervensystems, darf Medikamente verschreiben."
    ]
   },
   {
    "h": "Teilbereiche",
    "li": [
     "Allgemeinpsychiatrie: Erwachsene. Kinder- und Jugendpsychiatrie: unter 21 Jahren.",
     "Gerontopsychiatrie: Menschen im höheren Alter. Akutpsychiatrie: psychiatrische Notfälle.",
     "Suchtmedizin: Missbrauch und Abhängigkeit. Neuropsychiatrie: Einfluss neurologischer Erkrankungen auf die Psyche. Psychopathologie: Lehre der Symptome."
    ]
   },
   {
    "h": "Therapieformen",
    "li": [
     "Psychotherapie: z. B. Verhaltenstherapie, tiefenpsychologische Therapie, Psychoanalyse, Paar- und Familientherapie.",
     "Psychopharmaka: Medikamente, die Stoffwechselvorgänge im Gehirn beeinflussen.",
     "Psychoedukation: Schulung und Aufklärung von Betroffenen und Angehörigen, auch Selbsthilfegruppen.",
     "Ergotherapie: fördert psychische und soziale Fähigkeiten durch praktische Tätigkeiten.",
     "Lichttherapie: hilft bei jahreszeitlich abhängigen depressiven Episoden.",
     "Elektrokonvulsionstherapie (EKT): elektrische Stimulation des Gehirns bei schweren Depressionen, unter Narkose.",
     "Rehabilitationstherapie: Wiedereingliederung in den Alltag. Dazu kommen Entspannungsverfahren und kreative Therapien."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Wer darf Medikamente verschreiben?",
    "cols": [
     {
      "t": "Psychologe",
      "items": [
       "Beratung, Coaching",
       "keine Krankheitsbehandlung",
       "keine Medikamente"
      ],
      "icon": "Users",
      "tone": "warn"
     },
     {
      "t": "Psychotherapeut",
      "items": [
       "Behandlung durch Gespräche",
       "keine Medikamente"
      ],
      "icon": "MessageCircle",
      "tone": "info"
     },
     {
      "t": "Psychiater",
      "items": [
       "Facharzt",
       "Diagnose und Therapie",
       "darf Medikamente verschreiben"
      ],
      "icon": "Stethoscope",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g3-total-pain",
  "group": "ausbildung",
  "area": "therapie",
  "title": "Total-Pain-Konzept und Pain Nurse",
  "icon": "Feather",
  "ar": "مفهوم الألم الكلي (Total Pain) يقول إن الألم ليس جسدياً فقط بل نفسياً واجتماعياً وروحياً أيضاً. الهدف تحديد كل أبعاد الألم وعلاجها، خاصة في الرعاية التلطيفية. الممرضة المختصة بالألم (Pain Nurse) ممرضة مدربة على رعاية المصابين بآلام حادة أو مزمنة: تقييم الألم، إدارة الألم، الاستشارة، التعاون بين التخصصات، التوثيق وتحسين جودة الحياة.",
  "blocks": [
   {
    "h": "Total Pain: Schmerz hat vier Dimensionen",
    "li": [
     "Das Konzept stammt aus der Palliativmedizin. Schmerz ist nicht nur körperlich, sondern auch seelisch, sozial und spirituell.",
     "Körperlich: Nebenwirkungen der Therapie, Tumorwachstum.",
     "Psychisch: Abschied von Angehörigen, Angst vor Schmerz und Tod.",
     "Sozial: Sorge um die Familie, Verlust der sozialen Rolle.",
     "Spirituell: Fragen wie „Warum ich?“ und „Welchen Sinn hat mein Leben?“.",
     "Ziel: alle Dimensionen erkennen und behandeln, vor allem in der Palliativversorgung."
    ]
   },
   {
    "h": "Pain Nurse",
    "li": [
     "Eine speziell weitergebildete Pflegefachkraft für Menschen mit akuten oder chronischen Schmerzen.",
     "Schmerzassessment: Intensität, Art und Auswirkungen erfassen und bewerten.",
     "Schmerzmanagement: Schmerztherapie planen, durchführen und überwachen.",
     "Beratung und Aufklärung: Betroffene und Angehörige informieren und schulen.",
     "Interdisziplinäre Zusammenarbeit mit Ärzten, Therapeuten und anderen Fachpersonen.",
     "Dokumentation und Evaluation: Wirkung prüfen und die Therapie bei Bedarf anpassen. Ziel: mehr Lebensqualität und Wohlbefinden."
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
      "s": "Nebenwirkungen, Tumor",
      "icon": "Activity",
      "tone": "bad"
     },
     {
      "t": "Psychisch",
      "s": "Angst, Abschied",
      "icon": "Brain",
      "tone": "info"
     },
     {
      "t": "Sozial",
      "s": "Sorge um Familie, Rolle",
      "icon": "Users",
      "tone": "warn"
     },
     {
      "t": "Spirituell",
      "s": "Sinn, „Warum ich?“",
      "icon": "Sparkles",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g3-entspannung",
  "group": "ausbildung",
  "area": "therapie",
  "title": "Entspannungstechniken: Autogenes Training, Meditation, Achtsamkeit, Jacobson",
  "icon": "Moon",
  "ar": "تقنيات الاسترخاء تهدّئ الجسم والعقل وتقلل التوتر. التدريب الذاتي (Autogenes Training): استرخاء ذاتي بالإيحاء مع تمارين الثقل والدفء والتنفس والبطن والجبهة. التأمل: هدوء داخلي وتركيز على التنفس. تدريب اليقظة الذهنية: وعي غير حاكم باللحظة الحاضرة. الاسترخاء العضلي التدريجي لجاكوبسون: شد وإرخاء مجموعات عضلية بالتتابع.",
  "blocks": [
   {
    "h": "Wozu Entspannungstechniken?",
    "li": [
     "Sie beruhigen Körper und Geist, bauen Stress ab und verbessern das Wohlbefinden.",
     "Sie werden in der Psychiatrie und im Alltag eingesetzt, z. B. bei Angst, Anspannung und Schlafproblemen."
    ]
   },
   {
    "h": "Autogenes Training",
    "li": [
     "Selbst herbeigeführte Entspannung durch Suggestion, im Liegen oder Sitzen.",
     "Schwereübung: „Mein rechter Arm ist schwer.“ Wärmeübung: „Mein linker Arm ist warm.“",
     "Atemübung: „Mein Atem fließt ruhig.“ Bauchübung: „Mein Bauch ist schön warm.“ Kopfübung: „Meine Stirn ist angenehm kühl.“"
    ]
   },
   {
    "h": "Meditation",
    "li": [
     "Fördert innere Ruhe, Konzentration und emotionales Gleichgewicht; meist im Sitzen.",
     "Fokus auf die Atmung; Formen: geführte oder transzendentale Meditation, mit Hilfe eines Objekts oder Mantras.",
     "Ruhige, angenehme Umgebung; als mentales Training gegen Stress und Angst."
    ]
   },
   {
    "h": "Achtsamkeitstraining",
    "li": [
     "Ein bewusstes und nicht wertendes Gewahrsein entwickeln, mit Konzentration auf gegenwärtige Erfahrungen.",
     "Fokus auf Körperempfindungen, Gedanken und Gefühle; Beispiele: Achtsamkeitsmeditation und achtsame Bewegungen."
    ]
   },
   {
    "h": "Progressive Muskelentspannung nach Jacobson",
    "li": [
     "Ziel: tiefe körperliche Entspannung durch systematisches An- und Entspannen verschiedener Muskelgruppen.",
     "In bestimmter Reihenfolge werden einzelne Muskelgruppen einige Sekunden angespannt und danach wieder entspannt.",
     "So entsteht ein tieferes Bewusstsein für den Unterschied zwischen Anspannung und Entspannung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Vier Verfahren im Vergleich",
    "head": [
     "Verfahren",
     "Kern"
    ],
    "rows": [
     [
      "Autogenes Training",
      "Suggestion: schwer, warm, ruhig"
     ],
     [
      "Meditation",
      "Atmung, Mantra, innere Ruhe"
     ],
     [
      "Achtsamkeit",
      "Gegenwart ohne Bewertung"
     ],
     [
      "Jacobson",
      "Anspannen und Loslassen der Muskeln"
     ]
    ]
   }
  ]
 },
 {
  "id": "g3-kreative-therapie",
  "group": "ausbildung",
  "area": "therapie",
  "title": "Kreative Therapie: Kunst, Musik und Tanz",
  "icon": "Palette",
  "ar": "العلاج الإبداعي يعزز التعبير العاطفي وإدراك الذات والصحة النفسية الاجتماعية، ويوفر طريقة بديلة للتعبير عن الأفكار والمشاعر وتفريغ التوترات. العلاج بالفن: الرسم، الفخار، الكولاج، الأقنعة والمنحوتات. العلاج بالموسيقى: الغناء والعزف والارتجال وكتابة النصوص، وللموسيقى أثر مهدئ. العلاج بالرقص: الحركة لحل الانسدادات الجسدية والعاطفية وتحسين إدراك الجسد.",
  "blocks": [
   {
    "h": "Wozu kreative Therapie?",
    "li": [
     "Sie fördert emotionalen Ausdruck, Selbstwahrnehmung und psychosoziale Gesundheit.",
     "Sie bietet eine Alternative, Gedanken und Gefühle auszudrücken und innere Spannungen loszulassen, wenn Worte nicht reichen."
    ]
   },
   {
    "h": "Kunsttherapie",
    "li": [
     "Innere Konflikte und Emotionen werden durch Gestaltung sichtbar gemacht.",
     "Beispiele: Malen und Zeichnen, Töpfern und Arbeiten mit Ton, Collagen, Masken und Skulpturen."
    ]
   },
   {
    "h": "Musiktherapie",
    "li": [
     "Musik fördert emotionale, kognitive und soziale Fähigkeiten und kann beruhigen und die Stimmung verbessern.",
     "Beispiele: Lieder singen, Instrumente spielen, Improvisation, Texte schreiben."
    ]
   },
   {
    "h": "Tanztherapie",
    "li": [
     "Nutzt Bewegung, um körperliche und emotionale Blockaden zu lösen, und fördert die Körperwahrnehmung.",
     "Beispiele: freies Tanzen, geleitete Bewegungen, Partner- und Gruppentänze, Wahrnehmungsübungen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Drei kreative Wege",
    "items": [
     {
      "t": "Kunst",
      "s": "Malen, Ton, Collage",
      "icon": "Palette",
      "tone": "info"
     },
     {
      "t": "Musik",
      "s": "Singen, Spielen, Improvisieren",
      "icon": "Sparkles",
      "tone": "ok"
     },
     {
      "t": "Tanz",
      "s": "Bewegung löst Blockaden",
      "icon": "Activity",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g3-psychopharmaka",
  "group": "ausbildung",
  "area": "therapie",
  "title": "Psychopharmaka im Überblick",
  "icon": "Pill",
  "ar": "الأدوية النفسية تُصنف حسب الأثر والأعراض. مضادات الاكتئاب ترفع المزاج والنشاط (فلوكستين، سيرترالين) وقد تزيد خطر الانتحار في البداية. البنزوديازيبينات مهدئة ومضادة للقلق لكنها تسبب الإدمان (فاليوم، أتيفان، زاناكس). مضادات الذهان تمنع الهلاوس والهذيان (هالدول، ريسبردال، زيبركسا) وتسبب زيادة الوزن. مضادات الخرف (دونيبيزيل، ميمانتين). المنومات (زولبيديم، زوبيكلون). المهدئات (فاليريان، باربيتورات).",
  "blocks": [
   {
    "h": "Antidepressiva",
    "li": [
     "Wirkung: stimmungsaufhellend und antriebssteigernd; erhöhen die Konzentration von Serotonin und Noradrenalin.",
     "Nebenwirkungen: Übelkeit, Schwindel, Müdigkeit, Mundtrockenheit, zu Beginn ggf. erhöhte Suizidgefahr.",
     "Beispiele: Fluoxetin, Sertralin, Duloxetin, Venlafaxin, Tranylcypromin, Amitriptylin, Nortriptylin."
    ]
   },
   {
    "h": "Benzodiazepine",
    "li": [
     "Wirkung: beruhigend, angstlösend, muskelentspannend; verstärken die Wirkung des Botenstoffs GABA.",
     "Nebenwirkungen: Müdigkeit, Schwindel, Verstopfung, Wechselwirkungen, hohe Abhängigkeit, Gedächtnisstörungen.",
     "Beispiele: Diazepam (Valium), Lorazepam (Tavor), Alprazolam (Xanax)."
    ]
   },
   {
    "h": "Neuroleptika",
    "li": [
     "Wirkung: verhindern Halluzinationen, Wahn und Angstzustände; blockieren Dopaminrezeptoren im Gehirn.",
     "Nebenwirkungen: Gewichtszunahme, Müdigkeit, Bewegungseinschränkungen, Stoffwechselveränderungen.",
     "Beispiele: Haloperidol (Haldol), Risperidon (Risperdal), Olanzapin (Zyprexa)."
    ]
   },
   {
    "h": "Antidementiva",
    "li": [
     "Wirkung: verbessern kognitive Funktionen; hemmen den Abbau von Acetylcholin.",
     "Nebenwirkungen: Übelkeit, Kopfschmerzen, Schwindel, Durchfall.",
     "Beispiele: Donepezil (Aricept), Rivastigmin (Exelon), Memantin (Namenda)."
    ]
   },
   {
    "h": "Sedativa und Hypnotika",
    "li": [
     "Sedativa: beruhigend, verringern Ängste, dämpfen das zentrale Nervensystem. Nebenwirkungen: Abhängigkeit, Atemdepression bei Überdosierung, Schläfrigkeit.",
     "Beispiele für Sedativa: Baldrian (pflanzlich), Benzodiazepine, Barbiturate.",
     "Hypnotika: schlaffördernd, senken die neuronale Erregbarkeit im Gehirn. Nebenwirkungen: Abhängigkeit, Schwindel, Verwirrtheit.",
     "Beispiele für Hypnotika: Zolpidem, Zopiclon, Temazepam, Flurazepam."
    ]
   },
   {
    "h": "Pflege achtet auf",
    "li": [
     "Wirkung und Nebenwirkungen beobachten und dokumentieren, Ärzte bei Auffälligkeiten informieren.",
     "Bei älteren Menschen auf Sturzgefahr durch Müdigkeit und Schwindel achten.",
     "Medikamente nie eigenmächtig absetzen und Abhängigkeitsrisiko beachten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Gruppen, Wirkung und Beispiel",
    "head": [
     "Gruppe",
     "Wirkung",
     "Beispiel"
    ],
    "rows": [
     [
      "Antidepressiva",
      "Stimmung hebt, Antrieb steigt",
      "Sertralin"
     ],
     [
      "Benzodiazepine",
      "beruhigend, angstlösend",
      "Diazepam"
     ],
     [
      "Neuroleptika",
      "gegen Wahn und Halluzinationen",
      "Haloperidol"
     ],
     [
      "Antidementiva",
      "bessere Kognition",
      "Donepezil"
     ],
     [
      "Hypnotika",
      "schlaffördernd",
      "Zolpidem"
     ]
    ]
   }
  ]
 },
 {
  "id": "g3-geriatrie",
  "group": "ausbildung",
  "area": "lebensphasen",
  "title": "Geriatrie: Aufgaben, Ziele und Assessments",
  "icon": "Users",
  "ar": "طب الشيخوخة (Geriatrie) تخصص طبي يعنى بصحة المسنين ومرضهم. مهامه: تشخيص وعلاج الأمراض الحادة والمزمنة، التأهيل، الرعاية الاجتماعية الطبية، وتعدد الأمراض (Multimorbidität). أهدافه: الحفاظ على الاستقلالية، تحسين جودة الحياة، تقليل أو تجنب الحاجة للرعاية، تعزيز الحركة والقدرة الوظيفية والمشاركة الاجتماعية. أدوات التقييم: MMST، اختبار Timed Up and Go، مقياس الاكتئاب للمسنين، مؤشر بارثل، فحص خطر سوء التغذية، تقييم الألم.",
  "blocks": [
   {
    "h": "Was ist Geriatrie?",
    "li": [
     "Auch Altersmedizin genannt: ein medizinisches Fachgebiet für Gesundheit und Krankheit älterer Menschen.",
     "Aufgaben: Diagnostik und Behandlung bei akuten und chronischen Erkrankungen, Rehabilitation, sozialmedizinische Betreuung.",
     "Multimorbidität: Umgang mit mehreren chronischen Erkrankungen und ihren Komplikationen gleichzeitig."
    ]
   },
   {
    "h": "Ziele",
    "li": [
     "Selbstständigkeit erhalten und Lebensqualität fördern.",
     "Pflegebedürftigkeit verringern oder vermeiden.",
     "Mobilität und Funktionsfähigkeit fördern, Teilhabe am sozialen Leben sichern.",
     "Nicht nur einzelne Symptome lindern, sondern den Gesamtzustand ganzheitlich im Blick haben."
    ]
   },
   {
    "h": "Geriatrische Assessments",
    "li": [
     "Mini-Mental-Status-Test (MMST): kognitive Fähigkeiten einschätzen, Hinweis auf Demenz.",
     "Timed Up and Go: Mobilität und Sturzrisiko erfassen.",
     "Geriatrische Depressionsskala: Fragebogen zur Erkennung von Depressionen im Alter.",
     "Barthel-Index: Fähigkeiten bei Aktivitäten des täglichen Lebens bewerten.",
     "Nutritional Risk Screening: Ernährungszustand älterer Menschen bewerten. Schmerzassessment: Schmerzen und Schmerzintensität erfassen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Welches Instrument für welche Frage?",
    "head": [
     "Frage",
     "Instrument"
    ],
    "rows": [
     [
      "Denken und Gedächtnis",
      "MMST"
     ],
     [
      "Gehen, Sturzrisiko",
      "Timed Up and Go"
     ],
     [
      "Stimmung",
      "Geriatrische Depressionsskala"
     ],
     [
      "Selbstständigkeit im Alltag",
      "Barthel-Index"
     ],
     [
      "Ernährung",
      "Nutritional Risk Screening"
     ]
    ]
   }
  ]
 },
 {
  "id": "g3-validation",
  "group": "ausbildung",
  "area": "konzepte",
  "title": "Validation nach Naomi Feil",
  "icon": "HeartHandshake",
  "ar": "الـ Validation طريقة للتعامل مع المصابين بالخرف حسب Naomi Feil، ومعناها «التقدير غير المشروط». مراحل الخرف: ضعف التوجه، ارتباك الزمن، حركات متكررة، ثم الانسحاب التام (حالة نباتية). التطبيق: عدم المجادلة، الصبر، قبول «واقع» المصاب، إظهار التعاطف والفهم، الصدق والوضوح، لغة هادئة، وعدم طرح أسئلة «لماذا؟». الأهداف: الشعور بالفهم والقبول، ثقة أكبر، تواصل أفضل، حفظ الكرامة، رضا وتقليل التوتر.",
  "blocks": [
   {
    "h": "Grundidee",
    "li": [
     "Validation ist eine Methode im Umgang mit Menschen mit Demenz. Sie bedeutet „unbedingte Wertschätzung“.",
     "Gefühle und Erleben des Menschen werden ernst genommen, statt ihn zu korrigieren."
    ]
   },
   {
    "h": "Vier Phasen nach Feil",
    "li": [
     "1 Mangelhafte Orientierung: leichte Defizite, beginnende Verwirrung.",
     "2 Zeitverwirrtheit: vermehrter Rückzug in die Vergangenheit.",
     "3 Wiederholende Bewegungen: kurze Konzentrationsdauer, Bewegungen statt Sprache.",
     "4 Vegetieren: vollkommener Rückzug."
    ]
   },
   {
    "h": "Anwendung im Alltag",
    "li": [
     "Nicht widersprechen, Geduld haben, die „Realität“ des Betroffenen akzeptieren.",
     "Empathie und Verständnis zeigen, selbstkongruent (echt) bleiben, offen und ehrlich sein.",
     "Klare und ruhige Gespräche führen. Keine „Warum?“-Fragen stellen."
    ]
   },
   {
    "h": "Ziele",
    "li": [
     "Betroffene fühlen sich verstanden und akzeptiert, Vertrauen und Kommunikation verbessern sich.",
     "Die Würde bleibt erhalten, Zufriedenheit wird gefördert, Stress verringert."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Vier Phasen der Demenz nach Feil",
    "steps": [
     {
      "t": "Mangelhafte Orientierung",
      "s": "leichte Verwirrung"
     },
     {
      "t": "Zeitverwirrtheit",
      "s": "Rückzug in die Vergangenheit"
     },
     {
      "t": "Wiederholende Bewegungen",
      "s": "wenig Sprache"
     },
     {
      "t": "Vegetieren",
      "s": "vollständiger Rückzug"
     }
    ]
   }
  ]
 },
 {
  "id": "g3-gewalt-galtung",
  "group": "ausbildung",
  "area": "mensch",
  "title": "Gewalt: Formen, Gewaltdreieck und Wege heraus",
  "icon": "Layers",
  "ar": "العنف هو استخدام وسائل جسدية أو نفسية لإلحاق الضرر بالآخرين رغماً عنهم. الأشكال: جسدي، نفسي، جنسي، اقتصادي، رقمي، لفظي، ثقافي، بنيوي، ديني، وإيذاء النفس. مثلث العنف حسب Johan Galtung: العنف المباشر (الشخصي) مرئي، والعنف البنيوي والثقافي غير مرئيين. المحفزات: الانفعالات والضغط والإرهاق وسوء استخدام المواد والعزلة. طرق الخروج: التأمل الذاتي، استراتيجيات حل النزاع، إدارة التوتر، التوعية، وتغيير البيئة.",
  "blocks": [
   {
    "h": "Was ist Gewalt?",
    "li": [
     "Der Einsatz von physischen oder psychischen Mitteln, um anderen Personen gegen ihren Willen Schaden zuzufügen."
    ]
   },
   {
    "h": "Formen der Gewalt",
    "li": [
     "Physisch: schlagen, treten, festhalten, einsperren. Psychisch: beleidigen, manipulieren, drohen.",
     "Sexuell: sexueller Kontakt, Vergewaltigung, Zwang. Ökonomisch: Kontrolle, Verbote, Erpressung.",
     "Digital: Cyber-Mobbing, Stalking, Überwachung. Verbal: Beleidigungen, Schimpfwörter, Drohungen.",
     "Kulturell: Werte, Normen, Stereotypen. Strukturell: Gesetze, Ungleichheiten, Gefährdung. Religiös: Zwang, Gewaltakte, Verfolgung.",
     "Selbstverletzende Gewalt: Schneiden, Verbrennen, Suizid."
    ]
   },
   {
    "h": "Gewaltdreieck nach Johan Galtung",
    "li": [
     "Ein soziologisches Modell: Nur die direkte Gewalt ist sichtbar, strukturelle und kulturelle Gewalt bleiben unsichtbar.",
     "Direkte (personelle) Gewalt: von Person zu Person.",
     "Strukturelle Gewalt: politisch verankert, z. B. Gesetze.",
     "Kulturelle Gewalt: umfasst Gesellschaft, Werte, Rollen und Normen."
    ]
   },
   {
    "h": "Auslöser und Aggression",
    "li": [
     "Auslöser: Emotionen (Wut, Frust, Angst), Stress, Überforderung, Missbrauch von Substanzen, Erziehung, Aggressionen, soziale Isolation, Missverständnisse, Diskriminierung, Gruppenzwang.",
     "Aggression ist Verhalten, das darauf abzielt, anderen zu schaden. Ursachen: Genetik, Neurobiologie, Hormone, Kindheit, Umfeld, Drogen und Alkohol, Emotionen, Konflikte.",
     "Umgang: Verhaltenstherapie, Medikamente, Training, Stressmanagement, Familientherapie. Auch Antidepressiva, Stimmungsstabilisatoren, Entspannung und Sport können helfen."
    ]
   },
   {
    "h": "Wege aus der Gewalt",
    "li": [
     "Selbstreflexion: Verhalten bewusst machen, nach Auslösern suchen, Tagebuch führen.",
     "Konfliktlösungsstrategien: Bedürfnisse und Gefühle ausdrücken.",
     "Stressmanagement: Achtsamkeit, Meditation, Atemübungen, Sport als Ausgleich.",
     "Bildung und Aufklärung: Sensibilisierung, Schulungen, Gewaltprävention.",
     "Umfeld verändern: von negativen Einflüssen Abstand nehmen, positive Vorbilder suchen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "pyramid",
    "title": "Gewaltdreieck: sichtbar und unsichtbar",
    "levels": [
     {
      "t": "Direkte Gewalt",
      "s": "sichtbar: von Person zu Person",
      "icon": "Frown"
     },
     {
      "t": "Strukturelle Gewalt",
      "s": "unsichtbar: Gesetze, Ungleichheit",
      "icon": "Layers"
     },
     {
      "t": "Kulturelle Gewalt",
      "s": "unsichtbar: Werte, Rollen, Normen",
      "icon": "Users"
     }
    ]
   }
  ]
 },
 {
  "id": "g3-ethik-entscheidung",
  "group": "ausbildung",
  "area": "ethik",
  "title": "ICN-Ethikkodex, Dilemma und ethische Entscheidungsfindung",
  "icon": "Compass",
  "ar": "مدونة ICN (المجلس الدولي للممرضين، تأسس 1953) دليل لمعايير السلوك الأخلاقي للتمريض، أساسها كرامة الإنسان والاحترام. المعضلة الأخلاقية موقف «بين المطرقة والسندان» يجب فيه الاختيار بين خيارين يسببان مشكلة أخلاقية، ولا يوجد «خيار واضح». اتخاذ القرار الأخلاقي خمس خطوات: شعور بعدم الارتياح، تحديد المشكلة، جمع المعلومات وتحليلها، تطوير خيارات التصرف وتقييمها، اختيار خيار وتبريره. النقاش الحالاتي ست خطوات من عرض الحالة حتى التنفيذ.",
  "blocks": [
   {
    "h": "ICN-Ethikkodex",
    "li": [
     "Ein Leitfaden ethischer Verhaltensnormen, nach denen Pflegende handeln sollen.",
     "ICN = International Council of Nurses, weltweit tätige Organisation für Pflegende, entstanden 1953.",
     "Bereiche: zwischenmenschliches Verhalten, Profession, Berufsausübung und kollegiales Miteinander. Grundlage sind Würde des Menschen und Respekt.",
     "Pflegende sollen den Bedürfnissen und sozialen Werten gerecht werden und die Inhalte in die Praxis überführen.",
     "Ziele: Schutz der Patientenrechte, ethische Praxis, Reflexion, Stärkung der beruflichen Praxis und Entwicklung, Wahrung von Rechten und Würde, kollegiale Zusammenarbeit."
    ]
   },
   {
    "h": "Ethisches Dilemma",
    "li": [
     "Eine Situation in einer „Zwickmühle“: Man muss sich zwischen zwei Optionen entscheiden, die beide moralische Probleme verursachen. Eine „klare Wahl“ ist nicht möglich.",
     "Beispiel 1: Ein Arzt hat nur ein Organ für eine Transplantation, aber zwei Patienten brauchen es dringend.",
     "Beispiel 2: Ein Patient geht das Risiko ein, sich beim Aufstehen allein zu verletzen, und besteht auf seiner Autonomie. Die Pflegefachkraft muss zwischen dem Wunsch des Patienten und seiner Sicherheit entscheiden."
    ]
   },
   {
    "h": "Ethische Entscheidungsfindung",
    "li": [
     "Sie dient der Orientierung und ermöglicht eine systematische Betrachtung der Situation.",
     "1 Ungutes Gefühl wahrnehmen. 2 Problem identifizieren. 3 Informationen sammeln und analysieren.",
     "4 Handlungsmöglichkeiten entwickeln und bewerten. 5 Eine Möglichkeit auswählen und begründen = Entscheidung."
    ]
   },
   {
    "h": "Ethische Fallbesprechung",
    "li": [
     "Ziel: eine fundierte und moralisch vertretbare Entscheidung gemeinsam zu treffen.",
     "1 Fallvorstellung mit allen relevanten Fakten. 2 Klärung der Werte: Wünsche und Bedürfnisse von Patient und Angehörigen.",
     "3 Analyse mit den ethischen Prinzipien. 4 Diskussion der Handlungsoptionen. 5 Gemeinsame Entscheidung. 6 Umsetzung: dokumentieren und Maßnahmen umsetzen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Ethische Entscheidungsfindung in 5 Schritten",
    "steps": [
     {
      "t": "Ungutes Gefühl"
     },
     {
      "t": "Problem benennen"
     },
     {
      "t": "Informationen sammeln"
     },
     {
      "t": "Optionen bewerten"
     },
     {
      "t": "Entscheiden und begründen"
     }
    ]
   }
  ]
 },
 {
  "id": "g3-pflegediagnosen",
  "group": "ausbildung",
  "area": "modelle",
  "title": "Pflegediagnosen: PES-Format und NANDA",
  "icon": "ClipboardList",
  "ar": "التشخيص التمريضي يصف مشكلة أو حاجة أو خطراً محدداً لدى المريض ويركز على التدخلات التمريضية وعلى استجابة المريض، ويضعه الطاقم التمريضي المؤهل. المراحل الخمس: جمع المعلومات، التحليل، التفسير، تجميع التفسيرات، صياغة التشخيص حسب صيغة PES. الأنواع: فعلي، خطر، مشتبه، تشخيص صحة، تشخيص عافية، تشخيص عَرَضي. NANDA نظام تصنيف دولي، وأمثلة: نقص السوائل، الخوف.",
  "blocks": [
   {
    "h": "Was ist eine Pflegediagnose?",
    "li": [
     "Sie beschreibt ein spezifisches Pflegeproblem, Bedürfnis oder Risiko eines Patienten.",
     "Sie konzentriert sich auf die Pflegeinterventionen und auf die Reaktion des Patienten und wird von Pflegefachpersonen gestellt."
    ]
   },
   {
    "h": "Prozess in fünf Schritten",
    "li": [
     "1 Informationssammlung. 2 Analyse. 3 Interpretation.",
     "4 Zusammenführung der Interpretationen. 5 Formulierung der Pflegediagnose, nach PES-Format bzw. ENP-Leitlinien."
    ]
   },
   {
    "h": "Arten von Pflegediagnosen",
    "li": [
     "Aktuelle Pflegediagnose, Risikopflegediagnose, Verdachtsdiagnose.",
     "Gesundheitsdiagnose, Wellnessdiagnose, Symptompflegediagnose."
    ]
   },
   {
    "h": "NANDA",
    "li": [
     "NANDA-I (North American Nursing Diagnosis Association International) ist ein Klassifikationssystem mit standardisierten Aussagen für spezifische Pflegeprobleme.",
     "Diagnose Flüssigkeitsdefizit: Problem = Flüssigkeitsdefizit; Ätiologie = unzureichende Flüssigkeitsaufnahme; Symptome = Durst, trockene Schleimhäute.",
     "Diagnose Angst: Problem = Angst; Ätiologie = bevorstehende Operation; Symptome = Zittern, Schwitzen, verbale Äußerungen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "PES-Format an zwei Beispielen",
    "cols": [
     {
      "t": "Flüssigkeitsdefizit",
      "items": [
       "P: Flüssigkeitsdefizit",
       "E: zu wenig Aufnahme",
       "S: Durst, trockene Schleimhäute"
      ],
      "icon": "Droplet",
      "tone": "info"
     },
     {
      "t": "Angst",
      "items": [
       "P: Angst",
       "E: bevorstehende Operation",
       "S: Zittern, Schwitzen"
      ],
      "icon": "Brain",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g3-sucht-grundlagen",
  "group": "krank",
  "area": "psyche",
  "title": "Sucht: Missbrauch und Abhängigkeit",
  "icon": "Pill",
  "ar": "الاعتماد (Abhängigkeit) حالة يشعر فيها الشخص بضرورة استهلاك مواد معينة. سوء الاستخدام (Missbrauch) استهلاك مفرط لمادة أو سلوك يؤدي إلى عواقب سلبية. أسباب إدمان الكحول: الوراثة والتوتر والصدمات والخوف والأمراض والعوامل الاجتماعية. العلاج: سحب السموم والانسحاب، علاج نفسي، أدوية، ورعاية طويلة الأمد.",
  "blocks": [
   {
    "h": "Begriffe",
    "li": [
     "Abhängigkeit: Zustand, in dem eine Person das Gefühl hat, bestimmte Substanzen konsumieren zu müssen.",
     "Missbrauch: übermäßiger Konsum einer Substanz oder eines Verhaltens, der zu negativen Konsequenzen führt."
    ]
   },
   {
    "h": "Alkoholabhängigkeit: Ursachen und Therapie",
    "li": [
     "Ursachen: Genetik, Stress, Traumata, Ängste, Erkrankungen, soziale Einflüsse.",
     "Therapie: Entzug/Entgiftung, Psychotherapie, Medikamente, langfristige Betreuung."
    ]
   }
  ]
 },
 {
  "id": "g3-somatoform",
  "group": "krank",
  "area": "psyche",
  "title": "Somatoforme Störungen",
  "icon": "Activity",
  "ar": "الاضطرابات جسدية الشكل (Somatoforme Störungen) أمراض نفسية تظهر فيها شكاوى جسدية دون سبب عضوي. الأسباب: التوتر والخوف والاكتئاب وفرط الحساسية والسلوك المكتسب. أمثلة: آلام مزمنة، خفقان، ألم صدر، أعراض شلل، مشاكل معدية معوية، دوار، إرهاق مزمن. العلاج: علاج نفسي، أدوية، التعامل مع التوتر، تثقيف نفسي.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Psychische Erkrankungen, bei denen körperliche Beschwerden auftreten, ohne dass eine organische Ursache gefunden wird.",
     "Die Beschwerden sind echt für die Betroffenen und müssen ernst genommen werden."
    ]
   },
   {
    "h": "Beispiele und Symptome",
    "li": [
     "Chronische Schmerzen, Herzrasen, Brustenge, Lähmungserscheinungen.",
     "Magen-Darm-Beschwerden, Schwindel, chronische Erschöpfung."
    ]
   },
   {
    "h": "Ursachen und Therapie",
    "li": [
     "Ursachen: Stress, Angst, Depressionen, Überempfindlichkeit, erlerntes Verhalten.",
     "Therapie: Psychotherapie, Medikamente, Stressbewältigung, Psychoedukation."
    ]
   }
  ]
 },
 {
  "id": "g3-borderline-narzissmus",
  "group": "krank",
  "area": "psyche",
  "title": "Borderline- und narzisstische Persönlichkeitsstörung",
  "icon": "Frown",
  "ar": "اضطراب الشخصية الحدية (Borderline): صورة ذاتية متذبذبة وردود فعل شديدة. الأسباب: وراثة، تجارب الطفولة (مثل الإساءة) وظروف اجتماعية سلبية. الأعراض: عدم استقرار عاطفي، اندفاعية، شعور مزمن بالفراغ، إيذاء النفس، خوف شديد. العلاج: علاج نفسي، أدوية، علاج جدلي سلوكي. النرجسية: صورة ذاتية «عظيمة» وقلة تعاطف وحاجة عالية للتقدير. الأعراض: تقدير ذات مبالغ، تلاعب، حساسية للنقد، حسد. العلاج: علاج نفسي وسلوكي مع التركيز على إدراك واقعي للذات.",
  "blocks": [
   {
    "h": "Borderline",
    "li": [
     "Eine psychische Störung mit schwankendem Selbstbild und intensiven Reaktionen.",
     "Ursachen: genetische Faktoren, Kindheitserlebnisse (z. B. Missbrauch), negative soziale Bedingungen.",
     "Symptome: emotionale Instabilität, impulsives Verhalten, chronisches „Leere“-Gefühl, Selbstverletzung, große Ängste.",
     "Diagnostik: klinische Anamnese, psychodiagnostische Fragebögen, Beurteilung der Lebensgeschichte.",
     "Therapie: Psychotherapie, Medikamente, Dialektisch-behaviorale Therapie (DBT)."
    ]
   },
   {
    "h": "Narzissmus",
    "li": [
     "Eine Persönlichkeitsstörung mit „grandiosem“ Selbstbild, Mangel an Empathie und hohem Bedürfnis nach Bewertung.",
     "Ursachen: Genetik, Erziehung, frühe Bindungen, Vernachlässigung.",
     "Symptome: überhöhtes Selbstwertgefühl, manipulativ, kritikempfindlich, Neid auf andere.",
     "Diagnostik: klinische Anamnese, Beurteilung durch diagnostische Kriterien.",
     "Therapie: Psycho- und Verhaltenstherapie mit Fokus auf realistische Selbstwahrnehmung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Zwei Persönlichkeitsstörungen",
    "cols": [
     {
      "t": "Borderline",
      "items": [
       "Instabile Gefühle",
       "Impulsivität, Selbstverletzung",
       "Leeregefühl",
       "DBT"
      ],
      "icon": "Frown",
      "tone": "bad"
     },
     {
      "t": "Narzissmus",
      "items": [
       "Grandioses Selbstbild",
       "Wenig Empathie",
       "Kritikempfindlich",
       "Realistische Selbstwahrnehmung üben"
      ],
      "icon": "Sparkles",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g3-trauma-krisen",
  "group": "krank",
  "area": "psyche",
  "title": "Trauma und psychosoziale Krisen",
  "icon": "Flame",
  "ar": "الصدمة (Trauma) إصابة للجسد أو النفس بسبب عنف أو حدث ساحق. الأسباب: حوادث سير ورياضة وسقوط وعنف وحروق وفقدان وحروب وعنف جنسي. الأنواع: صدمات جسدية ونفسية ومعقدة (أحداث متكررة أو مستمرة تولد أنماط سلوك إشكالية). الصدمة الدورانية (Schock) حالة مهددة للحياة بسبب نقص الأكسجين، أنواعها: قلبي، نقص حجم، تأقي، إنتاني، عصبي. الأزمات النفسية الاجتماعية: مواقف حياتية صعبة تسبب انفعالات شديدة وتحتاج دعماً مهنياً.",
  "blocks": [
   {
    "h": "Trauma",
    "li": [
     "Durch Gewalteinwirkung oder überwältigende Ereignisse entstandene Verletzung des Körpers oder der Psyche.",
     "Häufige Ursachen: Verkehrsunfälle, Sportunfälle, Stürze, Gewalteinwirkung, Verbrennungen, Verluste, sexualisierte Gewalt, Kriege, seelische Verletzung.",
     "Körperliche Traumata: Verletzungen an Organen, Knochen, Verbrennungen. Psychische Traumata: schwere seelische Verletzung.",
     "Komplexe Traumata: wiederholte oder anhaltende Ereignisse, aus denen sich problematische Verhaltensmuster entwickeln."
    ]
   },
   {
    "h": "Schock: Arten",
    "li": [
     "Lebensbedrohlicher Zustand durch unzureichende Sauerstoffversorgung von Gewebe und Organen; ohne rechtzeitiges Eingreifen droht Organversagen.",
     "Kardiogen: Herzversagen. Hypovolämisch: erheblicher Blut- oder Flüssigkeitsverlust. Anaphylaktisch: allergische Reaktion.",
     "Septisch: schwere Infektion und toxische Reaktion. Neurogen: Nervensystemschädigung führt zu Gefäßerweiterung und Blutdruckabfall."
    ]
   },
   {
    "h": "Psychosoziale Krisen",
    "li": [
     "Schwierige Lebenssituationen, die intensive emotionale und psychische Belastungen verursachen; Auslöser sind individuell.",
     "Lebenskrise: Schwierigkeiten bei Selbstfindung und Identitätsbildung, z. B. Pubertät, Sinnkrisen, Midlife-Crisis.",
     "Verlust und Trauer: Tod eines nahestehenden Menschen, Trennung und Scheidung, Arbeitsplatzverlust.",
     "Krankheitskrisen: akute oder chronische Erkrankungen, Umgang, Einschränkungen, psychische Erkrankungen.",
     "Traumatische Krisen: Unfälle, unerwartete Ereignisse, Gewalterfahrungen. Existenzielle Krisen: Zweifel am Sinn des Lebens oder an den Lebenszielen.",
     "Soziale Krisen: Mobbing, Ausgrenzung, interkulturelle Anpassung. Suizidale Krisen: akute Ausnahmesituation mit intensiven Gedanken an Selbsttötung.",
     "Psychosoziale Krisen erfordern professionelle Unterstützung!"
    ]
   },
   {
    "h": "Suizid: Hintergründe",
    "li": [
     "Ein Akt bewusster Selbsttötung; Betroffene sehen keinen anderen Ausweg aus der Situation.",
     "Ursachen: Depressionen, bipolare Störungen, Lebenskrisen, soziale Isolation, Angststörungen, Schizophrenie, Substanzmittelmissbrauch, Traumata.",
     "Folgen für Angehörige: Trauer und Schuldgefühle, Stigmatisierung, psychische Belastung mit erhöhtem Erkrankungsrisiko, Konflikte in der Familie.",
     "Potenzielle Suizidalität immer ernst nehmen und ansprechen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Psychosoziale Krisen: Arten",
    "items": [
     {
      "t": "Lebenskrise",
      "s": "Identität, Pubertät, Midlife",
      "icon": "Compass",
      "tone": "info"
     },
     {
      "t": "Verlust und Trauer",
      "s": "Tod, Trennung, Jobverlust",
      "icon": "Moon",
      "tone": "warn"
     },
     {
      "t": "Krankheitskrise",
      "s": "Einschränkungen, Umgang",
      "icon": "Activity",
      "tone": "info"
     },
     {
      "t": "Traumatische Krise",
      "s": "Unfall, Gewalt",
      "icon": "Flame",
      "tone": "bad"
     },
     {
      "t": "Existenzielle Krise",
      "s": "Sinn des Lebens",
      "icon": "Sparkles",
      "tone": "info"
     },
     {
      "t": "Soziale Krise",
      "s": "Mobbing, Ausgrenzung",
      "icon": "Users",
      "tone": "warn"
     },
     {
      "t": "Suizidale Krise",
      "s": "sofort ernst nehmen",
      "icon": "Feather",
      "tone": "bad"
     }
    ]
   }
  ]
 }
];
