import { l10n, type L10n } from "@/lib/i18n";

/** Bestandteile der Organabbildungen (Farbe wie in der Zeichnung). Reihenfolge der Sprachen: de | ar | en | fr | tr. */
export interface OrganPart {
  color: string;
  name: L10n;
}
const row = (color: string, s: string): OrganPart => {
  const [de, ar, en, fr, tr] = s.split("|");
  return { color, name: l10n(de, ar, en, fr, tr) };
};

export const ORGAN_TITLE: Record<string, L10n> = {
  herz: l10n("Herz", "القلب", "Heart", "Cœur", "Kalp"),
  atmung: l10n("Lunge und Atemwege", "الرئتان والمجاري التنفسية", "Lungs and airways", "Poumons et voies respiratoires", "Akciğerler ve solunum yolları"),
  nerven: l10n("Gehirn", "الدماغ", "Brain", "Cerveau", "Beyin"),
  verdauung: l10n("Verdauungssystem", "الجهاز الهضمي", "Digestive system", "Système digestif", "Sindirim sistemi"),
  niere: l10n("Niere und Harnwege", "الكلية والمسالك البولية", "Kidney and urinary tract", "Rein et voies urinaires", "Böbrek ve idrar yolları"),
  haut: l10n("Haut", "الجلد", "Skin", "Peau", "Deri"),
  blut: l10n("Blut", "الدم", "Blood", "Sang", "Kan"),
  bewegung: l10n("Kniegelenk", "مفصل الركبة", "Knee joint", "Articulation du genou", "Diz eklemi"),
  psyche: l10n("Kopf und Gehirn", "الرأس والدماغ", "Head and brain", "Tête et cerveau", "Baş ve beyin"),
  sinne: l10n("Auge", "العين", "Eye", "Œil", "Göz"),
  geschlecht: l10n("Weibliche Geschlechtsorgane", "الأعضاء التناسلية الأنثوية", "Female reproductive organs", "Organes génitaux féminins", "Kadın üreme organları"),
  infektion: l10n("Erreger und Abwehr", "مسببات المرض والدفاع", "Pathogens and defence", "Agents pathogènes et défense", "Etkenler ve savunma"),
  stoffwechsel: l10n("Bauchspeicheldrüse", "البنكرياس", "Pancreas", "Pancréas", "Pankreas"),
  schmerz: l10n("Nervenzelle und Schmerz", "الخلية العصبية والألم", "Nerve cell and pain", "Neurone et douleur", "Sinir hücresi ve ağrı"),
  notfall: l10n("Notfall: Herz und EKG", "الطوارئ: القلب وتخطيط القلب", "Emergency: heart and ECG", "Urgence : cœur et ECG", "Acil: kalp ve EKG"),
};

