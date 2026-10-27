/**
 * Zusätzliche Krankheitslehre (Blut, Nerven, Bewegung, Sinne, Haut, Geschlechtsorgane, Psyche, Infektionen).
 * Lernhilfe der App in einfachem Deutsch, in eigenen Worten zusammengefasst – KEIN Buchtext.
 * Quelle zum Nachlesen: Thieme „I care – PflegeExamen KOMPAKT“, Kap. 59–66 (Stand des Buchs: 2019).
 * Werte, Leitlinien und Medikamente ändern sich – immer aktuell prüfen. Anordnungen gehen vor.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const BUCH_KRANK_2: Lesson[] = [
  // ───────── Blut und Immunsystem ─────────
  {
    id: "anaemie", group: "krank", area: "blut", title: "Anämie (Blutarmut)", icon: "Droplet",
    ar: "فقر الدم: انخفاض الهيموغلوبين أو الهيماتوكريت عن الطبيعي. غالباً نزيف أو نقص حديد. أعراض: شحوب، تسرع القلب، هبوط ضغط، دوار. التحليل: MCV وMCH تحدد النوع. التمريض: انتبه لعلامات النزيف الهضمي.",
    blocks: [
      B("Definition", "Hämoglobin oder Hämatokrit liegen unter der Norm."),
      B("Symptome", "Blässe, Schwäche, Kopfschmerzen, Schwindel, Tachykardie, niedriger Blutdruck.", "Bei akuter Blutung steigt der Puls, bevor der Hb-Wert messbar fällt. Pulsmessung ist deshalb besonders wichtig."),
      B("Einteilung nach MCV und MCH", "Beide erniedrigt (mikrozytär, hypochrom): meist Eisenmangel, oft durch chronische Blutverluste. Weiter abklären mit Magen- und Darmspiegelung.", "Beide normal (normozytär, normochrom): oft akute Blutung oder Enzymdefekt der roten Blutkörperchen.", "Beide erhöht (makrozytär, hyperchrom): meist Mangel an Folsäure oder Vitamin B12, z. B. perniziöse Anämie."),
      B("Therapie", "Grunderkrankung behandeln. Eisenpräparate. Bei Hb unter 10 g/dl ggf. Erythrozytenkonzentrate."),
      B("Pflege", "Auf Warnzeichen einer Magen-Darm-Blutung achten, Haut beobachten, Stuhl beobachten (Eisen kann den Stuhl dunkel färben, nicht mit Teerstuhl verwechseln).", "Auf Eisen, Folsäure und Vitamin B12 in der Ernährung achten."),
    ],
  },
  {
    id: "leukaemie-lymphom", group: "krank", area: "blut", title: "Leukämie und Lymphome", icon: "Ribbon",
    ar: "اللوكيميا: سرطان نخاع العظم مع تكاثر خلايا بيضاء غير ناضجة، حاد (أشد) أو مزمن. اللمفوما: ورم الخلايا اللمفاوية، عقد متضخمة قاسية غير مؤلمة. العلاج: كيماوي، إشعاع، زرع. أعراض B: حمى، تعرق ليلي، فقدان وزن.",
    blocks: [
      B("Einordnung", "Leukämie: Krebs einer Stammzelle im Knochenmark (Blutkrebs).", "Malignes Lymphom: Krebs der Lymphozyten im lymphatischen Gewebe (Lymphdrüsenkrebs).", "Myelodysplastisches Syndrom (MDS): Vorstufe einer Leukämie."),
      B("Leukämie", "Unreife Leukozyten vermehren sich unkontrolliert und verdrängen gesunde Blutzellen. Akut = meist schwerer, chronisch = meist leichter. Ein Übergang chronisch zu akut ist oft lebensbedrohlich.", "Symptome: Abgeschlagenheit, Gewichtsverlust, Nachtschweiß, geschwollene Lymphknoten, spontane Infekte und Blutungen.", "Therapie: meist nach Studienprogrammen, oft Chemotherapie, danach Stammzelltransplantation."),
      B("Malignes Lymphom", "Leitsymptom: derbe, schmerzlose Lymphknotenschwellung (oft am Hals).", "Diagnostik: histologische Untersuchung eines vollständig entfernten Lymphknotens, Staging mit Ultraschall und CT.", "Therapie: Chemo und Strahlen, evtl. Antikörper. Bei Kinderwunsch vorher Eizellen oder Samen entnehmen.", "Regelmäßige Nachsorge wegen Zweittumoren."),
      B("Pflege", "Komplikationen erkennen, Infektionen vermeiden, psychisch unterstützen. Siehe auch die Lektion zur Pflege bei bösartigen Tumoren."),
    ],
  },
  {
    id: "hiv", group: "krank", area: "blut", title: "HIV-Infektion und AIDS", icon: "Ribbon",
    ar: "فيروس HIV يصيب الخلايا التائية ويضعف المناعة. ينتقل عبر الدم والجنس والولادة، ولا ينتقل بالمصافحة أو التقبيل. بعد التعرض: وقاية ما بعد التعرض (PEP) بسرعة. العلاج المضاد للفيروسات (ART) يعطي عمراً شبه طبيعي.",
    blocks: [
      B("Übertragung", "Blut-zu-Blut-Kontakt, Sexualverkehr, Nadelstichverletzung, Geburt.", "Küssen, Händeschütteln und einfache Berührung sind ungefährlich."),
      B("Verlauf", "Akute HIV-Krankheit (grippeähnlich), dann symptomfreie Phase über Jahre, dann symptomatische Phase (Viren steigen, T-Zellen sinken), schließlich AIDS mit typischen Erkrankungen wie CMV-Pneumonie, Kaposi-Sarkom, Soor."),
      B("Therapie", "Antiretrovirale Therapie (ART). Bei zuverlässiger Einnahme besteht eine nahezu normale Lebenserwartung."),
      B("Pflege", "Nach möglicher Ansteckung (Nadelstich): sofort Arzt und schnell Postexpositionsprophylaxe einnehmen.", "Eigenschutz beachten, Infektionsprophylaxe, Beratung und psychosoziale Begleitung."),
    ],
  },
  {
    id: "autoimmun-allergie", group: "krank", area: "blut", title: "Autoimmunerkrankungen und Allergien", icon: "Wind",
    ar: "المناعة الذاتية: الجسم يهاجم نفسه (هاشيموتو، سكري النوع 1، فقر الدم الخبيث؛ أو جهازية: روماتويد، ذئبة). الحساسية: نوع I الأشيع، هستامين، قد يصل لصدمة تأقية. أفضل حماية: تجنب المثير.",
    blocks: [
      B("Autoimmunerkrankungen", "Das Immunsystem richtet sich gegen den eigenen Körper.", "Organspezifisch: Hashimoto-Thyreoiditis, Diabetes Typ 1 (Zerstörung der Beta-Zellen), perniziöse Anämie (Antikörper gegen den Intrinsic Factor, Vitamin-B12-Mangel).", "Systemisch: rheumatoide Arthritis, Kollagenosen wie systemischer Lupus (SLE), Vaskulitiden."),
      B("Allergien", "Überempfindlichkeit gegen Umweltstoffe wie Pollen, Wespengift, Metall. Es gibt 4 Typen.", "Typ I (häufig, z. B. Heuschnupfen, Wespenstich): Mastzellen setzen Histamin frei. Symptome von Hautjucken bis anaphylaktischem Schock.", "Therapie: Allergenkarenz (beste Wirkung), Hyposensibilisierung, Antihistaminika, Glukokortikoide."),
    ],
  },

  // ───────── Nerven ─────────
  {
    id: "sht", group: "krank", area: "nerven", title: "Schädel-Hirn-Trauma (SHT) und Hirntumor", icon: "HardHat",
    ar: "إصابة الدماغ: تُصنف بمقياس غلاسكو للغيبوبة (خفيفة، متوسطة، شديدة). أعراض: اضطراب وعي، فقدان ذاكرة، صداع، قيء. خطر: وذمة وارتفاع ضغط الدماغ. المراقبة 24 ساعة على الأقل. سائل من الأنف أو الأذن قد يكون سائلاً دماغياً شوكياً.",
    blocks: [
      B("SHT", "Einteilung nach Glasgow Coma Scale: leicht, mittelschwer, schwer.", "Symptome: Bewusstseinsstörung, Erinnerungslücke, Kopfschmerzen, Schwindel, Übelkeit, Erbrechen, neurologische Ausfälle.", "Gefahr: Hirnschwellung und Hirndruck. Mindestens 24 Stunden überwachen.", "Diagnostik: Anamnese, CT, Untersuchung. Flüssigkeit aus Nase oder Ohren kann Liquor sein, sofort melden."),
      B("Hirntumor", "Gutartige Tumoren schaden durch Raumforderung, bösartige wachsen in das gesunde Gewebe.", "Primär: aus Hirngewebe (z. B. Glioblastom). Sekundär: Metastasen anderer Tumoren."),
      B("Pflege bei Hirndruck", "Auf Zeichen achten: Bewusstseinsstörung, Bluthochdruck, Bradykardie, Pupillenunterschied. Sofort Arzt informieren."),
    ],
  },
  {
    id: "zns-entzuendung", group: "krank", area: "nerven", title: "Entzündungen des Nervensystems: Meningitis, Enzephalitis, FSME, Borreliose", icon: "Brain",
    ar: "التهاب السحايا (غالباً أشد إذا كان بكتيرياً)، التهاب الدماغ (غالباً فيروسي؛ الهربس قاتل جداً)، FSME (فيروس القراد، يوجد لقاح)، بوريليا (بكتيريا القراد، لا لقاح، علاج بالمضاد). ومرض التصلب المتعدد (MS) مناعي ذاتي.",
    blocks: [
      B("Meningitis", "Meist infektiöse Entzündung von Hirn- und Rückenmarkshäuten. Bakterielle Formen verlaufen meist schwerer als virale.", "Gefürchtet bei Kindern: Meningokokken-Sepsis (Waterhouse-Friderichsen-Syndrom)."),
      B("Enzephalitis", "Entzündung des Gehirns, meist viral. Die Herpes-simplex-Enzephalitis hat eine sehr hohe Sterblichkeit (im Buch ca. 70 %)."),
      B("Zecken", "FSME: Virus, übertragen durch Zecken, Impfung möglich.", "Borreliose: Bakterien (Borrelien), ebenfalls Zecken, keine Impfung, Behandlung mit Antibiotika."),
      B("Multiple Sklerose (MS)", "Autoimmune Entzündung mit Abbau der Markscheiden, Ursache unklar.", "Medikamente können den Verlauf nur verzögern.", "Pflege: bedarfsgerechte Prophylaxen (Harnwegsinfekt, Sturz, Pneumonie), psychosoziale Begleitung, Hitze vermeiden (kann Symptome verschlechtern), Hinweis auf Beratung (DMSG)."),
    ],
  },
  {
    id: "huntington-als", group: "krank", area: "nerven", title: "Chorea Huntington und ALS", icon: "Orbit",
    ar: "هنتنغتون: وراثي، حركات لا إرادية زائدة ثم خرف؛ 50% احتمال انتقاله للأبناء، وحاجة سعرات أعلى. ALS: تنكس الخلايا العصبية الحركية، ضعف وشلل، صعوبة بلع وكلام، السبب الأشيع للوفاة شلل عضلات التنفس؛ الإدراك محفوظ.",
    blocks: [
      B("Chorea Huntington", "Vererbter Gendefekt, hemmende Nervenzellen gehen zugrunde. Folge: plötzliche, unwillkürliche Bewegungen (zu viel Bewegung), später Demenz und schwere Schluckstörung mit Kachexie.", "Kinder Betroffener erkranken mit 50 % Wahrscheinlichkeit: genetische Beratung auch für die Familienplanung.", "Nicht heilbar. Neuroleptika oder Dopaminantagonisten lindern. Pflege: ausreichend Kalorien, weil die Bewegung viel Energie verbraucht."),
      B("Amyotrophe Lateralsklerose (ALS)", "Motoneurone in Gehirn und Rückenmark sterben ab. Zuerst Zuckungen und Lähmungen in den Händen, später Arme und Beine, Schluck- und Sprechstörungen.", "Typisch: spastische und schlaffe Lähmungen gleichzeitig. Kognitive Fähigkeiten bleiben erhalten.", "Häufigste Todesursache: Lähmung der Atemmuskulatur. Riluzol kann früh den Verlauf kurz bremsen. Nicht heilbar, Pflege und Therapie begleiten und lindern."),
    ],
  },
  {
    id: "querschnitt", group: "krank", area: "nerven", title: "Querschnittsyndrom", icon: "Accessibility",
    ar: "متلازمة الشلل النصفي: تضرر الحبل الشوكي مع فقدان وظائف ما تحته. غالباً حادث. في المرحلة الحادة: مراقبة الضغط والنبض (خطر هبوط ضغط وتوقف). الوقاية: رئة، قرحة، جلطة، تقلص، إمساك. تطبيق مفاهيم بوباث والتحفيز القاعدي.",
    blocks: [
      B("Was ist das?", "Das Rückenmark ist im Querschnitt geschädigt, die Funktionen darunter fallen aus. Häufigste Ursache: Unfall. Symptome hängen von Art, Ort und Ausmaß ab."),
      B("Akutphase", "Blutdruck und Herzfrequenz engmaschig kontrollieren (Hypotonie- und Asystoliegefahr). Therapie unter anderem Entlastung des Rückenmarks."),
      B("Pflege", "Mobilisation und Körperpflege nach Bobath und Basaler Stimulation, Ressourcen erhalten, Geh- und Sitzübungen der Physiotherapie in den Alltag einbauen, Hilfsmittel einüben.", "Temperatur von Körper, Raum und Wasser kontrollieren: Temperaturempfinden und Schwitzen sind gestört.", "Ausscheidung: Blase regelmäßig und vollständig entleeren (evtl. Katheterisierung nach Anordnung), Darmentleerung regelmäßig sicherstellen.", "Prophylaxen: Pneumonie (besonders bei Atemhilfsmuskel-Lähmung), Dekubitus, Thrombose, Kontraktur, Obstipation."),
    ],
  },
  {
    id: "kopfschmerz-nerven", group: "krank", area: "nerven", title: "Kopfschmerzen, Karpaltunnel und Guillain-Barré", icon: "Bandage",
    ar: "أنواع الصداع: توتري، شقيقة (جانب واحد، غثيان، حساسية للضوء والصوت)، ألم العصب مثلث التوائم. متلازمة النفق الرسغي: ضغط العصب المتوسط. غيلان باريه: شلل صاعد مناعي قد يصل للتنفس، غالباً يتحسن.",
    blocks: [
      B("Kopf- und Gesichtsschmerzen", "Spannungskopfschmerz: mittlere Stärke, keine neurologischen Begleitzeichen.", "Migräne: meist einseitige Attacken, Übelkeit, Erbrechen, Licht- und Lärmempfindlichkeit.", "Trigeminusneuralgie: einseitiger, attackenartiger, starker Gesichtsschmerz."),
      B("Karpaltunnelsyndrom", "Der Medianusnerv wird im Karpaltunnel eingeengt (Entzündung, Verletzung, Diabetes, Schwangerschaft).", "Kribbeln, Schmerzen, Taubheit in der Hand, Feinmotorik und Kraft lassen nach.", "Behandlung: Ruhigstellen und entzündungshemmende Mittel, sonst Operation (Dach des Karpaltunnels wird gespalten).", "Nach OP: Schmerzmanagement, Arm hochlagern, Durchblutung der Finger prüfen. Bei blauen Fingern, Nachblutung, Gefühlsstörung oder Hämatom sofort Arzt."),
      B("Guillain-Barré-Syndrom", "Akute Autoimmunentzündung peripherer Nerven, die Markscheiden werden zerstört.", "Aufsteigende Lähmungen: Füße, Beine, Hände, Arme, Rumpf, schließlich Atemmuskulatur und Gesicht. Bradykardie möglich.", "Meist heilt es nach Wochen zurück. Oft Intensivstation mit Beatmung, evtl. Plasmapherese.", "Pflege: Prophylaxen, gründliche Mundpflege, Ernährungsunterstützung, die Patienten beruhigen: Symptome sind sehr wahrscheinlich vorübergehend."),
    ],
  },
  {
    id: "anlagestoerung-nerven", group: "krank", area: "nerven", title: "Neuralrohrdefekt und infantile Zerebralparese", icon: "Baby",
    ar: "عيوب الأنبوب العصبي: تشوهات النخاع والدماغ (الوقاية: حمض الفوليك في بداية الحمل). الشلل الدماغي الطفولي: تلف دماغي حول الولادة مع عجز حركي وربما إعاقة ذهنية. راقب علامات ارتفاع ضغط الدماغ (استسقاء).",
    blocks: [
      B("Neuralrohrdefekte", "Fehlbildungen von Rückenmark und Gehirn mit unklarer Ursache. Folgen z. B. Lähmungen.", "Vorbeugung: Folsäure in der Frühschwangerschaft."),
      B("Infantile Zerebralparese", "Schädigung des Gehirns rund um die Geburt, mit motorischen Defekten, oft zusätzlichen neurologischen Ausfällen und Intelligenzminderung."),
      B("Pflege", "Pflege wie beim Querschnittsyndrom. Bei Verschlusshydrozephalus auf Hirndruck achten: Bewusstseinsstörung, Bluthochdruck, Bradykardie, Pupillenunterschied."),
    ],
  },

  // ───────── Bewegungsapparat ─────────
  {
    id: "bewegungssystem-pflege", group: "krank", area: "bewegung", title: "Bewegungssystem: Pflegeschwerpunkte", icon: "Bone",
    ar: "أمراض الجهاز الحركي: رضية (التواء، خلع، كسر، بتر)، تقويمية (فصال، هشاشة)، روماتيزمية (التهاب مفاصل، بختريف). التمريض: تخفيف الألم، تشجيع الحركة، وقاية، مراقبة DMS بعد العملية.",
    blocks: [
      B("Einteilung", "Traumatologisch: Distorsion, Luxation, Fraktur, Amputation.", "Orthopädisch: Arthrose, Osteoporose.", "Rheumatisch: rheumatoide Arthritis, Morbus Bechterew."),
      B("Pflegeschwerpunkte", "Schmerzen reduzieren: Analgetika, Kälte oder Wärme.", "Bewegung fördern: Positionierung und Mobilisation (mit Hilfsmitteln), Sturzprophylaxe.", "Bei Bettruhe oder Immobilität: Dekubitus-, Pneumonie- und Thromboseprophylaxe.", "Nach OP: Vitalzeichen und DMS-Kontrolle (Durchblutung, Motorik, Sensibilität), Verbandwechsel, Entzündungszeichen.", "Unterstützung bei Essen, Körperpflege und Ausscheidung. Medikamentenmanagement besonders bei Rheuma.", "Informieren, schulen, anleiten, beraten mit dem Ziel Selbstständigkeit."),
    ],
  },
  {
    id: "bandscheibe", group: "krank", area: "bewegung", title: "Bandscheibenvorfall und Spinalkanalstenose", icon: "ArrowLeft",
    ar: "الانزلاق الغضروفي: ضغط نسيج القرص على الأعصاب. ألم ظهر وربما شلل أو خدر. خطر: متلازمة ذيل الفرس (خدر «سروال الركوب») = عملية فورية. 90% يعالج بدون جراحة. تضيق القناة الشوكية: ألم يخف بالانحناء للأمام.",
    blocks: [
      B("Bandscheibenvorfall", "Bandscheibengewebe drückt im Wirbelkanal auf Nerven. Formen: Protrusion, Prolaps, Sequester.", "Symptome: Rückenschmerz, evtl. Ausfälle, Schonhaltung.", "Komplikationen: Cauda-Syndrom und Konus-Syndrom (lebensgefährlich, sofort operieren; „Reithosenanästhesie“ an der Oberschenkelinnenseite), Wurzeltod bei dauerhaftem Funktionsausfall.", "Diagnostik: Reflexe, Lasègue-Test, MRT."),
      B("Therapie", "In etwa 90 % konservativ: Schmerzmittel, ggf. Kortison-Spritze, Physio, Wärme, Massagen.", "Operation bei anhaltenden Schmerzen und Lähmungen."),
      B("Pflege", "Schmerzmanagement, evtl. Stufenbettlagerung bei lumbalem Vorfall.", "Anleiten: Beim Bücken in die Hocke gehen und Rücken gestreckt halten; Aufstehen über Seitenlage (Beine anziehen, en bloc drehen, seitlich hochdrücken).", "Bei Gefühlsstörung: Wassertemperatur beachten.", "Nach OP: Schmerz, Drainage (Liquor?), Beweglichkeit und Gefühl der Gliedmaßen, Nierentätigkeit, en bloc drehen, möglichst nicht sitzen."),
      B("Spinalkanalstenose", "Der Wirbelkanal ist durch Knochen oder Weichteile eingeengt (Abnutzung, Tumor, Entzündung).", "Halsbereich: Nackenschmerz, Ausstrahlung in den Arm, Gefühlsstörungen, Blasen- und Mastdarmstörungen. Lendenbereich: Schmerz und Gefühlsstörung in den Beinen, besser bei Vorbeugen.", "Therapie konservativ, bei Ausfällen Erweiterung des Kanals. Pflege wie beim Bandscheibenvorfall."),
    ],
  },

  // ───────── Sinnesorgane ─────────
  {
    id: "auge", group: "krank", area: "sinne", title: "Augenerkrankungen", icon: "Eye",
    ar: "أمراض العين: التهاب الملتحمة، المياه البيضاء (عتامة العدسة)، الزرق (ضغط العين)، التنكس البقعي. عند ضعف البصر: اشرح كثيراً، وقاية من السقوط، نظافة اليدين عند وضع القطرات.",
    blocks: [
      B("Wichtige Krankheiten", "Konjunktivitis: Bindehautentzündung (infektiös, chemisch oder allergisch). Therapie Augentropfen und Augenpflege. Bei Hornhautentzündung (Keratitis) besteht Erblindungsgefahr.", "Katarakt (grauer Star): Trübung der Linse, oft altersbedingt.", "Glaukom (grüner Star): erhöhter Augeninnendruck, der Sehnerv wird geschädigt, Erblindungsgefahr.", "Altersbedingte Makuladegeneration: Zerstörung der Lichtsinneszellen."),
      B("Pflege", "In der Kommunikation die schwache Sehkraft berücksichtigen, viel erklären, Sturzprophylaxe.", "Augenmedikamente: besonders auf Händehygiene achten.", "Bei Sehbehinderung oder Blindheit: Grundkrankheit behandeln, Hilfsmittel und Orientierungs- und Mobilitätstraining vermitteln.", "Augenpflege bei sedierten Patienten: mit NaCl 0,9 % getränkte Kompressen von außen nach innen."),
    ],
  },
  {
    id: "ohr", group: "krank", area: "sinne", title: "Ohrerkrankungen und Hörstörungen", icon: "Ear",
    ar: "أمراض الأذن: التهاب الأذن الوسطى (شائع عند الصغار)، ورم كوليستيتومي، طنين. أسباب ضعف السمع: شمع، صمم مفاجئ، ضوضاء، سن. التواصل: وجه لوجه، كلمات واضحة، لمس. تحذير عند غسل الأذن: دوار.",
    blocks: [
      B("Aufbau", "Außenohr, Mittelohr (Gehörknöchelchen, Ohrtrompete), Innenohr (Hörschnecke und Gleichgewichtsorgan)."),
      B("Krankheitsbilder", "Mittelohrentzündung: häufig bei Kleinkindern (kurze Ohrtrompete). Vorbeugung: abschwellende Nasentropfen bei Schnupfen. Therapie: NSAR. Pflege: Schmerzmanagement.", "Cholesteatom: Plattenepithel wuchert ins Mittelohr, oft nach chronischer Mittelohrentzündung.", "Tinnitus: dauerhaftes Geräusch im Ohr, Therapie schwierig, Betroffene psychisch oft belastet.", "Schwerhörigkeit: z. B. Ohrenschmalz, Hörsturz, Lärm, Alter, Entzündung, Fehlbildung. Gehörlosigkeit teils mit Cochlea-Implantat behandelbar."),
      B("Pflege", "Bei Schwerhörigkeit mit Gesten und Berührung arbeiten, deutlich und strukturiert sprechen, ansehen (Lippenlesen).", "Ohrentropfen: auf Körpertemperatur wärmen, behandeltes Ohr nach oben lagern, Ohrmuschel nach hinten oben ziehen, danach etwa 15 Minuten liegen bleiben.", "Ohren nur mit klarem Wasser waschen, keine Wattestäbchen.", "Vorsicht bei Ohrspülung: kann Drehschwindel und Kreislaufschwankungen auslösen."),
    ],
  },

  // ───────── Haut ─────────
  {
    id: "hauterkrankungen", group: "krank", area: "haut", title: "Hauterkrankungen und Juckreiz", icon: "Pipette",
    ar: "أمراض الجلد: مزمنة (صدفية، أكزيما أتوبية)، معدية (التهاب جريبات، فطور) أو خبيثة (باسالي). الحكة والألم أشيع الأعراض. بدائل الحك: الضغط بالأظافر، الطرق، كرة تدليك، التبريد، أدوية.",
    blocks: [
      B("Ursachen", "Chronisch: Psoriasis, Neurodermitis. Infektiös: Follikulitis, Candidose. Bösartig: z. B. Basaliom."),
      B("Häufigste Symptome", "Juckreiz und Schmerzen."),
      B("Bei Juckreiz", "Kratzalternativen: Nägel fest auf die juckende Stelle drücken, die Stelle beklopfen, Massageball sanft darüberrollen.", "Schwitzen und Reibung vermeiden, kühlen, entspannen.", "Medikamente nach Anordnung: Glukokortikoide, Antihistaminika."),
    ],
  },

  // ───────── Geschlechtsorgane ─────────
  {
    id: "frauen-organe", group: "krank", area: "geschlecht", title: "Wichtige Erkrankungen der weiblichen Geschlechtsorgane", icon: "Flower2",
    ar: "أمراض الجهاز التناسلي الأنثوي: سرطان الثدي (كتلة صلبة غير متحركة؛ بعد الاستئصال: الوقاية من الوذمة اللمفية)، سرطان عنق الرحم (لقاح HPV)، سرطان بطانة الرحم، بطانة الرحم المهاجرة، هبوط الرحم.",
    blocks: [
      B("Mammakarzinom (Brustkrebs)", "Erste Zeichen: derbe, wenig verschiebbare Verhärtung, Hautveränderungen, Asymmetrie.", "Therapie: möglichst brusterhaltende OP, ggf. Lymphknotenentfernung, Chemo und Bestrahlung.", "Pflege nach Mastektomie: Lymphödem vermeiden (Arm hochlagern, keine Blutdruckmessung oder Spritzen am Operationsarm), Kontrakturenprophylaxe, psychosoziale Unterstützung."),
      B("Zervixkarzinom", "Betrifft nicht selten Frauen unter 40. Früh behandelbar durch Konisation. HPV-Impfung senkt das Risiko deutlich."),
      B("Endometriumkarzinom", "Betrifft vor allem ältere Frauen. Therapie: Gebärmutterentfernung (Hysterektomie), ggf. weitere Organe."),
      B("Endometriose, Descensus und Prolaps", "Endometriose: versprengtes Gebärmuttergewebe, z. B. im Bauchraum, Probleme durch zyklusabhängige Blutungen. OP oder Hormone.", "Descensus und Prolaps uteri: Therapie je nach Befund, von Beckenbodentraining bis Hysterektomie."),
      B("Pflege nach Hysterektomie", "Auf Blutungen und Entzündungszeichen achten, Dauerkatheter kontrollieren, Genitalspülungen 1- bis 2-mal täglich, Beckenboden stärken."),
    ],
  },
  {
    id: "maenner-organe", group: "krank", area: "geschlecht", title: "Wichtige Erkrankungen der männlichen Geschlechtsorgane", icon: "Diamond",
    ar: "أمراض الجهاز التناسلي الذكري: التهاب البروستاتا، تضخم البروستاتا الحميد (TUR-P)، سرطان البروستاتا (استئصال جذري)، ورم الخصية (عقدة غير مؤلمة)، التواء الخصية = طوارئ، ضيق القلفة.",
    blocks: [
      B("Prostatitis", "Symptome: Schmerzen beim Wasserlassen, Blut im Urin, unvollständige Entleerung, Schmerzen, Fieber. Pflege: weicher Stuhl, Bettruhe, evtl. Wärme."),
      B("Gutartige Prostatavergrößerung", "Die Prostata wächst, bis sie einen Harnstau verursacht. Therapie z. B. TUR-P.", "Nach OP: Nachblutungen beobachten, Spülung über Spülkatheter, Kostaufbau, Verbandwechsel, ballaststoffreiche Kost."),
      B("Prostatakarzinom", "Zeichen: Blasenentleerungsstörung oder Rückenschmerz (Metastasen). Therapie oft radikale Prostatektomie.", "Nach OP: Vitalzeichen, Urin auf Blut, Drainage- und Wundpflege, Mobilisation, Obstipationsprophylaxe, Unterstützung bei Inkontinenz."),
      B("Hoden und Vorhaut", "Hodentumor: schmerzloser derber Knoten, Schwere- und Druckgefühl. Nach OP Hoden hochlagern und kühlen.", "Hodentorsion: Notfall! Der Hoden muss rasch reponiert werden, sonst droht Nekrose.", "Phimose: Vorhautverengung, Therapie Zirkumzision."),
    ],
  },
  {
    id: "sti", group: "krank", area: "geschlecht", title: "Sexuell übertragbare Krankheiten", icon: "ShieldCheck",
    ar: "الأمراض المنقولة جنسياً: السيلان (الكلاميديا، الهربس التناسلي، التهاب الكبد B وC، HIV أيضاً). السيلان: إفراز قيحي وألم بول، قد يسبب عقماً. تشخيص بمسحة ومضاد حيوي.",
    blocks: [
      B("Zu den STI zählen", "Gonorrhö, Chlamydien, Herpes genitalis, Hepatitis B und C, HIV."),
      B("Gonorrhö (Tripper)", "Erreger: Gonokokken. Eitriger Ausfluss, Schmerzen beim Wasserlassen.", "Aufsteigende Erreger: bei Frauen Eileiterentzündung, bei Männern Nebenhoden- und Prostataentzündung, Folge kann Unfruchtbarkeit sein.", "Diagnose per Abstrich und Antibiogramm, Therapie mit Antibiotika."),
    ],
  },

  // ───────── Psyche ─────────
  {
    id: "schizophrenie", group: "krank", area: "psyche", title: "Schizophrenie", icon: "Tornado",
    ar: "الفصام: اضطراب يؤثر على التفكير والإدراك والمشاعر. أعراض إيجابية (هذيان، هلوسة، اضطراب الأنا) وسلبية (فتور، فقدان دافع). العلاج: مضادات الذهان والعلاج النفسي التثقيفي. لا تناقش الهذيان ولا تقل إنه خطأ. خطر انتحار مرتفع.",
    blocks: [
      B("Was ist das?", "Psychische Störung mit Wahn, Halluzinationen, Wahrnehmungs- und Denkstörungen und Ich-Störungen. Etwa 1 % der Bevölkerung. Beginn meist zwischen 15 und 35 Jahren."),
      B("Symptome", "Plussymptome: Wahn (z. B. Verfolgungswahn), Halluzinationen, Ich-Störungen, Denkstörungen (Gedankensprünge).", "Minussymptome: Antriebslosigkeit, Niedergeschlagenheit, Gefühlsarmut."),
      B("Ursachen", "Vermutlich mehrere: Genetik, Botenstoffe (Dopamin, Glutamat), Hirnveränderungen, frühe Hirnschädigung, belastende Erlebnisse und Familien mit viel Kritik oder Überbehütung (High Expressed Emotions)."),
      B("Therapie", "Neuroleptika (z. B. Risperidon), Psychotherapie und Psychoedukation, Soziotherapie."),
      B("Pflege", "Medikamente: unter Aufsicht, beobachten, beraten. Untermischen in Speisen oder Getränke ist nicht zulässig (Körperverletzung).", "Wahn, Angst und Halluzinationen nicht in Frage stellen oder wegdiskutieren. Sachliche Themen (Aktuelles, Hobbys, Sport) fördern den Realitätsbezug. Religion und Philosophie meiden.", "Klar, eindeutig und authentisch kommunizieren, Nähe und Distanz beachten.", "Erhöhtes Suizidrisiko (10 bis 15 % sterben durch Suizid), auch wenn es dem Patienten besser geht. In Akutphasen kann Fremdaggression auftreten. Genaue Beobachtung ist wichtig.", "Ernährung und Trinken beobachten (Vergiftungswahn). Bei wahnbesetzter Bezugspflegekraft Zuständigkeit neu regeln."),
    ],
  },
  {
    id: "affektive-stoerung", group: "krank", area: "psyche", title: "Affektive Störungen: Depression, Manie, bipolar", icon: "Drama",
    ar: "الاضطرابات العاطفية: اكتئاب (حزن، فقدان اهتمام، قلة دافع)، هوس (نشاط زائد وفرح مبالغ)، ثنائي القطب (مزيج). العلاج: مضادات اكتئاب وعلاج نفسي. انتبه لأي إشارة انتحار. لا تدع المريض يجمع الأدوية.",
    blocks: [
      B("Formen", "Depression: Niedergeschlagenheit, Interessenverlust, verminderter Antrieb, Rückzug, Angst.", "Manie: gesteigerter Antrieb, übertriebene Fröhlichkeit, Überaktivität.", "Bipolare affektive Störung: Wechsel beider Phasen."),
      B("Depression im Detail", "Etwa 18 von 100 Menschen erkranken im Leben. Ursachen: familiäre Veranlagung, Störung der Botenstoffe (Serotonin, Dopamin, Noradrenalin), belastende Lebenssituationen.", "Zeigt sich im Denken (Grübeln, Selbstvorwürfe), Fühlen (Leere, Angst), Verhalten (Rückzug) und Körper (Appetitlosigkeit, Schlafstörung, Kopfschmerz, Engegefühl)."),
      B("Therapie", "Antidepressiva (z. B. Fluoxetin, Paroxetin), Gesprächstherapie, Bewegung, Schlafentzug oder Elektrokrampftherapie in ausgewählten Fällen."),
      B("Pflege", "Antidepressiva regelmäßig und kontrolliert geben. In Überdosis und mit Alkohol können sie lebensgefährlich sein. Darauf achten, dass Tabletten nicht gesammelt werden.", "Schlafentzugstherapie: wecken laut Plan, beschäftigen und begleiten, Kreislauf kontrollieren.", "Jeden Hinweis auf Suizidgedanken aufmerksam registrieren und melden, besonders wenn der Antrieb zunimmt.", "Essen und Trinken beobachten, zur Körperpflege behutsam motivieren, Obstipation vorbeugen, Schlafrituale fördern.", "Bei Manie: auf angemessenes Nähe-Distanz-Verhältnis achten."),
    ],
  },
  {
    id: "alkohol-sucht", group: "krank", area: "psyche", title: "Alkoholabhängigkeit und Entzug", icon: "Wine",
    ar: "الإدمان على الكحول: العلاج بثلاث خطوات: سحب السموم (Entgiftung)، الفطام (Entwöhnung)، التأهيل. في الانسحاب راقب الأعراض؛ الهذيان الارتعاشي (Delir) يحتاج إبلاغ الطبيب فوراً.",
    blocks: [
      B("Drei Therapieschritte", "Entgiftung (Entzug), Entwöhnung, Rehabilitation."),
      B("Pflege im Entzug", "Motivieren und unterstützen. Entzugssymptome beobachten (Zittern, Schwitzen, Unruhe, Herzrasen).", "Bei Alkoholentzugsdelir sofort Arzt informieren.", "Angehörige und Bezugspersonen im Blick behalten: Gefahr oder Ressource?"),
    ],
  },
  {
    id: "essstoerungen", group: "krank", area: "psyche", title: "Essstörungen: Anorexie und Bulimie", icon: "Utensils",
    ar: "اضطرابات الأكل: فقدان الشهية العصبي (تشويه صورة الجسم وخوف من زيادة الوزن، عدم إدراك المرض) والنهام (نوبات أكل ثم إجراءات تعويضية كالقيء). التمريض: علاقة مهنية، مرافقة الوجبات، مراقبة الوزن، ضم الأهل.",
    blocks: [
      B("Anorexia nervosa", "Seelisch bedingte Essstörung mit verzerrter Selbstwahrnehmung (fühlt sich trotz Abmagerung zu dick), großer Angst vor Gewichtszunahme und fehlender Krankheitseinsicht.", "Folgen: Osteoporose, Nierenfunktionsstörung, Unfruchtbarkeit, zerstörter Zahnschmelz.", "Betrifft vor allem Mädchen in der Pubertät. Die Kontrolle über das Essen soll das Gefühl der Unzulänglichkeit ausgleichen."),
      B("Bulimie", "Wiederkehrende, unkontrollierbare Essanfälle mit Gegenmaßnahmen (Erbrechen, Abführmittel, Diäten, übermäßiger Sport). Meist normalgewichtig.", "Symptome: Schuldgefühle, Angst vor Gewichtszunahme, Bauchschmerzen, Elektrolytverschiebung, Ödeme, Herzrhythmusstörungen, Zahnschäden."),
      B("Behandlung", "Ernährungstherapie (Essplan, begleitetes Essen), Psychotherapie (z. B. Verhaltenstherapie), Familieneinbezug, Gruppen- und Kunsttherapie."),
      B("Pflege", "Professionelle Beziehung aufbauen und Selbstbewusstsein stärken.", "Verbindliche Vereinbarungen treffen, Mahlzeiten begleiten, auf Täuschungsversuche achten, Körpergewicht überwachen, Mangelzeichen erkennen, Angehörige einbeziehen."),
    ],
  },
  {
    id: "delir", group: "krank", area: "psyche", title: "Delir (akute Verwirrtheit)", icon: "Orbit",
    ar: "الهذيان: حالة ارتباك حادة مع اضطراب الوعي والإدراك (تشوش، هلوسة، قلق، قلب إيقاع النوم). أسباب: سكتة، نقص سوائل، هبوط سكر، حمى، انسحاب الكحول، نقل لمكان جديد. العلاج: السبب، وتمريض مرجعي وروتين وسوائل.",
    blocks: [
      B("Ursachen", "Schädel-Hirn-Trauma, Schlaganfall, Flüssigkeitsmangel, Unterzuckerung, hohes Fieber, Alkoholentzug, Umzug in eine Pflegeeinrichtung oder Verlust der gewohnten Umgebung. Nach Operationen: postoperatives Delir."),
      B("Symptome", "Gedächtnis- und Konzentrationsstörungen, Desorientierung (Ort, Zeit, Situation), evtl. Halluzinationen, Unruhe, Schlaflosigkeit, Aggressivität, Schwitzen, Umkehr des Schlaf-Wach-Rhythmus."),
      B("Therapie und Pflege", "Grunderkrankung behandeln, bei Bedarf kurzzeitig Beruhigungsmittel.", "Bezugspflege, fester Tagesablauf, ausreichend Flüssigkeit, Prophylaxen, Sicherheit.", "Nicht allein lassen, ruhig und orientierend ansprechen, bekannte Gegenstände und Personen einbeziehen."),
      B("Abgrenzung", "Delir ist plötzlich und meist vorübergehend; Demenz ist chronisch und fortschreitend."),
    ],
  },
  {
    id: "belastung-angst", group: "krank", area: "psyche", title: "Belastungsstörungen, Angst und Zwang", icon: "CloudRain",
    ar: "اضطرابات الضغط (حادة، تكيفية، PTSD: ذكريات مفاجئة وفزع وانسحاب)، القلق (مرتبط بموقف أو لا، معمّم، نوبات هلع)، الوسواس القهري. التمريض: علاقة ثقة، عدم التقليل من الهلع، تقليل المثيرات، تنفس عميق، خطة طوارئ.",
    blocks: [
      B("Akute Belastungsreaktion", "Tritt kurz nach einem traumatischen Ereignis auf (Tod, Gewalt, Unfall), schnell wechselnde Symptome."),
      B("Anpassungsstörung", "Nach einschneidender Veränderung (Tod des Partners, Flucht): depressive Verstimmung mit Ängsten oder Rückzug, klingt meist in spätestens einem halben Jahr ab."),
      B("Posttraumatische Belastungsstörung (PTBS)", "Zeichen: Flashbacks, Schreckhaftigkeit, Angst, Depression, Rückzug, Teilnahmslosigkeit, Schlafstörungen. Verlauf kann Jahre dauern.", "Drei Phasen: Stabilisierung (Symptome lindern; der Patient bestimmt, worüber er spricht), Bearbeitung (Trauma in der Therapie aufarbeiten), Integration (Alltag und Beziehungen wiederherstellen)."),
      B("Angststörungen", "Situationsabhängig (Phobien wie Flugangst) oder unabhängig. Generalisierte Angststörung: diffuse, anhaltende Angst. Panikstörung: plötzliche Angst.", "Therapie: Medikamente plus Verhaltenstherapie (Konfrontation mit dem Angstreiz)."),
      B("Zwangsstörung", "Gedanken oder Handlungen, die ausgeführt werden müssen (Waschzwang, Zählzwang), um ein befürchtetes Unheil abzuwenden. Therapie: Antidepressiva und Verhaltenstherapie."),
      B("Bei einer Panikattacke", "Angst und Panik nicht herunterspielen. Vom Auslöser abschirmen, reizarme Umgebung, nicht allein lassen.", "Ablenken, Fokus auf ruhige tiefe Atmung lenken.", "Danach Auslöser erfassen und einen persönlichen Notfallplan erarbeiten."),
    ],
  },
  {
    id: "psych-pflege", group: "krank", area: "psyche", title: "Psychiatrische Pflege: Beziehung und herausfordernde Situationen", icon: "Compass",
    ar: "التمريض النفسي: ملاحظة موضوعية وذاتية وبمقاييس، علاقة مهنية مع الحفاظ على المسافة، إشراف على الدواء، التعامل مع العدوانية بالهدوء وخفض التصعيد، لا تترك مريضاً انتحارياً وحده، واطلب مساعدة الزملاء.",
    blocks: [
      B("Beobachtung und Beziehung", "Beobachtung objektiv und subjektiv, gestützt auf Assessments.", "Professionelle Beziehung: empathische Nähe, aber Distanz wahren."),
      B("Medikamente", "Gabe in der Regel unter Aufsicht, Wirkung und Nebenwirkung beobachten, informieren und beraten, Spiegelkontrollen durchführen lassen."),
      B("Herausfordernde Situationen", "Nach dem Stufenmodell zur Deeskalation von Gewalt und Aggression vorgehen.", "Gefährdung des Patienten und seines Umfelds richtig einschätzen.", "Bei Aggression ruhig bleiben, bei fortgesetzter Aggression freiheitsbeschränkende Maßnahmen erwägen (rechtliche Vorgaben beachten).", "Suizidale Patienten mit ihren Gedanken nie allein lassen.", "Selbst kollegiale Hilfe suchen."),
    ],
  },

  // ───────── Infektionen ─────────
  {
    id: "kinderkrankheiten", group: "krank", area: "infektion", title: "Masern, Mumps, Röteln, Windpocken, Gürtelrose", icon: "CircleDot",
    ar: "عدوى فيروسية شديدة العدوى ومبلَّغ عنها، غالباً بالطفولة: الحصبة (طفح متدامج، بقع كوبليك)، الحصبة الألمانية (بقع منفصلة)، الجديري (حويصلات بمراحل مختلفة «سماء مرصعة بالنجوم»)، النكاف (تورم الغدة النكفية)، الحزام الناري (عودة الفيروس).",
    blocks: [
      B("Allgemein", "Hochansteckende, meldepflichtige Virusinfekte, meistens im Kindesalter (außer Herpes zoster). Vorbeugung durch Impfung nach STIKO-Empfehlung."),
      B("Masern", "Frühzeichen: Fieber, Schnupfen, trockener Husten, Bindehautentzündung, Lichtscheu, Koplik-Flecken (weiße Flecken an der Wangenschleimhaut). Nach kurzem Fieberabfall steigt das Fieber erneut und der Ausschlag erscheint: erhabene bräunlich-rosa, zusammenfließende Flecken, zuerst hinter den Ohren, dann Gesicht und Körper.", "Komplikationen: Pneumonie, Mittelohrentzündung, gefürchtet die Masernenzephalitis.", "Pflege: Isolation, Bettruhe, Zimmer abdunkeln, engmaschige Vitalzeichen, Fieber senken."),
      B("Erkennen am Ausschlag", "Masern: Flecken fließen ineinander, eher erhaben.", "Röteln: kleine, scharf abgegrenzte Einzelflecken.", "Windpocken: gleichzeitig Bläschen in verschiedenen Stadien (prall, geplatzt, verkrustet = „Sternenhimmel“).", "Mumps: Schwellung der Ohrspeicheldrüse."),
      B("Herpes zoster (Gürtelrose)", "Die Varizella-Zoster-Viren bleiben in Nervenknoten und werden später wieder aktiv. Typisch im Alter, bei Stress, Immunschwäche und Tumorerkrankung."),
    ],
  },
  {
    id: "clostridien", group: "krank", area: "infektion", title: "Clostridien: Tetanus und C. difficile", icon: "Microscope",
    ar: "المطثيات: بكتيريا لاهوائية تسبب التيتانوس، الغرغرينا الغازية، التسمم الوشيقي، والتهاب القولون بـ C. difficile (بعد المضادات الحيوية). التيتانوس: ابتسامة ساخرة، قفل الفك. تأكد من لقاح التيتانوس لكل جرح.",
    blocks: [
      B("Gemeinsames", "Clostridien sind Anaerobier: Sie wachsen ohne Sauerstoff (Erde, tiefe Wunden, Konserven, Darm). Sie bilden gefährliche Toxine. Voll ausgeprägte Krankheitsbilder sind lebensbedrohlich und werden intensivmedizinisch überwacht.", "Erkrankungen: Botulismus, Gasbrand, Tetanus, C.-difficile-Kolitis."),
      B("Tetanus (Wundstarrkrampf)", "Eintrittspforte meist eine verschmutzte Hautwunde. Das Gift Tetanospasmin führt zu Muskelkrämpfen.", "Zeichen: Risus sardonicus (fixiertes Grinsen), Kiefersperre, Überstreckung von Nacken und Rücken.", "Therapie: Antitoxin, Wundtoilette, Antibiotika, ggf. Sedierung und Beatmung. Impfung im Säuglingsalter mit regelmäßiger Auffrischung.", "Merke: Bei jeder Hautverletzung fragen, wann zuletzt gegen Tetanus geimpft wurde. Ist es unklar, aktive und passive Impfung nach Arztanordnung."),
      B("Clostridium difficile", "Harmloses Darmbakterium bei Gesunden. Nach bestimmten Antibiotika (z. B. Clindamycin, Cephalosporine) kann es sich stark vermehren und eine schwere Kolitis auslösen.", "Zeichen: Fieber, Bauchschmerzen, Dehydratation. Komplikationen: pseudomembranöse Kolitis, toxisches Megakolon, Sepsis.", "Therapie: gezielte Antibiotika (z. B. Metronidazol oder Vancomycin).", "Pflege: gründliche Hautpflege im Analbereich, Schmerzmanagement, Darmblutungen beobachten, Isolation und Hygiene."),
    ],
  },
  {
    id: "legionellen-salmonellen", group: "krank", area: "infektion", title: "Legionellose und Salmonellose", icon: "Egg",
    ar: "الفيلقية: تُبلَّغ، تنتج عن استنشاق رذاذ ملوث، تصيب الجهاز التنفسي، علاجها بمضاد حيوي. السالمونيلا: تُبلَّغ، عدوى فموية بطعام ملوث، حمى وإسهال وقيء؛ سوائل وإلكتروليتات ونظافة وعزل عند اللزوم.",
    blocks: [
      B("Legionellose", "Meldepflichtig. Erreger Legionella pneumophila. Ansteckung durch Einatmen erregerhaltiger Tröpfchen (z. B. aus Wassersystemen).", "Erkältungsähnliche Symptome oder Pneumonie. Therapie: Antibiotika. Pflege bei Fieber."),
      B("Salmonellose", "Meldepflichtig. Erreger Salmonellen, Infektion über kontaminierte Nahrung.", "Fieber, Übelkeit, Bauchschmerzen, Erbrechen, Durchfall.", "Pflege: Flüssigkeit und Elektrolyte ersetzen, ggf. isolieren, strikte Hygiene, Pflege je nach Symptomen."),
    ],
  },
];
