import { Suspense } from "react";
import { LearnView } from "@/components/Learn";

export const metadata = { title: "Lektion" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <LearnView />
    </Suspense>
  );
}
