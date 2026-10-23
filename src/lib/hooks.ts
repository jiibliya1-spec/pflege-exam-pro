"use client";

import { useMemo, useState } from "react";
import { nowMs } from "./clock";
import { useStore } from "./store";
import { useBank } from "./bank";
import type { UserContext } from "./exam";
import { latestAttempts } from "./stats";
import { isDue } from "./srs";

/** Leitet aus dem Nutzerzustand den Kontext für Quellenfilter (Fehler, Lesezeichen, fällig …) ab. */
export function useUserContext(): UserContext {
  const { state } = useStore();
  const { questions } = useBank();
  const [now] = useState(nowMs);
  return useMemo(() => {
    const latest = latestAttempts(state.attempts);
    const lastCorrect: Record<string, boolean | null> = {};
    const attempted = new Set<string>();
    for (const [id, a] of latest) {
      lastCorrect[id] = a.correct;
      attempted.add(id);
    }
    const bookmarked = new Set(Object.entries(state.qdata).filter(([, v]) => v.bookmarked).map(([k]) => k));
    const valid = new Set(questions.map((q) => q.id));
    const dueIds = new Set(Object.entries(state.qdata).filter(([k, v]) => valid.has(k) && isDue(v.dueAt, now)).map(([k]) => k));
    return { lastCorrect, attempted, bookmarked, dueIds };
  }, [state.attempts, state.qdata, questions, now]);
}

export function newId(prefix = "id"): string {
  const rnd = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID().slice(0, 8) : Math.random().toString(36).slice(2, 10);
  return `${prefix}-${Date.now().toString(36)}-${rnd}`;
}
