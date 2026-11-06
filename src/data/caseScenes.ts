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
    who: [p("Sabine Ulrich", "kind", 15), p("Jan Hartmann", "azubi", 20), p("Birgit Falk", "pflege", 55), p("Marek Nowicki", "pflege", 33)],
    steps: [
      st("Moon", "Nachtdienst auf der neurologischen Station.", "مناوبة ليلية في قسم الأعصاب.", "Night shift on the neurology ward.", "Garde de nuit en neurologie.", "Nörolji servisinde gece vardiyası."),
      st("Bandage", "Sabine hat Migräne, erbricht und trocknet aus.", "سابينه تعاني من شقيقة وقيء وجفاف.", "Sabine has a migraine, vomits and is dehydrating.", "Sabine a une migraine, vomit et se déshydrate.", "Sabine'de migren, kusma ve sıvı kaybı var."),
      st("ClipboardList", "Azubi Jan übergibt die Informationen mit SBAR.", "المتدرّب يان ينقل المعلومات بنموذج SBAR.", "Trainee Jan hands over the information using SBAR.", "Le stagiaire Jan transmet les informations avec SBAR.", "Stajyer Jan bilgileri SBAR ile devreder."),
    ],
    problem: l10n("Konflikt im Team und im Zimmer – wie handelt der Azubi richtig?", "نزاع داخل الفريق وفي الغرفة. كيف يتصرف المتدرّب بشكل صحيح؟", "Conflict in the team and in the room: how should the trainee act?", "Conflit dans l'équipe et dans la chambre : comment le stagiaire doit-il agir ?", "Ekipte ve odada çatışma var: stajyer nasıl doğru davranır?"),
  },
  {
    id: "f02", place: "klinik",
    who: [p("Finn Kellner", "kind", 11), p("Elena Ziegler", "azubi", 21), p("Mira und Luca", "angehoerig"), p("Noah", "kind", 4)],
    steps: [
      st("Hospital", "Finn liegt wegen Leukämie auf der Kinderonkologie.", "فين في قسم أورام الأطفال بسبب سرطان الدم.", "Finn is on the children's oncology ward with leukaemia.", "Finn est en oncologie pédiatrique pour une leucémie.", "Finn lösemi nedeniyle çocuk onkolojisinde yatıyor."),
      st("Syringe", "Er bekommt eine Chemotherapie, Besuche sind eingeschränkt.", "يتلقى علاجاً كيميائياً والزيارات محدودة.", "He receives chemotherapy; visits are restricted.", "Il reçoit une chimiothérapie ; les visites sont limitées.", "Kemoterapi alıyor, ziyaretler kısıtlı."),
      st("House", "Finn will nach Hause.", "فين يريد العودة إلى البيت.", "Finn wants to go home.", "Finn veut rentrer à la maison.", "Finn eve gitmek istiyor."),
    ],
    problem: l10n("Wunsch des Kindes, Sorgen der Eltern und die Rolle der Auszubildenden.", "رغبة الطفل، قلق الوالدين، ودور المتدرّبة.", "The child's wish, the parents' worries and the trainee's role.", "Le souhait de l'enfant, l'inquiétude des parents et le rôle de la stagiaire.", "Çocuğun isteği, ailenin endişeleri ve stajyerin rolü."),
  },
  {
    id: "f03", place: "klinik",
    who: [p("Hugo Pfeiffer", "patient", 21), p("Bernd Reimann", "pflege", 27)],
    steps: [
      st("Waves", "Hugo bricht in der Schwimmhalle zusammen.", "هوغو ينهار في المسبح.", "Hugo collapses in the swimming hall.", "Hugo s'effondre à la piscine.", "Hugo yüzme salonunda yığılıyor."),
      st("Droplet", "Schwere Unterzuckerung bei Diabetes Typ 1.", "هبوط شديد في السكر مع السكري من النوع الأول.", "Severe hypoglycaemia with type 1 diabetes.", "Hypoglycémie sévère avec diabète de type 1.", "Tip 1 diyabette ağır hipoglisemi."),
      st("VolumeX", "Auf der Diabetesstation zeigt sich sein Geheimnis: Bulimie.", "في قسم السكري يظهر سرّه: البوليميا.", "On the diabetes ward his secret comes out: bulimia.", "Dans le service, son secret apparaît : la boulimie.", "Diyabet servisinde sırrı ortaya çıkıyor: bulimya."),
    ],
    problem: l10n("Diabetes und Essstörung gemeinsam pflegen und beraten.", "رعاية وإرشاد مريض يجمع بين السكري واضطراب الأكل.", "Caring for and advising a patient with diabetes and an eating disorder.", "Soigner et conseiller un patient diabétique et boulimique.", "Diyabet ve yeme bozukluğu olan hastaya bakım ve danışmanlık."),
  },
  {
    id: "f04", place: "wg",
    who: [p("Petra Jansen", "kind", 9), p("Heike Kirsch", "azubi", 21)],
    steps: [
      st("Flower", "Petra lebt in der Kinderwohngruppe „Löwenzahn“.", "بيترا تعيش في مجموعة الأطفال السكنية «Löwenzahn».", "Petra lives in the children's group home “Löwenzahn”.", "Petra vit dans le foyer pour enfants « Löwenzahn ».", "Petra “Löwenzahn” çocuk yaşam grubunda yaşıyor."),
      st("ShowerHead", "Sie will sich nicht waschen und das Zimmer nicht verlassen.", "ترفض الاستحمام ومغادرة غرفتها.", "She refuses to wash and to leave her room.", "Elle refuse de se laver et de quitter sa chambre.", "Yıkanmak ve odadan çıkmak istemiyor."),
      st("MessageCircle", "Azubi Heike sucht einen Zugang zu ihr.", "المتدرّبة هايكه تبحث عن طريقة للتواصل معها.", "Trainee Heike looks for a way to reach her.", "La stagiaire Heike cherche un moyen d'établir le contact.", "Stajyer Heike ona ulaşmanın yolunu arıyor."),
    ],
    problem: l10n("Ein Kind mit Gewalt- und Vernachlässigungserfahrung braucht behutsame Pflege.", "طفلة عاشت العنف والإهمال تحتاج إلى رعاية لطيفة.", "A child with experiences of violence and neglect needs gentle care.", "Une enfant ayant vécu violence et négligence a besoin de soins délicats.", "Şiddet ve ihmal yaşamış çocuk özenli bakıma ihtiyaç duyuyor."),
  },
  {
    id: "f05", place: "ambulant",
    who: [p("Tabea Wozniak", "patient", 41), p("Marcin", "angehoerig"), p("Karolina", "kind"), p("Katrin Zielinski", "pflege")],
    steps: [
      st("Accessibility", "Frau Wozniak hat MS und nutzt einen Elektrorollstuhl.", "السيدة فوزنياك مصابة بالتصلّب المتعدد وتستخدم كرسياً كهربائياً.", "Ms Wozniak has MS and uses an electric wheelchair.", "Mme Wozniak a la SEP et utilise un fauteuil électrique.", "Bayan Wozniak'da MS var, elektrikli tekerlekli sandalye kullanıyor."),
      st("House", "Der ambulante Dienst unterstützt die Familie zu Hause.", "خدمة الرعاية المنزلية تدعم الأسرة في البيت.", "A home care service supports the family at home.", "Un service à domicile soutient la famille.", "Evde bakım hizmeti aileye destek oluyor."),
      st("CloudRain", "Sie äußert einen besonderen Wunsch.", "تعبّر عن رغبة خاصة.", "She expresses a special wish.", "Elle exprime un souhait particulier.", "Özel bir istek dile getiriyor."),
    ],
    problem: l10n("Spastik, Schmerzen und der Wunsch der Patientin ernst nehmen.", "التشنّج والألم، وأخذ رغبة المريضة على محمل الجد.", "Spasticity, pain and taking the patient's wish seriously.", "Spasticité, douleur et prise en compte du souhait de la patiente.", "Spastisite, ağrı ve hastanın isteğini ciddiye almak."),
  },
  {
    id: "f06", place: "heim",
    who: [p("Finn Quast", "patient", 75), p("Ayla Quast", "patient", 70)],
    steps: [
      st("Building2", "Das Ehepaar lebt in einer Seniorenresidenz.", "الزوجان يعيشان في مجمّع سكني للمسنين.", "The couple lives in a senior residence.", "Le couple vit dans une résidence seniors.", "Çift bir yaşlı rezidansında yaşıyor."),
      st("Stethoscope", "Herr Quast hat Morbus Crohn und ein Stoma.", "السيد كفاست مصاب بداء كرون ولديه فغر.", "Mr Sommer has Crohn's disease and a stoma.", "M. Sommer a la maladie de Crohn et une stomie.", "Bay Sommer'de Crohn hastalığı ve stoma var."),
      st("Brain", "Seine Frau Ayla hatte einen Schlaganfall.", "زوجته آيلا أصيبت بسكتة دماغية.", "His wife Ayla had a stroke.", "Son épouse Ayla a eu un AVC.", "Eşi Ayla inme geçirdi."),
    ],
    problem: l10n("Ekel, Scham und Nähe im Pflegealltag.", "الاشمئزاز والخجل والقرب في العمل التمريضي اليومي.", "Disgust, shame and closeness in everyday care.", "Dégoût, honte et proximité dans les soins quotidiens.", "Bakım gündeliğinde tiksinti, utanç ve yakınlık."),
  },
  {
    id: "f07", place: "klinik",
    who: [p("Rustam Hasanov", "kind", 9), p("Johanna Rinke", "pflege"), p("Aysel", "angehoerig", 37), p("Sevda", "angehoerig", 67)],
    steps: [
      st("Wind", "Rustam hat einen Asthmaanfall.", "رستم يعاني من نوبة ربو.", "Rustam has an asthma attack.", "Rustam fait une crise d'asthme.", "Rustam'ın astım atağı var."),
      st("Hospital", "Er liegt in der Kinder-Pneumologie.", "هو في قسم أمراض رئة الأطفال.", "He is on the paediatric pneumology ward.", "Il est en pneumologie pédiatrique.", "Çocuk göğüs hastalıkları servisinde yatıyor."),
      st("Users", "Mutter und Großmutter sind dabei.", "الأم والجدة حاضرتان.", "His mother and grandmother are with him.", "Sa mère et sa grand-mère sont présentes.", "Annesi ve büyükannesi yanında."),
    ],
    problem: l10n("Atemnot beim Kind – Pflege und Angehörige einbeziehen.", "ضيق تنفس عند طفل: الرعاية وإشراك الأهل.", "Breathlessness in a child: care and involving the family.", "Détresse respiratoire chez un enfant : soins et implication de la famille.", "Çocukta nefes darlığı: bakım ve aileyi dahil etme."),
  },
  {
    id: "f08", place: "klinik",
    who: [p("Emma Sauter", "patient", 28), p("Hugo (Baby)", "kind")],
    steps: [
      st("Baby", "Frau Sauter ist frisch entbunden, ihr Baby heißt Hugo.", "السيدة زاوتر ولدت للتو وطفلها اسمه هوغو.", "Ms Sauter has just given birth; her baby is Hugo.", "Mme Sauter vient d'accoucher ; son bébé s'appelle Hugo.", "Bayan Sauter yeni doğum yaptı, bebeğinin adı Hugo."),
      st("Baby", "Sie hat einen Dammriss und Stillprobleme.", "لديها تمزّق في العجان ومشاكل في الإرضاع.", "She has a perineal tear and breastfeeding problems.", "Elle a une déchirure périnéale et des difficultés d'allaitement.", "Perine yırtığı ve emzirme sorunları var."),
      st("DoorOpen", "Die Schwiegermutter kommt mit ungewollten Ratschlägen.", "حماتها تزورها وتقدّم نصائح غير مرغوبة.", "Her mother-in-law visits with unwanted advice.", "Sa belle-mère vient avec des conseils non désirés.", "Kayınvalidesi istenmeyen tavsiyelerle ziyarete geliyor."),
    ],
    problem: l10n("Wochenbett, Stillen und ein schwieriger Besuch.", "النفاس والإرضاع وزيارة صعبة.", "Postpartum care, breastfeeding and a difficult visit.", "Post-partum, allaitement et une visite difficile.", "Lohusalık, emzirme ve zor bir ziyaret."),
  },
  {
    id: "f09", place: "notaufnahme",
    who: [p("Heinz-Rüdiger Unger", "patient", 58), p("Kenji Tran", "pflege", 32)],
    steps: [
      st("Ambulance", "Herr Unger wird als Notfall aufgenommen.", "السيد أونغر يُدخل كحالة طارئة.", "Mr Beck is admitted as an emergency.", "M. Beck est admis en urgence.", "Bay Beck acil olarak yatırılıyor."),
      st("Heart", "Er hat Bluthochdruck und eine Herzschwäche.", "لديه ارتفاع ضغط وقصور في القلب.", "He has high blood pressure and heart failure.", "Il a de l'hypertension et une insuffisance cardiaque.", "Hipertansiyonu ve kalp yetmezliği var."),
      st("BedDouble", "Pfleger Kenji denkt an die Dekubitusprophylaxe.", "الممرض كنجي يفكر في الوقاية من قرح الضغط.", "Nurse Kenji thinks about pressure ulcer prevention.", "L'infirmier Kenji pense à la prévention des escarres.", "Hemşire Kenji bası yarası önlemini düşünüyor."),
    ],
    problem: l10n("Lebensstil ändern – wie berät die Pflege?", "تغيير نمط الحياة: كيف يقدّم التمريض الإرشاد؟", "Changing one's lifestyle: how does nursing advise?", "Changer de mode de vie : comment les soignants conseillent-ils ?", "Yaşam tarzını değiştirmek: hemşirelik nasıl danışmanlık yapar?"),
  },
  {
    id: "f10", place: "ambulant",
    who: [p("Gerhard Reuther", "kind"), p("Familie Dreher", "angehoerig"), p("Lisbeth Wendland", "azubi", 22), p("Rosa Zeller", "pflege", 37)],
    steps: [
      st("House", "Gerhard (9 Monate) lebt bei seinen Pflegeeltern.", "غيرهارد (٩ أشهر) يعيش مع أسرته الحاضنة.", "Gerhard (9 months) lives with his foster family.", "Gerhard (9 mois) vit dans sa famille d'accueil.", "Gerhard (9 aylık) koruyucu ailesiyle yaşıyor."),
      st("Wind", "Der Kinderpflegedienst „Pusteblume“ besucht die Familie.", "خدمة رعاية الأطفال «Pusteblume» تزور الأسرة.", "The children's care service “Pusteblume” visits the family.", "Le service « Pusteblume » rend visite à la famille.", "“Pusteblume” çocuk bakım hizmeti aileyi ziyaret ediyor."),
      st("Milk", "Frühgeburt und Vernachlässigung prägen Gerhards Geschichte.", "الولادة المبكرة والإهمال جزء من قصة غيرهارد.", "Prematurity and neglect shape Gerhard's history.", "Prématurité et négligence marquent l'histoire de Gerhard.", "Erken doğum ve ihmal Gerhard'un geçmişini şekillendiriyor."),
    ],
    problem: l10n("Pflege im Zuhause einer Pflegefamilie.", "الرعاية في بيت أسرة حاضنة.", "Care in a foster family's home.", "Soins au domicile d'une famille d'accueil.", "Koruyucu aile evinde bakım."),
  },
  {
    id: "f11", place: "ambulant",
    who: [p("Frieda Eberle", "patient", 56), p("Wiebke Förster", "pflege", 27), p("Dorothea", "angehoerig")],
    steps: [
      st("House", "Frau Eberle lebt allein im 2. Stock.", "السيدة إيبرله تعيش وحدها في الطابق الثاني.", "Ms Eberle lives alone on the 2nd floor.", "Mme Eberle vit seule au 2e étage.", "Bayan Eberle 2. katta yalnız yaşıyor."),
      st("TrendingDown", "Ihre MS verschlechtert sich, sie braucht einen Rollstuhl.", "يتدهور تصلّبها المتعدد وتحتاج كرسياً متحركاً.", "Her MS is getting worse; she needs a wheelchair.", "Sa SEP s'aggrave ; elle a besoin d'un fauteuil roulant.", "MS'i kötüleşiyor, tekerlekli sandalyeye ihtiyacı var."),
      st("Handshake", "Pflegedienst „Sonnenblume“ und Schwester Dorothea helfen.", "خدمة «Sonnenblume» وأختها دوروتيا تساعدان.", "The care service “Sonnenblume” and her sister Dorothea help.", "Le service « Sonnenblume » et sa sœur Dorothea aident.", "“Sonnenblume” hizmeti ve kız kardeşi Dorothea yardım ediyor."),
    ],
    problem: l10n("Enttäuschung und Verschlechterung – wie geht es zu Hause weiter?", "خيبة أمل وتدهور: كيف تستمر الحياة في البيت؟", "Disappointment and decline: how does life at home continue?", "Déception et aggravation : comment continuer à domicile ?", "Hayal kırıklığı ve kötüleşme: evde nasıl devam edilir?"),
  },
  {
    id: "f12", place: "heim",
    who: [p("Heinz Imhof", "patient", 74)],
    steps: [
      st("Footprints", "Herr Imhof hat pAVK und wurde am Bein operiert (Bypass).", "السيد إمهوف لديه مرض الشرايين الطرفية وأجريت له جراحة مجازة.", "Mr Imhof has PAD and had bypass surgery.", "M. Imhof a une AOMI et a été opéré (pontage).", "Bay Imhof'de pAVK var, bypass ameliyatı geçirdi."),
      st("Building2", "Er kehrt in die Residenz am Stadtpark zurück.", "يعود إلى «Residenz am Stadtpark».", "He returns to the Residenz am Stadtpark.", "Il retourne à la Residenz am Stadtpark.", "Residenz am Stadtpark'a geri dönüyor."),
      st("Cigarette", "Er raucht weiter und ist gesellig.", "يواصل التدخين وهو اجتماعي.", "He keeps smoking and is sociable.", "Il continue de fumer et est sociable.", "Sigara içmeye devam ediyor, sosyal biri."),
    ],
    problem: l10n("Gesundheit fördern, ohne zu bevormunden.", "تعزيز الصحة دون فرض الوصاية.", "Promoting health without being paternalistic.", "Promouvoir la santé sans paternalisme.", "Vesayet kurmadan sağlığı geliştirmek."),
  },
  {
    id: "f13", place: "festival",
    who: [p("Jörg Bellini", "patient", 17), p("Dario", "angehoerig", 19)],
    steps: [
      st("Tent", "Auf einem Festival wird Jörg bewusstlos gefunden.", "في مهرجان يُعثر على يورغ فاقداً للوعي.", "At a festival Jörg is found unconscious.", "Lors d'un festival, Jörg est retrouvé inconscient.", "Festivalde Jörg bilinçsiz bulunuyor."),
      st("Ambulance", "Der Rettungsdienst bringt ihn in die Notaufnahme.", "الإسعاف ينقله إلى قسم الطوارئ.", "The rescue service takes him to the ER.", "Les secours l'emmènent aux urgences.", "Kurtarma ekibi onu acile götürüyor."),
      st("Zap", "Er hat Epilepsie; sein Freund Dario ist dabei.", "لديه صرع وصديقه داريو معه.", "He has epilepsy; his friend Dario is with him.", "Il est épileptique ; son ami Dario est là.", "Epilepsisi var, arkadaşı Dario yanında."),
    ],
    problem: l10n("Notfallversorgung und Umgang mit einem Jugendlichen.", "الإسعاف الأولي والتعامل مع مراهق.", "Emergency care and dealing with a teenager.", "Soins d'urgence et prise en charge d'un adolescent.", "Acil bakım ve genç hastayla iletişim."),
  },
  {
    id: "f14", place: "notaufnahme",
    who: [p("Uta Kaiser", "pflege", 39)],
    steps: [
      st("Siren", "In der Notaufnahme kommen viele Patienten gleichzeitig.", "في قسم الطوارئ يصل مرضى كثيرون في وقت واحد.", "In the ER many patients arrive at once.", "Aux urgences, de nombreux patients arrivent en même temps.", "Acilde çok sayıda hasta aynı anda geliyor."),
      st("Hash", "Uta ordnet sie mit dem Manchester-Triage-System ein.", "أوتا تصنّفهم بنظام مانشستر للفرز.", "Uta sorts them with the Manchester Triage System.", "Uta les classe avec le Manchester Triage System.", "Uta onları Manchester Triyaj Sistemi ile sınıflandırıyor."),
      st("Sparkles", "Dabei spielt die Händehygiene eine Rolle.", "ومعها تلعب نظافة اليدين دوراً مهماً.", "Hand hygiene plays a role in the process.", "L'hygiène des mains joue un rôle.", "El hijyeni de önemli bir rol oynuyor."),
    ],
    problem: l10n("Prioritäten setzen unter Zeitdruck.", "تحديد الأولويات تحت ضغط الوقت.", "Setting priorities under time pressure.", "Fixer des priorités sous pression.", "Zaman baskısı altında öncelik belirlemek."),
  },
  {
    id: "f15", place: "klinik",
    who: [p("Moritz Novak", "patient", 68), p("Theresa van Lenz", "pflege", 32)],
    steps: [
      st("Hospital", "Herr Novak liegt auf der internistischen Station D1.", "السيد نوفاك في القسم الباطني D1.", "Mr Novak is on internal ward D1.", "M. Novak est en médecine interne (D1).", "Bay Novak dahiliye servisi D1'de yatıyor."),
      st("Droplet", "Es besteht der Verdacht auf eine Thrombose.", "هناك اشتباه بجلطة وريدية.", "A thrombosis is suspected.", "Une thrombose est suspectée.", "Tromboz şüphesi var."),
      st("Beer", "Alkohol und die Trauer um seinen Sohn Norbert belasten ihn.", "الكحول والحزن على ابنه نوربرت يثقلان عليه.", "Alcohol and grief over his son Norbert weigh on him.", "L'alcool et le deuil de son fils Norbert l'accablent.", "Alkol ve oğlu Norbert'in yası onu zorluyor."),
    ],
    problem: l10n("Ein schwieriger Patient – verstehen statt verurteilen.", "مريض صعب: الفهم بدل الحكم.", "A difficult patient: understanding instead of judging.", "Un patient difficile : comprendre plutôt que juger.", "Zor bir hasta: yargılamak yerine anlamak."),
  },
  {
    id: "f16", place: "heim",
    who: [p("Fabio Conti", "patient", 51)],
    steps: [
      st("TrainFront", "Nach einem Zugunfall ist Herr Conti querschnittsgelähmt.", "بعد حادث قطار أصيب السيد كونتي بشلل سفلي.", "After a train accident Mr Conti is paraplegic.", "Après un accident de train, M. Conti est paraplégique.", "Tren kazasından sonra Bay Conti belden aşağı felçli."),
      st("Brain", "Er leidet an PTBS und Depression.", "يعاني من اضطراب ما بعد الصدمة واكتئاب.", "He suffers from PTSD and depression.", "Il souffre de TSPT et de dépression.", "TSSB ve depresyon yaşıyor."),
      st("CircleDot", "Die Einstichstelle des suprapubischen Katheters ist gerötet.", "موضع القسطرة فوق العانة محمرّ.", "The suprapubic catheter site is red.", "Le site du cathéter sus-pubien est rouge.", "Suprapubik kateter yeri kızarık."),
    ],
    problem: l10n("Körperliche und seelische Folgen eines Unfalls pflegen.", "رعاية العواقب الجسدية والنفسية لحادث.", "Caring for the physical and mental effects of an accident.", "Prendre en charge les suites physiques et psychiques d'un accident.", "Bir kazanın bedensel ve ruhsal sonuçlarına bakım vermek."),
  },
  {
    id: "f17", place: "ambulant",
    who: [p("Daniel Oswald", "kind", 9), p("Tanja Oswald", "angehoerig", 37), p("Lotta Petrov", "pflege", 42), p("Sven Pfaff", "azubi", 20)],
    steps: [
      st("Waves", "Daniel ist nach einem Beinahe-Ertrinken schwer behindert.", "دانيال معاق بشدة بعد حادثة شبه غرق.", "Daniel is severely disabled after nearly drowning.", "Daniel est gravement handicapé après une quasi-noyade.", "Daniel boğulma tehlikesinden sonra ağır engelli."),
      st("User", "Seine Mutter Tanja pflegt ihn und braucht eine Pause.", "أمه تانيا ترعاه وتحتاج إلى استراحة.", "His mother Tanja cares for him and needs a break.", "Sa mère Tanja s'occupe de lui et a besoin d'une pause.", "Annesi Tanja ona bakıyor ve mola istiyor."),
      st("BedDouble", "Kurzzeitpflege „Pfiffikus“ nimmt ihn auf.", "رعاية قصيرة الأمد «Pfiffikus» تستقبله.", "Short-term care “Pfiffikus” takes him in.", "L'accueil temporaire « Pfiffikus » l'accueille.", "“Pfiffikus” kısa süreli bakım onu kabul ediyor."),
    ],
    problem: l10n("Entlastung pflegender Angehöriger.", "تخفيف العبء عن الأهل المقدّمين للرعاية.", "Relieving family carers.", "Soulager les proches aidants.", "Bakım veren yakınların yükünü hafifletmek."),
  },
  {
    id: "f18", place: "heim",
    who: [p("Theo Radtke", "patient", 92), p("Mira Radtke", "patient", 91), p("Uwe", "angehoerig")],
    steps: [
      st("HeartHandshake", "Theo und Mira leben im Pflegeheim Trapp.", "تيو وإليزابيث يعيشان في دار «Trapp».", "Theo and Mira live in the care home Trapp.", "Theo et Mira vivent à l'EHPAD Trapp.", "Theo ve Mira Trapp bakım evinde yaşıyor."),
      st("Brain", "Er hatte einen Schlaganfall, sie hat Alzheimer-Demenz.", "هو أصيب بسكتة دماغية وهي لديها خرف ألزهايمر.", "He had a stroke; she has Alzheimer's dementia.", "Il a eu un AVC ; elle a la maladie d'Alzheimer.", "O inme geçirdi, onda Alzheimer demansı var."),
      st("User", "Sohn Uwe kümmert sich um beide.", "ابنهما أوفه يهتم بهما.", "Their son Uwe looks after both.", "Leur fils Uwe s'occupe d'eux.", "Oğulları Uwe ikisiyle de ilgileniyor."),
    ],
    problem: l10n("Ein Paar mit Demenz und Schlaganfall zusammen begleiten.", "مرافقة زوجين: خرف وسكتة دماغية.", "Supporting a couple with dementia and stroke together.", "Accompagner un couple avec démence et AVC.", "Demans ve inmeli bir çifte birlikte eşlik etmek."),
  },
  {
    id: "m01", place: "klinik",
    who: [p("Cornelia Urban", "azubi", 22), p("Eva", "kind"), p("Frau Vetter", "angehoerig"), p("Helga Zander", "pflege")],
    steps: [
      st("Baby", "Cornelia arbeitet auf der Kinderstation. Eva ist 3 Wochen alt.", "كورنيليا تعمل في قسم الأطفال. إيفا عمرها ٣ أسابيع.", "Cornelia works on the children's ward. Eva is 3 weeks old.", "Cornelia travaille en pédiatrie. Eva a 3 semaines.", "Cornelia çocuk servisinde çalışıyor. Eva 3 haftalık."),
      st("Zap", "Eva hat Krampfanfälle und einen genetischen Defekt.", "إيفا لديها نوبات تشنج وعيب وراثي.", "Eva has seizures and a genetic defect.", "Eva a des convulsions et un défaut génétique.", "Eva'nin nöbetleri ve genetik kusuru var."),
      st("Frown", "Cornelia gerät in Konflikt mit Schwester Helga.", "كورنيليا تدخل في نزاع مع الممرضة هيلغا.", "Cornelia comes into conflict with nurse Helga.", "Cornelia entre en conflit avec l'infirmière Helga.", "Cornelia hemşire Helga ile çatışıyor."),
    ],
    problem: l10n("Ein schwer krankes Baby und ein Konflikt im Team.", "رضيعة مريضة جداً ونزاع في الفريق.", "A seriously ill baby and a conflict in the team.", "Un bébé gravement malade et un conflit d'équipe.", "Ağır hasta bir bebek ve ekipte çatışma."),
  },
  {
    id: "m02", place: "klinik",
    who: [p("Volker Bormann", "patient", 55), p("Irene", "angehoerig", 79), p("Jutta Conrad", "pflege", 22)],
    steps: [
      st("Puzzle", "Herr Bormann hat Parkinson.", "السيد بورمان مصاب بالشلل الرعاش.", "Mr Sander has Parkinson's disease.", "M. Sander a la maladie de Parkinson.", "Bay Sander'de Parkinson var."),
      st("Snowflake", "Er erleidet eine akinetische Krise.", "يتعرض لأزمة عدم الحركة.", "He suffers an akinetic crisis.", "Il fait une crise akinétique.", "Akinetik kriz geçiriyor."),
      st("User", "Seine Mutter Irene ist bei ihm.", "والدته إيرينه معه.", "His mother Irene is with him.", "Sa mère Irene est auprès de lui.", "Annesi Irene yanında."),
    ],
    problem: l10n("Einen Pflegeplan für eine akute Krise entwickeln.", "وضع خطة تمريضية لأزمة حادة.", "Developing a care plan for an acute crisis.", "Élaborer un plan de soins pour une crise aiguë.", "Akut kriz için bakım planı hazırlamak."),
  },
  {
    id: "m03", place: "klinik",
    who: [p("Larissa Glaser", "patient", 79), p("Kerstin Dahm", "pflege", 28), p("Werner Ebert", "pflege", 31)],
    steps: [
      st("Bug", "Frau Glaser hat ein Beingeschwür mit MRSA.", "السيدة غلازر لديها قرحة في الساق مع MRSA.", "Ms Fischer has a leg ulcer with MRSA.", "Mme Fischer a un ulcère de jambe avec SARM.", "Bayan Fischer'in bacağında MRSA'lı yara var."),
      st("DoorOpen", "Sie liegt in Isolation auf Station 7a.", "هي معزولة في القسم 7a.", "She is in isolation on ward 7a.", "Elle est en isolement au service 7a.", "7a servisinde izolasyonda."),
      st("Sparkles", "Das Team muss Hygieneregeln einhalten.", "على الفريق الالتزام بقواعد النظافة.", "The team has to follow hygiene rules.", "L'équipe doit respecter les règles d'hygiène.", "Ekip hijyen kurallarına uymak zorunda."),
    ],
    problem: l10n("Hygiene und menschliche Zuwendung unter einen Hut bringen.", "التوفيق بين قواعد النظافة والاهتمام الإنساني.", "Balancing hygiene rules and human attention.", "Concilier hygiène et attention humaine.", "Hijyen kuralları ile insani ilgiyi dengelemek."),
  },
  {
    id: "m04", place: "ambulant",
    who: [p("Tamar Beridze", "kind", 4), p("Wiebke Bertoli", "azubi", 21), p("Yannick Björn", "pflege")],
    steps: [
      st("House", "Tamar (4) lebt mit Muskeldystrophie zu Hause.", "تامار (٤ سنوات) تعيش في البيت مع ضمور عضلي.", "Tamar (4) lives at home with muscular dystrophy.", "Tamar (3 ans) vit à domicile avec une dystrophie musculaire.", "Tamar (4) kas distrofisiyle evde yaşıyor."),
      st("Wind", "Sie wird beatmet und muss über die Trachealkanüle abgesaugt werden.", "هي على جهاز تنفس وتحتاج شفط عبر أنبوب القصبة.", "She is ventilated and needs suctioning via the tracheal cannula.", "Elle est ventilée et aspirée par la canule trachéale.", "Solunum cihazına bağlı, trakeal kanülden aspirasyon gerekiyor."),
      st("GraduationCap", "Azubi Wiebke begleitet Pfleger Yannick.", "المتدرّبة فيبكه ترافق الممرض يانيك.", "Trainee Wiebke accompanies nurse Yannick.", "La stagiaire Wiebke accompagne l'infirmier Yannick.", "Stajyer Wiebke hemşire Yannick'e eşlik ediyor."),
    ],
    problem: l10n("Ein normales Leben für ein beatmetes Kind ermöglichen.", "تمكين طفلة على جهاز التنفس من حياة طبيعية.", "Enabling a normal life for a ventilated child.", "Permettre une vie normale à une enfant ventilée.", "Solunum cihazlı çocuğa normal bir yaşam sağlamak."),
  },
  {
    id: "m05", place: "ambulant",
    who: [p("Anton Zander", "kind", 9), p("Kerem Aydogan", "azubi", 22), p("Olga Heller", "pflege", 38)],
    steps: [
      st("Waves", "Nach einem Poolunfall hat Anton einen Hirnschaden.", "بعد حادث مسبح أصيب أنتون بتلف دماغي.", "After a pool accident Anton has brain damage.", "Après un accident de piscine, Anton a des lésions cérébrales.", "Havuz kazasından sonra Anton'ta beyin hasarı var."),
      st("Stethoscope", "Er hat Tracheostoma und PEG.", "لديه فغر في القصبة وأنبوب PEG.", "He has a tracheostomy and a PEG tube.", "Il a une trachéostomie et une sonde PEG.", "Trakeostomisi ve PEG'i var."),
      st("Star", "Der ambulante Intensivdienst „Sternblick“ betreut ihn.", "خدمة العناية المركزة المنزلية «Sternblick» ترعاه.", "The home intensive care service “Sternblick” looks after him.", "Le service de soins intensifs à domicile « Sternblick » le prend en charge.", "“Sternblick” evde yoğun bakım hizmeti ona bakıyor."),
    ],
    problem: l10n("Alles ist anders als vorher – Familie und Pflege müssen neu starten.", "كل شيء تغيّر: على الأسرة والتمريض البدء من جديد.", "Everything has changed: family and care must start anew.", "Tout a changé : famille et soignants doivent repartir à zéro.", "Her şey değişti: aile ve bakım yeniden başlamalı."),
  },
  {
    id: "m06", place: "ambulant",
    who: [p("Benedikt Krause", "patient", 56), p("Rebecca Ihle", "pflege", 30)],
    steps: [
      st("House", "Herr Krause ist verwitwet, seine Wohnung ist voller Müll.", "السيد كراوزه أرمل وشقته مليئة بالقمامة.", "Mr Krause is widowed; his home is full of rubbish.", "M. Krause est veuf ; son logement est rempli de déchets.", "Bay Krause dul, evi çöple dolu."),
      st("Footprints", "Er hat Diabetes Typ 2; ein Zeh wurde amputiert.", "لديه سكري النوع الثاني وبُترت إحدى أصابع قدمه.", "He has type 2 diabetes; a toe was amputated.", "Il a un diabète de type 2 ; un orteil a été amputé.", "Tip 2 diyabeti var, bir ayak parmağı kesildi."),
      st("DoorOpen", "Pflegerin Rebecca besucht ihn nach der Entlassung.", "الممرضة ريبيكا تزوره بعد خروجه.", "Nurse Rebecca visits him after discharge.", "L'infirmière Rebecca lui rend visite après sa sortie.", "Hemşire Rebecca taburculuktan sonra onu ziyaret ediyor."),
    ],
    problem: l10n("Selbstbestimmung, Gefahr und Hilfe in einer verwahrlosten Wohnung.", "تقرير المصير والخطر والمساعدة في بيت مهمل.", "Self-determination, risk and help in a neglected home.", "Autodétermination, danger et aide dans un logement négligé.", "İhmal edilmiş evde özerklik, risk ve yardım."),
  },
  {
    id: "m07", place: "wg",
    who: [p("Miriam Nolte", "patient", 48), p("Ulrike Merz", "azubi", 20), p("Uta Lorch", "pflege", 40)],
    steps: [
      st("House", "Frau Nolte hat ALS und lebt in der Intensiv-WG Opitz.", "السيدة نولته مصابة بالتصلّب الجانبي الضموري وتعيش في مجموعة العناية المركزة.", "Ms Rausch has ALS and lives in the intensive care shared flat Opitz.", "Mme Rausch a la SLA et vit en colocation de soins intensifs Opitz.", "Bayan Rausch'ta ALS var, Opitz yoğun bakım yaşam grubunda yaşıyor."),
      st("Wind", "Sie wird beatmet.", "هي على جهاز التنفس.", "She is ventilated.", "Elle est ventilée.", "Solunum cihazına bağlı."),
      st("TriangleAlert", "In der Frühstückspause kommt es zu einem Zwischenfall.", "أثناء استراحة الفطور يقع حادث.", "An incident happens during the breakfast break.", "Un incident survient pendant la pause petit-déjeuner.", "Kahvaltı molasında bir olay yaşanıyor."),
    ],
    problem: l10n("Verantwortung der Auszubildenden bei einem Zwischenfall.", "مسؤولية المتدرّبة عند وقوع حادث.", "The trainee's responsibility in an incident.", "Responsabilité de la stagiaire lors d'un incident.", "Bir olayda stajyerin sorumluluğu."),
  },
  {
    id: "m08", place: "team",
    who: [p("Valerie Pape", "team", 65), p("Wilma Quandt", "team", 25)],
    steps: [
      st("Thermometer", "Es ist heiß – 36 Grad, und es wird noch heißer.", "الطقس حار: ٣٦ درجة وسيزداد.", "It is hot: 36 degrees and getting hotter.", "Il fait chaud : 36 degrés et ça monte.", "Hava sıcak: 36 derece, daha da artacak."),
      st("House", "Der ambulante Dienst „Herz und Hand“ ist gestresst.", "خدمة «Herz und Hand» تحت الضغط.", "The home care service “Herz und Hand” is stressed.", "Le service « Herz und Hand » est sous pression.", "“Herz und Hand” hizmeti stres altında."),
      st("MessageCircle", "Das Team führt eine kollegiale Beratung durch.", "الفريق يجري استشارة بين الزملاء.", "The team holds a peer consultation.", "L'équipe organise un conseil entre collègues.", "Ekip meslektaş danışmanlığı yapıyor."),
    ],
    problem: l10n("Belastung im Team gemeinsam lösen.", "حل ضغط العمل في الفريق معاً.", "Solving the team's strain together.", "Résoudre ensemble la surcharge de l'équipe.", "Ekipteki yükü birlikte çözmek."),
  },
  {
    id: "m09", place: "wg",
    who: [p("Sven Thomsen", "kind", 15), p("Carsten Ullmann", "azubi", 20)],
    steps: [
      st("Flame", "Sven lebt in der Wohngruppe „Pfefferkörner“.", "سفين يعيش في المجموعة السكنية «Pfefferkörner».", "Sven lives in the residential group “Pfefferkörner”.", "Sven vit dans le foyer « Pfefferkörner ».", "Sven “Pfefferkörner” yaşam grubunda yaşıyor."),
      st("Syringe", "Er hat Diabetes Typ 1 und spritzt unregelmäßig Insulin.", "لديه سكري النوع الأول ويحقن الإنسولين بشكل غير منتظم.", "He has type 1 diabetes and injects insulin irregularly.", "Il a un diabète de type 1 et s'injecte l'insuline irrégulièrement.", "Tip 1 diyabeti var, insülini düzensiz yapıyor."),
      st("TrendingUp", "Sein HbA1c-Wert ist erhöht.", "قيمة HbA1c لديه مرتفعة.", "His HbA1c is elevated.", "Son HbA1c est élevé.", "HbA1c değeri yüksek."),
    ],
    problem: l10n("Delegation und Remonstration: Was darf Azubi Carsten tun?", "التفويض والاعتراض: ماذا يُسمح للمتدرّب كارستن؟", "Delegation and remonstration: what may trainee Carsten do?", "Délégation et remontrance : que peut faire le stagiaire Carsten ?", "Görev devri ve itiraz: stajyer Carsten ne yapabilir?"),
  },
  {
    id: "m10", place: "heim",
    who: [p("Herr Arnold", "patient", 56), p("David Zink", "azubi", 21), p("Zoe Wirth", "pflege", 47)],
    steps: [
      st("Building2", "Herr Arnold lebt im Pflegeheim.", "السيد أرنولد يعيش في دار الرعاية.", "Mr Konrad lives in a nursing home.", "M. Konrad vit en maison de retraite.", "Bay Konrad bakım evinde yaşıyor."),
      st("HeartPulse", "Er hat Leberzirrhose mit Aszites.", "لديه تليّف كبدي مع استسقاء.", "He has liver cirrhosis with ascites.", "Il a une cirrhose avec ascite.", "Karaciğer sirozu ve asiti var."),
      st("Beer", "Er möchte gern ein Bier.", "يريد كأس بيرة.", "He would like a beer.", "Il voudrait une bière.", "Bir bira istiyor."),
    ],
    problem: l10n("Selbstbestimmung, Gesundheit und rechtliche Betreuung.", "تقرير المصير والصحة والوصاية القانونية.", "Self-determination, health and legal guardianship.", "Autodétermination, santé et tutelle.", "Özerklik, sağlık ve yasal vasilik."),
  },
  {
    id: "m11", place: "heim",
    who: [p("Harald Dorn", "pflege", 29), p("Jakob Eckert", "azubi", 24), p("Gregor Barthel", "patient", 74)],
    steps: [
      st("Hand", "Praxisanleiter Harald begrüßt den neuen Azubi Jakob.", "المرشد هارالد يرحّب بالمتدرّب الجديد ياكوب.", "Practical mentor Harald welcomes the new trainee Jakob.", "Le tuteur Harald accueille le nouveau stagiaire Jakob.", "Eğitmen Harald yeni stajyer Jakob'ı karşılıyor."),
      st("Building2", "In der Seniorenresidenz „Am Hain“ stürzt Herr Barthel.", "في مجمّع «Am Hain» يسقط السيد بارتل.", "In the senior residence “Am Hain” Mr Barthel falls.", "À la résidence « Am Hain », M. Barthel fait une chute.", "“Am Hain” rezidansında Bay Barthel düşüyor."),
      st("Search", "Gerade läuft eine MDK-Prüfung.", "في نفس الوقت تجري فحص MDK.", "An MDK inspection is under way at that moment.", "Une inspection du MDK a lieu au même moment.", "Tam o sırada MDK denetimi sürüyor."),
    ],
    problem: l10n("Einarbeitung und Sturz unter Beobachtung.", "التدريب الأولي وسقوط تحت المراقبة.", "Induction and a fall under observation.", "Intégration et chute sous observation.", "İşe alıştırma ve gözetim altında düşme."),
  },
  {
    id: "m12", place: "heim",
    who: [p("Annika Fiedler", "patient", 80), p("Emre Kaya", "pflege", 27)],
    steps: [
      st("Bone", "Frau Fiedler hat rheumatoide Polyarthritis.", "السيدة فيدلر مصابة بالتهاب المفاصل الروماتويدي.", "Ms Seidel has rheumatoid polyarthritis.", "Mme Seidel a une polyarthrite rhumatoïde.", "Bayan Seidel'de romatoid poliartrit var."),
      st("Truck", "Sie zieht ins Pflegeheim Herbstgold.", "تنتقل إلى دار «Herbstgold».", "She moves into the care home Herbstgold.", "Elle emménage à la maison de retraite Herbstgold.", "Herbstgold bakım evine taşınıyor."),
      st("Handshake", "Pfleger Emre begleitet die Eingewöhnung.", "الممرض إمره يرافقها في فترة التأقلم.", "Nurse Emre supports her settling in.", "L'infirmier Emre accompagne son adaptation.", "Hemşire Emre alışma sürecine eşlik ediyor."),
    ],
    problem: l10n("Umzug ins Pflegeheim und Eingewöhnung.", "الانتقال إلى دار الرعاية والتأقلم.", "Moving into a care home and settling in.", "Emménagement en maison de retraite et adaptation.", "Bakım evine taşınma ve alışma."),
  },
  {
    id: "z01", place: "heim",
    who: [p("Diana Jäger", "patient", 87), p("Derya Kaplan", "pflege", 33), p("Kurt Ilgen", "azubi", 21), p("Hilde", "angehoerig", 56)],
    steps: [
      st("Moon", "Frau Jäger stürzt nachts auf dem Weg zur Toilette.", "السيدة يغر تسقط ليلاً في طريقها إلى المرحاض.", "Mrs Jäger falls at night on her way to the toilet.", "Mme Jäger tombe la nuit en allant aux toilettes.", "Bayan Jäger geceleyin tuvalete giderken düşüyor."),
      st("Hospital", "Hüft-TEP im Krankenhaus, nach zwölf Tagen Rückkehr ins Heim.", "استبدال مفصل الورك في المستشفى والعودة إلى دار الرعاية بعد 12 يوماً.", "Hip replacement in hospital, back in the home after twelve days.", "Prothèse de hanche à l'hôpital, retour à la maison de retraite après douze jours.", "Hastanede kalça protezi, on iki gün sonra bakım evine dönüş."),
      st("Users", "Die Tochter fordert ein Bettgitter und denkt an die Pflege zu Hause.", "الابنة تطلب حاجز سرير وتفكر بالرعاية في البيت.", "The daughter demands a bed rail and considers home care.", "La fille demande une barrière de lit et envisage les soins à domicile.", "Kızı yatak korkuluğu istiyor ve evde bakımı düşünüyor."),
    ],
    problem: l10n("Wie werden Sturzrisiko, Angst und Angehörigenwünsche fachlich und rechtlich richtig behandelt?", "كيف يُتعامل مع خطر السقوط والخوف ورغبات الأقارب مهنياً وقانونياً؟", "How are fall risk, fear and relatives' wishes handled professionally and legally?", "Comment traiter correctement le risque de chute, la peur et les souhaits des proches sur le plan professionnel et juridique ?", "Düşme riski, korku ve yakınların istekleri mesleki ve hukuki olarak nasıl ele alınır?"),
  },
  {
    id: "z02", place: "klinik",
    who: [p("Konstantin Schreiber", "kind", 10), p("Leander Thaler", "pflege", 31), p("Miriam Schreiber", "angehoerig", 40)],
    steps: [
      st("Hospital", "Konstantin wird mit Knieschmerzen und Müdigkeit aufgenommen.", "يُقبل كونستانتين بآلام في الركبة وتعب.", "Konstantin is admitted with knee pain and fatigue.", "Konstantin est admis avec des douleurs au genou et de la fatigue.", "Konstantin diz ağrısı ve yorgunlukla yatırılıyor."),
      st("Utensils", "Viel Limonade, Fast Food und Bildschirmzeit prägen den Alltag.", "الحياة اليومية مليئة بالمشروبات الغازية والوجبات السريعة وأوقات الشاشة.", "Lots of lemonade, fast food and screen time shape daily life.", "Beaucoup de limonade, de fast-food et d'écrans rythment le quotidien.", "Günlük yaşamda çok gazoz, fast food ve ekran süresi var."),
      st("Frown", "In der Schule wird er gehänselt.", "يتعرض للسخرية في المدرسة.", "He is teased at school.", "On se moque de lui à l'école.", "Okulda alay ediliyor."),
    ],
    problem: l10n("Wie berät der Pflegefachmann die Familie ohne Schuldzuweisung und stärkt Konstantin?", "كيف يرشد الممرض الأسرة دون لوم ويقوّي كونستانتين؟", "How does the nurse advise the family without blame and strengthen Konstantin?", "Comment l'infirmier conseille-t-il la famille sans culpabiliser et soutient-il Konstantin ?", "Hemşire aileyi suçlamadan nasıl yönlendirir ve Konstantin'ı nasıl güçlendirir?"),
  },
  {
    id: "z03", place: "klinik",
    who: [p("Pascal Janssen", "patient", 81), p("Svenja Wisniewski", "pflege", 46), p("Olaf", "angehoerig", 53)],
    steps: [
      st("Bandage", "Nach einer Sepsis wird das linke Bein unterhalb des Knies amputiert.", "بعد إنتان الدم يُبتر الساق اليسرى تحت الركبة.", "After sepsis the left leg is amputated below the knee.", "Après une septicémie, la jambe gauche est amputée sous le genou.", "Sepsis sonrası sol bacak diz altından ampute ediliyor."),
      st("Syringe", "Phantomschmerzen, Metamizol und ein niedriger Blutzucker.", "ألم الطرف الشبحي وميتاميزول وسكر دم منخفض.", "Phantom pain, metamizole and low blood sugar.", "Douleurs fantômes, métamizole et glycémie basse.", "Hayalet ağrısı, metamizol ve düşük kan şekeri."),
      st("Frown", "Herr Janssen sagt: „Lieber tot als ein Krüppel.“", "السيد يانسن يقول: «الموت أفضل من أن أكون معاقاً».", "Mr Janssen says: “Better dead than a cripple.”", "M. Janssen dit : « Plutôt mort qu'infirme. »", "Bay Janssen: «Sakat olmaktansa ölmek yeğ» diyor."),
    ],
    problem: l10n("Wie reagiert die Pflegekraft auf Krise und Suizidgedanken und wer entscheidet rechtlich?", "كيف تتصرف الممرضة تجاه الأزمة وأفكار الانتحار ومن يقرر قانونياً؟", "How does the nurse respond to crisis and suicidal thoughts, and who decides legally?", "Comment l'infirmière réagit-elle à la crise et aux idées suicidaires, et qui décide juridiquement ?", "Hemşire krize ve intihar düşüncelerine nasıl yanıt verir ve hukuken kim karar verir?"),
  },
  {
    id: "z04", place: "klinik",
    who: [p("Jessica Quast", "kind", 16), p("Leyla Celik", "pflege", 29), p("Kathrin Quast", "angehoerig", 44)],
    steps: [
      st("Hospital", "Jessica hat Spina bifida und kommt mit Harnwegsinfekt und Dekubitus.", "جيسيكا مصابة بسنسنة مشقوقة وتأتي بعدوى بولية وقرحة ضغط.", "Jessica has spina bifida and arrives with a urinary tract infection and a pressure ulcer.", "Jessica a un spina-bifida et arrive avec une infection urinaire et une escarre.", "Jessica'da spina bifida var; idrar yolu enfeksiyonu ve bası yarasıyla geliyor."),
      st("ShieldCheck", "Latexallergie und Selbstkatheterismus müssen beachtet werden.", "يجب مراعاة حساسية اللاتكس والقسطرة الذاتية.", "Latex allergy and self-catheterisation must be considered.", "L'allergie au latex et l'autosondage doivent être pris en compte.", "Lateks alerjisi ve kendi kendine kateterizasyon dikkate alınmalı."),
      st("House", "Jessica möchte in eine Wohngemeinschaft ziehen.", "جيسيكا تريد الانتقال إلى سكن مشترك.", "Jessica wants to move into a shared flat.", "Jessica veut emménager en colocation.", "Jessica ortak bir eve taşınmak istiyor."),
    ],
    problem: l10n("Wie werden Selbstbestimmung der Jugendlichen und Sorgen der Eltern vereinbart?", "كيف يُوفَّق بين استقلالية المراهقة ومخاوف الوالدين؟", "How are the teenager's autonomy and the parents' worries reconciled?", "Comment concilier l'autonomie de l'adolescente et les inquiétudes des parents ?", "Genç kızın özerkliği ile ailenin endişeleri nasıl uzlaştırılır?"),
  },
  {
    id: "z05", place: "klinik",
    who: [p("Karl-Heinz Kolb", "patient", 72), p("Ulf Ullrich", "pflege", 35), p("Samira Nasser", "azubi", 22), p("Leonie Kolb", "angehoerig", 70)],
    steps: [
      st("Brain", "Schlaganfall links: rechtsseitige Lähmung und Sprachstörung.", "سكتة في الجانب الأيسر: شلل أيمن واضطراب في الكلام.", "Left-sided stroke: right-sided paralysis and speech disorder.", "AVC gauche : paralysie à droite et trouble du langage.", "Sol inme: sağ tarafta felç ve konuşma bozukluğu."),
      st("Utensils", "Beim Essen hustet er und das Essen bleibt in der Wange.", "يسعل أثناء الأكل ويبقى الطعام في الخد.", "He coughs while eating and food stays in his cheek.", "Il tousse en mangeant et la nourriture reste dans la joue.", "Yemek sırasında öksürüyor ve yemek yanağında kalıyor."),
      st("Users", "Seine Frau ist überfordert.", "زوجته تشعر بالإرهاق.", "His wife feels overwhelmed.", "Son épouse est dépassée.", "Eşi bunalmış durumda."),
    ],
    problem: l10n("Wie werden Dysphagie, Aphasie, Lagerung und Angehörigenberatung fachgerecht gelöst?", "كيف تُعالج عسر البلع والحبسة والتوضع وإرشاد الأقارب بشكل مهني؟", "How are dysphagia, aphasia, positioning and relatives' counselling handled professionally?", "Comment gérer correctement dysphagie, aphasie, positionnement et conseil aux proches ?", "Disfaji, afazi, pozisyon ve yakın danışmanlığı mesleki olarak nasıl çözülür?"),
  },
  {
    id: "m13", place: "heim",
    who: [p("Melanie Lemke", "patient", 83), p("Olaf Lemke", "angehoerig", 52), p("Leonie Mohr", "pflege", 50)],
    steps: [
      st("Brain", "Frau Lemke sucht ständig ihren „Schlüssel“ und erkennt ihren Sohn nicht.", "السيدة ليمكه تبحث باستمرار عن «مفتاحها» ولا تتعرّف على ابنها.", "Mrs Brandt keeps searching for her “key” and does not recognise her son.", "Mme Brandt cherche sans cesse sa « clé » et ne reconnaît pas son fils.", "Bayan Brandt sürekli «anahtarını» arıyor ve oğlunu tanımıyor."),
      st("Users", "Funktionspflege und ein Streit im Team über Bezugspflege.", "تمريض وظيفي وخلاف في الفريق حول التمريض المرجعي.", "Functional nursing and a team dispute about primary nursing.", "Soins fonctionnels et dispute d'équipe sur les soins référents.", "Fonksiyonel bakım ve ekipte birincil bakım tartışması."),
      st("ShieldCheck", "Bettgitter und Beruhigungsmittel: Ist das erlaubt? Der MD kommt in zwei Wochen.", "حاجز السرير والمهدئات: هل هذا مسموح؟ والمراجعة الطبية بعد أسبوعين.", "Bed rail and sedatives: is this allowed? The inspection is in two weeks.", "Barrière de lit et sédatifs : est-ce permis ? Le contrôle a lieu dans deux semaines.", "Yatak korkuluğu ve sakinleştirici: izinli mi? Denetim iki hafta sonra."),
    ],
    problem: l10n("Wie gehen Sie mit Demenz, Konflikt im Team und freiheitsentziehenden Maßnahmen um?", "كيف تتعاملون مع الخرف والنزاع في الفريق والإجراءات المقيّدة للحرية؟", "How do you deal with dementia, team conflict and restraint measures?", "Comment gérer démence, conflit d'équipe et mesures de contention ?", "Demans, ekip çatışması ve özgürlüğü kısıtlayıcı önlemlerle nasıl başa çıkarsınız?"),
  },
  {
    id: "m14", place: "klinik",
    who: [p("Jelena Horvat", "pflege", 38), p("Jakob Noack", "patient", 46), p("Frau Pohlmann", "team", 52)],
    steps: [
      st("Frown", "Die Kollegin ist erschöpft und gefühllos geworden.", "الزميلة منهكة وفقدت مشاعرها.", "The colleague is exhausted and emotionally numb.", "La collègue est épuisée et insensible.", "Meslektaş tükenmiş ve duygusuzlaşmış."),
      st("Activity", "Herr Noack hat Schmerzen „8“ und fühlt sich nicht ernst genommen.", "السيد نواك يشعر بألم «8» ولا يُؤخذ على محمل الجد.", "Mr Noack reports pain “8” and feels not taken seriously.", "M. Noack a une douleur « 8 » et ne se sent pas pris au sérieux.", "Bay Noack ağrıyı «8» bildiriyor ve ciddiye alınmadığını hissediyor."),
      st("ClipboardList", "Pflegevisite und Fallbesprechung sollen helfen.", "زيارة التمريض واجتماع الحالة للمساعدة.", "A nursing visit and case review should help.", "Une visite de soins et une réunion de cas doivent aider.", "Bakım vizitesi ve vaka görüşmesi yardımcı olmalı."),
    ],
    problem: l10n("Wie helfen Sie der Kollegin und wie sichern Sie die Schmerzversorgung?", "كيف تساعدون الزميلة وكيف تضمنون علاج الألم؟", "How do you help the colleague and secure pain management?", "Comment aider la collègue et assurer la prise en charge de la douleur ?", "Meslektaşa nasıl yardım eder, ağrı yönetimini nasıl sağlarsınız?"),
  },
  {
    id: "m15", place: "wg",
    who: [p("Paul und Lena", "patient", 27), p("Frau Albers", "pflege", 45), p("Herr Meurer", "angehoerig", 58)],
    steps: [
      st("Heart", "Lena (Trisomie 21) möchte Paul heiraten.", "لينا (متلازمة داون) تريد الزواج من باول.", "Lena (Down syndrome) wants to marry Paul.", "Lena (trisomie 21) veut épouser Paul.", "Lena (Down sendromu) Paul ile evlenmek istiyor."),
      st("ShieldCheck", "Der Vater fürchtet Überforderung und Missbrauch.", "الأب يخشى الإرهاق وسوء المعاملة.", "Her father fears overload and abuse.", "Le père craint la surcharge et les abus.", "Baba aşırı yüklenmeden ve istismardan korkuyor."),
      st("BookOpen", "Selbstbestimmung, UN-BRK und die Geschichte der Pflege.", "تقرير المصير واتفاقية حقوق ذوي الإعاقة وتاريخ التمريض.", "Self-determination, UN CRPD and the history of nursing.", "Autodétermination, CDPH et histoire des soins.", "Özerklik, BM Engelli Hakları Sözleşmesi ve hemşirelik tarihi."),
    ],
    problem: l10n("Wie stärken Sie Selbstbestimmung und beraten zu Gesundheit und Vollmachten?", "كيف تعزّزون تقرير المصير وتقدّمون الاستشارة الصحية والتوكيلات؟", "How do you support self-determination and advise on health and powers of attorney?", "Comment soutenir l'autodétermination et conseiller santé et procurations ?", "Özerkliği nasıl desteklersiniz, sağlık ve vekâletler konusunda nasıl danışmanlık verirsiniz?"),
  },
  {
    id: "m16", place: "klinik",
    who: [p("Herr Auer", "patient", 78), p("Sie (Pflegefachperson)", "pflege", 30), p("Frau Auer", "angehoerig", 75)],
    steps: [
      st("Heart", "Herr Auer will nach einem Herzinfarkt sein Testament machen.", "السيد أور يريد كتابة وصيته بعد نوبة قلبية.", "Mr Auer wants to make his will after a heart attack.", "M. Auer veut faire son testament après un infarctus.", "Bay Auer kalp krizinden sonra vasiyet yazmak istiyor."),
      st("Zap", "Plötzlich Kreislaufstillstand: Reanimation.", "توقف مفاجئ للقلب: إنعاش.", "Sudden cardiac arrest: resuscitation.", "Arrêt cardiaque soudain : réanimation.", "Ani kalp durması: resüsitasyon."),
      st("BookOpen", "Nottestament, Pflegewissenschaft und lebenslanges Lernen.", "وصية الطوارئ وعلم التمريض والتعلّم مدى الحياة.", "Emergency will, nursing science and lifelong learning.", "Testament d'urgence, sciences infirmières et formation continue.", "Acil vasiyet, hemşirelik bilimi ve yaşam boyu öğrenme."),
    ],
    problem: l10n("Was ist rechtlich beim Testament und bei der Reanimation zu beachten?", "ما الذي يجب مراعاته قانونياً في الوصية والإنعاش؟", "What must be considered legally for the will and resuscitation?", "Que faut-il respecter juridiquement pour le testament et la réanimation ?", "Vasiyet ve resüsitasyonda hukuken nelere dikkat edilmeli?"),
  },
  {
    id: "m17", place: "klinik",
    who: [p("Mika", "kind", 3), p("Frau Jansen", "angehoerig", 32), p("Sie (Pflegefachperson)", "pflege", 28)],
    steps: [
      st("Thermometer", "Mika (3 Jahre) hat Erbrechen und Durchfall: Rotavirus.", "ميكا (3 سنوات) يعاني من القيء والإسهال: فيروس الروتا.", "Mika (3) has vomiting and diarrhoea: rotavirus.", "Mika (3 ans) vomit et a la diarrhée : rotavirus.", "Mika (3 yaşında) kusma ve ishal: rotavirüs."),
      st("ShieldCheck", "Strenge Hygiene, Isolation und Händedesinfektion.", "نظافة صارمة وعزل وتعقيم الأيدي.", "Strict hygiene, isolation and hand disinfection.", "Hygiène stricte, isolement et désinfection des mains.", "Sıkı hijyen, izolasyon ve el dezenfeksiyonu."),
      st("Users", "Mutter anleiten, Team schützen und Belastung der Pflegenden.", "توجيه الأم وحماية الفريق وعبء الممرضين.", "Guide the mother, protect the team and workload of nurses.", "Guider la mère, protéger l'équipe et charge des soignants.", "Anneyi yönlendirme, ekibi koruma ve hemşire iş yükü."),
    ],
    problem: l10n("Wie verhindern Sie die Ausbreitung und leiten die Mutter an?", "كيف تمنعون انتشار العدوى وتوجّهون الأم؟", "How do you prevent spread and instruct the mother?", "Comment éviter la propagation et guider la mère ?", "Yayılımı nasıl önler, anneyi nasıl yönlendirirsiniz?"),
  },
  {
    id: "m18", place: "notaufnahme",
    who: [p("Frau Berger", "patient", 82), p("Hausarzt", "arzt", 55), p("Sie (Pflegefachperson)", "pflege", 29)],
    steps: [
      st("Stethoscope", "Telefonische Anordnung des Arztes und Unsicherheit.", "أمر الطبيب الهاتفي وعدم اليقين.", "The doctor's telephone order and uncertainty.", "Prescription téléphonique du médecin et incertitude.", "Doktorun telefonla talimatı ve belirsizlik."),
      st("Activity", "Sturz, Osteoporose und Frakturrisiko.", "سقوط وهشاشة عظام وخطر كسر.", "Fall, osteoporosis and fracture risk.", "Chute, ostéoporose et risque de fracture.", "Düşme, osteoporoz ve kırık riski."),
      st("BookOpen", "Evidenzbasierte Pflege und Weiterentwicklung des Berufs.", "تمريض قائم على الأدلة وتطوير المهنة.", "Evidence-based nursing and developing the profession.", "Soins fondés sur les preuves et évolution de la profession.", "Kanıta dayalı bakım ve mesleğin gelişimi."),
    ],
    problem: l10n("Was tun bei mündlicher Anordnung und wie beugen Sie Stürzen vor?", "ماذا تفعلون عند الأمر الشفهي وكيف تمنعون السقوط؟", "What to do with verbal orders and how to prevent falls?", "Que faire avec une prescription orale et comment prévenir les chutes ?", "Sözlü talimatta ne yapılır, düşmeler nasıl önlenir?"),
  },
  {
    id: "m19", place: "ambulant",
    who: [p("Herr Weigel", "patient", 81), p("Frau Weigel", "angehoerig", 78), p("Pflegedienst", "pflege", 40)],
    steps: [
      st("Frown", "Herr Weigel zieht sich zurück und verstummt.", "السيد فايغل ينسحب ويصمت.", "Mr Weigel withdraws and falls silent.", "M. Weigel se replie et se tait.", "Bay Weigel içine kapanıyor ve susuyor."),
      st("ClipboardList", "Pflegegrad, Begutachtung und Case Management.", "درجة الرعاية والتقييم وإدارة الحالة.", "Care level, assessment and case management.", "Degré de dépendance, expertise et case management.", "Bakım derecesi, değerlendirme ve vaka yönetimi."),
      st("Scale", "Grund- und Behandlungspflege, Vorbehaltsaufgaben.", "الرعاية الأساسية والعلاجية والمهام المحجوزة.", "Basic and medical nursing care, reserved tasks.", "Soins de base et médicaux, tâches réservées.", "Temel ve tıbbi bakım, ayrılmış görevler."),
    ],
    problem: l10n("Wie organisieren Sie die Versorgung und welche Aufgaben sind Pflegefachpersonen vorbehalten?", "كيف تنظمون الرعاية وما المهام المحجوزة للتمريض؟", "How do you organise care and which tasks are reserved for nurses?", "Comment organiser les soins et quelles tâches sont réservées ?", "Bakımı nasıl organize edersiniz, hangi görevler hemşirelere ayrılmıştır?"),
  },
  {
    id: "m20", place: "ambulant",
    who: [p("Jonas", "kind", 9), p("Frau Reuter", "angehoerig", 39), p("Sie (Pflegefachperson)", "pflege", 26)],
    steps: [
      st("Syringe", "Fehler bei der Insulingabe bei einem Kind mit Diabetes.", "خطأ في إعطاء الإنسولين لطفل مصاب بالسكري.", "A mistake in insulin dosing for a child with diabetes.", "Erreur d'insuline chez un enfant diabétique.", "Diyabetli çocukta insülin hatası."),
      st("ShieldCheck", "Haftung, Aufklärung der Eltern und Schweigepflicht.", "المسؤولية وإبلاغ الأهل وسرية المهنة.", "Liability, informing parents and confidentiality.", "Responsabilité, information des parents et secret professionnel.", "Sorumluluk, ebeveynleri bilgilendirme ve gizlilik."),
      st("Users", "Fehlerkultur, Betriebsrat und Schulung.", "ثقافة الأخطاء ومجلس العمال والتدريب.", "Error culture, works council and training.", "Culture d'erreur, comité d'entreprise et formation.", "Hata kültürü, iş konseyi ve eğitim."),
    ],
    problem: l10n("Wie gehen Sie nach einem Medikationsfehler vor?", "كيف تتصرفون بعد خطأ دوائي؟", "How do you proceed after a medication error?", "Comment procéder après une erreur médicamenteuse ?", "İlaç hatasından sonra nasıl hareket edersiniz?"),
  },
  {
    id: "m21", place: "klinik",
    who: [p("Marco Esser", "patient", 31), p("Sie (Pflegefachperson)", "pflege", 32), p("Team", "team")],
    steps: [
      st("Flame", "Herr Esser wird laut und schlägt die Tür zu.", "السيد إسر يرفع صوته ويصفق الباب.", "Mr Esser gets loud and slams the door.", "M. Esser s'emporte et claque la porte.", "Bay Esser bağırıyor ve kapıyı çarpıyor."),
      st("Eye", "Videoüberwachung und Grundrechte stehen zur Debatte.", "المراقبة بالفيديو والحقوق الأساسية قيد النقاش.", "Video surveillance and fundamental rights are debated.", "Vidéosurveillance et droits fondamentaux en débat.", "Video gözetim ve temel haklar tartışılıyor."),
      st("HeartHandshake", "Deeskalation und ethische Entscheidung.", "خفض التصعيد وقرار أخلاقي.", "De-escalation and ethical decision.", "Désescalade et décision éthique.", "Gerginliği azaltma ve etik karar."),
    ],
    problem: l10n("Wie deeskalieren Sie und wie wägen Sie Sicherheit und Freiheit ab?", "كيف تخفّفون التوتر وتوازنون بين الأمان والحرية؟", "How do you de-escalate and balance safety and freedom?", "Comment désamorcer et peser sécurité et liberté ?", "Gerginliği nasıl azaltır, güvenlik ve özgürlüğü nasıl dengelersiniz?"),
  },
  {
    id: "m22", place: "klinik",
    who: [p("Anna Kessler", "patient", 34), p("Sie (Pflegefachperson)", "pflege", 29), p("Michael", "team", 45)],
    steps: [
      st("Moon", "Frau Kessler sagt: „Alles ist so schwer.“", "السيدة كيسلر تقول: «كل شيء ثقيل جداً».", "Ms Kessler says: “Everything is so heavy.”", "Mme Kessler dit : « Tout est si lourd. »", "Bayan Kessler: «Her şey çok ağır» diyor."),
      st("Brain", "Depression und Suizidalität müssen eingeschätzt werden.", "يجب تقييم الاكتئاب وخطر الانتحار.", "Depression and suicidality must be assessed.", "Dépression et risque suicidaire doivent être évalués.", "Depresyon ve intihar riski değerlendirilmeli."),
      st("Handshake", "Interprofessionelle Zusammenarbeit und ICN-Kodex.", "التعاون بين المهن ومدونة المجلس الدولي للتمريض.", "Interprofessional collaboration and the ICN Code.", "Collaboration interprofessionnelle et code CII.", "Disiplinlerarası işbirliği ve ICN etik kuralları."),
    ],
    problem: l10n("Wie reagieren Sie auf Suizidgedanken und wer arbeitet zusammen?", "كيف تتصرفون تجاه أفكار الانتحار ومن يتعاون؟", "How do you respond to suicidal thoughts and who collaborates?", "Comment réagir aux idées suicidaires et qui collabore ?", "İntihar düşüncelerine nasıl yanıt verirsiniz, kim işbirliği yapar?"),
  },
  {
    id: "p01", place: "klinik",
    who: [p("Larissa Eisele", "patient", 83), p("Clara Quast", "patient", 51), p("Dana Graf", "pflege", 36)],
    steps: [
      st("Wind", "Frau Eisele: Pneumonie, Fieber, Sauerstoff und Diabetes.", "السيدة أيزله: التهاب رئوي وحمى وأكسجين وسكري.", "Mrs Kranz: pneumonia, fever, oxygen and diabetes.", "Mme Kranz : pneumonie, fièvre, oxygène et diabète.", "Bayan Kranz: pnömoni, ateş, oksijen ve diyabet."),
      st("Clock", "Zeitgebundene Termine: Infusion 8:00, EKG 9:30.", "مواعيد ثابتة: التسريب 8:00 وتخطيط القلب 9:30.", "Fixed times: infusion 8:00, ECG 9:30.", "Horaires fixes : perfusion 8 h, ECG 9 h 30.", "Sabit saatler: infüzyon 8:00, EKG 9:30."),
      st("ClipboardList", "Pflegeplanung und Ablaufplan für zwei Patientinnen.", "تخطيط التمريض وجدول العمل لمريضتين.", "Care plan and schedule for two patients.", "Plan de soins et planning pour deux patientes.", "İki hasta için bakım planı ve iş akışı."),
    ],
    problem: l10n("Wie ordnen Sie Prioritäten und planen den Frühdienst?", "كيف ترتبون الأولويات وتخططون للوردية الصباحية؟", "How do you set priorities and plan the early shift?", "Comment fixer les priorités et planifier le service du matin ?", "Öncelikleri nasıl belirler, sabah vardiyasını nasıl planlarsınız?"),
  },
  {
    id: "p02", place: "klinik",
    who: [p("Jannik Lemke", "patient", 24), p("Leander Ibach", "pflege", 37), p("Freundin", "angehoerig", 23)],
    steps: [
      st("Hospital", "Erster Tag nach der Blinddarm-OP.", "اليوم الأول بعد عملية الزائدة.", "First day after appendectomy.", "Premier jour après l'appendicectomie.", "Apandisit ameliyatının ilk günü."),
      st("Activity", "Schmerz, Wunde, Kreislauf und erstes Aufstehen.", "الألم والجرح والدورة والنهوض الأول.", "Pain, wound, circulation and first mobilisation.", "Douleur, plaie, circulation et premier lever.", "Ağrı, yara, dolaşım ve ilk mobilizasyon."),
      st("Flame", "Rauchen und Angst vor Prüfungsausfall.", "التدخين والخوف من تفويت الامتحان.", "Smoking and fear of missing exams.", "Tabagisme et peur de rater les examens.", "Sigara ve sınavı kaçırma korkusu."),
    ],
    problem: l10n("Wie mobilisieren Sie sicher und beugen Komplikationen vor?", "كيف تحرّكونه بأمان وتمنعون المضاعفات؟", "How do you mobilise safely and prevent complications?", "Comment mobiliser en sécurité et prévenir les complications ?", "Güvenle nasıl mobilize eder, komplikasyonları nasıl önlersiniz?"),
  },
  {
    id: "p03", place: "heim",
    who: [p("Rene Jost", "patient", 86), p("Edith", "angehoerig", 53), p("Gerlinde Klose", "pflege", 49)],
    steps: [
      st("Brain", "Parkinson mit Schluckstörung und Rollstuhl.", "باركنسون مع عسر بلع وكرسي متحرك.", "Parkinson's with dysphagia and wheelchair.", "Parkinson avec dysphagie et fauteuil roulant.", "Parkinson, yutma bozukluğu ve tekerlekli sandalye."),
      st("Utensils", "Essen anreichen, eingedickte Getränke, Gewichtsverlust.", "إطعام بالمساعدة ومشروبات مكثّفة وفقدان وزن.", "Assisted eating, thickened drinks, weight loss.", "Aide au repas, boissons épaissies, perte de poids.", "Yardımlı yemek, koyulaştırılmış içecek, kilo kaybı."),
      st("Droplet", "Dekubitus Kategorie 2: Verbandwechsel heute.", "قرحة ضغط الدرجة 2: تغيير الضماد اليوم.", "Category 2 pressure ulcer: dressing change today.", "Escarre catégorie 2 : changement de pansement.", "Kategori 2 bası yarası: bugün pansuman."),
    ],
    problem: l10n("Wie vereinen Sie Medikamentenzeit, Schlucksicherheit und Wundversorgung?", "كيف توفّقون بين وقت الدواء وأمان البلع وعناية الجرح؟", "How do you combine medication timing, swallowing safety and wound care?", "Comment concilier horaires des médicaments, déglutition et plaie ?", "İlaç saati, yutma güvenliği ve yara bakımını nasıl birleştirirsiniz?"),
  },
  {
    id: "p04", place: "ambulant",
    who: [p("Henrike Lutz", "patient", 79), p("Simon Nickel", "patient", 87), p("Frau Nickel", "angehoerig", 82)],
    steps: [
      st("Syringe", "Frau Lutz: Insulin vor dem Frühstück und Kompression.", "السيدة سابو: إنسولين قبل الفطور وضغط الساقين.", "Mrs Lutz: insulin before breakfast and compression.", "Mme Lutz : insuline avant le petit-déjeuner et compression.", "Bayan Lutz: kahvaltıdan önce insülin ve kompresyon."),
      st("Wind", "Herr Nickel: COPD, Sauerstoff, überlastete Ehefrau.", "السيد لايتنر: انسداد رئوي مزمن وأكسجين وزوجة مرهقة.", "Mr Nickel: COPD, oxygen, overwhelmed wife.", "M. Nickel : BPCO, oxygène, épouse dépassée.", "Bay Nickel: KOAH, oksijen, bunalmış eş."),
      st("Clock", "Tourenplan mit Fahrzeit und Pufferzeit.", "جدول الجولة مع وقت التنقل وهامش زمني.", "Route plan with travel and buffer time.", "Plan de tournée avec trajets et marge.", "Yolculuk ve tampon süreli tur planı."),
    ],
    problem: l10n("Wie planen Sie die Tour und entlasten die Angehörige?", "كيف تخططون للجولة وتخففون عن القريبة؟", "How do you plan the tour and relieve the relative?", "Comment planifier la tournée et soulager la proche ?", "Turu nasıl planlar, yakını nasıl rahatlatırsınız?"),
  },
  {
    id: "p05", place: "klinik",
    who: [p("Tilo Pauli", "patient", 54), p("Ulf Roder", "pflege", 35), p("Frau Pauli", "angehoerig", 52)],
    steps: [
      st("Zap", "Alkoholentzug: Zittern, Schwitzen, Unruhe, Halluzination.", "انسحاب الكحول: رعشة وتعرّق وقلق وهلوسة.", "Alcohol withdrawal: tremor, sweating, restlessness, hallucination.", "Sevrage alcoolique : tremblements, sueurs, agitation, hallucination.", "Alkol yoksunluğu: titreme, terleme, huzursuzluk, halüsinasyon."),
      st("Activity", "Vitalzeichen, Entzugsskala und Delirgefahr.", "العلامات الحيوية ومقياس الانسحاب وخطر الهذيان.", "Vital signs, withdrawal scale and delirium risk.", "Signes vitaux, échelle de sevrage et risque de délire.", "Yaşam bulguları, yoksunluk skalası ve deliryum riski."),
      st("MessageCircle", "Scham, Beziehungskrise und Motivation.", "خجل وأزمة علاقة ودافعية.", "Shame, relationship crisis and motivation.", "Honte, crise de couple et motivation.", "Utanç, ilişki krizi ve motivasyon."),
    ],
    problem: l10n("Wie sichern Sie den Entzug und führen ein motivierendes Gespräch?", "كيف تؤمّنون الانسحاب وتجرون حواراً محفّزاً؟", "How do you secure withdrawal and hold a motivating conversation?", "Comment sécuriser le sevrage et mener un entretien motivant ?", "Yoksunluğu nasıl güvenceye alır, motive edici görüşmeyi nasıl yürütürsünüz?"),
  },
];

export function sceneFor(id: string): CaseScene | undefined {
  return SCENES.find((s) => s.id === id);
}
