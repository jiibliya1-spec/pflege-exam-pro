/**
 * Atlas Atmung: Beschriftungen zu den 30 benannten Strukturen des BodyParts3D-Modells (public/models/resp.glb).
 * Schlüssel = Knotennamen im Modell (siehe tools/extract-resp.mjs). Namen nach Terminologia Anatomica; Texte in eigenen Worten.
 * Im Modell NICHT enthalten (BodyParts3D bildet sie nicht als Fläche ab): Lungenparenchym/Lungenoberfläche, Pleura, Alveolen, Rachen.
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, AtlasPath, AtlasQuiz } from "./atlasTypes";

export const RESP_LAYERS: AtlasLayer[] = [
  { id: "upper", de: "Nase und Kehlkopf (Gerüst)", ar: "الأنف والحنجرة (الهيكل)", en: "Nose and larynx (framework)", fr: "Nez et larynx (charpente)", tr: "Burun ve gırtlak (iskelet)" },
  { id: "airway", de: "Trachea und Hauptbronchien", ar: "القصبة الهوائية والقصبتان الرئيسيتان", en: "Trachea and main bronchi", fr: "Trachée et bronches souches", tr: "Trakea ve ana bronşlar" },
  { id: "bronchi", de: "Bronchialbaum der Lappen", ar: "الشجرة القصبية للفصوص", en: "Bronchial tree of the lobes", fr: "Arbre bronchique des lobes", tr: "Lobların bronş ağacı" },
  { id: "artery-main", de: "Truncus pulmonalis und Lungenarterien", ar: "الجذع الرئوي والشريانان الرئويان", en: "Pulmonary trunk and arteries", fr: "Tronc et artères pulmonaires", tr: "Pulmoner gövde ve arterler" },
  { id: "artery", de: "Arterien der Lappen", ar: "شرايين الفصوص", en: "Arteries of the lobes", fr: "Artères des lobes", tr: "Lobların arterleri" },
  { id: "vein-main", de: "Hauptstämme der Lungenvenen", ar: "الجذوع الرئيسية للأوردة الرئوية", en: "Main pulmonary veins", fr: "Veines pulmonaires principales", tr: "Ana pulmoner venler" },
  { id: "vein", de: "Venen der Lappen", ar: "أوردة الفصوص", en: "Veins of the lobes", fr: "Veines des lobes", tr: "Lobların venleri" },
  { id: "diaphragm", de: "Zwerchfell", ar: "الحجاب الحاجز", en: "Diaphragm", fr: "Diaphragme", tr: "Diyafram" },
];

type Lobe = { k: string; de: string; la: string; ar: string; seg: [string, string]; bro: [string, string]; art: [string, string]; vei: [string, string] };
const LOBES: Lobe[] = [
  {
    k: "ru", de: "rechten Oberlappen", la: "Lobus superior pulmonis dextri", ar: "الفص العلوي للرئة اليمنى",
    seg: ["apikal, posterior, anterior", "قمي وخلفي وأمامي"],
    bro: ["Der Oberlappenbronchus (Bronchus lobaris superior dexter) teilt sich in die Segmentbronchien apikal, posterior und anterior. Bei Rückenlage fließen Sekret und Aspiriertes gern in das hintere Segment. Die Tuberkulose beginnt bevorzugt in den Lungenspitzen.", "القصبة الفصية العلوية اليمنى تنقسم إلى قصبات قطعية قمية وخلفية وأمامية. وفي وضعية الاستلقاء على الظهر يتجه الإفراز والمُستنشَق بسهولة إلى القطعة الخلفية. ويبدأ السل غالباً في قمم الرئتين.", ],
    art: ["Äste der rechten Pulmonalarterie, die die Segmente des Oberlappens mit sauerstoffarmem Blut versorgen und den Bronchien folgen.", "فروع الشريان الرئوي الأيمن التي تزوّد قطع الفص العلوي بالدم قليل الأكسجين وتتبع القصبات."],
    vei: ["Segmentvenen, die sauerstoffreiches Blut aus dem Oberlappen sammeln und zu den oberen Lungenvenen leiten.", "أوردة قطعية تجمع الدم الغني بالأكسجين من الفص العلوي وتنقله إلى الأوردة الرئوية العلوية."],
  },
  {
    k: "rm", de: "rechten Mittellappen", la: "Lobus medius pulmonis dextri", ar: "الفص الأوسط للرئة اليمنى",
    seg: ["lateral und medial", "جانبي وإنسي"],
    bro: ["Der Mittellappen gibt es nur rechts; er hat zwei Segmente (lateral, medial). Sein Bronchus ist eng und von Lymphknoten umgeben, deshalb neigt er zu Atelektasen und wiederkehrenden Entzündungen (Mittellappensyndrom).", "الفص الأوسط موجود في اليمين فقط وله قطعتان (جانبية وإنسية). قصبته ضيقة ومحاطة بعقد لمفية، لذلك يميل إلى الانخماص والالتهابات المتكررة (متلازمة الفص الأوسط)."],
    art: ["Kleine Arterienäste für laterales und mediales Segment des Mittellappens.", "فروع شريانية صغيرة للقطعتين الجانبية والإنسية للفص الأوسط."],
    vei: ["Venen des lateralen und medialen Segments; sie führen das oxygenierte Blut zur rechten Lungenvene.", "أوردة القطعتين الجانبية والإنسية تنقل الدم المؤكسَج إلى الوريد الرئوي الأيمن."],
  },
  {
    k: "rl", de: "rechten Unterlappen", la: "Lobus inferior pulmonis dextri", ar: "الفص السفلي للرئة اليمنى",
    seg: ["superior sowie vier basale Segmente", "علوي وأربع قطع قاعدية"],
    bro: ["Der größte Lappen der rechten Lunge mit einem oberen und vier basalen Segmenten. Da der rechte Hauptbronchus kürzer, weiter und steiler verläuft, landen aspirierte Fremdkörper und Mageninhalt häufiger im rechten Unterlappen. Im Sitzen sind die basalen Segmente betroffen.", "أكبر فصوص الرئة اليمنى، له قطعة علوية وأربع قطع قاعدية. ولأن القصبة الرئيسية اليمنى أقصر وأعرض وأكثر انحداراً، تستقر الأجسام الغريبة ومحتوى المعدة المُستنشَق غالباً في الفص السفلي الأيمن. وفي وضعية الجلوس تتأثر القطع القاعدية."],
    art: ["Arterienäste für das obere und die vier basalen Segmente. Lungenembolien verlegen häufig Äste der Unterlappen.", "فروع شريانية للقطعة العلوية والقطع القاعدية الأربع. وكثيراً ما تسد الانصمامات الرئوية فروع الفصوص السفلية."],
    vei: ["Venen aus dem Unterlappen; sie vereinigen sich zur rechten unteren Lungenvene.", "أوردة من الفص السفلي تتحد لتكوّن الوريد الرئوي الأيمن السفلي."],
  },
  {
    k: "lu", de: "linken Oberlappen (mit Lingula)", la: "Lobus superior pulmonis sinistri (mit Lingula pulmonis)", ar: "الفص العلوي للرئة اليسرى (مع اللسينة)",
    seg: ["apikoposterior, anterior, Lingula (oben und unten)", "قمي خلفي وأمامي واللسينة (علوية وسفلية)"],
    bro: ["Links gibt es keinen Mittellappen; sein Gegenstück ist die Lingula (kleine Zunge) am unteren Ende des Oberlappens mit oberem und unterem Segment. Der Bronchus des linken Oberlappens teilt sich in einen oberen und einen unteren (lingulären) Ast.", "لا يوجد فص أوسط في اليسار، ونظيره اللسينة عند الطرف السفلي للفص العلوي بقطعتين علوية وسفلية. وتنقسم قصبة الفص العلوي الأيسر إلى فرع علوي وآخر سفلي (لساني)."],
    art: ["Arterienäste des linken Oberlappens einschließlich der Lingula.", "فروع شريانية للفص العلوي الأيسر بما فيها اللسينة."],
    vei: ["Venen des linken Oberlappens; sie münden in die linke obere Lungenvene.", "أوردة الفص العلوي الأيسر وتصب في الوريد الرئوي الأيسر العلوي."],
  },
  {
    k: "ll", de: "linken Unterlappen", la: "Lobus inferior pulmonis sinistri", ar: "الفص السفلي للرئة اليسرى",
    seg: ["superior sowie basale Segmente", "علوي وقطع قاعدية"],
    bro: ["Der linke Unterlappen hat ein oberes und mehrere basale Segmente. Weil der linke Hauptbronchus länger und flacher verläuft, werden hier Fremdkörper seltener aspiriert. Basale Anteile sind bei Bettlägerigen besonders anfällig für Atelektasen und Pneumonien.", "للفص السفلي الأيسر قطعة علوية وعدة قطع قاعدية. ولأن القصبة الرئيسية اليسرى أطول وأكثر أفقية، تُستنشق الأجسام الغريبة هنا أقل. والأجزاء القاعدية عرضة بشكل خاص للانخماص والالتهاب الرئوي لدى الملازمين للفراش."],
    art: ["Arterienäste für die Segmente des linken Unterlappens.", "فروع شريانية لقطع الفص السفلي الأيسر."],
    vei: ["Venen des linken Unterlappens; sie bilden die linke untere Lungenvene.", "أوردة الفص السفلي الأيسر وتكوّن الوريد الرئوي الأيسر السفلي."],
  },
];

const items: Record<string, AtlasItem> = {
  "nasal-bones": {
    de: "Nasenbeine", la: "Ossa nasalia", ar: "عظام الأنف",
    fn: ["Zwei kleine Knochen bilden den knöchernen Nasenrücken. Sie geben der äußeren Nase Halt, der Rest der Nase besteht aus Knorpel.", "عظمتان صغيرتان تكوّنان الجزء العظمي من جسر الأنف وتمنحان الأنف الخارجي دعامة، وبقية الأنف من الغضروف."],
    kl: ["Nasenbeinbrüche entstehen häufig durch Stürze oder Schläge: Schwellung, Schiefstand, Nasenbluten, behinderte Nasenatmung. Pflege: Kühlen, Kopf hochlagern, Blutung beobachten, bei Atembehinderung oder Liquorfluss sofort ärztlich abklären lassen.", "تحدث كسور عظام الأنف غالباً بسبب السقوط أو الضربات: تورم واعوجاج ونزيف أنفي وصعوبة التنفس من الأنف. التمريض: التبريد ورفع الرأس ومراقبة النزف، وإحالة الحالة فوراً للطبيب عند صعوبة التنفس أو خروج سائل دماغي شوكي."],
    note: ["Schleimhaut, Nasenhöhle als Hohlraum und Nasennebenhöhlen sind im Modell nicht enthalten; es zeigt nur das knöcherne und knorpelige Gerüst.", "الغشاء المخاطي وتجويف الأنف والجيوب الأنفية غير موجودة في النموذج؛ فهو يعرض الهيكل العظمي والغضروفي فقط."],
  },
  "nasal-cartilages": {
    de: "Nasenknorpel", la: "Cartilagines nasi (Cartilago septi nasi, Cartilagines nasi laterales)", ar: "غضاريف الأنف",
    fn: ["Knorpelplatten bilden Nasenscheidewand und Seitenwände der äußeren Nase. Sie halten die Nasenlöcher offen und lassen die Nasenspitze elastisch bleiben.", "صفائح غضروفية تكوّن الحاجز الأنفي والجدران الجانبية للأنف الخارجي. تُبقي فتحتي الأنف مفتوحتين وتحافظ على مرونة طرف الأنف."],
    kl: ["Eine Nasenscheidewandverbiegung (Septumdeviation) behindert die Nasenatmung. Wer nur durch den Mund atmet, trocknet die Schleimhaut aus. Pflege: Mundpflege, Befeuchtung, bei Nasensonden Druckstellen am Nasenflügel kontrollieren.", "انحراف الحاجز الأنفي يعيق التنفس من الأنف. ومن يتنفس من الفم فقط تجف مخاطيته. التمريض: العناية بالفم والترطيب، ومع الأنابيب الأنفية مراقبة قرح الضغط عند جناح الأنف."],
  },
  "inferior-nasal-conchae": {
    de: "Untere Nasenmuscheln", la: "Conchae nasales inferiores", ar: "القرينات الأنفية السفلية",
    fn: ["Knöcherne Leisten an der Seitenwand der Nasenhöhle, überzogen von Schleimhaut mit vielen Blutgefäßen. Sie vergrößern die Oberfläche, wärmen und befeuchten die Atemluft und fangen Staub.", "نتوءات عظمية على الجدار الجانبي لتجويف الأنف مغطاة بغشاء مخاطي غني بالأوعية. توسّع السطح وتُدفئ هواء التنفس وترطّبه وتحتجز الغبار."],
    kl: ["Die Schleimhaut schwillt bei Schnupfen oder Allergie an und verengt den Nasengang. Nasenbluten entsteht oft im vorderen Bereich der Scheidewand. Pflege: Nasenspray nach Anordnung, Kopf nach vorn, Nasenflügel zusammendrücken, Kältereiz im Nacken.", "يتورم الغشاء المخاطي عند الزكام أو الحساسية ويضيّق ممر الأنف. وكثيراً ما يحدث النزف الأنفي في الجزء الأمامي من الحاجز. التمريض: بخاخ الأنف بأمر الطبيب، إمالة الرأس للأمام، الضغط على جناحي الأنف، تبريد القفا."],
    note: ["Im Modell ist nur die untere Nasenmuschel enthalten; mittlere und obere Muschel fehlen.", "النموذج يحتوي القرينة السفلية فقط؛ القرينتان الوسطى والعليا غير موجودتين."],
  },
  "epiglottis": {
    de: "Kehldeckel", la: "Epiglottis", ar: "لسان المزمار",
    fn: ["Elastische Knorpelklappe über dem Kehlkopfeingang. Beim Schlucken senkt sie sich und schützt die Atemwege vor Speise und Flüssigkeit.", "صمام غضروفي مرن فوق مدخل الحنجرة. ينخفض أثناء البلع ويحمي المجرى التنفسي من الطعام والسوائل."],
    kl: ["Bei Schluckstörungen (z. B. nach Schlaganfall) gelangt Nahrung in die Luftröhre: Aspiration mit Aspirationspneumonie. Pflege: aufrechte Haltung beim Essen, angepasste Kost, Schlucktest, Mundhygiene. Die Epiglottitis ist ein Notfall mit Atemnot, Speichelfluss und kloßiger Sprache.", "عند اضطراب البلع (مثلاً بعد السكتة الدماغية) يدخل الطعام إلى القصبة الهوائية: استنشاق والتهاب رئوي استنشاقي. التمريض: وضعية جالسة أثناء الأكل وغذاء مناسب واختبار البلع ونظافة الفم. أما التهاب لسان المزمار فهو حالة طارئة مع ضيق تنفس وسيلان لعاب وصوت مكتوم."],
  },
  "thyroid-cartilage": {
    de: "Schildknorpel", la: "Cartilago thyroidea", ar: "الغضروف الدرقي",
    fn: ["Größter Kehlkopfknorpel; sein vorderer Vorsprung ist der Adamsapfel (Prominentia laryngea). Er schützt die Stimmlippen und dient als Ansatz für Kehlkopfmuskeln.", "أكبر غضروف في الحنجرة وبروزه الأمامي هو تفاحة آدم. يحمي الحبال الصوتية ويثبّت عضلات الحنجرة."],
    kl: ["Orientierung am Hals: Darunter folgt der Ringknorpel, dann die Trachea (wichtig bei Tracheotomie und Notfallzugängen). Bei Tracheostoma-Pflege ist die Lage der Kehlkopfknorpel Orientierungshilfe.", "للاسترشاد في العنق: تحته الغضروف الحلقي ثم القصبة الهوائية (مهم في فتح القصبة والمنافذ الطارئة). وعند العناية بفغر القصبة تساعد معرفة موضع غضاريف الحنجرة."],
  },
  "cricoid-cartilage": {
    de: "Ringknorpel", la: "Cartilago cricoidea", ar: "الغضروف الحلقي",
    fn: ["Einziger vollständig ringförmiger Knorpel der Atemwege, unterhalb des Schildknorpels. Er verbindet Kehlkopf und Trachea und hält die Atemwege offen.", "الغضروف الوحيد الحلقي بالكامل في الطرق التنفسية، تحت الغضروف الدرقي. يربط الحنجرة بالقصبة الهوائية ويحافظ على انفتاح المجرى."],
    kl: ["Enge Stelle der Atemwege bei Kindern. Beim Intubieren sind Tubusgröße und Cuffdruck wichtig, damit keine Schleimhautschäden und Stenosen entstehen. Pflege: Cuffdruck regelmäßig kontrollieren (meist 20–30 cmH2O).", "موضع ضيق في المجرى التنفسي عند الأطفال. وعند التنبيب يهم حجم الأنبوب وضغط الكفة لتفادي تلف المخاطية والتضيقات. التمريض: فحص ضغط الكفة بانتظام (غالباً 20 إلى 30 سم ماء)."],
  },
  "trachea": {
    de: "Luftröhre", la: "Trachea", ar: "القصبة الهوائية",
    fn: ["Etwa 10 bis 12 cm langes Rohr aus 16 bis 20 hufeisenförmigen Knorpelspangen, die hinten durch Muskel- und Bindegewebe geschlossen sind. Flimmerepithel transportiert Schleim und Staub nach oben. Sie teilt sich an der Carina in die Hauptbronchien.", "أنبوب طوله نحو 10 إلى 12 سم من 16 إلى 20 حلقة غضروفية على شكل حدوة حصان مغلقة من الخلف بنسيج عضلي وضام. يحرك الظهار الهدبي المخاط والغبار نحو الأعلى. وتنقسم عند الجؤجؤ (Carina) إلى القصبتين الرئيسيتين."],
    kl: ["Pflege bei Tracheostoma und Beatmung: sterile Absaugung nach Bedarf, Sekret beurteilen (Farbe, Menge, Konsistenz), Befeuchtung, Stomapflege und Kanülenwechsel nach Standard. Notfall: Atemnot mit Stridor, bläuliche Haut, Unruhe. Bei Fremdkörper Heimlich-Handgriff beziehungsweise Rückenschläge.", "التمريض عند فغر القصبة والتهوية: شفط معقّم عند الحاجة وتقييم الإفراز (اللون والكمية والقوام) والترطيب والعناية بالفغرة وتغيير القنية حسب المعيار. الطوارئ: ضيق تنفس مع صرير وزرقة وقلق. وعند جسم غريب مناورة هايمليك أو الضربات على الظهر."],
  },
  "right-main-bronchus": {
    de: "Rechter Hauptbronchus", la: "Bronchus principalis dexter", ar: "القصبة الرئيسية اليمنى",
    fn: ["Kürzer (etwa 2 bis 3 cm), weiter und steiler als der linke. Er teilt sich in drei Lappenbronchien (Ober-, Mittel-, Unterlappen) und führt Luft zur rechten Lunge.", "أقصر (نحو 2 إلى 3 سم) وأعرض وأكثر انحداراً من الأيسر. ينقسم إلى ثلاث قصبات فصية (علوي وأوسط وسفلي) وينقل الهواء إلى الرئة اليمنى."],
    kl: ["Aspirierte Fremdkörper und Mageninhalt gelangen deshalb häufiger nach rechts. Bei einem zu tief eingeführten Beatmungstubus wird oft nur die rechte Lunge belüftet (einseitige Intubation): Auskultation seitengleich prüfen, Tubuslage dokumentieren.", "لذلك تصل الأجسام الغريبة ومحتوى المعدة غالباً إلى اليمين. وإذا أُدخل أنبوب التنفس عميقاً جداً تُهوّى الرئة اليمنى فقط (تنبيب أحادي الجانب): فحص الإصغاء على الجانبين وتوثيق موضع الأنبوب."],
  },
  "left-main-bronchus": {
    de: "Linker Hauptbronchus", la: "Bronchus principalis sinister", ar: "القصبة الرئيسية اليسرى",
    fn: ["Länger (etwa 5 cm) und flacher als der rechte; er verläuft unter dem Aortenbogen und vor der Speiseröhre. Er teilt sich in zwei Lappenbronchien (Ober- und Unterlappen).", "أطول (نحو 5 سم) وأكثر أفقية من الأيمن، ويمر تحت قوس الأبهر وأمام المريء. ينقسم إلى قصبتين فصيتين (علوية وسفلية)."],
    kl: ["Enge Lage zu Aortenbogen und Herz: Aneurysmen oder ein vergrößerter linker Vorhof können ihn einengen (Husten, Atemnot). Bei der Bronchoskopie wird dieser Verlauf beachtet.", "قربه من قوس الأبهر والقلب: قد تضيّقه أم الدم أو تضخم الأذين الأيسر (سعال وضيق تنفس). ويُراعى مساره عند تنظير القصبات."],
  },
  "pulmonary-trunk": {
    de: "Lungenschlagaderstamm", la: "Truncus pulmonalis", ar: "الجذع الرئوي",
    fn: ["Gefäß, das aus der rechten Herzkammer entspringt und sauerstoffarmes Blut zur Lunge bringt. Es teilt sich in die rechte und linke Lungenarterie.", "وعاء ينشأ من البطين الأيمن وينقل الدم قليل الأكسجين إلى الرئتين، وينقسم إلى الشريانين الرئويين الأيمن والأيسر."],
    kl: ["Ein erhöhter Druck im Lungenkreislauf (pulmonale Hypertonie) überlastet die rechte Kammer (Cor pulmonale). Zeichen: Belastungsatemnot, Beinödeme, gestaute Halsvenen. Pflege: Gewicht, Ödeme, Atmung, SpO2 beobachten.", "ارتفاع الضغط في الدورة الرئوية (فرط ضغط الدم الرئوي) يرهق البطين الأيمن (القلب الرئوي). العلامات: ضيق تنفس عند الجهد ووذمة الساقين واحتقان أوردة العنق. التمريض: مراقبة الوزن والوذمات والتنفس وتشبع الأكسجين."],
    note: ["Die Herzkammer ist in diesem Modell nicht enthalten; sie ist im Herz-Atlas zu sehen.", "حجرة القلب غير موجودة في هذا النموذج؛ يمكن رؤيتها في أطلس القلب."],
  },
  "right-pulmonary-artery": {
    de: "Rechte Lungenarterie", la: "Arteria pulmonalis dextra", ar: "الشريان الرئوي الأيمن",
    fn: ["Leitet sauerstoffarmes Blut zur rechten Lunge und teilt sich dort in Lappen- und Segmentarterien. Sie verläuft hinter der Aorta ascendens.", "ينقل الدم قليل الأكسجين إلى الرئة اليمنى وينقسم فيها إلى شرايين فصية وقطعية. ويمر خلف الأبهر الصاعد."],
    kl: ["Hier und in den Folgeästen bleiben Thromben (aus Bein- oder Beckenvenen) hängen: Lungenembolie mit plötzlicher Atemnot, Tachykardie, Brustschmerz beim Atmen und Husten, evtl. Bluthusten. Notruf, Oberkörper hoch, Ruhe, Sauerstoff nach Anordnung.", "تعلق هنا وفي فروعها الخثرات القادمة من أوردة الساق أو الحوض: انصمام رئوي مع ضيق تنفس مفاجئ وتسرع القلب وألم صدر عند التنفس والسعال وربما نفث الدم. طلب الإسعاف ورفع الجزء العلوي والراحة والأكسجين بأمر الطبيب."],
  },
  "left-pulmonary-artery": {
    de: "Linke Lungenarterie", la: "Arteria pulmonalis sinistra", ar: "الشريان الرئوي الأيسر",
    fn: ["Bringt sauerstoffarmes Blut zur linken Lunge. Sie zieht über den linken Hauptbronchus nach hinten.", "ينقل الدم قليل الأكسجين إلى الرئة اليسرى ويمر فوق القصبة الرئيسية اليسرى نحو الخلف."],
    kl: ["Wie rechts kann ein Embolus die Strombahn verlegen; die Sauerstoffsättigung sinkt, die rechte Herzkammer wird belastet. Diagnostik: CT-Angiographie, D-Dimere, Echokardiographie. Pflege: SpO2, Puls, Blutdruck engmaschig, Blutungszeichen unter Antikoagulation.", "كما في اليمين قد يسد الصمّ مجرى الدم فينخفض تشبع الأكسجين ويُرهق البطين الأيمن. التشخيص: التصوير الطبقي الوعائي وD-dimer وتخطيط صدى القلب. التمريض: مراقبة SpO2 والنبض والضغط عن قرب وعلامات النزف أثناء مضادات التخثر."],
  },
  "right-pulmonary-veins": {
    de: "Rechte Lungenvenen", la: "Venae pulmonales dextrae (superior, inferior)", ar: "الأوردة الرئوية اليمنى",
    fn: ["Zwei Venen (oben und unten) bringen das in der Lunge mit Sauerstoff angereicherte Blut zum linken Vorhof. Lungenvenen sind die einzigen Venen, die sauerstoffreiches Blut führen.", "وريدان (علوي وسفلي) ينقلان الدم المشبع بالأكسجين من الرئة إلى الأذين الأيسر. الأوردة الرئوية هي الأوردة الوحيدة التي تحمل دماً غنياً بالأكسجين."],
    kl: ["Staut sich das Blut vor einer schwachen linken Herzhälfte zurück, entsteht eine Lungenstauung bis zum Lungenödem. Pflege: Atmung, Rasselgeräusche, schaumiger Auswurf, Oberkörperhochlagerung, Flüssigkeitsbilanz, Gewicht.", "إذا ارتدّ الدم أمام قلب أيسر ضعيف يحدث احتقان رئوي حتى الوذمة الرئوية. التمريض: مراقبة التنفس والخراخر والبلغم الرغوي ورفع الجزء العلوي وموازنة السوائل والوزن."],
    note: ["Der linke Vorhof gehört nicht zu diesem Modell (siehe Herz-Atlas).", "الأذين الأيسر ليس جزءاً من هذا النموذج (انظر أطلس القلب)."],
  },
  "left-pulmonary-veins": {
    de: "Linke Lungenvenen", la: "Venae pulmonales sinistrae (superior, inferior)", ar: "الأوردة الرئوية اليسرى",
    fn: ["Führen das sauerstoffreiche Blut aus der linken Lunge in den linken Vorhof.", "تنقل الدم الغني بالأكسجين من الرئة اليسرى إلى الأذين الأيسر."],
    kl: ["Bei Vorhofflimmern liegt der Auslöser häufig an den Mündungen der Lungenvenen; die Katheterablation isoliert sie. Pflege vor und nach dem Eingriff: Puls, Blutdruck, Punktionsstelle, Rhythmuskontrolle.", "في الرجفان الأذيني يقع المحفّز غالباً عند فوهات الأوردة الرئوية، ويقوم الكيّ بالقسطرة بعزلها. التمريض قبل التدخل وبعده: النبض والضغط وموضع البزل ومراقبة النظم."],
  },
  "diaphragm": {
    de: "Zwerchfell", la: "Diaphragma", ar: "الحجاب الحاجز",
    fn: ["Kuppelförmiger Hauptatemmuskel zwischen Brust- und Bauchraum. Bei der Einatmung zieht er sich zusammen, flacht ab und senkt sich: Der Brustraum wird größer, es entsteht Unterdruck, Luft strömt ein. Die Ausatmung geschieht in Ruhe passiv durch Erschlaffen und elastische Rückstellkräfte. Durch das Zwerchfell ziehen Speiseröhre, Aorta und untere Hohlvene.", "العضلة التنفسية الرئيسية على شكل قبة بين الصدر والبطن. عند الشهيق تنقبض وتتسطح وتنخفض: يتسع الصدر ويحدث ضغط سلبي فيدخل الهواء. والزفير في الراحة سلبي بارتخاء العضلة وقوى الارتداد المرنة. ويمر عبر الحجاب المريء والأبهر والوريد الأجوف السفلي."],
    kl: ["Zwerchfellhochstand oder Lähmung (z. B. durch Phrenikusschädigung) schränkt die Atmung ein. Bauchlage und Aszites erschweren die Zwerchfellatmung. Der Schluckauf (Singultus) ist ein Krampf des Zwerchfells. Pflege: Oberkörperhochlagerung, Bauchatmung üben (Kontaktatmung), Atemgymnastik, Blähungen und Verstopfung vermeiden.", "ارتفاع الحجاب أو شلله (مثلاً بتلف العصب الحجابي) يحد من التنفس. والاستلقاء على البطن والاستسقاء يصعّبان التنفس الحجابي. والفواق تشنج في الحجاب. التمريض: رفع الجزء العلوي وتدريب التنفس البطني (التنفس باللمس) والتمارين التنفسية وتجنب الانتفاخ والإمساك."],
    note: ["Die Zwerchfellöffnungen für Speiseröhre, Aorta und Hohlvene sind im Modell als Teil der Muskelplatte nicht einzeln beschriftet.", "فتحات الحجاب للمريء والأبهر والأجوف ليست موسومة منفردة في النموذج."],
  },
};

for (const l of LOBES) {
  items[`${l.k}-bronchi`] = {
    de: `Bronchialbaum des ${l.de}`, la: `Arbor bronchialis lobi (${l.la})`, ar: `الشجرة القصبية لـ${l.ar}`,
    fn: [`Verzweigt sich vom Lappenbronchus in Segment- und Subsegmentbronchien (Segmente: ${l.seg[0]}) und verteilt die Atemluft in der Tiefe der Lunge. Die Wand enthält Knorpel, Schleimhaut mit Flimmerhärchen und glatte Muskulatur; die Bronchiolen ganz am Ende haben keinen Knorpel mehr.`, `تتفرع من القصبة الفصية إلى قصبات قطعية وتحت قطعية (القطع: ${l.seg[1]}) وتوزع هواء التنفس في عمق الرئة. يحتوي جدارها على غضروف وغشاء مخاطي بأهداب وعضلات ملساء، أما القصيبات في النهاية فلا غضروف فيها.`],
    kl: l.bro,
    note: ["Im Modell sind die Bronchien bis zu den Segment- und Subsegmentästen dargestellt. Bronchiolen und Alveolen sind für das Modell zu fein.", "يعرض النموذج القصبات حتى الفروع القطعية وتحت القطعية. أما القصيبات والحويصلات فأدق من أن يعرضها."],
  };
  items[`${l.k}-arteries`] = {
    de: `Lungenarterien des ${l.de}`, la: `Arteriae pulmonales lobi (${l.la})`, ar: `شرايين ${l.ar}`,
    fn: [`${l.art[0]} Sie führen sauerstoffarmes Blut zu den Kapillaren an den Alveolen, wo der Gasaustausch stattfindet.`, `${l.art[1]} تنقل الدم قليل الأكسجين إلى الشعيرات عند الحويصلات حيث يتم تبادل الغازات.`],
    kl: ["Verschluss von Segmentarterien durch einen Embolus kann einen keilförmigen Lungeninfarkt mit pleuritischem Schmerz und Bluthusten verursachen. Beobachten: plötzliche Atemnot, Tachypnoe, Tachykardie, SpO2-Abfall, Angst. Sofort ärztlich informieren.", "انسداد الشرايين القطعية بصمّة قد يسبب احتشاءً رئوياً إسفينياً مع ألم جنبي ونفث دم. المراقبة: ضيق تنفس مفاجئ وتسرع التنفس والقلب وهبوط SpO2 وقلق. إبلاغ الطبيب فوراً."],
    note: ["Die Kapillaren zwischen Arterien und Venen sind im Modell nicht enthalten (sie sind mikroskopisch klein); der Gasaustausch wird im Schema gezeigt.", "الشعيرات بين الشرايين والأوردة غير موجودة في النموذج (مجهرية)؛ ويُعرض تبادل الغازات في الرسم التخطيطي."],
  };
  items[`${l.k}-veins`] = {
    de: `Lungenvenen des ${l.de}`, la: `Venae pulmonales lobi (${l.la})`, ar: `أوردة ${l.ar}`,
    fn: [`${l.vei[0]} Sie verlaufen zwischen den Segmenten (intersegmental), nicht neben den Bronchien wie die Arterien.`, `${l.vei[1]} وهي تسير بين القطع (بين قطعية) وليس بجانب القصبات كالشرايين.`],
    kl: ["Bei Linksherzinsuffizienz oder Mitralklappenfehlern staut sich das Blut in diese Venen zurück: Atemnot, Husten, Rasselgeräusche, im Extremfall Lungenödem mit schaumigem Auswurf. Pflege: Oberkörper hoch, Beine tief, Notruf, Sauerstoff, Flüssigkeitsbilanz.", "في قصور القلب الأيسر أو عيوب الصمام التاجي يرتد الدم إلى هذه الأوردة: ضيق تنفس وسعال وخراخر وفي الحالة الشديدة وذمة رئوية مع بلغم رغوي. التمريض: رفع الجزء العلوي وإنزال الساقين وطلب الإسعاف والأكسجين وموازنة السوائل."],
  };
}
export const RESP_ITEMS = items;

const ids = (k: string[]) => k.flatMap((x) => [`${x}-bronchi`, `${x}-arteries`, `${x}-veins`]);
const allBronchi = ["ru", "rm", "rl", "lu", "ll"].map((k) => `${k}-bronchi`);
const allArteries = ["ru", "rm", "rl", "lu", "ll"].map((k) => `${k}-arteries`);
const allVeins = ["ru", "rm", "rl", "lu", "ll"].map((k) => `${k}-veins`);
const R = (de: string, ar: string, en: string, fr: string, tr: string): [string, string, string, string, string] => [de, ar, en, fr, tr];

export const RESP_PATHS: AtlasPath[] = [
  {
    id: "air",
    title: R("Weg der Atemluft", "مسار هواء التنفس", "Path of inhaled air", "Trajet de l'air inspiré", "Soluk yolu"),
    intro: ["Von der Nase bis zu den Alveolen: acht Stationen. Schritte anklicken oder „Abspielen“ wählen.", "من الأنف إلى الحويصلات: ثماني محطات. اضغط على الخطوات أو اختر «تشغيل»."],
    steps: [
      { title: R("Nasenhöhle", "تجويف الأنف", "Nasal cavity", "Cavité nasale", "Burun boşluğu"), text: ["Die Luft strömt durch die Nasenlöcher ein. An den Nasenmuscheln wird sie erwärmt, befeuchtet und von Staub gereinigt (Schleim, Flimmerhärchen).", "يدخل الهواء من فتحتي الأنف. وعند القرينات يُدفأ ويُرطّب وينقى من الغبار (المخاط والأهداب)."], ids: ["nasal-bones", "nasal-cartilages", "inferior-nasal-conchae"], note: ["Schleimhaut und Nasennebenhöhlen sind nicht abgebildet; zu sehen ist das Gerüst.", "الغشاء المخاطي والجيوب الأنفية غير معروضة؛ المعروض هو الهيكل."] },
      { title: R("Rachen", "البلعوم", "Pharynx", "Pharynx", "Farenks"), text: ["Im Rachen kreuzen sich Luft- und Speiseweg. Der Kehldeckel entscheidet beim Schlucken, wohin der Bissen geht.", "في البلعوم يتقاطع طريقا الهواء والطعام. ولسان المزمار يقرر أثناء البلع إلى أين يذهب اللقمة."], ids: ["epiglottis"], note: ["Der Rachen als Hohlorgan ist im Modell nicht enthalten.", "البلعوم كعضو مجوّف غير موجود في النموذج."] },
      { title: R("Kehlkopf", "الحنجرة", "Larynx", "Larynx", "Gırtlak"), text: ["Der Kehlkopf mit Schild- und Ringknorpel sichert den Atemweg und enthält die Stimmlippen. Der Kehldeckel verschließt ihn beim Schlucken.", "الحنجرة بغضروفيها الدرقي والحلقي تؤمّن المجرى الهوائي وتحتوي على الحبال الصوتية، ويغلقها لسان المزمار أثناء البلع."], ids: ["epiglottis", "thyroid-cartilage", "cricoid-cartilage"] },
      { title: R("Luftröhre", "القصبة الهوائية", "Trachea", "Trachée", "Trakea"), text: ["Die Trachea hält ihr Lumen durch Knorpelspangen offen. Flimmerhärchen transportieren Schleim und Staub Richtung Rachen (mukoziliäre Clearance).", "تُبقي القصبة الهوائية تجويفها مفتوحاً بحلقاتها الغضروفية، وتنقل الأهداب المخاط والغبار نحو البلعوم (التنظيف المخاطي الهدبي)."], ids: ["trachea"] },
      { title: R("Hauptbronchien", "القصبتان الرئيسيتان", "Main bronchi", "Bronches souches", "Ana bronşlar"), text: ["An der Carina teilt sich die Trachea in den rechten und linken Hauptbronchus. Der rechte ist kürzer, weiter und steiler.", "عند الجؤجؤ تنقسم القصبة الهوائية إلى القصبتين الرئيسيتين اليمنى واليسرى. والأيمن أقصر وأعرض وأكثر انحداراً."], ids: ["right-main-bronchus", "left-main-bronchus"] },
      { title: R("Lappen- und Segmentbronchien", "القصبات الفصية والقطعية", "Lobar and segmental bronchi", "Bronches lobaires et segmentaires", "Lob ve segment bronşları"), text: ["Rechts drei, links zwei Lappenbronchien, die sich in je 8 bis 10 Segmentbronchien aufteilen. Jedes Segment hat seinen eigenen Bronchus und seine eigene Arterie.", "ثلاث قصبات فصية في اليمين واثنتان في اليسار، تنقسم كل منها إلى 8 إلى 10 قصبات قطعية. ولكل قطعة قصبتها وشريانها."], ids: allBronchi },
      { title: R("Bronchiolen", "القصيبات", "Bronchioles", "Bronchioles", "Bronşiyoller"), text: ["Die Bronchiolen sind unter etwa 1 mm dick, haben keinen Knorpel mehr, aber glatte Muskulatur. Bei Asthma verkrampft sie, die Schleimhaut schwillt an: Giemen und Atemnot.", "القصيبات أقل من نحو 1 مم سماكة ولا غضروف فيها لكن فيها عضلات ملساء. وفي الربو تتشنج وتتورم المخاطية: صفير وضيق تنفس."], ids: allBronchi, note: ["Terminale Bronchiolen sind im Modell zu fein; gezeigt sind die größeren Äste.", "القصيبات الطرفية أدق من أن يعرضها النموذج؛ المعروض هو الفروع الأكبر."] },
      { title: R("Alveolen", "الحويصلات الهوائية", "Alveoli", "Alvéoles", "Alveoller"), text: ["Etwa 300 bis 400 Millionen Lungenbläschen bieten eine Austauschfläche von 70 bis 100 m². Hier gelangt Sauerstoff ins Blut und Kohlendioxid in die Ausatemluft. Das Schema „Gasaustausch“ unten zeigt es Schritt für Schritt.", "نحو 300 إلى 400 مليون حويصلة توفر مساحة تبادل بين 70 و100 متر مربع. هنا يدخل الأكسجين إلى الدم ويخرج ثاني أكسيد الكربون مع هواء الزفير. ويعرض الرسم «تبادل الغازات» أدناه ذلك خطوة بخطوة."], ids: allBronchi, note: ["Alveolen sind mikroskopisch klein und nicht als 3D-Modell vorhanden; siehe interaktives Schema.", "الحويصلات مجهرية وغير متوفرة كنموذج ثلاثي الأبعاد؛ انظر الرسم التفاعلي."] },
    ],
  },
  {
    id: "blood",
    title: R("Blutkreislauf in der Lunge", "الدورة الدموية في الرئة", "Blood flow through the lung", "Circulation dans le poumon", "Akciğerde kan dolaşımı"),
    intro: ["Der kleine Kreislauf: vom Herzen zur Lunge und zurück. Sauerstoffarm = dunkel, sauerstoffreich = hell.", "الدورة الصغرى: من القلب إلى الرئة والعودة. قليل الأكسجين = داكن، غني بالأكسجين = فاتح."],
    steps: [
      { title: R("Lungenschlagaderstamm", "الجذع الرئوي", "Pulmonary trunk", "Tronc pulmonaire", "Pulmoner gövde"), text: ["Die rechte Herzkammer pumpt sauerstoffarmes Blut in den Truncus pulmonalis. Die Pulmonalklappe verhindert den Rückfluss.", "يضخ البطين الأيمن الدم قليل الأكسجين إلى الجذع الرئوي ويمنع الصمام الرئوي رجوعه."], ids: ["pulmonary-trunk"], note: ["Das Herz ist in diesem Modell nicht enthalten (siehe Herz-Atlas).", "القلب غير موجود في هذا النموذج (انظر أطلس القلب)."] },
      { title: R("Rechte und linke Lungenarterie", "الشريانان الرئويان الأيمن والأيسر", "Right and left pulmonary artery", "Artères pulmonaires droite et gauche", "Sağ ve sol pulmoner arter"), text: ["Der Stamm teilt sich in die rechte und linke Lungenarterie; sie sind die einzigen Arterien des Körpers, die sauerstoffarmes Blut führen.", "ينقسم الجذع إلى الشريانين الرئويين الأيمن والأيسر؛ وهما الشريانان الوحيدان في الجسم اللذان يحملان دماً قليل الأكسجين."], ids: ["right-pulmonary-artery", "left-pulmonary-artery"] },
      { title: R("Lappen- und Segmentarterien", "الشرايين الفصية والقطعية", "Lobar and segmental arteries", "Artères lobaires et segmentaires", "Lob ve segment arterleri"), text: ["Die Arterien folgen den Bronchien bis in die Segmente und werden immer feiner, bis sie in Kapillaren übergehen.", "تتبع الشرايين القصبات حتى القطع وتصبح أدق فأدق إلى أن تنتهي بشعيرات."], ids: allArteries },
      { title: R("Kapillaren an den Alveolen", "الشعيرات عند الحويصلات", "Capillaries at the alveoli", "Capillaires alvéolaires", "Alveol kılcalları"), text: ["Jede Alveole ist von einem dichten Kapillarnetz umhüllt. Hier gibt das Blut Kohlendioxid ab und nimmt Sauerstoff auf (Gasaustausch). Das Blut wird hellrot.", "تحيط بكل حويصلة شبكة شعيرات كثيفة. هنا يتخلص الدم من ثاني أكسيد الكربون ويأخذ الأكسجين (تبادل الغازات) فيتحول لونه إلى أحمر فاتح."], ids: [...allArteries, ...allVeins, ...allBronchi], note: ["Das Kapillarnetz ist mikroskopisch klein und nicht modelliert; siehe Schema.", "شبكة الشعيرات مجهرية وغير مُنمذجة؛ انظر الرسم التخطيطي."] },
      { title: R("Lappen- und Segmentvenen", "الأوردة الفصية والقطعية", "Lobar and segmental veins", "Veines lobaires et segmentaires", "Lob ve segment venleri"), text: ["Die Venen sammeln das sauerstoffreiche Blut und verlaufen zwischen den Segmenten.", "تجمع الأوردة الدم الغني بالأكسجين وتسير بين القطع."], ids: allVeins },
      { title: R("Lungenvenen zum linken Vorhof", "الأوردة الرئوية إلى الأذين الأيسر", "Pulmonary veins to the left atrium", "Veines pulmonaires vers l'oreillette gauche", "Pulmoner venler sol atriyuma"), text: ["Vier Lungenvenen (je zwei pro Seite) münden in den linken Vorhof. Von dort pumpt die linke Kammer das Blut in den Körperkreislauf.", "أربعة أوردة رئوية (اثنان في كل جهة) تصب في الأذين الأيسر. ومن هناك يضخ البطين الأيسر الدم إلى الدورة الكبرى."], ids: ["right-pulmonary-veins", "left-pulmonary-veins"], note: ["Der linke Vorhof ist im Herz-Atlas zu sehen.", "الأذين الأيسر مرئي في أطلس القلب."] },
    ],
  },
  {
    id: "lobes",
    title: R("Lungenlappen", "فصوص الرئة", "Lung lobes", "Lobes pulmonaires", "Akciğer lobları"),
    intro: ["Rechts drei Lappen, links zwei. Jeder Schritt hebt Bronchien und Gefäße eines Lappens hervor.", "ثلاثة فصوص في اليمين واثنان في اليسار. تُبرز كل خطوة قصبات وأوعية فص واحد."],
    steps: [
      ...LOBES.map((l) => ({ title: R(l.de.replace(/^(\w)/, (c) => c.toUpperCase()), l.ar, l.la, l.la, l.la), text: [`${l.la}. Segmente: ${l.seg[0]}.`, `${l.ar}. القطع: ${l.seg[1]}.`] as [string, string], ids: ids([l.k]), note: ["Die Lungenoberfläche (Parenchym) ist im Modell nicht vorhanden; der Lappen wird über seine Bronchien und Gefäße gezeigt.", "سطح الرئة (النسيج) غير موجود في النموذج؛ يُعرض الفص عبر قصباته وأوعيته."] as [string, string] })),
    ],
  },
  {
    id: "mechanics",
    title: R("Atemmechanik", "ميكانيكا التنفس", "Breathing mechanics", "Mécanique respiratoire", "Solunum mekaniği"),
    intro: ["Das Zwerchfell ist der wichtigste Atemmuskel. Die Pleura koppelt Lunge und Brustwand (Schema unten).", "الحجاب الحاجز أهم عضلة تنفسية. والجنبة تربط الرئة بجدار الصدر (الرسم أدناه)."],
    steps: [
      { title: R("Einatmung (Inspiration)", "الشهيق", "Inspiration", "Inspiration", "Soluk alma"), text: ["Das Zwerchfell zieht sich zusammen und flacht ab, die äußeren Zwischenrippenmuskeln heben die Rippen. Der Brustraum wird größer, der Druck im Pleuraspalt sinkt, die Lunge dehnt sich und Luft strömt ein.", "ينقبض الحجاب ويتسطح وترفع العضلات الوربية الخارجية الأضلاع. يتسع الصدر وينخفض الضغط في الحيز الجنبي فتتمدد الرئة ويدخل الهواء."], ids: ["diaphragm", "trachea", "right-main-bronchus", "left-main-bronchus"] },
      { title: R("Ausatmung (Exspiration)", "الزفير", "Expiration", "Expiration", "Soluk verme"), text: ["In Ruhe erschlafft das Zwerchfell und wölbt sich wieder nach oben, die Lunge zieht sich durch ihre Elastizität zusammen und die Luft entweicht. Bei Atemnot hilft die Atemhilfsmuskulatur nach.", "في الراحة يرتخي الحجاب ويتقبب إلى الأعلى وتنكمش الرئة بمرونتها فيخرج الهواء. وعند ضيق التنفس تساعد عضلات التنفس المساعدة."], ids: ["diaphragm"] },
    ],
  },
];

export const RESP_CARE = {
  diseases: ["Asthma bronchiale", "COPD und chronische Bronchitis", "Pneumonie (Lungenentzündung)", "Lungenembolie", "Pneumothorax und Pleuraerguss", "Lungenödem bei Herzschwäche", "Tuberkulose", "Lungenkarzinom"],
  symptoms: ["Atemnot (Dyspnoe), Orthopnoe, Tachypnoe", "Husten, Auswurf, Bluthusten", "Giemen, Brummen, Stridor", "Zyanose (bläuliche Lippen und Nägel)", "Brustschmerz beim Atmen (pleuritisch), Unruhe, Angst"],
  diagnostics: ["Inspektion, Perkussion, Auskultation (Atemgeräusch, Rasselgeräusche, Giemen)", "Pulsoxymetrie (SpO2) und Blutgasanalyse (pO2, pCO2, pH)", "Röntgen-Thorax und CT", "Lungenfunktion (Spirometrie, Peak-Flow)", "Bronchoskopie, Sputum- und Blutkulturen", "D-Dimere und CT-Angiographie bei Verdacht auf Lungenembolie", "Pleurapunktion bei Erguss"],
  actions: ["Oberkörper hochlagern, atemerleichternde Positionen (Kutschersitz, Lippenbremse)", "Sauerstoffgabe nur nach ärztlicher Anordnung, Flussrate und Zielwert dokumentieren", "Inhalation korrekt anleiten, Hilfsmittel (Spacer) erklären", "Sekretmanagement: Abhusten anleiten, ausreichend trinken, Atemgymnastik, sterile Absaugung nach Bedarf", "Pneumonieprophylaxe: Mobilisation, Mundpflege, Atemtraining, Schlucktraining bei Aspirationsrisiko", "Pflege der Thoraxdrainage: System unterhalb des Thoraxniveaus, Sog und Flüssigkeitsmenge kontrollieren, nie abklemmen ohne Anordnung", "Beratung zu Nikotinverzicht und Impfungen"],
  monitoring: ["Atemfrequenz (Normalwert Erwachsene etwa 12 bis 20 pro Minute), Atemtiefe, Atemmuster, Atemgeräusche", "SpO2, Hautfarbe, Zyanose, Bewusstsein, Unruhe", "Einsatz der Atemhilfsmuskulatur, Einziehungen, Nasenflügeln", "Husten, Menge, Farbe und Konsistenz des Auswurfs", "Temperatur, Puls, Blutdruck, Schmerzen, Flüssigkeitsbilanz"],
  terms: [["Dyspnoe", "Atemnot"], ["Tachypnoe / Bradypnoe", "zu schnelle / zu langsame Atmung"], ["Apnoe", "Atemstillstand"], ["Orthopnoe", "Atemnot im Liegen, besser im Sitzen"], ["Zyanose", "bläuliche Verfärbung durch Sauerstoffmangel"], ["Hypoxie / Hypoxämie", "Sauerstoffmangel im Gewebe / im Blut"], ["Hyperkapnie", "zu viel CO2 im Blut"], ["Surfactant", "Substanz, die die Oberflächenspannung der Alveolen senkt"], ["Atemzugvolumen", "Luftmenge pro normalem Atemzug (etwa 500 ml)"], ["Vitalkapazität", "größte ein- und ausatembare Luftmenge"]] as [string, string][],
  lessons: ["asthma", "copd", "pneumonie", "thrombose", "g12-atemvolumina-atemregulation"],
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string): AtlasQuiz => ({ q: [qd, qa], o, why: [wd, wa] });
export const RESP_QUIZ: AtlasQuiz[] = [
  Q("Warum werden aspirierte Fremdkörper häufiger im rechten als im linken Hauptbronchus gefunden?", "لماذا تُوجد الأجسام الغريبة المُستنشَقة في القصبة الرئيسية اليمنى أكثر من اليسرى؟", ["Der rechte Hauptbronchus ist kürzer, weiter und steiler", "Der rechte Hauptbronchus ist enger und länger", "Rechts gibt es keinen Knorpel", "Die rechte Lunge atmet stärker"], "Der rechte Hauptbronchus verläuft fast in der Verlängerung der Trachea, ist weiter (etwa 2 bis 3 cm lang) und steiler. Der linke ist länger (etwa 5 cm) und biegt flacher ab. Fremdkörper und Mageninhalt gelangen daher häufiger rechts in den Unterlappen. Pflegerisch wichtig: bei Intubation seitengleiche Auskultation, bei Schluckstörungen Aspirationsprophylaxe.", "القصبة الرئيسية اليمنى تسير تقريباً في امتداد القصبة الهوائية وهي أعرض (نحو 2 إلى 3 سم) وأكثر انحداراً، أما اليسرى فأطول (نحو 5 سم) وتنعطف بشكل أكثر أفقية. لذلك تصل الأجسام الغريبة ومحتوى المعدة غالباً إلى الفص السفلي الأيمن. التمريض: الإصغاء المتماثل على الجانبين عند التنبيب والوقاية من الاستنشاق عند اضطراب البلع."),
  Q("Wie viele Lungenlappen hat die rechte und wie viele die linke Lunge?", "كم فصاً في الرئة اليمنى وكم في اليسرى؟", ["Rechts drei, links zwei", "Rechts zwei, links drei", "Beide drei", "Beide zwei"], "Rechts gibt es Ober-, Mittel- und Unterlappen, links nur Ober- und Unterlappen. Das Gegenstück zum Mittellappen ist links die Lingula, ein Teil des Oberlappens. Das Herz beansprucht links Platz (Incisura cardiaca).", "في اليمين فص علوي وأوسط وسفلي، وفي اليسار علوي وسفلي فقط. ونظير الفص الأوسط في اليسار هو اللسينة وهي جزء من الفص العلوي. ويحتل القلب مكاناً في الجهة اليسرى (الثلمة القلبية)."),
  Q("Welcher Muskel ist der wichtigste Atemmuskel?", "ما هي أهم عضلة تنفسية؟", ["Das Zwerchfell", "Der Musculus pectoralis major", "Der Musculus trapezius", "Die Bauchmuskulatur"], "Das Zwerchfell (Diaphragma) kontrahiert bei der Einatmung, flacht ab und vergrößert den Brustraum nach unten. Äußere Zwischenrippenmuskeln heben die Rippen. Die Ausatmung in Ruhe ist passiv. Bei Atemnot werden Atemhilfsmuskeln (Hals-, Brust-, Schultermuskeln) genutzt: Kutschersitz erleichtert dies.", "الحجاب الحاجز هو العضلة الأهم: ينقبض عند الشهيق ويتسطح فيوسّع الصدر نحو الأسفل، وتساعد العضلات الوربية الخارجية في رفع الأضلاع. والزفير في الراحة سلبي. وعند ضيق التنفس تُستخدم عضلات مساعدة (العنق والصدر والكتف) ويساعد وضع «الحوذي» على ذلك."),
  Q("Wo findet der Gasaustausch statt?", "أين يحدث تبادل الغازات؟", ["In den Alveolen an der Blut-Luft-Schranke", "In der Trachea", "In den Hauptbronchien", "In den Lappenbronchien"], "Der Gasaustausch geschieht in den etwa 300 bis 400 Millionen Alveolen durch Diffusion über die sehr dünne Blut-Luft-Schranke (Alveolarepithel, Basalmembran, Kapillarendothel, etwa 0,5 µm). Trachea und Bronchien leiten nur Luft (anatomischer Totraum).", "يحدث التبادل في نحو 300 إلى 400 مليون حويصلة بالانتشار عبر الحاجز الدموي الهوائي الرقيق جداً (ظهارة الحويصلة والغشاء القاعدي وبطانة الشعيرة، نحو 0.5 ميكرومتر). أما القصبة والقصبات فتنقل الهواء فقط (الحيز الميت التشريحي)."),
  Q("Welche Gefäße führen sauerstoffreiches Blut?", "أي الأوعية تحمل دماً غنياً بالأكسجين؟", ["Die Lungenvenen", "Die Lungenarterien", "Der Truncus pulmonalis", "Die obere Hohlvene"], "Lungenarterien bringen sauerstoffarmes Blut zur Lunge, Lungenvenen führen das in den Alveolarkapillaren angereicherte, sauerstoffreiche Blut zum linken Vorhof. Die Namensgebung folgt der Richtung zum bzw. vom Herzen, nicht dem Sauerstoffgehalt.", "الشرايين الرئوية تنقل الدم قليل الأكسجين إلى الرئة، والأوردة الرئوية تنقل الدم المؤكسج من شعيرات الحويصلات إلى الأذين الأيسر. فالتسمية تتبع الاتجاه نحو القلب أو منه ولا تتبع محتوى الأكسجين."),
  Q("Was beschreibt der Begriff Pleura visceralis?", "ماذا يصف مصطلح الجنبة الحشوية؟", ["Das Lungenfell, das direkt der Lunge aufliegt", "Das Rippenfell an der Brustwand", "Die Schleimhaut der Bronchien", "Das Zwerchfell"], "Die Pleura visceralis (Lungenfell) überzieht die Lunge, die Pleura parietalis (Rippenfell) kleidet Brustwand, Zwerchfell und Mediastinum aus. Dazwischen liegt der Pleuraspalt mit wenig seröser Flüssigkeit; dort herrscht Unterdruck, der die Lunge an der Brustwand hält. Luft im Spalt führt zum Pneumothorax, Flüssigkeit zum Pleuraerguss.", "الجنبة الحشوية تغطي الرئة مباشرة، والجنبة الجدارية تبطن جدار الصدر والحجاب والمنصف. وبينهما الحيز الجنبي الذي يحتوي قليلاً من السائل المصلي ويسوده ضغط سلبي يثبّت الرئة على جدار الصدر. دخول الهواء إلى الحيز يسبب استرواحاً صدرياً، والسائل يسبب انصباباً جنبياً."),
  Q("Welche Maßnahme ist bei einem Patienten mit akuter Atemnot zuerst sinnvoll?", "ما أول إجراء مناسب لمريض يعاني ضيق تنفس حاداً؟", ["Oberkörper hochlagern, Ruhe vermitteln, Vitalzeichen und SpO2 messen, Arzt informieren", "Flach lagern und Beine hochlegen", "Viel trinken lassen", "Allein lassen, damit er sich beruhigt"], "Bei Atemnot sitzt oder liegt der Patient mit erhöhtem Oberkörper, damit das Zwerchfell tiefer tritt und die Atemhilfsmuskulatur arbeiten kann. Pflege bleibt beim Patienten, beruhigt, misst Atemfrequenz, SpO2, Puls und Blutdruck, gibt Sauerstoff nach ärztlicher Anordnung und informiert Arzt beziehungsweise Notruf. Flachlagerung verschlimmert die Atemnot.", "عند ضيق التنفس يجلس المريض أو يستلقي مع رفع الجزء العلوي ليهبط الحجاب وتعمل العضلات المساعدة. يبقى الممرض بجانب المريض ويهدئه ويقيس معدل التنفس وSpO2 والنبض والضغط ويعطي الأكسجين بأمر الطبيب ويُبلّغ الطبيب أو الإسعاف. والاستلقاء المسطح يزيد الضيق."),
  Q("Welche Aussage zur Lingula ist richtig?", "أي عبارة عن اللسينة صحيحة؟", ["Sie ist ein Teil des linken Oberlappens und das Gegenstück zum rechten Mittellappen", "Sie ist ein Teil der rechten Lunge", "Sie ist der Kehldeckel", "Sie ist ein Segment des linken Unterlappens"], "Die Lingula pulmonis (kleine Zunge) liegt am unteren vorderen Rand des linken Oberlappens und hat ein oberes und ein unteres Segment. Sie entspricht funktionell dem Mittellappen rechts, weshalb die linke Lunge nur zwei Lappen hat.", "اللسينة (اللسان الصغير) تقع عند الحافة الأمامية السفلية للفص العلوي الأيسر ولها قطعة علوية وسفلية. وهي تقابل وظيفياً الفص الأوسط في اليمين، ولذلك للرئة اليسرى فصّان فقط."),
  Q("Was gehört zu den typischen Zeichen einer Lungenembolie?", "ما هي العلامات المعتادة للانصمام الرئوي؟", ["Plötzliche Atemnot, Tachykardie, Brustschmerz beim Atmen", "Schleichender Husten über Monate mit Gewichtsverlust", "Fieber und Halsschmerzen seit drei Tagen", "Starkes Nasenbluten"], "Die Embolie stammt meist aus Bein- oder Beckenvenen und verlegt Lungenarterien. Typisch sind plötzliche Atemnot, Tachykardie, Tachypnoe, SpO2-Abfall, Brustschmerz beim Einatmen, evtl. Bluthusten und Angst. Maßnahmen: Notruf, Oberkörper hoch, Ruhe, Sauerstoff nach Anordnung, nicht mobilisieren. Prophylaxe: Mobilisation, Kompression, Antikoagulation.", "يأتي الصمّ عادة من أوردة الساق أو الحوض ويسد الشرايين الرئوية. المعتاد: ضيق تنفس مفاجئ وتسرع القلب والتنفس وهبوط SpO2 وألم صدر عند الشهيق وربما نفث دم وقلق. الإجراءات: طلب الإسعاف ورفع الجزء العلوي والراحة والأكسجين بأمر الطبيب وعدم تحريك المريض. الوقاية: الحركة والضغط ومضادات التخثر."),
  Q("Wie wird die Thoraxdrainage beim Transport oder bei der Lagerung korrekt gehandhabt?", "كيف يُتعامل مع نظام تصريف الصدر عند النقل أو الوضعية؟", ["Das Auffanggefäß bleibt unter Thoraxniveau und aufrecht, nicht abklemmen ohne Anordnung", "Das Gefäß wird über Brusthöhe gehalten", "Der Schlauch wird zum Transport immer abgeklemmt", "Das Gefäß wird zur Kontrolle geleert und flach gelegt"], "Das Drainagesystem wird unter dem Thoraxniveau gehalten, damit keine Flüssigkeit zurückläuft; es bleibt aufrecht, die Wasserschlösser werden kontrolliert. Abklemmen nur nach ärztlicher Anordnung, da bei Luftleck ein Spannungspneumothorax droht. Dokumentiert werden Fördermenge, Farbe, Luftleck, Sog und Hautzustand an der Einstichstelle.", "يُبقى نظام التصريف تحت مستوى الصدر لتجنب رجوع السائل ويظل قائماً مع مراقبة الحاجز المائي. لا يُغلق الأنبوب إلا بأمر الطبيب لأن تسرب الهواء قد يسبب استرواحاً صدرياً توتري. يُوثّق حجم السائل ولونه وتسرب الهواء والشفط وحالة الجلد عند موضع الإدخال."),
  Q("Welche Besonderheit haben die Lungenvenen im Vergleich zu den Lungenarterien im Verlauf?", "ما الذي يميز مسار الأوردة الرئوية عن الشرايين الرئوية؟", ["Die Venen verlaufen zwischen den Segmenten, die Arterien neben den Bronchien", "Die Venen verlaufen neben den Bronchien", "Beide verlaufen gemeinsam in den Bronchialwänden", "Die Venen entspringen im rechten Vorhof"], "Die Segmentarterien begleiten die Segmentbronchien (gemeinsames Bündel). Die Venen liegen intersegmental und sammeln Blut aus benachbarten Segmenten. Das ist wichtig in der Lungenchirurgie, um Segmente zu trennen. Im Modell lässt sich der Unterschied im Verlauf nachvollziehen, wenn man Bronchien, Arterien und Venen getrennt ein- und ausblendet.", "الشرايين القطعية ترافق القصبات القطعية في حزمة واحدة، أما الأوردة فتقع بين القطع وتجمع الدم من القطع المتجاورة. وهذا مهم في جراحة الرئة لفصل القطع. ويمكن في النموذج ملاحظة الفرق بإظهار القصبات والشرايين والأوردة وإخفائها منفصلة."),
  Q("Was passiert bei Asthma in den Bronchiolen?", "ماذا يحدث في القصيبات عند الربو؟", ["Verkrampfung der glatten Muskulatur, Schleimhautschwellung und zäher Schleim", "Zerstörung der Alveolarwände", "Verengung der Lungenarterien", "Vergrößerung des Zwerchfells"], "Asthma ist eine chronisch-entzündliche Erkrankung mit variabler Obstruktion: Bronchospasmus, Schleimhautödem und Schleim. Folge: Giemen, Husten, Atemnot, vor allem nachts und morgens, verlängerte Ausatmung. Therapie: Bedarfsmedikation (kurzwirksames Beta-2-Mimetikum), Dauermedikation (inhalatives Kortison). Pflege: Inhalation anleiten, Trigger meiden, Peak-Flow.", "الربو مرض التهابي مزمن مع انسداد متغير: تشنج قصبي وتورم المخاطية ومخاط لزج. النتيجة: صفير وسعال وضيق تنفس خاصة ليلاً وصباحاً وإطالة الزفير. العلاج: دواء عند الحاجة (منبّه بيتا 2 قصير المفعول) ودواء دائم (كورتيزون استنشاقي). التمريض: تدريب الاستنشاق وتجنب المحفزات وقياس ذروة الجريان."),
  Q("Welche Veränderung zeigt der Pneumothorax?", "ماذا يظهر في الاسترواح الصدري؟", ["Luft im Pleuraspalt, die Lunge fällt in sich zusammen", "Flüssigkeit im Pleuraspalt", "Luft in den Alveolen", "Verschluss einer Lungenarterie"], "Beim Pneumothorax dringt Luft in den Pleuraspalt, der Unterdruck geht verloren und die Lunge kollabiert. Zeichen: plötzlicher stechender Schmerz, Atemnot, einseitig abgeschwächtes Atemgeräusch. Beim Spannungspneumothorax steigt der Druck und verdrängt Mediastinum und Herz: Lebensgefahr. Pflege: Notruf, Oberkörper hoch, Sauerstoff, Drainage vorbereiten.", "في الاسترواح الصدري يدخل الهواء إلى الحيز الجنبي فيضيع الضغط السلبي وتنهار الرئة. العلامات: ألم طاعن مفاجئ وضيق تنفس وضعف أحادي الجانب في صوت التنفس. وفي الاسترواح التوتري يرتفع الضغط ويزيح المنصف والقلب: خطر على الحياة. التمريض: طلب الإسعاف ورفع الجزء العلوي والأكسجين وتجهيز التصريف."),
];

export const RESP_CFG: AtlasConfig = {
  key: "resp",
  modelUrl: "/models/resp.glb",
  items: RESP_ITEMS,
  layers: RESP_LAYERS,
  layerOf: (id) => {
    if (["nasal-bones", "nasal-cartilages", "inferior-nasal-conchae", "epiglottis", "thyroid-cartilage", "cricoid-cartilage"].includes(id)) return "upper";
    if (["trachea", "right-main-bronchus", "left-main-bronchus"].includes(id)) return "airway";
    if (id.endsWith("-bronchi")) return "bronchi";
    if (id.endsWith("-arteries")) return "artery";
    if (id.endsWith("pulmonary-veins")) return "vein-main";
    if (id.endsWith("-veins")) return "vein";
    if (["pulmonary-trunk", "right-pulmonary-artery", "left-pulmonary-artery"].includes(id)) return "artery-main";
    return "diaphragm";
  },
  color: (id, layer) => {
    const LOBE: Record<string, number> = { ru: 0x5fa8d3, rm: 0x84c08b, rl: 0xe0b455, lu: 0xc58bd0, ll: 0xe08a6a };
    switch (layer) {
      case "upper": return /bones/.test(id) ? 0xe6dcc5 : /conchae/.test(id) ? 0xd9a79c : 0xcfdce8;
      case "airway": return id === "trachea" ? 0xe3b6a6 : id.startsWith("right") ? 0x5f8fb8 : 0x9a7ab8;
      case "bronchi": return LOBE[id.slice(0, 2)] ?? 0xcccccc;
      case "artery-main": return 0x6e2a5a;
      case "artery": return 0x7b2a4d;
      case "vein-main": return 0xd8413a;
      case "vein": return 0xe05a4c;
      default: return 0xb4574a;
    }
  },
  shell: ["diaphragm"],
  innerLabel: ["Zwerchfell durchsichtig", "الحجاب الحاجز شفاف", "Diaphragm transparent", "Diaphragme transparent", "Diyafram saydam"],
  careTitle: ["Pflege-Überblick Atmung", "نظرة تمريضية على التنفس", "Nursing overview: respiration", "Aperçu infirmier : respiration", "Hemşirelik özeti: solunum"],
  target: [0, 0.03, 0], shellOpacity: 0.42,
  dist: 0.95, minDist: 0.12, maxDist: 1.8, clipRange: 0.2, explodeScale: 0.8,
  care: RESP_CARE,
  quiz: RESP_QUIZ,
  paths: RESP_PATHS,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Referenzanatomie eines erwachsenen Mannes. Nicht im Modell: Lungenoberfläche, Pleura, Alveolen, Rachen (siehe Schemata).", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). تشريح مرجعي لرجل بالغ. غير موجود في النموذج: سطح الرئة والجنبة والحويصلات والبلعوم (انظر الرسوم التخطيطية).", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (modified). Adult male reference anatomy. Not in the model: lung surface, pleura, alveoli, pharynx (see schematics).", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (modifié). Non inclus : surface pulmonaire, plèvre, alvéoles, pharynx (voir schémas).", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (düzenlendi). Modelde yok: akciğer yüzeyi, plevra, alveoller, farenks (şemalara bakın)."],
};
