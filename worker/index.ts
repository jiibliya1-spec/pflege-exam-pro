/**
 * Cloudflare-Worker: Zugangscodes für Pflege Exam Pro.
 *
 * - Die statische App (./out) wird NUR ausgeliefert, wenn ein gültiges, signiertes Sitzungs-Cookie vorhanden ist.
 *   Das schützt auch die JavaScript-Dateien mit den Lerninhalten, nicht nur die Startseite.
 * - Ein Code (PEP-XXXX-XXXX-XXXX) gehört einem Käufer und darf auf höchstens MAX_DEVICES Geräten aktiviert werden.
 * - Codes entstehen automatisch nach Zahlung (Stripe-Webhook) oder von Hand (Admin-API) und werden per E-Mail verschickt.
 * - Ist SESSION_SECRET nicht gesetzt, bleibt die App offen (so bricht ein Deploy ohne Einrichtung nichts).
 */
import { getCookie, maskEmail, newCode, newDeviceId, normalizeCode, signSession, verifySession, verifyStripe, type Session } from "./lib";

interface KV {
  get(key: string, type?: "text"): Promise<string | null>;
  put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
  list(opts?: { prefix?: string; cursor?: string; limit?: number }): Promise<{ keys: { name: string }[]; list_complete: boolean; cursor?: string }>;
}
interface Env {
  ASSETS: { fetch(req: Request): Promise<Response> };
  LICENSES?: KV;
  SESSION_SECRET?: string;
  ADMIN_TOKEN?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  RESEND_API_KEY?: string;
  MAIL_FROM?: string;
  /** Wie viele Geräte pro Code (Standard 2: z. B. Handy und Laptop) */
  MAX_DEVICES?: string;
  /** Wohin Interessenten zum Kaufen geschickt werden (z. B. Stripe Payment Link) */
  BUY_URL?: string;
  /** Sitzungsdauer in Tagen (Standard 30) */
  SESSION_DAYS?: string;
}

interface Licence {
  email?: string;
  note?: string;
  status: "active" | "revoked";
  devices: string[];
  created: number;
  source: "stripe" | "admin";
}

const COOKIE = "pep_session";
const now = () => Math.floor(Date.now() / 1000);
const json = (data: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra } });

/** Pfade, die ohne Lizenz erreichbar sind (Aktivierungsseite, API, Manifest und Symbole fürs Installieren). */
function isPublic(path: string): boolean {
  return (
    path === "/activate" || path === "/activate/" || path === "/admin" || path === "/admin/" || path.startsWith("/api/") ||
    path === "/manifest.webmanifest" || path.startsWith("/icons/") || path === "/favicon.ico"
  );
}

async function getLicence(env: Env, code: string): Promise<Licence | null> {
  const raw = await env.LICENSES!.get(`code:${code}`);
  return raw ? (JSON.parse(raw) as Licence) : null;
}
const putLicence = (env: Env, code: string, l: Licence) => env.LICENSES!.put(`code:${code}`, JSON.stringify(l));

function cookieHeader(token: string, days: number): string {
  return `${COOKIE}=${token}; Path=/; Max-Age=${days * 86400}; HttpOnly; Secure; SameSite=Lax`;
}

async function issue(env: Env, code: string, device: string): Promise<string> {
  const days = Number(env.SESSION_DAYS) || 30;
  const s: Session = { c: code, d: device, e: now() + days * 86400, v: now() };
  return cookieHeader(await signSession(env.SESSION_SECRET!, s), days);
}

