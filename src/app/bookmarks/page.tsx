import { Suspense } from "react";
import { Bookmarks } from "@/components/ListPages";

export const metadata = { title: "Lesezeichen" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <Bookmarks />
    </Suspense>
  );
}
