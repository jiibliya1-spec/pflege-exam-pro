/**
 * Atlas Harnsystem: Beschriftungen zu den 18 benannten Strukturen des BodyParts3D-Modells (public/models/urinary.glb).
 * Schlüssel = Knotennamen im Modell (siehe tools/extract-urinary.mjs). Namen nach Terminologia Anatomica; Texte in eigenen Worten.
 * Im Modell NICHT enthalten: Nierenparenchym (Rinde, Mark; die Niere ist ein Vollkörper; Kelche und Becken sind Teil des Harnleiter-Meshes), Nephron, Nierenhüllen,
 * Blasenwand-Schichten und Schließmuskeln, weibliche Harnröhre (Referenzmodell: erwachsener Mann).
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, AtlasPath, AtlasQuiz } from "./atlasTypes";

export const URINARY_LAYERS: AtlasLayer[] = [
  { id: "kidney", de: "Nieren", ar: "الكليتان", en: "Kidneys", fr: "Reins", tr: "Böbrekler" },
  { id: "adrenal", de: "Nebennieren", ar: "الغدتان الكظريتان", en: "Adrenal glands", fr: "Glandes surrénales", tr: "Böbreküstü bezleri" },
  { id: "artery", de: "Nierenarterien", ar: "الشرايين الكلوية", en: "Renal arteries", fr: "Artères rénales", tr: "Renal arterler" },
  { id: "vein", de: "Nierenvenen", ar: "الأوردة الكلوية", en: "Renal veins", fr: "Veines rénales", tr: "Renal venler" },
  { id: "ducts", de: "Harnleiter, Blase, Harnröhre", ar: "الحالبان والمثانة والإحليل", en: "Ureters, bladder, urethra", fr: "Uretères, vessie, urètre", tr: "Üreterler, mesane, üretra" },
  { id: "prostate", de: "Prostata (männlich)", ar: "البروستات (ذكر)", en: "Prostate (male)", fr: "Prostate (homme)", tr: "Prostat (erkek)" },
  { id: "great", de: "Große Bauchgefäße", ar: "الأوعية البطنية الكبرى", en: "Large abdominal vessels", fr: "Gros vaisseaux abdominaux", tr: "Büyük karın damarları" },
  { id: "shell", de: "Kreuzbein (Orientierung)", ar: "العجز (للتوجيه)", en: "Sacrum (orientation)", fr: "Sacrum (repère)", tr: "Sakrum (yön bulma)" },
];

const items: Record<string, AtlasItem> = {
  "right-kidney": {
    de: "Rechte Niere", la: "Ren dexter", ar: "الكلية اليمنى",
    fn: ["Die Niere filtert pro Tag etwa 180 Liter Primärharn aus dem Blut und gewinnt Wasser, Salze, Zucker und Eiweiße zurück; übrig bleiben etwa 1,5 Liter Urin. Sie regelt Wasser-, Elektrolyt- und Säure-Basen-Haushalt, bildet Renin (Blutdruck), Erythropoetin (Blutbildung) und aktiviert Vitamin D. Die rechte Niere liegt wegen der Leber meist etwas tiefer als die linke.", "تُرشّح الكلية يومياً نحو 180 لتراً من البول الأولي من الدم وتسترجع الماء والأملاح والسكر والبروتينات، فيبقى نحو 1.5 لتر من البول. وتنظّم توازن الماء والشوارد والحموضة والقلوية، وتفرز الرينين (الضغط) والإريثروبويتين (تكوين الدم) وتنشّط فيتامين د. والكلية اليمنى تقع عادةً أخفض قليلاً من اليسرى بسبب الكبد."],
    kl: ["Retroperitoneal in Höhe von Th12 bis L3, daher Nierenlager-Klopfschmerz bei Pyelonephritis. Beobachten: Urinmenge (Norm etwa 1 bis 1,5 Liter pro Tag, unter 500 ml pro Tag = Oligurie), Farbe, Trübung, Blut, Ödeme, Blutdruck, Gewicht. Bei Niereninsuffizienz: Flüssigkeitsbilanz, nierentoxische Medikamente (z. B. NSAR) hinterfragen, Dosis nach Nierenfunktion anpassen lassen.", "تقع خلف الصفاق عند مستوى الفقرات الصدرية 12 حتى القطنية 3، ولهذا يظهر ألم عند الطرق على الخاصرة في التهاب الحويضة والكلية. المراقبة: كمية البول (الطبيعي نحو 1 إلى 1.5 لتر يومياً، وأقل من 500 مل = قلة البول)، لونه وعكره ووجود دم، والوذمات والضغط والوزن. في القصور الكلوي: ميزان السوائل، والتساؤل عن الأدوية السامة للكلية (مثل مضادات الالتهاب غير الستيرويدية) وتعديل الجرعات حسب وظيفة الكلية."],
    note: ["Im Modell ist die Niere ein Vollkörper: Rinde, Mark und Pyramiden sind nicht enthalten (siehe Schema „Nierenaufbau“ unten). Nierenkelche und Nierenbecken sind als oberes Ende des Harnleiter-Modells vorhanden: Niere mit dem Augen-Symbol ausblenden. Nierenkapsel, Fettkapsel und Nierenfaszie fehlen.", "الكلية في النموذج جسم مصمت: القشرة واللب والأهرامات غير موجودة (انظر رسم «بنية الكلية» أدناه). أما الكؤوس والحويضة فموجودة كطرف علوي لنموذج الحالب: أخفِ الكلية بأيقونة العين. والمحفظة الليفية والدهنية والصفاق الكلوي غير موجودة."],
  },
  "left-kidney": {
    de: "Linke Niere", la: "Ren sinister", ar: "الكلية اليسرى",
    fn: ["Gleiche Aufgaben wie rechts: Blut filtern, Harn bilden, Wasser-, Salz- und Säure-Basen-Haushalt regeln, Hormone bilden. Sie liegt etwas höher und näher an Milz und Bauchspeicheldrüsenschwanz.", "المهام نفسها كاليمنى: ترشيح الدم وتكوين البول وتنظيم الماء والأملاح والحموضة وإفراز الهرمونات. وتقع أعلى قليلاً وأقرب إلى الطحال وذيل البنكرياس."],
    kl: ["Bei Bauchtrauma kann die Niere mitverletzt sein (Flankenschmerz, Blut im Urin, Hämatom). Bei Verdacht Bettruhe, Kreislauf überwachen, Urin auf Blut kontrollieren, Arzt informieren. Nach Nierenbiopsie oder Operation: Blutungszeichen, Drainagen, Urinausscheidung und Schmerzen beobachten.", "في رضوض البطن قد تُصاب الكلية (ألم في الخاصرة، دم في البول، ورم دموي). عند الاشتباه: الراحة في الفراش ومراقبة الدورة الدموية وفحص البول للدم وإبلاغ الطبيب. بعد خزعة الكلية أو الجراحة: مراقبة علامات النزف والتصاريف وكمية البول والألم."],
    note: ["Auch hier fehlt der innere Aufbau; siehe Schema „Nierenaufbau“ und „Nephron“.", "هنا أيضاً البنية الداخلية غير موجودة؛ انظر رسمي «بنية الكلية» و«النفرون»."],
  },
  "right-adrenal": {
    de: "Rechte Nebenniere", la: "Glandula suprarenalis dextra", ar: "الغدة الكظرية اليمنى",
    fn: ["Die Nebenniere sitzt der Niere kappenartig auf, gehört aber zum Hormonsystem. Die Rinde bildet Cortisol, Aldosteron und Sexualhormone, das Mark Adrenalin und Noradrenalin.", "تجلس الغدة الكظرية فوق الكلية كقلنسوة لكنها تتبع الجهاز الصماوي. تفرز القشرة الكورتيزول والألدوستيرون والهرمونات الجنسية، ويفرز اللب الأدرينالين والنورأدرينالين."],
    kl: ["Aldosteron hält Natrium und Wasser zurück, Cortisol wirkt auf Blutzucker, Stress und Entzündung. Unter längerer Cortison-Therapie darf man nicht abrupt absetzen (Addison-Krise: Schwäche, Blutdruckabfall, Erbrechen, Hypoglykämie). Ein Phäochromozytom macht Blutdruckkrisen mit Kopfschmerz und Schwitzen.", "الألدوستيرون يحتبس الصوديوم والماء، والكورتيزول يؤثر في سكر الدم والإجهاد والالتهاب. عند العلاج الطويل بالكورتيزون يجب عدم التوقف المفاجئ (أزمة أديسون: ضعف وهبوط الضغط وقيء وهبوط السكر). والورم القواتم يسبب أزمات ضغط مع صداع وتعرق."],
    note: ["Nebennieren sind Teil des Hormonsystems und hier nur wegen der Lage über den Nieren dargestellt.", "الغدتان الكظريتان جزء من الجهاز الصماوي وتظهران هنا فقط بسبب موقعهما فوق الكليتين."],
  },
  "left-adrenal": {
    de: "Linke Nebenniere", la: "Glandula suprarenalis sinistra", ar: "الغدة الكظرية اليسرى",
    fn: ["Wie rechts: Rinde mit Cortisol, Aldosteron und Androgenen, Mark mit Adrenalin und Noradrenalin. Links ist sie eher halbmondförmig, rechts eher dreieckig.", "كاليمنى: قشرة تفرز الكورتيزول والألدوستيرون والأندروجينات، ولب يفرز الأدرينالين والنورأدرينالين. وهي هلالية الشكل في اليسار ومثلثية في اليمين غالباً."],
    kl: ["Bei Stress und Schock schüttet das Mark Adrenalin aus: Herzfrequenz und Blutdruck steigen. Beobachten bei Cortisontherapie: Blutzucker, Infektzeichen, Ödeme, Stimmung; in Belastungssituationen (Operation, Infekt) ärztliche Dosisanpassung beachten.", "في الإجهاد والصدمة يفرز اللب الأدرينالين فيرتفع النبض والضغط. المراقبة عند العلاج بالكورتيزون: سكر الدم وعلامات العدوى والوذمات والمزاج، ومراعاة تعديل الجرعة من الطبيب في أوقات الشدة (جراحة أو عدوى)."],
  },
  "right-ureter": {
    de: "Rechter Harnleiter", la: "Ureter dexter", ar: "الحالب الأيمن",
    fn: ["Ein etwa 25 bis 30 cm langer Muskelschlauch, der den Urin vom Nierenbecken zur Blase transportiert. Wellenförmige Kontraktionen (Peristaltik) befördern ihn weiter, auch im Liegen.", "أنبوب عضلي طوله نحو 25 إلى 30 سم ينقل البول من حويضة الكلية إلى المثانة. وتدفعه الانقباضات الموجية (الحركة الدودية) حتى في وضع الاستلقاء."],
    kl: ["Er hat drei Engstellen: am Abgang vom Nierenbecken, an der Kreuzung mit den Beckengefäßen und beim Eintritt in die Blasenwand. Dort bleiben Nierensteine stecken und lösen eine Kolik aus: wellenförmige, starke Flankenschmerzen mit Übelkeit, Unruhe, oft Blut im Urin. Pflege: Wärme nach Anordnung, Schmerzmittel, Urin sieben, Trinkmenge nach Arztanordnung, bei Fieber sofort Arzt (Harnstau mit Infektion).", "له ثلاثة تضيقات: عند خروجه من الحويضة، وعند تقاطعه مع أوعية الحوض، وعند دخوله جدار المثانة. وفيها تعلق حصى الكلى فتسبب مغصاً: ألماً موجياً شديداً في الخاصرة مع غثيان وقلق وغالباً دم في البول. التمريض: الحرارة حسب الأمر الطبي والمسكنات وتصفية البول لجمع الحصى والسوائل حسب أمر الطبيب، ومع الحمى إبلاغ الطبيب فوراً (احتباس البول مع عدوى)."],
    note: ["Die Engstellen sind im Modell nicht markiert; ihre Lage ergibt sich aus dem Verlauf (Nierenbecken, Kreuzung der Beckengefäße, Blasenwand).", "التضيقات غير معلّمة في النموذج؛ ويُستدل على مواضعها من المسار (الحويضة وتقاطع أوعية الحوض وجدار المثانة)."],
  },
  "left-ureter": {
    de: "Linker Harnleiter", la: "Ureter sinister", ar: "الحالب الأيسر",
    fn: ["Gleicher Aufbau wie rechts: Schleimhaut, Muskelschicht und Bindegewebe. Er mündet schräg durch die Blasenwand, sodass beim Füllen der Blase kein Urin zurückfließt (Ventilmechanismus).", "البنية نفسها كاليمين: مخاطية وطبقة عضلية ونسيج ضام. يدخل جدار المثانة بشكل مائل بحيث لا يرتد البول عند امتلاء المثانة (آلية صمام)."],
    kl: ["Ein Harnstau (Hydronephrose) durch Stein, Tumor oder Prostatavergrößerung schädigt die Niere. Zeichen: Flankenschmerz, verminderte Urinmenge, Fieber bei Infektion. Nach Operationen oder bei Harnleiterschienen (Doppel-J) auf Blut im Urin, Schmerzen und Urinfluss achten.", "احتباس البول (استسقاء الكلية) بسبب حصاة أو ورم أو تضخم البروستات يضر بالكلية. العلامات: ألم الخاصرة وقلة البول وحمى عند العدوى. بعد العمليات أو مع دعامات الحالب (دبل جيه) يُراقَب الدم في البول والألم وتدفق البول."],
  },
  "bladder": {
    de: "Harnblase", la: "Vesica urinaria", ar: "المثانة البولية",
    fn: ["Hohlorgan aus dehnbarer Muskulatur (Musculus detrusor vesicae), das den Urin sammelt. Das Fassungsvermögen liegt bei etwa 500 ml; der erste Harndrang entsteht bei etwa 200 bis 300 ml. Bei der Entleerung (Miktion) zieht sich der Detrusor zusammen, der Schließmuskel erschlafft.", "عضو مجوّف من عضلة قابلة للتمدد (العضلة النافضة للبول) يجمع البول. سعتها نحو 500 مل، ويبدأ الإحساس الأول بالحاجة للتبول عند نحو 200 إلى 300 مل. عند التبول تنقبض العضلة النافضة ويرتخي العاصر."],
    kl: ["Häufigster Ort für Infekte (Zystitis): Brennen beim Wasserlassen, Pollakisurie, Harndrang, Schmerzen über der Symphyse. Pflege: viel trinken (wenn erlaubt), Wärme, Intimhygiene von vorn nach hinten, Blasenkatheter nur bei klarer Indikation und so kurz wie möglich (CAUTI-Prävention). Restharn nach Miktion (Sonografie) zeigt Entleerungsstörungen. Bei Harnverhalt mit tastbarer Blase Arzt informieren.", "أكثر موضع للعدوى (التهاب المثانة): حرقة عند التبول وكثرة التبول وإلحاح وألم فوق العانة. التمريض: شرب كثير (إن سُمح) وحرارة والنظافة الشخصية من الأمام للخلف، وقسطرة المثانة فقط بدواعٍ واضحة وأقصر مدة ممكنة (الوقاية من عدوى القسطرة). البول المتبقي بعد التبول (بالسونار) يدل على اضطراب التفريغ. وعند احتباس البول مع مثانة ملموسة يُبلَّغ الطبيب."],
    note: ["Das Modell zeigt die Blase vereinfacht als geschlossene Hülle ohne Wandschichten, Trigonum und Schließmuskeln.", "يعرض النموذج المثانة مبسّطة كغلاف مغلق بلا طبقات جدار ولا مثلث المثانة ولا عواصر."],
  },
  "urethra": {
    de: "Harnröhre (männlich)", la: "Urethra masculina", ar: "الإحليل (ذكر)",
    fn: ["Ableitender Gang von der Blase nach außen. Beim Mann ist sie etwa 20 bis 25 cm lang und dient auch dem Samentransport, bei der Frau nur etwa 3 bis 5 cm. Die Miktion steuern ein unwillkürlicher innerer und ein willkürlicher äußerer Schließmuskel.", "قناة تصريف من المثانة إلى الخارج. طولها عند الرجل نحو 20 إلى 25 سم وتنقل المني أيضاً، وعند المرأة نحو 3 إلى 5 سم فقط. ويتحكم في التبول عاصر داخلي لا إرادي وعاصر خارجي إرادي."],
    kl: ["Wichtig beim Katheterisieren: Beim Mann hat sie Krümmungen und Engstellen und läuft durch die Prostata; Penis anheben, Gleitmittel mit Lokalanästhetikum, nie mit Gewalt vorschieben, Blockung erst, wenn Urin fließt. Bei der Frau führt die kurze Harnröhre nahe dem After häufiger zu Blasenentzündungen. Nach Katheterentfernung: erste Miktion und Urinmenge beobachten.", "مهم عند القسطرة: عند الرجل لها انحناءات وتضيقات وتمر عبر البروستات؛ يُرفع القضيب ويُستخدم مزلّق مع مخدر موضعي ولا يُدفع الكاتيتر بالقوة، ويُنفخ البالون فقط بعد خروج البول. عند المرأة تؤدي قصر الإحليل وقربه من الشرج إلى التهابات مثانة أكثر. بعد نزع القسطرة: مراقبة أول تبول وكميته."],
    note: ["Das Referenzmodell ist ein Mann; die weibliche Harnröhre ist nicht dargestellt und wird hier nicht durch eine Erfindung ersetzt.", "النموذج المرجعي لرجل؛ الإحليل الأنثوي غير معروض ولم نستبدله بتمثيل مختلق."],
  },
  "prostate": {
    de: "Prostata (Vorsteherdrüse)", la: "Prostata", ar: "البروستات",
    fn: ["Kastaniengroße Drüse des Mannes, die die Harnröhre unterhalb der Blase umschließt. Ihr Sekret macht einen großen Teil der Samenflüssigkeit aus. Sie gehört zu den Geschlechtsorganen und ist hier wegen ihrer Lage an der Harnröhre aufgeführt.", "غدة بحجم حبة الكستناء عند الرجل تحيط بالإحليل تحت المثانة. وإفرازها يشكل جزءاً كبيراً من السائل المنوي. تتبع الجهاز التناسلي وتظهر هنا لموقعها حول الإحليل."],
    kl: ["Mit zunehmendem Alter wächst sie oft (gutartige Prostatahyperplasie) und engt die Harnröhre ein: schwacher Strahl, Nachträufeln, Restharn, nächtlicher Harndrang. Das kann zum Harnverhalt führen; beim Katheterisieren sind Widerstand und Blutung möglich. Pflege: Miktionsprotokoll, Restharn, Infektzeichen; Prostatakrebs-Vorsorge ab 45 Jahren ärztlich besprechen.", "مع التقدم في العمر تتضخم غالباً (تضخم البروستات الحميد) وتضيّق الإحليل: ضعف التيار وتنقيط بعد التبول وبول متبقٍ وحاجة للتبول ليلاً. وقد يؤدي إلى احتباس البول؛ وعند القسطرة قد توجد مقاومة ونزف. التمريض: سجل التبول والبول المتبقي وعلامات العدوى؛ ومناقشة فحص سرطان البروستات مع الطبيب بدءاً من 45 سنة."],
    note: ["Nur bei Männern vorhanden; im Modell ohne innere Gliederung.", "موجودة عند الرجال فقط؛ وهي في النموذج بلا تقسيم داخلي."],
  },
  "right-renal-artery": {
    de: "Rechte Nierenarterie mit Ästen", la: "Arteria renalis dextra (mit Rami anteriores/posteriores und Arteriae segmentales)", ar: "الشريان الكلوي الأيمن وفروعه",
    fn: ["Sie entspringt aus der Bauchaorta und führt etwa ein Fünftel des Herzzeitvolumens zur Niere (etwa 1,2 Liter Blut pro Minute für beide Nieren). Am Hilum teilt sie sich in vordere und hintere Äste und in Segmentarterien. Die rechte Arterie verläuft hinter der unteren Hohlvene.", "تنشأ من الأبهر البطني وتنقل نحو خمس النتاج القلبي إلى الكلية (نحو 1.2 لتر دم في الدقيقة للكليتين). وعند السرة تنقسم إلى فروع أمامية وخلفية وشرايين قطعية. ويمر الشريان الأيمن خلف الوريد الأجوف السفلي."],
    kl: ["Eine Nierenarterienstenose (oft Arteriosklerose) lässt die Niere Renin ausschütten und verursacht schwer einstellbaren Bluthochdruck. Ein Schock oder starker Blutdruckabfall kann akutes Nierenversagen auslösen. Pflege: Blutdruck, Urinausscheidung (Ziel mindestens 0,5 ml pro kg und Stunde) und Kreatinin beobachten.", "تضيّق الشريان الكلوي (غالباً بسبب تصلب الشرايين) يجعل الكلية تفرز الرينين فيحدث ارتفاع ضغط عسر الضبط. والصدمة أو الهبوط الشديد في الضغط قد يسبب فشلاً كلوياً حاداً. التمريض: مراقبة الضغط وإدرار البول (الهدف 0.5 مل/كغ/ساعة على الأقل) والكرياتينين."],
    note: ["Die Äste sind im Modell als Gefäßbaum aus mehreren Teilen enthalten; sie wurden hier zu einer Struktur je Seite zusammengefasst.", "الفروع موجودة في النموذج كشجرة وعائية من عدة أجزاء؛ وقد جُمعت هنا في بنية واحدة لكل جانب."],
  },
  "left-renal-artery": {
    de: "Linke Nierenarterie mit Ästen", la: "Arteria renalis sinistra (mit Rami anteriores/posteriores und Arteriae segmentales)", ar: "الشريان الكلوي الأيسر وفروعه",
    fn: ["Kurzer Abgang aus der Bauchaorta zur linken Niere. Im Nierenparenchym zweigt sie sich in Segment-, Zwischenlappen- und Bogenarterien bis zu den Vasa afferentia der Glomeruli auf.", "تخرج قصيرة من الأبهر البطني إلى الكلية اليسرى. وفي نسيج الكلية تتفرع إلى شرايين قطعية وبين فصيصية وقوسية حتى الشرينات الواردة للكبيبات."],
    kl: ["Die Durchblutung der Niere hängt vom Blutdruck ab: Bei einem mittleren arteriellen Druck unter etwa 60 mmHg sinkt die Filtration. Deshalb gilt bei Blutung, Sepsis und Dehydratation: Kreislauf stabilisieren, Flüssigkeitsbilanz führen, nierenschädigende Substanzen (Kontrastmittel, NSAR) nur nach Rücksprache.", "يعتمد تروية الكلية على الضغط: عندما ينخفض الضغط الشرياني المتوسط عن نحو 60 ملم زئبق يقل الترشيح. لذلك في النزف والإنتان والجفاف: تثبيت الدورة وتسجيل ميزان السوائل، وعدم إعطاء المواد المؤذية للكلية (الصبغات والمضادات غير الستيرويدية) دون استشارة."],
  },
  "right-renal-vein": {
    de: "Rechte Nierenvene", la: "Vena renalis dextra", ar: "الوريد الكلوي الأيمن",
    fn: ["Kurzer Stamm, der das gefilterte, sauerstoffreiche Blut aus der rechten Niere direkt in die untere Hohlvene leitet.", "جذع قصير ينقل الدم المرشَّح الغني بالأكسجين من الكلية اليمنى مباشرة إلى الوريد الأجوف السفلي."],
    kl: ["Nierenvenenthrombose ist selten, zeigt sich aber mit Flankenschmerz, Blut im Urin und Eiweißverlust. Bei Dialysepatienten und Nierenerkrankungen mit Eiweißverlust steigt das Thromboserisiko; Thromboseprophylaxe und Beobachtung der Beine gehören zur Pflege.", "تخثر الوريد الكلوي نادر لكنه يظهر بألم الخاصرة ودم في البول وفقدان للبروتين. وفي مرضى الغسيل الكلوي والأمراض الكلوية مع فقد البروتين يزداد خطر التخثر؛ والوقاية من الخثار ومراقبة الساقين جزء من التمريض."],
  },
  "left-renal-vein": {
    de: "Linke Nierenvene", la: "Vena renalis sinistra", ar: "الوريد الكلوي الأيسر",
    fn: ["Länger als die rechte: Sie kreuzt vor der Bauchaorta und unter dem Abgang der oberen Eingeweidearterie zur unteren Hohlvene. Auf diesem Weg nimmt sie Blut aus der linken Nebenniere und der linken Keimdrüsenvene auf.", "أطول من اليمنى: تعبر أمام الأبهر البطني وتحت منشأ الشريان المساريقي العلوي لتصب في الوريد الأجوف السفلي. وتستقبل في طريقها دم الغدة الكظرية اليسرى ووريد الغدة التناسلية اليسرى."],
    kl: ["Die längere linke Vene erklärt, warum Krampfadern der Keimdrüse (Varikozele) fast nur links auftreten. Eingriffe an Nierenvenen und die Anlage von Dialysezugängen erfordern Beobachtung von Durchblutung, Schwellung und Nachblutung.", "طول الوريد الأيسر يفسّر لماذا تظهر دوالي الغدة التناسلية (القيلة الدوالية) تقريباً في اليسار فقط. والتدخلات على الأوردة الكلوية وتجهيز منافذ الغسيل تتطلب مراقبة التروية والتورم والنزف."],
  },
  "abdominal-aorta": {
    de: "Bauchaorta", la: "Aorta abdominalis", ar: "الأبهر البطني",
    fn: ["Der Hauptschlagaderstamm im Bauchraum. Aus ihr gehen die Nierenarterien auf Höhe L1 bis L2 ab; unten teilt sie sich in die beiden gemeinsamen Beckenarterien.", "الشريان الرئيسي في البطن. تخرج منه الشرايين الكلوية عند مستوى القطنية 1 و2، وينقسم أسفل إلى الشريانين الحرقفيين المشتركين."],
    kl: ["Ein Bauchaortenaneurysma (Erweiterung ab etwa 3 cm) ist oft symptomlos; Ruptur zeigt sich mit plötzlichen Bauch- oder Rückenschmerzen und Schock: Notfall. Pflege: Blutdruck kontrollieren, pulsierenden Tastbefund melden, bei Verdacht nicht abtasten und sofort Arzt rufen.", "توسع الأبهر البطني (من نحو 3 سم) غالباً بلا أعراض؛ وانفجاره يظهر بألم مفاجئ في البطن أو الظهر وصدمة: حالة طارئة. التمريض: ضبط الضغط والإبلاغ عن كتلة نابضة، وعند الاشتباه عدم الضغط عليها واستدعاء الطبيب فوراً."],
  },
  "inferior-vena-cava": {
    de: "Untere Hohlvene", la: "Vena cava inferior", ar: "الوريد الأجوف السفلي",
    fn: ["Größte Vene des Bauchraums; sie sammelt das Blut der Beine, des Beckens und der Nierenvenen und führt es zum rechten Herzvorhof.", "أكبر وريد في البطن؛ تجمع دم الساقين والحوض والأوردة الكلوية وتنقله إلى الأذين الأيمن."],
    kl: ["Ein Thrombus aus den Beckenvenen kann über die untere Hohlvene bis in die Lunge wandern (Lungenembolie). In der Schwangerschaft kann Rückenlage die Vene abdrücken (Vena-cava-Kompression): Linksseitenlage. Pflege: Thromboseprophylaxe, Mobilisation, Kompression nach Anordnung.", "قد تنتقل خثرة من أوردة الحوض عبر الوريد الأجوف السفلي إلى الرئة (انصمام رئوي). وفي الحمل قد يضغط الاستلقاء على الظهر على الوريد: وضعية الجانب الأيسر. التمريض: الوقاية من الخثار والتحريك المبكر والضغط حسب الأمر الطبي."],
  },
  "common-iliac-arteries": {
    de: "Gemeinsame Beckenarterien", la: "Arteriae iliacae communes", ar: "الشريانان الحرقفيان المشتركان",
    fn: ["Die Bauchaorta teilt sich in zwei gemeinsame Beckenarterien, die Becken und Beine versorgen. Die Harnleiter kreuzen sie auf ihrem Weg zur Blase.", "ينقسم الأبهر البطني إلى شريانين حرقفيين مشتركين يغذيان الحوض والساقين. ويعبرهما الحالبان في طريقهما إلى المثانة."],
    kl: ["Diese Kreuzung ist eine der drei Engstellen des Harnleiters. Durchblutungsstörungen der Beine (pAVK) zeigen sich mit Schmerzen beim Gehen, kalten, blassen Füßen und fehlenden Fußpulsen; Pflege: Pulse tasten, Haut beobachten, Druckstellen verhindern.", "هذا التقاطع أحد تضيقات الحالب الثلاثة. واضطرابات تروية الساقين (مرض الشرايين المحيطية) تظهر بألم عند المشي وقدمين باردتين شاحبتين وغياب نبض القدم؛ التمريض: جس النبض ومراقبة الجلد ومنع قرح الضغط."],
  },
  "common-iliac-veins": {
    de: "Gemeinsame Beckenvenen", la: "Venae iliacae communes", ar: "الوريدان الحرقفيان المشتركان",
    fn: ["Sammeln das Blut der Beine und des Beckens und vereinigen sich zur unteren Hohlvene.", "تجمعان دم الساقين والحوض وتتحدان لتكوّنا الوريد الأجوف السفلي."],
    kl: ["Beckenvenenthrombosen (links häufiger) führen zu einem einseitig geschwollenen, schmerzenden Bein. Sofort Arzt informieren; Bein nicht massieren, Bettruhe nach Anordnung.", "تخثر أوردة الحوض (أكثر في اليسار) يسبب تورماً وألماً في ساق واحدة. إبلاغ الطبيب فوراً؛ لا يُدلَّك الطرف والراحة في الفراش حسب الأمر."],
  },
  "sacrum": {
    de: "Kreuzbein", la: "Os sacrum", ar: "العجز",
    fn: ["Fünf verwachsene Wirbel bilden die Rückwand des Beckens. Sie dient hier nur der Orientierung; Blase und Harnröhre liegen davor im kleinen Becken.", "خمس فقرات ملتحمة تشكل الجدار الخلفي للحوض. يظهر هنا للتوجيه فقط؛ إذ تقع المثانة والإحليل أمامه في الحوض الصغير."],
    kl: ["Über dem Kreuzbein entstehen bei Bettlägerigkeit am häufigsten Dekubitalulzera. Pflege: Hautinspektion, Druckentlastung, Lagewechsel nach Plan, Hautpflege bei Inkontinenz.", "فوق العجز تظهر في الغالب قرح الفراش عند المرضى الملازمين للسرير. التمريض: فحص الجلد وتخفيف الضغط وتغيير الوضعية حسب الجدول والعناية بالجلد عند سلس البول."],
    note: ["Skelett gehört zum Bewegungsapparat; nur als Orientierungsschale dargestellt.", "الهيكل العظمي يتبع الجهاز الحركي؛ ويظهر فقط كغلاف للتوجيه."],
  },
};
export const URINARY_ITEMS = items;

const R = (de: string, ar: string, en: string, fr: string, tr: string): [string, string, string, string, string] => [de, ar, en, fr, tr];

export const URINARY_PATHS: AtlasPath[] = [
  {
    id: "urine",
    title: R("Weg des Urins", "مسار البول", "Path of urine", "Trajet de l'urine", "İdrarın yolu"),
    intro: ["Von der Niere bis zur Ausscheidung in sechs Stationen. Die Harnbildung selbst zeigt das Schema „Nephron“ unten.", "من الكلية إلى الإخراج في ست محطات. أما تكوين البول فيعرضه رسم «النفرون» أدناه."],
    steps: [
      { title: R("Niere: Harnbildung", "الكلية: تكوين البول", "Kidney: urine formation", "Rein : formation de l'urine", "Böbrek: idrar oluşumu"), text: ["In etwa einer Million Nephronen je Niere wird das Blut gefiltert (Primärharn, etwa 180 Liter pro Tag) und der Harn durch Rückresorption und Sekretion auf etwa 1,5 Liter pro Tag eingeengt.", "في نحو مليون نفرون لكل كلية يُرشَّح الدم (البول الأولي نحو 180 لتراً يومياً) ثم يتركّز البول بإعادة الامتصاص والإفراز إلى نحو 1.5 لتر يومياً."], ids: ["right-kidney", "left-kidney"], note: ["Nephron, Rinde und Mark sind im 3D-Modell nicht enthalten; siehe Schema.", "النفرون والقشرة واللب غير موجودة في النموذج؛ انظر الرسم."] },
      { title: R("Nierenbecken", "حويضة الكلية", "Renal pelvis", "Bassinet", "Böbrek pelvisi"), text: ["Der fertige Harn tropft aus den Papillen in die Nierenkelche und sammelt sich im Nierenbecken, das sich trichterförmig zum Harnleiter verengt.", "يقطر البول النهائي من الحليمات إلى الكؤوس الكلوية ويتجمع في الحويضة التي تضيق كالقمع نحو الحالب."], ids: ["right-ureter", "left-ureter"], note: ["Kelche und Nierenbecken sind im Modell als oberes Ende des Harnleiters vorhanden (Niere ausblenden); Details im Schema „Nierenaufbau“.", "الكؤوس والحويضة موجودة في النموذج كطرف علوي للحالب (أخفِ الكلية)؛ والتفاصيل في رسم «بنية الكلية»."] },
      { title: R("Harnleiter", "الحالبان", "Ureters", "Uretères", "Üreterler"), text: ["Peristaltische Wellen schieben den Urin etwa alle 10 bis 30 Sekunden portionsweise durch die 25 bis 30 cm langen Harnleiter nach unten.", "تدفع الموجات الدودية البول على دفعات، تقريباً كل 10 إلى 30 ثانية، عبر الحالبين اللذين يبلغ طولهما 25 إلى 30 سم."], ids: ["right-ureter", "left-ureter"] },
      { title: R("Drei Engstellen", "التضيقات الثلاثة", "Three narrow points", "Trois rétrécissements", "Üç daralma"), text: ["Abgang vom Nierenbecken, Kreuzung mit den Beckengefäßen und Eintritt in die Blasenwand: Hier bleiben Steine stecken und verursachen Koliken.", "الخروج من الحويضة، والتقاطع مع أوعية الحوض، والدخول في جدار المثانة: هنا تعلق الحصى وتسبب المغص."], ids: ["right-ureter", "left-ureter", "common-iliac-arteries", "common-iliac-veins"] },
      { title: R("Harnblase", "المثانة", "Urinary bladder", "Vessie", "Mesane"), text: ["Die Blase sammelt den Urin bis etwa 500 ml. Dehnungsrezeptoren melden den Füllungszustand, ab etwa 200 bis 300 ml entsteht Harndrang. Schräg eingemündete Harnleiter verhindern den Rückfluss.", "تجمع المثانة البول حتى نحو 500 مل. وتبلّغ مستقبلات التمدد عن الامتلاء ويبدأ الإلحاح عند نحو 200 إلى 300 مل. والحالبان المائلا الدخول يمنعان الارتداد."], ids: ["bladder", "right-ureter", "left-ureter"] },
      { title: R("Harnröhre und Miktion", "الإحليل والتبول", "Urethra and micturition", "Urètre et miction", "Üretra ve miksiyon"), text: ["Bei der Miktion zieht sich der Detrusor zusammen, die Schließmuskeln erschlaffen, der Urin fließt durch die Harnröhre ab. Beim Mann zieht sie durch die Prostata.", "عند التبول تنقبض العضلة النافضة وترتخي العواصر ويخرج البول عبر الإحليل. ويمر عند الرجل داخل البروستات."], ids: ["bladder", "prostate", "urethra"] },
    ],
  },
  {
    id: "blood",
    title: R("Durchblutung der Niere", "تروية الكلية", "Blood supply of the kidney", "Vascularisation du rein", "Böbrek kan akımı"),
    intro: ["Etwa 20 bis 25 % des Herzzeitvolumens fließen durch die Nieren. Hell = Arterie, dunkel = Vene.", "نحو 20 إلى 25% من النتاج القلبي تمر عبر الكليتين. الأحمر = شريان والداكن = وريد."],
    steps: [
      { title: R("Bauchaorta", "الأبهر البطني", "Abdominal aorta", "Aorte abdominale", "Abdominal aort"), text: ["Auf Höhe L1 bis L2 gehen beidseits die Nierenarterien aus der Bauchaorta ab.", "عند القطنية 1 و2 تخرج الشرايين الكلوية من الجانبين من الأبهر البطني."], ids: ["abdominal-aorta"] },
      { title: R("Nierenarterien", "الشريانان الكلويان", "Renal arteries", "Artères rénales", "Renal arterler"), text: ["Die Nierenarterien teilen sich am Hilum in vordere und hintere Äste und Segmentarterien.", "ينقسم الشريانان الكلويان عند السرة إلى فروع أمامية وخلفية وشرايين قطعية."], ids: ["right-renal-artery", "left-renal-artery"] },
      { title: R("Filtration im Glomerulus", "الترشيح في الكبيبة", "Filtration in the glomerulus", "Filtration glomérulaire", "Glomerülde filtrasyon"), text: ["Die Arterien verzweigen sich bis zu den Glomeruli. Dort wird ein Teil des Plasmas abgepresst; das Blut selbst bleibt in den Gefäßen.", "تتفرع الشرايين حتى الكبيبات. وهناك يُعصر جزء من البلازما، بينما يبقى الدم نفسه في الأوعية."], ids: ["right-kidney", "left-kidney", "right-renal-artery", "left-renal-artery"], note: ["Glomeruli sind mikroskopisch klein und nur im Schema dargestellt.", "الكبيبات مجهرية وتظهر في الرسم التخطيطي فقط."] },
      { title: R("Nierenvenen", "الوريدان الكلويان", "Renal veins", "Veines rénales", "Renal venler"), text: ["Das gefilterte Blut verlässt die Niere über die Nierenvenen. Die linke ist länger und kreuzt vor der Bauchaorta.", "يغادر الدم المرشَّح الكلية عبر الوريدين الكلويين. والأيسر أطول ويعبر أمام الأبهر البطني."], ids: ["right-renal-vein", "left-renal-vein", "abdominal-aorta"] },
      { title: R("Untere Hohlvene", "الوريد الأجوف السفلي", "Inferior vena cava", "Veine cave inférieure", "Alt vena kava"), text: ["Über die untere Hohlvene gelangt das Blut zurück zum rechten Herzen.", "عبر الوريد الأجوف السفلي يعود الدم إلى القلب الأيمن."], ids: ["inferior-vena-cava", "right-renal-vein", "left-renal-vein"] },
    ],
  },
  {
    id: "catheter",
    title: R("Weg des Blasenkatheters (Mann)", "مسار قسطرة المثانة (رجل)", "Path of a urinary catheter (male)", "Trajet de la sonde urinaire (homme)", "İdrar sondasının yolu (erkek)"),
    intro: ["Anatomie für das Legen eines transurethralen Katheters. Das Vorgehen richtet sich nach Hausstandard und ärztlicher Anordnung.", "التشريح اللازم لوضع قسطرة عبر الإحليل. وتتبع الخطوات معيار المؤسسة وأمر الطبيب."],
    steps: [
      { title: R("Harnröhre", "الإحليل", "Urethra", "Urètre", "Üretra"), text: ["Der Katheter wird durch die etwa 20 bis 25 cm lange Harnröhre geführt. Penis anheben und leicht strecken, damit die Krümmung ausgeglichen wird; Gleitmittel mit Lokalanästhetikum verwenden.", "تُمرَّر القسطرة عبر الإحليل الذي يبلغ طوله نحو 20 إلى 25 سم. يُرفع القضيب ويُشدّ قليلاً لتعديل الانحناء ويُستخدم مزلّق مع مخدر موضعي."], ids: ["urethra"] },
      { title: R("Prostata", "البروستات", "Prostate", "Prostate", "Prostat"), text: ["Die Harnröhre läuft durch die Prostata. Ist sie vergrößert, spürt man Widerstand: nie Gewalt anwenden, sondern Arzt informieren.", "يمر الإحليل عبر البروستات. وإن كانت متضخمة تُحَسّ مقاومة: لا تُستخدم القوة أبداً بل يُبلَّغ الطبيب."], ids: ["urethra", "prostate"] },
      { title: R("Blase erreicht", "الوصول إلى المثانة", "Reaching the bladder", "Arrivée dans la vessie", "Mesaneye ulaşma"), text: ["Erst wenn Urin abfließt, wird der Katheter noch ein kurzes Stück vorgeschoben und der Ballon geblockt. So liegt der Ballon sicher in der Blase und nicht in der Harnröhre.", "فقط عند خروج البول تُدفع القسطرة قليلاً ثم يُنفخ البالون. وهكذا يستقر البالون في المثانة لا في الإحليل."], ids: ["bladder", "urethra"] },
    ],
  },
];

export const URINARY_CARE = {
  diseases: ["Harnwegsinfekt, Zystitis und Pyelonephritis", "Nierensteine und Harnleiterkolik", "Akutes und chronisches Nierenversagen (Niereninsuffizienz)", "Glomerulonephritis und nephrotisches Syndrom", "Harnverhalt und Prostatahyperplasie", "Harninkontinenz", "Blasentumor und Nierenzellkarzinom", "Diabetische und hypertensive Nierenschäden"],
  symptoms: ["Brennen beim Wasserlassen (Dysurie), Pollakisurie, Harndrang", "Flankenschmerz und Koliken", "Blut im Urin (Hämaturie), trüber oder übel riechender Urin", "Oligurie (unter 500 ml pro Tag), Anurie (unter 100 ml pro Tag), Polyurie", "Ödeme, Gewichtszunahme, Bluthochdruck, Müdigkeit, Juckreiz bei Urämie", "Fieber und Schüttelfrost bei aufsteigendem Infekt"],
  diagnostics: ["Urinstatus mit Teststreifen (Leukozyten, Nitrit, Blut, Eiweiß, Glukose), Mittelstrahlurin und Urinkultur", "Blut: Kreatinin, Harnstoff, eGFR, Kalium, Natrium, Entzündungswerte", "Sonografie von Nieren und Blase, Restharnbestimmung", "Röntgen, CT oder MRT; Zystoskopie", "Urodynamik bei Inkontinenz", "Flüssigkeitsbilanz und Urinmengenmessung"],
  actions: ["Mittelstrahlurin korrekt gewinnen lassen (Intimreinigung, ersten Strahl verwerfen) und sofort ins Labor bringen", "Ausreichend trinken lassen, sofern keine Trinkmengenbegrenzung besteht; bei Niereninsuffizienz Trinkmenge nach ärztlicher Anordnung", "Ein- und Ausfuhr bilanzieren, tägliches Wiegen bei Ödemen oder Dialyse", "Blasenkatheter nur mit klarer Indikation, aseptisch legen, geschlossenes System, täglich Notwendigkeit prüfen und früh entfernen", "Intimpflege von vorn nach hinten, Haut bei Inkontinenz schützen, Toilettentraining anbieten", "Bei Koliken Schmerzmittel und Wärme nach Anordnung, Urin sieben, Flankenschmerz und Fieber melden", "Bei Dialyse: Shuntarm schonen (keine Blutdruckmessung, keine Blutentnahme), Shuntgeräusch und -schwirren täglich kontrollieren"],
  monitoring: ["Urinmenge, Farbe, Geruch, Trübung, Beimengungen, Miktionsbeschwerden", "Flüssigkeitsbilanz, Gewicht, Ödeme (Unterschenkel, Augenlider, Rücken)", "Blutdruck, Puls, Temperatur, Bewusstsein", "Kreatinin, Kalium und eGFR laut ärztlicher Anordnung", "Katheter: Einstichstelle, Urinfluss, Fixierung, Zeichen eines Infekts", "Schmerzen (Flanke, Unterbauch), Übelkeit, Juckreiz, Atemnot"],
  terms: [["Dysurie", "schmerzhaftes Wasserlassen"], ["Pollakisurie", "häufiges Wasserlassen kleiner Mengen"], ["Nykturie", "nächtliches Wasserlassen"], ["Oligurie / Anurie", "Urinmenge unter 500 ml / unter 100 ml pro Tag"], ["Polyurie", "Urinmenge über etwa 2,5 bis 3 Liter pro Tag"], ["Hämaturie", "Blut im Urin"], ["Proteinurie", "Eiweiß im Urin, Hinweis auf Schädigung des Nierenfilters"], ["Glukosurie", "Zucker im Urin, z. B. bei Diabetes"], ["Harnverhalt (Retentio urinae)", "Blase kann nicht entleert werden"], ["Inkontinenz", "unwillkürlicher Urinverlust"], ["Urämie", "Vergiftungszustand bei Nierenversagen"], ["eGFR", "geschätzte glomeruläre Filtrationsrate"]] as [string, string][],
  lessons: ["niereninsuff", "harnweg", "niere", "glomerulonephritis", "dialyse", "ausscheidung", "b-katheter-injektion"],
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string): AtlasQuiz => ({ q: [qd, qa], o, why: [wd, wa] });
export const URINARY_QUIZ: AtlasQuiz[] = [
  Q("Wo liegen die Nieren?", "أين تقع الكليتان؟", ["Retroperitoneal in Höhe von etwa Th12 bis L3", "Intraperitoneal im kleinen Becken", "Im Brustraum neben dem Herzen", "Vor der Blase im Unterbauch"],
    "Die Nieren liegen hinter dem Bauchfell (retroperitoneal) beiderseits der Wirbelsäule etwa von Th12 bis L3. Die rechte liegt wegen der Leber meist etwas tiefer. Richtige Antwort: retroperitoneal in Höhe von Th12 bis L3; deshalb zeigt sich eine Nierenentzündung oft als Schmerz in der Flanke und nicht im Bauch.",
    "تقع الكليتان خلف الصفاق على جانبي العمود الفقري تقريباً من الفقرة الصدرية 12 إلى القطنية 3، واليمنى أخفض قليلاً بسبب الكبد. الإجابة الصحيحة: خلف الصفاق عند مستوى الصدرية 12 إلى القطنية 3؛ لذلك يظهر التهاب الكلية غالباً كألم في الخاصرة لا في البطن."),
  Q("Wie viel Primärharn bilden die Nieren ungefähr pro Tag und wie viel wird als Endharn ausgeschieden?", "كم تنتج الكليتان من البول الأولي يومياً تقريباً وكم يُطرح كبول نهائي؟", ["Etwa 180 Liter Primärharn, etwa 1,5 Liter Endharn", "Etwa 18 Liter Primärharn, etwa 15 Liter Endharn", "Etwa 1,5 Liter Primärharn, etwa 180 Liter Endharn", "Etwa 50 Liter Primärharn, etwa 5 Liter Endharn"],
    "Die glomeruläre Filtrationsrate beträgt etwa 120 ml pro Minute, das sind rund 180 Liter Primärharn pro Tag. Über 99 % davon werden im Tubulussystem zurückgewonnen. Richtige Antwort: etwa 180 Liter Primärharn und etwa 1,5 Liter Endharn. Das zeigt, wie wichtig die Rückresorption ist.",
    "معدل الترشيح الكبيبي نحو 120 مل في الدقيقة أي نحو 180 لتراً من البول الأولي يومياً، ويُسترجع أكثر من 99% منها في الأنابيب الكلوية. الإجابة الصحيحة: نحو 180 لتراً بولاً أولياً ونحو 1.5 لتر بولاً نهائياً، وهذا يبيّن أهمية إعادة الامتصاص."),
  Q("Wo bleiben Nierensteine typischerweise im Harnleiter stecken?", "أين تعلق حصى الكلى عادةً في الحالب؟", ["An den drei Engstellen: Nierenbecken-Abgang, Kreuzung mit den Beckengefäßen, Blaseneintritt", "Nur in der Mitte des Harnleiters", "Ausschließlich in der Harnröhre", "In den Nierenvenen"],
    "Der Harnleiter hat drei physiologische Engstellen: Abgang aus dem Nierenbecken, Kreuzung mit den Arteria und Vena iliaca und der Durchtritt durch die Blasenwand. Dort bleiben Steine hängen und lösen Koliken aus. Richtige Antwort: an den drei Engstellen.",
    "للحالب ثلاثة تضيقات فيزيولوجية: خروجه من الحويضة وتقاطعه مع الشريان والوريد الحرقفيين وعبوره جدار المثانة. وهناك تعلق الحصى وتسبب المغص. الإجابة الصحيحة: عند التضيقات الثلاثة."),
  Q("Welche Aussage zur Harnröhre ist richtig?", "أي عبارة عن الإحليل صحيحة؟", ["Die weibliche Harnröhre ist mit etwa 3 bis 5 cm deutlich kürzer als die männliche mit etwa 20 bis 25 cm", "Beide Geschlechter haben gleich lange Harnröhren", "Die männliche Harnröhre ist kürzer", "Die Harnröhre dient bei beiden Geschlechtern auch der Samenleitung"],
    "Die kurze weibliche Harnröhre ist der Hauptgrund, warum Frauen häufiger Harnwegsinfekte bekommen: Keime gelangen schneller in die Blase. Beim Mann ist sie etwa 20 bis 25 cm lang und führt auch den Samen. Richtige Antwort: weiblich 3 bis 5 cm, männlich 20 bis 25 cm.",
    "قصر الإحليل الأنثوي هو السبب الرئيسي لكثرة التهابات المسالك البولية عند النساء إذ تصل الجراثيم أسرع إلى المثانة. وعند الرجل طوله نحو 20 إلى 25 سم وينقل المني أيضاً. الإجابة الصحيحة: 3 إلى 5 سم عند المرأة و20 إلى 25 سم عند الرجل."),
  Q("Ein Patient hat einen Dauerkatheter. Welche Maßnahme senkt das Infektionsrisiko am meisten?", "مريض لديه قسطرة بولية دائمة. أي إجراء يقلل خطر العدوى أكثر؟", ["Täglich die Indikation prüfen und den Katheter so früh wie möglich entfernen", "Den Katheter wöchentlich routinemäßig wechseln", "Den Beutel auf Bettniveau halten", "Das geschlossene System zum Spülen regelmäßig öffnen"],
    "Das Infektionsrisiko steigt mit jedem Tag Liegedauer. Deshalb gehören eine klare Indikation, aseptisches Legen, das geschlossene System, ein Beutel unter Blasenniveau ohne Bodenkontakt und die tägliche Prüfung der Notwendigkeit zusammen. Richtige Antwort: Indikation täglich prüfen und früh entfernen.",
    "يزداد خطر العدوى مع كل يوم يبقى فيه القسطر. لذلك يجب وجود دواعٍ واضحة ووضعه بتعقيم ونظام مغلق وكيس أسفل مستوى المثانة دون ملامسة الأرض ومراجعة الحاجة يومياً. الإجابة الصحيحة: مراجعة الداعي يومياً وإزالته مبكراً."),
  Q("Welche Funktion hat das Hormon Erythropoetin, das in der Niere gebildet wird?", "ما وظيفة هرمون الإريثروبويتين الذي يُفرز في الكلية؟", ["Es regt die Bildung roter Blutkörperchen im Knochenmark an", "Es erhöht die Rückresorption von Wasser", "Es senkt den Blutzucker", "Es aktiviert die Verdauungsenzyme"],
    "Bei Sauerstoffmangel bildet die Niere mehr Erythropoetin, das im Knochenmark die Blutbildung anregt. Bei chronischer Niereninsuffizienz fehlt es, und es entsteht eine renale Anämie mit Blässe und Müdigkeit. Richtige Antwort: Anregung der Bildung roter Blutkörperchen.",
    "عند نقص الأكسجين تفرز الكلية المزيد من الإريثروبويتين الذي ينشّط تكوين الدم في نخاع العظم. وفي القصور الكلوي المزمن ينقص فتحدث فقر دم كلوي مع شحوب وتعب. الإجابة الصحيحة: تنشيط تكوين كريات الدم الحمراء."),
  Q("Wie wird Oligurie beim Erwachsenen definiert?", "كيف تُعرَّف قلة البول عند البالغ؟", ["Urinmenge unter etwa 500 ml pro Tag", "Urinmenge über 3 Liter pro Tag", "Fehlender Harndrang bei voller Blase", "Blut im Urin"],
    "Von Oligurie spricht man bei weniger als etwa 500 ml Urin pro Tag, von Anurie bei weniger als 100 ml. Sie kann bei Flüssigkeitsmangel, Schock, Nierenversagen oder Harnabflussstörung auftreten und muss ärztlich abgeklärt werden. Richtige Antwort: unter etwa 500 ml pro Tag.",
    "تُسمّى قلة البول أقل من نحو 500 مل يومياً وانعدام البول أقل من 100 مل. وقد تحدث في نقص السوائل والصدمة والفشل الكلوي واضطراب تصريف البول ويجب تقييمها طبياً. الإجابة الصحيحة: أقل من نحو 500 مل يومياً."),
  Q("Was ist bei einem Dialysepatienten mit Shunt am Arm pflegerisch wichtig?", "ما الأهم تمريضياً لمريض غسيل كلوي لديه ناسور شرياني وريدي في الذراع؟", ["Am Shuntarm keine Blutdruckmessung, keine Blutentnahme, kein Druck; Schwirren täglich prüfen", "Den Shuntarm für Blutentnahmen bevorzugen", "Am Shuntarm regelmäßig Blutdruck messen", "Enge Verbände um den Arm anlegen"],
    "Der Shunt ist die Lebensader des Patienten. Druck, Abbinden, Blutdruckmessung und Punktionen außerhalb der Dialyse können ihn verschließen. Täglich werden Schwirren (fühlbar) und Strömungsgeräusch (hörbar) kontrolliert; fehlen sie, sofort Arzt informieren. Richtige Antwort: den Shuntarm schonen und das Schwirren täglich prüfen.",
    "الناسور شريان الحياة للمريض. فالضغط وربط الذراع وقياس الضغط والوخز خارج الغسيل قد تسدّه. يُفحص يومياً الاهتزاز (باللمس) وصوت التدفق (بالسماع)، وإن غابا يُبلَّغ الطبيب فوراً. الإجابة الصحيحة: حماية ذراع الناسور وفحص الاهتزاز يومياً."),
  Q("Warum treten Krampfadern der Keimdrüsenvene (Varikozele) fast nur links auf?", "لماذا تظهر دوالي وريد الغدة التناسلية (القيلة الدوالية) تقريباً في الجهة اليسرى فقط؟", ["Die linke Keimdrüsenvene mündet in die linke Nierenvene, die vor der Aorta verläuft und Druck aufbauen kann", "Die linke Niere ist größer", "Die rechte Vene mündet in die Aorta", "Die linke Harnröhre ist enger"],
    "Die linke Keimdrüsenvene mündet in die linke Nierenvene, die zwischen Aorta und oberer Eingeweidearterie verläuft und dort eingeengt sein kann. Die rechte Vene mündet direkt in die untere Hohlvene. Richtige Antwort: wegen der Einmündung in die linke Nierenvene.",
    "يصب وريد الغدة التناسلية اليسرى في الوريد الكلوي الأيسر الذي يمر بين الأبهر والشريان المساريقي العلوي وقد يتضيّق هناك، بينما يصب الأيمن مباشرة في الوريد الأجوف السفلي. الإجابة الصحيحة: بسبب مصبه في الوريد الكلوي الأيسر."),
  Q("Welche Aussage zum Glomerulus ist richtig?", "أي عبارة عن الكبيبة صحيحة؟", ["Er filtert Plasma ab; große Eiweiße und Blutzellen werden normalerweise zurückgehalten", "Er sammelt den Endharn", "Er konzentriert den Harn über ADH", "Er speichert den Urin"],
    "Das Kapillarknäuel der Glomeruli presst Plasma in die Bowman-Kapsel. Fenestriertes Endothel, Basalmembran und Podozytenfüße halten Blutzellen und große Eiweiße zurück. Eiweiß oder Blut im Urin weisen deshalb auf einen geschädigten Filter hin. Richtige Antwort: Filtration unter Rückhalt großer Eiweiße und Blutzellen.",
    "تعصر شعيرات الكبيبة البلازما إلى محفظة بومان. ويحتجز البطانة المثقبة والغشاء القاعدي وأقدام الخلايا الأرجلية الخلايا الدموية والبروتينات الكبيرة. لذلك يدل وجود بروتين أو دم في البول على تلف المرشح. الإجابة الصحيحة: ترشيح مع احتجاز البروتينات الكبيرة والخلايا الدموية."),
  Q("Welcher Abschnitt des Nephrons resorbiert den größten Teil des filtrierten Wassers, Natriums und fast die gesamte Glukose?", "أي جزء من النفرون يعيد امتصاص معظم الماء والصوديوم المرشَّحين وكل الغلوكوز تقريباً؟", ["Der proximale Tubulus", "Das Sammelrohr", "Der distale Tubulus", "Die Bowman-Kapsel"],
    "Im proximalen Tubulus werden etwa zwei Drittel von Wasser und Natrium und praktisch die gesamte Glukose und die Aminosäuren zurückgewonnen. Übersteigt die Blutglukose die Nierenschwelle (etwa 180 mg/dl), erscheint Zucker im Urin. Richtige Antwort: der proximale Tubulus.",
    "في الأنبوب الداني تُسترجع نحو ثلثي الماء والصوديوم وتقريباً كل الغلوكوز والأحماض الأمينية. وعندما يتجاوز سكر الدم العتبة الكلوية (نحو 180 ملغ/دل) يظهر السكر في البول. الإجابة الصحيحة: الأنبوب الداني."),
  Q("Welche Maßnahme gehört zur Pflege bei Verdacht auf einen Harnwegsinfekt?", "أي إجراء تمريضي مناسب عند الاشتباه بالتهاب المسالك البولية؟", ["Mittelstrahlurin vor Antibiotikagabe gewinnen, viel trinken lassen (wenn erlaubt), Beschwerden und Temperatur beobachten", "Die Trinkmenge drastisch einschränken", "Sofort einen Dauerkatheter legen", "Urin im Glas bei Raumtemperatur mehrere Stunden stehen lassen"],
    "Für eine aussagekräftige Urinkultur wird der Mittelstrahlurin möglichst vor der ersten Antibiotikagabe gewonnen und rasch ins Labor gebracht. Viel Trinken spült die Harnwege, solange keine Begrenzung besteht. Fieber, Flankenschmerz und Schüttelfrost deuten auf eine aufsteigende Infektion und sind zu melden. Richtige Antwort: Mittelstrahlurin gewinnen, trinken lassen, beobachten.",
    "للحصول على زرع بول موثوق يُؤخذ بول منتصف التيار قبل أول جرعة مضاد حيوي قدر الإمكان ويُرسل بسرعة للمختبر. والإكثار من الشرب يغسل المسالك طالما لا يوجد تقييد. والحمى وألم الخاصرة والقشعريرة تدل على عدوى صاعدة ويجب إبلاغها. الإجابة الصحيحة: أخذ بول منتصف التيار والتشجيع على الشرب والمراقبة."),
  Q("Warum sollten bei Niereninsuffizienz NSAR wie Ibuprofen nur nach Rücksprache gegeben werden?", "لماذا لا تُعطى مضادات الالتهاب غير الستيرويدية كالإيبوبروفين عند القصور الكلوي إلا بعد استشارة؟", ["Sie verengen die zuführenden Nierengefäße und können die Nierendurchblutung und Filtration weiter senken", "Sie erhöhen die Urinmenge stark", "Sie erweitern die Nierenarterie", "Sie verbessern die Rückresorption"],
    "Prostaglandine halten die zuführenden Arteriolen der Glomeruli weit. NSAR hemmen sie, die Durchblutung sinkt, bei vorgeschädigter Niere kann akutes Nierenversagen entstehen. Richtige Antwort: Sie mindern die Nierendurchblutung. Nierenschädliche Medikamente gehören daher in die ärztliche Abklärung.",
    "تُبقي البروستاغلاندينات الشرينات الواردة للكبيبات متوسعة. وتثبّطها مضادات الالتهاب غير الستيرويدية فتقل التروية وقد يحدث فشل كلوي حاد في الكلية المتضررة. الإجابة الصحيحة: تقلل تروية الكلية؛ لذلك تُراجَع الأدوية المؤذية للكلية مع الطبيب."),
];

export const URINARY_CFG: AtlasConfig = {
  key: "urinary",
  modelUrl: "/models/urinary.glb",
  items: URINARY_ITEMS,
  layers: URINARY_LAYERS,
  layerOf: (id) => {
    if (id.endsWith("-kidney")) return "kidney";
    if (id.endsWith("-adrenal")) return "adrenal";
    if (id.endsWith("-renal-artery")) return "artery";
    if (id.endsWith("-renal-vein")) return "vein";
    if (id.endsWith("-ureter") || id === "bladder" || id === "urethra") return "ducts";
    if (id === "prostate") return "prostate";
    if (id === "sacrum") return "shell";
    return "great";
  },
  color: (id, layer) => {
    switch (layer) {
      case "kidney": return 0xb8604f;
      case "adrenal": return 0xe0b84e;
      case "artery": return 0xd8413a;
      case "vein": return 0x5a4f9a;
      case "ducts": return id === "bladder" ? 0xe0c070 : id === "urethra" ? 0xd9a441 : 0xe8d27a;
      case "prostate": return 0x66a58b;
      case "great": return /aorta|arteries/.test(id) ? 0xc4362f : 0x4a5fa8;
      default: return 0xe6dcc5;
    }
  },
  shell: ["shell"],
  innerLabel: ["Kreuzbein durchsichtig", "العجز شفاف", "Sacrum transparent", "Sacrum transparent", "Sakrum saydam"],
  careTitle: ["Pflege-Überblick Harnsystem", "نظرة تمريضية على الجهاز البولي", "Nursing overview: urinary system", "Aperçu infirmier : système urinaire", "Hemşirelik özeti: üriner sistem"],
  target: [0, 0.05, 0], shellOpacity: 0.45,
  dist: 0.8, minDist: 0.1, maxDist: 1.6, clipRange: 0.2, explodeScale: 0.7,
  care: URINARY_CARE,
  quiz: URINARY_QUIZ,
  paths: URINARY_PATHS,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Referenzanatomie eines erwachsenen Mannes. Nicht im Modell: Nierenparenchym (Rinde, Mark), Nephron, Nierenhüllen, Schließmuskeln, weibliche Harnröhre (siehe Schemata).", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). تشريح مرجعي لرجل بالغ. غير موجود في النموذج: نسيج الكلية (القشرة واللب) والنفرون والمحافظ والعواصر والإحليل الأنثوي (انظر الرسوم التخطيطية).", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (adapted). Reference anatomy of an adult male. Not in the model: kidney cortex and medulla, nephron, renal fasciae, sphincters, female urethra (see schematics).", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (adapté). Anatomie de référence d'un homme adulte. Absent : cortex et médulla du rein, néphron, sphincters, urètre féminin (voir schémas).", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (uyarlandı). Yetişkin erkek referans anatomisi. Modelde yok: böbrek korteks ve medullası, nefron, sfinkterler, kadın üretrası (şemalara bakın)."],
};
