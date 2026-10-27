"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { nowMs } from "@/lib/clock";
import { Award, BookOpenCheck, Clock, ListChecks, PlayCircle, TrendingUp, AlertTriangle, ClipboardList } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { newId, useUserContext } from "@/lib/hooks";
import { chapterStats, formatDuration, latestAttempts, overallStats, weakestTopics } from "@/lib/stats";
import { defaultConfig, eligibleQuestions, sessionFromIds } from "@/lib/exam";
import { Badge, Button, EmptyState, LinkButton, PageHeader, Progress, Spinner, StatCard } from "./ui";
import { useT } from "@/lib/i18n";

export function Dashboard() {
  const { state, dispatch, flush } = useStore();
  const bank = useBank();
  const ctx = useUserContext();
  const router = useRouter();
  const t = useT();
  const [now] = useState(nowMs);

  const stats = useMemo(() => overallStats(bank.questions, state.attempts, state.log, now), [bank.questions, state.attempts, state.log, now]);
  const chStats = useMemo(() => chapterStats(bank.chapters, bank.questions, state.attempts), [bank.chapters, bank.questions, state.attempts]);
  const weak = useMemo(() => weakestTopics(chStats), [chStats]);
  const latest = useMemo(() => latestAttempts(state.attempts), [state.attempts]);

  if (bank.status === "loading") return <Spinner label="Fragenbank wird geladen …" />;

  if (bank.status !== "ready")
    return (
      <>
        <PageHeader title="Willkommen bei Pflege Exam Pro" />
        <EmptyState icon={<ClipboardList className="h-6 w-6" />} title={bank.status === "error" ? "Fragenbank konnte nicht geladen werden" : "Noch keine Fragen importiert"} action={<LinkButton href="/admin/">Zum Import-Bereich</LinkButton>}>
          {bank.error ?? "Importieren Sie zuerst das PDF (siehe README). Es werden keine Beispielfragen erfunden."}
        </EmptyState>
      </>
    );

  const active = state.activeSessionId ? state.sessions[state.activeSessionId] : undefined;
  const hasData = state.attempts.length > 0;
  const mistakes = [...latest.values()].filter((a) => a.correct === false).sort((a, b) => b.at - a.at).slice(0, 5);
  const bookmarked = bank.questions.filter((q) => state.qdata[q.id]?.bookmarked).slice(0, 5);
  const recent = [...state.log].sort((a, b) => (b.finishedAt ?? b.startedAt) - (a.finishedAt ?? a.startedAt)).slice(0, 5);
  const dueCount = ctx.dueIds.size;
  const goal = state.settings.studyGoalPerDay;

  function launch(ids: string[], title: string, mode: "practice" | "mock" = "practice") {
    if (ids.length === 0) return;
    const cfg = defaultConfig({ title, mode, passPercent: state.settings.passPercent, feedback: mode === "mock" ? "end" : state.settings.defaultFeedback, showExplanations: mode === "mock" ? "end" : state.settings.defaultFeedback, timeLimitMin: mode === "mock" ? state.settings.defaultTimeLimitMin || 60 : state.settings.defaultTimeLimitMin });
    const s = sessionFromIds(ids, bank.byId, cfg, { id: newId("s"), now: nowMs() });
    dispatch({ type: "session", session: s, makeActive: true });
    void flush().then(() => router.push(`/quiz/run/?id=${s.id}`));
  }

  function continueLearning() {
    if (active) return router.push(`/quiz/run/?id=${active.id}`);
    // Nächste unbeantwortete Fälle in Buchreihenfolge (ganze Fälle bleiben zusammen)
    const pool = eligibleQuestions(bank.questions, defaultConfig({ source: "unanswered" }), ctx);
    const firstCase = pool[0]?.caseId;
    const ids = firstCase ? pool.filter((q) => q.caseId === firstCase).map((q) => q.id) : pool.slice(0, state.settings.defaultQuestionCount).map((q) => q.id);
    launch(ids, firstCase ? (bank.caseById.get(firstCase)?.title ?? "Weiterlernen") : "Weiterlernen");
  }

  function randomCase() {
    const withQ = bank.cases.filter((c) => bank.questions.some((q) => q.caseId === c.id));
    if (!withQ.length) return;
    const c = withQ[Math.floor(Math.random() * withQ.length)];
    launch(bank.questions.filter((q) => q.caseId === c.id).map((q) => q.id), c.title);
  }

  const pct = Math.min(100, Math.round((stats.todayAnswered / goal) * 100));
  const R = 34;
  const C = 2 * Math.PI * R;

  return (
    <>
      <section className="scene-hero relative overflow-hidden rounded-3xl p-5 text-white shadow-md sm:p-7" style={{ background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 60%, #38bdf8 100%)" }}>
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm opacity-90">{hasData ? t("dash.hello") : t("dash.hello.new")} 👋</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight sm:text-3xl">Pflege Exam Pro</h1>
            <button onClick={continueLearning} className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-semibold text-teal-800 shadow-sm transition-transform active:scale-95">
              <PlayCircle className="h-5 w-5" aria-hidden /> {active ? t("dash.resume") : t("dash.continue")}
            </button>
          </div>
          <div className="relative h-24 w-24 shrink-0" role="img" aria-label={`${t("dash.today")}: ${Math.min(stats.todayAnswered, goal)} ${t("dash.goalOf", goal)}`}>
            <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
              <circle cx="40" cy="40" r={R} fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="8" />
              <circle cx="40" cy="40" r={R} fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)} style={{ transition: "stroke-dashoffset .8s ease" }} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center leading-tight">
              <span className="text-xl font-bold tabular-nums">{Math.min(stats.todayAnswered, goal)}</span>
              <span className="text-xs opacity-90">/ {goal}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Tile emoji="🩺" color="#0f766e" title={t("dash.tile.cases")} sub={t("dash.tile.cases.sub")} onClick={() => router.push("/cases/")} />
        <Tile emoji="⚡" color="#7c3aed" title={t("dash.tile.quiz")} sub={t("dash.tile.quiz.sub")} onClick={() => launch(shuffleIds(bank.questions.map((q) => q.id)).slice(0, 10), "Schnellquiz")} />
        <Tile emoji="⏱️" color="#c2410c" title={t("dash.tile.mock")} sub={t("dash.tile.mock.sub")} onClick={() => router.push("/quiz/setup/?preset=mock")} />
        <Tile emoji="🔁" color="#be185d" title={dueCount ? `${dueCount} ${t("dash.tile.due")}` : t("dash.tile.mistakes")} sub={t("dash.tile.mistakes.sub")} onClick={() => router.push(dueCount ? "/quiz/setup/?preset=due" : "/quiz/setup/?preset=mistakes")} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <MiniStat value={stats.answered} label={t("dash.stat.done")} />
        <MiniStat value={stats.accuracy === null ? "–" : `${Math.round(stats.accuracy)} %`} label={t("dash.stat.accuracy")} />
        <MiniStat value={stats.streakDays ? `🔥 ${stats.streakDays}` : "–"} label={t("dash.stat.streak")} />
      </div>

      <details className="group mt-6 rounded-2xl border border-line bg-surface">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 font-medium">
          {t("dash.more")}
          <span aria-hidden className="text-muted transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div className="space-y-5 border-t border-line p-4">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <StatCard icon={<ListChecks className="h-5 w-5" />} label="Aufgaben" value={stats.total} hint={`${stats.remaining} offen`} />
            <StatCard icon={<Clock className="h-5 w-5" />} label="Lernzeit" value={stats.studyTimeMs ? formatDuration(stats.studyTimeMs) : "–"} />
            <StatCard icon={<BookOpenCheck className="h-5 w-5" />} label="Prüfungen" value={stats.completedExams} />
            <StatCard icon={<Award className="h-5 w-5" />} label="Ø Prüfung" value={stats.avgExamScore === null ? "–" : `${String(stats.avgExamScore).replace(".", ",")} %`} />
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <AlertTriangle className="h-4 w-4 text-warn" aria-hidden /> Schwächste Themen
              </h2>
              {weak.length === 0 ? (
                <p className="text-sm text-muted">Noch nicht genug bewertete Antworten.</p>
              ) : (
                <ul className="space-y-3">
                  {weak.map((w) => (
                    <li key={w.chapterId}>
                      <div className="flex justify-between text-sm">
                        <Link className="hover:underline" href={`/library/?chapter=${w.chapterId}`}>{w.title}</Link>
                        <span className="tabular-nums text-muted">{String(w.accuracy).replace(".", ",")} %</span>
                      </div>
                      <Progress value={w.accuracy ?? 0} tone="bad" label={w.title} className="mt-1" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <TrendingUp className="h-4 w-4 text-teal" aria-hidden /> Fortschritt nach Kapitel
              </h2>
              <ul className="space-y-3">
                {chStats.map((c) => (
                  <li key={c.chapterId}>
                    <div className="flex justify-between text-sm">
                      <span>{c.title}</span>
                      <span className="tabular-nums text-muted">{c.answered}/{c.total}</span>
                    </div>
                    <Progress value={(c.answered / c.total) * 100} label={c.title} className="mt-1" />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold">Letzte Lerneinheiten</h2>
              {recent.length === 0 ? (
                <p className="text-sm text-muted">Noch keine Sitzungen.</p>
              ) : (
                <ul className="divide-y divide-line text-sm">
                  {recent.map((l) => (
                    <li key={l.sessionId} className="flex items-center justify-between gap-3 py-2">
                      <Link className="min-w-0 truncate hover:underline" href={`/quiz/results/?id=${l.sessionId}`}>{l.title}</Link>
                      <span className="shrink-0 text-xs text-muted">
                        {l.answered}/{l.total}
                        {l.scorePercent !== null ? ` · ${String(l.scorePercent).replace(".", ",")} %` : ""}
                        {!l.finishedAt && <Badge tone="warn" className="ml-2">offen</Badge>}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold">Zuletzt falsch & Lesezeichen</h2>
              {mistakes.length === 0 && bookmarked.length === 0 ? (
                <p className="text-sm text-muted">Noch nichts vorhanden.</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {mistakes.map((a) => {
                    const q = bank.byId.get(a.questionId);
                    return q ? (
                      <li key={a.id}>
                        <Link className="flex gap-2 hover:underline" href={`/question/?id=${q.id}`}>
                          <Badge tone="bad">Fehler</Badge>
                          <span className="line-clamp-1">{q.text}</span>
                        </Link>
                      </li>
                    ) : null;
                  })}
                  {bookmarked.map((q) => (
                    <li key={q.id}>
                      <Link className="flex gap-2 hover:underline" href={`/question/?id=${q.id}`}>
                        <Badge tone="teal">Merk</Badge>
                        <span className="line-clamp-1">{q.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={randomCase}>🎲 Zufälliges Fallbeispiel</Button>
        </div>
      </details>
    </>
  );
}

function shuffleIds(ids: string[]) {
  const a = [...ids];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Tile({ emoji, color, title, sub, onClick }: { emoji: string; color: string; title: string; sub: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex min-h-[7.5rem] flex-col items-start justify-between rounded-2xl border border-line bg-surface p-4 text-start shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[.98]">
      <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl text-white" style={{ background: color }}>{emoji}</span>
      <span>
        <span className="block font-semibold leading-tight">{title}</span>
        <span className="mt-0.5 block text-xs text-muted">{sub}</span>
      </span>
    </button>
  );
}

function MiniStat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-3 text-center">
      <div className="text-xl font-bold tabular-nums">{value}</div>
      <div className="text-[11px] text-muted">{label}</div>
    </div>
  );
}
