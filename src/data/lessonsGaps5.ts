/** Ergänzende Lektionen 5: ICF, Triage, Arbeitsschutz, Teamphasen, Kohlberg/Bindung, weitere Modelle, Organspende, Digitalisierung. */
import type { Lesson } from "./lessons";

export const GAPS5_LESSONS: Lesson[] = [
 {
  "id": "g5-icf",
  "group": "ausbildung",
  "area": "modelle",
  "title": "ICF: Funktionsfähigkeit, Behinderung und Gesundheit",
  "icon": "Accessibility",
  "ar": "التصنيف الدولي للأداء الوظيفي والإعاقة والصحة (ICF) من منظمة الصحة العالمية لا يصف المرض فقط بل يصف كيف يعيش الإنسان مع مشكلته الصحية: ما يستطيع فعله وكيف يشارك في الحياة، وما الذي يدعمه أو يعيقه في بيئته.",
  "blocks": [
   {
    "h": "Das Modell",
    "li": [
     "Ausgangspunkt ist das Gesundheitsproblem (Krankheit, Störung, Verletzung).",
     "Dazu kommen Körperfunktionen und -strukturen, Aktivitäten und Teilhabe.",
     "Kontextfaktoren beeinflussen alles: Umweltfaktoren (Wohnung, Hilfsmittel, Menschen) und personbezogene Faktoren (Alter, Lebensstil)."
    ]
   },
   {
    "h": "Begriffe",
    "li": [
     "Beeinträchtigung: Schädigung einer Funktion oder Struktur, zum Beispiel Lähmung.",
     "Aktivitätseinschränkung: Schwierigkeit, eine Handlung auszuführen, zum Beispiel Gehen.",
     "Teilhabeeinschränkung: Probleme, am Leben teilzunehmen, zum Beispiel Arbeit oder Vereinsleben.",
     "Förderfaktoren und Barrieren in der Umwelt entscheiden mit."
    ]
   },
   {
    "h": "Nutzen in Pflege und Reha",
    "li": [
     "Ressourcenorientiert: Fragt, was möglich ist, nicht nur, was fehlt.",
     "Gemeinsame Sprache für Pflege, Ärzte, Therapeuten und Sozialdienst.",
     "Grundlage für Rehabilitation, Teilhabeplanung und Hilfsmittelversorgung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Die Bausteine der ICF",
    "items": [
     {
      "t": "Gesundheitsproblem",
      "s": "Krankheit, Störung, Verletzung",
      "icon": "Stethoscope",
      "tone": "info"
     },
     {
      "t": "Körper",
      "s": "Funktionen und Strukturen",
      "icon": "HeartPulse",
      "tone": "warn"
     },
     {
      "t": "Aktivität",
      "s": "Handlungen ausführen",
      "icon": "PersonStanding",
      "tone": "ok"
     },
     {
      "t": "Teilhabe",
      "s": "am Leben teilnehmen",
      "icon": "Users",
      "tone": "ok"
     },
     {
      "t": "Umwelt",
      "s": "fördert oder hemmt",
      "icon": "Home",
      "tone": "info"
     },
     {
      "t": "Person",
      "s": "Alter, Lebensstil",
      "icon": "User",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g5-triage",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Triage, Großschadenslage und Katastrophenschutz",
  "icon": "Siren",
  "ar": "في الحوادث الجماعية لا يكفي الطاقم لإسعاف الجميع في وقت واحد، لذلك يُفرز المصابون حسب الاستعجال. الهدف إنقاذ أكبر عدد ممكن مع التوزيع العادل للموارد المحدودة.",
  "blocks": [
   {
    "h": "Triage-Prinzip",
    "li": [
     "Sichtung nach Dringlichkeit, nicht nach Reihenfolge des Eintreffens.",
     "Vier Kategorien: sofort, dringend, später und abwartend (palliativ).",
     "Farben: Rot, Gelb, Grün, Blau; Schwarz oder Grau für Verstorbene.",
     "Die Einteilung wird bei jeder neuen Untersuchung überprüft und kann sich ändern."
    ]
   },
   {
    "h": "Aufgaben der Pflege",
    "li": [
     "Ruhe bewahren, Überblick verschaffen, Verantwortliche informieren.",
     "Alarmplan der Einrichtung kennen: Alarmierung, Sammelstellen, Evakuierung.",
     "Patienten kennzeichnen und Dokumentation sichern, damit niemand verwechselt wird.",
     "Angehörige und Betroffene betreuen, psychosoziale Notfallversorgung einbeziehen."
    ]
   },
   {
    "h": "Ethik",
    "li": [
     "Gerechtigkeit und Nutzen für möglichst viele leiten die Entscheidung.",
     "Entscheidungen werden begründet und dokumentiert; sie ersetzen nicht die Würde des Einzelnen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Sichtungskategorien",
    "items": [
     {
      "t": "Rot",
      "s": "sofort behandeln",
      "icon": "Siren",
      "tone": "bad"
     },
     {
      "t": "Gelb",
      "s": "dringend",
      "icon": "Clock",
      "tone": "warn"
     },
     {
      "t": "Grün",
      "s": "leicht verletzt, später",
      "icon": "ThumbsUp",
      "tone": "ok"
     },
     {
      "t": "Blau",
      "s": "abwartend, palliativ",
      "icon": "Feather",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g5-arbeitsschutz",
  "group": "ausbildung",
  "area": "recht",
  "title": "Arbeitsschutz, Brandschutz und Medizinprodukte",
  "icon": "HardHat",
  "ar": "يلزم القانون صاحب العمل بحماية العاملين، وعلى العاملين الالتزام بالتعليمات. يشمل ذلك حماية الظهر والجلد والتعامل الآمن مع المواد الخطرة والأجهزة الطبية، وكذلك معرفة خطوات الحريق.",
  "blocks": [
   {
    "h": "Arbeitsschutz",
    "li": [
     "Arbeitgeber: Gefährdungsbeurteilung, Unterweisung, Schutzausrüstung bereitstellen.",
     "Beschäftigte: Anweisungen befolgen, Gefahren melden, Schutzausrüstung benutzen.",
     "Gefahren in der Pflege: Heben und Tragen, Hautbelastung, Infektionen, Gefahrstoffe, Schichtarbeit, Gewalt.",
     "Arbeitsunfälle werden gemeldet und im Verbandbuch dokumentiert."
    ]
   },
   {
    "h": "Brandschutz",
    "li": [
     "Merke: Menschen retten, Alarm auslösen, Löschversuch, Brand eingrenzen (Türen schließen).",
     "Fluchtwege freihalten und kennen; Aufzüge im Brandfall nicht benutzen.",
     "Sauerstoffquellen und Rauchverbot besonders beachten."
    ]
   },
   {
    "h": "Medizinprodukte",
    "li": [
     "Nur nach Einweisung bedienen; Bedienungsanleitung beachten.",
     "Sichtprüfung vor Gebrauch; defekte Geräte kennzeichnen und melden.",
     "Zwischenfälle mit Geräten werden an die verantwortliche Stelle gemeldet."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Verhalten im Brandfall",
    "steps": [
     {
      "t": "Retten",
      "s": "Menschen in Sicherheit bringen",
      "icon": "Siren",
      "tone": "bad"
     },
     {
      "t": "Melden",
      "s": "Alarm auslösen, Notruf",
      "icon": "Phone",
      "tone": "warn"
     },
     {
      "t": "Löschen",
      "s": "nur wenn gefahrlos möglich",
      "icon": "Flame",
      "tone": "info"
     },
     {
      "t": "Eingrenzen",
      "s": "Türen schließen",
      "icon": "DoorOpen",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g5-teamphasen",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Teamentwicklung nach Tuckman und Veränderung nach Lewin",
  "icon": "Users",
  "ar": "تمر الفرق عادة بمراحل متوقعة: تعارف، صراع، اتفاق، ثم أداء. وعند إدخال تغيير في العمل يصفه ليفين بثلاث خطوات: إذابة العادات القديمة، ثم التغيير، ثم تثبيت الجديد.",
  "blocks": [
   {
    "h": "Tuckman: Phasen",
    "li": [
     "Forming: Kennenlernen, Unsicherheit, Orientierung an der Leitung.",
     "Storming: Rollen und Regeln werden ausgehandelt, Konflikte treten auf.",
     "Norming: Regeln und Zusammenhalt entstehen.",
     "Performing: Das Team arbeitet effektiv und eigenständig.",
     "Adjourning: Auflösung oder Neuformierung des Teams."
    ]
   },
   {
    "h": "Lewin: Veränderung in drei Schritten",
    "li": [
     "Auftauen (Unfreezing): Notwendigkeit der Veränderung erkennen, Widerstände abbauen.",
     "Verändern (Moving): neue Abläufe einführen und üben.",
     "Einfrieren (Refreezing): neue Praxis festigen, Regeln anpassen."
    ]
   },
   {
    "h": "Anwendung",
    "li": [
     "Neue Mitarbeitende und Auszubildende durchlaufen die Phasen mit dem Team.",
     "Konflikte in der Storming-Phase sind normal und kein Zeichen für Scheitern.",
     "Veränderungen gelingen mit Information, Beteiligung und Zeit."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Teamphasen nach Tuckman",
    "steps": [
     {
      "t": "Forming",
      "s": "kennenlernen",
      "icon": "Handshake",
      "tone": "info"
     },
     {
      "t": "Storming",
      "s": "Konflikte",
      "icon": "Flame",
      "tone": "warn"
     },
     {
      "t": "Norming",
      "s": "Regeln",
      "icon": "ClipboardCheck",
      "tone": "ok"
     },
     {
      "t": "Performing",
      "s": "Leistung",
      "icon": "Star",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g5-kohlberg",
  "group": "ausbildung",
  "area": "lebensphasen",
  "title": "Moralentwicklung nach Kohlberg und Bindungstheorie",
  "icon": "Baby",
  "ar": "يصف كولبرغ كيف يتطور حكم الإنسان الأخلاقي عبر ثلاثة مستويات. وتبيّن نظرية التعلّق (بولبي وأينسورث) أن العلاقة الآمنة مع شخص مرجعي في الطفولة تؤثر في الثقة والسلوك لاحقاً.",
  "blocks": [
   {
    "h": "Kohlberg",
    "li": [
     "Präkonventionell: Richtig ist, was Strafe vermeidet oder Belohnung bringt.",
     "Konventionell: Richtig ist, was Erwartungen der Gruppe und Gesetze erfüllt.",
     "Postkonventionell: Richtig richtet sich nach allgemeinen Prinzipien wie Gerechtigkeit und Menschenwürde."
    ]
   },
   {
    "h": "Bindungstheorie",
    "li": [
     "Bowlby: Kinder brauchen eine verlässliche Bezugsperson als sichere Basis.",
     "Ainsworth beschreibt Bindungsstile: sicher, unsicher-vermeidend, unsicher-ambivalent.",
     "Trennung und Krankenhausaufenthalt können Bindungsangst auslösen."
    ]
   },
   {
    "h": "Folgen für die Pflege",
    "li": [
     "Kinder: Eltern einbeziehen (Rooming-in), feste Bezugspflege, Rituale beibehalten.",
     "Ältere Menschen: Verlust von Bezugspersonen ernst nehmen, Beziehung statt nur Versorgung.",
     "Eigene Werte reflektieren, wenn Pflegende und Patienten verschieden urteilen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "pyramid",
    "title": "Moralstufen nach Kohlberg",
    "levels": [
     {
      "t": "Postkonventionell",
      "s": "Prinzipien, Gerechtigkeit"
     },
     {
      "t": "Konventionell",
      "s": "Normen, Gesetze"
     },
     {
      "t": "Präkonventionell",
      "s": "Strafe, Belohnung"
     }
    ]
   }
  ]
 },
 {
  "id": "g5-modelle-weitere",
  "group": "ausbildung",
  "area": "modelle",
  "title": "Weitere Modelle: Gordon, Watson und Neuman",
  "icon": "BookOpen",
  "ar": "إضافة إلى نماذج الحاجات الأساسية توجد نماذج أخرى: يستخدم غوردون أنماطاً صحية وظيفية للتقييم، وتركز واتسون على الرعاية الإنسانية المبنية على العلاقة، وتفسر نيومان استجابة الإنسان للضغوط في ثلاثة مستويات وقاية.",
  "blocks": [
   {
    "h": "Gordon: Funktionelle Gesundheitsmuster",
    "li": [
     "Strukturiert die Pflegeanamnese in elf Muster, zum Beispiel Ernährung, Ausscheidung, Aktivität, Schlaf, Wahrnehmung.",
     "Daraus werden Pflegediagnosen abgeleitet (NANDA-I)."
    ]
   },
   {
    "h": "Watson: Caring Science",
    "li": [
     "Fürsorge ist der Kern der Pflege und entsteht in der Beziehung.",
     "Wichtige Elemente: Mitgefühl, Vertrauen, Respekt vor dem Menschen als Ganzes."
    ]
   },
   {
    "h": "Neuman: Systemmodell",
    "li": [
     "Der Mensch ist ein System mit Kern, Abwehrlinien und flexibler Schutzlinie.",
     "Stressoren von innen und außen können die Schutzlinie durchbrechen.",
     "Prävention auf drei Ebenen: primär (vorbeugen), sekundär (früh erkennen), tertiär (Folgen mindern)."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Drei Modelle im Vergleich",
    "cols": [
     {
      "t": "Gordon",
      "items": [
       "Gesundheitsmuster",
       "Grundlage der Pflegediagnose"
      ],
      "icon": "ClipboardList",
      "tone": "info"
     },
     {
      "t": "Watson",
      "items": [
       "Beziehung und Fürsorge",
       "Mitgefühl"
      ],
      "icon": "HeartHandshake",
      "tone": "ok"
     },
     {
      "t": "Neuman",
      "items": [
       "Stressoren und Abwehr",
       "drei Präventionsebenen"
      ],
      "icon": "ShieldCheck",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g5-organspende",
  "group": "ausbildung",
  "area": "ethik",
  "title": "Organspende und Transplantation",
  "icon": "Heart",
  "ar": "في ألمانيا يقوم التبرع بالأعضاء على القرار الحر للشخص. يُشترط تقرير موت الدماغ بشكل مستقل من طبيبين مختصين. الممرضون يرافقون الأقارب بحساسية ولا يضغطون عليهم.",
  "blocks": [
   {
    "h": "Rechtlicher Rahmen",
    "li": [
     "Entscheidungslösung: Jeder soll sich informieren und freiwillig entscheiden.",
     "Organspendeausweis oder Eintrag im Register dokumentiert den Willen.",
     "Ohne dokumentierten Willen entscheiden Angehörige nach dem mutmaßlichen Willen.",
     "Feststellung des Hirntods durch zwei unabhängige, erfahrene Ärzte."
    ]
   },
   {
    "h": "Rolle der Pflege",
    "li": [
     "Angehörige einfühlsam begleiten, Raum für Abschied geben.",
     "Keine Überredung; Information über die Koordinierungsstelle (DSO).",
     "Pflege des Verstorbenen mit Würde bis zur Organentnahme."
    ]
   },
   {
    "h": "Ethische Fragen",
    "li": [
     "Selbstbestimmung des Spenders, Würde, Gerechtigkeit bei der Verteilung.",
     "Religiöse und kulturelle Haltungen respektieren und ruhig besprechen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Weg zur Organspende",
    "steps": [
     {
      "t": "Hirntod festgestellt",
      "s": "zwei Ärzte",
      "icon": "Brain",
      "tone": "bad"
     },
     {
      "t": "Wille klären",
      "s": "Ausweis oder Angehörige",
      "icon": "ScrollText",
      "tone": "warn"
     },
     {
      "t": "Koordination",
      "s": "Stelle informieren",
      "icon": "Phone",
      "tone": "info"
     },
     {
      "t": "Entnahme",
      "s": "würdevoll",
      "icon": "Heart",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g5-digital",
  "group": "ausbildung",
  "area": "technik",
  "title": "Digitalisierung und Datensicherheit in der Pflege",
  "icon": "Network",
  "ar": "تُستخدم اليوم ملفات المرضى الإلكترونية والتطبيب عن بعد وأنظمة التنبيه. تزيد هذه الأدوات الكفاءة لكنها تتطلب حماية صارمة للبيانات واحترام السرية المهنية.",
  "blocks": [
   {
    "h": "Digitale Werkzeuge",
    "li": [
     "Elektronische Patientenakte und digitale Pflegedokumentation.",
     "Telematikinfrastruktur, E-Rezept, Telemedizin.",
     "Sensoren, Sturzmelder, Hausnotruf und Assistenzsysteme."
    ]
   },
   {
    "h": "Datenschutz",
    "li": [
     "Gesundheitsdaten sind besonders schutzwürdig (DSGVO).",
     "Zugriff nur, wenn er für die Versorgung nötig ist (Need-to-know).",
     "Starke Passwörter, nie weitergeben, Bildschirm sperren.",
     "Keine Patientendaten in privaten Messengern oder auf Social Media."
    ]
   },
   {
    "h": "Grenzen und Chancen",
    "li": [
     "Technik ersetzt keine Beziehung; sie schafft Zeit für Zuwendung, wenn sie gut eingesetzt wird.",
     "Einwilligung der Betroffenen und Aufklärung über Datenverarbeitung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Chance und Risiko",
    "cols": [
     {
      "t": "Chancen",
      "items": [
       "weniger Papier",
       "schneller Zugriff"
      ],
      "icon": "ThumbsUp",
      "tone": "ok"
     },
     {
      "t": "Risiken",
      "items": [
       "Datenmissbrauch",
       "Abhängigkeit von Technik"
      ],
      "icon": "Lock",
      "tone": "bad"
     }
    ]
   }
  ]
 }
];
