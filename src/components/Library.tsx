"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Bookmark, FileText, Library as LibIcon, Search } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { ALL_TYPES, TYPE_LABELS } from "@/lib/exam";
import { latestAttempts } from "@/lib/stats";
import type { QuestionType } from "@/lib/types";
import { Badge, Button, Card, EmptyState, Input, PageHeader, Select, Spinner, cn } from "./ui";

type Sort = "source" | "recent" | "accuracy";
const PAGE = 25;

export function Library() {
  const bank = useBank();
  const { state } = useStore();
  const router = useRouter();
  const sp = useSearchParams();

  const [q, setQ] = useState(sp.get("q") ?? "");
  const [chapter, setChapter] = useState(sp.get("chapter") ?? "");
  const [caseId, setCaseId] = useState(sp.get("case") ?? "");
  const [type, setType] = useState<QuestionType | "">("");
  const [ab, setAb] = useState("");
  const [flags, setFlags] = useState<{ unanswered: boolean; incorrect: boolean; bookmarked: boolean; review: boolean }>({
    unanswered: sp.get("f") === "unanswered",
    incorrect: sp.get("f") === "incorrect",
    bookmarked: sp.get("f") === "bookmarked",
    review: false,
  });
  const [sort, setSort] = useState<Sort>("source");
  const [shown, setShown] = useState(PAGE);

  const latest = useMemo(() => latestAttempts(state.attempts), [state.attempts]);
  const perQ = useMemo(() => {
    const m = new Map<string, { got: number; max: number; last: number }>();
    for (const a of state.attempts) {
      const e = m.get(a.questionId) ?? { got: 0, max: 0, last: 0 };
      if (a.gradedBy !== "none" && a.pointsAwarded !== null) {
        e.got += a.pointsAwarded;
        e.max += a.pointsMax;
      }
      e.last = Math.max(e.last, a.at);
      m.set(a.questionId, e);
    }
    return m;
  }, [state.attempts]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const chapterIds = new Set<string>();
    if (chapter) {
      const walk = (id: string) => {
        chapterIds.add(id);
        bank.chapters.filter((c) => c.parentId === id).forEach((c) => walk(c.id));
      };
      walk(chapter);
    }
    let list = bank.questions.filter((x) => {
      if (term && !(x.text.toLowerCase().includes(term) || (x.stem ?? "").toLowerCase().includes(term) || (x.modelAnswer?.text ?? "").toLowerCase().includes(term) || x.tags.some((t) => t.toLowerCase().includes(term)) || (state.qdata[x.id]?.note ?? "").toLowerCase().includes(term))) return false;
      if (chapter && !chapterIds.has(x.chapterId)) return false;
      if (caseId && x.caseId !== caseId) return false;
      if (type && x.type !== type) return false;
      if (ab && x.ab !== ab) return false;
      if (flags.unanswered && latest.has(x.id)) return false;
      if (flags.incorrect && latest.get(x.id)?.correct !== false) return false;
      if (flags.bookmarked && !state.qdata[x.id]?.bookmarked) return false;
      if (flags.review && x.extraction.status !== "review") return false;
      return true;
    });
    if (sort === "recent") list = [...list].sort((a, b) => (perQ.get(b.id)?.last ?? 0) - (perQ.get(a.id)?.last ?? 0));
    if (sort === "accuracy")
      list = [...list].sort((a, b) => {
        const ra = perQ.get(a.id);
        const rb = perQ.get(b.id);
        const qa = ra && ra.max ? ra.got / ra.max : 2; // unbeantwortet ans Ende
        const qb = rb && rb.max ? rb.got / rb.max : 2;
        return qa - qb;
      });
    return list;
  }, [bank.questions, bank.chapters, q, chapter, caseId, type, ab, flags, sort, latest, perQ, state.qdata]);

  if (bank.status === "loading") return <Spinner label="Fragenbank wird geladen …" />;
  if (bank.status !== "ready")
    return (
      <>
        <PageHeader title="Fragenbank" />
        <EmptyState icon={<LibIcon className="h-6 w-6" />} title={bank.status === "error" ? "Fragenbank konnte nicht geladen werden" : "Die Fragenbank ist leer"} action={<Link className="text-teal underline" href="/admin/">Zum Import</Link>}>
          {bank.error ?? "Es wurden noch keine Fragen aus dem PDF importiert. Starten Sie den Import (siehe README) und laden Sie die Seite neu."}
        </EmptyState>
      </>
    );

  const toggle = (k: keyof typeof flags) => {
    setFlags((f) => ({ ...f, [k]: !f[k] }));
    setShown(PAGE);
  };
  const reset = () => {
    setQ("");
    setChapter("");
    setCaseId("");
    setType("");
    setAb("");
    setFlags({ unanswered: false, incorrect: false, bookmarked: false, review: false });
    setShown(PAGE);
  };
  const presentTypes = ALL_TYPES.filter((t) => bank.questions.some((x) => x.type === t));

  return (
    <>
      <PageHeader
        title="Fragenbank"
        subtitle={`${bank.questions.length} importierte Aufgaben aus ${bank.cases.length} Fallbeispielen. Texte stammen aus OCR des Buches.`}
        crumbs={[{ label: "Start", href: "/" }, { label: "Fragenbank" }]}
      />

      <Card className="mb-5 space-y-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
          <Input
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setShown(PAGE);
            }}
            placeholder="Stichwort in Aufgaben, Musterlösungen, Notizen …"
            aria-label="Suche"
            className="pl-9"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          <Select aria-label="Kapitel" value={chapter} onChange={(e) => { setChapter(e.target.value); setShown(PAGE); }}>
            <option value="">Alle Kapitel</option>
            {bank.chapters
              .filter((c) => bank.questions.some((x) => x.chapterId === c.id) || bank.chapters.some((d) => d.parentId === c.id))
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.parentId ? "  " : ""}
                  {c.number} {c.title}
                </option>
              ))}
          </Select>
          <Select aria-label="Fallbeispiel" value={caseId} onChange={(e) => { setCaseId(e.target.value); setShown(PAGE); }}>
            <option value="">Alle Fallbeispiele</option>
            {bank.cases.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </Select>
          <Select aria-label="Fragetyp" value={type} onChange={(e) => { setType(e.target.value as QuestionType | ""); setShown(PAGE); }}>
            <option value="">Alle Typen</option>
            {presentTypes.map((t) => (
              <option key={t} value={t}>
                {TYPE_LABELS[t]}
              </option>
            ))}
          </Select>
          <Select aria-label="Anforderungsbereich" value={ab} onChange={(e) => { setAb(e.target.value); setShown(PAGE); }}>
            <option value="">Alle Anforderungsbereiche</option>
            <option value="I">AB I (einfach)</option>
            <option value="II">AB II (mittel)</option>
            <option value="III">AB III (schwer)</option>
          </Select>
          <Select aria-label="Sortierung" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="source">Originalreihenfolge</option>
            <option value="recent">Zuletzt bearbeitet</option>
            <option value="accuracy">Schwächste zuerst</option>
          </Select>
        </div>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Schnellfilter">
          {(
            [
              ["unanswered", "Unbeantwortet"],
              ["incorrect", "Falsch beantwortet"],
              ["bookmarked", "Lesezeichen"],
              ["review", "OCR prüfen"],
            ] as const
          ).map(([k, label]) => (
            <button key={k} aria-pressed={flags[k]} onClick={() => toggle(k)} className={cn("rounded-full border px-3 py-1 text-sm", flags[k] ? "border-teal bg-tealsoft" : "border-line hover:bg-surface2")}>
              {label}
            </button>
          ))}
          <Button variant="ghost" size="sm" onClick={reset}>
            Zurücksetzen
          </Button>
          <span className="ml-auto text-sm text-muted" aria-live="polite">
            {results.length} Treffer
          </span>
        </div>
      </Card>

      {results.length === 0 ? (
        <EmptyState title="Keine Treffer" action={<Button variant="secondary" onClick={reset}>Filter zurücksetzen</Button>}>
          Passen Sie Suchbegriff oder Filter an.
        </EmptyState>
      ) : (
        <ul className="space-y-2">
          {results.slice(0, shown).map((x) => {
            const la = latest.get(x.id);
            const caseTitle = x.caseId ? bank.caseById.get(x.caseId)?.title : undefined;
            return (
              <li key={x.id}>
                <div
                  role="link"
                  tabIndex={0}
                  onClick={() => router.push(`/question/?id=${x.id}`)}
                  onKeyDown={(e) => e.key === "Enter" && router.push(`/question/?id=${x.id}`)}
                  className="group cursor-pointer rounded-xl border border-line bg-surface p-4 transition-colors hover:border-teal"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Badge tone="navy">{x.label}</Badge>
                    {caseTitle && <span className="font-medium text-muted">{caseTitle}</span>}
                    <Badge>{TYPE_LABELS[x.type]}</Badge>
                    {x.points ? <Badge tone="teal">{String(x.points).replace(".", ",")} P.</Badge> : null}
                    {x.ab && <Badge>AB {x.ab}</Badge>}
                    {x.extraction.status === "review" && <Badge tone="warn">OCR prüfen</Badge>}
                    {la ? la.correct === true ? <Badge tone="ok">richtig</Badge> : la.correct === false ? <Badge tone="bad">nicht voll richtig</Badge> : <Badge tone="warn">unbewertet</Badge> : <Badge>unbeantwortet</Badge>}
                    {state.qdata[x.id]?.bookmarked && <Bookmark className="h-4 w-4 text-teal" aria-label="Lesezeichen" />}
                    <span className="ml-auto inline-flex items-center gap-1 text-muted">
                      <FileText className="h-3.5 w-3.5" aria-hidden /> S. {x.source.pdfPage}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-3 text-sm">{x.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {shown < results.length && (
        <div className="mt-5 text-center">
          <Button variant="secondary" onClick={() => setShown((n) => n + PAGE)}>
            Weitere {Math.min(PAGE, results.length - shown)} anzeigen ({results.length - shown} übrig)
          </Button>
        </div>
      )}
    </>
  );
}
