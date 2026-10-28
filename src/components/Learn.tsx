"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { searchLessons, tokens } from "@/lib/lessonSearch";
import { AREAS, LESSONS, lessonById, type LessonGroup } from "@/data/lessons";
import { WHO_ORDER, type Who } from "@/data/lessonsWho";
import { localizeLesson } from "@/data/lessonsI18n";
import { normalizeLang, useLang, useT } from "@/lib/i18n";
import { Card, EmptyState, LinkButton, PageHeader, cn } from "./ui";
import { GlossText } from "./Gloss";
import { TranslateLink } from "./QuestionView";
import { Icon } from "./Icon";
import { DiagramView } from "./Diagram";

const GROUPS: { id: LessonGroup; icon: string }[] = [
  { id: "krank", icon: "Stethoscope" },
  { id: "ausbildung", icon: "GraduationCap" },
];

export function LearnList() {
  const t = useT();
  const [group, setGroup] = useState<LessonGroup>("krank");
  const [q, setQ] = useState("");
  const [who, setWho] = useState<Who | "">("");
  const lang = useLang();
  const hits = useMemo(() => (tokens(q).length ? searchLessons(q) : null), [q]);
  return (
    <>
      <PageHeader title={t("nav.learn")} />
      <div className="relative mb-4">
        <Search aria-hidden className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("learn.search")}
          aria-label={t("learn.search")}
          autoComplete="off"
          className="h-12 w-full rounded-2xl border border-line bg-surface ps-11 pe-11 text-base outline-none focus:border-teal [&::-webkit-search-cancel-button]:hidden"
        />
        {q && (
          <button type="button" onClick={() => setQ("")} aria-label={t("ui.close")} className="absolute end-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:bg-surface2">
            <X className="h-5 w-5" aria-hidden />
          </button>
        )}
      </div>
      {hits ? (
        <section aria-live="polite">
          <p className="mb-3 text-sm text-muted">{hits.length ? t("learn.hits", hits.length) : t("learn.nohits")}</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {hits.map((h) => (
              <Link key={h.lesson.id} href={`/learn/view/?id=${h.lesson.id}`} className="group block">
                <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-teal group-hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><Icon name={h.lesson.icon} className="h-5 w-5" /></span>
                    <div className="min-w-0">
                      <p className="font-medium leading-snug">{h.lesson.title}</p>
                      {h.where && <p className="mt-0.5 text-xs font-medium text-teal">{h.where}</p>}
                      {h.snippet && <p className="mt-1 text-sm text-muted"><Marked text={h.snippet} terms={q} /></p>}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <>
      <div className="mb-5 grid grid-cols-2 gap-2" role="tablist">
        {GROUPS.map((g) => (
          <button key={g.id} role="tab" aria-selected={group === g.id} onClick={() => setGroup(g.id)} className={cn("min-h-12 rounded-2xl border px-3 py-2 font-semibold transition-colors", group === g.id ? "border-teal bg-tealsoft" : "border-line bg-surface")}>
            <Icon name={g.icon} className="me-1.5 inline h-5 w-5 align-text-bottom" /> {t(`learn.group.${g.id}`)}
          </button>
        ))}
      </div>
      {group === "krank" && (
        <div className="mb-5" role="group" aria-label={t("learn.who")}>
          <p className="mb-1.5 text-xs font-semibold text-muted">{t("learn.who")}</p>
          <div className="flex flex-wrap gap-2">
            {(["", ...WHO_ORDER] as (Who | "")[]).map((w) => (
              <button key={w || "all"} type="button" aria-pressed={who === w} onClick={() => setWho(w)} className={cn("min-h-10 rounded-full border px-3.5 text-sm font-medium transition-colors", who === w ? "border-teal bg-tealsoft text-teal" : "border-line bg-surface")}>
                {w ? t(`learn.who.${w}`) : t("learn.who.all")}
              </button>
            ))}
          </div>
        </div>
      )}
      {AREAS[group].map((a) => {
        const items = LESSONS.filter((l) => l.group === group && l.area === a.id && (!who || group !== "krank" || l.who?.includes(who)))
          .map((l) => ({ l, loc: localizeLesson(l, lang) }));
        if (!items.length) return null;
        return (
          <section key={a.id} className="mb-6">
            <h2 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-muted">
              <Icon name={a.icon} className="h-4 w-4" /> {a.label}
            </h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(({ l, loc }) => (
                <Link key={l.id} href={`/learn/view/?id=${l.id}`} className="group block">
                  <Card className="flex items-center gap-3 transition-all group-hover:-translate-y-0.5 group-hover:border-teal group-hover:shadow-md">
                    <span aria-hidden className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><Icon name={l.icon} className="h-6 w-6" /></span>
                    <span className="min-w-0 font-medium leading-snug">
                      {loc.title}
                      {l.who && group === "krank" && (
                        <span className="mt-1 flex flex-wrap gap-1">
                          {l.who.map((w) => (
                            <span key={w} className="rounded-full bg-surface2 px-2 py-0.5 text-[11px] font-normal text-muted">{t(`learn.who.${w}`)}</span>
                          ))}
                        </span>
                      )}
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
        </>
      )}
      <p className="text-xs text-muted">{t("learn.note")}</p>
    </>
  );
}

/** Hebt die Suchwörter im Text hervor (einfacher Vergleich ohne Umlaut-Umwandlung). */
function Marked({ text, terms }: { text: string; terms: string }) {
  const words = terms.trim().split(/\s+/).filter((w) => w.length >= 2).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!words.length) return <>{text}</>;
  const parts = text.split(new RegExp(`(${words.join("|")})`, "gi"));
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <mark key={i} className="rounded bg-warnsoft px-0.5 text-fg">{p}</mark> : <span key={i}>{p}</span>))}
    </>
  );
}

export function LearnView() {
  const id = useSearchParams().get("id") ?? "";
  const l = lessonById(id);
  const lang = normalizeLang(useLang());
  const t = useT();
  if (!l) return <EmptyState title={t("learn.notfound")} action={<LinkButton href="/learn/">{t("learn.all")}</LinkButton>}>{id}</EmptyState>;
  const i = LESSONS.findIndex((x) => x.id === l.id);
  const prev = LESSONS[i - 1];
  const next = LESSONS[i + 1];
  const loc = localizeLesson(l, lang);
  const prevLoc = prev ? localizeLesson(prev, lang) : null;
  const nextLoc = next ? localizeLesson(next, lang) : null;
  const full = [l.title, ...l.blocks.flatMap((b) => [b.h, ...b.li])].join("\n");
  /** In einer Fremdsprache ohne vollständige Übersetzung bleibt der deutsche Text mit Tipp-Übersetzung. */
  const german = lang !== "de" && !loc.translated;
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <>
      <PageHeader title={loc.title} crumbs={[{ label: t("nav.learn"), href: "/learn/" }, { label: loc.title }]} />
      {german && (
        <p className="mb-3 rounded-xl bg-warnsoft px-3 py-2 text-sm" dir={dir} lang={lang}>{t("learn.untranslated")}</p>
      )}
      {german && lang === "ar" && (
        <div dir="rtl" lang="ar" className="mb-4 rounded-2xl border border-teal/30 bg-tealsoft p-4 text-sm leading-relaxed">
          <p className="mb-1 text-xs font-semibold text-teal">الخلاصة</p>
          {l.ar}
        </div>
      )}
      <div dir={german ? "ltr" : dir} lang={german ? "de" : lang}>
        {loc.diagrams?.length ? (
          <div className="mb-4 space-y-4">
            {loc.diagrams.map((d, k) => (
              <DiagramView key={k} d={d} />
            ))}
          </div>
        ) : null}
        <div className="space-y-4">
          {loc.blocks.map((b) => (
            <Card key={b.h}>
              <h2 className="mb-2 font-semibold">{german ? <GlossText text={b.h} /> : b.h}</h2>
              <ul className="space-y-1.5 text-[0.95rem]">
                {b.li.map((x, k) => (
                  <li key={k} className={cn("relative", dir === "rtl" && !german ? "pr-4 before:absolute before:right-0 before:content-['•']" : "pl-4 before:absolute before:left-0 before:content-['•']")}>
                    {german ? <GlossText text={x} /> : x}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
      {german && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <TranslateLink text={full} />
        </div>
      )}
      <p className="mt-4 text-xs text-muted">{t("learn.note")}</p>
      <nav className="mt-5 flex justify-between gap-2" aria-label="Weitere Lektionen">
        {prev && prevLoc ? <LinkButton variant="secondary" href={`/learn/view/?id=${prev.id}`}>← {prevLoc.title}</LinkButton> : <span />}
        {next && nextLoc ? <LinkButton variant="secondary" href={`/learn/view/?id=${next.id}`}>{nextLoc.title} →</LinkButton> : <span />}
      </nav>
    </>
  );
}
