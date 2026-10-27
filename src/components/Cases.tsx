"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { PlayCircle, Stethoscope } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { latestAttempts } from "@/lib/stats";
import { Card, EmptyState, LinkButton, PageHeader, Progress, Spinner, cn } from "./ui";
import { CaseNarrative, GradeBadge, ModelAnswerBox, QuestionMeta, QuestionText } from "./QuestionView";
import { gradeQuestion } from "@/lib/grading";
import { CaseScene, PlaceBadge } from "./CaseScene";
import { useT } from "@/lib/i18n";
import { summarize } from "@/lib/grading";

export function CaseList() {
  const t = useT();
  const bank = useBank();
  const { state } = useStore();
  const latest = useMemo(() => latestAttempts(state.attempts), [state.attempts]);
  if (bank.status === "loading") return <Spinner />;
  if (bank.status !== "ready" || bank.cases.length === 0)
    return (
      <>
        <PageHeader title="Fallbeispiele" />
        <EmptyState icon={<Stethoscope className="h-6 w-6" />} title="Noch keine Fallbeispiele importiert">Nach dem Import erscheinen hier die Fälle des Buches.</EmptyState>
      </>
    );
  const groups = bank.chapters.filter((ch) => bank.cases.some((c) => c.chapterId === ch.id));
  return (
    <>
      <PageHeader title={t("cases.title")} crumbs={[{ label: "Start", href: "/" }, { label: "Fallbeispiele" }]} />
      {groups.map((ch) => (
        <section key={ch.id} className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">{ch.id.startsWith("k3") ? t("cases.oral") : t("cases.written")}</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bank.cases
              .filter((c) => c.chapterId === ch.id)
              .map((c) => {
                const qs = bank.questions.filter((q) => q.caseId === c.id);
                const done = qs.filter((q) => latest.has(q.id)).length;
                return (
                  <Link key={c.id} href={`/cases/view/?id=${c.id}`} className="group block">
                    <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-teal group-hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <PlaceBadge caseId={c.id} />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold leading-snug">{c.title}</h3>
                          <p className="mt-0.5 text-xs text-muted">
                            {qs.length} {t("cases.tasks")}
                            {c.extraction.status === "review" ? " · ⚠️" : ""}
                          </p>
                        </div>
                      </div>
                      <Progress value={qs.length ? (done / qs.length) * 100 : 0} label={`${c.title}: Fortschritt`} className="mt-3" />
                      <p className="mt-1 text-xs text-muted">
                        {done} / {qs.length} {t("cases.done")}
                      </p>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </section>
      ))}
    </>
  );
}

export function CaseView() {
  const t = useT();
  const id = useSearchParams().get("id") ?? "";
  const bank = useBank();
  const { state } = useStore();
  const router = useRouter();
  const [showAns, setShowAns] = useState<Record<string, boolean>>({});
  const c = bank.caseById.get(id);
  if (bank.status === "loading") return <Spinner />;
  if (!c)
    return (
      <EmptyState title="Fallbeispiel nicht gefunden" action={<LinkButton href="/cases/">Alle Fälle</LinkButton>}>
        Kein Fall mit der ID „{id}“.
      </EmptyState>
    );
  const qs = bank.questions.filter((q) => q.caseId === c.id);
  const ordered = bank.cases;
  const i = ordered.findIndex((x) => x.id === c.id);
  const prev = ordered[i - 1];
  const next = ordered[i + 1];
  const latest = latestAttempts(state.attempts);
  const results = qs.filter((q) => latest.has(q.id)).map((q) => gradeQuestion(q, undefined));
  void results;
  const summary = summarize(
    qs
      .filter((q) => latest.has(q.id))
      .map((q) => {
        const a = latest.get(q.id)!;
        return { questionId: q.id, status: a.gradedBy === "none" ? ("ungraded" as const) : ("graded" as const), pointsMax: a.pointsMax, pointsAwarded: a.pointsAwarded, gradedBy: a.gradedBy, correct: a.correct, scorable: a.gradedBy !== "none" };
      })
  );

  return (
    <>
      <PageHeader
        title={c.title}
        crumbs={[{ label: "Fallbeispiele", href: "/cases/" }, { label: c.title }]}
        actions={
          <>
            <LinkButton href={`/quiz/setup/?case=${c.id}`}>
              <PlayCircle className="h-4 w-4" aria-hidden /> Fall bearbeiten
            </LinkButton>
          </>
        }
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <CaseScene caseId={c.id} />
          <details className="mt-4 rounded-2xl border border-line bg-surface">
            <summary className="flex min-h-12 cursor-pointer items-center px-4 font-medium">📖 {t("scene.original")}</summary>
            <div className="p-2">
              <CaseNarrative c={c} compact />
            </div>
          </details>
          <Card className="mt-4 text-sm">
            <h3 className="font-semibold">Fallübersicht</h3>
            <dl className="mt-2 grid grid-cols-2 gap-1 text-muted">
              <dt>Aufgaben</dt>
              <dd className="text-fg">{qs.length}</dd>
              <dt>Bearbeitet</dt>
              <dd className="text-fg">{qs.filter((q) => latest.has(q.id)).length} / {qs.length}</dd>
              <dt>Bisherige Quote</dt>
              <dd className="text-fg">{summary.percent === null ? "–" : `${String(summary.percent).replace(".", ",")} %`}</dd>
            </dl>
          </Card>
        </div>
        <div className="space-y-4">
          {qs.length === 0 && <EmptyState title="Keine Aufgaben erkannt">Für diesen Fall wurden keine Aufgaben extrahiert. Bitte die Originalseiten öffnen und im Admin-Bereich ergänzen.</EmptyState>}
          {qs.map((q) => {
            const a = latest.get(q.id);
            return (
              <Card key={q.id} className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <QuestionMeta q={q} />
                  {a && <GradeBadge g={{ questionId: q.id, status: a.gradedBy === "none" ? "ungraded" : "graded", pointsMax: a.pointsMax, pointsAwarded: a.pointsAwarded, gradedBy: a.gradedBy, correct: a.correct, scorable: a.gradedBy !== "none" }} />}
                </div>
                <QuestionText q={q} />
                <div className="flex flex-wrap gap-2">
                  <button className={cn("rounded-lg border border-line px-3 py-1.5 text-sm hover:bg-surface2")} onClick={() => setShowAns((s) => ({ ...s, [q.id]: !s[q.id] }))} aria-expanded={!!showAns[q.id]}>
                    {showAns[q.id] ? "Musterlösung ausblenden" : "Musterlösung anzeigen"}
                  </button>
                  <Link className="rounded-lg border border-line px-3 py-1.5 text-sm hover:bg-surface2" href={`/question/?id=${q.id}`}>
                    Details
                  </Link>
                </div>
                {showAns[q.id] && <ModelAnswerBox q={q} caseSolutionPages={c.sections?.solutions} />}
              </Card>
            );
          })}
          <div className="flex justify-between gap-3 pt-2 text-sm">
            {prev ? (
              <button onClick={() => router.push(`/cases/view/?id=${prev.id}`)} className="text-teal hover:underline">
                ← {prev.title}
              </button>
            ) : (
              <span />
            )}
            {next && (
              <button onClick={() => router.push(`/cases/view/?id=${next.id}`)} className="text-teal hover:underline">
                {next.title} →
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
