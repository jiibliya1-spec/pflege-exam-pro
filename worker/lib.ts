/**
 * Lizenz-Hilfsfunktionen (reines TypeScript, nur Web-Crypto): Codes, signierte Sitzungs-Cookies, Stripe-Signatur.
 * Wird vom Cloudflare-Worker (worker/index.ts) genutzt und in tests/license.test.ts getestet.
 */

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // ohne I, O, 0, 1 (Verwechslungsgefahr)
const enc = new TextEncoder();

export function b64url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
export function fromB64url(s: string): Uint8Array {
  const p = s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4);
  const bin = atob(p);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}
export function hex(bytes: Uint8Array): string {
  return [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Neuer Zugangscode, z. B. PEP-K7M2-9QXD-4TWF (12 Zeichen, ca. 60 Bit Zufall). */
export function newCode(): string {
  const r = crypto.getRandomValues(new Uint8Array(12));
  const ch = [...r].map((b) => ALPHABET[b % ALPHABET.length]).join("");
  return `PEP-${ch.slice(0, 4)}-${ch.slice(4, 8)}-${ch.slice(8, 12)}`;
}

/** Eingabe tolerant normalisieren: Groß/Klein, Leerzeichen, fehlende Bindestriche. Gibt null bei ungültigem Format. */
export function normalizeCode(input: string): string | null {
  const raw = (input || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  const body = raw.startsWith("PEP") ? raw.slice(3) : raw;
  if (body.length !== 12 || [...body].some((c) => !ALPHABET.includes(c))) return null;
  return `PEP-${body.slice(0, 4)}-${body.slice(4, 8)}-${body.slice(8, 12)}`;
}

export function newDeviceId(): string {
  return b64url(crypto.getRandomValues(new Uint8Array(16)));
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}
async function hmac(secret: string, data: string): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(data)));
}
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

export interface Session {
  /** Code */
  c: string;
  /** Geräte-ID */
  d: string;
  /** Ablauf (Unix-Sekunden) */
  e: number;
  /** Zuletzt gegen die Datenbank geprüft (Unix-Sekunden) */
  v: number;
}

export async function signSession(secret: string, s: Session): Promise<string> {
  const body = b64url(enc.encode(JSON.stringify(s)));
  return `${body}.${b64url(await hmac(secret, body))}`;
}

/** Gibt die Sitzung zurück, wenn Signatur stimmt und sie nicht abgelaufen ist. */
export async function verifySession(secret: string, token: string | null | undefined, now: number): Promise<Session | null> {
  if (!token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const good = b64url(await hmac(secret, body));
  if (!safeEqual(good, sig)) return null;
  try {
    const s = JSON.parse(new TextDecoder().decode(fromB64url(body))) as Session;
    if (typeof s.c !== "string" || typeof s.d !== "string" || typeof s.e !== "number" || s.e < now) return null;
    return { c: s.c, d: s.d, e: s.e, v: typeof s.v === "number" ? s.v : 0 };
  } catch {
    return null;
  }
}

export function getCookie(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i > 0 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
  }
  return null;
}

/** Stripe-Webhook-Signatur prüfen (Header "Stripe-Signature": t=...,v1=...). */
export async function verifyStripe(secret: string, rawBody: string, header: string | null, now: number, toleranceSec = 300): Promise<boolean> {
  if (!header) return false;
  const parts = Object.fromEntries(header.split(",").map((p) => p.split("=") as [string, string]));
  const t = Number(parts.t);
  const v1 = header.split(",").filter((p) => p.startsWith("v1=")).map((p) => p.slice(3));
  if (!t || !v1.length || Math.abs(now - t) > toleranceSec) return false;
  const expected = hex(await hmac(secret, `${t}.${rawBody}`));
  return v1.some((s) => safeEqual(s, expected));
}

export function maskEmail(e: string): string {
  const [u, d] = e.split("@");
  if (!d) return "";
  return `${u.slice(0, 2)}***@${d}`;
}

/** Kurze, lesbare Gerätebeschreibung aus dem User-Agent, z. B. "iPhone, Safari". Nur zur Anzeige im Admin. */
export function shortUa(ua: string | null | undefined): string {
  const u = ua || "";
  const os = /iPhone/.test(u) ? "iPhone" : /iPad/.test(u) ? "iPad" : /Android/.test(u) ? "Android" : /Windows/.test(u) ? "Windows" : /Macintosh|Mac OS X/.test(u) ? "Mac" : /Linux/.test(u) ? "Linux" : "Gerät";
  const br = /Edg\//.test(u) ? "Edge" : /OPR\/|Opera/.test(u) ? "Opera" : /Firefox|FxiOS/.test(u) ? "Firefox" : /Chrome|CriOS/.test(u) ? "Chrome" : /Safari/.test(u) ? "Safari" : "Browser";
  return `${os}, ${br}`;
}
