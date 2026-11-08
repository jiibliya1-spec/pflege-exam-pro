/* Service Worker: App-Shell offline, Seiten und Daten sofort aus dem Cache, im Hintergrund aktualisiert. */
const VERSION = "pep-v3";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const staticAsset = url.pathname.includes("/_next/static/") || url.pathname.includes("/icons/");
  if (staticAsset) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => { if (r.ok && !r.redirected) { const c = r.clone(); caches.open(VERSION).then((ch) => ch.put(req, c)); } return r; })));
    return;
  }
  // Seiten, Daten, Manifest: sofort aus dem Cache (schneller Start), parallel im Hintergrund erneuern
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req)
        .then((r) => { if (r.ok && !r.redirected) { const c = r.clone(); caches.open(VERSION).then((ch) => ch.put(req, c)); } return r; })
        .catch(() => hit || (req.mode === "navigate" ? caches.match(new URL("./", self.registration.scope).href) : undefined));
      return hit || net;
    })
  );
});
