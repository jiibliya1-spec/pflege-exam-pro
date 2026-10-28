import { describe, expect, it } from "vitest";
import { getCookie, hex, shortUa, newCode, normalizeCode, signSession, verifySession, verifyStripe } from "../worker/lib";

describe("Zugangscodes", () => {
  it("erzeugt gültige, eindeutige Codes", () => {
    const set = new Set(Array.from({ length: 500 }, () => newCode()));
    expect(set.size).toBe(500);
    for (const c of set) expect(normalizeCode(c)).toBe(c);
  });
  it("normalisiert Eingaben tolerant", () => {
    expect(normalizeCode("pep k7m2 9qxd 4twf")).toBe("PEP-K7M2-9QXD-4TWF");
    expect(normalizeCode("K7M29QXD4TWF")).toBe("PEP-K7M2-9QXD-4TWF");
  });
  it("lehnt falsche Formate ab", () => {
    expect(normalizeCode("")).toBeNull();
    expect(normalizeCode("PEP-1234-5678-ABCD")).toBeNull(); // 0,1,I,O fehlen im Alphabet
    expect(normalizeCode("PEP-K7M2-9QXD")).toBeNull();
  });
});

describe("Sitzungs-Cookie", () => {
  const secret = "test-secret";
  const s = { c: "PEP-AAAA-BBBB-CCCC", d: "dev1", e: 2000, v: 1000 };
  it("signiert und prüft", async () => {
    const t = await signSession(secret, s);
    expect(await verifySession(secret, t, 1500)).toEqual(s);
  });
  it("lehnt abgelaufene, manipulierte und fremd signierte ab", async () => {
    const t = await signSession(secret, s);
    expect(await verifySession(secret, t, 2001)).toBeNull();
    expect(await verifySession("anderes-secret", t, 1500)).toBeNull();
    const [body, sig] = t.split(".");
    const forged = btoa(JSON.stringify({ ...s, e: 9999999999 })).replace(/=/g, "");
    expect(await verifySession(secret, `${forged}.${sig}`, 1500)).toBeNull();
    expect(await verifySession(secret, `${body}.x`, 1500)).toBeNull();
    expect(await verifySession(secret, null, 1500)).toBeNull();
  });
  it("liest Cookies", () => {
    expect(getCookie("a=1; pep_session=xyz; b=2", "pep_session")).toBe("xyz");
    expect(getCookie(null, "pep_session")).toBeNull();
  });
});

describe("Stripe-Signatur", () => {
  it("akzeptiert richtige und lehnt falsche ab", async () => {
    const secret = "whsec_test";
    const body = '{"id":"evt_1"}';
    const t = 1_700_000_000;
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const sig = hex(new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${t}.${body}`))));
    const header = `t=${t},v1=${sig}`;
    expect(await verifyStripe(secret, body, header, t + 10)).toBe(true);
    expect(await verifyStripe(secret, body + " ", header, t + 10)).toBe(false);
    expect(await verifyStripe(secret, body, header, t + 4000)).toBe(false); // zu alt
    expect(await verifyStripe(secret, body, null, t)).toBe(false);
  });
});

describe("Geräteanzeige", () => {
  it("kürzt den User-Agent", () => {
    expect(shortUa("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1")).toBe("iPhone, Safari");
    expect(shortUa("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36 Edg/120.0")).toBe("Windows, Edge");
    expect(shortUa(null)).toBe("Gerät, Browser");
  });
});
