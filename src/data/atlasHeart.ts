/**
 * Atlas Herz: Beschriftungen zu den 34 benannten Strukturen des BodyParts3D-Herzmodells (public/models/heart.glb).
 * Die Schlüssel entsprechen den Knotennamen im Modell. Namen: Terminologia Anatomica; Texte in eigenen Worten.
 */
import type { AtlasConfig, AtlasItem } from "./atlasTypes";
export type { AtlasItem };

export type HeartLayer = "wall" | "chamber" | "valve" | "vessel" | "coronary" | "cardiac-vein";

export const HEART_LAYERS: { id: HeartLayer; de: string; ar: string; en: string; fr: string; tr: string }[] = [
  { id: "wall", de: "Herzwand (Myokard)", ar: "جدار القلب", en: "Heart wall", fr: "Paroi cardiaque", tr: "Kalp duvarı" },
  { id: "chamber", de: "Herzhöhlen", ar: "حجرات القلب", en: "Chambers", fr: "Cavités", tr: "Odacıklar" },
  { id: "valve", de: "Klappen und Papillarmuskeln", ar: "الصمامات والعضلات الحليمية", en: "Valves and papillary muscles", fr: "Valves et muscles papillaires", tr: "Kapaklar ve papiller kaslar" },
  { id: "vessel", de: "Große Gefäße", ar: "الأوعية الكبيرة", en: "Great vessels", fr: "Gros vaisseaux", tr: "Büyük damarlar" },
  { id: "coronary", de: "Koronararterien", ar: "الشرايين التاجية", en: "Coronary arteries", fr: "Artères coronaires", tr: "Koroner arterler" },
  { id: "cardiac-vein", de: "Herzvenen", ar: "أوردة القلب", en: "Cardiac veins", fr: "Veines cardiaques", tr: "Kalp venleri" },
];

