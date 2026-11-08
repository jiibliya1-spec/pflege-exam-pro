/** Ergänzende Lektionen 14: aus der eigenen Zusammenfassung (Rolle, Familie, Betreuung, Depression, Migration, Körperebenen, Atmung, Niere, Neugeborene). */
import type { Lesson } from "./lessons";

export const GAPS14_LESSONS: Lesson[] = [
 {
  "id": "g12-soziale-rolle",
  "group": "ausbildung",
  "area": "mensch",
  "title": "Soziale Rolle, Position und Rollenkonflikte",
  "icon": "Users",
  "ar": "الدور الاجتماعي مكانة تتكون من توقعات وقيم وأنماط سلوك. تسبقه المكانة الاجتماعية: مكانة موروثة (الأصل، الجنس، العمر) ومكتسبة (المهنة، الأصدقاء، الحالة العائلية). لكل شخص مجموعات مرجعية بتوقعات مختلفة، فينشأ صراع داخل الدور الواحد أو بين دورين. الممرض تنتظر منه مجموعات كثيرة التعاطف والتواصل والكفاءة والالتزام بالمواعيد.",
  "blocks": [
   {
    "h": "Was ist eine soziale Rolle?",
    "li": [
     "Die soziale Rolle stammt aus der Soziologie. Sie beschreibt einen Status, der sich aus Erwartungen, Werten und Handlungsmustern zusammensetzt. Von jemandem in einer bestimmten Situation wird erwartet, dass er sich auf eine bestimmte Art verhält.",
     "Davor steht die soziale Position. Sie wird zuerst festgelegt, und aus ihr entwickelt sich die Rolle."
    ]
   },
   {
    "h": "Zugewiesene und erlernte Positionen",
    "li": [
     "Zugewiesene Positionen bekommt man ohne eigenes Zutun, etwa durch Herkunft, Hautfarbe, Geschlecht oder Alter.",
     "Erlernte Positionen erreicht man durch eigenes Handeln, zum Beispiel Beruf, Freundeskreis oder Familienstand."
    ]
   },
   {
    "h": "Bezugsgruppen",
    "li": [
     "Jeder Mensch hat mehrere Bezugsgruppen, die gleichzeitig unterschiedliche Erwartungen an ihn richten. Für eine Pflegefachkraft sind das Auszubildende, Kollegen, Vorgesetzte, Pflegeempfänger, Angehörige, Ärzte, Therapeuten, Betreuer und externe Dienstleister (zum Beispiel Fußpflege, Apotheke, Sanitätshaus).",
     "Typische Erwartungen an Pflegekräfte sind Empathie, Kommunikation, Kompetenz, Pünktlichkeit, Einsatzbereitschaft und Teamfähigkeit."
    ]
   },
   {
    "h": "Rollenkonflikte",
    "li": [
     "Aus den unterschiedlichen Erwartungen entstehen Rollenkonflikte. Beim Intrarollenkonflikt widersprechen sich Erwartungen verschiedener Bezugsgruppen innerhalb einer einzigen Rolle. Beispiel: Verpetze ich einen Mitschüler, der etwas Verbotenes getan hat, oder ignoriere ich den berechtigten Wunsch des Lehrers?",
     "Beim Interrollenkonflikt stehen die Erwartungen an verschiedene Rollen einer Person gegeneinander. Beispiel: Der Sohn möchte mit dem Vater spielen, während der Vater als Arbeitnehmer zur Arbeit muss."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Zwei Arten von Rollenkonflikten",
    "head": [
     "Art",
     "Was kollidiert?"
    ],
    "rows": [
     [
      "Intrarollenkonflikt",
      "Erwartungen verschiedener Gruppen an dieselbe Rolle"
     ],
     [
      "Interrollenkonflikt",
      "Erwartungen an verschiedene Rollen derselben Person"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-sozialisation-familienfunktionen",
  "group": "ausbildung",
  "area": "mensch",
  "title": "Sozialisation und Funktionen der Familie",
  "icon": "Home",
  "ar": "التنشئة الاجتماعية هي الاندماج في المجتمع وتعلّم قيمه وأعرافه. وللأسرة وظيفتان أساسيتان: حفظ حياة أفرادها بيولوجياً (الأكل واللباس والسكن ورعاية الأقارب المحتاجين) وعاطفياً (الحب والانتباه والأمان والحماية). وحين تعجز الأسرة تتدخل الدولة والمجتمع بمساعدات مثل دور الحضانة والمدرسة ومكتب رعاية الشباب والمساعدة الاجتماعية وبدل الإيجار وبدل الرعاية.",
  "blocks": [
   {
    "h": "Sozialisation",
    "li": [
     "Sozialisation bedeutet, in die Gesellschaft hineinzuwachsen und ihre Werte und Normen zu lernen, etwa Höflichkeit und Tischsitten. Dazu gehört auch der Wissenserwerb und ein Platz in der Gesellschaft, zum Beispiel durch einen Beruf.",
     "Die Grundannahme: Jeder Mensch lernt, seine Bedürfnisse zu befriedigen. Die Familie ist dafür der erste Lernort."
    ]
   },
   {
    "h": "Biologische Erhaltung der Familienmitglieder",
    "li": [
     "Die Familie sorgt für Essen, Trinken, Kleidung, Wohnung und Pflegeartikel. Dazu kommt die Pflege und Versorgung hilfsbedürftiger Familienmitglieder, zum Beispiel bei Erkrankung, Verletzung oder Behinderung.",
     "Diese Pflichten sind als Muss-Erwartungen im Bürgerlichen Gesetzbuch (BGB) festgehalten."
    ]
   },
   {
    "h": "Emotionale Erhaltung",
    "li": [
     "Zur emotionalen Erhaltung gehören Kontakte, Liebe, Aufmerksamkeit, Geborgenheit, Wärme, Akzeptiertwerden und Schutz."
    ]
   },
   {
    "h": "Hilfen durch Staat und Gesellschaft",
    "li": [
     "Wenn eine Familie diese Aufgaben nicht leisten kann, helfen Staat und Gesellschaft: Kindergarten und Krippe, Schulpflicht, Jugendamt, BAföG, Erziehungsberatung und Hilfen zur Erziehung (SGB VIII).",
     "Bei materieller Not gibt es Sozialhilfe, Wohngeld, Pflegegeld, die Tafel und die Bahnhofsmission. Bei Gefährdung von Kindern oder Gewalt helfen Kinderschutzbund, Frauenhäuser, Pflegefamilien und Kinderheime."
    ]
   }
  ],
  "diagrams": []
 },
 {
  "id": "g12-betreuungskraefte-aufgaben",
  "group": "ausbildung",
  "area": "system",
  "title": "Betreuungskräfte: Aufgaben und Grenzen",
  "icon": "HandHelping",
  "ar": "مساعد الرعاية الاجتماعية (Betreuungskraft) يهتم بالنشاط والتسلية: الغناء والحرف اليدوية وألعاب الطاولة والخَبز. لا يقوم بأعمال رعاية العلاج (Behandlungspflege) ولا بالرعاية التمريضية مثل إطعام المريض أو مرافقته إلى المرحاض. وأعمال التدبير المنزلي كتنظيف الطاولة وغسل الأطباق لا يقوم بها إلا في حالات استثنائية. ولو طُلب منه أمر خارج حدوده يجب أن يعتذر ويبلّغ الممرض.",
  "blocks": [
   {
    "h": "Wofür sind Betreuungskräfte da?",
    "li": [
     "Betreuungskräfte begleiten und beschäftigen Menschen in der Pflege. Typische Aufgaben sind gemeinsames Singen, Basteln, Spiele spielen und Backen. Sie bringen Abwechslung und soziale Kontakte in den Tag.",
     "Rechtliche Grundlage in stationären Einrichtungen ist § 43b SGB XI (zusätzliche Betreuung und Aktivierung)."
    ]
   },
   {
    "h": "Was sie nicht tun dürfen",
    "li": [
     "Betreuungskräfte dürfen keine Behandlungspflege durchführen, also keine ärztlich angeordneten Maßnahmen wie Injektionen oder Verbandwechsel.",
     "Auch pflegerische Tätigkeiten gehören nicht zu ihren Aufgaben, zum Beispiel Essen anreichen oder Toilettengänge begleiten.",
     "Hauswirtschaftliche Tätigkeiten wie Tisch eindecken oder spülen sind nur in Ausnahmefällen erlaubt."
    ]
   },
   {
    "h": "Zusammenarbeit im Team",
    "li": [
     "Die Pflegefachkraft behält die Verantwortung für Pflege und Behandlung. Beobachtet eine Betreuungskraft Veränderungen, etwa Schmerzen oder Verwirrtheit, meldet sie das sofort an die Fachkraft."
    ]
   }
  ],
  "diagrams": []
 },
 {
  "id": "g12-depression-formen-abgrenzung",
  "group": "ausbildung",
  "area": "mensch",
  "title": "Depression: Formen, Erscheinungsbild und Abgrenzung",
  "icon": "CloudRain",
  "ar": "الاكتئاب اضطراب وجداني تكون فيه المزاج منخفضاً، وفي الهوس يكون مرتفعاً. أشكاله الخاصة: الاكتئاب المزمن (Dysthymie) والاكتئاب الموسمي واكتئاب ما بعد الولادة. الأعراض الرئيسية: مزاج محبط وفقدان الاهتمام وقلة النشاط. المصاب المثبَّط يتحدث قليلاً وبصوت منخفض، والمصاب القلِق المتهيج يتحرك بلا هدوء. تبدأ مضادات الاكتئاب مفعولها بعد 1 إلى 3 أسابيع، وقد يزداد النشاط قبل تحسن المزاج فيرتفع خطر الانتحار. لا يجوز إيقافها فجأة.",
  "blocks": [
   {
    "h": "Formen und Hauptsymptome",
    "li": [
     "Depression und Manie gehören zu den affektiven Störungen, bei denen die Stimmung krankhaft verändert ist. Ist sie gedrückt, spricht man von Depression, ist sie gehoben, von Manie.",
     "Besondere Formen sind die chronisch depressive Störung (Dysthymie), die saisonal abhängige Depression (Herbst-Winter-Depression) und die postpartale Depression (Wochenbettdepression).",
     "Hauptsymptome sind gedrückte Stimmung, Interessenverlust mit Freudlosigkeit und Antriebsmangel. Dazu kommen psychische Symptome (Angst, Hoffnungslosigkeit, Suizidgedanken, innere Leere), körperliche Symptome (Gliederschmerzen, Übelkeit, Schlafstörungen) und psychomotorische Symptome wie verlangsamte Bewegungen mit Morgen- oder Abendtief."
    ]
   },
   {
    "h": "Gehemmte und agitiert-ängstliche Depression",
    "li": [
     "Gehemmt Depressive blicken nach unten, haben kaum Blickkontakt, sprechen wenig und leise, gehen gebeugt und schleppend. Agitiert-ängstlich Depressive sind unruhig, angespannt, klagen laut und wirken getrieben."
    ]
   },
   {
    "h": "Abgrenzung zur Demenz",
    "li": [
     "Für eine Depression sprechen ein rascher Beginn und schnelles Fortschreiten. Der Patient leidet unter dem Verlust seiner Gedächtnisleistung, klagt, ist ratlos, findet aber zurecht und zieht sich verunsichert zurück.",
     "Für eine Demenz sprechen ein schleichender Beginn und langsames Fortschreiten. Der Patient nimmt den Verlust kaum wahr, fühlt sich nicht verantwortlich, zeigt deutliche Orientierungsstörungen und verharmlost seine Einbußen. Ein depressiv bedingter Gedächtnisverlust heißt auch Pseudodemenz."
    ]
   },
   {
    "h": "Manie",
    "li": [
     "Typisch sind grundlose Heiterkeit, gehobene Stimmung und Ideenflucht: Ein Einfall folgt dem nächsten, der Betroffene springt von Idee zu Idee, kann sich nicht konzentrieren und merkt sich nichts. Dazu kommen Rededrang, Antriebssteigerung und stark verkürzte Schlafdauer.",
     "Meist fehlt die Krankheitseinsicht. Es drohen Selbstgefährdung durch Risikoverhalten, finanzieller Ruin (maßlose Einkäufe), schnell geschlossene und abgebrochene Beziehungen und völlige Verausgabung."
    ]
   },
   {
    "h": "Antidepressiva und Pflege",
    "li": [
     "Antidepressiva wirken erst nach ein bis drei Wochen. Nebenwirkungen treten vor der Stimmungsaufhellung auf. Die Antriebssteigerung kommt oft vor der Stimmungsaufhellung, deshalb besteht dann eine erhöhte Suizidgefahr. Sie machen nicht abhängig, müssen aber über einen längeren Zeitraum genommen werden. Beim plötzlichen Absetzen droht ein Rebound-Effekt.",
     "Pflegerische Hilfen sind eine wertschätzende Grundhaltung, Aufbau von Vertrauen, Erhalt eines zuverlässigen Kontaktes, Ermutigung ohne Überforderung, Loben kleiner Schritte, Einbeziehen der Biografie und das ständige Beachten der Suizidgefahr."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Depression oder Demenz?",
    "head": [
     "Merkmal",
     "Depression",
     "Demenz"
    ],
    "rows": [
     [
      "Beginn",
      "Rasch",
      "Schleichend"
     ],
     [
      "Verlauf",
      "Schnell fortschreitend",
      "Langsam fortschreitend"
     ],
     [
      "Umgang mit Defiziten",
      "Klagt und übertreibt",
      "Verharmlost und bemerkt kaum"
     ],
     [
      "Orientierung",
      "Meist erhalten",
      "Deutlich gestört"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-migration-integration-kultursensibel",
  "group": "ausbildung",
  "area": "ethik",
  "title": "Migration, Integration und kultursensible Pflege",
  "icon": "Globe",
  "ar": "من العوائق التي تمنع المهاجرين من الاستفادة من خدمات الرعاية: اللغة ونقص المعلومات والخوف من قانون الأجانب وعدم القبول. الاندماج يعني تبنّي جوانب من الثقافة الجديدة مع الحفاظ على الأصلية، أما الاستيعاب (Assimilation) فهو التوجه الكامل نحو الثقافة الجديدة. الرعاية المراعية للثقافة تعني الاستجابة بتعاطف للحاجات الثقافية والفردية، وتتم بتكييف نموذج AEDL: الإخراج وحدود الحياء والأكل والنوم والتواصل والحركة والتعامل مع الموت والحزن.",
  "blocks": [
   {
    "h": "Hürden für Migranten",
    "li": [
     "Migranten nutzen Pflegeangebote oft seltener. Gründe sind Sprachprobleme, fehlende Informationen über pflegerische Einrichtungen, die Angst, kulturelle Eigenheiten nicht ausleben zu können, Befürchtungen, mit dem Ausländerrecht in Konflikt zu geraten, und die Angst, nicht ausreichend angenommen zu werden."
    ]
   },
   {
    "h": "Integration und Assimilation",
    "li": [
     "Bei der Integration übernimmt man Aspekte der neuen Kultur und behält gleichzeitig Aspekte der Herkunftskultur bei. Bei der Assimilation wendet man sich stark der neuen Kultur zu und gibt die Herkunftskultur weitgehend auf.",
     "Je größer der Abstand zwischen Herkunftskultur und neuer Kultur, desto schwieriger ist die Integration. Je mehr Bezüge (Verwandte, Bekannte, Vereine, Religionsgemeinschaften) es im neuen Umfeld gibt, desto leichter werden Anfangsprobleme überwunden. Bleiben Migranten allerdings nur in diesen Netzwerken, kann das die Integration behindern."
    ]
   },
   {
    "h": "Integration einschätzen",
    "li": [
     "Integration lässt sich nicht in Zahlen messen. Hinweise geben Fragen wie: Wie gut sind Sprachkenntnisse und Wissen über das Land? Gibt es soziale Netzwerke? War die Migration freiwillig oder erzwungen? Wie realistisch waren die Erwartungen? Welche Bildung bringt die Person mit?"
    ]
   },
   {
    "h": "Kultursensible Pflege",
    "li": [
     "Kultursensible Pflege heißt, einfühlsam auf die kulturellen und individuellen Bedürfnisse des Pflegeempfängers einzugehen. Das AEDL-Modell wird dafür an die Kultur angepasst.",
     "Beispiele: unterschiedliche Schamgrenzen beim Ausscheiden beachten, Ernährungsvorschriften und -gewohnheiten respektieren, Einschlafrituale und Schlafenszeiten berücksichtigen, auf Wünsche nach gleichgeschlechtlicher Pflege eingehen, Besuche von Freunden und Geistlichen ermöglichen und kulturelle Umgangsformen mit Tod und Trauer zulassen.",
     "Für die Kommunikation sorgt man für einen Zugang zur Muttersprache, nutzt einfache Sprache, dosiert Informationen und setzt Mimik, Gestik und Bilder ein."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Integration und Assimilation im Vergleich",
    "head": [
     "Begriff",
     "Bedeutung"
    ],
    "rows": [
     [
      "Integration",
      "Neue Kultur annehmen, Herkunftskultur behalten"
     ],
     [
      "Assimilation",
      "Starke Hinwendung zur neuen Kultur, Herkunft wird weitgehend aufgegeben"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-koerperebenen",
  "group": "ausbildung",
  "area": "start",
  "title": "Körperebenen und Schnittebenen",
  "icon": "Layers",
  "ar": "ثلاثة مستويات أساسية: المستوى الأفقي (المستعرض) يقسم الجسم إلى أعلى وأسفل ويوازي الأرض، والمستوى السهمي (Sagittalebene) يقسمه إلى يمين ويسار ويوازي الدرز السهمي في الجمجمة، والمستوى الجبهي (Frontalebene) يقسمه إلى أمام وخلف ويوازي الجبهة.",
  "blocks": [
   {
    "h": "Die drei Hauptebenen",
    "li": [
     "Körperebenen sind gedachte Schnitte durch den Körper. Mit ihnen beschreibt man Lage und Schnittbilder, zum Beispiel in CT und MRT."
    ]
   },
   {
    "h": "Verlauf der drei Ebenen",
    "li": [
     "Die Horizontalebene (Transversalebene) verläuft im Stehen parallel zum Boden und teilt den Körper in oben und unten.",
     "Die Sagittalebene verläuft parallel zur Pfeilnaht des Schädels (von vorn nach hinten) und teilt den Körper in rechts und links.",
     "Die Frontalebene verläuft parallel zur Stirn und teilt den Körper in vorn (ventral) und hinten (dorsal)."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Körperebenen im Überblick",
    "head": [
     "Ebene",
     "Verlauf",
     "Teilt in"
    ],
    "rows": [
     [
      "Horizontal (Transversal)",
      "Parallel zum Boden",
      "Oben und unten"
     ],
     [
      "Sagittal",
      "Parallel zur Pfeilnaht",
      "Rechts und links"
     ],
     [
      "Frontal",
      "Parallel zur Stirn",
      "Vorn und hinten"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-atemvolumina-atemregulation",
  "group": "ausbildung",
  "area": "gesundheit",
  "title": "Atemvolumina und Atemregulation",
  "icon": "Wind",
  "ar": "السعة الحيوية (Vitalkapazität) هي أقصى كمية هواء تُستنشق وتُزفر: حجم النَّفَس العادي مضافاً إليه احتياطي الشهيق واحتياطي الزفير. السعة الكلية (Totalkapazität) هي السعة الحيوية مضافاً إليها الحجم المتبقي. مركز التنفس في النخاع المستطيل ينظم عدد مرات التنفس وعمقه، ويتلقى معلومات من مستقبلات تقيس الأكسجين وثاني أكسيد الكربون ودرجة الحموضة. ينخفض الأكسجين أو يرتفع ثاني أكسيد الكربون فيزداد التنفس.",
  "blocks": [
   {
    "h": "Atemgrößen",
    "li": [
     "Die Vitalkapazität ist die Luftmenge, die maximal ein- und ausgeatmet werden kann. Sie setzt sich aus dem normalen Atemzugvolumen, dem inspiratorischen Reservevolumen und dem exspiratorischen Reservevolumen zusammen.",
     "Die Totalkapazität ist die Vitalkapazität plus das Residualvolumen und entspricht damit der Gesamtkapazität der Lunge. Das Residualvolumen bleibt auch nach maximaler Ausatmung in der Lunge."
    ]
   },
   {
    "h": "Atemregulation",
    "li": [
     "Das Atemzentrum liegt im verlängerten Mark am Übergang vom Gehirn zum Rückenmark. Es steuert Atemfrequenz und Atemzugtiefe.",
     "Spezielle Rezeptoren messen Sauerstoff (pO2), Kohlendioxid (pCO2) und den pH-Wert im Blut. Sinkt der Sauerstoffgehalt oder steigt der Kohlendioxidgehalt, nehmen Atemfrequenz und Atemzugtiefe zu. Sinkt das Kohlendioxid, werden sie geringer."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Lungenvolumina im Überblick",
    "head": [
     "Größe",
     "Bedeutung"
    ],
    "rows": [
     [
      "Atemzugvolumen",
      "Normale Atemluft pro Atemzug"
     ],
     [
      "Vitalkapazität",
      "Maximal ein- und ausatembare Luft"
     ],
     [
      "Residualvolumen",
      "Bleibt nach maximaler Ausatmung in der Lunge"
     ],
     [
      "Totalkapazität",
      "Vitalkapazität plus Residualvolumen"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-niere-nephron-hormone",
  "group": "ausbildung",
  "area": "gesundheit",
  "title": "Niere: Aufgaben, Nephron und Hormone",
  "icon": "Droplets",
  "ar": "مهمة الكلية تكوين البول: يمر عبرها نحو 1700 لتر دم يومياً. تُخرج المواد التي تُطرح في البول (حمض اليوريك واليوريا والكرياتينين) والمواد السامة كالأدوية، وتنظم توازن الماء (هرمونا ADH وألدوستيرون) والتوازن الحمضي القاعدي. وتنتج هرمونين مهمين: الرينين الذي يرفع ضغط الدم عبر نظام رينين-أنجيوتنسين-ألدوستيرون، والإريثروبويتين الذي ينشط تكوين كريات الدم الحمراء في نخاع العظم. الوحدة الوظيفية هي النيفرون.",
  "blocks": [
   {
    "h": "Aufgaben der Niere",
    "li": [
     "Die Niere bildet den Harn. In 24 Stunden fließen rund 1.700 Liter Blut durch die Nieren und werden gereinigt.",
     "Sie scheidet harnpflichtige Substanzen aus: Harnsäure (aus dem Purinstoffwechsel), Harnstoff (stickstoffhaltige Reste des Eiweißstoffwechsels) und Kreatinin (aus dem Muskelstoffwechsel). Außerdem scheidet sie giftig wirkende Stoffe wie manche Medikamente aus.",
     "Sie reguliert den Wasserhaushalt: ADH (antidiuretisches Hormon) hält Wasser zurück, Aldosteron hält Wasser und Salze zurück. Dazu reguliert sie das Säure-Basen-Gleichgewicht."
    ]
   },
   {
    "h": "Hormone der Niere",
    "li": [
     "Renin hebt über den Renin-Angiotensin-Aldosteron-Mechanismus den Blutdruck. Aldosteron hält Wasser und Salze zurück und erhöht damit das Blutvolumen, Angiotensin verengt die Blutgefäße.",
     "Erythropoetin fördert im Knochenmark die Bildung der roten Blutkörperchen. Bei Niereninsuffizienz fehlt es, deshalb entsteht oft eine Blutarmut."
    ]
   },
   {
    "h": "Nephron",
    "li": [
     "Ein Nierenkörperchen und das zugehörige Nierenkanälchen bilden zusammen eine Funktionseinheit, das Nephron. Das Nierenkörperchen besteht aus einem Kapillarknäuel (Glomerulum) und der umgebenden Bowman-Kapsel.",
     "Das Nierenkanälchen verläuft vom Harnpol zuerst in mehreren Windungen (proximaler Tubulus), dann gerade und mit einer Schleife (Henle-Schleife), kehrt zum Nierenkörperchen zurück (distaler Tubulus) und mündet ins Sammelrohr, das den Urin zum Nierenbecken leitet."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Hormone der Niere",
    "head": [
     "Hormon",
     "Wirkung"
    ],
    "rows": [
     [
      "Renin",
      "Hebt über Angiotensin und Aldosteron den Blutdruck"
     ],
     [
      "Erythropoetin",
      "Fördert die Bildung roter Blutkörperchen im Knochenmark"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-neugeborene-reifegrade-wochenbett",
  "group": "ausbildung",
  "area": "lebensphasen",
  "title": "Neugeborene: Reifegrade, Erstversorgung und Wochenbettpflege",
  "icon": "Baby",
  "ar": "الخديج يولد قبل 37+0 أسبوعاً، والمولود التام من 37+0 إلى نهاية الأسبوع 41، والمتأخر بعد ذلك. علامات الخديج: طبقة الكيسة البيضاء (Käseschmiere) والزغب الجنيني (Lanugo) كثيفان والجلد رقيق وشفاف. المولود السليم: وردي اللون ونبضه فوق 100 وعضلاته نشطة وتنفسه كافٍ وردود فعله سريعة (تقييم APGAR). بعد الولادة نحافظ على دفء المولود ونعطيه للتلامس الجلدي (Bonding) ومحاولة الإرضاع الأولى. تراقب الأم: العلامات الحيوية وارتفاع قاع الرحم والنزف وإفرازات النفاس (Lochien) من 400 إلى 1200 مل لمدة 4 إلى 6 أسابيع.",
  "blocks": [
   {
    "h": "Reifegrade",
    "li": [
     "Ein Frühgeborenes kommt vor der vollendeten 37+0 SSW zur Welt (Gestationsalter unter 260 Tagen). Typisch sind eine stark ausgeprägte Lanugobehaarung, Käseschmiere und dünne, durchscheinende Haut.",
     "Ein reifes Neugeborenes wird ab 37+0 bis Ende der 41. SSW geboren. Die Lanugobehaarung ist verschwunden, Käseschmiere findet sich meist nur noch in den Hautfalten, und die Finger- und Fußnägel überragen die Kuppen.",
     "Ein übertragenes Neugeborenes wird nach der 41. SSW geboren. Die Haut ist faltig und trocken, Käseschmiere fehlt, und das Kopfhaar ist flaumig."
    ]
   },
   {
    "h": "Erstversorgung und APGAR",
    "li": [
     "Nach der Geburt sichert man den Wärmehaushalt, gibt das Kind zum Bonding, ermöglicht den ersten Stillversuch, ermittelt Gewicht und Körpermaße und führt den APGAR-Test durch.",
     "Kriterien eines gesunden Kindes sind ein rosiges Aussehen, eine Pulsfrequenz über 100, ein reger Grundtonus, eine ausreichende Atmung und sofortige Reaktion der Reflexe. Beim Baden werden Wärme und Hautschutz beachtet."
    ]
   },
   {
    "h": "Versorgung der Mutter",
    "li": [
     "Im Kreißsaal kontrolliert man Vitalzeichen, Fundusstand und Nachblutungen, prüft die Plazenta auf Vollständigkeit und versorgt Geburtsverletzungen.",
     "Die Lochien (Wochenfluss) bestehen aus Wundsekret, Resten der Eihäute und kleinen Plazentapartikeln. Sie dauern vier bis sechs Wochen, die Gesamtmenge beträgt 400 bis 1.200 ml.",
     "Auf der Wochenbettstation trägt man bei Kontakt mit dem Genitalbereich immer Handschuhe, auch zum Entfernen der Vorlage. Gebrauchte Vorlagen werden sofort entsorgt. Dazu kommen gründliche Intimpflege und Hilfestellung beim Stillen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Reifegrade im Vergleich",
    "head": [
     "Reifegrad",
     "Zeitpunkt",
     "Typisch"
    ],
    "rows": [
     [
      "Frühgeboren",
      "Vor 37+0 SSW",
      "Viel Lanugo, dünne Haut"
     ],
     [
      "Reif",
      "37+0 bis Ende 41. SSW",
      "Käseschmiere in Hautfalten"
     ],
     [
      "Übertragen",
      "Nach der 41. SSW",
      "Trockene, faltige Haut"
     ]
    ]
   }
  ]
 }
];
