"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { AREAS, LESSONS, lessonById, type LessonGroup } from "@/data/lessons";
import { normalizeLang, useLang, useT } from "@/lib/i18n";
import { Card, EmptyState, LinkButton, PageHeader, cn } from "./ui";
import { GlossText } from "./Gloss";
import { TranslateLink } from "./QuestionView";

const GROUPS: { id: LessonGroup; label: string; emoji: string }[] = [
  { id: "krank", label: "Krankheitslehre", emoji: "🩺" },
  { id: "ausbildung", label: "Ausbildung", emoji: "🎓" },
];

export function LearnList() {
  const t = useT();
  const [group, setGroup] = useState<LessonGroup>("krank");
  return (
    <>
      <PageHeader title={t("nav.learn")} />
      <div className="mb-5 grid grid-cols-2 gap-2" role="tablist">
        {GROUPS.map((g) => (
          <button key={g.id} role="tab" aria-selected={group === g.id} onClick={() => setGroup(g.id)} className={cn("min-h-12 rounded-2xl border px-3 py-2 font-semibold transition-colors", group === g.id ? "border-teal bg-tealsoft" : "border-line bg-surface")}>
            <span aria-hidden>{g.emoji}</span> {g.label}
          </button>
        ))}
      </div>
      {AREAS[group].map((a) => {
        const items = LESSONS.filter((l) => l.group === group && l.area === a.id);
        if (!items.length) return null;
        return (
          <section key={a.id} className="mb-6">
            <h2 className="mb-2 text-sm font-semibold text-muted">
              <span aria-hidden>{a.emoji}</span> {a.label}
            </h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((l) => (
                <Link key={l.id} href={`/learn/view/?id=${l.id}`} className="group block">
                  <Card className="flex items-center gap-3 transition-all group-hover:-translate-y-0.5 group-hover:border-teal group-hover:shadow-md">
                    <span aria-hidden className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-2xl">{l.emoji}</span>
                    <span className="font-medium leading-snug">{l.title}</span>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
      <p className="text-xs text-muted">Lernhilfe der App in einfachem Deutsch, kein Buchtext. Ersetzt kein Lehrbuch. Es gelten immer die Anordnungen und Standards deines Betriebs.</p>
    </>
  );
}

export function LearnView() {
  const id = useSearchParams().get("id") ?? "";
  const l = lessonById(id);
  const lang = normalizeLang(useLang());
  const t = useT();
  if (!l) return <EmptyState title="Lektion nicht gefunden" action={<LinkButton href="/learn/">Alle Lektionen</LinkButton>}>Keine Lektion mit der ID „{id}“.</EmptyState>;
  const i = LESSONS.findIndex((x) => x.id === l.id);
  const prev = LESSONS[i - 1];
  const next = LESSONS[i + 1];
  const full = [l.title, ...l.blocks.flatMap((b) => [b.h, ...b.li])].join("\n");
  return (
    <>
      <PageHeader title={`${l.emoji} ${l.title}`} crumbs={[{ label: t("nav.learn"), href: "/learn/" }, { label: l.title }]} />
      {lang !== "de" && (
        <p className="mb-3 text-xs text-muted">{t("gloss.tap")}</p>
      )}
      {lang === "ar" || lang === "de" ? (
        <div dir="rtl" lang="ar" className="mb-4 rounded-2xl border border-teal/30 bg-tealsoft p-4 text-sm leading-relaxed">
          <p className="mb-1 text-xs font-semibold text-teal">الخلاصة</p>
          {l.ar}
        </div>
      ) : null}
      <div className="space-y-4">
        {l.blocks.map((b) => (
          <Card key={b.h}>
            <h2 className="mb-2 font-semibold">
              <GlossText text={b.h} />
            </h2>
            <ul className="space-y-1.5 text-[0.95rem]">
              {b.li.map((x, k) => (
                <li key={k} className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                  <GlossText text={x} />
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <TranslateLink text={full} />
      </div>
      <p className="mt-4 text-xs text-muted">Lernhilfe der App, kein Buchtext. Es gelten immer die Anordnungen und Standards deines Betriebs.</p>
      <nav className="mt-5 flex justify-between gap-2" aria-label="Weitere Lektionen">
        {prev ? <LinkButton variant="secondary" href={`/learn/view/?id=${prev.id}`}>← {prev.title}</LinkButton> : <span />}
        {next ? <LinkButton variant="secondary" href={`/learn/view/?id=${next.id}`}>{next.title} →</LinkButton> : <span />}
      </nav>
    </>
  );
}