export const HEART_ITEMS: Record<string, AtlasItem> = {
  "right-atrium-wall": {
    de: "Wand des rechten Vorhofs", la: "Paries atrii dextri (Myocardium atrii dextri)", ar: "جدار الأذين الأيمن",
    fn: ["Dünne Muskelwand, die das venöse Blut aus Hohlvenen und Koronarsinus aufnimmt und in die rechte Kammer pumpt. Im Vorhofdach liegt der Sinusknoten als natürlicher Taktgeber.", "جدار عضلي رقيق يستقبل الدم الوريدي من الوريدين الأجوفين والجيب التاجي ويدفعه إلى البطين الأيمن. وفي سقف الأذين توجد العقدة الجيبية الأذينية كمنظّم طبيعي لنبض القلب."],
    kl: ["Bei Vorhofflimmern fehlt die geordnete Vorhofkontraktion; es drohen Thromben und Schlaganfall. Pflege: Puls tasten (unregelmäßig), Blutdruck, Symptome wie Herzrasen und Schwindel beobachten, Antikoagulation und Blutungszeichen überwachen.", "في الرجفان الأذيني تغيب الانقباضات المنتظمة للأذين فتتكون خثرات وقد تحدث سكتة دماغية. التمريض: جسّ النبض (غير منتظم) وقياس الضغط ومراقبة الأعراض كخفقان القلب والدوار ومتابعة مميعات الدم وعلامات النزف."],
  },
  "left-atrium-wall": {
    de: "Wand des linken Vorhofs", la: "Paries atrii sinistri (Myocardium atrii sinistri)", ar: "جدار الأذين الأيسر",
    fn: ["Nimmt das sauerstoffreiche Blut aus den vier Lungenvenen auf und füllt die linke Kammer. Der Vorhof liegt nach hinten, direkt vor der Speiseröhre.", "يستقبل الدم الغني بالأكسجين من الأوردة الرئوية الأربعة ويملأ البطين الأيسر. ويقع الأذين في الخلف أمام المريء مباشرة."],
    kl: ["Bei Mitralklappenfehlern vergrößert sich der linke Vorhof; Rückstau in die Lunge führt zu Atemnot. Pflege: Atemfrequenz, SpO2, Oberkörperhochlagerung, Flüssigkeitsbilanz und Gewicht kontrollieren.", "عند عيوب الصمام التاجي يتضخم الأذين الأيسر ويرتد الدم إلى الرئتين فيسبب ضيق التنفس. التمريض: مراقبة معدل التنفس والتشبع بالأكسجين ورفع الجزء العلوي من الجسم وموازنة السوائل والوزن."],
  },
  "ventricular-wall": {
    de: "Kammermuskulatur mit Kammerscheidewand", la: "Myocardium ventriculorum (mit Septum interventriculare)", ar: "عضلة البطينين مع الحاجز بين البطينين",
    fn: ["Die dicke Arbeitsmuskulatur beider Kammern. Die linke Wand ist etwa dreimal so dick wie die rechte, weil sie gegen den hohen Druck im Körperkreislauf arbeitet. Das Septum interventriculare trennt die beiden Kammern.", "العضلة العاملة السميكة للبطينين. جدار البطين الأيسر أسمك بنحو ثلاث مرات من الأيمن لأنه يعمل ضد الضغط العالي في الدورة الدموية الكبرى. والحاجز بين البطينين يفصل البطينين."],
    kl: ["Bei Herzinfarkt stirbt Muskelgewebe ab; bei Herzinsuffizienz pumpt die Wand zu schwach. Pflege: Brustschmerz, Blässe, Schweiß, Puls und Blutdruck beobachten, Notruf auslösen, Bettruhe, Ödeme, Gewicht und Ein- und Ausfuhr kontrollieren.", "في احتشاء القلب يموت النسيج العضلي، وفي قصور القلب يضعف ضخ الجدار. التمريض: مراقبة ألم الصدر والشحوب والتعرق والنبض والضغط وطلب الإسعاف والراحة في الفراش ومراقبة الوذمات والوزن والمدخول والمطروح."],
    note: ["Das Septum ist in diesem Modell Teil der Kammermuskulatur und nicht als eigene Struktur modelliert.", "الحاجز بين البطينين في هذا النموذج جزء من عضلة البطينين وليس بنية منفصلة."],
  },
  "right-atrium": {
    de: "Rechter Vorhof", la: "Atrium dextrum", ar: "الأذين الأيمن",
    fn: ["Sammelraum für das sauerstoffarme Blut des Körpers. Es kommt über die obere und untere Hohlvene und den Koronarsinus an und fließt durch die Trikuspidalklappe in die rechte Kammer.", "حجرة تجميع للدم قليل الأكسجين القادم من الجسم عبر الوريدين الأجوفين العلوي والسفلي والجيب التاجي، ثم يمر عبر الصمام ثلاثي الشرفات إلى البطين الأيمن."],
    kl: ["Hier endet ein zentraler Venenkatheter (ZVK). Sein Druck (ZVD) zeigt Füllungszustand und Rechtsherzbelastung. Pflege: ZVK-Verbandswechsel steril, Infektionszeichen, Luftembolie vermeiden.", "هنا ينتهي القسطرة الوريدية المركزية (ZVK) وضغطها (ZVD) يعكس حالة الامتلاء وحمل القلب الأيمن. التمريض: تغيير ضماد القسطرة بتعقيم ومراقبة علامات العدوى وتجنب الانصمام الهوائي."],
  },
  "left-atrium": {
    de: "Linker Vorhof", la: "Atrium sinistrum", ar: "الأذين الأيسر",
    fn: ["Nimmt das in der Lunge mit Sauerstoff angereicherte Blut aus den Lungenvenen auf und leitet es durch die Mitralklappe in die linke Kammer. Das Herzohr (Auricula) ist eine kleine Ausbuchtung.", "يستقبل الدم المشبع بالأكسجين من الرئتين عبر الأوردة الرئوية ويمرره عبر الصمام التاجي إلى البطين الأيسر. والأذينة (Auricula) نتوء صغير فيه."],
    kl: ["Im Herzohr bilden sich bei Vorhofflimmern bevorzugt Blutgerinnsel, die einen Schlaganfall auslösen können. Pflege: neurologische Zeichen (Sprache, Lähmung, Gesicht) beobachten und bei Auffälligkeit sofort den Notruf rufen.", "في الأذينة تتكون الخثرات غالباً عند الرجفان الأذيني وقد تسبب سكتة دماغية. التمريض: مراقبة العلامات العصبية (الكلام والشلل والوجه) وطلب الإسعاف فوراً عند أي علامة."],
  },
  "right-ventricle": {
    de: "Rechte Herzkammer", la: "Ventriculus dexter", ar: "البطين الأيمن",
    fn: ["Pumpt das sauerstoffarme Blut durch die Pulmonalklappe in den Lungenkreislauf. Der Druck ist niedrig, die Wand daher dünn.", "يضخ الدم قليل الأكسجين عبر الصمام الرئوي إلى الدورة الرئوية. الضغط منخفض ولذلك جداره رقيق."],
    kl: ["Bei Lungenembolie oder chronischer Lungenerkrankung wird die rechte Kammer überlastet (Cor pulmonale): Halsvenenstauung, Beinödeme. Pflege: Ödeme, Gewicht, Halsvenen, Atmung beobachten.", "في الانصمام الرئوي أو أمراض الرئة المزمنة يُرهق البطين الأيمن (القلب الرئوي): احتقان أوردة العنق ووذمات الساقين. التمريض: مراقبة الوذمات والوزن وأوردة العنق والتنفس."],
  },
  "left-ventricle": {
    de: "Linke Herzkammer", la: "Ventriculus sinister", ar: "البطين الأيسر",
    fn: ["Die kräftigste Kammer. Sie pumpt das sauerstoffreiche Blut durch die Aortenklappe in den Körperkreislauf und bildet den Herzspitzenstoß.", "أقوى حجرة في القلب. تضخ الدم الغني بالأكسجين عبر الصمام الأبهري إلى الدورة الدموية الكبرى وتصنع النبضة القمية."],
    kl: ["Häufigster Ort der Pumpschwäche (Linksherzinsuffizienz: Lungenödem, Atemnot) und des Infarkts. Pflege: Atemnot erkennen, Oberkörper hoch, Beine tief, Notruf, Sauerstoff nach Anordnung.", "أكثر موضع لضعف الضخ (قصور القلب الأيسر: وذمة رئوية وضيق تنفس) وللاحتشاء. التمريض: ملاحظة ضيق التنفس ورفع الجزء العلوي من الجسم وإنزال الساقين وطلب الإسعاف والأكسجين بأمر الطبيب."],
  },
  "tricuspid-valve": {
    de: "Trikuspidalklappe", la: "Valva atrioventricularis dextra (Valva tricuspidalis)", ar: "الصمام ثلاثي الشرفات",
    fn: ["Segelklappe mit drei Segeln zwischen rechtem Vorhof und rechter Kammer. Sie verhindert den Rückfluss des Blutes in den Vorhof, wenn sich die Kammer zusammenzieht.", "صمام شراعي بثلاث شرفات بين الأذين الأيمن والبطين الأيمن. يمنع رجوع الدم إلى الأذين عند انقباض البطين."],
    kl: ["Eine Undichtigkeit (Insuffizienz) führt zu Stauung vor dem Herzen: Beinödeme, gestaute Halsvenen, Leberstauung. Pflege: Ödeme, Gewicht, Bauchumfang, Haut (Druckstellen!) beobachten.", "التسرّب (القصور) يسبب احتقاناً قبل القلب: وذمات الساقين واحتقان أوردة العنق وتضخم الكبد. التمريض: مراقبة الوذمات والوزن ومحيط البطن والجلد (قرح الضغط)."],
  },
  "pulmonary-valve": {
    de: "Pulmonalklappe", la: "Valva trunci pulmonalis", ar: "الصمام الرئوي",
    fn: ["Taschenklappe mit drei Taschen am Ausgang der rechten Kammer. Sie lässt das Blut in den Truncus pulmonalis fließen und verhindert den Rückfluss.", "صمام جيبي بثلاثة جيوب عند مخرج البطين الأيمن. يسمح بتدفق الدم إلى الجذع الرئوي ويمنع رجوعه."],
    kl: ["Fehler an dieser Klappe sind seltener, oft angeboren. Das Herzgeräusch wird bei der Auskultation (Stethoskop) bemerkt. Pflege: Kinder mit Herzfehler auf Zyanose, Trinkschwäche und Wachstum beobachten.", "عيوب هذا الصمام أقل شيوعاً وغالباً خلقية، ويُسمع نفخ عند الإصغاء بالسماعة. التمريض: مراقبة الأطفال المصابين بعيب قلبي من حيث الزرقة وضعف الرضاعة والنمو."],
  },
  "mitral-valve": {
    de: "Mitralklappe (Bikuspidalklappe)", la: "Valva atrioventricularis sinistra (Valva mitralis, Valva bicuspidalis)", ar: "الصمام التاجي (ثنائي الشرفات)",
    fn: ["Segelklappe mit zwei Segeln zwischen linkem Vorhof und linker Kammer. Sehnenfäden (Chordae tendineae) und Papillarmuskeln halten die Segel beim Pumpen fest.", "صمام شراعي بشرفتين بين الأذين الأيسر والبطين الأيسر. تثبّت الحبال الوترية والعضلات الحليمية الشرفات أثناء الضخ."],
    kl: ["Häufig betroffen von Stenose oder Insuffizienz; es entstehen Atemnot, Rhythmusstörungen und Rückstau in die Lunge. Nach Klappenersatz mit mechanischer Klappe ist eine dauerhafte Antikoagulation nötig. Pflege: Blutungszeichen, Medikamenteneinnahme, Sturzprophylaxe.", "كثيراً ما يصاب بالتضيق أو القصور فيحدث ضيق تنفس واضطراب النظم وارتداد الدم إلى الرئتين. بعد استبدال الصمام بصمام ميكانيكي يلزم مميع دم دائم. التمريض: علامات النزف وتناول الأدوية والوقاية من السقوط."],
  },
  "aortic-valve": {
    de: "Aortenklappe", la: "Valva aortae", ar: "الصمام الأبهري",
    fn: ["Taschenklappe mit drei Taschen am Ausgang der linken Kammer. Beim Schluss füllen sich die Koronararterien, die direkt über der Klappe entspringen.", "صمام جيبي بثلاثة جيوب عند مخرج البطين الأيسر. وعند إغلاقه تمتلئ الشرايين التاجية التي تنشأ فوقه مباشرة."],
    kl: ["Die Aortenklappenstenose im Alter verursacht Belastungsschmerz, Schwindel und Synkopen. Pflege: Sturzrisiko, Belastungsgrenzen, Kreislaufüberwachung, Vorsicht bei Blutdrucksenkung.", "تضيّق الصمام الأبهري عند كبار السن يسبب ألماً عند الجهد ودواراً وإغماءً. التمريض: خطر السقوط وحدود الجهد ومراقبة الدورة الدموية والحذر عند خفض الضغط."],
  },
  "right-papillary-muscles": {
    de: "Papillarmuskeln der rechten Kammer", la: "Musculi papillares ventriculi dextri", ar: "العضلات الحليمية للبطين الأيمن",
    fn: ["Kleine Muskelzapfen in der rechten Kammer. Über die Sehnenfäden halten sie die Segel der Trikuspidalklappe fest und verhindern, dass diese in den Vorhof durchschlagen.", "نتوءات عضلية صغيرة في البطين الأيمن. تثبّت عبر الحبال الوترية شرفات الصمام ثلاثي الشرفات وتمنعها من الانقلاب نحو الأذين."],
    kl: ["Reißt ein Papillarmuskel (z. B. beim Infarkt), kommt es plötzlich zur Klappeninsuffizienz mit akuter Atemnot. Das ist ein Notfall.", "إذا تمزقت عضلة حليمية (مثلاً في الاحتشاء) يحدث فجأة قصور في الصمام مع ضيق تنفس حاد. وهذه حالة طارئة."],
  },
  "left-papillary-muscles": {
    de: "Papillarmuskeln der linken Kammer", la: "Musculi papillares ventriculi sinistri", ar: "العضلات الحليمية للبطين الأيسر",
    fn: ["Zwei kräftige Muskelzapfen (vorn und hinten) in der linken Kammer. Sie halten die Mitralsegel über die Chordae tendineae.", "نتوءان عضليان قويان (أمامي وخلفي) في البطين الأيسر. يثبتان شرفات الصمام التاجي بالحبال الوترية."],
    kl: ["Nach einem Hinterwandinfarkt kann der Papillarmuskel schlecht durchblutet sein und reißen. Akute Atemnot und Lungenödem sind Notfallzeichen.", "بعد احتشاء الجدار الخلفي قد يقل تروية العضلة الحليمية فتتمزق. وضيق التنفس الحاد والوذمة الرئوية علامات طوارئ."],
  },
  "superior-vena-cava": {
    de: "Obere Hohlvene", la: "Vena cava superior", ar: "الوريد الأجوف العلوي",
    fn: ["Sammelt das Blut aus Kopf, Hals, Armen und oberem Brustkorb und mündet von oben in den rechten Vorhof.", "تجمع الدم من الرأس والعنق والذراعين وأعلى الصدر وتصب من الأعلى في الأذين الأيمن."],
    kl: ["Die Spitze eines ZVK über Vena jugularis oder subclavia liegt hier. Bei Verlegung (obere Einflussstauung) schwellen Gesicht und Arme an.", "تقع هنا نهاية القسطرة المركزية المُدخلة عبر الوريد الوداجي أو تحت الترقوة. وعند انسدادها يتورم الوجه والذراعان."],
  },
  "inferior-vena-cava": {
    de: "Untere Hohlvene", la: "Vena cava inferior", ar: "الوريد الأجوف السفلي",
    fn: ["Die größte Vene des Körpers. Sie bringt das Blut aus Beinen, Becken und Bauchorganen von unten zum rechten Vorhof.", "أكبر وريد في الجسم. تنقل الدم من الساقين والحوض وأعضاء البطن من الأسفل إلى الأذين الأيمن."],
    kl: ["Beinvenenthrombosen können über diese Vene als Lungenembolie ins Herz und die Lunge wandern. Pflege: Thromboseprophylaxe (Mobilisation, Kompression, Medikamente), Zeichen einer Embolie (plötzliche Atemnot, Brustschmerz) erkennen.", "قد تنتقل خثرات الساق عبر هذا الوريد إلى القلب والرئة كانصمام رئوي. التمريض: الوقاية من الخثار (تحريك وضغط ودواء) والتعرف على علامات الانصمام (ضيق تنفس مفاجئ وألم صدر)."],
  },
  "pulmonary-trunk": {
    de: "Lungenschlagaderstamm", la: "Truncus pulmonalis", ar: "الجذع الرئوي",
    fn: ["Gefäß aus der rechten Kammer, das sich in rechte und linke Lungenarterie teilt. Es führt als einzige Arterie sauerstoffarmes Blut.", "وعاء ينشأ من البطين الأيمن وينقسم إلى الشريانين الرئويين الأيمن والأيسر. وهو الشريان الوحيد الذي يحمل دماً قليل الأكسجين."],
    kl: ["Ein erhöhter Druck (pulmonale Hypertonie) belastet die rechte Kammer. Die Lungenembolie verlegt hier oder in den Ästen den Blutfluss.", "ارتفاع الضغط (فرط ضغط الدم الرئوي) يرهق البطين الأيمن. والانصمام الرئوي يسد التدفق هنا أو في الفروع."],
  },
  "right-pulmonary-artery": {
    de: "Rechte Lungenarterie", la: "Arteria pulmonalis dextra", ar: "الشريان الرئوي الأيمن",
    fn: ["Leitet sauerstoffarmes Blut zur rechten Lunge, wo es in Kapillaren Sauerstoff aufnimmt. Sie verläuft hinter der Aorta ascendens.", "تنقل الدم قليل الأكسجين إلى الرئة اليمنى حيث يأخذ الأكسجين في الشعيرات. وتمر خلف الأبهر الصاعد."],
    kl: ["Lungenembolien betreffen etwas häufiger die rechte Lunge. Warnzeichen: plötzliche Atemnot, Tachykardie, Brustschmerz beim Einatmen.", "تصيب الانصمامات الرئوية الرئة اليمنى أكثر قليلاً. علامات الإنذار: ضيق نفس مفاجئ وتسرع القلب وألم صدر عند الشهيق."],
  },
  "left-pulmonary-artery": {
    de: "Linke Lungenarterie", la: "Arteria pulmonalis sinistra", ar: "الشريان الرئوي الأيسر",
    fn: ["Versorgt die linke Lunge mit sauerstoffarmem Blut. Sie verläuft über dem linken Hauptbronchus.", "تزوّد الرئة اليسرى بالدم قليل الأكسجين. وتمر فوق القصبة الرئيسية اليسرى."],
    kl: ["Bei einem Verschluss durch Embolie sinkt die Sauerstoffsättigung. Pflege: SpO2 überwachen, Oberkörper hoch, Notruf, Sauerstoff nach Anordnung.", "عند الانسداد بانصمام ينخفض تشبع الأكسجين. التمريض: مراقبة SpO2 ورفع الجزء العلوي وطلب الإسعاف وإعطاء الأكسجين بأمر الطبيب."],
  },
  "right-superior-pulmonary-vein": {
    de: "Rechte obere Lungenvene", la: "Vena pulmonalis dextra superior", ar: "الوريد الرئوي الأيمن العلوي",
    fn: ["Bringt sauerstoffreiches Blut aus dem rechten Ober- und Mittellappen zum linken Vorhof. Lungenvenen sind die einzigen Venen mit sauerstoffreichem Blut.", "تعيد الدم الغني بالأكسجين من الفص العلوي والأوسط للرئة اليمنى إلى الأذين الأيسر. والأوردة الرئوية هي الأوردة الوحيدة التي تحمل دماً غنياً بالأكسجين."],
    kl: ["Bei der Katheterablation von Vorhofflimmern werden die Mündungen der Lungenvenen isoliert. Pflege nach dem Eingriff: Punktionsstelle, Blutung, Puls und Blutdruck kontrollieren.", "في الكيّ بالقسطرة لعلاج الرجفان الأذيني تُعزل فوهات الأوردة الرئوية. التمريض بعد التدخل: مراقبة موضع البزل والنزف والنبض والضغط."],
  },
  "right-inferior-pulmonary-vein": {
    de: "Rechte untere Lungenvene", la: "Vena pulmonalis dextra inferior", ar: "الوريد الرئوي الأيمن السفلي",
    fn: ["Führt das Blut aus dem rechten Unterlappen in den linken Vorhof.", "تنقل الدم من الفص السفلي للرئة اليمنى إلى الأذين الأيسر."],
    kl: ["Bei Lungenstauung durch Linksherzschwäche staut sich das Blut in diese Venen zurück, es entsteht ein Lungenödem. Pflege: Rasselgeräusche, Husten mit schaumigem Auswurf, Atemnot beobachten.", "عند احتقان الرئة بسبب ضعف القلب الأيسر يرتد الدم إلى هذه الأوردة فتحدث وذمة رئوية. التمريض: مراقبة الخراخر والسعال ببلغم رغوي وضيق التنفس."],
  },
  "left-superior-pulmonary-vein": {
    de: "Linke obere Lungenvene", la: "Vena pulmonalis sinistra superior", ar: "الوريد الرئوي الأيسر العلوي",
    fn: ["Bringt das Blut aus dem linken Oberlappen und der Lingula zum linken Vorhof.", "تعيد الدم من الفص العلوي للرئة اليسرى واللسينة إلى الأذين الأيسر."],
    kl: ["Zusammen mit den anderen Lungenvenen Ausgangspunkt vieler Vorhofflimmer-Auslöser. Pflege: Pulskontrolle auf Unregelmäßigkeit und EKG nach Anordnung.", "مع بقية الأوردة الرئوية مصدر لكثير من محفزات الرجفان الأذيني. التمريض: مراقبة النبض لعدم الانتظام وتخطيط القلب بأمر الطبيب."],
  },
  "left-inferior-pulmonary-vein": {
    de: "Linke untere Lungenvene", la: "Vena pulmonalis sinistra inferior", ar: "الوريد الرئوي الأيسر السفلي",
    fn: ["Führt das Blut aus dem linken Unterlappen in den linken Vorhof.", "تنقل الدم من الفص السفلي للرئة اليسرى إلى الأذين الأيسر."],
    kl: ["Auch hier gilt: Ein Rückstau bei Mitralklappenfehlern oder Linksherzinsuffizienz belastet die Lunge. Pflege: Lagerung mit erhöhtem Oberkörper, Flüssigkeitsbilanz.", "وهنا أيضاً: ارتداد الدم في عيوب الصمام التاجي أو قصور القلب الأيسر يرهق الرئة. التمريض: وضعية مع رفع الجزء العلوي وموازنة السوائل."],
  },
  "ascending-aorta": {
    de: "Aufsteigende Aorta", la: "Aorta ascendens (Pars ascendens aortae)", ar: "الأبهر الصاعد",
    fn: ["Erster Abschnitt der Hauptschlagader über der Aortenklappe. Aus ihr entspringen die Herzkranzarterien. Die Gefäßwand dehnt sich beim Auswurf und federt zurück (Windkesselfunktion).", "الجزء الأول من الشريان الأبهر فوق الصمام الأبهري، وتنشأ منه الشرايين التاجية. يتمدد جداره عند القذف ثم يرتد (وظيفة غرفة الضغط)."],
    kl: ["Ein Aneurysma oder eine Aortendissektion macht plötzlich stärksten Brust- oder Rückenschmerz („Vernichtungsschmerz“): Notfall. Pflege: Blutdruck an beiden Armen, Notruf, Ruhigstellen.", "تمدد الأبهر أو تسلخه يسبب ألماً فجائياً شديداً جداً في الصدر أو الظهر: حالة طارئة. التمريض: قياس الضغط في الذراعين وطلب الإسعاف وتهدئة المريض."],
  },
  "aortic-arch": {
    de: "Aortenbogen", la: "Arcus aortae", ar: "قوس الأبهر",
    fn: ["Bogen der Hauptschlagader nach hinten links. Aus ihm gehen Truncus brachiocephalicus, linke A. carotis communis und linke A. subclavia ab. Hier messen Pressorezeptoren den Blutdruck.", "قوس الأبهر ينعطف إلى الخلف نحو اليسار، وتخرج منه الشرايين العضدية الرأسية والسباتية المشتركة اليسرى وتحت الترقوة اليسرى. وتقيس فيه مستقبلات الضغط ضغط الدم."],
    kl: ["Ein Blutdruckunterschied zwischen den Armen kann auf eine Engstelle oder Dissektion hinweisen. Pflege: Blutdruck am Anfang an beiden Armen messen und dokumentieren.", "اختلاف الضغط بين الذراعين قد يدل على تضيق أو تسلخ. التمريض: قياس الضغط في الذراعين في البداية وتوثيقه."],
  },
  "descending-thoracic-aorta": {
    de: "Absteigende Brustaorta", la: "Aorta descendens (Pars thoracica aortae)", ar: "الأبهر النازل الصدري",
    fn: ["Verläuft hinter dem Herzen vor der Wirbelsäule und gibt Äste an Bronchien, Speiseröhre und Interkostalräume ab, bevor sie durch das Zwerchfell zur Bauchaorta wird.", "تمر خلف القلب أمام العمود الفقري وتعطي فروعاً للقصبات والمريء والمسافات بين الأضلاع قبل أن تمر عبر الحجاب الحاجز لتصبح الأبهر البطني."],
    kl: ["Hier tritt die Aortendissektion Typ B auf. Pflege: Blutdruck streng einstellen und überwachen, Schmerzen ernst nehmen.", "هنا يحدث تسلخ الأبهر من النوع B (دون القوس). التمريض: ضبط الضغط بدقة ومراقبته وأخذ الألم بجدية."],
  },
  "left-main-coronary-artery": {
    de: "Linke Herzkranzarterie (Hauptstamm)", la: "Arteria coronaria sinistra (Truncus)", ar: "الشريان التاجي الأيسر (الجذع)",
    fn: ["Entspringt aus dem linken Aortensinus und teilt sich schnell in den Ramus interventricularis anterior und den Ramus circumflexus. Sie versorgt große Teile der linken Kammer.", "ينشأ من الجيب الأبهري الأيسر وينقسم بسرعة إلى الفرع بين البطينين الأمامي والفرع الملتف. ويغذي أجزاء كبيرة من البطين الأيسر."],
    kl: ["Ein Verschluss des Hauptstamms ist lebensbedrohlich, weil große Teile der linken Kammer ausfallen. Pflege: Bei Brustschmerz sofort Notruf, Ruhe, Oberkörper hoch, EKG und Sauerstoff nach Anordnung.", "انسداد الجذع يهدد الحياة. التمريض: عند ألم الصدر طلب الإسعاف فوراً والراحة ورفع الجزء العلوي وتخطيط القلب والأكسجين بأمر الطبيب."],
  },
  "left-anterior-descending-artery": {
    de: "Vorderer Zwischenkammerast (RIVA, LAD)", la: "Ramus interventricularis anterior (Arteria interventricularis anterior)", ar: "الفرع بين البطينين الأمامي (LAD)",
    fn: ["Läuft in der vorderen Längsfurche zur Herzspitze. Versorgt Vorderwand, Herzspitze und den vorderen Teil des Septums.", "يسير في الأخدود الطولي الأمامي نحو قمة القلب. يغذي الجدار الأمامي وقمة القلب والجزء الأمامي من الحاجز."],
    kl: ["Häufigster Ort des Vorderwandinfarkts. Typisch: Brustschmerz mit Ausstrahlung in den linken Arm, Kiefer oder Oberbauch, Schweiß, Übelkeit. Frauen, Diabetiker und ältere Menschen haben oft untypische Zeichen.", "أكثر موضع لاحتشاء الجدار الأمامي. المعتاد: ألم الصدر مع انتشار إلى الذراع اليسرى أو الفك أو أعلى البطن وتعرق وغثيان. وتظهر لدى النساء والسكري وكبار السن أعراض غير نمطية."],
  },
  "circumflex-artery": {
    de: "Umschlingender Ast", la: "Ramus circumflexus (Arteria circumflexa)", ar: "الفرع الملتف",
    fn: ["Verläuft in der Kranzfurche um die linke Seite des Herzens nach hinten. Versorgt Seiten- und Teile der Hinterwand der linken Kammer sowie den linken Vorhof.", "يمر في الأخدود التاجي حول الجانب الأيسر للقلب إلى الخلف. يغذي الجدار الجانبي وأجزاء من الجدار الخلفي للبطين الأيسر والأذين الأيسر."],
    kl: ["Verschlüsse verursachen Seiten- und Hinterwandinfarkte, die im EKG schwerer zu erkennen sein können. Pflege: Auch unklare Beschwerden (Übelkeit, Schwäche) ernst nehmen.", "الانسدادات تسبب احتشاء الجدار الجانبي والخلفي وقد يصعب كشفها في التخطيط. التمريض: أخذ الأعراض غير الواضحة (غثيان وضعف) بجدية."],
  },
  "right-coronary-artery": {
    de: "Rechte Herzkranzarterie", la: "Arteria coronaria dextra", ar: "الشريان التاجي الأيمن",
    fn: ["Verläuft in der Kranzfurche nach rechts und hinten. Versorgt rechten Vorhof, rechte Kammer, die Hinterwand und meist Sinus- und AV-Knoten.", "يمر في الأخدود التاجي نحو اليمين والخلف. يغذي الأذين الأيمن والبطين الأيمن والجدار الخلفي وغالباً العقدة الجيبية والأذينية البطينية."],
    kl: ["Ein Hinterwandinfarkt kann Bradykardie und AV-Block auslösen. Pflege: Puls und Blutdruck engmaschig kontrollieren, bei Pulsabfall oder Schwindel Arzt informieren.", "احتشاء الجدار الخلفي قد يسبب بطء القلب وحصار أذيني بطيني. التمريض: مراقبة النبض والضغط عن قرب وإبلاغ الطبيب عند هبوط النبض أو الدوار."],
  },
  "coronary-sinus": {
    de: "Koronarsinus", la: "Sinus coronarius", ar: "الجيب التاجي",
    fn: ["Sammelvene an der Rückseite des Herzens, die den größten Teil des venösen Blutes der Herzwand in den rechten Vorhof leitet.", "وريد تجميعي في الجهة الخلفية للقلب يفرّغ معظم الدم الوريدي لجدار القلب في الأذين الأيمن."],
    kl: ["Bei Herzschrittmacher- oder Elektrophysiologie-Untersuchungen wird er gezielt sondiert. Bei Verschluss der Koronararterien ändert sich der Rückfluss.", "يُسبر عمداً أثناء زرع المنظم أو الفحوص الكهربائية. وعند انسداد الشرايين التاجية يتغير الارتجاع."],
  },
  "great-cardiac-vein": {
    de: "Große Herzvene", la: "Vena cardiaca magna", ar: "وريد القلب الكبير",
    fn: ["Begleitet den RIVA in der vorderen Längsfurche und mündet in den Koronarsinus. Sammelt Blut der Vorderwand.", "يرافق الفرع بين البطينين الأمامي ويصب في الجيب التاجي. يجمع دم الجدار الأمامي."],
    kl: ["Wird für die Platzierung von Schrittmachersonden bei CRT (Resynchronisation) genutzt. Pflege: Schrittmacher-Kontrolle, Wundkontrolle, Armbewegung kurz einschränken.", "تُستخدم لوضع أسلاك المنظم في العلاج بإعادة المزامنة القلبية (CRT). التمريض: متابعة المنظم ومراقبة الجرح وتقييد حركة الذراع لفترة قصيرة."],
  },
  "middle-cardiac-vein": {
    de: "Mittlere Herzvene", la: "Vena cardiaca media (Vena interventricularis posterior)", ar: "وريد القلب الأوسط",
    fn: ["Läuft in der hinteren Längsfurche mit dem hinteren Zwischenkammerast und mündet in den Koronarsinus.", "يسير في الأخدود الطولي الخلفي مع الفرع الخلفي بين البطينين ويصب في الجيب التاجي."],
    kl: ["Als Abfluss der Hinterwand spielt sie bei Durchblutungsstörungen der Hinterwand mit. Pflege: Siehe Hinterwandinfarkt.", "كمصرف للجدار الخلفي تتأثر عند اضطراب تروية الجدار الخلفي. التمريض: انظر احتشاء الجدار الخلفي."],
  },
  "small-cardiac-vein": {
    de: "Kleine Herzvene", la: "Vena cardiaca parva", ar: "وريد القلب الصغير",
    fn: ["Läuft an der rechten Seite des Herzens neben der rechten Kranzarterie und mündet in den Koronarsinus oder den rechten Vorhof.", "تسير على الجانب الأيمن للقلب بجانب الشريان التاجي الأيمن وتصب في الجيب التاجي أو الأذين الأيمن."],
    kl: ["Klinisch seltener bedeutsam; wichtig für das Verständnis, dass auch das Herz einen eigenen venösen Abfluss hat.", "أقل أهمية سريرياً؛ ومهمة لفهم أن للقلب أيضاً مصرفاً وريدياً خاصاً به."],
  },
  "other-cardiac-veins": {
    de: "Weitere Herzvenen", la: "Venae cardiacae (Venae ventriculi sinistri posteriores, Venae anteriores cordis, Venae cardiacae minimae)", ar: "أوردة قلبية أخرى",
    fn: ["Kleine Venen der Kammerwände. Die vorderen Herzvenen münden direkt in den rechten Vorhof, die übrigen über den Koronarsinus.", "أوردة صغيرة في جدران البطينين. الأوردة الأمامية تصب مباشرة في الأذين الأيمن وبقيتها عبر الجيب التاجي."],
    kl: ["Zeigen, dass Herzmuskel auch venös abfließen muss; bei Stauung der rechten Seite ist der Rückfluss erschwert.", "تبين أن عضلة القلب تحتاج مصرفاً وريدياً أيضاً؛ وعند احتقان الجانب الأيمن يصعب الارتجاع."],
  },
};

