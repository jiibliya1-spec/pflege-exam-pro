/**
 * Atlas Bewegungsapparat: Beschriftungen zu den 58 benannten Strukturen des BodyParts3D-Modells (public/models/musculoskeletal.glb).
 * Rechte und linke Seite sind je Struktur zusammengefasst. Definition: tools/defs/musculoskeletal.json.
 * Nicht im Modell: Steißbein, Gelenkkapseln, Bänder (bis auf Tractus iliotibialis, Achillessehne), Gelenkknorpel, Menisken, Knochenmark,
 * Latissimus, Rectus abdominis, innere Bauchmuskeln, Kaumuskeln und Gesichtsmuskeln, Hand- und Fußbinnenmuskeln (Auswahl, aus Gründen der Dateigröße).
 * Einige Röhrenknochen sind im Quellmodell stark vereinfacht (niedrige Polygonzahl).
 */
import type { AtlasConfig, AtlasItem, AtlasLayer, AtlasPath, AtlasQuiz } from "./atlasTypes";

export const MUSCULO_LAYERS: AtlasLayer[] = [
  { id: "bone-axial", de: "Achsenskelett (Schädel, Wirbelsäule, Brustkorb)", ar: "الهيكل المحوري (الجمجمة والعمود الفقري والقفص)", en: "Axial skeleton", fr: "Squelette axial", tr: "Eksenel iskelet" },
  { id: "disc", de: "Bandscheiben", ar: "الأقراص بين الفقرات", en: "Intervertebral discs", fr: "Disques intervertébraux", tr: "Disk" },
  { id: "bone-arm", de: "Knochen der Arme und des Schultergürtels", ar: "عظام الذراع والحزام الكتفي", en: "Arm and shoulder bones", fr: "Os du membre supérieur", tr: "Kol kemikleri" },
  { id: "bone-leg", de: "Knochen von Becken und Beinen", ar: "عظام الحوض والساق", en: "Pelvis and leg bones", fr: "Os du bassin et du membre inférieur", tr: "Pelvis ve bacak kemikleri" },
  { id: "muscle-trunk", de: "Muskeln von Rumpf, Rücken und Hals", ar: "عضلات الجذع والظهر والعنق", en: "Trunk, back and neck muscles", fr: "Muscles du tronc", tr: "Gövde kasları" },
  { id: "muscle-arm", de: "Muskeln von Schulter und Arm", ar: "عضلات الكتف والذراع", en: "Shoulder and arm muscles", fr: "Muscles de l'épaule et du bras", tr: "Omuz ve kol kasları" },
  { id: "muscle-leg", de: "Muskeln von Hüfte und Bein", ar: "عضلات الورك والساق", en: "Hip and leg muscles", fr: "Muscles de la hanche et de la jambe", tr: "Kalça ve bacak kasları" },
  { id: "skin", de: "Hautkontur (Orientierung)", ar: "حدود الجلد (للتوجيه)", en: "Skin outline", fr: "Contour cutané", tr: "Deri hatları" },
];

type It = [string, string, string, string, string, string, string, [string, string]?];
const I = (a: It): AtlasItem => ({ de: a[0], la: a[1], ar: a[2], fn: [a[3], a[4]], kl: [a[5], a[6]], ...(a[7] ? { note: a[7] } : {}) });
const PAIR: [string, string] = ["Rechte und linke Seite sind im Modell zu einer Struktur zusammengefasst.", "الجانبان الأيمن والأيسر مدمجان في بنية واحدة."];
const LOW: [string, string] = ["Rechte und linke Seite zusammengefasst; die Röhrenknochen sind im Quellmodell stark vereinfacht (grobes Netz), Details wie Gelenkflächen fehlen.", "الجانبان مدمجان؛ العظام الطويلة مبسطة جداً في النموذج المصدر (شبكة خشنة) وتفاصيل مثل الأسطح المفصلية غير موجودة."];

