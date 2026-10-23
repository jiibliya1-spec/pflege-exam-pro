"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Layers, RotateCw } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { useUserContext } from "@/lib/hooks";
import { nextSrs } from "@/lib/srs";
import { Badge, Button, Card, EmptyState, Field, Notice, PageHeader, Progress, Select, Spinner } from "./ui";
import { QuestionMeta } from "./QuestionView";

/**
 * Karteikarten: Vorderseite = Original-Aufgabentext, Rückseite = Original-Musterlösung (OCR).
 * Es werden keine Zusammenfassungen oder neuen Inhalte generiert.
 */
export function Flashcards() {
  const bank = useBank();
  const { state, dispatch } = useStore();
  const ctx = useUserContext();
  const [deck, setDeck] = useState("all");
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seen, setSeen] = useState(0);

  const cards = useMemo(() => {
    let list = bank.questions.filter((q) => q.modelAnswer?.text?.trim());
    if (deck === "due") list = list.filter((q) => ctx.dueIds.has(q.id));
    else if (deck === "bookmarks") list = list.filter((q) => ctx.bookmarked.has(q.id));
    else if (deck.startsWith("case:")) list = list.filter((q) => q.caseId === deck.slice(5));
    return list;
  }, [bank.questions, deck, ctx]);

  if (bank.status === "loading") return <Spinner />;
  const withAnswer = bank.questions.filter((q) => q.modelAnswer?.text?.trim()).length;
  if (bank.status !== "ready" || withAnswer === 0)
    return (
      <>
        <PageHeader title="Karteikarten" />
        <EmptyState icon={<Layers className="h-6 w-6" />} title="Keine Karteikarten möglich">Karteikarten entstehen nur aus Aufgaben mit extrahierter Musterlösung. Aktuell gibt es keine.</EmptyState>
      </>
    );

  const card = cards[Math.min(i, Math.max(0, cards.length - 1))];
  const rate = (known: boolean) => {
    if (!card) return;
    const prev = state.qdata[card.id];
    dispatch({ type: "qdata", id: card.id, patch: nextSrs(prev?.box ?? 0, known, Date.now()) });
    setFlipped(false);
    setSeen((n) => n + 1);
    setI((n) => (n + 1 >= cards.length ? 0 : n + 1));
  };

  return (
    <>
      <PageHeader title="Karteikarten" subtitle="Vorderseite: Originalaufgabe · Rückseite: Musterlösung aus dem Buch (OCR). Es werden keine eigenen Zusammenfassungen erzeugt." crumbs={[{ label: "Start", href: "/" }, { label: "Karteikarten" }]} />
      <div className="mb-4 max-w-sm">
        <Field label="Stapel" htmlFor="deck">
          <Select id="deck" value={deck} onChange={(e) => { setDeck(e.target.value); setI(0); setFlipped(false); }}>
            <option value="all">Alle ({withAnswer})</option>
            <option value="due">Fällige Wiederholungen</option>
            <option value="bookmarks">Lesezeichen</option>
            {bank.cases.filter((c) => bank.questions.some((q) => q.caseId === c.id && q.modelAnswer?.text?.trim())).map((c) => (
              <option key={c.id} value={`case:${c.id}`}>{c.title}</option>
            ))}
          </Select>
        </Field>
      </div>
      {cards.length === 0 || !card ? (
        <EmptyState title="Dieser Stapel ist leer">Wählen Sie einen anderen Stapel.</EmptyState>
      ) : (
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 flex items-center justify-between text-sm text-muted">
            <span>
              Karte {Math.min(i, cards.length - 1) + 1} von {cards.length}
            </span>
            <span>{seen} bewertet in dieser Runde</span>
          </div>
          <Progress value={((Math.min(i, cards.length - 1) + 1) / cards.length) * 100} label="Stapelfortschritt" className="mb-4" />
          <Card className="min-h-72 space-y-4">
            <QuestionMeta q={card} />
            {!flipped ? (
              <div>
                {card.stem && <p className="prose-de mb-3 rounded-xl bg-surface2 p-3 text-sm">{card.stem}</p>}
                <p className="prose-de text-lg font-medium">{card.text}</p>
              </div>
            ) : (
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-semibold">Musterlösung</span>
                  {card.modelAnswer?.status === "verified" ? <Badge tone="ok">verifiziert</Badge> : <Badge tone="warn">OCR · nicht verifiziert</Badge>}
                </div>
                <p className="prose-de text-sm">{card.modelAnswer?.text}</p>
                <p className="mt-3 text-xs text-muted">
                  Quelle:{" "}
                  <Link className="text-teal hover:underline" href={`/source/?page=${card.modelAnswer?.sourcePage ?? card.source.pdfPage}`}>
                    PDF-Seite {card.modelAnswer?.sourcePage ?? card.source.pdfPage}
                  </Link>
                </p>
              </div>
            )}
          </Card>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {!flipped ? (
              <Button size="lg" onClick={() => setFlipped(true)}>
                <RotateCw className="h-4 w-4" aria-hidden /> Antwort zeigen
              </Button>
            ) : (
              <>
                <Button size="lg" variant="danger" onClick={() => rate(false)}>Nicht gewusst</Button>
                <Button size="lg" variant="teal" onClick={() => rate(true)}>Gewusst</Button>
              </>
            )}
          </div>
          <div className="mt-4"><Notice tone="teal">Ihre Bewertung („Gewusst“ / „Nicht gewusst“) steuert den Wiederholungsplan (Leitner-Boxen).</Notice></div>
        </div>
      )}
    </>
  );
}
