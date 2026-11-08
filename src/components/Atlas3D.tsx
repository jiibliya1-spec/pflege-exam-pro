"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Link from "next/link";
import { Eye, EyeOff, RotateCcw, Scissors, Move3d } from "lucide-react";
import { HEART_CARE, HEART_ITEMS, HEART_LAYERS, HEART_QUIZ, type HeartLayer } from "@/data/atlasHeart";
import { useLang } from "@/lib/i18n";
import { cn } from "./ui";

/** Interaktives 3D-Herz (BodyParts3D, CC BY 4.0). Jede der 34 Strukturen ist ein eigenes Objekt im Modell. */
type Row = [string, string, string, string, string];
const U = {
  title: ["3D-Herz", "القلب ثلاثي الأبعاد", "3D heart", "Cœur en 3D", "3B kalp"],
  hint: ["Ziehen = drehen, Mausrad oder Zwei-Finger-Geste = zoomen, Tippen = Struktur wählen.", "اسحب للتدوير، العجلة أو إصبعان للتكبير، المس بنية لاختيارها.", "Drag to rotate, wheel or pinch to zoom, tap a structure to select it.", "Glisser pour tourner, molette ou pincer pour zoomer, toucher pour choisir.", "Döndürmek için sürükle, yakınlaştırmak için tekerlek veya iki parmak, seçmek için dokun."],
  loading: ["3D-Modell wird geladen …", "جارٍ تحميل النموذج …", "Loading 3D model …", "Chargement du modèle …", "Model yükleniyor …"],
  nowebgl: ["Dein Gerät unterstützt WebGL nicht. Das 3D-Modell kann hier nicht angezeigt werden; die Strukturliste und Beschreibungen bleiben nutzbar.", "جهازك لا يدعم WebGL فلا يمكن عرض النموذج، لكن قائمة البنى والشرح متاحان.", "Your device does not support WebGL, so the 3D model cannot be shown. The structure list and descriptions still work.", "Votre appareil ne prend pas en charge WebGL. La liste des structures reste utilisable.", "Cihazınız WebGL desteklemiyor. Yapı listesi ve açıklamalar kullanılabilir."],
  explode: ["Explosionsansicht", "العرض المفكَّك", "Exploded view", "Vue éclatée", "Patlatılmış görünüm"],
  inner: ["Innenansicht (Herzwand durchsichtig)", "المنظر الداخلي (جدار شفاف)", "Inside view (wall transparent)", "Vue interne (paroi transparente)", "İç görünüm (duvar saydam)"],
  section: ["Schnittebene", "مستوى القطع", "Cross-section", "Plan de coupe", "Kesit düzlemi"],
  axisX: ["Sagittal (links/rechts)", "سهمي (يمين/يسار)", "Sagittal", "Sagittal", "Sagittal"],
  axisY: ["Horizontal (oben/unten)", "أفقي (أعلى/أسفل)", "Horizontal", "Horizontal", "Yatay"],
  axisZ: ["Frontal (vorn/hinten)", "جبهي (أمام/خلف)", "Frontal", "Frontal", "Frontal"],
  views: ["Ansichten", "زوايا العرض", "Views", "Vues", "Görünümler"],
  front: ["Vorne", "أمام", "Front", "Avant", "Ön"],
  back: ["Hinten", "خلف", "Back", "Arrière", "Arka"],
  left: ["Links", "يسار", "Left", "Gauche", "Sol"],
  right: ["Rechts", "يمين", "Right", "Droite", "Sağ"],
  top: ["Oben", "أعلى", "Top", "Haut", "Üst"],
  reset: ["Zurücksetzen", "إعادة الضبط", "Reset", "Réinitialiser", "Sıfırla"],
  layers: ["Schichten", "الطبقات", "Layers", "Couches", "Katmanlar"],
  structures: ["Strukturen", "البنى", "Structures", "Structures", "Yapılar"],
  isolate: ["Nur Auswahl zeigen", "إظهار المحدد فقط", "Show selection only", "Afficher la sélection seule", "Yalnızca seçileni göster"],
  pick: ["Wähle eine Struktur im Modell oder in der Liste.", "اختر بنية من النموذج أو من القائمة.", "Select a structure in the model or in the list.", "Choisissez une structure dans le modèle ou la liste.", "Modelden veya listeden bir yapı seçin."],
  de: ["Deutsch", "بالألمانية", "German", "Allemand", "Almanca"],
  la: ["Latein", "باللاتينية", "Latin", "Latin", "Latince"],
  ar: ["Arabisch", "بالعربية", "Arabic", "Arabe", "Arapça"],
  fn: ["Funktion und Physiologie", "الوظيفة وعلم وظائف الأعضاء", "Function and physiology", "Fonction et physiologie", "İşlev ve fizyoloji"],
  kl: ["Klinische Bedeutung und Pflegebezug", "الأهمية السريرية والتمريض", "Clinical relevance and nursing", "Importance clinique et soins", "Klinik önem ve hemşirelik"],
  care: ["Pflege-Überblick Herz", "نظرة تمريضية على القلب", "Nursing overview: heart", "Aperçu infirmier : cœur", "Hemşirelik özeti: kalp"],
  quiz: ["Prüfungsfragen", "أسئلة الامتحان", "Exam questions", "Questions d'examen", "Sınav soruları"],
  show: ["Antwort zeigen", "أظهر الجواب", "Show answer", "Voir la réponse", "Cevabı göster"],
  lessons: ["Passende Lektionen", "الدروس المرتبطة", "Related lessons", "Leçons associées", "İlgili dersler"],
  source: ["Quelle: BodyParts3D, © DBCLS, CC BY 4.0 (bearbeitet). Referenzanatomie eines erwachsenen Mannes, nur zum Lernen.", "المصدر: BodyParts3D © DBCLS رخصة CC BY 4.0 (معدَّل). تشريح مرجعي لرجل بالغ، للتعلم فقط.", "Source: BodyParts3D, © DBCLS, CC BY 4.0 (modified). Adult male reference anatomy, for learning only.", "Source : BodyParts3D, © DBCLS, CC BY 4.0 (modifié). Anatomie de référence, pour apprendre.", "Kaynak: BodyParts3D, © DBCLS, CC BY 4.0 (düzenlendi). Yetişkin erkek referans anatomisi, yalnızca öğrenme için."],
  dis: ["Häufige Erkrankungen", "أمراض شائعة", "Common diseases", "Maladies fréquentes", "Sık hastalıklar"],
  sym: ["Symptome", "الأعراض", "Symptoms", "Symptômes", "Belirtiler"],
  act: ["Pflegerische Maßnahmen", "الإجراءات التمريضية", "Nursing interventions", "Soins infirmiers", "Hemşirelik girişimleri"],
  mon: ["Beobachtung und Monitoring", "المراقبة والمتابعة", "Observation and monitoring", "Observation et surveillance", "Gözlem ve izlem"],
  terms: ["Fachbegriffe", "مصطلحات", "Terminology", "Terminologie", "Terimler"],
} satisfies Record<string, Row>;
const tx = (r: Row, lang: string) => r[["de", "ar", "en", "fr", "tr"].indexOf(lang) < 0 ? 0 : ["de", "ar", "en", "fr", "tr"].indexOf(lang)];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const RIGHT_SIDE = /^(right-|tricuspid|superior-vena|inferior-vena|pulmonary-trunk|coronary-sinus)/;
function colorFor(id: string, layer: HeartLayer): number {
  switch (layer) {
    case "wall": return 0xb4574a;
    case "chamber": return RIGHT_SIDE.test(id) ? 0x7b2230 : 0xd23b34;
    case "valve": return id.includes("papillary") ? 0xc08a62 : 0xeadfc4;
    case "vessel":
      if (/vena-cava|pulmonary-vein/.test(id)) return /pulmonary-vein/.test(id) ? 0xc9503f : 0x7a3a52;
      if (/pulmonary-trunk|pulmonary-artery/.test(id)) return 0x8a5a78;
      return 0xe0a595;
    case "coronary": return 0xc43a30;
    case "cardiac-vein": return 0x5d2c52;
  }
}