/** Überblick zur Pflege beim Herzen (Krankheiten, Zeichen, Maßnahmen, Beobachtung, Fachwörter, Lektionen). */
export const HEART_CARE = {
  diseases: ["Koronare Herzkrankheit und Herzinfarkt", "Herzinsuffizienz", "Herzrhythmusstörungen (z. B. Vorhofflimmern)", "Klappenfehler", "Arterielle Hypertonie", "Lungenembolie"],
  symptoms: ["Brust- oder Druckschmerz (Angina pectoris), Ausstrahlung in Arm, Kiefer, Oberbauch", "Atemnot, Husten, Leistungsknick", "Ödeme in Beinen und Knöcheln, Gewichtszunahme", "Herzrasen, Herzstolpern, Schwindel, Synkope", "Blässe, kalter Schweiß, Zyanose"],
  actions: ["Bei Verdacht auf Infarkt: Notruf, Ruhe, Oberkörper hoch, nicht allein lassen, Vitalzeichen", "Medikamente nach Plan (Antikoagulation, Diuretika, Betablocker), Wirkung und Nebenwirkung beobachten", "Flüssigkeitsbilanz, tägliches Wiegen, Beine hochlagern bei Ödemen", "Thrombose- und Dekubitusprophylaxe, Mobilisation nach Anordnung", "Anleitung und Beratung zu Salz, Bewegung, Nikotinverzicht"],
  monitoring: ["Puls (Frequenz, Rhythmus, Qualität), Blutdruck, Atemfrequenz, SpO2, Temperatur", "Ödeme, Gewicht, Ein- und Ausfuhr", "Haut (Farbe, Temperatur), Bewusstsein, Schmerzen", "EKG- und Laborbefunde nach Anordnung"],
  terms: [["Tachykardie / Bradykardie", "Puls über 100 / unter 60 pro Minute"], ["Arrhythmie", "unregelmäßiger Herzschlag"], ["Ischämie", "Minderdurchblutung"], ["Systole / Diastole", "Anspannungs- und Auswurfphase / Erschlaffungs- und Füllungsphase"], ["Vorlast / Nachlast", "Füllung des Herzens / Widerstand, gegen den es pumpt"], ["Ejektionsfraktion", "Anteil des Kammerblutes, der pro Schlag ausgeworfen wird"]],
  lessons: ["hypertonie", "herzinsuffizienz", "herzinfarkt", "thrombose"],
};

