import { Suspense } from "react";
import { OralHub } from "@/components/Oral";

export const metadata = { title: "Mündliche Prüfung" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <OralHub />
    </Suspense>
  );
}
