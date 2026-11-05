/** Ergänzende Lektionen 11: Prophylaxen vertieft (Dekubitus, Pneumonie, Thrombose, Kontraktur, Sturz). */
import type { Lesson } from "./lessons";

export const GAPS11_LESSONS: Lesson[] = 
[
 {
  "id": "g11-prophylaxe-grundlagen",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Prophylaxen: Grundlagen, primär und sekundär, Bewegung als Kern",
  "icon": "ShieldCheck",
  "ar": "الوقاية هي اكتشاف الأخطار مبكراً وإزالة أسبابها قبل حدوث الضرر. هناك وقاية أولية تمنع المرض، ووقاية ثانوية تمنع تفاقمه أو عودته. والحركة هي جوهر كل أنواع الوقاية: تحمي الجلد والرئة والأوردة والمفاصل معاً.",
  "blocks": [
   {
    "h": "Was bedeutet Prophylaxe?",
    "li": [
     "Prophylaxe heißt Vorbeugung: Man erkennt Gefährdungen früh und beseitigt gezielt ihre Ursachen, bevor ein Schaden entsteht.",
     "Dazu gehört immer dreierlei: das Risiko einschätzen, passende Maßnahmen planen und durchführen, und die Wirkung beobachten und dokumentieren."
    ]
   },
   {
    "h": "Primäre und sekundäre Prophylaxe",
    "li": [
     "Primäre Prophylaxe verhindert, dass eine Krankheit überhaupt auftritt. Beispiel: Ein bettlägeriger Mensch mit noch gesunder Haut wird nach Plan gelagert.",
     "Sekundäre Prophylaxe verhindert, dass eine bestehende Krankheit sich verschlimmert oder erneut auftritt. Beispiel: Bei einer nicht wegdrückbaren Rötung wird die Stelle sofort vollständig entlastet.",
     "Prüfungstipp: Wird gefragt, ob etwas „vor“ der Krankheit oder „nach“ ihrem Beginn geschieht, entscheidet das über primär oder sekundär."
    ]
   },
   {
    "h": "Welche Erkrankungen Prophylaxen verhindern sollen",
    "li": [
     "Dekubitus, Pneumonie, Thrombose und Kontrakturen sind die vier klassischen Komplikationen der Bettlägerigkeit.",
     "Dazu kommen Munderkrankungen (zum Beispiel Soor), Hauterkrankungen wie Intertrigo, Verstopfung (Obstipation) und Harnwegsinfekte.",
     "Auch Sturz, Aspiration und Austrocknung gehören im Alltag zu den wichtigen Prophylaxen."
    ]
   },
   {
    "h": "Bewegung als Kern aller Prophylaxen",
    "li": [
     "Keine Prophylaxe ist wichtiger als die andere, aber sie hängen eng zusammen. Im Zentrum steht die Bewegung.",
     "Wer sich bewegt, entlastet die Haut (Dekubitus), atmet tiefer (Pneumonie), treibt das Blut aus den Beinen (Thrombose) und hält seine Gelenke beweglich (Kontraktur).",
     "Bewegung weckt außerdem Appetit, Verdauung und Aufmerksamkeit. Deshalb gilt: Aktivieren statt alles abnehmen, auch wenn es mehr Geduld braucht."
    ]
   },
   {
    "h": "Beispiel aus dem Alltag",
    "li": [
     "Herr K. liegt nach einem Schlaganfall viel im Bett. Ein einziger Tagesablauf mit Aufsetzen am Bettrand, Atemübung, Beinbewegung und Positionswechsel nach Plan wirkt gleichzeitig gegen vier Komplikationen.",
     "Die Pflegefachkraft schätzt das Risiko ein und plant. Pflegehilfskräfte melden Veränderungen sofort, zum Beispiel eine gerötete Hautstelle oder ein geschwollenes Bein."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Primäre und sekundäre Prophylaxe",
    "cols": [
     {
      "t": "Primär",
      "icon": "ShieldCheck",
      "tone": "ok",
      "items": [
       "Ziel: Die Krankheit tritt gar nicht erst auf",
       "Beispiel: Gesunde Haut wird durch Lagewechsel vor Druck geschützt",
       "Beispiel: Beine bewegen, damit keine Thrombose entsteht"
      ]
     },
     {
      "t": "Sekundär",
      "icon": "TriangleAlert",
      "tone": "warn",
      "items": [
       "Ziel: Die Krankheit wird nicht schlimmer und kommt nicht wieder",
       "Beispiel: Bei bestehender Hautrötung sofort entlasten, damit kein offenes Geschwür entsteht",
       "Beispiel: Nach einer Thrombose Kompression und Bewegung, damit sie nicht wiederkehrt"
      ]
     }
    ]
   },
   {
    "kind": "tiles",
    "title": "Acht Erkrankungen, die Prophylaxen verhindern sollen",
    "items": [
     {
      "t": "Dekubitus",
      "s": "Druckgeschädigte Haut",
      "icon": "Layers",
      "tone": "bad"
     },
     {
      "t": "Pneumonie",
      "s": "Lunge schlecht belüftet",
      "icon": "Wind",
      "tone": "warn"
     },
     {
      "t": "Thrombose",
      "s": "Gerinnsel in der Vene",
      "icon": "Droplets",
      "tone": "bad"
     },
     {
      "t": "Kontraktur",
      "s": "Gelenk versteift",
      "icon": "PersonStanding",
      "tone": "warn"
     },
     {
      "t": "Mundkrankheiten",
      "s": "Soor, Entzündung",
      "icon": "Smile",
      "tone": "info"
     },
     {
      "t": "Intertrigo",
      "s": "Wunde Hautfalten",
      "icon": "Waves",
      "tone": "warn"
     },
     {
      "t": "Obstipation",
      "s": "Träge Verdauung",
      "icon": "Soup",
      "tone": "info"
     },
     {
      "t": "Harnwegsinfekt",
      "s": "Keime in Blase, Niere",
      "icon": "Pipette",
      "tone": "info"
     }
    ]
   }
  ]
 },
 {
  "id": "g11-dekubitus-entstehung",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Dekubitus: Entstehung, Risikofaktoren, gefährdete Stellen und Fingerdruckprobe",
  "icon": "Layers",
  "ar": "تنشأ قرحة الضغط حين يؤثر ضغط أو قوى قص بشدة أو لمدة طويلة فتقلّ التروية ويموت النسيج. عوامل الخطر: رطوبة الجلد وضعف التروية وقلة الحركة واضطراب الإحساس وسوء التغذية. تظهر القرح غالباً فوق النتوءات العظمية. الدرجة الأولى احمرار لا يزول بضغط الإصبع.",
  "blocks": [
   {
    "h": "Was ist ein Dekubitus?",
    "li": [
     "Ein Dekubitus ist eine örtlich begrenzte Schädigung der Haut und des darunterliegenden Gewebes. Ursache sind zu lange oder zu starke Einwirkung von Druck oder Scherkräften.",
     "Die Folge ist eine örtliche Minderdurchblutung. Ohne ausreichend Sauerstoff sterben die Zellen ab."
    ]
   },
   {
    "h": "Druck, Zeit und Scherkräfte",
    "li": [
     "Druck ist Kraft, die senkrecht auf eine Fläche wirkt. Je kleiner die Auflagefläche, zum Beispiel über Knochen, desto größer der Druck pro Fläche.",
     "Zeit: Ein gesunder Mensch wechselt im Schlaf unbewusst sehr oft die Lage. Kranke, alte oder bewusstseinsgestörte Menschen tun das kaum noch, deshalb wirkt der Druck lange.",
     "Scherkräfte entstehen, wenn Hautschichten gegeneinander verschoben werden. Beispiel: Der Oberkörper ist hochgestellt und der Mensch rutscht nach unten, die tiefe Schicht bleibt am Laken haften, die obere gleitet mit. Die Blutgefäße werden gedehnt und abgeklemmt.",
     "Merke: Wer im Bett hochgezogen wird, erleidet Scherkräfte. Besser anheben oder mit Gleithilfen bewegen."
    ]
   },
   {
    "h": "Risikofaktoren",
    "li": [
     "Vorgeschädigte oder feuchte Haut durch Schwitzen, Fieber oder Inkontinenz. Der saure Urin und mögliche Keime belasten sie zusätzlich.",
     "Schlechte Durchblutung: Blutarmut, Herzschwäche, Diabetes und arterielle Verschlusskrankheit. Hier kann Gewebe schon ohne starken Druck absterben.",
     "Immobilität, Gefühlsstörungen (zum Beispiel bei Querschnittlähmung) und Bewusstseinsstörungen: Der Druck wird nicht bemerkt und nicht ausgeglichen.",
     "Zusätzlicher Druck von Krümeln und Falten im Laken. Schlechter Allgemeinzustand und Mangelernährung schwächen die Haut und bremsen die Heilung."
    ]
   },
   {
    "h": "Gefährdete Körperstellen",
    "li": [
     "Die Stellen, an denen der Knochen dicht unter der Haut liegt: Hinterkopf, Ohren, Schulterblätter, Schultern, Ellbogen, Kreuzbein und Steißbein, großer Rollhügel (Trochanter), Knie, Knöchel und Fersen.",
     "Im Sitzen sind die Sitzbeinhöcker besonders gefährdet. Auch Hautstellen unter Schläuchen, Brillen oder Sauerstoffbrillen und unter Schienen können Druckstellen bekommen."
    ]
   },
   {
    "h": "Dekubitus erkennen: Kategorie 1 und Fingerdruckprobe",
    "li": [
     "Kategorie 1 ist eine anhaltende Rötung bei intakter Haut. Sie ist der Moment für sofortiges Handeln.",
     "Fingerdruckprobe: Man drückt mit dem Finger kurz auf die gerötete Stelle. Wird sie weiß und die Farbe kommt zurück, ist die Haut nur kurz gerötet. Bleibt sie rot, ist das ein Dekubitus der Kategorie 1.",
     "Handeln: Die Stelle sofort vollständig entlasten, nicht massieren und nicht reiben, der Pflegefachkraft melden und dokumentieren."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Wie ein Dekubitus entsteht",
    "steps": [
     {
      "t": "Druck und Scherkräfte",
      "s": "Lange oder starke Belastung über Knochenvorsprüngen",
      "icon": "Layers"
     },
     {
      "t": "Minderdurchblutung",
      "s": "Kleine Gefäße werden zusammengedrückt, das Gewebe bekommt zu wenig Sauerstoff",
      "icon": "Droplets",
      "tone": "warn"
     },
     {
      "t": "Gewebeschaden",
      "s": "Zellen sterben ab, erst Rötung, dann offene Wunde",
      "icon": "TriangleAlert",
      "tone": "bad"
     }
    ],
    "note": "Entscheidend sind Druckhöhe und Druckdauer: Wenig Druck über lange Zeit schadet ähnlich wie viel Druck in kurzer Zeit."
   },
   {
    "kind": "tiles",
    "title": "Gefährdete Körperstellen",
    "items": [
     {
      "t": "Rückenlage",
      "s": "Hinterkopf, Schulterblätter, Ellbogen, Kreuz- und Steißbein, Fersen",
      "icon": "User",
      "tone": "warn"
     },
     {
      "t": "Seitenlage",
      "s": "Ohr, Schulter, Rollhügel (Trochanter), Knie, Knöchel",
      "icon": "UserRound",
      "tone": "warn"
     },
     {
      "t": "Sitzen",
      "s": "Sitzbeinhöcker, Steißbein, Fersen bei fehlender Fußauflage",
      "icon": "PersonStanding",
      "tone": "warn"
     }
    ]
   },
   {
    "kind": "table",
    "title": "Risikofaktoren und warum sie gefährden",
    "head": [
     "Faktor",
     "Warum gefährdet er?"
    ],
    "rows": [
     [
      "Feuchte Haut (Schweiß, Inkontinenz)",
      "Haut weicht auf und verletzt sich leichter, Urin und Stuhl reizen"
     ],
     [
      "Fieber",
      "Austrocknung und höherer Sauerstoffbedarf, Gewebe schädigt schneller"
     ],
     [
      "Übergewicht",
      "Höherer Auflagedruck, Schwitzen, schlechter durchblutetes Fettgewebe"
     ],
     [
      "Anämie, Herzschwäche",
      "Zu wenig Sauerstoff im Gewebe"
     ],
     [
      "Diabetes, pAVK",
      "Gefäßschäden: Gewebe kann schon ohne starken Druck absterben"
     ],
     [
      "Gefühlsstörung, Bewusstseinsstörung",
      "Druck wird nicht gespürt, deshalb keine Eigenbewegung"
     ],
     [
      "Mangelernährung",
      "Haut und Gewebe sind schwach und heilen schlecht"
     ]
    ]
   }
  ]
 },
 {
  "id": "g11-dekubitus-lagerung",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Dekubitusprophylaxe praktisch: Lagerung, Hilfsmittel, Mikrolagerung, Haut und Sitzen",
  "icon": "Moon",
  "ar": "تقوم الوقاية العملية على تخفيف الضغط بتغيير الوضعية (30 و135 درجة) ورفع الكعبين، وعلى توزيعه بفرش ناعم أو ضغط متناوب، إضافة إلى العناية بالجلد والتغذية. بعض الوسائل غير مناسبة: الحلقات المطاطية والجلود وواقيات الكعب. والتغييرات الدقيقة لا تغني عن تغيير الوضعية.",
  "blocks": [
   {
    "h": "Lagerung planen",
    "li": [
     "Ein Lagerungs- oder Bewegungsplan legt fest, wie und wie oft umgelagert wird. Er richtet sich nach Hautzustand, Risiko und den Wünschen des Menschen.",
     "Die Pflegefachkraft plant mit dem Betroffenen und, wenn gewünscht, den Angehörigen. Ein starres Zeitschema gibt es nicht. Wichtig ist, wie schnell sich die Haut nach Entlastung erholt.",
     "Bewegung und Lage genau dokumentieren: Wann, welche Position, wie war die Haut?"
    ]
   },
   {
    "h": "Lagerungsformen",
    "li": [
     "30°-Lagerung: Der Mensch liegt schräg zur Seite, das Gesäß wird frei. Kissen stützen Rücken und Beine, Rollhügel und Kreuzbein bleiben ohne Druck.",
     "135°-Lagerung (Halbbauchlage): Der Mensch liegt fast auf dem Bauch, gestützt durch Kissen. Sie entlastet Kreuzbein und Trochanter stark und wird nur bei guter Toleranz verwendet.",
     "Freilagerung der Fersen: Ein Kissen unter den Waden lässt die Fersen frei schweben. Die Knie dürfen nicht überstreckt sein.",
     "Oberkörper nicht dauerhaft hochstellen: Bei erhöhtem Dekubitusrisiko möglichst nicht höher als etwa 30 Grad, außer zum Essen oder aus medizinischen Gründen. Sonst rutscht der Mensch nach unten und es entstehen Scherkräfte."
    ]
   },
   {
    "h": "Hilfsmittel einsetzen",
    "li": [
     "Weichlagerung (Schaumstoff, Gel, Luft) vergrößert die Auflagefläche und verteilt den Druck. Das Laken darf bei einer Antidekubitusmatratze nicht straff gespannt sein, sonst steigt der Auflagedruck.",
     "Wechseldrucksysteme entlasten abwechselnd verschiedene Körperbereiche. Sie sind bei hohem Risiko sinnvoll.",
     "Hohllagernde Systeme, die eine Stelle völlig frei lassen, belasten den umgebenden Bereich und werden heute nicht mehr empfohlen.",
     "Nicht geeignet: Gummiringe, Wasserkissen, Watteverbände, Fersen- und Ellbogenschoner, Felle und kleinzellige Auflagen. Sie verteilen den Druck nicht, sondern verschieben ihn oder stauen Wärme."
    ]
   },
   {
    "h": "Mikrolagerung und Sitzen",
    "li": [
     "Mikrolagerung sind kleine Lageänderungen, die man auch ohne ganzen Positionswechsel durchführen kann, zum Beispiel ein Kissen unter einer Schulter oder Hüfte. Sie ersetzen das Umlagern nicht.",
     "Im Sitzen sind die Sitzbeinhöcker besonders belastet. Sitzkissen, Gewichtsverlagerung und kurzes Aufstehen in regelmäßigen Abständen helfen. Die Füße brauchen Bodenkontakt oder eine Fußstütze, die Rückenlehne verhindert das Herunterrutschen."
    ]
   },
   {
    "h": "Haut, Ernährung und Alltag",
    "li": [
     "Hautpflege erhält den Säureschutzmantel: lauwarm waschen, milde Waschlotion statt normaler Seife, danach gut abtupfen und bei trockener Haut eine Wasser-in-Öl-Creme verwenden.",
     "Gerötete Haut nicht massieren: Das schädigt das geschädigte Gewebe zusätzlich.",
     "Inkontinenzprodukte rechtzeitig wechseln, keine Kunststofffolien unter dem Menschen, faltenfreie saugfähige Wäsche. Beengende Kleidung und Falten im Laken vermeiden.",
     "Ausreichend trinken und eiweißreich essen unterstützt Haut und Heilung. Bei Mangelernährung ärztlich oder durch eine Ernährungsfachkraft abklären lassen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Druckentlastung und Druckverteilung im Vergleich",
    "head": [
     "Methode",
     "Prinzip",
     "Beispiele"
    ],
    "rows": [
     [
      "Umlagern / Positionswechsel",
      "Druck wird von der Stelle genommen (Entlastung)",
      "30°-Lagerung, 135°-Lagerung, Seitenwechsel nach Plan"
     ],
     [
      "Freilagerung",
      "Die gefährdete Stelle liegt frei in der Luft",
      "Fersen frei lagern mit Kissen unter den Waden"
     ],
     [
      "Weichlagerung",
      "Mehr Auflagefläche verteilt den Druck (Reduktion)",
      "Schaumstoff- oder Gelmatratze, Luftkissen"
     ],
     [
      "Wechseldruck",
      "Luftkammern füllen und entleeren sich abwechselnd",
      "Wechseldruckmatratze bei hohem Risiko"
     ],
     [
      "Mikrolagerung",
      "Kleine Lageänderungen ahmen die natürlichen Bewegungen nach",
      "Handtuchrolle oder kleines Kissen unter Schulter oder Hüfte"
     ]
    ],
    "note": "Weichlagerung ersetzt das Umlagern nicht, sondern ergänzt es. Mikrolagerung ersetzt es auch nicht."
   },
   {
    "kind": "compare",
    "title": "Geeignet oder nicht geeignet?",
    "cols": [
     {
      "t": "Geeignet",
      "icon": "ThumbsUp",
      "tone": "ok",
      "items": [
       "Weichlagerungsmatratzen und Wechseldruck",
       "Gelauflagen und Sitzkissen",
       "Kissen, Handtuchrollen zur 30°-Lagerung",
       "Gleitmatten gegen Scherkräfte"
      ]
     },
     {
      "t": "Nicht geeignet",
      "icon": "TriangleAlert",
      "tone": "bad",
      "items": [
       "Ringförmige Kissen (Gummiringe)",
       "Fersen- und Ellbogenschoner, Watteverbände",
       "Echte oder künstliche Felle, Wasserkissen",
       "Kleinzellige Antidekubitusauflagen"
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "g11-pneumonie-vati",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Pneumonieprophylaxe vertieft: Atelektase, VATI-Lagerung und Sekretstau",
  "icon": "Wind",
  "ar": "يحدث التهاب الرئة عند الراحة في الفراش بسبب ضعف تهوية الرئة واحتباس المفرزات، فتنهار الحويصلات (انخماص) وتتكاثر الجراثيم. أهم الإجراءات: التحريك المبكر، علاج الألم، تمارين التنفس، شرب كمية كافية، العناية بالفم، ووضعيات VATI التي تمدّد مناطق محددة من الرئة.",
  "blocks": [
   {
    "h": "Wie entsteht eine Pneumonie bei Bettruhe?",
    "li": [
     "Ursachen sind meist eine zu schwache Belüftung der Lunge, ein Sekretstau in den Atemwegen oder beides. Bei Aspiration kommen Keime aus Mund und Magen in die Lunge.",
     "Gesunde Menschen wechseln oft die Lage, gähnen und seufzen tief. Dabei öffnen sich wenig belüftete Bereiche. Fehlt diese Bewegung, fallen Lungenbläschen zusammen und verkleben (Atelektase). Das ist ein guter Nährboden für Bakterien.",
     "Belüftung und Durchblutung hängen zusammen: Schlecht belüftete Bereiche werden schlecht durchblutet und umgekehrt. Unten liegende Bereiche werden durch die Schwerkraft besser durchblutet."
    ]
   },
   {
    "h": "Wer ist gefährdet?",
    "li": [
     "Immobile und bettlägerige Menschen, Menschen mit Schmerzen im Brust- oder Bauchraum (Schonatmung), zum Beispiel nach Operation oder Rippenbruch.",
     "Menschen mit Herz- oder Atemwegserkrankungen, Raucher, Übergewichtige, Beatmete, Menschen nach Schlaganfall mit Schluckstörung, mit Abwehrschwäche oder unter Sedierung."
    ]
   },
   {
    "h": "Maßnahmen bei unzureichender Belüftung",
    "li": [
     "Frühmobilisation: so früh und so viel Bewegung wie es der Zustand erlaubt. Das ist die wirksamste Maßnahme.",
     "Schmerzen behandeln: Gegen Schonatmung gibt der Arzt Schmerzmittel nach Anordnung, damit tief geatmet werden kann.",
     "Atemübungen: tief durchatmen, gegen leichten Widerstand ausatmen (zum Beispiel mit Atemtrainer), Lippenbremse. Frische Luft durch Stoßlüften.",
     "Atemstimulierende Einreibung und Oberkörperhochlagerung (bei Dekubitusrisiko nicht dauerhaft höher als etwa 30 Grad, zur Atemerleichterung bei Bedarf höher nach Absprache)."
    ]
   },
   {
    "h": "VATI-Lagerungen",
    "li": [
     "VATI-Lagerungen dehnen gezielt bestimmte Lungenbereiche: V-Lagerung die unteren, A-Lagerung die oberen, T- und I-Lagerung alle Bereiche. Die Kissen liegen dabei links und rechts neben der Wirbelsäule.",
     "Die Lagerung wird mit regelmäßiger Umlagerung kombiniert und nur so lange gehalten, wie sie angenehm ist. Bei Schmerzen oder Atemnot sofort lösen und die Pflegefachkraft informieren."
    ]
   },
   {
    "h": "Maßnahmen bei Sekretstau",
    "li": [
     "Ursachen: Rauchen, Bronchitis, Asthma, Austrocknung (zähes Sekret), schmerzbedingt oder durch Erschöpfung zu schwaches Abhusten.",
     "Ausreichend trinken verflüssigt das Sekret. Schleimlösende Tees können helfen. Befeuchten der Atemluft (Inhalation, Raumluftbefeuchter) wirkt zusätzlich.",
     "Abklopfen oder Vibrationsmassage und das Üben von Husten (zum Beispiel Kissen auf die Wunde pressen) unterstützen das Abhusten. Gute Mundpflege verringert die Keime."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Vom Bettruhe zur Lungenentzündung",
    "steps": [
     {
      "t": "Wenig Bewegung, flache Atmung",
      "s": "Bestimmte Lungenbereiche werden kaum belüftet",
      "icon": "Wind"
     },
     {
      "t": "Sekret staut sich",
      "s": "Schleim bleibt liegen, Alveolen kollabieren (Atelektase)",
      "icon": "Droplets",
      "tone": "warn"
     },
     {
      "t": "Keime vermehren sich",
      "s": "Der feuchte, unbelüftete Bereich ist ein guter Nährboden",
      "icon": "Microscope",
      "tone": "warn"
     },
     {
      "t": "Pneumonie",
      "s": "Fieber, Husten, Atemnot",
      "icon": "Thermometer",
      "tone": "bad"
     }
    ]
   },
   {
    "kind": "table",
    "title": "VATI-Lagerung: Buchstabe, Form, Wirkung",
    "head": [
     "Lagerung",
     "Form der Kissen",
     "Belüftet vor allem"
    ],
    "rows": [
     [
      "V",
      "V-förmig unter dem Rücken",
      "Untere Lungenabschnitte"
     ],
     [
      "A",
      "A-förmig unter dem Rücken",
      "Obere Lungenabschnitte"
     ],
     [
      "T",
      "Handtuchrolle quer unter dem Rücken",
      "Alle Lungenabschnitte"
     ],
     [
      "I",
      "Handtuchrolle längs entlang der Wirbelsäule",
      "Alle Abschnitte bei sehr schmalen Menschen"
     ]
    ],
    "note": "Merkwort VATI. Die Wirbelsäule bleibt immer frei, die Kissen stützen links und rechts davon."
   }
  ]
 },
 {
  "id": "g11-thrombose-venenpumpe",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Thromboseprophylaxe vertieft: Venenpumpe, Virchow-Trias, Übungen, Lagerung und Strümpfe",
  "icon": "Droplets",
  "ar": "يعود الدم من الساقين إلى القلب بخمس قوى أهمها حركة العضلات والتنفس العميق، وتغيب عند الراحة في الفراش. أسباب الخثرة حسب ثالوث فيرشو: بطء الجريان وتلف الجدار وتغيّر التخثر. الوقاية: الحركة وتمارين السرير ورفع الساقين وشرب كمية كافية وجوارب الضغط حسب الأمر الطبي.",
  "blocks": [
   {
    "h": "Wie Blut aus den Beinen zurück zum Herzen kommt",
    "li": [
     "Venen leiten sauerstoffarmes Blut zum Herzen. In den Beinen muss das Blut gegen die Schwerkraft nach oben.",
     "Dabei helfen fünf Kräfte: Venenklappen, Muskelpumpe, Pulswelle der Nachbararterie, Sog des Herzens und Druckänderungen beim Atmen.",
     "Bei Bettruhe fallen vor allem Muskelpumpe und tiefe Atmung weg. Deshalb entsteht leichter eine Thrombose."
    ]
   },
   {
    "h": "Risikogruppen",
    "li": [
     "Bettlägerige, Gelähmte, Menschen nach Operation oder Verletzung, Menschen mit Gips oder Schonhaltung.",
     "Menschen mit Dehydratation, Herzschwäche, Diabetes, Übergewicht, Schwangere, Raucher, ältere Menschen, Menschen unter Kortison oder Hormonpille."
    ]
   },
   {
    "h": "Zeichen erkennen und melden",
    "li": [
     "Schweregefühl oder Spannungsgefühl im Bein, ziehender Schmerz wie Muskelkater, Schwellung (größerer Umfang), glänzende, bläulich-rote Haut, Wärmegefühl.",
     "Druckschmerz im Verlauf der tiefen Beinvenen, Schmerz in der Leiste oder Wade, manchmal leicht erhöhte Temperatur.",
     "Bei Verdacht: sofort die Pflegefachkraft oder den Arzt informieren, das Bein nicht massieren, nicht belasten lassen und nicht bewegen, bis entschieden wurde."
    ]
   },
   {
    "h": "Maßnahmen: Bewegung und Atmung",
    "li": [
     "Gehen ist am wirksamsten. Wo das nicht geht, im Bett Füße kreisen, Zehen spreizen und krallen, Füße beugen und strecken, Knie beugen und strecken, Beine anheben und gegen das Bettende drücken, Radfahren in der Luft.",
     "Die Übungen möglichst oft machen, zum Beispiel stündlich, mit Pausen. Stehen allein hilft nicht, denn ohne Muskelbewegung fließt das Blut nicht besser.",
     "Tiefes Einatmen erzeugt Unterdruck im Brustkorb und beschleunigt kurz den venösen Rückfluss. Atemübungen schützen gleichzeitig vor Pneumonie."
    ]
   },
   {
    "h": "Entstauende Lagerung und Flüssigkeit",
    "li": [
     "Die Beine hochlagern, im Liegen etwa 20 Grad, im Sitzen mit verstellbarer Beinauflage nicht höher als etwa 30 Grad. Hüfte und Knie bleiben dabei leicht gestreckt und werden nicht stark abgeknickt.",
     "Beim Hochlagern auf die Fersen achten: Sie müssen frei liegen, sonst droht ein Dekubitus.",
     "Ausreichend trinken, als Richtwert etwa 1,5 bis 2 Liter täglich, sofern keine Trinkmengenbegrenzung angeordnet ist. Wasser, Tee und verdünnte Säfte sind gut geeignet."
    ]
   },
   {
    "h": "Kompressionsstrümpfe und Medikamente",
    "li": [
     "Medizinische Thrombosestrümpfe (MTS) werden nach Anordnung getragen und von einer Fachkraft angepasst. Der Druck ist am Fuß am höchsten und nimmt nach oben ab.",
     "Vor dem Anziehen die Beine kurz hochlagern, am besten morgens vor dem Aufstehen. Die Strümpfe müssen faltenfrei sitzen und dürfen nicht einschnüren. Haut täglich kontrollieren.",
     "Vorsicht bei Durchblutungsstörungen der Arterien, Gefühlsstörungen und Hautschäden. Hier nur nach ärztlicher Entscheidung verwenden.",
     "Blutverdünnende Medikamente (zum Beispiel Spritzen unter die Haut) gibt es nur nach ärztlicher Anordnung. Wer sie bekommt, wird auf Blutungszeichen beobachtet."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Fünf Kräfte bringen das Blut aus den Beinen zum Herzen",
    "items": [
     {
      "t": "Venenklappen",
      "s": "Wie Ventile: das Blut kann nicht zurückfließen",
      "icon": "Lock",
      "tone": "info"
     },
     {
      "t": "Muskelpumpe",
      "s": "Beim Bewegen drücken die Muskeln die Venen aus",
      "icon": "PersonStanding",
      "tone": "ok"
     },
     {
      "t": "Arterienpuls",
      "s": "Jede Pulswelle drückt auf die danebenliegende Vene",
      "icon": "HeartPulse",
      "tone": "info"
     },
     {
      "t": "Sog des Herzens",
      "s": "Der Vorhof saugt Blut an",
      "icon": "Heart",
      "tone": "info"
     },
     {
      "t": "Atmung",
      "s": "Beim Einatmen entsteht Unterdruck im Brustkorb",
      "icon": "Wind",
      "tone": "ok"
     }
    ],
    "note": "Bewegung und tiefes Atmen sind die beiden Kräfte, die wir selbst beeinflussen können."
   },
   {
    "kind": "table",
    "title": "Virchow-Trias mit Beispielen",
    "head": [
     "Ursache",
     "Bedeutung",
     "Beispiele"
    ],
    "rows": [
     [
      "Langsamer Blutfluss",
      "Blut staut sich, Gerinnsel setzen sich ab",
      "Bettruhe, Gips, langes Sitzen, Flug, Lähmung"
     ],
     [
      "Gefäßwandschaden",
      "Verletzte Wand löst Gerinnung aus",
      "Operation, Verletzung, Venenentzündung"
     ],
     [
      "Veränderte Blutgerinnung",
      "Das Blut gerinnt schneller",
      "Dehydratation, Rauchen, Hormonpille, Krebs, Schwangerschaft"
     ]
    ]
   }
  ]
 },
 {
  "id": "g11-kontraktur-spitzfuss",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Kontrakturprophylaxe vertieft: Arten, Bewegungsübungen und Spitzfuß",
  "icon": "PersonStanding",
  "ar": "التقفع تقصّر دائم في العضلات والأوتار يُيبّس المفصل. له ثلاثة أنواع: انثنائي وبسطي ودوراني. تسببه قلة الحركة والشلل والوضعية التجنّبية. الوقاية بالتمارين الفاعلة والتحريك والوضعيات الصحيحة. والقدم الحصانية أشيع تقفع، وتُمنع بمسند قدم وقوس سرير وتحريك الكاحل.",
  "blocks": [
   {
    "h": "Was ist eine Kontraktur?",
    "li": [
     "Eine Kontraktur ist eine dauerhafte Verkürzung von Muskeln, Sehnen und Bändern. Das Gelenk versteift und lässt sich nicht mehr vollständig bewegen.",
     "Merkmale: Bewegung nur unter Schmerzen, Gelenk kann nicht ganz gebeugt oder gestreckt werden, das Gelenk steht in einer festen Position. Eine ausgeprägte Kontraktur ist nicht mehr rückgängig zu machen. Deshalb zählt Vorbeugen."
    ]
   },
   {
    "h": "Arten und Ursachen",
    "li": [
     "Beugekontraktur (zum Beispiel Knie, Hüfte), Streckkontraktur (zum Beispiel Spitzfuß), Rotationskontraktur (verdrehtes Gelenk).",
     "Ursachen: Immobilität und Inaktivität, Lähmungen, Schonhaltung bei Schmerzen, große Narben, Spastik. Risiko steigt bei hohem Alter, schlechtem Allgemeinzustand und seelischer Belastung."
    ]
   },
   {
    "h": "Bewegungsübungen",
    "li": [
     "Aktive Übungen führt der Mensch selbst aus, die Pflegekraft motiviert und leitet an. Passive Übungen führt die Pflegekraft nach Anweisung aus. Hilfskräfte bewegen Gelenke nicht selbstständig.",
     "Nutzen: bessere Durchblutung, Gelenkflüssigkeit bleibt erhalten, Herz, Lunge und Kreislauf werden trainiert, Selbstständigkeit und Selbstwertgefühl steigen.",
     "Beine: Zehen krallen und strecken, Sprunggelenk beugen, strecken und kreisen, Knie beugen und strecken, Beine seitlich bewegen. Arme: Finger, Handgelenke, Ellbogen und Schultern in alle Richtungen bewegen.",
     "Immer schmerzfrei und mit Rücksicht auf Gelenkgrenzen üben. Bei Schmerz, Schwellung oder Überwärmung aufhören und melden."
    ]
   },
   {
    "h": "Spitzfuß",
    "li": [
     "Der Spitzfuß ist eine Fehlstellung mit Fersenhochstand: Der Fuß berührt den Boden nur mit dem Ballen und lässt sich nicht mehr in die Normalstellung bringen. Er ist die häufigste Kontraktur bei Bettlägerigen.",
     "Warum? Im Liegen überwiegt der Ruhetonus der Wadenmuskeln, und die Bettdecke drückt die Füße zusätzlich nach unten.",
     "Prophylaxe: weiche Fußstütze, Füße etwa im rechten Winkel, Bettbogen oder Decke über das Bettende, Sprunggelenk regelmäßig bewegen.",
     "Nach Schlaganfall oder bei Spastik: keinen Druck gegen die Fußsohle ausüben, weil das die Spastik verstärkt."
    ]
   },
   {
    "h": "Beispiel aus der Pflege",
    "li": [
     "Frau M. liegt seit zwei Wochen nach einer Hüftoperation im Bett. Ihre Füße zeigen immer nach unten, die Decke liegt eng auf den Zehen.",
     "Maßnahmen: Bettbogen einsetzen, ein weiches Kissen am Fußende, dreimal täglich Fußübungen mit ihr zusammen (sie bewegt selbst, so weit sie kann), Fußstellung im Dokumentationsbogen festhalten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Drei Arten der Kontraktur",
    "cols": [
     {
      "t": "Beugekontraktur",
      "icon": "PersonStanding",
      "tone": "warn",
      "items": [
       "Gelenk bleibt gebeugt, Strecken geht nicht mehr",
       "Beispiel: Knie, Hüfte, Ellbogen"
      ]
     },
     {
      "t": "Streckkontraktur",
      "icon": "PersonStanding",
      "tone": "warn",
      "items": [
       "Gelenk bleibt gestreckt, Beugen geht nicht mehr",
       "Beispiel: Spitzfuß"
      ]
     },
     {
      "t": "Rotationskontraktur",
      "icon": "RefreshCw",
      "tone": "warn",
      "items": [
       "Gelenk bleibt verdreht",
       "Beispiel: Unterarm, Hüfte"
      ]
     }
    ]
   },
   {
    "kind": "flow",
    "title": "Spitzfußprophylaxe in drei Schritten",
    "steps": [
     {
      "t": "Füße abstützen",
      "s": "Weiche Fußstütze am Fußende, Füße etwa im rechten Winkel (90°)",
      "icon": "Layers"
     },
     {
      "t": "Druck von der Decke nehmen",
      "s": "Bettbogen verwenden oder die Decke über das Bettende legen",
      "icon": "Moon",
      "tone": "ok"
     },
     {
      "t": "Bewegen und beobachten",
      "s": "Sprunggelenk regelmäßig bewegen, Fußstellung und Haut kontrollieren",
      "icon": "Eye"
     }
    ],
    "note": "Vorsicht nach Schlaganfall: Kein Druck gegen die Fußsohle, denn das kann die Spastik verstärken. Hier fragt man die Fachkraft oder Therapie."
   }
  ]
 },
 {
  "id": "g11-sturz-gehhilfen",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Sturzprophylaxe vertieft: Ursachen, Gehhilfen, bodennahe Pflege und Dokumentation",
  "icon": "Footprints",
  "ar": "للسقوط أسباب داخلية (أمراض وضعف عضلات وارتباك) وخارجية (أسلاك وإضاءة وأحذية) وللأدوية دور كبير. الوقاية بتدريب القوة والتوازن وأحذية مناسبة وبيئة آمنة ووسائل مشي مضبوطة. بعد السقوط: لا نرفع الشخص فوراً، نفحصه ونبلغ ونوثّق في بروتوكول السقوط. التقييد ليس وقاية.",
  "blocks": [
   {
    "h": "Was ist ein Sturz?",
    "li": [
     "Ein Sturz ist jedes Ereignis, bei dem eine Person unbeabsichtigt auf dem Boden oder einer tieferen Ebene zu liegen kommt.",
     "Mit dem Alter lässt die Reaktionsfähigkeit nach, deshalb steigt das Risiko. Stürzt jemand mehrmals in kurzer Zeit, müssen die Ursachen gründlich geklärt werden."
    ]
   },
   {
    "h": "Ursachen: innere und äußere",
    "li": [
     "Innere Ursachen betreffen die Person: Muskelschwäche, Gelenkprobleme, neurologische Ausfälle, Herz-Kreislauf-Erkrankungen, schlechtes Sehen, Verwirrtheit, Schwindel.",
     "Äußere Ursachen liegen in der Umgebung: herumliegende Kabel, verschüttete Flüssigkeit, schlechtes Licht, glatter Boden, falsche Schuhe, ungeeignete oder nicht angepasste Gehhilfen.",
     "Medikamente beeinflussen Reaktion und Gleichgewicht, besonders Beruhigungsmittel, Schlafmittel, Psychopharmaka und blutdrucksenkende Mittel. Warnzeichen: Schläfrigkeit, verwaschene Sprache, Verwirrtheit, Unruhe. Das sofort der Pflegefachkraft melden."
    ]
   },
   {
    "h": "Vorbeugende Maßnahmen",
    "li": [
     "Die Pflegefachkraft erhebt das Sturzrisiko (zum Beispiel mit einer Sturzrisikoskala) und plant Maßnahmen mit dem Betroffenen.",
     "Mobilität erhalten: Kraft- und Gleichgewichtstraining, Gehübungen, Bewegung im Alltag. Immobilität führt zu Muskelabbau, Kontrakturen und Gleichgewichtsstörungen und erhöht das Risiko.",
     "Schuhe: gute Passform, fester Sitz, kleiner Absatz, rutschfeste Sohle. Barfuß nur auf Teppich, nachts bei Bedarf Antirutschsocken.",
     "Umgebung: gutes Licht, Nachtlicht, freie Wege, Klingel und persönliche Dinge in Reichweite, niedriges Bett, Toilettengang rechtzeitig anbieten."
    ]
   },
   {
    "h": "Gehhilfen richtig einsetzen",
    "li": [
     "Welche Gehhilfe passt, entscheiden Pflegefachkraft, Arzt oder Therapie gemeinsam. Sie wird an die Körpergröße angepasst (aufrechter Stand, keine gebeugte Hüfte), der Mensch wird eingewiesen, und sie wird regelmäßig auf Schäden geprüft. Keine provisorischen Reparaturen.",
     "Gehen mit einer Stütze (Stock oder Unterarmstütze): Sie wird auf der Seite des gesunden Beins geführt. Ablauf: erst die Stütze vorsetzen, dann das betroffene Bein, dann das gesunde Bein.",
     "Der Rollator wird vor dem Menschen hergeschoben, die Geschwindigkeit bestimmt der Nutzer. Bremsen und Höhe vorher prüfen. Kann jemand die Handbremse nicht bedienen, gibt es Modelle mit Gummistehern."
    ]
   },
   {
    "h": "Bodennahe Pflege, Matten und Protektoren",
    "li": [
     "Bodennahe Pflege: Eine dicke Schaumstoffmatratze liegt auf dem Boden, umgeben von abwaschbaren Matten. So ist die Fallhöhe fast null, und man muss keine Fixierung einsetzen.",
     "Sturzmatten sichern mögliche Sturzstellen ab. Hüftprotektoren können Oberschenkelhalsbrüche vermeiden helfen, wenn sie wirklich getragen werden.",
     "Fixierung ist keine Sturzprophylaxe: Bei verwirrten Menschen verstärkt sie Unruhe und Verletzungsgefahr."
    ]
   },
   {
    "h": "Nach einem Sturz",
    "li": [
     "Ruhe bewahren, den Menschen nicht sofort hochziehen. Ansprechbarkeit, Schmerzen und sichtbare Verletzungen prüfen, Vitalzeichen messen, Hilfe holen. Pflegefachkraft und Arzt informieren, bei schweren Zeichen den Notruf wählen.",
     "Dokumentiert werden meist im Sturzprotokoll: Zeitpunkt und Ort, Tätigkeit vor dem Sturz, körperlicher und seelischer Zustand davor, Ablauf des Sturzes, Verletzungen und eingeleitete Maßnahmen.",
     "Das Team bespricht danach die Ursache und passt die Maßnahmen an, damit sich ein Sturz nicht wiederholt."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Gehhilfen im Überblick",
    "head": [
     "Hilfsmittel",
     "Wofür?",
     "Wichtig"
    ],
    "rows": [
     [
      "Gehstock",
      "Leichte Unsicherheit, kleine Entlastung",
      "Auf der gesunden Seite führen, Länge anpassen, Gummikappe prüfen"
     ],
     [
      "Unterarmstützen",
      "Ein Bein entlasten",
      "Griff auf Handgelenkhöhe, Stütze etwa drei Querfinger unter dem Ellbogen"
     ],
     [
      "Rollator",
      "Gleichgewicht und Ausdauer",
      "Bremsen testen, Höhe einstellen, vor dem Menschen schieben"
     ],
     [
      "Gehbock",
      "Kurze Strecken, hohe Stützfunktion",
      "Starre Form braucht Kraft, bewegliche Form viel Koordination"
     ],
     [
      "Gehwagen mit Achselstützen",
      "Beine nur eingeschränkt belastbar, Schultergürtel kräftig",
      "Übt einen natürlichen Gang"
     ]
    ]
   },
   {
    "kind": "flow",
    "title": "Dreipunktgang mit zwei Unterarmstützen",
    "steps": [
     {
      "t": "Beide Stützen vorsetzen",
      "s": "Fester Stand, Blick nach vorn",
      "icon": "Target"
     },
     {
      "t": "Betroffenes Bein nachsetzen",
      "s": "Es steht zwischen den Stützen und wird dabei entlastet",
      "icon": "User",
      "tone": "warn"
     },
     {
      "t": "Gesundes Bein nachziehen",
      "s": "Es wird am betroffenen Bein vorbei nach vorn gesetzt",
      "icon": "UserRound",
      "tone": "ok"
     }
    ]
   },
   {
    "kind": "tiles",
    "title": "Sturzursachen",
    "items": [
     {
      "t": "Innere Ursachen",
      "s": "Erkrankungen, Schwindel, Sehstörung, Muskelschwäche, Verwirrtheit",
      "icon": "HeartPulse",
      "tone": "warn"
     },
     {
      "t": "Medikamente",
      "s": "Schlaf- und Beruhigungsmittel, Psychopharmaka, blutdrucksenkende Mittel",
      "icon": "Pill",
      "tone": "warn"
     },
     {
      "t": "Umgebung",
      "s": "Kabel, nasser Boden, schlechtes Licht, falsche Schuhe, ungeeignete Hilfsmittel",
      "icon": "Home",
      "tone": "info"
     }
    ]
   }
  ]
 }
];
