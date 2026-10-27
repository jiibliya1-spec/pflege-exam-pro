/**
 * Vertiefung der Ausbildungs-Lektionen: zusätzliche Blöcke je Lektion.
 * Lernhilfe der App in einfachem Deutsch, KEIN Buchtext. Es gelten immer Gesetz, Anordnung und Hausstandard.
 */
import type { LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const AUSBILDUNG_PLUS: Record<string, LessonBlock[]> = {
  ausbildung: [
    B("Einsatzorte in der Praxis", "Pflichteinsätze gibt es in der stationären Akutpflege, der stationären Langzeitpflege und der ambulanten Pflege.", "Dazu kommen Einsätze in der pädiatrischen (Kinder-) Versorgung und in der psychiatrischen Versorgung.", "Es gibt einen Orientierungseinsatz am Anfang und einen Vertiefungseinsatz am Ende."),
    B("Praxisanleitung und Praxisbegleitung", "Praxisanleitende sind Pflegefachpersonen mit berufspädagogischer Zusatzqualifikation. Mindestens 10 % der Einsatzzeit sind geplante Anleitung.", "Die Pflegeschule begleitet dich im Einsatz mit Besuchen (Praxisbegleitung).", "Du führst einen Ausbildungsnachweis (Tätigkeiten, Einsätze) und bekommst Beurteilungen."),
    B("Deine Rechte und Pflichten", "Du darfst nur Aufgaben übernehmen, die dem Ausbildungsstand angemessen sind. Du bist keine Ersatzkraft.", "Du musst lernen, mitarbeiten und Schweigepflicht und Hygienevorgaben einhalten.", "Bei Überforderung sprichst du es früh an: bei Praxisanleitung, Pflegeschule oder Ausbildungsleitung."),
    B("Mögliche Bewertung in Prüfungen", "Schriftlich: Fallsituationen mit Aufgaben, die in den Kompetenzbereichen gestellt werden.", "Mündlich: ein Fall mit Prüfungsgespräch. Du fasst den Fall zusammen und begründest Entscheidungen.", "Praktisch: Pflege von Menschen im Einsatz mit Planung, Durchführung und Reflexion."),
  ],
  pruefung: [
    B("Die drei Anforderungsbereiche", "I – Wiedergeben: Wissen nennen, beschreiben.", "II – Anwenden: Wissen auf den Fall übertragen, erläutern, begründen.", "III – Beurteilen und entwickeln: abwägen, bewerten, eigene Lösungen ableiten."),
    B("Aufbau einer guten Antwort", "Erst die Aussage, dann die Begründung, dann der Bezug zum Fall: „Weil … deshalb bei Herrn …“", "Fachbegriffe richtig verwenden und kurz erklären.", "Bei „Beurteilen“ beide Seiten kurz nennen und zum Schluss entscheiden."),
    B("Typische Fehler", "Nur allgemein antworten und den Namen im Fall nie nennen.", "Den Operator überlesen (z. B. nur nennen, obwohl erklärt werden soll).", "Zu viel Zeit auf eine Aufgabe verwenden. Lieber alle Aufgaben mit Kernaussagen beantworten."),
    B("Mündliche Prüfung: Ablauf", "Der Fall wird gelesen, Notizen gemacht und das Gespräch mit einer kurzen eigenen Zusammenfassung begonnen.", "Du darfst nachfragen, wenn du eine Frage nicht verstehst, und kurz nachdenken.", "Ruhig und strukturiert antworten ist besser als schnell und ungeordnet."),
  ],
  pflegeprozess: [
    B("Pflegeprozess nach Fiechter und Meier (6 Schritte)", "1. Informationen sammeln", "2. Probleme und Ressourcen erkennen", "3. Ziele festlegen", "4. Maßnahmen planen", "5. Maßnahmen durchführen", "6. Wirkung beurteilen (Evaluation)"),
    B("Pflegeproblem formulieren (PESR)", "P – Problem: Was ist das Problem?", "E – Ätiologie: Was ist die Ursache oder der Einflussfaktor?", "S – Symptome: Woran erkennt man es?", "R – Ressourcen: Was kann der Mensch noch selbst?"),
    B("Gute Ziele", "Ziele sind konkret, realistisch, überprüfbar und mit einem Zeitpunkt verbunden.", "Nahziele (kurzfristig) und Fernziele (langfristig) unterscheiden.", "Das Ziel wird mit dem Menschen abgestimmt, nicht über seinen Kopf hinweg."),
    B("Pflegemodelle (Überblick)", "Lebensaktivitäten (z. B. Roper, Logan und Tierney): Alltagsfähigkeiten werden betrachtet.", "ABEDL (Krohwinkel): Aktivitäten, Beziehungen und existenzielle Erfahrungen des Lebens.", "Selbstpflegedefizit-Theorie (Orem): Pflege hilft, wo der Mensch sich nicht selbst versorgen kann."),
    B("Dokumentation", "Sie ist rechtlich wichtig: Was nicht dokumentiert ist, gilt im Streitfall als nicht durchgeführt.", "Zeitnah, sachlich, nachvollziehbar, mit Handzeichen; Fehler lesbar durchstreichen, nichts unlesbar machen."),
  ],
  vitalzeichen: [
    B("Auffällige Werte erkennen", "Puls über 100 pro Minute: Tachykardie. Unter 60: Bradykardie. Unregelmäßig: Rhythmusstörung, melden.", "Fieber ab etwa 38 °C, hohes Fieber ab etwa 39 °C. Rektale Messung zeigt etwas höhere Werte.", "Atmung: zu schnell (Tachypnoe), zu langsam, Atemnot (Dyspnoe), Atemgeräusche."),
    B("Blutdruck richtig messen", "Passende Manschettengröße, Manschette in Herzhöhe, Arm abgestützt.", "Nicht am Arm mit Shunt, Lähmung, Lymphödem oder frischer Operation messen.", "Bei der ersten Messung beide Arme vergleichen und Seite dokumentieren."),
    B("Bewusstsein und Schmerz", "Bewusstsein beschreiben: wach, schläfrig, nur auf Schmerz ansprechbar, bewusstlos. Die Glasgow Coma Scale (3 bis 15 Punkte) bewertet Augenöffnen, Sprechen und Bewegung.", "Schmerz erfragen mit der numerischen Skala (0 bis 10) und dokumentieren."),
    B("Wann sofort melden?", "Plötzliche Verschlechterung, Brustschmerz, starke Atemnot, Bewusstseinsveränderung, sehr hohe oder sehr niedrige Werte nach Vorgabe.", "Immer Uhrzeit, Wert und Beobachtungen nennen (SBAR)."),
  ],
  prophylaxen: [
    B("Dekubitus: Grade", "Grad 1: Hautrötung, die beim Druck nicht verschwindet.", "Grad 2: Blase oder oberflächlicher Hautdefekt.", "Grad 3: Haut ist vollständig geschädigt, Fettgewebe sichtbar.", "Grad 4: tiefer Schaden bis zu Muskeln oder Knochen."),
    B("Dekubitus: Risiko und Maßnahmen", "Risikoeinschätzung mit Skalen wie der Braden-Skala (niedrige Punktzahl bedeutet hohes Risiko) und mit klinischem Blick.", "Positionswechsel nach individuellem Plan, Schräglagerungen (z. B. 30°), Fersen frei lagern.", "Druckverteilende Hilfsmittel (Matratzen, Kissen) nutzen.", "Gerötete Haut nicht massieren, Scherkräfte vermeiden (Hochziehen im Bett), Haut trocken halten.", "Expertenstandard „Dekubitusprophylaxe in der Pflege“ beachten."),
    B("Sturz nach dem Ereignis", "Nicht sofort hochziehen. Bewusstsein, Schmerzen und Verletzungen prüfen, Vitalzeichen messen.", "Arzt informieren, Sturzprotokoll und Dokumentation, Ursachen im Team besprechen.", "Typische Risiken: Medikamente, schlechte Sicht, Inkontinenz, Müdigkeit, Hilfsmittel nicht in Reichweite."),
    B("Mund, Haut und Verdauung", "Soor und Parotitis: Mundpflege, Kauen anregen, Trinken.", "Intertrigo (wunde Hautfalten): Falten trocken halten, nicht mit Puder verkleben.", "Obstipation: Flüssigkeit, Ballaststoffe, Bewegung, auf Stuhlgang achten und dokumentieren."),
    B("Trinken", "Als grober Richtwert gelten 1,5 bis 2 Liter am Tag, wenn keine Einschränkung angeordnet ist.", "Bei Herz- oder Nierenschwäche gelten ärztliche Trinkmengen."),
  ],
  hygiene: [
    B("Standardhygiene", "Gilt bei jedem Menschen, unabhängig von Diagnose: Händehygiene, Schutzausrüstung bei Kontakt mit Körperflüssigkeiten, sichere Entsorgung, saubere Flächen.", "Persönliche Schutzausrüstung wird vor dem Kontakt angelegt und danach sofort richtig entsorgt."),
    B("Händedesinfektion: Details", "Ausreichend Mittel (hohlen Handteller füllen), alle Flächen einreiben, Einwirkzeit einhalten (oft 30 Sekunden).", "Hände nur waschen, wenn sie sichtbar verschmutzt sind. Bei Durchfall durch Noro- oder Clostridioides-Erreger: zuerst desinfizieren und zusätzlich waschen nach Hygieneplan.", "Keine künstlichen Fingernägel, keine Ringe und Armbanduhren im Dienst."),
    B("Handschuhe und Schutzkleidung", "Handschuhe schützen, ersetzen aber nicht die Desinfektion. Nach dem Ausziehen desinfizieren.", "Beim Ablegen der Schutzkleidung zuerst die am stärksten verschmutzten Teile (Handschuhe) entfernen und danach die Hände desinfizieren."),
    B("Nadelstichverletzung", "Wunde bluten lassen, desinfizieren, nicht quetschen.", "Sofort den Vorfall melden (Vorgesetzte, Betriebsarzt, ggf. Durchgangsarzt) und dokumentieren."),
    B("Isolierung (Überblick)", "Umkehrisolierung schützt den Menschen mit geschwächter Abwehr.", "Quellenisolierung schützt andere vor einem Erreger, als Standard- oder strikte Isolierung.", "Wichtige Gesetze: Infektionsschutzgesetz regelt Meldepflichten an das Gesundheitsamt und Hygienepläne."),
  ],
  sbar: [
    B("Beispiel für SBAR", "S: „Ich rufe wegen Frau Meier, Zimmer 4, an. Seit 20 Minuten hat sie Atemnot.“", "B: „Sie hat eine Herzschwäche und bekommt seit gestern ein neues Entwässerungsmittel.“", "A: „Atemfrequenz 28, Sättigung 89 %, Puls 110, Beine geschwollen.“", "R: „Ich bitte um sofortige ärztliche Untersuchung und Anordnung zu Sauerstoff.“"),
    B("Dienstübergabe", "Auf Datenschutz achten: nicht auf dem Flur, nicht so laut, dass Dritte mithören.", "Wichtiges zuerst: Veränderungen, Risiken, Termine, offene Aufgaben.", "Fakten statt Wertungen („trinkt seit gestern wenig“ statt „ist schwierig“)."),
    B("Schriftliche Übergabe und Dokumentation", "Handzeichen und Zeit angeben, lesbar schreiben, Fehler nicht überschreiben.", "Auch Wünsche und Ablehnung von Maßnahmen dokumentieren."),
  ],
  kommunikation: [
    B("Vier-Seiten-Modell (Schulz von Thun)", "Jede Nachricht hat vier Seiten: Sachinhalt, Selbstoffenbarung, Beziehung, Appell.", "Missverständnisse entstehen, wenn Sender und Empfänger auf verschiedenen Seiten hören.", "Beispiel: „Es ist kalt hier.“ Sachinhalt: Temperatur. Appell: Mach das Fenster zu."),
    B("Fünf Axiome (Watzlawick), Auswahl", "Man kann nicht nicht kommunizieren: auch Schweigen sagt etwas.", "Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt.", "Der Beziehungsaspekt bestimmt, wie der Inhalt ankommt."),
    B("Personenzentrierte Gesprächsführung (Rogers)", "Wertschätzung ohne Bedingungen, Einfühlung (Empathie), Echtheit (Kongruenz).", "Zuhören, Gefühle spiegeln, nicht sofort Ratschläge geben."),
    B("Gewaltfreie Kommunikation (Rosenberg)", "Vier Schritte: Beobachtung (ohne Bewertung), Gefühl, Bedürfnis, Bitte.", "Beispiel: „Ich sehe, dass du das Essen stehen lässt. Ich mache mir Sorgen. Mir ist wichtig, dass du genug isst. Magst du mir sagen, was dir hilft?“"),
    B("Konflikte", "Ein Konflikt besteht, wenn Ziele, Interessen oder Haltungen nicht zusammenpassen und mindestens eine Seite das belastet.", "Typen: Ziel-, Verteilungs-, Beziehungs- und Wertekonflikte; offen oder verdeckt.", "Lösung: Gespräch unter vier Augen, Ich-Botschaften, erst die Beziehung klären, dann die Sache. Bei Bedarf Vermittlung durch Leitung oder Praxisanleitung."),
    B("Kritik geben und annehmen", "Konkret, sachlich, zeitnah, möglichst unter vier Augen.", "Beim Annehmen: zuhören, nachfragen, nicht sofort verteidigen."),
  ],
  delegation: [
    B("Verantwortung genauer", "Anordnungsverantwortung: Wer delegiert, wählt die richtige Person aus, erklärt die Aufgabe und kontrolliert.", "Durchführungsverantwortung: Wer ausführt, handelt sorgfältig nach Ausbildung und Können.", "Übernahmeverantwortung: Wer übernimmt, prüft, ob er es kann. Wer unsicher ist, sagt es."),
    B("Was kann delegiert werden?", "Ärztliche Tätigkeiten wie Injektionen oder Verbandwechsel können nach Anordnung an qualifizierte Pflegefachpersonen delegiert werden.", "Nicht delegierbar sind Aufgaben, die eine eigene Entscheidung und Verantwortung fordern: z. B. Diagnose und Indikation (Arzt) sowie die vorbehaltenen Tätigkeiten der Pflege."),
    B("Haftung", "Auswahlverschulden: falsche Person ausgewählt.", "Anleitungsverschulden: nicht ausreichend erklärt.", "Überwachungsverschulden: nicht kontrolliert.", "Übernahmeverschulden: etwas übernommen, obwohl man es nicht konnte."),
    B("Auszubildende", "Das Pflegeberufegesetz verlangt, dass Aufgaben dem Ausbildungszweck und Ausbildungsstand angemessen sind.", "Behandlungspflege wie Injektionen oder Tracheostoma-Absaugen darf eine Auszubildende nur nach Einführung, Übung und unter Aufsicht durchführen."),
  ],
  recht: [
    B("Gesetzliche Grundlagen (Auswahl)", "Grundgesetz: Menschenwürde (Art. 1) und freie Entfaltung, Leben, körperliche Unversehrtheit (Art. 2).", "Eine Behandlung ohne wirksame Einwilligung kann als Körperverletzung gelten (Strafgesetzbuch).", "Schweigepflicht: Verletzung kann strafbar sein (§ 203 StGB). Datenschutz regelt die DSGVO.", "Unterlassene Hilfeleistung ist strafbar (§ 323c StGB): in Notfällen musst du helfen."),
    B("Einwilligungsfähigkeit", "Entscheidend ist, ob der Mensch Informationen verstehen, bewerten und seinen Willen äußern kann. Das gilt nicht pauschal, sondern für die jeweilige Entscheidung.", "Bei Minderjährigen entscheiden meist die Sorgeberechtigten gemeinsam mit dem Kind, nach Reife immer mehr der Jugendliche selbst."),
    B("Betreuung und Vorsorge", "Rechtliche Betreuung (Betreuungsrecht im Bürgerlichen Gesetzbuch; früher § 1896, seit der Reform 2023 u. a. § 1814 ff.) wird durch das Betreuungsgericht eingerichtet, wenn jemand seine Angelegenheiten nicht selbst regeln kann.", "Vorsorgevollmacht: Eine vertraute Person darf im Namen des Menschen handeln.", "Patientenverfügung: schriftlich festgelegter Wille für bestimmte Behandlungssituationen. Sie ist verbindlich, wenn sie auf die Situation passt."),
    B("Freiheitsentziehende Maßnahmen", "Dazu zählen Bettgitter, Gurte, Abschließen der Tür oder Medikamente zur Ruhigstellung. Ohne Einwilligung brauchen sie eine gerichtliche Genehmigung.", "In einer akuten Gefahr kann eine kurzfristige Maßnahme nötig sein, danach muss die Genehmigung sofort nachgeholt werden. Alternativen immer zuerst prüfen."),
    B("Dokumentation und Haftung", "Zivilrechtlich: Schadenersatz bei Fehlern. Strafrechtlich: z. B. fahrlässige Körperverletzung.", "Fehler und Beinahe-Fehler offen melden (z. B. über ein Fehlermeldesystem wie CIRS). Das schützt Patienten."),
  ],
  vorbehalt: [
    B("Rechtliche Grundlage", "Das Pflegeberufegesetz (§ 4) legt fest, welche Aufgaben Pflegefachpersonen vorbehalten sind. Die Berufsbezeichnung „Pflegefachfrau/Pflegefachmann“ ist geschützt.", "Wer ohne Erlaubnis die Berufsbezeichnung führt oder diese Aufgaben übernimmt, handelt rechtswidrig."),
    B("Beispiele aus dem Alltag", "Pflegebedarf einschätzen und Pflegeplanung erstellen: Pflegefachperson.", "Pflegeprozess steuern und evaluieren: Pflegefachperson.", "Pflegequalität sichern: z. B. Standards umsetzen, Pflegevisite, Fehler auswerten."),
    B("Was bedeutet das für Auszubildende?", "Du übst diese Aufgaben unter Anleitung. Du übernimmst sie nicht allein in Verantwortung.", "Pflegehilfskräfte unterstützen bei Grundpflege und Alltag, ersetzen diese Aufgaben aber nicht."),
  ],
};
