"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Flame, RotateCcw, Shuffle, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { useLang } from "@/lib/i18n";
import { playTone } from "@/lib/sound";
import { QUIZ_TOPICS, type QuizTopic, type QTuple, type Level } from "@/data/quiz";
import { Icon } from "./Icon";
import { QuizSetup } from "./QuizSetup";
import { Card, PageHeader, cn } from "./ui";

const BEST_KEY = "pep-quiz-best-v2";
type Mode = 1 | 2 | 3 | "adaptive";
interface Item { topic: QuizTopic; level: Level; text: string[]; opts: { t: string[]; ok: boolean }[]; why: string[][] }

const split = (s: string) => s.split("|");
function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}
function build(topic: QuizTopic, tuple: QTuple): Item {
  const [level, q, o, c, w] = tuple;
  return { topic, level, text: split(q), opts: shuffle(o.map((t, i) => ({ t: split(t), ok: i === c }))), why: w.split("\n\n").map(split) };
}
function readBest(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(BEST_KEY) || "{}"); } catch { return {}; }
}
function saveBest(id: string, pct: number) {
  try { const b = readBest(); if ((b[id] ?? -1) < pct) { b[id] = pct; localStorage.setItem(BEST_KEY, JSON.stringify(b)); } } catch { /* ignore */ }
}
const LEVELS: Record<Level, { de: string; ar: string; color: string }> = {
  1: { de: "Leicht", ar: "سهل", color: "#16a34a" },
  2: { de: "Mittel", ar: "متوسط", color: "#f59e0b" },
  3: { de: "Schwer", ar: "صعب", color: "#dc2626" },
};

/** Nächste Frage: gewünschte Stufe, sonst die nächstliegende Stufe mit ungenutzten Fragen. */
function pickNext(pool: Item[], used: Set<Item>, want: Level): Item | null {
  for (const lv of [want, ...([1, 2, 3] as Level[]).filter((x) => x !== want).sort((a, b) => Math.abs(a - want) - Math.abs(b - want))]) {
    const c = pool.filter((q) => q.level === lv && !used.has(q));
    if (c.length) return c[Math.floor(Math.random() * c.length)];
  }
  return null;
}

/** Mit URL-Parametern (preset, case, chapter …) direkt die erweiterte Einrichtung zeigen, sonst die Themenwahl. */
export function QuizHub() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <HubGate />
    </Suspense>
  );
}

function HubGate() {
  const sp = useSearchParams();
  if (Array.from(sp.keys()).length > 0) return <QuizSetup />;
  return <TopicQuiz />;
}

