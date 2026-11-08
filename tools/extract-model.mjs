#!/usr/bin/env node
/**
 * Baut public/models/<key>.glb aus dem BodyParts3D-4.0-Atlas (Human-Atlas-Format: atlas.json + body-N.bin).
 *   node tools/extract-model.mjs <Ordner mit atlas.json> <key>   (Definition: tools/defs/<key>.json)
 * Je Struktur ein Knoten (Name = Strukturname, extras.layer, extras.elements = BodyParts3D-IDs).
 * Position: Meter, Y oben, +Z vorn, +X Patientenlinks; auf den Mittelpunkt der in der Definition genannten Schichten verschoben.
 * Es werden keine Vertices verändert oder erfunden; Elemente werden nur zusammengefasst.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = process.argv[2];
if (!dir) { console.error("Usage: node tools/extract-digestive.mjs <models dir>"); process.exit(2); }
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
const atlasBytes = fs.readFileSync(path.join(dir, "atlas.json"));
const atlas = JSON.parse(atlasBytes.toString());
if (atlas.version !== "BodyParts3D 4.0") throw new Error("unexpected atlas version " + atlas.version);
const P = new Map(atlas.parts.map((p) => [p.id, p]));
const C = new Map(atlas.concepts.map((c) => [c.id, c]));
const chunks = new Map(); const chunkHash = {};
const chunk = (i) => { if (!chunks.has(i)) { const f = path.join(dir, atlas.chunks[i].url.split("/").pop()); const b = fs.readFileSync(f); if (b.length !== atlas.chunks[i].bytes) throw new Error("chunk size " + f); chunks.set(i, b); chunkHash[path.basename(f)] = sha(b); } return chunks.get(i); };
function read(id) {
  const p = P.get(id); if (!p) throw new Error("missing " + id);
  const b = chunk(p.chunk);
  const pos = new Float32Array(b.buffer.slice(b.byteOffset + p.positions, b.byteOffset + p.positions + p.vertexCount * 12));
  const n16 = new Int16Array(b.buffer.slice(b.byteOffset + p.normals, b.byteOffset + p.normals + p.vertexCount * 6));
  const idx = new Uint32Array(b.buffer.slice(b.byteOffset + p.indices, b.byteOffset + p.indices + p.indexCount * 4));
  for (const v of pos) if (!Number.isFinite(v)) throw new Error(id + " non-finite");
  for (const i of idx) if (i >= p.vertexCount) throw new Error(id + " bad index");
  const nor = new Float32Array(p.vertexCount * 3);
  for (let i = 0; i < p.vertexCount; i++) { const x = n16[i * 3] / 32767, y = n16[i * 3 + 1] / 32767, z = n16[i * 3 + 2] / 32767; const l = Math.hypot(x, y, z) || 1; nor[i * 3] = x / l; nor[i * 3 + 1] = y / l; nor[i * 3 + 2] = z / l; }
  return { id, name: p.name, pos, nor, idx };
}

// ---- Strukturen aus Definitionsdatei ----
const key = process.argv[3];
if (!key) { console.error("Usage: node tools/extract-model.mjs <models dir> <key>  (tools/defs/<key>.json)"); process.exit(2); }
const def = JSON.parse(fs.readFileSync(path.join(root, "tools/defs", key + ".json"), "utf8"));
const byName = (re, sys) => atlas.parts.filter((p) => new RegExp(re).test(p.name) && (!sys || p.system === sys)).map((p) => p.id);
const S = def.structures.map((x) => ({ id: x.id, layer: x.layer, el: [...(x.el ?? []), ...(x.match ?? []).flatMap((m) => byName(m.re, m.system))].filter((e) => !(x.not ?? []).includes(e)) }));
const all = S.flatMap((s) => s.el); if (new Set(all).size !== all.length) throw new Error("element in two structures");
for (const s of S) if (!s.el.length) throw new Error("empty " + s.id);

const meshes = S.map((s) => {
  const els = s.el.map(read);
  const vc = els.reduce((n, e) => n + e.pos.length / 3, 0), ic = els.reduce((n, e) => n + e.idx.length, 0);
  const pos = new Float32Array(vc * 3), nor = new Float32Array(vc * 3), idx = new Uint32Array(ic);
  let vo = 0, io = 0;
  for (const e of els) { pos.set(e.pos, vo * 3); nor.set(e.nor, vo * 3); for (let k = 0; k < e.idx.length; k++) idx[io + k] = e.idx[k] + vo; vo += e.pos.length / 3; io += e.idx.length; }
  return { s, pos, nor, idx, els: els.map((e) => ({ id: e.id, name: e.name })) };
});
// Mittelpunkt: Lungengefäße und Bronchien
const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
for (const m of meshes) if ((def.centreLayers ?? [...new Set(S.map((x) => x.layer))]).includes(m.s.layer)) for (let i = 0; i < m.pos.length; i += 3) for (let a = 0; a < 3; a++) { lo[a] = Math.min(lo[a], m.pos[i + a]); hi[a] = Math.max(hi[a], m.pos[i + a]); }
const centre = [0, 1, 2].map((a) => (lo[a] + hi[a]) / 2);
for (const m of meshes) for (let i = 0; i < m.pos.length; i += 3) for (let a = 0; a < 3; a++) m.pos[i + a] -= centre[a];

// ---- GLB schreiben ----
const bufs = []; const views = []; const acc = []; const nodes = []; const gm = [];
let off = 0;
const push = (arr, target) => { const b = Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength); const pad = (4 - (b.length % 4)) % 4; bufs.push(b, Buffer.alloc(pad)); views.push({ buffer: 0, byteOffset: off, byteLength: b.length, target }); off += b.length + pad; return views.length - 1; };
meshes.forEach((m, i) => {
  const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
  for (let k = 0; k < m.pos.length; k += 3) for (let a = 0; a < 3; a++) { mn[a] = Math.min(mn[a], m.pos[k + a]); mx[a] = Math.max(mx[a], m.pos[k + a]); }
  const vp = push(m.pos, 34962), vn = push(m.nor, 34962), vi = push(m.idx, 34963);
  acc.push({ bufferView: vp, componentType: 5126, count: m.pos.length / 3, type: "VEC3", min: mn, max: mx });
  acc.push({ bufferView: vn, componentType: 5126, count: m.nor.length / 3, type: "VEC3" });
  acc.push({ bufferView: vi, componentType: 5125, count: m.idx.length, type: "SCALAR" });
  gm.push({ primitives: [{ attributes: { POSITION: i * 3, NORMAL: i * 3 + 1 }, indices: i * 3 + 2, mode: 4 }] });
  nodes.push({ name: m.s.id, mesh: i, extras: { layer: m.s.layer, elements: m.s.el } });
});
const json = { asset: { version: "2.0", generator: "tools/extract-digestive.mjs" }, scene: 0, scenes: [{ nodes: nodes.map((_, i) => i) }], nodes, meshes: gm, accessors: acc, bufferViews: views, buffers: [{ byteLength: off }] };
let js = Buffer.from(JSON.stringify(json)); js = Buffer.concat([js, Buffer.alloc((4 - (js.length % 4)) % 4, 0x20)]);
const bin = Buffer.concat(bufs);
const head = Buffer.alloc(12); head.writeUInt32LE(0x46546c67, 0); head.writeUInt32LE(2, 4); head.writeUInt32LE(12 + 8 + js.length + 8 + bin.length, 8);
const jh = Buffer.alloc(8); jh.writeUInt32LE(js.length, 0); jh.writeUInt32LE(0x4e4f534a, 4);
const bh = Buffer.alloc(8); bh.writeUInt32LE(bin.length, 0); bh.writeUInt32LE(0x004e4942, 4);
const glb = Buffer.concat([head, jh, js, bh, bin]);
const out = path.join(root, "public/models/" + key + ".glb"); fs.writeFileSync(out, glb);
const prov = { source: "BodyParts3D 4.0 (DBCLS, CC BY 4.0) via Human Atlas (ashemag/human-atlas, MIT/CC BY 4.0)", atlasJsonSha256: sha(atlasBytes), chunkSha256: chunkHash, centreOffsetMetres: centre, glbSha256: sha(glb), structures: meshes.map((m) => ({ id: m.s.id, layer: m.s.layer, elements: m.els })) };
fs.writeFileSync(path.join(root, "public/models/" + key + ".provenance.json"), JSON.stringify(prov, null, 1));
console.log("wrote", out, glb.length, "bytes,", meshes.length, "structures; centre", centre);
