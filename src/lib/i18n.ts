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
