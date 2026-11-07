"use client";

import { RichText } from "./RichText";
import { useMemo, useState } from "react";
import { Layers, RotateCw } from "lucide-react";
import { useStore } from "@/lib/store";
import { useT } from "@/lib/i18n";
import { useBank } from "@/lib/bank";
import { useUserContext } from "@/lib/hooks";
import { nextSrs } from "@/lib/srs";
import { Button, Card, EmptyState, Field, Notice, PageHeader, Progress, Select, Spinner } from "./ui";
import { QuestionMeta } from "./QuestionView";

/**
 * Karteikarten: Vorderseite = Original-Aufgabentext, Rückseite = Original-Musterlösung.
 * Es werden keine Zusammenfassungen oder neuen Inhalte generiert.
 */
export function Flashcards() {
  const bank = useBank();
  const t = useT();
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
        <PageHeader title={t("fc.title")} />
        <EmptyState icon={<Layers className="h-6 w-6" />} title={t("fc.none.title")}>{t("fc.none.text")}</EmptyState>
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
      <PageHeader title={t("fc.title")} subtitle={t("fc.sub")} crumbs={[{ label: t("fc.home"), href: "/" }, { label: t("fc.title") }]} />
      <div className="mb-4 max-w-sm">
        <Field label={t("fc.deck")} htmlFor="deck">
          <Select id="deck" value={deck} onChange={(e) => { setDeck(e.target.value); setI(0); setFlipped(false); }}>
            <option value="all">{t("fc.deck.all")} ({withAnswer})</option>
            <option value="due">{t("fc.deck.due")}</option>
            <option value="bookmarks">{t("fc.deck.bookmarks")}</option>
            {bank.cases.filter((c) => bank.questions.some((q) => q.caseId === c.id && q.modelAnswer?.text?.trim())).map((c) => (
              <option key={c.id} value={`case:${c.id}`}>{c.title}</option>
            ))}
          </Select>
        </Field>
      </div>
      {cards.length === 0 || !card ? (
        <EmptyState title={t("fc.empty.title")}>{t("fc.empty.text")}</EmptyState>
      ) : (
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 flex items-center justify-between text-sm text-muted">
            <span>
              {t("fc.card", Math.min(i, cards.length - 1) + 1)} {t("fc.of")} {cards.length}
            </span>
            <span>{t("fc.rated", seen)}</span>
          </div>
          <Progress value={((Math.min(i, cards.length - 1) + 1) / cards.length) * 100} label={t("fc.progress")} className="mb-4" />
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
                  <span className="font-semibold">{t("fc.answer")}</span>
                </div>
                <RichText text={card.modelAnswer?.text ?? ""} className="text-sm" />
              </div>
            )}
          </Card>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {!flipped ? (
              <Button size="lg" onClick={() => setFlipped(true)}>
                <RotateCw className="h-4 w-4" aria-hidden /> {t("fc.show")}
              </Button>
            ) : (
              <>
                <Button size="lg" variant="danger" onClick={() => rate(false)}>{t("fc.unknown")}</Button>
                <Button size="lg" variant="teal" onClick={() => rate(true)}>{t("fc.known")}</Button>
              </>
            )}
          </div>
          <div className="mt-4"><Notice tone="teal">{t("fc.hint")}</Notice></div>
        </div>
      )}
    </>
  );
}
