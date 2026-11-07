"use client";

import { useCallback } from "react";
import { useStore } from "./store";

export type Lang = "de" | "ar" | "en" | "fr" | "tr";
export const LANGS: { id: Lang; label: string; dir: "ltr" | "rtl"; google: string }[] = [
  { id: "de", label: "Deutsch", dir: "ltr", google: "de" },
  { id: "ar", label: "العربية", dir: "rtl", google: "ar" },
  { id: "en", label: "English", dir: "ltr", google: "en" },
  { id: "fr", label: "Français", dir: "ltr", google: "fr" },
  { id: "tr", label: "Türkçe", dir: "ltr", google: "tr" },
];
const ORDER: Lang[] = ["de", "ar", "en", "fr", "tr"];

/** Ein Text in allen Sprachen. */
export type L10n = Record<Lang, string>;
export function l10n(de: string, ar: string, en: string, fr: string, tr: string): L10n {
  return { de, ar, en, fr, tr };
}

/** Alte Einstellung "de-ar" (Deutsch mit arabischen Untertiteln) wird zu Arabisch. */
export function normalizeLang(v: string | undefined): Lang {
  if (v === "de-ar") return "ar";
  return (ORDER as string[]).includes(v ?? "") ? (v as Lang) : "de";
}

type Row = [string, string, string, string, string];
const T: Record<string, Row> = {
  // Navigation
  "nav.dashboard": ["Start", "الرئيسية", "Home", "Accueil", "Ana sayfa"],
  "nav.library": ["Fragenbank", "بنك الأسئلة", "Question bank", "Banque de questions", "Soru bankası"],
  "nav.cases": ["Fallbeispiele", "الحالات السريرية", "Case studies", "Cas cliniques", "Vaka örnekleri"],
  "nav.quiz": ["Quiz & Prüfung", "اختبار وامتحان", "Quiz & exam", "Quiz et examen", "Quiz ve sınav"],
  "nav.chapters": ["Kapitel", "الفصول", "Chapters", "Chapitres", "Bölümler"],
  "nav.flashcards": ["Karteikarten", "بطاقات المراجعة", "Flashcards", "Cartes mémoire", "Bilgi kartları"],
  "nav.mistakes": ["Fehler", "أخطائي", "My mistakes", "Mes erreurs", "Hatalarım"],
  "nav.bookmarks": ["Lesezeichen", "المحفوظات", "Bookmarks", "Favoris", "Yer imleri"],
  "nav.progress": ["Fortschritt", "التقدّم", "Progress", "Progression", "İlerleme"],
  "nav.source": ["Quelle (PDF)", "المصدر", "Source (PDF)", "Source (PDF)", "Kaynak (PDF)"],
  "nav.admin": ["Import & Qualität", "الاستيراد والمراجعة", "Import & quality", "Import et qualité", "İçe aktarma ve kalite"],
  "nav.settings": ["Einstellungen", "الإعدادات", "Settings", "Réglages", "Ayarlar"],
  "nav.learn": ["Lernen", "دروس", "Learn", "Apprendre", "Öğren"],
  "learn.search": ["Lektionen durchsuchen: Thema, Krankheit, Stichwort …", "ابحث في الدروس: موضوع، مرض، كلمة …", "Search lessons: topic, disease, keyword …", "Rechercher dans les leçons : thème, maladie, mot-clé …", "Derslerde ara: konu, hastalık, anahtar kelime …"],
  "learn.hits": ["%n Lektionen gefunden", "تم العثور على %n درس", "%n lessons found", "%n leçons trouvées", "%n ders bulundu"],
  "learn.who": ["Für wen? Patientengruppe", "الفئة: لمن؟", "Patient group", "Groupe de patients", "Hasta grubu"],
  "learn.who.all": ["Alle", "الكل", "All", "Tous", "Tümü"],
  "learn.who.kinder": ["Kinder", "أطفال", "Children", "Enfants", "Çocuklar"],
  "learn.who.frauen": ["Frauen", "نساء", "Women", "Femmes", "Kadınlar"],
  "learn.who.maenner": ["Männer", "رجال", "Men", "Hommes", "Erkekler"],
  "learn.who.erwachsene": ["Erwachsene", "بالغون", "Adults", "Adultes", "Yetişkinler"],
  "learn.who.alle": ["Kinder und Erwachsene", "أطفال وبالغون", "Children and adults", "Enfants et adultes", "Çocuklar ve yetişkinler"],
  "learn.figure": ["Schematische Abbildung (animiert)", "رسم تخطيطي متحرك", "Schematic illustration (animated)", "Illustration schématique (animée)", "Şematik çizim (animasyonlu)"],
  "prof.title": ["Krankheitsbild im Überblick", "نظرة عامة على المرض", "Disease overview", "Aperçu de la maladie", "Hastalığa genel bakış"],
  "prof.def": ["Definition", "التعريف", "Definition", "Définition", "Tanım"],
  "prof.sym": ["Symptome", "الأعراض", "Symptoms", "Symptômes", "Belirtiler"],
  "prof.urs": ["Ursachen", "الأسباب", "Causes", "Causes", "Nedenler"],
  "prof.risk": ["Risikofaktoren", "عوامل الخطر", "Risk factors", "Facteurs de risque", "Risk faktörleri"],
  "prof.ther": ["Behandlung und Therapie", "العلاج", "Treatment and therapy", "Traitement et thérapie", "Tedavi"],
  "prof.pfl": ["Pflegerische Maßnahmen", "إجراءات التمريض", "Nursing interventions", "Mesures de soins infirmiers", "Hemşirelik uygulamaları"],
  "learn.figure.tap": ["Tippen: Bestandteile anzeigen", "اضغط لعرض الأجزاء", "Tap to see the parts", "Touchez pour voir les parties", "Parçaları görmek için dokunun"],
  "learn.figure.split": ["Auseinandernehmen", "تفكيك", "Take apart", "Démonter", "Parçala"],
  "learn.figure.join": ["Zusammenbauen", "إعادة التركيب", "Put together", "Remonter", "Birleştir"],
  "learn.figure.pick": ["Tippe auf ein Teil, um Namen und Aufgabe zu sehen.", "اضغط على جزء لترى اسمه ووظيفته.", "Tap a part to see its name and function.", "Touchez une partie pour voir son nom et sa fonction.", "Adını ve görevini görmek için bir parçaya dokunun."],
  "learn.group.modelle": ["Theorien und Modelle", "النظريات والنماذج", "Theories and models", "Théories et modèles", "Teoriler ve modeller"],
  "learn.hub.theorien": ["Pflegetheorien", "نظريات التمريض", "Nursing theories", "Théories des soins", "Hemşirelik teorileri"],
  "learn.hub.modelle": ["Modelle und Pflegeprozess", "النماذج وعملية التمريض", "Models and nursing process", "Modèles et processus de soins", "Modeller ve bakım süreci"],
  "learn.hub.konzepte": ["Konzepte und Standards", "مفاهيم ومعايير", "Concepts and standards", "Concepts et standards", "Kavramlar ve standartlar"],
  "learn.hub.intro": ["Alle Pflegetheorien, Modelle und Konzepte an einem Ort. Wähle aus, was du lesen willst.", "كل نظريات التمريض ونماذجه ومفاهيمه في مكان واحد. اختر ما تريد قراءته.", "All nursing theories, models and concepts in one place. Pick what you want to read.", "Toutes les théories, modèles et concepts de soins au même endroit. Choisissez ce que vous voulez lire.", "Tüm hemşirelik teorileri, modelleri ve kavramları tek yerde. Okumak istediğinizi seçin."],
  "learn.untranslated": ["", "هذا الدرس غير متوفر بالعربية بعد. يظهر النص الألماني الأصلي، والمفاتيح تُترجم بالنقر.", "This lesson is not yet available in English. The original German text is shown; tap a term to translate it.", "Cette leçon n'est pas encore disponible en français. Le texte allemand d'origine s'affiche; touchez un terme pour le traduire.", "Bu ders henüz Türkçe değil. Almanca özgün metin gösteriliyor; çevirmek için bir terime dokunun."],
  "learn.note": ["Lernhilfe der App in einfachem Deutsch, kein Buchtext. Ersetzt kein Lehrbuch. Es gelten immer die Anordnungen und Standards deines Betriebs.", "مساعد تعلّم من التطبيق بلغة مبسّطة، وليس نصاً من كتاب. لا يغني عن الكتاب المدرسي. تُطبَّق دائماً تعليمات ومعايير مكان عملك.", "Study aid of the app in simple language, not book text. It does not replace a textbook. The orders and standards of your workplace always apply.", "Aide à l'apprentissage de l'application en langage simple, pas un texte de manuel. Elle ne remplace pas un manuel. Les consignes et standards de votre établissement priment toujours.", "Uygulamanın sade dille hazırladığı öğrenme yardımıdır, kitap metni değildir. Ders kitabının yerini tutmaz. İşyerinizin talimatları ve standartları her zaman geçerlidir."],
  "learn.group.krank": ["Krankheitslehre", "علم الأمراض", "Diseases", "Pathologie", "Hastalık bilgisi"],
  "learn.group.ausbildung": ["Ausbildung", "التكوين", "Training", "Formation", "Eğitim"],
  "learn.notfound": ["Lektion nicht gefunden", "الدرس غير موجود", "Lesson not found", "Leçon introuvable", "Ders bulunamadı"],
  "learn.all": ["Alle Lektionen", "كل الدروس", "All lessons", "Toutes les leçons", "Tüm dersler"],
  "learn.nohits": ["Keine Treffer. Versuche ein anderes Wort oder die Kurzform.", "لا نتائج. جرّب كلمة أخرى أو اختصاراً.", "No results. Try another word or the short form.", "Aucun résultat. Essayez un autre mot.", "Sonuç yok. Başka bir kelime dene."],
  "nav.oral": ["Mündliche Prüfung", "الامتحان الشفوي", "Oral exam", "Examen oral", "Sözlü sınav"],
  "nav.short.learn": ["Lernen", "دروس", "Learn", "Apprendre", "Öğren"],
  "nav.more": ["Mehr", "المزيد", "More", "Plus", "Daha fazla"],
  "nav.short.library": ["Fragen", "الأسئلة", "Questions", "Questions", "Sorular"],
  "nav.short.cases": ["Fälle", "الحالات", "Cases", "Cas", "Vakalar"],
  "nav.short.quiz": ["Quiz", "اختبار", "Quiz", "Quiz", "Quiz"],
  "search.placeholder": ["Suchen …", "بحث …", "Search …", "Rechercher …", "Ara …"],
  "search.open": ["Suche öffnen", "فتح البحث", "Open search", "Ouvrir la recherche", "Aramayı aç"],
  // Dashboard
  "dash.hello": ["Willkommen zurück", "أهلاً بعودتك", "Welcome back", "Bon retour", "Tekrar hoş geldin"],
  "dash.hello.new": ["Schön, dass du da bist", "أهلاً بك", "Great to see you", "Ravi de vous voir", "Hoş geldin"],
  "dash.continue": ["Weiterlernen", "تابع التعلّم", "Keep learning", "Continuer", "Devam et"],
  "dash.resume": ["Sitzung fortsetzen", "أكمل الجلسة", "Resume session", "Reprendre la séance", "Oturuma devam"],
  "dash.today": ["Heute", "اليوم", "Today", "Aujourd'hui", "Bugün"],
  "dash.goalOf": ["von %n Aufgaben", "من %n مهمة", "of %n tasks", "sur %n tâches", "/ %n görev"],
  "dash.tile.cases": ["Fälle üben", "تدرّب على الحالات", "Practise cases", "Cas pratiques", "Vaka çalış"],
  "dash.tile.learn.sub": ["Lektionen mit Suche", "دروس مع بحث", "Lessons with search", "Leçons avec recherche", "Aramalı dersler"],
  "dash.tile.oral.sub": ["Ablauf, Timer, 12 Fälle", "الخطوات والمؤقت و12 حالة", "Steps, timer, 12 cases", "Étapes, minuteur, 12 cas", "Adımlar, zamanlayıcı, 12 vaka"],
  "dash.tile.cases.sub": ["30 Fälle mit Szene", "٣٠ حالة بمشهد متحرك", "30 cases with scenes", "30 cas animés", "30 animasyonlu vaka"],
  "dash.tile.quiz": ["Schnellquiz", "اختبار سريع", "Quick quiz", "Quiz rapide", "Hızlı quiz"],
  "dash.tile.quiz.sub": ["10 Fragen", "١٠ أسئلة", "10 questions", "10 questions", "10 soru"],
  "dash.tile.mock": ["Probeprüfung", "امتحان تجريبي", "Mock exam", "Examen blanc", "Deneme sınavı"],
  "dash.tile.mock.sub": ["mit Zeitlimit", "بوقت محدد", "timed", "chronométré", "süreli"],
  "dash.tile.mistakes": ["Fehler wiederholen", "راجع أخطاءك", "Review mistakes", "Revoir mes erreurs", "Hataları tekrarla"],
  "dash.tile.mistakes.sub": ["gezielt üben", "تدريب موجّه", "focused practice", "entraînement ciblé", "odaklı çalışma"],
  "dash.tile.due": ["Wiederholungen fällig", "مراجعات مستحقة", "Reviews due", "Révisions dues", "Tekrarlar hazır"],
  "dash.stat.done": ["Bearbeitet", "تم حلها", "Done", "Faites", "Çözülen"],
  "dash.stat.accuracy": ["Trefferquote", "نسبة النجاح", "Accuracy", "Réussite", "Başarı"],
  "dash.stat.streak": ["Tage in Folge", "أيام متتالية", "Day streak", "Jours d'affilée", "Günlük seri"],
  "dash.more": ["Mehr Statistik", "المزيد من الإحصاءات", "More statistics", "Plus de statistiques", "Daha fazla istatistik"],
  // Fälle
  "cases.title": ["Fallbeispiele", "الحالات السريرية", "Case studies", "Cas cliniques", "Vaka örnekleri"],
  "cases.written": ["Schriftliche Prüfung", "الامتحان الكتابي", "Written exam", "Examen écrit", "Yazılı sınav"],
  "cases.oral": ["Mündliche Prüfung", "الامتحان الشفوي", "Oral exam", "Examen oral", "Sözlü sınav"],
  "cases.tasks": ["Aufgaben", "مهمة", "tasks", "tâches", "görev"],
  "cases.done": ["erledigt", "منجز", "done", "faites", "tamam"],
  "cases.start": ["Fall üben", "تدرّب على الحالة", "Practise this case", "S'exercer sur ce cas", "Bu vakayı çalış"],
  "cases.tasksBtn": ["Aufgaben ansehen", "عرض المهام", "View tasks", "Voir les tâches", "Görevleri gör"],
  // Szene
  "scene.title": ["Der Fall im Überblick", "الحالة بنظرة سريعة", "The case at a glance", "Le cas en un coup d'œil", "Vakaya genel bakış"],
  "scene.who": ["Beteiligte", "الأشخاص", "People", "Personnes", "Kişiler"],
  "scene.steps": ["Was passiert", "ماذا حدث", "What happens", "Que se passe-t-il", "Ne oluyor"],
  "scene.problem": ["Das Problem", "المشكلة", "The problem", "Le problème", "Sorun"],
  "scene.replay": ["Nochmal abspielen", "أعد التشغيل", "Replay", "Rejouer", "Tekrar oynat"],
  "scene.note": ["Zusammenfassung der App, nicht aus dem Buch. Maßgeblich ist der Originaltext.", "ملخّص من التطبيق وليس من الكتاب. النص الأصلي هو المرجع.", "Summary by the app, not from the book. The original text is what counts.", "Résumé de l'appli, pas du livre. Le texte original fait foi.", "Uygulamanın özeti, kitaptan değil. Geçerli olan özgün metindir."],
  "scene.original": ["Originaltext lesen", "اقرأ النص الأصلي", "Read original text", "Lire le texte original", "Özgün metni oku"],
  "place.klinik": ["Krankenhaus", "المستشفى", "Hospital", "Hôpital", "Hastane"],
  "place.notaufnahme": ["Notaufnahme", "قسم الطوارئ", "Emergency room", "Urgences", "Acil servis"],
  "place.heim": ["Pflegeheim", "دار الرعاية", "Care home", "Maison de soins", "Bakım evi"],
  "place.ambulant": ["Zu Hause (ambulant)", "في المنزل (رعاية منزلية)", "At home (home care)", "À domicile", "Evde bakım"],
  "place.wg": ["Wohngruppe", "مجموعة سكنية", "Residential group", "Groupe d'habitation", "Yaşam grubu"],
  "place.festival": ["Festival und Rettung", "مهرجان وإسعاف", "Festival and rescue", "Festival et secours", "Festival ve kurtarma"],
  "place.team": ["Team und Büro", "الفريق والمكتب", "Team and office", "Équipe et bureau", "Ekip ve ofis"],
  "role.patient": ["Patient/in", "مريض", "Patient", "Patient(e)", "Hasta"],
  "role.kind": ["Kind", "طفل", "Child", "Enfant", "Çocuk"],
  "role.pflege": ["Pflegefachkraft", "ممرض/ة", "Nurse", "Infirmier(ère)", "Hemşire"],
  "role.azubi": ["Azubi", "متدرّب/ة", "Trainee", "Stagiaire", "Stajyer"],
  "role.angehoerig": ["Angehörige", "أقارب", "Family", "Proche", "Yakın"],
  "role.team": ["Kolleg/in", "زميل/ة", "Colleague", "Collègue", "Meslektaş"],
  "role.arzt": ["Arzt/Ärztin", "طبيب/ة", "Doctor", "Médecin", "Doktor"],
  // Wörterbuch
  "gloss.tap": ["Tippe auf unterstrichene Wörter für eine Übersetzung.", "المس الكلمات المسطّرة لرؤية الترجمة.", "Tap underlined words for a translation.", "Touchez les mots soulignés pour une traduction.", "Çeviri için altı çizili kelimelere dokun."],
  "gloss.title": ["Fachwörter", "مصطلحات مهنية", "Terms", "Termes", "Terimler"],
  "tr.button": ["Text übersetzen", "ترجمة النص", "Translate text", "Traduire le texte", "Metni çevir"],
  // Allgemein
  "ui.language": ["Sprache", "اللغة", "Language", "Langue", "Dil"],
  "ui.close": ["Schließen", "إغلاق", "Close", "Fermer", "Kapat"],
  "ui.menu": ["Menü", "القائمة", "Menu", "Menu", "Menü"],
  "ui.theme": ["Hell/Dunkel", "فاتح/داكن", "Light/Dark", "Clair/Sombre", "Açık/Koyu"],
  "ui.back": ["Zurück", "رجوع", "Back", "Retour", "Geri"],
  "fc.title": ["Karteikarten", "بطاقات المراجعة", "Flashcards", "Cartes mémoire", "Bilgi kartları"],
  "fc.none.title": ["Keine Karteikarten möglich", "لا يمكن إنشاء بطاقات", "No flashcards available", "Aucune carte mémoire possible", "Bilgi kartı oluşturulamıyor"],
  "fc.none.text": ["Karteikarten entstehen nur aus Aufgaben mit Musterlösung. Aktuell gibt es keine.", "تُنشأ البطاقات فقط من المهام التي لها حلّ نموذجي. حالياً لا توجد أي بطاقة.", "Flashcards are only made from tasks that have a model answer. There are none at the moment.", "Les cartes ne sont créées qu'à partir de tâches avec corrigé type. Il n'y en a aucune pour le moment.", "Bilgi kartları yalnızca örnek çözümü olan görevlerden oluşturulur. Şu an hiç yok."],
  "fc.sub": ["Vorderseite: Aufgabe · Rückseite: Musterlösung", "الوجه الأمامي: المهمة · الوجه الخلفي: الحلّ النموذجي", "Front: task · Back: model answer", "Recto : tâche · Verso : corrigé type", "Ön yüz: görev · Arka yüz: örnek çözüm"],
  "fc.home": ["Start", "الرئيسية", "Home", "Accueil", "Ana sayfa"],
  "fc.deck": ["Stapel", "المجموعة", "Deck", "Paquet", "Deste"],
  "fc.deck.all": ["Alle", "الكل", "All", "Toutes", "Tümü"],
  "fc.deck.due": ["Fällige Wiederholungen", "مراجعات مستحقة", "Reviews due", "Révisions dues", "Zamanı gelen tekrarlar"],
  "fc.deck.bookmarks": ["Lesezeichen", "المحفوظات", "Bookmarks", "Favoris", "Yer imleri"],
  "fc.empty.title": ["Dieser Stapel ist leer", "هذه المجموعة فارغة", "This deck is empty", "Ce paquet est vide", "Bu deste boş"],
  "fc.empty.text": ["Wählen Sie einen anderen Stapel.", "اختر مجموعة أخرى.", "Choose another deck.", "Choisissez un autre paquet.", "Başka bir deste seçin."],
  "fc.card": ["Karte %n", "البطاقة %n", "Card %n", "Carte %n", "Kart %n"],
  "fc.of": ["von", "من", "of", "sur", "/"],
  "fc.rated": ["%n bewertet in dieser Runde", "%n بطاقة قُيِّمت في هذه الجولة", "%n rated this round", "%n évaluée(s) dans ce tour", "Bu turda %n değerlendirildi"],
  "fc.progress": ["Stapelfortschritt", "تقدّم المجموعة", "Deck progress", "Progression du paquet", "Deste ilerlemesi"],
  "fc.answer": ["Musterlösung", "الحلّ النموذجي", "Model answer", "Corrigé type", "Örnek çözüm"],
  "fc.show": ["Antwort zeigen", "أظهر الإجابة", "Show answer", "Afficher la réponse", "Cevabı göster"],
  "fc.unknown": ["Nicht gewusst", "لم أعرفها", "Didn't know", "Pas su", "Bilemedim"],
  "fc.known": ["Gewusst", "عرفتها", "Knew it", "Su", "Bildim"],
  "fc.hint": ["Deine Bewertung steuert den Wiederholungsplan (Leitner-Boxen).", "تقييمك يحدّد جدول المراجعة (صناديق لايتنر).", "Your rating controls the review schedule (Leitner boxes).", "Votre évaluation détermine le plan de révision (boîtes de Leitner).", "Değerlendirmen tekrar planını belirler (Leitner kutuları)."],
  "lp.mist.title": ["Fehler wiederholen", "راجع أخطاءك", "Review mistakes", "Revoir mes erreurs", "Hataları tekrarla"],
  "lp.mist.sub": ["Aufgaben, bei denen Ihre letzte bewertete Antwort nicht die volle Punktzahl brachte.", "مهام لم تنل إجابتك الأخيرة المقيَّمة فيها الدرجة الكاملة.", "Tasks where your last rated answer did not earn full marks.", "Tâches pour lesquelles votre dernière réponse évaluée n'a pas obtenu tous les points.", "Son değerlendirilen cevabınızın tam puan getirmediği görevler."],
  "lp.mist.crumb": ["Fehler", "الأخطاء", "Mistakes", "Erreurs", "Hatalar"],
  "lp.mist.practise": ["Fehler üben (%n)", "تدرّب على الأخطاء (%n)", "Practise mistakes (%n)", "S'exercer sur les erreurs (%n)", "Hataları çalış (%n)"],
  "lp.mist.empty": ["Keine Fehler vorhanden", "لا توجد أخطاء", "No mistakes yet", "Aucune erreur", "Hata yok"],
  "lp.mist.start": ["Quiz starten", "ابدأ الاختبار", "Start quiz", "Lancer le quiz", "Quizi başlat"],
  "lp.mist.empty.none": ["Sobald Sie Aufgaben bewertet haben, erscheinen hier Ihre Fehler.", "بمجرد تقييم مهامك ستظهر أخطاؤك هنا.", "Once you have rated tasks, your mistakes will appear here.", "Dès que vous aurez évalué des tâches, vos erreurs apparaîtront ici.", "Görevleri değerlendirdiğinizde hatalarınız burada görünür."],
  "lp.mist.empty.all": ["Alle zuletzt bewerteten Aufgaben waren voll richtig – stark!", "كل المهام المقيَّمة أخيراً كانت صحيحة تماماً — ممتاز!", "All recently rated tasks were fully correct. Well done!", "Toutes les tâches évaluées récemment étaient entièrement justes. Bravo !", "Son değerlendirilen tüm görevler tamamen doğruydu. Harika!"],
  "lp.mist.wrong": ["%n× falsch", "خطأ %n مرات", "wrong %n×", "faux %n ×", "%n kez yanlış"],
  "lp.mist.points": ["P.", "ن.", "pts", "pts", "p."],
  "lp.mist.improved": ["Verbessert", "تحسّنت", "Improved", "Améliorées", "İyileşenler"],
  "lp.mist.improved.text": ["%n Aufgabe(n) waren früher falsch und wurden zuletzt voll richtig beantwortet.", "%n مهمة كانت خاطئة سابقاً وأُجيب عنها أخيراً بشكل صحيح تماماً.", "%n task(s) were wrong before and were last answered fully correctly.", "%n tâche(s) étaient fausses auparavant et ont été récemment réussies entièrement.", "%n görev önceden yanlıştı ve son olarak tamamen doğru cevaplandı."],
  "lp.bm.title": ["Lesezeichen & Notizen", "المحفوظات والملاحظات", "Bookmarks & notes", "Favoris et notes", "Yer imleri ve notlar"],
  "lp.bm.crumb": ["Lesezeichen", "المحفوظات", "Bookmarks", "Favoris", "Yer imleri"],
  "lp.bm.practise": ["Lesezeichen üben (%n)", "تدرّب على المحفوظات (%n)", "Practise bookmarks (%n)", "S'exercer sur les favoris (%n)", "Yer imlerini çalış (%n)"],
  "lp.bm.empty": ["Noch keine Lesezeichen", "لا محفوظات بعد", "No bookmarks yet", "Pas encore de favoris", "Henüz yer imi yok"],
  "lp.bm.tobank": ["Zur Fragenbank", "إلى بنك الأسئلة", "To the question bank", "Vers la banque de questions", "Soru bankasına"],
  "lp.bm.empty.text": ["Setzen Sie in der Fragenbank oder im Quiz ein Lesezeichen, um Aufgaben später gezielt zu üben.", "احفظ مهمة في بنك الأسئلة أو الاختبار لتتدرّب عليها لاحقاً بشكل موجّه.", "Bookmark a task in the question bank or quiz to practise it later.", "Ajoutez un favori dans la banque de questions ou le quiz pour vous exercer plus tard.", "Daha sonra çalışmak için soru bankasında veya quizde bir görevi yer imi yapın."],
  "lp.bm.task": ["Aufgabe", "مهمة", "Task", "Tâche", "Görev"],
  "lp.bm.note": ["Notiz", "ملاحظة", "Note", "Note", "Not"],
  "lp.bm.remove": ["Entfernen", "إزالة", "Remove", "Retirer", "Kaldır"],
  "lp.bm.remove.aria": ["Lesezeichen für Aufgabe %n entfernen", "إزالة المحفوظة للمهمة %n", "Remove bookmark for task %n", "Retirer le favori de la tâche %n", "%n numaralı görevin yer imini kaldır"],
  "lp.bm.notes": ["Weitere Notizen", "ملاحظات أخرى", "More notes", "Autres notes", "Diğer notlar"],
  "ui.page": ["Seite", "صفحة", "Page", "Page", "Sayfa"],
};

export function translate(lang: Lang, key: string, n?: number | string): string {
  const row = T[key];
  if (!row) return key;
  const s = row[ORDER.indexOf(lang)] || row[0];
  return n === undefined ? s : s.replace("%n", String(n));
}

export function useLang(): Lang {
  const { state } = useStore();
  return normalizeLang(state.settings.uiLanguage);
}

export function useT(): (key: string, n?: number | string) => string {
  const lang = useLang();
  return useCallback((key: string, n?: number | string) => translate(lang, key, n), [lang]);
}

/** Text in der gewählten Sprache; fehlt er, wird Deutsch gezeigt. */
export function pick(t: Partial<L10n>, lang: Lang): string {
  return t[lang] || t.de || "";
}