type VMesh = THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
interface Item { id: string; layer: HeartLayer; mesh: VMesh; dir: THREE.Vector3; base: number }

export function Atlas3D() {
  const lang = useLang();
  const T = (r: Row) => tx(r, lang);
  const host = useRef<HTMLDivElement>(null);
  const items = useRef<Item[]>([]);
  const api = useRef<{ view: (v: string) => void; reset: () => void } | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "nowebgl" | "error">("loading");
  const [sel, setSel] = useState<string | null>(null);
  const [hiddenLayers, setHiddenLayers] = useState<Set<string>>(new Set());
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());
  const [explode, setExplode] = useState(0);
  const [inner, setInner] = useState(false);
  const [isolate, setIsolate] = useState(false);
  const [clip, setClip] = useState(false);
  const [axis, setAxis] = useState<"x" | "y" | "z">("x");
  const [clipPos, setClipPos] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const [shown, setShown] = useState<Set<number>>(new Set());
  const state = useRef({ sel, hiddenLayers, hiddenIds, explode, inner, isolate, clip, axis, clipPos });
  state.current = { sel, hiddenLayers, hiddenIds, explode, inner, isolate, clip, axis, clipPos };
  const plane = useRef(new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0));
  const selRef = useRef<(id: string | null) => void>(() => {});
  selRef.current = setSel;

  /** Zustand auf die Szene übertragen. */
  const apply = useCallback(() => {
    const s = state.current;
    for (const it of items.current) {
      const hidden = s.hiddenLayers.has(it.layer) || s.hiddenIds.has(it.id) || (s.isolate && s.sel !== null && s.sel !== it.id);
      it.mesh.visible = !hidden;
      const m = it.mesh.material;
      const dim = s.sel !== null && s.sel !== it.id;
      let op = it.layer === "wall" ? (s.inner ? 0.12 : 0.9) : 1;
      if (dim) op = Math.min(op, it.layer === "wall" ? 0.1 : 0.28);
      m.opacity = op;
      m.transparent = op < 1;
      m.depthWrite = op >= 0.5;
      m.emissive.setHex(s.sel === it.id ? 0x335577 : 0x000000);
      m.clippingPlanes = s.clip ? [plane.current] : [];
    }
    const n = new THREE.Vector3(s.axis === "x" ? -1 : 0, s.axis === "y" ? -1 : 0, s.axis === "z" ? -1 : 0);
    plane.current.normal.copy(n);
    plane.current.constant = s.clipPos;
  }, []);
  useEffect(() => { apply(); }, [apply, sel, hiddenLayers, hiddenIds, inner, isolate, clip, axis, clipPos, status]);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    } catch {
      setStatus("nowebgl");
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.localClippingEnabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none";
    renderer.domElement.setAttribute("data-testid", "atlas-canvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 5);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 0.08;
    controls.maxDistance = 0.9;
    scene.add(new THREE.HemisphereLight(0xffffff, 0x554444, 1.1));
    const d1 = new THREE.DirectionalLight(0xffffff, 1.6);
    d1.position.set(0.4, 0.6, 0.8);
    scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xbfd4ff, 0.7);
    d2.position.set(-0.6, -0.2, -0.5);
    scene.add(d2);

    const place = (v: string) => {
      const d = 0.34;
      const p: Record<string, [number, number, number]> = { front: [0, 0, d], back: [0, 0, -d], left: [d, 0, 0], right: [-d, 0, 0], top: [0, d, 0.001] };
      const q = p[v] ?? p.front;
      camera.position.set(q[0], q[1], q[2]);
      controls.target.set(0, 0, 0);
      controls.update();
    };
    api.current = { view: place, reset: () => place("front") };
    place("front");

    const resize = () => {
      const w = el.clientWidth || 600, h = el.clientHeight || 480;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let alive = true;
    const group = new THREE.Group();
    scene.add(group);
    new GLTFLoader().load(
      `${BASE}/models/heart.glb`,
      (gltf) => {
        if (!alive) return;
        const list: Item[] = [];
        gltf.scene.traverse((o) => {
          const m = o as VMesh;
          if (!(m as THREE.Mesh).isMesh) return;
          const layer = (m.userData?.layer ?? "vessel") as HeartLayer;
          m.material = new THREE.MeshStandardMaterial({ color: colorFor(m.name, layer), roughness: 0.55, metalness: 0.02, side: THREE.DoubleSide });
          m.geometry.computeBoundingBox();
          const c = new THREE.Vector3();
          m.geometry.boundingBox!.getCenter(c);
          list.push({ id: m.name, layer, mesh: m, dir: c, base: 0 });
        });
        for (const it of list) {
          const d = it.dir.clone();
          if (it.layer === "wall") d.multiplyScalar(0.5);
          it.dir = d.lengthSq() < 1e-8 ? new THREE.Vector3(0, 0, 0.002) : d;
        }
        items.current = list;
        group.add(gltf.scene);
        apply();
        setStatus("ready");
      },
      undefined,
      () => alive && setStatus("error"),
    );

    // Auswahl per Tippen/Klick (nicht beim Ziehen)
    const ray = new THREE.Raycaster();
    let down: { x: number; y: number } | null = null;
    const onDown = (e: PointerEvent) => { down = { x: e.clientX, y: e.clientY }; };
    const onUp = (e: PointerEvent) => {
      if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) return;
      const r = renderer.domElement.getBoundingClientRect();
      ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera);
      const vis = items.current.filter((i) => i.mesh.visible).map((i) => i.mesh);
      const hits = ray.intersectObjects(vis, false).filter((h) => {
        const m = (h.object as VMesh).material;
        if (m.opacity < 0.3) return false;
        if (state.current.clip) return plane.current.distanceToPoint(h.point) >= 0;
        return true;
      });
      selRef.current(hits.length ? hits[0].object.name : null);
    };
    renderer.domElement.addEventListener("pointerdown", onDown);
    renderer.domElement.addEventListener("pointerup", onUp);

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const k = state.current.explode;
      for (const it of items.current) {
        const target = it.dir.clone().multiplyScalar(k * 2.2);
        it.mesh.position.lerp(target, 0.18);
      }
      controls.update();
      renderer.render(scene, camera);
    };
    tick();
    (window as unknown as { __atlas?: unknown }).__atlas = { items, camera, controls };

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointerup", onUp);
      controls.dispose();
      items.current.forEach((i) => { i.mesh.geometry.dispose(); i.mesh.material.dispose(); });
      items.current = [];
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [apply]);

  const toggleLayer = (id: string) => setHiddenLayers((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleId = (id: string) => setHiddenIds((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const info = sel ? HEART_ITEMS[sel] : null;
  const grouped = useMemo(() => HEART_LAYERS.map((l) => ({ l, ids: Object.keys(HEART_ITEMS).filter((id) => layerOf(id) === l.id) })), []);

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]" data-testid="atlas-heart">
      <div className="space-y-3">
        <div className="relative overflow-hidden rounded-xl border border-line bg-gradient-to-b from-[#0f2433] to-[#1c3a4f]" style={{ height: "min(62vh, 560px)", minHeight: 320 }}>
          <div ref={host} className="absolute inset-0" />
          {status === "loading" && <div role="status" className="absolute inset-0 grid place-items-center text-sm text-white/80">{T(U.loading)}</div>}
          {status === "nowebgl" && <div role="alert" className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-white/90">{T(U.nowebgl)}</div>}
          {status === "error" && <div role="alert" className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-white/90">3D-Modell konnte nicht geladen werden.</div>}
          {info && sel && (
            <div className="pointer-events-none absolute left-3 top-3 max-w-[70%] rounded-lg bg-black/55 px-3 py-1.5 text-white backdrop-blur" data-testid="atlas-chip">
              <div className="text-sm font-semibold">{info.de}</div>
              <div className="text-xs italic opacity-80">{info.la}</div>
            </div>
          )}
          <div className="pointer-events-none absolute bottom-2 left-3 right-3 text-[11px] text-white/70">{T(U.hint)}</div>
        </div>

        <div className="grid gap-3 rounded-xl border border-line bg-surface p-3 sm:grid-cols-2">
          <div>
            <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-muted"><Move3d className="h-4 w-4" />{T(U.views)}</div>
            <div className="flex flex-wrap gap-1.5">
              {([["front", U.front], ["back", U.back], ["left", U.left], ["right", U.right], ["top", U.top]] as [string, Row][]).map(([v, lb]) => (
                <button key={v} onClick={() => api.current?.view(v)} className="min-h-9 rounded-lg border border-line px-3 text-sm hover:bg-surface2">{T(lb)}</button>
              ))}
              <button onClick={() => { api.current?.reset(); setExplode(0); setSel(null); setHiddenIds(new Set()); setHiddenLayers(new Set()); setInner(false); setClip(false); setIsolate(false); }} className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-line px-3 text-sm hover:bg-surface2"><RotateCcw className="h-4 w-4" />{T(U.reset)}</button>
            </div>
          </div>
          <label className="block text-sm">
            <span className="mb-1 block text-xs font-semibold text-muted">{T(U.explode)}: {Math.round(explode * 100)} %</span>
            <input type="range" min={0} max={1} step={0.01} value={explode} onChange={(e) => setExplode(+e.target.value)} className="w-full" aria-label={T(U.explode)} data-testid="atlas-explode" />
          </label>
          <div className="space-y-1.5 text-sm">
            <label className="flex min-h-9 items-center gap-2"><input type="checkbox" checked={inner} onChange={(e) => setInner(e.target.checked)} data-testid="atlas-inner" />{T(U.inner)}</label>
            <label className="flex min-h-9 items-center gap-2"><input type="checkbox" checked={isolate} onChange={(e) => setIsolate(e.target.checked)} />{T(U.isolate)}</label>
          </div>
          <div className="space-y-1.5 text-sm">
            <label className="flex min-h-9 items-center gap-2"><input type="checkbox" checked={clip} onChange={(e) => setClip(e.target.checked)} data-testid="atlas-clip" /><Scissors className="h-4 w-4" />{T(U.section)}</label>
            {clip && (
              <div className="space-y-1.5 pl-6">
                <select value={axis} onChange={(e) => setAxis(e.target.value as "x" | "y" | "z")} className="w-full rounded-lg border border-line bg-surface px-2 py-1.5 text-sm" aria-label={T(U.section)}>
                  <option value="x">{T(U.axisX)}</option>
                  <option value="y">{T(U.axisY)}</option>
                  <option value="z">{T(U.axisZ)}</option>
                </select>
                <input type="range" min={-0.07} max={0.07} step={0.001} value={clipPos} onChange={(e) => setClipPos(+e.target.value)} className="w-full" aria-label={T(U.section)} />
              </div>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-2 text-xs font-semibold text-muted">{T(U.layers)}</div>
          <div className="flex flex-wrap gap-1.5">
            {HEART_LAYERS.map((l) => (
              <button key={l.id} onClick={() => toggleLayer(l.id)} aria-pressed={!hiddenLayers.has(l.id)} className={cn("inline-flex min-h-9 items-center gap-1.5 rounded-lg border px-3 text-sm", hiddenLayers.has(l.id) ? "border-line text-muted line-through" : "border-teal bg-teal/10")}>
                {hiddenLayers.has(l.id) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}{l[lang as "de" | "ar" | "en" | "fr" | "tr"] ?? l.de}
              </button>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted">{T(U.source)}</p>
      </div>

      <aside className="space-y-3">
        <div className="rounded-xl border border-line bg-surface p-4" data-testid="atlas-detail">
          {info && sel ? (
            <div className="space-y-3">
              <div>
                <h2 className="text-lg font-bold">{info.de}</h2>
                <p className="text-sm italic text-muted">{info.la}</p>
                <p dir="rtl" lang="ar" className="mt-1 text-base font-semibold text-teal">{info.ar}</p>
              </div>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">{T(U.fn)}</h3>
                <p className="mt-1 text-sm">{info.fn[0]}</p>
                <p dir="rtl" lang="ar" className="mt-1 text-sm text-muted">{info.fn[1]}</p>
              </section>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">{T(U.kl)}</h3>
                <p className="mt-1 text-sm">{info.kl[0]}</p>
                <p dir="rtl" lang="ar" className="mt-1 text-sm text-muted">{info.kl[1]}</p>
              </section>
              {info.note && <p className="rounded-lg bg-surface2 p-2 text-xs text-muted">{info.note[0]}<span dir="rtl" lang="ar" className="mt-1 block">{info.note[1]}</span></p>}
            </div>
          ) : (
            <p className="text-sm text-muted">{T(U.pick)}</p>
          )}
        </div>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-2 text-xs font-semibold text-muted">{T(U.structures)} ({Object.keys(HEART_ITEMS).length})</div>
          <div className="max-h-[360px] space-y-3 overflow-auto pr-1">
            {grouped.map(({ l, ids }) => (
              <div key={l.id}>
                <div className="text-xs font-semibold text-muted">{l[lang as "de" | "ar" | "en" | "fr" | "tr"] ?? l.de}</div>
                <ul className="mt-1 space-y-0.5">
                  {ids.map((id) => (
                    <li key={id} className="flex items-center gap-1">
                      <button onClick={() => setSel(sel === id ? null : id)} data-testid={`atlas-item-${id}`} aria-pressed={sel === id} className={cn("min-h-9 flex-1 rounded-lg px-2 text-left text-sm hover:bg-surface2", sel === id && "bg-teal/15 font-semibold")}>{HEART_ITEMS[id].de}</button>
                      <button onClick={() => toggleId(id)} aria-label={hiddenIds.has(id) ? "einblenden" : "ausblenden"} className="grid h-9 w-9 place-items-center rounded-lg text-muted hover:bg-surface2">{hiddenIds.has(id) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <section className="space-y-3 lg:col-span-2">
        <div className="rounded-xl border border-line bg-surface p-4">
          <button onClick={() => setOpen(open === "care" ? null : "care")} aria-expanded={open === "care"} className="flex w-full items-center justify-between text-left font-semibold">{T(U.care)}<span aria-hidden>{open === "care" ? "−" : "+"}</span></button>
          {open === "care" && (
            <div className="mt-3 grid gap-4 text-sm md:grid-cols-2">
              {([[U.dis, HEART_CARE.diseases], [U.sym, HEART_CARE.symptoms], [U.act, HEART_CARE.actions], [U.mon, HEART_CARE.monitoring]] as [Row, string[]][]).map(([h, li]) => (
                <div key={h[0]}>
                  <h3 className="mb-1 font-semibold">{T(h)}</h3>
                  <ul className="list-disc space-y-0.5 pl-5">{li.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
              <div>
                <h3 className="mb-1 font-semibold">{T(U.terms)}</h3>
                <ul className="space-y-0.5">{HEART_CARE.terms.map(([a, b]) => <li key={a}><b>{a}</b>: {b}</li>)}</ul>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{T(U.lessons)}</h3>
                <ul className="space-y-0.5">{HEART_CARE.lessons.map((id) => <li key={id}><Link className="text-teal underline" href={`/learn/view/?id=${id}`}>{id}</Link></li>)}</ul>
              </div>
            </div>
          )}
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <button onClick={() => setOpen(open === "quiz" ? null : "quiz")} aria-expanded={open === "quiz"} className="flex w-full items-center justify-between text-left font-semibold">{T(U.quiz)}<span aria-hidden>{open === "quiz" ? "−" : "+"}</span></button>
          {open === "quiz" && (
            <ol className="mt-3 space-y-4 text-sm">
              {HEART_QUIZ.map((q, i) => (
                <li key={i}>
                  <p className="font-medium">{q.q[0]}</p>
                  <p dir="rtl" lang="ar" className="text-muted">{q.q[1]}</p>
                  <ul className="mt-1 list-[upper-alpha] space-y-0.5 pl-5">{[...q.o.slice(i % 4), ...q.o.slice(0, i % 4)].map((o) => <li key={o}>{o}</li>)}</ul>
                  <button onClick={() => setShown((p) => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n; })} className="mt-1 text-teal underline">{T(U.show)}</button>
                  {shown.has(i) && <p className="mt-1 rounded-lg bg-surface2 p-2"><b>{q.o[0]}</b> — {q.why[0]}<span dir="rtl" lang="ar" className="block text-muted">{q.why[1]}</span></p>}
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </div>
  );
}

function layerOf(id: string): HeartLayer {
  if (id.endsWith("-wall")) return "wall";
  if (/^(right|left)-(atrium|ventricle)$/.test(id)) return "chamber";
  if (/valve|papillary/.test(id)) return "valve";
  if (/cardiac-vein|coronary-sinus/.test(id)) return "cardiac-vein";
  if (/coronary-artery|descending-artery|circumflex/.test(id) || id === "left-anterior-descending-artery") return "coronary";
  return "vessel";
}
