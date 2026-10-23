"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Bookmark, BookmarkCheck, PlayCircle } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { newId } from "@/lib/hooks";
import { defaultConfig, sessionFromIds } from "@/lib/exam";
import { Button, Card, EmptyState, LinkButton, PageHeader, Spinner } from "./ui";
import { CaseNarrative, ModelAnswerBox, QuestionMeta, QuestionText } from "./QuestionView";
import { NoteField } from "./QuizRunner";

export function QuestionDetail() {
  const id = useSearchParams().get("id") ?? "";
  const bank = useBank();
  const { state, dispatch, flush } = useStore();
  const router = useRouter();
  if (bank.status === "loading") return <Spinner />;
  const q = bank.byId.get(id);
  if (!q)
    return (
      <EmptyState title="Frage nicht gefunden" action={<LinkButton href="/library/">Zur Fragenbank</LinkButton>}>
        Die Frage-ID „{id}“ existiert nicht in der aktuellen Fragenbank.
      </EmptyState>
    );
  const c = q.caseId ? bank.caseById.get(q.caseId) : undefined;
  const chapter = bank.chapterById.get(q.chapterId);
  const qd = state.qdata[q.id];
  const attempts = state.attempts.filter((a) => a.questionId === q.id).sort((a, b) => b.at - a.at);
  const siblings = c ? bank.questions.filter((x) => x.caseId === c.id) : [];
  const idx = siblings.findIndex((x) => x.id === q.id);

  function practice() {
    const s = sessionFromIds([q!.id], bank.byId, defaultConfig({ title: `Einzelübung ${q!.label}`, mode: "practice", questionCount: 1, passPercent: state.settings.passPercent }), { id: newId("s"), now: Date.now() });
    dispatch({ type: "session", session: s, makeActive: true });
    void flush().then(() => router.push(`/quiz/run/?id=${s.id}`));
  }

  return (
    <>
      <PageHeader
        title={`Aufgabe ${q.label}`}
        subtitle={c?.title}
        crumbs={[{ label: "Fragenbank", href: "/library/" }, ...(chapter ? [{ label: `${chapter.number} ${chapter.title}`, href: `/library/?chapter=${chapter.id}` }] : []), { label: `Aufgabe ${q.label}` }]}
        actions={
          <>
            <Button variant="secondary" onClick={() => dispatch({ type: "qdata", id: q.id, patch: { bookmarked: !qd?.bookmarked } })} aria-pressed={!!qd?.bookmarked}>
              {qd?.bookmarked ? <BookmarkCheck className="h-4 w-4" aria-hidden /> : <Bookmark className="h-4 w-4" aria-hidden />} Lesezeichen
            </Button>
            <Button onClick={practice}>
              <PlayCircle className="h-4 w-4" aria-hidden /> Üben
            </Button>
          </>
        }
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="space-y-4">
          <Card className="space-y-4">
            <QuestionMeta q={q} />
            <QuestionText q={q} />
            {q.extraction.notes && q.extraction.notes.length > 0 && (
              <ul className="list-disc rounded-xl bg-warnsoft p-3 pl-7 text-xs text-warn">
                {q.extraction.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            )}
            <p className="text-xs text-muted">
              OCR-Konfidenz {Math.round(q.extraction.confidence)} % · <Link className="text-teal hover:underline" href={`/admin/review/?id=${q.id}`}>Im Admin-Bereich prüfen/korrigieren</Link>
            </p>
          </Card>
          <ModelAnswerBox q={q} caseSolutionPages={c?.sections?.solutions} />
          <Card>
            <NoteField id={q.id} />
          </Card>
          {siblings.length > 1 && (
            <nav aria-label="Aufgaben dieses Falls" className="flex flex-wrap gap-1.5">
              {siblings.map((s) => (
                <Link key={s.id} href={`/question/?id=${s.id}`} aria-current={s.id === q.id ? "page" : undefined} className={`rounded-lg border px-2.5 py-1 text-sm ${s.id === q.id ? "border-teal bg-tealsoft" : "border-line hover:bg-surface2"}`}>
                  {s.label}
                </Link>
              ))}
              <span className="self-center text-xs text-muted">
                ({idx + 1}/{siblings.length})
              </span>
            </nav>
          )}
        </div>
        <div className="space-y-4">
          {c && <CaseNarrative c={c} />}
          <Card>
            <h2 className="mb-2 font-semibold">Bisherige Versuche</h2>
            {attempts.length === 0 ? (
              <p className="text-sm text-muted">Noch nicht bearbeitet.</p>
            ) : (
              <ul className="divide-y divide-line text-sm">
                {attempts.slice(0, 10).map((a) => (
                  <li key={a.id} className="flex items-center justify-between gap-3 py-2">
                    <span>{new Date(a.at).toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" })}</span>
                    <span className="tabular-nums text-muted">{a.pointsAwarded === null ? "unbewertet" : `${String(a.pointsAwarded).replace(".", ",")} / ${String(a.pointsMax).replace(".", ",")} P.`}</span>
                  </li>
                ))}
              </ul>
            )}
            {qd && qd.dueAt && <p className="mt-3 text-xs text-muted">Wiederholungsplan: Box {qd.box} · nächste Wiederholung {new Date(qd.dueAt).toLocaleDateString("de-DE")}</p>}
          </Card>
        </div>
      </div>
    </>
  );
}