const items: Record<string, AtlasItem> = {
  skull: I(["Schädel (ohne Unterkiefer)", "Cranium (Os frontale, parietale, occipitale, temporale, sphenoidale, ethmoidale; Maxilla, Os zygomaticum, nasale, palatinum, Vomer)", "الجمجمة (دون الفك السفلي)",
    "Schützt Gehirn und Sinnesorgane. Die Schädelknochen sind durch Nähte (Suturae) fest verbunden; beim Neugeborenen sind sie durch Fontanellen noch beweglich.", "تحمي الدماغ وأعضاء الحس. عظام الجمجمة متصلة بدرزات ثابتة؛ وعند حديثي الولادة تكون متحركة بسبب اليافوخ.",
    "Schädelbasisfraktur: Brillenhämatom, Liquor- oder Blutaustritt aus Nase oder Ohr. Schädel-Hirn-Trauma: Bewusstsein, Pupillen, Erbrechen beobachten. Beim Säugling Fontanelle tasten: eingesunken = Flüssigkeitsmangel, vorgewölbt = Hirndruck.", "كسر قاعدة الجمجمة: كدمة حول العينين وخروج سائل أو دم من الأنف أو الأذن. رض الرأس: مراقبة الوعي والحدقتين والقيء. عند الرضيع تُلمس اليافوخ: غائر = نقص السوائل، بارز = ارتفاع الضغط داخل الجمجمة.", PAIR]),
  mandible: I(["Unterkiefer", "Mandibula", "الفك السفلي",
    "Einziger beweglicher Schädelknochen; er bildet mit dem Schläfenbein das Kiefergelenk für Kauen und Sprechen.", "العظم المتحرك الوحيد في الجمجمة؛ ويشكل مع العظم الصدغي المفصل الفكي للمضغ والكلام.",
    "Kieferluxation oder -fraktur erschwert Kauen, Sprechen und Atmen. Pflege: Atemwege sichern, weiche oder flüssige Kost, Mundpflege, Schwellung kühlen nach Anordnung.", "خلع أو كسر الفك يصعّب المضغ والكلام والتنفس. التمريض: تأمين المجرى الهوائي وغذاء ليّن أو سائل والعناية بالفم وتبريد التورم حسب الأمر.", undefined]),
  "cervical-spine": I(["Halswirbelsäule (C1 bis C7)", "Vertebrae cervicales (Atlas, Axis)", "العمود الفقري العنقي (C1 إلى C7)",
    "Trägt den Kopf und ist der beweglichste Abschnitt. Der Atlas trägt den Schädel (Nicken), der Axis ermöglicht das Drehen des Kopfes.", "يحمل الرأس وهو أكثر الأجزاء حركة. الأطلس يحمل الجمجمة (الإيماء) والمحور يسمح بتدوير الرأس.",
    "Bei Unfällen mit Verdacht auf Halswirbelverletzung: Kopf und Hals in Neutralstellung halten, Halskrause, keine Bewegung, in Gesprächen am Notfallort wach halten. Schleudertrauma: Schmerz, Bewegungseinschränkung beobachten. Hohe Querschnittlähmung gefährdet die Atmung.", "عند الشك بإصابة عنقية: تثبيت الرأس والعنق في الوضع المحايد وطوق عنقي وعدم الحركة. إصابة السوط: مراقبة الألم وتحدد الحركة. والشلل العلوي يهدد التنفس.", undefined]),
  "thoracic-spine": I(["Brustwirbelsäule (Th1 bis Th12)", "Vertebrae thoracicae", "العمود الفقري الصدري (T1 إلى T12)",
    "Zwölf Wirbel, an denen die Rippen ansetzen; stabil, wenig beweglich, bildet die hintere Wand des Brustkorbs. Sie bildet eine nach hinten gewölbte Krümmung (Kyphose).", "اثنتا عشرة فقرة ترتبط بها الأضلاع؛ ثابتة قليلة الحركة وتشكل الجدار الخلفي للقفص. وتشكل انحناءً للخلف (حدب).",
    "Osteoporotische Wirbelkörperfrakturen führen zum Rundrücken (Witwenbuckel) und Größenverlust. Pflege: Schmerzen erfassen, schonende Mobilisation, Sturzprophylaxe, Hautinspektion, Atemübungen wegen eingeschränkter Atemtiefe.", "كسور الفقرات الناتجة عن هشاشة العظام تسبب حدباً وفقدان الطول. التمريض: تقييم الألم وتحريك لطيف والوقاية من السقوط وفحص الجلد وتمارين التنفس لأن عمق التنفس يقل.", undefined]),
  "lumbar-spine": I(["Lendenwirbelsäule (L1 bis L5)", "Vertebrae lumbales", "العمود الفقري القطني (L1 إلى L5)",
    "Fünf große Wirbel, die den größten Teil der Körperlast tragen; nach vorn gewölbt (Lordose). Das Rückenmark endet auf Höhe L1/L2; darunter verlaufen die Nervenwurzeln (Cauda equina).", "خمس فقرات كبيرة تتحمل معظم وزن الجسم؛ منحنية للأمام (قعس). ينتهي النخاع الشوكي عند L1/L2 وتحته تسير الجذور العصبية (ذيل الفرس).",
    "Häufigster Ort für Rückenschmerz und Bandscheibenvorfall (L4/L5, L5/S1). Cauda-equina-Syndrom (Taubheit im Reithosenbereich, Blasen- und Mastdarmstörung, Lähmung) ist ein Notfall. Pflege: rückengerechtes Arbeiten, Kinästhetik, Hebe- und Transferhilfen.", "أكثر موضع لألم الظهر وانزلاق الغضروف (L4/L5 وL5/S1). ومتلازمة ذيل الفرس (خدر منطقة السرج واضطراب المثانة والمستقيم وضعف) حالة طارئة. التمريض: العمل بوضعية صحيحة للظهر والحركية وأدوات الرفع والنقل.", undefined]),
  sacrum: I(["Kreuzbein", "Os sacrum", "العجز",
    "Fünf verwachsene Wirbel; bildet mit den Hüftbeinen den Beckenring und überträgt das Körpergewicht auf die Beine. Das Steißbein ist im Modell nicht enthalten.", "خمس فقرات ملتحمة؛ يشكل مع عظام الورك حلقة الحوض وينقل وزن الجسم إلى الساقين. وعظم العصعص غير موجود في النموذج.",
    "Typischer Ort für Druckgeschwüre (Dekubitus) in Rückenlage. Pflege: Druckentlastung, Lagerungsplan (30-Grad-Schräglagerung), Hautbeobachtung, Mikrolagerung, Hilfsmittel nach Risikoeinschätzung (Braden).", "موضع شائع لقرح الضغط عند الاستلقاء على الظهر. التمريض: تخفيف الضغط وجدول تغيير الوضعية (وضعية مائلة 30 درجة) وملاحظة الجلد ووسائل مساعدة حسب تقييم الخطر (برادن).", undefined]),
  ribs: I(["Rippen (12 Paare)", "Costae I–XII", "الأضلاع (12 زوجاً)",
    "Schützen Herz, Lunge, Leber und Milz und bewegen sich bei der Atmung. Sieben Paare echter Rippen, drei Paare falscher, zwei freie Rippen.", "تحمي القلب والرئتين والكبد والطحال وتتحرك مع التنفس. سبعة أزواج حقيقية وثلاثة كاذبة وزوجان عائمان.",
    "Rippenfrakturen schmerzen beim Atmen und führen zu Schonatmung und Pneumonie. Mehrfachbrüche: Gefahr für Lungenkontusion und Pneumothorax. Pflege: Schmerztherapie, Atemtraining, Oberkörper hoch, Atemfrequenz und Sauerstoffsättigung beobachten.", "كسور الأضلاع مؤلمة عند التنفس وتؤدي إلى تنفس سطحي والتهاب رئوي. تعدد الكسور خطر على الرئة واسترواح الصدر. التمريض: العلاج الألمي وتدريب التنفس ورفع الجزء العلوي ومراقبة معدل التنفس والتشبع.", PAIR]),
  "costal-cartilages": I(["Rippenknorpel", "Cartilagines costales", "غضاريف الأضلاع",
    "Verbinden die Rippen mit dem Brustbein und machen den Brustkorb elastisch für die Atmung.", "تصل الأضلاع بالقص وتجعل القفص مرناً للتنفس.",
    "Beim Herzdruckmassage oft Rippen- oder Knorpelbrüche, die dennoch hingenommen werden müssen. Hände auf der Mitte des Brustbeins, Tiefe etwa 5 bis 6 cm bei Erwachsenen.", "في الإنعاش القلبي كثيراً ما تحدث كسور في الأضلاع أو الغضاريف ويجب مع ذلك الاستمرار. اليدان على منتصف القص وبعمق نحو 5 إلى 6 سم عند البالغين.", PAIR]),
  sternum: I(["Brustbein", "Sternum (Manubrium, Corpus, Processus xiphoideus)", "عظم القص",
    "Flacher Knochen in der Mitte des Brustkorbs aus Handgriff, Körper und Schwertfortsatz; er schützt das Herz und gibt den Rippen Halt.", "عظم مسطح في وسط القفص من المقبض والجسم والناتئ الخنجري؛ يحمي القلب ويثبت الأضلاع.",
    "Druckpunkt der Reanimation (untere Brustbeinhälfte). Sternumpunktion zur Knochenmarkentnahme. Nach Herzoperation über das Brustbein: Sternumstabilität, Wundheilung, Husten mit Kissen stützen.", "موضع الضغط في الإنعاش (النصف السفلي من القص). بزل القص لأخذ نخاع العظم. بعد جراحة القلب عبر القص: ثبات القص والتئام الجرح ودعم السعال بوسادة.", undefined]),
  "intervertebral-discs": I(["Bandscheiben", "Disci intervertebrales", "الأقراص بين الفقرات",
    "Stoßdämpfer zwischen den Wirbelkörpern aus Faserring und Gallertkern; sie ermöglichen Beweglichkeit und federn Belastung ab.", "ماصات صدمات بين أجسام الفقرات من حلقة ليفية ونواة هلامية؛ تتيح الحركة وتخفف الحمل.",
    "Bandscheibenvorfall: Kern drückt auf Nervenwurzel (Ischialgie: Schmerz ins Bein, Taubheit, Kraftverlust). Pflege: Schmerztherapie, Stufenlagerung, schmerzorientierte Mobilisation, Beobachtung auf Lähmung, Blasen- und Mastdarmstörung. Mit dem Alter verlieren die Scheiben Wasser.", "الانزلاق الغضروفي: تضغط النواة على الجذر العصبي (عرق النسا: ألم نحو الساق وخدر وضعف). التمريض: العلاج الألمي ووضعية الساقين المرفوعتين وتحريك حسب الألم ومراقبة الشلل واضطراب المثانة والمستقيم. ومع العمر تفقد الأقراص الماء.", ["Im Modell sind die Scheiben als Körper aus dem Quellmodell enthalten; Faserring und Gallertkern sind nicht getrennt.", "الأقراص موجودة كأجسام من النموذج المصدر؛ الحلقة الليفية والنواة الهلامية غير مفصولتين."]]),
  clavicle: I(["Schlüsselbein", "Clavicula", "الترقوة",
    "S-förmiger Knochen, der den Arm mit dem Rumpf verbindet; er hält die Schulter auf Abstand und überträgt Kräfte.", "عظم على شكل حرف S يربط الذراع بالجذع ويبعد الكتف ويحمل القوى.",
    "Häufig gebrochen (Sturz auf die Schulter). Rucksackverband oder Gilchristverband, Durchblutung, Motorik und Sensibilität der Hand prüfen.", "كثير الكسر (السقوط على الكتف). ضمادة الظهر أو الذراع وفحص الدورة والحركة والإحساس في اليد.", PAIR]),
  scapula: I(["Schulterblatt", "Scapula", "لوح الكتف",
    "Flacher Knochen am Rücken; bildet mit dem Oberarmkopf das Schultergelenk (Cavitas glenoidalis) und bietet Ansatz für viele Muskeln.", "عظم مسطح في الظهر؛ يشكل مع رأس العضد مفصل الكتف (الحفرة الحقانية) ويعطي مرتكزاً لعضلات كثيرة.",
    "Schulterluxation tritt oft nach vorn auf; danach ruhigstellen und Durchblutung, Motorik und Sensibilität prüfen. Bei bettlägerigen Patienten ist das Schulterblatt ein Druckpunkt.", "يحدث خلع الكتف غالباً للأمام؛ بعده التثبيت وفحص الدورة والحركة والإحساس. وهو نقطة ضغط عند المرضى طريحي الفراش.", PAIR]),
  humerus: I(["Oberarmknochen", "Humerus", "عظم العضد",
    "Langer Röhrenknochen des Oberarms mit Kopf (Schulter) und Gelenkrollen (Ellenbogen). Am chirurgischen Hals verläuft der Nervus axillaris, am Schaft der Nervus radialis.", "عظم طويل في العضد برأس (الكتف) وبكرة (المرفق). يمر العصب الإبطي عند العنق الجراحي والعصب الكعبري عند الجسم.",
    "Subkapitale Fraktur beim älteren Menschen (Osteoporose, Sturz). Schaftbruch kann den Nervus radialis schädigen (Fallhand). Pflege: Ruhigstellung, Hochlagern, Durchblutung, Motorik, Sensibilität prüfen.", "كسر تحت الرأس عند كبار السن (هشاشة وسقوط). وكسر الجسم قد يؤذي العصب الكعبري (يد متدلية). التمريض: التثبيت والرفع وفحص الدورة والحركة والإحساس.", LOW]),
  radius: I(["Speiche", "Radius", "الكعبرة",
    "Auf der Daumenseite des Unterarms; dreht sich um die Elle (Supination und Pronation) und trägt den Großteil der Handgelenkbelastung.", "في جهة الإبهام من الساعد؛ تدور حول الزند (استلقاء وانكباب) وتحمل معظم حمل الرسغ.",
    "Distale Radiusfraktur ist beim Sturz auf die ausgestreckte Hand die häufigste Fraktur. Gipskontrolle: Schwellung, Schmerz, Farbe, Wärme, Gefühl, Bewegung der Finger; Hand hoch lagern; bei starker Schmerzzunahme Arzt (Kompartment).", "كسر الكعبرة البعيد هو الأشيع عند السقوط على اليد الممدودة. مراقبة الجبيرة: تورم وألم ولون ودفء وإحساس وحركة الأصابع؛ رفع اليد؛ وعند زيادة الألم الشديد إبلاغ الطبيب (متلازمة الحجرات).", LOW]),
  ulna: I(["Elle", "Ulna", "الزند",
    "Auf der Kleinfingerseite des Unterarms; bildet mit dem Oberarm das Ellenbogengelenk (Olecranon als Ellenbogenspitze).", "في جهة الخنصر من الساعد؛ يشكل مع العضد مفصل المرفق (الزج هو رأس المرفق).",
    "Am Ellenbogen läuft der Nervus ulnaris („Musikantenknochen“): Druck verursacht Kribbeln im Klein- und Ringfinger. Lagerung: Ellenbogen polstern, nicht dauerhaft aufstützen.", "عند المرفق يمر العصب الزندي («عظم الفكاهة»): الضغط يسبب وخزاً في الخنصر والبنصر. التمريض: تبطين المرفق وعدم الاتكاء المستمر عليه.", LOW]),
  carpals: I(["Handwurzelknochen", "Ossa carpi (Scaphoideum, Lunatum, Triquetrum, Pisiforme, Trapezium, Trapezoideum, Capitatum, Hamatum)", "عظام الرسغ",
    "Acht kleine Knochen in zwei Reihen; sie bilden das Handgelenk und geben Beweglichkeit und Stabilität.", "ثماني عظام صغيرة في صفين؛ تشكل الرسغ وتمنح الحركة والثبات.",
    "Das Kahnbein (Scaphoid) bricht häufig bei Sturz auf die Hand; Schmerz in der Tabatière, oft erst im Röntgen sichtbar, schlechte Durchblutung führt zu Pseudarthrose. Karpaltunnelsyndrom: Nervus medianus gedrückt, nächtliche Kribbelparästhesien.", "عظم الزورقي يُكسر كثيراً بالسقوط على اليد؛ ألم في الحفرة التشريحية وقد لا يظهر إلا لاحقاً بالأشعة، وضعف تروية الدم يؤدي إلى عدم الالتئام. متلازمة النفق الرسغي: ضغط على العصب المتوسط ووخز ليلي.", PAIR]),
  metacarpals: I(["Mittelhandknochen", "Ossa metacarpi I–V", "عظام المشط (اليد)",
    "Fünf Knochen, die Handwurzel und Fingerglieder verbinden; sie bilden die Hohlhand.", "خمس عظام تصل الرسغ بسلاميات الأصابع وتشكل راحة اليد.",
    "Boxerfraktur: Bruch des 5. Mittelhandknochens (Schlag). Ringe rechtzeitig abnehmen bei Handschwellung.", "كسر الملاكم: كسر عظم المشط الخامس (لكمة). إزالة الخواتم مبكراً عند تورم اليد.", PAIR]),
  "hand-phalanges": I(["Fingerknochen", "Phalanges manus", "سلاميات الأصابع",
    "Daumen: zwei Glieder, die anderen Finger: drei Glieder (Grund-, Mittel-, Endglied).", "الإبهام سلاميتان وبقية الأصابع ثلاث (قاعدية ووسطى وطرفية).",
    "Fingerkuppenverletzungen, Bandriss. Rheumatoide Arthritis: symmetrische Schwellung der Fingergelenke, Morgensteifigkeit. Pflege: Gelenkschutz, Wärme oder Kälte nach Phase, Hilfsmittel.", "إصابات أطراف الأصابع وتمزق الأربطة. التهاب المفاصل الروماتويدي: تورم متماثل في مفاصل الأصابع وتيبس صباحي. التمريض: حماية المفاصل وحرارة أو برودة حسب المرحلة ووسائل مساعدة.", PAIR]),
  "hip-bone": I(["Hüftbein", "Os coxae (Os ilium, ischii, pubis)", "عظم الورك",
    "Aus Darmbein, Sitzbein und Schambein verwachsen; bildet mit dem Kreuzbein den Beckenring und mit dem Oberschenkelkopf das Hüftgelenk (Acetabulum).", "يتكون من الحرقفة والإسك والعانة الملتحمة؛ يشكل مع العجز حلقة الحوض ومع رأس الفخذ مفصل الورك (الحُق).",
    "Beckenbrüche können lebensbedrohlich bluten. Bei Hüft-TEP: Luxationsprophylaxe (nicht über 90 Grad beugen, Beine nicht kreuzen, keine Innenrotation, Kissen zwischen den Beinen, erhöhter Sitz), Thromboseprophylaxe, frühe Mobilisation. Der Beckenkamm ist Ort für Knochenmarkpunktion.", "كسور الحوض قد تنزف نزفاً مهدداً للحياة. بعد استبدال الورك: الوقاية من الخلع (عدم الثني فوق 90 درجة وعدم تقاطع الساقين وعدم الدوران للداخل ووسادة بين الساقين ومقعد مرتفع) والوقاية من الجلطات والتحريك المبكر. ومن عُرف الحرقفة يؤخذ نخاع العظم.", PAIR]),
  femur: I(["Oberschenkelknochen", "Femur", "عظم الفخذ",
    "Längster und stärkster Knochen des Körpers. Kopf und Hals bilden das Hüftgelenk; die Kondylen bilden das Kniegelenk.", "أطول وأقوى عظم في الجسم. الرأس والعنق يشكلان مفصل الورك والقُنيّتان مفصل الركبة.",
    "Oberschenkelhalsfraktur beim älteren Menschen (Sturz, Osteoporose): Bein verkürzt und nach außen gedreht; Operation innerhalb von 24 bis 48 Stunden, danach frühe Mobilisation, Thrombose-, Dekubitus-, Pneumonie- und Delirprophylaxe. Der Blutverlust bei Schaftbruch kann groß sein.", "كسر عنق الفخذ عند كبار السن (سقوط وهشاشة): الساق قصيرة ومدارة للخارج؛ جراحة خلال 24 إلى 48 ساعة ثم تحريك مبكر والوقاية من الجلطات وقرح الضغط والالتهاب الرئوي والهذيان. وقد يكون النزف كبيراً في كسر الجسم.", LOW]),
  patella: I(["Kniescheibe", "Patella", "الرضفة",
    "Größtes Sesambein im Strecksehnenverlauf; verbessert den Hebel der Oberschenkelstrecker.", "أكبر عظم سمسمي في وتر الباسطة؛ يحسن رافعة عضلات الفخذ الباسطة.",
    "Kniescheibenluxation und -fraktur. Patellarsehnenreflex prüft den Nervus femoralis (L2 bis L4). Bei Gonarthrose: Schmerz beim Treppensteigen, Hilfsmittel.", "خلع وكسر الرضفة. منعكس الرضفة يختبر العصب الفخذي (L2 حتى L4). في خشونة الركبة: ألم عند صعود الدرج ووسائل مساعدة.", PAIR]),
  tibia: I(["Schienbein", "Tibia", "الظنبوب",
    "Tragender Knochen des Unterschenkels; bildet Kniegelenk und oberes Sprunggelenk (mediale Knöchel).", "العظم الحامل في الساق؛ يشكل مفصل الركبة ومفصل الكاحل (الكعب الإنسي).",
    "Offene Frakturen am Schienbein sind häufig, da kaum Weichteile bedecken; Infektionsgefahr. Kompartmentsyndrom nach Fraktur: unverhältnismäßige Schmerzen, Spannung, Gefühlsstörung, Notfall. Pflege: Hochlagern, Durchblutung, Motorik, Sensibilität kontrollieren.", "الكسور المفتوحة للظنبوب شائعة لقلة الأنسجة الرخوة؛ خطر العدوى. متلازمة الحجرات بعد الكسر: ألم شديد غير متناسب وتوتر واضطراب إحساس وهي حالة طارئة. التمريض: الرفع وفحص الدورة والحركة والإحساس.", LOW]),
  fibula: I(["Wadenbein", "Fibula", "الشظية",
    "Dünner Knochen neben dem Schienbein; trägt kaum Last, bildet den äußeren Knöchel und dient als Muskelansatz.", "عظم رفيع بجانب الظنبوب؛ لا يحمل وزناً يُذكر ويشكل الكعب الوحشي وهو مرتكز للعضلات.",
    "Außenknöchelbruch (Weber-Klassifikation). Am Wadenbeinköpfchen läuft der Nervus fibularis communis: Druck (Lagerung, Gips) führt zur Fußheberschwäche (Spitzfuß). Lagerung: Außenseite des Knies nicht dauerhaft drücken.", "كسر الكعب الوحشي (تصنيف ويبر). عند رأس الشظية يمر العصب الشظوي المشترك: الضغط (وضعية أو جبيرة) يسبب ضعف رفع القدم (قدم متدلية). التمريض: عدم الضغط الدائم على الجانب الخارجي للركبة.", LOW]),
  tarsals: I(["Fußwurzelknochen", "Ossa tarsi (Calcaneus, Talus, Os naviculare, Os cuboideum, Ossa cuneiformia)", "عظام رسغ القدم",
    "Sieben Knochen: Sprungbein (Talus) trägt das Gewicht des Beines, Fersenbein (Calcaneus) ist der größte und bildet die Ferse.", "سبع عظام: الكاحل (الرقبة) يحمل وزن الساق والعقب أكبرها ويشكل الكعب.",
    "Fersenbeinbruch nach Sturz aus der Höhe, oft zusammen mit Wirbelsäulenverletzung. Fersendekubitus ist häufig: Ferse freilagern, Hohllage. Diabetischer Fuß: tägliche Fußinspektion, Schuhwerk, keine Barfuß.", "كسر العقب بعد السقوط من ارتفاع وغالباً مع إصابة العمود الفقري. قرحة الكعب شائعة: ترك الكعب حراً ووضع مجوف. القدم السكرية: فحص يومي للقدم وحذاء مناسب وعدم المشي حافياً.", PAIR]),
  metatarsals: I(["Mittelfußknochen mit Sesambeinen", "Ossa metatarsi I–V, Ossa sesamoidea", "عظام مشط القدم مع العظام السمسمية",
    "Fünf Knochen bilden das Fußgewölbe; die Sesambeine unter dem Großzehengrundgelenk schützen die Beugesehne.", "خمس عظام تشكل قوس القدم؛ والعظام السمسمية تحت مفصل الإبهام تحمي وتر الثني.",
    "Ermüdungsbruch des 2. Mittelfußknochens (Marschfraktur). Fußfehlstellungen (Plattfuß, Spreizfuß) und Hallux valgus verursachen Schmerzen. Beim Diabetiker: Druckstellen vermeiden.", "كسر الإجهاد في عظم المشط الثاني (كسر المسير). تشوهات القدم (القدم المسطحة والمفلطحة) والإبهام الأروح تسبب ألماً. عند السكري: تجنب مواضع الضغط.", PAIR]),
  "toe-phalanges": I(["Zehenknochen", "Phalanges pedis", "سلاميات أصابع القدم",
    "Großzehe zwei Glieder, übrige Zehen drei; helfen beim Abrollen und Gleichgewicht.", "الإبهام سلاميتان وبقية الأصابع ثلاث؛ تساعد في الدحرجة والتوازن.",
    "Zehen sind bei Durchblutungsstörung und Diabetes besonders gefährdet (Ulkus, Nekrose). Zehenzwischenräume pflegen, Nägel gerade schneiden, Fußpflege.", "الأصابع أكثر عرضة للخطر عند اضطراب التروية والسكري (قرحة وتنخر). العناية بما بين الأصابع وقص الأظافر بشكل مستقيم والعناية بالقدم.", PAIR]),
  trapezius: I(["Trapezmuskel", "M. trapezius (Pars descendens, transversa, ascendens)", "العضلة شبه المنحرفة",
    "Hebt, senkt und zieht das Schulterblatt zur Wirbelsäule; der obere Teil hebt die Schulter, kräftigt den Nacken. Innerviert vom Nervus accessorius (XI).", "ترفع وتخفض وتشد لوح الكتف نحو العمود الفقري؛ جزؤها العلوي يرفع الكتف ويقوي العنق. يعصبها العصب الإضافي (XI).",
    "Nackenverspannung (Myogelose) bei Stress und Fehlhaltung. Ein Schaden am Nervus accessorius (z. B. Halslymphknoten-Operation) führt zu Schulterhochstand und Schwäche beim Heben. Pflege: Wärme, Lagerung, Entspannung, Haltung beachten.", "شدّ عضلات العنق عند الإجهاد وسوء الوضعية. وتلف العصب الإضافي (مثلاً بعد جراحة العقد اللمفاوية العنقية) يسبب سقوط الكتف وضعف الرفع. التمريض: حرارة ووضعية وارتخاء ومراعاة الوضعية.", PAIR]),
  rhomboids: I(["Rautenmuskeln", "Mm. rhomboidei major et minor", "العضلتان المعينيتان",
    "Ziehen das Schulterblatt zur Wirbelsäule und halten es am Brustkorb.", "تشدان لوح الكتف نحو العمود الفقري وتثبتانه على القفص.",
    "Schwäche führt zu abstehendem Schulterblatt (Scapula alata). Haltungsübungen im Sitzen unterstützen.", "ضعفهما يؤدي إلى بروز لوح الكتف. وتساعد تمارين الوضعية أثناء الجلوس.", PAIR]),
  "serratus-anterior": I(["Vorderer Sägemuskel", "M. serratus anterior", "العضلة المنشارية الأمامية",
    "Zieht das Schulterblatt nach vorn an den Brustkorb und dreht es beim Anheben des Arms über die Horizontale. Innerviert vom Nervus thoracicus longus.", "تشد لوح الكتف للأمام على القفص وتديره عند رفع الذراع فوق الأفقي. يعصبها العصب الصدري الطويل.",
    "Läsion des Nervus thoracicus longus (z. B. nach Brust- oder Achseloperation) ergibt eine abstehende Scapula. Nach Mastektomie mit Axilladissektion: Armlymphödem verhindern, kein Blutdruckmessen oder Blutabnahme am betroffenen Arm.", "إصابة العصب الصدري الطويل (مثلاً بعد جراحة الصدر أو الإبط) تسبب بروز لوح الكتف. بعد استئصال الثدي مع تجريف الإبط: منع الوذمة اللمفية في الذراع وعدم قياس الضغط أو سحب الدم من الذراع المصابة.", PAIR]),
  "pectoralis-major": I(["Großer Brustmuskel", "M. pectoralis major (Pars clavicularis, sternocostalis, abdominalis)", "العضلة الصدرية الكبرى",
    "Beugt, adduziert und dreht den Arm nach innen; kräftigster Armbeweger nach vorn, Hilfsmuskel bei der Einatmung.", "تثني وتقرّب وتدير الذراع للداخل؛ أقوى محرك للذراع للأمام وعضلة مساعدة في الشهيق.",
    "Dominiert die Brustform; nach Brustoperation oder Port-Anlage kann Narbenzug Schmerzen verursachen. Bei Verdacht auf Brustkorbwandschmerz auch an Muskelzerrung denken, kardiale Ursachen aber ausschließen.", "تحدد شكل الصدر؛ وبعد جراحة الثدي أو زرع المنفذ قد يسبب شد الندبة ألماً. عند ألم جدار الصدر يُفكَّر بالشد العضلي مع استبعاد الأسباب القلبية.", PAIR]),
  "pectoralis-minor": I(["Kleiner Brustmuskel", "M. pectoralis minor", "العضلة الصدرية الصغرى",
    "Zieht das Schulterblatt nach vorn und unten; Hilfsatemmuskel.", "تشد لوح الكتف للأمام وللأسفل؛ عضلة تنفس مساعدة.",
    "Kann bei Verkürzung Nerven und Gefäße der Achsel einengen (Thoracic-Outlet-Syndrom). Pflege: Haltung verbessern, Dehnung.", "قد يضغط تقصيرها على أعصاب وأوعية الإبط (متلازمة مخرج الصدر). التمريض: تحسين الوضعية والتمدد.", PAIR]),
  "erector-spinae": I(["Rückenstrecker", "M. erector spinae (Mm. iliocostales, longissimi, spinalis)", "العضلة الناصبة للعمود الفقري",
    "Längs der Wirbelsäule verlaufendes Muskelsystem; richtet den Rumpf auf, streckt und seitwärts beugt die Wirbelsäule.", "نظام عضلي على امتداد العمود الفقري؛ يقيم الجذع ويمدد العمود ويثنيه جانباً.",
    "Hauptmuskel des unteren Rückenschmerzes (Lumbago). Rückengerecht pflegen: Betthöhe anpassen, Last nah am Körper, Kinästhetik, Transferhilfen, Schutz vor Überlastung.", "العضلة الرئيسية في آلام أسفل الظهر. التمريض الصحيح للظهر: تعديل ارتفاع السرير وحمل الأشياء قريبة من الجسم والحركية وأدوات النقل والوقاية من الإجهاد.", PAIR]),
  diaphragm: I(["Zwerchfell", "Diaphragma", "الحجاب الحاجز",
    "Wichtigster Atemmuskel zwischen Brust- und Bauchhöhle; bei der Einatmung zieht es sich zusammen und flacht ab. Innerviert vom Nervus phrenicus (C3 bis C5, „C3, 4, 5 hält das Zwerchfell am Leben“).", "أهم عضلة للتنفس بين الصدر والبطن؛ ينقبض في الشهيق ويتسطح. يعصبه العصب الحجابي (C3 حتى C5).",
    "Hiatushernie, Schluckauf (Reizung des Nervus phrenicus). Bei hoher Halsmarkverletzung fällt die Atmung aus: Beatmung. Bauchlage und Aszites schränken die Zwerchfellbewegung ein; Oberkörperhochlagerung entlastet.", "فتق الحجاب والزغطة (تهيج العصب الحجابي). عند إصابة النخاع العنقي العليا يتوقف التنفس: تهوية صناعية. الاستلقاء على البطن والاستسقاء يحدّان من حركة الحجاب؛ ورفع الجزء العلوي يخفف.", ["Das Zwerchfell ist hier nur als Muskelplatte dargestellt; Sehnenzentrum und Durchtrittsstellen sind nicht getrennt.", "الحجاب معروض هنا كصفيحة عضلية؛ المركز الوتري وفتحات المرور غير مفصولة."]]),
  "psoas-iliacus": I(["Lendenmuskel und Darmbeinmuskel", "M. psoas major, M. iliacus (M. iliopsoas)", "العضلة القطنية والحرقفية",
    "Stärkster Hüftbeuger; zieht Oberschenkel nach vorn und richtet den Rumpf aus der Rückenlage auf.", "أقوى ثانٍ للورك؛ يشد الفخذ للأمام ويقيم الجذع من الاستلقاء.",
    "Bei Appendizitis oder Psoasabszess schmerzt das Anheben des Beins (Psoaszeichen). Eine Hüftbeugekontraktur entsteht bei langem Sitzen oder Liegen mit angewinkelter Hüfte: Lagerung, Streckübungen, Mobilisation.", "في التهاب الزائدة أو خراج القطنية يؤلم رفع الساق (علامة القطنية). وتقفع ثني الورك ينشأ بالجلوس أو الاستلقاء الطويل مع ثني الورك: وضعيات وتمارين مد وتحريك.", PAIR]),
  sternocleidomastoid: I(["Kopfwender", "M. sternocleidomastoideus", "العضلة القصية الترقوية الخشائية",
    "Dreht den Kopf zur Gegenseite und beugt ihn seitlich; beidseitig beugt sie den Hals oder hilft bei der Einatmung. Innerviert vom Nervus accessorius (XI).", "تدير الرأس للجهة المقابلة وتثنيه جانباً؛ وثنائياً تثني العنق أو تساعد في الشهيق. يعصبها العصب الإضافي (XI).",
    "Tastbare Landmarke für den zentralen Venenkatheter und die Halsvenenstauung. Hilfsatemmuskel bei Atemnot: sichtbar angespannt bei COPD und Asthma. Schiefhals (Torticollis).", "معلم ملموس للقسطرة الوريدية المركزية واحتقان أوردة العنق. عضلة تنفس مساعدة عند ضيق النفس: تظهر مشدودة في COPD والربو. الصعر.", PAIR]),
  scalenes: I(["Treppenmuskeln", "Mm. scaleni (anterior, medius, posterior)", "العضلات الأخمعية",
    "Heben die oberen Rippen bei der Einatmung (Atemhilfsmuskeln) und beugen den Hals zur Seite.", "ترفع الأضلاع العليا في الشهيق (عضلات تنفس مساعدة) وتثني العنق جانباً.",
    "Zwischen vorderer und mittlerer Skalenuslücke verlaufen Nervenplexus und Arterie (Skalenus-Syndrom). Bei Atemnot sichtbar aktiv: Anzeichen für starke Atemarbeit.", "بين الأخمعية الأمامية والوسطى يمر الضفيرة العصبية والشريان (متلازمة الأخمعية). تظهر نشطة عند ضيق النفس: علامة على جهد تنفسي كبير.", PAIR]),
  deltoid: I(["Deltamuskel", "M. deltoideus (Pars clavicularis, acromialis, spinalis)", "العضلة الدالية",
    "Rundet die Schulter; hebt den Arm seitlich (Abduktion) bis zur Horizontalen, vorderer Teil beugt, hinterer Teil streckt. Innerviert vom Nervus axillaris.", "تدور الكتف؛ ترفع الذراع جانباً حتى الأفقي والجزء الأمامي يثني والخلفي يمدد. يعصبها العصب الإبطي.",
    "Beliebter Ort für intramuskuläre Injektionen (kleine Volumina, bis etwa 2 ml); Injektion im oberen Drittel: Abstand zum Akromion etwa zwei Fingerbreit, Nervus axillaris und Arteria circumflexa schonen. Atrophie und Schwäche bei Axillarisläsion.", "موضع شائع للحقن العضلي (حجوم صغيرة حتى نحو 2 مل)؛ يُحقن في الثلث العلوي على بعد نحو إصبعين من النتوء الأخرمي مع تجنب العصب الإبطي والشريان. ضمور وضعف عند إصابة العصب.", PAIR]),
  "biceps-brachii": I(["Zweiköpfiger Oberarmmuskel", "M. biceps brachii (Caput longum et breve)", "العضلة ذات الرأسين العضدية",
    "Beugt den Ellenbogen und supiniert den Unterarm (Handfläche nach oben). Innerviert vom Nervus musculocutaneus.", "تثني المرفق وتبسط الساعد (راحة اليد للأعلى). يعصبها العصب العضلي الجلدي.",
    "Bizepssehnenreflex prüft C5/C6. Der lange Kopf reißt manchmal (Popeye-Muskel). Intramuskuläre Injektionen gehören nicht hierher.", "منعكس وتر ذات الرأسين يختبر C5/C6. وقد ينقطع الرأس الطويل (عضلة بوباي). ولا تُعطى الحقن العضلية هنا.", PAIR]),
  "triceps-brachii": I(["Dreiköpfiger Oberarmmuskel", "M. triceps brachii", "العضلة ثلاثية الرؤوس العضدية",
    "Streckt den Ellenbogen; wichtig beim Abstützen, Aufstehen aus dem Stuhl und Gehen mit Gehhilfen. Innerviert vom Nervus radialis.", "تمدد المرفق؛ مهمة للاستناد والنهوض من الكرسي والمشي بالمساعدات. يعصبها العصب الكعبري.",
    "Trizepssehnenreflex prüft C7/C8. Beim Training am Gehwagen oder Rollator wird der Trizeps stark beansprucht; bei Schwäche Hilfsmittel und Anleitung zum Transfer.", "منعكس ثلاثية الرؤوس يختبر C7/C8. تتعب عند التدرب على الووكر أو الروليتور؛ وعند الضعف: وسائل مساعدة وتدريب على النقل.", PAIR]),
  brachialis: I(["Oberarmmuskel (innerer Armbeuger) mit Hakenarmmuskel", "M. brachialis, M. coracobrachialis", "العضلة العضدية والعضلة الغرابية العضدية",
    "Brachialis ist der kräftigste reine Ellenbogenbeuger; der Coracobrachialis hebt und adduziert den Arm.", "العضدية أقوى ثانٍ بحت للمرفق؛ والغرابية العضدية ترفع الذراع وتقربه.",
    "Verletzungen des Nervus musculocutaneus führen zu Beugeschwäche. An der Oberarminnenseite verläuft die Arteria brachialis: Blutdruckmessung am Oberarm.", "إصابة العصب العضلي الجلدي تسبب ضعف الثني. وعلى الجانب الإنسي للعضد يمر الشريان العضدي: قياس الضغط على العضد.", PAIR]),
  "rotator-cuff": I(["Rotatorenmanschette", "M. supraspinatus, infraspinatus, teres minor, subscapularis", "الكفة المدورة",
    "Vier Muskeln zentrieren den Oberarmkopf in der Gelenkpfanne und stabilisieren das Schultergelenk; Supraspinatus hebt den Arm zu Beginn, Infraspinatus und Teres minor drehen nach außen, Subscapularis nach innen.", "أربع عضلات تثبت رأس العضد في الحُق وتستقر مفصل الكتف؛ فوق الشوكة تبدأ رفع الذراع وتحت الشوكة والمدورة الصغرى تديران للخارج وتحت اللوح للداخل.",
    "Schulterschmerz und Rotatorenmanschettenruptur (Impingement) im Alter, besonders bei Überkopfarbeit. Pflege: Schulter schonend lagern, nicht am betroffenen Arm ziehen (Transfer, Anziehen), passive und aktive Mobilisation nach ärztlichem Plan.", "ألم الكتف وتمزق الكفة المدورة (انحشار) عند التقدم في العمر وخاصة مع العمل فوق الرأس. التمريض: وضعية لطيفة للكتف وعدم شد الذراع المصابة (النقل والملابس) وتحريك سلبي ونشط حسب الخطة الطبية.", PAIR]),
  "teres-major": I(["Großer Rundmuskel", "M. teres major", "العضلة المدورة الكبيرة",
    "Zieht den Arm nach hinten und innen und dreht ihn nach innen.", "تسحب الذراع للخلف وللداخل وتديره للداخل.",
    "Hilft beim Aufstützen und Klimmzug. Bei Gehhilfen und Rollstuhlnutzung wird die Schultermuskulatur stark gefordert: auf Überlastung achten.", "تساعد في الارتكاز والشد. عند استخدام المشايات والكرسي المتحرك تتعب عضلات الكتف كثيراً: ملاحظة الإجهاد.", PAIR]),
  "forearm-flexors": I(["Unterarmbeuger", "Mm. flexores antebrachii (Flexor carpi radialis/ulnaris, digitorum superficialis/profundus, pollicis longus, palmaris longus, pronatores)", "عضلات ثني الساعد",
    "Beugen Handgelenk und Finger und pronieren den Unterarm; Nervus medianus und ulnaris. Sie ermöglichen Greifen und Faustschluss.", "تثني الرسغ والأصابع وتكب الساعد؛ العصب المتوسط والزندي. تتيح القبض وإغلاق القبضة.",
    "Hier verlaufen Sehnen, Nerven und Gefäße zur Hand. Beim Blutentnehmen und Venenpunktion in der Ellenbeuge: Nähe zur Arteria brachialis und zum Nervus medianus beachten. Handgreifkraft (Dynamometer) dient dem Assessment von Frailty.", "تمر هنا الأوتار والأعصاب والأوعية نحو اليد. عند سحب الدم أو وخز الوريد في ثنية المرفق: ملاحظة قرب الشريان العضدي والعصب المتوسط. وقوة القبض (قياس باليد) تقيّم الهزال.", PAIR]),
  "forearm-extensors": I(["Unterarmstrecker (mit Supinator und Anconeus)", "Mm. extensores antebrachii, M. supinator, M. anconeus, M. brachioradialis", "عضلات بسط الساعد",
    "Strecken Handgelenk und Finger, supinieren den Unterarm; Nervus radialis. Der Brachioradialis beugt den Ellenbogen in Neutralstellung.", "تمدد الرسغ والأصابع وتبسط الساعد؛ العصب الكعبري. والعضدية الكعبرية تثني المرفق في الوضع المحايد.",
    "Schädigung des Nervus radialis (z. B. durch Druck, Oberarmfraktur) führt zur Fallhand. Tennisellenbogen (Epicondylitis lateralis) durch Überlastung der Strecker. Hand in Funktionsstellung lagern.", "تلف العصب الكعبري (ضغط أو كسر عضد) يؤدي إلى اليد المتدلية. مرفق التنس بإجهاد الباسطات. وضع اليد في الوضعية الوظيفية.", PAIR]),
  "gluteus-maximus": I(["Großer Gesäßmuskel", "M. gluteus maximus", "العضلة الإلوية الكبيرة",
    "Kräftigster Streckmuskel der Hüfte; wichtig beim Aufstehen, Treppensteigen und Gehen bergauf. Nervus gluteus inferior.", "أقوى عضلة باسطة للورك؛ مهمة عند النهوض وصعود الدرج والمشي صعوداً. العصب الإلوي السفلي.",
    "Hauptdruckpunkt in Rückenlage und Sitzen: Dekubitus am Gesäß; Druckentlastung, Lagerungsplan, geeignete Sitzkissen. Intramuskuläre Injektion nur dorsogluteal im oberen äußeren Quadranten oder besser ventrogluteal.", "نقطة الضغط الرئيسية عند الاستلقاء والجلوس: قرح الضغط في الإلية؛ تخفيف الضغط وجدول وضعيات ووسائد مناسبة. الحقن العضلي في الربع العلوي الوحشي أو الأفضل الإلوي البطني.", PAIR]),
  "gluteus-medius-minimus": I(["Mittlerer und kleiner Gesäßmuskel", "M. gluteus medius et minimus", "العضلتان الإلويتان المتوسطة والصغرى",
    "Abduzieren das Bein und halten beim Gehen das Becken waagerecht, wenn ein Bein in der Luft ist. Nervus gluteus superior.", "تبعدان الساق وتحفظان الحوض أفقياً عند المشي حين تكون إحدى الساقين في الهواء. العصب الإلوي العلوي.",
    "Schwäche oder Schädigung führt zum Trendelenburg-Zeichen: Becken sinkt auf der gesunden Seite ab, Gangbild wackelt (Hüftschaukeln). Nach Hüft-TEP oder Fehlinjektion in den oberen inneren Quadranten kann der Nervus gluteus superior leiden.", "الضعف أو التلف يؤدي إلى علامة ترندلنبورغ: ينخفض الحوض على الجهة السليمة ويصير المشي متمايلاً. وبعد استبدال الورك أو الحقن الخاطئ في الربع العلوي الإنسي قد يتأذى العصب.", PAIR]),
  "deep-hip-rotators": I(["Tiefe Hüftmuskeln (Außenrotatoren)", "M. piriformis, gemelli, obturatorii, quadratus femoris", "العضلات العميقة للورك (المدورات للخارج)",
    "Drehen das Bein nach außen und stabilisieren das Hüftgelenk. Der Nervus ischiadicus verläuft unter dem Piriformis hindurch.", "تدير الساق للخارج وتثبت مفصل الورك. يمر العصب الوركي تحت الكمثرية.",
    "Piriformis-Syndrom: Reizung des Ischiasnervs mit Gesäßschmerz und Ausstrahlung ins Bein. Injektionsfehler im Gesäß können den Ischiasnerv schädigen (Fußheberlähmung): Injektion ventrogluteal bevorzugen.", "متلازمة الكمثرية: تهيج العصب الوركي مع ألم في الإلية وامتداد للساق. أخطاء الحقن في الإلية قد تؤذي العصب الوركي (شلل رفع القدم): يُفضّل الحقن في الموضع الإلوي البطني.", PAIR]),
  "tensor-fasciae-latae": I(["Schenkelbindenspanner mit Tractus iliotibialis", "M. tensor fasciae latae, Tractus iliotibialis", "الموتر للفافة العريضة والسبيل الحرقفي الظنبوبي",
    "Spannt die seitliche Oberschenkelbinde (Tractus iliotibialis) und stabilisiert Hüfte und Knie beim Stehen und Gehen.", "يشد الصفاق الجانبي للفخذ (السبيل الحرقفي الظنبوبي) ويثبت الورك والركبة في الوقوف والمشي.",
    "Läuferknie (ITB-Syndrom): Schmerz an der Knieaußenseite. Der Muskel liegt nahe dem ventrogluteal-Injektionsort (Crista-Hüftkopf-Dreieck): Palpation und Abstände beachten.", "ركبة العدّاء (متلازمة السبيل): ألم في الجانب الخارجي للركبة. العضلة قريبة من موضع الحقن الإلوي البطني: مراعاة اللمس والمسافات.", PAIR]),
  quadriceps: I(["Vierköpfiger Oberschenkelstrecker", "M. quadriceps femoris (Rectus femoris, Vastus medialis, intermedius, lateralis)", "العضلة رباعية الرؤوس الفخذية",
    "Streckt das Knie; unverzichtbar beim Aufstehen, Treppensteigen und Abbremsen des Gangs. Nervus femoralis.", "تمدد الركبة؛ لا غنى عنها عند النهوض وصعود الدرج وتخفيف المشي. العصب الفخذي.",
    "Bei längerer Bettruhe verliert sie schnell an Kraft: Sturzrisiko, früh mobilisieren. Quadrizepstraining nach Kniegelenkersatz. Intramuskuläre Injektion in den Vastus lateralis (seitlicher Oberschenkel) ist bei Kindern üblich.", "تفقد القوة بسرعة عند الراحة السريرية الطويلة: خطر السقوط والتحريك المبكر. تمارين الرباعية بعد استبدال الركبة. والحقن العضلي في الفخذ الوحشي شائع عند الأطفال.", PAIR]),
  sartorius: I(["Schneidermuskel", "M. sartorius", "العضلة الخياطية",
    "Längster Muskel des Körpers; beugt Hüfte und Knie und dreht das Bein nach außen (Schneidersitz).", "أطول عضلة في الجسم؛ تثني الورك والركبة وتدير الساق للخارج (جلسة الخياط).",
    "Landmarke in der Leistenregion (Femoraldreieck). Im Femoraldreieck verlaufen Nervus, Arteria und Vena femoralis: Leistenpunktion nur durch Geübte, danach Druckverband und Bettruhe.", "معلم في منطقة الأربية (مثلث الفخذ). في المثلث يمر العصب والشريان والوريد الفخذيان: بزل الأربية للمدربين فقط ثم ضمادة ضاغطة وراحة بالسرير.", PAIR]),
  hamstrings: I(["Hintere Oberschenkelmuskeln (Hamstrings)", "M. biceps femoris, semitendinosus, semimembranosus", "عضلات الفخذ الخلفية",
    "Strecken die Hüfte und beugen das Knie; Nervus ischiadicus. Wichtig beim Gehen und Rennen.", "تمدد الورك وتثني الركبة؛ العصب الوركي. مهمة في المشي والجري.",
    "Muskelzerrungen beim Sprinten. Verkürzung bei langem Sitzen und Liegen: Kontrakturprophylaxe, Dehnung. Bei Dekubitus und Lagerung: Rückseite des Oberschenkels beobachten.", "تمزقات العضلات عند العدو. التقصير عند الجلوس والاستلقاء الطويل: الوقاية من التقفع والتمدد. عند قرح الضغط والوضعيات: مراقبة الجانب الخلفي للفخذ.", PAIR]),
  adductors: I(["Adduktoren (Oberschenkelanzieher)", "Mm. adductores (magnus, longus, brevis, minimus), M. gracilis, M. pectineus", "العضلات المقربة للفخذ",
    "Ziehen die Beine zur Mitte (Adduktion) und stabilisieren das Becken; Nervus obturatorius.", "تقرب الساقين نحو الوسط وتثبت الحوض؛ العصب السدادي.",
    "Adduktorenkontraktur bei Spastik (z. B. nach Schlaganfall, Zerebralparese): Hautpflege in der Leiste, Lagerung mit Abduktionskeil, Hygiene. Leistenzerrung bei Sport.", "تقفع المقربات عند التشنج (مثلاً بعد السكتة أو الشلل الدماغي): العناية بجلد الأربية ووضعية الإبعاد بوسادة وصحة. تمزق الأربية في الرياضة.", PAIR]),
  "triceps-surae": I(["Wadenmuskel (dreiköpfig)", "M. triceps surae (M. gastrocnemius, M. soleus), M. plantaris", "عضلة السمانة (ثلاثية الرؤوس)",
    "Beugt den Fuß nach unten (Plantarflexion, Zehenstand) und das Knie; Nervus tibialis. Der Soleus wirkt zusätzlich als „Muskelpumpe“ für den venösen Rückstrom.", "تثني القدم للأسفل (الوقوف على أطراف الأصابع) والركبة؛ العصب الظنبوبي. والنعلية عضلة «مضخة» للعود الوريدي.",
    "Die Wadenmuskelpumpe verhindert Thrombosen: Kompressionsstrümpfe, Fußübungen, frühe Mobilisation. Wadenschmerz, Schwellung und Überwärmung können auf eine tiefe Beinvenenthrombose hinweisen, Arzt informieren; nicht massieren. Spitzfuß bei Bettlägerigkeit: Fußstütze, Lagerung.", "تمنع مضخة السمانة الجلطات: جوارب ضاغطة وتمارين القدم والتحريك المبكر. ألم السمانة والتورم وسخونة الجلد قد تدل على خثار الأوردة العميقة: إبلاغ الطبيب وعدم التدليك. القدم المتدلية عند طريحي الفراش: مسند قدم ووضعيات.", PAIR]),
  "calcaneal-tendon": I(["Achillessehne", "Tendo calcaneus (Achillessehne)", "وتر أخيل",
    "Dickste und stärkste Sehne des Körpers; überträgt die Kraft der Wadenmuskeln auf das Fersenbein.", "أسمك وأقوى وتر في الجسم؛ ينقل قوة عضلات السمانة إلى العقب.",
    "Achillessehnenriss (plötzlicher Schlag, „Peitschenknall“, Zehenstand unmöglich); Thompson-Test. Fluorchinolone erhöhen das Risiko für Sehnenschäden: bei Schmerz Arzt informieren.", "تمزق وتر أخيل (ضربة مفاجئة «كالسوط» وتعذر الوقوف على الأصابع)؛ اختبار طومسون. الفلوروكينولونات تزيد خطر تلف الأوتار: إبلاغ الطبيب عند الألم.", PAIR]),
  "tibialis-anterior": I(["Vorderer Schienbeinmuskel", "M. tibialis anterior", "العضلة الظنبوبية الأمامية",
    "Hebt den Fußrücken an (Dorsalextension) und hebt den inneren Fußrand; Nervus fibularis profundus. Verhindert das Schleifen der Zehen beim Gehen.", "ترفع ظهر القدم وتعلي الحافة الإنسية؛ العصب الشظوي العميق. تمنع جر الأصابع عند المشي.",
    "Ausfall führt zum Steppergang (Fußheberschwäche, Spitzfuß). Pflege: Peroneusschiene, Lagerung 90 Grad, Sturzprophylaxe.", "فقدانها يسبب المشي الدجاجي (ضعف رفع القدم وقدم متدلية). التمريض: جبيرة شظوية ووضعية 90 درجة والوقاية من السقوط.", PAIR]),
  "fibularis-group": I(["Wadenbeinmuskeln", "Mm. fibulares (longus, brevis, tertius)", "العضلات الشظوية",
    "Heben den äußeren Fußrand (Pronation) und stabilisieren den Fuß gegen Umknicken; Nervus fibularis superficialis.", "ترفع الحافة الوحشية للقدم وتثبت القدم ضد الالتواء؛ العصب الشظوي السطحي.",
    "Supinationstrauma (Umknicken) ist die häufigste Sportverletzung: PECH-Regel (Pause, Eis, Compression, Hochlagern) nach Anordnung. Bandrisse am Außenknöchel.", "التواء الكاحل أشيع إصابة رياضية: قاعدة الراحة والثلج والضغط والرفع حسب الأمر. تمزق الأربطة عند الكعب الوحشي.", PAIR]),
  "deep-lower-leg": I(["Tiefe Unterschenkelmuskeln (Beuger und Strecker)", "M. tibialis posterior, M. flexor digitorum longus, M. flexor hallucis longus, M. extensor digitorum longus, M. extensor hallucis longus, M. popliteus", "عضلات الساق العميقة",
    "Stabilisieren das Fußgewölbe, beugen und strecken Zehen und Fuß; der Popliteus entriegelt das gestreckte Knie. Nervus tibialis und fibularis.", "تثبت قوس القدم وتثني وتمدد الأصابع والقدم؛ والمأبضية تفك قفل الركبة الممدودة. العصب الظنبوبي والشظوي.",
    "Ein Kompartmentsyndrom des Unterschenkels bedroht diese Muskeln: starke Schmerzen, Spannung, Taubheit; Notfall. Beim Gipsverband Schmerzen und Gefühlsstörung ernst nehmen und melden.", "متلازمة حجرات الساق تهدد هذه العضلات: ألم شديد وتوتر وخدر وهي طارئة. مع الجبيرة يجب أخذ الألم واضطراب الإحساس على محمل الجد والإبلاغ.", PAIR]),
  skin: I(["Hautkontur (Orientierung)", "Cutis (Hautoberfläche)", "حدود الجلد (للتوجيه)",
    "Die durchsichtige Körperkontur zeigt die Lage der Knochen und Muskeln im Körper.", "حدود الجسم الشفافة تُظهر موضع العظام والعضلات في الجسم.",
    "Die Haut ist die erste Barriere und bei Bewegungseinschränkung besonders druckgefährdet (Sakrum, Fersen, Trochanter, Ellenbogen, Hinterkopf). Hautbeobachtung bei jeder Lagerung.", "الجلد هو الحاجز الأول وعند قلة الحركة يتعرض للضغط (العجز والكعبان والمدور الكبير والمرفق وخلف الرأس). مراقبة الجلد عند كل تغيير وضعية.", ["Äußere Hülle des Quellmodells; Hautschichten sind nicht dargestellt (siehe Atlas Haut).", "الغلاف الخارجي للنموذج؛ طبقات الجلد غير معروضة (انظر أطلس الجلد)."]]),
};
export const MUSCULO_ITEMS = items;

