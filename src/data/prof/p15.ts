import type { Profile } from "../diseaseProfiles";
/** Krankheitsprofile Teil 15: weitere Erkrankungen. */
export const P15: Record<string, Profile> = {
  "g7-obere-atemwege": {
    "def": "Meist durch Viren, seltener durch Bakterien ausgelöste Entzündungen von Nasennebenhöhlen, Rachen, Mandeln, Kehlkopf und Bronchien.",
    "sym": [
      "Sinusitis: Druckgefühl im Gesicht, verstopfte Nase, Kopfschmerz",
      "Tonsillitis und Pharyngitis: Halsschmerzen, Schluckbeschwerden, Fieber, geschwollene Lymphknoten",
      "Laryngitis: Heiserkeit bis Stimmverlust, Reizhusten; bei Kindern Atemnot möglich (Krupp)",
      "Bronchitis: Husten mit oder ohne Auswurf, Brennen hinter dem Brustbein"
    ],
    "urs": [
      "Erkältungsviren, Bakterien (zum Beispiel Streptokokken)",
      "Rauchen, trockene Luft, Schwächung der Abwehr"
    ],
    "risk": [],
    "ther": [
      "Meist symptomatisch: Ruhe, viel trinken, Inhalation, Nasenspray, Schmerz- und Fiebermittel",
      "Antibiotika nur bei bakterieller Ursache, zum Beispiel Streptokokken-Angina",
      "Bei Kehlkopfschwellung mit Atemnot Notfall: Arzt rufen"
    ],
    "pfl": [
      "Atmung, Temperatur und Schluckfähigkeit beobachten",
      "Zum Trinken motivieren, Hals- und Mundpflege, Oberkörper hochlagern",
      "Hygiene: Händedesinfektion, Einmaltaschentücher, bei Bedarf Mund-Nasen-Schutz"
    ]
  },
  "g7-kinderinfekte-atemweg": {
    "def": "Ansteckende Erkrankungen der Atemwege und des Rachens, die durch Tröpfchen übertragen werden und teils durch Impfung vermeidbar sind.",
    "sym": [
      "Influenza: plötzlicher Beginn, hohes Fieber, Gliederschmerzen, trockener Husten",
      "Pertussis (Keuchhusten): anfallsartiger Husten, ziehendes Einatmen, bei Säuglingen Atemaussetzer",
      "Diphtherie: süßlicher Mundgeruch, Beläge im Rachen, bellender Husten, Atemnot",
      "Scharlach: Fieber, Angina, Himbeerzunge, feinfleckiger Ausschlag"
    ],
    "urs": [
      "Influenzaviren; Bordetella pertussis; Corynebacterium diphtheriae; Streptokokken Gruppe A"
    ],
    "risk": [],
    "ther": [
      "Influenza: Ruhe, Flüssigkeit, bei Risikopatienten antivirale Mittel; jährliche Impfung",
      "Keuchhusten, Diphtherie, Scharlach: Antibiotika; Diphtherie zusätzlich Antitoxin",
      "Impfschutz gegen Keuchhusten und Diphtherie, Meldepflicht beachten"
    ],
    "pfl": [
      "Isolation mit Tröpfchenschutz, Händehygiene, Mund-Nasen-Schutz",
      "Atmung überwachen, bei Säuglingen mit Keuchhusten Monitor und ruhige Umgebung",
      "Flüssigkeit anbieten, Fieber senken, Ruhe fördern, Kontaktpersonen informieren"
    ]
  },
  "g7-lunge-pleura": {
    "def": "Erkrankungen des Lungengewebes, der Bronchien und des Rippenfells, die zu Luftnot und Sauerstoffmangel führen.",
    "sym": [
      "Lungenemphysem: überblähte Lunge, Atemnot besonders beim Ausatmen, Fassthorax",
      "Bronchiektasen: erweiterte Bronchien, viel eitriger Auswurf am Morgen",
      "Cor pulmonale: rechtes Herz überlastet durch Lungenerkrankung, Beinödeme, gestaute Halsvenen",
      "Pleuraerguss und Pleuritis: stechender atemabhängiger Schmerz, Luftnot, Husten",
      "Pneumothorax: plötzlicher stechender Schmerz, Luftnot, einseitig abgeschwächtes Atemgeräusch",
      "Sarkoidose: Lymphknoten und Lunge betroffen, Husten, Müdigkeit, oft zufällig entdeckt"
    ],
    "urs": [
      "Rauchen, Dauerreizung, chronische Entzündung",
      "Herzschwäche, Entzündung, Tumor, Verletzung oder Spontanruptur von Lungenbläschen"
    ],
    "risk": [],
    "ther": [
      "Rauchstopp, Inhalationen, Atemtherapie, Sauerstoff, bei Bedarf Antibiotika",
      "Pleuraerguss: Punktion, Behandlung der Ursache",
      "Pneumothorax: Thoraxdrainage; Sarkoidose: Kortison bei Beschwerden"
    ],
    "pfl": [
      "Atmung, Sättigung und Schmerz beobachten, Oberkörper hochlagern",
      "Atemübungen, Lippenbremse, Sekretlösung und Sauerstoff nach Anordnung",
      "Bei Drainage: Sog und Flüssigkeitsstand kontrollieren, Zug vermeiden",
      "Rauchentwöhnung unterstützen, Infektionen vorbeugen, impfen lassen"
    ]
  },
  "g7-hormone-neben": {
    "def": "Störungen, bei denen Hormone zu viel oder zu wenig gebildet werden und den Mineral-, Wasser- und Kreislaufhaushalt verändern.",
    "sym": [
      "Hyperparathyreoidismus: Kalzium zu hoch, Nierensteine, Knochenschmerzen, Müdigkeit",
      "Hypoparathyreoidismus: Kalzium zu niedrig, Kribbeln, Muskelkrämpfe (Tetanie)",
      "Cushing-Syndrom: Vollmondgesicht, Stammfettsucht, Bluthochdruck, Diabetes, Hautstreifen",
      "Nebenniereninsuffizienz (Addison): Schwäche, niedriger Blutdruck, Gewichtsverlust, braune Haut",
      "Hyperaldosteronismus: Bluthochdruck, Kaliummangel, Muskelschwäche",
      "Diabetes insipidus: sehr viel Urin und starker Durst durch Mangel an ADH",
      "Schilddrüsenkarzinom: tastbarer Knoten am Hals, Heiserkeit, Schluckbeschwerden"
    ],
    "urs": [
      "Tumor oder Überfunktion der jeweiligen Drüse, Operation, Autoimmunprozess, Medikamente (Kortison)"
    ],
    "risk": [],
    "ther": [
      "Ursache beseitigen: Operation bei Adenom oder Tumor",
      "Hormone ersetzen: Hydrokortison bei Addison, Vitamin D und Kalzium bei Hypoparathyreoidismus, Desmopressin bei Diabetes insipidus",
      "Schilddrüsenkarzinom: Operation, Radiojod, Hormonersatz"
    ],
    "pfl": [
      "Blutdruck, Gewicht, Flüssigkeitsbilanz und Laborwerte beobachten",
      "Addison: Notfallausweis, Medikamente nie weglassen, bei Stress Dosis nach Arzt anpassen",
      "Bei Tetanie Notfall erkennen und melden, Kalzium nach Anordnung",
      "Trinken nach Plan, Sturz- und Infektionsprophylaxe, Hautpflege"
    ]
  },
  "g7-herz-weitere": {
    "def": "Erkrankungen des Herzmuskels, der Herzklappen und der Gefäße, die zu Herzschwäche, Durchblutungsstörungen oder Entzündungen führen können.",
    "sym": [
      "Kardiomyopathie: Herzmuskel vergrößert oder verdickt, Atemnot, Ödeme, Rhythmusstörungen",
      "Mitralklappenstenose: Atemnot bei Belastung, Herzklopfen, oft Vorhofflimmern",
      "Raynaud-Syndrom: Finger werden bei Kälte oder Stress weiß, dann blau und rot, schmerzhaft",
      "Panarteriitis nodosa: Entzündung mittlerer Arterien, Fieber, Gewichtsverlust, Gelenk- und Muskelschmerzen",
      "Rheumatisches Fieber: nach Streptokokkenangina Fieber, wandernde Gelenkschmerzen, Herzentzündung"
    ],
    "urs": [
      "Genetik, Virusinfekt, Alkohol, Bluthochdruck, Klappenerkrankung",
      "Autoimmunreaktion, Kälte, Rauchen, unbehandelte Streptokokkeninfektion"
    ],
    "risk": [],
    "ther": [
      "Herzschwächemedikamente, Rhythmustherapie, Klappenersatz oder Ballonerweiterung bei Stenose",
      "Raynaud: Kälte meiden, Rauchstopp, gefäßerweiternde Mittel",
      "Panarteriitis nodosa: Kortison und Immunsuppression; rheumatisches Fieber: Antibiotika und Entzündungshemmer"
    ],
    "pfl": [
      "Vitalzeichen, Gewicht und Ödeme beobachten, Trinkmenge nach Plan",
      "Bei Raynaud: Hände warm halten, Handschuhe, Nikotin meiden",
      "Streptokokkeninfektionen vollständig behandeln lassen, Endokarditisprophylaxe beachten"
    ]
  },
  "g7-gefaess-gehirn": {
    "def": "Durchblutungsstörungen und Blutungen im Kopfbereich sowie Schädigungen peripherer Nerven, die plötzlich oder schleichend Ausfälle verursachen.",
    "sym": [
      "Karotisstenose: oft ohne Beschwerden, dann TIA mit flüchtigen Ausfällen oder Schlaganfall",
      "Subclavian-Steal-Syndrom: Schwindel und Sehstörungen bei Armarbeit, Blutdruckunterschied zwischen den Armen",
      "Zentralarterien- oder Zentralvenenverschluss: plötzlicher schmerzloser Sehverlust auf einem Auge",
      "Intrazerebrale Blutung: plötzlicher Kopfschmerz, Übelkeit, Bewusstseinstrübung, Lähmung",
      "Epidurales Hämatom: nach Kopfverletzung kurze Wachphase, dann Eintrübung und Pupillenerweiterung",
      "Polyneuropathie: Kribbeln, Taubheit, Brennen an Füßen und Händen, Gangunsicherheit"
    ],
    "urs": [
      "Arteriosklerose, Bluthochdruck, Rauchen, Gerinnsel",
      "Kopfverletzung, Gefäßriss, Blutverdünner",
      "Diabetes, Alkohol, Vitaminmangel, Chemotherapie"
    ],
    "risk": [],
    "ther": [
      "Verschlüsse: Gefäßerweiterung oder Operation, Thrombozytenhemmer, Risikofaktoren senken",
      "Hirnblutung und Hämatom: Neurochirurgie, Blutdruck senken, Gerinnung regulieren",
      "Polyneuropathie: Ursache behandeln, Schmerzmittel, Physiotherapie"
    ],
    "pfl": [
      "Bewusstsein, Pupillen und Neurostatus engmaschig kontrollieren",
      "Bei plötzlichem Sehverlust oder Ausfällen sofort ärztlich melden (Notfall)",
      "Bei Polyneuropathie: Füße täglich prüfen, Verletzungen und Stürze vermeiden",
      "Blutdruck, Medikamente und Blutverdünner nach Plan, Risikofaktoren besprechen"
    ]
  },
  "g7-speiseroehre-magen": {
    "def": "Erkrankungen von Mund, Speiseröhre und Magen, die zu Schluckbeschwerden, Schmerzen, Erbrechen oder Durchfall führen.",
    "sym": [
      "Hiatushernie: Teil des Magens rutscht in den Brustraum, Sodbrennen, Aufstoßen",
      "Ösophagusdivertikel: Ausstülpung der Speiseröhre, Schluckstörung, Mundgeruch, Regurgitation",
      "Ösophaguskarzinom: zunehmende Schluckbeschwerden, Gewichtsverlust, Schmerzen hinter dem Brustbein",
      "Magenkarzinom: Oberbauchbeschwerden, Appetitlosigkeit, Gewichtsverlust, Blutarmut, Teerstuhl",
      "Infektiöse Gastroenteritis: Durchfall, Erbrechen, Bauchkrämpfe, Fieber, Flüssigkeitsverlust",
      "Glossitis: gerötete, brennende, glatte oder belegte Zunge",
      "Gastrinom: Tumor, der viel Magensäure auslöst, wiederkehrende Geschwüre, Durchfall"
    ],
    "urs": [
      "Rauchen, Alkohol, Übergewicht, Helicobacter pylori, Mangel an Vitaminen oder Eisen",
      "Viren (Noro, Rota), Bakterien (Salmonellen), verdorbene Lebensmittel"
    ],
    "risk": [],
    "ther": [
      "Hernie und Divertikel: Medikamente gegen Säure, bei Beschwerden Operation",
      "Karzinome: Operation, Chemo- und Strahlentherapie, Ernährungstherapie",
      "Gastroenteritis: Flüssigkeit und Elektrolyte ersetzen, bei Bedarf Infusion"
    ],
    "pfl": [
      "Flüssigkeitsbilanz, Gewicht, Stuhl und Erbrechen beobachten",
      "Kleine Mahlzeiten, Oberkörper hochlagern, Mundpflege, Schluckfähigkeit prüfen",
      "Bei Gastroenteritis: Kontaktisolation, Händedesinfektion mit Handschuhen, Flächendesinfektion"
    ]
  },
  "g7-darm-leber-pankreas": {
    "def": "Erkrankungen von Dickdarm, Dünndarm, Leber und Bauchspeicheldrüse mit Bauchschmerzen, Blutungen, Verdauungsstörungen oder Gewichtsverlust.",
    "sym": [
      "Hämorrhoiden: Blutauflagerung auf dem Stuhl, Jucken, Brennen, Knoten am After",
      "Zöliakie: Durchfall, Blähungen, Gewichtsverlust, Mangelerscheinungen durch Gluten",
      "Meckel-Divertikel: meist unbemerkt, selten Blutung oder Entzündung wie Blinddarm",
      "Mesenterialinfarkt: plötzlicher heftiger Bauchschmerz bei erst mildem Befund, Notfall",
      "Echinokokkose: Zysten in der Leber durch Bandwurm, oft lange ohne Beschwerden",
      "Leberzellkarzinom: Gewichtsverlust, Druckgefühl im Oberbauch, Gelbsucht, meist bei Zirrhose",
      "Pankreaskarzinom: Rückenschmerz, Gelbsucht, Gewichtsverlust, spät entdeckt",
      "Mundhöhlenkarzinom: nicht heilende Wunde, Schmerz, Schluckbeschwerden"
    ],
    "urs": [
      "Verstopfung und Pressen, Gluten, Durchblutungsstörung, Bandwurmeier aus dem Hund oder Fuchs",
      "Rauchen, Alkohol, Leberzirrhose, Hepatitis B und C, Übergewicht"
    ],
    "risk": [],
    "ther": [
      "Hämorrhoiden: Stuhlregulation, Salben, Verödung oder Operation",
      "Zöliakie: lebenslang glutenfreie Ernährung",
      "Mesenterialinfarkt: Notoperation; Echinokokkose: Medikamente und Operation",
      "Karzinome: Operation, Chemotherapie, Schmerz- und Ernährungstherapie"
    ],
    "pfl": [
      "Stuhlverhalten, Schmerzen, Haut- und Skleren-Farbe, Gewicht beobachten",
      "Bei starkem plötzlichem Bauchschmerz sofort ärztlich melden, nüchtern lassen",
      "Intimpflege und Hautschutz, Ballaststoffe und Trinken fördern",
      "Ernährungsberatung, bei Tumoren Palliativ- und Schmerzkonzept einbeziehen"
    ]
  },
  "g7-niere-harnwege-weitere": {
    "def": "Entzündungen, Tumoren und Engstellen von Niere und Harnröhre, die Schmerzen, Fieber oder Harnabflussstörungen verursachen.",
    "sym": [
      "Pyelonephritis: Fieber, Schüttelfrost, Flankenschmerz, Brennen beim Wasserlassen",
      "Nierenzellkarzinom: oft Zufallsbefund, Blut im Urin, Flankenschmerz, tastbarer Tumor",
      "Nierenzyste: meist harmlos und beschwerdefrei, selten Druckschmerz",
      "Urethritis: Brennen und Ausfluss aus der Harnröhre, oft sexuell übertragen",
      "Urethrastriktur: abgeschwächter Harnstrahl, Restharn, Harnverhalt"
    ],
    "urs": [
      "Aufsteigende Keime, Harnstau, Katheter, Zuckerkrankheit",
      "Rauchen, Übergewicht, Narben nach Entzündung oder Katheter"
    ],
    "risk": [],
    "ther": [
      "Pyelonephritis: Antibiotika, viel Flüssigkeit, bei Abflussstörung Entlastung",
      "Nierenzellkarzinom: Operation (Teil- oder Nierenentfernung), zielgerichtete Medikamente",
      "Harnröhrenenge: Aufdehnung oder Schlitzung, selten Plastik"
    ],
    "pfl": [
      "Ein- und Ausfuhr, Urinfarbe, Temperatur und Flankenschmerz beobachten",
      "Viel Trinken fördern, Intimpflege, Katheter nur bei Indikation",
      "Blut im Urin oder Fieber mit Schüttelfrost ärztlich melden"
    ]
  },
  "g7-maenner-weitere": {
    "def": "Entzündungen und Tumoren von Nebenhoden, Hoden und Penis, die Schmerzen, Schwellung oder Knoten verursachen.",
    "sym": [
      "Epididymitis: Schmerz und Schwellung im Hodensack, Fieber, Brennen beim Wasserlassen",
      "Hodenkarzinom: schmerzloser harter Knoten im Hoden, oft bei jungen Männern",
      "Peniskarzinom: Wucherung oder Wunde an Eichel oder Vorhaut, die nicht abheilt"
    ],
    "urs": [
      "Keime aus Harnwegen oder Geschlechtsverkehr",
      "Hodenhochstand in der Kindheit, Phimose, mangelnde Hygiene, HPV-Infektion"
    ],
    "risk": [],
    "ther": [
      "Epididymitis: Antibiotika, Hochlagern und Kühlen des Hodensacks, Schmerzmittel",
      "Hodenkarzinom: Entfernung des Hodens, Chemo- oder Strahlentherapie, gute Heilungschancen",
      "Peniskarzinom: Operation, ggf. Bestrahlung oder Chemotherapie"
    ],
    "pfl": [
      "Schmerz, Schwellung und Fieber beobachten, Hodensack stützen",
      "Schamgefühl achten, Gespräche diskret und ohne Wertung führen",
      "Selbstuntersuchung der Hoden anleiten, Hygiene und Impfung beraten"
    ]
  },
  "g7-frauen-entzuendung": {
    "def": "Entzündungen von Eileitern, Eierstöcken, Scheide, Muttermund, äußeren Genitalien und Brustdrüse, meist durch Bakterien oder Pilze.",
    "sym": [
      "Adnexitis: Unterbauchschmerz, Fieber, Ausfluss, Schmerz beim Geschlechtsverkehr",
      "Bartholinitis: schmerzhafte Schwellung am Scheideneingang, ggf. Abszess",
      "Kolpitis: Ausfluss, Juckreiz, Brennen in der Scheide",
      "Zervizitis: Ausfluss, Kontaktblutung, oft ohne Beschwerden",
      "Vulvitis: Rötung, Juckreiz, Brennen der äußeren Genitalien",
      "Mastitis: gerötete, heiße, schmerzhafte Brust, Fieber, meist beim Stillen"
    ],
    "urs": [
      "Bakterien, Pilze (Candida), Chlamydien, Gonokokken",
      "Milchstau und Keime über wunde Brustwarzen beim Stillen"
    ],
    "risk": [],
    "ther": [
      "Antibiotika oder Antimykotika nach Erreger, Schmerzmittel",
      "Abszess: Eröffnung und Spülung",
      "Mastitis: weiter stillen oder abpumpen, Kühlen, Antibiotika bei Bedarf"
    ],
    "pfl": [
      "Temperatur, Schmerz und Ausfluss beobachten, Intimhygiene anleiten",
      "Taktvoll und diskret untersuchen und beraten, Privatsphäre wahren",
      "Partnerbehandlung bei sexuell übertragbaren Erregern ansprechen"
    ]
  },
  "g7-frauen-tumoren": {
    "def": "Lageveränderungen, gutartige und bösartige Tumoren der weiblichen Organe sowie Bluthochdruck in der Schwangerschaft.",
    "sym": [
      "Descensus uteri: Druckgefühl nach unten, Harninkontinenz, Fremdkörpergefühl",
      "Myoma uteri: gutartige Muskelknoten, starke und lange Blutungen, Druckbeschwerden",
      "Ovarialkarzinom und ovarielles Zystadenom: lange unspezifisch, Blähbauch, Unterbauchschmerz, später Aszites",
      "Vaginal- und Vulvakarzinom: Juckreiz, Wunde oder Knoten, Blutung, bei älteren Frauen häufiger",
      "Schwangerschaftsinduzierte Hypertonie: Blutdruck nach der 20. Woche erhöht, Ödeme, Eiweiß im Urin"
    ],
    "urs": [
      "Geburten, Bindegewebsschwäche, Übergewicht, Hormone",
      "Alter, Genetik, HPV-Infektion, Rauchen, Plazentaprobleme"
    ],
    "risk": [],
    "ther": [
      "Senkung: Beckenbodentraining, Pessar oder Operation",
      "Myom: Beobachtung, Hormone oder Operation",
      "Krebs: Operation, Chemotherapie, ggf. Bestrahlung",
      "Schwangerschaftshochdruck: Kontrollen, Medikamente, bei Eklampsiegefahr Klinik und Entbindung"
    ],
    "pfl": [
      "Blutdruck, Ödeme, Kopfschmerz und Sehstörungen bei Schwangeren ernst nehmen und melden",
      "Beckenbodentraining anleiten, Obstipation und schweres Heben vermeiden",
      "Sensibel mit Scham und Angst umgehen, Vorsorgetermine empfehlen"
    ]
  },
  "g7-blut-lymphom": {
    "def": "Erkrankungen der Blutplättchen, der Gerinnung und des Lymphsystems, die zu Blutungen, Infektanfälligkeit oder Lymphknotenschwellung führen.",
    "sym": [
      "Thrombopenie: zu wenige Blutplättchen, Nasen- und Zahnfleischbluten, punktförmige Hautblutungen",
      "Verbrauchskoagulopathie (DIC): gleichzeitig Gerinnsel und Blutungen, schwere Komplikation bei Sepsis oder Schock",
      "Hodgkin-Lymphom: schmerzlose Lymphknotenschwellung, Fieber, Nachtschweiß, Gewichtsverlust",
      "Non-Hodgkin-Lymphom: Lymphknotenschwellung, Müdigkeit, Infekte, Allgemeinsymptome"
    ],
    "urs": [
      "Medikamente, Autoimmunprozess, Knochenmarkerkrankung, Sepsis, Schock, Tumor"
    ],
    "risk": [],
    "ther": [
      "Thrombopenie: Ursache behandeln, Thrombozytengabe bei Blutungsgefahr",
      "DIC: Grunderkrankung behandeln, Gerinnungsfaktoren ersetzen, Intensivmedizin",
      "Lymphome: Chemotherapie, Bestrahlung, Antikörper, teils Stammzelltransplantation"
    ],
    "pfl": [
      "Blutungszeichen beobachten, keine intramuskulären Injektionen, sanfte Mundpflege",
      "Verletzungen vermeiden, weiche Zahnbürste, elektrische Rasur",
      "Infektionsschutz bei Chemotherapie, Hygiene, Fieber sofort melden",
      "Seelische Belastung ansprechen, Angehörige und Psychoonkologie einbeziehen"
    ]
  },
  "g7-haut-weitere": {
    "def": "Bakterielle, parasitäre und allergische Erkrankungen der Haut, die Rötung, Juckreiz oder Schwellung verursachen.",
    "sym": [
      "Phlegmone: sich ausbreitende, überwärmte, gerötete, schmerzhafte Schwellung mit Fieber",
      "Impetigo contagiosa: gelbliche Krusten und Bläschen, vor allem bei Kindern im Gesicht",
      "Kopfläuse: Juckreiz am Kopf, Nissen an den Haaren, Kratzspuren",
      "Urtikaria: flüchtige juckende Quaddeln, Schwellung, durch Allergie oder Reize"
    ],
    "urs": [
      "Bakterien (Staphylokokken, Streptokokken) über Hautverletzungen",
      "Läuse durch engen Kontakt; Allergene, Medikamente, Kälte, Stress"
    ],
    "risk": [],
    "ther": [
      "Phlegmone und Impetigo: Antibiotika, Ruhigstellung, Wundversorgung",
      "Läuse: Läusemittel, Nissenkamm, Wiederholung nach etwa 8 bis 10 Tagen",
      "Urtikaria: Auslöser meiden, Antihistaminika, bei Schwellung im Gesicht Notfall"
    ],
    "pfl": [
      "Haut, Temperatur und Ausbreitung der Rötung markieren und beobachten",
      "Kontaktisolation und Händehygiene bei Impetigo und Läusen, Wäsche heiß waschen",
      "Bei Atemnot oder Gesichtsschwellung sofort Arzt rufen",
      "Betroffene ohne Stigmatisierung unterstützen, besonders Kinder"
    ]
  },
  "g7-virus-kinder-weitere": {
    "def": "Meist durch Viren oder Bakterien ausgelöste Infektionen, die bei Kindern oder in der Schwangerschaft besonders wichtig sind, sowie ein Tumor des Kindesalters.",
    "sym": [
      "Pfeiffer-Drüsenfieber: Fieber, Halsschmerzen, geschwollene Lymphknoten, Müdigkeit",
      "Zytomegalie: oft unbemerkt; bei Schwangeren und Abwehrschwäche Schäden beim Kind oder Organbefall",
      "Ringelröteln: schmetterlingsförmiger Ausschlag im Gesicht, später am Körper, leichte Krankheitszeichen",
      "Listeriose: Fieber, Durchfall; bei Schwangeren Gefahr für das Kind, bei Älteren Meningitis",
      "Poliomyelitis: Fieber, Muskelschmerz, im schweren Verlauf schlaffe Lähmungen",
      "Neuroblastom: Tumor bei Kleinkindern, Bauchschwellung, Blässe, Knochenschmerzen"
    ],
    "urs": [
      "Tröpfchen- und Schmierinfektion, Speichel, verunreinigte Lebensmittel (Käse, Rohmilch, Fleisch)",
      "Neuroblastom: Entartung von Nervenzellen des sympathischen Systems"
    ],
    "risk": [],
    "ther": [
      "Meist symptomatisch: Ruhe, Flüssigkeit, Fieber senken",
      "Listeriose: Antibiotika; Zytomegalie bei Risiko antivirale Mittel",
      "Kinderlähmung: Impfung als Schutz, Physiotherapie nach Lähmung",
      "Neuroblastom: Operation, Chemotherapie, Bestrahlung, spezielle Immuntherapie"
    ],
    "pfl": [
      "Schwangere über Lebensmittelhygiene beraten und Kontakt mit Erkrankten meiden",
      "Hygiene und Isolation nach Erreger, Impfstatus prüfen",
      "Kinder ruhig begleiten, Eltern einbeziehen und entlasten"
    ]
  },
  "g7-knochen-weitere": {
    "def": "Erkrankungen und Brüche von Knochen mit Schmerzen, Verformung oder Bewegungseinschränkung sowie das Schmerzsyndrom Fibromyalgie.",
    "sym": [
      "Morbus Paget: verdickte, verformte Knochen, Knochenschmerz, Brüche",
      "Osteomalazie: weiche Knochen durch Vitamin-D-Mangel, Knochenschmerz, Muskelschwäche",
      "Osteosarkom: Knochentumor bei Jugendlichen, Schmerz und Schwellung am Knie oder Oberarm",
      "Fibromyalgie: lang anhaltende Schmerzen in vielen Körperregionen, Erschöpfung, Schlafstörung",
      "Oberschenkelhalsfraktur: Schmerz in der Leiste, Bein verkürzt und nach außen gedreht, nach Sturz",
      "Sprunggelenks- und Schienbeinfraktur: Schwellung, Schmerz, Fehlstellung, keine Belastung möglich"
    ],
    "urs": [
      "Vitamin-D-Mangel, Alter, Stoffwechselstörung, genetische Faktoren, Sturz oder Unfall",
      "Fibromyalgie: Ursache unklar, Stress und Schlafmangel verstärken"
    ],
    "risk": [],
    "ther": [
      "Brüche: Operation (zum Beispiel Prothese oder Osteosynthese) oder Gips, möglichst früh mobilisieren",
      "Osteomalazie: Vitamin D und Kalzium; Paget: Bisphosphonate",
      "Osteosarkom: Chemotherapie und Operation",
      "Fibromyalgie: Bewegung, Wärme, Schmerz- und Schlafbehandlung, Psychotherapie"
    ],
    "pfl": [
      "Nach Hüftoperation: Thrombose- und Dekubitusprophylaxe, Lagerung nach Vorgabe, früh mobilisieren",
      "Durchblutung, Motorik und Sensibilität des betroffenen Gliedes prüfen",
      "Schmerz regelmäßig erfassen und nach Plan behandeln, Sturzprophylaxe",
      "Bei Fibromyalgie ernst nehmen, nicht abwerten, Aktivität langsam aufbauen"
    ]
  }
};
