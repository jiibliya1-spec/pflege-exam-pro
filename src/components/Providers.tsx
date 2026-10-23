"use client";

import { useEffect, type ReactNode } from "react";
import { StoreProvider, useStore } from "@/lib/store";
import { BankProvider } from "@/lib/bank";
import { ToastProvider } from "./Toast";
import { AppShell } from "./AppShell";

function SettingsEffects({ children }: { children: ReactNode }) {
  const { state, ready } = useStore();
  const { theme, fontScale, reducedMotion, animations, uiLanguage } = state.settings;

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    const apply = () => {
      const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.classList.toggle("dark", dark);
    };
    apply();
    try {
      localStorage.setItem("pep:theme", JSON.stringify(theme));
    } catch {
      /* Speicher evtl. blockiert */
    }
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [theme, ready]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(fontScale));
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.classList.toggle("no-motion", reducedMotion || !animations);
  }, [reducedMotion, animations]);

  useEffect(() => {
    document.documentElement.lang = "de";
    document.documentElement.dataset.ui = uiLanguage;
  }, [uiLanguage]);

  return <>{children}</>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <SettingsEffects>
        <BankProvider>
          <ToastProvider>
            <AppShell>{children}</AppShell>
          </ToastProvider>
        </BankProvider>
      </SettingsEffects>
    </StoreProvider>
  );
}
