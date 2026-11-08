"use client";

import dynamic from "next/dynamic";
import { OrganFigure } from "./OrganFigure";
const Lesson3D = dynamic(() => import("./Lesson3D").then((m) => m.Lesson3D), { ssr: false });
import { LESSON_ORGANS } from "@/data/lessonOrgans";
import { DiseaseProfile } from "./DiseaseProfile";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { searchLessons, tokens } from "@/lib/lessonSearch";
import { AREAS, LESSONS, lessonById, type LessonGroup } from "@/data/lessons";
import { HUB, HUB_IDS } from "@/data/theoryHub";
import { WHO_ORDER, type Who } from "@/data/lessonsWho";
import { localizeLesson } from "@/data/lessonsI18n";
import { useTranslationsReady } from "@/lib/useTr";
import { normalizeLang, useLang, useT } from "@/lib/i18n";
import { Card, EmptyState, LinkButton, PageHeader, PrevNext, cn } from "./ui";
import { GlossText } from "./Gloss";
import { TranslateLink } from "./QuestionView";
import { Icon } from "./Icon";
import { DiagramView } from "./Diagram";
import { BUSINESS } from "@/data/business";
import { CONTENT_STAND, reviewedDate } from "@/data/review";

const META = {
  de: { stand: "Stand der Inhalte", rev: "Fachlich geprüft", report: "Fehler melden", subj: "Fehler in Lektion", ph: "Was ist falsch oder unklar? (z. B. Zahl, Satz, Übersetzung)", send: "Senden", sending: "Wird gesendet…", thanks: "Danke! Deine Meldung ist angekommen.", fail: "Senden hat nicht geklappt. Bitte später erneut versuchen.", cancel: "Abbrechen" },
  ar: { stand: "تاريخ المحتوى", rev: "روجع مهنياً", report: "بلّغ عن خطأ", subj: "خطأ في الدرس", ph: "ما الخطأ أو الغامض؟ (مثلاً رقم أو جملة أو ترجمة)", send: "إرسال", sending: "جارٍ الإرسال…", thanks: "شكراً! وصل بلاغك.", fail: "تعذّر الإرسال. حاول لاحقاً.", cancel: "إلغاء" },
  en: { stand: "Content as of", rev: "Reviewed by a professional", report: "Report an error", subj: "Error in lesson", ph: "What is wrong or unclear? (e.g. a number, sentence, translation)", send: "Send", sending: "Sending…", thanks: "Thanks! Your report was received.", fail: "Sending failed. Please try again later.", cancel: "Cancel" },
} as const;

