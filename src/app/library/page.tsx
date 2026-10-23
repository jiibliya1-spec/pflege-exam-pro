import { Suspense } from "react";
import { Library } from "@/components/Library";

export const metadata = { title: "Fragenbank" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <Library />
    </Suspense>
  );
}
