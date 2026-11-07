/** Ergänzende Lektionen 13: kultursensible Pflege (Religionen), Erste Hilfe bei Verätzung, Strom und Ertrinken, Geburt, Diagnostik. */
import type { Lesson } from "./lessons";

export const GAPS13_LESSONS: Lesson[] = [
 {
  "id": "g12-kultur-islam-pflege",
  "group": "ausbildung",
  "area": "ethik",
  "title": "Kultursensible Pflege: Islam im Pflegealltag",
  "icon": "Moon",
  "ar": "نسأل المريض عن التزامه الديني ولا نفترضه. المسلم يصلي خمس مرات يومياً ويحتاج وضوءاً بماء جارٍ وخصوصية، ويتجنب لحم الخنزير والجيلاتين والكحول (حتى في الأدوية)، ويصوم رمضان مع إعفاء المريض والحامل والمسافر. تتولى الرعاية الحميمة ممرضة من الجنس نفسه. عند الاحتضار نُبلغ الأهل والإمام، ويُغسَّل المتوفى طقسياً ولا يلمسه بعد ذلك من هو من غير دينه.",
  "blocks": [
   {
    "h": "Fragen statt annehmen",
    "li": [
     "Nicht jeder Muslim lebt gleich streng. Deshalb fragt man bei der Aufnahme, ob und welche religiösen Regeln der Patient im Krankenhaus oder zu Hause einhalten möchte, und hält die Antwort in der Pflegeplanung fest.",
     "Muslime glauben an einen Gott (Allah) und seinen Propheten Mohammed. Die Heilige Schrift ist der Koran, das Gotteshaus die Moschee. Es gibt mehrere Glaubensrichtungen; die größten sind Sunniten und Schiiten."
    ]
   },
   {
    "h": "Gebet, Waschung und Körperpflege",
    "li": [
     "Gläubige Muslime beten fünfmal täglich. Dafür brauchen sie einen sauberen, ruhigen Platz und die Gebetsrichtung nach Mekka. Pflegemaßnahmen und Visiten lassen sich oft um die Gebetszeiten herum legen.",
     "Vor dem Gebet steht die rituelle Waschung, bevorzugt mit fließendem Wasser: kleine Waschung (Gesicht, Hände, Arme, Füße) oder große Waschung (ganzer Körper). Bettlägerigen kann man einen großen Becher Wasser reichen, damit sie sich fließend waschen können.",
     "Muslime gelten als besonders schamhaft. Körpernahe Pflege übernimmt deshalb möglichst eine Pflegekraft des gleichen Geschlechts. Körperkontakt zwischen den Geschlechtern ist im öffentlichen Leben unüblich, bei strenggläubigen Muslimen gilt das auch für das Händeschütteln."
    ]
   },
   {
    "h": "Essen, Medikamente und Ramadan",
    "li": [
     "Auf Schweinefleisch und daraus Hergestelltes wird verzichtet, dazu gehört auch Gelatine, etwa in manchen Käsesorten. Fleisch muss von rituell geschlachteten Tieren stammen (halal). Alkohol ist verboten, auch in Medikamenten, Säften oder Tropfen.",
     "Im Fastenmonat Ramadan essen, trinken und rauchen Gläubige tagsüber nicht. Kranke, Schwangere und Reisende sind vom Fasten ausgenommen. Wer trotzdem fasten möchte, braucht ein Gespräch mit dem Arzt, weil sich Medikamenten- und Insulinzeiten verschieben können.",
     "Ein Krankenbesuch gilt im Islam als religiöse Pflicht. Viele Besucher sind daher kein Zeichen von Überforderung, sondern drücken Zuwendung aus. Besuchsregeln sollten möglichst flexibel gehandhabt werden."
    ]
   },
   {
    "h": "Sterben und Tod",
    "li": [
     "Verschlechtert sich der Zustand akut, werden die Angehörigen und auf Wunsch der Imam (Vorsteher der Gemeinde) informiert. Angehörige möchten oft anwesend sein und beten.",
     "Nach dem Tod schließen die Angehörigen dem Verstorbenen die Augen. Der Leichnam wird rituell gewaschen und gekleidet. Danach sollte ihn kein Andersgläubiger mehr berühren; die Abschiednahme wird mit der Familie abgesprochen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Fünf Punkte, die im Alltag zählen",
    "items": [
     {
      "t": "Gebet",
      "s": "Fünfmal täglich, ruhiger Platz, Richtung Mekka",
      "icon": "Moon",
      "tone": "info"
     },
     {
      "t": "Waschung",
      "s": "Fließendes Wasser vor dem Gebet",
      "icon": "Droplets",
      "tone": "info"
     },
     {
      "t": "Scham",
      "s": "Intimpflege durch gleichgeschlechtliche Pflegekraft",
      "icon": "ShieldCheck",
      "tone": "ok"
     },
     {
      "t": "Essen",
      "s": "Kein Schwein, kein Alkohol, halal",
      "icon": "Utensils",
      "tone": "warn"
     },
     {
      "t": "Sterben",
      "s": "Familie und Imam informieren",
      "icon": "Users",
      "tone": "ok"
     }
    ]
   },
   {
    "kind": "table",
    "title": "Im Alltag umsetzen",
    "head": [
     "Situation",
     "Das hilft"
    ],
    "rows": [
     [
      "Medikament enthält Alkohol oder Gelatine",
      "Arzt oder Apotheke nach einer Alternative fragen"
     ],
     [
      "Patient fastet im Ramadan",
      "Gespräch mit dem Arzt, Einnahmezeiten anpassen"
     ],
     [
      "Gebetszeit während der Pflege",
      "Maßnahme verschieben, wenn es medizinisch möglich ist"
     ],
     [
      "Männlicher Pfleger bei einer muslimischen Patientin",
      "Kollegin einsetzen oder Wunsch respektvoll klären"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-kultur-religionen-ueberblick",
  "group": "ausbildung",
  "area": "ethik",
  "title": "Kultursensible Pflege: Christentum, Judentum, Hinduismus und Buddhismus",
  "icon": "Users",
  "ar": "الهدف احترام معتقد المريض لا حفظ قواعد جامدة. المسيحيون قد يطلبون كاهناً ولا يأكلون اللحم أيام الصيام، وشهود يهوه يرفضون نقل الدم. اليهود يلتزمون بالسبت وباللحم المذكّى وفصل اللبن عن اللحم ويفضلون الماء الجاري. الهندوس يتجنبون لحم البقر وكثيراً ما يصومون، والبوذيون يحتاجون هدوءاً للتأمل ويريدون معرفة حالتهم بصراحة. وفي الاحتضار يُستدعى رجل الدين المناسب.",
  "blocks": [
   {
    "h": "Grundhaltung",
    "li": [
     "Kultursensible Pflege heißt, fremde Regeln und Rituale kennenzulernen, zu respektieren und im Rahmen des Möglichen zu berücksichtigen. Die Unterschiede zeigen sich vor allem bei Kommunikation, Ernährung, Körperpflege und im Sterben.",
     "Das Wissen über eine Religion ersetzt nie das Gespräch. Man fragt den Patienten selbst, was ihm wichtig ist, weil jeder seinen Glauben unterschiedlich lebt."
    ]
   },
   {
    "h": "Christentum",
    "li": [
     "Die großen Konfessionen sind die katholische Kirche, die orthodoxen und die evangelischen Kirchen. Der Sonntag ist Ruhetag, viele besuchen den Gottesdienst. Freitags verzichten manche auf Fleisch; die Fastenzeit liegt in den 40 Tagen vor Ostern.",
     "Im Sterben oder bei schwerer Krankheit wünschen viele einen Geistlichen, etwa für Krankensalbung oder Beichte. Bei einem lebensbedrohlich kranken Neugeborenen sollte die Taufe vor dem Tod möglich sein.",
     "Besonderheit bei den Zeugen Jehovas: Sie lehnen Bluttransfusionen und Impfungen ab. Das ist bei jeder geplanten Behandlung früh zu klären und zu dokumentieren."
    ]
   },
   {
    "h": "Judentum",
    "li": [
     "Der Sabbat dauert von Freitagabend bis Samstagabend und ist ein Ruhetag. Der Rabbiner leitet die Gemeinde und wird auf Wunsch benachrichtigt.",
     "Gegessen wird nur koscheres Fleisch von bestimmten geschächteten Tieren. Milch und Fleisch werden nicht zusammen gegessen, dazwischen liegen einige Stunden. Fisch, Eier, Gemüse und Obst gelten als neutral.",
     "Fließendes Wasser ist wichtig: duschen statt baden und Händewaschen morgens, vor dem Gebet und vor und nach dem Essen. Im Sterben wird zunächst geschwiegen und der Verstorbene nicht berührt; später wird er gewaschen und von einem Wächter (Schomer) begleitet."
    ]
   },
   {
    "h": "Hinduismus und Buddhismus",
    "li": [
     "Im Hinduismus spielt die Wiedergeburt eine große Rolle. Manche Hindus sehen Krankheit als Folge früherer Taten. Viele ernähren sich streng vegetarisch oder fasten, Rindfleisch wird gemieden. Frauen sind besonders schamhaft, und Angehörige möchten häufig bei der Pflege mithelfen.",
     "Im Buddhismus steht keine bestimmende Gottheit im Mittelpunkt, sondern der Weg zur Erleuchtung. Wichtig sind Meditation (ruhiges Umfeld), ein sparsamer Umgang mit Ressourcen und das Mithelfen der Angehörigen.",
     "Buddhisten wollen offen und ehrlich über ihren Zustand informiert werden und ihr Sterben bewusst erleben und planen. Im Hinduismus werden oft Mönche als Begleiter im Sterbeprozess hinzugebeten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Religionen im Vergleich: Essen und Sterben",
    "head": [
     "Religion",
     "Essen",
     "Sterben"
    ],
    "rows": [
     [
      "Christentum",
      "Freitags oft kein Fleisch, Fasten vor Ostern",
      "Geistlicher, Krankensalbung, Taufe"
     ],
     [
      "Judentum",
      "Koscher, Milch und Fleisch getrennt",
      "Rabbiner, Verstorbenen nicht sofort berühren"
     ],
     [
      "Hinduismus",
      "Vegetarisch, kein Rindfleisch",
      "Mönche als Begleiter, Angehörige helfen"
     ],
     [
      "Buddhismus",
      "Nichts verschwenden",
      "Offene Information, bewusstes Erleben"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-erste-hilfe-veraetzung-strom-ertrinken",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Erste Hilfe: Verätzung, Stromunfall und Ertrinken",
  "icon": "Siren",
  "ar": "في الحروق الكيميائية نخلع الملابس المبتلة بحذر ونشطف بالماء الغزير. في حادث الكهرباء لا نلمس المصاب أبداً قبل فصل التيار أو إبعاده بأداة عازلة، ثم نغطي علامات الدخول والخروج معقّمة. في الغرق نحمي أنفسنا أولاً، نستدعي 112، ونبدأ بخمس نفَسات إنقاذ ثم ضغطات القلب بنسبة 30 إلى 2، ونحافظ على دفء المصاب. وكل من تعرّض لحادث كهرباء أو غرق يحتاج إلى فحص طبي حتى لو بدا بخير.",
  "blocks": [
   {
    "h": "Verätzung",
    "li": [
     "Verätzungen entstehen durch Säuren, Laugen oder Gase. Zuerst achtet man auf den Eigenschutz (Handschuhe) und entfernt vorsichtig alle benetzten Kleidungsstücke.",
     "Die betroffene Haut wird reichlich mit Wasser gespült oder vorsichtig abgetupft; das betroffene Körperteil lagert man hoch. Bei Augenbeteiligung spült man lange und mit dem Kopf zur verletzten Seite, damit nichts ins gesunde Auge läuft.",
     "Wurde die Chemikalie verschluckt, lässt man den Betroffenen kleine Schlucke Wasser trinken und bringt ihn nicht zum Erbrechen. Das Giftinformationszentrum oder der Notruf 112 gibt weitere Anweisungen, die Verpackung der Chemikalie nimmt man mit."
    ]
   },
   {
    "h": "Stromunfall",
    "li": [
     "Eigenschutz geht vor: Berühre nie einen Menschen, der noch an der Stromquelle hängt. Zuerst den Strom abschalten (Hauptschalter oder Sicherung). Ist das nicht möglich, trennt man den Betroffenen mit einem nicht leitenden Gegenstand wie einem trockenen Besenstiel von der Stromquelle.",
     "Bei Hochspannung (Oberleitung, Freileitung) hält man großen Abstand und lässt die Feuerwehr den Strom abschalten.",
     "Danach prüft man Bewusstsein und Atmung und reanimiert bei Bedarf. Die Strommarken an der Ein- und Austrittsstelle deckt man steril ab. Auch wer sich gut fühlt, muss untersucht werden, weil Herzrhythmusstörungen mit Verzögerung auftreten können."
    ]
   },
   {
    "h": "Ertrinken und Beinahe-Ertrinken",
    "li": [
     "Bei einem Ertrinkungsunfall ist der Sauerstoffmangel das Hauptproblem. Retter bringen sich nicht selbst in Gefahr, rufen früh 112 und holen den Betroffenen nur dann aus dem Wasser, wenn sie sicher helfen können.",
     "Ist der Betroffene bewusstlos und atmet nicht normal, beginnt die Reanimation mit fünf Beatmungen, danach 30 Herzdruckmassagen im Wechsel mit 2 Beatmungen. Atmet er normal, kommt er in die stabile Seitenlage.",
     "Nasse Kleidung wird entfernt, der Betroffene wird zugedeckt und warm gehalten, weil Unterkühlung droht. Auch wer nach einem Beinahe-Ertrinken wieder normal atmet, muss ins Krankenhaus, weil sich Stunden später noch Atemprobleme entwickeln können."
    ]
   },
   {
    "h": "Gemeinsame Regeln",
    "li": [
     "Immer gilt dieselbe Reihenfolge: Gefahr erkennen und Eigenschutz beachten, Notruf absetzen, Vitalzeichen und besonders die Atmung prüfen, Erste Hilfe leisten, Betroffenen beobachten und ihn nicht allein lassen.",
     "Jeder ist nach dem Strafgesetzbuch (§ 323c) verpflichtet, Erste Hilfe zu leisten, wenn es zumutbar ist. Zumutbar heißt: ohne erhebliche eigene Gefahr."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Stromunfall: Reihenfolge",
    "steps": [
     {
      "t": "1 – Eigenschutz",
      "s": "Nicht berühren, solange der Strom fließt",
      "icon": "ShieldCheck",
      "tone": "warn"
     },
     {
      "t": "2 – Strom trennen",
      "s": "Hauptschalter oder nicht leitender Gegenstand",
      "icon": "Zap",
      "tone": "warn"
     },
     {
      "t": "3 – Notruf und Atmung prüfen",
      "s": "112, bei Bedarf Reanimation",
      "icon": "Siren",
      "tone": "info"
     },
     {
      "t": "4 – Strommarken abdecken",
      "s": "Ein- und Austrittsstelle steril, ärztliche Kontrolle",
      "icon": "Bandage",
      "tone": "ok"
     }
    ]
   },
   {
    "kind": "compare",
    "title": "Verätzung: tun und lassen",
    "cols": [
     {
      "t": "Das tut man",
      "icon": "ShieldCheck",
      "tone": "ok",
      "items": [
       "Benetzte Kleidung vorsichtig entfernen",
       "Reichlich mit Wasser spülen",
       "Giftinformationszentrum oder 112 anrufen"
      ]
     },
     {
      "t": "Das lässt man",
      "icon": "TriangleAlert",
      "tone": "bad",
      "items": [
       "Erbrechen auslösen",
       "Mit Gegenmitteln neutralisieren",
       "Die Chemikalie ohne Handschuhe anfassen"
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "g12-geburt-phasen-wehen",
  "group": "ausbildung",
  "area": "lebensphasen",
  "title": "Geburt: Phasen, Wehen und Geburtsverletzungen",
  "icon": "Baby",
  "ar": "تنقسم الولادة الطبيعية إلى ثلاث مراحل: الانفتاح (نحو 6 إلى 9 ساعات وهي الأطول، وينفتح عنق الرحم نحو 1 سم في الساعة)، ثم الطرد (نحو ساعة إلى ساعتين) حيث تساعد الأم بالدفع، ثم مرحلة المشيمة (حتى 60 دقيقة) ويجب أن تكون المشيمة كاملة. الإصابات الشائعة هي التمزق العجاني وقطع العجان وتُصنف بأربع درجات. يُلجأ إلى الولادة القيصرية أو الأدوات عند الضرورة. النفاس هو أول 6 إلى 8 أسابيع بعد الولادة.",
  "blocks": [
   {
    "h": "Drei Phasen der Spontangeburt",
    "li": [
     "Eröffnungsphase (ca. 6 bis 9 Stunden): Sie reicht vom Geburtsbeginn bis zur vollständigen Öffnung des Muttermundes und ist der längste Teil. Die Eröffnungswehen kommen regelmäßig und sind schmerzhaft; der Muttermund öffnet sich etwa einen Zentimeter pro Stunde.",
     "Austreibungsphase (ca. 1 bis 2 Stunden): Sie beginnt mit der vollständigen Öffnung und endet mit der Geburt des Kindes. Die Wehen sind kurz und heftig, bei den Presswehen hilft die Frau aktiv mit. Zuerst tritt der Kopf durch die Scheide (Dammschutz), dann folgen Schultern und Körper.",
     "Nachgeburtsphase (bis zu 60 Minuten): Nachwehen unterstützen die Gebärmutter beim Zusammenziehen, die Plazenta löst sich. Sie muss vollständig sein, denn ein Rest (Plazentarest) kann starke Blutungen und Entzündungen verursachen."
    ]
   },
   {
    "h": "Wehen und Verlauf",
    "li": [
     "Die Art der Wehen ändert sich von Phase zu Phase: Eröffnungswehen, Austreibungs- und Presswehen, Nachwehen. Bei Frauen, die schon geboren haben (Mehrgebärende), sind die Phasen oft kürzer als bei Erstgebärenden.",
     "Kommt es zu einem Geburtsstillstand oder zu Sauerstoffmangel beim Kind, kann der Einsatz von Instrumenten wie Vakuumextraktion oder Geburtszange nötig werden."
    ]
   },
   {
    "h": "Geburtsverletzungen",
    "li": [
     "Durch die starke Dehnung kann Gewebe einreißen. Am häufigsten sind der Dammschnitt (Episiotomie, gezielt gesetzt) und der Dammriss; seltener reißen Gebärmutter, Scheide, Klitoris oder Schamlippen. Die Wunde ist geschwollen, gerötet und schmerzhaft.",
     "Der Dammriss wird in vier Grade eingeteilt: Grad 1 betrifft Haut und Schleimhaut, Grad 2 die Dammmuskulatur, Grad 3 zusätzlich den Schließmuskel des Afters, Grad 4 auch die Vorderwand des Enddarms. Bei Grad 3 und 4 besteht das Risiko für Stuhl- und Harninkontinenz.",
     "Der Dammschnitt erweitert den Beckenausgang, beschleunigt die Geburt und entlastet den kindlichen Kopf, etwa bei Frühgeburten oder Zwillingen. Routinemäßig sollte er nicht geschnitten werden, weil Wundheilungsstörungen möglich sind."
    ]
   },
   {
    "h": "Kaiserschnitt und Wochenbett",
    "li": [
     "Ist eine Spontangeburt nicht möglich oder nicht leistbar, wird das Kind per Kaiserschnitt (Sectio caesarea) geboren. Eine primäre Sectio erfolgt vor Geburtsbeginn, eine sekundäre nach Beginn der Wehen.",
     "Das Wochenbett (Puerperium) umfasst die ersten sechs bis acht Wochen nach der Geburt. In dieser Zeit heilen Geburtsverletzungen, die Gebärmutter bildet sich zurück, Stillbeziehung und Mutter-Kind-Bindung entstehen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Spontangeburt in drei Phasen",
    "steps": [
     {
      "t": "Eröffnung",
      "s": "6 bis 9 Stunden, Muttermund öffnet sich",
      "icon": "Clock",
      "tone": "info"
     },
     {
      "t": "Austreibung",
      "s": "1 bis 2 Stunden, Kind wird geboren",
      "icon": "Baby",
      "tone": "warn"
     },
     {
      "t": "Nachgeburt",
      "s": "Bis 60 Minuten, Plazenta löst sich",
      "icon": "Heart",
      "tone": "ok"
     }
    ]
   },
   {
    "kind": "table",
    "title": "Dammriss nach Schweregrad",
    "head": [
     "Grad",
     "Was ist verletzt?"
    ],
    "rows": [
     [
      "Grad 1",
      "Haut und Schleimhaut von Scheideneingang und Damm"
     ],
     [
      "Grad 2",
      "Dammmuskulatur bis zum Schließmuskel"
     ],
     [
      "Grad 3",
      "Zusätzlich der Schließmuskel des Afters"
     ],
     [
      "Grad 4",
      "Auch die Vorderwand des Enddarms"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-diagnostik-knochenmark-allergie-gelenk",
  "group": "ausbildung",
  "area": "therapie",
  "title": "Diagnostik begleiten: Knochenmark, Lymphknoten, Allergietests und Gelenkspiegelung",
  "icon": "Microscope",
  "ar": "تُجرى ثقبة نقي العظم غالباً من عرف الحوض بإبرة سميكة، وأهم دواعيها اضطرابات تكوين الدم واللوكيميا. لا تُؤخذ خزعة من العقدة اللمفاوية المشتبهة بل تُستأصل كاملة. في اختبارات الحساسية تُقاس الأجسام المضادة IgE ويُجرى اختبار الوخز (حتى 12 مادة) أو اختبار الاستفزاز، وكلاهما قد يسبب صدمة تأقية فيجب المراقبة. تنظير المفصل عملية صغيرة تحت التخدير الكامل أو النخاعي، ويُرفع المفصل ويُبرَّد بعدها.",
  "blocks": [
   {
    "h": "Knochenmarkspunktion",
    "li": [
     "Eine Knochenmarkspunktion klärt vor allem Störungen der Blutbildung und Leukämien ab. Das Knochenmark wird meist mit einer dicken Kanüle aus dem Beckenkamm entnommen.",
     "Pflegende bereiten den Patienten vor (Aufklärung und Einwilligung liegen vor, Ängste ansprechen), helfen bei der Lagerung und beobachten danach die Punktionsstelle auf Nachblutung und Schmerzen sowie die Vitalzeichen."
    ]
   },
   {
    "h": "Lymphknoten: entfernen statt biopsieren",
    "li": [
     "Eine lange bestehende, schmerzlose Lymphknotenschwellung, die nicht mit dem umliegenden Gewebe verbacken ist, kann auf ein malignes Lymphom hindeuten. Zur Klärung muss der Lymphknoten mikroskopisch untersucht werden.",
     "Früher wurde ein Teil entnommen (Biopsie). Weil dabei Tumorzellen verschleppt werden können, entfernt man den Lymphknoten heute im Ganzen (Lymphknotenexstirpation)."
    ]
   },
   {
    "h": "Allergietests",
    "li": [
     "Bluttest auf IgE: Bei einer Allergie bildet der Körper spezifische IgE-Antikörper gegen das Allergen. Erhöhte Werte sprechen für eine Allergie.",
     "Pricktest: Bis zu 12 mögliche Allergene werden auf die Haut getropft und mit einer Lanzette in die Oberhaut eingestochen. Bei Allergie bildet sich eine Quaddel. Weitere Hauttests sind Reib-, Intrakutan- und Epikutantest.",
     "Provokationstest: Der Patient nimmt das vermutete Allergen unter ärztlicher Aufsicht auf. Bei Tests besteht die Gefahr eines anaphylaktischen Schocks, auch noch etwa 30 Minuten danach. Man achtet auf Herzrasen, Blutdruckabfall und Atemnot."
    ]
   },
   {
    "h": "Gelenkspiegelung und Gelenkpunktion",
    "li": [
     "Bei der Arthroskopie führt man in einer kleinen Operation ein Arthroskop in die Gelenkhöhle, in Vollnarkose oder Spinalanästhesie. Zur Diagnostik können Gewebeproben entnommen werden, zur Therapie lassen sich Blutungen veröden oder das Gelenk spülen.",
     "Die Pflege folgt den Regeln der perioperativen Pflege. Das operierte Gelenk wird hochgelagert und gekühlt.",
     "Nach Verletzungen und Operationen prüft man die DMS-Kontrolle: Durchblutung, Motorik und Sensibilität, immer unterhalb (distal) der betroffenen Stelle."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Allergietests im Vergleich",
    "head": [
     "Test",
     "So läuft er ab",
     "Worauf man achtet"
    ],
    "rows": [
     [
      "IgE im Blut",
      "Blutentnahme, Antikörper werden bestimmt",
      "Erhöhte Werte sprechen für Allergie"
     ],
     [
      "Pricktest",
      "Tropfen auf die Haut, Einstich mit Lanzette",
      "Quaddel, Kreislauf und Atmung beobachten"
     ],
     [
      "Provokationstest",
      "Allergen wird unter ärztlicher Aufsicht aufgenommen",
      "Hohes Schockrisiko, Notfallbereitschaft"
     ]
    ]
   }
  ]
 }
];
