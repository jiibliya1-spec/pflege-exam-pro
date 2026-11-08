/**
 * Atlas Endokrines System: Beschriftungen zu den 18 benannten Strukturen des BodyParts3D-Modells (public/models/endocrine.glb).
 * Definition: tools/defs/endocrine.json. Paarige Strukturen sind zusammengefasst.
 * Im Modell NICHT enthalten: Schilddrüse, Nebenschilddrüsen, Eierstöcke, Inselzellen als eigene Struktur, hormonbildende Zellen in Herz, Niere, Darm, Fettgewebe.
 * Darstellung dieser Organe: schematische Tabelle und Regelkreise. Als Orientierung enthält das Modell Schildknorpel und Luftröhre.
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, AtlasPath, AtlasQuiz } from "./atlasTypes";

export const ENDO_LAYERS: AtlasLayer[] = [
  { id: "neuro", de: "Steuerzentrale (Hypothalamus, Hypophyse, Zirbeldrüse)", ar: "مركز التحكم (تحت المهاد والنخامية والصنوبرية)", en: "Control centre", fr: "Centre de contrôle", tr: "Kontrol merkezi" },
  { id: "adrenal", de: "Nebennieren", ar: "الغدتان الكظريتان", en: "Adrenal glands", fr: "Surrénales", tr: "Böbrek üstü bezleri" },
  { id: "pancreas", de: "Bauchspeicheldrüse", ar: "البنكرياس", en: "Pancreas", fr: "Pancréas", tr: "Pankreas" },
  { id: "thymus-gonad", de: "Thymus und Hoden", ar: "الغدة الزعترية والخصيتان", en: "Thymus and testes", fr: "Thymus et testicules", tr: "Timus ve testisler" },
  { id: "organ", de: "Orientierung: Organe und Kehlkopf", ar: "توجيه: الأعضاء والحنجرة", en: "Orientation: organs", fr: "Repères : organes", tr: "Yön bulma: organlar" },
  { id: "shell", de: "Skelett (Orientierung)", ar: "الهيكل العظمي (للتوجيه)", en: "Skeleton (orientation)", fr: "Squelette (repère)", tr: "İskelet (yön bulma)" },
];

type It = [string, string, string, string, string, string, string, [string, string]?];
const I = (a: It): AtlasItem => ({ de: a[0], la: a[1], ar: a[2], fn: [a[3], a[4]], kl: [a[5], a[6]], ...(a[7] ? { note: a[7] } : {}) });
const PAIR: [string, string] = ["Rechte und linke Seite sind im Modell zu einer Struktur zusammengefasst.", "الجانبان الأيمن والأيسر مدمجان في بنية واحدة."];
const CTX: [string, string] = ["Orientierungsstruktur, keine Hormondrüse (die Schilddrüse fehlt im Modell, siehe Schema).", "بنية توجيه وليست غدة صماء (الغدة الدرقية غير موجودة في النموذج، انظر الرسم)."];

const items: Record<string, AtlasItem> = {
  hypothalamus: I(["Hypothalamus", "Hypothalamus", "تحت المهاد",
    "Oberste Steuerzentrale: misst Temperatur, Blutzusammensetzung und Hormonspiegel und steuert über Releasing- und Inhibiting-Hormone die Hypophyse. Er bildet ADH (Vasopressin) und Oxytocin, die im Hinterlappen gespeichert werden.", "مركز التحكم الأعلى: يقيس الحرارة وتركيب الدم ومستويات الهرمونات ويتحكم بالنخامية عبر هرمونات محفزة ومثبطة. ويصنع ADH (فازوبريسين) والأوكسيتوسين اللذين يُخزّنان في الفص الخلفي.",
    "Störungen betreffen Temperatur, Durst, Hunger und Hormonachsen. ADH-Mangel führt zum Diabetes insipidus (viel verdünnter Urin, großer Durst), zu viel ADH zum SIADH (Wassereinlagerung, niedriges Natrium). Pflege: Ein- und Ausfuhr, Gewicht, Natrium, Bewusstsein.", "اضطرابه يصيب الحرارة والعطش والجوع والمحاور الهرمونية. نقص ADH يسبب السكري الكاذب (بول كثير مخفف وعطش شديد) وزيادته تسبب SIADH (احتباس ماء وصوديوم منخفض). التمريض: السوائل الداخلة والخارجة والوزن والصوديوم والوعي.", PAIR]),
  "pituitary-gland": I(["Hirnanhangsdrüse (Hypophyse)", "Hypophysis (Adenohypophyse, Neurohypophyse)", "الغدة النخامية",
    "„Dirigent“ der Hormondrüsen. Vorderlappen: TSH, ACTH, FSH, LH, Wachstumshormon (GH), Prolaktin. Hinterlappen: gibt ADH und Oxytocin ab. Sie liegt geschützt in der Sella turcica.", "«قائد» الغدد الصماء. الفص الأمامي: TSH وACTH وFSH وLH وهرمون النمو والبرولاكتين. الفص الخلفي: يُفرز ADH والأوكسيتوسين. تقع محمية في السرج التركي.",
    "Hypophysenadenom: Überproduktion (Akromegalie, Cushing, Prolaktinom) oder Druck auf die Sehnervenkreuzung (Gesichtsfeldausfall). Hypophyseninsuffizienz: Müdigkeit, niedriger Blutdruck, Hypoglykämie. Nach transsphenoidaler Operation: Urinmenge, Nasenlaufen (Liquorleck?), Hormonersatz nach Anordnung.", "ورم النخامية الغدي: فرط إفراز (ضخامة الأطراف وكوشينغ وورم البرولاكتين) أو ضغط على التصالب البصري (نقص الساحة البصرية). قصور النخامية: تعب وضغط منخفض ونقص سكر. بعد جراحة عبر الوتدي: كمية البول وسيلان الأنف (تسرب سائل دماغي شوكي؟) والتعويض الهرموني حسب الأمر.", undefined]),
  "pineal-gland": I(["Zirbeldrüse", "Glandula pinealis (Epiphysis cerebri)", "الغدة الصنوبرية",
    "Bildet nachts Melatonin und steuert den Schlaf-Wach-Rhythmus; Licht hemmt die Bildung.", "تفرز الميلاتونين ليلاً وتنظم دورة النوم واليقظة؛ والضوء يثبط إفرازه.",
    "Schichtarbeit, Jetlag und Alter stören den Rhythmus. Schlafhygiene, helles Tageslicht, abends wenig Licht, feste Zeiten. Melatonin und Schlafmittel nur nach ärztlicher Anordnung.", "العمل بالورديات واضطراب فروق التوقيت والتقدم في العمر تخل بالإيقاع. نظافة النوم والضوء الساطع نهاراً وقلة الضوء مساءً وأوقات ثابتة. الميلاتونين والمنومات فقط بأمر الطبيب.", undefined]),
  "adrenal-glands": I(["Nebennieren", "Glandulae suprarenales (Cortex, Medulla)", "الغدتان الكظريتان",
    "Sitzen wie Kappen auf den Nieren. Rinde: Cortisol (Stress, Blutzucker, Entzündung), Aldosteron (Natrium, Blutdruck), Androgene. Mark: Adrenalin und Noradrenalin (Kampf-oder-Flucht).", "تقعان كقلنسوتين فوق الكليتين. القشرة: كورتيزول (الإجهاد والسكر والالتهاب) وألدوستيرون (الصوديوم والضغط) وأندروجينات. اللب: أدرينالين ونورأدرينالين (قتال أو هروب).",
    "Cushing-Syndrom (zu viel Cortisol): Stammfettsucht, Vollmondgesicht, Hypertonie, Hyperglykämie, dünne Haut. Morbus Addison (zu wenig): Müdigkeit, Hypotonie, Hyponatriämie, Hyperkaliämie, Bräunung. Addison-Krise: Notfall (Erbrechen, Schock). Dauertherapie mit Glukokortikoiden: nicht abrupt absetzen, Infektionen, Osteoporose, Blutzucker beobachten.", "متلازمة كوشينغ (فرط الكورتيزول): سمنة جذعية ووجه قمري وارتفاع ضغط وسكر وجلد رقيق. مرض أديسون (نقص): تعب وهبوط ضغط ونقص صوديوم وفرط بوتاسيوم وتسمر الجلد. أزمة أديسون: حالة طارئة (قيء وصدمة). العلاج الطويل بالجلوكوكورتيكويدات: لا يُوقف فجأة ومراقبة العدوى والهشاشة والسكر.", PAIR]),
  pancreas: I(["Bauchspeicheldrüse (endokriner Teil)", "Pancreas (Insulae pancreaticae / Langerhans-Inseln)", "البنكرياس (الجزء الصماوي)",
    "Die Langerhans-Inseln bilden Insulin (B-Zellen, senkt Blutzucker), Glukagon (A-Zellen, hebt ihn) und Somatostatin. Der größere exokrine Teil bildet Verdauungsenzyme (siehe Atlas Verdauung).", "جزر لانغرهانس تفرز الإنسولين (خلايا بيتا، يخفض السكر) والغلوكاغون (خلايا ألفا، يرفعه) والسوماتوستاتين. أما الجزء الخارجي الأكبر فيفرز إنزيمات الهضم (انظر أطلس الهضم).",
    "Diabetes mellitus: Typ 1 (Insulinmangel durch Autoimmunzerstörung), Typ 2 (Insulinresistenz). Hypoglykämie (unter etwa 70 mg/dl): Schwitzen, Zittern, Heißhunger, Verwirrtheit, Bewusstlosigkeit; Traubenzucker, bei Bewusstlosigkeit Glukagon oder Glukose i. v. nach Anordnung. Hyperglykämie, DKA und HHS: Durst, Polyurie, Azetongeruch. Pflege: BZ-Kontrolle, Insulinspritztechnik, Injektionsorte wechseln, Fußpflege, Ernährung, Schulung.", "السكري: النوع 1 (نقص الإنسولين بتدمير مناعي) والنوع 2 (مقاومة الإنسولين). نقص السكر (أقل من نحو 70 ملغ/دل): تعرق ورعاش وجوع وتخليط وفقدان وعي؛ سكر عنب وعند فقدان الوعي غلوكاغون أو غلوكوز وريدي حسب الأمر. ارتفاع السكر والحماض الكيتوني: عطش وبوال ورائحة أسيتون. التمريض: قياس السكر وتقنية حقن الإنسولين وتغيير مواضع الحقن والعناية بالقدم والتغذية والتثقيف.", ["Die Inseln sind im Modell nicht einzeln dargestellt; gezeigt ist das ganze Organ.", "الجزر غير ظاهرة منفردة في النموذج؛ يُعرض العضو كاملاً."]]),
  "pancreatic-duct": I(["Bauchspeicheldrüsengang", "Ductus pancreaticus (Wirsung)", "القناة البنكرياسية",
    "Führt die Verdauungsenzyme zum Zwölffingerdarm, zusammen mit dem Gallengang an der Papille.", "تنقل إنزيمات الهضم إلى الاثني عشري مع القناة الصفراوية عند الحليمة.",
    "Blockade (Gallenstein) löst eine akute Pankreatitis aus: gürtelförmiger Oberbauchschmerz, Erbrechen, Lipase erhöht. Pflege: Nahrungskarenz nach Anordnung, Schmerztherapie, Infusionen, Überwachung.", "الانسداد (حصاة صفراوية) يسبب التهاب البنكرياس الحاد: ألم بطني علوي حزامي وقيء وارتفاع الليباز. التمريض: الصيام حسب الأمر وعلاج الألم والسوائل والمراقبة.", ["Zeigt den Gangverlauf; der exokrine Anteil gehört zur Verdauung.", "يوضح مسار القناة؛ والجزء الخارجي يتبع الهضم."]]),
  thymus: I(["Thymus (Bries)", "Thymus (Lobus dexter et sinister)", "الغدة الزعترية",
    "Ausbildungsort der T-Lymphozyten und Hormonbildner (Thymosin) in Kindheit und Jugend; im Alter bildet er sich zurück und wird durch Fett ersetzt. Gehört zum Immunsystem.", "مكان نضج الخلايا اللمفاوية التائية ومصدر هرمونات (ثايموسين) في الطفولة والمراهقة؛ وفي الشيخوخة يضمر ويُستبدل بالدهن. يتبع الجهاز المناعي.",
    "Thymom und Myasthenia gravis (belastungsabhängige Muskelschwäche, hängende Lider). Bei Myasthenia: Medikamente (Pyridostigmin) pünktlich, Atmung und Schlucken beobachten (myasthene Krise).", "الورم التوتي ووهن عضلي وخيم (ضعف عضلي مع الجهد وسقوط الجفون). في الوهن العضلي: الأدوية (بيريدوستيغمين) في موعدها ومراقبة التنفس والبلع (أزمة وهنية).", PAIR]),
  testes: I(["Hoden", "Testes (Testis dexter et sinister)", "الخصيتان",
    "Bilden Testosteron (Leydig-Zellen) für Geschlechtsmerkmale, Muskel- und Knochenaufbau und Libido, und Spermien. Gesteuert durch LH und FSH der Hypophyse.", "تفرزان التستوستيرون (خلايا لايديغ) للصفات الجنسية وبناء العضلات والعظام والرغبة، وتنتجان الحيوانات المنوية. يتحكم بهما LH وFSH من النخامية.",
    "Hodentorsion: plötzlicher starker Schmerz, Notfall (innerhalb von 6 Stunden operieren). Testosteronmangel: Müdigkeit, Libidoverlust. Hodentumor: schmerzlose Verhärtung, Selbstuntersuchung anleiten. Siehe Atlas Fortpflanzung.", "التواء الخصية: ألم مفاجئ شديد وحالة طارئة (جراحة خلال 6 ساعات). نقص التستوستيرون: تعب وفقدان الرغبة. ورم الخصية: تصلب غير مؤلم وتعليم الفحص الذاتي. انظر أطلس التناسل.", ["Die Eierstöcke (Östrogen, Progesteron) sind im Modell nicht enthalten.", "المبيضان (إستروجين وبروجسترون) غير موجودين في النموذج."]]),
  kidneys: I(["Nieren (Orientierung)", "Renes", "الكليتان (للتوجيه)",
    "Auch endokrin: Erythropoetin (Blutbildung), Renin (Blutdruck), aktives Vitamin D (Calcium). Die Nebennieren liegen auf ihren oberen Polen.", "غدد صماء أيضاً: إريثروبويتين (تكوين الدم) ورينين (الضغط) وفيتامين د الفعال (الكالسيوم). وتقع الكظريتان على قطبيهما العلويين.",
    "Bei Niereninsuffizienz Anämie (EPO-Mangel) und Knochenstörung. Siehe Atlas Harnsystem.", "عند القصور الكلوي: فقر دم (نقص EPO) واضطراب العظام. انظر أطلس الجهاز البولي.", PAIR]),
  stomach: I(["Magen (Orientierung)", "Gaster", "المعدة (للتوجيه)",
    "Bildet Gastrin, Ghrelin und weitere Gewebshormone; im Modell zur Lagebestimmung des Pankreas.", "تفرز الغاسترين والغريلين وهرمونات نسيجية أخرى؛ معروضة في النموذج لتحديد موضع البنكرياس.",
    "Siehe Atlas Verdauungssystem.", "انظر أطلس الجهاز الهضمي.", undefined]),
  duodenum: I(["Zwölffingerdarm (Orientierung)", "Duodenum", "الاثنا عشري (للتوجيه)",
    "Umschließt den Pankreaskopf; bildet Sekretin und Cholezystokinin, die Pankreassekret und Gallenentleerung auslösen.", "يحيط برأس البنكرياس؛ يفرز السكرتين والكوليسيستوكينين اللذين ينبهان إفراز البنكرياس وإفراغ الصفراء.",
    "Siehe Atlas Verdauungssystem.", "انظر أطلس الجهاز الهضمي.", undefined]),
  gallbladder: I(["Gallenblase (Orientierung)", "Vesica biliaris", "المرارة (للتوجيه)",
    "Speichert Galle und wird durch Cholezystokinin zur Kontraktion gebracht.", "تخزن الصفراء وينبهها الكوليسيستوكينين للانقباض.",
    "Siehe Atlas Verdauungssystem.", "انظر أطلس الجهاز الهضمي.", undefined]),
  trachea: I(["Luftröhre (Orientierung)", "Trachea", "القصبة الهوائية (للتوجيه)",
    "Liegt hinter der Schilddrüse (im Modell nicht vorhanden); die Schilddrüse umfasst sie hufeisenförmig unterhalb des Kehlkopfs.", "تقع خلف الغدة الدرقية (غير موجودة في النموذج)؛ تحيط بها الغدة بشكل حدوة تحت الحنجرة.",
    "Eine große Struma kann Luftröhre und Speiseröhre einengen: Atemnot, Schluckbeschwerden.", "قد يضغط الدُّراق الكبير على القصبة والمريء: ضيق نفس وعسر بلع.", CTX]),
  "thyroid-cartilage": I(["Schildknorpel (Orientierung für die Schilddrüse)", "Cartilago thyroidea", "الغضروف الدرقي (للتوجيه)",
    "Größter Kehlkopfknorpel („Adamsapfel“). Die Schilddrüse (Glandula thyreoidea) liegt direkt darunter vor der Luftröhre; sie bildet T3 und T4 (Stoffwechsel, Herzfrequenz, Wärme) und Calcitonin.", "أكبر غضاريف الحنجرة («تفاحة آدم»). تقع الغدة الدرقية مباشرة تحته أمام القصبة؛ تفرز T3 وT4 (الأيض ومعدل القلب والحرارة) والكالسيتونين.",
    "Hyperthyreose (Basedow, Unruhe, Gewichtsverlust, Tachykardie, Wärmeempfindlichkeit, Durchfall) und Hypothyreose (Hashimoto, Müdigkeit, Kälteempfindlichkeit, Verstopfung, Bradykardie, Gewichtszunahme). Nach Schilddrüsenoperation: Heiserkeit (Nervus laryngeus recurrens), Kribbeln und Krämpfe (Hypokalzämie durch Nebenschilddrüsen), Nachblutung am Hals beobachten.", "فرط نشاط الدرقية (غريفز وقلق ونقص وزن وتسرع قلب وحساسية للحرارة وإسهال) وقصورها (هاشيموتو وتعب وحساسية للبرد وإمساك وبطء قلب وزيادة وزن). بعد جراحة الدرقية: بحة (العصب الحنجري الراجع) ووخز وتشنجات (نقص كالسيوم بسبب جارات الدرقية) ومراقبة النزف في العنق.", CTX]),
  skull: I(["Schädel (Orientierung)", "Cranium und Mandibula", "الجمجمة (للتوجيه)",
    "Umschließt Hypothalamus, Hypophyse (Sella turcica) und Zirbeldrüse.", "تحيط بتحت المهاد والنخامية (السرج التركي) والصنوبرية.",
    "Siehe Atlas Bewegungsapparat.", "انظر أطلس الجهاز الحركي.", PAIR]),
  "vertebral-column": I(["Wirbelsäule und Kreuzbein (Orientierung)", "Columna vertebralis, Os sacrum", "العمود الفقري والعجز (للتوجيه)",
    "Bezugsachse: Nebennieren liegen etwa auf Höhe Th11 bis L1, das Pankreas auf Höhe L1 bis L2.", "محور مرجعي: تقع الكظريتان تقريباً عند T11 حتى L1 والبنكرياس عند L1 حتى L2.",
    "Siehe Atlas Bewegungsapparat.", "انظر أطلس الجهاز الحركي.", undefined]),
  ribs: I(["Rippen und Brustbein (Orientierung)", "Costae, Sternum", "الأضلاع والقص (للتوجيه)",
    "Der Thymus liegt hinter dem Brustbein im oberen vorderen Mediastinum.", "تقع الغدة الزعترية خلف القص في المنصف الأمامي العلوي.",
    "Siehe Atlas Bewegungsapparat.", "انظر أطلس الجهاز الحركي.", PAIR]),
  "hip-bone": I(["Hüftbein (Orientierung)", "Os coxae", "عظم الورك (للتوجيه)",
    "Bezugsstruktur im Becken.", "بنية مرجعية في الحوض.",
    "Siehe Atlas Bewegungsapparat.", "انظر أطلس الجهاز الحركي.", PAIR]),
};
export const ENDO_ITEMS = items;

const R = (de: string, ar: string, en: string, fr: string, tr: string): [string, string, string, string, string] => [de, ar, en, fr, tr];
const St = (title: [string, string, string, string, string], text: [string, string], ids: string[], note?: [string, string]) => ({ title, text, ids, ...(note ? { note } : {}) });
const NOTE_TH: [string, string] = ["Schilddrüse und Nebenschilddrüsen fehlen im Modell (siehe Schemata).", "الغدة الدرقية وجارات الدرقية غير موجودة في النموذج (انظر الرسوم)."];

export const ENDO_PATHS: AtlasPath[] = [
  {
    id: "axis",
    title: R("Hormonachse: Hypothalamus – Hypophyse – Zielorgan", "المحور الهرموني: تحت المهاد – النخامية – العضو الهدف", "Hormone axis", "Axe hormonal", "Hormon ekseni"),
    intro: ["Dreistufige Steuerung mit negativer Rückkopplung.", "تحكم ثلاثي المراحل مع تغذية راجعة سلبية."],
    steps: [
      St(R("Hypothalamus", "تحت المهاد", "Hypothalamus", "Hypothalamus", "Hipotalamus"), ["Misst den Bedarf und sendet Releasing-Hormone (z. B. CRH, TRH, GnRH).", "يقيس الحاجة ويرسل هرمونات محفزة (مثل CRH وTRH وGnRH)."], ["hypothalamus"]),
      St(R("Hypophyse", "النخامية", "Pituitary", "Hypophyse", "Hipofiz"), ["Antwortet mit ACTH, TSH, FSH, LH, GH, Prolaktin.", "تستجيب بـ ACTH وTSH وFSH وLH وGH والبرولاكتين."], ["pituitary-gland"]),
      St(R("Zielorgane", "الأعضاء الهدف", "Target organs", "Organes cibles", "Hedef organlar"), ["ACTH → Nebennierenrinde (Cortisol); LH/FSH → Hoden (Testosteron); TSH → Schilddrüse (T3/T4).", "ACTH ← قشرة الكظر (كورتيزول)؛ LH/FSH ← الخصيتان (تستوستيرون)؛ TSH ← الدرقية (T3/T4)."], ["adrenal-glands", "testes", "thyroid-cartilage"], NOTE_TH),
      St(R("Rückkopplung", "التغذية الراجعة", "Feedback", "Rétrocontrôle", "Geri bildirim"), ["Steigt der Hormonspiegel, bremst er Hypothalamus und Hypophyse. Das hält die Werte im Gleichgewicht.", "إذا ارتفع مستوى الهرمون كبح تحت المهاد والنخامية. وهذا يحفظ التوازن."], ["hypothalamus", "pituitary-gland"]),
    ],
  },
  {
    id: "glucose",
    title: R("Blutzucker und Bauchspeicheldrüse", "سكر الدم والبنكرياس", "Blood glucose and pancreas", "Glycémie et pancréas", "Kan şekeri ve pankreas"),
    intro: ["Insulin senkt, Glukagon hebt den Blutzucker.", "الإنسولين يخفض والغلوكاغون يرفع سكر الدم."],
    steps: [
      St(R("Lage der Bauchspeicheldrüse", "موضع البنكرياس", "Position", "Position", "Konum"), ["Quer im Oberbauch hinter dem Magen, mit dem Kopf in der Zwölffingerdarmschlinge.", "عرضاً في أعلى البطن خلف المعدة ورأسه في حلقة الاثني عشري."], ["pancreas", "stomach", "duodenum", "gallbladder"]),
      St(R("Inselzellen", "الخلايا الجزرية", "Islets", "Îlots", "Adacıklar"), ["B-Zellen bilden Insulin, A-Zellen Glukagon. Einzelne Zellen sind im Modell nicht sichtbar.", "خلايا بيتا تصنع الإنسولين وخلايا ألفا الغلوكاغون. الخلايا المنفردة غير ظاهرة في النموذج."], ["pancreas"]),
      St(R("Ausführungsgang", "القناة", "Duct", "Canal", "Kanal"), ["Der exokrine Teil leitet Enzyme in den Zwölffingerdarm.", "الجزء الخارجي يوصل الإنزيمات إلى الاثني عشري."], ["pancreatic-duct", "duodenum"]),
    ],
  },
  {
    id: "stress",
    title: R("Stressachse und Nebennieren", "محور الإجهاد والكظريتان", "Stress axis and adrenals", "Axe du stress et surrénales", "Stres ekseni"),
    intro: ["Akuter Stress über das Nebennierenmark, anhaltender Stress über die Rinde.", "الإجهاد الحاد عبر لب الكظر والمستمر عبر القشرة."],
    steps: [
      St(R("Hypothalamus und Hypophyse", "تحت المهاد والنخامية", "Hypothalamus and pituitary", "Hypothalamus et hypophyse", "Hipotalamus ve hipofiz"), ["CRH führt zu ACTH.", "يؤدي CRH إلى ACTH."], ["hypothalamus", "pituitary-gland"]),
      St(R("Nebennieren", "الكظريتان", "Adrenals", "Surrénales", "Böbrek üstü"), ["Rinde bildet Cortisol und Aldosteron, Mark Adrenalin. Auf den oberen Nierenpolen gelegen.", "القشرة تصنع الكورتيزول والألدوستيرون واللب الأدرينالين. على القطبين العلويين للكليتين."], ["adrenal-glands", "kidneys"]),
    ],
  },
  {
    id: "immune",
    title: R("Thymus und Hormone des Immunsystems", "الغدة الزعترية وهرمونات المناعة", "Thymus", "Thymus", "Timus"),
    intro: ["Der Thymus liegt hinter dem Brustbein.", "تقع الغدة الزعترية خلف القص."],
    steps: [
      St(R("Lage hinter dem Brustbein", "خلف القص", "Behind the sternum", "Derrière le sternum", "Sternumun arkasında"), ["Zwei Lappen im oberen Mediastinum, beim Kind groß, beim Erwachsenen weitgehend Fett.", "فصان في المنصف العلوي، كبير عند الطفل ومعظمه دهن عند البالغ."], ["thymus", "ribs"]),
    ],
  },
];

export const ENDO_CARE = {
  diseases: ["Diabetes mellitus Typ 1 und Typ 2", "Hypoglykämie, diabetische Ketoazidose", "Schilddrüsenüber- und -unterfunktion", "Cushing-Syndrom, Morbus Addison", "Hypophysenadenom, Diabetes insipidus, SIADH", "Osteoporose (Östrogen-, Vitamin-D-, Calciumhaushalt)"],
  symptoms: ["Durst, häufiges Wasserlassen, Gewichtsverlust, Müdigkeit", "Schwitzen, Zittern, Herzrasen, Unruhe", "Kälteintoleranz, Verstopfung, Bradykardie", "Vollmondgesicht, Stammfettsucht, Hypertonie", "Salzhunger, niedriger Blutdruck, Bräunung", "Heiserkeit, Halsschwellung, Schluckstörung"],
  diagnostics: ["Blutzucker, HbA1c, oraler Glukosetoleranztest", "TSH, fT3, fT4, Schilddrüsen-Antikörper, Sonografie", "Cortisol (Tagesprofil, Dexamethasonhemmtest), ACTH", "Natrium, Kalium, Calcium, PTH, Vitamin D", "Ketone im Urin oder Blut", "MRT der Hypophyse, Gesichtsfeldprüfung"],
  actions: ["Blutzucker nach Anordnung messen, Werte dokumentieren, Hypoglykämie sofort behandeln (schnelle Kohlenhydrate)", "Insulin: Spritztechnik, Injektionsorte wechseln, Lagerung, Dosisfehler vermeiden (Kontrolle zu zweit, Insulin nicht mit anderen Spritzen verwechseln)", "Schulung zu Ernährung, Bewegung, Fuß- und Hautkontrolle, Sick-Day-Regeln", "Schilddrüsenhormon morgens nüchtern, getrennt von Calcium und Eisen", "Glukokortikoide nicht abrupt absetzen, Infektionszeichen und Blutzucker beobachten", "Nach Schilddrüsen- oder Hypophysenoperation: Atmung, Stimme, Nachblutung, Calcium, Urinmenge beobachten", "Flüssigkeitsbilanz, Gewicht, Elektrolyte bei Diabetes insipidus und SIADH", "Notfall erkennen: Bewusstseinsstörung, Azetongeruch, Krampfanfall, Schock"],
  monitoring: ["Blutzucker, Ketone, Trinkmenge, Urinmenge", "Puls, Blutdruck, Temperatur, Gewicht", "Bewusstsein, Verhalten, Schwitzen, Zittern", "Haut, Füße, Wunden, Injektionsstellen", "Natrium, Kalium, Calcium", "Stimmung, Schlaf, Wärme- oder Kälteempfinden"],
  terms: [["Hormon", "Botenstoff, der über das Blut wirkt"], ["Negative Rückkopplung", "Hormon hemmt seine eigene Bildung"], ["Hyperglykämie", "Zu hoher Blutzucker"], ["Hypoglykämie", "Zu niedriger Blutzucker (unter etwa 70 mg/dl)"], ["HbA1c", "Langzeit-Blutzuckerwert über etwa 2 bis 3 Monate"], ["Ketoazidose", "Übersäuerung durch Ketonkörper bei Insulinmangel"], ["Struma", "Schilddrüsenvergrößerung (Kropf)"], ["Thyreotoxische Krise", "Lebensbedrohliche Überfunktion"], ["Addison-Krise", "Akuter Cortisolmangel"], ["Akromegalie", "Wachstum von Händen, Füßen, Gesicht bei zu viel GH"], ["Polyurie, Polydipsie", "Viel Urin, viel Durst"], ["Diabetes insipidus", "ADH-Mangel mit viel verdünntem Urin"]] as [string, string][],
  lessons: ["diabetes", "hypoglykaemie", "schilddruese"],
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string): AtlasQuiz => ({ q: [qd, qa], o, why: [wd, wa] });
export const ENDO_QUIZ: AtlasQuiz[] = [
  Q("Welches Hormon senkt den Blutzucker?", "أي هرمون يخفض سكر الدم؟", ["Insulin", "Glukagon", "Adrenalin", "Cortisol"],
    "Insulin aus den B-Zellen der Langerhans-Inseln schleust Glukose in Muskel-, Fett- und Leberzellen und senkt dadurch den Blutzucker. Glukagon, Adrenalin und Cortisol erhöhen ihn. Richtige Antwort: Insulin.",
    "الإنسولين من خلايا بيتا في جزر لانغرهانس يُدخل الغلوكوز إلى خلايا العضل والدهن والكبد فيخفض السكر. أما الغلوكاغون والأدرينالين والكورتيزول فترفعه. الإجابة الصحيحة: الإنسولين."),
  Q("Welche Zeichen sprechen für eine Hypoglykämie?", "أي علامات تدل على نقص سكر الدم؟", ["Schwitzen, Zittern, Heißhunger, Verwirrtheit, evtl. Bewusstlosigkeit", "Starker Durst, viel Urin, Azetongeruch", "Fieber und Husten", "Hautausschlag"],
    "Bei Unterzuckerung schüttet der Körper Adrenalin aus (Schwitzen, Zittern, Herzklopfen), das Gehirn leidet unter Glukosemangel (Verwirrtheit, Krampf, Bewusstlosigkeit). Maßnahme: bei wachen Patienten schnelle Kohlenhydrate (Traubenzucker, Saft), danach langsame; bei Bewusstlosigkeit Notruf, Glukagon oder Glukose i. v. nach Anordnung. Richtige Antwort: Schwitzen, Zittern, Heißhunger, Verwirrtheit.",
    "عند نقص السكر يفرز الجسم الأدرينالين (تعرق ورعاش وخفقان) ويعاني الدماغ من نقص الغلوكوز (تخليط وتشنج وفقدان وعي). الإجراء: عند اليقظة كربوهيدرات سريعة (سكر عنب أو عصير) ثم بطيئة؛ وعند فقدان الوعي استدعاء الإسعاف وغلوكاغون أو غلوكوز وريدي حسب الأمر. الإجابة الصحيحة: تعرق ورعاش وجوع وتخليط."),
  Q("Was ist der Hauptunterschied zwischen Diabetes Typ 1 und Typ 2?", "ما الفرق الرئيسي بين السكري النوع 1 والنوع 2؟", ["Typ 1: Insulinmangel durch Zerstörung der B-Zellen; Typ 2: Insulinresistenz mit relativem Mangel", "Typ 1 betrifft nur ältere Menschen", "Typ 2 braucht immer sofort Insulin", "Es gibt keinen Unterschied"],
    "Bei Typ 1 zerstört das Immunsystem die B-Zellen; das Insulin fehlt absolut, die Therapie ist Insulin. Bei Typ 2 sprechen die Zellen schlecht auf Insulin an (Resistenz), die Produktion lässt später nach; Therapie beginnt mit Ernährung, Bewegung, Medikamenten, später oft Insulin. Richtige Antwort: absoluter Insulinmangel gegen Insulinresistenz.",
    "في النوع 1 يدمر الجهاز المناعي خلايا بيتا فينقص الإنسولين تماماً والعلاج إنسولين. وفي النوع 2 تستجيب الخلايا بضعف للإنسولين (مقاومة) ويقل الإنتاج لاحقاً؛ يبدأ العلاج بالتغذية والحركة والأدوية ثم غالباً الإنسولين. الإجابة الصحيحة: نقص مطلق في الإنسولين مقابل مقاومة الإنسولين."),
  Q("Welche Aufgabe hat die Hypophyse im Hormonsystem?", "ما وظيفة النخامية في الجهاز الهرموني؟", ["Sie steuert über Hormone (z. B. TSH, ACTH) andere Hormondrüsen", "Sie bildet Insulin", "Sie speichert Galle", "Sie filtert das Blut"],
    "Die Hypophyse empfängt Befehle des Hypothalamus und schüttet Hormone aus, die Schilddrüse, Nebennierenrinde, Keimdrüsen und Wachstum steuern. Sie ist damit die zentrale Schaltstelle des Hormonsystems. Richtige Antwort: Steuerung anderer Hormondrüsen.",
    "تستقبل النخامية أوامر تحت المهاد وتفرز هرمونات تتحكم بالدرقية وقشرة الكظر والغدد التناسلية والنمو. وهي بذلك محطة التحكم المركزية. الإجابة الصحيحة: التحكم بالغدد الصماء الأخرى."),
  Q("Was passiert bei einem Mangel an ADH (Diabetes insipidus)?", "ماذا يحدث عند نقص ADH (السكري الكاذب)؟", ["Große Mengen stark verdünnten Urins und starker Durst", "Wassereinlagerung und niedriger Natriumwert", "Hoher Blutzucker", "Bluthochdruck durch Salzretention"],
    "ADH lässt die Niere Wasser zurückhalten. Fehlt es, scheidet der Körper viel stark verdünnten Urin aus (Polyurie) und hat großen Durst; Austrocknung und hohes Natrium drohen. Pflege: Flüssigkeitsbilanz, Gewicht, Natrium, Trinkmenge, nach Anordnung ADH-Ersatz. Richtige Antwort: viel verdünnter Urin und Durst.",
    "يجعل ADH الكلية تحتفظ بالماء. وعند فقده يطرح الجسم بولاً كثيراً مخففاً (بوال) مع عطش شديد؛ ويخشى الجفاف وارتفاع الصوديوم. التمريض: ميزان السوائل والوزن والصوديوم وكمية الشرب وتعويض ADH حسب الأمر. الإجابة الصحيحة: بول كثير مخفف وعطش."),
  Q("Welche Symptome sind typisch für eine Hyperthyreose?", "ما الأعراض النمطية لفرط نشاط الدرقية؟", ["Gewichtsverlust, Tachykardie, Schwitzen, Unruhe, Durchfall", "Gewichtszunahme, Kälteempfindlichkeit, Bradykardie, Verstopfung", "Hoher Blutdruck und Vollmondgesicht", "Hautbräunung und niedriger Blutdruck"],
    "Zu viel Schilddrüsenhormon beschleunigt den Stoffwechsel: Gewichtsverlust trotz Appetit, schneller Puls, Schwitzen, Wärmeintoleranz, Zittern, Unruhe, Durchfall. Bei Morbus Basedow oft Exophthalmus. Die Gegenseite beschreibt die Hypothyreose. Richtige Antwort: Gewichtsverlust, Tachykardie, Schwitzen, Unruhe, Durchfall.",
    "فرط هرمون الدرقية يسرّع الأيض: نقص وزن رغم الشهية ونبض سريع وتعرق وعدم تحمل الحرارة ورعاش وقلق وإسهال. وفي غريفز غالباً جحوظ العينين. والعكس يصف قصور الدرقية. الإجابة الصحيحة: نقص وزن وتسرع قلب وتعرق وقلق وإسهال."),
  Q("Wann sollte Schilddrüsenhormon (L-Thyroxin) eingenommen werden?", "متى يُؤخذ هرمون الدرقية (ليفوثيروكسين)؟", ["Morgens nüchtern, mit Abstand zu Frühstück, Calcium und Eisen", "Zum Abendessen mit Milch", "Nur bei Beschwerden", "Zusammen mit Eisen- und Calciumtabletten"],
    "L-Thyroxin wird nüchtern am besten etwa 30 bis 60 Minuten vor dem Frühstück eingenommen, weil Nahrung, Calcium und Eisen die Aufnahme verschlechtern. Dauertherapie, regelmäßige TSH-Kontrolle. Richtige Antwort: morgens nüchtern mit Abstand zu Nahrung, Calcium und Eisen.",
    "يؤخذ الليفوثيروكسين على الريق ويفضل قبل الفطور بنحو 30 إلى 60 دقيقة لأن الطعام والكالسيوم والحديد يضعفان الامتصاص. علاج مستمر ومتابعة TSH بانتظام. الإجابة الصحيحة: صباحاً على الريق بعيداً عن الطعام والكالسيوم والحديد."),
  Q("Welches Hormon produziert die Nebennierenrinde zur Regulierung von Natrium und Blutdruck?", "أي هرمون تفرزه قشرة الكظر لتنظيم الصوديوم والضغط؟", ["Aldosteron", "Insulin", "Thyroxin", "Melatonin"],
    "Aldosteron lässt die Niere Natrium und Wasser zurückhalten und Kalium ausscheiden und erhöht so das Blutvolumen und den Blutdruck. Es wird durch das Renin-Angiotensin-System gesteuert. Bei Mangel (Addison) sinkt der Blutdruck, Kalium steigt. Richtige Antwort: Aldosteron.",
    "يجعل الألدوستيرون الكلية تحتفظ بالصوديوم والماء وتطرح البوتاسيوم فيزيد حجم الدم والضغط. ويتحكم به نظام الرينين أنجيوتنسين. وعند نقصه (أديسون) ينخفض الضغط ويرتفع البوتاسيوم. الإجابة الصحيحة: الألدوستيرون."),
  Q("Warum darf eine Dauertherapie mit Glukokortikoiden nicht abrupt beendet werden?", "لماذا لا يجوز إيقاف العلاج الطويل بالجلوكوكورتيكويدات فجأة؟", ["Die körpereigene Cortisolbildung ist unterdrückt: es droht eine Nebenniereninsuffizienz (Addison-Krise)", "Weil die Tabletten sonst verfallen", "Weil der Blutzucker dann sinkt", "Weil sich die Haut verfärbt"],
    "Langzeitgabe unterdrückt über die Rückkopplung ACTH und die Nebennierenrinde; sie braucht Wochen, um wieder zu arbeiten. Abruptes Absetzen kann zu Schwäche, Hypotonie, Hypoglykämie bis zur Addison-Krise führen. Ausschleichen nach ärztlichem Plan. Richtige Antwort: unterdrückte Nebennierenrinde, Gefahr der Addison-Krise.",
    "العلاج الطويل يثبط عبر التغذية الراجعة ACTH وقشرة الكظر وتحتاج أسابيع لتعود للعمل. والإيقاف المفاجئ قد يسبب ضعفاً وهبوط ضغط ونقص سكر حتى أزمة أديسون. يُخفَّض تدريجياً حسب خطة الطبيب. الإجابة الصحيحة: قشرة الكظر مثبطة وخطر أزمة أديسون."),
  Q("Wo wird Melatonin gebildet und was steuert es?", "أين يتكون الميلاتونين وماذا ينظم؟", ["In der Zirbeldrüse; den Schlaf-Wach-Rhythmus", "In der Bauchspeicheldrüse; den Blutzucker", "In der Niere; den Blutdruck", "Im Thymus; die Abwehr"],
    "Die Zirbeldrüse bildet nachts Melatonin; Licht hemmt die Bildung. Es hilft, den Tag-Nacht-Rhythmus zu steuern. Bei Schichtarbeit, Jetlag und im Alter gerät er aus dem Takt. Richtige Antwort: Zirbeldrüse, Schlaf-Wach-Rhythmus.",
    "تفرز الصنوبرية الميلاتونين ليلاً والضوء يثبطه. يساعد في تنظيم دورة النهار والليل. وتضطرب في العمل بالورديات وفروق التوقيت والشيخوخة. الإجابة الصحيحة: الغدة الصنوبرية ودورة النوم واليقظة."),
  Q("Was ist nach einer Schilddrüsenoperation besonders zu beobachten?", "ماذا يجب مراقبته خصوصاً بعد جراحة الدرقية؟", ["Heiserkeit, Atemnot, Halsschwellung (Nachblutung), Kribbeln und Krämpfe (Hypokalzämie)", "Nur Appetit", "Nur Hautfarbe der Füße", "Haarausfall am Hinterkopf"],
    "Nach der Operation können eine Nachblutung (Halsschwellung, Atemnot: Notfall), Verletzung des Nervus laryngeus recurrens (Heiserkeit, Stimmlosigkeit) und Hypokalzämie durch Schädigung der Nebenschilddrüsen (Kribbeln um den Mund, Krämpfe, Chvostek-Zeichen) auftreten. Pflege: Hals und Verband beobachten, Sauerstoff und Notfallset bereit, Calcium nach Anordnung. Richtige Antwort: Nachblutung, Heiserkeit, Hypokalzämiezeichen.",
    "بعد الجراحة قد يحدث نزف (تورم العنق وضيق النفس: طارئ) وإصابة العصب الحنجري الراجع (بحة وفقدان الصوت) ونقص الكالسيوم بتلف جارات الدرقية (وخز حول الفم وتشنجات وعلامة شفوستك). التمريض: مراقبة العنق والضماد وتوفر الأكسجين والطوارئ والكالسيوم حسب الأمر. الإجابة الصحيحة: النزف والبحة وعلامات نقص الكالسيوم."),
];

export const ENDO_CFG: AtlasConfig = {
  key: "endocrine",
  modelUrl: "/models/endocrine.glb",
  items: ENDO_ITEMS,
  layers: ENDO_LAYERS,
  layerOf: (id) => {
    if (["hypothalamus", "pituitary-gland", "pineal-gland"].includes(id)) return "neuro";
    if (id === "adrenal-glands") return "adrenal";
    if (id === "pancreas" || id === "pancreatic-duct") return "pancreas";
    if (id === "thymus" || id === "testes") return "thymus-gonad";
    if (["skull", "vertebral-column", "ribs", "hip-bone"].includes(id)) return "shell";
    return "organ";
  },
  color: (id, layer) => {
    switch (layer) {
      case "neuro": return id === "pituitary-gland" ? 0x3ac0a0 : id === "pineal-gland" ? 0x2a8a7a : 0xe0a050;
      case "adrenal": return 0xf0c040;
      case "pancreas": return id === "pancreas" ? 0xe8a070 : 0x6a9ad8;
      case "thymus-gonad": return id === "thymus" ? 0xa890d8 : 0xd87aa0;
      case "organ": return /kidney/.test(id) ? 0xa05a5a : /stomach|duodenum|gallbladder/.test(id) ? 0xc9a090 : 0xb8c4d0;
      default: return 0xe8e0d0;
    }
  },
  shell: ["shell"],
  innerLabel: ["Skelett durchsichtig", "الهيكل شفاف", "Skeleton transparent", "Squelette transparent", "İskelet saydam"],
  careTitle: ["Pflege-Überblick Endokrines System", "نظرة تمريضية على الجهاز الصماوي", "Nursing overview: endocrine system", "Aperçu infirmier : système endocrinien", "Hemşirelik özeti: endokrin sistem"],
  target: [0, 0, 0], shellOpacity: 0.16,
  dist: 1.9, minDist: 0.1, maxDist: 4, clipRange: 0.8, explodeScale: 0.6,
  care: ENDO_CARE,
  quiz: ENDO_QUIZ,
  paths: ENDO_PATHS,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Referenzanatomie eines erwachsenen Mannes. Nicht im Modell: Schilddrüse, Nebenschilddrüsen, Eierstöcke, Langerhans-Inseln als eigene Struktur, hormonbildende Zellen in Herz, Niere, Darm und Fettgewebe (siehe Schemata). Schildknorpel und Luftröhre dienen nur der Orientierung.", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). تشريح مرجعي لرجل بالغ. غير موجود في النموذج: الغدة الدرقية وجارات الدرقية والمبيضان وجزر لانغرهانس كبنية مستقلة والخلايا المفرزة للهرمونات في القلب والكلية والأمعاء والدهن (انظر الرسوم). الغضروف الدرقي والقصبة للتوجيه فقط.", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (adapted). Reference anatomy of an adult male. Not in the model: thyroid, parathyroids, ovaries, islets as separate structures (see schematics). Thyroid cartilage and trachea are for orientation only.", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (adapté). Absent : thyroïde, parathyroïdes, ovaires, îlots (voir schémas).", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (uyarlandı). Modelde yok: tiroid, paratiroidler, yumurtalıklar, adacıklar (şemalara bakın)."],
};
