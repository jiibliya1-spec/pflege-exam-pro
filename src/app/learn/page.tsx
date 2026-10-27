import { Suspense } from "react";
import { LearnList } from "@/components/Learn";

export const metadata = { title: "Lernen" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <LearnList />
    </Suspense>
  );
}
