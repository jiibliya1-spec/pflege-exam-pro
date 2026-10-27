/**
 * Wörterbuch für Fachwörter. Es ist eine Lernhilfe der App (keine Buchtexte): Die Übersetzungen
 * erklären nur das deutsche Wort. Maßgeblich bleibt immer das deutsche Original.
 * Reihenfolge je Eintrag: Deutsch, Arabisch, Englisch, Französisch, Türkisch.
 */
import type { Lang } from "./i18n";

type Row = [string, string, string, string, string];
const ROWS: Row[] = [
  ["SBAR", "نموذج SBAR (الوضع، الخلفية، التقييم، التوصية)", "SBAR (situation, background, assessment, recommendation)", "SBAR (situation, antécédents, évaluation, recommandation)", "SBAR (durum, arka plan, değerlendirme, öneri)"],
  ["Dekubitusprophylaxe", "الوقاية من قرح الضغط", "pressure ulcer prevention", "prévention des escarres", "bası yarası önleme"],
  ["Dekubitus", "قرحة الضغط", "pressure ulcer", "escarre", "bası yarası"],
  ["Pflegeprozess", "عملية التمريض", "nursing process", "processus de soins", "hemşirelik süreci"],
  ["Pflegeanamnese", "جمع معلومات التمريض", "nursing assessment (history)", "anamnèse infirmière", "hemşirelik anamnezi"],
  ["Anamnese", "القصة المرضية", "medical history", "anamnèse", "anamnez"],
  ["Vitalzeichen", "العلامات الحيوية", "vital signs", "signes vitaux", "vital bulgular"],
  ["Pflegediagnose", "تشخيص تمريضي", "nursing diagnosis", "diagnostic infirmier", "hemşirelik tanısı"],
  ["Pflegeziel", "هدف تمريضي", "nursing goal", "objectif de soins", "hemşirelik hedefi"],
  ["Pflegemaßnahme", "إجراء تمريضي", "nursing intervention", "intervention de soins", "hemşirelik girişimi"],
  ["Evaluation", "التقييم", "evaluation", "évaluation", "değerlendirme"],
  ["Prophylaxe", "الوقاية", "prophylaxis (prevention)", "prophylaxie", "profilaksi (önleme)"],
  ["Kontraktur", "تقفّع المفصل", "contracture", "contracture", "kontraktür"],
  ["Pneumonie", "التهاب رئوي", "pneumonia", "pneumonie", "zatürre"],
  ["Thrombose", "جلطة وريدية", "thrombosis", "thrombose", "tromboz"],
  ["Aspiration", "استنشاق (دخول سوائل أو طعام إلى الرئة)", "aspiration", "aspiration", "aspirasyon"],
  ["Dehydratation", "جفاف", "dehydration", "déshydratation", "dehidrasyon"],
  ["Dehydrationsgefahr", "خطر الجفاف", "risk of dehydration", "risque de déshydratation", "dehidrasyon riski"],
  ["Mangelernährung", "سوء التغذية", "malnutrition", "dénutrition", "yetersiz beslenme"],
  ["Hypoglykämie", "هبوط سكر الدم", "hypoglycaemia", "hypoglycémie", "hipoglisemi"],
  ["Hyperglykämie", "ارتفاع سكر الدم", "hyperglycaemia", "hyperglycémie", "hiperglisemi"],
  ["Diabetes", "داء السكري", "diabetes", "diabète", "diyabet"],
  ["Insulin", "الإنسولين", "insulin", "insuline", "insülin"],
  ["Hypertonie", "ارتفاع ضغط الدم", "hypertension", "hypertension", "hipertansiyon"],
  ["Herzinsuffizienz", "قصور القلب", "heart failure", "insuffisance cardiaque", "kalp yetmezliği"],
  ["Schlaganfall", "سكتة دماغية", "stroke", "AVC (accident vasculaire cérébral)", "inme"],
  ["Hemiparese", "شلل نصفي جزئي", "partial paralysis of one side", "hémiparésie", "yarım felç (hemipareze)"],
  ["Demenz", "الخرف", "dementia", "démence", "demans"],
  ["Epilepsie", "الصرع", "epilepsy", "épilepsie", "epilepsi"],
  ["Multiple Sklerose", "التصلّب المتعدد", "multiple sclerosis", "sclérose en plaques", "multipl skleroz"],
  ["Leukämie", "سرطان الدم (ابيضاض الدم)", "leukaemia", "leucémie", "lösemi"],
  ["Chemotherapie", "علاج كيميائي", "chemotherapy", "chimiothérapie", "kemoterapi"],
  ["Asthma", "الربو", "asthma", "asthme", "astım"],
  ["Migräne", "الشقيقة (الصداع النصفي)", "migraine", "migraine", "migren"],
  ["Querschnittslähmung", "شلل بسبب إصابة النخاع الشوكي", "paralysis from spinal cord injury", "paraplégie", "omurilik felci"],
  ["Stoma", "فغر (مخرج جراحي)", "stoma (surgical opening)", "stomie", "stoma"],
  ["Katheter", "قسطرة", "catheter", "cathéter", "kateter"],
  ["Trachealkanüle", "أنبوب القصبة الهوائية", "tracheal cannula", "canule trachéale", "trakeal kanül"],
  ["Tracheostoma", "فغر القصبة الهوائية", "tracheostomy", "trachéostomie", "trakeostomi"],
  ["Absaugen", "شفط الإفرازات", "suctioning", "aspiration des sécrétions", "sekresyon aspirasyonu"],
  ["PEG", "أنبوب تغذية عبر جدار البطن", "PEG feeding tube", "sonde de gastrostomie (PEG)", "PEG besleme tüpü"],
  ["Infusion", "تسريب وريدي", "infusion (drip)", "perfusion", "infüzyon (serum)"],
  ["Triage", "الفرز حسب الاستعجال", "triage", "triage", "triyaj"],
  ["Notaufnahme", "قسم الطوارئ", "emergency department", "urgences", "acil servis"],
  ["Rettungsdienst", "خدمة الإسعاف", "ambulance service", "services de secours", "ambulans hizmeti"],
  ["Delegation", "تفويض المهام", "delegation", "délégation", "görev devri"],
  ["Remonstration", "حق الاعتراض على تكليف", "duty to object to an order", "droit de remontrance", "itiraz hakkı"],
  ["Remonstrationspflicht", "واجب الاعتراض على تكليف خاطئ", "duty to object to a wrong order", "devoir de remontrance", "yanlış talimata itiraz yükümlülüğü"],
  ["Anordnungsverantwortung", "مسؤولية إعطاء التعليمات", "responsibility of the one giving the order", "responsabilité de prescription", "talimat verme sorumluluğu"],
  ["Übernahmeverantwortung", "مسؤولية تنفيذ المهمة", "responsibility of the one carrying out", "responsabilité d'exécution", "üstlenme sorumluluğu"],
  ["Autonomie", "الاستقلالية", "autonomy", "autonomie", "özerklik"],
  ["Patientenverfügung", "وصية حياة (توجيه مسبق)", "advance directive", "directives anticipées", "hasta vasiyeti"],
  ["Betreuung", "وصاية قانونية", "legal guardianship", "mesure de protection (tutelle)", "yasal vasilik"],
  ["Einwilligung", "موافقة", "consent", "consentement", "onam"],
  ["Schweigepflicht", "واجب كتمان السر", "duty of confidentiality", "secret professionnel", "sır saklama yükümlülüğü"],
  ["Pflegedokumentation", "توثيق التمريض", "nursing documentation", "dossier de soins", "hemşirelik dokümantasyonu"],
  ["Dienstübergabe", "تسليم المناوبة", "shift handover", "transmissions (relève)", "vardiya devri"],
  ["Praxisanleiter", "مرشد التدريب العملي", "practical mentor", "tuteur de stage", "uygulama eğitmeni"],
  ["Praxisanleiterin", "مرشدة التدريب العملي", "practical mentor (f)", "tutrice de stage", "uygulama eğitmeni (kadın)"],
  ["Auszubildende", "متدرّب/ة", "trainee", "apprenti(e)", "stajyer"],
  ["Pflegefachfrau", "ممرضة مؤهلة", "qualified nurse (f)", "infirmière diplômée", "diplomalı hemşire (kadın)"],
  ["Pflegefachmann", "ممرض مؤهل", "qualified nurse (m)", "infirmier diplômé", "diplomalı hemşire (erkek)"],
  ["Pflegefachkraft", "ممرض/ة مؤهل/ة", "qualified nurse", "infirmier(ère) diplômé(e)", "diplomalı hemşire"],
  ["Erwartungshorizont", "الإجابة النموذجية المتوقعة", "expected answer scheme", "grille de réponses attendues", "beklenen cevap çerçevesi"],
  ["Kompetenzbereich", "مجال الكفاءة", "area of competence", "domaine de compétence", "yeterlilik alanı"],
  ["Fallsituation", "وصف الحالة", "case situation", "situation de cas", "vaka durumu"],
  ["Operatoren", "أفعال المهام (مثل: اذكر، اشرح)", "task verbs (e.g. name, explain)", "verbes de consigne", "görev fiilleri"],
  ["Nennen", "اذكر", "name / list", "nommer", "adlandırın"],
  ["Beschreiben", "صِف", "describe", "décrire", "tanımlayın"],
  ["Erläutern", "اشرح", "explain", "expliquer", "açıklayın"],
  ["Begründen", "علّل", "justify", "justifier", "gerekçelendirin"],
  ["Entwickeln", "ضع/طوّر", "develop", "élaborer", "geliştirin"],
  ["Beurteilen", "قيّم", "assess / judge", "évaluer", "değerlendirin"],
  ["Ressourcen", "الموارد (القدرات المتاحة)", "resources (strengths)", "ressources", "kaynaklar"],
  ["Assessmentinstrument", "أداة تقييم", "assessment tool", "outil d'évaluation", "değerlendirme aracı"],
  ["Expertenstandard", "معيار الخبراء", "expert standard", "standard d'experts", "uzman standardı"],
  ["Hygiene", "النظافة والتعقيم", "hygiene", "hygiène", "hijyen"],
  ["Händedesinfektion", "تعقيم اليدين", "hand disinfection", "désinfection des mains", "el dezenfeksiyonu"],
  ["MRSA", "جرثومة MRSA المقاومة للمضادات", "MRSA (resistant germ)", "SARM (germe résistant)", "MRSA (dirençli mikrop)"],
  ["Isolierung", "عزل المريض", "isolation", "isolement", "izolasyon"],
  ["Wochenbett", "فترة النفاس", "postpartum period", "post-partum", "lohusalık dönemi"],
  ["Stillen", "إرضاع طبيعي", "breastfeeding", "allaitement", "emzirme"],
  ["Palliativ", "تلطيفي (رعاية)", "palliative", "palliatif", "palyatif"],
  ["Sterbebegleitung", "مرافقة المحتضر", "end-of-life care", "accompagnement de fin de vie", "yaşam sonu bakımı"],
  ["Kommunikation", "التواصل", "communication", "communication", "iletişim"],
  ["Beratung", "إرشاد واستشارة", "counselling", "conseil", "danışmanlık"],
  ["Anleitung", "توجيه وتدريب", "guidance (instruction)", "guidance", "yönlendirme"],
  ["Schulung", "تثقيف / دورة تدريب", "training session", "formation", "eğitim"],
  ["Prävention", "الوقاية", "prevention", "prévention", "önleme"],
  ["Gesundheitsförderung", "تعزيز الصحة", "health promotion", "promotion de la santé", "sağlığı geliştirme"],
  ["Pflegegrad", "درجة الرعاية", "care level", "niveau de dépendance", "bakım derecesi"],
  ["Entlassmanagement", "إدارة الخروج من المستشفى", "discharge management", "gestion de la sortie", "taburcu yönetimi"],
  ["Jugendamt", "مكتب رعاية الشباب", "youth welfare office", "service d'aide à la jeunesse", "gençlik dairesi"],
  ["Pflegedienst", "خدمة الرعاية المنزلية", "home care service", "service de soins à domicile", "evde bakım hizmeti"],
  ["Pflegeheim", "دار رعاية المسنين", "care home", "maison de retraite médicalisée", "bakım evi"],
  ["Schmerz", "ألم", "pain", "douleur", "ağrı"],
  ["Übelkeit", "غثيان", "nausea", "nausée", "bulantı"],
  ["Erbrechen", "قيء", "vomiting", "vomissement", "kusma"],
  ["Atemnot", "ضيق التنفس", "shortness of breath", "essoufflement", "nefes darlığı"],
  ["Dyspnoe", "ضيق التنفس", "shortness of breath", "dyspnée", "nefes darlığı"],
  ["Bewusstlosigkeit", "فقدان الوعي", "unconsciousness", "perte de connaissance", "bilinç kaybı"],
  ["Sturzprophylaxe", "الوقاية من السقوط", "fall prevention", "prévention des chutes", "düşme önleme"],
  ["Sturz", "سقوط", "fall", "chute", "düşme"],
  ["Blutzucker", "سكر الدم", "blood sugar", "glycémie", "kan şekeri"],
  ["Blutdruck", "ضغط الدم", "blood pressure", "tension artérielle", "kan basıncı"],
  ["Körperpflege", "العناية بالنظافة الشخصية", "personal hygiene", "toilette (soins d'hygiène)", "kişisel bakım"],
  ["Lagerung", "تغيير وضعية المريض", "positioning", "positionnement", "pozisyon verme"],
  ["Mobilisation", "تحريك المريض", "mobilisation", "mobilisation", "mobilizasyon"],
  ["Inkontinenz", "سلس (البول أو البراز)", "incontinence", "incontinence", "inkontinans"],
  ["Depression", "اكتئاب", "depression", "dépression", "depresyon"],
  ["Konflikt", "نزاع", "conflict", "conflit", "çatışma"],
  ["Ethik", "الأخلاقيات المهنية", "ethics", "éthique", "etik"],
  ["Patientenedukation", "تثقيف المريض", "patient education", "éducation du patient", "hasta eğitimi"],
  ["Gesundheitsberatung", "إرشاد صحي", "health counselling", "conseil en santé", "sağlık danışmanlığı"],
  ["Salutogenese", "نشوء الصحة (ما يُبقي الإنسان سليماً)", "salutogenesis (what keeps people healthy)", "salutogenèse", "salutogenez"],
  ["Kollegiale Beratung", "استشارة الزملاء", "peer consultation", "conseil entre collègues", "meslektaş danışmanlığı"],
  ["Vorbehaltstätigkeiten", "مهام محجوزة للممرض المؤهل فقط", "tasks reserved for qualified nurses", "activités réservées", "yalnızca diplomalı hemşireye ayrılan görevler"],
  ["Hemiplegie", "شلل نصفي كامل", "paralysis of one side", "hémiplégie", "yarım felç"],
  ["Spastik", "تشنّج عضلي", "spasticity", "spasticité", "spastisite"],
  ["Pflegebedürftig", "محتاج للرعاية", "in need of care", "dépendant", "bakıma muhtaç"],
];