const R = (de: string, ar: string, en: string, fr: string, tr: string): [string, string, string, string, string] => [de, ar, en, fr, tr];
const St = (title: [string, string, string, string, string], text: [string, string], ids: string[], note?: [string, string]) => ({ title, text, ids, ...(note ? { note } : {}) });

export const MUSCULO_PATHS: AtlasPath[] = [
  {
    id: "spine",
    title: R("Wirbelsäule und Bandscheiben", "العمود الفقري والأقراص", "Spine and discs", "Colonne et disques", "Omurga ve diskler"),
    intro: ["Fünf Abschnitte, doppelte S-Form, Stoßdämpfer zwischen den Wirbeln.", "خمسة أقسام وشكل S مزدوج وماصات صدمات بين الفقرات."],
    steps: [
      St(R("Halswirbelsäule", "العنقي", "Cervical", "Cervicale", "Servikal"), ["Sieben Wirbel, sehr beweglich. Atlas und Axis ermöglichen Nicken und Drehen.", "سبع فقرات شديدة الحركة. الأطلس والمحور يتيحان الإيماء والدوران."], ["cervical-spine"]),
      St(R("Brustwirbelsäule und Rippen", "الصدري والأضلاع", "Thoracic and ribs", "Thoracique et côtes", "Torasik ve kaburgalar"), ["Zwölf Wirbel tragen die Rippen und bilden die Brustkyphose.", "اثنتا عشرة فقرة تحمل الأضلاع وتشكل الحدب الصدري."], ["thoracic-spine", "ribs", "sternum", "costal-cartilages"]),
      St(R("Lendenwirbelsäule", "القطني", "Lumbar", "Lombaire", "Lomber"), ["Fünf große Wirbel tragen die Last; häufigster Ort für Bandscheibenvorfall.", "خمس فقرات كبيرة تحمل الحمل؛ أشيع موضع للانزلاق الغضروفي."], ["lumbar-spine", "intervertebral-discs"]),
      St(R("Kreuzbein und Becken", "العجز والحوض", "Sacrum and pelvis", "Sacrum et bassin", "Sakrum ve pelvis"), ["Das Kreuzbein verbindet die Wirbelsäule mit dem Becken. Typischer Dekubitusort.", "يربط العجز العمود بالحوض. موضع نمطي لقرح الضغط."], ["sacrum", "hip-bone"]),
    ],
  },
  {
    id: "hip",
    title: R("Hüfte, Bein und Gehen", "الورك والساق والمشي", "Hip, leg and gait", "Hanche, jambe, marche", "Kalça, bacak ve yürüyüş"),
    intro: ["Von der Hüftpfanne zum Fuß: Knochen und Muskeln, die das Gehen ermöglichen.", "من الحُق إلى القدم: العظام والعضلات التي تتيح المشي."],
    steps: [
      St(R("Hüftgelenk", "مفصل الورك", "Hip joint", "Articulation de la hanche", "Kalça eklemi"), ["Der Oberschenkelkopf sitzt in der Hüftpfanne des Hüftbeins. Oberschenkelhalsfraktur und Hüft-TEP.", "يستقر رأس الفخذ في حُق عظم الورك. كسر عنق الفخذ واستبدال الورك."], ["hip-bone", "femur"], ["Gelenkknorpel und Kapsel fehlen im Modell.", "غضروف المفصل والمحفظة غير موجودين."]),
      St(R("Gesäß und Hüftmuskeln", "الإلية وعضلات الورك", "Gluteal and hip muscles", "Muscles fessiers", "Kalça kasları"), ["Gesäßmuskeln strecken und stabilisieren. Trendelenburg-Zeichen bei Ausfall.", "تمدد عضلات الإلية وتثبت. علامة ترندلنبورغ عند الفقد."], ["gluteus-maximus", "gluteus-medius-minimus", "deep-hip-rotators", "tensor-fasciae-latae", "psoas-iliacus"]),
      St(R("Oberschenkel", "الفخذ", "Thigh", "Cuisse", "Uyluk"), ["Vorne Strecker (Quadrizeps), hinten Beuger (Hamstrings), innen Adduktoren.", "أماماً الباسطات (الرباعية) وخلفاً الثانيات وداخلاً المقربات."], ["quadriceps", "hamstrings", "adductors", "sartorius", "patella"]),
      St(R("Unterschenkel", "الساق", "Lower leg", "Jambe", "Alt bacak"), ["Schienbein trägt, Wadenbein stabilisiert. Wade: Muskelpumpe gegen Thrombose.", "الظنبوب يحمل والشظية تثبت. السمانة: مضخة عضلية ضد الجلطات."], ["tibia", "fibula", "triceps-surae", "tibialis-anterior", "fibularis-group", "deep-lower-leg", "calcaneal-tendon"]),
      St(R("Fuß", "القدم", "Foot", "Pied", "Ayak"), ["Fußwurzel, Mittelfuß und Zehen bilden das Fußgewölbe. Fersen sind dekubitusgefährdet.", "عظام الرسغ والمشط والأصابع تشكل قوس القدم. الكعبان معرضان لقرح الضغط."], ["tarsals", "metatarsals", "toe-phalanges"]),
    ],
  },
  {
    id: "shoulder",
    title: R("Schulter und Arm", "الكتف والذراع", "Shoulder and arm", "Épaule et bras", "Omuz ve kol"),
    intro: ["Der Schultergürtel ist das beweglichste Gelenksystem, dafür instabil.", "الحزام الكتفي أكثر أجهزة المفاصل حركة لكنه غير مستقر."],
    steps: [
      St(R("Schultergürtel", "الحزام الكتفي", "Shoulder girdle", "Ceinture scapulaire", "Omuz kuşağı"), ["Schlüsselbein und Schulterblatt verbinden den Arm mit dem Rumpf.", "الترقوة ولوح الكتف يربطان الذراع بالجذع."], ["clavicle", "scapula", "humerus"]),
      St(R("Rotatorenmanschette und Deltamuskel", "الكفة المدورة والدالية", "Rotator cuff and deltoid", "Coiffe et deltoïde", "Rotator manşet ve deltoid"), ["Vier Muskeln zentrieren den Oberarmkopf; der Deltamuskel hebt den Arm und dient als Injektionsort.", "أربع عضلات تثبت رأس العضد؛ والدالية ترفع الذراع وتُستخدم للحقن."], ["rotator-cuff", "deltoid", "teres-major"]),
      St(R("Oberarm", "العضد", "Upper arm", "Bras", "Üst kol"), ["Beuger (Bizeps, Brachialis) vorne, Strecker (Trizeps) hinten.", "الثانيات (ذات الرأسين والعضدية) أماماً والباسطة (ثلاثية الرؤوس) خلفاً."], ["biceps-brachii", "brachialis", "triceps-brachii"]),
      St(R("Unterarm und Hand", "الساعد واليد", "Forearm and hand", "Avant-bras et main", "Ön kol ve el"), ["Speiche, Elle, Handwurzel, Mittelhand und Finger; Beuger und Strecker.", "الكعبرة والزند والرسغ والمشط والأصابع؛ ثانيات وباسطات."], ["radius", "ulna", "carpals", "metacarpals", "hand-phalanges", "forearm-flexors", "forearm-extensors"]),
    ],
  },
  {
    id: "breathing",
    title: R("Atemmuskeln und Brustkorb", "عضلات التنفس والقفص", "Breathing muscles and thorax", "Muscles respiratoires et thorax", "Solunum kasları ve toraks"),
    intro: ["Der Brustkorb arbeitet mit Zwerchfell und Hilfsmuskeln.", "يعمل القفص مع الحجاب والعضلات المساعدة."],
    steps: [
      St(R("Knöcherner Brustkorb", "القفص العظمي", "Bony thorax", "Thorax osseux", "Kemik toraks"), ["Rippen, Brustbein und Brustwirbelsäule schützen Herz und Lunge.", "الأضلاع والقص والعمود الصدري تحمي القلب والرئتين."], ["ribs", "sternum", "costal-cartilages", "thoracic-spine"]),
      St(R("Zwerchfell", "الحجاب الحاجز", "Diaphragm", "Diaphragme", "Diyafram"), ["Hauptatemmuskel; wird vom Nervus phrenicus aus C3 bis C5 versorgt.", "عضلة التنفس الرئيسية؛ يعصبها العصب الحجابي من C3 حتى C5."], ["diaphragm"]),
      St(R("Atemhilfsmuskeln", "عضلات التنفس المساعدة", "Accessory muscles", "Muscles accessoires", "Yardımcı solunum kasları"), ["Bei Atemnot arbeiten Treppenmuskeln, Kopfwender und Brustmuskeln mit: Zeichen starker Atemarbeit.", "عند ضيق النفس تعمل الأخمعية والقصية الترقوية والصدرية: علامة على جهد تنفسي كبير."], ["scalenes", "sternocleidomastoid", "pectoralis-minor", "serratus-anterior"]),
    ],
  },
];

