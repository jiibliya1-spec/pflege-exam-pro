"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { nowMs } from "@/lib/clock";
import { CheckCircle2, Clock, HelpCircle, ListChecks, RotateCcw, XCircle } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { newId } from "@/lib/hooks";
import { evaluateSession, buildAttempts, buildLogEntry, sessionQuestions } from "@/lib/session";
import { sessionFromIds } from "@/lib/exam";
import { isChoice, summarize, gradeQuestion } from "@/lib/grading";
import { formatDuration } from "@/lib/stats";
import { nextSrs } from "@/lib/srs";
import { Badge, Button, Card, EmptyState, LinkButton, Notice, PageHeader, Progress, Spinner, cn } from "./ui";
import { GradeBadge, ModelAnswerBox, QuestionMeta, QuestionText, SelfAssess, questionTable } from "./QuestionView";
import type { SessionAnswer } from "@/lib/types";

export function QuizResults() {
  const id = useSearchParams().get("id") ?? "";
  const { state, dispatch, flush } = useStore();
  const bank = useBank();
  const router = useRouter();
  const session = state.sessions[id];
  const [filter, setFilter] = useState<"all" | "wrong" | "ungraded" | "flagged">("all");

  const ev = useMemo(() => (session ? evaluateSession(session, bank.byId) : null), [session, bank.byId]);

  if (bank.status === "loading") return <Spinner />;
  if (!session || !ev)
    return (
      <EmptyState title="Ergebnis nicht gefunden" action={<LinkButton href="/quiz/setup/">Neues Quiz</LinkButton>}>
        Diese Sitzung ist nicht (mehr) gespeichert.
      </EmptyState>
    );

  const qs = sessionQuestions(session, bank.byId);
  const finished = !!session.finishedAt;
  const s = ev.summary;
  const threshold = session.config.passPercent;

  // Selbstbewertung nachträglich ändern → Sitzung, Versuche, Verlauf und Wiederholungsplan aktualisieren
  function setSelf(qid: string, pts: number) {
    const answers: Record<string, SessionAnswer> = { ...session.answers, [qid]: { ...(session.answers[qid] ?? { timeMs: 0 }), selfPoints: pts } };
    const next = { ...session, answers, updatedAt: nowMs() };
    dispatch({ type: "session", session: next });
    const now = session.finishedAt ?? nowMs();
    const prevAttempt = state.attempts.find((a) => a.id === `${session.id}:${qid}`);
    for (const a of buildAttempts(next, bank.byId, now)) {
      if (a.questionId !== qid) continue;
      dispatch({ type: "attempt", attempt: a });
      if (a.correct !== null && (!prevAttempt || prevAttempt.gradedBy === "none")) {
        const prev = state.qdata[qid];
        dispatch({ type: "qdata", id: qid, patch: nextSrs(prev?.box ?? 0, a.correct, now) });
      }
    }
    if (session.finishedAt) dispatch({ type: "log", entry: buildLogEntry(next, bank.byId, session.finishedAt) });
  }

  // Ergebnisse je Kapitel / Fall
  const groups = new Map<string, { label: string; results: typeof ev.results }>();
  for (const q of qs) {
    const g = ev.byQuestion.get(q.id)!;
    const ch = bank.chapterById.get(q.chapterId);
    const key = q.caseId ?? q.chapterId;
    const label = q.caseId ? (bank.caseById.get(q.caseId)?.title ?? q.caseId) : ch ? `${ch.number} ${ch.title}` : "Sonstige";
    const e = groups.get(key) ?? { label, results: [] };
    e.results.push(g);
    groups.set(key, e);
  }

  const wrongIds = qs.filter((q) => {
    const g = ev.byQuestion.get(q.id)!;
    return g.scorable && !g.correct;
  }).map((q) => q.id);

  function retry(ids: string[], title: string) {
    const ns = sessionFromIds(ids, bank.byId, { ...session.config, title, mode: "practice", feedback: "instant", showExplanations: "instant", timeLimitMin: 0, source: "all" }, { id: newId("s"), now: nowMs() });
    dispatch({ type: "session", session: ns, makeActive: true });
    void flush().then(() => router.push(`/quiz/run/?id=${ns.id}`));
  }

  const visible = qs.filter((q) => {
    const g = ev.byQuestion.get(q.id)!;
    if (filter === "wrong") return g.scorable && !g.correct;
    if (filter === "ungraded") return g.status === "ungraded";
    if (filter === "flagged") return session.flagged.includes(q.id);
    return true;
  });

  const pass = ev.passed;

  return (
    <>
      <PageHeader
        title={finished ? "Ergebnis" : "Zwischenstand"}
        subtitle={session.config.title || undefined}
        crumbs={[{ label: "Start", href: "/" }, { label: "Quiz & Prüfung", href: "/quiz/setup/" }, { label: "Ergebnis" }]}
        actions={
          <>
            {wrongIds.length > 0 && (
              <Button variant="secondary" onClick={() => retry(wrongIds, `Wiederholung: ${session.config.title || "Fehler"}`)}>
                <RotateCcw className="h-4 w-4" aria-hidden /> {wrongIds.length} falsche wiederholen
              </Button>
            )}
            <LinkButton href="/quiz/setup/">Neues Quiz</LinkButton>
          </>
        }
      />

      {!finished && <Notice tone="warn">Diese Sitzung ist noch nicht abgegeben. <Link className="underline" href={`/quiz/run/?id=${session.id}`}>Fortsetzen</Link></Notice>}

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <p className="text-sm text-muted">Punktequote (bewertbare Aufgaben)</p>
          <p className="mt-1 text-5xl font-bold tabular-nums">{s.percent === null ? "–" : `${String(s.percent).replace(".", ",")} %`}</p>
          <Progress value={s.percent ?? 0} label="Ergebnis" tone={pass === null ? "teal" : pass ? "ok" : "bad"} className="mt-3" />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {pass === null ? <Badge>nicht bewertbar</Badge> : pass ? <Badge tone="ok"><CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Bestanden (≥ {threshold} %)</Badge> : <Badge tone="bad"><XCircle className="h-3.5 w-3.5" aria-hidden /> Nicht bestanden (&lt; {threshold} %)</Badge>}
          </div>
          <p className="mt-2 text-xs text-muted">Die Schwelle von {threshold} % ist Ihre persönliche Lerngrenze in dieser App. Sie ist <strong>keine</strong> amtliche Bestehensregel der staatlichen Prüfung.</p>
        </Card>
        <Card className="grid grid-cols-2 gap-4 lg:col-span-2 sm:grid-cols-3">
          <Stat icon={<CheckCircle2 className="h-5 w-5 text-ok" />} label="Voll richtig" value={s.correct} />
          <Stat icon={<XCircle className="h-5 w-5 text-bad" />} label="Nicht voll richtig" value={s.incorrect} />
          <Stat icon={<HelpCircle className="h-5 w-5 text-muted" />} label="Unbeantwortet" value={s.unanswered} />
          <Stat icon={<ListChecks className="h-5 w-5 text-warn" />} label="Unbewertet" value={s.ungraded} />
          <Stat icon={<Clock className="h-5 w-5 text-teal" />} label="Zeit" value={formatDuration(session.elapsedMs)} />
          <Stat label="Punkte" value={`${String(s.pointsAwarded).replace(".", ",")} / ${String(s.pointsMax).replace(".", ",")}`} />
        </Card>
      </div>

      {s.ungraded > 0 && (
        <div className="mt-4">
          <Notice tone="warn" title={`${s.ungraded} Aufgabe(n) noch unbewertet`}>
            Offene Antworten werden nicht automatisch bewertet. Vergleichen Sie unten Ihre Antwort mit der Musterlösung und vergeben Sie Punkte (Selbstbewertung) – erst dann fließen sie in die Quote ein.
          </Notice>
        </div>
      )}

      <div className="mt-4 rounded-xl bg-surface2 p-4 text-xs text-muted">
        <p className="font-semibold text-fg">So wird gewertet</p>
        <ul className="mt-1 list-disc space-y-0.5 pl-5">
          <li>Auswahlfragen: nur mit verifiziertem Schlüssel; Multiple-Select mit Teilpunkten = max(0, richtig − falsch) / Anzahl richtiger Optionen.</li>
          <li>Offene Fragen, Kurzantworten, Tabellen: Selbstbewertung gegen die Musterlösung, 0 bis Maximalpunkte in 0,5er-Schritten.</li>
          <li>Unbeantwortete bewertbare Aufgaben zählen mit 0 Punkten; unbewertete Aufgaben zählen nicht in die Quote.</li>
        </ul>
      </div>

      <h2 className="mb-3 mt-8 text-lg font-semibold">Ergebnis nach Fallbeispiel / Kapitel</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[...groups.values()].map((g) => {
          const sm = summarize(g.results);
          return (
            <Card key={g.label} className="p-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-medium">{g.label}</p>
                <p className="text-sm tabular-nums text-muted">{sm.percent === null ? "unbewertet" : `${String(sm.percent).replace(".", ",")} %`}</p>
              </div>
              <Progress value={sm.percent ?? 0} label={g.label} className="mt-2" tone={sm.percent === null ? "teal" : sm.percent >= threshold ? "ok" : "bad"} />
              <p className="mt-1 text-xs text-muted">{g.results.length} Aufgaben · {String(sm.pointsAwarded).replace(".", ",")} von {String(sm.pointsMax).replace(".", ",")} P.</p>
            </Card>
          );
        })}
      </div>

      <div className="mb-3 mt-8 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Aufgaben im Detail</h2>
        <div className="flex gap-1.5" role="group" aria-label="Filter">
          {(["all", "wrong", "ungraded", "flagged"] as const).map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)} className={cn("rounded-full border px-3 py-1 text-sm", filter === f ? "border-teal bg-tealsoft" : "border-line")}>
              {{ all: "Alle", wrong: "Nicht voll richtig", ungraded: "Unbewertet", flagged: "Markiert" }[f]}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {visible.length === 0 && <p className="text-sm text-muted">Keine Aufgaben in diesem Filter.</p>}
        {visible.map((q) => {
          const a = session.answers[q.id];
          const g = gradeQuestion(q, a);
          const caseOf = q.caseId ? bank.caseById.get(q.caseId) : undefined;
          return (
            <Card key={q.id} className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <QuestionMeta q={q} />
                <GradeBadge g={g} />
              </div>
              {caseOf && <p className="text-xs text-muted">Fall: {caseOf.title}</p>}
              <QuestionText q={q} />
              <div className="rounded-xl bg-surface2 p-3 text-sm">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">Ihre Antwort</p>
                {isChoice(q) ? (
                  <p>{(a?.selectedOptionIds ?? []).map((id) => q.options?.find((o) => o.id === id)?.text ?? id).join("; ") || <em className="text-muted">keine Antwort</em>}</p>
                ) : a?.tableCells?.some((c) => c.trim()) ? (
                    <ul className="space-y-1 text-sm">
                      {Array.from({ length: Math.ceil(a.tableCells.length / Math.max(1, questionTable(q)?.headers.length ?? 1)) }, (_, r) => {
                        const n = Math.max(1, questionTable(q)?.headers.length ?? 1);
                        const row = a.tableCells!.slice(r * n, r * n + n).filter((c) => c.trim());
                        return row.length ? <li key={r}>{r + 1}. {row.join(" | ")}</li> : null;
                      })}
                    </ul>
                ) : (
                    <p className="prose-de">{a?.text?.trim() || <em className="text-muted">keine Antwort</em>}</p>
                )}
              </div>
              {(session.config.showExplanations === "end" || session.config.showExplanations === "instant" || finished) && <ModelAnswerBox q={q} caseSolutionPages={caseOf?.sections?.solutions} />}
              {!isChoice(q) && g.status !== "unanswered" && <SelfAssess q={q} value={a?.selfPoints} onChange={(v) => setSelf(q.id, v)} />}
            </Card>
          );
        })}
      </div>
    </>
  );
}

function Stat({ icon, label, value }: { icon?: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-sm text-muted">
        {icon}
        {label}
      </p>
      <p className="mt-0.5 text-2xl font-bold tabular-nums">{value}</p>
    </div>
  );
}