export const HEART_QUIZ: { q: [string, string]; o: [string, string, string, string]; why: [string, string] }[] = [
  { q: ["Welche Herzklappe liegt zwischen linkem Vorhof und linker Kammer?", "أي صمام يقع بين الأذين الأيسر والبطين الأيسر؟"], o: ["Mitralklappe", "Trikuspidalklappe", "Aortenklappe", "Pulmonalklappe"], why: ["Die Mitralklappe (Valva mitralis) hat zwei Segel. Die Trikuspidalklappe sitzt rechts.", "الصمام التاجي (ثنائي الشرفات) يقع في الجهة اليسرى والثلاثي الشرفات في اليمنى."] },
  { q: ["Welche Arterie ist am häufigsten vom Vorderwandinfarkt betroffen?", "أي شريان يصاب غالباً في احتشاء الجدار الأمامي؟"], o: ["Ramus interventricularis anterior (RIVA)", "Rechte Koronararterie", "Arteria pulmonalis", "Vena cardiaca magna"], why: ["Der RIVA (LAD) versorgt die Vorderwand und die Herzspitze.", "الفرع بين البطينين الأمامي (LAD) يغذي الجدار الأمامي وقمة القلب."] },
  { q: ["Welche Gefäße führen sauerstoffreiches Blut zum Herzen?", "أي أوعية تعيد دماً غنياً بالأكسجين إلى القلب؟"], o: ["Die Lungenvenen", "Die Hohlvenen", "Die Lungenarterien", "Der Koronarsinus"], why: ["Die vier Lungenvenen münden in den linken Vorhof.", "الأوردة الرئوية الأربعة تصب في الأذين الأيسر."] },
  { q: ["Warum ist die Wand der linken Kammer dicker als die der rechten?", "لماذا جدار البطين الأيسر أسمك من الأيمن؟"], o: ["Sie pumpt gegen den hohen Druck im Körperkreislauf", "Sie pumpt nur in die Lunge", "Sie enthält die Klappen", "Sie nimmt das venöse Blut auf"], why: ["Der Körperkreislauf hat einen deutlich höheren Widerstand als der Lungenkreislauf.", "مقاومة الدورة الكبرى أعلى بكثير من الدورة الرئوية."] },
  { q: ["Wo entspringen die Herzkranzarterien?", "من أين تنشأ الشرايين التاجية؟"], o: ["Direkt über der Aortenklappe", "Aus dem Truncus pulmonalis", "Aus der oberen Hohlvene", "Aus dem linken Vorhof"], why: ["Sie gehen aus der aufsteigenden Aorta hinter den Taschen der Aortenklappe ab.", "تنشأ من الأبهر الصاعد خلف جيوب الصمام الأبهري."] },
];


