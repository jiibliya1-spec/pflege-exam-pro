/**
 * Animationen im 3D-Modell: (1) Fließwege (Blut, Luft, Harn, Speisebrei) und (2) Krankheitsgeschehen je Lektion.
 * Die Punkte laufen schematisch zwischen den Mitten der benannten Strukturen (die Reihenfolge ist anatomisch korrekt,
 * der genaue Gefäßverlauf zwischen zwei Strukturen ist vereinfacht). Strukturen, die das Modell nicht enthält (z. B. Lungenbläschen), stehen nur im Text.
 */
import type { AtlasPath, AtlasStep, FlowTone, Row } from "./atlasTypes";

const R = (de: string, ar: string): Row => [de, ar, de, de, de];
const S = (td: string, ta: string, xd: string, xa: string, ids: string[], tone: FlowTone = "red", note?: [string, string]): AtlasStep => ({ title: R(td, ta), text: [xd, xa], ids, tone, ...(note ? { note } : {}) });
const NOLUNG: [string, string] = ["Lungenbläschen und Kapillaren sind im Modell nicht enthalten.", "الأسناخ والشعيرات غير موجودة في النموذج."];

const flow = (id: string, td: string, ta: string, intro: [string, string], steps: AtlasStep[]): AtlasPath => ({ id, title: R(td, ta), intro, steps, flow: true });

