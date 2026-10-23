"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { CheckCircle2, Info, XCircle, X } from "lucide-react";

type ToastKind = "ok" | "error" | "info";
interface ToastItem {
  id: number;
  kind: ToastKind;
  message: string;
}
interface ToastApi {
  toast: (message: string, kind?: ToastKind) => void;
}

const Ctx = createContext<ToastApi>({ toast: () => {} });

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const nextId = useRef(1);
  const toast = useCallback((message: string, kind: ToastKind = "info") => {
    const id = nextId.current++;
    setItems((s) => [...s, { id, kind, message }]);
    setTimeout(() => setItems((s) => s.filter((t) => t.id !== id)), kind === "error" ? 8000 : 4000);
  }, []);
  const value = useMemo(() => ({ toast }), [toast]);
  const Icon = { ok: CheckCircle2, error: XCircle, info: Info };
  const color = { ok: "text-ok", error: "text-bad", info: "text-teal" };
  return (
    <Ctx.Provider value={value}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed bottom-20 right-4 z-[60] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2 md:bottom-4">
        {items.map((t) => {
          const I = Icon[t.kind];
          return (
            <div key={t.id} role={t.kind === "error" ? "alert" : "status"} className="fade-up pointer-events-auto flex items-start gap-3 rounded-xl border border-line bg-surface p-3 text-sm shadow-lg">
              <I className={`mt-0.5 h-5 w-5 shrink-0 ${color[t.kind]}`} aria-hidden />
              <p className="flex-1">{t.message}</p>
              <button aria-label="Hinweis schließen" onClick={() => setItems((s) => s.filter((x) => x.id !== t.id))} className="text-muted hover:text-fg">
                <X className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </Ctx.Provider>
  );
}

export const useToast = () => useContext(Ctx);
