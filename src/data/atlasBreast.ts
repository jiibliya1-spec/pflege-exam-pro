/**
 * Atlas Brust (weiblich, rechts): gesunde Brust und Brust mit Karzinom.
 * WICHTIG: Dieses Modell (public/models/breast.glb) ist NICHT aus BodyParts3D (dort fehlt die Brust), sondern ein eigenes, schematisches
 * Lehrmodell aus Grundformen (Erzeugung: tools/build-breast.mjs). Es ist keine anatomische Vermessung; Lage und Aufbau folgen dem Lehrbuchschema.
 * Tumor und befallene Lymphknoten liegen in der Schicht "tumor" (beim Öffnen des Atlas ausgeblendet = gesunde Brust).
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, Row } from "./atlasTypes";

export const BREAST_LAYERS: AtlasLayer[] = [
  { id: "shell", de: "Haut und Fettgewebe", ar: "الجلد والنسيج الدهني", en: "Skin and fat", fr: "Peau et graisse", tr: "Deri ve yağ" },
  { id: "gland", de: "Milchdrüse (Lappen, Gänge, Brustwarze)", ar: "الغدة الثديية (الفصوص والقنوات والحلمة)", en: "Mammary gland", fr: "Glande mammaire", tr: "Meme bezi" },
  { id: "wall", de: "Brustwand (Muskel, Rippen)", ar: "جدار الصدر (العضلة والأضلاع)", en: "Chest wall", fr: "Paroi thoracique", tr: "Göğüs duvarı" },
  { id: "lymph", de: "Lymphknoten der Achsel", ar: "العقد اللمفاوية في الإبط", en: "Axillary lymph nodes", fr: "Ganglions axillaires", tr: "Aksiller lenf nodları" },
  { id: "tumor", de: "Karzinom und befallene Lymphknoten", ar: "السرطان والعقد المصابة", en: "Carcinoma and affected nodes", fr: "Carcinome", tr: "Karsinom" },
];

const NOTE: [string, string] = ["Schematisches Lehrmodell aus Grundformen, kein anatomisch vermessenes Modell.", "نموذج تعليمي تخطيطي من أشكال أساسية، وليس نموذجاً تشريحياً مقاساً."];
const I = (de: string, la: string, ar: string, fd: string, fa: string, kd: string, ka: string, note: [string, string] = NOTE): AtlasItem => ({ de, la, ar, fn: [fd, fa], kl: [kd, ka], note });

const items: Record<string, AtlasItem> = {
  skin: I("Haut der Brust", "Cutis mammae", "جلد الثدي",
    "Äußere Hülle der Brust, mit Talg- und Schweißdrüsen. Mit der Fascie der Brustwand verbinden Cooper-Bänder (Haltebänder) die Haut.", "الغلاف الخارجي للثدي، فيه غدد دهنية وعرقية. وتربط أربطة كوبر الجلد بفاسيا جدار الصدر.",
    "Hautveränderungen sind Warnzeichen: Einziehung oder Dellen, Orangenhaut (Peau d'orange), Rötung, Ekzem der Brustwarze (Morbus Paget). Bei der Körperpflege und Lagerung darauf achten und dokumentieren.", "تغيّرات الجلد علامات إنذار: انسحاب أو غمازات وجلد قشرة البرتقال واحمرار وإكزيما الحلمة (داء باجيت). تُلاحظ وتُوثَّق أثناء العناية والتمريض."),
  fat: I("Fettgewebe", "Corpus adiposum mammae", "النسيج الدهني",
    "Füllt den Raum um die Drüse und bestimmt die Größe der Brust. Bei Frauen nach den Wechseljahren ersetzt Fett einen Teil des Drüsengewebes.", "يملأ الحيز حول الغدة ويحدد حجم الثدي. بعد سن اليأس يحل الدهن محل جزء من النسيج الغدي.",
    "Die Mammographie ist bei fettreicher Brust (ältere Frauen) leichter zu beurteilen als bei dichtem Drüsengewebe (jüngere Frauen); dort ergänzt der Ultraschall.", "يسهل تقييم تصوير الثدي بالأشعة عند الثدي الغني بالدهن (النساء الأكبر سناً) مقارنة بالنسيج الغدي الكثيف (الأصغر سناً)، وفيه يكمل الموجات فوق الصوتية."),
  nipple: I("Brustwarze und Warzenhof", "Papilla mammaria und Areola", "الحلمة والهالة",
    "Hier münden die Milchgänge. Die Brustwarze ist sehr berührungsempfindlich; im Warzenhof liegen kleine Talgdrüsen (Montgomery-Drüsen).", "هنا تفتح قنوات الحليب. الحلمة شديدة الحساسية، وفي الهالة غدد دهنية صغيرة (غدد مونتغمري).",
    "Verdächtig: einseitig eingezogene Brustwarze, blutige oder klare Absonderung aus einer Brustwarze, wunde Stelle, die nicht heilt. Immer ärztlich abklären.", "المثير للشك: حلمة منسحبة في جانب واحد وإفراز دموي أو شفاف من حلمة واحدة وجرح لا يلتئم. يجب فحصها طبياً دائماً."),
  lobes: I("Drüsenlappen", "Lobi glandulae mammariae", "فصوص الغدة الثديية",
    "Etwa 15 bis 20 Drüsenlappen, jeder aus vielen Läppchen (Lobuli), die in Schwangerschaft und Stillzeit Milch bilden. Sie ordnen sich strahlenförmig um die Brustwarze.", "نحو 15 إلى 20 فصاً غدياً، كل منها من فصيصات كثيرة تصنع الحليب في الحمل والإرضاع. وهي مرتبة بشكل شعاعي حول الحلمة.",
    "Die meisten Karzinome entstehen in den Zellen der Milchgänge (duktal, etwa 70 bis 80 %), ein kleinerer Teil in den Läppchen (lobulär). Hormone (Östrogen) beeinflussen das Drüsengewebe und den Tumor.", "تنشأ معظم السرطانات من خلايا قنوات الحليب (قنوية، نحو 70 إلى 80%) وجزء أقل من الفصيصات. وتؤثر الهرمونات (الإستروجين) على النسيج الغدي وعلى الورم."),
  ducts: I("Milchgänge", "Ductus lactiferi", "قنوات الحليب",
    "Verzweigte Gänge, die die Milch aus den Lappen zur Brustwarze leiten und dort einzeln münden.", "قنوات متفرعة توصل الحليب من الفصوص إلى الحلمة وتفتح فيها كل واحدة على حدة.",
    "Entzündung der Brust (Mastitis) im Wochenbett: Rötung, Schmerz, Fieber; Stillen und Ausstreichen nach Anordnung, Kühlen, Arzt. Ein Karzinom kann sich entlang der Gänge ausbreiten (DCIS = Vorstufe in den Gängen).", "التهاب الثدي (Mastitis) في النفاس: احمرار وألم وحمى؛ الإرضاع والتفريغ والتبريد حسب التعليمات ومراجعة الطبيب. وقد ينتشر السرطان على طول القنوات (DCIS = مرحلة مبكرة داخل القنوات)."),
  "pectoralis-major": I("Großer Brustmuskel", "Musculus pectoralis major", "العضلة الصدرية الكبرى",
    "Fächerförmiger Muskel unter der Brust; bewegt den Arm nach vorn, innen und senkt ihn. Die Brust liegt auf ihm und ist locker verschieblich.", "عضلة مروحية تحت الثدي تحرك الذراع للأمام وللداخل وتخفضه. يستند الثدي عليها ويتحرك فوقها بحرية.",
    "Ein Knoten, der auf der Brustwand fixiert ist (nicht verschieblich), spricht für Einwachsen in die Muskelfaszie. Nach Brustoperationen: Schulter- und Armbeweglichkeit früh üben (Physiotherapie), um Verkürzungen zu vermeiden.", "العقدة الثابتة على جدار الصدر (غير متحركة) تدل على تغلغل في لفافة العضلة. بعد عمليات الثدي: تمارين مبكرة للكتف والذراع (علاج طبيعي) لتجنب التقلصات."),
  ribs: I("Rippen und Brustbein", "Costae und Sternum", "الأضلاع والقص",
    "Knöcherne Brustwand, die Herz und Lunge schützt. Die Brustdrüse reicht etwa von der 2. bis zur 6. Rippe.", "جدار صدري عظمي يحمي القلب والرئة. وتمتد الغدة الثديية تقريباً من الضلع الثاني إلى السادس.",
    "Knochenmetastasen (Rippen, Wirbelsäule, Becken) sind beim Mammakarzinom häufig: neue Knochenschmerzen und Spontanfrakturen ernst nehmen, schonend lagern und mobilisieren, Arzt informieren.", "نقائل العظام (الأضلاع والعمود الفقري والحوض) شائعة في سرطان الثدي: تؤخذ آلام العظام الجديدة والكسور التلقائية بجدية، مع وضعية وتحريك لطيفين وإبلاغ الطبيب."),
  "axillary-nodes": I("Lymphknoten der Achsel", "Nodi lymphatici axillares", "العقد اللمفاوية الإبطية",
    "Etwa drei Viertel der Lymphe der Brust fließen in die Achsellymphknoten; sie sind die erste Filterstation und Abwehr.", "نحو ثلاثة أرباع لمف الثدي يصب في عقد الإبط، وهي المحطة الأولى للتصفية والدفاع.",
    "Der erste Lymphknoten im Abflussgebiet (Wächterlymphknoten, Sentinel) wird bei der Operation untersucht. Nach Entfernung von Achsellymphknoten oder Bestrahlung droht ein Armlymphödem: den Arm schonen, Verletzungen vermeiden, Lymphdrainage nach Anordnung; Blutdruck, Blutabnahme und Spritzen am betroffenen Arm nach ärztlicher Vorgabe meist vermeiden.", "يُفحص أول عقدة في منطقة التصريف (العقدة الحارسة) أثناء العملية. بعد استئصال عقد الإبط أو الإشعاع يخشى الوذمة اللمفية في الذراع: حماية الذراع وتجنب الجروح وتصريف لمفي حسب التعليمات؛ وغالباً يُتجنب قياس الضغط وسحب الدم والحقن في الذراع المصابة حسب توجيه الطبيب."),
  tumor: I("Tumor (Mammakarzinom)", "Carcinoma mammae", "الورم (سرطان الثدي)",
    "Im Modell als unregelmäßiger, sternförmig ausstrahlender Knoten im oberen äußeren Quadranten dargestellt, dem häufigsten Sitz (etwa die Hälfte). Typisch ist ein derber, schlecht verschieblicher, meist schmerzloser Knoten mit unscharfem Rand.", "يظهر في النموذج كعقدة غير منتظمة ذات نتوءات نجمية في الربع العلوي الخارجي، وهو المكان الأكثر شيوعاً (نحو النصف). والمميز عقدة صلبة قليلة الحركة غالباً بلا ألم وحدودها غير واضحة.",
    "Häufigster Krebs der Frau. Zeichen: neuer Knoten, Einziehung von Haut oder Brustwarze, Orangenhaut, Größenunterschied, Absonderung aus der Brustwarze, Knoten in der Achsel. Früherkennung: Tastuntersuchung durch Ärztin oder Arzt, Mammographie-Screening für Frauen von 50 bis 75 Jahren alle 2 Jahre; Abklärung durch Ultraschall und Stanzbiopsie (Rezeptorstatus: Hormonrezeptoren, HER2). Therapie: Operation (brusterhaltend mit Bestrahlung oder Brustentfernung), Chemotherapie, antihormonelle Therapie, Antikörper, Strahlentherapie.", "أكثر سرطان شيوعاً عند المرأة. العلامات: عقدة جديدة وانسحاب الجلد أو الحلمة وقشرة البرتقال واختلاف الحجم وإفراز من الحلمة وعقدة في الإبط. الكشف المبكر: فحص باليد عند الطبيب وفحص الماموغرام للنساء من 50 إلى 75 سنة كل سنتين؛ والتأكيد بالموجات فوق الصوتية وخزعة بالإبرة (حالة المستقبلات: الهرمونية وHER2). العلاج: جراحة (حفظ الثدي مع الإشعاع أو استئصاله) وعلاج كيميائي وهرموني وأجسام مضادة وإشعاعي.",
    ["Schematische Darstellung. Größe, Form und Lage eines echten Tumors sind sehr unterschiedlich.", "تمثيل تخطيطي. حجم الورم الحقيقي وشكله وموقعه يختلف كثيراً."]),
  "metastatic-nodes": I("Befallene Achsellymphknoten", "Nodi lymphatici axillares (metastasiert)", "عقد الإبط المصابة",
    "Vergrößerte, derbe Lymphknoten, in denen sich Krebszellen angesiedelt haben (Lymphknotenmetastasen). Sie sind im Modell größer und dunkelrot.", "عقد متضخمة صلبة استقرت فيها خلايا سرطانية (نقائل عقدية). وهي في النموذج أكبر وبلون أحمر داكن.",
    "Der Lymphknotenstatus bestimmt Stadium und Therapie. Tastbare, derbe Knoten in der Achsel melden. Über die Lymphe und das Blut kann der Krebs auch in Knochen, Lunge, Leber und Gehirn streuen (Fernmetastasen).", "حالة العقد تحدد المرحلة والعلاج. تُبلَّغ العقد الصلبة المحسوسة في الإبط. وقد ينتشر السرطان عبر اللمف والدم إلى العظام والرئة والكبد والدماغ (نقائل بعيدة)."),
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string) => ({ q: [qd, qa] as [string, string], o, why: [wd, wa] as [string, string] });

export const BREAST_CFG: AtlasConfig = {
  key: "breast",
  modelUrl: "/models/breast.glb",
  items,
  layers: BREAST_LAYERS,
  layerOf: (id) => (id === "skin" || id === "fat" ? "shell" : id === "nipple" || id === "lobes" || id === "ducts" ? "gland" : id === "pectoralis-major" || id === "ribs" ? "wall" : id === "axillary-nodes" ? "lymph" : "tumor"),
  color: (id) => ({ skin: 0xe8b8a0, fat: 0xf2d98a, nipple: 0xc07860, lobes: 0xe58a9a, ducts: 0xf5e27a, "pectoralis-major": 0x8a4640, ribs: 0xe8e0d0, "axillary-nodes": 0x7ab0d8, tumor: 0x7a1a24, "metastatic-nodes": 0x5a0e18 } as Record<string, number>)[id] ?? 0xcccccc,
  shell: ["shell"],
  hiddenLayers: ["tumor"],
  innerLabel: ["Haut und Fett durchsichtig", "الجلد والدهن شفافان", "Skin and fat transparent", "Peau et graisse transparentes", "Deri ve yağ saydam"],
  careTitle: ["Pflege-Überblick Brust und Mammakarzinom", "نظرة تمريضية على الثدي وسرطان الثدي", "Nursing overview: breast and breast cancer", "Aperçu infirmier : sein et cancer du sein", "Hemşirelik özeti: meme ve meme kanseri"],
  target: [-0.01, 0, 0.012],
  shellOpacity: 0.2,
  dist: 0.46, minDist: 0.06, maxDist: 0.9, clipRange: 0.1, explodeScale: 0.4,
  care: {
    diseases: ["Mammakarzinom (häufigster Krebs der Frau)", "Mastitis (Brustentzündung)", "Fibroadenom, Zysten (gutartig)", "Morbus Paget der Brustwarze"],
    symptoms: ["Neuer derber, meist schmerzloser Knoten", "Einziehung von Haut oder Brustwarze, Orangenhaut", "Absonderung aus der Brustwarze (besonders blutig)", "Größen- oder Formunterschied der Brüste", "Knoten oder Schwellung in der Achsel"],
    diagnostics: ["Tastuntersuchung durch Ärztin oder Arzt", "Mammographie (Screening 50 bis 75 Jahre, alle 2 Jahre)", "Ultraschall der Brust", "Stanzbiopsie mit Rezeptorstatus (Östrogen, Progesteron, HER2)", "Staging bei Verdacht auf Streuung"],
    actions: ["Nach der Operation: Wundkontrolle, Drainagen beobachten, Schmerztherapie", "Armlymphödem vorbeugen: Verletzungen vermeiden, Schulter-Arm-Übungen, Lymphdrainage nach Anordnung", "Bei Chemotherapie: Übelkeit, Infektionsrisiko, Mundpflege, Haarausfall ansprechen", "Psychosoziale Begleitung, Prothese oder Epithese, Austausch mit Selbsthilfegruppen anbieten", "Frauen zur Früherkennung ermutigen (Tastuntersuchung, Screening)"],
    monitoring: ["Wunde und Drainagen (Menge, Farbe)", "Armumfang beidseits, Schwellung, Spannungsgefühl", "Fieber und Infektzeichen (besonders unter Chemotherapie)", "Neue Knochenschmerzen, Atemnot, Husten (mögliche Streuung)", "Stimmung und Belastung der Patientin"],
    terms: [["Mammakarzinom", "سرطان الثدي"], ["Brustdrüse (Glandula mammaria)", "الغدة الثديية"], ["Wächterlymphknoten (Sentinel)", "العقدة الحارسة"], ["Mastektomie", "استئصال الثدي"], ["brusterhaltende Therapie (BET)", "العلاج الحافظ للثدي"], ["Lymphödem", "الوذمة اللمفية"], ["Mammographie", "تصوير الثدي بالأشعة (ماموغرام)"], ["HER2", "مستقبل HER2"]],
    lessons: ["mammakarzinom"],
  },
  quiz: [
    Q("In welchem Bereich der Brust sitzt ein Karzinom am häufigsten?", "في أي منطقة من الثدي يقع السرطان غالباً؟", ["Oberer äußerer Quadrant", "Unterer innerer Quadrant", "Nur hinter der Brustwarze", "Gleichmäßig in allen Bereichen"], "Etwa die Hälfte der Karzinome liegt im oberen äußeren Quadranten (zur Achsel hin), dort ist am meisten Drüsengewebe.", "نحو نصف السرطانات في الربع العلوي الخارجي (باتجاه الإبط) حيث يوجد أكبر قدر من النسيج الغدي."),
    Q("Wohin fließt der größte Teil der Lymphe der Brust zuerst?", "إلى أين يصب معظم لمف الثدي أولاً؟", ["In die Achsellymphknoten", "In die Leistenlymphknoten", "In die Halslymphknoten der Gegenseite", "Direkt in die Lunge"], "Etwa drei Viertel der Lymphe fließen in die Achsellymphknoten; deshalb wird dort der Wächterlymphknoten untersucht.", "نحو ثلاثة أرباع اللمف يصب في عقد الإبط؛ ولذلك تُفحص هناك العقدة الحارسة."),
    Q("Welche Maßnahme gehört nach Entfernung von Achsellymphknoten zur Vorbeugung eines Armlymphödems?", "أي إجراء يساعد على الوقاية من الوذمة اللمفية بعد استئصال عقد الإبط؟", ["Verletzungen am Arm vermeiden und nach ärztlicher Vorgabe keine Blutdruckmessung oder Spritzen an diesem Arm", "Den Arm dauerhaft ruhig stellen", "Den Arm fest abbinden", "Den Arm täglich heiß baden"], "Der Lymphabfluss ist gestört, jede Verletzung oder Infektion kann ein Ödem auslösen. Leichte Bewegung ist gut, Abbinden und Hitze nicht.", "التصريف اللمفي مضطرب، وأي جرح أو التهاب قد يسبب وذمة. الحركة الخفيفة مفيدة أما الربط والحرارة فلا."),
  ],
  source: ["Eigenes schematisches Lehrmodell (keine Quelle aus BodyParts3D, dort fehlt die Brust), aus Grundformen erzeugt. Lage und Aufbau nach Lehrbuchschema, nicht anatomisch vermessen; Größe, Form und Lage eines Tumors sind in Wirklichkeit sehr verschieden. Inhalt bitte durch Fachpersonal prüfen.", "نموذج تعليمي تخطيطي خاص (ليس من BodyParts3D لأن الثدي غير موجود فيه) من أشكال أساسية. الموضع والبنية حسب المخطط الدراسي وغير مقاسة تشريحياً؛ وحجم الورم وشكله وموقعه مختلف كثيراً في الواقع. يرجى مراجعة المحتوى من مختص.", "Own schematic teaching model (not from BodyParts3D, which has no breast), built from basic shapes. Not anatomically measured.", "Modèle pédagogique schématique propre, non mesuré anatomiquement.", "Kendi şematik öğretim modelimiz; anatomik ölçüm değildir."],
};
