/**
 * Kurze Szenen zu den 30 Fallbeispielen (Ort, Beteiligte, Ablauf, Kernproblem).
 * Das sind Zusammenfassungen der App auf Basis der Fallsituationen – keine Buchtexte.
 * Maßgeblich bleibt der Originaltext des Falls.
 */
import { l10n, type L10n } from "@/lib/i18n";

export type Place = "klinik" | "notaufnahme" | "heim" | "ambulant" | "wg" | "festival" | "team";
export type RoleKey = "patient" | "kind" | "pflege" | "azubi" | "angehoerig" | "team" | "arzt";
export interface ScenePerson {
  name: string;
  role: RoleKey;
  age?: number;
}
export interface SceneStep {
  icon: string;
  t: L10n;
}
export interface CaseScene {
  id: string;
  place: Place;
  who: ScenePerson[];
  steps: SceneStep[];
  problem: L10n;
}

const st = (icon: string, de: string, ar: string, en: string, fr: string, tr: string): SceneStep => ({ icon, t: l10n(de, ar, en, fr, tr) });
const p = (name: string, role: RoleKey, age?: number): ScenePerson => ({ name, role, age });

export const SCENES: CaseScene[] = [
  {
    id: "f01", place: "klinik",
    who: [p("Sophie Schmidt", "kind", 14), p("Artur Albrecht", "azubi", 18), p("Ingrid Rust", "pflege", 57), p("Tomasz Kowalski", "pflege", 35)],
    steps: [
      st("Moon", "Nachtdienst auf der neurologischen Station.", "مناوبة ليلية في قسم الأعصاب.", "Night shift on the neurology ward.", "Garde de nuit en neurologie.", "Nörolji servisinde gece vardiyası."),
      st("Bandage", "Sophie hat Migräne, erbricht und trocknet aus.", "صوفي تعاني من شقيقة وقيء وجفاف.", "Sophie has a migraine, vomits and is dehydrating.", "Sophie a une migraine, vomit et se déshydrate.", "Sophie'de migren, kusma ve sıvı kaybı var."),
      st("ClipboardList", "Azubi Artur übergibt die Informationen mit SBAR.", "المتدرّب آرتور ينقل المعلومات بنموذج SBAR.", "Trainee Artur hands over the information using SBAR.", "Le stagiaire Artur transmet les informations avec SBAR.", "Stajyer Artur bilgileri SBAR ile devreder."),
    ],
    problem: l10n("Konflikt im Team und im Zimmer – wie handelt der Azubi richtig?", "نزاع داخل الفريق وفي الغرفة. كيف يتصرف المتدرّب بشكل صحيح؟", "Conflict in the team and in the room: how should the trainee act?", "Conflit dans l'équipe et dans la chambre : comment le stagiaire doit-il agir ?", "Ekipte ve odada çatışma var: stajyer nasıl doğru davranır?"),
  },
  {
    id: "f02", place: "klinik",
    who: [p("Paul Faber", "kind", 10), p("Patricia Zimmermann", "azubi", 19), p("Elisabeth und Edmund", "angehoerig"), p("Bruno", "kind", 3)],
    steps: [
      st("Hospital", "Paul liegt wegen Leukämie auf der Kinderonkologie.", "بول في قسم أورام الأطفال بسبب سرطان الدم.", "Paul is on the children's oncology ward with leukaemia.", "Paul est en oncologie pédiatrique pour une leucémie.", "Paul lösemi nedeniyle çocuk onkolojisinde yatıyor."),
      st("Syringe", "Er bekommt eine Chemotherapie, Besuche sind eingeschränkt.", "يتلقى علاجاً كيميائياً والزيارات محدودة.", "He receives chemotherapy; visits are restricted.", "Il reçoit une chimiothérapie ; les visites sont limitées.", "Kemoterapi alıyor, ziyaretler kısıtlı."),
      st("House", "Paul will nach Hause.", "بول يريد العودة إلى البيت.", "Paul wants to go home.", "Paul veut rentrer à la maison.", "Paul eve gitmek istiyor."),
    ],
    problem: l10n("Wunsch des Kindes, Sorgen der Eltern und die Rolle der Auszubildenden.", "رغبة الطفل، قلق الوالدين، ودور المتدرّبة.", "The child's wish, the parents' worries and the trainee's role.", "Le souhait de l'enfant, l'inquiétude des parents et le rôle de la stagiaire.", "Çocuğun isteği, ailenin endişeleri ve stajyerin rolü."),
  },
  {
    id: "f03", place: "klinik",
    who: [p("Max Obermaier", "patient", 19), p("Linus Dahlmann", "pflege", 25)],
    steps: [
      st("Waves", "Max bricht in der Schwimmhalle zusammen.", "ماكس ينهار في المسبح.", "Max collapses in the swimming hall.", "Max s'effondre à la piscine.", "Max yüzme salonunda yığılıyor."),
      st("Droplet", "Schwere Unterzuckerung bei Diabetes Typ 1.", "هبوط شديد في السكر مع السكري من النوع الأول.", "Severe hypoglycaemia with type 1 diabetes.", "Hypoglycémie sévère avec diabète de type 1.", "Tip 1 diyabette ağır hipoglisemi."),
      st("VolumeX", "Auf der Diabetesstation zeigt sich sein Geheimnis: Bulimie.", "في قسم السكري يظهر سرّه: البوليميا.", "On the diabetes ward his secret comes out: bulimia.", "Dans le service, son secret apparaît : la boulimie.", "Diyabet servisinde sırrı ortaya çıkıyor: bulimya."),
    ],
    problem: l10n("Diabetes und Essstörung gemeinsam pflegen und beraten.", "رعاية وإرشاد مريض يجمع بين السكري واضطراب الأكل.", "Caring for and advising a patient with diabetes and an eating disorder.", "Soigner et conseiller un patient diabétique et boulimique.", "Diyabet ve yeme bozukluğu olan hastaya bakım ve danışmanlık."),
  },
  {
    id: "f04", place: "wg",
    who: [p("Emilia Gerstenkorn", "kind", 8), p("Laura Sommerfeldt", "azubi", 19)],
    steps: [
      st("Flower", "Emilia lebt in der Kinderwohngruppe „Löwenzahn“.", "إميليا تعيش في مجموعة الأطفال السكنية «Löwenzahn».", "Emilia lives in the children's group home “Löwenzahn”.", "Emilia vit dans le foyer pour enfants « Löwenzahn ».", "Emilia “Löwenzahn” çocuk yaşam grubunda yaşıyor."),
      st("ShowerHead", "Sie will sich nicht waschen und das Zimmer nicht verlassen.", "ترفض الاستحمام ومغادرة غرفتها.", "She refuses to wash and to leave her room.", "Elle refuse de se laver et de quitter sa chambre.", "Yıkanmak ve odadan çıkmak istemiyor."),
      st("MessageCircle", "Azubi Laura sucht einen Zugang zu ihr.", "المتدرّبة لورا تبحث عن طريقة للتواصل معها.", "Trainee Laura looks for a way to reach her.", "La stagiaire Laura cherche un moyen d'établir le contact.", "Stajyer Laura ona ulaşmanın yolunu arıyor."),
    ],
    problem: l10n("Ein Kind mit Gewalt- und Vernachlässigungserfahrung braucht behutsame Pflege.", "طفلة عاشت العنف والإهمال تحتاج إلى رعاية لطيفة.", "A child with experiences of violence and neglect needs gentle care.", "Une enfant ayant vécu violence et négligence a besoin de soins délicats.", "Şiddet ve ihmal yaşamış çocuk özenli bakıma ihtiyaç duyuyor."),
  },
  {
    id: "f05", place: "ambulant",
    who: [p("Christine Mazur", "patient", 39), p("Pavel", "angehoerig"), p("Nina", "kind"), p("Anna Oblaski", "pflege")],
    steps: [
      st("Accessibility", "Frau Mazur hat MS und nutzt einen Elektrorollstuhl.", "السيدة مازور مصابة بالتصلّب المتعدد وتستخدم كرسياً كهربائياً.", "Ms Mazur has MS and uses an electric wheelchair.", "Mme Mazur a la SEP et utilise un fauteuil électrique.", "Bayan Mazur'da MS var, elektrikli tekerlekli sandalye kullanıyor."),
      st("House", "Der ambulante Dienst unterstützt die Familie zu Hause.", "خدمة الرعاية المنزلية تدعم الأسرة في البيت.", "A home care service supports the family at home.", "Un service à domicile soutient la famille.", "Evde bakım hizmeti aileye destek oluyor."),
      st("CloudRain", "Sie äußert einen besonderen Wunsch.", "تعبّر عن رغبة خاصة.", "She expresses a special wish.", "Elle exprime un souhait particulier.", "Özel bir istek dile getiriyor."),
    ],
    problem: l10n("Spastik, Schmerzen und der Wunsch der Patientin ernst nehmen.", "التشنّج والألم، وأخذ رغبة المريضة على محمل الجد.", "Spasticity, pain and taking the patient's wish seriously.", "Spasticité, douleur et prise en compte du souhait de la patiente.", "Spastisite, ağrı ve hastanın isteğini ciddiye almak."),
  },
  {
    id: "f06", place: "heim",
    who: [p("Paul Sommer", "patient", 73), p("Heidi Sommer", "patient", 72)],
    steps: [
      st("Building2", "Das Ehepaar lebt in einer Seniorenresidenz.", "الزوجان يعيشان في مجمّع سكني للمسنين.", "The couple lives in a senior residence.", "Le couple vit dans une résidence seniors.", "Çift bir yaşlı rezidansında yaşıyor."),
      st("Stethoscope", "Herr Sommer hat Morbus Crohn und ein Stoma.", "السيد سومر مصاب بداء كرون ولديه فغر.", "Mr Sommer has Crohn's disease and a stoma.", "M. Sommer a la maladie de Crohn et une stomie.", "Bay Sommer'de Crohn hastalığı ve stoma var."),
      st("Brain", "Seine Frau Heidi hatte einen Schlaganfall.", "زوجته هايدي أصيبت بسكتة دماغية.", "His wife Heidi had a stroke.", "Son épouse Heidi a eu un AVC.", "Eşi Heidi inme geçirdi."),
    ],
    problem: l10n("Ekel, Scham und Nähe im Pflegealltag.", "الاشمئزاز والخجل والقرب في العمل التمريضي اليومي.", "Disgust, shame and closeness in everyday care.", "Dégoût, honte et proximité dans les soins quotidiens.", "Bakım gündeliğinde tiksinti, utanç ve yakınlık."),
  },
  {
    id: "f07", place: "klinik",
    who: [p("Aslan Mammadov", "kind", 8), p("Nora Steinert", "pflege"), p("Leila", "angehoerig", 35), p("Günel", "angehoerig", 65)],
    steps: [
      st("Wind", "Aslan hat einen Asthmaanfall.", "أصلان يعاني من نوبة ربو.", "Aslan has an asthma attack.", "Aslan fait une crise d'asthme.", "Aslan'ın astım atağı var."),
      st("Hospital", "Er liegt in der Kinder-Pneumologie.", "هو في قسم أمراض رئة الأطفال.", "He is on the paediatric pneumology ward.", "Il est en pneumologie pédiatrique.", "Çocuk göğüs hastalıkları servisinde yatıyor."),
      st("Users", "Mutter und Großmutter sind dabei.", "الأم والجدة حاضرتان.", "His mother and grandmother are with him.", "Sa mère et sa grand-mère sont présentes.", "Annesi ve büyükannesi yanında."),
    ],
    problem: l10n("Atemnot beim Kind – Pflege und Angehörige einbeziehen.", "ضيق تنفس عند طفل: الرعاية وإشراك الأهل.", "Breathlessness in a child: care and involving the family.", "Détresse respiratoire chez un enfant : soins et implication de la famille.", "Çocukta nefes darlığı: bakım ve aileyi dahil etme."),
  },
  {
    id: "f08", place: "klinik",
    who: [p("Hannah Krüger", "patient", 26), p("Max (Baby)", "kind")],
    steps: [
      st("Baby", "Frau Krüger ist frisch entbunden, ihr Baby heißt Max.", "السيدة كروغر ولدت للتو وطفلها اسمه ماكس.", "Ms Krüger has just given birth; her baby is Max.", "Mme Krüger vient d'accoucher ; son bébé s'appelle Max.", "Bayan Krüger yeni doğum yaptı, bebeğinin adı Max."),
      st("Baby", "Sie hat einen Dammriss und Stillprobleme.", "لديها تمزّق في العجان ومشاكل في الإرضاع.", "She has a perineal tear and breastfeeding problems.", "Elle a une déchirure périnéale et des difficultés d'allaitement.", "Perine yırtığı ve emzirme sorunları var."),
      st("DoorOpen", "Die Schwiegermutter kommt mit ungewollten Ratschlägen.", "حماتها تزورها وتقدّم نصائح غير مرغوبة.", "Her mother-in-law visits with unwanted advice.", "Sa belle-mère vient avec des conseils non désirés.", "Kayınvalidesi istenmeyen tavsiyelerle ziyarete geliyor."),
    ],
    problem: l10n("Wochenbett, Stillen und ein schwieriger Besuch.", "النفاس والإرضاع وزيارة صعبة.", "Postpartum care, breastfeeding and a difficult visit.", "Post-partum, allaitement et une visite difficile.", "Lohusalık, emzirme ve zor bir ziyaret."),
  },
  {
    id: "f09", place: "notaufnahme",
    who: [p("Klaus-Dieter Beck", "patient", 60), p("Yoshi Hung", "pflege", 30)],
    steps: [
      st("Ambulance", "Herr Beck wird als Notfall aufgenommen.", "السيد بيك يُدخل كحالة طارئة.", "Mr Beck is admitted as an emergency.", "M. Beck est admis en urgence.", "Bay Beck acil olarak yatırılıyor."),
      st("Heart", "Er hat Bluthochdruck und eine Herzschwäche.", "لديه ارتفاع ضغط وقصور في القلب.", "He has high blood pressure and heart failure.", "Il a de l'hypertension et une insuffisance cardiaque.", "Hipertansiyonu ve kalp yetmezliği var."),
      st("BedDouble", "Pfleger Yoshi denkt an die Dekubitusprophylaxe.", "الممرض يوشي يفكر في الوقاية من قرح الضغط.", "Nurse Yoshi thinks about pressure ulcer prevention.", "L'infirmier Yoshi pense à la prévention des escarres.", "Hemşire Yoshi bası yarası önlemini düşünüyor."),
    ],
    problem: l10n("Lebensstil ändern – wie berät die Pflege?", "تغيير نمط الحياة: كيف يقدّم التمريض الإرشاد؟", "Changing one's lifestyle: how does nursing advise?", "Changer de mode de vie : comment les soignants conseillent-ils ?", "Yaşam tarzını değiştirmek: hemşirelik nasıl danışmanlık yapar?"),
  },
  {
    id: "f10", place: "ambulant",
    who: [p("Tom Barth", "kind"), p("Familie Wirtz", "angehoerig"), p("Carolyn Neubert", "azubi", 20), p("Claudia Thalberg", "pflege", 35)],
    steps: [
      st("House", "Tom (9 Monate) lebt bei seinen Pflegeeltern.", "توم (٩ أشهر) يعيش مع أسرته الحاضنة.", "Tom (9 months) lives with his foster family.", "Tom (9 mois) vit dans sa famille d'accueil.", "Tom (9 aylık) koruyucu ailesiyle yaşıyor."),
      st("Wind", "Der Kinderpflegedienst „Pusteblume“ besucht die Familie.", "خدمة رعاية الأطفال «Pusteblume» تزور الأسرة.", "The children's care service “Pusteblume” visits the family.", "Le service « Pusteblume » rend visite à la famille.", "“Pusteblume” çocuk bakım hizmeti aileyi ziyaret ediyor."),
      st("Milk", "Frühgeburt und Vernachlässigung prägen Toms Geschichte.", "الولادة المبكرة والإهمال جزء من قصة توم.", "Prematurity and neglect shape Tom's history.", "Prématurité et négligence marquent l'histoire de Tom.", "Erken doğum ve ihmal Tom'un geçmişini şekillendiriyor."),
    ],
    problem: l10n("Pflege im Zuhause einer Pflegefamilie.", "الرعاية في بيت أسرة حاضنة.", "Care in a foster family's home.", "Soins au domicile d'une famille d'accueil.", "Koruyucu aile evinde bakım."),
  },
  {
    id: "f11", place: "ambulant",
    who: [p("Susanna Amsel", "patient", 59), p("Paula Prisca", "pflege", 25), p("Sophia", "angehoerig")],
    steps: [
      st("House", "Frau Amsel lebt allein im 2. Stock.", "السيدة أمسل تعيش وحدها في الطابق الثاني.", "Ms Amsel lives alone on the 2nd floor.", "Mme Amsel vit seule au 2e étage.", "Bayan Amsel 2. katta yalnız yaşıyor."),
      st("TrendingDown", "Ihre MS verschlechtert sich, sie braucht einen Rollstuhl.", "يتدهور تصلّبها المتعدد وتحتاج كرسياً متحركاً.", "Her MS is getting worse; she needs a wheelchair.", "Sa SEP s'aggrave ; elle a besoin d'un fauteuil roulant.", "MS'i kötüleşiyor, tekerlekli sandalyeye ihtiyacı var."),
      st("Handshake", "Pflegedienst „Sonnenblume“ und Schwester Sophia helfen.", "خدمة «Sonnenblume» وأختها صوفيا تساعدان.", "The care service “Sonnenblume” and her sister Sophia help.", "Le service « Sonnenblume » et sa sœur Sophia aident.", "“Sonnenblume” hizmeti ve kız kardeşi Sophia yardım ediyor."),
    ],
    problem: l10n("Enttäuschung und Verschlechterung – wie geht es zu Hause weiter?", "خيبة أمل وتدهور: كيف تستمر الحياة في البيت؟", "Disappointment and decline: how does life at home continue?", "Déception et aggravation : comment continuer à domicile ?", "Hayal kırıklığı ve kötüleşme: evde nasıl devam edilir?"),
  },
  {
    id: "f12", place: "heim",
    who: [p("Ole Paulsen", "patient", 76)],
    steps: [
      st("Footprints", "Herr Paulsen hat pAVK und wurde am Bein operiert (Bypass).", "السيد بولسن لديه مرض الشرايين الطرفية وأجريت له جراحة مجازة.", "Mr Paulsen has PAD and had bypass surgery.", "M. Paulsen a une AOMI et a été opéré (pontage).", "Bay Paulsen'de pAVK var, bypass ameliyatı geçirdi."),
      st("Building2", "Er kehrt in die Residenz am Stadtpark zurück.", "يعود إلى «Residenz am Stadtpark».", "He returns to the Residenz am Stadtpark.", "Il retourne à la Residenz am Stadtpark.", "Residenz am Stadtpark'a geri dönüyor."),
      st("Cigarette", "Er raucht weiter und ist gesellig.", "يواصل التدخين وهو اجتماعي.", "He keeps smoking and is sociable.", "Il continue de fumer et est sociable.", "Sigara içmeye devam ediyor, sosyal biri."),
    ],
    problem: l10n("Gesundheit fördern, ohne zu bevormunden.", "تعزيز الصحة دون فرض الوصاية.", "Promoting health without being paternalistic.", "Promouvoir la santé sans paternalisme.", "Vesayet kurmadan sağlığı geliştirmek."),
  },
  {
    id: "f13", place: "festival",
    who: [p("Niklas Faraldo", "patient", 17), p("Erik", "angehoerig", 18)],
    steps: [
      st("Tent", "Auf einem Festival wird Niklas bewusstlos gefunden.", "في مهرجان يُعثر على نيكلاس فاقداً للوعي.", "At a festival Niklas is found unconscious.", "Lors d'un festival, Niklas est retrouvé inconscient.", "Festivalde Niklas bilinçsiz bulunuyor."),
      st("Ambulance", "Der Rettungsdienst bringt ihn in die Notaufnahme.", "الإسعاف ينقله إلى قسم الطوارئ.", "The rescue service takes him to the ER.", "Les secours l'emmènent aux urgences.", "Kurtarma ekibi onu acile götürüyor."),
      st("Zap", "Er hat Epilepsie; sein Freund Erik ist dabei.", "لديه صرع وصديقه إريك معه.", "He has epilepsy; his friend Erik is with him.", "Il est épileptique ; son ami Erik est là.", "Epilepsisi var, arkadaşı Erik yanında."),
    ],
    problem: l10n("Notfallversorgung und Umgang mit einem Jugendlichen.", "الإسعاف الأولي والتعامل مع مراهق.", "Emergency care and dealing with a teenager.", "Soins d'urgence et prise en charge d'un adolescent.", "Acil bakım ve genç hastayla iletişim."),
  },
  {
    id: "f14", place: "notaufnahme",
    who: [p("Julia Michels", "pflege", 37)],
    steps: [
      st("Siren", "In der Notaufnahme kommen viele Patienten gleichzeitig.", "في قسم الطوارئ يصل مرضى كثيرون في وقت واحد.", "In the ER many patients arrive at once.", "Aux urgences, de nombreux patients arrivent en même temps.", "Acilde çok sayıda hasta aynı anda geliyor."),
      st("Hash", "Julia ordnet sie mit dem Manchester-Triage-System ein.", "جوليا تصنّفهم بنظام مانشستر للفرز.", "Julia sorts them with the Manchester Triage System.", "Julia les classe avec le Manchester Triage System.", "Julia onları Manchester Triyaj Sistemi ile sınıflandırıyor."),
      st("Sparkles", "Dabei spielt die Händehygiene eine Rolle.", "ومعها تلعب نظافة اليدين دوراً مهماً.", "Hand hygiene plays a role in the process.", "L'hygiène des mains joue un rôle.", "El hijyeni de önemli bir rol oynuyor."),
    ],
    problem: l10n("Prioritäten setzen unter Zeitdruck.", "تحديد الأولويات تحت ضغط الوقت.", "Setting priorities under time pressure.", "Fixer des priorités sous pression.", "Zaman baskısı altında öncelik belirlemek."),
  },
  {
    id: "f15", place: "klinik",
    who: [p("Manfred Kovac", "patient", 70), p("Antje van Dijk", "pflege", 30)],
    steps: [
      st("Hospital", "Herr Kovac liegt auf der internistischen Station D1.", "السيد كوفاتش في القسم الباطني D1.", "Mr Kovac is on internal ward D1.", "M. Kovac est en médecine interne (D1).", "Bay Kovac dahiliye servisi D1'de yatıyor."),
      st("Droplet", "Es besteht der Verdacht auf eine Thrombose.", "هناك اشتباه بجلطة وريدية.", "A thrombosis is suspected.", "Une thrombose est suspectée.", "Tromboz şüphesi var."),
      st("Beer", "Alkohol und die Trauer um seinen Sohn Ben belasten ihn.", "الكحول والحزن على ابنه بن يثقلان عليه.", "Alcohol and grief over his son Ben weigh on him.", "L'alcool et le deuil de son fils Ben l'accablent.", "Alkol ve oğlu Ben'in yası onu zorluyor."),
    ],
    problem: l10n("Ein schwieriger Patient – verstehen statt verurteilen.", "مريض صعب: الفهم بدل الحكم.", "A difficult patient: understanding instead of judging.", "Un patient difficile : comprendre plutôt que juger.", "Zor bir hasta: yargılamak yerine anlamak."),
  },
  {
    id: "f16", place: "heim",
    who: [p("Adriano Rossi", "patient", 49)],
    steps: [
      st("TrainFront", "Nach einem Zugunfall ist Herr Rossi querschnittsgelähmt.", "بعد حادث قطار أصيب السيد روسي بشلل سفلي.", "After a train accident Mr Rossi is paraplegic.", "Après un accident de train, M. Rossi est paraplégique.", "Tren kazasından sonra Bay Rossi belden aşağı felçli."),
      st("Brain", "Er leidet an PTBS und Depression.", "يعاني من اضطراب ما بعد الصدمة واكتئاب.", "He suffers from PTSD and depression.", "Il souffre de TSPT et de dépression.", "TSSB ve depresyon yaşıyor."),
      st("CircleDot", "Die Einstichstelle des suprapubischen Katheters ist gerötet.", "موضع القسطرة فوق العانة محمرّ.", "The suprapubic catheter site is red.", "Le site du cathéter sus-pubien est rouge.", "Suprapubik kateter yeri kızarık."),
    ],
    problem: l10n("Körperliche und seelische Folgen eines Unfalls pflegen.", "رعاية العواقب الجسدية والنفسية لحادث.", "Caring for the physical and mental effects of an accident.", "Prendre en charge les suites physiques et psychiques d'un accident.", "Bir kazanın bedensel ve ruhsal sonuçlarına bakım vermek."),
  },
  {
    id: "f17", place: "ambulant",
    who: [p("Matteo Seifert", "kind", 8), p("Teresa Seifert", "angehoerig", 35), p("Franka Meridov", "pflege", 40), p("Felix Helmen", "azubi", 18)],
    steps: [
      st("Waves", "Matteo ist nach einem Beinahe-Ertrinken schwer behindert.", "ماتيو معاق بشدة بعد حادثة شبه غرق.", "Matteo is severely disabled after nearly drowning.", "Matteo est gravement handicapé après une quasi-noyade.", "Matteo boğulma tehlikesinden sonra ağır engelli."),
      st("User", "Seine Mutter Teresa pflegt ihn und braucht eine Pause.", "أمه تيريزا ترعاه وتحتاج إلى استراحة.", "His mother Teresa cares for him and needs a break.", "Sa mère Teresa s'occupe de lui et a besoin d'une pause.", "Annesi Teresa ona bakıyor ve mola istiyor."),
      st("BedDouble", "Kurzzeitpflege „Pfiffikus“ nimmt ihn auf.", "رعاية قصيرة الأمد «Pfiffikus» تستقبله.", "Short-term care “Pfiffikus” takes him in.", "L'accueil temporaire « Pfiffikus » l'accueille.", "“Pfiffikus” kısa süreli bakım onu kabul ediyor."),
    ],
    problem: l10n("Entlastung pflegender Angehöriger.", "تخفيف العبء عن الأهل المقدّمين للرعاية.", "Relieving family carers.", "Soulager les proches aidants.", "Bakım veren yakınların yükünü hafifletmek."),
  },
  {
    id: "f18", place: "heim",
    who: [p("Ferdinand Kaufmann", "patient", 91), p("Elisabeth Kaufmann", "patient", 90), p("Johannes", "angehoerig")],
    steps: [
      st("HeartHandshake", "Ferdinand und Elisabeth leben im Pflegeheim Rosenbaum.", "فرديناند وإليزابيث يعيشان في دار «Rosenbaum».", "Ferdinand and Elisabeth live in the care home Rosenbaum.", "Ferdinand et Elisabeth vivent à l'EHPAD Rosenbaum.", "Ferdinand ve Elisabeth Rosenbaum bakım evinde yaşıyor."),
      st("Brain", "Er hatte einen Schlaganfall, sie hat Alzheimer-Demenz.", "هو أصيب بسكتة دماغية وهي لديها خرف ألزهايمر.", "He had a stroke; she has Alzheimer's dementia.", "Il a eu un AVC ; elle a la maladie d'Alzheimer.", "O inme geçirdi, onda Alzheimer demansı var."),
      st("User", "Sohn Johannes kümmert sich um beide.", "ابنهما يوهانس يهتم بهما.", "Their son Johannes looks after both.", "Leur fils Johannes s'occupe d'eux.", "Oğulları Johannes ikisiyle de ilgileniyor."),
    ],
    problem: l10n("Ein Paar mit Demenz und Schlaganfall zusammen begleiten.", "مرافقة زوجين: خرف وسكتة دماغية.", "Supporting a couple with dementia and stroke together.", "Accompagner un couple avec démence et AVC.", "Demans ve inmeli bir çifte birlikte eşlik etmek."),
  },
  {
    id: "m01", place: "klinik",
    who: [p("Klara Hofmeister", "azubi", 20), p("Lilly", "kind"), p("Frau Melzer", "angehoerig"), p("Meike Keller", "pflege")],
    steps: [
      st("Baby", "Klara arbeitet auf der Kinderstation. Lilly ist 3 Wochen alt.", "كلارا تعمل في قسم الأطفال. ليلي عمرها ٣ أسابيع.", "Klara works on the children's ward. Lilly is 3 weeks old.", "Klara travaille en pédiatrie. Lilly a 3 semaines.", "Klara çocuk servisinde çalışıyor. Lilly 3 haftalık."),
      st("Zap", "Lilly hat Krampfanfälle und einen genetischen Defekt.", "ليلي لديها نوبات تشنج وعيب وراثي.", "Lilly has seizures and a genetic defect.", "Lilly a des convulsions et un défaut génétique.", "Lilly'nin nöbetleri ve genetik kusuru var."),
      st("Frown", "Klara gerät in Konflikt mit Schwester Meike.", "كلارا تدخل في نزاع مع الممرضة مايكه.", "Klara comes into conflict with nurse Meike.", "Klara entre en conflit avec l'infirmière Meike.", "Klara hemşire Meike ile çatışıyor."),
    ],
    problem: l10n("Ein schwer krankes Baby und ein Konflikt im Team.", "رضيعة مريضة جداً ونزاع في الفريق.", "A seriously ill baby and a conflict in the team.", "Un bébé gravement malade et un conflit d'équipe.", "Ağır hasta bir bebek ve ekipte çatışma."),
  },
  {
    id: "m02", place: "klinik",
    who: [p("Holger Sander", "patient", 57), p("Anneliese", "angehoerig", 77), p("Isabell Klein", "pflege", 20)],
    steps: [
      st("Puzzle", "Herr Sander hat Parkinson.", "السيد زاندر مصاب بالشلل الرعاش.", "Mr Sander has Parkinson's disease.", "M. Sander a la maladie de Parkinson.", "Bay Sander'de Parkinson var."),
      st("Snowflake", "Er erleidet eine akinetische Krise.", "يتعرض لأزمة عدم الحركة.", "He suffers an akinetic crisis.", "Il fait une crise akinétique.", "Akinetik kriz geçiriyor."),
      st("User", "Seine Mutter Anneliese ist bei ihm.", "والدته أنيليزه معه.", "His mother Anneliese is with him.", "Sa mère Anneliese est auprès de lui.", "Annesi Anneliese yanında."),
    ],
    problem: l10n("Einen Pflegeplan für eine akute Krise entwickeln.", "وضع خطة تمريضية لأزمة حادة.", "Developing a care plan for an acute crisis.", "Élaborer un plan de soins pour une crise aiguë.", "Akut kriz için bakım planı hazırlamak."),
  },
  {
    id: "m03", place: "klinik",
    who: [p("Ilse Fischer", "patient", 77), p("Helena Brumm", "pflege", 26), p("Oliver Drang", "pflege", 33)],
    steps: [
      st("Bug", "Frau Fischer hat ein Beingeschwür mit MRSA.", "السيدة فيشر لديها قرحة في الساق مع MRSA.", "Ms Fischer has a leg ulcer with MRSA.", "Mme Fischer a un ulcère de jambe avec SARM.", "Bayan Fischer'in bacağında MRSA'lı yara var."),
      st("DoorOpen", "Sie liegt in Isolation auf Station 7a.", "هي معزولة في القسم 7a.", "She is in isolation on ward 7a.", "Elle est en isolement au service 7a.", "7a servisinde izolasyonda."),
      st("Sparkles", "Das Team muss Hygieneregeln einhalten.", "على الفريق الالتزام بقواعد النظافة.", "The team has to follow hygiene rules.", "L'équipe doit respecter les règles d'hygiène.", "Ekip hijyen kurallarına uymak zorunda."),
    ],
    problem: l10n("Hygiene und menschliche Zuwendung unter einen Hut bringen.", "التوفيق بين قواعد النظافة والاهتمام الإنساني.", "Balancing hygiene rules and human attention.", "Concilier hygiène et attention humaine.", "Hijyen kuralları ile insani ilgiyi dengelemek."),
  },
  {
    id: "m04", place: "ambulant",
    who: [p("Nika Lomidze", "kind", 3), p("Paula Nocelli", "azubi", 19), p("Wilhelm Otto", "pflege")],
    steps: [
      st("House", "Nika (3) lebt mit Muskeldystrophie zu Hause.", "نيكا (٣ سنوات) تعيش في البيت مع ضمور عضلي.", "Nika (3) lives at home with muscular dystrophy.", "Nika (3 ans) vit à domicile avec une dystrophie musculaire.", "Nika (3) kas distrofisiyle evde yaşıyor."),
      st("Wind", "Sie wird beatmet und muss über die Trachealkanüle abgesaugt werden.", "هي على جهاز تنفس وتحتاج شفط عبر أنبوب القصبة.", "She is ventilated and needs suctioning via the tracheal cannula.", "Elle est ventilée et aspirée par la canule trachéale.", "Solunum cihazına bağlı, trakeal kanülden aspirasyon gerekiyor."),
      st("GraduationCap", "Azubi Paula begleitet Pfleger Wilhelm.", "المتدرّبة باولا ترافق الممرض فيلهلم.", "Trainee Paula accompanies nurse Wilhelm.", "La stagiaire Paula accompagne l'infirmier Wilhelm.", "Stajyer Paula hemşire Wilhelm'e eşlik ediyor."),
    ],
    problem: l10n("Ein normales Leben für ein beatmetes Kind ermöglichen.", "تمكين طفلة على جهاز التنفس من حياة طبيعية.", "Enabling a normal life for a ventilated child.", "Permettre une vie normale à une enfant ventilée.", "Solunum cihazlı çocuğa normal bir yaşam sağlamak."),
  },
  {
    id: "m05", place: "ambulant",
    who: [p("Justus Keller", "kind", 8), p("Deniz Özkan", "azubi", 20), p("Janine Schulte", "pflege", 36)],
    steps: [
      st("Waves", "Nach einem Poolunfall hat Justus einen Hirnschaden.", "بعد حادث مسبح أصيب جوستوس بتلف دماغي.", "After a pool accident Justus has brain damage.", "Après un accident de piscine, Justus a des lésions cérébrales.", "Havuz kazasından sonra Justus'ta beyin hasarı var."),
      st("Stethoscope", "Er hat Tracheostoma und PEG.", "لديه فغر في القصبة وأنبوب PEG.", "He has a tracheostomy and a PEG tube.", "Il a une trachéostomie et une sonde PEG.", "Trakeostomisi ve PEG'i var."),
      st("Star", "Der ambulante Intensivdienst „Sternblick“ betreut ihn.", "خدمة العناية المركزة المنزلية «Sternblick» ترعاه.", "The home intensive care service “Sternblick” looks after him.", "Le service de soins intensifs à domicile « Sternblick » le prend en charge.", "“Sternblick” evde yoğun bakım hizmeti ona bakıyor."),
    ],
    problem: l10n("Alles ist anders als vorher – Familie und Pflege müssen neu starten.", "كل شيء تغيّر: على الأسرة والتمريض البدء من جديد.", "Everything has changed: family and care must start anew.", "Tout a changé : famille et soignants doivent repartir à zéro.", "Her şey değişti: aile ve bakım yeniden başlamalı."),
  },
  {
    id: "m06", place: "ambulant",
    who: [p("Oscar Johansson", "patient", 58), p("Andrea Lau", "pflege", 28)],
    steps: [
      st("House", "Herr Johansson ist verwitwet, seine Wohnung ist voller Müll.", "السيد يوهانسون أرمل وشقته مليئة بالقمامة.", "Mr Johansson is widowed; his home is full of rubbish.", "M. Johansson est veuf ; son logement est rempli de déchets.", "Bay Johansson dul, evi çöple dolu."),
      st("Footprints", "Er hat Diabetes Typ 2; ein Zeh wurde amputiert.", "لديه سكري النوع الثاني وبُترت إحدى أصابع قدمه.", "He has type 2 diabetes; a toe was amputated.", "Il a un diabète de type 2 ; un orteil a été amputé.", "Tip 2 diyabeti var, bir ayak parmağı kesildi."),
      st("DoorOpen", "Pflegerin Andrea besucht ihn nach der Entlassung.", "الممرضة أندريا تزوره بعد خروجه.", "Nurse Andrea visits him after discharge.", "L'infirmière Andrea lui rend visite après sa sortie.", "Hemşire Andrea taburculuktan sonra onu ziyaret ediyor."),
    ],
    problem: l10n("Selbstbestimmung, Gefahr und Hilfe in einer verwahrlosten Wohnung.", "تقرير المصير والخطر والمساعدة في بيت مهمل.", "Self-determination, risk and help in a neglected home.", "Autodétermination, danger et aide dans un logement négligé.", "İhmal edilmiş evde özerklik, risk ve yardım."),
  },
  {
    id: "m07", place: "wg",
    who: [p("Nicole Rausch", "patient", 50), p("Marie Bader", "azubi", 18), p("Julia Krug", "pflege", 38)],
    steps: [
      st("House", "Frau Rausch hat ALS und lebt in der Intensiv-WG Wegner.", "السيدة راوش مصابة بالتصلّب الجانبي الضموري وتعيش في مجموعة العناية المركزة.", "Ms Rausch has ALS and lives in the intensive care shared flat Wegner.", "Mme Rausch a la SLA et vit en colocation de soins intensifs Wegner.", "Bayan Rausch'ta ALS var, Wegner yoğun bakım yaşam grubunda yaşıyor."),
      st("Wind", "Sie wird beatmet.", "هي على جهاز التنفس.", "She is ventilated.", "Elle est ventilée.", "Solunum cihazına bağlı."),
      st("TriangleAlert", "In der Frühstückspause kommt es zu einem Zwischenfall.", "أثناء استراحة الفطور يقع حادث.", "An incident happens during the breakfast break.", "Un incident survient pendant la pause petit-déjeuner.", "Kahvaltı molasında bir olay yaşanıyor."),
    ],
    problem: l10n("Verantwortung der Auszubildenden bei einem Zwischenfall.", "مسؤولية المتدرّبة عند وقوع حادث.", "The trainee's responsibility in an incident.", "Responsabilité de la stagiaire lors d'un incident.", "Bir olayda stajyerin sorumluluğu."),
  },
  {
    id: "m08", place: "team",
    who: [p("Christa Grothe", "team", 63), p("Jaqueline Müller", "team", 23)],
    steps: [
      st("Thermometer", "Es ist heiß – 36 Grad, und es wird noch heißer.", "الطقس حار: ٣٦ درجة وسيزداد.", "It is hot: 36 degrees and getting hotter.", "Il fait chaud : 36 degrés et ça monte.", "Hava sıcak: 36 derece, daha da artacak."),
      st("House", "Der ambulante Dienst „Herz und Hand“ ist gestresst.", "خدمة «Herz und Hand» تحت الضغط.", "The home care service “Herz und Hand” is stressed.", "Le service « Herz und Hand » est sous pression.", "“Herz und Hand” hizmeti stres altında."),
      st("MessageCircle", "Das Team führt eine kollegiale Beratung durch.", "الفريق يجري استشارة بين الزملاء.", "The team holds a peer consultation.", "L'équipe organise un conseil entre collègues.", "Ekip meslektaş danışmanlığı yapıyor."),
    ],
    problem: l10n("Belastung im Team gemeinsam lösen.", "حل ضغط العمل في الفريق معاً.", "Solving the team's strain together.", "Résoudre ensemble la surcharge de l'équipe.", "Ekipteki yükü birlikte çözmek."),
  },
  {
    id: "m09", place: "wg",
    who: [p("Felix Ernst", "kind", 14), p("Kai Hilsebier", "azubi", 18)],
    steps: [
      st("Flame", "Felix lebt in der Wohngruppe „Pfefferkörner“.", "فيليكس يعيش في المجموعة السكنية «Pfefferkörner».", "Felix lives in the residential group “Pfefferkörner”.", "Felix vit dans le foyer « Pfefferkörner ».", "Felix “Pfefferkörner” yaşam grubunda yaşıyor."),
      st("Syringe", "Er hat Diabetes Typ 1 und spritzt unregelmäßig Insulin.", "لديه سكري النوع الأول ويحقن الإنسولين بشكل غير منتظم.", "He has type 1 diabetes and injects insulin irregularly.", "Il a un diabète de type 1 et s'injecte l'insuline irrégulièrement.", "Tip 1 diyabeti var, insülini düzensiz yapıyor."),
      st("TrendingUp", "Sein HbA1c-Wert ist erhöht.", "قيمة HbA1c لديه مرتفعة.", "His HbA1c is elevated.", "Son HbA1c est élevé.", "HbA1c değeri yüksek."),
    ],
    problem: l10n("Delegation und Remonstration: Was darf Azubi Kai tun?", "التفويض والاعتراض: ماذا يُسمح للمتدرّب كاي؟", "Delegation and remonstration: what may trainee Kai do?", "Délégation et remontrance : que peut faire le stagiaire Kai ?", "Görev devri ve itiraz: stajyer Kai ne yapabilir?"),
  },
  {
    id: "m10", place: "heim",
    who: [p("Herr Konrad", "patient", 58), p("Stefan Arndt", "azubi", 19), p("Karola Soest", "pflege", 45)],
    steps: [
      st("Building2", "Herr Konrad lebt im Pflegeheim.", "السيد كونراد يعيش في دار الرعاية.", "Mr Konrad lives in a nursing home.", "M. Konrad vit en maison de retraite.", "Bay Konrad bakım evinde yaşıyor."),
      st("HeartPulse", "Er hat Leberzirrhose mit Aszites.", "لديه تليّف كبدي مع استسقاء.", "He has liver cirrhosis with ascites.", "Il a une cirrhose avec ascite.", "Karaciğer sirozu ve asiti var."),
      st("Beer", "Er möchte gern ein Bier.", "يريد كأس بيرة.", "He would like a beer.", "Il voudrait une bière.", "Bir bira istiyor."),
    ],
    problem: l10n("Selbstbestimmung, Gesundheit und rechtliche Betreuung.", "تقرير المصير والصحة والوصاية القانونية.", "Self-determination, health and legal guardianship.", "Autodétermination, santé et tutelle.", "Özerklik, sağlık ve yasal vasilik."),
  },
  {
    id: "m11", place: "heim",
    who: [p("Matthias Hendricks", "pflege", 27), p("Tobias Schuster", "azubi", 26), p("Christian Kürger", "patient", 76)],
    steps: [
      st("Hand", "Praxisanleiter Matthias begrüßt den neuen Azubi Tobias.", "المرشد ماتياس يرحّب بالمتدرّب الجديد توبياس.", "Practical mentor Matthias welcomes the new trainee Tobias.", "Le tuteur Matthias accueille le nouveau stagiaire Tobias.", "Eğitmen Matthias yeni stajyer Tobias'ı karşılıyor."),
      st("Building2", "In der Seniorenresidenz „Am Hain“ stürzt Herr Kürger.", "في مجمّع «Am Hain» يسقط السيد كورغر.", "In the senior residence “Am Hain” Mr Kürger falls.", "À la résidence « Am Hain », M. Kürger fait une chute.", "“Am Hain” rezidansında Bay Kürger düşüyor."),
      st("Search", "Gerade läuft eine MDK-Prüfung.", "في نفس الوقت تجري فحص MDK.", "An MDK inspection is under way at that moment.", "Une inspection du MDK a lieu au même moment.", "Tam o sırada MDK denetimi sürüyor."),
    ],
    problem: l10n("Einarbeitung und Sturz unter Beobachtung.", "التدريب الأولي وسقوط تحت المراقبة.", "Induction and a fall under observation.", "Intégration et chute sous observation.", "İşe alıştırma ve gözetim altında düşme."),
  },
  {
    id: "m12", place: "heim",
    who: [p("Hanna Seidel", "patient", 78), p("Mesut Aydin", "pflege", 25)],
    steps: [
      st("Bone", "Frau Seidel hat rheumatoide Polyarthritis.", "السيدة زايدل مصابة بالتهاب المفاصل الروماتويدي.", "Ms Seidel has rheumatoid polyarthritis.", "Mme Seidel a une polyarthrite rhumatoïde.", "Bayan Seidel'de romatoid poliartrit var."),
      st("Truck", "Sie zieht ins Pflegeheim Herbstgold.", "تنتقل إلى دار «Herbstgold».", "She moves into the care home Herbstgold.", "Elle emménage à la maison de retraite Herbstgold.", "Herbstgold bakım evine taşınıyor."),
      st("Handshake", "Pfleger Mesut begleitet die Eingewöhnung.", "الممرض مسعود يرافقها في فترة التأقلم.", "Nurse Mesut supports her settling in.", "L'infirmier Mesut accompagne son adaptation.", "Hemşire Mesut alışma sürecine eşlik ediyor."),
    ],
    problem: l10n("Umzug ins Pflegeheim und Eingewöhnung.", "الانتقال إلى دار الرعاية والتأقلم.", "Moving into a care home and settling in.", "Emménagement en maison de retraite et adaptation.", "Bakım evine taşınma ve alışma."),
  },
  {
    id: "z01", place: "heim",
    who: [p("Ingeborg Lehmann", "patient", 89), p("Selin Yıldız", "pflege", 31), p("Leon Weber", "azubi", 19), p("Karin", "angehoerig", 58)],
    steps: [
      st("Moon", "Frau Lehmann stürzt nachts auf dem Weg zur Toilette.", "السيدة ليمان تسقط ليلاً في طريقها إلى المرحاض.", "Mrs Lehmann falls at night on her way to the toilet.", "Mme Lehmann tombe la nuit en allant aux toilettes.", "Bayan Lehmann geceleyin tuvalete giderken düşüyor."),
      st("Hospital", "Hüft-TEP im Krankenhaus, nach zwölf Tagen Rückkehr ins Heim.", "استبدال مفصل الورك في المستشفى والعودة إلى دار الرعاية بعد 12 يوماً.", "Hip replacement in hospital, back in the home after twelve days.", "Prothèse de hanche à l'hôpital, retour à la maison de retraite après douze jours.", "Hastanede kalça protezi, on iki gün sonra bakım evine dönüş."),
      st("Users", "Die Tochter fordert ein Bettgitter und denkt an die Pflege zu Hause.", "الابنة تطلب حاجز سرير وتفكر بالرعاية في البيت.", "The daughter demands a bed rail and considers home care.", "La fille demande une barrière de lit et envisage les soins à domicile.", "Kızı yatak korkuluğu istiyor ve evde bakımı düşünüyor."),
    ],
    problem: l10n("Wie werden Sturzrisiko, Angst und Angehörigenwünsche fachlich und rechtlich richtig behandelt?", "كيف يُتعامل مع خطر السقوط والخوف ورغبات الأقارب مهنياً وقانونياً؟", "How are fall risk, fear and relatives' wishes handled professionally and legally?", "Comment traiter correctement le risque de chute, la peur et les souhaits des proches sur le plan professionnel et juridique ?", "Düşme riski, korku ve yakınların istekleri mesleki ve hukuki olarak nasıl ele alınır?"),
  },
  {
    id: "z02", place: "klinik",
    who: [p("Jonas Berger", "kind", 9), p("Dennis Krämer", "pflege", 29), p("Nicole Berger", "angehoerig", 38)],
    steps: [
      st("Hospital", "Jonas wird mit Knieschmerzen und Müdigkeit aufgenommen.", "يُقبل يوناس بآلام في الركبة وتعب.", "Jonas is admitted with knee pain and fatigue.", "Jonas est admis avec des douleurs au genou et de la fatigue.", "Jonas diz ağrısı ve yorgunlukla yatırılıyor."),
      st("Utensils", "Viel Limonade, Fast Food und Bildschirmzeit prägen den Alltag.", "الحياة اليومية مليئة بالمشروبات الغازية والوجبات السريعة وأوقات الشاشة.", "Lots of lemonade, fast food and screen time shape daily life.", "Beaucoup de limonade, de fast-food et d'écrans rythment le quotidien.", "Günlük yaşamda çok gazoz, fast food ve ekran süresi var."),
      st("Frown", "In der Schule wird er gehänselt.", "يتعرض للسخرية في المدرسة.", "He is teased at school.", "On se moque de lui à l'école.", "Okulda alay ediliyor."),
    ],
    problem: l10n("Wie berät der Pflegefachmann die Familie ohne Schuldzuweisung und stärkt Jonas?", "كيف يرشد الممرض الأسرة دون لوم ويقوّي يوناس؟", "How does the nurse advise the family without blame and strengthen Jonas?", "Comment l'infirmier conseille-t-il la famille sans culpabiliser et soutient-il Jonas ?", "Hemşire aileyi suçlamadan nasıl yönlendirir ve Jonas'ı nasıl güçlendirir?"),
  },
  {
    id: "z03", place: "klinik",
    who: [p("Walter Neumann", "patient", 83), p("Maria Kowalczyk", "pflege", 44), p("Peter", "angehoerig", 55)],
    steps: [
      st("Bandage", "Nach einer Sepsis wird das linke Bein unterhalb des Knies amputiert.", "بعد إنتان الدم يُبتر الساق اليسرى تحت الركبة.", "After sepsis the left leg is amputated below the knee.", "Après une septicémie, la jambe gauche est amputée sous le genou.", "Sepsis sonrası sol bacak diz altından ampute ediliyor."),
      st("Syringe", "Phantomschmerzen, Metamizol und ein niedriger Blutzucker.", "ألم الطرف الشبحي وميتاميزول وسكر دم منخفض.", "Phantom pain, metamizole and low blood sugar.", "Douleurs fantômes, métamizole et glycémie basse.", "Hayalet ağrısı, metamizol ve düşük kan şekeri."),
      st("Frown", "Herr Neumann sagt: „Lieber tot als ein Krüppel.“", "السيد نويمان يقول: «الموت أفضل من أن أكون معاقاً».", "Mr Neumann says: “Better dead than a cripple.”", "M. Neumann dit : « Plutôt mort qu'infirme. »", "Bay Neumann: «Sakat olmaktansa ölmek yeğ» diyor."),
    ],
    problem: l10n("Wie reagiert die Pflegekraft auf Krise und Suizidgedanken und wer entscheidet rechtlich?", "كيف تتصرف الممرضة تجاه الأزمة وأفكار الانتحار ومن يقرر قانونياً؟", "How does the nurse respond to crisis and suicidal thoughts, and who decides legally?", "Comment l'infirmière réagit-elle à la crise et aux idées suicidaires, et qui décide juridiquement ?", "Hemşire krize ve intihar düşüncelerine nasıl yanıt verir ve hukuken kim karar verir?"),
  },
  {
    id: "z04", place: "klinik",
    who: [p("Lea Sommer", "kind", 17), p("Aylin Demir", "pflege", 27), p("Silke Sommer", "angehoerig", 46)],
    steps: [
      st("Hospital", "Lea hat Spina bifida und kommt mit Harnwegsinfekt und Dekubitus.", "ليا مصابة بسنسنة مشقوقة وتأتي بعدوى بولية وقرحة ضغط.", "Lea has spina bifida and arrives with a urinary tract infection and a pressure ulcer.", "Lea a un spina-bifida et arrive avec une infection urinaire et une escarre.", "Lea'da spina bifida var; idrar yolu enfeksiyonu ve bası yarasıyla geliyor."),
      st("ShieldCheck", "Latexallergie und Selbstkatheterismus müssen beachtet werden.", "يجب مراعاة حساسية اللاتكس والقسطرة الذاتية.", "Latex allergy and self-catheterisation must be considered.", "L'allergie au latex et l'autosondage doivent être pris en compte.", "Lateks alerjisi ve kendi kendine kateterizasyon dikkate alınmalı."),
      st("House", "Lea möchte in eine Wohngemeinschaft ziehen.", "ليا تريد الانتقال إلى سكن مشترك.", "Lea wants to move into a shared flat.", "Lea veut emménager en colocation.", "Lea ortak bir eve taşınmak istiyor."),
    ],
    problem: l10n("Wie werden Selbstbestimmung der Jugendlichen und Sorgen der Eltern vereinbart?", "كيف يُوفَّق بين استقلالية المراهقة ومخاوف الوالدين؟", "How are the teenager's autonomy and the parents' worries reconciled?", "Comment concilier l'autonomie de l'adolescente et les inquiétudes des parents ?", "Genç kızın özerkliği ile ailenin endişeleri nasıl uzlaştırılır?"),
  },
  {
    id: "z05", place: "klinik",
    who: [p("Hans-Jürgen Pohl", "patient", 74), p("Tim Becker", "pflege", 33), p("Amira Hadad", "azubi", 20), p("Gisela Pohl", "angehoerig", 72)],
    steps: [
      st("Brain", "Schlaganfall links: rechtsseitige Lähmung und Sprachstörung.", "سكتة في الجانب الأيسر: شلل أيمن واضطراب في الكلام.", "Left-sided stroke: right-sided paralysis and speech disorder.", "AVC gauche : paralysie à droite et trouble du langage.", "Sol inme: sağ tarafta felç ve konuşma bozukluğu."),
      st("Utensils", "Beim Essen hustet er und das Essen bleibt in der Wange.", "يسعل أثناء الأكل ويبقى الطعام في الخد.", "He coughs while eating and food stays in his cheek.", "Il tousse en mangeant et la nourriture reste dans la joue.", "Yemek sırasında öksürüyor ve yemek yanağında kalıyor."),
      st("Users", "Seine Frau ist überfordert.", "زوجته تشعر بالإرهاق.", "His wife feels overwhelmed.", "Son épouse est dépassée.", "Eşi bunalmış durumda."),
    ],
    problem: l10n("Wie werden Dysphagie, Aphasie, Lagerung und Angehörigenberatung fachgerecht gelöst?", "كيف تُعالج عسر البلع والحبسة والتوضع وإرشاد الأقارب بشكل مهني؟", "How are dysphagia, aphasia, positioning and relatives' counselling handled professionally?", "Comment gérer correctement dysphagie, aphasie, positionnement et conseil aux proches ?", "Disfaji, afazi, pozisyon ve yakın danışmanlığı mesleki olarak nasıl çözülür?"),
  },
];

export function sceneFor(id: string): CaseScene | undefined {
  return SCENES.find((s) => s.id === id);
}
