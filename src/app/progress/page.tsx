import { Suspense } from "react";
import { ProgressPage } from "@/components/Progress";

export const metadata = { title: "Fortschritt" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <ProgressPage />
    </Suspense>
  );
}
