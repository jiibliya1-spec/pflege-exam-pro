import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { RegisterSW } from "@/components/RegisterSW";
import { BASE_PATH } from "@/lib/asset";

export const metadata: Metadata = {
  title: { default: "Pflege Exam Pro", template: "%s · Pflege Exam Pro" },
  description: "Prüfungsvorbereitung Pflegefachfrau / Pflegefachmann – Fallbeispiele, Aufgaben und Auswertung.",
  applicationName: "Pflege Exam Pro",
  manifest: `${BASE_PATH}/manifest.webmanifest`,
  icons: { icon: `${BASE_PATH}/icons/icon-192.png`, apple: `${BASE_PATH}/icons/apple-touch-icon.png` },
  appleWebApp: { capable: true, title: "Pflege Exam", statusBarStyle: "default" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0b2a4a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Theme vor dem ersten Paint setzen (verhindert Aufblitzen) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=JSON.parse(localStorage.getItem('pep:theme')||'null');var d=s==='dark'||((s===null||s==='system')&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen">
        <Providers>{children}</Providers>
        <RegisterSW />
      </body>
    </html>
  );
}
