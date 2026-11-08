/**
 * Gliederung (Bestandteile) ausgewählter Organe als Text [de, ar]. Reine Anatomie-Lernhilfe; im 3D-Modell sind diese Teile nicht getrennt.
 * Schlüssel: Atlas-key, dann Strukturname.
 */
type Parts = [string, string][];
export const ATLAS_PARTS: Record<string, Record<string, Parts>> = {
  digestive: {
    pancreas: [["Kopf (Caput), in der Duodenalschleife", "الرأس (داخل انحناءة الاثني عشر)"], ["Körper (Corpus), vor der Wirbelsäule", "الجسم (أمام العمود الفقري)"], ["Schwanz (Cauda), reicht zur Milz", "الذيل (يصل إلى الطحال)"], ["Ausführungsgang (Ductus pancreaticus), mündet mit dem Gallengang an der Papille", "القناة البنكرياسية (تصب مع القناة الصفراوية في الحليمة)"], ["Exokriner Teil: Verdauungsenzyme; endokriner Teil: Langerhans-Inseln (Insulin, Glukagon)", "الجزء الخارجي: إنزيمات الهضم؛ الجزء الصماوي: جزر لانغرهانس (إنسولين وغلوكاغون)"]],
    stomach: [["Mageneingang (Kardia)", "الفؤاد"], ["Magengrund (Fundus)", "القاع"], ["Magenkörper (Corpus)", "الجسم"], ["Magenausgang (Antrum und Pylorus)", "الغار والبواب"], ["Kleine und große Kurvatur", "الانحناءة الصغرى والكبرى"]],
    esophagus: [["Halsteil (Pars cervicalis)", "الجزء العنقي"], ["Brustteil (Pars thoracica)", "الجزء الصدري"], ["Bauchteil (Pars abdominalis)", "الجزء البطني"], ["Drei Engen: Ringknorpel, Aortenbogen, Zwerchfelldurchtritt", "ثلاث تضيقات: غضروف الحلقي والقوس الأبهري وثقب الحجاب"]],
    duodenum: [["Pars superior (Bulbus)", "الجزء العلوي (البصلة)"], ["Pars descendens mit Papille", "الجزء النازل مع الحليمة"], ["Pars horizontalis", "الجزء الأفقي"], ["Pars ascendens bis zur Flexura duodenojejunalis", "الجزء الصاعد حتى الثنية الصائمية"]],
    gallbladder: [["Fundus", "القاع"], ["Korpus", "الجسم"], ["Infundibulum und Hals", "القمع والعنق"], ["Ductus cysticus", "القناة الكيسية"]],
    "extrahepatic-bile-ducts": [["Ductus hepaticus dexter und sinister", "القناتان الكبديتان اليمنى واليسرى"], ["Ductus hepaticus communis", "القناة الكبدية المشتركة"], ["Ductus cysticus (zur Gallenblase)", "القناة الكيسية (إلى المرارة)"], ["Ductus choledochus (mündet in das Duodenum)", "القناة الجامعة (تصب في الاثني عشر)"]],
    appendix: [["Basis am Blinddarm", "القاعدة عند الأعور"], ["Wurmfortsatz mit lymphatischem Gewebe", "الزائدة مع نسيج لمفاوي"], ["Mesenteriolum", "مساريقا الزائدة"]],
  },
  urinary: {
    "right-kidney": [["Nierenrinde (Cortex) mit Glomeruli", "قشرة الكلية مع الكبيبات"], ["Nierenmark mit Pyramiden", "لب الكلية مع الأهرامات"], ["Nierenkelche und Nierenbecken", "الكؤوس والحويضة"], ["Nierenhilus: Arterie, Vene, Harnleiter", "سرة الكلية: شريان ووريد وحالب"], ["Fettkapsel und Nierenfaszie", "المحفظة الدهنية وصفاق الكلية"]],
    "left-kidney": [["Nierenrinde (Cortex) mit Glomeruli", "قشرة الكلية مع الكبيبات"], ["Nierenmark mit Pyramiden", "لب الكلية مع الأهرامات"], ["Nierenkelche und Nierenbecken", "الكؤوس والحويضة"], ["Nierenhilus: Arterie, Vene, Harnleiter", "سرة الكلية: شريان ووريد وحالب"], ["Fettkapsel und Nierenfaszie", "المحفظة الدهنية وصفاق الكلية"]],
    bladder: [["Blasenscheitel (Apex)", "قمة المثانة"], ["Blasenkörper (Corpus)", "جسم المثانة"], ["Blasengrund mit Trigonum und Ureter-Mündungen", "قاعدة المثانة مع المثلث وفتحتي الحالبين"], ["Blasenhals und innerer Schließmuskel", "عنق المثانة والعاصرة الداخلية"], ["Detrusormuskel in der Wand", "العضلة النافضة في الجدار"]],
    prostate: [["Basis (unter der Blase)", "القاعدة (تحت المثانة)"], ["Apex (oben am Beckenboden)", "القمة (عند قاع الحوض)"], ["Drüsenzonen: periphere, zentrale, Übergangszone", "المناطق الغدية: المحيطية والمركزية والانتقالية"], ["Durchzogen von der Harnröhre", "تخترقها الإحليل"]],
  },
  resp: {
    trachea: [["Halsteil und Brustteil", "الجزء العنقي والصدري"], ["16 bis 20 hufeisenförmige Knorpelspangen", "16 إلى 20 حلقة غضروفية على شكل حدوة"], ["Membranöse Hinterwand (Pars membranacea)", "الجدار الخلفي الغشائي"], ["Bifurkation (Carina)", "التفرع (الجؤجؤ)"]],
    "right-main-bronchus": [["Kürzer, weiter und steiler als links", "أقصر وأعرض وأكثر انحداراً من اليسار"], ["Teilt sich in drei Lappenbronchien", "ينقسم إلى ثلاث قصبات فصية"], ["Aspirierte Fremdkörper gelangen häufiger hierher", "الأجسام المستنشقة تصل إليه أكثر"]],
    "left-main-bronchus": [["Länger und schmaler als rechts", "أطول وأضيق من اليمين"], ["Teilt sich in zwei Lappenbronchien", "ينقسم إلى قصبتين فصيتين"]],
    "thyroid-cartilage": [["Zwei Platten (Laminae)", "صفيحتان"], ["Prominentia laryngea (Adamsapfel)", "بروز الحنجرة (تفاحة آدم)"], ["Oberes und unteres Horn", "القرن العلوي والسفلي"]],
  },
  endocrine: {
    pancreas: [["Kopf, Körper und Schwanz", "الرأس والجسم والذيل"], ["Langerhans-Inseln: Alpha-Zellen (Glukagon), Beta-Zellen (Insulin), Delta-Zellen (Somatostatin)", "جزر لانغرهانس: ألفا (غلوكاغون) وبيتا (إنسولين) ودلتا (سوماتوستاتين)"], ["Exokriner Drüsenanteil mit Ausführungsgang", "الجزء الغدي الخارجي مع القناة"]],
    "adrenal-glands": [["Nebennierenrinde: Zona glomerulosa (Aldosteron), fasciculata (Cortisol), reticularis (Androgene)", "قشرة الكظر: الكبيبية (ألدوستيرون) والحزمية (كورتيزول) والشبكية (أندروجينات)"], ["Nebennierenmark: Adrenalin und Noradrenalin", "لب الكظر: أدرينالين ونورأدرينالين"]],
    "pituitary-gland": [["Adenohypophyse (Vorderlappen): ACTH, TSH, FSH, LH, GH, Prolaktin", "الفص الأمامي: ACTH وTSH وFSH وLH وهرمون النمو والبرولاكتين"], ["Neurohypophyse (Hinterlappen): ADH und Oxytocin (im Hypothalamus gebildet)", "الفص الخلفي: ADH وأوكسيتوسين (يُصنعان في ما تحت المهاد)"], ["Hypophysenstiel zum Hypothalamus", "ساق الغدة النخامية إلى ما تحت المهاد"]],
    hypothalamus: [["Verbindet Nervensystem und Hormonsystem", "يربط الجهاز العصبي بالهرموني"], ["Bildet Releasing-Hormone für die Hypophyse", "يفرز هرمونات محرِّرة للنخامية"], ["Bildet ADH und Oxytocin", "يصنع ADH وأوكسيتوسين"]],
    testes: [["Hodenläppchen mit Samenkanälchen (Spermien)", "فصيصات الخصية مع الأنابيب المنوية (حيوانات منوية)"], ["Leydig-Zwischenzellen: Testosteron", "خلايا ليديغ: تستوستيرون"], ["Nebenhoden am Hinterrand", "البربخ في الحافة الخلفية"]],
  },
  nervous: {
    cerebellum: [["Zwei Hemisphären und Wurm (Vermis)", "نصفا الكرة المخيخية والدودة"], ["Rinde mit Folia, Mark mit Kleinhirnkernen", "قشرة مع أوراق ولب مع نوى مخيخية"], ["Drei Kleinhirnstiele zum Hirnstamm", "ثلاثة سويقات إلى جذع الدماغ"]],
    thalamus: [["Paarige Kerngruppe, Tor zum Kortex", "مجموعة نوى مزدوجة، بوابة إلى القشرة"], ["Umschaltstation aller Sinne außer dem Geruch", "محطة تبديل لكل الحواس عدا الشم"]],
    "frontal-lobe": [["Primärer Motorkortex (Gyrus praecentralis)", "القشرة الحركية الأولية"], ["Prämotorischer und präfrontaler Kortex (Planung, Verhalten)", "القشرة قبل الحركية والجبهية (تخطيط وسلوك)"], ["Broca-Areal (Sprachproduktion, meist links)", "منطقة بروكا (إنتاج الكلام غالباً يساراً)"]],
    "temporal-lobe": [["Primärer Hörkortex", "القشرة السمعية الأولية"], ["Wernicke-Areal (Sprachverständnis)", "منطقة فيرنيكه (فهم الكلام)"], ["Hippocampus und Amygdala (Gedächtnis, Emotion)", "الحصين واللوزة (ذاكرة وانفعال)"]],
    "parietal-lobe": [["Primärer somatosensorischer Kortex", "القشرة الحسية الجسدية الأولية"], ["Räumliche Orientierung", "التوجه المكاني"]],
    "occipital-lobe": [["Primäre Sehrinde", "القشرة البصرية الأولية"], ["Visuelle Assoziationsfelder", "المناطق الترابطية البصرية"]],
    midbrain: [["Tectum (Vierhügelplatte)", "السقيفة (الأكيمات)"], ["Tegmentum mit Substantia nigra", "القلنسوة مع المادة السوداء"], ["Hirnschenkel (Crura cerebri)", "سويقتا المخ"]],
  },
  reproductive: {
    testes: [["Hodenläppchen mit Samenkanälchen", "فصيصات الخصية مع الأنابيب المنوية"], ["Leydig-Zellen (Testosteron)", "خلايا ليديغ (تستوستيرون)"], ["Hüllen: Tunica albuginea und Skrotum", "الأغلفة: البيضاء والصفن"]],
    epididymis: [["Kopf, Körper und Schwanz", "الرأس والجسم والذيل"], ["Reifung und Speicherung der Spermien", "نضج وتخزين الحيوانات المنوية"]],
    prostate: [["Basis und Apex", "القاعدة والقمة"], ["Zonen: periphere, zentrale, Übergangszone", "المناطق المحيطية والمركزية والانتقالية"], ["Durchzogen von Harnröhre und Ductus ejaculatorii", "يخترقها الإحليل وقنوات القذف"]],
    "seminal-vesicles": [["Paarige Drüsen hinter der Blase", "غدتان مزدوجتان خلف المثانة"], ["Bilden etwa 60 % des Ejakulats (Fruktose)", "تنتجان نحو 60% من القذف (فركتوز)"]],
    urethra: [["Pars prostatica", "الجزء الموثي"], ["Pars membranacea (Schließmuskel)", "الجزء الغشائي (العاصرة)"], ["Pars spongiosa im Penis", "الجزء الإسفنجي في القضيب"]],
  },
  blood: {
    spleen: [["Rote Pulpa: Filter für Blut, Abbau alter Erythrozyten", "اللب الأحمر: مرشح للدم وهدم الكريات القديمة"], ["Weiße Pulpa: Lymphozyten und Immunabwehr", "اللب الأبيض: لمفاويات ومناعة"], ["Milzhilus mit Milzarterie und -vene", "سرة الطحال مع الشريان والوريد"]],
    thymus: [["Rinde: T-Zell-Reifung", "القشرة: نضج الخلايا التائية"], ["Mark mit Hassall-Körperchen", "اللب مع جسيمات هاسال"], ["Zwei Lappen", "فصان"]],
  },
};
