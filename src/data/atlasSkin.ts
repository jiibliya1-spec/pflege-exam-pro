/**
 * Atlas Haut: Beschriftungen zu den 18 benannten Strukturen des BodyParts3D-Modells (public/models/skin.glb).
 * Definition: tools/defs/skin.json. Paarige Strukturen sind zusammengefasst.
 * WICHTIG: Das Modell enthält die Körperoberfläche (Haut als ein Körper), Kopfhaar, Augenbrauen, Lippe, Schamhaar sowie das Skelett als Tiefenorientierung.
 * NICHT enthalten: Hautschichten (Epidermis, Dermis, Subkutis), Haarfollikel, Drüsen, Nägel, Sinnesrezeptoren, Gefäße der Haut.
 * Diese werden im gekennzeichneten Schema (SkinSchemas, kein 3D-Modell) gezeigt.
 * Das Skelett dient dazu, die Druckpunkte (Dekubitus-Prädilektionsstellen) zu zeigen, an denen Knochen dicht unter der Haut liegen.
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, AtlasPath, AtlasQuiz } from "./atlasTypes";

export const SKIN_LAYERS: AtlasLayer[] = [
  { id: "skin", de: "Haut (Körperoberfläche)", ar: "الجلد (سطح الجسم)", en: "Skin (body surface)", fr: "Peau (surface)", tr: "Deri (vücut yüzeyi)" },
  { id: "appendage", de: "Haare, Augenbrauen, Lippe", ar: "الشعر والحاجبان والشفة", en: "Hair, eyebrows, lip", fr: "Cheveux, sourcils, lèvre", tr: "Saç, kaş, dudak" },
  { id: "bone", de: "Knochen unter der Haut (Druckpunkte)", ar: "العظام تحت الجلد (نقاط الضغط)", en: "Bones under the skin (pressure points)", fr: "Os sous la peau (points de pression)", tr: "Deri altındaki kemikler" },
];

type It = [string, string, string, string, string, string, string, [string, string]?];
const I = (a: It): AtlasItem => ({ de: a[0], la: a[1], ar: a[2], fn: [a[3], a[4]], kl: [a[5], a[6]], ...(a[7] ? { note: a[7] } : {}) });
const PAIR: [string, string] = ["Rechte und linke Seite sind im Modell zu einer Struktur zusammengefasst.", "الجانبان الأيمن والأيسر مدمجان في بنية واحدة."];
const PRESS = (de: string, ar: string): [string, string] => [de, ar];

const items: Record<string, AtlasItem> = {
  skin: I(["Haut (Körperoberfläche)", "Cutis (Epidermis, Dermis) mit Subcutis", "الجلد (سطح الجسم)",
    "Größtes Organ (etwa 1,5 bis 2 m², bei Erwachsenen etwa 15 % des Körpergewichts). Schutz vor Keimen, Austrocknung, Verletzung und UV-Licht; Temperaturregulation (Schwitzen, Gefäße); Sinnesorgan (Berührung, Schmerz, Wärme); Vitamin-D-Bildung; Ausscheidung.", "أكبر عضو (نحو 1.5 إلى 2 م²، ونحو 15% من وزن البالغ). حماية من الجراثيم والجفاف والإصابة والأشعة فوق البنفسجية؛ تنظيم الحرارة (التعرق والأوعية)؛ عضو حس (لمس وألم وحرارة)؛ تكوين فيتامين د؛ إخراج.",
    "Hautbeobachtung bei jeder Pflege: Farbe, Temperatur, Feuchtigkeit, Spannung (Turgor), Intaktheit. Dekubitus entsteht, wenn Druck die Durchblutung unterbricht, besonders über Knochen. Verbrennungen nach Neunerregel beurteilen. Hautkrebs: ABCDE-Regel (Asymmetrie, Begrenzung, Farbe, Durchmesser, Entwicklung). Pflege: Haut schonend reinigen (pH-neutral), rückfetten, vor Nässe schützen, Hautschutz bei Inkontinenz, Hautpflege bei Pflegebedürftigen.", "مراقبة الجلد عند كل عناية: اللون والحرارة والرطوبة والتوتر (الشدّة) والسلامة. تنشأ قرحة الضغط عندما يقطع الضغط الدورة وخاصة فوق العظام. تقدير الحروق بقاعدة التسعات. سرطان الجلد: قاعدة ABCDE (عدم تناظر وحدود ولون وقطر وتطور). التمريض: تنظيف لطيف (حمضية متعادلة) وترطيب وحماية من الرطوبة وحماية الجلد عند سلس البول والعناية بالجلد لدى المعتمدين على الرعاية.", ["Die Hautschichten sind im Modell nicht getrennt; das Schema zeigt sie (siehe unten, kein 3D-Modell).", "طبقات الجلد غير مفصولة في النموذج؛ ويعرضها المخطط (انظر أدناه وليس نموذجاً ثلاثي الأبعاد)."]]),
  "hair-of-head": I(["Kopfhaar", "Capilli", "شعر الرأس",
    "Schützt vor UV-Licht und Kälte; Haare wachsen aus Follikeln (etwa 1 cm im Monat).", "يحمي من الأشعة والبرد؛ ينمو الشعر من الجريبات (نحو 1 سم شهرياً).",
    "Haarausfall bei Chemotherapie (zeitlich begrenzt, psychisch belastend): Perücke, Kopfbedeckung, Gespräch. Läusebefall (Pediculosis): Kopfhaut untersuchen, Behandlung, Meldung nach Hygienevorgaben. Haarpflege gehört zur Körperpflege.", "تساقط الشعر في العلاج الكيميائي (مؤقت ومؤثر نفسياً): باروكة وغطاء رأس وحوار. القمل: فحص فروة الرأس والعلاج والإبلاغ حسب التعليمات. العناية بالشعر جزء من العناية الجسدية.", undefined]),
  eyebrows: I(["Augenbrauen", "Supercilia", "الحاجبان",
    "Leiten Schweiß und Wasser seitlich am Auge vorbei und unterstützen die Mimik.", "تبعدان العرق والماء جانباً عن العين وتدعمان تعابير الوجه.",
    "Gesichtsasymmetrie (z. B. Fazialisparese, Schlaganfall) sichtbar machen: Stirnrunzeln, Augenschluss prüfen.", "إظهار عدم تناظر الوجه (مثل شلل العصب الوجهي والسكتة): اختبار تقطيب الجبين وإغلاق العين.", PAIR]),
  lips: I(["Lippe", "Labia oris", "الشفة",
    "Übergang von Haut zu Schleimhaut, sehr dünne Haut ohne Talg- und Schweißdrüsen, deshalb leicht trocken; wichtig für Sprechen und Essen.", "انتقال من الجلد إلى المخاطية وجلد رقيق جداً بلا غدد دهنية وعرقية لذا يجف بسهولة؛ مهمة للكلام والأكل.",
    "Zyanose der Lippen zeigt Sauerstoffmangel; Trockenheit bei Dehydrierung; Rhagaden und Soor bei Immunschwäche. Mundpflege und Lippenpflege bei Bettlägerigen, Mundschleimhaut kontrollieren.", "ازرقاق الشفتين يدل على نقص الأكسجين؛ والجفاف عند الجفاف؛ وتشققات وفطريات عند ضعف المناعة. العناية بالفم والشفتين عند طريحي الفراش ومراقبة المخاطية.", ["Im Modell ist die Lippe als Haut-Schleimhaut-Übergang ohne Mundhöhle dargestellt.", "الشفة في النموذج كمنطقة انتقال الجلد إلى المخاطية دون تجويف الفم."]]),
  "pubic-hair": I(["Schambehaarung", "Pubes", "شعر العانة",
    "Sekundäres Geschlechtsmerkmal mit Duftdrüsen; schützt vor Reibung.", "صفة جنسية ثانوية فيها غدد رائحة؛ تحمي من الاحتكاك.",
    "Bei Rasur vor Operationen (nur nach Anordnung, mit Clipper statt Rasierer wegen Infektionsrisiko) Hautverletzungen vermeiden. Intimsphäre wahren.", "عند الحلاقة قبل العمليات (بأمر فقط وبماكينة قص وليس بشفرة لخطر العدوى) تجنب إصابات الجلد. الحفاظ على الخصوصية.", undefined]),
  skull: I(["Schädel (Druckpunkt Hinterhaupt)", "Cranium (Os occipitale)", "الجمجمة (نقطة الضغط القذال)",
    "Knöcherne Basis unter der Haut des Kopfes.", "قاعدة عظمية تحت جلد الرأس.",
    "In Rückenlage ist das Hinterhaupt (Os occipitale) druckgefährdet, besonders bei Kindern und Intensivpatienten. Ohren in Seitenlage. Kopf mit Kissen entlasten, Haut kontrollieren, Beatmungsschläuche und Brillen als Druckquelle beachten.", "في الاستلقاء على الظهر يتعرض القذال لخطر الضغط وخاصة عند الأطفال ومرضى العناية المركزة. والأذنان في الوضع الجانبي. تخفيف الضغط بوسادة ومراقبة الجلد وانتباه لأنابيب التنفس والنظارات كمصدر ضغط.", ["Weitere Druckpunkte siehe Eintragungen unten.", "نقاط الضغط الأخرى في المدخلات التالية."]]),
  spine: I(["Wirbelsäule", "Columna vertebralis", "العمود الفقري",
    "Hinterer Mittelpunkt des Rumpfes; Dornfortsätze liegen dicht unter der Haut.", "المحور الخلفي للجذع؛ والنواتئ الشوكية قريبة من الجلد.",
    "Dornfortsätze sind in Rückenlage Druckstellen, besonders bei abgemagerten Patienten und im Rollstuhl. Haut über der Wirbelsäule kontrollieren, Hohllagerung, Positionswechsel.", "النواتئ الشوكية نقاط ضغط في الاستلقاء على الظهر وخاصة عند الهزال وفي الكرسي المتحرك. فحص الجلد فوق العمود والتجويف ووضعيات تتغير.", undefined]),
  "thoracic-cage": I(["Brustkorb (Rippen, Brustbein)", "Cavea thoracis", "القفص الصدري",
    "Knöcherner Schutz von Herz und Lunge unter dünner Haut.", "حماية عظمية للقلب والرئتين تحت جلد رقيق.",
    "Rippenbögen und Brustbein: Druck durch Beatmungsschläuche, EKG-Elektroden, Pflaster; Druckstellen bei Seitenlage. Hautfalten (Intertrigo) unter der Brust bei Adipositas pflegen.", "الأقواس الضلعية والقص: ضغط من أنابيب التنفس وأقطاب تخطيط القلب واللصقات؛ ونقاط ضغط في الوضع الجانبي. العناية بطيات الجلد تحت الثدي عند السمنة.", PAIR]),
  scapula: I(["Schulterblatt", "Scapula", "لوح الكتف",
    "Flacher Knochen unter der Rückenhaut.", "عظم مسطح تحت جلد الظهر.",
    "Druckpunkt in Rückenlage („Schulterblätter“). Bei bettlägerigen Patienten Lagerung wechseln, Haut beobachten.", "نقطة ضغط في الاستلقاء على الظهر («لوحا الكتف»). عند طريحي الفراش تغيير الوضعية ومراقبة الجلد.", PAIR]),
  clavicle: I(["Schlüsselbein", "Clavicula", "الترقوة",
    "Knochen direkt unter der Haut über der Schulter.", "عظم مباشرة تحت الجلد فوق الكتف.",
    "Druck durch Gurte, Kanülen oder Stützverbände; Haut beobachten.", "ضغط من الأحزمة والقنيات والضمادات الداعمة؛ مراقبة الجلد.", PAIR]),
  ulna: I(["Elle (Ellenbogen)", "Ulna (Olecranon)", "الزند (المرفق)",
    "Ellenbogenspitze direkt unter der Haut ohne Weichteilpolster.", "رأس المرفق مباشرة تحت الجلد بلا وسادة رخوة.",
    "Typischer Druckpunkt in Rückenlage und beim Aufstützen im Sitzen (Rollstuhl, Bett). Ellenbogen polstern; Nervus ulnaris läuft hier („Musikantenknochen“).", "نقطة ضغط نمطية في الاستلقاء على الظهر والاستناد جالساً (كرسي متحرك وسرير). تبطين المرفق؛ والعصب الزندي يمر هنا.", PAIR]),
  "arm-bones": I(["Oberarm, Speiche und Handknochen", "Humerus, Radius, Ossa carpi, metacarpi, Phalanges", "عظام العضد والكعبرة واليد",
    "Skelett des Arms und der Hand.", "هيكل الذراع واليد.",
    "Hand und Fingerkuppen: Hautverletzungen durch Nägel, Druck von Fingerklemmen (Pulsoxymeter), Kontrakturstellung der Hand: Hautpflege in der Handfläche, Handrolle.", "اليد وأطراف الأصابع: إصابات جلدية بالأظافر وضغط مشبك التأكسج وتقفع اليد: العناية بجلد الراحة ولفافة اليد.", PAIR]),
  sacrum: I(["Kreuzbein", "Os sacrum", "العجز",
    "Der häufigste Dekubitus-Ort: Haut liegt direkt über dem Knochen.", "أشيع موضع لقرح الضغط: الجلد مباشرة فوق العظم.",
    "Kategorie 1: nicht wegdrückbare Rötung; weitere Kategorien siehe Schema. Prophylaxe: Risikoeinschätzung (Braden), 30-Grad-Schräglagerung, Mikrolagerung, Weichlagerungsmatratzen, Feuchtigkeit vermeiden, Bewegungsförderung, Ernährung (Eiweiß), Hautinspektion.", "الفئة 1: احمرار لا يزول بالضغط؛ وبقية الفئات في المخطط. الوقاية: تقييم الخطر (برادن) وضعية مائلة 30 درجة وتغييرات صغيرة ومراتب لينة وتجنب الرطوبة وتشجيع الحركة والتغذية (بروتين) وفحص الجلد.", undefined]),
  "hip-bone": I(["Hüftbein (Sitzbein und Beckenkamm)", "Os coxae (Tuber ischiadicum, Crista iliaca)", "عظم الورك (الحدبة الإسكية وعُرف الحرقفة)",
    "Sitzbeinhöcker tragen das Gewicht im Sitzen; der Beckenkamm liegt dicht unter der Haut.", "حدبتا الإسك تحملان الوزن عند الجلوس؛ وعُرف الحرقفة قريب من الجلد.",
    "Sitzbeinhöcker: häufigster Dekubitusort im Rollstuhl; Sitzkissen, Gewichtsverlagerung alle 15 bis 30 Minuten. Beckenkamm in Seitenlage.", "الحدبة الإسكية: أشيع موضع لقرحة الضغط في الكرسي المتحرك؛ وسادة جلوس وتبديل الوزن كل 15 إلى 30 دقيقة. وعرف الحرقفة في الوضع الجانبي.", PAIR]),
  femur: I(["Oberschenkelknochen (Trochanter major)", "Femur (Trochanter major)", "عظم الفخذ (المدور الكبير)",
    "Der große Rollhügel springt seitlich unter der Haut vor.", "المدور الكبير بارز جانبياً تحت الجلد.",
    "Typischer Druckpunkt in Seitenlage (Trochanter). 30-Grad-Seitenlage statt 90 Grad, Kissen zwischen Knien, Haut kontrollieren.", "نقطة ضغط نمطية في الوضع الجانبي (المدور). وضعية جانبية 30 درجة بدل 90 ووسادة بين الركبتين ومراقبة الجلد.", PAIR]),
  "lower-leg-bones": I(["Kniescheibe, Schienbein, Wadenbein", "Patella, Tibia, Fibula", "الرضفة والظنبوب والشظية",
    "Kniescheibe und Schienbeinkante liegen dicht unter der Haut.", "الرضفة وحافة الظنبوب قريبتان من الجلد.",
    "Knie, Schienbein und Wadenbeinköpfchen: Druckstellen bei Seitenlage; Nervus fibularis am Wadenbeinköpfchen schützen. Kompressionsstrümpfe: Haut darunter täglich prüfen.", "الركبة والظنبوب ورأس الشظية: مواضع ضغط في الوضع الجانبي؛ حماية العصب الشظوي عند رأس الشظية. الجوارب الضاغطة: فحص الجلد تحتها يومياً.", PAIR]),
  calcaneus: I(["Fersenbein", "Calcaneus", "العقب",
    "Das Fersenbein liegt unter einer dünnen Haut-Fettschicht und trägt beim Gehen das erste Gewicht.", "العقب تحت طبقة جلد ودهن رقيقة ويتحمل الوزن الأول عند المشي.",
    "Ferse ist nach dem Kreuzbein der zweithäufigste Dekubitusort: freilagern (Hohllage der Ferse, Fersenlagerungskissen), nicht nur dicke Polster. Fersenhaut täglich prüfen, besonders bei Diabetes und Durchblutungsstörung.", "الكعب ثاني أشيع موضع لقرحة الضغط بعد العجز: ترك الكعب حراً (وضع مجوف ووسادة للكعب) وليس مجرد حشوات سميكة. فحص جلد الكعب يومياً وخاصة في السكري واضطراب الدورة.", PAIR]),
  "foot-bones": I(["Fußwurzel, Mittelfuß und Zehen", "Ossa tarsi, metatarsi, Phalanges pedis", "عظام الرسغ والمشط والأصابع في القدم",
    "Fußknochen unter der Haut mit Druckbelastung beim Stehen.", "عظام القدم تحت الجلد مع حمل الوزن عند الوقوف.",
    "Diabetischer Fuß: Druckstellen, Schwielen, Fissuren, Ulzera durch Neuropathie unbemerkt. Tägliche Fußinspektion, passende Schuhe, keine Barfuß, Fußpflege, Hornhaut nicht mit Klinge entfernen.", "القدم السكرية: نقاط ضغط وتقسّيات وشقوق وقرحات تمر دون إحساس بسبب الاعتلال العصبي. فحص يومي للقدم وأحذية مناسبة وعدم المشي حافياً والعناية بالقدم وعدم إزالة الجلد القاسي بالشفرة.", PAIR]),
};
export const SKIN_ITEMS = items;

const R = (de: string, ar: string, en: string, fr: string, tr: string): [string, string, string, string, string] => [de, ar, en, fr, tr];
const St = (title: [string, string, string, string, string], text: [string, string], ids: string[], note?: [string, string]) => ({ title, text, ids, ...(note ? { note } : {}) });

export const SKIN_PATHS: AtlasPath[] = [
  {
    id: "pressure-supine",
    title: R("Druckpunkte in Rückenlage", "نقاط الضغط في الاستلقاء على الظهر", "Pressure points supine", "Points de pression en décubitus dorsal", "Sırtüstü basınç noktaları"),
    intro: ["Wo Knochen dicht unter der Haut liegen, droht Dekubitus.", "حيث تقع العظام قريبة من الجلد يهدد قرح الضغط."],
    steps: [
      St(R("Hinterhaupt", "القذال", "Occiput", "Occiput", "Oksiput"), ["Besonders bei Kindern und Intensivpatienten.", "خاصة عند الأطفال ومرضى العناية المركزة."], ["skull"]),
      St(R("Schulterblätter und Dornfortsätze", "لوحا الكتف والنواتئ الشوكية", "Scapulae and spine", "Omoplates et épineuses", "Skapula ve omurga"), ["Haut liegt direkt über Knochen.", "الجلد مباشرة فوق العظم."], ["scapula", "spine", "thoracic-cage"]),
      St(R("Ellenbogen", "المرفقان", "Elbows", "Coudes", "Dirsekler"), ["Ellenbogenspitze ohne Polster.", "رأس المرفق بلا وسادة."], ["ulna"]),
      St(R("Kreuzbein", "العجز", "Sacrum", "Sacrum", "Sakrum"), ["Häufigster Dekubitusort.", "أشيع موضع قرحة الضغط."], ["sacrum"]),
      St(R("Fersen", "الكعبان", "Heels", "Talons", "Topuklar"), ["Zweithäufigster Ort; freilagern.", "ثاني أشيع موضع؛ ترك الكعب حراً."], ["calcaneus"]),
    ],
  },
  {
    id: "pressure-side",
    title: R("Druckpunkte in Seitenlage und Sitzen", "نقاط الضغط في الوضع الجانبي والجلوس", "Pressure points side and sitting", "Points de pression latéral et assis", "Yan ve oturma basınç noktaları"),
    intro: ["Andere Lagen belasten andere Knochen.", "الوضعيات الأخرى تضغط على عظام أخرى."],
    steps: [
      St(R("Trochanter und Beckenkamm", "المدور وعرف الحرقفة", "Trochanter and iliac crest", "Trochanter et crête iliaque", "Trokanter ve iliak kret"), ["In Seitenlage: 30 Grad statt 90 Grad.", "في الوضع الجانبي: 30 درجة بدل 90."], ["femur", "hip-bone"]),
      St(R("Knie und Wadenbeinköpfchen", "الركبة ورأس الشظية", "Knee and fibular head", "Genou et tête de la fibula", "Diz ve fibula başı"), ["Kissen zwischen die Beine; Nervus fibularis schonen.", "وسادة بين الساقين وحماية العصب الشظوي."], ["lower-leg-bones"]),
      St(R("Sitzbeinhöcker im Rollstuhl", "الحدبة الإسكية في الكرسي", "Ischial tuberosity", "Tubérosité ischiatique", "İskial tüberozite"), ["Sitzkissen und Gewichtsverlagerung.", "وسادة جلوس وتبديل الوزن."], ["hip-bone"]),
      St(R("Füße", "القدمان", "Feet", "Pieds", "Ayaklar"), ["Diabetischer Fuß: tägliche Kontrolle.", "القدم السكرية: فحص يومي."], ["foot-bones", "calcaneus"]),
    ],
  },
  {
    id: "face",
    title: R("Haut des Kopfes und Gesichts", "جلد الرأس والوجه", "Head and face skin", "Peau de la tête", "Baş ve yüz derisi"),
    intro: ["Mimik und Hautzeichen am Kopf beobachten.", "مراقبة تعابير الوجه وعلامات الجلد في الرأس."],
    steps: [
      St(R("Haar und Kopfhaut", "الشعر وفروة الرأس", "Hair and scalp", "Cheveux", "Saç"), ["Haarpflege, Läuse, Haarausfall.", "العناية بالشعر والقمل وتساقط الشعر."], ["hair-of-head"]),
      St(R("Augenbrauen und Lippe", "الحاجبان والشفة", "Eyebrows and lip", "Sourcils et lèvre", "Kaşlar ve dudak"), ["Gesichtssymmetrie prüfen; Lippenfarbe: Zyanose, Trockenheit.", "فحص تناظر الوجه ولون الشفة: ازرقاق وجفاف."], ["eyebrows", "lips"]),
    ],
  },
];

export const SKIN_CARE = {
  diseases: ["Dekubitus (Kategorie 1 bis 4)", "Verbrennungen und Verbrühungen", "Chronische Wunden (Ulcus cruris, diabetischer Fuß)", "Hautinfektionen (Erysipel, Abszess, Mykosen, Krätze)", "Neurodermitis, Psoriasis, Allergien", "Hautkrebs (Basaliom, Plattenepithelkarzinom, Melanom)", "Herpes zoster, Windpocken", "Intertrigo, Inkontinenz-assoziierte Dermatitis"],
  symptoms: ["Rötung, Schwellung, Wärme, Schmerz", "Blasen, Nässen, Krusten, Schuppung", "Juckreiz (Pruritus)", "Blässe, Zyanose, Ikterus", "Stehende Hautfalte bei Dehydrierung", "Veränderter Leberfleck (ABCDE)"],
  diagnostics: ["Inspektion und Palpation (Farbe, Temperatur, Feuchtigkeit, Turgor)", "Braden-Skala (Dekubitusrisiko)", "Wundbeurteilung: Größe, Tiefe, Wundrand, Exsudat, Geruch, Infektionszeichen", "Neunerregel (verbrannte Körperoberfläche)", "Abstrich, Biopsie, Dermatoskopie", "Schmerzerfassung"],
  actions: ["Dekubitusprophylaxe: Risikoeinschätzung, Lagerungsplan, Mikrolagerung, Weichlagerung, Bewegungsförderung, Feuchtigkeit und Scherkräfte vermeiden, Ernährung", "Kategorie 1 nicht massieren; Rötung auf Druck wegdrücken (Fingertest) prüfen", "Hautpflege: pH-neutral reinigen, rückfetten, Hautschutz bei Inkontinenz", "Wundversorgung nach Standard und ärztlicher Anordnung (aseptisch, phasengerecht), Schmerzen berücksichtigen", "Verbrennung: Kleidung entfernen (nicht Festklebendes), nur kurz kühlen, Unterkühlung vermeiden, steril abdecken, Notruf bei größerer Fläche", "Sonnenschutz, Hautkrebsvorsorge, Selbstbeobachtung", "Hygiene: Händedesinfektion, Isolierung bei Krätze und MRSA nach Hygieneplan", "Juckreiz: kühlen, rückfetten, Fingernägel kurz"],
  monitoring: ["Hautzustand bei jedem Positionswechsel", "Rötung, Blasen, Wunden, Wundrand, Geruch", "Wundverband, Drainagen, Exsudatmenge", "Temperatur, Entzündungszeichen, Schmerz", "Flüssigkeits- und Ernährungszustand", "Druckstellen unter Hilfsmitteln (Gips, Schienen, Katheter, Brille, Masken)"],
  terms: [["Epidermis", "Oberhaut"], ["Dermis (Korium)", "Lederhaut"], ["Subkutis", "Unterhaut mit Fettgewebe"], ["Dekubitus", "Druckgeschwür durch anhaltenden Druck"], ["Erythem", "Rötung der Haut"], ["Exsudat", "Wundflüssigkeit"], ["Nekrose", "Abgestorbenes Gewebe"], ["Turgor", "Hautspannung"], ["Zyanose", "Blaufärbung durch Sauerstoffmangel"], ["Ikterus", "Gelbfärbung durch Bilirubin"], ["Pruritus", "Juckreiz"], ["Mazeration", "Aufweichung der Haut durch Feuchtigkeit"]] as [string, string][],
  lessons: ["assess-dekubitus", "verbrennung", "hauterkrankungen"],
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string): AtlasQuiz => ({ q: [qd, qa], o, why: [wd, wa] });
export const SKIN_QUIZ: AtlasQuiz[] = [
  Q("Welche Hautschichten gibt es von außen nach innen?", "ما طبقات الجلد من الخارج إلى الداخل؟", ["Epidermis, Dermis, Subkutis", "Dermis, Epidermis, Subkutis", "Subkutis, Dermis, Epidermis", "Epidermis, Subkutis, Dermis"],
    "Die Haut besteht aus Oberhaut (Epidermis, verhornt, Schutzbarriere), Lederhaut (Dermis mit Gefäßen, Nerven, Drüsen, Haarfollikeln) und Unterhaut (Subkutis, Fettgewebe, Polster und Wärmeisolation). Richtige Antwort: Epidermis, Dermis, Subkutis.",
    "يتكون الجلد من البشرة (متقرنة وحاجز واق) والأدمة (فيها الأوعية والأعصاب والغدد وجريبات الشعر) وتحت الجلد (نسيج دهني ووسادة وعزل حراري). الإجابة الصحيحة: البشرة فالأدمة فتحت الجلد."),
  Q("Welcher Dekubitus der Kategorie 1 ist typisch?", "ما الذي يميز قرحة الضغط من الفئة 1؟", ["Nicht wegdrückbare Rötung bei intakter Haut", "Offene Wunde mit sichtbarem Knochen", "Blase mit Teilverlust der Haut", "Schwarze Nekrose"],
    "Kategorie 1: umschriebene, nicht wegdrückbare Rötung bei intakter Haut (Fingertest: bleibt bestehen). Kategorie 2: Teilverlust der Haut (Blase, flaches Ulkus). Kategorie 3: Verlust aller Hautschichten (Fettgewebe sichtbar). Kategorie 4: Gewebeverlust bis Muskel, Sehne, Knochen. Richtige Antwort: nicht wegdrückbare Rötung bei intakter Haut.",
    "الفئة 1: احمرار محدد لا يزول بالضغط مع جلد سليم (اختبار الإصبع: يبقى). الفئة 2: فقد جزئي للجلد (فقاعة وقرحة سطحية). الفئة 3: فقد كل طبقات الجلد (يظهر الدهن). الفئة 4: فقد نسيج حتى العضل والوتر والعظم. الإجابة الصحيحة: احمرار لا يزول بالضغط مع جلد سليم."),
  Q("Welche Lagerung ist zur Dekubitusprophylaxe bei Seitenlage empfohlen?", "أي وضعية مناسبة للوقاية من قرحة الضغط في الوضع الجانبي؟", ["30-Grad-Schräglagerung, Trochanter entlasten", "90-Grad-Seitenlage direkt auf dem Trochanter", "Dauerhafte Rückenlage", "Hochlagerung des Oberkörpers um 90 Grad"],
    "Bei 90 Grad liegt das Körpergewicht auf dem Trochanter major; bei 30 Grad verteilt sich der Druck auf Gesäß und Oberschenkel. Kissen im Rücken und zwischen den Beinen, Haut kontrollieren, Intervalle nach individuellem Risiko. Richtige Antwort: 30-Grad-Schräglagerung.",
    "عند 90 درجة يقع وزن الجسم على المدور الكبير؛ وعند 30 درجة يتوزع الضغط على الإلية والفخذ. وسادة خلف الظهر وبين الساقين ومراقبة الجلد وفترات حسب الخطر الفردي. الإجابة الصحيحة: وضعية مائلة 30 درجة."),
  Q("Welcher Ort ist der häufigste Dekubitusort?", "ما أشيع موضع لقرحة الضغط؟", ["Kreuzbein", "Handfläche", "Bauchnabel", "Stirn"],
    "Das Kreuzbein trägt in Rückenlage viel Gewicht, und die Haut liegt nahezu direkt auf dem Knochen. Danach folgen die Fersen, die Sitzbeinhöcker, der Trochanter. Richtige Antwort: Kreuzbein.",
    "العجز يتحمل وزناً كبيراً في الاستلقاء على الظهر والجلد قريب جداً من العظم. ثم الكعبان والحدبتان الإسكيتان والمدور. الإجابة الصحيحة: العجز."),
  Q("Wie groß ist nach der Neunerregel beim Erwachsenen die Körperoberfläche des Kopfes?", "كم تبلغ مساحة الرأس بحسب قاعدة التسعات عند البالغ؟", ["Etwa 9 %", "Etwa 18 %", "Etwa 27 %", "Etwa 1 %"],
    "Neunerregel (Erwachsene): Kopf und Hals 9 %, jeder Arm 9 %, Rumpf vorn 18 %, Rumpf hinten 18 %, jedes Bein 18 %, Genitalbereich 1 %. Bei Kindern ist der Kopf größer und die Beine kleiner. Richtige Antwort: etwa 9 %.",
    "قاعدة التسعات (البالغ): الرأس والعنق 9% وكل ذراع 9% والجذع الأمامي 18% والخلفي 18% وكل ساق 18% والتناسلية 1%. عند الأطفال الرأس أكبر والساقان أصغر. الإجابة الصحيحة: نحو 9%."),
  Q("Wodurch ist eine Verbrennung 3. Grades gekennzeichnet?", "ما الذي يميز الحرق من الدرجة الثالثة؟", ["Zerstörung aller Hautschichten, trockene, lederartige, oft schmerzlose Wunde", "Rötung ohne Blasen", "Nur kleine Blasen und starker Schmerz", "Leichte Schwellung"],
    "Bei Grad 3 sind Epidermis und Dermis einschließlich der Nerven zerstört: Wunde weißlich, braun oder schwarz, trocken, nicht schmerzhaft. Grad 1: Rötung, schmerzhaft; Grad 2: Blasen, sehr schmerzhaft. Größere Verbrennungen sind lebensbedrohlich: Notruf, steril abdecken, Unterkühlung vermeiden. Richtige Antwort: Zerstörung aller Schichten, schmerzlos.",
    "في الدرجة 3 تتلف البشرة والأدمة مع الأعصاب: جرح أبيض أو بني أو أسود جاف وغير مؤلم. الدرجة 1: احمرار مؤلم؛ الدرجة 2: فقاعات شديدة الألم. الحروق الكبيرة تهدد الحياة: استدعاء الإسعاف وتغطية معقمة وتجنب انخفاض الحرارة. الإجابة الصحيحة: تلف كل الطبقات وبلا ألم."),
  Q("Wofür steht die ABCDE-Regel bei Muttermalen?", "ماذا تعني قاعدة ABCDE للشامات؟", ["Asymmetrie, Begrenzung, Colour (Farbe), Durchmesser, Entwicklung", "Alter, Blutdruck, Cholesterin, Diabetes, EKG", "Atmung, Bewusstsein, Kreislauf, Disability, Exposure", "Antibiotika, Blutkultur, Kontrolle, Dosierung, Eis"],
    "Das Melanom fällt durch Asymmetrie, unregelmäßige Begrenzung, mehrere Farben, Durchmesser über 6 mm und Veränderung (Evolution) auf. Auffällige Male dermatologisch abklären lassen. Verwechslung: ABCDE steht auch für die Notfall-Beurteilung, hier aber für Muttermale. Richtige Antwort: Asymmetrie, Begrenzung, Farbe, Durchmesser, Entwicklung.",
    "يتميز الميلانوما بعدم التناظر وحدود غير منتظمة وتعدد الألوان وقطر أكثر من 6 ملم وتغير (تطور). تُفحص الشامات المريبة عند طبيب الجلد. تنبيه: ABCDE تُستخدم أيضاً لتقييم الطوارئ لكنها هنا للشامات. الإجابة الصحيحة: عدم تناظر وحدود ولون وقطر وتطور."),
  Q("Warum sollte bei Dekubitus Kategorie 1 nicht massiert werden?", "لماذا لا يُدلَّك الجلد في قرحة الضغط من الفئة 1؟", ["Massage schädigt das bereits geschwächte Gewebe zusätzlich", "Weil Massage zu schmerzhaft für den Pfleger ist", "Weil sie die Haut kühlt", "Weil sie nur bei Kindern verboten ist"],
    "Das geschädigte Gewebe verträgt keine Reibung oder Massage; sie kann kleine Gefäße zerstören. Stattdessen Druck vollständig entlasten (Positionswechsel, Weichlagerung) und die Haut beobachten. Richtige Antwort: Massage schädigt das Gewebe zusätzlich.",
    "النسيج المتضرر لا يتحمل الاحتكاك أو التدليك وقد يتلف الأوعية الصغيرة. بدلاً من ذلك تخفيف الضغط تماماً (تغيير الوضعية وفراش لين) ومراقبة الجلد. الإجابة الصحيحة: التدليك يزيد تلف النسيج."),
  Q("Welche Maßnahme gehört zur täglichen Fußkontrolle beim Diabetiker?", "أي إجراء من الفحص اليومي للقدم عند مريض السكري؟", ["Inspektion auf Druckstellen, Blasen, Risse, Rötung, auch zwischen den Zehen", "Barfußlaufen zur Abhärtung", "Hornhaut mit scharfer Klinge entfernen", "Heiße Fußbäder"],
    "Durch die Neuropathie bemerken Diabetiker Verletzungen nicht. Täglich inspizieren (Spiegel), Zehenzwischenräume trocknen, passende Schuhe, Nägel gerade schneiden, Hornhaut nur durch Fachpersonal, Wassertemperatur vorab mit Thermometer prüfen. Richtige Antwort: tägliche Inspektion.",
    "بسبب الاعتلال العصبي لا يشعر مرضى السكري بالإصابات. فحص يومي (بمرآة) وتجفيف ما بين الأصابع وأحذية مناسبة وقص الأظافر مستقيماً وإزالة الجلد القاسي بمختص فقط وفحص حرارة الماء بمقياس. الإجابة الصحيحة: فحص يومي."),
  Q("Wozu dient die Braden-Skala?", "ما فائدة مقياس برادن؟", ["Zur Einschätzung des Dekubitusrisikos", "Zur Messung des Blutzuckers", "Zur Einschätzung der Bewusstseinslage", "Zur Beurteilung der Sturzgefahr"],
    "Die Braden-Skala bewertet Sensorik, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung und Scherkräfte; ein niedriger Punktwert (unter etwa 18) bedeutet erhöhtes Risiko. GCS misst Bewusstsein, Barthel Selbstständigkeit. Richtige Antwort: Dekubitusrisiko.",
    "يقيّم مقياس برادن الإحساس والرطوبة والنشاط والحركة والتغذية والاحتكاك والقص؛ ودرجة منخفضة (أقل من نحو 18) تعني خطراً أعلى. غلاسكو للوعي وبارثل للاستقلالية. الإجابة الصحيحة: خطر قرحة الضغط."),
  Q("Wie ist die Hautpflege bei Inkontinenz richtig?", "كيف تكون العناية بالجلد عند سلس البول أو البراز؟", ["Mild reinigen, gründlich abtrocknen, Hautschutzprodukt auftragen, Nässe vermeiden", "Mit starker alkalischer Seife schrubben", "Feucht lassen", "Mit Alkohol abwischen"],
    "Dauerfeuchtigkeit und aggressive Reinigung zerstören die Hautbarriere (Mazeration, Inkontinenz-assoziierte Dermatitis) und erhöhen das Dekubitusrisiko. Milde, pH-hautneutrale Reiniger, abtupfen statt reiben, Barriereprodukt, saugfähige Einlagen wechseln. Richtige Antwort: mild reinigen, trocknen, Hautschutz.",
    "الرطوبة الدائمة والتنظيف العدواني يدمران حاجز الجلد (نقع والتهاب جلدي مرتبط بالسلس) ويزيدان خطر قرحة الضغط. منظفات لطيفة متعادلة والتنشيف بالتربيت وكريم حاجز وتغيير الفوط الماصة. الإجابة الصحيحة: تنظيف لطيف وتجفيف وحماية الجلد."),
];

export const SKIN_CFG: AtlasConfig = {
  key: "skin",
  modelUrl: "/models/skin.glb",
  items: SKIN_ITEMS,
  layers: SKIN_LAYERS,
  layerOf: (id) => (["skin"].includes(id) ? "skin" : ["hair-of-head", "eyebrows", "lips", "pubic-hair"].includes(id) ? "appendage" : "bone"),
  color: (id, layer) => {
    switch (layer) {
      case "skin": return 0xe8c4a8;
      case "appendage": return id === "lips" ? 0xc8685a : id === "hair-of-head" ? 0x6a4a30 : id === "eyebrows" ? 0x5a4030 : 0x5a4030;
      default: return id === "sacrum" ? 0xe05a4a : id === "calcaneus" ? 0xe05a4a : id === "ulna" ? 0xe08a4a : id === "femur" ? 0xe0a04a : id === "scapula" ? 0xe0a04a : id === "hip-bone" ? 0xe0a04a : id === "skull" ? 0xe0a04a : 0xeee8d8;
    }
  },
  shell: ["skin"],
  innerLabel: ["Haut durchsichtig", "الجلد شفاف", "Skin transparent", "Peau transparente", "Deri saydam"],
  careTitle: ["Pflege-Überblick Haut", "نظرة تمريضية على الجلد", "Nursing overview: skin", "Aperçu infirmier : peau", "Hemşirelik özeti: deri"],
  target: [0, 0, 0], shellOpacity: 0.5,
  dist: 3.1, minDist: 0.25, maxDist: 5, clipRange: 0.9, explodeScale: 0.5,
  care: SKIN_CARE,
  quiz: SKIN_QUIZ,
  paths: SKIN_PATHS,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Das Modell zeigt die Körperoberfläche eines erwachsenen Mannes, Kopfhaar, Augenbrauen, Lippe und Schamhaar sowie das Skelett als Orientierung für Druckpunkte. Nicht im Modell: Hautschichten, Haarfollikel, Drüsen, Nägel, Rezeptoren (siehe Schema, kein 3D-Modell).", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). يعرض النموذج سطح جسم رجل بالغ وشعر الرأس والحاجبين والشفة وشعر العانة والهيكل العظمي للتوجيه إلى نقاط الضغط. غير موجود: طبقات الجلد وجريبات الشعر والغدد والأظافر والمستقبلات (انظر المخطط وليس نموذجاً ثلاثي الأبعاد).", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (adapted). The model shows the body surface of an adult male, hair, eyebrows, lip, pubic hair and the skeleton for orientation of pressure points. Not in the model: skin layers, follicles, glands, nails, receptors (see schematic).", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (adapté). Absent : couches de la peau, follicules, glandes (voir schéma).", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (uyarlandı). Modelde yok: deri katmanları, foliküller, bezler (şemaya bakın)."],
};