export const MUSCULO_CARE = {
  diseases: ["Osteoporose und Frakturen (Oberschenkelhals, Wirbel, Radius)", "Arthrose und rheumatoide Arthritis", "Bandscheibenvorfall und Rückenschmerz", "Hüft- und Knie-TEP (Endoprothese)", "Sturzfolgen, Frakturheilung", "Kontrakturen, Sarkopenie", "Kompartmentsyndrom, Muskelzerrung, Sehnenriss", "Gicht"],
  symptoms: ["Schmerz bei Bewegung oder Belastung", "Schwellung, Hämatom, Fehlstellung", "Bewegungseinschränkung, Steifigkeit", "Kraftverlust, Muskelschwäche", "Taubheit, Kribbeln, Ausstrahlung ins Bein", "Verkürztes und nach außen gedrehtes Bein"],
  diagnostics: ["Inspektion, Palpation, Gelenkbeweglichkeit (Neutral-Null-Methode)", "Röntgen, CT, MRT", "Knochendichtemessung (DXA)", "Labor: CRP, BSG, Harnsäure, Calcium, Vitamin D", "Kraftgrade 0 bis 5, Reflexstatus", "Sturzrisiko-Assessment, Mobilitätstests (Timed Up and Go)"],
  actions: ["Frakturen: Ruhigstellung, Kühlung, Hochlagern, Schmerztherapie, Durchblutung, Motorik und Sensibilität (pDMS) regelmäßig kontrollieren", "Nach Hüft-TEP: Luxationsprophylaxe, Thromboseprophylaxe, frühe Mobilisation, Sturzprophylaxe", "Kontrakturprophylaxe: Lagerung in Funktionsstellung, Bewegungsübungen, Mobilisation", "Dekubitusprophylaxe: Risikoeinschätzung, Lagerungsplan, Druckentlastung, Hautbeobachtung", "Rückengerechtes Arbeiten, Kinästhetik, Hebe- und Transferhilfen, Hilfsmittelanleitung", "Sturzprophylaxe: Beleuchtung, Stolperfallen, geeignetes Schuhwerk, Gehhilfen, Medikamenten-Review", "Kalzium- und Vitamin-D-reiche Ernährung, Bewegung, Sonnenlicht", "Schmerzerfassung (NRS, BESD) und Dokumentation"],
  monitoring: ["pDMS: Puls, Durchblutung, Motorik, Sensibilität distal der Verletzung", "Schmerz (Intensität, Lage, Qualität), Schwellung, Hämatom, Wunde", "Gipsränder, Verband, Drainagen, Wundsekret", "Vitalzeichen, Zeichen für Thrombose, Embolie, Infektion", "Mobilität, Transfer, Gangbild, Sturzgefahr", "Hautzustand an Druckstellen, Ernährungszustand"],
  terms: [["Fraktur", "Knochenbruch"], ["Luxation", "Ausrenkung des Gelenks"], ["Distorsion", "Verstauchung"], ["Kontraktur", "Dauerhafte Gelenkversteifung durch Verkürzung"], ["Arthrose", "Gelenkverschleiß"], ["Arthritis", "Gelenkentzündung"], ["Osteoporose", "Verminderte Knochendichte"], ["Endoprothese (TEP)", "Künstlicher Gelenkersatz"], ["pDMS", "Puls, Durchblutung, Motorik, Sensibilität"], ["Kompartmentsyndrom", "Druckanstieg in einer Muskelloge"], ["Ischialgie", "Schmerz im Versorgungsgebiet des Ischiasnervs"], ["Trendelenburg-Zeichen", "Absinken des Beckens beim Einbeinstand"]] as [string, string][],
  lessons: ["osteoporose", "arthrose-gelenkersatz", "bandscheibe", "fraktur-grundlagen", "fraktur-komplikationen", "rheuma", "assess-dekubitus", "assess-sturz"],
};