export interface GlossEntry {
  de: string;
  tr: Record<Exclude<Lang, "de">, string>;
}

export const GLOSSARY: GlossEntry[] = ROWS.map(([de, ar, en, fr, tr]) => ({ de, tr: { ar, en, fr, tr } }));

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const byLower = new Map(GLOSSARY.map((g) => [g.de.toLowerCase(), g]));
// Längere Begriffe zuerst, damit "Dekubitusprophylaxe" vor "Dekubitus" greift.
export const GLOSS_RE = new RegExp(
  `(?<![\\p{L}])(${[...GLOSSARY].sort((a, b) => b.de.length - a.de.length).map((g) => esc(g.de)).join("|")})(?:n|en|s|e|es|er|innen)?(?![\\p{L}])`,
  "gu"
);

export function lookup(word: string): GlossEntry | undefined {
  return byLower.get(word.toLowerCase());
}

export type GlossPart = string | { text: string; entry: GlossEntry };

/** Teilt einen Text in normalen Text und erkannte Fachwörter. Jedes Wort wird je Aufruf nur einmal markiert. */
export function splitGloss(text: string, seen: Set<string>): GlossPart[] {
  const out: GlossPart[] = [];
  let last = 0;
  for (const m of text.matchAll(GLOSS_RE)) {
    const entry = lookup(m[1]);
    if (!entry || seen.has(entry.de)) continue;
    seen.add(entry.de);
    if (m.index! > last) out.push(text.slice(last, m.index));
    out.push({ text: m[0], entry });
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : [text];
}
