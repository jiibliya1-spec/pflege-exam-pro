/**
 * Atlas Verdauung: Beschriftungen zu den 41 benannten Strukturen des BodyParts3D-Modells (public/models/digestive.glb).
 * Schlüssel = Knotennamen im Modell (siehe tools/extract-digestive.mjs). Namen nach Terminologia Anatomica; Texte in eigenen Worten.
 * Im Modell NICHT enthalten: Mundboden/Rachen, Ohrspeicheldrüse, Sigmoid als eigene Struktur, Analkanal, Ductus choledochus,
 * Leberlappen als Gesamtfläche (stattdessen Segmente nach Couinaud), Schleimhaut und Wandschichten, Peritoneum, Zotten.
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, AtlasPath, AtlasQuiz } from "./atlasTypes";

export const DIGESTIVE_LAYERS: AtlasLayer[] = [
  { id: "oral", de: "Mundhöhle: Zunge und Speicheldrüsen", ar: "الفم: اللسان والغدد اللعابية", en: "Mouth: tongue and salivary glands", fr: "Bouche : langue et glandes salivaires", tr: "Ağız: dil ve tükürük bezleri" },
  { id: "upper", de: "Speiseröhre, Magen, Zwölffingerdarm", ar: "المريء والمعدة والاثنا عشري", en: "Oesophagus, stomach, duodenum", fr: "Œsophage, estomac, duodénum", tr: "Yemek borusu, mide, onikiparmak" },
  { id: "small", de: "Dünndarm", ar: "الأمعاء الدقيقة", en: "Small intestine", fr: "Intestin grêle", tr: "İnce bağırsak" },
  { id: "colon", de: "Dickdarm, Blinddarm, Mastdarm", ar: "القولون والأعور والمستقيم", en: "Large intestine, appendix, rectum", fr: "Côlon, appendice, rectum", tr: "Kalın bağırsak, apandis, rektum" },
  { id: "liver", de: "Leber (Segmente)", ar: "الكبد (القطع)", en: "Liver (segments)", fr: "Foie (segments)", tr: "Karaciğer (segmentler)" },
  { id: "biliary", de: "Gallenblase und Gallenwege", ar: "المرارة والقنوات الصفراوية", en: "Gallbladder and bile ducts", fr: "Vésicule et voies biliaires", tr: "Safra kesesi ve yolları" },
  { id: "pancreas", de: "Bauchspeicheldrüse", ar: "البنكرياس", en: "Pancreas", fr: "Pancréas", tr: "Pankreas" },
  { id: "spleen", de: "Milz", ar: "الطحال", en: "Spleen", fr: "Rate", tr: "Dalak" },
  { id: "artery", de: "Arterien der Bauchorgane", ar: "شرايين أعضاء البطن", en: "Arteries of the abdominal organs", fr: "Artères des organes abdominaux", tr: "Karın organı arterleri" },
  { id: "portal", de: "Pfortader und Lebervenen", ar: "الوريد البابي والأوردة الكبدية", en: "Portal and hepatic veins", fr: "Veine porte et veines hépatiques", tr: "Portal ve hepatik venler" },
  { id: "shell", de: "Gekröse und Zwerchfell", ar: "المساريق والحجاب الحاجز", en: "Mesenteries and diaphragm", fr: "Mésentères et diaphragme", tr: "Mezenter ve diyafram" },
];

const items: Record<string, AtlasItem> = {
  "tongue": {
    de: "Zunge", la: "Lingua", ar: "اللسان",
    fn: ["Muskelorgan der Mundhöhle: Sie schiebt die Nahrung beim Kauen hin und her, formt den Bissen und leitet das Schlucken ein. Auf ihr sitzen die Geschmacksknospen für süß, sauer, salzig, bitter und umami; außerdem hilft sie beim Sprechen.", "عضو عضلي في الفم: تقلّب الطعام أثناء المضغ وتشكّل اللقمة وتبدأ البلع. وعليها براعم التذوق للحلو والحامض والمالح والمر والأومامي، وتساعد في الكلام."],
    kl: ["Belag, Rötung oder weiße Beläge (Soor) fallen bei der Mundinspektion auf. Bei Schluckstörung (Dysphagie), Sonden- oder Beatmungspatienten ist die Mundpflege wichtig (Soor, Parotitis, Aspirationspneumonie). Pflege: Mund täglich inspizieren, Zunge reinigen, Prothesen pflegen, Aspirationsschutz beim Essen (aufrecht sitzen).", "تُلاحَظ الطبقة اللسانية أو الاحمرار أو البقع البيضاء (القلاع) عند فحص الفم. وعند عسر البلع أو المرضى المغذّين بأنبوب أو المُهَوَّين تكون العناية بالفم مهمة (القلاع والتهاب النكفية والتهاب رئوي استنشاقي). التمريض: فحص الفم يومياً وتنظيف اللسان والعناية بطقم الأسنان والوقاية من الاستنشاق أثناء الأكل (الجلوس منتصباً)."],
    note: ["Mundhöhle, Zähne, Gaumen und Rachen sind im Modell nicht enthalten; es zeigt Zunge und zwei Speicheldrüsenpaare.", "تجويف الفم والأسنان والحنك والبلعوم غير موجودة في النموذج؛ فهو يعرض اللسان وزوجين من الغدد اللعابية."],
  },
  "submandibular-glands": {
    de: "Unterkieferspeicheldrüsen", la: "Glandulae submandibulares", ar: "الغدتان تحت الفك السفلي",
    fn: ["Gemischte Speicheldrüsen unter dem Mundboden mit überwiegend dünnflüssigem Sekret. Insgesamt bilden alle Speicheldrüsen etwa 1 bis 1,5 Liter Speichel pro Tag; er feuchtet an, enthält Amylase (spaltet Stärke) und schützt die Zähne.", "غدد لعابية مختلطة تحت قاع الفم ومعظم إفرازها سائل رقيق. وتنتج الغدد اللعابية كلها معاً نحو 1 إلى 1.5 لتر لعاب يومياً؛ يرطّب ويحتوي الأميلاز (يفكك النشا) ويحمي الأسنان."],
    kl: ["Speichelsteine verstopfen den Ausführungsgang: Schwellung und Schmerz unter dem Kiefer, besonders beim Essen. Mundtrockenheit (Xerostomie) ist häufig bei Medikamenten, Strahlentherapie und im Alter: Kaugummi, saure Bonbons, häufiges Trinken und Speichelersatz nach ärztlicher Anordnung.", "حصى اللعاب تسد القناة: تورم وألم تحت الفك خصوصاً أثناء الأكل. وجفاف الفم (قلة اللعاب) شائع مع بعض الأدوية والعلاج الإشعاعي وفي الشيخوخة: العلكة والحلوى الحامضة وشرب الماء كثيراً وبدائل اللعاب حسب أمر الطبيب."],
    note: ["Die Ohrspeicheldrüse (Glandula parotidea) ist im Modell nicht enthalten.", "الغدة النكفية غير موجودة في النموذج."],
  },
  "sublingual-glands": {
    de: "Unterzungenspeicheldrüsen", la: "Glandulae sublinguales", ar: "الغدتان تحت اللسان",
    fn: ["Kleinste der großen Speicheldrüsen unter der Zunge mit eher zähem, schleimigem Sekret. Der Speichel macht den Bissen gleitfähig.", "أصغر الغدد اللعابية الكبرى تحت اللسان وإفرازها لزج مخاطي نسبياً. يجعل اللعاب اللقمة زلقة."],
    kl: ["Bei Schleimzysten oder Entzündungen des Mundbodens: Schwellung, Schmerz, Schluckbeschwerden. Gute Mundhygiene und ausreichend Trinken fördern den Speichelfluss; bei Dysphagie auf Aspiration achten.", "في الأكياس المخاطية أو التهابات قاع الفم: تورم وألم وصعوبة بلع. والنظافة الجيدة للفم والشرب الكافي يحفزان تدفق اللعاب؛ وعند عسر البلع يُراقَب الاستنشاق."],
  },
  "esophagus": {
    de: "Speiseröhre", la: "Oesophagus", ar: "المريء",
    fn: ["Etwa 25 cm langer Muskelschlauch vom Rachen zum Magen. Wellenförmige Kontraktionen (Peristaltik) transportieren den Bissen auch im Liegen. Er geht durch das Zwerchfell; ein unterer Schließmuskelbereich verhindert den Rückfluss von Magensäure.", "أنبوب عضلي طوله نحو 25 سم من البلعوم إلى المعدة. تنقل الحركة الدودية اللقمة حتى في وضع الاستلقاء. يخترق الحجاب الحاجز، ومنطقة عاصرة سفلية تمنع ارتجاع حمض المعدة."],
    kl: ["Drei Engstellen (Ringknorpel, Aortenbogen/linker Hauptbronchus, Zwerchfelldurchtritt) sind Orte für stecken gebliebene Bissen und Tabletten. Reflux macht Sodbrennen: Oberkörper hoch lagern, kleine Mahlzeiten, nicht kurz vor dem Schlafen essen. Bei Leberzirrhose können Krampfadern (Ösophagusvarizen) bluten: Bluterbrechen, Schock, Notfall. Pflege: Vitalzeichen, Notruf, Nahrungskarenz, Blutung beobachten.", "للمريء ثلاثة تضيقات (الغضروف الحلقي وقوس الأبهر/القصبة الرئيسية اليسرى وعبور الحجاب) حيث تعلق اللقم والأقراص. والارتجاع يسبب حرقة: رفع الجزء العلوي ووجبات صغيرة وعدم الأكل قبل النوم مباشرة. وفي تشمع الكبد قد تنزف دوالي المريء: قيء دموي وصدمة وحالة طارئة. التمريض: العلامات الحيوية واستدعاء الطوارئ والصيام ومراقبة النزف."],
  },
  "stomach": {
    de: "Magen", la: "Gaster (Ventriculus)", ar: "المعدة",
    fn: ["Dehnbarer Hohlmuskel mit Mageneingang (Kardia), Fundus, Korpus, Antrum und Magenausgang (Pylorus). Fasst etwa 1,5 Liter, knetet den Speisebrei, bildet Salzsäure (tötet Keime, aktiviert Pepsin), Pepsin (spaltet Eiweiß), Schleim (schützt die Wand) und Intrinsic Factor (nötig für Vitamin B12). Der Pylorus gibt den Brei portionsweise an den Zwölffingerdarm ab.", "عضلة جوفاء قابلة للتمدد فيها فوهة المعدة (الفؤاد) والقاع والجسم والغار والبواب. تتسع لنحو 1.5 لتر وتمزج الطعام وتفرز حمض الهيدروكلوريك (يقتل الجراثيم وينشّط الببسين) والببسين (يفكك البروتين) والمخاط (يحمي الجدار) والعامل الداخلي (لازم لفيتامين ب12). ويطلق البواب الكيموس على دفعات إلى الاثني عشري."],
    kl: ["Magengeschwür (Ulcus ventriculi) entsteht meist durch Helicobacter pylori oder Schmerzmittel (NSAR): Oberbauchschmerz, Übelkeit, Blutung. Zeichen einer Blutung: Bluterbrechen (Hämatemesis), Teerstuhl (Meläna), Blässe, Tachykardie, Blutdruckabfall. Pflege: Vitalzeichen, Erbrochenes und Stuhl beurteilen, Nahrungskarenz nach Anordnung, bei Magensonde Lage und Aspirationsschutz beachten. Nach Magenresektion fehlt B12: Substitution.", "قرحة المعدة تنشأ غالباً بسبب جرثومة الملوية البوابية أو المسكنات (مضادات الالتهاب غير الستيرويدية): ألم في أعلى البطن وغثيان ونزف. علامات النزف: قيء دموي وبراز قطراني وشحوب وتسرع القلب وهبوط الضغط. التمريض: العلامات الحيوية وتقييم القيء والبراز والصيام حسب الأمر ومراعاة موضع الأنبوب المعدي والوقاية من الاستنشاق. وبعد استئصال المعدة ينقص ب12: تعويض."],
  },
  "duodenum": {
    de: "Zwölffingerdarm", la: "Duodenum", ar: "الاثنا عشري",
    fn: ["Etwa 25 bis 30 cm langer C-förmiger Darmabschnitt um den Pankreaskopf. Hier münden Galle und Pankreassaft über die Papilla duodeni major (Vater-Papille). Der saure Magenbrei wird neutralisiert, Fette, Eiweiße und Kohlenhydrate werden gespalten, Eisen wird aufgenommen.", "جزء معوي على شكل C طوله نحو 25 إلى 30 سم حول رأس البنكرياس. هنا تصب الصفراء وعصارة البنكرياس عبر حليمة فاتر. يُعادَل الكيموس الحمضي وتُفكَّك الدهون والبروتينات والسكريات ويُمتص الحديد."],
    kl: ["Das Zwölffingerdarmgeschwür (Ulcus duodeni) ist häufiger als das Magengeschwür: Nüchternschmerz, der nach dem Essen nachlässt, Nachtschmerz, Blutung. Ein Tumor oder Stein an der Papille staut Galle und Pankreassaft: Gelbsucht, Pankreatitis. Pflege: Schmerzen, Stuhlfarbe (schwarz = Blut), Kreislauf beobachten.", "قرحة الاثني عشري أكثر شيوعاً من قرحة المعدة: ألم على الريق يخف بعد الأكل وألم ليلي ونزف. وتسد الحليمة بورم أو حصاة فيحتبس الصفراء وعصارة البنكرياس: يرقان والتهاب بنكرياس. التمريض: مراقبة الألم ولون البراز (الأسود = دم) والدورة الدموية."],
  },
  "jejunum": {
    de: "Leerdarm", la: "Jejunum", ar: "الصائم",
    fn: ["Oberer Teil des Dünndarms (etwa zwei Fünftel). Hohe Kerckring-Falten und Zotten vergrößern die Oberfläche auf mehrere Hundert Quadratmeter. Hier werden die meisten Kohlenhydrate, Eiweiße, Fette, Vitamine und Mineralstoffe aufgenommen.", "الجزء العلوي من الأمعاء الدقيقة (نحو خمسين). تضاعف الثنيات والزغابات السطح إلى مئات الأمتار المربعة. وهنا يُمتص معظم السكريات والبروتينات والدهون والفيتامينات والمعادن."],
    kl: ["Bei Zöliakie, Kurzdarmsyndrom oder Resektion droht eine Malabsorption: Durchfall, Fettstuhl, Gewichtsverlust, Mangelzustände. Pflege: Gewicht und Ernährung dokumentieren, Stuhlprotokoll, bei Mangel Substitution nach Anordnung, bei Sondenkost auf Verträglichkeit achten (Durchfall, Blähungen).", "في الداء البطني ومتلازمة الأمعاء القصيرة أو بعد الاستئصال يحدث سوء الامتصاص: إسهال وبراز دهني ونقص وزن ونقص مغذيات. التمريض: توثيق الوزن والتغذية وسجل البراز والتعويض حسب الأمر ومراقبة تحمل التغذية بالأنبوب (إسهال ونفخة)."],
    note: ["Im Modell besteht der Leerdarm aus vielen einzelnen Schlingen, die hier zu einer Struktur zusammengefasst sind. Die Grenze zum Krummdarm ist fließend.", "يتكوّن الصائم في النموذج من عدة عراوي جُمعت هنا في بنية واحدة. والحد بينه وبين اللفائفي تدريجي."],
  },
  "ileum": {
    de: "Krummdarm", la: "Ileum", ar: "اللفائفي",
    fn: ["Unterer Teil des Dünndarms (etwa drei Fünftel). Im Endabschnitt (terminales Ileum) werden Vitamin B12 mit dem Intrinsic Factor und die Gallensäuren zurückgewonnen. Peyer-Plaques gehören zum Immunsystem der Darmschleimhaut.", "الجزء السفلي من الأمعاء الدقيقة (نحو ثلاثة أخماس). وفي نهايته (اللفائفي الانتهائي) يُمتص فيتامين ب12 مع العامل الداخلي ويُعاد امتصاص الأحماض الصفراوية. وصفائح باير جزء من مناعة مخاطية الأمعاء."],
    kl: ["Morbus Crohn befällt bevorzugt das terminale Ileum: Durchfall, Bauchschmerz, Gewichtsverlust, Fisteln. Folgen: B12-Mangel und Gallensäureverlustdurchfall. Ein Darmverschluss (Ileus) zeigt sich mit Erbrechen, Meteorismus, fehlendem Stuhl- und Windabgang, Koliken: Notfall. Pflege: Bauchumfang, Erbrechen, Darmgeräusche, Stuhl und Winde beobachten, Nahrungskarenz nach Anordnung.", "داء كرون يصيب غالباً اللفائفي الانتهائي: إسهال وألم بطن ونقص وزن وناسور. والنتائج: نقص ب12 وإسهال بسبب فقد الأحماض الصفراوية. وانسداد الأمعاء (العلوص) يظهر بقيء وانتفاخ وغياب البراز والريح ومغص: حالة طارئة. التمريض: محيط البطن والقيء وأصوات الأمعاء ومراقبة البراز والريح والصيام حسب الأمر."],
  },
  "ileocecal-junction": {
    de: "Ileozäkalklappe", la: "Ostium ileocecale (Valva ileocecalis, Bauhin-Klappe)", ar: "الصمام اللفائفي الأعوري",
    fn: ["Übergang vom Krummdarm in den Blinddarm. Die Klappe lässt den Darminhalt portionsweise in den Dickdarm und verhindert, dass Dickdarminhalt und Bakterien zurück in den Dünndarm gelangen.", "موضع انتقال اللفائفي إلى الأعور. يسمح الصمام بمرور محتوى الأمعاء على دفعات إلى القولون ويمنع رجوع محتوى القولون والجراثيم إلى الأمعاء الدقيقة."],
    kl: ["Bei Morbus Crohn oder Tumoren kann die Region verengt sein. Schmerzen im rechten Unterbauch haben viele Ursachen (Appendizitis, Crohn, Ovar, Harnleiterstein): immer abklären lassen, nicht mit Abführmitteln oder Wärme behandeln.", "قد تتضيق المنطقة في داء كرون أو الأورام. وألم أسفل البطن الأيمن له أسباب كثيرة (التهاب الزائدة وكرون والمبيض وحصاة الحالب): يجب تقييمه طبياً وعدم معالجته بالملينات أو الحرارة."],
  },
  "appendix": {
    de: "Wurmfortsatz (Blinddarm-Anhang)", la: "Appendix vermiformis", ar: "الزائدة الدودية",
    fn: ["Wenige Zentimeter langer Anhang am Blinddarm mit viel lymphatischem Gewebe. Seine Aufgabe im Immunsystem ist begrenzt, er wird nicht zum Leben benötigt.", "زائدة صغيرة بطول عدة سنتيمترات تتصل بالأعور وتحتوي نسيجاً لمفاوياً غزيراً. دورها المناعي محدود ولا يلزم لبقاء الإنسان."],
    kl: ["Die Appendizitis (Blinddarmentzündung) beginnt oft mit Schmerz um den Nabel oder im Oberbauch, der in den rechten Unterbauch wandert (McBurney- und Lanz-Punkt), mit Übelkeit, Fieber, Loslassschmerz. Bei Perforation droht Bauchfellentzündung. Pflege: Nahrungs- und Trinkkarenz, keine Wärme und keine Abführmittel, Schonhaltung erlauben, Schmerzen, Fieber, Puls und Bauchdecke beobachten, Arzt informieren.", "التهاب الزائدة يبدأ غالباً بألم حول السرة أو أعلى البطن ينتقل إلى أسفل البطن الأيمن (نقطتا ماكبورني ولانز) مع غثيان وحمى وألم عند رفع اليد. وعند الانثقاب يحدث التهاب الصفاق. التمريض: الصيام عن الطعام والشراب وعدم استخدام الحرارة أو الملينات والسماح بوضعية مريحة ومراقبة الألم والحرارة والنبض وجدار البطن وإبلاغ الطبيب."],
  },
  "ascending-colon": {
    de: "Aufsteigender Dickdarm", la: "Colon ascendens", ar: "القولون الصاعد",
    fn: ["Beginnt am Blinddarm und steigt an der rechten Bauchseite bis zur rechten Kolonflexur unter der Leber. Er entzieht dem noch flüssigen Stuhl Wasser und Elektrolyte, Bakterien bilden Vitamin K und Fettsäuren.", "يبدأ من الأعور ويصعد في الجانب الأيمن حتى الثنية الكولونية اليمنى تحت الكبد. يسحب الماء والشوارد من البراز السائل، وتصنع الجراثيم فيتامين ك وأحماضاً دهنية."],
    kl: ["Tumoren im rechten Dickdarm bluten oft unbemerkt: Blutarmut, Müdigkeit, Leistungsknick. Vorsorge: Stuhltest und Darmspiegelung nach aktueller Leitlinie (Beginn etwa ab 50 Jahren; Zeitpunkt ärztlich klären). Pflege: Stuhlbeobachtung (Farbe, Beimengungen, Konsistenz nach Bristol), Blässe und Müdigkeit ansprechen.", "أورام القولون الأيمن تنزف غالباً دون أن تُلاحَظ: فقر دم وتعب وانخفاض الأداء. الفحص الوقائي: اختبار البراز وتنظير القولون حسب الإرشادات الحالية (يبدأ نحو سن 50؛ ويُحدَّد الموعد مع الطبيب). التمريض: مراقبة البراز (اللون والشوائب والقوام حسب مقياس بريستول) والتنبيه إلى الشحوب والتعب."],
  },
  "transverse-colon": {
    de: "Querdarm", la: "Colon transversum", ar: "القولون المعترض",
    fn: ["Verläuft quer durch den Oberbauch unter Leber und Magen. Er hängt am Querdarmgekröse und ist beweglich. Hier wird weiter Wasser entzogen und der Stuhl eingedickt.", "يمتد عرضياً في أعلى البطن تحت الكبد والمعدة. معلّق بمساريق القولون المعترض وحر الحركة. وهنا يستمر سحب الماء ويتماسك البراز."],
    kl: ["Bei Darmlähmung oder starkem Gasstau kann er stark erweitert sein (toxisches Megakolon bei Colitis ulcerosa: Fieber, Tachykardie, aufgetriebener Bauch: Notfall). Bei Blähungen helfen Mobilisation und Bauchmassage nach Anordnung; Ursachen abklären.", "في شلل الأمعاء أو احتباس الغازات الشديد قد يتوسع كثيراً (التوسع السمي للقولون في التهاب القولون التقرحي: حمى وتسرع القلب وبطن منتفخ: حالة طارئة). وفي النفخة تساعد الحركة وتدليك البطن حسب الأمر؛ ويجب البحث عن السبب."],
  },
  "descending-colon": {
    de: "Absteigender Dickdarm", la: "Colon descendens", ar: "القولون النازل",
    fn: ["Verläuft an der linken Bauchseite hinab und speichert den bereits eingedickten Stuhl. Im Modell geht er direkt in den Mastdarm über; der S-förmige Abschnitt (Sigmoid) ist nicht eigens benannt.", "ينزل في الجانب الأيسر ويخزن البراز المتماسك. وفي النموذج ينتقل مباشرة إلى المستقيم؛ أما الجزء السيني (S) فلم يُسمَّ بشكل منفصل."],
    kl: ["Divertikel treten häufig im Sigmoid auf; eine Divertikulitis macht linksseitigen Unterbauchschmerz, Fieber, Stuhlunregelmäßigkeiten. Obstipation: ausreichend trinken, Ballaststoffe, Bewegung, feste Toilettenzeiten; Abführmittel nur nach Anordnung. Ein Stoma wird am Dickdarm angelegt: Hautumgebung, Farbe der Schleimhaut, Beutelversorgung beobachten.", "الرتوج تظهر كثيراً في القولون السيني؛ والتهاب الرتوج يسبب ألماً أسفل البطن الأيسر وحمى واضطراباً في البراز. الإمساك: شرب كافٍ وألياف وحركة وأوقات ثابتة للتبرز؛ والملينات فقط بأمر الطبيب. ويُنشأ الفغر على القولون: يُراقَب جلد المحيط ولون المخاطية وتجهيز الكيس."],
    note: ["Das Sigmoid (Colon sigmoideum) ist im Modell nicht als eigene Struktur enthalten.", "القولون السيني غير موجود في النموذج كبنية مستقلة."],
  },
  "rectum": {
    de: "Mastdarm", la: "Rectum", ar: "المستقيم",
    fn: ["Etwa 15 cm langer Endabschnitt des Dickdarms im kleinen Becken. Er sammelt den Stuhl; Dehnung löst den Stuhldrang aus, der Schließmuskel im Analkanal entscheidet über die Entleerung.", "الجزء الأخير من القولون بطول نحو 15 سم في الحوض الصغير. يجمع البراز؛ والتمدد يثير الرغبة في التبرز ويقرر العاصر في القناة الشرجية موعد التفريغ."],
    kl: ["Hier erfolgen Einlauf, Zäpfchen und die rektale Untersuchung. Klysma: Linksseitenlage, Beine anwinkeln, Spitze vorsichtig einführen. Hämorrhoiden bluten hellrot; dunkles Blut oder Teerstuhl weist auf Blutung höher im Verdauungstrakt hin. Pflege: Intimsphäre wahren, Hautschutz bei Durchfall, bei Stuhlinkontinenz Hautpflege und Toilettentraining.", "هنا تُجرى الحقن الشرجية والتحاميل والفحص الشرجي. الحقنة الشرجية: وضعية الجانب الأيسر وثني الساقين وإدخال الطرف بلطف. البواسير تنزف بدم أحمر فاتح؛ أما الدم الداكن أو البراز القطراني فيدل على نزف أعلى في الجهاز الهضمي. التمريض: احترام الخصوصية وحماية الجلد في الإسهال، وعند سلس البراز العناية بالجلد والتدريب على الحمام."],
    note: ["Analkanal und Schließmuskeln sind im Modell nicht enthalten.", "القناة الشرجية والعواصر غير موجودة في النموذج."],
  },
  "taeniae-coli": {
    de: "Dickdarmbänder", la: "Taeniae coli (Taenia libera, mesocolica, omentalis)", ar: "الأشرطة القولونية",
    fn: ["Drei verdickte Längsmuskelstreifen der Dickdarmwand. Weil sie kürzer sind als der Darm, rafft sich die Wand zu Ausbuchtungen (Haustren). Sie laufen am Wurmfortsatz zusammen und helfen dort bei der Orientierung.", "ثلاثة أشرطة عضلية طولية سميكة في جدار القولون. ولأنها أقصر من القولون يتجعد الجدار إلى انتفاخات (الحبنات). وتلتقي عند الزائدة الدودية فتساعد في تحديد موضعها."],
    kl: ["Zeichen für den Dickdarm im Röntgenbild und bei der Operation: Haustren und Tänien unterscheiden ihn vom Dünndarm. In der Chirurgie führen die Tänien zum Wurmfortsatz.", "علامة تميّز القولون في الأشعة والجراحة: الحبنات والأشرطة تفرقه عن الأمعاء الدقيقة. وفي الجراحة تقود الأشرطة إلى الزائدة الدودية."],
  },
  "liver-caudate": {
    de: "Leber: Lobus caudatus (Segment I)", la: "Lobus caudatus hepatis (Segmentum I)", ar: "الكبد: الفص المذنّب (القطعة I)",
    fn: ["Kleiner Leberabschnitt zwischen unterer Hohlvene und Lig. venosum. Er hat eigene Zu- und Abflüsse und bleibt bei manchen Lebererkrankungen länger erhalten. Wie die ganze Leber stoffwechselt er Nährstoffe, entgiftet Blut und bildet Galle.", "جزء صغير من الكبد بين الوريد الأجوف السفلي والرباط الوريدي. له تروية وتصريف مستقلان ويبقى سليماً أطول في بعض أمراض الكبد. ومثل الكبد كله يستقلب المغذيات وينقّي الدم ويكوّن الصفراء."],
    kl: ["Bei Leberzirrhose vergrößert sich der Lobus caudatus oft. Zirrhosezeichen: Ikterus, Aszites, Spider-Nävi, Ödeme, Blutungsneigung. Pflege: Bauchumfang und Gewicht täglich, Bilanz, Haut (Juckreiz, Dekubitus), Bewusstsein (hepatische Enzephalopathie), Blutungszeichen, Eiweißzufuhr nach Anordnung.", "في تشمع الكبد يكبر الفص المذنّب غالباً. علامات التشمع: يرقان واستسقاء بطني ونجوم عنكبوتية ووذمات وميل للنزف. التمريض: محيط البطن والوزن يومياً والميزان والجلد (الحكة وقرح الضغط) والوعي (اعتلال الدماغ الكبدي) وعلامات النزف والبروتين حسب الأمر."],
  },
  "liver-segments-2-3": {
    de: "Leber: Segmente II und III (linker lateraler Sektor)", la: "Segmenta II et III hepatis (Pars lateralis sinistra)", ar: "الكبد: القطعتان II وIII (القطاع الجانبي الأيسر)",
    fn: ["Der linke Teil der Leber, der über den Magen nach links reicht. Die Einteilung nach Couinaud gliedert die Leber in acht Segmente nach ihren Gefäßen; jedes Segment hat eigene Pfortader-, Arterien- und Gallengangsäste und kann einzeln operiert werden.", "الجزء الأيسر من الكبد الذي يمتد فوق المعدة إلى اليسار. يقسّم تصنيف كوينو الكبد إلى ثماني قطع حسب أوعيتها؛ ولكل قطعة فروع بابية وشريانية وصفراوية خاصة ويمكن استئصالها منفردة."],
    kl: ["Metastasen und Tumoren werden nach Segmenten beschrieben und operiert (Segmentresektion). Nach einer Leberteilresektion: Überwachung auf Blutung und Gallelecks (Drainagen), Blutzucker, Gerinnung, Schmerzen, Bewusstsein. Die Leber regeneriert sich in Wochen.", "تُوصَف الانتقالات والأورام وتُستأصل حسب القطع (استئصال قطعي). بعد استئصال جزء من الكبد: مراقبة النزف وتسرب الصفراء (التصاريف) وسكر الدم والتخثر والألم والوعي. وتتجدد الكبد خلال أسابيع."],
  },
  "liver-segment-4": {
    de: "Leber: Segment IV (linker medialer Sektor)", la: "Segmentum IV hepatis (Lobus quadratus und Pars medialis sinistra)", ar: "الكبد: القطعة IV (القطاع الإنسي الأيسر)",
    fn: ["Liegt in der Mitte der Leber neben der Gallenblase. Mit den Segmenten V und VIII bildet das Gebiet um die Gallenblase die Grenze zwischen funktionell rechter und linker Leber (Cantlie-Linie).", "تقع في وسط الكبد بجانب المرارة. وتشكل المنطقة حول المرارة مع القطعتين V وVIII حد الكبد الأيمن والأيسر الوظيفي (خط كانتلي)."],
    kl: ["Die Leber hat ein duales Blutsystem: Etwa 75 % des Zuflusses kommen aus der Pfortader (nährstoffreich), 25 % aus der Leberarterie (sauerstoffreich). Bei Leberpunktion Bettruhe und Überwachung auf Blutung und Schmerzen nach Anordnung; Blutgerinnung vorher prüfen.", "للكبد دورة دموية مزدوجة: نحو 75% من الوارد من الوريد البابي (غني بالمغذيات) و25% من الشريان الكبدي (غني بالأكسجين). وبعد خزعة الكبد: الراحة في الفراش ومراقبة النزف والألم حسب الأمر، ويُفحص التخثر قبلها."],
  },
  "liver-segment-5": {
    de: "Leber: Segment V (rechter vorderer Sektor, unten)", la: "Segmentum V hepatis", ar: "الكبد: القطعة V (القطاع الأمامي الأيمن، السفلي)",
    fn: ["Unterer Anteil der rechten Leber, direkt der Gallenblase benachbart. Die rechte Leber ist der größte Teil und hat den Hauptanteil an Stoffwechsel und Entgiftung.", "الجزء السفلي من الكبد الأيمن وملاصق للمرارة. الكبد الأيمن هو الأكبر وله النصيب الأكبر من الاستقلاب وتنقية السموم."],
    kl: ["Rechtsseitiger Oberbauchschmerz kann von Leber und Gallenblase stammen. Bei Hepatitis: Müdigkeit, Übelkeit, Ikterus, dunkler Urin, heller Stuhl. Standardhygiene und Händedesinfektion; bei Hepatitis A Stuhl, bei B und C Blut als Infektionsweg; Impfung gegen A und B vorhanden.", "ألم أعلى البطن الأيمن قد يصدر عن الكبد والمرارة. في التهاب الكبد: تعب وغثيان ويرقان وبول داكن وبراز فاتح. التزام النظافة وتعقيم اليدين؛ ففي التهاب الكبد A ينتقل عبر البراز، وفي B وC عبر الدم؛ ولقاح A وB متاح."],
  },
  "liver-segment-6": {
    de: "Leber: Segment VI (rechter hinterer Sektor, unten)", la: "Segmentum VI hepatis", ar: "الكبد: القطعة VI (القطاع الخلفي الأيمن، السفلي)",
    fn: ["Unterer hinterer Teil der rechten Leber, nahe der rechten Niere. Zusammen mit den anderen Segmenten produziert die Leber täglich etwa 0,5 bis 1 Liter Galle, die Fette emulgiert.", "الجزء الخلفي السفلي من الكبد الأيمن قرب الكلية اليمنى. وتنتج الكبد بكل قطعها نحو 0.5 إلى 1 لتر صفراء يومياً تستحلب الدهون."],
    kl: ["Eine Fettleber (häufig bei Übergewicht, Diabetes, Alkohol) verursacht lange keine Beschwerden. Leberwerte (GOT, GPT, GGT, Bilirubin, Quick/INR, Albumin) beurteilen Schaden und Funktion. Pflege: Alkoholverzicht fördern, Gewicht, Ernährungsberatung, Medikamente prüfen (leberschädigend z. B. hoch dosiertes Paracetamol).", "الكبد الدهني (شائع مع السمنة والسكري والكحول) لا يسبب أعراضاً زمناً طويلاً. تقيّم الإنزيمات (GOT وGPT وGGT) والبيليروبين والتخثر (Quick/INR) والألبومين التلف والوظيفة. التمريض: تشجيع ترك الكحول والوزن والإرشاد الغذائي ومراجعة الأدوية (مؤذية للكبد مثل الباراسيتامول بجرعات عالية)."],
    note: ["Segment VII ist im Modell nicht als eindeutig abgrenzbare eigene Fläche vorhanden und deshalb nicht dargestellt.", "القطعة VII غير موجودة في النموذج كسطح مستقل واضح الحدود ولذلك لم تُعرض."],
  },
  "liver-segment-8": {
    de: "Leber: Segment VIII (rechter vorderer Sektor, oben)", la: "Segmentum VIII hepatis", ar: "الكبد: القطعة VIII (القطاع الأمامي الأيمن، العلوي)",
    fn: ["Oberer vorderer Teil der rechten Leber unter dem Zwerchfell. Das Blut verlässt die Leber über drei Lebervenen (rechts, mittig, links) in die untere Hohlvene direkt unter dem Zwerchfell.", "الجزء العلوي الأمامي من الكبد الأيمن تحت الحجاب الحاجز. ويغادر الدم الكبد عبر ثلاثة أوردة كبدية (يمنى ووسطى ويسرى) إلى الوريد الأجوف السفلي تحت الحجاب مباشرة."],
    kl: ["Leberschwellung dehnt die Kapsel: Druckgefühl im rechten Oberbauch. Bei Stauungsleber (Rechtsherzinsuffizienz) ist die Leber vergrößert und druckempfindlich, mit gestauten Halsvenen und Beinödemen. Pflege: Bilanz, Gewicht, Ödeme, Oberkörperhochlagerung, Beine hochlagern nach Anordnung.", "تضخم الكبد يشد المحفظة: شعور بالضغط في أعلى البطن الأيمن. وفي الكبد الاحتقاني (قصور القلب الأيمن) تكبر الكبد وتؤلم مع احتقان أوردة العنق ووذمات الساقين. التمريض: الميزان والوزن والوذمات ورفع الجزء العلوي ورفع الساقين حسب الأمر."],
  },
  "gallbladder": {
    de: "Gallenblase", la: "Vesica biliaris (Vesica fellea)", ar: "المرارة",
    fn: ["Birnenförmiger Speicher von etwa 30 bis 50 ml an der Leberunterseite. Sie speichert die Galle, dickt sie auf das Fünf- bis Zehnfache ein und zieht sich nach fettreichen Mahlzeiten (Hormon Cholecystokinin) zusammen.", "مخزن كمثري الشكل بسعة نحو 30 إلى 50 مل تحت الكبد. تخزن الصفراء وتركّزها خمسة إلى عشرة أضعاف وتنقبض بعد الوجبات الدسمة (هرمون الكوليسيستوكينين)."],
    kl: ["Gallensteine verursachen Koliken: starke, wellenförmige Schmerzen im rechten Oberbauch, ausstrahlend in die rechte Schulter, mit Übelkeit und Erbrechen. Bei Cholezystitis kommen Fieber und Druckschmerz (Murphy-Zeichen) dazu. Pflege: Schmerzmittel und krampflösende Mittel nach Anordnung, Wärme, Kostaufbau nach Anordnung, nach Cholezystektomie (meist laparoskopisch) Wunden, Drainagen, Schulterschmerz (Gasrest) und Stuhl- und Urinfarbe beobachten.", "حصى المرارة تسبب مغصاً: ألماً شديداً موجياً في أعلى البطن الأيمن يمتد إلى الكتف الأيمن مع غثيان وقيء. وفي التهاب المرارة تُضاف الحمى وألم الجس (علامة ميرفي). التمريض: المسكنات والمضادات المقلصة وحرارة موضعية حسب الأمر وإعادة التغذية بالتدرج، وبعد استئصال المرارة (غالباً بالمنظار) مراقبة الجروح والتصاريف وألم الكتف (بقايا الغاز) ولون البراز والبول."],
  },
  "extrahepatic-bile-ducts": {
    de: "Äußere Gallenwege", la: "Ductus hepaticus dexter et sinister, Ductus hepaticus communis, Ductus cysticus", ar: "القنوات الصفراوية خارج الكبد",
    fn: ["Der rechte und linke Lebergang vereinigen sich zum gemeinsamen Lebergang, der mit dem Gallenblasengang (Ductus cysticus) den Hauptgallengang (Ductus choledochus) bildet. Dieser mündet zusammen mit dem Pankreasgang in den Zwölffingerdarm.", "تلتقي القناتان الكبديتان اليمنى واليسرى في القناة الكبدية المشتركة التي تكوّن مع القناة الكيسية القناة الصفراوية الجامعة (الجامعة)، وتصب مع قناة البنكرياس في الاثني عشري."],
    kl: ["Ein Stein oder Tumor, der die Gallenwege verlegt, führt zum Verschlussikterus: Gelbfärbung von Haut und Augen, juckende Haut, dunkler Urin, heller (acholischer) Stuhl. Bei Cholangitis: Fieber, Schüttelfrost, Ikterus, Oberbauchschmerz (Charcot-Trias): Notfall. Pflege: Hautfarbe, Juckreiz (Hautpflege, Fingernägel kurz), Stuhl- und Urinfarbe, Fieber beobachten.", "الحصاة أو الورم الذي يسد القنوات الصفراوية يسبب يرقاناً انسدادياً: اصفرار الجلد والعينين وحكة وبولاً داكناً وبراز فاتح اللون (فاقد الصفراء). وفي التهاب القنوات: حمى وقشعريرة ويرقان وألم أعلى البطن (ثلاثية شاركو): حالة طارئة. التمريض: مراقبة لون الجلد والحكة (العناية بالجلد وقص الأظافر) ولون البراز والبول والحمى."],
    note: ["Der Hauptgallengang (Ductus choledochus) ist im Modell nicht als eigene Struktur enthalten.", "القناة الصفراوية الجامعة غير موجودة في النموذج كبنية مستقلة."],
  },
  "intrahepatic-bile-ducts": {
    de: "Innere Gallenwege (Lebergangäste)", la: "Ductuli biliferi intrahepatici (Rami ductus hepatici)", ar: "القنوات الصفراوية داخل الكبد",
    fn: ["Feine Gänge sammeln die in den Leberzellen gebildete Galle aus den Segmenten und münden in die beiden Leberhauptgänge. Sie verlaufen zusammen mit Pfortader- und Leberarterienästen (Glisson-Trias).", "قنوات دقيقة تجمع الصفراء المُصنَّعة في خلايا الكبد من القطع وتصب في القناتين الكبديتين الرئيسيتين. وتسير مع فروع الوريد البابي والشريان الكبدي (ثالوث غليسون)."],
    kl: ["Entzündungen (z. B. primär sklerosierende Cholangitis) oder Tumoren verengen sie; bei Gallestau steigen Bilirubin und Cholestasewerte (AP, GGT). Nach Eingriffen (ERCP, Drainage) auf Fieber, Schmerzen, Blutung und Pankreatitiszeichen achten.", "الالتهابات (مثل التهاب القنوات الصفراوية المصلّب الأولي) أو الأورام تضيقها؛ وعند احتباس الصفراء يرتفع البيليروبين وقيم الركود الصفراوي (AP وGGT). بعد التدخلات (تصوير القنوات بالمنظار أو التصريف) تُراقَب الحمى والألم والنزف وعلامات التهاب البنكرياس."],
  },
  "pancreas": {
    de: "Bauchspeicheldrüse", la: "Pancreas", ar: "البنكرياس",
    fn: ["Etwa 15 cm lange Drüse hinter dem Magen mit Kopf (im C des Duodenums), Körper und Schwanz. Der äußere Anteil bildet täglich etwa 1 bis 1,5 Liter Verdauungssaft mit Amylase, Lipase, Trypsin und Bikarbonat. Der innere Anteil (Langerhans-Inseln) bildet Insulin und Glukagon.", "غدة طولها نحو 15 سم خلف المعدة لها رأس (في تقعر الاثني عشري) وجسم وذيل. القسم الخارجي ينتج يومياً نحو 1 إلى 1.5 لتر عصارة هاضمة فيها الأميلاز واللايباز والتربسين والبيكربونات. والقسم الداخلي (جزر لانغرهانس) ينتج الأنسولين والغلوكاغون."],
    kl: ["Die akute Pankreatitis (Gallensteine, Alkohol) verursacht gürtelförmige Oberbauchschmerzen, Übelkeit, Erbrechen, Fieber; Lipase und Amylase sind erhöht. Pflege: Schmerztherapie, Nahrungskarenz nach Anordnung, Infusionen und Bilanz, Beobachtung von Kreislauf, Atmung, Temperatur, Bauchumfang. Fällt das Pankreas aus, entstehen Fettstuhl und Diabetes: Enzymsubstitution und Blutzuckerkontrolle.", "التهاب البنكرياس الحاد (حصى الصفراء والكحول) يسبب ألماً حزامياً في أعلى البطن وغثياناً وقيئاً وحمى؛ ويرتفع اللايباز والأميلاز. التمريض: علاج الألم والصيام حسب الأمر والسوائل والميزان ومراقبة الدورة والتنفس والحرارة ومحيط البطن. وعند فشل البنكرياس يحدث براز دهني وسكري: تعويض الإنزيمات ومراقبة سكر الدم."],
  },
  "pancreatic-duct": {
    de: "Bauchspeichelgang", la: "Ductus pancreaticus (Wirsung-Gang)", ar: "قناة البنكرياس",
    fn: ["Sammelt den Verdauungssaft der Drüse und mündet meist gemeinsam mit dem Hauptgallengang an der Papilla duodeni major. Der gemeinsame Ausgang erklärt, warum ein Gallenstein auch eine Pankreatitis auslösen kann.", "تجمع العصارة الهاضمة للغدة وتصب غالباً مع القناة الصفراوية الجامعة عند حليمة فاتر. والمخرج المشترك يفسّر لماذا قد تسبب حصاة الصفراء التهاب البنكرياس."],
    kl: ["Bei Verschluss durch Stein oder Tumor staut sich das Sekret, die Enzyme schädigen die Drüse. Warnzeichen: Gürtelschmerz, Gewichtsverlust, Gelbsucht. Pflege: Schmerz, Stuhl (fettig, hell), Gewicht und Blutzucker beobachten.", "عند الانسداد بحصاة أو ورم يحتبس الإفراز وتُتلف الإنزيمات الغدة. علامات الإنذار: ألم حزامي ونقص وزن ويرقان. التمريض: مراقبة الألم والبراز (دهني فاتح) والوزن وسكر الدم."],
  },
  "spleen": {
    de: "Milz", la: "Splen (Lien)", ar: "الطحال",
    fn: ["Größtes lymphatisches Organ links im Oberbauch hinter dem Magen. Sie filtert das Blut, baut alte rote Blutkörperchen ab, speichert Blutplättchen und beteiligt sich an der Immunabwehr. Sie gehört zum Lymphsystem und ist hier als Nachbarorgan dargestellt.", "أكبر عضو لمفاوي في أعلى البطن الأيسر خلف المعدة. ترشّح الدم وتهدم الكريات الحمراء المسنّة وتخزن الصفائح وتشارك في المناعة. تتبع الجهاز اللمفاوي وتظهر هنا كعضو مجاور."],
    kl: ["Nach einem Bauchtrauma kann sie reißen: Schmerz im linken Oberbauch mit Ausstrahlung in die linke Schulter (Kehr-Zeichen), Schock. Notfall. Nach Entfernung (Splenektomie) droht eine Infektion mit Kapselbakterien: Impfungen (Pneumokokken, Meningokokken, Haemophilus influenzae) und Aufklärung bei Fieber. Bei Pfortaderhochdruck vergrößert sich die Milz.", "بعد رض البطن قد تتمزق: ألم أعلى البطن الأيسر يمتد إلى الكتف الأيسر (علامة كير) وصدمة. حالة طارئة. وبعد استئصالها يزداد خطر عدوى الجراثيم المغلفة: اللقاحات (المكورات الرئوية والسحائية والمستدمية النزلية) والتوعية عند الحمى. وفي ارتفاع ضغط الباب تتضخم الطحال."],
    note: ["Milz und Zwerchfell werden hier nur zur Orientierung gezeigt.", "الطحال والحجاب الحاجز يظهران هنا للتوجيه فقط."],
  },
  "celiac-trunk": {
    de: "Truncus coeliacus", la: "Truncus coeliacus", ar: "الجذع الزلاقي",
    fn: ["Kurzer Stamm aus der Bauchaorta in Höhe Th12/L1. Er teilt sich in die linke Magenarterie, die Milzarterie und die gemeinsame Leberarterie und versorgt damit Magen, Leber, Gallenblase, Milz, Bauchspeicheldrüse und Teile des Zwölffingerdarms.", "جذع قصير من الأبهر البطني عند الصدرية 12/القطنية 1. ينقسم إلى الشريان المعدي الأيسر والشريان الطحالي والشريان الكبدي المشترك ويغذي المعدة والكبد والمرارة والطحال والبنكرياس وأجزاء من الاثني عشري."],
    kl: ["Ein Verschluss führt zu Schmerzen nach dem Essen und Gewichtsverlust (Angina abdominalis). Bei Operationen an Magen, Leber und Pankreas ist die Versorgung über diesen Stamm entscheidend. Pflege: nach Eingriffen Schmerzen, Blutdruck und Bauchdecke beobachten.", "انسداده يسبب ألماً بعد الأكل ونقص وزن (ذبحة بطنية). وفي عمليات المعدة والكبد والبنكرياس تكون التروية عبر هذا الجذع حاسمة. التمريض: بعد التدخلات مراقبة الألم والضغط وجدار البطن."],
  },
  "gastric-arteries": {
    de: "Magenarterien", la: "Arteria gastrica sinistra et dextra", ar: "الشريانان المعديان",
    fn: ["Die linke Magenarterie stammt aus dem Truncus coeliacus, die rechte aus der eigentlichen Leberarterie. Sie verlaufen an der kleinen Kurvatur und bilden einen Gefäßbogen.", "الشريان المعدي الأيسر من الجذع الزلاقي والأيمن من الشريان الكبدي الخاص. يسيران على الانحناء الصغير ويكوّنان قوساً وعائياً."],
    kl: ["Bluten Magengeschwüre aus diesen Gefäßen, entsteht Bluterbrechen oder Teerstuhl. Pflege: Vitalzeichen, Zugänge, Notfallmaßnahmen, Nahrungskarenz, Erbrochenes und Stuhl beurteilen und dokumentieren.", "عندما تنزف قرحات المعدة من هذه الأوعية يحدث قيء دموي أو براز قطراني. التمريض: العلامات الحيوية والمداخل الوريدية وإجراءات الطوارئ والصيام وتقييم القيء والبراز وتوثيقها."],
  },
  "splenic-artery": {
    de: "Milzarterie", la: "Arteria splenica (lienalis)", ar: "الشريان الطحالي",
    fn: ["Größter Ast des Truncus coeliacus. Sie schlängelt sich am oberen Rand des Pankreas entlang zur Milz und gibt Äste an Pankreas und Magen ab.", "أكبر فروع الجذع الزلاقي. يتعرج على الحافة العليا للبنكرياس إلى الطحال ويعطي فروعاً للبنكرياس والمعدة."],
    kl: ["Aneurysmen der Milzarterie sind selten, können aber reißen (Schwangerschaft ist ein Risiko). Bei Pankreatitis kann die Entzündung die Arterie schädigen. Plötzliche starke Oberbauchschmerzen mit Kreislaufschock sind ein Notfall.", "أمهات دم الشريان الطحالي نادرة لكنها قد تتمزق (والحمل عامل خطر). وفي التهاب البنكرياس قد يضر الالتهاب بالشريان. ألم مفاجئ شديد في أعلى البطن مع صدمة دورية حالة طارئة."],
  },
  "hepatic-arteries": {
    de: "Leberarterien", la: "Arteria hepatica communis et propria mit Rami", ar: "الشرايين الكبدية",
    fn: ["Die gemeinsame Leberarterie geht aus dem Truncus coeliacus ab und wird zur eigentlichen Leberarterie, die sich in einen rechten und linken Ast und in Segmentäste teilt. Sie liefert etwa ein Viertel des Zuflusses, aber rund die Hälfte des Sauerstoffs der Leber.", "الشريان الكبدي المشترك ينشأ من الجذع الزلاقي ويصبح الشريان الكبدي الخاص الذي ينقسم إلى فرع أيمن وأيسر وفروع قطعية. يوفّر نحو ربع الوارد لكن قرابة نصف أكسجين الكبد."],
    kl: ["Nach einer Lebertransplantation ist ein Verschluss der Leberarterie gefährlich. Bei Kontrastmittel- und Katheteruntersuchungen: Einstichstelle auf Nachblutung, Pulse und Durchblutung der Beine kontrollieren, Bettruhe nach Anordnung.", "بعد زراعة الكبد يكون انسداد الشريان الكبدي خطيراً. وعند الفحوص بالصبغة والقسطرة: مراقبة موضع الوخز للنزف والنبض وتروية الساقين والراحة في الفراش حسب الأمر."],
  },
  "superior-mesenteric-artery": {
    de: "Obere Gekrösearterie", la: "Arteria mesenterica superior", ar: "الشريان المساريقي العلوي",
    fn: ["Entspringt in Höhe L1 aus der Bauchaorta und versorgt Dünndarm, Blinddarm, aufsteigenden Dickdarm und die rechten zwei Drittel des Querdarms über Äste im Gekröse.", "ينشأ عند القطنية 1 من الأبهر البطني ويغذي الأمعاء الدقيقة والأعور والقولون الصاعد والثلثين الأيمنين من القولون المعترض عبر فروع في المساريق."],
    kl: ["Ein Verschluss (Embolie oder Thrombose), z. B. bei Vorhofflimmern, verursacht den Mesenterialinfarkt: plötzlicher, sehr starker Bauchschmerz bei zunächst weichem Bauch, später Ileus und Schock. Lebensbedrohlicher Notfall. Pflege: Notruf, Vitalzeichen, Nahrungskarenz, Zugang, Patienten nicht allein lassen.", "الانسداد (صمة أو خثرة)، مثلاً مع الرجفان الأذيني، يسبب احتشاء المساريق: ألماً مفاجئاً شديداً جداً مع بطن طري في البداية ثم علوص وصدمة. حالة مهددة للحياة. التمريض: استدعاء الطوارئ والعلامات الحيوية والصيام وتأمين المدخل الوريدي وعدم ترك المريض وحده."],
  },
  "inferior-mesenteric-artery": {
    de: "Untere Gekrösearterie", la: "Arteria mesenterica inferior", ar: "الشريان المساريقي السفلي",
    fn: ["Entspringt in Höhe L3 aus der Bauchaorta und versorgt das linke Drittel des Querdarms, den absteigenden Dickdarm, das Sigmoid und den oberen Mastdarm.", "ينشأ عند القطنية 3 من الأبهر البطني ويغذي الثلث الأيسر من القولون المعترض والقولون النازل والسيني وأعلى المستقيم."],
    kl: ["Bei Operationen der Bauchaorta kann seine Durchblutung beeinträchtigt sein: ischämische Kolitis mit Bauchschmerz und blutigem Durchfall. Pflege: nach Aortenoperation Stuhl, Bauchschmerz und Kreislauf beobachten.", "في عمليات الأبهر البطني قد تتأثر تروية هذا الشريان: التهاب قولون إقفاري مع ألم بطن وإسهال دموي. التمريض: بعد جراحة الأبهر مراقبة البراز وألم البطن والدورة."],
  },
  "portal-vein": {
    de: "Pfortader", la: "Vena portae hepatis", ar: "الوريد البابي",
    fn: ["Sammelt hinter dem Pankreaskopf das Blut aus Magen, Darm, Milz und Bauchspeicheldrüse (aus oberer Gekrösevene und Milzvene) und führt es etwa 1 bis 1,5 Liter pro Minute zur Leber. Dort werden Nährstoffe verarbeitet und Giftstoffe entgiftet, bevor das Blut in den Körperkreislauf gelangt.", "تجمع خلف رأس البنكرياس دم المعدة والأمعاء والطحال والبنكرياس (من الوريد المساريقي العلوي والوريد الطحالي) وتنقله بمعدل نحو 1 إلى 1.5 لتر في الدقيقة إلى الكبد. وهناك تُعالَج المغذيات وتُنقّى السموم قبل أن يصل الدم إلى الدورة العامة."],
    kl: ["Bei Leberzirrhose steigt der Druck (portale Hypertension): Blut weicht über Umgehungskreisläufe aus (Ösophagus- und Magenvarizen, Caput medusae, Hämorrhoiden), Aszites, vergrößerte Milz. Folgen sind Varizenblutung und hepatische Enzephalopathie (Ammoniak). Pflege: Blutungszeichen, Bauchumfang, Gewicht, Bewusstsein, Schlafrhythmus.", "في تشمع الكبد يرتفع الضغط (فرط ضغط الباب): يتجه الدم عبر دورات جانبية (دوالي المريء والمعدة ورأس الميدوسا والبواسير) مع استسقاء وتضخم الطحال. والنتائج: نزف الدوالي واعتلال الدماغ الكبدي (الأمونيا). التمريض: علامات النزف ومحيط البطن والوزن والوعي ونمط النوم."],
  },
  "splenic-vein": {
    de: "Milzvene", la: "Vena splenica (lienalis)", ar: "الوريد الطحالي",
    fn: ["Sammelt das Blut aus Milz und Pankreas und verläuft hinter dem Pankreas. Hinter dem Pankreashals vereinigt sie sich mit der oberen Gekrösevene zur Pfortader.", "تجمع دم الطحال والبنكرياس وتسير خلف البنكرياس. وخلف عنق البنكرياس تتحد مع الوريد المساريقي العلوي لتكوّن الوريد البابي."],
    kl: ["Eine Thrombose (z. B. bei Pankreatitis) verursacht Milzvergrößerung und kann Magenvarizen bilden. Neue Oberbauchschmerzen, Blutungszeichen und Milzschwellung ärztlich abklären lassen.", "الخثار (مثلاً في التهاب البنكرياس) يسبب تضخم الطحال وقد يكوّن دوالي المعدة. يجب تقييم ألم أعلى البطن الجديد وعلامات النزف وتورم الطحال طبياً."],
  },
  "superior-mesenteric-vein": {
    de: "Obere Gekrösevene", la: "Vena mesenterica superior", ar: "الوريد المساريقي العلوي",
    fn: ["Sammelt das nährstoffreiche Blut aus Dünndarm, Blinddarm und rechtem Dickdarm. Hier gelangen aufgenommene Zucker, Aminosäuren und Vitamine zur Leber (Fette gehen überwiegend über die Lymphe).", "تجمع الدم الغني بالمغذيات من الأمعاء الدقيقة والأعور والقولون الأيمن. وبهذا تصل السكريات والأحماض الأمينية والفيتامينات الممتصة إلى الكبد (أما الدهون فتمر في معظمها عبر اللمف)."],
    kl: ["Mesenterialvenenthrombose macht schleichende bis starke Bauchschmerzen, Übelkeit, blutigen Stuhl. Risikofaktoren sind Gerinnungsstörungen und Entzündungen. Auf Schmerzen, Blut im Stuhl und Fieber achten.", "خثار الوريد المساريقي يسبب ألماً بطنياً متدرجاً إلى شديد وغثياناً وبرازاً دموياً. من عوامل الخطر اضطرابات التخثر والالتهابات. يُراقَب الألم والدم في البراز والحمى."],
  },
  "inferior-mesenteric-vein": {
    de: "Untere Gekrösevene", la: "Vena mesenterica inferior", ar: "الوريد المساريقي السفلي",
    fn: ["Führt das Blut aus dem linken Dickdarm und dem oberen Mastdarm und mündet in die Milzvene oder die obere Gekrösevene, damit ebenfalls in die Pfortader.", "تنقل دم القولون الأيسر وأعلى المستقيم وتصب في الوريد الطحالي أو المساريقي العلوي ثم إلى الوريد البابي."],
    kl: ["Der untere Mastdarm entwässert dagegen teilweise direkt in die untere Hohlvene: Dort liegt eine Umgehung der Leber, die bei Pfortaderhochdruck zu Hämorrhoiden und Blutungen beitragen kann. Zäpfchen wirken teils unter Umgehung der Leber.", "أما المستقيم السفلي فيصرف جزئياً مباشرة إلى الوريد الأجوف السفلي: وهنا تحويلة تتجاوز الكبد قد تسهم في البواسير والنزف عند ارتفاع ضغط الباب. وبعض التحاميل تعمل متجاوزة الكبد."],
  },
  "portal-branches": {
    de: "Pfortaderäste in der Leber", la: "Rami venae portae (Vena portae dextra et sinistra)", ar: "فروع الوريد البابي في الكبد",
    fn: ["Die Pfortader teilt sich in einen rechten und linken Ast und weiter in Segmentäste, die das nährstoffreiche Blut in die Lebersinusoide bringen. Dort tauscht das Blut Stoffe mit den Leberzellen aus.", "ينقسم الوريد البابي إلى فرع أيمن وأيسر ثم إلى فروع قطعية تنقل الدم الغني بالمغذيات إلى جيبانيات الكبد. وهناك يتبادل الدم المواد مع خلايا الكبد."],
    kl: ["Vor großen Leberoperationen kann ein Ast verschlossen werden (Embolisation), damit die andere Seite wächst. Der Druck im Pfortadersystem wird indirekt bei Zirrhose über Varizen und Aszites sichtbar.", "قبل عمليات الكبد الكبيرة قد يُسَد فرع (الإصمام) لتنمو الجهة الأخرى. ويظهر ضغط الجهاز البابي بشكل غير مباشر في التشمع عبر الدوالي والاستسقاء."],
  },
  "hepatic-veins": {
    de: "Lebervenen", la: "Venae hepaticae (dextra, intermedia, sinistra)", ar: "الأوردة الكبدية",
    fn: ["Drei große Venen sammeln das Blut aus den Lebersinusoiden und münden unmittelbar unter dem Zwerchfell in die untere Hohlvene. Sie verlaufen zwischen den Lebersegmenten und trennen sie.", "ثلاثة أوردة كبيرة تجمع الدم من جيبانيات الكبد وتصب مباشرة تحت الحجاب الحاجز في الوريد الأجوف السفلي. وتسير بين قطع الكبد وتفصل بينها."],
    kl: ["Ein Verschluss (Budd-Chiari-Syndrom) führt zu Bauchschmerz, Aszites und Leberschwellung. Bei Rechtsherzinsuffizienz staut sich das Blut bis in die Lebervenen zurück: gestaute Halsvenen, Leberschwellung, Beinödeme.", "انسدادها (متلازمة بود-كياري) يسبب ألم بطن واستسقاءً وتضخم الكبد. وفي قصور القلب الأيمن يحتقن الدم حتى الأوردة الكبدية: احتقان أوردة العنق وتضخم الكبد ووذمات الساقين."],
  },
  "mesenteries": {
    de: "Gekröse", la: "Mesenterium, Mesocolon transversum, Mesoappendix", ar: "المساريق",
    fn: ["Fächerförmige Bauchfellfalten halten Dünndarm, Querdarm und Wurmfortsatz an der hinteren Bauchwand und tragen Gefäße, Nerven und Lymphknoten. Die Gekrösewurzel des Dünndarms ist etwa 15 cm lang und zieht vom linken Oberbauch zum rechten Unterbauch.", "طيّات صفاقية مروحية تعلّق الأمعاء الدقيقة والقولون المعترض والزائدة بالجدار الخلفي للبطن وتحمل الأوعية والأعصاب والعقد اللمفية. وجذر مساريق الأمعاء الدقيقة بطوله نحو 15 سم ويمتد من أعلى البطن الأيسر إلى أسفل الأيمن."],
    kl: ["Drehung der Darmschlingen um das Gekröse (Volvulus) und Verwachsungen nach Operationen können einen Darmverschluss auslösen. Aszites, Blutungen und Entzündungen breiten sich im Bauchraum entlang dieser Strukturen aus. Pflege: Bauchumfang, Schmerzen, Übelkeit und Stuhlgang beobachten.", "التواء العراوي حول المساريق (الانفتال) والالتصاقات بعد العمليات قد يسبب انسداد الأمعاء. والاستسقاء والنزف والالتهاب تنتشر في البطن على امتداد هذه البنى. التمريض: مراقبة محيط البطن والألم والغثيان والتبرز."],
    note: ["Das Bauchfell (Peritoneum) selbst ist im Modell nicht enthalten, nur die Gekröse. Sie sind halbtransparent dargestellt.", "الصفاق نفسه غير موجود في النموذج؛ فقط المساريق وهي معروضة نصف شفافة."],
  },
  "diaphragm": {
    de: "Zwerchfell", la: "Diaphragma", ar: "الحجاب الحاجز",
    fn: ["Kuppelförmiger Hauptatemmuskel zwischen Brust- und Bauchraum. Speiseröhre, Aorta und untere Hohlvene ziehen durch Öffnungen hindurch. Bei der Bauchpresse (Husten, Stuhlgang) arbeitet es mit der Bauchmuskulatur zusammen.", "عضلة التنفس الرئيسية على شكل قبة بين الصدر والبطن. يمر المريء والأبهر والوريد الأجوف السفلي عبر فتحات فيها. وعند الزحر (السعال والتبرز) تعمل مع عضلات البطن."],
    kl: ["Bei einer Hiatushernie rutscht ein Teil des Magens durch den Speiseröhrenschlitz nach oben: Sodbrennen, Druckgefühl hinter dem Brustbein. Die Zwerchfellreizung durch Gallenblase oder Milz kann Schulterschmerz erzeugen. Pflege: Oberkörperhochlagerung, kleine Mahlzeiten.", "في فتق الحجاب الحاجز الاستراحي ينزلق جزء من المعدة عبر فتحة المريء إلى الأعلى: حرقة وشعور بالضغط خلف القص. وتهيج الحجاب بسبب المرارة أو الطحال قد يسبب ألماً في الكتف. التمريض: رفع الجزء العلوي ووجبات صغيرة."],
    note: ["Orientierungsschicht; die Atmung zeigt der Atlas Atmungssystem.", "طبقة توجيه؛ أما التنفس فيعرضه أطلس الجهاز التنفسي."],
  },
};
export const DIGESTIVE_ITEMS = items;

const R = (de: string, ar: string, en: string, fr: string, tr: string): [string, string, string, string, string] => [de, ar, en, fr, tr];
const St = (title: [string, string, string, string, string], text: [string, string], ids: string[], note?: [string, string]) => ({ title, text, ids, ...(note ? { note } : {}) });
const NOTE_ANAL: [string, string] = ["Anus und Analkanal sind im Modell nicht enthalten.", "فتحة الشرج والقناة الشرجية غير موجودة في النموذج."];

export const DIGESTIVE_PATHS: AtlasPath[] = [
  {
    id: "food",
    title: R("Weg der Nahrung", "مسار الطعام", "Path of food", "Trajet des aliments", "Gıdanın yolu"),
    intro: ["Von der Zunge bis zum Mastdarm in neun Stationen. Die Kamera fährt auf die jeweilige Struktur.", "من اللسان إلى المستقيم في تسع محطات. وتتحرك الكاميرا إلى البنية المعنية."],
    steps: [
      St(R("Mundhöhle", "الفم", "Mouth", "Bouche", "Ağız"), ["Zähne zerkleinern, die Zunge formt den Bissen, Speichel macht ihn gleitfähig; die Amylase beginnt die Stärke zu spalten.", "تقطّع الأسنان وتشكّل اللسان اللقمة ويجعلها اللعاب زلقة ويبدأ الأميلاز بتفكيك النشا."], ["tongue", "submandibular-glands", "sublingual-glands"], ["Zähne, Gaumen und Rachen fehlen im Modell.", "الأسنان والحنك والبلعوم غير موجودة في النموذج."]),
      St(R("Speiseröhre", "المريء", "Oesophagus", "Œsophage", "Yemek borusu"), ["Nach dem Schlucken schiebt die Peristaltik den Bissen in etwa 8 bis 10 Sekunden zum Magen. Der Durchtritt durch das Zwerchfell ist die untere Engstelle.", "بعد البلع تدفع الحركة الدودية اللقمة إلى المعدة في نحو 8 إلى 10 ثوانٍ. وعبور الحجاب الحاجز هو التضيق السفلي."], ["esophagus", "diaphragm"]),
      St(R("Magen", "المعدة", "Stomach", "Estomac", "Mide"), ["Der Magen knetet den Bissen mit Salzsäure und Pepsin zu Speisebrei. Je nach Mahlzeit bleibt er zwei bis sechs Stunden; fettreiche Speisen verweilen länger.", "تعجن المعدة اللقمة بحمض الهيدروكلوريك والببسين إلى كيموس. ويبقى فيها من ساعتين إلى ست ساعات حسب الوجبة؛ والدسمة تبقى أطول."], ["stomach"]),
      St(R("Zwölffingerdarm", "الاثنا عشري", "Duodenum", "Duodénum", "Onikiparmak"), ["Galle aus der Leber und Enzyme aus dem Pankreas strömen über die Papille ein, neutralisieren die Säure und spalten Fett, Eiweiß und Stärke.", "تصل الصفراء من الكبد وإنزيمات البنكرياس عبر الحليمة فتعادل الحمض وتفكك الدهون والبروتين والنشا."], ["duodenum", "gallbladder", "pancreas"]),
      St(R("Leer- und Krummdarm", "الصائم واللفائفي", "Jejunum and ileum", "Jéjunum et iléon", "Jejunum ve ileum"), ["Auf drei bis vier Metern werden fast alle Nährstoffe aufgenommen. Das terminale Ileum nimmt Vitamin B12 und Gallensäuren auf.", "على امتداد ثلاثة إلى أربعة أمتار يُمتص تقريباً كل المغذيات. واللفائفي الانتهائي يمتص فيتامين ب12 والأحماض الصفراوية."], ["jejunum", "ileum", "mesenteries"]),
      St(R("Ileozäkalklappe und Blinddarm", "الصمام اللفائفي الأعوري والزائدة", "Ileocaecal valve and appendix", "Valve iléo-cæcale et appendice", "İleoçekal valf ve apandis"), ["Die Klappe lässt den Brei portionsweise in den Dickdarm und hält Dickdarmkeime zurück. Am Blinddarm hängt der Wurmfortsatz.", "يسمح الصمام للكيموس بالمرور على دفعات ويحجز جراثيم القولون. وتتصل الزائدة الدودية بالأعور."], ["ileocecal-junction", "appendix", "taeniae-coli"]),
      St(R("Dickdarm", "القولون", "Colon", "Côlon", "Kalın bağırsak"), ["Aufsteigender, querer und absteigender Dickdarm entziehen Wasser und Salze (Stuhlmenge nur etwa 100 bis 200 g pro Tag); die Darmflora bildet Vitamin K.", "يسحب القولون الصاعد والمعترض والنازل الماء والأملاح (كمية البراز نحو 100 إلى 200 غ يومياً)، وتصنع الجراثيم المعوية فيتامين ك."], ["ascending-colon", "transverse-colon", "descending-colon", "taeniae-coli"]),
      St(R("Mastdarm und Stuhlgang", "المستقيم والتبرز", "Rectum and defecation", "Rectum et défécation", "Rektum ve defekasyon"), ["Der Mastdarm sammelt den Stuhl. Dehnung löst den Stuhldrang aus; der innere Schließmuskel erschlafft reflexartig, der äußere wird willkürlich gesteuert.", "يجمع المستقيم البراز. والتمدد يثير الرغبة في التبرز؛ يرتخي العاصر الداخلي انعكاسياً ويُتحكم بالخارجي إرادياً."], ["rectum"], NOTE_ANAL),
    ],
  },
  {
    id: "bile",
    title: R("Weg von Galle und Pankreassaft", "مسار الصفراء وعصارة البنكرياس", "Path of bile and pancreatic juice", "Trajet de la bile et du suc pancréatique", "Safra ve pankreas suyunun yolu"),
    intro: ["Wo Galle gebildet, gespeichert und abgegeben wird und warum Pankreas und Gallenwege zusammenhängen.", "أين تُصنَّع الصفراء وتُخزَّن وتُطلَق ولماذا يرتبط البنكرياس بالقنوات الصفراوية."],
    steps: [
      St(R("Leber bildet Galle", "الكبد يكوّن الصفراء", "Liver makes bile", "Le foie fabrique la bile", "Karaciğer safra yapar"), ["Die Leberzellen bilden täglich etwa 0,5 bis 1 Liter Galle mit Gallensäuren, Bilirubin und Cholesterin.", "تكوّن خلايا الكبد يومياً نحو 0.5 إلى 1 لتر صفراء فيها أحماض صفراوية وبيليروبين وكوليسترول."], ["liver-segments-2-3", "liver-segment-4", "liver-segment-5", "liver-segment-6", "liver-segment-8", "liver-caudate"]),
      St(R("Gallenwege in der Leber", "القنوات داخل الكبد", "Ducts inside the liver", "Voies dans le foie", "Karaciğer içi yollar"), ["Feine Gänge sammeln die Galle aus den Segmenten und münden in den rechten und linken Lebergang.", "تجمع قنوات دقيقة الصفراء من القطع وتصب في القناتين الكبديتين اليمنى واليسرى."], ["intrahepatic-bile-ducts"]),
      St(R("Äußere Gallenwege", "القنوات خارج الكبد", "Ducts outside the liver", "Voies hors du foie", "Karaciğer dışı yollar"), ["Die Lebergänge vereinigen sich zum gemeinsamen Lebergang. Dort zweigt der Gallenblasengang zur Gallenblase ab.", "تتحد القناتان الكبديتان في قناة كبدية مشتركة. وهناك تتفرع القناة الكيسية إلى المرارة."], ["extrahepatic-bile-ducts"], ["Der Hauptgallengang (Ductus choledochus) fehlt im Modell.", "القناة الصفراوية الجامعة غير موجودة في النموذج."]),
      St(R("Gallenblase speichert", "المرارة تخزن", "Gallbladder stores", "La vésicule stocke", "Safra kesesi depolar"), ["Zwischen den Mahlzeiten wird die Galle in der Gallenblase gespeichert und eingedickt. Fettreiche Nahrung löst Cholecystokinin aus: Die Gallenblase zieht sich zusammen.", "بين الوجبات تُخزَّن الصفراء في المرارة وتتركز. والغذاء الدسم يحفز الكوليسيستوكينين فتنقبض المرارة."], ["gallbladder", "extrahepatic-bile-ducts"]),
      St(R("Bauchspeicheldrüse", "البنكرياس", "Pancreas", "Pancréas", "Pankreas"), ["Das Pankreas gibt Enzyme und Bikarbonat über den Bauchspeichelgang ab; er läuft durch die Drüse zum Zwölffingerdarm.", "يطلق البنكرياس الإنزيمات والبيكربونات عبر قناة البنكرياس التي تمر في الغدة إلى الاثني عشري."], ["pancreas", "pancreatic-duct"]),
      St(R("Papille im Zwölffingerdarm", "الحليمة في الاثني عشري", "Papilla in the duodenum", "Papille duodénale", "Duodenumdaki papilla"), ["Galle und Pankreassaft treffen sich an der Papilla duodeni major und gelangen in den Darm. Verlegt ein Stein die Papille, drohen Gelbsucht und Pankreatitis.", "تلتقي الصفراء وعصارة البنكرياس عند حليمة فاتر وتدخلان الأمعاء. وإن سدّت حصاة الحليمة فقد يحدث يرقان والتهاب بنكرياس."], ["duodenum", "pancreatic-duct", "extrahepatic-bile-ducts"]),
    ],
  },
  {
    id: "portal",
    title: R("Pfortaderkreislauf", "الدورة البابية", "Portal circulation", "Circulation porte", "Portal dolaşım"),
    intro: ["Das Blut aus Magen und Darm fließt zuerst durch die Leber. Venen sind dunkelviolett, Arterien rot.", "دم المعدة والأمعاء يمر أولاً عبر الكبد. الأوردة بنفسجية داكنة والشرايين حمراء."],
    steps: [
      St(R("Venen der Därme und Milz", "أوردة الأمعاء والطحال", "Veins of bowel and spleen", "Veines intestinales et spléniques", "Bağırsak ve dalak venleri"), ["Die obere und untere Gekrösevene sowie die Milzvene sammeln nährstoffreiches Blut.", "يجمع الوريدان المساريقيان العلوي والسفلي والوريد الطحالي دماً غنياً بالمغذيات."], ["superior-mesenteric-vein", "inferior-mesenteric-vein", "splenic-vein"]),
      St(R("Pfortader", "الوريد البابي", "Portal vein", "Veine porte", "Portal ven"), ["Hinter dem Pankreas vereinigen sich die Venen zur Pfortader, die das Blut zur Leber führt.", "خلف البنكرياس تتحد الأوردة لتكوّن الوريد البابي الذي ينقل الدم إلى الكبد."], ["portal-vein", "splenic-vein", "superior-mesenteric-vein"]),
      St(R("Pfortaderäste", "فروع الوريد البابي", "Portal branches", "Branches portales", "Portal dallar"), ["In der Leber teilt sich die Pfortader in rechten und linken Ast und Segmentäste.", "في الكبد ينقسم الوريد البابي إلى فرع أيمن وأيسر وفروع قطعية."], ["portal-branches", "liver-segment-5", "liver-segment-8"]),
      St(R("Leberarterien", "الشرايين الكبدية", "Hepatic arteries", "Artères hépatiques", "Hepatik arterler"), ["Parallel bringt die Leberarterie sauerstoffreiches Blut (etwa ein Viertel des Zuflusses).", "بالتوازي يجلب الشريان الكبدي دماً غنياً بالأكسجين (نحو ربع الوارد)."], ["hepatic-arteries", "celiac-trunk"]),
      St(R("Lebervenen", "الأوردة الكبدية", "Hepatic veins", "Veines hépatiques", "Hepatik venler"), ["Nach dem Stoffaustausch sammeln die drei Lebervenen das Blut und leiten es zur unteren Hohlvene.", "بعد تبادل المواد تجمع الأوردة الكبدية الثلاثة الدم وتنقله إلى الوريد الأجوف السفلي."], ["hepatic-veins", "diaphragm"]),
    ],
  },
  {
    id: "arteries",
    title: R("Arterielle Versorgung", "التروية الشريانية", "Arterial supply", "Vascularisation artérielle", "Arteriyel beslenme"),
    intro: ["Drei Stämme der Bauchaorta versorgen die Verdauungsorgane.", "ثلاثة جذوع من الأبهر البطني تغذي أعضاء الهضم."],
    steps: [
      St(R("Truncus coeliacus", "الجذع الزلاقي", "Coeliac trunk", "Tronc cœliaque", "Çölyak gövde"), ["Versorgt Oberbauchorgane: Magen (linke Magenarterie), Milz (Milzarterie), Leber und Gallenblase (Leberarterie).", "يغذي أعضاء أعلى البطن: المعدة (الشريان المعدي الأيسر) والطحال (الطحالي) والكبد والمرارة (الكبدي)."], ["celiac-trunk", "gastric-arteries", "splenic-artery", "hepatic-arteries"]),
      St(R("Obere Gekrösearterie", "الشريان المساريقي العلوي", "Superior mesenteric artery", "Artère mésentérique supérieure", "Süperior mezenterik arter"), ["Versorgt Dünndarm und rechten Dickdarm bis zum rechten Teil des Querdarms.", "يغذي الأمعاء الدقيقة والقولون الأيمن حتى الجزء الأيمن من القولون المعترض."], ["superior-mesenteric-artery", "jejunum", "ileum", "ascending-colon"]),
      St(R("Untere Gekrösearterie", "الشريان المساريقي السفلي", "Inferior mesenteric artery", "Artère mésentérique inférieure", "İnferior mezenterik arter"), ["Versorgt linken Dickdarm und oberen Mastdarm.", "يغذي القولون الأيسر وأعلى المستقيم."], ["inferior-mesenteric-artery", "descending-colon", "rectum"]),
    ],
  },
  {
    id: "liver",
    title: R("Lebersegmente (Couinaud)", "قطع الكبد (كوينو)", "Liver segments (Couinaud)", "Segments hépatiques (Couinaud)", "Karaciğer segmentleri (Couinaud)"),
    intro: ["Die Leber wird nach ihren Gefäßen in acht Segmente gegliedert. Chirurgen entfernen Segmente einzeln.", "يُقسَّم الكبد حسب أوعيته إلى ثماني قطع. ويستأصل الجراحون القطع منفردة."],
    steps: [
      St(R("Segment I", "القطعة I", "Segment I", "Segment I", "Segment I"), ["Lobus caudatus, zwischen unterer Hohlvene und Lig. venosum.", "الفص المذنّب بين الوريد الأجوف السفلي والرباط الوريدي."], ["liver-caudate"]),
      St(R("Segmente II und III", "القطعتان II وIII", "Segments II and III", "Segments II et III", "Segment II ve III"), ["Linker lateraler Sektor; reicht über den Magen nach links.", "القطاع الجانبي الأيسر؛ يمتد فوق المعدة إلى اليسار."], ["liver-segments-2-3"]),
      St(R("Segment IV", "القطعة IV", "Segment IV", "Segment IV", "Segment IV"), ["Linker medialer Sektor mit dem Lobus quadratus, neben der Gallenblase.", "القطاع الإنسي الأيسر مع الفص المربع بجانب المرارة."], ["liver-segment-4", "gallbladder"]),
      St(R("Segmente V und VIII", "القطعتان V وVIII", "Segments V and VIII", "Segments V et VIII", "Segment V ve VIII"), ["Rechter vorderer Sektor: V unten, VIII oben unter dem Zwerchfell.", "القطاع الأمامي الأيمن: V سفلية وVIII علوية تحت الحجاب."], ["liver-segment-5", "liver-segment-8"]),
      St(R("Segment VI", "القطعة VI", "Segment VI", "Segment VI", "Segment VI"), ["Rechter hinterer Sektor, unten. Segment VII ist im Modell nicht abgegrenzt.", "القطاع الخلفي الأيمن السفلي. والقطعة VII غير محددة في النموذج."], ["liver-segment-6"], ["Segment VII fehlt als eigene Fläche.", "القطعة VII غير موجودة كسطح مستقل."]),
    ],
  },
];

export const DIGESTIVE_CARE = {
  diseases: ["Refluxkrankheit, Gastritis, Magen- und Zwölffingerdarmgeschwür", "Appendizitis, Ileus, Divertikulitis", "Morbus Crohn und Colitis ulcerosa", "Gallensteine, Cholezystitis, Cholangitis", "Akute und chronische Pankreatitis", "Hepatitis, Fettleber, Leberzirrhose", "Obstipation und Durchfall", "Kolorektales Karzinom und Magenkarzinom"],
  symptoms: ["Übelkeit, Erbrechen, Bluterbrechen (Hämatemesis)", "Teerstuhl (Meläna), Blut im Stuhl, heller Stuhl, Fettstuhl", "Oberbauch-, Unterbauchschmerzen, Koliken, Loslassschmerz", "Durchfall, Obstipation, Meteorismus, fehlender Windabgang", "Gelbsucht (Ikterus), dunkler Urin, Juckreiz", "Aszites, Gewichtsverlust, Appetitlosigkeit, Dysphagie"],
  diagnostics: ["Inspektion, Palpation, Perkussion und Auskultation des Abdomens (Darmgeräusche)", "Labor: Lipase, Amylase, GOT, GPT, GGT, Bilirubin, Albumin, Quick/INR, CRP, Blutbild", "Sonografie, CT und MRT des Bauchs", "Magen- und Darmspiegelung (Gastroskopie, Koloskopie), ERCP", "Stuhltests (okkultes Blut, Calprotectin, Erreger), Atemtest (Helicobacter)", "Röntgen-Abdomenübersicht bei Ileusverdacht"],
  actions: ["Abdomen beobachten: Bauchumfang, Schmerzen, Abwehrspannung, Darmgeräusche, Windabgang, Stuhlgang", "Stuhlprotokoll nach Bristol-Skala, Ein- und Ausfuhr, Gewicht", "Bei Übelkeit und Erbrechen: Oberkörper hoch oder Seitenlage, Nierenschale, Mundpflege, Aspirationsschutz", "Nahrungskarenz, Kostaufbau, Sondenernährung und Infusionen nur nach Anordnung; Magensondenlage kontrollieren", "Obstipationsprophylaxe: Trinken, Ballaststoffe, Bewegung, Toilettenroutine; Abführmittel nach Anordnung", "Stomapflege: Hautschutz, Beutelwechsel, Schleimhautfarbe, Ausscheidung beobachten", "Vor Untersuchungen (Koloskopie, Sonografie): Vorbereitung erklären, Abführen und Nüchternheit nach Anordnung", "Notfall erkennen: Bluterbrechen, hartes Abdomen, plötzlicher starker Schmerz, Schock: Notruf"],
  monitoring: ["Schmerz (Ort, Art, Ausstrahlung, Verlauf), Übelkeit, Erbrechen (Menge, Farbe, Beimengung)", "Stuhl: Häufigkeit, Konsistenz, Farbe, Blut, Geruch", "Bauchumfang, Abwehrspannung, Darmgeräusche, Windabgang", "Hautfarbe (Ikterus, Blässe), Juckreiz, Ödeme, Bewusstsein", "Blutdruck, Puls, Temperatur, Flüssigkeitsbilanz, Gewicht", "Blutzucker bei Pankreaserkrankungen, Gerinnungszeichen bei Lebererkrankungen"],
  terms: [["Hämatemesis", "Erbrechen von Blut"], ["Meläna (Teerstuhl)", "schwarzer, klebriger Stuhl durch Blut aus dem oberen Verdauungstrakt"], ["Hämatochezie", "hellrotes Blut im Stuhl, meist aus dem unteren Darm"], ["Ileus", "Darmverschluss oder Darmlähmung"], ["Ikterus", "Gelbfärbung von Haut und Augen durch Bilirubin"], ["Aszites", "Flüssigkeit in der Bauchhöhle"], ["Obstipation / Diarrhö", "Verstopfung / Durchfall"], ["Meteorismus", "Blähbauch durch Gas im Darm"], ["Dysphagie", "Schluckstörung"], ["Steatorrhö", "Fettstuhl bei Fettverdauungsstörung"], ["Peristaltik", "wellenförmige Darmbewegung"], ["Stoma", "künstlicher Darmausgang"]] as [string, string][],
  lessons: ["reflux-gerd", "gastritis-ulkus", "crohn", "divertikel", "ileus", "darmkrebs", "galle", "pankreatitis", "hepatitis", "leberzirrhose"],
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string): AtlasQuiz => ({ q: [qd, qa], o, why: [wd, wa] });
export const DIGESTIVE_QUIZ: AtlasQuiz[] = [
  Q("Welche Aufgabe haben die Gallensäuren?", "ما وظيفة الأحماض الصفراوية؟", ["Sie emulgieren Fette und ermöglichen deren Spaltung und Aufnahme", "Sie spalten Eiweiße zu Aminosäuren", "Sie spalten Stärke zu Zucker", "Sie neutralisieren die Magensäure im Magen"],
    "Gallensäuren machen Fett in kleinen Tröpfchen wasserlöslich (Emulgierung), damit die Lipase es spalten kann und die Bausteine aufgenommen werden. Die Eiweißspaltung übernehmen Pepsin und Trypsin, die Stärke die Amylase. Richtige Antwort: Fette emulgieren. Fehlt Galle (Gallestau), entsteht heller, fettiger Stuhl.",
    "تجعل الأحماض الصفراوية الدهن قطيرات صغيرة قابلة للذوبان في الماء (الاستحلاب) لكي يفككها اللايباز وتُمتص نواتجها. أما البروتينات فيفككها الببسين والتربسين والنشا يفككها الأميلاز. الإجابة الصحيحة: استحلاب الدهون. وعند غياب الصفراء يظهر براز فاتح دهني."),
  Q("Wo münden Gallengang und Pankreasgang in den Darm?", "أين تصب القناة الصفراوية وقناة البنكرياس في الأمعاء؟", ["Meist gemeinsam an der Papilla duodeni major im Zwölffingerdarm", "Im Magen", "Im Leerdarm", "Im Blinddarm"],
    "Hauptgallengang und Pankreasgang münden meist gemeinsam an der Papilla duodeni major (Vater-Papille) im Zwölffingerdarm. Deshalb kann ein Gallenstein auch eine Pankreatitis auslösen. Richtige Antwort: Papilla duodeni major im Zwölffingerdarm.",
    "تصب القناة الصفراوية الجامعة وقناة البنكرياس غالباً معاً عند حليمة فاتر الكبرى في الاثني عشري. ولذلك قد تسبب حصاة الصفراء التهاب البنكرياس. الإجابة الصحيحة: حليمة فاتر في الاثني عشري."),
  Q("Wie wird die Leber mit Blut versorgt?", "كيف تُروى الكبد بالدم؟", ["Etwa drei Viertel über die Pfortader, ein Viertel über die Leberarterie", "Nur über die Leberarterie", "Nur über die Pfortader", "Über die Nierenarterien"],
    "Die Leber hat ein doppeltes Zuflusssystem: Die Pfortader bringt etwa 75 % des Blutes (nährstoffreich, sauerstoffärmer), die Leberarterie etwa 25 % (sauerstoffreich). Richtige Antwort: etwa drei Viertel Pfortader, ein Viertel Leberarterie. Das Blut verlässt die Leber über die Lebervenen.",
    "للكبد تروية مزدوجة: يجلب الوريد البابي نحو 75% من الدم (غني بالمغذيات وأقل أكسجيناً) والشريان الكبدي نحو 25% (غني بالأكسجين). الإجابة الصحيحة: نحو ثلاثة أرباع من الوريد البابي وربع من الشريان الكبدي. ويغادر الدم الكبد عبر الأوردة الكبدية."),
  Q("Welches Zeichen spricht am ehesten für eine Blutung im oberen Verdauungstrakt?", "أي علامة تدل غالباً على نزف في الجهاز الهضمي العلوي؟", ["Teerstuhl (Meläna)", "Hellroter Blutauflag auf dem Stuhl bei Hämorrhoiden", "Heller, fettiger Stuhl", "Grüner Durchfall"],
    "Blut aus Magen oder Zwölffingerdarm wird von der Magensäure und Darmbakterien zu schwarzem, klebrigem Stuhl (Teerstuhl) umgewandelt. Hellrotes Blut stammt meist aus dem unteren Darm oder Anus. Richtige Antwort: Teerstuhl. Bei Verdacht Vitalzeichen kontrollieren und sofort den Arzt informieren.",
    "يتحول الدم القادم من المعدة أو الاثني عشري بفعل حمض المعدة وجراثيم الأمعاء إلى براز أسود لزج (براز قطراني). أما الدم الأحمر الفاتح فيأتي غالباً من الأمعاء السفلية أو الشرج. الإجابة الصحيحة: البراز القطراني. وعند الاشتباه تُفحص العلامات الحيوية ويُبلَّغ الطبيب فوراً."),
  Q("Welche Maßnahme ist bei Verdacht auf Blinddarmentzündung richtig?", "أي إجراء صحيح عند الاشتباه بالتهاب الزائدة الدودية؟", ["Nahrungs- und Trinkkarenz, keine Abführmittel, keine Wärme, Arzt informieren", "Abführmittel zur Entleerung geben", "Heizkissen auf den Bauch legen", "Reichlich essen und trinken"],
    "Wärme und Abführmittel steigern die Darmbewegung und können eine Perforation begünstigen. Bei Verdacht gelten Nahrungs- und Trinkkarenz, Schmerz- und Fieberkontrolle, Schonhaltung und sofortige ärztliche Information. Richtige Antwort: Karenz, keine Wärme und keine Abführmittel.",
    "الحرارة والملينات تزيدان حركة الأمعاء وقد تساعدان على الانثقاب. عند الاشتباه: الصيام عن الطعام والشراب ومراقبة الألم والحمى ووضعية مريحة وإبلاغ الطبيب فوراً. الإجابة الصحيحة: الصيام وعدم استخدام الحرارة والملينات."),
  Q("Welcher Darmabschnitt nimmt Vitamin B12 und Gallensäuren zurück auf?", "أي جزء من الأمعاء يمتص فيتامين ب12 والأحماض الصفراوية؟", ["Das terminale Ileum", "Das Duodenum", "Der Dickdarm", "Der Mastdarm"],
    "Im Endabschnitt des Krummdarms (terminales Ileum) werden B12 mit dem Intrinsic Factor und die Gallensäuren (enterohepatischer Kreislauf) aufgenommen. Bei Morbus Crohn oder nach Resektion droht ein B12-Mangel mit Blutarmut und Nervenschäden. Richtige Antwort: das terminale Ileum.",
    "في نهاية اللفائفي (اللفائفي الانتهائي) يُمتص ب12 مع العامل الداخلي والأحماض الصفراوية (الدورة المعوية الكبدية). وفي داء كرون أو بعد الاستئصال يحدث نقص ب12 مع فقر دم وتلف عصبي. الإجابة الصحيحة: اللفائفي الانتهائي."),
  Q("Was ist ein typisches Zeichen eines Verschlussikterus?", "ما العلامة المعتادة لليرقان الانسدادي؟", ["Dunkler Urin und heller (acholischer) Stuhl mit Juckreiz", "Schwarzer Teerstuhl", "Heller Urin und dunkler Stuhl", "Blutiger Durchfall"],
    "Verlegte Gallenwege lassen Bilirubin ins Blut übertreten: Haut und Augen werden gelb, der Urin dunkel, weil Bilirubin über die Nieren ausgeschieden wird, und der Stuhl hell, weil Gallenfarbstoff den Darm nicht erreicht. Gallensäuren in der Haut verursachen Juckreiz. Richtige Antwort: dunkler Urin und heller Stuhl.",
    "عند انسداد القنوات الصفراوية يعود البيليروبين إلى الدم: يصفرّ الجلد والعينان ويصبح البول داكناً لأن البيليروبين يُطرح عبر الكلية ويصبح البراز فاتحاً لأن صبغة الصفراء لا تصل إلى الأمعاء. وتسبب الأحماض الصفراوية في الجلد حكة. الإجابة الصحيحة: بول داكن وبراز فاتح."),
  Q("Warum bildet sich bei Leberzirrhose häufig Aszites und Ösophagusvarizen?", "لماذا يحدث الاستسقاء ودوالي المريء كثيراً في تشمع الكبد؟", ["Der Druck in der Pfortader steigt (portale Hypertension) und Albumin fällt ab", "Die Gallenblase ist zu groß", "Die Milz bildet zu viel Galle", "Die Magensäure ist zu hoch"],
    "Das vernarbte Lebergewebe bremst den Pfortaderfluss: Der Druck steigt, Blut weicht über Umgehungsvenen (Ösophagus, Magenfundus) aus und Flüssigkeit tritt in die Bauchhöhle. Zusätzlich sinkt Albumin, wodurch Wasser in Gewebe und Bauchhöhle übertritt. Richtige Antwort: portale Hypertension und Albuminmangel.",
    "النسيج الكبدي المتندّب يعيق تدفق الوريد البابي: يرتفع الضغط ويتجه الدم عبر أوردة جانبية (المريء وقاع المعدة) ويتسرب السائل إلى البطن. كما ينخفض الألبومين فيخرج الماء إلى الأنسجة والبطن. الإجابة الصحيحة: فرط ضغط الباب ونقص الألبومين."),
  Q("Welche Aufgabe hat der äußere (exokrine) Anteil des Pankreas?", "ما وظيفة القسم الخارجي (الإفرازي الخارجي) من البنكرياس؟", ["Bildung von Verdauungsenzymen (Amylase, Lipase, Trypsin) und Bikarbonat", "Bildung von Insulin", "Bildung von Galle", "Speicherung von Glykogen"],
    "Der exokrine Anteil produziert den Bauchspeichel mit Amylase, Lipase, Proteasen und Bikarbonat, der Insulin und Glukagon bilden die Langerhans-Inseln (endokriner Anteil). Richtige Antwort: Verdauungsenzyme und Bikarbonat. Bei Ausfall: Fettstuhl; bei Inselzell-Ausfall: Diabetes mellitus.",
    "ينتج القسم الخارجي عصارة البنكرياس وفيها الأميلاز واللايباز والبروتياز والبيكربونات، بينما تنتج جزر لانغرهانس (القسم الصماوي) الأنسولين والغلوكاغون. الإجابة الصحيحة: الإنزيمات الهاضمة والبيكربونات. وعند الفشل: براز دهني؛ وعند فشل الجزر: السكري."),
  Q("Wie lagert man eine Patientin oder einen Patienten für einen Einlauf (Klysma) üblicherweise?", "كيف يُوضَع المريض عادةً لإعطاء الحقنة الشرجية؟", ["Linksseitenlage mit angewinkelten Beinen", "Rechtsseitenlage mit gestreckten Beinen", "Rückenlage mit Oberkörper hoch", "Bauchlage"],
    "Die Linksseitenlage folgt dem Verlauf des Dickdarms (Sigmoid links) und erleichtert das Einlaufen der Flüssigkeit; die angewinkelten Beine entspannen die Bauchdecke. Das Vorgehen richtet sich nach Hausstandard und ärztlicher Anordnung. Richtige Antwort: Linksseitenlage mit angewinkelten Beinen.",
    "وضعية الجانب الأيسر تتبع مسار القولون (السيني في اليسار) وتسهّل جريان السائل؛ وثني الساقين يرخي جدار البطن. وتتبع الخطوات معيار المؤسسة وأمر الطبيب. الإجابة الصحيحة: وضعية الجانب الأيسر مع ثني الساقين."),
  Q("Welche Gefäße versorgen Dünndarm und rechten Dickdarm mit Blut?", "أي الأوعية تغذي الأمعاء الدقيقة والقولون الأيمن؟", ["Die obere Gekrösearterie (Arteria mesenterica superior)", "Die Nierenarterien", "Die untere Gekrösearterie", "Die Milzarterie"],
    "Die A. mesenterica superior (aus L1) versorgt Dünndarm, Blinddarm, aufsteigenden Dickdarm und die rechten zwei Drittel des Querdarms. Der linke Dickdarm hängt an der unteren Gekrösearterie. Ein Verschluss der oberen Arterie ist ein lebensbedrohlicher Notfall. Richtige Antwort: obere Gekrösearterie.",
    "الشريان المساريقي العلوي (من القطنية 1) يغذي الأمعاء الدقيقة والأعور والقولون الصاعد والثلثين الأيمنين من المعترض. أما القولون الأيسر فيعتمد على الشريان المساريقي السفلي. وانسداد العلوي حالة طارئة مهددة للحياة. الإجابة الصحيحة: الشريان المساريقي العلوي."),
  Q("Welche Aussage zur Milz nach einer Splenektomie ist richtig?", "أي عبارة عن الطحال بعد استئصاله صحيحة؟", ["Es besteht ein erhöhtes Risiko schwerer Infektionen mit Kapselbakterien; Impfungen sind wichtig", "Die Milz wächst nach", "Die Blutbildung stoppt", "Es besteht kein erhöhtes Infektionsrisiko"],
    "Die Milz filtert Bakterien mit Kapsel (Pneumokokken, Meningokokken, Haemophilus). Ohne sie droht eine überwältigende Infektion (OPSI). Deshalb impft man gegen diese Erreger und klärt auf, bei Fieber sofort ärztliche Hilfe zu suchen. Richtige Antwort: erhöhtes Infektionsrisiko, Impfungen wichtig.",
    "ترشّح الطحال الجراثيم المغلفة (المكورات الرئوية والسحائية والمستدمية). وبدونه يهدد التهاب شديد (OPSI). لذلك يُعطى لقاح ضد هذه الجراثيم ويُوعّى المريض بطلب المساعدة الطبية فوراً عند الحمى. الإجابة الصحيحة: خطر عدوى أعلى واللقاحات مهمة."),
  Q("Welche Funktion hat die Ileozäkalklappe?", "ما وظيفة الصمام اللفائفي الأعوري؟", ["Sie lässt Inhalt in den Dickdarm und verhindert den Rückfluss in den Dünndarm", "Sie bildet Galle", "Sie sondert Magensäure ab", "Sie verschließt den Magenausgang"],
    "Die Klappe zwischen Krummdarm und Blinddarm gibt den Brei portionsweise weiter und hält Dickdarmbakterien aus dem Dünndarm fern. Der Magenausgang ist der Pylorus. Richtige Antwort: portionsweise Weitergabe und Schutz vor Rückfluss.",
    "الصمام بين اللفائفي والأعور يمرر الكيموس على دفعات ويمنع جراثيم القولون من دخول الأمعاء الدقيقة. أما مخرج المعدة فهو البواب. الإجابة الصحيحة: تمرير على دفعات ومنع الارتجاع."),
];

export const DIGESTIVE_CFG: AtlasConfig = {
  key: "digestive",
  modelUrl: "/models/digestive.glb",
  items: DIGESTIVE_ITEMS,
  layers: DIGESTIVE_LAYERS,
  layerOf: (id) => {
    if (["tongue", "submandibular-glands", "sublingual-glands"].includes(id)) return "oral";
    if (["esophagus", "stomach", "duodenum"].includes(id)) return "upper";
    if (["jejunum", "ileum", "ileocecal-junction"].includes(id)) return "small";
    if (["appendix", "ascending-colon", "transverse-colon", "descending-colon", "rectum", "taeniae-coli"].includes(id)) return "colon";
    if (id.startsWith("liver-")) return "liver";
    if (["gallbladder", "extrahepatic-bile-ducts", "intrahepatic-bile-ducts"].includes(id)) return "biliary";
    if (["pancreas", "pancreatic-duct"].includes(id)) return "pancreas";
    if (id === "spleen") return "spleen";
    if (id.endsWith("-artery") || id.endsWith("-arteries") || id === "celiac-trunk") return "artery";
    if (id === "mesenteries" || id === "diaphragm") return "shell";
    return "portal";
  },
  color: (id, layer) => {
    switch (layer) {
      case "oral": return id === "tongue" ? 0xd98a8a : 0xd9b36a;
      case "upper": return id === "esophagus" ? 0xd9a09a : id === "stomach" ? 0xe0907a : 0xe8b86a;
      case "small": return id === "jejunum" ? 0xe3a07a : id === "ileum" ? 0xd98a6a : 0xb86a6a;
      case "colon": return id === "taeniae-coli" ? 0xf0e0b0 : id === "appendix" ? 0xc47a5a : 0xb8845a;
      case "liver": return id === "liver-caudate" ? 0x8a4a2f : 0x9b4a35;
      case "biliary": return id === "gallbladder" ? 0x6aa060 : 0xb8c04a;
      case "pancreas": return id === "pancreas" ? 0xe8c870 : 0xf5e09a;
      case "spleen": return 0x7a4a7a;
      case "artery": return 0xd8413a;
      case "portal": return /hepatic-veins/.test(id) ? 0x5a6fb0 : 0x6a4a9a;
      default: return 0xe6c8b0;
    }
  },
  shell: ["shell"],
  innerLabel: ["Zwerchfell und Gekröse durchsichtig", "الحجاب والمساريق شفافان", "Diaphragm and mesenteries transparent", "Diaphragme et mésentères transparents", "Diyafram ve mezenter saydam"],
  careTitle: ["Pflege-Überblick Verdauung", "نظرة تمريضية على الهضم", "Nursing overview: digestion", "Aperçu infirmier : digestion", "Hemşirelik özeti: sindirim"],
  target: [0, 0.05, 0], shellOpacity: 0.28, stepCamera: true,
  dist: 0.95, minDist: 0.1, maxDist: 1.8, clipRange: 0.25, explodeScale: 0.7,
  care: DIGESTIVE_CARE,
  quiz: DIGESTIVE_QUIZ,
  paths: DIGESTIVE_PATHS,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Referenzanatomie eines erwachsenen Mannes. Nicht im Modell: Mundboden und Rachen, Ohrspeicheldrüse, Sigmoid, Analkanal, Hauptgallengang, Leberkapsel, Peritoneum, Wandschichten und Zotten (siehe Schema).", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). تشريح مرجعي لرجل بالغ. غير موجود في النموذج: قاع الفم والبلعوم والغدة النكفية والقولون السيني والقناة الشرجية والقناة الصفراوية الجامعة ومحفظة الكبد والصفاق وطبقات الجدار والزغابات (انظر الرسم).", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (adapted). Reference anatomy of an adult male. Not in the model: floor of mouth and pharynx, parotid gland, sigmoid colon, anal canal, common bile duct, liver capsule, peritoneum, wall layers and villi (see schematic).", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (adapté). Anatomie de référence d'un homme adulte. Absent : plancher buccal, pharynx, parotide, sigmoïde, canal anal, cholédoque, péritoine, couches pariétales et villosités (voir schéma).", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (uyarlandı). Yetişkin erkek referans anatomisi. Modelde yok: ağız tabanı, farenks, parotis, sigmoid kolon, anal kanal, koledok, periton, duvar katmanları ve villuslar (şemaya bakın)."],
};
