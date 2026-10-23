import { Suspense } from "react";
import { SettingsPage } from "@/components/SettingsPage";

export const metadata = { title: "Einstellungen" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <SettingsPage />
    </Suspense>
  );
}
