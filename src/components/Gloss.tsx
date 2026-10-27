"use client";

import { Fragment, useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { splitGloss } from "@/lib/glossary";

/** Zeigt Text; bei gewählter Fremdsprache sind Fachwörter antippbar und zeigen die Übersetzung. */
export function GlossText({ text }: { text: string; seen?: Set<string> }) {
  const lang = useLang();
  const t = useT();
  const [open, setOpen] = useState<string | null>(null);
  if (lang === "de") return <>{text}</>;
  return (
    <>
      {splitGloss(text, new Set()).map((p, i) =>
        typeof p === "string" ? (
          <Fragment key={i}>{p}</Fragment>
        ) : (
          <span key={i} className="relative">
            <button
              type="button"
              onClick={() => setOpen(open === p.entry.de ? null : p.entry.de)}
              className="cursor-help rounded-sm border-b-2 border-dotted border-teal/70 bg-teal/5 px-0.5 text-inherit"
              aria-expanded={open === p.entry.de}
              title={p.entry.tr[lang]}
            >
              {p.text}
            </button>
            {open === p.entry.de && (
              <span role="note" dir={lang === "ar" ? "rtl" : "ltr"} className="gloss-pop mx-1 inline-block rounded-lg border border-teal/40 bg-surface px-2 py-1 text-[0.85em] font-medium text-teal shadow-sm">
                {p.entry.tr[lang]}
                <span className="sr-only"> ({t("gloss.title")})</span>
              </span>
            )}
          </span>
        )
      )}
    </>
  );
}
