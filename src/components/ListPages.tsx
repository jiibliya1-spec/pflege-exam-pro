"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Bookmark, PlayCircle, RotateCcw } from "lucide-react";
import { useStore } from "@/lib/store";
import { useT, useLang } from "@/lib/i18n";
import { useBank } from "@/lib/bank";
import { latestAttempts, repeatedMistakes } from "@/lib/stats";
import { Badge, Card, EmptyState, LinkButton, PageHeader, Spinner } from "./ui";

export function Mistakes() {
  const t = useT();
  const lang = useLang();
  const bank = useBank();
  const { state } = useStore();
  const latest = useMemo(() => latestAttempts(state.attempts), [state.attempts]);
  const repeated = useMemo(() => repeatedMistakes(state.attempts), [state.attempts]);
  if (bank.status === "loading") return <Spinner />;

  const wrong = bank.questions.filter((q) => latest.get(q.id)?.correct === false);
  // Verbesserung: früher falsch, zuletzt voll richtig
  const everWrong = new Set(state.attempts.filter((a) => a.correct === false).map((a) => a.questionId));
  const improved = bank.questions.filter((q) => everWrong.has(q.id) && latest.get(q.id)?.correct === true);

  return (
    <>
      <PageHeader
        title={t("lp.mist.title")}
        subtitle={t("lp.mist.sub")}
        crumbs={[{ label: t("fc.home"), href: "/" }, { label: t("lp.mist.crumb") }]}
        actions={wrong.length > 0 ? <LinkButton href="/quiz/setup/?preset=mistakes"><PlayCircle className="h-4 w-4" aria-hidden /> {t("lp.mist.practise", wrong.length)}</LinkButton> : undefined}
      />
      {wrong.length === 0 ? (
        <EmptyState icon={<RotateCcw className="h-6 w-6" />} title={t("lp.mist.empty")} action={<LinkButton href="/quiz/setup/">{t("lp.mist.start")}</LinkButton>}>
          {state.attempts.length === 0 ? t("lp.mist.empty.none") : t("lp.mist.empty.all")}
        </EmptyState>
      ) : (
        <ul className="space-y-2">
          {wrong.map((q) => {
            const a = latest.get(q.id)!;
            const rep = repeated.get(q.id);
            return (
              <li key={q.id}>
                <Link href={`/question/?id=${q.id}`} className="block rounded-xl border border-line bg-surface p-4 hover:border-teal">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Badge tone="navy">{q.label}</Badge>
                    <span className="text-muted">{q.caseId ? bank.caseById.get(q.caseId)?.title : ""}</span>
                    <Badge tone="bad">{String(a.pointsAwarded ?? 0).replace(".", ",")} / {String(a.pointsMax).replace(".", ",")} {t("lp.mist.points")}</Badge>
                    {rep && <Badge tone="warn">{t("lp.mist.wrong", rep)}</Badge>}
                    <span className="ml-auto text-muted">{new Date(a.at).toLocaleDateString(lang === "de" ? "de-DE" : lang)}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm">{q.text}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {improved.length > 0 && (
        <Card className="mt-8">
          <h2 className="font-semibold">{t("lp.mist.improved")}</h2>
          <p className="mt-1 text-sm text-muted">{t("lp.mist.improved.text", improved.length)}</p>
        </Card>
      )}
    </>
  );
}

export function Bookmarks() {
  const t = useT();
  const bank = useBank();
  const { state, dispatch } = useStore();
  if (bank.status === "loading") return <Spinner />;
  const list = bank.questions.filter((q) => state.qdata[q.id]?.bookmarked);
  const notes = bank.questions.filter((q) => state.qdata[q.id]?.note?.trim() && !state.qdata[q.id]?.bookmarked);
  return (
    <>
      <PageHeader
        title={t("lp.bm.title")}
        crumbs={[{ label: t("fc.home"), href: "/" }, { label: t("lp.bm.crumb") }]}
        actions={list.length > 0 ? <LinkButton href="/quiz/setup/?preset=bookmarks"><PlayCircle className="h-4 w-4" aria-hidden /> {t("lp.bm.practise", list.length)}</LinkButton> : undefined}
      />
      {list.length === 0 ? (
        <EmptyState icon={<Bookmark className="h-6 w-6" />} title={t("lp.bm.empty")} action={<LinkButton href="/library/">{t("lp.bm.tobank")}</LinkButton>}>
          {t("lp.bm.empty.text")}
        </EmptyState>
      ) : (
        <ul className="space-y-2">
          {list.map((q) => (
            <li key={q.id} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
              <Link href={`/question/?id=${q.id}`} className="min-w-0 flex-1 hover:underline">
                <span className="text-xs text-muted">{q.caseId ? bank.caseById.get(q.caseId)?.title : ""} · {t("lp.bm.task")} {q.label}</span>
                <p className="line-clamp-2 text-sm">{q.text}</p>
                {state.qdata[q.id]?.note && <p className="mt-1 text-xs text-teal">{t("lp.bm.note")}: {state.qdata[q.id].note}</p>}
              </Link>
              <button className="text-sm text-muted hover:text-bad" onClick={() => dispatch({ type: "qdata", id: q.id, patch: { bookmarked: false } })} aria-label={t("lp.bm.remove.aria", q.label)}>
                {t("lp.bm.remove")}
              </button>
            </li>
          ))}
        </ul>
      )}
      {notes.length > 0 && (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold">{t("lp.bm.notes")}</h2>
          <ul className="space-y-2">
            {notes.map((q) => (
              <li key={q.id} className="rounded-xl border border-line bg-surface p-4 text-sm">
                <Link href={`/question/?id=${q.id}`} className="text-teal hover:underline">{t("lp.bm.task")} {q.label}</Link>
                <p className="mt-1">{state.qdata[q.id].note}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
