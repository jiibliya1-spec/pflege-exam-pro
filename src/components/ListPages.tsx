"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Bookmark, PlayCircle, RotateCcw } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { latestAttempts, repeatedMistakes } from "@/lib/stats";
import { Badge, Card, EmptyState, LinkButton, PageHeader, Spinner } from "./ui";

export function Mistakes() {
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
        title="Fehler wiederholen"
        subtitle="Aufgaben, bei denen Ihre letzte bewertete Antwort nicht die volle Punktzahl brachte."
        crumbs={[{ label: "Start", href: "/" }, { label: "Fehler" }]}
        actions={wrong.length > 0 ? <LinkButton href="/quiz/setup/?preset=mistakes"><PlayCircle className="h-4 w-4" aria-hidden /> Fehler üben ({wrong.length})</LinkButton> : undefined}
      />
      {wrong.length === 0 ? (
        <EmptyState icon={<RotateCcw className="h-6 w-6" />} title="Keine Fehler vorhanden" action={<LinkButton href="/quiz/setup/">Quiz starten</LinkButton>}>
          {state.attempts.length === 0 ? "Sobald Sie Aufgaben bewertet haben, erscheinen hier Ihre Fehler." : "Alle zuletzt bewerteten Aufgaben waren voll richtig – stark!"}
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
                    <Badge tone="bad">{String(a.pointsAwarded ?? 0).replace(".", ",")} / {String(a.pointsMax).replace(".", ",")} P.</Badge>
                    {rep && <Badge tone="warn">{rep}× falsch</Badge>}
                    <span className="ml-auto text-muted">{new Date(a.at).toLocaleDateString("de-DE")}</span>
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
          <h2 className="font-semibold">Verbessert</h2>
          <p className="mt-1 text-sm text-muted">{improved.length} Aufgabe(n) waren früher falsch und wurden zuletzt voll richtig beantwortet.</p>
        </Card>
      )}
    </>
  );
}

export function Bookmarks() {
  const bank = useBank();
  const { state, dispatch } = useStore();
  if (bank.status === "loading") return <Spinner />;
  const list = bank.questions.filter((q) => state.qdata[q.id]?.bookmarked);
  const notes = bank.questions.filter((q) => state.qdata[q.id]?.note?.trim() && !state.qdata[q.id]?.bookmarked);
  return (
    <>
      <PageHeader
        title="Lesezeichen & Notizen"
        crumbs={[{ label: "Start", href: "/" }, { label: "Lesezeichen" }]}
        actions={list.length > 0 ? <LinkButton href="/quiz/setup/?preset=bookmarks"><PlayCircle className="h-4 w-4" aria-hidden /> Lesezeichen üben ({list.length})</LinkButton> : undefined}
      />
      {list.length === 0 ? (
        <EmptyState icon={<Bookmark className="h-6 w-6" />} title="Noch keine Lesezeichen" action={<LinkButton href="/library/">Zur Fragenbank</LinkButton>}>
          Setzen Sie in der Fragenbank oder im Quiz ein Lesezeichen, um Aufgaben später gezielt zu üben.
        </EmptyState>
      ) : (
        <ul className="space-y-2">
          {list.map((q) => (
            <li key={q.id} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
              <Link href={`/question/?id=${q.id}`} className="min-w-0 flex-1 hover:underline">
                <span className="text-xs text-muted">{q.caseId ? bank.caseById.get(q.caseId)?.title : ""} · Aufgabe {q.label}</span>
                <p className="line-clamp-2 text-sm">{q.text}</p>
                {state.qdata[q.id]?.note && <p className="mt-1 text-xs text-teal">Notiz: {state.qdata[q.id].note}</p>}
              </Link>
              <button className="text-sm text-muted hover:text-bad" onClick={() => dispatch({ type: "qdata", id: q.id, patch: { bookmarked: false } })} aria-label={`Lesezeichen für Aufgabe ${q.label} entfernen`}>
                Entfernen
              </button>
            </li>
          ))}
        </ul>
      )}
      {notes.length > 0 && (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold">Weitere Notizen</h2>
          <ul className="space-y-2">
            {notes.map((q) => (
              <li key={q.id} className="rounded-xl border border-line bg-surface p-4 text-sm">
                <Link href={`/question/?id=${q.id}`} className="text-teal hover:underline">Aufgabe {q.label}</Link>
                <p className="mt-1">{state.qdata[q.id].note}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
