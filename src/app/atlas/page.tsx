import { Suspense } from "react";
import { AtlasHome } from "@/components/AtlasHome";

export const metadata = { title: "Anatomie-Atlas" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <AtlasHome />
    </Suspense>
  );
}