function TopicQuiz() {
  const lang = useLang();
  const ar = lang === "ar";
  const { state } = useStore();
  const sound = state.settings.sound;
  const [phase, setPhase] = useState<"pick" | "config" | "play" | "done">("pick");
  const [sel, setSel] = useState<{ id: string; de: string; ar: string; color: string; topics: QuizTopic[] } | null>(null);
  const [mode, setMode] = useState<Mode>("adaptive");
  const [len, setLen] = useState(15);
  const [pool, setPool] = useState<Item[]>([]);
  const used = useRef<Set<Item>>(new Set());
  const [cur, setCur] = useState<Item | null>(null);
  const [lvl, setLvl] = useState<Level>(2);
  const [asked, setAsked] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [streak, setStreak] = useState(0);
  const [hist, setHist] = useState<{ item: Item; ok: boolean }[]>([]);
  const [best, setBest] = useState<Record<string, number>>({});
  const [showMore, setShowMore] = useState(false);
  const [lvlFlash, setLvlFlash] = useState<"up" | "down" | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setBest(readBest()); }, [phase]);
  const scrollTop = () => topRef.current?.scrollIntoView({ block: "start" });

  const choose = (id: string, de: string, arName: string, color: string, topics: QuizTopic[]) => {
    setSel({ id, de, ar: arName, color, topics }); setPhase("config"); scrollTop();
  };

  const begin = () => {
    if (!sel) return;
    const items = sel.topics.flatMap((t) => t.qs.map((q) => build(t, q)));
    const first: Level = mode === "adaptive" ? 2 : mode;
    used.current = new Set();
    const total = Math.min(len, items.length);
    const q = pickNext(items, used.current, first);
    if (q) used.current.add(q);
    setPool(items); setLen(total); setCur(q); setLvl(first); setAsked(1); setPicked(null); setStreak(0); setHist([]); setLvlFlash(null); setPhase("play"); scrollTop();
  };

  const answer = (k: number) => {
    if (picked !== null || !cur) return;
    const ok = cur.opts[k].ok;
    setPicked(k);
    setHist((h) => [...h, { item: cur, ok }]);
    setStreak((s) => (ok ? s + 1 : 0));
    if (sound) playTone(ok ? "ok" : "bad");
    try { navigator.vibrate?.(ok ? 15 : [30, 40, 30]); } catch { /* ignore */ }
  };

  const next = useCallback(() => {
    if (!cur || picked === null) return;
    const ok = cur.opts[picked].ok;
    if (asked >= len) {
      const right = hist.filter((h) => h.ok).length;
      if (sel) saveBest(sel.id, Math.round((right / Math.max(1, hist.length)) * 100));
      setPhase("done"); scrollTop(); return;
    }
    let want = lvl;
    if (mode === "adaptive") {
      if (ok && streak >= 2 && lvl < 3) { want = (lvl + 1) as Level; setStreak(0); }
      else if (!ok && lvl > 1) want = (lvl - 1) as Level;
      setLvlFlash(want > lvl ? "up" : want < lvl ? "down" : null);
    } else want = mode;
    const q = pickNext(pool, used.current, want);
    if (!q) { setPhase("done"); return; }
    used.current.add(q);
    setLvl(want); setCur(q); setAsked((n) => n + 1); setPicked(null);
  }, [cur, picked, asked, len, lvl, mode, streak, pool, hist, sel]);

  useEffect(() => {
    if (phase !== "play") return;
    const h = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= "4") answer(Number(e.key) - 1);
      else if ((e.key === "Enter" || e.key === " " || e.key === "ArrowRight") && picked !== null) { e.preventDefault(); next(); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  const groups = [
    { id: "krank", de: "Krankheiten & Organsysteme", ar: "الأمراض والأجهزة" },
    { id: "ausbildung", de: "Pflege, Recht & Beruf", ar: "التمريض والقانون والمهنة" },
  ] as const;
  const totalQs = QUIZ_TOPICS.reduce((n, t) => n + t.qs.length, 0);

  // ───────── Themenwahl ─────────
  if (phase === "pick")
    return (
      <div ref={topRef}>
        <PageHeader
          title={ar ? "اختبر نفسك" : "Quiz"}
          subtitle={ar ? `${totalQs} سؤالاً في ${QUIZ_TOPICS.length} مجالاً – اختر المجال ثم المستوى.` : `${totalQs} Fragen in ${QUIZ_TOPICS.length} Themen – wähle Thema und Niveau.`}
        />
        <button
          type="button"
          onClick={() => choose("mix", "Alles gemischt", "مزيج من كل المواضيع", "#0b8f8f", QUIZ_TOPICS)}
          className="qz-card mb-5 flex w-full items-center gap-4 rounded-2xl bg-gradient-to-br from-navy2 to-teal p-4 text-start text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[.98]"
        >
          <span className="qz-float grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/20"><Shuffle className="h-7 w-7" /></span>
          <span className="min-w-0">
            <span className="block text-lg font-bold">Alles gemischt</span>
            <span className="block text-sm opacity-90">{ar ? "مزيج من كل المواضيع" : `${totalQs} Fragen · alle Themen`}</span>
          </span>
          <ArrowRight className="ms-auto h-6 w-6 shrink-0 rtl:rotate-180" />
        </button>

        {groups.map((g) => {
          const list = QUIZ_TOPICS.filter((t) => t.group === g.id);
          if (!list.length) return null;
          return (
            <section key={g.id} className="mb-6">
              <h2 className="mb-2.5 text-sm font-bold uppercase tracking-wide text-muted">{ar ? g.ar : g.de}</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {list.map((t, n) => {
                  const b = best[t.id];
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => choose(t.id, t.de, t.ar, t.color, [t])}
                      className="qz-card group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-line bg-surface p-4 text-start shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg active:scale-[.97]"
                      style={{ animationDelay: `${40 + n * 45}ms` }}
                    >
                      <span className="absolute -end-6 -top-6 h-20 w-20 rounded-full opacity-15 transition-transform duration-500 group-hover:scale-150" style={{ background: t.color }} />
                      <span className="qz-ico grid h-12 w-12 place-items-center rounded-xl text-white shadow-md" style={{ background: t.color }}>
                        <Icon name={t.icon} className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block font-bold leading-tight">{ar ? t.ar : t.de}</span>
                        <span className="mt-0.5 block text-xs text-muted">{ar ? t.de : `${t.qs.length} Fragen`}</span>
                      </span>
                      {b !== undefined && (
                        <span className="mt-auto inline-flex items-center gap-1 rounded-full bg-surface2 px-2 py-0.5 text-xs font-semibold" style={{ color: b >= 75 ? "var(--ok)" : "var(--muted)" }}>
                          <Check className="h-3 w-3" /> {b}%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}

        <div className="mt-2">
          <button type="button" onClick={() => setShowMore((v) => !v)} aria-expanded={showMore} className="flex w-full items-center justify-between rounded-xl border border-line bg-surface px-4 py-3 text-start text-sm font-medium hover:bg-surface2">
            <span>{ar ? "امتحان تجريبي وإعدادات متقدمة (أسئلة الكتاب)" : "Probeprüfung & erweiterte Einstellungen (Aufgaben aus dem Buch)"}</span>
            <ChevronDown className={cn("h-5 w-5 transition-transform", showMore && "rotate-180")} />
          </button>
          {showMore && <div className="mt-4"><QuizSetup /></div>}
        </div>
      </div>
    );

  // ───────── Niveau & Länge ─────────
  if (phase === "config" && sel) {
    const avail = sel.topics.reduce((n, t) => n + t.qs.length, 0);
    const byLevel = ([1, 2, 3] as Level[]).map((l) => sel.topics.reduce((n, t) => n + t.qs.filter((q) => q[0] === l).length, 0));
    const opts: { m: Mode; de: string; ar: string; dd: string; da: string; color: string }[] = [
      { m: "adaptive", de: "Adaptiv", ar: "تكيفي", dd: "Startet mittel und wird schwerer, wenn du richtig antwortest – leichter, wenn du Fehler machst.", da: "يبدأ متوسطًا ويصعب مع الإجابات الصحيحة ويسهل عند الخطأ.", color: "#0b8f8f" },
      { m: 1, de: "Leicht", ar: "سهل", dd: `Grundlagen und Begriffe · ${byLevel[0]} Fragen`, da: `الأساسيات والمصطلحات · ${byLevel[0]} سؤال`, color: LEVELS[1].color },
      { m: 2, de: "Mittel", ar: "متوسط", dd: `Prüfungsniveau, Anwendung · ${byLevel[1]} Fragen`, da: `مستوى الامتحان والتطبيق · ${byLevel[1]} سؤال`, color: LEVELS[2].color },
      { m: 3, de: "Schwer", ar: "صعب", dd: `Fallbeispiele, Abwägen, Details · ${byLevel[2]} Fragen`, da: `حالات وموازنة وتفاصيل · ${byLevel[2]} سؤال`, color: LEVELS[3].color },
    ];
    const lens = [8, 15, 25].filter((n) => n <= avail || n === 8);
    return (
      <div ref={topRef} className="qz-slide mx-auto max-w-2xl">
        <button type="button" onClick={() => setPhase("pick")} className="mb-3 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"><ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {ar ? "المجالات" : "Themen"}</button>
        <h1 className="text-2xl font-bold">{ar ? sel.ar : sel.de}</h1>
        <p className="mb-4 text-sm text-muted">{ar ? sel.de : `${avail} Fragen verfügbar`}</p>
        <h2 className="mb-2 text-sm font-bold">{ar ? "المستوى" : "Niveau"}</h2>
        <div className="grid gap-2.5">
          {opts.map((o, n) => (
            <button
              key={String(o.m)}
              type="button"
              onClick={() => setMode(o.m)}
              aria-pressed={mode === o.m}
              className={cn("qz-card flex items-start gap-3 rounded-xl border-2 p-3.5 text-start transition-all active:scale-[.98]", mode === o.m ? "bg-surface shadow-md" : "border-line bg-surface hover:border-teal")}
              style={{ animationDelay: `${n * 50}ms`, borderColor: mode === o.m ? o.color : undefined }}
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white" style={{ background: o.color }}>{mode === o.m ? <Check className="qz-pop h-4 w-4" /> : null}</span>
              <span>
                <span className="block font-bold">{ar ? o.ar : o.de}</span>
                <span className="block text-sm text-muted">{ar ? o.da : o.dd}</span>
              </span>
            </button>
          ))}
        </div>
        <h2 className="mb-2 mt-5 text-sm font-bold">{ar ? "عدد الأسئلة" : "Anzahl Fragen"}</h2>
        <div className="flex gap-2">
          {lens.map((n) => (
            <button key={n} type="button" onClick={() => setLen(n)} aria-pressed={len === n} className={cn("min-w-16 rounded-xl border-2 px-4 py-2.5 font-bold transition-all active:scale-95", len === n ? "border-teal bg-tealsoft text-teal" : "border-line bg-surface hover:border-teal")}>{n}</button>
          ))}
        </div>
        <button type="button" onClick={begin} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy2 px-4 py-3.5 text-lg font-bold text-white shadow-lg transition-transform hover:brightness-110 active:scale-[.98] dark:bg-teal dark:text-[#04222a]">
          {ar ? "ابدأ" : "Starten"} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
        </button>
      </div>
    );
  }

  // ───────── Quiz ─────────
  if (phase === "play" && cur && sel) {
    const answered = picked !== null;
    const right = answered && cur.opts[picked].ok;
    const L = LEVELS[cur.level];
    return (
      <div ref={topRef} className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <button type="button" aria-label="Beenden" onClick={() => setPhase("pick")} className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface hover:bg-surface2">
            <X className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="flex gap-1" role="progressbar" aria-valuemin={0} aria-valuemax={len} aria-valuenow={hist.length} aria-label="Fortschritt">
              {Array.from({ length: len }, (_, n) => {
                const h = hist[n];
                return <span key={n} className="h-2 flex-1 rounded-full transition-colors duration-500" style={{ background: h ? (h.ok ? "var(--ok)" : "var(--bad)") : n === hist.length ? `${sel.color}88` : "var(--surface-2)" }} />;
              })}
            </div>
            <div className="mt-1 flex items-center justify-between text-xs text-muted">
              <span>{ar ? sel.ar : sel.de} · {asked}/{len}</span>
              <span className="flex items-center gap-2">
                {streak >= 2 && <span key={streak} className="qz-pop inline-flex items-center gap-1 font-bold text-warn"><Flame className="qz-flame h-4 w-4" /> {streak}</span>}
                <span key={cur.level + (lvlFlash ?? "")} className={cn("rounded-full px-2 py-0.5 font-bold text-white", lvlFlash && "qz-pop")} style={{ background: L.color }}>
                  {lvlFlash === "up" ? "▲ " : lvlFlash === "down" ? "▼ " : ""}{ar ? L.ar : L.de}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div key={cur.text[0]} className="qz-slide">
          <Card className="mb-4 !p-5">
            {sel.id === "mix" && (
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white" style={{ background: cur.topic.color }}>
                <Icon name={cur.topic.icon} className="h-3.5 w-3.5" /> {ar ? cur.topic.ar : cur.topic.de}
              </span>
            )}
            <h2 className="text-lg font-bold leading-snug">{cur.text[0]}</h2>
            {ar && cur.text[1] && <p dir="rtl" className="mt-2 text-base text-muted">{cur.text[1]}</p>}
          </Card>

          <div className="grid gap-2.5" role="group" aria-label="Antworten">
            {cur.opts.map((o, k) => {
              const isPick = picked === k;
              const st = !answered ? "idle" : o.ok ? "ok" : isPick ? "bad" : "dim";
              return (
                <button
                  key={k}
                  type="button"
                  disabled={answered}
                  onClick={() => answer(k)}
                  className={cn(
                    "relative flex items-center gap-3 rounded-xl border-2 p-3.5 text-start transition-all duration-200",
                    st === "idle" && "border-line bg-surface hover:-translate-y-0.5 hover:border-teal hover:shadow-md active:scale-[.98]",
                    st === "ok" && "qz-glow border-ok bg-oksoft",
                    st === "bad" && "qz-shake border-bad bg-badsoft",
                    st === "dim" && "border-line bg-surface opacity-50",
                  )}
                >
                  <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold transition-colors", st === "ok" ? "bg-ok text-white" : st === "bad" ? "bg-bad text-white" : "bg-surface2 text-muted")}>
                    {st === "ok" ? <Check className="qz-pop h-5 w-5" /> : st === "bad" ? <X className="qz-pop h-5 w-5" /> : "ABCD"[k]}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium leading-snug">{o.t[0]}</span>
                    {ar && o.t[1] && <span dir="rtl" className="mt-0.5 block text-sm text-muted">{o.t[1]}</span>}
                  </span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={cn("qz-slide mt-4 rounded-2xl border-2 p-4", right ? "border-ok bg-oksoft" : "border-bad bg-badsoft")} role="status">
              <p className={cn("flex items-center gap-2 text-lg font-bold", right ? "text-ok" : "text-bad")}>
                {right ? <Check className="qz-pop h-5 w-5" /> : <X className="qz-pop h-5 w-5" />}
                {right ? (ar ? "صحيح!" : "Richtig!") : (ar ? "إجابة خاطئة" : "Leider falsch")}
              </p>
              {!right && <p className="mt-1 text-sm"><b>{ar ? "الجواب الصحيح:" : "Richtig wäre:"}</b> {cur.opts.find((o) => o.ok)?.t[0]}</p>}
              <div className="mt-3 border-t border-black/10 pt-3 dark:border-white/10">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">{ar ? "الشرح" : "Erklärung"}</p>
                {cur.why.map((p, n) => (
                  <div key={n} className="mb-2 last:mb-0">
                    <p className="text-sm leading-relaxed">{p[0]}</p>
                    {ar && p[1] && <p dir="rtl" className="mt-1 text-sm leading-relaxed text-muted">{p[1]}</p>}
                  </div>
                ))}
              </div>
              <button type="button" onClick={next} autoFocus className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy2 px-4 py-3 font-semibold text-white transition-transform hover:brightness-110 active:scale-[.98] dark:bg-teal dark:text-[#04222a]">
                {asked >= len ? (ar ? "النتيجة" : "Ergebnis") : (ar ? "التالي" : "Weiter")} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ───────── Ergebnis ─────────
  const right = hist.filter((h) => h.ok).length;
  const total = Math.max(1, hist.length);
  const pct = Math.round((right / total) * 100);
  const len2 = 2 * Math.PI * 54;
  const off = len2 * (1 - pct / 100);
  const msg = pct >= 90 ? ["Ausgezeichnet!", "ممتاز!"] : pct >= 70 ? ["Stark gemacht!", "أحسنت!"] : pct >= 50 ? ["Guter Anfang – weiter üben.", "بداية جيدة – واصل التدريب."] : ["Noch Luft nach oben – lies die Lektionen nochmal.", "تحتاج مراجعة – أعد قراءة الدروس."];
  const bits = pct >= 70 ? Array.from({ length: 26 }, (_, n) => n) : [];
  const missed = hist.filter((h) => !h.ok).map((h) => h.item);
  return (
    <div ref={topRef} className="relative mx-auto max-w-xl overflow-hidden">
      {bits.map((n) => (
        <span key={n} className="qz-bit" style={{ background: ["#0b8f8f", "#f59e0b", "#e11d48", "#6366f1", "#16a34a"][n % 5], ["--dx" as string]: `${(Math.random() - 0.5) * 420}px`, ["--dy" as string]: `${-80 + Math.random() * 360}px`, ["--r" as string]: `${Math.random() * 720}deg`, animationDelay: `${Math.random() * 0.25}s` }} />
      ))}
      <Card className="qz-slide text-center">
        <p className="text-sm font-medium text-muted">{sel ? (ar ? sel.ar : sel.de) : ""}</p>
        <div className="relative mx-auto my-4 h-36 w-36">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--surface-2)" strokeWidth="10" />
            <circle cx="60" cy="60" r="54" fill="none" stroke={pct >= 70 ? "var(--ok)" : pct >= 50 ? "var(--warn)" : "var(--bad)"} strokeWidth="10" strokeLinecap="round" className="qz-ring-arc" style={{ ["--len" as string]: len2, ["--off" as string]: off }} />
          </svg>
          <div className="absolute inset-0 grid place-items-center"><div><div className="qz-pop text-4xl font-extrabold">{right}/{hist.length}</div><div className="text-xs text-muted">{pct}%</div></div></div>
        </div>
        <h2 className="text-xl font-bold">{ar ? msg[1] : msg[0]}</h2>
        {ar && <p className="text-sm text-muted" dir="rtl">{msg[0]}</p>}

        <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
          {([1, 2, 3] as Level[]).map((l) => {
            const hs = hist.filter((h) => h.item.level === l);
            return (
              <div key={l} className="rounded-xl bg-surface2 p-2">
                <div className="text-xs font-bold" style={{ color: LEVELS[l].color }}>{ar ? LEVELS[l].ar : LEVELS[l].de}</div>
                <div className="font-bold">{hs.length ? `${hs.filter((h) => h.ok).length}/${hs.length}` : "–"}</div>
              </div>
            );
          })}
        </div>

        {missed.length > 0 && (
          <div className="mt-5 text-start">
            <h3 className="mb-2 text-sm font-bold">{ar ? "راجع هذه الأسئلة" : "Das solltest du wiederholen"}</h3>
            <ul className="space-y-2">
              {missed.map((m, n) => (
                <li key={n} className="qz-slide rounded-xl border border-line bg-surface2 p-3 text-sm" style={{ animationDelay: `${n * 80}ms` }}>
                  <p className="font-semibold">{m.text[0]}</p>
                  <p className="mt-1 text-ok"><Check className="me-1 inline h-4 w-4" />{m.opts.find((o) => o.ok)?.t[0]}</p>
                  <p className="mt-1 text-muted">{m.why[0][0]}</p>
                  {ar && m.why[0][1] && <p dir="rtl" className="mt-1 text-muted">{m.why[0][1]}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <button type="button" onClick={begin} className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy2 px-4 py-3 font-semibold text-white active:scale-[.98] dark:bg-teal dark:text-[#04222a]"><RotateCcw className="h-5 w-5" /> {ar ? "أعد الاختبار" : "Nochmal"}</button>
          <button type="button" onClick={() => setPhase("pick")} className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 font-semibold hover:bg-surface2 active:scale-[.98]"><ArrowLeft className="h-5 w-5 rtl:rotate-180" /> {ar ? "مجال آخر" : "Anderes Thema"}</button>
        </div>
      </Card>
    </div>
  );
}