const Q = (qd: string, qa: string, o: [string, string, string, string], wd: string, wa: string): AtlasQuiz => ({ q: [qd, qa], o, why: [wd, wa] });
export const MUSCULO_QUIZ: AtlasQuiz[] = [
  Q("Welches Zeichen spricht typischerweise für eine Oberschenkelhalsfraktur?", "أي علامة تدل عادة على كسر عنق الفخذ؟", ["Das Bein ist verkürzt und nach außen gedreht", "Das Bein ist verlängert und nach innen gedreht", "Das Bein ist rot und überwärmt ohne Fehlstellung", "Das Bein ist taub, aber normal positioniert"],
    "Bei der Schenkelhalsfraktur wird das Bein durch den Zug der Muskeln verkürzt und nach außen gedreht (Außenrotation); der Patient kann das Bein nicht anheben und hat Leisten- oder Hüftschmerz. Es ist ein Notfall mit operativer Versorgung innerhalb von 24 bis 48 Stunden. Richtige Antwort: verkürzt und außenrotiert.",
    "في كسر عنق الفخذ تقصر الساق بسبب شد العضلات وتُدار للخارج؛ لا يستطيع المريض رفعها ويشكو من ألم في الأربية أو الورك. وهي حالة طارئة تحتاج جراحة خلال 24 إلى 48 ساعة. الإجابة الصحيحة: قصيرة ومدارة للخارج."),
  Q("Was bedeutet pDMS bei der Kontrolle nach einer Fraktur oder einem Gips?", "ماذا يعني pDMS عند فحص المريض بعد الكسر أو الجبيرة؟", ["Puls, Durchblutung, Motorik, Sensibilität", "Pflege, Dokumentation, Medikamente, Schmerz", "Position, Drainage, Mobilisation, Schutz", "Puls, Druck, Medikation, Sauerstoff"],
    "pDMS fasst die Kontrolle der Extremität distal der Verletzung zusammen: Puls, Durchblutung (Farbe, Wärme, Kapillarfüllung), Motorik und Sensibilität. Veränderungen können auf ein Kompartmentsyndrom oder zu enge Verbände hinweisen und sind sofort zu melden. Richtige Antwort: Puls, Durchblutung, Motorik, Sensibilität.",
    "يلخص pDMS فحص الطرف أسفل الإصابة: النبض والتروية (اللون والدفء وإعادة الامتلاء) والحركة والإحساس. التغيرات قد تدل على متلازمة الحجرات أو ضمادة ضيقة ويجب إبلاغها فوراً. الإجابة الصحيحة: النبض والتروية والحركة والإحساس."),
  Q("Welche Maßnahme gehört zur Luxationsprophylaxe nach Hüft-TEP?", "أي إجراء من إجراءات الوقاية من الخلع بعد استبدال الورك؟", ["Hüfte nicht über 90 Grad beugen, Beine nicht kreuzen, Kissen zwischen die Beine, erhöhter Sitz", "Die Beine übereinanderschlagen zum Schutz", "Tiefes Hocken zum Aufstehen", "Das Bein nach innen drehen"],
    "Nach Hüft-TEP kann der künstliche Kopf luxieren, wenn die Hüfte zu stark gebeugt, nach innen gedreht oder die Beine gekreuzt werden. Daher Abduktionskissen, Toilettensitzerhöhung, hohe Stühle und Anleitung zum Anziehen mit Hilfsmitteln; die genauen Vorgaben richten sich nach Operationszugang und ärztlicher Anordnung. Richtige Antwort: nicht über 90 Grad beugen, Beine nicht kreuzen.",
    "بعد استبدال الورك قد يخلع الرأس الصناعي إذا ثُني الورك كثيراً أو دُوّر للداخل أو تقاطعت الساقان. لذلك وسادة بين الساقين ومقعد مرتفع للمرحاض وكراسي عالية وتعليم ارتداء الملابس بأدوات؛ والتعليمات الدقيقة حسب مدخل الجراحة وأمر الطبيب. الإجابة الصحيحة: عدم الثني فوق 90 درجة وعدم تقاطع الساقين."),
  Q("Welcher Muskel ist ein wichtiger Atemhilfsmuskel, der bei Atemnot sichtbar angespannt ist?", "أي عضلة تنفس مساعدة تظهر مشدودة عند ضيق النفس؟", ["Der Kopfwender (M. sternocleidomastoideus) und die Treppenmuskeln", "Der große Gesäßmuskel", "Der Wadenmuskel", "Der Deltamuskel"],
    "Bei starker Atemarbeit (COPD, Asthma, Pneumonie) setzen Patienten Kopfwender, Treppenmuskeln und Brustmuskeln ein, um den Brustkorb zu heben, und stützen die Arme auf (Kutschersitz). Das ist ein Zeichen für Atemnot und sollte dokumentiert und gemeldet werden. Richtige Antwort: Kopfwender und Treppenmuskeln.",
    "عند بذل جهد تنفسي كبير (COPD والربو والالتهاب الرئوي) يستخدم المرضى القصية الترقوية والأخمعية والصدرية لرفع القفص ويستندون بذراعيهم (جلسة الحوذي). هذه علامة لضيق النفس يجب توثيقها وإبلاغها. الإجابة الصحيحة: القصية الترقوية والأخمعية."),
  Q("Welche Region ist bei bettlägerigen Patienten in Rückenlage typisch dekubitusgefährdet?", "أي منطقة معرضة بشكل نمطي لقرح الضغط عند المريض طريح الفراش في وضع الاستلقاء على الظهر؟", ["Kreuzbein, Fersen, Hinterkopf, Ellenbogen und Schulterblätter", "Die Handinnenflächen", "Die Kniescheiben in Bauchlage", "Die Stirn"],
    "Dekubitus entsteht an Stellen, an denen Knochen dicht unter der Haut liegen und Druck herrscht: in Rückenlage Kreuzbein, Fersen, Hinterkopf, Ellenbogen, Schulterblätter; in Seitenlage Trochanter, Knöchel, Ohren. Prophylaxe: Risikoeinschätzung (Braden), Mikro- und Makrolagerung, Hautbeobachtung. Richtige Antwort: Kreuzbein, Fersen, Hinterkopf, Ellenbogen, Schulterblätter.",
    "تنشأ قرح الضغط حيث تقع العظام قريبة من الجلد ويوجد ضغط: في الاستلقاء على الظهر العجز والكعبان وخلف الرأس والمرفق ولوح الكتف؛ وفي الجانب المدور الكبير والكعب والأذنان. الوقاية: تقييم الخطر (برادن) وتغيير الوضعية وملاحظة الجلد. الإجابة الصحيحة: العجز والكعبان وخلف الرأس والمرفق ولوحا الكتف."),
  Q("Was ist ein typisches Zeichen eines Kompartmentsyndroms am Unterschenkel?", "ما العلامة النمطية لمتلازمة الحجرات في الساق؟", ["Unverhältnismäßig starke Schmerzen, Spannung, Gefühlsstörung trotz Gips oder Verband", "Nur leichte Schwellung ohne Schmerz", "Wärme, Rötung und Fieber allein", "Sofortige Besserung bei Hochlagerung"],
    "Nach Fraktur oder Gips steigt der Druck in der Muskelloge, drückt auf Gefäße und Nerven: starke Schmerzen, die auf Analgetika kaum ansprechen, gespannte Schwellung, Gefühlsstörung, später Lähmung; ein Notfall mit der Gefahr dauerhafter Muskel- und Nervenschäden. Verband lockern und sofort Arzt rufen. Richtige Antwort: unverhältnismäßiger Schmerz mit Spannung und Gefühlsstörung.",
    "بعد الكسر أو الجبيرة يرتفع الضغط داخل الحجرة العضلية ويضغط على الأوعية والأعصاب: ألم شديد لا يستجيب للمسكنات وتورم متوتر واضطراب الإحساس ثم شلل؛ حالة طارئة خطر تلف دائم للعضلات والأعصاب. يُرخى الضماد ويُستدعى الطبيب فوراً. الإجابة الصحيحة: ألم غير متناسب مع توتر واضطراب إحساس."),
  Q("Welche Veränderung der Wirbelsäule begünstigt Osteoporose besonders?", "أي تغير في العمود الفقري تسببه هشاشة العظام بشكل خاص؟", ["Wirbelkörperfrakturen mit Rundrücken und Größenverlust", "Verlängerung der Wirbelsäule", "Zunahme der Bandscheibenhöhe", "Bildung eines zusätzlichen Wirbels"],
    "Bei Osteoporose nimmt die Knochendichte ab; Wirbelkörper sintern ein, oft ohne starken Anlass. Folgen: Rundrücken (Witwenbuckel), Größenverlust, Rückenschmerzen, eingeschränkte Atmung. Prophylaxe: Calcium, Vitamin D, Bewegung, Sturzprophylaxe, Medikamente nach Verordnung. Richtige Antwort: Wirbelfrakturen mit Rundrücken.",
    "في هشاشة العظام تقل كثافة العظم؛ وتنضغط أجسام الفقرات غالباً بلا سبب قوي. النتائج: حدب (حدبة الأرملة) وفقدان الطول وآلام الظهر وتقييد التنفس. الوقاية: كالسيوم وفيتامين د وحركة والوقاية من السقوط وأدوية حسب الوصفة. الإجابة الصحيحة: كسور الفقرات مع الحدب."),
  Q("Welche Wirbelsäulenregion ist am häufigsten von Bandscheibenvorfällen betroffen?", "أي منطقة من العمود الفقري أكثر إصابة بالانزلاق الغضروفي؟", ["Lendenwirbelsäule (L4/L5, L5/S1)", "Brustwirbelsäule (Th3/Th4)", "Kreuzbein", "Steißbein"],
    "Die Lendenwirbelsäule trägt die meiste Last und ist deshalb am häufigsten betroffen, besonders L4/L5 und L5/S1. Folgen: Ischialgie mit Schmerz ins Bein, Taubheit, Kraftverlust. Bei Blasen- oder Mastdarmstörung und Reithosenanästhesie besteht ein Notfall (Cauda-equina-Syndrom). Richtige Antwort: Lendenwirbelsäule.",
    "العمود القطني يحمل أكبر حمل لذا هو الأكثر إصابة وخاصة L4/L5 وL5/S1. النتائج: عرق النسا مع ألم للساق وخدر وضعف. وعند اضطراب المثانة أو المستقيم وخدر منطقة السرج توجد حالة طارئة (متلازمة ذيل الفرس). الإجابة الصحيحة: العمود القطني."),
  Q("Welcher Nerv wird bei Druck am Wadenbeinköpfchen (z. B. Lagerung, Gips) geschädigt?", "أي عصب يتأذى بالضغط عند رأس الشظية (مثلاً بالوضعية أو الجبيرة)؟", ["Nervus fibularis communis (Folge: Fußheberschwäche, Steppergang)", "Nervus radialis", "Nervus phrenicus", "Nervus axillaris"],
    "Der Nervus fibularis communis verläuft dicht unter der Haut um das Wadenbeinköpfchen. Druck führt zu Fußheberschwäche (Spitzfuß, Steppergang) und Gefühlsstörung am Fußrücken. Prophylaxe: Außenseite des Knies polstern, keine zu engen Gipsränder, Beinlagerung beachten. Richtige Antwort: Nervus fibularis communis.",
    "يمر العصب الشظوي المشترك قرب سطح الجلد حول رأس الشظية. الضغط يسبب ضعف رفع القدم (قدم متدلية ومشي دجاجي) واضطراب إحساس ظهر القدم. الوقاية: تبطين الجانب الخارجي للركبة وعدم ضيق حواف الجبيرة ومراعاة وضعية الساق. الإجابة الصحيحة: العصب الشظوي المشترك."),
  Q("Wozu dient die Wadenmuskelpumpe?", "ما فائدة مضخة عضلات السمانة؟", ["Sie fördert den venösen Rückstrom und schützt vor Thrombose", "Sie erhöht den Blutdruck dauerhaft", "Sie verlängert das Bein", "Sie verhindert die Muskelbildung"],
    "Beim Gehen und Fußbewegen drücken die Wadenmuskeln die tiefen Beinvenen zusammen; Venenklappen sorgen dafür, dass das Blut Richtung Herz fließt. Bei Bettruhe fällt die Pumpe aus: Thrombosegefahr. Daher Mobilisation, Fußkreisen, Kompressionsstrümpfe nach Anordnung. Richtige Antwort: venöser Rückstrom, Thromboseschutz.",
    "عند المشي وتحريك القدم تضغط عضلات السمانة الأوردة العميقة؛ والصمامات تضمن اتجاه الدم نحو القلب. وعند الراحة بالفراش تتوقف المضخة: خطر الجلطة. لذلك التحريك ودوران القدمين وجوارب ضاغطة حسب الأمر. الإجابة الصحيحة: العود الوريدي والوقاية من الجلطات."),
  Q("Was bedeutet das Trendelenburg-Zeichen?", "ماذا تعني علامة ترندلنبورغ؟", ["Absinken des Beckens auf der Spielbeinseite beim Einbeinstand durch Schwäche der Gesäßmuskeln", "Hebung der Schulter bei Armheben", "Fußheberschwäche beim Gehen", "Schmerz beim Beugen des Nackens"],
    "Beim Stehen auf einem Bein halten die kleinen Gesäßmuskeln (Gluteus medius und minimus) das Becken. Fällt ihre Kraft aus oder ist der Nervus gluteus superior geschädigt, sinkt das Becken zur gesunden Seite (positives Trendelenburg-Zeichen), und beim Gehen entsteht ein Watschelgang. Richtige Antwort: Beckenabsinken beim Einbeinstand.",
    "عند الوقوف على ساق واحدة تثبت العضلتان الإلويتان المتوسطة والصغرى الحوض. وإذا فقدت قوتها أو أصيب العصب الإلوي العلوي ينخفض الحوض نحو الجهة السليمة (علامة إيجابية) ويصير المشي متمايلاً. الإجابة الصحيحة: انخفاض الحوض عند الوقوف على ساق واحدة."),
  Q("Warum wird die ventrogluteale Injektion der dorsogluteralen häufig vorgezogen?", "لماذا يُفضَّل غالباً الحقن الإلوي البطني على الإلوي الظهري؟", ["Es liegen weniger große Nerven und Gefäße im Injektionsgebiet", "Das Gesäß ist weicher", "Es ist immer schmerzfrei", "Es erlaubt größere Volumina ohne Risiko"],
    "Im ventroglutealen Gebiet (nach von Hochstetter) liegen kaum große Nerven und Gefäße; im dorsoglutealen Bereich kann der Nervus ischiadicus getroffen werden. Orientierung über Trochanter major, Spina iliaca anterior superior und Beckenkamm. Richtige Antwort: weniger Nerven und Gefäße, geringeres Verletzungsrisiko.",
    "في المنطقة الإلوية البطنية (حسب فون هوخشتيتر) لا توجد أعصاب وأوعية كبيرة تقريباً؛ أما في الإلوي الظهري فقد يُصاب العصب الوركي. التوجيه بالمدور الكبير والشوكة الحرقفية الأمامية العليا وعُرف الحرقفة. الإجابة الصحيحة: أعصاب وأوعية أقل وخطر إصابة أقل."),
];

