import { Suspense } from "react";
import { SourceViewer } from "@/components/Source";

export const metadata = { title: "Quelle" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <SourceViewer />
    </Suspense>
  );
}
