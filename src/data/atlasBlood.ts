/**
 * Atlas Blut und Immunsystem: Beschriftungen zu den 17 benannten Strukturen des BodyParts3D-Modells (public/models/blood.glb).
 * Definition: tools/defs/blood.json. Paarige Strukturen sind zusammengefasst.
 * IM MODELL: Milz, Thymus, große Arterien und Venen, Knochen als Sitz des roten Knochenmarks (Hautkontur zur Orientierung).
 * NICHT IM MODELL: Blutzellen, Plasma, Knochenmark selbst, Lymphknoten, Lymphgefäße, Mandeln, Peyer-Plaques, Blinddarm, Antikörper.
 * Diese Inhalte stehen im gekennzeichneten Schema (BloodSchemas, kein 3D-Modell).
 * Die Milzschlagader ist in der Quelle mehrfach enthalten; es wird nur ein Exemplar (FJ3640) verwendet.
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, AtlasPath, AtlasQuiz } from "./atlasTypes";

export const BLOOD_LAYERS: AtlasLayer[] = [
  { id: "lymphoid", de: "Lymphatische Organe (Milz, Thymus)", ar: "الأعضاء اللمفاوية (الطحال والزعترية)", en: "Lymphoid organs", fr: "Organes lymphoïdes", tr: "Lenfoid organlar" },
  { id: "artery", de: "Große Arterien", ar: "الشرايين الكبيرة", en: "Large arteries", fr: "Grosses artères", tr: "Büyük arterler" },
  { id: "vein", de: "Große Venen und Pfortader", ar: "الأوردة الكبيرة والوريد البابي", en: "Large veins", fr: "Grosses veines", tr: "Büyük venler" },
  { id: "marrow", de: "Knochen mit rotem Knochenmark", ar: "العظام التي تحوي نخاعاً أحمر", en: "Bones with red marrow", fr: "Os à moelle rouge", tr: "Kırmızı ilikli kemikler" },
  { id: "shell", de: "Hautkontur (Orientierung)", ar: "حدود الجلد (للتوجيه)", en: "Skin outline", fr: "Contour cutané", tr: "Deri hatları" },
];

type It = [string, string, string, string, string, string, string, [string, string]?];
const I = (a: It): AtlasItem => ({ de: a[0], la: a[1], ar: a[2], fn: [a[3], a[4]], kl: [a[5], a[6]], ...(a[7] ? { note: a[7] } : {}) });
const PAIR: [string, string] = ["Rechte und linke Seite sind im Modell zu einer Struktur zusammengefasst.", "الجانبان الأيمن والأيسر مدمجان في بنية واحدة."];
const MARROW: [string, string] = ["Gezeigt ist der Knochen als Sitz des roten Knochenmarks; das Mark selbst ist im Modell nicht enthalten.", "تُعرض العظمة كموضع للنخاع الأحمر؛ والنخاع نفسه غير موجود في النموذج."];

const items: Record<string, AtlasItem> = {
  spleen: I(["Milz", "Splen (Lien)", "الطحال",
    "Größtes lymphatisches Organ (etwa 150 g) im linken Oberbauch unter dem Zwerchfell. Rote Pulpa: filtert Blut, baut alte Erythrozyten ab, speichert Thrombozyten. Weiße Pulpa: Lymphozyten und Immunabwehr.", "أكبر عضو لمفاوي (نحو 150 غ) في أعلى البطن الأيسر تحت الحجاب. اللب الأحمر: يرشح الدم ويهدم كريات الدم الحمراء القديمة ويخزن الصفيحات. اللب الأبيض: خلايا لمفاوية ودفاع مناعي.",
    "Bei stumpfem Bauchtrauma kann die Milz reißen: starker linksseitiger Oberbauchschmerz mit Ausstrahlung in die linke Schulter (Kehr-Zeichen), Schock; Notfall. Nach Milzentfernung besteht lebenslang erhöhtes Infektrisiko (Pneumokokken, Meningokokken, Haemophilus): Impfungen, Notfallausweis, bei Fieber sofort Arzt. Vergrößerte Milz bei Leukämie, Infekten und Leberzirrhose.", "عند رض البطن الكليل قد ينفجر الطحال: ألم شديد في أعلى البطن الأيسر يمتد إلى الكتف الأيسر (علامة كير) وصدمة؛ حالة طارئة. بعد استئصال الطحال يبقى خطر العدوى طوال العمر (مكورات رئوية وسحائية وهيموفيلس): لقاحات وبطاقة طوارئ وعند الحمى طبيب فوراً. تضخم الطحال في سرطان الدم والعدوى وتشمع الكبد.", undefined]),
  thymus: I(["Thymus (Bries)", "Thymus", "الغدة الزعترية",
    "Hier reifen die T-Lymphozyten zu „selbsttoleranten“ Zellen aus. Beim Kind groß, nach der Pubertät bildet sie sich zurück (Fettkörper).", "هنا تنضج الخلايا اللمفاوية التائية لتصبح «متسامحة مع الذات». كبيرة عند الطفل وتضمر بعد البلوغ (تُستبدل بالدهن).",
    "Thymom, Myasthenia gravis (belastungsabhängige Muskelschwäche, hängende Lider). Fehlbildung (DiGeorge-Syndrom) bedeutet T-Zell-Mangel. Im Alter sinkt die Abwehrleistung (Immunseneszenz): Impfungen (Grippe, Pneumokokken, Corona) empfehlen.", "الورم التوتي ووهن عضلي وخيم (ضعف عضلي مع الجهد وسقوط الجفون). التشوه (متلازمة دي جورج) يعني نقص الخلايا التائية. في الشيخوخة تضعف المناعة: التوصية بلقاحات (الإنفلونزا والمكورات الرئوية وكورونا).", PAIR]),
  aorta: I(["Aorta (Hauptschlagader)", "Aorta (ascendens, arcus, abdominalis)", "الأبهر",
    "Größte Arterie: führt das sauerstoffreiche Blut aus dem Herzen zu allen Organen (Ruhedruck bis etwa 120 mmHg).", "أكبر شريان: ينقل الدم الغني بالأكسجين من القلب إلى كل الأعضاء (ضغط الراحة حتى نحو 120 ملم زئبق).",
    "Aortenaneurysma und Aortendissektion: plötzlicher Vernichtungsschmerz, Schock; Notfall. Bauchaorta liegt vor der Wirbelsäule: Blutungen aus Verletzung oder Ruptur. Pulskontrolle, Blutdruck, Zugänge über kleinere Gefäße. Siehe Atlas Herz-Kreislauf.", "أم الدم الأبهرية والتسلخ: ألم مفاجئ ساحق وصدمة؛ طارئ. الأبهر البطني أمام العمود الفقري: نزف من إصابة أو تمزق. مراقبة النبض والضغط والتروية عبر أوعية أصغر. انظر أطلس القلب والأوعية.", ["Die Aorta ist hier nur in ihrem Hauptverlauf dargestellt; Wandschichten fehlen.", "الأبهر معروض بمساره الرئيسي فقط؛ طبقات الجدار غير موجودة."]]),
  "aortic-branches": I(["Hals- und Armarterien (Truncus brachiocephalicus, Karotiden, Subklaviae)", "A. brachiocephalica, A. carotis communis, A. subclavia", "شرايين العنق والذراع",
    "Versorgen Kopf, Gehirn und Arme. Die Karotiden sind am Hals tastbar.", "تغذي الرأس والدماغ والذراعين. والسباتيان تُجسّان في العنق.",
    "Karotisstenose ist eine wichtige Schlaganfallursache. Pulskontrolle am Hals nur einseitig (Karotisdruck kann Bradykardie auslösen); Blutdruck an beiden Armen bei Verdacht auf Aortendissektion messen.", "تضيق السباتي سبب مهم للسكتة. جس النبض في العنق من جهة واحدة فقط (الضغط قد يسبب بطء القلب)؛ قياس الضغط في الذراعين عند الشك بتسلخ الأبهر.", PAIR]),
  "iliac-arteries": I(["Beckenarterien", "Aa. iliacae communes", "الشرايين الحرقفية",
    "Die Aorta teilt sich in die beiden Beckenarterien, die Becken und Beine versorgen (weiter als Arteria femoralis).", "ينقسم الأبهر إلى الشريانين الحرقفيين اللذين يغذيان الحوض والساقين (ثم الفخذي).",
    "Arterielle Verschlusskrankheit (pAVK): Wadenschmerz beim Gehen (Schaufensterkrankheit), kalte, blasse Füße. Akuter Verschluss: 6 P (Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Prostration): Notfall. Leistenpunktion (Katheter): Druckverband und Nachblutungskontrolle.", "مرض انسداد الشرايين الطرفية: ألم الساق عند المشي (العرج المتقطع) وقدمان باردتان شاحبتان. الانسداد الحاد: الأعراض الستة (ألم وشحوب وغياب النبض وخدر وشلل وانهاك): طارئ. بعد بزل الأربية: ضمادة ضاغطة ومراقبة النزف.", PAIR]),
  "splenic-artery": I(["Milzarterie", "A. splenica (lienalis)", "الشريان الطحالي",
    "Versorgt die Milz mit Blut; sie verläuft am oberen Rand der Bauchspeicheldrüse.", "يغذي الطحال بالدم؛ ويسير على الحافة العليا للبنكرياس.",
    "Bei Milzruptur starke innere Blutung: Schocksymptome, Kehr-Zeichen. Gefäßverschluss führt zum Milzinfarkt.", "في تمزق الطحال نزف داخلي شديد: أعراض الصدمة وعلامة كير. وانسداد الوعاء يسبب احتشاء الطحال.", ["In der Quelle mehrfach enthalten; hier ein Exemplar.", "موجود مكرراً في المصدر؛ يُعرض هنا نسخة واحدة."]]),
  "vena-cava": I(["Hohlvenen", "Vena cava superior et inferior", "الوريدان الأجوفان",
    "Führen das sauerstoffarme Blut aus Körper und Beinen zum rechten Herzvorhof. Die obere Hohlvene holt Kopf, Hals und Arme, die untere den Rest.", "تعيدان الدم قليل الأكسجين من الجسم والساقين إلى الأذين الأيمن. الأجوف العلوي يجمع الرأس والعنق والذراعين والسفلي الباقي.",
    "Zentraler Venenkatheter (ZVK) liegt meist in der oberen Hohlvene: Lagekontrolle röntgenologisch, sterile Pflege, Infektion und Thrombose beobachten. Vena-cava-Kompression in Schwangerschaft: Linksseitenlage.", "القسطرة الوريدية المركزية تقع غالباً في الأجوف العلوي: التأكد من موضعها بالأشعة وعناية معقمة ومراقبة العدوى والجلطة. انضغاط الأجوف في الحمل: الاستلقاء على الجنب الأيسر.", undefined]),
  "brachiocephalic-veins": I(["Armkopfvenen", "Vv. brachiocephalicae", "الوريدان العضديان الرأسيان",
    "Sammeln Blut aus Kopf, Hals und Armen und vereinigen sich zur oberen Hohlvene.", "يجمعان الدم من الرأس والعنق والذراعين ويلتقيان لتشكيل الأجوف العلوي.",
    "Katheterzugang (Subklavia, Jugularis). Obere Einflussstauung (geschwollene Halsvenen, Gesichtsödem) bei Tumor oder Thrombose.", "طريق القسطرة (تحت الترقوة والوداجي). الاحتقان العلوي (انتفاخ أوردة العنق ووذمة الوجه) عند ورم أو خثار.", PAIR]),
  "portal-vein": I(["Pfortader", "Vena portae hepatis", "الوريد البابي",
    "Bringt nährstoffreiches Blut aus Darm, Milz und Bauchspeicheldrüse zur Leber zur Verarbeitung und Entgiftung.", "ينقل الدم الغني بالمغذيات من الأمعاء والطحال والبنكرياس إلى الكبد للمعالجة وإزالة السموم.",
    "Bei Leberzirrhose steigt der Druck (portale Hypertonie): Ösophagusvarizen (Blutung: Erbrechen von Blut, Notfall), Aszites, Milzvergrößerung. Pflege: Bauchumfang, Gewicht, Blutungszeichen.", "في تشمع الكبد يرتفع الضغط (فرط الضغط البابي): دوالي المريء (نزف: قيء دموي وطارئ) واستسقاء وتضخم الطحال. التمريض: محيط البطن والوزن وعلامات النزف.", undefined]),
  "splenic-vein": I(["Milzvene", "V. splenica", "الوريد الطحالي",
    "Führt Blut aus der Milz zur Pfortader; hier gelangen auch abgebaute Blutbestandteile (Bilirubin) zur Leber.", "ينقل الدم من الطحال إلى الوريد البابي؛ وهنا تصل أيضاً نواتج هدم الدم (البيليروبين) إلى الكبد.",
    "Bei Pfortaderhochdruck Rückstau in die Milz (Splenomegalie, Thrombozytopenie).", "عند فرط ضغط الباب يرتد الدم نحو الطحال (تضخم الطحال ونقص الصفيحات).", undefined]),
  "iliac-veins": I(["Beckenvenen", "Vv. iliacae communes", "الأوردة الحرقفية",
    "Sammeln das Blut aus Beinen und Becken; sie vereinigen sich zur unteren Hohlvene.", "تجمع الدم من الساقين والحوض وتلتقي لتشكل الأجوف السفلي.",
    "Beckenvenenthrombose ist eine Hauptquelle von Lungenembolien: Schwellung des ganzen Beins, Spannungsschmerz. Prophylaxe: Heparin, Kompression, Mobilisation, Bewegungsübungen, Trinken.", "خثار أوردة الحوض مصدر رئيسي للانصمام الرئوي: تورم الساق كاملة وألم توتر. الوقاية: هيبارين وضغط وتحريك وتمارين وشرب.", PAIR]),
  "sternum-ribs": I(["Brustbein und Rippen", "Sternum, Costae", "القص والأضلاع",
    "Flache Knochen mit rotem Knochenmark (Blutbildung). Das Brustbein ist mit Beckenkamm Entnahmeort der Knochenmarkpunktion.", "عظام مسطحة تحوي نخاعاً أحمر (تكوين الدم). والقص وعُرف الحرقفة موضعا بزل نخاع العظم.",
    "Sternumpunktion bei Leukämieverdacht: Aufklärung, Lokalanästhesie, Druckverband. Bei Knochenmarkinsuffizienz (Chemotherapie): Infektionen, Blutungen, Anämie beobachten.", "بزل القص عند الشك بسرطان الدم: التوعية وتخدير موضعي وضمادة ضاغطة. وفي قصور النخاع (العلاج الكيميائي) مراقبة العدوى والنزف وفقر الدم.", MARROW]),
  "vertebral-column": I(["Wirbelsäule und Kreuzbein", "Columna vertebralis, Os sacrum", "العمود الفقري والعجز",
    "Wirbelkörper enthalten beim Erwachsenen viel rotes Knochenmark.", "أجسام الفقرات تحوي عند البالغ كثيراً من النخاع الأحمر.",
    "Bei Multiplem Myelom (Plasmazelltumor im Mark) Knochenschmerz und Wirbelbrüche. Schmerz erfassen, schonende Mobilisation.", "في الورم النقوي المتعدد (ورم البلازما في النخاع) ألم عظمي وكسور فقرات. تقييم الألم وتحريك لطيف.", MARROW]),
  pelvis: I(["Becken (Hüftbein)", "Os coxae", "الحوض (عظم الورك)",
    "Der Beckenkamm ist die häufigste Entnahmestelle für Knochenmark (Beckenkammbiopsie, Stammzellspende).", "عُرف الحرقفة أشيع موضع لأخذ نخاع العظم (خزعة وتبرع بالخلايا الجذعية).",
    "Stammzelltransplantation: Spender und Empfänger, Konditionierung, Neutropenie, Isolierung nach Hygieneplan.", "زرع الخلايا الجذعية: المتبرع والمتلقي والتهيئة ونقص العدلات والعزل حسب خطة النظافة.", MARROW]),
  skull: I(["Schädel", "Cranium", "الجمجمة",
    "Beim Erwachsenen enthalten die platten Schädelknochen Knochenmark (Diploe) mit Anteil an der Blutbildung.", "عند البالغ تحوي عظام الجمجمة المسطحة نخاعاً (الشعيرة) يسهم في تكوين الدم.",
    "Siehe Atlas Bewegungsapparat.", "انظر أطلس الجهاز الحركي.", MARROW]),
  "femur-humerus": I(["Oberschenkel- und Oberarmknochen", "Femur, Humerus", "عظما الفخذ والعضد",
    "Im Kindesalter enthalten die Röhrenknochen rotes Mark; beim Erwachsenen bleibt es in den oberen Enden, der Schaft enthält gelbes (Fett-)Mark.", "عند الأطفال تحوي العظام الطويلة نخاعاً أحمر؛ وعند البالغ يبقى في الأطراف العليا وفي الجسم نخاع أصفر (دهني).",
    "Knochenmarkpunktion auch am Schienbein bei Kindern. Frakturen können Fettembolien auslösen: Atemnot, Verwirrtheit, Hautpetechien.", "بزل النخاع عند الأطفال أيضاً في الظنبوب. الكسور قد تسبب انصمام دهني: ضيق نفس وتخليط ونمشات جلدية.", MARROW]),
  skin: I(["Hautkontur (Orientierung)", "Cutis", "حدود الجلد (للتوجيه)",
    "Die Haut ist die erste Abwehrbarriere. Hier nur als durchsichtige Körperform.", "الجلد أول حاجز دفاعي. وهنا يُعرض فقط كشكل شفاف للجسم.",
    "Siehe Atlas Haut.", "انظر أطلس الجلد.", undefined]),
};
export const BLOOD_ITEMS = items;

const R = (de: string, ar: string, en: string, fr: string, tr: string): [string, string, string, string, string] => [de, ar, en, fr, tr];
const St = (title: [string, string, string, string, string], text: [string, string], ids: string[], note?: [string, string]) => ({ title, text, ids, ...(note ? { note } : {}) });
const NOTE_BL: [string, string] = ["Blutzellen und Lymphknoten sind im 3D-Modell nicht enthalten (siehe Schemata).", "خلايا الدم والعقد اللمفاوية غير موجودة في النموذج (انظر الرسوم)."];

export const BLOOD_PATHS: AtlasPath[] = [
  {
    id: "haemato",
    title: R("Blutbildung: Orte im Körper", "تكوين الدم: مواضعه في الجسم", "Where blood is made", "Où le sang est formé", "Kan yapımı"),
    intro: ["Rotes Knochenmark bildet alle Blutzellen aus Stammzellen.", "النخاع الأحمر يصنع كل خلايا الدم من الخلايا الجذعية."],
    steps: [
      St(R("Platte Knochen", "العظام المسطحة", "Flat bones", "Os plats", "Yassı kemikler"), ["Beim Erwachsenen vor allem Brustbein, Rippen, Wirbel, Becken und Schädel.", "عند البالغ أساساً القص والأضلاع والفقرات والحوض والجمجمة."], ["sternum-ribs", "vertebral-column", "pelvis", "skull"], NOTE_BL),
      St(R("Röhrenknochen", "العظام الطويلة", "Long bones", "Os longs", "Uzun kemikler"), ["Im Kindesalter sind auch die Röhrenknochen blutbildend; später gelbes Mark.", "عند الأطفال تكوّن العظام الطويلة الدم أيضاً؛ وبعدئذ نخاع أصفر."], ["femur-humerus"]),
      St(R("Abbau in der Milz", "الهدم في الطحال", "Breakdown in the spleen", "Destruction dans la rate", "Dalakta yıkım"), ["Alte Erythrozyten (etwa 120 Tage) werden in der Milz und Leber abgebaut.", "تُهدم الكريات الحمراء القديمة (نحو 120 يوماً) في الطحال والكبد."], ["spleen", "splenic-artery", "splenic-vein", "portal-vein"]),
    ],
  },
  {
    id: "immune",
    title: R("Immunorgane", "الأعضاء المناعية", "Immune organs", "Organes immunitaires", "Bağışıklık organları"),
    intro: ["Primäre Organe (Reifung) und sekundäre Organe (Abwehr).", "أعضاء أولية (نضج) وثانوية (دفاع)."],
    steps: [
      St(R("Knochenmark", "نخاع العظم", "Bone marrow", "Moelle osseuse", "Kemik iliği"), ["Hier entstehen alle Immunzellen; B-Zellen reifen hier.", "تنشأ هنا كل الخلايا المناعية؛ وتنضج الخلايا البائية هنا."], ["pelvis", "sternum-ribs", "vertebral-column"]),
      St(R("Thymus", "الغدة الزعترية", "Thymus", "Thymus", "Timus"), ["T-Zellen reifen im Thymus.", "تنضج الخلايا التائية في الزعترية."], ["thymus"]),
      St(R("Milz", "الطحال", "Spleen", "Rate", "Dalak"), ["Filtert das Blut, aktiviert Abwehr gegen Bakterien im Blut.", "يرشح الدم وينشط الدفاع ضد الجراثيم في الدم."], ["spleen"]),
      St(R("Lymphknoten", "العقد اللمفاوية", "Lymph nodes", "Ganglions", "Lenf düğümleri"), ["Lymphknoten filtern die Lymphe und sind im Modell nicht enthalten; siehe Schema.", "تصفي العقد اللمفاوية اللمف وهي غير موجودة في النموذج؛ انظر الرسم."], ["spleen"], ["Lymphknoten fehlen im Modell.", "العقد اللمفاوية غير موجودة في النموذج."]),
    ],
  },
  {
    id: "circulation",
    title: R("Blutweg: große Gefäße", "مسار الدم: الأوعية الكبيرة", "Blood path: large vessels", "Trajet du sang", "Kan yolu"),
    intro: ["Arterien führen vom Herzen weg, Venen zum Herzen hin.", "الشرايين تبتعد عن القلب والأوردة تتجه إليه."],
    steps: [
      St(R("Aorta und Äste", "الأبهر وفروعه", "Aorta and branches", "Aorte et branches", "Aort ve dalları"), ["Von der Aorta zu Kopf, Armen, Rumpf und Beinen.", "من الأبهر إلى الرأس والذراعين والجذع والساقين."], ["aorta", "aortic-branches", "iliac-arteries"]),
      St(R("Milz und Pfortader", "الطحال والوريد البابي", "Spleen and portal vein", "Rate et veine porte", "Dalak ve portal ven"), ["Milzvene und Darmvenen vereinigen sich zur Pfortader und führen zur Leber.", "يتحد الوريد الطحالي وأوردة الأمعاء لتشكل الوريد البابي نحو الكبد."], ["splenic-artery", "splenic-vein", "portal-vein"]),
      St(R("Rückweg: Hohlvenen", "العودة: الأجوفان", "Return: vena cava", "Retour : veines caves", "Dönüş: vena kava"), ["Venen sammeln das Blut zurück zum rechten Herzen.", "تجمع الأوردة الدم إلى القلب الأيمن."], ["vena-cava", "brachiocephalic-veins", "iliac-veins"]),
    ],
  },
];

export const BLOOD_CARE = {
  diseases: ["Anämie (Eisenmangel, Vitamin-B12-Mangel, Blutungsanämie)", "Leukämie, Lymphom, Multiples Myelom", "Thrombose, Lungenembolie, Gerinnungsstörungen", "Sepsis, Neutropenie", "Allergie, Anaphylaxie, Autoimmunerkrankung", "HIV und andere Immunschwächen", "Milzruptur, Splenektomie"],
  symptoms: ["Blässe, Müdigkeit, Belastungsdyspnoe, Tachykardie", "Fieber, Schüttelfrost, Infekthäufung", "Blutungsneigung (Petechien, Hämatome, Nasenbluten)", "Lymphknotenschwellung, Nachtschweiß, Gewichtsverlust", "Juckreiz, Quaddeln, Atemnot, Blutdruckabfall (Allergie)", "Einseitig geschwollenes, schmerzendes Bein (Thrombose)"],
  diagnostics: ["Blutbild (Hb, Erythrozyten, Leukozyten, Thrombozyten) und Differenzialblutbild", "Gerinnung: Quick/INR, PTT", "CRP, Procalcitonin, Blutkulturen", "Ferritin, Vitamin B12, Folsäure", "Knochenmarkpunktion, Lymphknotenbiopsie", "Blutgruppenbestimmung, Kreuzprobe, AB0-Bedside-Test"],
  actions: ["Bluttransfusion: Patientenidentität, Präparat, Blutgruppe prüfen, Bedside-Test, Vitalzeichen vor, 15 Minuten nach Beginn und nach Transfusion, Reaktionen sofort melden", "Bei Transfusionsreaktion: Transfusion stoppen, Zugang mit NaCl offen halten, Arzt informieren, Präparat sichern", "Neutropenie: Schutzisolierung, Händehygiene, Infektzeichen kontrollieren, keine Rektaltemperatur", "Blutungsgefahr: Injektionen vermeiden oder lange komprimieren, weiche Zahnbürste, Sturzprophylaxe, Elektrorasierer", "Thromboseprophylaxe: Mobilisation, Kompression, Heparin nach Anordnung, ausreichend trinken", "Allergie: Auslöser meiden, Notfallset (Adrenalin-Autoinjektor) anleiten, bei Anaphylaxie Notruf", "Eiseneinnahme erklären: nüchtern, mit Vitamin C, dunkler Stuhl normal", "Splenektomierte: Impfungen, Notfallausweis, bei Fieber sofort ärztliche Hilfe"],
  monitoring: ["Vitalzeichen, Temperatur, Hautfarbe, Atmung", "Blutungszeichen, Petechien, Stuhl und Urin", "Laborwerte (Hb, Leukozyten, Thrombozyten, INR)", "Wunden, Zugänge, Einstichstellen", "Beinumfang, Schmerzen, Schwellung (Thrombose)", "Allergiezeichen: Hautausschlag, Atemnot, Blutdruck"],
  terms: [["Erythrozyten", "Rote Blutkörperchen, Sauerstofftransport"], ["Leukozyten", "Weiße Blutkörperchen, Abwehr"], ["Thrombozyten", "Blutplättchen, Gerinnung"], ["Hämoglobin (Hb)", "Roter Blutfarbstoff"], ["Hämatokrit", "Zellanteil am Blutvolumen"], ["Anämie", "Verminderter Hb-Wert"], ["Neutropenie", "Erniedrigte neutrophile Granulozyten, Infektionsgefahr"], ["Thrombozytopenie", "Zu wenig Thrombozyten, Blutungsgefahr"], ["Hämostase", "Blutstillung und Gerinnung"], ["Antikörper", "Eiweiße der B-Zellen gegen Antigene"], ["Anaphylaxie", "Lebensbedrohliche allergische Sofortreaktion"], ["Immunsuppression", "Gedämpfte Abwehr (Medikamente, Erkrankung)"]] as [string, string][],
  lessons: ["g7-blut-lymphom", "anaemie", "leukaemie-lymphom", "autoimmun-allergie", "thrombose", "sepsis", "lymph-erysipel"],
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string): AtlasQuiz => ({ q: [qd, qa], o, why: [wd, wa] });
export const BLOOD_QUIZ: AtlasQuiz[] = [
  Q("Wo werden beim Erwachsenen die meisten Blutzellen gebildet?", "أين تتكوّن معظم خلايا الدم عند البالغ؟", ["Im roten Knochenmark platter Knochen und Wirbel", "In der Milz", "Im Herzen", "In der Leber"],
    "Alle Blutzellen stammen aus Stammzellen im roten Knochenmark. Beim Erwachsenen liegt es in Brustbein, Rippen, Wirbeln, Becken, Schädel und den Enden großer Röhrenknochen. Die Milz baut alte Zellen ab. Richtige Antwort: rotes Knochenmark.",
    "كل خلايا الدم تنشأ من الخلايا الجذعية في النخاع الأحمر. وعند البالغ يوجد في القص والأضلاع والفقرات والحوض والجمجمة وأطراف العظام الطويلة. والطحال يهدم الخلايا القديمة. الإجابة الصحيحة: النخاع العظمي الأحمر."),
  Q("Wie lange leben Erythrozyten etwa?", "كم يعيش الكرية الحمراء تقريباً؟", ["Etwa 120 Tage", "Etwa 2 Tage", "Etwa 10 Jahre", "Etwa 3 Stunden"],
    "Erythrozyten leben etwa 120 Tage, dann werden sie in Milz und Leber abgebaut; das Eisen wird recycelt, das Häm zu Bilirubin. Thrombozyten leben etwa 8 bis 10 Tage, Granulozyten nur Stunden bis Tage. Richtige Antwort: etwa 120 Tage.",
    "تعيش الكريات الحمراء نحو 120 يوماً ثم تُهدم في الطحال والكبد؛ ويُعاد تدوير الحديد ويتحول الهيم إلى بيليروبين. والصفيحات تعيش نحو 8 إلى 10 أيام والحبيبيات ساعات إلى أيام. الإجابة الصحيحة: نحو 120 يوماً."),
  Q("Welche Aufgabe haben Thrombozyten?", "ما وظيفة الصفيحات الدموية؟", ["Blutgerinnung und Wundverschluss", "Sauerstofftransport", "Antikörperbildung", "Hormonbildung"],
    "Thrombozyten lagern sich an Gefäßverletzungen an, bilden den ersten Pfropf (primäre Hämostase) und aktivieren die Gerinnungskaskade. Bei zu wenigen (unter etwa 50 000 pro µl) droht Blutungsgefahr. Richtige Antwort: Blutgerinnung.",
    "تلتصق الصفيحات بجروح الأوعية وتشكل السدادة الأولى (الإرقاء الأولي) وتنشط سلسلة التخثر. وإذا قلّت كثيراً (أقل من نحو 50 ألفاً في الميكرولتر) يوجد خطر النزف. الإجابة الصحيحة: تخثر الدم."),
  Q("Was ist bei einer Bluttransfusion unbedingt zu tun?", "ما الذي يجب فعله بالتأكيد عند نقل الدم؟", ["Identität, Präparat und Blutgruppe prüfen, Bedside-Test, Vitalzeichen überwachen, Reaktionen sofort melden", "Das Präparat vorher im Kühlschrank mit anderen Infusionen mischen", "Die Transfusion ohne Beobachtung laufen lassen", "Nur Name des Patienten kurz abfragen"],
    "Transfusion ist ärztliche Maßnahme; die Pflege prüft Patientendaten gegen Begleitschein und Präparat, führt den AB0-Bedside-Test durch, kontrolliert Vitalzeichen vor, kurz nach Beginn (etwa 15 Minuten) und danach und beobachtet auf Reaktionen. Bei Fieber, Schüttelfrost, Atemnot, Rückenschmerz oder Blutdruckabfall sofort stoppen, Zugang mit NaCl offen halten, Arzt rufen. Richtige Antwort: Identität prüfen, Bedside-Test, überwachen.",
    "نقل الدم إجراء طبي؛ والتمريض يطابق بيانات المريض مع الوثيقة والكيس ويجري اختبار الفصيلة قرب السرير ويراقب العلامات الحيوية قبل البدء وبعد نحو 15 دقيقة وبعدها ويلاحظ التفاعلات. وعند الحمى أو القشعريرة أو ضيق النفس أو ألم الظهر أو هبوط الضغط يُوقف النقل فوراً ويُترك المدخل مفتوحاً بمحلول ملحي ويُستدعى الطبيب. الإجابة الصحيحة: مطابقة الهوية واختبار الفصيلة والمراقبة."),
  Q("Welche Blutgruppe ist der Universalspender für Erythrozytenkonzentrate?", "أي فصيلة دم هي المعطي العام لكريات الدم الحمراء؟", ["0 Rhesus-negativ", "AB Rhesus-positiv", "A Rhesus-positiv", "B Rhesus-positiv"],
    "Die Blutgruppe 0 trägt keine A- oder B-Antigene auf den Erythrozyten; Rhesus-negativ vermeidet eine Rhesus-Reaktion. Sie wird nur in Notfällen ungetestet gegeben. Der Empfänger AB kann fast alle Konzentrate erhalten. Richtige Antwort: 0 Rhesus-negativ.",
    "فصيلة O لا تحمل مستضدات A أو B على الكريات؛ وسالب الريسوس يتجنب تفاعل الريسوس. وتُعطى في الطوارئ فقط دون فحص كامل. والمتلقي AB يستطيع تلقي معظم الأكياس. الإجابة الصحيحة: O سالب الريسوس."),
  Q("Welche Zeichen sprechen für eine Anaphylaxie?", "أي علامات تدل على التأق (الصدمة التحسسية)؟", ["Nesselsucht, Schwellung, Atemnot, Blutdruckabfall nach Kontakt mit einem Auslöser", "Nur leichter Schnupfen", "Langsam ansteigende Temperatur über Tage", "Nur Juckreiz am Fuß"],
    "Anaphylaxie ist eine lebensbedrohliche Sofortreaktion (Minuten bis Stunden): Hautreaktion, Schwellung von Lippen und Rachen, Atemnot, Blutdruckabfall, Übelkeit. Notruf, Auslöser stoppen, flach lagern mit Beinen hoch, Adrenalin intramuskulär (Autoinjektor) nach Anordnung, Sauerstoff, überwachen. Richtige Antwort: Nesselsucht, Schwellung, Atemnot, Blutdruckabfall.",
    "التأق رد فعل فوري مهدد للحياة (دقائق إلى ساعات): تفاعل جلدي وتورم الشفتين والبلعوم وضيق نفس وهبوط ضغط وغثيان. استدعاء الطوارئ وإيقاف المسبب والاستلقاء مع رفع الساقين وأدرينالين عضلي (محقنة ذاتية) حسب الأمر وأكسجين ومراقبة. الإجابة الصحيحة: شرى وتورم وضيق نفس وهبوط ضغط."),
  Q("Was bedeutet Neutropenie für die Pflege?", "ماذا تعني قلة العدلات للتمريض؟", ["Erhöhtes Infektionsrisiko: Schutzmaßnahmen, Händehygiene, keine Rektaltemperatur", "Erhöhte Blutungsneigung", "Erhöhter Blutdruck", "Gewichtszunahme"],
    "Neutrophile Granulozyten sind die Hauptabwehr gegen Bakterien und Pilze. Bei Werten unter etwa 500 pro µl besteht hohes Infektrisiko (häufig nach Chemotherapie): Fieber ist ein Notfall, Isolierung nach Hygieneplan, Händedesinfektion, Mundpflege, keine rohen Lebensmittel, keine Rektaltemperatur. Richtige Antwort: erhöhtes Infektionsrisiko.",
    "الخلايا المتعادلة هي الدفاع الرئيسي ضد الجراثيم والفطريات. وعند أقل من نحو 500 في الميكرولتر يرتفع خطر العدوى (غالباً بعد العلاج الكيميائي): الحمى طارئة وعزل حسب الخطة وتعقيم اليدين والعناية بالفم وتجنب الأطعمة النيئة وعدم قياس الحرارة شرجياً. الإجابة الصحيحة: خطر عدوى مرتفع."),
  Q("Warum ist nach Milzentfernung eine Impfung gegen Pneumokokken, Meningokokken und Haemophilus wichtig?", "لماذا التطعيم ضد المكورات الرئوية والسحائية والهيموفيلس مهم بعد استئصال الطحال؟", ["Die Milz fehlt als Filter gegen bekapselte Bakterien: Gefahr einer schweren Sepsis (OPSI)", "Weil die Haut dünner wird", "Weil das Knochenmark ausfällt", "Weil die Leber mehr Blut bildet"],
    "Die Milz entfernt bekapselte Bakterien aus dem Blut. Fehlt sie, kann eine Infektion foudroyant verlaufen (Overwhelming Post-Splenectomy Infection). Impfungen vor oder nach der Operation, Notfallausweis und bei Fieber sofortige ärztliche Hilfe. Richtige Antwort: Filterfunktion fehlt, OPSI-Risiko.",
    "يزيل الطحال الجراثيم المغلفة من الدم. وعند غيابه قد تتطور العدوى بشكل خاطف (عدوى ما بعد استئصال الطحال المفرطة). التطعيم قبل العملية أو بعدها وبطاقة طوارئ ومساعدة طبية فورية عند الحمى. الإجابة الصحيحة: فقد وظيفة الترشيح وخطر العدوى الخاطفة."),
  Q("Welche Zellen bilden Antikörper?", "أي خلايا تصنع الأضداد؟", ["Plasmazellen (aus B-Lymphozyten)", "Erythrozyten", "Thrombozyten", "Mastzellen"],
    "B-Lymphozyten reifen nach Antigenkontakt zu Plasmazellen, die Antikörper (Immunglobuline) in großen Mengen bilden; Gedächtniszellen sorgen für schnelle Antwort bei erneutem Kontakt (Impfung). T-Zellen steuern und töten infizierte Zellen. Richtige Antwort: Plasmazellen aus B-Lymphozyten.",
    "تنضج الخلايا اللمفاوية البائية بعد التعرض للمستضد إلى خلايا بلازمية تصنع الأضداد (الغلوبولينات المناعية) بكميات كبيرة؛ وخلايا الذاكرة تؤمن استجابة سريعة عند التعرض مجدداً (التطعيم). والخلايا التائية تنظم وتقتل الخلايا المصابة. الإجابة الصحيحة: خلايا بلازمية من الخلايا البائية."),
  Q("Welcher Laborwert sinkt typischerweise bei Anämie?", "أي قيمة مخبرية تنخفض عادةً في فقر الدم؟", ["Hämoglobin", "Leukozyten", "Natrium", "Bilirubin"],
    "Anämie ist definiert als Hämoglobinmangel (Männer unter etwa 13 g/dl, Frauen unter etwa 12 g/dl; laborabhängig). Zeichen: Blässe, Müdigkeit, Belastungsdyspnoe, Tachykardie, Kopfschmerz. Pflege: Ursache klären (Eisen, B12, Blutung), Belastung dosieren, Sturzprophylaxe. Richtige Antwort: Hämoglobin.",
    "يُعرَّف فقر الدم بنقص الهيموغلوبين (الرجال أقل من نحو 13 غ/دل والنساء أقل من نحو 12 غ/دل؛ حسب المخبر). العلامات: شحوب وتعب وضيق نفس عند الجهد وتسرع القلب وصداع. التمريض: معرفة السبب (حديد وB12 ونزف) وتنظيم الجهد والوقاية من السقوط. الإجابة الصحيحة: الهيموغلوبين."),
  Q("Wie wird Eisen am besten eingenommen?", "كيف يُؤخذ الحديد بأفضل صورة؟", ["Nüchtern oder mit Vitamin C, nicht mit Milch oder Kaffee; dunkler Stuhl ist normal", "Mit Milch und Kaffee", "Gemeinsam mit Calciumtabletten", "Nur abends mit Tee"],
    "Eisen wird nüchtern oder mit Vitamin C (Orangensaft) besser aufgenommen; Milch, Calcium, Kaffee und Tee hemmen die Aufnahme. Nebenwirkungen: Übelkeit, Verstopfung, schwarzer Stuhl (harmlos, aber Blutungen abgrenzen). Richtige Antwort: nüchtern oder mit Vitamin C.",
    "يمتص الحديد أفضل على الريق أو مع فيتامين سي (عصير البرتقال)؛ والحليب والكالسيوم والقهوة والشاي تثبط الامتصاص. الآثار: غثيان وإمساك وبراز أسود (غير ضار لكن يجب التمييز عن النزف). الإجابة الصحيحة: على الريق أو مع فيتامين سي."),
  Q("Was ist die wichtigste Maßnahme zur Thromboseprophylaxe bei bettlägerigen Patienten?", "ما أهم إجراء للوقاية من الخثار عند طريحي الفراش؟", ["Mobilisation, Kompression, Heparin nach Anordnung, ausreichend trinken", "Beine dauerhaft angewinkelt lassen", "Weniger trinken", "Beine massieren"],
    "Die Virchow-Trias (Strömungsverlangsamung, Gefäßwandschaden, erhöhte Gerinnbarkeit) erklärt die Thrombose. Prophylaxe: Frühmobilisation, Bewegungsübungen, Kompressionsstrümpfe (Hautkontrolle), Heparin nach Anordnung, Hydrierung. Bei Verdacht (einseitige Beinschwellung, Spannungsschmerz) nicht massieren, Arzt informieren. Richtige Antwort: Mobilisation, Kompression, Heparin, Trinken.",
    "تفسر ثلاثية فيرشو (بطء الجريان وتلف جدار الوعاء وزيادة التخثر) الخثار. الوقاية: تحريك مبكر وتمارين وجوارب ضاغطة (مراقبة الجلد) وهيبارين حسب الأمر وترطيب. وعند الشك (تورم ساق واحدة وألم توتر) لا يُدلَّك ويُبلَّغ الطبيب. الإجابة الصحيحة: التحريك والضغط والهيبارين والشرب."),
];

export const BLOOD_CFG: AtlasConfig = {
  key: "blood",
  modelUrl: "/models/blood.glb",
  items: BLOOD_ITEMS,
  layers: BLOOD_LAYERS,
  layerOf: (id) => {
    if (id === "spleen" || id === "thymus") return "lymphoid";
    if (["aorta", "aortic-branches", "iliac-arteries", "splenic-artery"].includes(id)) return "artery";
    if (["vena-cava", "brachiocephalic-veins", "portal-vein", "splenic-vein", "iliac-veins"].includes(id)) return "vein";
    if (id === "skin") return "shell";
    return "marrow";
  },
  color: (id, layer) => {
    switch (layer) {
      case "lymphoid": return id === "spleen" ? 0x9a4a8a : 0xa890d8;
      case "artery": return 0xd8453a;
      case "vein": return id === "portal-vein" ? 0x8a4ad8 : 0x4a7ad8;
      case "marrow": return 0xe8d4b8;
      default: return 0xe8c4a8;
    }
  },
  shell: ["shell"],
  innerLabel: ["Haut durchsichtig", "الجلد شفاف", "Skin transparent", "Peau transparente", "Deri saydam"],
  careTitle: ["Pflege-Überblick Blut und Immunsystem", "نظرة تمريضية على الدم والمناعة", "Nursing overview: blood and immune system", "Aperçu infirmier : sang et immunité", "Hemşirelik özeti: kan ve bağışıklık"],
  target: [0, 0, 0], shellOpacity: 0.1,
  dist: 3.0, minDist: 0.2, maxDist: 5, clipRange: 0.9, explodeScale: 0.5,
  care: BLOOD_CARE,
  quiz: BLOOD_QUIZ,
  paths: BLOOD_PATHS,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Im Modell: Milz, Thymus, große Arterien und Venen, Knochen als Sitz des roten Knochenmarks. NICHT im Modell: Blutzellen, Plasma, Knochenmark selbst, Lymphknoten, Lymphgefäße, Mandeln, Antikörper (siehe Schemata, kein 3D-Modell). Referenzanatomie eines erwachsenen Mannes.", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). في النموذج: الطحال والزعترية والشرايين والأوردة الكبيرة والعظام كموضع للنخاع الأحمر. غير موجود: خلايا الدم والبلازما والنخاع نفسه والعقد اللمفاوية والأوعية اللمفاوية واللوزتان والأضداد (انظر المخططات وليست نموذجاً ثلاثي الأبعاد). تشريح مرجعي لرجل بالغ.", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (adapted). In the model: spleen, thymus, large vessels, bones as red-marrow sites. NOT in the model: blood cells, plasma, marrow itself, lymph nodes, tonsils, antibodies (see schematics).", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (adapté). Dans le modèle : rate, thymus, gros vaisseaux, os. Absent : cellules sanguines, moelle, ganglions (voir schémas).", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (uyarlandı). Modelde: dalak, timus, büyük damarlar, kemikler. Yok: kan hücreleri, ilik, lenf düğümleri (şemalara bakın)."],
};