function layerOf(id: string): HeartLayer {
  if (id.endsWith("-wall")) return "wall";
  if (/^(right|left)-(atrium|ventricle)$/.test(id)) return "chamber";
  if (/valve|papillary/.test(id)) return "valve";
  if (/cardiac-vein|coronary-sinus/.test(id)) return "cardiac-vein";
  if (/coronary-artery|descending-artery|circumflex/.test(id) || id === "left-anterior-descending-artery") return "coronary";
  return "vessel";
}
const RIGHT_SIDE = /^(right-|tricuspid|superior-vena|inferior-vena|pulmonary-trunk|coronary-sinus)/;
function colorFor(id: string, layer: string): number {
  switch (layer as HeartLayer) {
    case "wall": return 0xb4574a;
    case "chamber": return RIGHT_SIDE.test(id) ? 0x7b2230 : 0xd23b34;
    case "valve": return id.includes("papillary") ? 0xc08a62 : 0xeadfc4;
    case "vessel":
      if (/vena-cava|pulmonary-vein/.test(id)) return /pulmonary-vein/.test(id) ? 0xc9503f : 0x7a3a52;
      if (/pulmonary-trunk|pulmonary-artery/.test(id)) return 0x8a5a78;
      return 0xe0a595;
    case "coronary": return 0xc43a30;
    case "cardiac-vein": return 0x5d2c52;
  }
}

