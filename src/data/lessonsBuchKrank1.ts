/**
 * Zusätzliche Krankheitslehre (Herz, Atmung, Verdauung, Niere, Stoffwechsel).
 * Lernhilfe der App in einfachem Deutsch, in eigenen Worten zusammengefasst – KEIN Buchtext.
 * Quelle zum Nachlesen: Thieme „I care – PflegeExamen KOMPAKT“, Kap. 53–58 (Stand des Buchs: 2019).
 * Werte, Leitlinien und Medikamente ändern sich – immer aktuell prüfen. Anordnungen gehen vor.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const BUCH_KRANK_1: Lesson[] = [
  // ───────── Herz und Kreislauf ─────────
  {
    id: "khk", group: "krank", area: "herz", title: "Koronare Herzkrankheit (KHK) und Angina pectoris", emoji: "❤️‍🔥",
    ar: "مرض الشريان التاجي: تضيق الشرايين بسبب تصلبها. العَرَض الأساسي: الذبحة الصدرية (ألم وضيق في الصدر). مستقرة (عند الجهد) أو غير مستقرة (في الراحة، خطر الجلطة). الفحص الأدق: قسطرة الشرايين التاجية.",
    blocks: [
      B("Was ist das?", "Die Herzkranzgefäße sind durch Arteriosklerose verengt. Der Herzmuskel bekommt zu wenig Sauerstoff.", "Je nachdem, wie viele der 3 großen Gefäße betroffen sind: 1-, 2- oder 3-Gefäß-Erkrankung."),
      B("Risikofaktoren", "Fettstoffwechselstörung, Bluthochdruck, Diabetes, Rauchen, familiäre Veranlagung, männliches Geschlecht, Alter über 65."),
      B("Symptome: Angina pectoris", "Brustschmerz mit Ausstrahlung in linken Arm, Oberbauch oder Unterkiefer, Engegefühl, Luftnot, Angst, Schwitzen, Übelkeit.", "Stabil: nur bei Belastung, selten, spricht gut auf Nitro-Spray an.", "Instabil: neu, zunehmend oder in Ruhe. Das ist schon ein akutes Koronarsyndrom (ACS) und wird wie ein Herzinfarkt behandelt."),
      B("Akutes Koronarsyndrom (ACS)", "Umfasst instabile Angina pectoris, NSTEMI (Infarkt ohne ST-Hebung im EKG, nur über Labor und Symptome erkennbar) und STEMI (mit ST-Hebung).", "Wichtig: Troponin im Labor und EKG entscheiden."),
      B("Diagnostik und Therapie", "Aussagekräftigste Untersuchung: Koronarangiografie (Herzkatheter).", "Ziel: Risikofaktoren und Sauerstoffverbrauch senken.", "Bei Fortschreiten: Gefäße wieder öffnen mit PTCA (Ballon, oft mit Stent) oder Bypass-Operation."),
      B("Pflege", "Bei Brustschmerz: Arzt rufen, nicht allein lassen, Oberkörper hoch, Vitalzeichen kontrollieren.", "Nach Herzkatheter: Leiste und Druckverband kontrollieren, Fußpulse prüfen, engmaschig überwachen.", "Beraten zu Risikofaktoren und Notfallmedikamenten."),
    ],
  },
  {
    id: "herzrhythmus", group: "krank", area: "herz", title: "Herzrhythmusstörungen", emoji: "💓",
    ar: "اضطرابات نظم القلب: خلل في تكوين أو توصيل النبض. التحليل بحسب التردد والانتظام (نبض + تخطيط). العلاج: أدوية أو جهاز تنظيم النبض. التمريض: مراقبة العلامات الحيوية والوقاية من السقوط.",
    blocks: [
      B("Was steckt dahinter?", "Das Reizbildungs- oder Reizleitungssystem des Herzens arbeitet gestört.", "Beschrieben werden Frequenz (zu schnell oder zu langsam) und Rhythmus (regelmäßig oder unregelmäßig)."),
      B("Mögliche Folgen", "Schwindel und Synkope, Schlaganfall (z. B. bei Vorhofflimmern), Herz-Kreislauf-Stillstand."),
      B("Erkennen", "Pulsmessung und EKG. Bei unregelmäßigem Puls eine volle Minute zählen.", "Normal beim Erwachsenen: 60 bis 100 pro Minute. Unter 60 = Bradykardie, über 100 = Tachykardie."),
      B("Therapie und Pflege", "Medikamente oder Herzschrittmacher.", "Pflege: Vitalzeichen engmaschig kontrollieren, Sturzprophylaxe, bei Beschwerden Arzt informieren, Patienten über Schrittmacher und Medikamente beraten."),
    ],
  },
  {
    id: "herz-entzuendung", group: "krank", area: "herz", title: "Entzündungen des Herzens (Endokarditis, Myokarditis, Perikarditis)", emoji: "🔥",
    ar: "التهابات القلب: التهاب البطانة والصمامات (غالباً بالعقديات)، التهاب عضلة القلب والتهاب غشاء التامور (غالباً فيروسي). العلاج بالمضادات الحيوية للأولى، وأعراضي للأخريين.",
    blocks: [
      B("Endokarditis (Herzinnenhaut und Klappen)", "Ursache oft Streptokokken. Symptome: Abgeschlagenheit, hohes Fieber, Luftnot, Schlaganfallrisiko durch septische Embolien, Petechien (z. B. an den Fingern), Blut und Eiweiß im Urin.", "Diagnostik: Blutkulturen und Herzultraschall durch die Speiseröhre (TEE).", "Therapie: Antibiotika. Folgen: bleibende Klappenschäden, Herzinsuffizienz."),
      B("Myokarditis und Perikarditis (Herzmuskel und Herzbeutel)", "Meist durch Viren, seltener Pilze, Parasiten oder rheumatische Grunderkrankung.", "Symptome: Herzrasen, Herzklopfen, Herzschmerzen, Leistungsschwäche.", "Komplikationen: Perikarderguss, Herzinsuffizienz, gefährliche Rhythmusstörungen. Oft nur symptomatische Therapie."),
      B("Pflege", "Pflegebasismaßnahmen bei Herzerkrankungen: Vitalzeichen, Schonung nach Belastungsgrenze, Prophylaxen, Gespräch.", "Temperatur regelmäßig kontrollieren."),
    ],
  },
  {
    id: "hypotonie", group: "krank", area: "herz", title: "Niedriger Blutdruck (Hypotonie)", emoji: "⬇️",
    ar: "انخفاض الضغط: الانقباضي أقل من 100 ملم زئبق. أعراض: دوار، ميل للإغماء، برودة، إرهاق. الأولي: رياضة، سوائل، دش متناوب. الثانوي: علاج السبب (جرعة زائدة، نقص حجم، هرمونات، قلب).",
    blocks: [
      B("Definition", "Systolischer Blutdruck unter 100 mmHg. Kurzzeitig niedrige Werte nennt man Hypotonus; bei Dauer oder Wiederholung ist es eine chronische Hypotonie."),
      B("Formen", "Primäre Hypotonie: ohne erkennbare Krankheit.", "Sekundäre Hypotonie: durch zu hohe Dosis von Blutdruckmitteln, Flüssigkeitsmangel (Hypovolämie), Hormonstörungen oder Herzerkrankungen."),
      B("Symptome", "Schwindel, Kollapsneigung, Kälteempfindlichkeit, Abgeschlagenheit."),
      B("Was hilft?", "Primär: regelmäßiger Ausdauersport (Laufen, Schwimmen), ausreichend trinken, Muskel-Venen-Pumpe aktivieren (Waden anspannen vor dem Aufstehen), Wechselduschen.", "Sekundär: Ursache finden, z. B. Medikamente umstellen oder Flüssigkeit per Infusion ausgleichen.", "Pflege: langsam aufstehen lassen, Sturzgefahr beachten."),
    ],
  },
  {
    id: "arterienverschluss", group: "krank", area: "herz", title: "Akuter Arterienverschluss", emoji: "🦵",
    ar: "انسداد شرياني حاد: أشيع طوارئ الأوعية. غالباً بجلطة منتقلة (80%). في الأطراف: قاعدة 6P (ألم، غياب النبض، تنميل، شحوب، شلل، صدمة). الوقت = نسيج. ضع الطرف في وضع منخفض ولا تحقن فيه.",
    blocks: [
      B("Was ist das?", "Ein Blutgefäß wird plötzlich verschlossen. Im Bereich der Gefäße ist das der häufigste Notfall. Je nach Ort: Gehirn = Schlaganfall, Herzkranzgefäß = Herzinfarkt, Lunge = Lungenembolie."),
      B("Ursachen", "Embolie: ein Gerinnsel von woanders (z. B. aus dem Herzen) verstopft das Gefäß. Etwa 80 % der Beinarterienverschlüsse.", "Fortschreitende Arteriosklerose mit komplettem Verschluss: etwa 20 %."),
      B("6-P-Regel nach Pratt (Extremität)", "Pain (Schmerz), Pulselessness (kein Puls), Paraesthesia (Gefühlsstörung), Paleness (Blässe), Paralysis (Lähmung), Prostration (Schocksymptome)."),
      B("Therapie: Time is tissue", "Heparin, Lyse (Auflösen), Operation zur Gerinnselentfernung (Embolektomie), Ballonkatheter oder Katheterverfahren.", "Jede Minute zählt."),
      B("Pflege", "Arzt informieren, Bein tief lagern, Patienten nicht allein lassen und beruhigen, venösen Zugang vorbereiten, Vitalzeichen kontrollieren.", "Nach Embolektomie: Pulse, Hautfarbe und -temperatur prüfen, Gelenk nicht stärker als 30° beugen, keine Injektionen oder Infusionen am betroffenen Bein, Frühmobilisation nur nach Arztanordnung."),
    ],
  },
  {
    id: "aneurysma", group: "krank", area: "herz", title: "Aneurysma und Aortendissektion", emoji: "🎈",
    ar: "أم الدم (Aneurysma): توسع موضعي في جدار الشريان. كاذب (ورم دموي بعد وخز)، حقيقي (كل الطبقات، خطر الانفجار، غالباً الأبهر)، متسلخ (تمزق البطانة وتكون مجرى ثانٍ، مهدد للحياة).",
    blocks: [
      B("Drei Formen", "Falsches Aneurysma (A. spurium): kleiner Wanddefekt, z. B. nach Punktion beim Herzkatheter. Es bildet sich ein Bluterguss um das Gefäß, geht oft von selbst zurück.", "Echtes Aneurysma: Ausstülpung aller drei Wandschichten, oft an der Aorta (Brust oder Bauch). Hauptrisiko: Arteriosklerose. Es kann platzen und wird ab einer bestimmten Größe operiert.", "Aneurysma dissecans (Dissektion): Einriss der Innenschicht, zweites Lumen zwischen den Wandschichten. Kann platzen, lebensgefährlich."),
      B("Pflegerisch wichtig", "Plötzliche starke Schmerzen in Brust, Rücken oder Bauch sind ein Notfall: sofort Arzt, Vitalzeichen, nicht allein lassen."),
    ],
  },

  // ───────── Atmung ─────────
  {
    id: "lungenembolie", group: "krank", area: "atmung", title: "Lungenembolie", emoji: "🫁",
    ar: "الانسداد الرئوي: انسداد شريان رئوي بجلطة من الأوردة العميقة غالباً. ضيق نفس مفاجئ، ألم صدر عند الشهيق، تسرع القلب، هبوط الضغط. طوارئ: استدعاء الطبيب، وضع الجلوس، أكسجين، مراقبة.",
    blocks: [
      B("Ursache", "Meist ein Gerinnsel aus einer tiefen Beinvenenthrombose, das mit dem Blut in die Lunge wandert.", "Risikofaktoren: Immobilität (Bettruhe, langes Sitzen, Gips), Gerinnungsstörungen, Venenerkrankungen, Hormonpräparate zur Verhütung.", "Besonders gefährdet: Krebspatienten und Menschen nach großer Operation."),
      B("Symptome", "Plötzliche Atemnot, blaue Lippen, kalter Schweiß, blasse Haut, schnelle Atmung, Husten (evtl. blutig), schneller Puls, Blutdruckabfall, Brustschmerz beim Einatmen, Angst und Unruhe."),
      B("Diagnostik", "Wells-Score schätzt die Wahrscheinlichkeit. D-Dimere im Blut (über 500 ng/ml ist positiv, aber kein Beweis: auch bei Infektion, Tumor, Schwangerschaft, OP erhöht).", "Dann Bildgebung: Beinvenen-Ultraschall, Spiral-CT mit Kontrastmittel, alternativ Szintigrafie."),
      B("Sofortmaßnahmen", "Arzt sofort informieren.", "Oberkörper hoch, Bettruhe, Sauerstoff, Frischluft.", "Vitalzeichen kontrollieren, nicht allein lassen, Intensivüberwachung nötig bei schwerem Verlauf."),
      B("Vorbeugen", "Thromboseprophylaxe: Bewegung, Frühmobilisation, Kompression, Heparin nach Anordnung."),
    ],
  },
  {
    id: "lungenoedem", group: "krank", area: "atmung", title: "Lungenödem", emoji: "💧",
    ar: "وذمة الرئة: تجمع سوائل في الرئة وخلل تبادل الغازات، غالباً بسبب فشل القلب. أعراض: ضيق نفس شديد، أصوات فقاعية، ازرقاق، خوف. التمريض: وضع جلوس مع تدلي الساقين (Herzbettlage) وأكسجين.",
    blocks: [
      B("Was ist das?", "Flüssigkeit sammelt sich in der Lunge, der Gasaustausch ist gestört. Meist wegen Herzschwäche (kardiales Lungenödem)."),
      B("Symptome", "Plötzliche schwere Luftnot, rasselndes, brodelndes Atemgeräusch, blaue Haut, Angst und Unruhe, schneller Puls und schnelle Atmung, Schwitzen, niedrige Sauerstoffsättigung."),
      B("Therapie", "Sauerstoff, Diuretika (Wasser ausschwemmen), Flüssigkeit einschränken, Nitroglycerin beim kardialen Ödem, bei Panik oder Schmerz Morphin oder Benzodiazepine nach Anordnung."),
      B("Pflege", "Arzt rufen, Herzbettlage (Oberkörper hoch, Beine herab), Sauerstoff nach Anordnung, nicht allein lassen, ruhig bleiben, Vitalzeichen und Sättigung überwachen."),
    ],
  },
  {
    id: "tbc", group: "krank", area: "atmung", title: "Tuberkulose (Tbc)", emoji: "🦠",
    ar: "السل: عدوى مزمنة تُبلّغ عنها السلطات، تنتقل عبر الرذاذ وتصيب عضواً أو أكثر. في السل المفتوح يجب عزل المريض.",
    blocks: [
      B("Steckbrief", "Chronische Infektionskrankheit, die ein oder mehrere Organe befällt (meist Lunge).", "Übertragung über Tröpfchen. Meldepflichtig.", "Bei offener Tbc muss der Patient isoliert werden; Personal trägt geeignete Atemschutzmaske (nach Hausstandard)."),
      B("Pflegerisch wichtig", "Isolierung einhalten, Medikamenteneinnahme sicherstellen (lange Therapie mit mehreren Mitteln), Beobachtung von Husten, Auswurf, Gewicht und Nachtschweiß, Hygiene und Beratung."),
    ],
  },
  {
    id: "bronchialkarzinom", group: "krank", area: "atmung", title: "Bronchialkarzinom (Lungenkrebs)", emoji: "🚬",
    ar: "سرطان القصبات: ورم خبيث من الخلايا الظهارية للقصبات والحويصلات. التمريض: الوقاية من المضاعفات (الالتهاب الرئوي، الجلطات) والدعم النفسي والألم.",
    blocks: [
      B("Definition", "Bösartiger Tumor, der von den Zellen der Bronchien und Lungenbläschen ausgeht. Rauchen ist der wichtigste Risikofaktor."),
      B("Pflege", "Prophylaxen sind besonders wichtig (Pneumonie, Thrombose, Dekubitus).", "Atemnot lindern: Oberkörperhochlage, Atemübungen, Sauerstoff nach Anordnung.", "Schmerzmanagement, Ernährung, psychosoziale Begleitung, Beratung zu Rauchstopp und Hilfen. Siehe auch die Lektion zur Pflege bei bösartigen Tumoren."),
    ],
  },
  {
    id: "mukoviszidose", group: "krank", area: "atmung", title: "Mukoviszidose", emoji: "🧬",
    ar: "التليف الكيسي: مرض استقلابي وراثي، خلل قنوات الكلوريد يسبب مخاطاً لزجاً خاصة في الرئة والبنكرياس. لا علاج سببي. يحتاج المريض لتحريك المفرزات والوقاية من العدوى لساعات يومياً.",
    blocks: [
      B("Was ist das?", "Angeborene, vererbte Stoffwechselerkrankung. Veränderte Chloridkanäle führen zu zähem Sekret. Besonders betroffen: Lunge und Bauchspeicheldrüse."),
      B("Therapie und Pflege", "Eine ursächliche Heilung gibt es nicht.", "Mehrere Stunden täglich: Sekretmobilisation (Inhalation, Drainagelagerung, Atemtherapie) und Infektionsprophylaxe.", "Hohe Eigenverantwortung der Betroffenen, Schulung und Begleitung durch Pflege sind wichtig."),
    ],
  },
  {
    id: "atemwegsmedikamente", group: "krank", area: "atmung", title: "Wichtige Medikamentengruppen bei Atemwegserkrankungen", emoji: "💊",
    ar: "مجموعات أدوية الجهاز التنفسي: موسعات القصبات، الكورتيزون (مضاد التهاب)، مقشعات (تذيب المخاط)، مثبطات السعال، أدوية ضد العدوى حسب الميكروب.",
    blocks: [
      B("Fünf Gruppen", "Bronchodilatatoren: entspannen die Bronchialmuskulatur und erweitern die Atemwege.", "Glukokortikoide: wirken entzündungshemmend und dämpfen das Immunsystem.", "Expektoranzien: lösen und verflüssigen Schleim (mukolytisch, sekretolytisch).", "Antitussiva: dämpfen den Hustenreflex.", "Antiinfektiva: nach Erreger (Antibiotika, Virostatika, Antimykotika)."),
      B("Sicherheit", "Bei COPD kann Sauerstoff ohne Anordnung gefährlich sein (Atemstillstand durch CO2-Anstieg). Sauerstoff nur nach Arztanordnung geben.", "Beim Asthmaanfall: Hilfe holen, Bedarfsmedikament, Kutschersitz, Lippenbremse, Frischluft, nicht allein lassen."),
    ],
  },

  // ───────── Verdauung ─────────
  {
    id: "ileus", group: "krank", area: "verdauung", title: "Ileus (Darmverschluss)", emoji: "🚧",
    ar: "الانسداد المعوي: ميكانيكي (عائق: ورم، التصاقات، فتق) أو شللي (حركة الأمعاء متوقفة). أعراض: لا براز، ألم بطن، قيء، بطن منتفخ. مضاعفات: صدمة نقص الحجم، التهاب البريتوان، قيء برازي، انثقاب. الحقن الشرجية ممنوعة في الميكانيكي.",
    blocks: [
      B("Zwei Formen", "Mechanischer Ileus: Das Darmlumen ist verlegt, z. B. durch Tumor, Verwachsungen oder Hernie. Muss operiert werden. Einläufe sind verboten.", "Paralytischer Ileus: Die Darmbewegung ist gelähmt, z. B. bei Entzündungen im Bauch, nach Operationen oder durch Opiate. Peristaltik wird durch Einläufe und Medikamente angeregt."),
      B("Symptome", "Kein oder kaum Stuhlgang, Bauchschmerzen, Übelkeit und Erbrechen, aufgeblähter Bauch ohne Windabgang, evtl. Fieber, Appetitlosigkeit."),
      B("Warum gefährlich?", "Der Körper schüttet Flüssigkeit in den Darm: Volumenmangel bis Schock.", "Durchblutungsstörung der Darmwand: Bakterien können durchwandern, Bauchfellentzündung (Peritonitis).", "Rückstau bis in den Magen: Koterbrechen (Miserere).", "Schlimmste Komplikation: Perforation."),
      B("Diagnostik", "Zuhören: fehlende Darmgeräusche sprechen für paralytischen, klingende Geräusche für mechanischen Ileus. Ultraschall, Röntgen, CT."),
      B("Pflege", "Nasogastrale Ablaufsonde, Nahrungskarenz, Infusionen, Bauchumfang und Schmerz beobachten, Vitalzeichen kontrollieren, Arzt informieren."),
    ],
  },
  {
    id: "akutes-abdomen", group: "krank", area: "verdauung", title: "Akutes Abdomen", emoji: "🚨",
    ar: "البطن الحاد: حالة مهددة للحياة: ألم بطن مفاجئ شديد، تصلب جدار البطن، أعراض صدمة. أسبابه التهابات (زائدة، مرارة، بنكرياس)، انثقاب، حصى، انسداد، نقص تروية الأمعاء.",
    blocks: [
      B("Definition", "Lebensbedrohliches Krankheitsbild mit plötzlichen heftigen Bauchschmerzen, Abwehrspannung der Bauchdecke und oft Schocksymptomen."),
      B("Mögliche Ursachen", "Entzündungen (Blinddarm, Gallenblase, Bauchspeicheldrüse, Divertikel, Darm), Durchbruch eines Hohlorgans, Gallensteine, mechanischer Ileus, Durchblutungsstörung des Darms."),
      B("Symptome", "Bauchschmerz, Übelkeit, Erbrechen, Verstopfung oder Durchfall, evtl. Fieber, Schock: Unruhe, Blässe, Kaltschweißigkeit, Tachykardie, wenig Urin."),
      B("Pflege", "Arzt sofort informieren, Vitalzeichen, nüchtern lassen, keine Schmerzmittel ohne Anordnung, Zugang vorbereiten, nicht allein lassen."),
    ],
  },
  {
    id: "divertikel", group: "krank", area: "verdauung", title: "Divertikulose und Divertikulitis", emoji: "🔵",
    ar: "الرتوج: الانتفاخات الجدارية في القولون (Divertikulose) غالباً بلا أعراض؛ وإذا التهبت (Divertikulitis) تحتاج علاجاً بالمضادات فوراً. مضاعفات: انثقاب، نزيف، خراج. بطن «صلب كالخشب» علامة خطر.",
    blocks: [
      B("Divertikulose", "Die Darmwand buchtet sich nach außen aus. Meist keine Beschwerden.", "Ballaststoffreiche Kost und Bewegung bremsen das Fortschreiten."),
      B("Divertikulitis", "Entzündete Ausstülpungen. Brauchen sofort Antibiotika.", "Komplikationen: Durchbruch, Blutung, Abszess.", "Pflege: Vitalzeichen, Schmerzen, Stuhl und einen „brettharten“ Bauch beobachten.", "Nach Abheilen: Koloskopie, um andere Ursachen wie einen Tumor auszuschließen."),
    ],
  },
  {
    id: "darmkrebs", group: "krank", area: "verdauung", title: "Kolorektales Karzinom (Darmkrebs)", emoji: "🎗️",
    ar: "سرطان القولون والمستقيم: ثاني أشيع سبب وفاة بالسرطان. الفحص: اختبار دم خفي في البراز سنوياً من 50 سنة وتنظير القولون كل 10 سنوات. العلاج: جراحة (غالباً مع فغر)، تمريض قبل وبعد العملية.",
    blocks: [
      B("Risikofaktoren", "Chronisch-entzündliche Darmerkrankung, genetische Faktoren, fett- und fleischreiche Ernährung, Alter (90 % sind über 50)."),
      B("Früherkennung", "Ab 50 jährlich Test auf verstecktes Blut im Stuhl (iFOBT), alle 10 Jahre Koloskopie. Teil des gesetzlichen Programms."),
      B("Therapie", "Operation, ggf. mit Anlage eines Enterostomas. Chemotherapie kann den Tumor vorher verkleinern."),
      B("Präoperative Pflege", "Ballaststoffarme Kost, bei schlechtem Zustand evtl. künstliche Ernährung über ZVK.", "Abführen und Rasur nach Arztanordnung oder Hausstandard.", "Stomatherapeut einbeziehen.", "Achtung: Sitz des Tumors beachten, beim Einlauf besteht Perforationsgefahr."),
      B("Postoperative Pflege", "Vitalzeichen 2 bis 3 mal täglich, Stuhlgang nach 4 bis 7 Tagen erwartet, Frühmobilisation ab dem 1. Tag, stufenweiser Kostaufbau.", "Auf Komplikationen achten: Blutung, undichte Naht (Anastomoseninsuffizienz), Pneumonie, Thrombose, Lungenembolie, Blasenentleerungsstörung.", "Psychosoziale Begleitung, Sozialdienst und Krebsberatung."),
    ],
  },
  {
    id: "hepatitis", group: "krank", area: "verdauung", title: "Hepatitis (Leberentzündung)", emoji: "🟡",
    ar: "التهاب الكبد: A (فموي-برازي، يشفى)، B وC (دم لدم، قد يتحول لمزمن). لقاح ضد A وB للعاملين بالصحة. علامات: يرقان، براز طيني، ألم أعلى البطن اليمين.",
    blocks: [
      B("Ursachen", "Meist Viren. Hepatitis A: fäkal-oral, heilt folgenlos aus, wird nicht chronisch.", "Hepatitis B: Blut-zu-Blut-Kontakt, etwa 90 % heilen aus, ca. 10 % werden chronisch.", "Hepatitis C: u. a. Blut-zu-Blut-Kontakt, die Mehrzahl (50 bis 85 %) verläuft chronisch.", "Nicht infektiös: Gifte (Alkohol, Medikamente), Fettleber, Stoffwechselkrankheiten, Autoimmunhepatitis."),
      B("Symptome", "Akut: Unwohlsein, Fieber, Übelkeit, Erbrechen, Schmerzen im rechten Oberbauch, ggf. Gelbsucht (Ikterus), lange Müdigkeit. Fulminante Verläufe mit Leberversagen sind möglich."),
      B("Impfung", "Gegen Hepatitis A und B kann geimpft werden. Medizinisches Personal gehört zu den empfohlenen Gruppen. Hepatitis-B-Impfung ist im Kinderimpfprogramm; Wirksamkeit per Antikörpertest prüfen, bei ausreichendem Status alle 10 Jahre auffrischen."),
      B("Pflege", "Stuhl beobachten: grauer, lehmfarbener (acholischer) Stuhl deutet auf Leber-, Galle- oder Pankreasprobleme.", "Haut und Schleimhäute auf Gelbfärbung prüfen, Blutzucker, Schmerzen im Oberbauch.", "Eigenschutz: Handschuhe, Nadelstichprophylaxe, Hygiene."),
    ],
  },
  {
    id: "galle", group: "krank", area: "verdauung", title: "Gallenblase und Gallenwege", emoji: "🟢",
    ar: "أمراض المرارة والقنوات: غالباً بسبب الحصى. حصى المرارة، التهابها، حصى القناة، التهاب القنوات. أعراض: مغص، يرقان انسدادي، غثيان. العلاج: ERCP أو استئصال المرارة بالمنظار ومضادات حيوية.",
    blocks: [
      B("Begriffe", "Cholezystolithiasis: Steine in der Gallenblase.", "Cholezystitis: Gallenblasenentzündung.", "Choledocholithiasis: Steine im Gallengang.", "Cholangitis: Entzündung der Gallenwege.", "Ein Stein am Pankreasgang kann eine Pankreatitis auslösen."),
      B("Diagnostik und Symptome", "Ultraschall und Blutwerte.", "Oft lange keine Beschwerden, später kolikartige Schmerzen, Verschlussikterus, Übelkeit und Erbrechen."),
      B("Therapie und Pflege", "ERCP (Spiegelung der Gallenwege), laparoskopische Gallenblasenentfernung, Antibiotika.", "Perioperativ: allgemeine OP-Pflege, Schmerzmanagement, Beobachtung von Fieber, Hautfarbe und Stuhl."),
    ],
  },
  {
    id: "pankreatitis", group: "krank", area: "verdauung", title: "Pankreatitis (Entzündung der Bauchspeicheldrüse)", emoji: "🥐",
    ar: "التهاب البنكرياس: الحاد غالباً من حصى القناة، والمزمن من الكحول. ألم حزامي في أعلى البطن، بطن «مطاطي»، قيء. الحاد قد يحتاج عناية مركزة. المضاعفة: قصور البنكرياس والسكري.",
    blocks: [
      B("Ursachen", "Akut: Gallengangstein mit Verschlussikterus (ca. 55 %), chronischer Alkohol (ca. 35 %), Medikamente, Viren, nach ERCP.", "Chronisch: v. a. Alkohol (ca. 80 %)."),
      B("Symptome", "Gürtelförmige Oberbauchschmerzen, „gummiartiger“ Bauch, Übelkeit, Erbrechen, Fieber, Blähbauch. Bei akutem Verlauf Volumenmangel möglich."),
      B("Therapie und Pflege", "Akut: Pankreas entlasten (Schonkost nach Arztplan), ausreichend Schmerzmittel, Überwachung (evtl. Intensiv).", "Chronisch: Alkoholverzicht, Schmerzmanagement, Pankreasenzyme einnehmen, ggf. Operation.", "Komplikation: Pankreasinsuffizienz mit hohem Blutzucker, Fettstühlen und Gewichtsverlust; häufig folgt ein Diabetes."),
    ],
  },
  {
    id: "hernie", group: "krank", area: "verdauung", title: "Bauchwandhernien (Leistenbruch)", emoji: "🧱",
    ar: "الفتق: بروز الصفاق عبر ثغرة في عضلات البطن. أشيعه الفتق الإربي. الأسباب: إمساك مزمن، رفع ثقيل، سمنة. مضاعفة: الاحتباس (Inkarzeration). العلاج جراحي.",
    blocks: [
      B("Was ist das?", "Das Bauchfell stülpt sich sackartig durch eine Lücke in der Bauchmuskulatur nach außen. Im Bruchsack kann auch Darm liegen. Häufigste Form: Leistenhernie."),
      B("Ursachen und Symptome", "Chronische Verstopfung, schweres Heben, Übergewicht; angeboren (selten) oder erworben (häufig).", "Beschwerden gering, ggf. Schmerzen bei Anspannung."),
      B("Komplikation und Therapie", "Inkarzeration: Der Inhalt klemmt ein, der Darm kann absterben. Notfall.", "Therapie: meist (laparoskopische) Operation."),
    ],
  },

  // ───────── Niere ─────────
  {
    id: "glomerulonephritis", group: "krank", area: "niere", title: "Glomerulonephritis", emoji: "🫘",
    ar: "التهاب كبيبات الكلى: سبب شائع لفشل الكلى. علامات: دم في البول، وذمات، ارتفاع ضغط (متلازمة نفريتية)؛ وبروتين >3 غ/يوم (نفروتية). التمريض: الوزن، كمية الشرب، البول، الجلد.",
    blocks: [
      B("Was ist das?", "Entzündung der Nierenkörperchen. Häufige Ursache einer späteren Niereninsuffizienz."),
      B("Typische Zeichen", "Nephritisches Syndrom: Blut im Urin (Hämaturie), Ödeme, Bluthochdruck.", "Nephrotisches Syndrom: starker Eiweißverlust im Urin (über 3 g pro Tag)."),
      B("Pflege", "Vitalzeichen 2 bis 3 mal täglich (Hochdruck?), Urin beobachten (Menge, Farbe, Beimengungen), Ödeme an Augenlidern und Knöcheln, tägliche Gewichtskontrolle, ggf. Bilanzierung."),
    ],
  },
  {
    id: "dialyse", group: "krank", area: "niere", title: "Dialyse (Nierenersatztherapie)", emoji: "🩸",
    ar: "غسيل الكلى: يزيل اليوريا والكرياتينين والماء عبر غشاء شبه منفذ. غسيل دموي (الأشيع، 3 مرات/أسبوع 4–6 ساعات، بحاجة لوصلة شريانية وريدية Shunt أو قسطرة) أو بريتوني. لا تضغط ولا تقس الضغط على ذراع الشنت.",
    blocks: [
      B("Wann?", "Anurie beim akuten Nierenversagen, drohende Urämie, Elektrolytentgleisung oder Azidose, Überwässerung mit Lungenödem."),
      B("Wie funktioniert das?", "Stoffe wandern passiv über eine halbdurchlässige Membran zwischen Blut und Dialysat (Konzentrationsgefälle, Gegenstromprinzip).", "Extrakorporal: Hämodialyse und Hämofiltration. Intrakorporal: Peritonealdialyse."),
      B("Hämodialyse", "Das häufigste Verfahren: meist 3-mal pro Woche für 4 bis 6 Stunden.", "Gefäßzugang: arteriovenöser Shunt (Operation 4 bis 6 Wochen vorher) oder zentralvenöser Katheter.", "Vor jeder Dialyse wiegen und Elektrolyte prüfen. Ziel danach: „Trockengewicht“ (normale Wasserbilanz).", "Das Blut wird heparinisiert: auf Blutungen achten, besonders im Magen-Darm-Trakt."),
      B("Shunt schützen", "Der Shunt wird über die Vene punktiert, nicht in den Shunt selbst.", "Am Shuntarm keine Blutdruckmessung, keine Blutentnahme, keine Infusion, keine enge Kleidung."),
    ],
  },
  {
    id: "saeure-basen", group: "krank", area: "niere", title: "Säure-Basen-Haushalt", emoji: "⚗️",
    ar: "توازن الحمض والقاعدة: الحماض pH أقل من 7.37، القلاء أكثر من 7.43. تنفسي أو استقلابي. في القلاء التنفسي: تهدئة المريض وإعادة استنشاق الهواء الزفير.",
    blocks: [
      B("Grenzwerte", "Normal: arterieller pH 7,37 bis 7,43.", "Azidose: pH unter 7,37. Alkalose: pH über 7,43."),
      B("Ursachen", "Respiratorisch: Atmung zu stark (Alkalose) oder zu schwach (Azidose).", "Metabolisch: Säure im Körper zu viel oder zu wenig produziert oder ausgeschieden."),
      B("Pflegerelevant", "Respiratorische Alkalose (z. B. bei Hyperventilation): Patienten beruhigen, Rückatmung der Ausatemluft nach Anordnung.", "Metabolische Alkalose: ggf. NaCl-Infusion, Kalium ausgleichen.", "Bei flacher, langsamer Atmung Blutgasanalyse beachten, sonst droht eine CO2-Narkose."),
    ],
  },

  // ───────── Stoffwechsel und Hormone ─────────
  {
    id: "schilddruese", group: "krank", area: "stoffwechsel", title: "Schilddrüse: Unterfunktion, Überfunktion, Struma", emoji: "🦋",
    ar: "الغدة الدرقية: القصور (يتجمد، يتعب، إمساك، بطء القلب، جلد جاف) = «على نار هادئة». فرط النشاط (خفقان، تسرع، تعرق، قلق). التضخم غالباً لنقص اليود. بعد استئصال: احذر بحة الصوت، تكزز، صرير.",
    blocks: [
      B("Hypothyreose = Sparflamme", "Mangel an Schilddrüsenhormon. Häufigste Ursache: Hashimoto-Thyreoiditis (Autoimmun). Auch nach OP oder bei Überbehandlung.", "Symptome: Kälteempfindlichkeit, Müdigkeit, Konzentrationsprobleme, Verstopfung, Bradykardie, Hypotonie, trockene Haut, brüchige Haare, schwere Zunge.", "Therapie: L-Thyroxin, regelmäßige TSH-Kontrolle.", "Pflege: Wärme (zweite Decke), Hautpflege, Obstipationsprophylaxe, Zeit lassen. Tabletten eine halbe Stunde vor dem Frühstück mit Wasser, nicht mit Kaffee."),
      B("Hyperthyreose", "Hormonüberschuss, häufig durch Adenom oder Antikörper (Morbus Basedow). Symptome: Herzklopfen, Tachykardie, Unruhe, Schwitzen."),
      B("Struma (Kropf)", "Vergrößerte Schilddrüse, häufigste Ursache Jodmangel."),
      B("Nach Strumaoperation beobachten", "Heiserkeit oder eingeschränkte Stimme (Nerv geschädigt?), Kribbeln und Krämpfe (Tetanie wegen zu wenig Nebenschilddrüsenhormon?), Stridor oder Luftnot (Nachblutung)."),
    ],
  },
  {
    id: "lipide-adipositas", group: "krank", area: "stoffwechsel", title: "Fettstoffwechsel, Adipositas und Gicht", emoji: "⚖️",
    ar: "HDL «الحميد» يحمي، LDL «الضار» يرسّب الكوليسترول. السمنة: BMI فوق 30؛ المتلازمة الاستقلابية (ضغط + دهون + سكري) تضاعف خطر الجلطة والسكتة. النقرس: ارتفاع حمض اليوريك والنوبات.",
    blocks: [
      B("HDL und LDL", "HDL („hab dich lieb“): transportiert Fett in die Leber und schützt vor Arteriosklerose.", "LDL: Risikofaktor für Arteriosklerose.", "Hypercholesterinämie: zu viel LDL. Primär genetisch (oft früh Infarkt), sekundär durch fettreiche Kost, Alkohol, Übergewicht."),
      B("Therapie und Pflege", "Bewegung, cholesterinarme Kost mit ungesättigten Fettsäuren (Oliven-, Rapsöl, Fisch), Gewichtsabbau.", "Medikamente: meist Statine (z. B. Simvastatin)."),
      B("Adipositas", "BMI = Gewicht (kg) geteilt durch Körpergröße (m) zum Quadrat. Adipositas ab BMI über 30.", "Metabolisches Syndrom (Übergewicht, Bluthochdruck, Fettstoffwechselstörung, Diabetes): Schlaganfall- und Infarktrisiko etwa vierfach.", "Bauchfett („Apfelform“) ist gefährlicher als Hüftfett („Birnenform“)."),
      B("Hyperurikämie und Gicht", "Harnsäure ist ein Abbauprodukt der Purine (vor allem aus Fleisch). Zu viel im Blut = Hyperurikämie.", "Lagert sie sich in Gelenken ab, entstehen schmerzhafte Gichtanfälle (Schübe).", "Im akuten Schub: entzündungshemmende Mittel (NSAR) und Kortison nach Arztanordnung."),
    ],
  },
];
