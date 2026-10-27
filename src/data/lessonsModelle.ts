/**
 * Pflegewissenschaft, Pflegetheorien und Pflegemodelle.
 * Lernhilfe der App in einfachem Deutsch, in eigenen Worten zusammengefasst – KEIN Buchtext.
 * Quelle zum Nachlesen: Thieme „I care – PflegeExamen KOMPAKT“, Kap. 4.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const MODELLE_LESSONS: Lesson[] = [
  {
    id: "pflegewissenschaft", group: "ausbildung", area: "modelle", title: "Pflegewissenschaft, Forschung und EBN", emoji: "🔬",
    ar: "علم التمريض: نظرية، بحث، تعليم. البحث الكمي (أرقام، استنباط) والنوعي (مجموعات صغيرة، استقراء). معايير الجودة: الموضوعية، الثبات، الصدق. التمريض المبني على الأدلة (EBN) في 6 خطوات.",
    blocks: [
      B("Ziel und Säulen", "Die Pflegewissenschaft will Fragen und Probleme aus dem Pflegealltag lösen.", "Sie steht auf drei Säulen: Theorie, Forschung und Lehre."),
      B("Ebenen der Pflegeforschung", "Mikro: Pflegepraxis, z. B. Umgang mit Menschen mit Demenz.", "Meso: Organisation, z. B. Entlassungsmanagement.", "Makro: Pflegepolitik, z. B. Folgen der Pflegeversicherung.", "Dazu kommt die historische Pflegeforschung."),
      B("Quantitativ oder qualitativ?", "Quantitativ: viele Daten, Zahlen, standardisiert. Ziel: Hypothesen prüfen und allgemeine Aussagen treffen. Vom Allgemeinen auf den Einzelfall = Deduktion.", "Qualitativ: kleine Gruppen, Sicht der Betroffenen. Ziel: Phänomene verstehen und Theorien bilden. Vom Einzelfall auf das Allgemeine = Induktion."),
      B("Gütekriterien", "Quantitativ: Objektivität (unabhängig, standardisiert), Reliabilität (misst zuverlässig), Validität (misst das, was gemessen werden soll).", "Qualitativ: Glaubwürdigkeit, Angemessenheit, Übertragbarkeit.", "Für beide gilt Transparenz: Das Vorgehen ist nachvollziehbar beschrieben."),
      B("Rolle der Pflegenden", "Forschungsberichte lesen und in die Praxis übernehmen.", "Bei Studien mitarbeiten, z. B. als Study Nurse.", "Beurteilen, ob eine Idee im Alltag machbar ist."),
      B("Evidence-based Nursing (EBN) in 6 Schritten", "1 Aufgabe klären: Ist es ein pflegerisches Problem?", "2 Präzise klinische Frage stellen (z. B. nach dem PIKE-Schema).", "3 Literatur recherchieren (Datenbanken, Fachzeitschriften).", "4 Ergebnisse kritisch bewerten, z. B. Studiendesign wie randomisierte kontrollierte Studien (RCT).", "5 Umsetzen und anpassen.", "6 Wirkung bewerten.", "EBN verbindet Studienwissen mit Erfahrung und der Situation des Patienten. Begründetes Abweichen von Empfehlungen ist erlaubt."),
    ],
  },
  {
    id: "theorien-grundlagen", group: "ausbildung", area: "modelle", title: "Pflegetheorien: Überblick und Reichweite", emoji: "🧩",
    ar: "النظريات التمريضية: كبيرة المدى (مجردة)، متوسطة المدى (نماذج)، صغيرة المدى (مفاهيم عملية). ثلاث مدارس: نظريات الحاجات، التفاعل، النتائج.",
    blocks: [
      B("Theorie, Modell, Konzept", "Theorie: logisch verknüpfte Aussagen, die erklären, was Pflege ist (z. B. Orem).", "Modell: vereinfachte Abbildung einer Theorie. Es macht Aussagen zu Mensch, Gesundheit und Krankheit, Pflege und Umwelt.", "Konzept: kleinster Baustein mit Teilzielen und verbindlichen Maßnahmen. Empirische Konzepte sind messbar (Schmerz, Mobilität), abstrakte nicht (Lebensqualität)."),
      B("Reichweite", "Große Reichweite: abstrakt, umfassend, erklärt, was Pflege einzigartig macht.", "Mittlere Reichweite: einzelne Pflegesituationen, anwendbar, aber ohne konkrete Maßnahmen vorzugeben.", "Geringe Reichweite: situationsnah, ein Praxisgebiet, gibt zielgerichtete Maßnahmen vor."),
      B("Drei Schwerpunkte großer Theorien", "Bedürfnistheorien (Was tun Pflegende?): Bedürfnisse erkennen und beim Erfüllen helfen. Beispiele: Henderson, Orem, Roper-Logan-Tierney, Krohwinkel.", "Interaktionstheorien (Wie tun Pflegende es?): Beziehung steht im Mittelpunkt. Beispiele: Peplau, Orlando.", "Ergebnistheorien (Wofür tun Pflegende es?): Der Mensch ist im Ungleichgewicht mit der Umwelt, Pflege hilft beim Wiederherstellen."),
      B("Vier Schlüsselkonzepte", "Person, Umwelt, Wohlbefinden (Gesundheit) und pflegerisches Handeln. Wie stark sie gewichtet werden, zeigt das Pflegeverständnis der Theorie."),
      B("Prüfungstipp", "Ordne jeder Theoretikerin ihren Schwerpunkt zu: Orem = Selbstpflege, Roper-Logan-Tierney = Lebensaktivitäten, Krohwinkel = ABEDL, Peplau = Beziehung, Corbin und Strauss = chronische Krankheit, Friedemann = Familie, Leininger = Kultur."),
    ],
  },
  {
    id: "orem", group: "ausbildung", area: "modelle", title: "Orem: Selbstpflegedefizit-Theorie", emoji: "🛠️",
    ar: "نظرية أوريم: ثلاث نظريات فرعية: الرعاية الذاتية، عجز الرعاية الذاتية، نظام التمريض. عندما تفوق الحاجة القدرة يحدث العجز فيتدخل الممرض: تعويض كامل، جزئي، أو دعم وتعليم.",
    blocks: [
      B("Drei Teiltheorien", "Theorie der Selbstpflege.", "Theorie des Selbstpflegedefizits.", "Theorie des Pflegesystems."),
      B("Selbstpflege", "Menschen sorgen selbst für Gesundheit und Wohlbefinden (z. B. Körperpflege).", "Selbstpflegebedarf entsteht aus allgemeinen, entwicklungsbedingten und gesundheitsbedingten Erfordernissen.", "Dependenzpflege: Wer sich nicht selbst versorgen kann (Kind, alter oder kranker Mensch), wird von anderen unterstützt.", "Bedingungsfaktoren wie Alter, Geschlecht, Gesundheitszustand, Kultur, Familie, Umwelt und Ressourcen beeinflussen den Bedarf."),
      B("Selbstpflegedefizit", "Es liegt vor, wenn der aktuelle Bedarf größer ist als die Fähigkeit, ihn zu decken.", "Das Defizit kann teilweise oder vollständig sein.", "Gründe: wenig Wissen, eingeschränkte Urteilsfähigkeit oder eingeschränkte Handlungsabläufe."),
      B("Drei Pflegesysteme", "Vollständig kompensatorisch: Die Pflegeperson übernimmt alles, z. B. Körperpflege bei Intensivpatienten.", "Teilweise kompensatorisch: Pflegeperson und Patient teilen sich die Aufgaben.", "Unterstützend-erzieherisch: Der Patient kann es, braucht aber Anleitung und Beratung, z. B. Orientierungshilfe bei Demenz."),
      B("Methoden des Helfens", "Für andere handeln, führen und anleiten, körperlich und seelisch stützen, ein förderndes Umfeld schaffen, unterrichten."),
    ],
  },
  {
    id: "roper-logan-tierney", group: "ausbildung", area: "modelle", title: "Roper-Logan-Tierney: Lebensaktivitäten", emoji: "🔄",
    ar: "نموذج روبر ولوغان وتيرني: 12 نشاطاً حياتياً (LA)، مدى الحياة، الاعتماد/الاستقلال، 5 عوامل مؤثرة، الفردية. هدف الرعاية: أقل تغيير ممكن في أسلوب حياة الشخص.",
    blocks: [
      B("Modell des Lebens: fünf Konzepte", "12 Lebensaktivitäten (LA), Lebensspanne, Abhängigkeits-Unabhängigkeits-Kontinuum, Einflussfaktoren, Individualität im Leben."),
      B("Die 12 Lebensaktivitäten", "1 für eine sichere Umgebung sorgen, 2 kommunizieren, 3 atmen, 4 essen und trinken, 5 ausscheiden, 6 sich sauber halten und kleiden, 7 Körpertemperatur regulieren, 8 sich bewegen, 9 arbeiten und spielen, 10 Geschlechtlichkeit leben, 11 schlafen, 12 sterben.", "Alle sind wichtig, Atmen hat die höchste Priorität."),
      B("Fünf Einflussfaktoren", "Biologisch, psychologisch, soziokulturell, umgebungsabhängig, wirtschaftspolitisch."),
      B("Das Pflegemodell", "Ziel ist die Individualisierung der Pflege: Gewohnheiten des Menschen bleiben trotz Pflege möglichst erhalten.", "Der Pflegeprozess läuft in den Schritten Einschätzen, Planen, Durchführen, Bewerten.", "Pflege soll: Probleme verhindern, Probleme lösen, unlösbare Probleme lindern oder positiv bewältigen, Rückfälle verhindern und am Lebensende Wohlbefinden und Lebensqualität sichern."),
    ],
  },
  {
    id: "krohwinkel", group: "ausbildung", area: "modelle", title: "Krohwinkel: Fördernde Prozesspflege und ABEDL", emoji: "🌟",
    ar: "نموذج كروهفينكل (رعاية العملية المعززة): 13 نشاطاً (ABEDL)، الاهتمام يشمل المحتاج وأقاربه، الهدف: الاستقلال والرفاه. التواصل المعزز بالاحترام والتعاطف.",
    blocks: [
      B("Grundlagen", "Entwickelt aus einer Studie zur Pflege von Menschen mit Schlaganfall im Akutkrankenhaus.", "Eingesetzt in Altenhilfe, ambulanter Pflege, Akutpflege und Behindertenhilfe."),
      B("ABEDL", "Aktivitäten, Beziehungen und existenzielle Erfahrungen des Lebens (13 Bereiche), z. B. kommunizieren, sich bewegen, vitale Funktionen erhalten, sich pflegen, sich kleiden, ausscheiden, essen und trinken, ruhen und schlafen, sich beschäftigen, Sexualität leben, für Sicherheit sorgen, soziale Beziehungen gestalten, mit existenziellen Erfahrungen umgehen.", "Existenzielle Erfahrungen berühren den Kern eines Menschen und können in jedem Bereich vorkommen: fördernd, belastend oder gefährdend."),
      B("Wichtige Bausteine", "Primäre Einflussfaktoren: Umgebung mit Ressourcen und Defiziten.", "Primäres pflegerisches Interesse: die pflegebedürftige Person und ihre mitbetroffenen Bezugspersonen.", "Primäre Zielsetzung: Fähigkeiten erhalten, erlangen oder wiedererlangen, damit Unabhängigkeit und Wohlbefinden möglich sind.", "Die Wünsche und Vorstellungen der Person bestimmen die Hilfe, ob sie gesund wird, chronisch krank ist oder stirbt."),
      B("Pflegerisches Handeln", "Fördernde Kommunikation: echt, wertschätzend, einfühlsam.", "Unterstützen, anleiten, beaufsichtigen, informieren, beraten, begleiten."),
    ],
  },
  {
    id: "peplau", group: "ausbildung", area: "modelle", title: "Peplau: Beziehung zwischen Pflegeperson und Patient", emoji: "🤝",
    ar: "نظرية بيبلاو في العلاقات بين الأشخاص: أربع مراحل: التوجيه، التعرف، الاستخدام، الانفصال. الممرض يتقمص أدواراً (مرشد، معلم، مصدر معلومات) بأسلوب ديمقراطي. مناسبة للطب النفسي.",
    blocks: [
      B("Kernidee", "Die Beziehung zwischen Pflegeperson und Patient beeinflusst die Genesung. Peplau fragt, wie diese Beziehung aussehen soll.", "Besonders passend für die psychiatrische Pflege, aber überall anwendbar."),
      B("Die vier Phasen", "Orientierung: Fremde begegnen sich. Der Patient sucht Hilfe, die Pflegeperson hilft, das Problem zu verstehen und Spannungen abzubauen.", "Identifikation: Der Patient bindet sich an die Pflegeperson. Gefühle werden zugelassen, oft werden Ersatzrollen (Mutter, Geschwister) zugeschrieben.", "Nutzung: Der Patient pendelt zwischen Abhängigkeit und Unabhängigkeit. Die Pflegeperson berät, lehrt und informiert, mit demokratischem Führungsstil.", "Ablösung: Die Bindung löst sich, der Patient sorgt wieder selbst für sich. Beide handeln als Erwachsene."),
      B("Rollen der Pflegeperson", "Beraterin, Lehrende, Informationsquelle, Führungsperson. Rollen werden bewusst eingesetzt."),
    ],
  },
  {
    id: "corbin-strauss", group: "ausbildung", area: "modelle", title: "Corbin und Strauss: Krankheitsverlaufskurve", emoji: "📈",
    ar: "نموذج منحنى مسار المرض المزمن (Trajekt): 9 مراحل من ما قبل المرض إلى الاحتضار. كل منحنى فردي. التركيز على مجهود المواجهة (Bewältigungsarbeit) للمريض وأقاربه.",
    blocks: [
      B("Grundidee", "Chronische Krankheit ist wie eine Schiffsreise: Es gibt einen Plan, aber die Route kann abweichen.", "Im Mittelpunkt stehen Auswirkungen auf Betroffene und Bezugspersonen, nicht nur der Krankheitsverlauf.", "Bewältigungsarbeit: Alle Anstrengungen von Betroffenen, Angehörigen und Fachleuten gehören zum Verlauf.", "Theorie mittlerer Reichweite, wichtiger werdend durch mehr chronisch Kranke."),
      B("Neun Phasen", "Pretrajectory: Risiko für eine chronische Krankheit.", "Trajectory onset: erste Symptome, erste Auseinandersetzung mit der Diagnose.", "Stable: Symptome sind unter Kontrolle.", "Unstable: Symptome nicht kontrollierbar, oft Behandlung zu Hause.", "Acute: schwere Symptome oder Komplikationen, meist Krankenhaus.", "Crisis: lebensbedrohlich, Notfall oder Intensivstation.", "Comeback: Rückkehr zu einem akzeptablen Leben mit Grenzen.", "Downward: starker Abbau, Symptome kaum kontrollierbar.", "Dying: Zeit vor dem Tod."),
      B("Wichtig", "Jede Kurve ist anders in Form, Dauer und Bewältigungsarbeit.", "Die Kurve entsteht aus dem Wechsel von akuten, stabilen, instabilen und kritischen Phasen."),
    ],
  },
  {
    id: "friedemann-leininger", group: "ausbildung", area: "modelle", title: "Friedemann (Familie) und Leininger (Kultur)", emoji: "🌍",
    ar: "فريدمان: التمريض الموجه للعائلة والبيئة (توازن النظام: الاستقرار، النمو، التنظيم، الروحانية). ليننغر: الرعاية الثقافية الخاصة، نظامان للرعاية (شعبي ومهني) وثلاثة قرارات: الحفظ، التكييف، التغيير.",
    blocks: [
      B("Friedemann: Familie und Umwelt", "Basiert auf der Systemtheorie: Mensch und Familie sind Systeme aus Subsystemen. Das Ganze ist mehr als die Summe der Teile.", "Verhalten (Prozessdimensionen): Systemerhaltung, Systemänderung, Kohärenz, Individuation.", "Ziele (Zieldimensionen): Stabilität, Wachstum, Regulation/Kontrolle, Spiritualität.", "Ein ausgewogenes System zeigt sich am Wohlbefinden der Familienmitglieder.", "Pflege betrachtet Gesundheit aus Sicht des Einzelnen und der Familie."),
      B("Leininger: Kulturspezifische Fürsorge", "Fürsorge (Care) ist das Wesen der Pflege: helfen, unterstützen, fördern.", "Fürsorge ist stark von Kultur geprägt. Gemeinsamkeiten = Universalität, Unterschiede = Diversität.", "Zwei Systeme: generisch (laienhaft, volkstümlich) und professionell (gelernt, in Institutionen)."),
      B("Drei Entscheidungen der Pflege", "Bewahren: kulturelle Gewohnheiten beibehalten.", "Anpassen oder verhandeln: teilweise beibehalten.", "Ändern oder umstrukturieren: wenn sie schaden würden."),
      B("Praxis", "Kulturspezifische Werte, Gewohnheiten und Ausdrucksformen erfragen und in die Pflege einbeziehen. Kultursensible Pflege ist die Voraussetzung für kongruente (passende) Pflege."),
    ],
  },
];
