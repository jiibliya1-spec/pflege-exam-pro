"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { nowMs } from "@/lib/clock";
import { Award, BookOpenCheck, Clock, Flame, ListChecks, PlayCircle, Target, TrendingUp, Zap, CheckCircle2, AlertTriangle, ClipboardList } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { newId, useUserContext } from "@/lib/hooks";
import { chapterStats, formatDuration, latestAttempts, overallStats, weakestTopics } from "@/lib/stats";
import { defaultConfig, eligibleQuestions, sessionFromIds } from "@/lib/exam";
import { Badge, Button, Card, EmptyState, LinkButton, Notice, PageHeader, Progress, Spinner, StatCard } from "./ui";

export function Dashboard() {
  const { state, dispatch, flush } = useStore();
  const bank = useBank();
  const ctx = useUserContext();
  const router = useRouter();
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

  const report = bank.bank!.report;
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

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle={hasData ? "Ihr Lernstand – berechnet aus Ihren gespeicherten Antworten." : "Schön, dass Sie da sind. Starten Sie mit einem Fallbeispiel oder einem kurzen Quiz."}
        actions={
          <Button size="lg" onClick={continueLearning}>
            <PlayCircle className="h-5 w-5" aria-hidden /> {active ? "Sitzung fortsetzen" : "Weiterlernen"}
          </Button>
        }
      />

      {report.coverageVerified === false && (
        <div className="mb-5">
          <Notice tone="warn" title="Importstatus">
            {report.pagesProcessed} von {report.pagesInPdf} PDF-Seiten per OCR verarbeitet · {report.questions} Aufgaben aus {report.cases} Fallbeispielen erkannt · {report.questionsVerified} Musterlösungen verifiziert. Die vollständige Abdeckung wurde <strong>nicht</strong> bestätigt.{" "}
            <Link className="underline" href="/admin/">Details im Import-Bericht</Link>
          </Notice>
        </div>
      )}

      {!hasData && (
        <Card className="mb-5 border-teal bg-tealsoft">
          <h2 className="text-lg font-semibold">So starten Sie</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
            <li>Öffnen Sie ein <Link className="underline" href="/cases/">Fallbeispiel</Link> und lesen Sie die Originalsituation.</li>
            <li>Bearbeiten Sie die Aufgaben unter <Link className="underline" href="/quiz/setup/">Quiz &amp; Prüfung</Link> – im Übungsmodus mit Sofort-Feedback.</li>
            <li>Bewerten Sie offene Antworten selbst anhand der Musterlösung. Ihre Statistiken erscheinen hier automatisch.</li>
          </ol>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<ListChecks className="h-5 w-5" />} label="Importierte Aufgaben" value={stats.total} hint="aus dem Buch (OCR)" />
        <StatCard icon={<CheckCircle2 className="h-5 w-5" />} label="Bearbeitet" value={stats.answered} hint={`${stats.remaining} offen`} />
        <StatCard icon={<Target className="h-5 w-5" />} label="Trefferquote (Punkte)" value={stats.accuracy === null ? "–" : `${String(stats.accuracy).replace(".", ",")} %`} hint={stats.gradedAttempts ? `${stats.gradedAttempts} bewertete Antworten` : "noch keine bewerteten Antworten"} />
        <StatCard icon={<Flame className="h-5 w-5" />} label="Lernserie" value={stats.streakDays ? `${stats.streakDays} Tag${stats.streakDays === 1 ? "" : "e"}` : "–"} hint={hasData ? `heute ${stats.todayAnswered} / Ziel ${goal}` : "beginnt mit der ersten Antwort"} />
        <StatCard icon={<Clock className="h-5 w-5" />} label="Lernzeit" value={stats.studyTimeMs ? formatDuration(stats.studyTimeMs) : "–"} />
        <StatCard icon={<BookOpenCheck className="h-5 w-5" />} label="Abgeschlossene Prüfungen" value={stats.completedExams} />
        <StatCard icon={<Award className="h-5 w-5" />} label="Ø Prüfungsergebnis" value={stats.avgExamScore === null ? "–" : `${String(stats.avgExamScore).replace(".", ",")} %`} />
        <StatCard icon={<Zap className="h-5 w-5" />} label="Fällige Wiederholungen" value={dueCount} hint="Leitner-System" />
      </div>

      {hasData && (
        <Card className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Tagesziel</span>
            <span className="tabular-nums text-muted">
              {Math.min(stats.todayAnswered, goal)} / {goal} Aufgaben
            </span>
          </div>
          <Progress value={(stats.todayAnswered / goal) * 100} label="Tagesziel" className="mt-2" tone={stats.todayAnswered >= goal ? "ok" : "teal"} />
        </Card>
      )}

      <h2 className="mb-3 mt-8 text-lg font-semibold">Schnellstart</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <QuickCard title="Quiz (10 Fragen)" text="Zufällige Aufgaben im Übungsmodus." onClick={() => launch(shuffleIds(bank.questions.map((q) => q.id)).slice(0, 10), "Schnellquiz")} />
        <QuickCard title="Probeprüfung" text="Prüfungsnah mit Zeitlimit, Auswertung am Ende." onClick={() => router.push("/quiz/setup/?preset=mock")} />
        <QuickCard title="Zufälliges Fallbeispiel" text="Ein kompletter Fall mit allen Aufgaben." onClick={randomCase} />
        <QuickCard title={dueCount ? `${dueCount} fällige wiederholen` : "Fehler wiederholen"} text={dueCount ? "Nach Ihrem Wiederholungsplan." : "Ihre zuletzt falsch beantworteten Aufgaben."} onClick={() => router.push(dueCount ? "/quiz/setup/?preset=due" : "/quiz/setup/?preset=mistakes")} />
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="mb-1 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-4 w-4 text-warn" aria-hidden /> Schwächste Themen
          </h2>
          <p className="mb-3 text-xs text-muted">App-generierte Empfehlung auf Basis Ihrer bewerteten Antworten (mind. 2 pro Kapitel).</p>
          {weak.length === 0 ? (
            <p className="text-sm text-muted">Noch nicht genug bewertete Antworten für eine Auswertung.</p>
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
        </Card>

        <Card>
          <h2 className="mb-3 flex items-center gap-2 font-semibold">
            <TrendingUp className="h-4 w-4 text-teal" aria-hidden /> Fortschritt nach Kapitel
          </h2>
          <ul className="space-y-3">
            {chStats.map((c) => (
              <li key={c.chapterId}>
                <div className="flex justify-between text-sm">
                  <span>{c.title}</span>
                  <span className="tabular-nums text-muted">
                    {c.answered}/{c.total}
                  </span>
                </div>
                <Progress value={(c.answered / c.total) * 100} label={c.title} className="mt-1" />
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="mb-3 font-semibold">Letzte Lerneinheiten</h2>
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
        </Card>

        <Card>
          <h2 className="mb-3 font-semibold">Zuletzt falsch & Lesezeichen</h2>
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
        </Card>
      </div>
      <p className="mt-6 text-xs text-muted">Alle Werte stammen aus den lokal gespeicherten Daten dieses Browsers (keine Demo-Werte).</p>
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

function QuickCard({ title, text, onClick }: { title: string; text: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="rounded-2xl border border-line bg-surface p-4 text-left transition-colors hover:border-teal hover:bg-tealsoft">
      <span className="block font-semibold">{title}</span>
      <span className="mt-1 block text-sm text-muted">{text}</span>
    </button>
  );
}