/** Fließwege je Atlas-Key (werden vor die vorhandenen Wege gesetzt). Blau = sauerstoffarmes Blut, Rot = sauerstoffreiches Blut, Gelb = Austausch/Harn/Speisebrei, Violett = Luft/Galle. */
export const FLOW_PATHS: Record<string, AtlasPath[]> = {
  heart: [flow("blutweg", "Blutweg durch das Herz", "مسار الدم عبر القلب", ["Blau = sauerstoffarmes Blut, Rot = sauerstoffreiches Blut, Gelb = Gasaustausch in der Lunge. Die Punkte zeigen die Fließrichtung.", "الأزرق دم قليل الأكسجين، والأحمر غني بالأكسجين، والأصفر تبادل الغازات في الرئة. النقاط تبين اتجاه الجريان."], [
    S("Körperblut kehrt zurück", "عودة دم الجسم", "Die obere Hohlvene bringt Blut von Kopf und Armen, die untere (von unten) Blut vom Rumpf und von den Beinen in den rechten Vorhof.", "الوريد الأجوف العلوي يجلب الدم من الرأس والذراعين، والسفلي (من الأسفل) من الجذع والساقين، إلى الأذين الأيمن.", ["superior-vena-cava", "right-atrium"], "blue"),
    S("Rechter Vorhof zur rechten Kammer", "من الأذين الأيمن إلى البطين الأيمن", "Das Blut öffnet die Trikuspidalklappe und füllt die rechte Kammer.", "يفتح الدم الصمام ثلاثي الشرف ويملأ البطين الأيمن.", ["right-atrium", "tricuspid-valve", "right-ventricle"], "blue"),
    S("Auf dem Weg zur Lunge", "في الطريق إلى الرئة", "Die rechte Kammer pumpt über die Pulmonalklappe in den Truncus pulmonalis; er teilt sich in rechte und linke Lungenarterie.", "يضخ البطين الأيمن عبر الصمام الرئوي إلى الجذع الرئوي ثم ينقسم إلى الشريانين الرئويين الأيمن والأيسر.", ["right-ventricle", "pulmonary-valve", "pulmonary-trunk", "right-pulmonary-artery"], "blue"),
    S("In der Lunge", "في الرئة", "Hier gibt das Blut CO2 ab und nimmt Sauerstoff auf (Gasaustausch in den Lungenbläschen).", "هنا يتخلص الدم من ثاني أكسيد الكربون ويأخذ الأكسجين (تبادل الغازات في الأسناخ).", ["right-pulmonary-artery", "right-superior-pulmonary-vein"], "amber", NOLUNG),
    S("Zurück zum Herzen", "العودة إلى القلب", "Vier Lungenvenen führen das sauerstoffreiche Blut in den linken Vorhof; durch die Mitralklappe gelangt es in die linke Kammer.", "تحمل أربعة أوردة رئوية الدم الغني بالأكسجين إلى الأذين الأيسر ثم عبر الصمام التاجي إلى البطين الأيسر.", ["right-superior-pulmonary-vein", "left-atrium", "mitral-valve", "left-ventricle"], "red"),
    S("In den Körper", "إلى الجسم", "Die linke Kammer presst das Blut durch die Aortenklappe in die Aorta und weiter zu allen Organen.", "يدفع البطين الأيسر الدم عبر الصمام الأبهري إلى الأبهر ثم إلى كل الأعضاء.", ["left-ventricle", "aortic-valve", "ascending-aorta", "aortic-arch", "descending-thoracic-aorta"], "red"),
    S("Versorgung des Herzens selbst", "تغذية القلب نفسه", "Direkt über der Aortenklappe gehen die Herzkranzarterien ab und versorgen den Herzmuskel.", "تنشأ الشرايين التاجية فوق الصمام الأبهري مباشرة وتغذي عضلة القلب.", ["ascending-aorta", "left-main-coronary-artery", "left-anterior-descending-artery"], "red"),
    S("Rückfluss aus dem Herzmuskel", "عودة الدم من عضلة القلب", "Die Herzvenen sammeln das Blut im Koronarsinus, der in den rechten Vorhof mündet.", "تجمع أوردة القلب الدم في الجيب التاجي الذي يصب في الأذين الأيمن.", ["great-cardiac-vein", "coronary-sinus", "right-atrium"], "blue"),
  ])],
  resp: [flow("atemweg", "Weg der Atemluft und des Lungenblutes", "مسار هواء التنفس ودم الرئة", ["Violett = Atemluft, Gelb = Gasaustausch, Blau/Rot = Blut. Die Punkte zeigen die Richtung.", "البنفسجي هواء التنفس، والأصفر تبادل الغازات، والأزرق والأحمر الدم. النقاط تبين الاتجاه."], [
    S("Nase und Rachen", "الأنف والبلعوم", "Die Luft wird in der Nase gefiltert, angewärmt und befeuchtet; der Kehldeckel schützt beim Schlucken die Atemwege.", "يُنقّى الهواء ويُدفّأ ويُرطّب في الأنف؛ واللسان المزمار يحمي المجرى عند البلع.", ["nasal-cartilages", "epiglottis"], "violet"),
    S("Kehlkopf und Luftröhre", "الحنجرة والرغامى", "Über Kehlkopf und Ringknorpel gelangt die Luft in die Luftröhre.", "يمر الهواء عبر الحنجرة والغضروف الحلقي إلى الرغامى.", ["thyroid-cartilage", "cricoid-cartilage", "trachea"], "violet"),
    S("Bronchien", "القصبات", "Die Luftröhre teilt sich in die Hauptbronchien; sie verzweigen sich in Lappen- und kleinere Bronchien.", "تتفرع الرغامى إلى القصبتين الرئيسيتين ثم إلى قصبات فصية وأصغر.", ["trachea", "right-main-bronchus", "rm-bronchi", "rl-bronchi"], "violet"),
    S("Gasaustausch", "تبادل الغازات", "Am Ende der Bronchien liegen die Lungenbläschen; dort wechselt Sauerstoff ins Blut und CO2 in die Luft.", "في نهاية القصبات توجد الأسناخ؛ هناك ينتقل الأكسجين إلى الدم وثاني أكسيد الكربون إلى الهواء.", ["rl-bronchi", "rl-arteries", "rl-veins"], "amber", NOLUNG),
    S("Blut zur Lunge", "الدم إلى الرئة", "Sauerstoffarmes Blut kommt aus der rechten Herzkammer über den Truncus pulmonalis.", "يأتي الدم قليل الأكسجين من البطين الأيمن عبر الجذع الرئوي.", ["pulmonary-trunk", "right-pulmonary-artery", "ru-arteries"], "blue"),
    S("Blut zurück zum Herzen", "الدم عائداً إلى القلب", "Sauerstoffreiches Blut fließt über die Lungenvenen zum linken Vorhof.", "يجري الدم الغني بالأكسجين عبر الأوردة الرئوية إلى الأذين الأيسر.", ["ru-veins", "right-pulmonary-veins"], "red"),
    S("Atempumpe", "مضخة التنفس", "Beim Einatmen zieht sich das Zwerchfell zusammen und flacht ab; der Brustraum wird größer, Luft strömt ein.", "عند الشهيق ينقبض الحجاب ويتسطح فيتسع الصدر ويدخل الهواء.", ["diaphragm"], "violet"),
  ])],
  urinary: [flow("harnbildung", "Harnbildung und Harnweg", "تكوين البول ومجراه", ["Rot/Blau = Blut, Gelb = Harn. Die Punkte zeigen die Fließrichtung.", "الأحمر والأزرق دم، والأصفر بول. النقاط تبين اتجاه الجريان."], [
    S("Blut zur Niere", "الدم إلى الكلية", "Die Bauchaorta gibt die Nierenarterie ab; etwa ein Fünftel des Herzzeitvolumens fließt durch die Nieren.", "ينشأ الشريان الكلوي من الأبهر البطني؛ ويمر نحو خمس النتاج القلبي عبر الكليتين.", ["abdominal-aorta", "right-renal-artery", "right-kidney"], "red"),
    S("Filtern in der Niere", "الترشيح في الكلية", "In den Nierenkörperchen werden täglich etwa 180 Liter Primärharn filtriert; in den Tubuli werden Wasser und Salze rückgewonnen, etwa 1,5 Liter Endharn bleiben.", "تُرشَّح في الكبيبات نحو 180 لتراً من البول الأولي يومياً؛ وفي الأنابيب يُعاد امتصاص الماء والأملاح فيبقى نحو 1.5 لتر بول نهائي.", ["right-kidney"], "amber", ["Nierenkörperchen und Tubuli sind im Modell nicht einzeln enthalten.", "الكبيبات والأنابيب غير موجودة منفصلة في النموذج."]),
    S("Harnleiter", "الحالب", "Der Harn fließt vom Nierenbecken durch den Harnleiter (Peristaltik) zur Blase.", "يجري البول من حويضة الكلية عبر الحالب (تمعج) إلى المثانة.", ["right-kidney", "right-ureter", "bladder"], "amber"),
    S("Blase und Harnröhre", "المثانة والإحليل", "Die Blase speichert den Harn; beim Wasserlassen entspannt der Schließmuskel und der Harn verlässt den Körper über die Harnröhre.", "تخزن المثانة البول؛ وعند التبول تسترخي العاصرة ويخرج البول عبر الإحليل.", ["bladder", "urethra"], "amber"),
    S("Gereinigtes Blut zurück", "الدم المنقّى يعود", "Das Blut verlässt die Niere über die Nierenvene und fließt in die untere Hohlvene.", "يغادر الدم الكلية عبر الوريد الكلوي ويصب في الأجوف السفلي.", ["right-kidney", "right-renal-vein", "inferior-vena-cava"], "blue"),
  ])],
  digestive: [flow("speiseweg", "Weg der Nahrung", "مسار الطعام", ["Gelb = Speisebrei, Violett = Galle und Pankreassaft, Blau = Nährstoffblut zur Leber.", "الأصفر كتلة الطعام، والبنفسجي الصفراء وعصارة البنكرياس، والأزرق دم المغذيات إلى الكبد."], [
    S("Mund und Speiseröhre", "الفم والمريء", "Zunge und Speichel formen den Bissen; die Speiseröhre transportiert ihn durch Peristaltik.", "يشكل اللسان واللعاب اللقمة، ويقوم المريء بنقلها بالتمعج.", ["tongue", "esophagus"], "amber"),
    S("Magen", "المعدة", "Im Magen wird der Speisebrei mit Salzsäure und Pepsin durchmischt (Eiweißverdauung beginnt).", "في المعدة يُخلط الطعام بحمض الهيدروكلوريك والببسين (يبدأ هضم البروتين).", ["esophagus", "stomach"], "amber"),
    S("Zwölffingerdarm", "الاثنا عشر", "Portionsweise tritt der Brei in den Zwölffingerdarm über.", "ينتقل الكيموس على دفعات إلى الاثني عشر.", ["stomach", "duodenum"], "amber"),
    S("Galle", "الصفراء", "Die Leber bildet Galle, die Gallenblase speichert sie; über die Gallengänge gelangt sie zur Fettverdauung in den Zwölffingerdarm.", "يصنع الكبد الصفراء وتخزنها المرارة؛ وتصل عبر القنوات الصفراوية إلى الاثني عشر لهضم الدهون.", ["liver-segment-5", "gallbladder", "extrahepatic-bile-ducts", "duodenum"], "violet"),
    S("Bauchspeicheldrüse", "البنكرياس", "Das Pankreas gibt Verdauungsenzyme (Lipase, Amylase, Trypsin) über den Gang in den Zwölffingerdarm ab.", "يفرز البنكرياس إنزيمات الهضم (ليباز وأميلاز وتربسين) عبر القناة إلى الاثني عشر.", ["pancreas", "pancreatic-duct", "duodenum"], "violet"),
    S("Dünndarm", "الأمعاء الدقيقة", "Im Jejunum und Ileum werden Nährstoffe aufgenommen.", "في الصائم واللفائفي تُمتص المغذيات.", ["duodenum", "jejunum", "ileum"], "amber"),
    S("Dickdarm", "الأمعاء الغليظة", "Im Dickdarm wird Wasser entzogen; der Stuhl wird eingedickt und im Mastdarm gesammelt.", "في الأمعاء الغليظة يُسحب الماء ويتكثف البراز ويتجمع في المستقيم.", ["ileocecal-junction", "ascending-colon", "transverse-colon", "descending-colon", "rectum"], "amber"),
    S("Nährstoffe zur Leber", "المغذيات إلى الكبد", "Die aufgenommenen Nährstoffe fließen über die Pfortader zur Leber (Verwertung, Entgiftung).", "تجري المغذيات الممتصة عبر الوريد البابي إلى الكبد (استقلاب وإزالة سموم).", ["superior-mesenteric-vein", "portal-vein", "portal-branches"], "blue"),
  ])],
  blood: [flow("kreislauf", "Große Gefäße des Körperkreislaufs", "الأوعية الكبيرة للدورة الجسمية", ["Rot = Arterien vom Herzen weg, Blau = Venen zum Herzen hin, Violett = Pfortader.", "الأحمر شرايين مبتعدة عن القلب، والأزرق أوردة نحو القلب، والبنفسجي الوريد البابي."], [
    S("Aorta und Halsgefäße", "الأبهر وأوعية العنق", "Aus der Aorta gehen Arm- und Halsarterien zu Kopf und Armen ab.", "من الأبهر تنطلق شرايين العنق والذراع إلى الرأس والذراعين.", ["aorta", "aortic-branches"], "red"),
    S("Zu Becken und Beinen", "إلى الحوض والساقين", "Die Aorta teilt sich in die Beckenarterien für Becken und Beine.", "ينقسم الأبهر إلى الشريانين الحرقفيين للحوض والساقين.", ["aorta", "iliac-arteries"], "red"),
    S("Milz und Pfortader", "الطحال والوريد البابي", "Die Milzvene vereinigt sich mit den Darmvenen zur Pfortader.", "يتحد الوريد الطحالي مع أوردة الأمعاء لتشكيل الوريد البابي.", ["splenic-vein", "portal-vein"], "violet"),
    S("Rückweg", "طريق العودة", "Beckenvenen und Armkopfvenen sammeln das Blut in den Hohlvenen zum rechten Herzen.", "تجمع الأوردة الحرقفية والعضدية الرأسية الدم في الأجوفين نحو القلب الأيمن.", ["iliac-veins", "vena-cava"], "blue"),
  ])],
};

