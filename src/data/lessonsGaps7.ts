/** Ergänzende Krankheitslehre 7: weitere Erkrankungen nach Organsystem (kurz, in eigenen Worten). */
import type { Lesson } from "./lessons";

export const GAPS7_LESSONS: Lesson[] = [
 {
  "id": "g7-obere-atemwege",
  "group": "krank",
  "area": "atmung",
  "title": "Entzündungen der oberen Atemwege: Sinusitis, Tonsillitis, Pharyngitis, Laryngitis, Bronchitis",
  "icon": "Wind",
  "ar": "التهابات تسببها غالباً الفيروسات وأحياناً البكتيريا في الجيوب الأنفية والبلعوم واللوزتين والحنجرة والشعب الهوائية.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Meist durch Viren, seltener durch Bakterien ausgelöste Entzündungen von Nasennebenhöhlen, Rachen, Mandeln, Kehlkopf und Bronchien."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Sinusitis: Druckgefühl im Gesicht, verstopfte Nase, Kopfschmerz",
     "Tonsillitis und Pharyngitis: Halsschmerzen, Schluckbeschwerden, Fieber, geschwollene Lymphknoten",
     "Laryngitis: Heiserkeit bis Stimmverlust, Reizhusten; bei Kindern Atemnot möglich (Krupp)",
     "Bronchitis: Husten mit oder ohne Auswurf, Brennen hinter dem Brustbein"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Erkältungsviren, Bakterien (zum Beispiel Streptokokken)",
     "Rauchen, trockene Luft, Schwächung der Abwehr"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Meist symptomatisch: Ruhe, viel trinken, Inhalation, Nasenspray, Schmerz- und Fiebermittel",
     "Antibiotika nur bei bakterieller Ursache, zum Beispiel Streptokokken-Angina",
     "Bei Kehlkopfschwellung mit Atemnot Notfall: Arzt rufen"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Atmung, Temperatur und Schluckfähigkeit beobachten",
     "Zum Trinken motivieren, Hals- und Mundpflege, Oberkörper hochlagern",
     "Hygiene: Händedesinfektion, Einmaltaschentücher, bei Bedarf Mund-Nasen-Schutz"
    ]
   }
  ]
 },
 {
  "id": "g7-kinderinfekte-atemweg",
  "group": "krank",
  "area": "infektion",
  "title": "Influenza, Keuchhusten, Diphtherie und Scharlach",
  "icon": "Thermometer",
  "ar": "أمراض معدية تصيب الجهاز التنفسي والحلق وتنتقل بالرذاذ، وبعضها يمكن الوقاية منه بالتطعيم.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Ansteckende Erkrankungen der Atemwege und des Rachens, die durch Tröpfchen übertragen werden und teils durch Impfung vermeidbar sind."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Influenza: plötzlicher Beginn, hohes Fieber, Gliederschmerzen, trockener Husten",
     "Pertussis (Keuchhusten): anfallsartiger Husten, ziehendes Einatmen, bei Säuglingen Atemaussetzer",
     "Diphtherie: süßlicher Mundgeruch, Beläge im Rachen, bellender Husten, Atemnot",
     "Scharlach: Fieber, Angina, Himbeerzunge, feinfleckiger Ausschlag"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Influenzaviren; Bordetella pertussis; Corynebacterium diphtheriae; Streptokokken Gruppe A"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Influenza: Ruhe, Flüssigkeit, bei Risikopatienten antivirale Mittel; jährliche Impfung",
     "Keuchhusten, Diphtherie, Scharlach: Antibiotika; Diphtherie zusätzlich Antitoxin",
     "Impfschutz gegen Keuchhusten und Diphtherie, Meldepflicht beachten"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Isolation mit Tröpfchenschutz, Händehygiene, Mund-Nasen-Schutz",
     "Atmung überwachen, bei Säuglingen mit Keuchhusten Monitor und ruhige Umgebung",
     "Flüssigkeit anbieten, Fieber senken, Ruhe fördern, Kontaktpersonen informieren"
    ]
   }
  ]
 },
 {
  "id": "g7-lunge-pleura",
  "group": "krank",
  "area": "atmung",
  "title": "Chronische Lungenerkrankungen und Pleura: Emphysem, Bronchiektasen, Cor pulmonale, Pleuraerguss, Pleuritis, Pneumothorax, Sarkoidose",
  "icon": "Wind",
  "ar": "أمراض في نسيج الرئة والشعب وغشاء الجنب تؤدي إلى ضيق النفس ونقص الأكسجين.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Erkrankungen des Lungengewebes, der Bronchien und des Rippenfells, die zu Luftnot und Sauerstoffmangel führen."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Lungenemphysem: überblähte Lunge, Atemnot besonders beim Ausatmen, Fassthorax",
     "Bronchiektasen: erweiterte Bronchien, viel eitriger Auswurf am Morgen",
     "Cor pulmonale: rechtes Herz überlastet durch Lungenerkrankung, Beinödeme, gestaute Halsvenen",
     "Pleuraerguss und Pleuritis: stechender atemabhängiger Schmerz, Luftnot, Husten",
     "Pneumothorax: plötzlicher stechender Schmerz, Luftnot, einseitig abgeschwächtes Atemgeräusch",
     "Sarkoidose: Lymphknoten und Lunge betroffen, Husten, Müdigkeit, oft zufällig entdeckt"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Rauchen, Dauerreizung, chronische Entzündung",
     "Herzschwäche, Entzündung, Tumor, Verletzung oder Spontanruptur von Lungenbläschen"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Rauchstopp, Inhalationen, Atemtherapie, Sauerstoff, bei Bedarf Antibiotika",
     "Pleuraerguss: Punktion, Behandlung der Ursache",
     "Pneumothorax: Thoraxdrainage; Sarkoidose: Kortison bei Beschwerden"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Atmung, Sättigung und Schmerz beobachten, Oberkörper hochlagern",
     "Atemübungen, Lippenbremse, Sekretlösung und Sauerstoff nach Anordnung",
     "Bei Drainage: Sog und Flüssigkeitsstand kontrollieren, Zug vermeiden",
     "Rauchentwöhnung unterstützen, Infektionen vorbeugen, impfen lassen"
    ]
   }
  ]
 },
 {
  "id": "g7-hormone-neben",
  "group": "krank",
  "area": "stoffwechsel",
  "title": "Hormondrüsen: Nebenschilddrüse, Nebenniere, Diabetes insipidus, Schilddrüsenkarzinom",
  "icon": "Droplets",
  "ar": "اضطرابات يزيد فيها إفراز الهرمونات أو ينقص فتتغير توازنات المعادن والماء والدورة الدموية.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Störungen, bei denen Hormone zu viel oder zu wenig gebildet werden und den Mineral-, Wasser- und Kreislaufhaushalt verändern."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Hyperparathyreoidismus: Kalzium zu hoch, Nierensteine, Knochenschmerzen, Müdigkeit",
     "Hypoparathyreoidismus: Kalzium zu niedrig, Kribbeln, Muskelkrämpfe (Tetanie)",
     "Cushing-Syndrom: Vollmondgesicht, Stammfettsucht, Bluthochdruck, Diabetes, Hautstreifen",
     "Nebenniereninsuffizienz (Addison): Schwäche, niedriger Blutdruck, Gewichtsverlust, braune Haut",
     "Hyperaldosteronismus: Bluthochdruck, Kaliummangel, Muskelschwäche",
     "Diabetes insipidus: sehr viel Urin und starker Durst durch Mangel an ADH",
     "Schilddrüsenkarzinom: tastbarer Knoten am Hals, Heiserkeit, Schluckbeschwerden"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Tumor oder Überfunktion der jeweiligen Drüse, Operation, Autoimmunprozess, Medikamente (Kortison)"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Ursache beseitigen: Operation bei Adenom oder Tumor",
     "Hormone ersetzen: Hydrokortison bei Addison, Vitamin D und Kalzium bei Hypoparathyreoidismus, Desmopressin bei Diabetes insipidus",
     "Schilddrüsenkarzinom: Operation, Radiojod, Hormonersatz"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Blutdruck, Gewicht, Flüssigkeitsbilanz und Laborwerte beobachten",
     "Addison: Notfallausweis, Medikamente nie weglassen, bei Stress Dosis nach Arzt anpassen",
     "Bei Tetanie Notfall erkennen und melden, Kalzium nach Anordnung",
     "Trinken nach Plan, Sturz- und Infektionsprophylaxe, Hautpflege"
    ]
   }
  ]
 },
 {
  "id": "g7-herz-weitere",
  "group": "krank",
  "area": "herz",
  "title": "Weitere Herz- und Gefäßerkrankungen: Kardiomyopathie, Mitralstenose, Raynaud, Panarteriitis nodosa, rheumatisches Fieber",
  "icon": "HeartPulse",
  "ar": "أمراض عضلة القلب وصمامات القلب والأوعية قد تؤدي إلى ضعف القلب واضطراب التروية أو التهابات.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Erkrankungen des Herzmuskels, der Herzklappen und der Gefäße, die zu Herzschwäche, Durchblutungsstörungen oder Entzündungen führen können."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Kardiomyopathie: Herzmuskel vergrößert oder verdickt, Atemnot, Ödeme, Rhythmusstörungen",
     "Mitralklappenstenose: Atemnot bei Belastung, Herzklopfen, oft Vorhofflimmern",
     "Raynaud-Syndrom: Finger werden bei Kälte oder Stress weiß, dann blau und rot, schmerzhaft",
     "Panarteriitis nodosa: Entzündung mittlerer Arterien, Fieber, Gewichtsverlust, Gelenk- und Muskelschmerzen",
     "Rheumatisches Fieber: nach Streptokokkenangina Fieber, wandernde Gelenkschmerzen, Herzentzündung"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Genetik, Virusinfekt, Alkohol, Bluthochdruck, Klappenerkrankung",
     "Autoimmunreaktion, Kälte, Rauchen, unbehandelte Streptokokkeninfektion"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Herzschwächemedikamente, Rhythmustherapie, Klappenersatz oder Ballonerweiterung bei Stenose",
     "Raynaud: Kälte meiden, Rauchstopp, gefäßerweiternde Mittel",
     "Panarteriitis nodosa: Kortison und Immunsuppression; rheumatisches Fieber: Antibiotika und Entzündungshemmer"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Vitalzeichen, Gewicht und Ödeme beobachten, Trinkmenge nach Plan",
     "Bei Raynaud: Hände warm halten, Handschuhe, Nikotin meiden",
     "Streptokokkeninfektionen vollständig behandeln lassen, Endokarditisprophylaxe beachten"
    ]
   }
  ]
 },
 {
  "id": "g7-gefaess-gehirn",
  "group": "krank",
  "area": "nerven",
  "title": "Gefäß- und Hirnerkrankungen: Karotisstenose, Subclavian-Steal, Netzhautarterienverschluss, Hirnblutung, Hämatom, Polyneuropathie",
  "icon": "Brain",
  "ar": "اضطرابات في تروية الرأس ونزوف في منطقته وإصابات الأعصاب الطرفية تسبب فقداناً مفاجئاً أو تدريجياً للوظائف.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Durchblutungsstörungen und Blutungen im Kopfbereich sowie Schädigungen peripherer Nerven, die plötzlich oder schleichend Ausfälle verursachen."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Karotisstenose: oft ohne Beschwerden, dann TIA mit flüchtigen Ausfällen oder Schlaganfall",
     "Subclavian-Steal-Syndrom: Schwindel und Sehstörungen bei Armarbeit, Blutdruckunterschied zwischen den Armen",
     "Zentralarterien- oder Zentralvenenverschluss: plötzlicher schmerzloser Sehverlust auf einem Auge",
     "Intrazerebrale Blutung: plötzlicher Kopfschmerz, Übelkeit, Bewusstseinstrübung, Lähmung",
     "Epidurales Hämatom: nach Kopfverletzung kurze Wachphase, dann Eintrübung und Pupillenerweiterung",
     "Polyneuropathie: Kribbeln, Taubheit, Brennen an Füßen und Händen, Gangunsicherheit"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Arteriosklerose, Bluthochdruck, Rauchen, Gerinnsel",
     "Kopfverletzung, Gefäßriss, Blutverdünner",
     "Diabetes, Alkohol, Vitaminmangel, Chemotherapie"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Verschlüsse: Gefäßerweiterung oder Operation, Thrombozytenhemmer, Risikofaktoren senken",
     "Hirnblutung und Hämatom: Neurochirurgie, Blutdruck senken, Gerinnung regulieren",
     "Polyneuropathie: Ursache behandeln, Schmerzmittel, Physiotherapie"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Bewusstsein, Pupillen und Neurostatus engmaschig kontrollieren",
     "Bei plötzlichem Sehverlust oder Ausfällen sofort ärztlich melden (Notfall)",
     "Bei Polyneuropathie: Füße täglich prüfen, Verletzungen und Stürze vermeiden",
     "Blutdruck, Medikamente und Blutverdünner nach Plan, Risikofaktoren besprechen"
    ]
   }
  ]
 },
 {
  "id": "g7-speiseroehre-magen",
  "group": "krank",
  "area": "verdauung",
  "title": "Speiseröhre und Magen: Hiatushernie, Divertikel, Karzinome, Gastroenteritis, Glossitis",
  "icon": "Utensils",
  "ar": "أمراض الفم والمريء والمعدة تسبب صعوبة بلع وألماً وقيئاً أو إسهالاً.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Erkrankungen von Mund, Speiseröhre und Magen, die zu Schluckbeschwerden, Schmerzen, Erbrechen oder Durchfall führen."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Hiatushernie: Teil des Magens rutscht in den Brustraum, Sodbrennen, Aufstoßen",
     "Ösophagusdivertikel: Ausstülpung der Speiseröhre, Schluckstörung, Mundgeruch, Regurgitation",
     "Ösophaguskarzinom: zunehmende Schluckbeschwerden, Gewichtsverlust, Schmerzen hinter dem Brustbein",
     "Magenkarzinom: Oberbauchbeschwerden, Appetitlosigkeit, Gewichtsverlust, Blutarmut, Teerstuhl",
     "Infektiöse Gastroenteritis: Durchfall, Erbrechen, Bauchkrämpfe, Fieber, Flüssigkeitsverlust",
     "Glossitis: gerötete, brennende, glatte oder belegte Zunge",
     "Gastrinom: Tumor, der viel Magensäure auslöst, wiederkehrende Geschwüre, Durchfall"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Rauchen, Alkohol, Übergewicht, Helicobacter pylori, Mangel an Vitaminen oder Eisen",
     "Viren (Noro, Rota), Bakterien (Salmonellen), verdorbene Lebensmittel"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Hernie und Divertikel: Medikamente gegen Säure, bei Beschwerden Operation",
     "Karzinome: Operation, Chemo- und Strahlentherapie, Ernährungstherapie",
     "Gastroenteritis: Flüssigkeit und Elektrolyte ersetzen, bei Bedarf Infusion"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Flüssigkeitsbilanz, Gewicht, Stuhl und Erbrechen beobachten",
     "Kleine Mahlzeiten, Oberkörper hochlagern, Mundpflege, Schluckfähigkeit prüfen",
     "Bei Gastroenteritis: Kontaktisolation, Händedesinfektion mit Handschuhen, Flächendesinfektion"
    ]
   }
  ]
 },
 {
  "id": "g7-darm-leber-pankreas",
  "group": "krank",
  "area": "verdauung",
  "title": "Darm, Leber und Bauchspeicheldrüse: Hämorrhoiden, Zöliakie, Meckel-Divertikel, Mesenterialinfarkt, Echinokokkose, Karzinome",
  "icon": "Utensils",
  "ar": "أمراض القولون والأمعاء الدقيقة والكبد والبنكرياس مع ألم بطن ونزف واضطراب هضم أو نقص وزن.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Erkrankungen von Dickdarm, Dünndarm, Leber und Bauchspeicheldrüse mit Bauchschmerzen, Blutungen, Verdauungsstörungen oder Gewichtsverlust."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Hämorrhoiden: Blutauflagerung auf dem Stuhl, Jucken, Brennen, Knoten am After",
     "Zöliakie: Durchfall, Blähungen, Gewichtsverlust, Mangelerscheinungen durch Gluten",
     "Meckel-Divertikel: meist unbemerkt, selten Blutung oder Entzündung wie Blinddarm",
     "Mesenterialinfarkt: plötzlicher heftiger Bauchschmerz bei erst mildem Befund, Notfall",
     "Echinokokkose: Zysten in der Leber durch Bandwurm, oft lange ohne Beschwerden",
     "Leberzellkarzinom: Gewichtsverlust, Druckgefühl im Oberbauch, Gelbsucht, meist bei Zirrhose",
     "Pankreaskarzinom: Rückenschmerz, Gelbsucht, Gewichtsverlust, spät entdeckt",
     "Mundhöhlenkarzinom: nicht heilende Wunde, Schmerz, Schluckbeschwerden"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Verstopfung und Pressen, Gluten, Durchblutungsstörung, Bandwurmeier aus dem Hund oder Fuchs",
     "Rauchen, Alkohol, Leberzirrhose, Hepatitis B und C, Übergewicht"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Hämorrhoiden: Stuhlregulation, Salben, Verödung oder Operation",
     "Zöliakie: lebenslang glutenfreie Ernährung",
     "Mesenterialinfarkt: Notoperation; Echinokokkose: Medikamente und Operation",
     "Karzinome: Operation, Chemotherapie, Schmerz- und Ernährungstherapie"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Stuhlverhalten, Schmerzen, Haut- und Skleren-Farbe, Gewicht beobachten",
     "Bei starkem plötzlichem Bauchschmerz sofort ärztlich melden, nüchtern lassen",
     "Intimpflege und Hautschutz, Ballaststoffe und Trinken fördern",
     "Ernährungsberatung, bei Tumoren Palliativ- und Schmerzkonzept einbeziehen"
    ]
   }
  ]
 },
 {
  "id": "g7-niere-harnwege-weitere",
  "group": "krank",
  "area": "niere",
  "title": "Niere und Harnwege: Pyelonephritis, Nierenzellkarzinom, Nierenzyste, Urethritis, Harnröhrenenge",
  "icon": "Droplet",
  "ar": "التهابات وأورام وتضيقات في الكلية والإحليل تسبب ألماً وحمى أو اضطراب جريان البول.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Entzündungen, Tumoren und Engstellen von Niere und Harnröhre, die Schmerzen, Fieber oder Harnabflussstörungen verursachen."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Pyelonephritis: Fieber, Schüttelfrost, Flankenschmerz, Brennen beim Wasserlassen",
     "Nierenzellkarzinom: oft Zufallsbefund, Blut im Urin, Flankenschmerz, tastbarer Tumor",
     "Nierenzyste: meist harmlos und beschwerdefrei, selten Druckschmerz",
     "Urethritis: Brennen und Ausfluss aus der Harnröhre, oft sexuell übertragen",
     "Urethrastriktur: abgeschwächter Harnstrahl, Restharn, Harnverhalt"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Aufsteigende Keime, Harnstau, Katheter, Zuckerkrankheit",
     "Rauchen, Übergewicht, Narben nach Entzündung oder Katheter"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Pyelonephritis: Antibiotika, viel Flüssigkeit, bei Abflussstörung Entlastung",
     "Nierenzellkarzinom: Operation (Teil- oder Nierenentfernung), zielgerichtete Medikamente",
     "Harnröhrenenge: Aufdehnung oder Schlitzung, selten Plastik"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Ein- und Ausfuhr, Urinfarbe, Temperatur und Flankenschmerz beobachten",
     "Viel Trinken fördern, Intimpflege, Katheter nur bei Indikation",
     "Blut im Urin oder Fieber mit Schüttelfrost ärztlich melden"
    ]
   }
  ]
 },
 {
  "id": "g7-maenner-weitere",
  "group": "krank",
  "area": "geschlecht",
  "title": "Männliche Geschlechtsorgane: Nebenhodenentzündung, Hoden- und Peniskarzinom",
  "icon": "Users",
  "ar": "التهابات وأورام في البربخ والخصية والقضيب تسبب ألماً وتورماً أو عقداً.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Entzündungen und Tumoren von Nebenhoden, Hoden und Penis, die Schmerzen, Schwellung oder Knoten verursachen."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Epididymitis: Schmerz und Schwellung im Hodensack, Fieber, Brennen beim Wasserlassen",
     "Hodenkarzinom: schmerzloser harter Knoten im Hoden, oft bei jungen Männern",
     "Peniskarzinom: Wucherung oder Wunde an Eichel oder Vorhaut, die nicht abheilt"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Keime aus Harnwegen oder Geschlechtsverkehr",
     "Hodenhochstand in der Kindheit, Phimose, mangelnde Hygiene, HPV-Infektion"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Epididymitis: Antibiotika, Hochlagern und Kühlen des Hodensacks, Schmerzmittel",
     "Hodenkarzinom: Entfernung des Hodens, Chemo- oder Strahlentherapie, gute Heilungschancen",
     "Peniskarzinom: Operation, ggf. Bestrahlung oder Chemotherapie"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Schmerz, Schwellung und Fieber beobachten, Hodensack stützen",
     "Schamgefühl achten, Gespräche diskret und ohne Wertung führen",
     "Selbstuntersuchung der Hoden anleiten, Hygiene und Impfung beraten"
    ]
   }
  ]
 },
 {
  "id": "g7-frauen-entzuendung",
  "group": "krank",
  "area": "geschlecht",
  "title": "Entzündungen im weiblichen Genitalbereich und Brust: Adnexitis, Bartholinitis, Kolpitis, Zervizitis, Vulvitis, Mastitis",
  "icon": "User",
  "ar": "التهابات في البوقين والمبيضين والمهبل وعنق الرحم والفرج وغدة الثدي غالباً بسبب بكتيريا أو فطريات.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Entzündungen von Eileitern, Eierstöcken, Scheide, Muttermund, äußeren Genitalien und Brustdrüse, meist durch Bakterien oder Pilze."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Adnexitis: Unterbauchschmerz, Fieber, Ausfluss, Schmerz beim Geschlechtsverkehr",
     "Bartholinitis: schmerzhafte Schwellung am Scheideneingang, ggf. Abszess",
     "Kolpitis: Ausfluss, Juckreiz, Brennen in der Scheide",
     "Zervizitis: Ausfluss, Kontaktblutung, oft ohne Beschwerden",
     "Vulvitis: Rötung, Juckreiz, Brennen der äußeren Genitalien",
     "Mastitis: gerötete, heiße, schmerzhafte Brust, Fieber, meist beim Stillen"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Bakterien, Pilze (Candida), Chlamydien, Gonokokken",
     "Milchstau und Keime über wunde Brustwarzen beim Stillen"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Antibiotika oder Antimykotika nach Erreger, Schmerzmittel",
     "Abszess: Eröffnung und Spülung",
     "Mastitis: weiter stillen oder abpumpen, Kühlen, Antibiotika bei Bedarf"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Temperatur, Schmerz und Ausfluss beobachten, Intimhygiene anleiten",
     "Taktvoll und diskret untersuchen und beraten, Privatsphäre wahren",
     "Partnerbehandlung bei sexuell übertragbaren Erregern ansprechen"
    ]
   }
  ]
 },
 {
  "id": "g7-frauen-tumoren",
  "group": "krank",
  "area": "geschlecht",
  "title": "Gynäkologische Erkrankungen: Senkung, Myom, Eierstock-, Scheiden- und Vulvakarzinom, Schwangerschaftshochdruck",
  "icon": "User",
  "ar": "تغيّر وضع الأعضاء وأورام حميدة وخبيثة في الأعضاء الأنثوية وارتفاع ضغط الدم أثناء الحمل.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Lageveränderungen, gutartige und bösartige Tumoren der weiblichen Organe sowie Bluthochdruck in der Schwangerschaft."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Descensus uteri: Druckgefühl nach unten, Harninkontinenz, Fremdkörpergefühl",
     "Myoma uteri: gutartige Muskelknoten, starke und lange Blutungen, Druckbeschwerden",
     "Ovarialkarzinom und ovarielles Zystadenom: lange unspezifisch, Blähbauch, Unterbauchschmerz, später Aszites",
     "Vaginal- und Vulvakarzinom: Juckreiz, Wunde oder Knoten, Blutung, bei älteren Frauen häufiger",
     "Schwangerschaftsinduzierte Hypertonie: Blutdruck nach der 20. Woche erhöht, Ödeme, Eiweiß im Urin"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Geburten, Bindegewebsschwäche, Übergewicht, Hormone",
     "Alter, Genetik, HPV-Infektion, Rauchen, Plazentaprobleme"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Senkung: Beckenbodentraining, Pessar oder Operation",
     "Myom: Beobachtung, Hormone oder Operation",
     "Krebs: Operation, Chemotherapie, ggf. Bestrahlung",
     "Schwangerschaftshochdruck: Kontrollen, Medikamente, bei Eklampsiegefahr Klinik und Entbindung"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Blutdruck, Ödeme, Kopfschmerz und Sehstörungen bei Schwangeren ernst nehmen und melden",
     "Beckenbodentraining anleiten, Obstipation und schweres Heben vermeiden",
     "Sensibel mit Scham und Angst umgehen, Vorsorgetermine empfehlen"
    ]
   }
  ]
 },
 {
  "id": "g7-blut-lymphom",
  "group": "krank",
  "area": "blut",
  "title": "Blut und Lymphe: Thrombopenie, Verbrauchskoagulopathie, Hodgkin- und Non-Hodgkin-Lymphom",
  "icon": "Droplet",
  "ar": "أمراض الصفيحات والتخثر والجهاز اللمفاوي تسبب نزفاً أو قابلية للعدوى أو تضخماً في العقد اللمفية.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Erkrankungen der Blutplättchen, der Gerinnung und des Lymphsystems, die zu Blutungen, Infektanfälligkeit oder Lymphknotenschwellung führen."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Thrombopenie: zu wenige Blutplättchen, Nasen- und Zahnfleischbluten, punktförmige Hautblutungen",
     "Verbrauchskoagulopathie (DIC): gleichzeitig Gerinnsel und Blutungen, schwere Komplikation bei Sepsis oder Schock",
     "Hodgkin-Lymphom: schmerzlose Lymphknotenschwellung, Fieber, Nachtschweiß, Gewichtsverlust",
     "Non-Hodgkin-Lymphom: Lymphknotenschwellung, Müdigkeit, Infekte, Allgemeinsymptome"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Medikamente, Autoimmunprozess, Knochenmarkerkrankung, Sepsis, Schock, Tumor"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Thrombopenie: Ursache behandeln, Thrombozytengabe bei Blutungsgefahr",
     "DIC: Grunderkrankung behandeln, Gerinnungsfaktoren ersetzen, Intensivmedizin",
     "Lymphome: Chemotherapie, Bestrahlung, Antikörper, teils Stammzelltransplantation"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Blutungszeichen beobachten, keine intramuskulären Injektionen, sanfte Mundpflege",
     "Verletzungen vermeiden, weiche Zahnbürste, elektrische Rasur",
     "Infektionsschutz bei Chemotherapie, Hygiene, Fieber sofort melden",
     "Seelische Belastung ansprechen, Angehörige und Psychoonkologie einbeziehen"
    ]
   }
  ]
 },
 {
  "id": "g7-haut-weitere",
  "group": "krank",
  "area": "haut",
  "title": "Haut: Phlegmone, Impetigo, Kopfläuse, Urtikaria",
  "icon": "Bandage",
  "ar": "أمراض جلدية بكتيرية وطفيلية وتحسسية تسبب احمراراً وحكة أو تورماً.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Bakterielle, parasitäre und allergische Erkrankungen der Haut, die Rötung, Juckreiz oder Schwellung verursachen."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Phlegmone: sich ausbreitende, überwärmte, gerötete, schmerzhafte Schwellung mit Fieber",
     "Impetigo contagiosa: gelbliche Krusten und Bläschen, vor allem bei Kindern im Gesicht",
     "Kopfläuse: Juckreiz am Kopf, Nissen an den Haaren, Kratzspuren",
     "Urtikaria: flüchtige juckende Quaddeln, Schwellung, durch Allergie oder Reize"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Bakterien (Staphylokokken, Streptokokken) über Hautverletzungen",
     "Läuse durch engen Kontakt; Allergene, Medikamente, Kälte, Stress"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Phlegmone und Impetigo: Antibiotika, Ruhigstellung, Wundversorgung",
     "Läuse: Läusemittel, Nissenkamm, Wiederholung nach etwa 8 bis 10 Tagen",
     "Urtikaria: Auslöser meiden, Antihistaminika, bei Schwellung im Gesicht Notfall"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Haut, Temperatur und Ausbreitung der Rötung markieren und beobachten",
     "Kontaktisolation und Händehygiene bei Impetigo und Läusen, Wäsche heiß waschen",
     "Bei Atemnot oder Gesichtsschwellung sofort Arzt rufen",
     "Betroffene ohne Stigmatisierung unterstützen, besonders Kinder"
    ]
   }
  ]
 },
 {
  "id": "g7-virus-kinder-weitere",
  "group": "krank",
  "area": "infektion",
  "title": "Virusinfekte und Kinderkrankheiten: Pfeiffer-Drüsenfieber, Zytomegalie, Ringelröteln, Listeriose, Kinderlähmung, Neuroblastom",
  "icon": "Bug",
  "ar": "عدوى تسببها غالباً فيروسات أو بكتيريا وهي مهمة خاصة عند الأطفال أو أثناء الحمل، إضافة إلى ورم من أورام الطفولة.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Meist durch Viren oder Bakterien ausgelöste Infektionen, die bei Kindern oder in der Schwangerschaft besonders wichtig sind, sowie ein Tumor des Kindesalters."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Pfeiffer-Drüsenfieber: Fieber, Halsschmerzen, geschwollene Lymphknoten, Müdigkeit",
     "Zytomegalie: oft unbemerkt; bei Schwangeren und Abwehrschwäche Schäden beim Kind oder Organbefall",
     "Ringelröteln: schmetterlingsförmiger Ausschlag im Gesicht, später am Körper, leichte Krankheitszeichen",
     "Listeriose: Fieber, Durchfall; bei Schwangeren Gefahr für das Kind, bei Älteren Meningitis",
     "Poliomyelitis: Fieber, Muskelschmerz, im schweren Verlauf schlaffe Lähmungen",
     "Neuroblastom: Tumor bei Kleinkindern, Bauchschwellung, Blässe, Knochenschmerzen"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Tröpfchen- und Schmierinfektion, Speichel, verunreinigte Lebensmittel (Käse, Rohmilch, Fleisch)",
     "Neuroblastom: Entartung von Nervenzellen des sympathischen Systems"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Meist symptomatisch: Ruhe, Flüssigkeit, Fieber senken",
     "Listeriose: Antibiotika; Zytomegalie bei Risiko antivirale Mittel",
     "Kinderlähmung: Impfung als Schutz, Physiotherapie nach Lähmung",
     "Neuroblastom: Operation, Chemotherapie, Bestrahlung, spezielle Immuntherapie"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Schwangere über Lebensmittelhygiene beraten und Kontakt mit Erkrankten meiden",
     "Hygiene und Isolation nach Erreger, Impfstatus prüfen",
     "Kinder ruhig begleiten, Eltern einbeziehen und entlasten"
    ]
   }
  ]
 },
 {
  "id": "g7-knochen-weitere",
  "group": "krank",
  "area": "bewegung",
  "title": "Knochen und Bewegungssystem: Morbus Paget, Osteomalazie, Osteosarkom, Fibromyalgie, Sprunggelenks-, Schienbein- und Oberschenkelhalsbruch",
  "icon": "Bone",
  "ar": "أمراض وكسور في العظام مع ألم وتشوه أو تقييد حركة، إضافة إلى متلازمة الألم الليفي العضلي.",
  "blocks": [
   {
    "h": "Was ist das?",
    "li": [
     "Erkrankungen und Brüche von Knochen mit Schmerzen, Verformung oder Bewegungseinschränkung sowie das Schmerzsyndrom Fibromyalgie."
    ]
   },
   {
    "h": "Typische Zeichen",
    "li": [
     "Morbus Paget: verdickte, verformte Knochen, Knochenschmerz, Brüche",
     "Osteomalazie: weiche Knochen durch Vitamin-D-Mangel, Knochenschmerz, Muskelschwäche",
     "Osteosarkom: Knochentumor bei Jugendlichen, Schmerz und Schwellung am Knie oder Oberarm",
     "Fibromyalgie: lang anhaltende Schmerzen in vielen Körperregionen, Erschöpfung, Schlafstörung",
     "Oberschenkelhalsfraktur: Schmerz in der Leiste, Bein verkürzt und nach außen gedreht, nach Sturz",
     "Sprunggelenks- und Schienbeinfraktur: Schwellung, Schmerz, Fehlstellung, keine Belastung möglich"
    ]
   },
   {
    "h": "Ursachen",
    "li": [
     "Vitamin-D-Mangel, Alter, Stoffwechselstörung, genetische Faktoren, Sturz oder Unfall",
     "Fibromyalgie: Ursache unklar, Stress und Schlafmangel verstärken"
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Brüche: Operation (zum Beispiel Prothese oder Osteosynthese) oder Gips, möglichst früh mobilisieren",
     "Osteomalazie: Vitamin D und Kalzium; Paget: Bisphosphonate",
     "Osteosarkom: Chemotherapie und Operation",
     "Fibromyalgie: Bewegung, Wärme, Schmerz- und Schlafbehandlung, Psychotherapie"
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Nach Hüftoperation: Thrombose- und Dekubitusprophylaxe, Lagerung nach Vorgabe, früh mobilisieren",
     "Durchblutung, Motorik und Sensibilität des betroffenen Gliedes prüfen",
     "Schmerz regelmäßig erfassen und nach Plan behandeln, Sturzprophylaxe",
     "Bei Fibromyalgie ernst nehmen, nicht abwerten, Aktivität langsam aufbauen"
    ]
   }
  ]
 }
];
