/* Service Worker: App-Shell offline, Daten immer erst frisch (Netz), dann Cache. */
const VERSION = "pep-v1";
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
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => { const c = r.clone(); caches.open(VERSION).then((ch) => ch.put(req, c)); return r; })));
    return;
  }
  // Seiten, Daten, Manifest: Netz zuerst, bei Offline aus dem Cache
  e.respondWith(
    fetch(req)
      .then((r) => { if (r.ok) { const c = r.clone(); caches.open(VERSION).then((ch) => ch.put(req, c)); } return r; })
      .catch(() => caches.match(req).then((hit) => hit || (req.mode === "navigate" ? caches.match(new URL("./", self.registration.scope).href) : undefined)))
  );
});
