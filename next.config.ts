import type { NextConfig } from "next";

// Statischer Export: Die App läuft komplett im Browser (Daten als JSON, Fortschritt in IndexedDB/localStorage).
// Dadurch kann sie z. B. auf Cloudflare Pages, Netlify oder jedem Static-Host betrieben werden.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
