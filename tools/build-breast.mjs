#!/usr/bin/env node
/**
 * Erzeugt public/models/breast.glb: EIGENES, schematisches Modell einer weiblichen Brust (rechts), prozedural aus Grundformen.
 * Es stammt NICHT aus BodyParts3D (dort fehlt die Brust) und ist kein anatomisch vermessenes Modell; Maße etwa wie beim Erwachsenen
 * (Basis ca. 14 cm, Höhe ca. 5 cm), Aufbau nach Lehrbuchschema. Deterministisch (kein Zufall). Meter, Y oben, +Z vorn, +X Patientenlinks,
 * Ursprung = Mitte der Brustbasis an der Brustwand.
 *   node tools/build-breast.mjs
 */
import fs from "node:fs";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

globalThis.FileReader = class { readAsArrayBuffer(b) { b.arrayBuffer().then((r) => { this.result = r; this.onloadend?.(); this.onload?.(); }); } readAsDataURL(b) { b.arrayBuffer().then((r) => { this.result = "data:application/octet-stream;base64," + Buffer.from(r).toString("base64"); this.onloadend?.(); this.onload?.(); }); } };

const scene = new THREE.Scene();
const add = (name, layer, geo) => { const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial()); m.name = name; m.userData = { layer }; scene.add(m); };
const merge = (gs) => mergeGeometries(gs.map((g) => (g.index ? g.toNonIndexed() : g)));
const cleanAttrs = (g) => { for (const k of Object.keys(g.attributes)) if (k !== "position" && k !== "normal") g.deleteAttribute(k); return g; };
const dome = (rx, ry, rz) => { const g = new THREE.SphereGeometry(1, 56, 28, 0, Math.PI * 2, 0, Math.PI / 2); g.rotateX(Math.PI / 2); g.scale(rx, ry, rz); return g; };
const between = (a, b, geoFn) => { const d = b.clone().sub(a), L = d.length(); const g = geoFn(L); g.translate(0, L / 2, 0); g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())); g.translate(a.x, a.y, a.z); return g; };
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// Haut und Fettgewebe
add("skin", "shell", cleanAttrs(dome(0.076, 0.072, 0.052)));
add("fat", "shell", cleanAttrs(dome(0.071, 0.067, 0.047)));

// Brustwarze und Warzenhof
const NIP = V(0, -0.004, 0.0505);
{ const a = new THREE.CylinderGeometry(0.0125, 0.0125, 0.003, 32); a.rotateX(Math.PI / 2); a.translate(NIP.x, NIP.y, NIP.z - 0.0005);
  const n = new THREE.CapsuleGeometry(0.0042, 0.006, 6, 16); n.rotateX(Math.PI / 2); n.translate(NIP.x, NIP.y, NIP.z + 0.004);
  add("nipple", "gland", cleanAttrs(merge([a, n]))); }

// Drüsenlappen und Milchgänge (16 Lappen strahlen von der Brustwarze aus; jeder Lappen = Kette aus Läppchen)
{ const lobes = [], ducts = [];
  const N = 16;
  for (let i = 0; i < N; i++) {
    const ang = (i / N) * Math.PI * 2 + 0.2;
    const rr = i % 2 ? 0.052 : 0.06;
    const base = V(Math.cos(ang) * rr, -0.004 + Math.sin(ang) * rr * 0.95, 0.014 + (i % 3) * 0.003);
    const apex = NIP.clone().lerp(base, 0.3); apex.z = 0.036;
    for (let k = 0; k <= 6; k++) {
      const t = k / 6, c = apex.clone().lerp(base, t); c.z += Math.sin(t * Math.PI) * 0.004;
      const r = 0.0042 + 0.0058 * t + ((i + k) % 3) * 0.0004;
      const g = new THREE.SphereGeometry(r, 9, 7); g.scale(1, 1, 0.8); g.translate(c.x, c.y, c.z); lobes.push(g);
    }
    ducts.push(between(NIP.clone().add(V(0, 0, -0.004)), apex, (L) => new THREE.CylinderGeometry(0.0013, 0.0013, L, 8, 1)));
    const main = between(apex, base, (L) => new THREE.CylinderGeometry(0.0011, 0.0011, L, 8, 1)); ducts.push(main);
  }
  add("lobes", "gland", cleanAttrs(merge(lobes)));
  add("ducts", "gland", cleanAttrs(merge(ducts))); }