/** Stand, Prüfdatum und Fehler melden (Meldung landet im Admin-Bereich; ohne Server als E-Mail-Entwurf). */
function LessonMeta({ id, title, lang }: { id: string; title: string; lang: string }) {
  const m = META[lang === "de" ? "de" : lang === "ar" ? "ar" : "en"];
  const rev = reviewedDate(id);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "fail">("idle");
  const mailOk = BUSINESS.email.includes("@") && !BUSINESS.email.startsWith("[");
  async function send() {
    if (text.trim().length < 5) return;
    setState("sending");
    try {
      const r = await fetch("/api/report", { method: "POST", headers: { "content-type": "application/json" }, credentials: "same-origin", body: JSON.stringify({ lesson: id, title, text, lang }) });
      if (!r.ok) throw new Error(String(r.status));
      setState("done");
      setText("");
    } catch {
      if (mailOk) {
        window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(`${m.subj}: ${id}`)}&body=${encodeURIComponent(`${title} (${id})\n\n${text}`)}`;
        setState("idle");
      } else setState("fail");
    }
  }
  return (
    <div className="mt-4 text-xs text-muted">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span>{m.stand}: {CONTENT_STAND}</span>
        {rev && <span>{m.rev}: {rev}</span>}
        <button type="button" onClick={() => { setOpen((o) => !o); setState("idle"); }} className="font-medium text-teal underline">{m.report}</button>
      </div>
      {open && (
        <div className="mt-2 rounded-xl border border-line p-3" dir={lang === "ar" ? "rtl" : "ltr"}>
          {state === "done" ? (
            <p role="status" className="text-sm text-fg">{m.thanks}</p>
          ) : (
            <>
              <textarea value={text} onChange={(e) => setText(e.target.value.slice(0, 1000))} placeholder={m.ph} rows={3} className="w-full rounded-lg border border-line bg-surface p-2 text-sm text-fg" aria-label={m.report} />
              <div className="mt-2 flex items-center gap-2">
                <button type="button" onClick={send} disabled={state === "sending" || text.trim().length < 5} className="rounded-lg bg-teal px-3 py-1.5 text-sm font-semibold text-white disabled:opacity-50">{state === "sending" ? m.sending : m.send}</button>
                <button type="button" onClick={() => setOpen(false)} className="text-sm underline">{m.cancel}</button>
                {state === "fail" && <span role="alert" className="text-sm text-bad">{m.fail}</span>}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

type Tab = LessonGroup | "modelle";
const GROUPS: { id: Tab; icon: string }[] = [
  { id: "krank", icon: "Stethoscope" },
  { id: "ausbildung", icon: "GraduationCap" },
  { id: "modelle", icon: "Puzzle" },
];

export function LearnList() {
  const t = useT();
  const [group, setGroup] = useState<Tab>("krank");
  const [q, setQ] = useState("");
  const [who, setWho] = useState<Who | "">("");
  const lang = useLang();
  useTranslationsReady(normalizeLang(lang));
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
      <div className="mb-5 grid grid-cols-3 gap-2" role="tablist">
        {GROUPS.map((g) => (
          <button key={g.id} role="tab" aria-selected={group === g.id} onClick={() => setGroup(g.id)} className={cn("min-h-12 rounded-2xl border px-1.5 py-2 text-[0.8rem] font-semibold leading-tight transition-colors", group === g.id ? "border-teal bg-tealsoft" : "border-line bg-surface")}>
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
      {group === "modelle" && (
        <div>
          <p className="mb-4 text-sm text-muted">{t("learn.hub.intro")}</p>
          {HUB.map((h) => (
            <section key={h.id} className="mb-6">
              <h2 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-muted">
                <Icon name={h.icon} className="h-4 w-4" /> {t(`learn.hub.${h.id}`)}
              </h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {h.lessons.map((id) => lessonById(id)).filter((l): l is NonNullable<typeof l> => !!l).map((l) => (
                  <Link key={l.id} href={`/learn/view/?id=${l.id}`} className="group block">
                    <Card className="flex items-center gap-3 transition-all group-hover:-translate-y-0.5 group-hover:border-teal group-hover:shadow-md">
                      <span aria-hidden className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><Icon name={l.icon} className="h-6 w-6" /></span>
                      <span className="min-w-0 font-medium leading-snug">{localizeLesson(l, lang).title}</span>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
      {group !== "modelle" && AREAS[group].map((a) => {
        const items = LESSONS.filter((l) => l.group === group && l.area === a.id && !HUB_IDS.has(l.id) && (!who || group !== "krank" || l.who?.includes(who)))
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
  const ready = useTranslationsReady(lang);
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
  const german = ready && lang !== "de" && !loc.translated;
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
        {LESSON_ORGANS[l.id] ? <Lesson3D id={l.id} /> : l.group === "krank" ? <OrganFigure id={l.id} area={l.area} /> : null}
        {l.group === "krank" && <DiseaseProfile id={l.id} />}
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
      <LessonMeta id={l.id} title={l.title} lang={lang} />
      <p className="mt-4 text-xs text-muted">{t("learn.note")}</p>
      <PrevNext label="Weitere Lektionen" prev={prev && prevLoc ? { title: prevLoc.title, href: `/learn/view/?id=${prev.id}` } : null} next={next && nextLoc ? { title: nextLoc.title, href: `/learn/view/?id=${next.id}` } : null} />
    </>
  );
}
