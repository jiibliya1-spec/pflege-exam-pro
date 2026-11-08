/**
 * Atlas Fortpflanzungssystem: Beschriftungen zu den 16 benannten Strukturen des BodyParts3D-Modells (public/models/reproductive.glb).
 * Definition: tools/defs/reproductive.json. Paarige Strukturen sind zusammengefasst.
 * WICHTIG: BodyParts3D enthält nur MÄNNLICHE Fortpflanzungsorgane. Weibliche Organe (Gebärmutter, Eileiter, Eierstöcke, Scheide, Brust),
 * Hodensack, Samenstrang, Cowper-Drüsen und Samenleiter-Verlauf im Leistenkanal fehlen im Modell. Sie werden in einem klar
 * gekennzeichneten Schema (kein 3D-Modell) mit Zyklusdiagramm dargestellt (ReproSchemas).
 * Einige Strukturen sind im Quellmodell sehr grob (Hoden 107 Eckpunkte, Harnblase 126).
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, AtlasPath, AtlasQuiz } from "./atlasTypes";

export const REPRO_LAYERS: AtlasLayer[] = [
  { id: "gonad", de: "Hoden und Nebenhoden", ar: "الخصيتان والبربخ", en: "Testes and epididymis", fr: "Testicules et épididyme", tr: "Testis ve epididim" },
  { id: "duct", de: "Samenleiter", ar: "الأسهران", en: "Deferent ducts", fr: "Canaux déférents", tr: "Vas deferens" },
  { id: "gland", de: "Geschlechtsdrüsen (Prostata, Bläschendrüsen)", ar: "الغدد الجنسية (البروستاتا والحويصلات المنوية)", en: "Accessory glands", fr: "Glandes annexes", tr: "Yardımcı bezler" },
  { id: "penis", de: "Penis", ar: "القضيب", en: "Penis", fr: "Pénis", tr: "Penis" },
  { id: "urinary", de: "Harnwege (Blase, Harnröhre, Harnleiter)", ar: "المجاري البولية (المثانة والإحليل والحالبان)", en: "Urinary tract", fr: "Voies urinaires", tr: "İdrar yolları" },
  { id: "context", de: "Orientierung: Enddarm, Beckenboden", ar: "توجيه: المستقيم وقاع الحوض", en: "Orientation: rectum, pelvic floor", fr: "Repères : rectum, plancher pelvien", tr: "Yön bulma: rektum, pelvik taban" },
  { id: "shell", de: "Becken und Lendenwirbelsäule (Orientierung)", ar: "الحوض والعمود القطني (للتوجيه)", en: "Pelvis and lumbar spine", fr: "Bassin et colonne lombaire", tr: "Pelvis ve lomber omurga" },
];

type It = [string, string, string, string, string, string, string, [string, string]?];
const I = (a: It): AtlasItem => ({ de: a[0], la: a[1], ar: a[2], fn: [a[3], a[4]], kl: [a[5], a[6]], ...(a[7] ? { note: a[7] } : {}) });
const PAIR: [string, string] = ["Rechte und linke Seite sind im Modell zu einer Struktur zusammengefasst.", "الجانبان الأيمن والأيسر مدمجان في بنية واحدة."];
const COARSE: [string, string] = ["Rechte und linke Seite zusammengefasst; im Quellmodell sehr grob (wenige Eckpunkte), Feinbau (Läppchen, Samenkanälchen) fehlt.", "الجانبان مدمجان؛ في النموذج المصدر خشن جداً والتركيب الدقيق (الفصيصات والأنيبيبات المنوية) غير موجود."];

const items: Record<string, AtlasItem> = {
  testes: I(["Hoden", "Testes", "الخصيتان",
    "Paarige Keimdrüsen im Hodensack. Sie bilden Spermien (Samenkanälchen, bei etwa 34 bis 35 °C, also unter Körpertemperatur) und Testosteron (Leydig-Zellen). Steuerung durch FSH und LH der Hypophyse.", "غدتان تناسليتان زوجيتان في كيس الصفن. تنتجان الحيوانات المنوية (الأنيبيبات المنوية عند نحو 34 إلى 35 درجة أي أقل من حرارة الجسم) والتستوستيرون (خلايا لايديغ). يتحكم بهما FSH وLH من النخامية.",
    "Hodentorsion (Verdrehung des Samenstrangs): plötzlicher starker Schmerz, hochstehender Hoden, oft Übelkeit; Notfall, Operation innerhalb weniger Stunden (Rettung etwa unter 6 Stunden). Hodentumor: schmerzlose Verhärtung, häufigster Tumor junger Männer; Selbstuntersuchung anleiten. Maldescensus testis (Hodenhochstand) wird im Kindesalter operiert. Keine Wärmepackungen bei Verdacht auf Torsion.", "التواء الخصية (التواء الحبل المنوي): ألم مفاجئ شديد وخصية مرتفعة وغالباً غثيان؛ طارئ ويجب الجراحة خلال ساعات قليلة (إنقاذ غالباً قبل 6 ساعات). ورم الخصية: تصلب غير مؤلم وهو أشيع أورام الشباب؛ تعليم الفحص الذاتي. هبوط الخصية الناقص يُعالج جراحياً في الطفولة. لا كمادات دافئة عند الشك بالالتواء.", COARSE]),
  epididymis: I(["Nebenhoden", "Epididymis", "البربخ",
    "Der aufgewundene Gang auf dem Hoden: hier reifen die Spermien und werden gespeichert; Transport etwa 10 bis 14 Tage.", "القناة الملتفة فوق الخصية: تنضج الحيوانات المنوية وتُخزَّن هنا؛ ويستغرق العبور نحو 10 إلى 14 يوماً.",
    "Epididymitis: Schmerz, Schwellung und Rötung des Hodensacks, oft Folge von Harnwegsinfekt oder Geschlechtskrankheit (Chlamydien); Fieber. Pflege: Hochlagern (Hodenbänkchen), Kühlung, Antibiotika nach Anordnung, Schmerztherapie.", "التهاب البربخ: ألم وتورم واحمرار الصفن وغالباً بعد التهاب بولي أو مرض منقول جنسياً (كلاميديا)؛ حمى. التمريض: رفع الصفن (حامل) وتبريد ومضادات حيوية حسب الأمر وعلاج الألم.", COARSE]),
  "deferent-ducts": I(["Samenleiter", "Ductus deferens", "الأسهران (القناة الناقلة)",
    "Muskulöse Röhre (etwa 35 bis 40 cm), die Spermien vom Nebenhoden durch den Leistenkanal in das Becken transportiert und in die Harnröhre mündet. Bei der Ejakulation kontrahiert er kräftig.", "أنبوب عضلي (نحو 35 إلى 40 سم) ينقل الحيوانات المنوية من البربخ عبر القناة الإربية إلى الحوض ويصب في الإحليل. وينقبض بقوة عند القذف.",
    "Bei der Vasektomie (Sterilisation des Mannes) wird er durchtrennt; die Hormonbildung und der Erguss bleiben, es fehlen Spermien (Kontrolle des Ejakulats nach Wochen). Im Leistenkanal Ort der indirekten Leistenhernie: Schmerz, Vorwölbung beim Husten, Bruchpforte; Einklemmung ist ein Notfall.", "في قطع القناة (تعقيم الرجل) تُقطع؛ يبقى الهرمون والقذف وتغيب الحيوانات المنوية (فحص القذف بعد أسابيع). وفي القناة الإربية موضع الفتق الإربي غير المباشر: ألم وانتفاخ عند السعال وفتحة الفتق؛ والاختناق حالة طارئة.", ["Der Verlauf im Samenstrang und Leistenkanal ist im Modell nicht ausgearbeitet; der Samenleiter ist nur im Beckenbereich gut zu sehen.", "مسار الحبل المنوي والقناة الإربية غير مفصّل في النموذج؛ ويظهر الأسهر جيداً في الحوض فقط."]]),
  "seminal-vesicles": I(["Bläschendrüsen", "Glandulae vesiculosae (Vesiculae seminales)", "الحويصلتان المنويتان",
    "Liegen hinter der Blase und bilden etwa 60 % des Ejakulats (fruktosereiche, alkalische Flüssigkeit, die Spermien nährt).", "تقعان خلف المثانة وتصنعان نحو 60% من القذف (سائل قلوي غني بالفركتوز يغذي الحيوانات المنوية).",
    "Entzündungen (Vesikulitis) mit Schmerz, Blut im Ejakulat (Hämatospermie); vor allem bei Prostataentzündung. Bei der digitalen rektalen Untersuchung sind sie normalerweise nicht tastbar.", "الالتهابات (التهاب الحويصلات) مع ألم ودم في السائل المنوي؛ وخاصة مع التهاب البروستاتا. في الفحص الإصبعي الشرجي لا تُلمس عادة.", PAIR]),
  prostate: I(["Vorsteherdrüse (Prostata)", "Prostata (Glandula prostatica)", "غدة البروستاتا",
    "Kastaniengroße Drüse (etwa 20 g) unter der Harnblase, die die Harnröhre umschließt. Ihr Sekret (etwa 30 % des Ejakulats) enthält das PSA und macht die Spermien beweglich. Sie liegt vor dem Enddarm und ist von dort tastbar.", "غدة بحجم حبة الكستناء (نحو 20 غ) أسفل المثانة تحيط بالإحليل. تفرز نحو 30% من القذف وتحتوي PSA وتجعل الحيوانات المنوية متحركة. تقع أمام المستقيم ويمكن جسها منه.",
    "Benigne Prostatahyperplasie (BPH) ab etwa 50 Jahren: schwacher Harnstrahl, Nachträufeln, Restharn, Nykturie, Harnverhalt. Prostatakarzinom: häufigster Krebs des Mannes, oft lange ohne Beschwerden; Früherkennung durch Tastuntersuchung und ärztliche PSA-Besprechung. Nach TUR-P oder Prostatektomie: Spülkatheter, Urinfarbe (Hämaturie), Blasenspasmen, Harninkontinenz, Beckenbodentraining. Katheterlegung beim Mann: Prostata kann den Weg verengen.", "تضخم البروستاتا الحميد بعد نحو سن 50: ضعف تيار البول وتقطير وبقايا بول وتبول ليلي واحتباس. سرطان البروستاتا: أشيع سرطان عند الرجل وغالباً بلا أعراض طويلاً؛ كشف مبكر بالفحص الإصبعي ومناقشة PSA مع الطبيب. بعد استئصال البروستاتا عبر الإحليل أو الكلي: قسطرة غسيل ولون البول (دم) وتقلصات المثانة وسلس البول وتدريب قاع الحوض. وعند القسطرة عند الرجل قد تضيّق البروستاتا الطريق.", ["Im Modell als Gesamtorgan; Zonen (Übergangszone, periphere Zone) sind nicht getrennt.", "في النموذج عضو كامل؛ المناطق (الانتقالية والمحيطية) غير مفصولة."]]),
  "corpora-cavernosa": I(["Penisschwellkörper", "Corpora cavernosa penis", "الجسمان الكهفيان للقضيب",
    "Zwei Schwellkörper, die sich bei sexueller Erregung mit Blut füllen (Parasympathikus) und die Erektion verursachen.", "جسمان إسفنجيان يمتلئان بالدم عند الإثارة الجنسية (نظير الودي) ويسببان الانتصاب.",
    "Erektionsstörung hat häufig körperliche Ursachen (Diabetes, Gefäßverkalkung, Medikamente, Nervenschäden) und seelische Gründe; sensibel ansprechen, Diskretion wahren. Priapismus (Dauererektion über 4 Stunden) ist ein Notfall.", "ضعف الانتصاب له غالباً أسباب جسدية (سكري وتصلب الشرايين وأدوية وتلف أعصاب) ونفسية؛ التحدث بلباقة والحفاظ على الخصوصية. الانتصاب المستمر فوق 4 ساعات (القساح) حالة طارئة.", ["Gefäße und Nerven des Penis sind nicht einzeln dargestellt.", "أوعية وأعصاب القضيب غير ظاهرة منفردة."]]),
  "corpus-spongiosum": I(["Harnröhrenschwellkörper", "Corpus spongiosum penis", "الجسم الإسفنجي",
    "Umgibt die Harnröhre und verhindert, dass sie bei der Erektion zugedrückt wird; bildet vorn die Eichel.", "يحيط بالإحليل ويمنع انضغاطه عند الانتصاب؛ ويشكل الحشفة من الأمام.",
    "Verletzungen (z. B. Penisfraktur) und Harnröhrenstrikturen. Beim Katheterlegen: Gleitmittel mit Lidocain, Penis senkrecht strecken, nie gegen Widerstand zwingen.", "إصابات (مثل كسر القضيب) وتضيقات الإحليل. عند القسطرة: مادة تزليق مع ليدوكائين ومد القضيب عمودياً وعدم الإكراه عند المقاومة.", undefined]),
  "glans-penis": I(["Eichel", "Glans penis", "الحشفة",
    "Verdickte Spitze des Penis mit der äußeren Harnröhrenmündung (Meatus). Sehr empfindlich, von der Vorhaut bedeckt.", "الطرف المنتفخ للقضيب وفيه الفتحة الخارجية للإحليل. شديدة الحساسية ومغطاة بالقلفة.",
    "Vorhautverengung (Phimose), Entzündung der Eichel (Balanitis, häufig bei Diabetes). Intimpflege: Vorhaut zurückziehen, waschen, zurückschieben (sonst Paraphimose, Notfall). Vor dem Katheter Eichel desinfizieren.", "ضيق القلفة (الحَبَن) والتهاب الحشفة (غالباً مع السكري). العناية الحميمة: سحب القلفة وغسلها وإعادتها (وإلا حدث الحصر وهو طارئ). قبل القسطرة تُعقّم الحشفة.", undefined]),
  urethra: I(["Männliche Harnröhre", "Urethra masculina (Pars prostatica, membranacea, spongiosa)", "الإحليل عند الرجل",
    "Etwa 20 cm lang, S-förmig; leitet Urin und Samen nach außen. Sie durchläuft die Prostata, den Beckenboden mit dem Schließmuskel und den Penis.", "طوله نحو 20 سم وبشكل S؛ يوصل البول والمني للخارج. يمر عبر البروستاتا وقاع الحوض مع المصرة ثم القضيب.",
    "Transurethraler Blasenkatheter beim Mann: Penis anheben und gerade halten, Gleitmittel, ca. 20 cm einführen, an der Engstelle (Sphinkter, Prostata) nicht gewaltsam; Katheter erst nach Urinfluss weiterführen, Vorhaut zurückschieben (Paraphimose). Infektionsrisiko: Katheter nur bei Indikation, früh entfernen. Harnröhrenenge (Striktur) und Urethritis (STI) möglich.", "القسطرة البولية عند الرجل: رفع القضيب وتثبيته مستقيماً وتزليق وإدخال نحو 20 سم وعدم الإكراه عند الاختناق (المصرة والبروستاتا)؛ ويُدفع القسطر بعد ظهور البول وتُعاد القلفة (الحصر). خطر العدوى: القسطرة عند الاستطباب فقط وإزالتها مبكراً. وقد يحدث تضيق الإحليل والتهابه (عدوى جنسية).", ["Der Sphinkter und die Cowper-Drüsen sind nicht getrennt dargestellt.", "المصرة وغدد كاوبر غير ظاهرة منفصلة."]]),
  "urinary-bladder": I(["Harnblase", "Vesica urinaria", "المثانة",
    "Hohlmuskel, der Urin sammelt (Fassungsvermögen etwa 500 ml; Harndrang bei 200 bis 300 ml) und bei der Entleerung (Miktion) austreibt.", "عضو عضلي مجوف يجمع البول (سعة نحو 500 مل ويظهر الإلحاح عند 200 إلى 300 مل) ويطرده عند التبول.",
    "Harnverhalt (Restharn), Zystitis, Inkontinenz. Blasenkatheter (transurethral oder suprapubisch) nur mit ärztlicher Indikation, Dokumentation, Urinfarbe und -menge beobachten.", "احتباس البول وبقايا البول والتهاب المثانة وسلس البول. القسطرة (عبر الإحليل أو فوق العانة) بأمر طبي وتوثيق ومراقبة لون وكمية البول.", ["Im Quellmodell sehr grob (nur 126 Eckpunkte); siehe Atlas Harnsystem für die genauere Darstellung.", "في النموذج المصدر خشنة جداً (126 رأساً فقط)؛ انظر أطلس الجهاز البولي لعرض أدق."]]),
  ureters: I(["Harnleiter", "Ureteres", "الحالبان",
    "Transportieren den Urin von den Nieren zur Blase. Sie münden schräg in die Blasenwand und verhindern so den Rückfluss.", "ينقلان البول من الكليتين إلى المثانة. ويصبّان بشكل مائل في جدار المثانة فيمنعان الارتجاع.",
    "Nierenstein im Harnleiter: kolikartiger Flankenschmerz mit Ausstrahlung in die Leiste. Siehe Atlas Harnsystem.", "حصاة الحالب: ألم مغصي في الخاصرة يمتد إلى الأربية. انظر أطلس الجهاز البولي.", PAIR]),
  rectum: I(["Enddarm (Orientierung)", "Rectum", "المستقيم (للتوجيه)",
    "Liegt hinter Prostata und Bläschendrüsen; deshalb sind Prostata und Beckenorgane rektal tastbar.", "يقع خلف البروستاتا والحويصلات؛ لذا يمكن جس البروستاتا وأعضاء الحوض عبر المستقيم.",
    "Digital-rektale Untersuchung (DRU): Seitenlage mit angezogenen Beinen, Handschuhe, Gleitmittel, Intimsphäre. Siehe Atlas Verdauungssystem.", "الفحص الإصبعي الشرجي: وضعية الجانب مع ثني الساقين وقفازات ومزلق وخصوصية. انظر أطلس الجهاز الهضمي.", undefined]),
  "levator-ani": I(["Beckenbodenmuskeln (Musculus levator ani und Steißbeinmuskel)", "M. levator ani (Pubococcygeus, Puborectalis, Iliococcygeus), M. coccygeus", "عضلات قاع الحوض (رافعة الشرج والعصعصية)",
    "Bilden den Boden des Beckens, tragen Blase, Prostata und Enddarm und unterstützen die Kontinenz.", "تشكل قاع الحوض وتحمل المثانة والبروستاتا والمستقيم وتدعم الاستمساك.",
    "Beckenbodenschwäche (Alter, Geburt, Prostatektomie) führt zu Belastungsinkontinenz. Beckenbodentraining (Anspannen, wie Harnstrahl anhalten) nach Anleitung. Siehe auch Bewegungsapparat.", "ضعف قاع الحوض (العمر والولادة واستئصال البروستاتا) يسبب سلس الجهد. تدريب قاع الحوض (الشد كإيقاف تيار البول) بالتعليم. انظر أيضاً الجهاز الحركي.", PAIR]),
  "hip-bone": I(["Hüftbein (Orientierung)", "Os coxae", "عظم الورك (للتوجيه)", "Bildet das knöcherne Becken.", "يشكل الحوض العظمي.", "Siehe Atlas Bewegungsapparat. Beim Mann ist das Becken schmaler als bei der Frau; der Geburtskanal ist bei der Frau weiter.", "انظر أطلس الجهاز الحركي. حوض الرجل أضيق من حوض المرأة وقناة الولادة عندها أوسع.", PAIR]),
  sacrum: I(["Kreuzbein (Orientierung)", "Os sacrum", "العجز (للتوجيه)", "Hinterer Abschluss des Beckenrings.", "الحد الخلفي لحلقة الحوض.", "Siehe Atlas Bewegungsapparat.", "انظر أطلس الجهاز الحركي.", undefined]),
  "lumbar-spine": I(["Lendenwirbelsäule (Orientierung)", "Vertebrae lumbales", "العمود القطني (للتوجيه)", "Bezugsachse; unten L4/L5 mit Bandscheiben.", "محور مرجعي؛ في الأسفل L4/L5 مع الأقراص.", "Siehe Atlas Bewegungsapparat.", "انظر أطلس الجهاز الحركي.", undefined]),
};
export const REPRO_ITEMS = items;

const R = (de: string, ar: string, en: string, fr: string, tr: string): [string, string, string, string, string] => [de, ar, en, fr, tr];
const St = (title: [string, string, string, string, string], text: [string, string], ids: string[], note?: [string, string]) => ({ title, text, ids, ...(note ? { note } : {}) });

export const REPRO_PATHS: AtlasPath[] = [
  {
    id: "sperm",
    title: R("Weg der Spermien", "مسار الحيوانات المنوية", "Path of sperm", "Trajet des spermatozoïdes", "Sperm yolu"),
    intro: ["Vom Hoden bis zur Eichel: Bildung, Reifung, Transport und Beimengung der Sekrete.", "من الخصية إلى الحشفة: التكوين والنضج والنقل وإضافة الإفرازات."],
    steps: [
      St(R("Hoden", "الخصية", "Testis", "Testicule", "Testis"), ["In den Samenkanälchen entstehen Spermien (etwa 70 Tage); Testosteron wird in den Leydig-Zellen gebildet.", "تتكوّن الحيوانات المنوية في الأنيبيبات المنوية (نحو 70 يوماً) ويصنع التستوستيرون في خلايا لايديغ."], ["testes"]),
      St(R("Nebenhoden", "البربخ", "Epididymis", "Épididyme", "Epididim"), ["Reifung und Speicherung (10 bis 14 Tage).", "نضج وتخزين (10 إلى 14 يوماً)."], ["epididymis"]),
      St(R("Samenleiter", "الأسهر", "Deferent duct", "Canal déférent", "Vas deferens"), ["Schneller Transport durch den Leistenkanal ins Becken.", "نقل سريع عبر القناة الإربية إلى الحوض."], ["deferent-ducts"], ["Der Verlauf im Samenstrang ist im Modell nicht ausgearbeitet.", "مسار الحبل المنوي غير مفصّل في النموذج."]),
      St(R("Drüsen", "الغدد", "Glands", "Glandes", "Bezler"), ["Bläschendrüsen und Prostata liefern den Großteil des Ejakulats.", "الحويصلتان والبروستاتا تقدمان معظم القذف."], ["seminal-vesicles", "prostate"]),
      St(R("Harnröhre und Eichel", "الإحليل والحشفة", "Urethra and glans", "Urètre et gland", "Üretra ve glans"), ["Das Ejakulat verlässt den Körper durch die Harnröhre; ein Schließmuskel verhindert den Rückfluss in die Blase.", "يخرج القذف عبر الإحليل؛ وتمنع مصرة الارتجاع إلى المثانة."], ["urethra", "corpus-spongiosum", "glans-penis"]),
    ],
  },
  {
    id: "catheter",
    title: R("Blasenkatheter beim Mann", "قسطرة المثانة عند الرجل", "Male bladder catheter", "Sondage vésical masculin", "Erkek idrar sondası"),
    intro: ["Der Weg der Harnröhre mit Engstellen.", "مسار الإحليل مع مواضع الضيق."],
    steps: [
      St(R("Eichel und Harnröhrenmündung", "الحشفة وفتحة الإحليل", "Glans and meatus", "Gland et méat", "Glans ve meatus"), ["Vorhaut zurückziehen, Eichel desinfizieren, Penis gerade nach oben halten.", "سحب القلفة وتعقيم الحشفة وتثبيت القضيب مستقيماً للأعلى."], ["glans-penis", "corpus-spongiosum"]),
      St(R("Harnröhre", "الإحليل", "Urethra", "Urètre", "Üretra"), ["Etwa 20 cm, S-Form; Gleitmittel mit Lokalanästhetikum, vorsichtig vorschieben.", "نحو 20 سم وشكل S؛ مزلق مع مخدر موضعي وإدخال بلطف."], ["urethra", "corpora-cavernosa"]),
      St(R("Prostata und Beckenboden", "البروستاتا وقاع الحوض", "Prostate and pelvic floor", "Prostate et plancher pelvien", "Prostat ve pelvik taban"), ["Engstelle: der Schließmuskel und die vergrößerte Prostata. Nicht gewaltsam; bei Widerstand Arzt.", "موضع ضيق: المصرة والبروستاتا المتضخمة. دون إكراه؛ وعند المقاومة إبلاغ الطبيب."], ["prostate", "levator-ani", "rectum"]),
      St(R("Blase", "المثانة", "Bladder", "Vessie", "Mesane"), ["Erst wenn Urin fließt, Katheter weiter einführen und blocken; Urinbeutel unter Blasenniveau.", "عند جريان البول فقط يُدخل القسطر ويُنفخ البالون؛ وكيس البول أسفل مستوى المثانة."], ["urinary-bladder", "ureters"]),
    ],
  },
  {
    id: "prostate",
    title: R("Prostata und Harnentleerung", "البروستاتا وتفريغ البول", "Prostate and voiding", "Prostate et miction", "Prostat ve idrar boşaltımı"),
    intro: ["Warum eine vergrößerte Prostata das Wasserlassen stört.", "لماذا يعيق تضخم البروستاتا التبول."],
    steps: [
      St(R("Lage", "الموضع", "Position", "Position", "Konum"), ["Die Prostata sitzt unter der Blase und umschließt die Harnröhre; vor dem Enddarm.", "تقع البروستاتا تحت المثانة وتحيط بالإحليل وأمام المستقيم."], ["prostate", "urinary-bladder", "urethra", "rectum"]),
      St(R("Vergrößerung", "التضخم", "Enlargement", "Hypertrophie", "Büyüme"), ["Bei BPH drückt sie die Harnröhre zu: schwacher Strahl, Nachträufeln, Restharn, Harnverhalt.", "في التضخم تضغط على الإحليل: تيار ضعيف وتقطير وبقايا بول واحتباس."], ["prostate", "urethra"]),
      St(R("Rückstau", "الاحتباس", "Backflow", "Reflux", "Geri akış"), ["Chronischer Restharn dehnt die Blase und kann Harnleiter und Nieren belasten (Hydronephrose).", "بقايا البول المزمنة تمدد المثانة وقد تُجهد الحالب والكلية (استسقاء الكلية)."], ["urinary-bladder", "ureters"]),
    ],
  },
];

export const REPRO_CARE = {
  diseases: ["Benigne Prostatahyperplasie, Prostatakarzinom", "Hodentorsion, Hodentumor, Epididymitis", "Geschlechtskrankheiten (Chlamydien, Gonorrhö, HPV, Syphilis, HIV)", "Mammakarzinom, Zervixkarzinom, Endometriose (Frau, siehe Schema)", "Schwangerschaft, Geburt, Wochenbett", "Harnwegsinfekt, Harnverhalt, Inkontinenz", "Erektionsstörung, Unfruchtbarkeit"],
  symptoms: ["Schwacher Harnstrahl, Nachträufeln, nächtliches Wasserlassen", "Hodenschmerz, Schwellung, Verhärtung", "Ausfluss aus Harnröhre oder Scheide, Brennen", "Blutung außerhalb der Regel, Zyklusstörungen", "Knoten in der Brust", "Bauchschmerz bei Frauen im gebärfähigen Alter: Schwangerschaft ausschließen"],
  diagnostics: ["Digital-rektale Untersuchung, PSA nach ärztlicher Aufklärung, Ultraschall (Restharn)", "Skrotalsonografie, Dopplersonografie", "Urinstatus, Abstrich (Chlamydien, Gonokokken), HIV- und Syphilis-Test", "Zervixabstrich (Pap), HPV-Test, Mammografie, Ultraschall", "Schwangerschaftstest, Hormonwerte (FSH, LH, Östrogen, Testosteron)", "Spermiogramm"],
  actions: ["Intimsphäre und Diskretion wahren, Schamgefühl berücksichtigen, gleichgeschlechtliche Pflege anbieten, wenn gewünscht", "Katheter nur bei Indikation, steril und nach Standard, früh entfernen; Intimpflege, Vorhaut zurückschieben", "Nach TUR-P oder Prostatektomie: Spülkatheter, Urinfarbe und -menge, Blasenspasmen, Beckenbodentraining", "Hodentorsion bei Verdacht: sofort Arzt, nüchtern lassen, keine Wärme", "Selbstuntersuchung von Hoden und Brust anleiten; Früherkennungsangebote erklären", "STI: Aufklärung, Kondome, Partnerbehandlung, Meldepflichten nach Anordnung beachten", "In der Schwangerschaft: Vorsorge, Warnzeichen (Blutung, Wehen, Blutdruck, Eklampsie) erklären", "Beckenbodentraining anleiten"],
  monitoring: ["Miktion: Menge, Strahl, Brennen, Farbe, Restharn", "Schmerz, Schwellung, Rötung, Fieber", "Ausfluss, Blutung (Menge, Zeitpunkt)", "Wundheilung, Drainagen, Katheterbeutel", "Blutdruck, Gewicht, Ödeme in der Schwangerschaft", "Psychische Belastung, Partnerschaft, Fruchtbarkeitswunsch"],
  terms: [["Gonaden", "Keimdrüsen (Hoden, Eierstöcke)"], ["Spermatogenese", "Bildung der Spermien"], ["Ejakulat", "Samenflüssigkeit mit Spermien"], ["BPH", "Benigne Prostatahyperplasie"], ["PSA", "Prostataspezifisches Antigen (Laborwert)"], ["Hodentorsion", "Verdrehung des Hodens am Samenstrang"], ["Phimose", "Vorhautverengung"], ["Paraphimose", "Eingeklemmte zurückgezogene Vorhaut, Notfall"], ["Priapismus", "Dauererektion über 4 Stunden, Notfall"], ["STI", "Sexuell übertragbare Infektion"], ["Vasektomie", "Samenleiterdurchtrennung (Sterilisation)"], ["Menarche / Menopause", "Erste / letzte Regelblutung"]] as [string, string][],
  lessons: ["bph-prostata-op", "prostate", "sti", "mammakarzinom", "b-schwangerschaft", "g12-geburt-phasen-wehen", "b-katheter-injektion"],
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string): AtlasQuiz => ({ q: [qd, qa], o, why: [wd, wa] });
export const REPRO_QUIZ: AtlasQuiz[] = [
  Q("Wie ist der Weg der Spermien in der richtigen Reihenfolge?", "ما الترتيب الصحيح لمسار الحيوانات المنوية؟", ["Hoden, Nebenhoden, Samenleiter, Harnröhre", "Hoden, Harnblase, Nebenhoden, Samenleiter", "Nebenhoden, Hoden, Prostata, Samenleiter", "Prostata, Hoden, Harnröhre, Nebenhoden"],
    "Spermien entstehen im Hoden, reifen im Nebenhoden, werden durch den Samenleiter transportiert, bekommen in Bläschendrüsen und Prostata Sekret zugemischt und verlassen den Körper durch die Harnröhre. Richtige Antwort: Hoden, Nebenhoden, Samenleiter, Harnröhre.",
    "تتكوّن الحيوانات المنوية في الخصية وتنضج في البربخ وتنقلها القناة الناقلة ثم تُضاف إفرازات الحويصلتين والبروستاتا وتخرج عبر الإحليل. الإجابة الصحيحة: الخصية فالبربخ فالأسهر فالإحليل."),
  Q("Welches Zeichen spricht für eine Hodentorsion?", "أي علامة تدل على التواء الخصية؟", ["Plötzlicher starker Hodenschmerz mit hochstehendem Hoden, oft Übelkeit", "Langsam zunehmendes Druckgefühl über Wochen", "Fieber und Husten", "Schmerzloses Nachträufeln"],
    "Bei Torsion verdreht sich der Samenstrang, die Durchblutung stoppt; Hoden und Nebenhoden sind stark schmerzhaft, der Hoden steht hoch, Übelkeit und Erbrechen sind häufig. Ein Notfall: operative Rettung innerhalb weniger Stunden (unter 6 Stunden ist die Rettungschance hoch). Keine Wärme, nüchtern lassen. Richtige Antwort: plötzlicher starker Schmerz, Hochstand.",
    "في الالتواء يلتف الحبل المنوي وتنقطع التروية؛ ألم شديد في الخصية والبربخ وتكون الخصية مرتفعة وغالباً غثيان وقيء. حالة طارئة: جراحة إنقاذ خلال ساعات (قبل 6 ساعات فرصة الإنقاذ عالية). لا كمادات دافئة ويُترك صائماً. الإجابة الصحيحة: ألم مفاجئ شديد وارتفاع الخصية."),
  Q("Welche typische Beschwerde macht eine benigne Prostatahyperplasie?", "ما الشكوى النموذجية لتضخم البروستاتا الحميد؟", ["Schwacher Harnstrahl, Nachträufeln, nächtliches Wasserlassen, Restharn", "Nur Blutdruckanstieg", "Gelenkschmerz", "Hautausschlag"],
    "Die vergrößerte Prostata drückt auf die Harnröhre: Startschwierigkeiten, schwacher Strahl, Nachträufeln, häufiges und nächtliches Wasserlassen, Restharn bis zum Harnverhalt. Komplikationen: Harnwegsinfekt, Blasensteine, Nierenstau. Richtige Antwort: schwacher Strahl, Nachträufeln, Nykturie, Restharn.",
    "تضغط البروستاتا المتضخمة على الإحليل: صعوبة البدء وتيار ضعيف وتقطير وتبول متكرر وليلي وبقايا بول حتى الاحتباس. المضاعفات: عدوى بولية وحصيات المثانة واحتقان الكلية. الإجابة الصحيحة: تيار ضعيف وتقطير وتبول ليلي وبقايا بول."),
  Q("Was ist bei der Katheterisierung der männlichen Harnröhre wichtig?", "ما المهم عند قسطرة الإحليل عند الرجل؟", ["Penis gerade hochhalten, Gleitmittel, nicht gewaltsam, Vorhaut danach zurückschieben", "Katheter mit Gewalt durch die Engstelle drücken", "Ohne Handschuhe arbeiten", "Vorhaut zurückgezogen lassen"],
    "Die männliche Harnröhre ist etwa 20 cm lang mit S-Form und Engstellen (Sphinkter, Prostata). Penis senkrecht strecken, steril arbeiten, reichlich Gleitmittel (mit Lidocain), langsam vorschieben, nicht gegen Widerstand drücken (Verletzung, Via falsa), erst bei Urinfluss blocken, Vorhaut danach zurückschieben (Paraphimose). Richtige Antwort: gerade halten, Gleitmittel, nicht gewaltsam, Vorhaut zurück.",
    "الإحليل عند الرجل نحو 20 سم بشكل S وبه مواضع ضيق (المصرة والبروستاتا). يُمد القضيب عمودياً مع تعقيم وكمية كافية من المزلق (مع ليدوكائين) وإدخال بطيء دون إكراه عند المقاومة (إصابة ومسار كاذب) ثم نفخ البالون عند جريان البول وإعادة القلفة بعد ذلك (الحصر). الإجابة الصحيحة: القضيب مستقيم ومزلق وبلا إكراه وإعادة القلفة."),
  Q("Wann gilt Priapismus als Notfall?", "متى يُعدّ القساح حالة طارئة؟", ["Bei Erektion von mehr als 4 Stunden", "Bei jeder morgendlichen Erektion", "Bei einer Erektion unter 10 Minuten", "Nie"],
    "Eine schmerzhafte Dauererektion über etwa 4 Stunden kann das Gewebe dauerhaft schädigen (Narben, Impotenz). Sie erfordert sofortige ärztliche Behandlung (Punktion, Medikamente). Richtige Antwort: Erektion über 4 Stunden.",
    "الانتصاب المؤلم المستمر لأكثر من نحو 4 ساعات قد يتلف النسيج بشكل دائم (ندبات وعجز). ويحتاج علاجاً طبياً فورياً (بزل وأدوية). الإجابة الصحيحة: انتصاب أكثر من 4 ساعات."),
  Q("Wo findet die Spermienreifung und -speicherung statt?", "أين تنضج وتُخزَّن الحيوانات المنوية؟", ["Im Nebenhoden", "In der Prostata", "In der Blase", "Im Schwellkörper"],
    "Spermien verlassen die Samenkanälchen noch unreif und reifen im Nebenhoden (10 bis 14 Tage), wo sie auch gespeichert werden. Prostata und Bläschendrüsen liefern nur Sekret. Richtige Antwort: Nebenhoden.",
    "تخرج الحيوانات المنوية من الأنيبيبات غير ناضجة وتنضج في البربخ (10 إلى 14 يوماً) وتُخزَّن فيه. أما البروستاتا والحويصلتان فتقدمان إفرازات فقط. الإجابة الصحيحة: البربخ."),
  Q("Warum liegen die Hoden außerhalb der Bauchhöhle im Hodensack?", "لماذا تقع الخصيتان خارج البطن في كيس الصفن؟", ["Spermien bilden sich bei etwa 34 bis 35 °C, also unter Körpertemperatur", "Weil dort mehr Platz ist", "Weil Testosteron Kälte braucht", "Weil sie bei 40 °C besser wirken"],
    "Die Spermienbildung ist temperaturempfindlich. Im Hodensack ist es etwa 2 bis 3 Grad kälter als im Körperinneren. Bleibt der Hoden im Bauchraum (Maldescensus), droht Unfruchtbarkeit und höheres Tumorrisiko. Richtige Antwort: etwas kühlere Temperatur für die Spermienbildung.",
    "تكوين الحيوانات المنوية حساس للحرارة. والصفن أبرد بنحو درجتين إلى ثلاث من داخل الجسم. وإذا بقيت الخصية في البطن (هبوط ناقص) يهدد العقم وزيادة خطر الورم. الإجابة الصحيحة: حرارة أبرد قليلاً لتكوين الحيوانات المنوية."),
  Q("Wann ovuliert eine Frau typischerweise bei einem 28-Tage-Zyklus (siehe Schema)?", "متى تحدث الإباضة عادةً في دورة 28 يوماً (انظر الرسم)؟", ["Etwa um den 14. Tag", "Am 1. Tag der Blutung", "Am 28. Tag", "Während der Menstruation"],
    "Beim 28-Tage-Zyklus liegt der Eisprung etwa in der Zyklusmitte (Tag 14), ausgelöst durch einen LH-Gipfel; danach bildet der Gelbkörper Progesteron. Die zweite Zyklushälfte ist meist etwa 14 Tage lang. Richtige Antwort: etwa 14. Tag.",
    "في دورة 28 يوماً تحدث الإباضة نحو منتصف الدورة (اليوم 14) بتأثير ذروة LH؛ ثم يفرز الجسم الأصفر البروجسترون. والنصف الثاني من الدورة نحو 14 يوماً. الإجابة الصحيحة: نحو اليوم 14."),
  Q("Wie wird die Selbstuntersuchung der Brust empfohlen (Mammakarzinom-Früherkennung)?", "كيف يُنصح بالفحص الذاتي للثدي؟", ["Regelmäßig, am besten nach der Regelblutung, Inspektion und Abtasten beider Brüste und Achseln; Auffälliges ärztlich abklären", "Nur bei Schmerzen", "Nur durch den Partner", "Niemals"],
    "Regelmäßiges Abtasten fördert die Körperwahrnehmung; es ersetzt nicht die ärztliche Untersuchung und die Mammografie. Knoten, Hauteinziehung, Sekretion der Brustwarze, Größenveränderung und geschwollene Achsellymphknoten sofort ärztlich abklären. Richtige Antwort: regelmäßig, Inspektion und Abtasten, Auffälliges abklären.",
    "الفحص المنتظم يعزز إدراك الجسم؛ ولا يغني عن الفحص الطبي والتصوير الشعاعي للثدي. العقد وانكماش الجلد وإفراز الحلمة وتغير الحجم وتورم عقد الإبط تُفحص طبياً فوراً. الإجابة الصحيحة: بانتظام مع المعاينة والجس وفحص كل ما هو غير عادي."),
  Q("Welche Aufgabe haben Prostata und Bläschendrüsen?", "ما وظيفة البروستاتا والحويصلتين المنويتين؟", ["Sie bilden den größten Teil des Ejakulats", "Sie bilden Spermien", "Sie speichern Urin", "Sie bilden Testosteron"],
    "Die Bläschendrüsen (etwa 60 %) und die Prostata (etwa 30 %) bilden das Ejakulat, das Spermien ernährt und beweglich macht. Spermien und Testosteron stammen aus dem Hoden. Richtige Antwort: Bildung des Ejakulats.",
    "تصنع الحويصلتان (نحو 60%) والبروستاتا (نحو 30%) السائل المنوي الذي يغذي الحيوانات المنوية ويجعلها متحركة. أما الحيوانات المنوية والتستوستيرون فمن الخصية. الإجابة الصحيحة: تكوين السائل المنوي."),
  Q("Welche Hygieneregel gilt bei der Intimpflege eines Mannes mit Vorhaut?", "ما قاعدة النظافة في العناية الحميمة لرجل لديه قلفة؟", ["Vorhaut zurückziehen, Eichel reinigen, Vorhaut wieder vorschieben", "Vorhaut zurückgezogen lassen", "Nur mit Seife unter der Vorhaut reiben", "Vorhaut nie zurückziehen"],
    "Unter der Vorhaut sammeln sich Smegma und Keime (Balanitis). Beim Waschen Vorhaut zurückziehen, Eichel reinigen, gut abtrocknen und Vorhaut danach wieder über die Eichel schieben; sonst kann sie abschnüren (Paraphimose, Notfall). Gilt auch beim Katheter. Richtige Antwort: zurück, reinigen, wieder vor.",
    "تتجمع تحت القلفة الإفرازات والجراثيم (التهاب الحشفة). عند الغسل تُسحب القلفة وتُنظف الحشفة وتُجفف جيداً ثم تُعاد القلفة فوقها؛ وإلا قد تخنق (الحصر وهو طارئ). وينطبق ذلك عند القسطرة. الإجابة الصحيحة: سحب وتنظيف ثم إعادة."),
];

export const REPRO_CFG: AtlasConfig = {
  key: "reproductive",
  modelUrl: "/models/reproductive.glb",
  items: REPRO_ITEMS,
  layers: REPRO_LAYERS,
  layerOf: (id) => {
    if (id === "testes" || id === "epididymis") return "gonad";
    if (id === "deferent-ducts") return "duct";
    if (id === "seminal-vesicles" || id === "prostate") return "gland";
    if (id === "corpora-cavernosa" || id === "corpus-spongiosum" || id === "glans-penis") return "penis";
    if (id === "urethra" || id === "urinary-bladder" || id === "ureters") return "urinary";
    if (id === "rectum" || id === "levator-ani") return "context";
    return "shell";
  },
  color: (id, layer) => {
    switch (layer) {
      case "gonad": return id === "testes" ? 0xd87aa0 : 0xe0a0b8;
      case "duct": return 0xf0d84a;
      case "gland": return id === "prostate" ? 0x6aa8d8 : 0x9ac8e8;
      case "penis": return id === "glans-penis" ? 0xe08a7a : id === "corpus-spongiosum" ? 0xe0a090 : 0xc87868;
      case "urinary": return id === "urinary-bladder" ? 0xe0c860 : id === "urethra" ? 0x4aa8c9 : 0xd8b050;
      case "context": return id === "rectum" ? 0xb88a6a : 0xc05848;
      default: return 0xe8e0d0;
    }
  },
  shell: ["shell"],
  innerLabel: ["Becken durchsichtig", "الحوض شفاف", "Pelvis transparent", "Bassin transparent", "Pelvis saydam"],
  careTitle: ["Pflege-Überblick Fortpflanzungssystem", "نظرة تمريضية على الجهاز التناسلي", "Nursing overview: reproductive system", "Aperçu infirmier : système reproducteur", "Hemşirelik özeti: üreme sistemi"],
  target: [0, -0.02, 0], shellOpacity: 0.2,
  dist: 0.75, minDist: 0.06, maxDist: 2, clipRange: 0.25, explodeScale: 0.5,
  care: REPRO_CARE,
  quiz: REPRO_QUIZ,
  paths: REPRO_PATHS,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Das Modell enthält NUR männliche Fortpflanzungsorgane eines erwachsenen Mannes. Weibliche Organe, Hodensack, Samenstrang, Cowper-Drüsen und Brust fehlen und sind nur im gekennzeichneten Schema (kein 3D-Modell) dargestellt. Hoden und Blase sind im Quellmodell sehr grob.", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). يتضمن النموذج أعضاء التناسل الذكرية لرجل بالغ فقط. الأعضاء الأنثوية وكيس الصفن والحبل المنوي وغدد كاوبر والثدي غير موجودة وتظهر فقط في الرسم المخطط المعلَّم (ليس نموذجاً ثلاثي الأبعاد). الخصية والمثانة خشنتان جداً في النموذج المصدر.", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (adapted). The model contains ONLY male reproductive organs of an adult male. Female organs, scrotum, spermatic cord, Cowper glands and breast are missing and shown only in the labeled schematic (not a 3D model). Testes and bladder are very coarse in the source.", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (adapté). Le modèle ne contient QUE les organes reproducteurs masculins. Organes féminins absents : voir le schéma.", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (uyarlandı). Model YALNIZCA erkek üreme organlarını içerir. Kadın organları yok: şemaya bakın."],
};