const story = (id: string, td: string, ta: string, intro: [string, string], steps: AtlasStep[]): AtlasPath => ({ id, title: R(td, ta), intro, steps, pulse: true });
const I0: [string, string] = ["Was passiert im Körper? Das pulsierende Organ ist betroffen.", "ماذا يحدث في الجسم؟ العضو النابض هو المصاب."];
const COR = ["left-main-coronary-artery", "left-anterior-descending-artery", "circumflex-artery", "right-coronary-artery"];
const BR = ["trachea", "right-main-bronchus", "left-main-bronchus", "ru-bronchi", "rm-bronchi", "rl-bronchi", "lu-bronchi", "ll-bronchi"];
const LIVER = ["liver-caudate", "liver-segments-2-3", "liver-segment-4", "liver-segment-5", "liver-segment-6", "liver-segment-8"];
const KID = ["right-kidney", "left-kidney"];
const LOBES = ["frontal-lobe", "parietal-lobe", "temporal-lobe", "occipital-lobe"];

/** Krankheitsgeschehen je Lektions-ID: Ursache, Ablauf, Zeichen, Folgen. */
export const DISEASE_STORIES: Record<string, AtlasPath> = {
  herzinfarkt: story("herzinfarkt", "Was passiert beim Herzinfarkt?", "ماذا يحدث في احتشاء القلب؟", I0, [
    S("Ursache: Verschluss", "السبب: انسداد", "Meist reißt eine Plaque in einer Herzkranzarterie ein, ein Blutgerinnsel verschließt das Gefäß (häufig der Ast LAD).", "غالباً تتمزق لويحة في شريان تاجي فتسد خثرة الوعاء (كثيراً الفرع النازل الأمامي).", ["left-anterior-descending-artery"]),
    S("Ischämie", "نقص التروية", "Der Herzmuskel hinter dem Verschluss bekommt kein Blut mehr: Schmerz hinter dem Brustbein, Engegefühl, Ausstrahlung in Arm, Kiefer oder Oberbauch.", "تفقد عضلة القلب خلف الانسداد الدم: ألم خلف القص وضيق وانتشار إلى الذراع أو الفك أو أعلى البطن.", ["left-ventricle", "left-anterior-descending-artery"]),
    S("Nekrose", "النخر", "Nach etwa 20 bis 30 Minuten beginnt der Muskel abzusterben; je länger der Verschluss, desto größer der Schaden („Zeit ist Muskel“).", "بعد نحو 20 إلى 30 دقيقة تبدأ العضلة بالموت؛ وكلما طال الانسداد زاد الضرر («الوقت هو العضلة»).", ["left-ventricle"]),
    S("Folgen und Pflege", "العواقب والتمريض", "Gefahr: Rhythmusstörungen, Herzschwäche, Schock. Sofort Notruf, Oberkörper hoch, Ruhe, Vitalzeichen; Katheter-Eröffnung (PCI) so früh wie möglich.", "الخطر: اضطراب الإيقاع وفشل القلب والصدمة. استدعاء الطوارئ فوراً ورفع الجذع وراحة ومراقبة العلامات؛ فتح الشريان بالقسطرة في أقرب وقت.", ["left-ventricle", ...COR]),
  ]),
  khk: story("khk", "Was passiert bei der KHK?", "ماذا يحدث في مرض الشرايين التاجية؟", I0, [
    S("Arteriosklerose", "تصلب الشرايين", "Fett, Entzündung und Kalk lagern sich als Plaques in den Herzkranzarterien ab.", "تترسب الدهون والالتهاب والكلس كلويحات في الشرايين التاجية.", COR),
    S("Engstelle", "التضيق", "Die Engstelle begrenzt den Blutfluss; bei Belastung reicht der Sauerstoff nicht (Angina pectoris).", "يحد التضيق من الجريان؛ وعند الجهد لا يكفي الأكسجين (الذبحة الصدرية).", COR),
    S("Beschwerden", "الأعراض", "Brustschmerz oder Druck bei Belastung, der in Ruhe oder nach Nitrospray nachlässt; bei Verschluss droht der Infarkt.", "ألم أو ضغط في الصدر عند الجهد يزول بالراحة أو بعد النتروغليسرين؛ والانسداد يهدد بالاحتشاء.", COR),
  ]),
  herzinsuffizienz: story("herzinsuffizienz", "Was passiert bei der Herzschwäche?", "ماذا يحدث في قصور القلب؟", I0, [
    S("Pumpschwäche", "ضعف الضخ", "Das Herz pumpt zu wenig Blut für den Bedarf (z. B. nach Infarkt oder bei Bluthochdruck).", "يضخ القلب دماً أقل من الحاجة (مثلاً بعد احتشاء أو ارتفاع ضغط).", ["left-ventricle", "right-ventricle"]),
    S("Rückstau links", "احتقان في الجهة اليسرى", "Blut staut sich in die Lunge zurück: Atemnot, Husten, Lungenödem.", "يرتد الدم إلى الرئة: ضيق نفس وسعال ووذمة رئوية.", ["left-ventricle", "left-atrium"]),
    S("Rückstau rechts", "احتقان في الجهة اليمنى", "Blut staut sich in den Körper zurück: Beinödeme, gestaute Halsvenen, Gewichtszunahme.", "يرتد الدم إلى الجسم: وذمة الساقين وانتفاخ أوردة العنق وزيادة الوزن.", ["right-ventricle", "right-atrium"]),
    S("Pflege", "التمريض", "Tägliches Wiegen, Ein-/Ausfuhr, Beine hochlagern, Oberkörper hoch, Ödeme und Atmung beobachten.", "وزن يومي ومراقبة الداخل والخارج ورفع الساقين ورفع الجذع ومراقبة الوذمة والتنفس.", ["left-ventricle", "right-ventricle", "left-atrium", "right-atrium"]),
  ]),
  hypertonie: story("hypertonie", "Was passiert bei Bluthochdruck?", "ماذا يحدث في ارتفاع الضغط؟", I0, [
    S("Hoher Druck", "ضغط مرتفع", "Dauerhaft erhöhter Druck in den Arterien (ab etwa 140/90 mmHg in der Praxis).", "ضغط مرتفع باستمرار في الشرايين (من نحو 140/90 ملم زئبق في العيادة).", ["ascending-aorta", "aortic-arch", "descending-thoracic-aorta"]),
    S("Belastung des Herzens", "إجهاد القلب", "Die linke Kammer muss gegen den Widerstand pumpen; die Wand wird dicker (Hypertrophie) und später schwach.", "يضخ البطين الأيسر ضد المقاومة فيتثخن جداره (تضخم) ثم يضعف.", ["left-ventricle"]),
    S("Schäden an Gefäßen", "تضرر الأوعية", "Die Gefäßwände werden geschädigt: Risiko für Schlaganfall, Infarkt, Nierenschaden, Aneurysma.", "تتضرر جدران الأوعية: خطر السكتة والاحتشاء وتلف الكلى وأم الدم.", AORTA_IDS()),
  ]),
  aneurysma: story("aneurysma", "Was passiert beim Aneurysma?", "ماذا يحدث في أم الدم؟", I0, [
    S("Wandschwäche", "ضعف الجدار", "Die Wand der Aorta ist geschwächt (Bluthochdruck, Arteriosklerose, Bindegewebserkrankung).", "جدار الأبهر ضعيف (ارتفاع ضغط وتصلب وأمراض النسيج الضام).", AORTA_IDS()),
    S("Aussackung", "التمدد", "Unter dem Druck weitet sich die Wand sackartig; oft keine Beschwerden.", "تتمدد الجدار كالكيس تحت الضغط؛ وغالباً بلا أعراض.", AORTA_IDS()),
    S("Notfall", "الطارئ", "Reißt die Wand (Ruptur oder Dissektion): plötzlicher Vernichtungsschmerz und Schock; sofort Notruf, kein Aufstehen, Blutdruck beobachten.", "عند التمزق أو التسلخ: ألم ساحق مفاجئ وصدمة؛ طوارئ فوراً وعدم الوقوف ومراقبة الضغط.", AORTA_IDS()),
  ]),
  thrombose: story("thrombose", "Was passiert bei der Thrombose?", "ماذا يحدث في الخثار؟", I0, [
    S("Virchow-Trias", "ثلاثية فيرشو", "Langsamer Fluss (Bettlägerigkeit), Wandschaden und erhöhte Gerinnung führen zum Gerinnsel in einer tiefen Beinvene.", "بطء الجريان (طريح الفراش) وتلف الجدار وزيادة التخثر تؤدي إلى جلطة في وريد عميق بالساق.", ["iliac-veins"], "blue"),
    S("Beschwerden", "الأعراض", "Das Bein schwillt einseitig an, spannt, ist warm und bläulich; Schmerz beim Beugen des Fußes.", "تنتفخ الساق من جانب واحد وتتوتر وتكون دافئة وزرقاء؛ وألم عند ثني القدم.", ["iliac-veins"], "blue"),
    S("Gefahr Embolie", "خطر الانصمام", "Löst sich das Gerinnsel, wandert es über die untere Hohlvene und das Herz in die Lunge (Lungenembolie).", "إذا انفصلت الجلطة فإنها تصل عبر الأجوف السفلي والقلب إلى الرئة (انصمام رئوي).", ["iliac-veins", "vena-cava"], "blue"),
    S("Prävention und Pflege", "الوقاية والتمريض", "Mobilisation, Kompression, Heparin nach Anordnung; bei Verdacht nicht massieren, Arzt informieren.", "تحريك وضغط وهيبارين حسب الأمر؛ وعند الشك لا تدلك وأبلغ الطبيب.", ["iliac-veins", "vena-cava"], "blue"),
  ]),
  lungenembolie: story("lungenembolie", "Was passiert bei der Lungenembolie?", "ماذا يحدث في الانصمام الرئوي؟", I0, [
    S("Gerinnsel wandert", "الجلطة تنتقل", "Ein Gerinnsel aus den Beinvenen gelangt über das rechte Herz in die Lungenarterien.", "تصل جلطة من أوردة الساق عبر القلب الأيمن إلى الشرايين الرئوية.", ["pulmonary-trunk", "right-pulmonary-artery", "left-pulmonary-artery"], "blue"),
    S("Verschluss", "الانسداد", "Die Lungenarterie wird verstopft; der Teil der Lunge dahinter erhält kein Blut und kann kein Gas austauschen.", "يُسد الشريان الرئوي فلا يصل الدم إلى الجزء الخلفي ولا يتم تبادل الغازات.", ["right-pulmonary-artery", "left-pulmonary-artery"]),
    S("Zeichen", "العلامات", "Plötzliche Atemnot, Brustschmerz beim Einatmen, schneller Puls, Husten; bei großer Embolie Kreislaufversagen.", "ضيق نفس مفاجئ وألم صدر عند الشهيق ونبض سريع وسعال؛ وفي الانصمام الكبير فشل الدورة.", ["pulmonary-trunk", "right-pulmonary-artery"]),
    S("Pflege", "التمريض", "Notruf, Oberkörper hoch, Sauerstoff nach Anordnung, nicht allein lassen, Vitalzeichen.", "طوارئ ورفع الجذع وأكسجين حسب الأمر وعدم ترك المريض وحده ومراقبة العلامات.", ["pulmonary-trunk", "right-pulmonary-artery", "left-pulmonary-artery"]),
  ]),
  asthma: story("asthma", "Was passiert beim Asthma?", "ماذا يحدث في الربو؟", I0, [
    S("Auslöser", "المثير", "Allergene, Infekte, Kälte oder Anstrengung reizen die überempfindlichen Bronchien.", "تهيّج المواد المثيرة للحساسية أو العدوى أو البرد أو الجهد القصبات الحساسة.", BR),
    S("Verengung", "التضيق", "Die Bronchialmuskeln ziehen sich zusammen, die Schleimhaut schwillt an, zäher Schleim bildet sich.", "تنقبض عضلات القصبات وتتورم المخاطية ويتكوّن مخاط لزج.", BR),
    S("Anfall", "النوبة", "Pfeifendes Atemgeräusch, Husten, Atemnot vor allem beim Ausatmen; Sprechen nur in kurzen Sätzen.", "صفير في التنفس وسعال وضيق نفس خاصة في الزفير؛ ويتكلم بجمل قصيرة.", BR),
    S("Pflege", "التمريض", "Kutschersitz oder Oberkörper hoch, Bedarfsspray (Beta-2-Mimetikum) nach Plan, Lippenbremse, ruhig bleiben, Notruf bei Lippenzyanose.", "جلسة السائق أو رفع الجذع ورذاذ الطوارئ حسب الخطة والزفير من شفاه مضمومة والهدوء وطوارئ عند ازرقاق الشفاه.", BR),
  ]),
  copd: story("copd", "Was passiert bei der COPD?", "ماذا يحدث في الانسداد الرئوي المزمن؟", I0, [
    S("Dauerreiz", "تهيج مزمن", "Jahrelanges Rauchen schädigt Bronchien und Lungenbläschen.", "التدخين لسنوات يضر القصبات والأسناخ.", BR),
    S("Umbau", "إعادة التشكل", "Chronische Entzündung, Schleim und Verengung; Lungenbläschen gehen unter (Emphysem).", "التهاب مزمن ومخاط وتضيق؛ وتتلف الأسناخ (انتفاخ الرئة).", BR),
    S("Beschwerden", "الأعراض", "Husten, Auswurf am Morgen, Atemnot erst bei Belastung, später in Ruhe; Exazerbationen mit Fieber.", "سعال وبلغم صباحاً وضيق نفس عند الجهد ثم في الراحة؛ ونوبات تفاقم مع حمى.", BR),
    S("Pflege", "التمريض", "Rauchstopp, Lippenbremse, Atemübungen, Inhalationstechnik schulen, Sauerstoff vorsichtig dosieren, Infekte und Impfungen.", "الإقلاع عن التدخين وتنفس الشفاه المضمومة وتمارين التنفس وتدريب على الاستنشاق وجرعة أكسجين بحذر وتجنب العدوى والتطعيم.", BR),
  ]),
  pneumonie: story("pneumonie", "Was passiert bei der Lungenentzündung?", "ماذا يحدث في الالتهاب الرئوي؟", I0, [
    S("Erreger", "الجراثيم", "Bakterien oder Viren gelangen mit der Atemluft oder durch Verschlucken in die Lunge.", "تصل الجراثيم أو الفيروسات مع الهواء أو بالاستنشاق الخاطئ إلى الرئة.", BR),
    S("Entzündung", "الالتهاب", "Die Lungenbläschen füllen sich mit Flüssigkeit und Eiter, der Gasaustausch sinkt.", "تمتلئ الأسناخ بالسوائل والقيح فيقل تبادل الغازات.", BR),
    S("Zeichen", "العلامات", "Fieber, Schüttelfrost, Husten mit Auswurf, Atemnot, schnelle Atmung, Sauerstoffsättigung fällt.", "حمى وقشعريرة وسعال مع بلغم وضيق نفس وتسرع التنفس وانخفاض الإشباع.", BR),
    S("Pflege", "التمريض", "Oberkörper hoch, Atemübungen, ausreichend trinken, Sättigung und Temperatur kontrollieren, Antibiotika nach Anordnung.", "رفع الجذع وتمارين التنفس وشرب كاف ومراقبة الإشباع والحرارة ومضاد حيوي حسب الأمر.", BR),
  ]),
  schlaganfall: story("schlaganfall", "Was passiert beim Schlaganfall?", "ماذا يحدث في السكتة الدماغية؟", I0, [
    S("Ursache", "السبب", "Meist verschließt ein Gerinnsel eine Hirnarterie (Ischämie, etwa 85 %); seltener platzt ein Gefäß (Blutung).", "غالباً تسد خثرة شرياناً دماغياً (نقص تروية نحو 85%)؛ وأقل شيوعاً ينفجر وعاء (نزف).", LOBES),
    S("Ausfälle", "الأعراض", "Die versorgte Hirnregion fällt aus: hängender Mundwinkel, Armschwäche, Sprachstörung (FAST).", "تتعطل المنطقة الدماغية المغذاة: انحراف الفم وضعف الذراع واضطراب الكلام (FAST).", ["frontal-lobe", "temporal-lobe"]),
    S("Zeitfenster", "نافذة الوقت", "Jede Minute zählt: sofort Notruf, Uhrzeit des Beginns notieren; Lyse nur in den ersten Stunden möglich.", "كل دقيقة مهمة: طوارئ فوراً وتدوين وقت البدء؛ والإذابة ممكنة في الساعات الأولى فقط.", LOBES),
    S("Pflege", "التمريض", "Oberkörper etwa 30 Grad, nichts essen oder trinken bis der Schlucktest erfolgt ist, Vitalzeichen und Bewusstsein, Dekubitus- und Pneumonieprophylaxe.", "رفع الجذع نحو 30 درجة وعدم الأكل أو الشرب حتى اختبار البلع ومراقبة العلامات والوعي والوقاية من القرحة والالتهاب الرئوي.", LOBES),
  ]),
  parkinson: story("parkinson", "Was passiert bei Parkinson?", "ماذا يحدث في باركنسون؟", I0, [
    S("Dopaminmangel", "نقص الدوبامين", "In der Substantia nigra des Mittelhirns sterben Nervenzellen ab, die Dopamin bilden.", "تموت في المادة السوداء بالدماغ المتوسط الخلايا العصبية التي تصنع الدوبامين.", ["midbrain"]),
    S("Gestörte Bewegungssteuerung", "اضطراب التحكم بالحركة", "Die Basalganglien bekommen zu wenig Dopamin; Bewegungen werden langsam und unflüssig.", "تحصل العقد القاعدية على دوبامين أقل؛ فتصبح الحركة بطيئة وغير سلسة.", ["caudate-nucleus", "putamen", "globus-pallidus"]),
    S("Leitzeichen", "العلامات الرئيسية", "Verlangsamung (Akinese), Muskelsteifheit (Rigor), Ruhezittern (Tremor), kleine Schritte, Haltungsinstabilität.", "بطء الحركة وتيبس العضلات ورعاش الراحة وخطوات صغيرة وعدم ثبات الوضعية.", ["midbrain", "putamen"]),
    S("Pflege", "التمريض", "Medikamente pünktlich geben (L-Dopa), Sturzprophylaxe, Bewegungs- und Schlucktraining, Selbstständigkeit fördern.", "إعطاء الدواء في وقته (ل-دوبا) ووقاية من السقوط وتدريب الحركة والبلع وتشجيع الاستقلال.", ["midbrain", "caudate-nucleus", "putamen"]),
  ]),
  demenz: story("demenz", "Was passiert bei der Demenz?", "ماذا يحدث في الخرف؟", I0, [
    S("Abbau von Nervenzellen", "فقد الخلايا العصبية", "Bei Alzheimer lagern sich Eiweiße ab und Nervenzellen sterben, zuerst im Hippocampus.", "في ألزهايمر تترسب البروتينات وتموت الخلايا العصبية وأولاً في الحصين.", ["hippocampus"]),
    S("Gedächtnis", "الذاكرة", "Neues wird nicht mehr gespeichert: Kurzzeitgedächtnis, Orientierung und Sprache lassen nach.", "لا يُخزَّن الجديد: تضعف الذاكرة القريبة والتوجه واللغة.", ["hippocampus", "temporal-lobe"]),
    S("Fortschreiten", "التقدم", "Der Abbau breitet sich aus; Denken, Urteilen und Alltagsfähigkeiten gehen verloren.", "ينتشر التلف؛ ويضيع التفكير والحكم والقدرات اليومية.", ["hippocampus", "temporal-lobe", "frontal-lobe"]),
    S("Pflege", "التمريض", "Feste Abläufe, Orientierungshilfen, Biografiearbeit, Sicherheit (Weglaufgefahr), ruhig und wertschätzend begegnen.", "روتين ثابت ومساعدات التوجه وعمل السيرة الذاتية وأمان (خطر الضياع) وتعامل هادئ ومحترم.", ["hippocampus", "temporal-lobe", "frontal-lobe"]),
  ]),
  pankreatitis: story("pankreatitis", "Was passiert bei der Pankreatitis?", "ماذا يحدث في التهاب البنكرياس؟", I0, [
    S("Auslöser", "المسببات", "Meist Gallensteine oder Alkohol; der Abfluss des Pankreassaftes ist gestört.", "غالباً حصى المرارة أو الكحول؛ ويضطرب تصريف عصارة البنكرياس.", ["pancreas", "pancreatic-duct", "duodenum"]),
    S("Selbstverdauung", "الهضم الذاتي", "Enzyme werden schon in der Drüse aktiv und verdauen das Gewebe: Entzündung, Schwellung, Gewebstod.", "تنشط الإنزيمات داخل الغدة وتهضم النسيج: التهاب وتورم وموت نسيجي.", ["pancreas"]),
    S("Zeichen", "العلامات", "Gürtelförmiger Oberbauchschmerz mit Ausstrahlung in den Rücken, Übelkeit, Erbrechen, Fieber; Lipase und Amylase erhöht.", "ألم حزامي في أعلى البطن يمتد إلى الظهر وغثيان وقيء وحمى؛ ارتفاع الليباز والأميلاز.", ["pancreas"]),
    S("Pflege", "التمريض", "Nahrungskarenz nach Anordnung, Schmerzmittel, Infusion, Flüssigkeitsbilanz, Vitalzeichen (Schockgefahr).", "صيام حسب الأمر ومسكنات ومحاليل وميزان سوائل ومراقبة العلامات (خطر الصدمة).", ["pancreas", "duodenum"]),
  ]),
  diabetes: story("diabetes", "Was passiert beim Diabetes?", "ماذا يحدث في السكري؟", I0, [
    S("Insulin im Pankreas", "الإنسولين في البنكرياس", "Die Beta-Zellen der Langerhans-Inseln bilden Insulin, das Zucker aus dem Blut in die Zellen bringt.", "تصنع خلايا بيتا في جزر لانغرهانس الإنسولين الذي يدخل السكر من الدم إلى الخلايا.", ["pancreas"]),
    S("Typ 1", "النوع الأول", "Abwehrzellen zerstören die Beta-Zellen: absoluter Insulinmangel, Beginn oft in der Jugend.", "تدمر خلايا المناعة خلايا بيتا: نقص إنسولين مطلق وغالباً يبدأ في الشباب.", ["pancreas"]),
    S("Typ 2", "النوع الثاني", "Die Zellen sprechen schlechter auf Insulin an (Insulinresistenz), später lässt auch die Bildung nach.", "تستجيب الخلايا أقل للإنسولين (مقاومة) ثم يقل الإنتاج أيضاً.", ["pancreas"]),
    S("Folgen und Pflege", "العواقب والتمريض", "Zu viel Zucker schädigt Gefäße, Nerven, Augen und Nieren; Blutzucker messen, Insulin korrekt spritzen, Füße kontrollieren, Hypoglykämie erkennen.", "السكر المرتفع يضر الأوعية والأعصاب والعيون والكلى؛ قياس السكر وحقن الإنسولين بشكل صحيح وفحص القدمين والتعرف على نقص السكر.", ["pancreas", "pancreatic-duct"]),
  ]),
  appendizitis: story("appendizitis", "Was passiert bei der Blinddarmentzündung?", "ماذا يحدث في التهاب الزائدة؟", I0, [
    S("Verlegung", "الانسداد", "Kotstein oder Schwellung verlegt den Wurmfortsatz.", "يسد حصى برازي أو تورم الزائدة الدودية.", ["appendix"]),
    S("Entzündung", "الالتهاب", "Bakterien vermehren sich, die Wand entzündet sich und schwillt an.", "تتكاثر الجراثيم ويلتهب الجدار ويتورم.", ["appendix", "ileocecal-junction"]),
    S("Zeichen", "العلامات", "Schmerz beginnt um den Nabel und wandert in den rechten Unterbauch; Fieber, Übelkeit; Loslassschmerz.", "يبدأ الألم حول السرة ثم ينتقل إلى أسفل البطن الأيمن؛ حمى وغثيان؛ ألم عند رفع اليد.", ["appendix"]),
    S("Gefahr", "الخطر", "Durchbruch (Perforation) führt zur Bauchfellentzündung. Nüchtern lassen, kein Abführmittel, Arzt informieren.", "الانثقاب يؤدي إلى التهاب الصفاق. عدم الأكل وعدم إعطاء ملين وإبلاغ الطبيب.", ["appendix", "ascending-colon"]),
  ]),
  "gastritis-ulkus": story("gastritis-ulkus", "Was passiert bei Gastritis und Magengeschwür?", "ماذا يحدث في التهاب المعدة والقرحة؟", I0, [
    S("Schutz gestört", "اختلال الحماية", "Helicobacter pylori oder Schmerzmittel (NSAR) schädigen die Schleimhaut.", "جرثومة هيليكوباكتر أو مسكنات (NSAR) تضر بالمخاطية.", ["stomach", "duodenum"]),
    S("Säure greift an", "الحمض يهاجم", "Magensäure löst eine Wunde in der Schleimhaut: Ulkus.", "يسبب حمض المعدة جرحاً في المخاطية: قرحة.", ["stomach", "duodenum"]),
    S("Zeichen", "العلامات", "Oberbauchschmerz, bei Magengeschwür nach dem Essen, bei Zwölffingerdarmgeschwür oft nüchtern; Übelkeit.", "ألم أعلى البطن، في قرحة المعدة بعد الأكل وفي قرحة الاثني عشر غالباً على الريق؛ وغثيان.", ["stomach"]),
    S("Blutung", "النزف", "Kaffeesatzerbrechen oder Teerstuhl sind Notfallzeichen: Notruf, Schocklage, Vitalzeichen.", "قيء بلون القهوة أو براز أسود قطراني علامات طوارئ: استدعاء وطوارئ ووضعية الصدمة ومراقبة العلامات.", ["stomach", "duodenum"]),
  ]),
  leberzirrhose: story("leberzirrhose", "Was passiert bei der Leberzirrhose?", "ماذا يحدث في تشمع الكبد؟", I0, [
    S("Dauerschaden", "ضرر مزمن", "Alkohol, Hepatitis oder Fettleber schädigen die Leber über Jahre.", "الكحول أو التهاب الكبد أو الكبد الدهني تضر الكبد لسنوات.", LIVER),
    S("Narbenumbau", "التحول الندبي", "Gesundes Gewebe wird durch Narbengewebe ersetzt; die Leber wird hart und höckrig.", "يُستبدل النسيج السليم بنسيج ندبي؛ فيصبح الكبد صلباً ونتوئياً.", LIVER),
    S("Pfortaderstau", "احتقان الباب", "Das Blut kommt schwer durch die Leber: Druck in der Pfortader steigt, Aszites, Ösophagusvarizen, große Milz.", "يمر الدم بصعوبة عبر الكبد: يرتفع ضغط الباب وتظهر الاستسقاء ودوالي المريء وكبر الطحال.", [...LIVER, "portal-vein"]),
    S("Pflege", "التمريض", "Gewicht und Bauchumfang messen, Blutungszeichen beobachten, eiweiß- und salzangepasste Kost, Alkoholverzicht, Hautpflege.", "قياس الوزن ومحيط البطن ومراقبة النزف وغذاء مناسب للبروتين والملح وترك الكحول والعناية بالجلد.", [...LIVER, "portal-vein"]),
  ]),
  galle: story("galle", "Was passiert bei Gallensteinen?", "ماذا يحدث في حصى المرارة؟", I0, [
    S("Steinbildung", "تكوّن الحصى", "Cholesterin oder Bilirubin kristallisiert in der Gallenblase.", "يتبلور الكوليسترول أو البيليروبين في المرارة.", ["gallbladder"]),
    S("Kolik", "المغص", "Ein Stein wandert in den Gang und blockiert ihn: wellenartiger Schmerz im rechten Oberbauch.", "يدخل حجر القناة ويسدها: ألم موجي في أعلى البطن الأيمن.", ["gallbladder", "extrahepatic-bile-ducts"]),
    S("Komplikationen", "المضاعفات", "Entzündung der Blase, Gelbsucht bei Gangverschluss, Pankreatitis bei Stein an der Mündung.", "التهاب المرارة واليرقان عند انسداد القناة والتهاب بنكرياس عند حجر في الفتحة.", ["gallbladder", "extrahepatic-bile-ducts", "duodenum"]),
  ]),
  niereninsuff: story("niereninsuff", "Was passiert bei der Niereninsuffizienz?", "ماذا يحدث في القصور الكلوي؟", I0, [
    S("Funktionsverlust", "فقد الوظيفة", "Diabetes, Bluthochdruck oder Entzündung zerstören Nierenkörperchen.", "السكري أو ارتفاع الضغط أو الالتهاب يدمر الكبيبات.", KID),
    S("Anstau", "التراكم", "Harnstoff, Kalium und Wasser bleiben im Körper: Ödeme, hoher Blutdruck, Müdigkeit, Juckreiz.", "تبقى اليوريا والبوتاسيوم والماء في الجسم: وذمة وضغط مرتفع وتعب وحكة.", KID),
    S("Gefahren", "الأخطار", "Hohes Kalium führt zu Herzrhythmusstörungen; Übersäuerung und Anämie.", "ارتفاع البوتاسيوم يسبب اضطراب إيقاع القلب؛ وحماض وفقر دم.", KID),
    S("Pflege", "التمريض", "Trinkmenge und Ein-/Ausfuhr, tägliches Wiegen, kalium- und eiweißangepasste Kost, Shuntarm schonen, Dialyseplan.", "كمية الشرب والداخل والخارج ووزن يومي وغذاء مناسب للبوتاسيوم والبروتين وحماية ذراع التحويلة وخطة الغسيل.", KID),
  ]),
  urolithiasis: story("urolithiasis", "Was passiert bei Nierensteinen?", "ماذا يحدث في حصى الكلى؟", I0, [
    S("Steinbildung", "تكوّن الحصى", "Salze kristallisieren im Nierenbecken, besonders bei wenig Trinken.", "تتبلور الأملاح في حويضة الكلية خاصة عند قلة الشرب.", KID),
    S("Wandern", "الانتقال", "Der Stein rutscht in den Harnleiter und bleibt an einer Enge hängen.", "ينزلق الحجر إلى الحالب ويعلق في أحد التضيقات.", ["right-kidney", "right-ureter"]),
    S("Kolik", "المغص", "Wellenartiger, stärkster Flankenschmerz mit Ausstrahlung in die Leiste, Übelkeit, Blut im Urin.", "ألم موجي شديد جداً في الخاصرة يمتد إلى الأربية وغثيان ودم في البول.", ["right-kidney", "right-ureter", "bladder"]),
    S("Pflege", "التمريض", "Wärme, Schmerzmittel und krampflösende Mittel nach Anordnung, viel trinken, Urin sieben, Fieber meldet sich sofort.", "حرارة ومسكنات ومضادات تشنج حسب الأمر وشرب كثير وتصفية البول؛ وتبليغ الحمى فوراً.", ["right-kidney", "right-ureter", "bladder"]),
  ]),
  harnweg: story("harnweg", "Was passiert bei der Harnwegsinfektion?", "ماذا يحدث في التهاب المسالك البولية؟", I0, [
    S("Keime steigen auf", "الجراثيم تصعد", "Darmbakterien (E. coli) wandern über die Harnröhre in die Blase.", "تصعد جراثيم الأمعاء (إيشيريشيا كولاي) عبر الإحليل إلى المثانة.", ["urethra", "bladder"]),
    S("Blasenentzündung", "التهاب المثانة", "Brennen beim Wasserlassen, häufiger Harndrang, trüber Urin.", "حرقة عند التبول وإلحاح متكرر وبول عكر.", ["bladder"]),
    S("Aufsteigen zur Niere", "الصعود إلى الكلية", "Unbehandelt steigen die Keime über den Harnleiter zur Niere (Pyelonephritis): Fieber, Flankenschmerz.", "دون علاج تصعد الجراثيم عبر الحالب إلى الكلية (التهاب حويضة وكلية): حمى وألم خاصرة.", ["bladder", "right-ureter", "right-kidney"]),
    S("Pflege", "التمريض", "Viel trinken, Intimhygiene, Wärme, Antibiotika nach Anordnung, Katheter nur wenn nötig.", "شرب كثير ونظافة المنطقة الحميمة وحرارة ومضاد حيوي حسب الأمر وقسطرة عند الضرورة فقط.", ["bladder", "urethra"]),
  ]),
  osteoporose: story("osteoporose", "Was passiert bei Osteoporose?", "ماذا يحدث في هشاشة العظام؟", I0, [
    S("Knochenschwund", "فقد العظم", "Der Abbau überwiegt den Aufbau (Östrogenmangel, Alter, Kortison); die Knochenmasse sinkt.", "يفوق الهدم البناء (نقص الإستروجين والعمر والكورتيزون)؛ وتقل كتلة العظم.", ["thoracic-spine", "lumbar-spine", "femur"]),
    S("Brüche", "الكسور", "Wirbel sinken ein, der Schenkelhals bricht schon bei Bagatellstürzen.", "تنهار الفقرات وينكسر عنق الفخذ عند سقطات بسيطة.", ["lumbar-spine", "femur"]),
    S("Zeichen", "العلامات", "Rückenschmerz, Größenverlust, Rundrücken.", "ألم ظهر وفقدان الطول وتحدب.", ["thoracic-spine", "lumbar-spine"]),
    S("Pflege", "التمريض", "Sturzprophylaxe, Calcium und Vitamin D, Bewegung, Medikamente (Bisphosphonate) richtig einnehmen.", "وقاية من السقوط وكالسيوم وفيتامين د وحركة وتناول الأدوية (بيسفوسفونات) بشكل صحيح.", ["thoracic-spine", "lumbar-spine", "femur"]),
  ]),
  bandscheibe: story("bandscheibe", "Was passiert beim Bandscheibenvorfall?", "ماذا يحدث في انزلاق القرص؟", I0, [
    S("Verschleiß", "التآكل", "Der Faserring der Bandscheibe wird rissig.", "تتشقق الحلقة الليفية للقرص.", ["intervertebral-discs", "lumbar-spine"]),
    S("Vorfall", "الانزلاق", "Der Gallertkern tritt aus und drückt auf die Nervenwurzel.", "تخرج النواة الهلامية وتضغط على الجذر العصبي.", ["intervertebral-discs", "lumbar-spine"]),
    S("Zeichen", "العلامات", "Rückenschmerz mit Ausstrahlung ins Bein, Taubheit, Schwäche; bei Blasen- oder Mastdarmstörung sofort Arzt.", "ألم ظهر يمتد إلى الساق وخدر وضعف؛ وعند اضطراب المثانة أو المستقيم طبيب فوراً.", ["intervertebral-discs", "lumbar-spine", "sacrum"]),
  ]),
  anaemie: story("anaemie", "Was passiert bei der Anämie?", "ماذا يحدث في فقر الدم؟", I0, [
    S("Zu wenig Hämoglobin", "نقص الهيموغلوبين", "Das Knochenmark bildet zu wenig rote Blutkörperchen (Eisen-, B12-Mangel) oder es geht Blut verloren.", "ينتج نخاع العظم كريات حمراء قليلة (نقص حديد أو B12) أو يفقد الجسم دماً.", ["sternum-ribs", "vertebral-column", "pelvis", "femur-humerus"]),
    S("Zu wenig Sauerstoff", "نقص الأكسجين", "Das Blut transportiert weniger Sauerstoff: Blässe, Müdigkeit, Atemnot bei Belastung, schneller Puls.", "ينقل الدم أكسجيناً أقل: شحوب وتعب وضيق نفس عند الجهد وتسرع النبض.", ["sternum-ribs", "pelvis"]),
    S("Pflege", "التمريض", "Ursache klären, Eisen richtig einnehmen, Belastung dosieren, Sturzprophylaxe.", "معرفة السبب وتناول الحديد بشكل صحيح وتنظيم الجهد ووقاية من السقوط.", ["sternum-ribs", "vertebral-column", "pelvis", "femur-humerus"]),
  ]),
  mammakarzinom: story("mammakarzinom", "Was passiert beim Brustkrebs?", "ماذا يحدث في سرطان الثدي؟", I0, [
    S("Entstehung", "النشوء", "Zellen der Milchgänge oder Läppchen vermehren sich unkontrolliert; es entsteht ein Knoten, meist im oberen äußeren Quadranten.", "تتكاثر خلايا القنوات أو الفصيصات دون ضبط فتتكون عقدة، غالباً في الربع العلوي الخارجي.", ["tumor", "lobes"]),
    S("Wachstum", "النمو", "Der Tumor wächst in Gänge, Fettgewebe und Haut: Einziehung der Haut oder Brustwarze, Orangenhaut; er kann an der Brustwand fixieren.", "ينمو الورم في القنوات والدهن والجلد: انسحاب الجلد أو الحلمة وقشرة البرتقال؛ وقد يثبت على جدار الصدر.", ["tumor", "skin", "nipple"]),
    S("Lymphknoten", "العقد اللمفاوية", "Über die Lymphe erreichen Krebszellen zuerst die Achsellymphknoten; sie werden vergrößert und derb (Wächterlymphknoten wird bei der Operation untersucht).", "عبر اللمف تصل الخلايا السرطانية أولاً إلى عقد الإبط فتتضخم وتصلب (وتُفحص العقدة الحارسة أثناء العملية).", ["tumor", "metastatic-nodes"]),
    S("Pflege", "التمريض", "Nach Operation Wunde und Drainage beobachten, Armlymphödem vorbeugen (Verletzungen und Spritzen am Arm vermeiden), psychisch begleiten, zur Früherkennung ermutigen.", "بعد العملية مراقبة الجرح والمصرف والوقاية من الوذمة اللمفية (تجنب الجروح والحقن في الذراع) والدعم النفسي والتشجيع على الكشف المبكر.", ["metastatic-nodes", "axillary-nodes"]),
  ]),
};
function AORTA_IDS() { return ["ascending-aorta", "aortic-arch", "descending-thoracic-aorta"]; }
