"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { StoreProvider, useStore } from "@/lib/store";
import { BankProvider } from "@/lib/bank";
import { LANGS, normalizeLang } from "@/lib/i18n";
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
    const lang = normalizeLang(uiLanguage);
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGS.find((l) => l.id === lang)?.dir ?? "ltr";
    document.documentElement.dataset.ui = lang;
  }, [uiLanguage]);

  return <>{children}</>;
}

/** Öffentliche Seiten (Verkaufsseite, Rechtstexte): ohne App-Navigation und ohne lokale Lern-Daten. */
const PUBLIC_PAGE = /^\/(landing|impressum|datenschutz|agb|widerruf)\/?$/;

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (PUBLIC_PAGE.test(pathname || "")) return <>{children}</>;
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