function activatePage(env: Env, next: string): Response {
  const buy = env.BUY_URL ? `<a class="buy" href="${env.BUY_URL.replace(/"/g, "")}">Zugang kaufen &middot; شراء الوصول</a>` : "";
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0b2a4a"><link rel="manifest" href="/manifest.webmanifest"><link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"><title>Pflege Exam Pro: Zugang</title>
<style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0b2a4a;color:#0f2238;font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,"Noto Naskh Arabic",sans-serif;padding:24px}
.card{background:#fff;border-radius:20px;padding:28px;max-width:420px;width:100%;box-shadow:0 20px 50px rgba(0,0,0,.35)}
h1{margin:0 0 4px;font-size:22px}p{margin:6px 0 16px;color:#52667d}
input{width:100%;font-size:20px;letter-spacing:2px;text-align:center;padding:14px;border:2px solid #d9e2ec;border-radius:12px;text-transform:uppercase}
input:focus{outline:3px solid #0fa3a3;border-color:#0fa3a3}
button{margin-top:14px;width:100%;padding:14px;border:0;border-radius:12px;background:#0b8f8f;color:#fff;font-size:17px;font-weight:600;cursor:pointer}
button:disabled{opacity:.6}.err{color:#b42318;min-height:24px;margin-top:10px;font-size:15px}
.buy{display:block;text-align:center;margin-top:16px;color:#0b8f8f;font-weight:600}.ar{direction:rtl;text-align:right;font-size:14px;margin-top:14px;color:#52667d}
</style></head><body><main class="card">
<h1>Pflege Exam Pro</h1>
<p>Bitte gib deinen Zugangscode ein. Du findest ihn in der E-Mail nach dem Kauf.</p>
<form id="f"><input id="c" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="PEP-XXXX-XXXX-XXXX" inputmode="text" aria-label="Zugangscode"><button id="b" type="submit">Freischalten</button><div class="err" id="e" role="alert"></div></form>
${buy}
<div class="ar">أدخل رمز الوصول الذي وصلك بالبريد الإلكتروني. الرمز شخصي ويعمل على عدد محدود من الأجهزة.</div>
</main>
<script>
var f=document.getElementById("f"),c=document.getElementById("c"),b=document.getElementById("b"),e=document.getElementById("e");
var next=${JSON.stringify(next)};
f.addEventListener("submit",function(ev){ev.preventDefault();e.textContent="";b.disabled=true;
fetch("/api/activate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({code:c.value}),credentials:"same-origin"})
.then(function(r){return r.json().then(function(j){return[r.status,j]})})
.then(function(a){if(a[0]===200){location.replace(next)}else{e.textContent=a[1].message||"Fehler";b.disabled=false}})
.catch(function(){e.textContent="Keine Verbindung. Bitte später erneut versuchen.";b.disabled=false})});
</script></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}


function adminPage(): Response {
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Admin</title>
<style>*{box-sizing:border-box}body{margin:0;background:#f4f7fb;color:#0f2238;font:16px/1.5 system-ui,-apple-system,sans-serif;padding:16px;max-width:560px;margin:auto}
h1{font-size:20px}.c{background:#fff;border:1px solid #d9e2ec;border-radius:14px;padding:16px;margin:12px 0}
input{width:100%;padding:12px;font-size:16px;border:1px solid #d9e2ec;border-radius:10px;margin:6px 0}
button,a.b{display:inline-block;padding:11px 14px;border:0;border-radius:10px;background:#0b8f8f;color:#fff;font-size:15px;font-weight:600;cursor:pointer;text-decoration:none;margin:4px 4px 0 0}
button.g{background:#52667d}button.r{background:#b42318}.code{font:700 22px monospace;letter-spacing:1px;word-break:break-all}
table{width:100%;border-collapse:collapse;font-size:14px}td{border-top:1px solid #eef3f8;padding:8px 4px;vertical-align:top;word-break:break-all}.m{color:#52667d;font-size:14px}</style></head><body>
<h1>Pflege Exam Pro: Admin</h1>
<div class="c"><label>Admin-Token</label><input id="t" type="password" autocomplete="off"><button class="g" id="sv">Merken (nur dieser Tab)</button></div>
<div class="c"><b>Neuen Code erzeugen</b> (nach Zahlungseingang)<input id="em" type="email" placeholder="E-Mail des Kunden (optional, wird dann direkt gesendet)"><input id="nt" placeholder="Notiz, z. B. PayPal 29 EUR, Name"><button id="mk">Code erzeugen</button><div id="out"></div></div>
<div class="c"><b>Alle Codes</b> <button class="g" id="ls">Laden</button><div id="lst" class="m"></div></div>
<script>
var $=function(i){return document.getElementById(i)};
try{$("t").value=sessionStorage.getItem("tk")||""}catch(e){}
$("sv").onclick=function(){try{sessionStorage.setItem("tk",$("t").value)}catch(e){}};
function api(path,body){var o={method:body?"POST":"GET",headers:{authorization:"Bearer "+$("t").value}};if(body)o.body=JSON.stringify(body);return fetch(path,o).then(function(r){return r.json().then(function(j){if(!r.ok)throw new Error(j.error||r.status);return j})})}
function el(t,x,c){var e=document.createElement(t);if(x)e.textContent=x;if(c)e.className=c;return e}
$("mk").onclick=function(){var o=$("out");o.textContent="...";api("/api/admin/mint",{count:1,email:$("em").value||undefined,note:$("nt").value||undefined}).then(function(j){o.textContent="";var code=j.codes[0];o.appendChild(el("div",code,"code"));
var msg="Dein Zugangscode fuer Pflege Exam Pro: "+code+"\\nApp: "+location.origin+"/activate/";
var cp=el("button","Kopieren");cp.onclick=function(){navigator.clipboard.writeText(msg);cp.textContent="Kopiert"};o.appendChild(cp);
var wa=el("a","WhatsApp","b");wa.href="https://wa.me/?text="+encodeURIComponent(msg);o.appendChild(wa);
if($("em").value){var ml=el("a","E-Mail-App","b");ml.href="mailto:"+$("em").value+"?subject="+encodeURIComponent("Dein Zugangscode")+"&body="+encodeURIComponent(msg);o.appendChild(ml)}
o.appendChild(el("div",j.mailed?"E-Mail wurde automatisch gesendet.":"Nicht automatisch gesendet: bitte per Button oben schicken.","m"))}).catch(function(e){o.textContent="Fehler: "+e.message})};
function act(path,code){api(path,{code:code}).then(function(){$("ls").click()}).catch(function(e){alert(e.message)})}
$("ls").onclick=function(){var l=$("lst");l.textContent="...";api("/api/admin/list").then(function(j){l.textContent=j.count+" Codes";var t=el("table");j.licences.forEach(function(x){var tr=el("tr"),td=el("td");
td.appendChild(el("div",x.code,"code"));td.lastChild.style.fontSize="15px";td.appendChild(el("div",(x.status==="active"?"aktiv":"GESPERRT")+" | Geräte: "+x.devices+(x.email?" | "+x.email:"")+(x.note?" | "+x.note:""),"m"));
var b1=el("button",x.status==="active"?"Sperren":"Freigeben",x.status==="active"?"r":"");b1.onclick=function(){act(x.status==="active"?"/api/admin/revoke":"/api/admin/restore",x.code)};
var b2=el("button","Geräte zurücksetzen","g");b2.onclick=function(){act("/api/admin/reset",x.code)};td.appendChild(b1);td.appendChild(b2);tr.appendChild(td);t.appendChild(tr)});l.appendChild(t)}).catch(function(e){l.textContent="Fehler: "+e.message})};
</script></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" } });
}

async function activate(req: Request, env: Env): Promise<Response> {
  let body: { code?: string };
  try { body = await req.json(); } catch { return json({ error: "bad_request", message: "Ungültige Anfrage." }, 400); }
  const code = normalizeCode(body.code || "");
  if (!code) return json({ error: "format", message: "Der Code hat ein falsches Format. Beispiel: PEP-K7M2-9QXD-4TWF" }, 400);
  const lic = await getLicence(env, code);
  if (!lic) return json({ error: "unknown", message: "Dieser Code ist unbekannt." }, 404);
  if (lic.status !== "active") return json({ error: "revoked", message: "Dieser Code wurde gesperrt. Bitte Support kontaktieren." }, 403);

  const max = Number(env.MAX_DEVICES) || 2;
  const existing = await verifySession(env.SESSION_SECRET!, getCookie(req.headers.get("cookie"), COOKIE), now());
  let device = existing && existing.c === code && lic.devices.includes(existing.d) ? existing.d : "";
  if (!device) {
    if (lic.devices.length >= max) {
      return json({ error: "device_limit", message: `Dieser Code ist schon auf ${max} Geräten aktiv. Bitte den Support kontaktieren, um ein Gerät zurückzusetzen.` }, 403);
    }
    device = newDeviceId();
    lic.devices.push(device);
    await putLicence(env, code, lic);
  }
  return json({ ok: true }, 200, { "set-cookie": await issue(env, code, device) });
}

/** Prüft das Cookie. Alle paar Stunden zusätzlich gegen die Datenbank (Sperre/Reset wirken so schnell). */
async function authorize(req: Request, env: Env, checkDb: boolean): Promise<{ ok: boolean; cookie?: string }> {
  const s = await verifySession(env.SESSION_SECRET!, getCookie(req.headers.get("cookie"), COOKIE), now());
  if (!s) return { ok: false };
  if (!checkDb || now() - s.v < 6 * 3600) return { ok: true };
  const lic = await getLicence(env, s.c);
  if (!lic || lic.status !== "active" || !lic.devices.includes(s.d)) return { ok: false };
  return { ok: true, cookie: await issue(env, s.c, s.d) };
}

async function sendMail(env: Env, to: string, code: string, appUrl: string): Promise<boolean> {
  if (!env.RESEND_API_KEY || !env.MAIL_FROM) return false;
  const text = `Danke für deinen Kauf von Pflege Exam Pro.\n\nDein persönlicher Zugangscode:\n\n    ${code}\n\nApp öffnen: ${appUrl}/activate/\nDen Code einmal eingeben, danach bleibt dein Gerät freigeschaltet. Der Code ist nur für dich und auf ${env.MAX_DEVICES || 2} Geräte begrenzt. Bitte nicht weitergeben.\n\n---\nشكراً لشرائك Pflege Exam Pro.\nرمز الوصول الخاص بك: ${code}\nافتح التطبيق: ${appUrl}/activate/\nأدخل الرمز مرة واحدة فقط. الرمز شخصي ولا يُشارك.`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from: env.MAIL_FROM, to: [to], subject: "Dein Zugangscode für Pflege Exam Pro", text }),
  });
  return r.ok;
}

async function stripeWebhook(req: Request, env: Env): Promise<Response> {
  if (!env.STRIPE_WEBHOOK_SECRET) return json({ error: "not_configured" }, 501);
  const raw = await req.text();
  if (!(await verifyStripe(env.STRIPE_WEBHOOK_SECRET, raw, req.headers.get("stripe-signature"), now()))) return json({ error: "bad_signature" }, 400);
  const ev = JSON.parse(raw) as { type: string; data: { object: { id: string; payment_status?: string; customer_details?: { email?: string }; customer_email?: string } } };
  if (ev.type !== "checkout.session.completed" && ev.type !== "checkout.session.async_payment_succeeded") return json({ ok: true, ignored: true });
  const o = ev.data.object;
  if (o.payment_status && o.payment_status !== "paid") return json({ ok: true, ignored: "unpaid" });
  const orderKey = `order:${o.id}`;
  if (await env.LICENSES!.get(orderKey)) return json({ ok: true, duplicate: true }); // Stripe darf mehrfach senden
  const email = o.customer_details?.email || o.customer_email || "";
  const code = newCode();
  await putLicence(env, code, { email, status: "active", devices: [], created: now(), source: "stripe" });
  await env.LICENSES!.put(orderKey, code);
  const origin = new URL(req.url).origin;
  const mailed = email ? await sendMail(env, email, code, origin) : false;
  return json({ ok: true, mailed });
}

async function admin(req: Request, env: Env, path: string): Promise<Response> {
  const auth = req.headers.get("authorization") || "";
  if (!env.ADMIN_TOKEN || auth !== `Bearer ${env.ADMIN_TOKEN}`) return json({ error: "unauthorized" }, 401);
  const origin = new URL(req.url).origin;
  if (path === "/api/admin/mint" && req.method === "POST") {
    const b = (await req.json().catch(() => ({}))) as { count?: number; email?: string; note?: string };
    const n = Math.min(Math.max(Number(b.count) || 1, 1), 100);
    const codes: string[] = [];
    for (let i = 0; i < n; i++) {
      const code = newCode();
      await putLicence(env, code, { email: b.email, note: b.note, status: "active", devices: [], created: now(), source: "admin" });
      codes.push(code);
    }
    const mailed = b.email && n === 1 ? await sendMail(env, b.email, codes[0], origin) : false;
    return json({ codes, mailed });
  }
  if ((path === "/api/admin/revoke" || path === "/api/admin/restore" || path === "/api/admin/reset" || path === "/api/admin/info") && req.method === "POST") {
    const b = (await req.json().catch(() => ({}))) as { code?: string };
    const code = normalizeCode(b.code || "");
    const lic = code ? await getLicence(env, code) : null;
    if (!code || !lic) return json({ error: "unknown" }, 404);
    if (path.endsWith("revoke")) lic.status = "revoked";
    if (path.endsWith("restore")) lic.status = "active";
    if (path.endsWith("reset")) lic.devices = [];
    if (!path.endsWith("info")) await putLicence(env, code, lic);
    return json({ code, status: lic.status, devices: lic.devices.length, email: lic.email ? maskEmail(lic.email) : null, note: lic.note ?? null });
  }
  if (path === "/api/admin/list" && req.method === "GET") {
    const out: { code: string; status: string; devices: number; email: string | null; note: string | null }[] = [];
    let cursor: string | undefined;
    do {
      const page = await env.LICENSES!.list({ prefix: "code:", cursor, limit: 1000 });
      for (const k of page.keys) {
        const l = JSON.parse((await env.LICENSES!.get(k.name)) || "null") as Licence | null;
        if (l) out.push({ code: k.name.slice(5), status: l.status, devices: l.devices.length, email: l.email ?? null, note: l.note ?? null });
      }
      cursor = page.list_complete ? undefined : page.cursor;
    } while (cursor);
    return json({ count: out.length, licences: out });
  }
  return json({ error: "not_found" }, 404);
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;

    // Nicht eingerichtet: App bleibt offen wie bisher.
    if (!env.SESSION_SECRET || !env.LICENSES) return env.ASSETS.fetch(req);

    if (path === "/api/activate" && req.method === "POST") return activate(req, env);
    if (path === "/api/stripe-webhook" && req.method === "POST") return stripeWebhook(req, env);
    if (path.startsWith("/api/admin/")) return admin(req, env, path);
    if (path === "/api/logout") return json({ ok: true }, 200, { "set-cookie": `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax` });
    if (path.startsWith("/api/")) return json({ error: "not_found" }, 404);

    if (isPublic(path)) {
      if (path === "/admin" || path === "/admin/") return adminPage();
      if (path.startsWith("/activate")) {
        const ok = await authorize(req, env, false);
        if (ok.ok) return Response.redirect(url.origin + "/", 302);
        const next = url.searchParams.get("next") || "/";
        return activatePage(env, next.startsWith("/") && !next.startsWith("//") ? next : "/");
      }
      return env.ASSETS.fetch(req);
    }

    const isPage = req.method === "GET" && (req.headers.get("accept") || "").includes("text/html");
    const auth = await authorize(req, env, isPage);
    if (!auth.ok) {
      if (isPage) return Response.redirect(`${url.origin}/activate/?next=${encodeURIComponent(path + url.search)}`, 302);
      return json({ error: "license_required" }, 401);
    }
    const res = await env.ASSETS.fetch(req);
    if (!auth.cookie) return res;
    const out = new Response(res.body, res);
    out.headers.append("set-cookie", auth.cookie);
    return out;
  },
};

