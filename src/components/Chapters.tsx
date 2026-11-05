"use client";

import { RichText } from "./RichText";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BookOpen, FileText, PlayCircle } from "lucide-react";
import { useBank } from "@/lib/bank";
import { useStore } from "@/lib/store";
import { latestAttempts } from "@/lib/stats";
import { chapterDescendantsFn } from "@/lib/exam";
import { Badge, Card, EmptyState, LinkButton, PageHeader, Progress, Spinner, cn } from "./ui";
import { loadPageTexts } from "./Source";

export function Chapters() {
  const id = useSearchParams().get("id") ?? "";
  const bank = useBank();
  const { state } = useStore();
  const router = useRouter();
  const [texts, setTexts] = useState<{ pdfPage: number; printedPage?: number; text: string; meanConfidence: number }[]>([]);
  useEffect(() => {
    void loadPageTexts().then(setTexts);
  }, []);
  const latest = useMemo(() => latestAttempts(state.attempts), [state.attempts]);

  if (bank.status === "loading") return <Spinner />;
  if (bank.status !== "ready") return <EmptyState title="Keine Kapitel vorhanden">Importieren Sie zuerst das PDF.</EmptyState>;

  const descendants = chapterDescendantsFn(bank.chapters);
  const roots = bank.chapters.filter((c) => !c.parentId);
  const selected = bank.chapterById.get(id) ?? bank.chapters.find((c) => c.id === "k2-2") ?? bank.chapters[0];

  // Seitenbereich des Kapitels: von Start bis vor das nächste Kapitel (gleiche oder höhere Ebene)
  const sorted = [...bank.chapters].sort((a, b) => a.source.pdfPage - b.source.pdfPage || a.order - b.order);
  const idx = sorted.findIndex((c) => c.id === selected.id);
  const nextStart = sorted.slice(idx + 1).find((c) => c.source.pdfPage > selected.source.pdfPage && !descendants(selected.id).includes(c.id))?.source.pdfPage;
  const total = bank.bank?.report.pagesInPdf ?? 333;
  const endPage = Math.min(total, (nextStart ?? total + 1) - 1);
  const caseRanges = bank.cases.map((c) => [c.source.pdfPage, c.source.endPdfPage ?? c.source.pdfPage] as const);
  const readingPages = texts.filter((t) => t.pdfPage >= selected.source.pdfPage && t.pdfPage <= endPage && !caseRanges.some(([a, b]) => t.pdfPage >= a && t.pdfPage <= b));
  const ids = new Set(descendants(selected.id));
  const qs = bank.questions.filter((q) => ids.has(q.chapterId));
  const done = qs.filter((q) => latest.has(q.id)).length;
  const cases = bank.cases.filter((c) => ids.has(c.chapterId));

  return (
    <>
      <PageHeader title="Kapitel" subtitle="Struktur des Buches laut Inhaltsverzeichnis. Lesetext ist der bereinigte Originaltext der Buchseiten." crumbs={[{ label: "Start", href: "/" }, { label: "Kapitel" }]} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[18rem_1fr]">
        <nav aria-label="Kapitelverzeichnis" className="space-y-3">
          {roots.map((r) => (
            <div key={r.id}>
              <button onClick={() => router.push(`/chapters/?id=${r.id}`)} className={cn("w-full rounded-lg px-2 py-1.5 text-left text-sm font-semibold hover:bg-surface2", selected.id === r.id && "bg-tealsoft text-teal")}>
                {r.number} {r.title}
              </button>
              <ul className="ml-3 border-l border-line pl-2">
                {bank.chapters.filter((c) => c.parentId === r.id).map((c) => (
                  <li key={c.id}>
                    <button onClick={() => router.push(`/chapters/?id=${c.id}`)} aria-current={selected.id === c.id ? "page" : undefined} className={cn("w-full rounded-lg px-2 py-1 text-left text-sm hover:bg-surface2", selected.id === c.id && "bg-tealsoft text-teal")}>
                      {c.number} {c.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="min-w-0 space-y-5">
          <Card>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">
                  {selected.number} {selected.title}
                </h2>
                <p className="text-sm text-muted">
                  Buch S. {selected.source.printedPage ?? selected.source.pdfPage} · Seiten {selected.source.pdfPage}–{endPage}
                </p>
              </div>
              <div className="flex gap-2">
                <LinkButton variant="secondary" href={`/source/?page=${selected.source.pdfPage}`}>
                  <FileText className="h-4 w-4" aria-hidden /> Originalseite
                </LinkButton>
                {qs.length > 0 && (
                  <LinkButton href={`/quiz/setup/?chapter=${selected.id}`}>
                    <PlayCircle className="h-4 w-4" aria-hidden /> Kapitel üben
                  </LinkButton>
                )}
              </div>
            </div>
            {qs.length > 0 ? (
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Kapitelfortschritt</span>
                  <span className="tabular-nums text-muted">
                    {done} / {qs.length} Aufgaben bearbeitet
                  </span>
                </div>
                <Progress value={(done / qs.length) * 100} label="Kapitelfortschritt" className="mt-1" tone={done === qs.length ? "ok" : "teal"} />
              </div>
            ) : (
              <p className="mt-3 text-sm text-muted">Zu diesem Kapitel gibt es keine Aufgaben (reiner Lese-/Informationsteil).</p>
            )}
          </Card>

          {cases.length > 0 && (
            <Card>
              <h3 className="mb-2 font-semibold">Fallbeispiele in diesem Kapitel</h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {cases.map((c) => {
                  const cq = bank.questions.filter((q) => q.caseId === c.id);
                  return (
                    <li key={c.id}>
                      <Link href={`/cases/view/?id=${c.id}`} className="flex items-center justify-between gap-2 rounded-lg border border-line p-2.5 text-sm hover:border-teal">
                        <span>{c.title}</span>
                        <Badge>{cq.filter((q) => latest.has(q.id)).length}/{cq.length}</Badge>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Card>
          )}

          <Card>
            <h3 className="mb-3 flex items-center gap-2 font-semibold">
              <BookOpen className="h-4 w-4 text-teal" aria-hidden /> Originaltext
            </h3>
            {readingPages.length === 0 ? (
              <p className="text-sm text-muted">Für dieses Kapitel liegt kein separater Lesetext vor{texts.length === 0 ? " (Text nicht geladen)" : ""}. Öffnen Sie die Originalseite.</p>
            ) : (
              <div className="space-y-6">
                {readingPages.map((p) => (
                  <section key={p.pdfPage}>
                    <p className="mb-1 flex items-center gap-2 text-xs text-muted">
                      <Link className="text-teal hover:underline" href={`/source/?page=${p.pdfPage}`}>
                        Seite {p.pdfPage}{p.printedPage ? ` · Buch S. ${p.printedPage}` : ""}
                      </Link>
                      {p.meanConfidence < 70 && <Badge tone="warn">Text unsicher</Badge>}
                    </p>
                    <RichText text={p.text} className="text-sm" />
                  </section>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