export const MUSCULO_CFG: AtlasConfig = {
  key: "musculoskeletal",
  modelUrl: "/models/musculoskeletal.glb",
  items: MUSCULO_ITEMS,
  layers: MUSCULO_LAYERS,
  layerOf: (id) => {
    const layer = (MUSCULO_LAYER_OF as Record<string, string>)[id];
    return layer ?? "bone-axial";
  },
  color: (id, layer) => {
    switch (layer) {
      case "bone-axial": return /rib|costal|sternum/.test(id) ? 0xe9e2cf : /cervical/.test(id) ? 0xf0d9b5 : /thoracic/.test(id) ? 0xe6d3a8 : /lumbar/.test(id) ? 0xdcc08a : id === "sacrum" ? 0xc9a566 : 0xeee8d8;
      case "disc": return 0x4aa8c9;
      case "bone-arm": return 0xe8dfc8;
      case "bone-leg": return 0xe4d9bf;
      case "muscle-trunk": return /diaphragm/.test(id) ? 0xd9764a : 0xc05848;
      case "muscle-arm": return 0xb84a4a;
      case "muscle-leg": return id === "calcaneal-tendon" ? 0xf0ead8 : 0xb04c4c;
      default: return 0xd8c4b0;
    }
  },
  shell: ["skin"],
  hiddenLayers: ["muscle-trunk", "muscle-arm", "muscle-leg"],
  innerLabel: ["Haut durchsichtig", "الجلد شفاف", "Skin transparent", "Peau transparente", "Deri saydam"],
  careTitle: ["Pflege-Überblick Bewegungsapparat", "نظرة تمريضية على الجهاز الحركي", "Nursing overview: musculoskeletal system", "Aperçu infirmier : appareil locomoteur", "Hemşirelik özeti: hareket sistemi"],
  target: [0, 0, 0], shellOpacity: 0.12,
  dist: 3.1, minDist: 0.25, maxDist: 5, clipRange: 0.9, explodeScale: 0.8,
  care: MUSCULO_CARE,
  quiz: MUSCULO_QUIZ,
  paths: MUSCULO_PATHS,
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Referenzanatomie eines erwachsenen Mannes. Nicht im Modell oder nicht dargestellt: Steißbein, Gelenkkapseln, Gelenkknorpel, Menisken, die meisten Bänder und Sehnen, Knochenmark, Latissimus, gerader und innere Bauchmuskeln, Kau- und Mimikmuskeln, Hand- und Fußbinnenmuskeln. Einige Röhrenknochen sind im Quellmodell stark vereinfacht.", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). تشريح مرجعي لرجل بالغ. غير موجود أو غير معروض: العصعص وكبسولات المفاصل وغضاريف المفاصل والغضاريف الهلالية ومعظم الأربطة والأوتار ونخاع العظم والعضلة الظهرية العريضة والمستقيمة والبطنية الداخلية وعضلات المضغ والوجه والعضلات الصغيرة لليد والقدم. بعض العظام الطويلة مبسطة جداً في النموذج المصدر.", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (adapted). Reference anatomy of an adult male. Not in the model or not shown: coccyx, joint capsules, cartilage, menisci, most ligaments and tendons, bone marrow, latissimus, rectus abdominis, inner abdominal muscles, chewing and facial muscles, intrinsic hand and foot muscles. Some long bones are strongly simplified in the source.", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (adapté). Anatomie de référence d'un homme adulte. Absent : coccyx, capsules, cartilages, ménisques, plupart des ligaments et tendons, moelle, grand dorsal, droit de l'abdomen, muscles masticateurs et faciaux. Certains os longs sont très simplifiés.", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (uyarlandı). Yetişkin erkek referans anatomisi. Modelde yok: koksiks, eklem kapsülleri, kıkırdaklar, menisküsler, çoğu bağ ve tendon, kemik iliği, latissimus, rektus abdominis. Bazı uzun kemikler çok basitleştirilmiştir."],
};
const MUSCULO_LAYER_OF = (() => {
  const m: Record<string, string> = {};
  const add = (l: string, ids: string[]) => ids.forEach((i) => { m[i] = l; });
  add("bone-axial", ["skull", "mandible", "cervical-spine", "thoracic-spine", "lumbar-spine", "sacrum", "ribs", "costal-cartilages", "sternum"]);
  add("disc", ["intervertebral-discs"]);
  add("bone-arm", ["clavicle", "scapula", "humerus", "radius", "ulna", "carpals", "metacarpals", "hand-phalanges"]);
  add("bone-leg", ["hip-bone", "femur", "patella", "tibia", "fibula", "tarsals", "metatarsals", "toe-phalanges"]);
  add("muscle-trunk", ["trapezius", "rhomboids", "serratus-anterior", "pectoralis-major", "pectoralis-minor", "erector-spinae", "diaphragm", "psoas-iliacus", "sternocleidomastoid", "scalenes"]);
  add("muscle-arm", ["deltoid", "biceps-brachii", "triceps-brachii", "brachialis", "rotator-cuff", "teres-major", "forearm-flexors", "forearm-extensors"]);
  add("muscle-leg", ["gluteus-maximus", "gluteus-medius-minimus", "deep-hip-rotators", "tensor-fasciae-latae", "quadriceps", "sartorius", "hamstrings", "adductors", "triceps-surae", "calcaneal-tendon", "tibialis-anterior", "fibularis-group", "deep-lower-leg"]);
  add("skin", ["skin"]);
  return m;
})();
