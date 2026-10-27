"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CaseStudy, Chapter, Question, QuestionBank } from "./types";
import { parseBank } from "./bankSchema";
import { asset } from "./asset";
import { useStore } from "./store";
import { applyPatch } from "./applyPatch";
import { isLearnerVisible, visibleCaseIds } from "./reliable";

export interface BankContext {
  status: "loading" | "ready" | "empty" | "error";
  error?: string;
  bank: QuestionBank | null;
  questions: Question[];
  byId: Map<string, Question>;
  chapters: Chapter[];
  chapterById: Map<string, Chapter>;
  cases: CaseStudy[];
  caseById: Map<string, CaseStudy>;
  skipped: { id: string; reason: string }[];
  duplicates: string[];
}

const Ctx = createContext<BankContext | null>(null);

export function BankProvider({ children }: { children: ReactNode }) {
  const { state } = useStore();
  const [raw, setRaw] = useState<{ status: BankContext["status"]; error?: string; res?: ReturnType<typeof parseBank> }>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch(asset("/data/bank.json"), { cache: "no-cache" });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = await r.json();
        const res = parseBank(json);
        if (cancelled) return;
        if (!res.bank) setRaw({ status: "error", error: res.error });
        else setRaw({ status: res.bank.questions.length ? "ready" : "empty", res });
      } catch (e) {
        if (!cancelled) setRaw({ status: "error", error: "Fragenbank konnte nicht geladen werden: " + String(e) });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<BankContext>(() => {
    const bank = raw.res?.bank ?? null;
    const base = bank?.questions ?? [];
    const known = new Set(base.map((q) => q.id));
    // Manuell ergänzte Aufgaben hinter die Original-Aufgaben desselben Falls einsortieren (nur Reihenfolge, keine Inhaltsänderung)
    const manual = Object.values(state.manual).filter((q) => !known.has(q.id));
    const patched = [...base, ...manual].map((q) => applyPatch(q, state.overrides[q.id])).sort((a, b) => a.order - b.order);
    // Lernende sehen nur verlässliche Inhalte (siehe reliable.ts); die Rohdaten bleiben unverändert.
    const okCases = visibleCaseIds(patched);
    const questions = patched.filter((q) => isLearnerVisible(q) && (!q.caseId || okCases.has(q.caseId)));
    const cases = (bank?.cases ?? []).filter((c) => okCases.has(c.id));
    return {
      status: raw.status,
      error: raw.error,
      bank,
      questions,
      byId: new Map(questions.map((q) => [q.id, q])),
      chapters: bank?.chapters ?? [],
      chapterById: new Map((bank?.chapters ?? []).map((c) => [c.id, c])),
      cases,
      caseById: new Map(cases.map((c) => [c.id, c])),
      skipped: raw.res?.skipped ?? [],
      duplicates: raw.res?.duplicates ?? [],
    };
  }, [raw, state.overrides, state.manual]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useBank(): BankContext {
  const v = useContext(Ctx);
  if (!v) throw new Error("useBank außerhalb des BankProvider verwendet");
  return v;
}
