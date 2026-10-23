"use client";

import { useEffect } from "react";
import { asset } from "@/lib/asset";

export function RegisterSW() {
  useEffect(() => {
    if (!("serviceWorker" in navigator) || process.env.NODE_ENV !== "production") return;
    navigator.serviceWorker.register(asset("/sw.js"), { scope: asset("/") || "/" }).catch(() => {});
  }, []);
  return null;
}