export const ORGAN_PARTS: Record<string, OrganPart[]> = {
  herz: [
    row("#e8545f", "Linke Herzkammer|البطين الأيسر|Left ventricle|Ventricule gauche|Sol karıncık"),
    row("#f08a8f", "Rechte Herzkammer|البطين الأيمن|Right ventricle|Ventricule droit|Sağ karıncık"),
    row("#b8334a", "Rechter Vorhof|الأذين الأيمن|Right atrium|Oreillette droite|Sağ kulakçık"),
    row("#9c2233", "Linker Vorhof (Herzohr)|الأذين الأيسر (الزائدة)|Left atrium (appendage)|Oreillette gauche (auricule)|Sol kulakçık (kulakçık kulağı)"),
    row("#e0303c", "Aorta (Hauptschlagader)|الأبهر (الشريان الرئيسي)|Aorta|Aorte|Aort (ana atardamar)"),
    row("#6b83cc", "Lungenarterie|الشريان الرئوي|Pulmonary artery|Artère pulmonaire|Akciğer atardamarı"),
    row("#4f74c2", "Obere Hohlvene|الوريد الأجوف العلوي|Superior vena cava|Veine cave supérieure|Üst ana toplardamar"),
    row("#ffb54d", "Herzkranzgefäße (Koronararterien)|الشرايين التاجية|Coronary arteries|Artères coronaires|Koroner damarlar"),
  ],
  atmung: [
    row("#bcd3e6", "Luftröhre|القصبة الهوائية|Trachea|Trachée|Nefes borusu (trakea)"),
    row("#4b7fb0", "Bronchien|الشعب الهوائية|Bronchi|Bronches|Bronşlar"),
    row("#f6b3b8", "Rechte Lunge (3 Lappen)|الرئة اليمنى (3 فصوص)|Right lung (3 lobes)|Poumon droit (3 lobes)|Sağ akciğer (3 lob)"),
    row("#f9c0c4", "Linke Lunge (2 Lappen)|الرئة اليسرى (فصان)|Left lung (2 lobes)|Poumon gauche (2 lobes)|Sol akciğer (2 lob)"),
    row("#4b7fb0", "Lungenbläschen (Alveolen)|الحويصلات الهوائية|Alveoli|Alvéoles|Alveoller"),
    row("#9aa5b1", "Zwerchfell|الحجاب الحاجز|Diaphragm|Diaphragme|Diyafram"),
  ],
  nerven: [
    row("#f2a7a0", "Stirnlappen (Denken, Bewegung)|الفص الجبهي (التفكير والحركة)|Frontal lobe (thinking, movement)|Lobe frontal (pensée, mouvement)|Frontal lob (düşünme, hareket)"),
    row("#f7c97e", "Scheitellappen (Gefühl, Tasten)|الفص الجداري (الإحساس واللمس)|Parietal lobe (sensation)|Lobe pariétal (sensibilité)|Parietal lob (duyu)"),
    row("#9dc4e8", "Hinterhauptlappen (Sehen)|الفص القذالي (الرؤية)|Occipital lobe (vision)|Lobe occipital (vision)|Oksipital lob (görme)"),
    row("#a9d29a", "Schläfenlappen (Hören, Gedächtnis)|الفص الصدغي (السمع والذاكرة)|Temporal lobe (hearing, memory)|Lobe temporal (audition, mémoire)|Temporal lob (işitme, hafıza)"),
    row("#d9a577", "Kleinhirn (Gleichgewicht)|المخيخ (التوازن)|Cerebellum (balance)|Cervelet (équilibre)|Beyincik (denge)"),
    row("#e6bfa6", "Hirnstamm|جذع الدماغ|Brainstem|Tronc cérébral|Beyin sapı"),
    row("#f0d8c8", "Rückenmark|النخاع الشوكي|Spinal cord|Moelle épinière|Omurilik"),
  ],
  verdauung: [
    row("#d97b85", "Speiseröhre|المريء|Oesophagus|Œsophage|Yemek borusu"),
    row("#d9707a", "Magen|المعدة|Stomach|Estomac|Mide"),
    row("#b86a46", "Leber|الكبد|Liver|Foie|Karaciğer"),
    row("#4f9a5f", "Gallenblase|المرارة|Gallbladder|Vésicule biliaire|Safra kesesi"),
    row("#f2c94c", "Bauchspeicheldrüse|البنكرياس|Pancreas|Pancréas|Pankreas"),
    row("#f2937f", "Dünndarm|الأمعاء الدقيقة|Small intestine|Intestin grêle|İnce bağırsak"),
    row("#e48d63", "Dickdarm|الأمعاء الغليظة|Large intestine|Gros intestin|Kalın bağırsak"),
  ],
  niere: [
    row("#c24a58", "Nieren|الكليتان|Kidneys|Reins|Böbrekler"),
    row("#f6dc7a", "Nierenbecken|حوض الكلية|Renal pelvis|Bassinet|Böbrek pelvisi"),
    row("#f2cf5c", "Harnleiter|الحالبان|Ureters|Uretères|Üreterler"),
    row("#d9b13d", "Harnblase|المثانة|Bladder|Vessie|Mesane"),
    row("#e0303c", "Bauchaorta|الأبهر البطني|Abdominal aorta|Aorte abdominale|Karın aortu"),
    row("#4f74c2", "Untere Hohlvene|الوريد الأجوف السفلي|Inferior vena cava|Veine cave inférieure|Alt ana toplardamar"),
  ],
  haut: [
    row("#f1b88f", "Oberhaut (Epidermis)|البشرة|Epidermis|Épiderme|Epidermis"),
    row("#ee9d86", "Lederhaut (Dermis)|الأدمة|Dermis|Derme|Dermis"),
    row("#f8e3a6", "Unterhaut (Fettgewebe)|النسيج تحت الجلد (الدهون)|Subcutis (fat tissue)|Hypoderme (tissu adipeux)|Deri altı (yağ dokusu)"),
    row("#7a5238", "Haar und Haarwurzel|الشعرة وجذرها|Hair and follicle|Poil et follicule|Kıl ve kıl kökü"),
    row("#f8d977", "Talgdrüse|الغدة الدهنية|Sebaceous gland|Glande sébacée|Yağ bezi"),
    row("#4aa3a0", "Schweißdrüse|الغدة العرقية|Sweat gland|Glande sudoripare|Ter bezi"),
    row("#d4343f", "Blutgefäße|الأوعية الدموية|Blood vessels|Vaisseaux sanguins|Kan damarları"),
  ],
  blut: [
    row("#ee4b57", "Rote Blutkörperchen (Sauerstoff)|كريات الدم الحمراء (الأكسجين)|Red blood cells (oxygen)|Globules rouges (oxygène)|Alyuvarlar (oksijen)"),
    row("#7a5bc0", "Weiße Blutkörperchen (Abwehr)|كريات الدم البيضاء (الدفاع)|White blood cells (defence)|Globules blancs (défense)|Akyuvarlar (savunma)"),
    row("#f2c94c", "Blutplättchen (Gerinnung)|الصفائح الدموية (التخثر)|Platelets (clotting)|Plaquettes (coagulation)|Trombositler (pıhtılaşma)"),
    row("#c4535e", "Gefäßwand|جدار الوعاء الدموي|Vessel wall|Paroi du vaisseau|Damar duvarı"),
  ],
  bewegung: [
    row("#cdbb8c", "Oberschenkelknochen (Femur)|عظم الفخذ|Thigh bone (femur)|Fémur|Uyluk kemiği (femur)"),
    row("#cdbb8c", "Schienbein (Tibia)|عظم الظنبوب|Shin bone (tibia)|Tibia|Kaval kemiği (tibia)"),
    row("#fff", "Kniescheibe (Patella)|الرضفة|Kneecap (patella)|Rotule|Diz kapağı (patella)"),
    row("#9fd1e8", "Gelenkknorpel|غضروف المفصل|Articular cartilage|Cartilage articulaire|Eklem kıkırdağı"),
    row("#e9eef2", "Menisken|الغضروفان الهلاليان|Menisci|Ménisques|Menisküsler"),
    row("#c94b57", "Kreuzbänder|الرباطان الصليبيان|Cruciate ligaments|Ligaments croisés|Çapraz bağlar"),
    row("#d7efff", "Schleimbeutel / Gelenkflüssigkeit|الجراب / السائل المفصلي|Bursa / joint fluid|Bourse / liquide articulaire|Bursa / eklem sıvısı"),
  ],
  psyche: [
    row("#f2cdae", "Kopf und Gesicht|الرأس والوجه|Head and face|Tête et visage|Baş ve yüz"),
    row("#f9b9c4", "Großhirn (Denken, Gefühle)|المخ (التفكير والمشاعر)|Cerebrum (thinking, emotions)|Cerveau (pensée, émotions)|Beyin (düşünce, duygular)"),
    row("#d9a577", "Kleinhirn|المخيخ|Cerebellum|Cervelet|Beyincik"),
    row("#9a8bd8", "Gedanken und Gefühle|الأفكار والمشاعر|Thoughts and feelings|Pensées et émotions|Düşünceler ve duygular"),
  ],
  sinne: [
    row("#f6f7f9", "Lederhaut (Sklera)|الصلبة|Sclera|Sclérotique|Sklera"),
    row("#eaf5fb", "Hornhaut (Kornea)|القرنية|Cornea|Cornée|Kornea"),
    row("#2b5f8a", "Regenbogenhaut (Iris)|القزحية|Iris|Iris|İris"),
    row("#fff0b8", "Linse|العدسة|Lens|Cristallin|Lens (mercek)"),
    row("#d4e9f4", "Glaskörper|الجسم الزجاجي|Vitreous body|Corps vitré|Camsı cisim"),
    row("#e2553c", "Netzhaut (Retina)|الشبكية|Retina|Rétine|Retina"),
    row("#f0c44a", "Sehnerv|العصب البصري|Optic nerve|Nerf optique|Görme siniri"),
  ],
  geschlecht: [
    row("#f1a2ae", "Gebärmutter|الرحم|Uterus|Utérus|Rahim"),
    row("#e58d9a", "Eileiter|قناتا فالوب|Fallopian tubes|Trompes de Fallope|Fallop tüpleri"),
    row("#f6c58f", "Eierstöcke|المبيضان|Ovaries|Ovaires|Yumurtalıklar"),
    row("#d9697f", "Gebärmutterhals|عنق الرحم|Cervix|Col de l'utérus|Rahim ağzı"),
    row("#e58d9a", "Scheide|المهبل|Vagina|Vagin|Vajina"),
  ],
  infektion: [
    row("#e8744a", "Virus|فيروس|Virus|Virus|Virüs"),
    row("#6fbf73", "Bakterien (Stäbchen)|بكتيريا (عصوية)|Bacteria (rods)|Bactéries (bâtonnets)|Bakteriler (çomak)"),
    row("#dfe8f6", "Abwehrzelle (weißes Blutkörperchen)|خلية دفاعية (كرية بيضاء)|Defence cell (white blood cell)|Cellule de défense (globule blanc)|Savunma hücresi (akyuvar)"),
    row("#7a5bc0", "Zellkern|النواة|Cell nucleus|Noyau|Hücre çekirdeği"),
  ],
  stoffwechsel: [
    row("#f6d68a", "Bauchspeicheldrüse|البنكرياس|Pancreas|Pancréas|Pankreas"),
    row("#c88a2c", "Ausführungsgang|القناة البنكرياسية|Pancreatic duct|Canal pancréatique|Pankreas kanalı"),
    row("#ee9a8c", "Zwölffingerdarm|الاثنا عشري|Duodenum|Duodénum|Onikiparmak bağırsağı"),
    row("#4aa3d9", "Insulin / Zucker im Blut|الإنسولين / سكر الدم|Insulin / blood sugar|Insuline / glycémie|İnsülin / kan şekeri"),
  ],
  schmerz: [
    row("#f6c85a", "Zellkörper|جسم الخلية|Cell body|Corps cellulaire|Hücre gövdesi"),
    row("#e8a63a", "Dendriten|الزوائد الشجرية|Dendrites|Dendrites|Dendritler"),
    row("#f0d9a0", "Axon (Nervenfaser)|المحور العصبي|Axon (nerve fibre)|Axone (fibre nerveuse)|Akson (sinir lifi)"),
    row("#fff3c4", "Myelinscheide|غمد الميالين|Myelin sheath|Gaine de myéline|Miyelin kılıf"),
    row("#ff5a3c", "Schmerzsignal|إشارة الألم|Pain signal|Signal de douleur|Ağrı sinyali"),
  ],
  notfall: [
    row("#ee5560", "Herz|القلب|Heart|Cœur|Kalp"),
    row("#ffffff", "Rotes Kreuz: Hilfe|الصليب: المساعدة|Cross: first aid|Croix : premiers secours|Haç: ilk yardım"),
    row("#e8545f", "EKG-Linie|خط تخطيط القلب|ECG trace|Tracé ECG|EKG çizgisi"),
  ],
};
