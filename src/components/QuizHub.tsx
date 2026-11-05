"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Flame, RotateCcw, Shuffle, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { useLang } from "@/lib/i18n";
import { playTone } from "@/lib/sound";
import { QUIZ_TOPICS, type QuizTopic, type QTuple } from "@/data/quiz";
import { Icon } from "./Icon";
import { QuizSetup } from "./QuizSetup";
import { Card, PageHeader, cn } from "./ui";

const PER_QUIZ = 8;
const BEST_KEY = "pep-quiz-best-v1";

interface Q { topic: QuizTopic; text: string[]; opts: { t: string[]; ok: boolean }[]; why: string[] }

const split = (s: string) => s.split("|");
function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}
function build(topic: QuizTopic, tuple: QTuple): Q {
  const [q, o, c, w] = tuple;
  return { topic, text: split(q), opts: shuffle(o.map((t, i) => ({ t: split(t), ok: i === c }))), why: split(w) };
}
function readBest(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(BEST_KEY) || "{}"); } catch { return {}; }
}
function saveBest(id: string, pct: number) {
  try { const b = readBest(); if ((b[id] ?? -1) < pct) { b[id] = pct; localStorage.setItem(BEST_KEY, JSON.stringify(b)); } } catch { /* ignore */ }
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
  const [phase, setPhase] = useState<"pick" | "play" | "done">("pick");
  const [title, setTitle] = useState<{ de: string; ar: string; id: string; color: string }>({ de: "", ar: "", id: "", color: "#0b8f8f" });
  const [qs, setQs] = useState<Q[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState<Record<string, number>>({});
  const [missed, setMissed] = useState<Q[]>([]);
  const [showMore, setShowMore] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setBest(readBest()); }, [phase]);

  const start = useCallback((topics: QuizTopic[], t: { de: string; ar: string; id: string; color: string }) => {
    const pool = topics.flatMap((tp) => tp.qs.map((q) => ({ tp, q })));
    const chosen = shuffle(pool).slice(0, PER_QUIZ).map(({ tp, q }) => build(tp, q));
    setTitle(t); setQs(chosen); setI(0); setPicked(null); setScore(0); setStreak(0); setMissed([]); setPhase("play");
    topRef.current?.scrollIntoView({ block: "start" });
  }, []);

  const answer = (k: number) => {
    if (picked !== null) return;
    const q = qs[i];
    const ok = q.opts[k].ok;
    setPicked(k);
    if (ok) { setScore((s) => s + 1); setStreak((s) => s + 1); } else { setStreak(0); setMissed((m) => [...m, q]); }
    if (sound) playTone(ok ? "ok" : "bad");
    try { navigator.vibrate?.(ok ? 15 : [30, 40, 30]); } catch { /* ignore */ }
  };

  const next = useCallback(() => {
    if (i + 1 >= qs.length) {
      saveBest(title.id, Math.round(((score) / qs.length) * 100));
      setPhase("done");
    } else { setI(i + 1); setPicked(null); }
  }, [i, qs.length, score, title.id]);

  useEffect(() => {
    if (phase !== "play") return;
    const h = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= "4") answer(Number(e.key) - 1);
      else if ((e.key === "Enter" || e.key === " " || e.key === "ArrowRight") && picked !== null) { e.preventDefault(); next(); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  const mix = useMemo(() => ({ de: "Alles gemischt", ar: "مزيج من كل المواضيع", id: "mix", color: "#0b8f8f" }), []);

  if (phase === "pick")
    return (
      <div ref={topRef}>
        <PageHeader
          title={ar ? "اختبر نفسك" : "Quiz"}
          subtitle={ar ? "اختر المجال، وستحصل على 8 أسئلة قصيرة مع جواب فوري وشرح." : "Wähle ein Fachgebiet – 8 kurze Fragen, sofort Feedback mit Erklärung."}
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <button
            type="button"
            onClick={() => start(QUIZ_TOPICS, mix)}
            className="qz-card col-span-2 flex items-center gap-4 rounded-2xl bg-gradient-to-br from-navy2 to-teal p-4 text-start text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[.98] sm:col-span-3 lg:col-span-4"
            style={{ animationDelay: "0ms" }}
          >
            <span className="qz-float grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/20"><Shuffle className="h-7 w-7" /></span>
            <span className="min-w-0">
              <span className="block text-lg font-bold">{mix.de}</span>
              <span className="block text-sm opacity-90">{ar ? mix.ar : `${QUIZ_TOPICS.length} Themen · Zufallsmix`}</span>
            </span>
            <ArrowRight className="ms-auto h-6 w-6 shrink-0 rtl:rotate-180" />
          </button>
          {QUIZ_TOPICS.map((t, n) => {
            const b = best[t.id];
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => start([t], { de: t.de, ar: t.ar, id: t.id, color: t.color })}
                className="qz-card group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-line bg-surface p-4 text-start shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg active:scale-[.97]"
                style={{ animationDelay: `${60 + n * 55}ms` }}
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

        <div className="mt-6">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            className="flex w-full items-center justify-between rounded-xl border border-line bg-surface px-4 py-3 text-start text-sm font-medium hover:bg-surface2"
          >
            <span>{ar ? "امتحان تجريبي وإعدادات متقدمة (أسئلة الكتاب)" : "Probeprüfung & erweiterte Einstellungen (Aufgaben aus dem Buch)"}</span>
            <ChevronDown className={cn("h-5 w-5 transition-transform", showMore && "rotate-180")} />
          </button>
          {showMore && <div className="mt-4"><QuizSetup /></div>}
        </div>
      </div>
    );

  if (phase === "play") {
    const q = qs[i];
    const answered = picked !== null;
    const right = answered && q.opts[picked].ok;
    return (
      <div ref={topRef} className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <button type="button" aria-label="Beenden" onClick={() => setPhase("pick")} className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface hover:bg-surface2">
            <X className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="flex gap-1.5" role="progressbar" aria-valuemin={0} aria-valuemax={qs.length} aria-valuenow={i + (answered ? 1 : 0)} aria-label="Fortschritt">
              {qs.map((_, n) => (
                <span key={n} className="h-2 flex-1 rounded-full bg-surface2">
                  <span className="block h-full rounded-full transition-all duration-500" style={{ width: n < i || (n === i && answered) ? "100%" : n === i ? "35%" : "0%", background: n < i || (n === i && answered) ? title.color : `${title.color}88` }} />
                </span>
              ))}
            </div>
            <div className="mt-1 flex items-center justify-between text-xs text-muted">
              <span>{ar ? title.ar : title.de} · {i + 1}/{qs.length}</span>
              {streak >= 2 && <span key={streak} className="qz-pop inline-flex items-center gap-1 font-bold text-warn"><Flame className="qz-flame h-4 w-4" /> {streak}</span>}
            </div>
          </div>
        </div>

        <div key={i} className="qz-slide">
          <Card className="mb-4 !p-5">
            {title.id === "mix" && (
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white" style={{ background: q.topic.color }}>
                <Icon name={q.topic.icon} className="h-3.5 w-3.5" /> {ar ? q.topic.ar : q.topic.de}
              </span>
            )}
            <h2 className="text-lg font-bold leading-snug">{q.text[0]}</h2>
            {ar && <p dir="rtl" className="mt-2 text-base text-muted">{q.text[1]}</p>}
          </Card>

          <div className="grid gap-2.5" role="group" aria-label="Antworten">
            {q.opts.map((o, k) => {
              const isPick = picked === k;
              const state = !answered ? "idle" : o.ok ? "ok" : isPick ? "bad" : "dim";
              return (
                <button
                  key={k}
                  type="button"
                  disabled={answered}
                  onClick={() => answer(k)}
                  className={cn(
                    "relative flex items-center gap-3 rounded-xl border-2 p-3.5 text-start transition-all duration-200",
                    state === "idle" && "border-line bg-surface hover:-translate-y-0.5 hover:border-teal hover:shadow-md active:scale-[.98]",
                    state === "ok" && "qz-glow border-ok bg-oksoft",
                    state === "bad" && "qz-shake border-bad bg-badsoft",
                    state === "dim" && "border-line bg-surface opacity-50",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold transition-colors",
                      state === "idle" && "bg-surface2 text-muted",
                      state === "ok" && "bg-ok text-white",
                      state === "bad" && "bg-bad text-white",
                      state === "dim" && "bg-surface2 text-muted",
                    )}
                  >
                    {state === "ok" ? <Check className="qz-pop h-5 w-5" /> : state === "bad" ? <X className="qz-pop h-5 w-5" /> : "ABCD"[k]}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium leading-snug">{o.t[0]}</span>
                    {ar && <span dir="rtl" className="mt-0.5 block text-sm text-muted">{o.t[1]}</span>}
                  </span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={cn("qz-slide mt-4 rounded-2xl border-2 p-4", right ? "border-ok bg-oksoft" : "border-bad bg-badsoft")} role="status">
              <p className={cn("flex items-center gap-2 font-bold", right ? "text-ok" : "text-bad")}>
                {right ? <Check className="qz-pop h-5 w-5" /> : <X className="qz-pop h-5 w-5" />}
                {right ? (ar ? "صحيح! 🎉" : "Richtig!") : (ar ? "إجابة خاطئة" : "Leider falsch")}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed">{q.why[0]}</p>
              {ar && <p dir="rtl" className="mt-1 text-sm leading-relaxed text-muted">{q.why[1]}</p>}
              <button
                type="button"
                onClick={next}
                autoFocus
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy2 px-4 py-3 font-semibold text-white transition-transform hover:brightness-110 active:scale-[.98] dark:bg-teal dark:text-[#04222a]"
              >
                {i + 1 >= qs.length ? (ar ? "النتيجة" : "Ergebnis") : (ar ? "التالي" : "Weiter")} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // done
  const pct = Math.round((score / qs.length) * 100);
  const len = 2 * Math.PI * 54;
  const off = len * (1 - pct / 100);
  const msg = pct >= 90 ? ["Ausgezeichnet!", "ممتاز!"] : pct >= 70 ? ["Stark gemacht!", "أحسنت!"] : pct >= 50 ? ["Guter Anfang – weiter üben.", "بداية جيدة – واصل التدريب."] : ["Noch Luft nach oben – lies die Lektion nochmal.", "تحتاج مراجعة – أعد قراءة الدرس."];
  const bits = pct >= 70 ? Array.from({ length: 26 }, (_, n) => n) : [];
  return (
    <div ref={topRef} className="relative mx-auto max-w-xl overflow-hidden">
      {bits.map((n) => (
        <span
          key={n}
          className="qz-bit"
          style={{
            background: ["#0b8f8f", "#f59e0b", "#e11d48", "#6366f1", "#16a34a"][n % 5],
            ["--dx" as string]: `${(Math.random() - 0.5) * 420}px`,
            ["--dy" as string]: `${-80 + Math.random() * 360}px`,
            ["--r" as string]: `${Math.random() * 720}deg`,
            animationDelay: `${Math.random() * 0.25}s`,
          }}
        />
      ))}
      <Card className="qz-slide text-center">
        <p className="text-sm font-medium text-muted">{ar ? title.ar : title.de}</p>
        <div className="relative mx-auto my-4 h-36 w-36">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--surface-2)" strokeWidth="10" />
            <circle cx="60" cy="60" r="54" fill="none" stroke={pct >= 70 ? "var(--ok)" : pct >= 50 ? "var(--warn)" : "var(--bad)"} strokeWidth="10" strokeLinecap="round" className="qz-ring-arc" style={{ ["--len" as string]: len, ["--off" as string]: off }} />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div>
              <div className="qz-pop text-4xl font-extrabold">{score}/{qs.length}</div>
              <div className="text-xs text-muted">{pct}%</div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold">{ar ? msg[1] : msg[0]}</h2>
        {ar && <p className="text-sm text-muted" dir="rtl">{msg[0]}</p>}

        {missed.length > 0 && (
          <div className="mt-5 text-start">
            <h3 className="mb-2 text-sm font-bold">{ar ? "راجع هذه الأسئلة" : "Das solltest du wiederholen"}</h3>
            <ul className="space-y-2">
              {missed.map((m, n) => (
                <li key={n} className="qz-slide rounded-xl border border-line bg-surface2 p-3 text-sm" style={{ animationDelay: `${n * 80}ms` }}>
                  <p className="font-semibold">{m.text[0]}</p>
                  <p className="mt-1 text-ok"><Check className="me-1 inline h-4 w-4" />{m.opts.find((o) => o.ok)?.t[0]}</p>
                  <p className="mt-1 text-muted">{m.why[0]}</p>
                  {ar && <p dir="rtl" className="mt-1 text-muted">{m.why[1]}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <button type="button" onClick={() => start(title.id === "mix" ? QUIZ_TOPICS : QUIZ_TOPICS.filter((t) => t.id === title.id), title)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy2 px-4 py-3 font-semibold text-white active:scale-[.98] dark:bg-teal dark:text-[#04222a]">
            <RotateCcw className="h-5 w-5" /> {ar ? "أعد الاختبار" : "Nochmal"}
          </button>
          <button type="button" onClick={() => setPhase("pick")} className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 font-semibold hover:bg-surface2 active:scale-[.98]">
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" /> {ar ? "مجال آخر" : "Anderes Thema"}
          </button>
        </div>
      </Card>
    </div>
  );
}