export const HEART_CFG: AtlasConfig = {
  key: "heart",
  modelUrl: "/models/heart.glb",
  items: HEART_ITEMS,
  layers: HEART_LAYERS,
  layerOf,
  color: colorFor,
  shell: ["wall"],
  innerLabel: ["Innenansicht (Herzwand durchsichtig)", "المنظر الداخلي (جدار شفاف)", "Inside view (wall transparent)", "Vue interne (paroi transparente)", "İç görünüm (duvar saydam)"],
  careTitle: ["Pflege-Überblick Herz", "نظرة تمريضية على القلب", "Nursing overview: heart", "Aperçu infirmier : cœur", "Hemşirelik özeti: kalp"],
  dist: 0.34, minDist: 0.08, maxDist: 0.9, clipRange: 0.07, explodeScale: 2.2,
  care: HEART_CARE as AtlasConfig["care"],
  quiz: HEART_QUIZ,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Referenzanatomie eines erwachsenen Mannes, nur zum Lernen.", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). تشريح مرجعي لرجل بالغ، للتعلم فقط.", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (modified). Adult male reference anatomy, for learning only.", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (modifié). Anatomie de référence, pour apprendre.", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (düzenlendi). Yetişkin erkek referans anatomisi, yalnızca öğrenme için."],
};