// Brustwand: großer Brustmuskel, Rippen, Brustbein
{ const sh = new THREE.Shape(); [[0.088, 0.1], [0.088, -0.07], [0.03, -0.1], [-0.07, -0.09], [-0.125, 0.04], [-0.115, 0.075], [-0.04, 0.115]].forEach(([x, y], i) => (i ? sh.lineTo(x, y) : sh.moveTo(x, y)));
  const g = new THREE.ExtrudeGeometry(sh, { depth: 0.012, bevelEnabled: false }); g.translate(0, 0, -0.013); add("pectoralis-major", "wall", cleanAttrs(g)); }
{ const parts = [];
  for (let i = 0; i < 6; i++) {
    const y = 0.1 - i * 0.04;
    const pts = []; for (let k = 0; k <= 16; k++) { const t = k / 16, x = 0.082 - t * 0.2; pts.push(V(x, y - t * 0.03, -0.02 - Math.pow(t, 2) * 0.07)); }
    parts.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, 0.0042, 8, false));
  }
  const st = new THREE.BoxGeometry(0.03, 0.22, 0.012); st.translate(0.097, 0, -0.026); parts.push(st);
  add("ribs", "wall", cleanAttrs(merge(parts))); }

// Lymphknoten der Achsel (gesund, klein)
const AX = V(-0.125, 0.085, -0.01);
{ const gs = [[0, 0, 0, 0.0045], [0.012, 0.008, 0.006, 0.0038], [-0.01, 0.012, 0.002, 0.004], [0.006, -0.012, 0.008, 0.0035], [-0.014, -0.004, 0.01, 0.0042], [0.002, 0.02, 0.0, 0.0034]].map(([x, y, z, r]) => { const g = new THREE.SphereGeometry(r, 14, 10); g.scale(1.25, 0.9, 0.9); g.translate(AX.x + x, AX.y + y, AX.z + z); return g; });
  add("axillary-nodes", "lymph", cleanAttrs(merge(gs))); }

// Karzinom: unregelmäßiger, sternförmig ausstrahlender Knoten im oberen äußeren Quadranten + befallene Lymphknoten
{ const C = V(-0.03, 0.028, 0.027);
  const core = new THREE.IcosahedronGeometry(0.011, 3);
  const p = core.attributes.position; for (let i = 0; i < p.count; i++) { const v = V(p.getX(i), p.getY(i), p.getZ(i)); const n = 1 + 0.22 * Math.sin(v.x * 700 + 1.3) * Math.cos(v.y * 620) + 0.12 * Math.sin(v.z * 900 + v.x * 300); v.multiplyScalar(n); p.setXYZ(i, v.x, v.y, v.z); }
  core.translate(C.x, C.y, C.z);
  const sp = [];
  for (let i = 0; i < 18; i++) { const t = Math.acos(1 - 2 * ((i + 0.5) / 18)), f = i * 2.399963; const d = V(Math.sin(t) * Math.cos(f), Math.sin(t) * Math.sin(f), Math.cos(t));
    const c = new THREE.ConeGeometry(0.0022, 0.012 + (i % 3) * 0.004, 6); c.translate(0, 0.0105 + (i % 3) * 0.002, 0); c.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), d)); c.translate(C.x, C.y, C.z); sp.push(c); }
  add("tumor", "tumor", cleanAttrs(merge([core, ...sp])));
  const ms = [[-0.002, 0.004, 0.004, 0.0085], [0.014, 0.016, 0.008, 0.0072], [-0.016, 0.01, 0.006, 0.0078]].map(([x, y, z, r]) => { const g = new THREE.SphereGeometry(r, 18, 12); g.scale(1.2, 0.95, 0.95); g.translate(AX.x + x, AX.y + y, AX.z + z); return g; });
  add("metastatic-nodes", "tumor", cleanAttrs(merge(ms))); }

new GLTFExporter().parse(scene, (buf) => { fs.writeFileSync("public/models/breast.glb", Buffer.from(buf)); console.log("ok", buf.byteLength); }, (e) => { console.error(e); process.exit(1); }, { binary: true });
