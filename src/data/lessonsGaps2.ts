/** Ergänzende Lektionen 2 (Salutogenese, Burnout, Gewalt, Settings, Pädiatrie, Trisomie 21, CVI, Larynx-Ca, Mamma-Ca, Colitis, Verbrennung). In eigenen Worten und vereinfacht. */
import type { Lesson } from "./lessons";

export const GAPS2_LESSONS: Lesson[] = [
 {
  "id": "g-salutogenese-praevention",
  "group": "ausbildung",
  "area": "konzepte",
  "title": "Salutogenese, Gesundheitsförderung und Prävention",
  "icon": "Sprout",
  "ar": "نشوء الصحة (Salutogenese) يسأل: ما الذي يُبقي الإنسان سليماً؟ مفهوم الانسجام (Kohärenzgefühl) هو الفهم والقدرة على التدبير والمعنى. تعزيز الصحة يقوّي الموارد، والوقاية ثلاثة مستويات: أولية وثانوية وثالثية.",
  "blocks": [
   {
    "h": "Salutogenese nach Antonovsky",
    "li": [
     "Pathogenese fragt: Warum wird jemand krank? Salutogenese fragt: Was hält Menschen gesund?",
     "Gesundheit und Krankheit sind keine zwei getrennten Zustände, sondern die Enden einer Linie (Kontinuum), auf der sich jeder Mensch bewegt.",
     "Das Kohärenzgefühl schützt: Verstehbarkeit (ich verstehe, was passiert), Handhabbarkeit (ich habe Mittel, damit umzugehen) und Bedeutsamkeit (es lohnt sich, sich einzusetzen).",
     "Widerstandsressourcen sind z. B. soziale Unterstützung, Wissen, Selbstvertrauen, finanzielle Sicherheit und Glaube.",
     "Für die Pflege heißt das: Ressourcen sehen und stärken, nicht nur Defizite abarbeiten."
    ]
   },
   {
    "h": "Gesundheitsförderung",
    "li": [
     "Ziel: Menschen befähigen, mehr Einfluss auf ihre Gesundheit zu nehmen (Ottawa-Charta der WHO, 1986).",
     "Sie setzt bei den Ressourcen an und bezieht Lebenswelten ein (Schule, Betrieb, Pflegeheim, Wohnviertel).",
     "Beispiele: Bewegungsangebote, gesunde Ernährung, Stressbewältigung, Selbsthilfegruppen."
    ]
   },
   {
    "h": "Die drei Ebenen der Prävention",
    "li": [
     "Primärprävention: Krankheit verhindern, bevor sie entsteht (Impfung, Nichtrauchen, Händehygiene, Sturzprophylaxe vor dem ersten Sturz).",
     "Sekundärprävention: Krankheit früh erkennen und behandeln (Vorsorge, Krebsfrüherkennung, Blutdruckkontrolle).",
     "Tertiärprävention: Folgen und Rückfälle begrenzen (Rehabilitation, Schulung nach Schlaganfall, Dekubitusprophylaxe bei Bettlägerigkeit).",
     "Verhaltensprävention setzt beim Einzelnen an, Verhältnisprävention bei den Bedingungen (Rauchverbot, Arbeitsplatzgestaltung)."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "pyramid",
    "title": "Drei Ebenen der Prävention",
    "levels": [
     {
      "t": "Primär",
      "s": "Vor der Krankheit: Impfung, Hygiene",
      "icon": "ShieldCheck"
     },
     {
      "t": "Sekundär",
      "s": "Früh erkennen: Vorsorge",
      "icon": "Search"
     },
     {
      "t": "Tertiär",
      "s": "Folgen begrenzen: Reha",
      "icon": "HeartPulse"
     }
    ]
   },
   {
    "kind": "tiles",
    "title": "Kohärenzgefühl",
    "items": [
     {
      "t": "Verstehbarkeit",
      "s": "Ich verstehe es",
      "icon": "Lightbulb"
     },
     {
      "t": "Handhabbarkeit",
      "s": "Ich kann damit umgehen",
      "icon": "Wrench"
     },
     {
      "t": "Bedeutsamkeit",
      "s": "Es lohnt sich",
      "icon": "Heart"
     }
    ]
   }
  ]
 },
 {
  "id": "g-burnout-mobbing",
  "group": "ausbildung",
  "area": "gesundheit",
  "title": "Stress, Burnout, Coolout und Mobbing im Pflegeberuf",
  "icon": "Flame",
  "ar": "الضغط المزمن في التمريض قد يؤدي إلى الاحتراق النفسي (Burnout). أما Coolout فهو فقدان المثل العليا بعد الاصطدام بواقع العمل. التنمر (Mobbing) هجوم منهجي ومتكرر. الوقاية: موارد شخصية، فريق داعم، حدود واضحة وطلب المساعدة مبكراً.",
  "blocks": [
   {
    "h": "Stress im Pflegeberuf",
    "li": [
     "Belastungen sind z. B. Schichtdienst, Zeitdruck, Personalmangel, Umgang mit Leid und Tod, schweres Heben und Konflikte.",
     "Stress ist zuerst eine normale Reaktion; gefährlich wird er, wenn er lange anhält und keine Erholung folgt.",
     "Warnzeichen: Schlafstörungen, Gereiztheit, Konzentrationsprobleme, Rückzug, häufige Infekte, Kopf- oder Rückenschmerzen."
    ]
   },
   {
    "h": "Burnout",
    "li": [
     "Burnout ist ein Zustand tiefer körperlicher und seelischer Erschöpfung durch lang anhaltende Überforderung im Beruf.",
     "Typische Merkmale: emotionale Erschöpfung, Gefühllosigkeit/Zynismus gegenüber Patienten (Depersonalisation) und das Gefühl, nichts mehr zu bewirken.",
     "Oft trifft es besonders engagierte Menschen, die sich zuerst stark einsetzen und dann ausbrennen.",
     "Hilfe: früh mit Vorgesetzten oder Betriebsarzt sprechen, Pausen und Erholung ernst nehmen, ärztliche oder psychologische Unterstützung."
    ]
   },
   {
    "h": "Coolout",
    "li": [
     "Coolout beschreibt das Abkühlen der anfänglichen Ideale: Berufsanfänger wollen ganzheitlich pflegen, erleben aber Zeitdruck und Routine.",
     "Folge: Man passt sich an, arbeitet 'nach Schema' und verliert Freude und Beziehung zum Patienten.",
     "Gegenmittel: Reflexion im Team, Praxisanleitung, Supervision und ein Arbeitsumfeld, das Haltung ermöglicht."
    ]
   },
   {
    "h": "Mobbing am Arbeitsplatz",
    "li": [
     "Mobbing: systematische, über längere Zeit wiederholte Anfeindung, Ausgrenzung oder Schikane einer Person, die sich schlecht wehren kann.",
     "Beispiele: Informationen vorenthalten, Gerüchte verbreiten, ständig kritisieren, schlechte Dienstpläne, Ignorieren.",
     "Folgen: Angst, Schlafstörungen, Depression, Krankmeldungen und Kündigung.",
     "Vorgehen: Vorfälle mit Datum notieren (Mobbing-Tagebuch), Gespräch suchen, Vertrauensperson, Betriebsrat, Vorgesetzte und Beratungsstellen einbeziehen.",
     "Der Arbeitgeber ist verpflichtet, Beschäftigte vor Benachteiligung und Belästigung zu schützen (AGG)."
    ]
   },
   {
    "h": "Schutzfaktoren",
    "li": [
     "Persönlich: Resilienz, Humor, Bewegung, gutes Schlafverhalten, Hobbys, Nein sagen können.",
     "Im Team: kollegiale Beratung, Fallbesprechung, offene Fehlerkultur, Supervision.",
     "Organisation: verlässliche Dienstpläne, ausreichend Personal, Pausen, Rückenschonende Arbeitsweise."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Weg in den Burnout",
    "steps": [
     {
      "t": "Hohes Engagement",
      "s": "Überstunden",
      "icon": "Flame"
     },
     {
      "t": "Dauerstress",
      "s": "keine Erholung",
      "icon": "Clock"
     },
     {
      "t": "Erschöpfung",
      "s": "körperlich und seelisch",
      "icon": "Cloud"
     },
     {
      "t": "Zynismus",
      "s": "Rückzug von Patienten",
      "icon": "Frown"
     },
     {
      "t": "Hilfe holen",
      "s": "früh handeln",
      "icon": "HandHelping"
     }
    ]
   },
   {
    "kind": "compare",
    "title": "Burnout oder Coolout?",
    "cols": [
     {
      "t": "Burnout",
      "items": [
       "Folge von Dauerüberlastung",
       "Erschöpfung, Zynismus",
       "braucht oft ärztliche Hilfe"
      ],
      "icon": "Flame"
     },
     {
      "t": "Coolout",
      "items": [
       "Ideale kühlen ab",
       "Anpassung an Routine",
       "Reflexion und Anleitung helfen"
      ],
      "icon": "Snowflake"
     }
    ]
   }
  ]
 },
 {
  "id": "g-ekel-scham-gewalt",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Ekel, Scham und Gewalt in der Pflege",
  "icon": "HandHelping",
  "ar": "الاشمئزاز والخجل مشاعر طبيعية في التمريض. يُتعامل معها بالمهنية، وبحماية خصوصية المريض. العنف قد يصدر عن المريض أو عن المهنيين (إهمال، تقييد غير مبرر). الوقاية: الانتباه، خفض التصعيد، الإبلاغ والثقافة المؤسسية.",
  "blocks": [
   {
    "h": "Ekel in der Pflege",
    "li": [
     "Ekel ist ein natürlicher Schutzreflex, z. B. bei Erbrochenem, Stuhl, Eiter oder Wundgeruch. Er ist kein Zeichen von Unfähigkeit.",
     "Wichtig: Der Patient spürt die Reaktion. Mimik, Abwenden oder Naserümpfen können beschämen.",
     "Hilfen: ruhig atmen, Handschuhe und Schutzkleidung, gut lüften, Geruch binden, kurz Abstand nehmen und sachlich bleiben, im Team darüber sprechen."
    ]
   },
   {
    "h": "Scham und Intimsphäre",
    "li": [
     "Scham entsteht bei Nacktheit, Inkontinenz und Hilfe bei der Intimpflege. Sie ist kulturell geprägt.",
     "Schamgrenzen wahren: Tür schließen, Sichtschutz, nur das nötige Körperteil aufdecken, ankündigen, was man tut, gleichgeschlechtliche Pflege anbieten, wenn gewünscht.",
     "Auch Pflegende können sich schämen. Offen im Team besprechen und Sicherheit durch Routine gewinnen."
    ]
   },
   {
    "h": "Gewalt in der Pflege",
    "li": [
     "Gewalt kann von Patienten ausgehen (Schlagen, Beschimpfen, sexuelle Übergriffe) und von Pflegenden oder Angehörigen gegen Pflegebedürftige.",
     "Formen: körperlich, psychisch (Drohen, Demütigen), sexuell, finanziell, Vernachlässigung und freiheitsentziehende Maßnahmen ohne Grundlage.",
     "Risiken: Überforderung, Personalmangel, Demenz mit herausforderndem Verhalten, fehlende Fortbildung, Isolation pflegender Angehöriger."
    ]
   },
   {
    "h": "Deeskalation und Handeln",
    "li": [
     "Ruhig bleiben, Abstand halten, offene Körperhaltung, kurze Sätze, Gefühle benennen, Fluchtweg frei halten.",
     "Auslöser suchen: Schmerz, Angst, Harndrang, Überforderung oder Reizüberflutung. Dann Ursache beheben.",
     "Eigene Sicherheit zuerst, Hilfe holen, Vorfall dokumentieren und melden (CIRS, Vorgesetzte).",
     "Verdacht auf Gewalt gegen Pflegebedürftige nicht verschweigen: Vorgesetzte, Beschwerdestellen oder Heimaufsicht einschalten.",
     "Freiheitsentziehende Maßnahmen (Bettgitter, Fixierung) nur bei rechtlicher Grundlage: Einwilligung oder richterlicher Beschluss."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Deeskalation in vier Schritten",
    "steps": [
     {
      "t": "Ruhe bewahren",
      "s": "Abstand, offene Haltung",
      "icon": "Feather"
     },
     {
      "t": "Ursache suchen",
      "s": "Schmerz? Angst? Harndrang?",
      "icon": "Search"
     },
     {
      "t": "Sicherheit",
      "s": "Hilfe holen",
      "icon": "ShieldCheck"
     },
     {
      "t": "Melden",
      "s": "Dokumentation, CIRS",
      "icon": "ClipboardList"
     }
    ]
   }
  ]
 },
 {
  "id": "g-settings-ueberleitung",
  "group": "ausbildung",
  "area": "system",
  "title": "Pflege-Settings, Überleitung und Case Management",
  "icon": "Network",
  "ar": "الرعاية تتم في أماكن مختلفة: مستشفى (حاد)، دار رعاية طويلة الأمد، رعاية منزلية، رعاية نهارية وقصيرة الأمد. عند الانتقال بينها تُضمن الاستمرارية بالتقرير التمريضي وإدارة الخروج وإدارة الحالة (Case Management).",
  "blocks": [
   {
    "h": "Settings der Pflege",
    "li": [
     "Akutpflege im Krankenhaus: kurze Verweildauer, Diagnostik und Behandlung, Ziel ist Heilung oder Stabilisierung.",
     "Langzeitpflege (Pflegeheim): dauerhaftes Zuhause, Ziel sind Lebensqualität, Selbstständigkeit und Alltagsgestaltung.",
     "Ambulante Pflege: Pflegedienst kommt nach Hause; Pflege, Behandlungspflege (z. B. Injektionen, Verbände), Beratung.",
     "Teilstationär: Tagespflege oder Nachtpflege. Kurzzeitpflege: begrenzte Zeit, z. B. nach Krankenhaus oder wenn pflegende Angehörige ausfallen.",
     "Weitere: Rehabilitation, Palliativstation, Hospiz, betreutes Wohnen."
    ]
   },
   {
    "h": "Überleitung und Entlassmanagement",
    "li": [
     "Beim Wechsel zwischen Einrichtungen darf Information nicht verloren gehen: Überleitungsbogen/Pflegebericht, Arztbrief, Medikamentenplan, Hilfsmittel.",
     "Entlassmanagement im Krankenhaus plant früh: Pflegebedarf einschätzen, Angehörige schulen, Pflegedienst/Heimplatz, Hilfsmittel und Rezepte organisieren.",
     "Pflegeüberleitung ist ein Zeichen von Qualität; fehlerhafte Übergaben gehören zu den häufigen Risiken für Patienten.",
     "Der Patient und seine Angehörigen werden einbezogen: Wünsche, Erwartungen, Sorgen."
    ]
   },
   {
    "h": "Case Management",
    "li": [
     "Ein Case Manager koordiniert die Versorgung komplexer Fälle über Berufsgruppen und Einrichtungen hinweg.",
     "Schritte: Bedarf einschätzen, Ziele und Hilfeplan, Leistungen vermitteln, Umsetzung begleiten, Ergebnis prüfen.",
     "Ziel: Versorgungsbrüche vermeiden, Doppelarbeit verhindern, Selbstbestimmung stärken."
    ]
   },
   {
    "h": "Pflegesysteme (Organisation)",
    "li": [
     "Funktionspflege: Aufgaben werden nach Tätigkeiten verteilt (einer verteilt Medikamente, einer wäscht). Effizient, aber stückelnd.",
     "Zimmer-/Gruppenpflege: ein Team oder eine Pflegekraft betreut mehrere Patienten ganzheitlich in einem Bereich.",
     "Bezugspflege/Primary Nursing: feste Pflegekraft ist für einen Patienten verantwortlich, von Aufnahme bis Entlassung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Pflege-Settings im Vergleich",
    "head": [
     "Setting",
     "Ziel",
     "Dauer"
    ],
    "rows": [
     [
      "Akutpflege",
      "Heilung, Stabilisierung",
      "kurz"
     ],
     [
      "Langzeitpflege",
      "Lebensqualität",
      "dauerhaft"
     ],
     [
      "Ambulant",
      "Versorgung zu Hause",
      "fortlaufend"
     ],
     [
      "Kurzzeitpflege",
      "Überbrückung",
      "begrenzt"
     ]
    ]
   },
   {
    "kind": "flow",
    "title": "Entlassmanagement",
    "steps": [
     {
      "t": "Bedarf erkennen",
      "s": "früh bei Aufnahme",
      "icon": "Search"
     },
     {
      "t": "Planen",
      "s": "Dienst, Heim, Hilfsmittel",
      "icon": "ClipboardList"
     },
     {
      "t": "Schulen",
      "s": "Patient und Angehörige",
      "icon": "Users"
     },
     {
      "t": "Überleiten",
      "s": "Bogen, Arztbrief, Medikamente",
      "icon": "Network"
     }
    ]
   }
  ]
 },
 {
  "id": "g-paediatrie-familie",
  "group": "ausbildung",
  "area": "lebensphasen",
  "title": "Kinderkrankenpflege: Besonderheiten und familienzentrierte Pflege",
  "icon": "Baby",
  "ar": "الطفل ليس بالغاً صغيراً: له فيزيولوجيا وحاجات نمائية خاصة. الرعاية المتمحورة حول الأسرة تُشرك الوالدين. الجرعات حسب الوزن، والتواصل يناسب العمر، وحماية الطفل (Kinderschutz) واجب.",
  "blocks": [
   {
    "h": "Kinder sind keine kleinen Erwachsenen",
    "li": [
     "Normwerte (Puls, Atemfrequenz, Blutdruck, Temperatur) ändern sich mit dem Alter. Säuglinge atmen und schlagen schneller.",
     "Kinder verlieren schnell Flüssigkeit und Wärme und können sich innerhalb kurzer Zeit verschlechtern.",
     "Medikamente werden nach Körpergewicht berechnet und doppelt kontrolliert (Vier-Augen-Prinzip).",
     "Fieber, Durchfall, Atemnot und Trinkverweigerung sind bei Säuglingen früh ernst zu nehmen."
    ]
   },
   {
    "h": "Entwicklung und Kommunikation",
    "li": [
     "Säugling: Bindung, Hautkontakt, Rhythmus, Beruhigung durch Stimme und Wiegen.",
     "Kleinkind: will selbst machen, Trotzphase, Angst vor Trennung. Einfache Erklärungen, Spiel und Wahlmöglichkeiten.",
     "Schulkind: Warum-Fragen, Fairness; kindgerecht erklären, Mitbestimmung geben.",
     "Jugendliche: Privatsphäre, Selbstbestimmung, Körperbild; ehrlich und respektvoll informieren.",
     "Kinder nie belügen ('tut gar nicht weh'); ehrlich sagen, was kommt, und Mut machen."
    ]
   },
   {
    "h": "Familienzentrierte Pflege",
    "li": [
     "Eltern sind Experten für ihr Kind und werden als Partner einbezogen, auch beim Rooming-in.",
     "Eltern anleiten (z. B. Inhalation, Sondenernährung, Insulin), Ängste ernst nehmen, Geschwister nicht vergessen.",
     "Trennung vermeiden, Besuchszeiten flexibel, vertraute Gegenstände (Kuscheltier) erlauben.",
     "Schmerz bei Kindern erfassen mit altersgerechten Skalen (z. B. Gesichterskala) und behandeln."
    ]
   },
   {
    "h": "Kinderschutz",
    "li": [
     "Warnzeichen: Verletzungen, die nicht zur Erklärung passen, Verletzungen in unterschiedlichem Alter, auffällige Scheu, Vernachlässigung.",
     "Verdacht ernst nehmen, sachlich dokumentieren, Ärzte und Leitung informieren; es gibt Kinderschutzfachkräfte.",
     "Nicht allein mit den Eltern konfrontieren, sondern über das vorgesehene Verfahren handeln."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Altersgerecht begleiten",
    "cols": [
     {
      "t": "Kleinkind",
      "items": [
       "Spiel, einfache Worte",
       "Eltern dabei",
       "Wahl geben"
      ],
      "icon": "Baby"
     },
     {
      "t": "Jugendlicher",
      "items": [
       "Privatsphäre",
       "ehrlich informieren",
       "mitentscheiden"
      ],
      "icon": "User"
     }
    ]
   }
  ]
 },
 {
  "id": "trisomie-21",
  "group": "krank",
  "area": "nerven",
  "title": "Trisomie 21 (Down-Syndrom)",
  "icon": "Dna",
  "ar": "متلازمة داون سببها وجود نسخة زائدة من الصبغي 21. تشمل ملامح الوجه المميزة وضعف توتر العضلات وتأخراً في النمو وعيوباً قلبية. الرعاية: دعم مبكر، متابعة القلب والسمع والغدة الدرقية، ودعم الأسرة وتشجيع الاستقلالية.",
  "blocks": [
   {
    "h": "Ursache und Häufigkeit",
    "li": [
     "Das Chromosom 21 ist dreifach statt zweifach vorhanden (Trisomie 21). Es ist die häufigste Chromosomenstörung bei Lebendgeborenen.",
     "Das Risiko steigt mit dem Alter der Mutter, kann aber in jedem Alter auftreten.",
     "Die Diagnose kann vorgeburtlich (Ultraschall, Bluttest, Fruchtwasseruntersuchung) oder nach der Geburt gestellt werden."
    ]
   },
   {
    "h": "Typische Merkmale",
    "li": [
     "Gesicht: schräg stehende Lidachsen, flache Nasenwurzel, kleine Ohren, große Zunge; Vierfingerfurche an der Hand.",
     "Muskelhypotonie (schlaffer Muskeltonus), Trinkschwäche beim Säugling, Entwicklungsverzögerung.",
     "Geistige Beeinträchtigung unterschiedlichen Grades; Persönlichkeit und Fähigkeiten sind sehr verschieden."
    ]
   },
   {
    "h": "Häufige Begleiterkrankungen",
    "li": [
     "Herzfehler (etwa jedes zweite Kind), z. B. Septumdefekte.",
     "Hörstörungen und Mittelohrentzündungen, Sehprobleme.",
     "Schilddrüsenunterfunktion, Verdauungsstörungen, erhöhtes Leukämie-Risiko, Infektanfälligkeit.",
     "Im höheren Alter häufiger Demenz (Alzheimer-Typ)."
    ]
   },
   {
    "h": "Pflege und Begleitung",
    "li": [
     "Frühförderung: Physiotherapie, Logopädie, Ergotherapie von Anfang an.",
     "Beim Stillen und Füttern Geduld, besondere Trinktechniken, Gewicht beobachten.",
     "Regelmäßige Kontrollen: Herz, Gehör, Sehen, Schilddrüse.",
     "Infektionsprophylaxe: Impfungen, Hygiene, auf Atemwegsinfekte achten.",
     "Eltern beraten und entlasten (Selbsthilfegruppen), Selbstständigkeit fördern, Teilhabe in Schule und Beruf ermöglichen. Respektvoll sprechen, nicht auf das Syndrom reduzieren."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Down-Syndrom auf einen Blick",
    "items": [
     {
      "t": "Ursache",
      "s": "Chromosom 21 dreifach",
      "icon": "Dna"
     },
     {
      "t": "Muskeln",
      "s": "Hypotonie",
      "icon": "Feather"
     },
     {
      "t": "Herz",
      "s": "oft Herzfehler",
      "icon": "Heart"
     },
     {
      "t": "Förderung",
      "s": "früh und lebenslang",
      "icon": "Sprout"
     }
    ]
   }
  ]
 },
 {
  "id": "cvi",
  "group": "krank",
  "area": "herz",
  "title": "Chronisch venöse Insuffizienz (CVI)",
  "icon": "Droplet",
  "ar": "في القصور الوريدي المزمن لا يعود الدم من الساقين بكفاءة بسبب ضعف صمامات الأوردة أو مضخة العضلات. تظهر وذمة، ثقل، تصبغ، إكزيما وقد تتطور إلى قرحة الساق. العلاج: الضغط (ضمادات أو جوارب)، الحركة، رفع الساقين، والعناية بالجلد.",
  "blocks": [
   {
    "h": "Entstehung",
    "li": [
     "Das Blut fließt aus den Beinvenen nicht ausreichend zum Herzen zurück. Ursachen: defekte Venenklappen, Krampfadern, frühere Thrombose (postthrombotisches Syndrom), Bewegungsmangel.",
     "Risiko: langes Stehen oder Sitzen, Übergewicht, Schwangerschaft, höheres Alter, Familienanlage.",
     "Die Venenpumpe (Wadenmuskel und Gelenke) drückt Blut herzwärts. Fehlt Bewegung, staut sich das Blut."
    ]
   },
   {
    "h": "Beschwerden und Stadien",
    "li": [
     "Schwere- und Spannungsgefühl, Wadenkrämpfe nachts, Ödeme am Abend, Besserung beim Hochlegen.",
     "Hautveränderungen: braune Verfärbung, Verhärtung, Stauungsekzem, weiße Atrophie.",
     "Spätfolge: offenes Bein (Ulcus cruris venosum), meist am Innenknöchel."
    ]
   },
   {
    "h": "Behandlung",
    "li": [
     "Kompression ist die Basis: Kompressionsverband oder Kompressionsstrümpfe.",
     "Bewegung (Gehen, Fußwippen), Beine hochlagern, Gewicht reduzieren, langes Stehen und Sitzen vermeiden.",
     "Operative oder verödende Verfahren bei Krampfadern."
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Kompressionsverband anlegen: am Morgen vor dem Aufstehen, von den Zehen bis unter das Knie, faltenfrei, mit abgestufter Spannung (unten stärker).",
     "Kontraindikation beachten: fortgeschrittene arterielle Durchblutungsstörung (pAVK). Vor Kompression Fußpulse prüfen oder ärztlich abklären lassen.",
     "Haut pflegen (rückfettend), Verletzungen vermeiden, Beine täglich kontrollieren, Schuhe passend.",
     "Patienten schulen: Beine hochlagern, Bewegung, Strümpfe täglich tragen, bei Schmerzen, Rötung oder einseitiger Schwellung sofort melden (Thrombose-Verdacht)."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Von der Stauung zum offenen Bein",
    "steps": [
     {
      "t": "Venenschwäche",
      "s": "Klappen defekt",
      "icon": "Droplet"
     },
     {
      "t": "Stauung",
      "s": "Ödem, Schwere",
      "icon": "Waves"
     },
     {
      "t": "Hautschäden",
      "s": "Verfärbung, Ekzem",
      "icon": "Hand"
     },
     {
      "t": "Ulcus cruris",
      "s": "Innenknöchel",
      "icon": "Bandage"
     }
    ]
   }
  ]
 },
 {
  "id": "larynxkarzinom",
  "group": "krank",
  "area": "atmung",
  "title": "Kehlkopfkrebs (Larynxkarzinom) und Tracheostoma",
  "icon": "Cigarette",
  "ar": "سرطان الحنجرة يرتبط بالتدخين والكحول. العرض الأول بحة صوت مستمرة. العلاج جراحة أو إشعاع أو كيماوي. بعد استئصال الحنجرة يبقى فغرة قصبة دائمة وفقدان الصوت الطبيعي. التمريض: العناية بالفغرة، الشفط، الاتصال البديل والدعم النفسي.",
  "blocks": [
   {
    "h": "Entstehung und Symptome",
    "li": [
     "Hauptrisikofaktoren: Rauchen und Alkohol, besonders in Kombination. Männer sind häufiger betroffen.",
     "Frühzeichen: Heiserkeit, die länger als etwa drei Wochen anhält, Räusperzwang, Fremdkörpergefühl.",
     "Spätzeichen: Schluckbeschwerden, Atemnot, Husten mit Blut, Lymphknoten am Hals.",
     "Diagnose: Kehlkopfspiegelung, Gewebeprobe, Bildgebung."
    ]
   },
   {
    "h": "Therapie",
    "li": [
     "Frühe Tumoren: Laserentfernung oder Strahlentherapie, oft Stimme erhaltbar.",
     "Fortgeschritten: teilweise oder vollständige Kehlkopfentfernung (Laryngektomie), oft mit Neck Dissection (Lymphknoten), Strahlen- und Chemotherapie.",
     "Nach der vollständigen Laryngektomie: Luftröhre wird am Hals eingenäht (dauerhaftes Tracheostoma), Atemweg und Speiseweg sind getrennt."
    ]
   },
   {
    "h": "Leben nach der Laryngektomie",
    "li": [
     "Atmung nur über das Stoma: Nase kann Luft nicht mehr erwärmen und befeuchten, Geruch und Geschmack sind eingeschränkt.",
     "Stimme: Ersatzstimme durch Ösophagusstimme, Stimmprothese (Shunt-Ventil) oder elektronische Sprechhilfe; Logopädie ist zentral.",
     "Duschen und Schwimmen nur mit Schutz; kein Wasser ins Stoma.",
     "Seelische Belastung: Verlust der Stimme, verändertes Aussehen, soziale Scheu. Psychologische Hilfe und Selbsthilfegruppen (Kehlkopflosenverband)."
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Atemwegssicherung: Stoma freihalten, Sekret nach Bedarf absaugen oder abhusten lassen, Luft befeuchten (Feuchte Nase, Stomafilter).",
     "Stomapflege: Haut um das Stoma reinigen und beobachten, Krusten lösen, Kanüle nach Standard pflegen.",
     "Beobachten: Atemnot, Blutung, Schwellung, Hautrötung, Fieber, Pneumonie-Zeichen.",
     "Kommunikation: Schreibtafel, Karten, Gesten, genug Zeit; Klingel immer in Reichweite, Notfallsystem sicherstellen.",
     "Ernährung: Schluckfähigkeit prüfen, ggf. Sondenkost und Logopädie, Gewicht überwachen.",
     "Prophylaxen (Pneumonie, Soor), Schmerztherapie, Rauchstopp und Alkoholverzicht beraten, psychische Begleitung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Teilweise oder vollständige Entfernung",
    "cols": [
     {
      "t": "Teilresektion",
      "items": [
       "Stimme oft erhalten",
       "kein dauerhaftes Stoma"
      ],
      "icon": "Scissors"
     },
     {
      "t": "Laryngektomie",
      "items": [
       "Dauerhaftes Stoma",
       "Ersatzstimme nötig",
       "Atem über Hals"
      ],
      "icon": "Cigarette"
     }
    ]
   }
  ]
 },
 {
  "id": "mammakarzinom",
  "group": "krank",
  "area": "geschlecht",
  "title": "Brustkrebs (Mammakarzinom)",
  "icon": "Ribbon",
  "ar": "سرطان الثدي أكثر سرطان شيوعاً عند النساء. أول علامة كتلة قاسية غير متحركة، تغيرات جلد أو الحلمة. التشخيص: تصوير الثدي والخزعة. العلاج جراحة مع إشعاع وعلاج دوائي. التمريض: الوقاية من الوذمة اللمفية في الذراع، العناية بالجرح، والدعم النفسي.",
  "blocks": [
   {
    "h": "Grundlagen",
    "li": [
     "Häufigste Krebserkrankung der Frau. Risiko: höheres Alter, familiäre Belastung (z. B. BRCA-Gene), Hormone, Übergewicht, Alkohol. Selten sind auch Männer betroffen.",
     "Erste Zeichen: derber, kaum verschieblicher Knoten, Hauteinziehung, Orangenhaut, Einziehung oder Sekret der Brustwarze, Größen- und Formunterschied.",
     "Früherkennung: Selbstabtasten, ärztliche Untersuchung, Mammographie (Screening ab etwa 50 Jahren), Ultraschall.",
     "Absicherung der Diagnose durch Gewebeprobe (Biopsie)."
    ]
   },
   {
    "h": "Therapie",
    "li": [
     "Operation: wenn möglich brusterhaltend mit Bestrahlung, sonst Entfernung der Brust (Mastektomie) mit Wiederaufbau möglich. Wächterlymphknoten wird untersucht.",
     "Zusätzlich je nach Tumor: Strahlentherapie, Chemotherapie, Antihormontherapie, Antikörper.",
     "Nachsorge über Jahre; Psychoonkologie und Reha."
    ]
   },
   {
    "h": "Pflege nach der Operation",
    "li": [
     "Wunde und Drainagen beobachten (Menge und Aussehen), Schmerzen lindern, Nachblutung erkennen.",
     "Lymphödem vorbeugen: Am operierten Arm keine Blutdruckmessung, keine Blutentnahme oder Injektion, kein Tragen schwerer Lasten, Verletzungen und Sonnenbrand vermeiden, Ödemzeichen melden.",
     "Arm früh bewegen (nach ärztlicher Anordnung), Krankengymnastik, Schulterbeweglichkeit erhalten.",
     "Seelische Begleitung: Körperbild, Angst, Partnerschaft. Gespräche anbieten, Selbsthilfegruppen und Beratung (Brustkrebszentrum, Breast Care Nurse).",
     "Chemotherapie: Übelkeit, Haarausfall, Infektionsschutz, Mundpflege (siehe Onkologie)."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Weg von der Entdeckung zur Nachsorge",
    "steps": [
     {
      "t": "Entdeckung",
      "s": "Knoten, Screening",
      "icon": "Search"
     },
     {
      "t": "Diagnose",
      "s": "Bildgebung, Biopsie",
      "icon": "Microscope"
     },
     {
      "t": "Operation",
      "s": "brusterhaltend/Mastektomie",
      "icon": "Scissors"
     },
     {
      "t": "Zusatztherapie",
      "s": "Strahlen, Chemo, Hormone",
      "icon": "Pill"
     },
     {
      "t": "Nachsorge",
      "s": "Jahre, Psyche",
      "icon": "Heart"
     }
    ]
   }
  ]
 },
 {
  "id": "colitis-ulcerosa",
  "group": "krank",
  "area": "verdauung",
  "title": "Colitis ulcerosa",
  "icon": "Orbit",
  "ar": "التهاب القولون التقرحي التهاب مزمن يصيب المستقيم والقولون فقط ويكون على شكل نوبات مع إسهال دموي مخاطي وألم مغص. الفرق عن Crohn: يصيب الطبقة السطحية بشكل متصل ويبدأ من المستقيم. العلاج أدوية مضادة للالتهاب وأحياناً استئصال القولون. التمريض: مراقبة البراز والسوائل والتغذية والدعم النفسي.",
  "blocks": [
   {
    "h": "Was ist Colitis ulcerosa?",
    "li": [
     "Chronisch-entzündliche Darmerkrankung (CED), die in Schüben verläuft. Betroffen sind nur Mastdarm und Dickdarm; die Entzündung liegt oberflächlich in der Schleimhaut und breitet sich zusammenhängend vom Rektum aus.",
     "Beginn häufig im jungen Erwachsenenalter. Ursache unklar: Zusammenspiel von Veranlagung, Immunsystem und Umwelt. Rauchen schützt eher bei Colitis, schadet aber bei Crohn und ist keine Empfehlung."
    ]
   },
   {
    "h": "Symptome",
    "li": [
     "Blutig-schleimige Durchfälle, oft 10–20 Stuhlgänge am Tag in schweren Schüben, Stuhldrang (Tenesmen).",
     "Krampfartige Bauchschmerzen, Fieber, Gewichtsverlust, Müdigkeit, Blutarmut.",
     "Außerhalb des Darms: Gelenkschmerzen, Hautveränderungen, Augenentzündung, Gallengangsentzündung (PSC).",
     "Komplikationen: toxisches Megakolon (Notfall), starke Blutung, Darmdurchbruch, erhöhtes Darmkrebsrisiko."
    ]
   },
   {
    "h": "Unterschiede zu Morbus Crohn",
    "li": [
     "Colitis: nur Dickdarm, durchgehender Befall, Schleimhaut. Crohn: gesamter Verdauungstrakt möglich, Befall in Abschnitten ('Skip Lesions'), alle Wandschichten.",
     "Colitis: blutiger Durchfall im Vordergrund. Crohn: häufig Bauchschmerz, Fisteln, Abszesse, Mangelernährung.",
     "Bei Colitis kann die Operation (Entfernung des Dickdarms) heilen, bei Crohn nicht."
    ]
   },
   {
    "h": "Therapie",
    "li": [
     "Im Schub: Mesalazin (5-ASA), bei stärkeren Schüben Kortison; Immunsuppressiva und Biologika bei schwerem Verlauf.",
     "Dauertherapie zur Rückfallverhütung. Darmspiegelungen zur Kontrolle und Krebsvorsorge.",
     "Operation bei Komplikationen oder Therapieversagen: Kolektomie, oft mit Pouch (Reservoir) oder Anus praeter."
    ]
   },
   {
    "h": "Pflege",
    "li": [
     "Stuhl beobachten und dokumentieren (Häufigkeit, Blut, Schleim, Menge), Bilanzierung und Flüssigkeitsersatz.",
     "Hautpflege im Analbereich (Wundschutz, Intimpflege), Toilette nah, Rufklingel erreichbar, Privatsphäre.",
     "Ernährung: individuell, im Schub leicht verdaulich und ballaststoffarm, ausreichend Kalorien, ggf. Zusatznahrung; Gewichtskontrolle.",
     "Warnzeichen melden: starke Bauchschmerzen, harter aufgeblähter Bauch, Fieber, Kreislaufprobleme.",
     "Psychische Belastung ernst nehmen, Stressabbau und Selbsthilfegruppen (DCCV) empfehlen; Stomaberatung bei Anus praeter."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Colitis ulcerosa und Morbus Crohn",
    "head": [
     "Merkmal",
     "Colitis ulcerosa",
     "Crohn"
    ],
    "rows": [
     [
      "Ort",
      "Dickdarm",
      "gesamter Darm"
     ],
     [
      "Befall",
      "durchgehend",
      "abschnittsweise"
     ],
     [
      "Tiefe",
      "Schleimhaut",
      "alle Schichten"
     ],
     [
      "Leitsymptom",
      "blutiger Durchfall",
      "Bauchschmerz, Fisteln"
     ]
    ]
   }
  ]
 },
 {
  "id": "verbrennung",
  "group": "krank",
  "area": "haut",
  "title": "Verbrennung und Verbrühung",
  "icon": "Flame",
  "ar": "الحروق تُصنَّف حسب العمق (درجات 1–3) والمساحة (قاعدة التسعات). الإسعاف: تبريد الجرح بماء فاتر قصير، ثم تغطية معقمة. الخطر الأكبر: الصدمة بفقد السوائل، الإنتان وضرر مجرى التنفس. في المستشفى: تعويض السوائل ومعالجة الألم والعناية بالجروح.",
  "blocks": [
   {
    "h": "Ursachen und Tiefe",
    "li": [
     "Verbrennung durch Feuer, Hitze, Strahlung, Strom oder Chemikalien; Verbrühung durch heiße Flüssigkeit oder Dampf (häufig bei Kleinkindern).",
     "Grad 1: nur Oberhaut, Rötung, schmerzhaft, heilt ohne Narbe.",
     "Grad 2a/2b: Blasenbildung, sehr schmerzhaft (2a); tiefer, weniger schmerzhaft, Narbenbildung möglich (2b).",
     "Grad 3: Haut zerstört, weißlich bis lederartig-schwarz, schmerzlos, weil Nerven zerstört sind; OP mit Hauttransplantation nötig."
    ]
   },
   {
    "h": "Ausdehnung und Schweregrad",
    "li": [
     "Neunerregel beim Erwachsenen: Kopf 9 %, jeder Arm 9 %, Rumpf vorne 18 %, Rumpf hinten 18 %, jedes Bein 18 %, Genitalbereich 1 %.",
     "Kinder haben einen größeren Kopf und kleinere Beine; es gelten angepasste Tabellen. Handfläche des Patienten entspricht etwa 1 %.",
     "Brandverletzungszentrum bei: Grad 2b/3 größerer Fläche, Gesicht/Hände/Genitalien, Kinder, Inhalationstrauma, Stromunfall."
    ]
   },
   {
    "h": "Erste Hilfe",
    "li": [
     "Brennende Kleidung löschen, Gefahr beenden (Eigenschutz).",
     "Kühlen mit lauwarmem Wasser (ca. 15–20 °C) für etwa 10–15 Minuten bei kleinen Flächen; bei großen Flächen und Kindern wegen Unterkühlung nur kurz oder gar nicht.",
     "Verklebte Kleidung nicht abziehen, Schmuck entfernen, Wunde keimfrei abdecken, Notruf wählen. Keine Salben, Mehl, Zahnpasta oder Eis.",
     "Schockprophylaxe: Wärmeerhalt (Rettungsdecke), beruhigen, Atmung kontrollieren."
    ]
   },
   {
    "h": "Brandkrankheit und Komplikationen",
    "li": [
     "Große Verbrennungen führen zu Flüssigkeitsverlust (Verbrennungsödem), Volumenmangelschock, Nierenschäden und Auskühlung.",
     "Inhalationstrauma: Rußspuren, Heiserkeit, verbrannte Nasenhaare, Atemnot; frühe Intubation kann nötig sein.",
     "Hohe Infektionsgefahr (Wundinfektion, Sepsis), Narbenkontrakturen, starke Schmerzen, psychische Belastung (Trauma)."
    ]
   },
   {
    "h": "Pflege und Therapie",
    "li": [
     "Intensive Überwachung: Vitalzeichen, Ausscheidung (Urin-Stundenmenge), Flüssigkeitsbilanz; Infusionstherapie nach Formel (z. B. Parkland).",
     "Schmerztherapie und Sedierung vor Verbandwechsel, Wärme im Raum (Auskühlung vermeiden).",
     "Strenge Hygiene, steriles Arbeiten, ggf. Isolation; Wundversorgung mit speziellen Verbänden, Hauttransplantation.",
     "Lagerung zur Kontrakturenprophylaxe, frühe Mobilisation, Narbenpflege, Kompressionskleidung.",
     "Ernährung: hoher Kalorien- und Eiweißbedarf; psychische Begleitung, Prävention im Haushalt (Kinder: Wasserkocher, Herdgriffe, Badewassertemperatur)."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Verbrennungsgrade",
    "head": [
     "Grad",
     "Aussehen",
     "Schmerz"
    ],
    "rows": [
     [
      "1",
      "Rötung",
      "stark"
     ],
     [
      "2a",
      "Blasen, rosa",
      "sehr stark"
     ],
     [
      "2b",
      "Blasen, blass",
      "vermindert"
     ],
     [
      "3",
      "weiß/schwarz, trocken",
      "keiner"
     ]
    ]
   },
   {
    "kind": "bar",
    "title": "Neunerregel (Erwachsene)",
    "parts": [
     {
      "t": "Kopf",
      "s": "9 %",
      "w": 9
     },
     {
      "t": "Arme",
      "s": "2 × 9 %",
      "w": 18
     },
     {
      "t": "Rumpf",
      "s": "2 × 18 %",
      "w": 36
     },
     {
      "t": "Beine",
      "s": "2 × 18 %",
      "w": 36
     },
     {
      "t": "Genital",
      "s": "1 %",
      "w": 1
     }
    ]
   }
  ]
 }
];
