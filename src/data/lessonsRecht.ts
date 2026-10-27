/**
 * Rechtliche Grundlagen der Pflege (Vertiefung).
 * Lernhilfe der App in einfachem Deutsch, in eigenen Worten – KEIN Buchtext.
 * Quelle zum Nachlesen: Thieme „I care – PflegeExamen KOMPAKT“, Kap. 12 (Stand des Buchs: 2019).
 * Paragrafen und Gesetze ändern sich (z. B. Betreuungsrecht-Reform 2023) – immer aktuell prüfen.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const RECHT_LESSONS: Lesson[] = [
  {
    id: "grundgesetz-arbeitsrecht", group: "ausbildung", area: "recht", title: "Grundgesetz und Arbeitsrecht", icon: "Landmark",
    ar: "القانون الأساسي (GG) فوق كل القوانين ويحمي حقوق الإنسان والمواطن. قانون العمل: فترة تجربة حتى 6 أشهر، إجازة 20 يوماً على الأقل (أسبوع 5 أيام)، الإنهاء كتابياً، حماية خاصة للمتدربين والحوامل. قانون حماية الشباب العاملين لمن هم دون 18.",
    blocks: [
      B("Grundgesetz (GG)", "Steht über allen anderen Gesetzen von Bund und Ländern und ist durch die Ewigkeitsklausel geschützt.", "Es enthält Menschenrechte (z. B. Schutz der Menschenwürde, freie Entfaltung der Persönlichkeit, Glaubens- und Meinungsfreiheit) und Bürgerrechte (z. B. Wahlrecht, Versammlungsfreiheit, freie Berufswahl)."),
      B("Arbeitsvertrag: Basics", "Pflegende sind in der Regel Angestellte. Rechte und Pflichten stehen im Arbeitsvertrag, oft mit Verweis auf einen Tarifvertrag.", "Probezeit: höchstens 6 Monate, beide Seiten können ohne Gründe kündigen.", "Urlaub: mindestens 20 Tage bei der 5-Tage-Woche, 24 Tage bei der 6-Tage-Woche. Tarif oder Vertrag können mehr geben.", "Sonderzahlungen wie Weihnachtsgeld sind nur ein Anspruch, wenn sie im Vertrag stehen."),
      B("Kündigung", "Sie muss schriftlich sein. Arbeitnehmer können mit Frist ohne Gründe kündigen.", "Arbeitgeber brauchen einen Grund, wenn das Kündigungsschutzgesetz greift (meist nach der Probezeit): verhaltensbedingt, betriebsbedingt oder personenbedingt.", "Außerordentliche Kündigung: ohne Frist, nur mit wichtigem Grund (z. B. Straftat, Arbeitsverweigerung).", "Sonderkündigungsschutz: z. B. Schwangere, Schwerbehinderte, Auszubildende, Betriebsratsmitglieder."),
      B("Pflichten und Haftung", "Pflichten: vereinbarte Arbeit leisten, Schweigepflicht, Treue zum Arbeitgeber, sorgfältiger Umgang mit Material.", "Im Rahmen der Arbeit trägt grundsätzlich der Arbeitgeber die Haftung. Bei Vorsatz oder grober Fahrlässigkeit kann er Regress verlangen."),
      B("Jugendarbeitsschutz (unter 18)", "Gilt für Jugendliche in Ausbildung.", "Bis 8 Stunden täglich, höchstens 40 Stunden pro Woche. Schichtzeit maximal 10 Stunden. Zwischen zwei Diensten mindestens 12 Stunden frei.", "Ruhepausen: 30 Minuten bei 4 bis 6 Stunden, 60 Minuten bei mehr als 6 Stunden.", "Arbeitszeit grundsätzlich 6 bis 20 Uhr, im Krankenhaus ab 16 Jahren bis 23 Uhr.", "5-Tage-Woche. Wochenendarbeit in Pflege ist erlaubt, mindestens 2 Sonntage im Monat frei.", "Urlaub: mindestens 27 Werktage unter 17 Jahren, 25 Werktage unter 18 Jahren."),
    ],
  },
  {
    id: "weisung-haftung", group: "ausbildung", area: "recht", title: "Weisungsrecht, Delegation und Haftung im Alltag", icon: "Scale",
    ar: "حق التوجيه عند صاحب العمل ويمكنه نقله. يجب فحص كل توجيه مهنياً. التفويض: عام، حالة بحالة، غير قابل للتفويض. مسؤولية الأمر ومسؤولية التنفيذ. حق الرفض (Remonstration) لكن الإنقاذ واجب. السرية المهنية §203 StGB. التدخل الطبي إصابة جسدية إلا بموافقة. ترك المساعدة جريمة §323c.",
    blocks: [
      B("Weisungsrecht", "Der Arbeitgeber darf Anweisungen geben und das Recht an Führungskräfte, Ärzte oder Vorgesetzte weitergeben.", "Pflegende prüfen jede Weisung fachlich. Bei Unsicherheit nachfragen. Strafbare oder fachlich falsche Maßnahmen dürfen nicht ausgeführt werden – man haftet sonst persönlich."),
      B("Delegation: drei Gruppen ärztlicher Leistungen", "Allgemein delegierbar: Arzt muss nicht dabei sein, wenn das Personal qualifiziert ist. Beispiele: Dauerkatheterwechsel, einfache Verbandwechsel, Messungen.", "Im Einzelfall delegierbar: Der Arzt prüft Kompetenz und Risiko pro Fall. Beispiele: Injektionen, Infusionen, Blutentnahmen.", "Nicht delegierbar: besonders schwierig oder riskant, z. B. invasive Eingriffe. Das macht der Arzt selbst."),
      B("Zwei Verantwortungsbereiche", "Anordnungsverantwortung: wer delegiert. Die Anordnung muss richtig, klar und eindeutig sein. Dazu gehört Überwachung.", "Übernahme- und Durchführungsverantwortung: wer die Aufgabe übernimmt. Er muss fachlich dazu in der Lage sein und nach aktuellem Wissensstand arbeiten. Bei Unklarheit nachfragen.", "Delegation am besten schriftlich. Bei unklarer Anordnung auf Schriftlichkeit bestehen."),
      B("Weigerungsrecht (Remonstration)", "Wer die nötigen Kenntnisse nicht hat, muss und darf die Übernahme ablehnen.", "Ausnahme: Lebensrettende Maßnahmen müssen immer ergriffen werden, sonst droht Strafbarkeit wegen unterlassener Hilfeleistung."),
      B("Schweigepflicht", "Geregelt in StGB §§ 203 und 204. Geheimnisse und Informationen dürfen nicht an Dritte weitergegeben werden, die nicht an der Behandlung beteiligt sind – auch nicht an Angehörige oder Freunde.", "Betroffen sind medizinische und private Informationen. Sie gilt auch nach dem Tod und nach dem Ende des Arbeitsverhältnisses.", "Ausnahme: Einwilligung (ausdrücklich oder mutmaßlich)."),
      B("Körperverletzung und Rechtfertigung", "Medizinische und pflegerische Eingriffe wie Injektionen sind rechtlich zunächst Körperverletzung.", "Sie sind erlaubt mit ausdrücklicher Einwilligung (mündlich oder schriftlich), mutmaßlicher Einwilligung (z. B. bewusstlose Person) oder bei Nothilfe (z. B. Reanimation)."),
      B("Unterlassene Hilfeleistung und fahrlässige Tötung", "Unterlassene Hilfeleistung (§ 323c StGB): Wer bei Unglück oder Gefahr nicht hilft, obwohl es erforderlich und zumutbar ist, kann bestraft werden. Von Pflegefachpersonen kann man zumindest erwarten, Hilfe zu rufen und Ersthilfe zu leisten. Unzumutbar ist Hilfe, wenn man sich selbst gefährden würde.", "Fahrlässige Tötung: Tod durch Unachtsamkeit, z. B. Medikamentenverwechslung mit tödlicher Folge."),
    ],
  },
  {
    id: "freiheit-betreuung", group: "ausbildung", area: "recht", title: "Freiheitsentziehung, Betreuung, Patientenverfügung und Sterbehilfe", icon: "LockOpen",
    ar: "الإجراءات المقيدة للحرية (FEM) مسموحة فقط للخطر على النفس أو الغير وبعد فشل البدائل. الإيواء والتثبيت: أمر طبي مكتوب وقاضٍ. الوصاية ليست حجراً. التوكيل الوقائي ووصية المريض ملزمة. القتل الرحيم الفعال ممنوع، السلبي وغير المباشر مسموح بشروط.",
    blocks: [
      B("Freiheitsbeschränkung und Freiheitsentziehung", "Beschränkung: Jemand wird gegen seinen Willen gehindert, einen Ort aufzusuchen oder dort zu bleiben. Entziehung ist die schwerste Form: Bewegungsfreiheit ist in jede Richtung aufgehoben.", "Mit Einwilligung ist die Maßnahme unproblematisch. Fehlt die Einwilligungsfähigkeit, entscheidet der Betreuer oder die Erziehungsberechtigten.", "Zulässig nur bei Eigen- oder Fremdgefährdung, wenn sie dem Wohl dient und alle Alternativen erfolglos waren."),
      B("Unterbringung und Fixierung", "Unterbringung: Der Patient wird gegen seinen Willen an einen anderen Ort gebracht. Gründe sind Selbst- oder Fremdgefährdung (z. B. bei Demenz oder psychischer Erkrankung) oder notwendige Heilbehandlung, die verweigert wird. Details regeln die Landesgesetze.", "Mechanische Fixierung (Bettgitter, Gurte): in Notsituationen mit schriftlicher ärztlicher Anordnung. Bei längerer oder regelmäßiger Fixierung braucht es zeitnah, spätestens am nächsten Werktag, eine richterliche Anordnung.", "Medikamentöse Fixierung: Schlafmittel oder Psychopharmaka allein zum Ruhigstellen sind freiheitsbeschränkend.", "Hinweis: Das Buch nennt § 1906 BGB. Seit der Betreuungsrechtsreform 2023 stehen die Regeln in neuen Paragrafen. Immer aktuellen Text prüfen."),
      B("Betreuungsrecht", "Betreuung heißt, dass eine Person eine volljährige Person rechtlich vertritt. Voraussetzung: ärztliches Gutachten über psychische Erkrankung oder körperliche, geistige oder seelische Behinderung, und die Person kann ihre Angelegenheiten ganz oder teilweise nicht besorgen.", "Aufgabenkreise: Geldangelegenheiten, Aufenthaltsort, Gesundheit – einzeln wählbar.", "Zuständig: Betreuungsgericht. Der Betreuer entscheidet zum Wohl und im Sinne des Betreuten.", "Betreuung ist keine Entmündigung: Wer selbst entscheiden kann, darf das weiter."),
      B("Freien Willen schützen", "Bei Minderjährigen vertreten die Eltern.", "Bei Erwachsenen mit eingeschränkter Entscheidungsfähigkeit: Vorsorgevollmacht (Vertrauensperson darf sofort entscheiden, auch begrenzt auf Bereiche) oder Patientenverfügung.", "Pflegende prüfen bei jedem Patienten: Gibt es Vorsorgevollmacht, Patientenverfügung oder Betreuer?"),
      B("Patientenverfügung", "Jeder Volljährige darf sie schreiben. Sie legt vorab fest, was in bestimmten Situationen geschehen soll, falls man sich nicht mehr äußern kann.", "Sie ist für das Personal bindend. Wer sie missachtet, kann sich strafbar machen.", "Vorgefertigte Formulare helfen bei der Formulierung."),
      B("Formen der Sterbehilfe", "Aktive Sterbehilfe: Eine andere Person führt den Tod herbei. Auf Wunsch = Tötung auf Verlangen, ohne Wunsch = Totschlag. Beide sind verboten.", "Passive Sterbehilfe: Therapieabbruch oder Verzicht auf weitere Maßnahmen.", "Indirekte Sterbehilfe: Leidenslinderung (z. B. Schmerzmittel) kann die Lebenszeit verkürzen.", "Beihilfe zum Suizid: Medikamente werden bereitgestellt, die Person nimmt sie selbst ein. Nach dem Buch (2019) sind passive und indirekte Sterbehilfe sowie die Beihilfe unter Voraussetzungen erlaubt. Die Rechtslage zur Beihilfe hat sich seit 2020 durch Gerichtsurteile verändert – aktuell prüfen."),
    ],
  },
  {
    id: "spezialgesetze", group: "ausbildung", area: "recht", title: "Spezielle Gesetze im Pflegebereich", icon: "Library",
    ar: "قوانين خاصة: قانون الأدوية (AMG)، قانون المنتجات الطبية، قانون الحماية من العدوى (IfSG)، قانون زراعة الأعضاء (TPG). المخالفات قد تُعاقب.",
    blocks: [
      B("Arzneimittelgesetz (AMG)", "Regelt eine ordnungsgemäße und sichere Arzneimittelversorgung. Verstöße können mit Freiheitsstrafe geahndet werden."),
      B("Medizinprodukterecht", "Legt fest, welche technischen, medizinischen und Informationsanforderungen Medizinprodukte erfüllen müssen.", "Beispiel für einen Verstoß: ein Produkt mit abgelaufenem Verfallsdatum verwenden."),
      B("Infektionsschutzgesetz (IfSG)", "Regelt Pflichten zur Verhütung und Bekämpfung von Infektionskrankheiten. Bund und Länder betreiben ein gemeinsames Informationssystem."),
      B("Transplantationsgesetz (TPG)", "Regelt, wann Organentnahme und -spende bei Lebenden und Toten erlaubt sind. Auch hier ist die Einwilligung des Betroffenen notwendig."),
      B("Merke", "Das Buch ordnet diese Gesetze unter „spezielle Gesetze im Pflegebereich“ ein. Dazu kommen Sozialgesetzbücher, Pflegeberufegesetz und Datenschutz."),
    ],
  },
];
