"use client";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Link from "next/link";
import { Eye, EyeOff, RotateCcw, Scissors, Move3d } from "lucide-react";
import type { AtlasConfig, AtlasPath } from "@/data/atlasTypes";
import { useLang } from "@/lib/i18n";
import { cn } from "./ui";

/** Allgemeiner 3D-Atlas-Viewer (BodyParts3D, CC BY 4.0). Jede Struktur ist ein eigenes Objekt im Modell; die Konfiguration kommt je Organsystem aus src/data. */
type Row = [string, string, string, string, string];
const U = {
  paths: ["Geführte Wege", "مسارات موجَّهة", "Guided paths", "Parcours guidés", "Rehberli yollar"],
  play: ["Abspielen", "تشغيل", "Play", "Lecture", "Oynat"],
  stop: ["Stopp", "إيقاف", "Stop", "Arrêt", "Dur"],
  prev: ["Zurück", "السابق", "Back", "Précédent", "Geri"],
  next: ["Weiter", "التالي", "Next", "Suivant", "İleri"],
  step: ["Schritt", "الخطوة", "Step", "Étape", "Adım"],
  nomodel: ["Im 3D-Modell nicht enthalten", "غير موجود في النموذج ثلاثي الأبعاد", "Not included in the 3D model", "Non inclus dans le modèle 3D", "3B modelde yok"],
  diag: ["Diagnostik", "التشخيص", "Diagnostics", "Diagnostic", "Tanı"],
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
  parts: ["Bestandteile", "المكونات", "Components", "Composants", "Bileşenler"],
  partsNote: ["Gliederung als Text; im 3D-Modell ist das Organ nicht in diese Teile getrennt.", "تقسيم نصي؛ العضو في النموذج ثلاثي الأبعاد غير مفصول إلى هذه الأجزاء.", "Outline as text; the organ is not split into these parts in the 3D model.", "Plan en texte ; l’organe n’est pas séparé en ces parties dans le modèle 3D.", "Metin olarak bölümleme; 3B modelde organ bu parçalara ayrılmamıştır."],
  entry: ["EINTRITT", "دخول", "IN", "ENTRÉE", "GİRİŞ"],
  exit: ["AUSTRITT", "خروج", "OUT", "SORTIE", "ÇIKIŞ"],
  whole: ["Ganzer Körper", "الجسم كاملاً", "Whole body", "Corps entier", "Tüm vücut"],
  terms: ["Fachbegriffe", "مصطلحات", "Terminology", "Terminologie", "Terimler"],
} satisfies Record<string, Row>;
const tx = (r: Row, lang: string) => r[["de", "ar", "en", "fr", "tr"].indexOf(lang) < 0 ? 0 : ["de", "ar", "en", "fr", "tr"].indexOf(lang)];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
type VMesh = THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
interface Item { id: string; layer: string; mesh: VMesh; dir: THREE.Vector3; base: number }

const TONES: Record<string, number> = { blue: 0x3f86ff, red: 0xff3b30, amber: 0xffc233, violet: 0xb07aff };

export function AtlasViewer({ cfg, extra, compact = false, initialSel = null, only, story }: { cfg: AtlasConfig; extra?: ReactNode; compact?: boolean; initialSel?: string | null; only?: string[]; story?: AtlasPath }) {
  const ITEMS = cfg.items;
  const lang = useLang();
  const T = (r: Row) => tx(r, lang);
  const isAr = lang === "ar";
  const P = (p: [string, string]) => (isAr ? p[1] : p[0]);
  const nm = (i: { de: string; ar: string }) => (isAr ? i.ar : i.de);
  const dirAttr = isAr ? "rtl" : "ltr";
  const labelEls = useRef<Record<string, HTMLDivElement | null>>({});
  const onlyRef = useRef(only);
  onlyRef.current = only;

  const host = useRef<HTMLDivElement>(null);
  const items = useRef<Item[]>([]);
  const api = useRef<{ view: (v: string) => void; reset: () => void; focusOn: (ids: string[] | null) => void } | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "nowebgl" | "error">("loading");
  const [sel, setSel] = useState<string | null>(initialSel);
  const [hiddenLayers, setHiddenLayers] = useState<Set<string>>(new Set(cfg.hiddenLayers ?? []));
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());
  const [explode, setExplode] = useState(0);
  const [inner, setInner] = useState(false);
  const [isolate, setIsolate] = useState(true);
  const [clip, setClip] = useState(false);
  const [axis, setAxis] = useState<"x" | "y" | "z">("x");
  const [clipPos, setClipPos] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const [shown, setShown] = useState<Set<number>>(new Set());
  const [pathId, setPathId] = useState<string | null>(story?.id ?? null);
  const [stepI, setStepI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const path = story ?? cfg.paths?.find((x) => x.id === pathId) ?? null;
  const step = path ? path.steps[Math.min(stepI, path.steps.length - 1)] : null;
  const focus = useMemo(() => (step ? new Set(step.ids) : null), [step]);
  const labelIds = useMemo(() => (step && (path?.flow || story) ? (path?.flow ? step.ids.slice(1, -1) : step.ids.length <= 5 ? step.ids : []) : only && only.length <= 6 ? only : []), [only, story, step, path]);
  const tone = step?.tone ?? "blue";
  const pulse = !!path?.pulse;
  const state = useRef({ sel, hiddenLayers, hiddenIds, explode, inner, isolate, clip, axis, clipPos, focus, pulse, tone });
  state.current = { sel, hiddenLayers, hiddenIds, explode, inner, isolate, clip, axis, clipPos, focus, pulse, tone };
  const flowRef = useRef<{ pts: THREE.Vector3[]; on: boolean }>({ pts: [], on: false });
  const dotsRef = useRef<THREE.InstancedMesh | null>(null);
  const arrowsRef = useRef<THREE.InstancedMesh | null>(null);
  const entryEl = useRef<HTMLDivElement>(null);
  const exitEl = useRef<HTMLDivElement>(null);
  const plane = useRef(new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0));
  const selRef = useRef<(id: string | null) => void>(() => {});
  selRef.current = setSel;

  /** Zustand auf die Szene übertragen. */
  const apply = useCallback(() => {
    const s = state.current;
    for (const it of items.current) {
      const on = onlyRef.current;
      const hidden = on ? !on.includes(it.id) || s.hiddenIds.has(it.id) : (s.hiddenLayers.has(it.layer) && !s.focus?.has(it.id) && s.sel !== it.id) || s.hiddenIds.has(it.id) || (s.isolate && s.sel !== null && s.sel !== it.id);
      it.mesh.visible = !hidden;
      const m = it.mesh.material;
      const dim = !s.focus && s.sel !== null && s.sel !== it.id;
      let op = cfg.shell.includes(it.layer) ? (s.inner ? 0.12 : cfg.shellOpacity ?? 0.9) : 1;
      if (s.focus) { if (!s.focus.has(it.id)) op = Math.min(op, 0.1); }
      else if (dim) op = Math.min(op, cfg.shell.includes(it.layer) ? 0.1 : 0.28);
      m.opacity = op;
      m.transparent = op < 1;
      m.depthWrite = op >= 0.5;
      m.emissive.setHex(s.sel === it.id ? 0x335577 : s.focus?.has(it.id) ? 0x2a4a66 : 0x000000);
      m.clippingPlanes = s.clip ? [plane.current] : [];
    }
    const n = new THREE.Vector3(s.axis === "x" ? -1 : 0, s.axis === "y" ? -1 : 0, s.axis === "z" ? -1 : 0);
    plane.current.normal.copy(n);
    plane.current.constant = s.clipPos;
  }, []);
  useEffect(() => { apply(); }, [apply, sel, hiddenLayers, hiddenIds, inner, isolate, clip, axis, clipPos, status, focus]);

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
    controls.minDistance = cfg.minDist;
    controls.maxDistance = cfg.maxDist;
    scene.add(new THREE.HemisphereLight(0xffffff, 0x554444, 1.1));
    const d1 = new THREE.DirectionalLight(0xffffff, 1.6);
    d1.position.set(0.4, 0.6, 0.8);
    scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xbfd4ff, 0.7);
    d2.position.set(-0.6, -0.2, -0.5);
    scene.add(d2);

    const place = (v: string) => {
      const d = cfg.dist;
      const p: Record<string, [number, number, number]> = { front: [0, 0, d], back: [0, 0, -d], left: [d, 0, 0], right: [-d, 0, 0], top: [0, d, 0.001] };
      const q = p[v] ?? p.front;
      const tg = cfg.target ?? [0, 0, 0];
      camera.position.set(q[0] + tg[0], q[1] + tg[1], q[2] + tg[2]);
      controls.target.set(tg[0], tg[1], tg[2]);
      controls.update();
    };
    const goal = { on: false, t: new THREE.Vector3(), d: cfg.dist };
    const focusOn = (ids: string[] | null) => {
      const tg = new THREE.Vector3(...(cfg.target ?? [0, 0, 0]));
      if (!ids || !ids.length) { goal.t.copy(tg); goal.d = cfg.dist; goal.on = true; return; }
      const box = new THREE.Box3();
      for (const it of items.current) if (ids.includes(it.id)) { it.mesh.geometry.computeBoundingBox(); box.union(it.mesh.geometry.boundingBox!); }
      if (box.isEmpty()) return;
      const size = box.getSize(new THREE.Vector3());
      goal.t.copy(box.getCenter(new THREE.Vector3()));
      goal.d = Math.min(cfg.dist, Math.max(cfg.minDist * 1.5, Math.max(size.x, size.y, size.z) * 2.4));
      goal.on = true;
    };
    api.current = { view: (v: string) => { goal.on = false; place(v); }, reset: () => { goal.on = false; place("front"); }, focusOn };
    place("front");
    const dots = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 8), new THREE.MeshBasicMaterial({ color: 0x2f6fe0 }), 16);
    dots.visible = false; dots.frustumCulled = false; scene.add(dots);
    dotsRef.current = dots;
    const arrows = new THREE.InstancedMesh(new THREE.ConeGeometry(1, 2.6, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }), 5);
    arrows.visible = false; arrows.frustumCulled = false; scene.add(arrows);
    arrowsRef.current = arrows;

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
      `${BASE}${cfg.modelUrl}`,
      (gltf) => {
        if (!alive) return;
        const list: Item[] = [];
        gltf.scene.traverse((o) => {
          const m = o as VMesh;
          if (!(m as THREE.Mesh).isMesh) return;
          const layer = (m.userData?.layer ?? "vessel") as string;
          m.material = new THREE.MeshStandardMaterial({ color: cfg.color(m.name, layer), roughness: 0.55, metalness: 0.02, side: THREE.DoubleSide });
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
        const target = it.dir.clone().multiplyScalar(k * cfg.explodeScale);
        it.mesh.position.lerp(target, 0.18);
      }
      if (goal.on) {
        const dir = camera.position.clone().sub(controls.target);
        const cur = dir.length() || 1;
        controls.target.lerp(goal.t, 0.08);
        const nd = cur + (goal.d - cur) * 0.08;
        camera.position.copy(controls.target).add(dir.normalize().multiplyScalar(nd));
        if (controls.target.distanceTo(goal.t) < 0.001 && Math.abs(nd - goal.d) < 0.002) goal.on = false;
      }
      controls.update();
      const st = state.current;
      const now = performance.now() / 1000;
      if (st.pulse && st.focus) {
        const k = 0.5 + 0.5 * Math.sin(now * 3.2);
        for (const it of items.current) if (st.focus.has(it.id)) it.mesh.material.emissive.setRGB(0.15 + 0.55 * k, 0.02, 0.02);
      }
      const fl = flowRef.current, dm = dotsRef.current, am = arrowsRef.current;
      if (dm && am) {
        if (fl.on && fl.pts.length >= 2) {
          const col = TONES[st.tone];
          dm.visible = true; am.visible = true;
          (dm.material as THREE.MeshBasicMaterial).color.setHex(col);
          (am.material as THREE.MeshBasicMaterial).color.setHex(0xffffff);
          const curve = new THREE.CatmullRomCurve3(fl.pts);
          const m4 = new THREE.Matrix4(), rad = cfg.dist * 0.014, up = new THREE.Vector3(0, 1, 0);
          for (let i = 0; i < 16; i++) {
            const u = (now * 0.2 + i / 16) % 1;
            m4.compose(curve.getPoint(u), new THREE.Quaternion(), new THREE.Vector3(rad, rad, rad));
            dm.setMatrixAt(i, m4);
          }
          dm.instanceMatrix.needsUpdate = true;
          for (let i = 0; i < 5; i++) {
            const u = (now * 0.2 + i / 5 + 0.03) % 1;
            const tan = curve.getTangent(u).normalize();
            const q = new THREE.Quaternion().setFromUnitVectors(up, tan);
            m4.compose(curve.getPoint(u), q, new THREE.Vector3(rad * 1.3, rad * 1.3, rad * 1.3));
            am.setMatrixAt(i, m4);
          }
          am.instanceMatrix.needsUpdate = true;
          const place = (el: HTMLDivElement | null, v: THREE.Vector3, dy: number) => {
            if (!el) return;
            const c = v.clone().project(camera);
            el.style.display = "block";
            const W = el.parentElement!.clientWidth, hw = el.offsetWidth / 2 + 6;
            const x = Math.min(W - hw, Math.max(hw, ((c.x + 1) / 2) * W));
            el.style.transform = `translate(${x}px, ${((1 - c.y) / 2) * el.parentElement!.clientHeight}px) translate(-50%, ${dy}%)`;
          };
          place(entryEl.current, fl.pts[0], -170);
          place(exitEl.current, fl.pts[fl.pts.length - 1], 70);
        } else {
          dm.visible = false; am.visible = false;
          if (entryEl.current) entryEl.current.style.display = "none";
          if (exitEl.current) exitEl.current.style.display = "none";
        }
      }
      for (const [lid, lb] of Object.entries(labelEls.current)) {
        if (!lb) continue;
        const it = items.current.find((x) => x.id === lid);
        if (it && it.mesh.visible) {
          const c = it.mesh.geometry.boundingBox!.getCenter(new THREE.Vector3()).add(it.mesh.position).project(camera);
          const w = el.clientWidth, h = el.clientHeight;
          lb.style.display = "block";
          lb.style.transform = `translate(${((c.x + 1) / 2) * w}px, ${((1 - c.y) / 2) * h}px) translate(-50%, -140%)`;
        } else lb.style.display = "none";
      }
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
  }, [apply, cfg]);

  useEffect(() => {
    if (status !== "ready" || !cfg.stepCamera) return;
    api.current?.focusOn(step ? step.ids : null);
  }, [step, status, cfg]);

  /** Fließrichtung: Punkte laufen durch die Mitten der Strukturen dieses Schritts (schematisch, in der Reihenfolge der Liste). */
  const prevCentre = useRef<THREE.Vector3 | null>(null);
  useEffect(() => {
    if (status !== "ready" || !path?.flow || !step) { flowRef.current = { pts: [], on: false }; prevCentre.current = null; return; }
    const centre = (id: string) => {
      const it = items.current.find((x) => x.id === id);
      if (!it) return null;
      it.mesh.geometry.computeBoundingBox();
      return it.mesh.geometry.boundingBox!.getCenter(new THREE.Vector3());
    };
    let pts = step.ids.map(centre).filter((v): v is THREE.Vector3 => !!v);
    if (pts.length === 1) {
      const it = items.current.find((x) => x.id === step.ids[0])!;
      const b = it.mesh.geometry.boundingBox!, sz = b.getSize(new THREE.Vector3());
      const ax = sz.x >= sz.y && sz.x >= sz.z ? "x" : sz.y >= sz.z ? "y" : "z";
      const a = pts[0].clone(), c = pts[0].clone();
      a[ax] = b.min[ax] + sz[ax] * 0.1; c[ax] = b.max[ax] - sz[ax] * 0.1;
      pts = [a, c];
    } else if (prevCentre.current && pts.length >= 1) pts = [prevCentre.current, ...pts];
    prevCentre.current = pts.length ? pts[pts.length - 1].clone() : null;
    flowRef.current = { pts, on: pts.length >= 2 };
  }, [step, path, status]);
  useEffect(() => { if (story) setPlaying(true); }, [story]);

  /** Auswahl: Organ löst sich vom Körper, steht allein in der Mitte und wird beschriftet. */
  const prevSel = useRef<string | null>(null);
  useEffect(() => {
    if (status !== "ready") return;
    if (sel) api.current?.focusOn([sel]);
    else if (only?.length) api.current?.focusOn(only);
    else if (prevSel.current) api.current?.focusOn(null);
    prevSel.current = sel;
  }, [sel, status, only]);

  useEffect(() => {
    if (!playing || !path) return;
    const t = setInterval(() => setStepI((i) => (i + 1) % path.steps.length), 4200);
    return () => clearInterval(t);
  }, [playing, path]);

  const toggleLayer = (id: string) => setHiddenLayers((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleId = (id: string) => setHiddenIds((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const info = sel ? ITEMS[sel] : null;
  const grouped = useMemo(() => cfg.layers.map((l) => ({ l, ids: Object.keys(ITEMS).filter((id) => cfg.layerOf(id) === l.id && (!only || only.includes(id))) })).filter((g) => g.ids.length > 0), [cfg, ITEMS, only]);

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[minmax(0,1fr)_380px]" data-testid={`atlas-${cfg.key}`}>
      <div className="space-y-3">
        <div className="relative overflow-hidden rounded-xl border border-line bg-gradient-to-b from-[#0f2433] to-[#1c3a4f]" style={{ height: compact ? "min(48vh, 420px)" : "min(62vh, 560px)", minHeight: 300 }}>
          <div ref={host} className="absolute inset-0" />
          {status === "loading" && <div role="status" className="absolute inset-0 grid place-items-center text-sm text-white/80">{T(U.loading)}</div>}
          {status === "nowebgl" && <div role="alert" className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-white/90">{T(U.nowebgl)}</div>}
          {status === "error" && <div role="alert" className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-white/90">3D-Modell konnte nicht geladen werden.</div>}
          {[...new Set([...labelIds, ...(sel ? [sel] : [])])].map((lid) => (
            <div key={lid} ref={(e) => { labelEls.current[lid] = e; }} className="pointer-events-none absolute left-0 top-0 hidden whitespace-nowrap rounded-md bg-teal px-2 py-0.5 text-xs font-semibold text-white shadow dark:text-[#04222a]" data-testid="atlas-label">{ITEMS[lid] ? nm(ITEMS[lid]) : ""}</div>
          ))}
          {path?.flow && step && (
            <>
              <div ref={entryEl} className="pointer-events-none absolute left-0 top-0 hidden whitespace-nowrap rounded-md bg-emerald-600 px-2 py-0.5 text-xs font-bold text-white shadow-lg" data-testid="flow-entry">▶ {T(U.entry)}: {nm(ITEMS[step.ids[0]])}</div>
              <div ref={exitEl} className="pointer-events-none absolute left-0 top-0 hidden whitespace-nowrap rounded-md bg-rose-600 px-2 py-0.5 text-xs font-bold text-white shadow-lg" data-testid="flow-exit">{T(U.exit)}: {nm(ITEMS[step.ids[step.ids.length - 1]])} ▶</div>
            </>
          )}
          {path && step && (path.flow || story) && (
            <div className="absolute inset-x-2 bottom-2 rounded-xl bg-black/75 p-3 text-white backdrop-blur" data-testid="flow-caption" dir={dirAttr}>
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-bold">{stepI + 1}/{path.steps.length} · {T(step.title)}</div>
                <div className="flex shrink-0 gap-1">
                  <button onClick={() => { setPlaying(false); setStepI((i) => (i + path.steps.length - 1) % path.steps.length); }} aria-label={T(U.prev)} className="h-8 w-8 rounded-lg bg-white/20 text-sm">{isAr ? "›" : "‹"}</button>
                  <button onClick={() => setPlaying((v) => !v)} aria-label={playing ? T(U.stop) : T(U.play)} className="h-8 min-w-8 rounded-lg bg-white/20 px-2 text-sm">{playing ? "❚❚" : "▶"}</button>
                  <button onClick={() => { setPlaying(false); setStepI((i) => (i + 1) % path.steps.length); }} aria-label={T(U.next)} className="h-8 w-8 rounded-lg bg-white/20 text-sm">{isAr ? "‹" : "›"}</button>
                </div>
              </div>
              <p className="mt-1 text-xs leading-snug text-white/90">{P(step.text)}</p>
              {step.note && <p className="mt-1 text-[11px] text-amber-200">{T(U.nomodel)}: {P(step.note)}</p>}
            </div>
          )}
          {info && sel && (
            <div className="absolute left-3 top-3 max-w-[70%] rounded-lg bg-black/55 px-3 py-1.5 text-white backdrop-blur" data-testid="atlas-chip" dir={dirAttr}>
              <div className="text-sm font-semibold">{nm(info)}</div>
              <div className="text-xs italic opacity-80">{info.la}</div>
              <button onClick={() => setSel(null)} className="pointer-events-auto mt-1 rounded bg-white/20 px-2 py-0.5 text-xs" data-testid="atlas-back">{T(U.whole)}</button>
            </div>
          )}
          {!(path && step && (path.flow || story)) && <div className="pointer-events-none absolute bottom-2 left-3 right-3 text-[11px] text-white/70">{T(U.hint)}</div>}
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
          {!only && <div className="space-y-1.5 text-sm">
            <label className="flex min-h-9 items-center gap-2"><input type="checkbox" checked={inner} onChange={(e) => setInner(e.target.checked)} data-testid="atlas-inner" />{T(cfg.innerLabel)}</label>
            <label className="flex min-h-9 items-center gap-2"><input type="checkbox" checked={isolate} onChange={(e) => setIsolate(e.target.checked)} />{T(U.isolate)}</label>
          </div>}
          <div className="space-y-1.5 text-sm">
            <label className="flex min-h-9 items-center gap-2"><input type="checkbox" checked={clip} onChange={(e) => setClip(e.target.checked)} data-testid="atlas-clip" /><Scissors className="h-4 w-4" />{T(U.section)}</label>
            {clip && (
              <div className="space-y-1.5 pl-6">
                <select value={axis} onChange={(e) => setAxis(e.target.value as "x" | "y" | "z")} className="w-full rounded-lg border border-line bg-surface px-2 py-1.5 text-sm" aria-label={T(U.section)}>
                  <option value="x">{T(U.axisX)}</option>
                  <option value="y">{T(U.axisY)}</option>
                  <option value="z">{T(U.axisZ)}</option>
                </select>
                <input type="range" min={-cfg.clipRange} max={cfg.clipRange} step={0.001} value={clipPos} onChange={(e) => setClipPos(+e.target.value)} className="w-full" aria-label={T(U.section)} />
              </div>
            )}
          </div>
        </div>

        {!only && <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-2 text-xs font-semibold text-muted">{T(U.layers)}</div>
          <div className="flex flex-wrap gap-1.5">
            {cfg.layers.map((l) => (
              <button key={l.id} onClick={() => toggleLayer(l.id)} aria-pressed={!hiddenLayers.has(l.id)} className={cn("inline-flex min-h-9 items-center gap-1.5 rounded-lg border px-3 text-sm", hiddenLayers.has(l.id) ? "border-line text-muted line-through" : "border-teal bg-teal/10")}>
                {hiddenLayers.has(l.id) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}{l[lang as "de" | "ar" | "en" | "fr" | "tr"] ?? l.de}
              </button>
            ))}
          </div>
        </div>}
        {(!only || story) && (story || (cfg.paths && cfg.paths.length > 0)) && (
          <div className="rounded-xl border border-line bg-surface p-3" data-testid="atlas-paths">
            <div className="mb-2 text-xs font-semibold text-muted">{story ? T(story.title) : T(U.paths)}</div>
            {!story && <div className="flex flex-wrap gap-1.5">
              {(cfg.paths ?? []).map((pa) => (
                <button key={pa.id} data-testid={`atlas-path-${pa.id}`} onClick={() => { setSel(null); setPlaying(false); setStepI(0); setPathId(pathId === pa.id ? null : pa.id); }} aria-pressed={pathId === pa.id} className={cn("min-h-9 rounded-lg border px-3 text-sm", pathId === pa.id ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{T(pa.title)}</button>
              ))}
            </div>}
            {path && step && (
              <div className="mt-3 space-y-2" data-testid="atlas-step">
                <p className="text-sm text-muted" dir={dirAttr}>{P(path.intro)}</p>
                
                <ol className="flex flex-wrap gap-1">
                  {path.steps.map((st, i) => (
                    <li key={i}><button onClick={() => { setPlaying(false); setStepI(i); }} aria-current={i === stepI} aria-label={`${T(U.step)} ${i + 1}: ${T(st.title)}`} className={cn("h-8 min-w-8 rounded-full border px-2 text-xs", i === stepI ? "border-teal bg-teal text-white dark:text-[#04222a]" : "border-line hover:bg-surface2")}>{i + 1}</button></li>
                  ))}
                </ol>
                <div className="rounded-lg bg-surface2 p-3">
                  <h3 className="font-semibold">{stepI + 1}. {T(step.title)}</h3>
                  <p className="mt-1 text-sm" dir={dirAttr}>{P(step.text)}</p>
                  {step.note && <p className="mt-2 rounded bg-surface px-2 py-1 text-xs text-muted">{T(U.nomodel)}: {P(step.note)}</p>}
                </div>
                <div className="flex gap-1.5">
                  <button onClick={() => { setPlaying(false); setStepI((i) => (i + path.steps.length - 1) % path.steps.length); }} className="min-h-9 rounded-lg border border-line px-3 text-sm hover:bg-surface2">{T(U.prev)}</button>
                  <button onClick={() => { setPlaying(false); setStepI((i) => (i + 1) % path.steps.length); }} data-testid="atlas-next" className="min-h-9 rounded-lg border border-line px-3 text-sm hover:bg-surface2">{T(U.next)}</button>
                  <button onClick={() => setPlaying((v) => !v)} data-testid="atlas-play" className="min-h-9 rounded-lg bg-teal px-3 text-sm font-semibold text-white dark:text-[#04222a]">{playing ? T(U.stop) : T(U.play)}</button>
                </div>
              </div>
            )}
          </div>
        )}
        <p className="text-xs text-muted">{T(cfg.source)}</p>
      </div>

      <aside className="space-y-3">
        <div className="rounded-xl border border-line bg-surface p-4" data-testid="atlas-detail">
          {info && sel ? (
            <div className="space-y-3">
              <div>
                <h2 className="text-lg font-bold" dir={dirAttr}>{nm(info)}</h2>
                <p className="text-sm italic text-muted">{info.la}</p>
              </div>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">{T(U.fn)}</h3>
                <p className="mt-1 text-sm" dir={dirAttr}>{P(info.fn)}</p>
              </section>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">{T(U.kl)}</h3>
                <p className="mt-1 text-sm" dir={dirAttr}>{P(info.kl)}</p>
              </section>
              {info.parts && info.parts.length > 0 && (
                <section data-testid="atlas-parts">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">{T(U.parts)}</h3>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm" dir={dirAttr}>{info.parts.map((x) => <li key={x[0]}>{P(x)}</li>)}</ul>
                  <p className="mt-1 text-xs text-muted">{T(U.partsNote)}</p>
                </section>
              )}
              {info.note && <p className="rounded-lg bg-surface2 p-2 text-xs text-muted"><span dir={dirAttr}>{P(info.note)}</span></p>}
            </div>
          ) : (
            <p className="text-sm text-muted">{T(U.pick)}</p>
          )}
        </div>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-2 text-xs font-semibold text-muted">{T(U.structures)} ({only ? only.length : Object.keys(ITEMS).length})</div>
          <div className="max-h-[360px] space-y-3 overflow-auto pr-1">
            {grouped.map(({ l, ids }) => (
              <div key={l.id}>
                <div className="text-xs font-semibold text-muted">{l[lang as "de" | "ar" | "en" | "fr" | "tr"] ?? l.de}</div>
                <ul className="mt-1 space-y-0.5">
                  {ids.map((id) => (
                    <li key={id} className="flex items-center gap-1">
                      <button onClick={() => setSel(sel === id ? null : id)} data-testid={`atlas-item-${id}`} aria-pressed={sel === id} className={cn("min-h-9 flex-1 rounded-lg px-2 text-left text-sm hover:bg-surface2", sel === id && "bg-teal/15 font-semibold")}>{nm(ITEMS[id])}</button>
                      <button onClick={() => toggleId(id)} aria-label={hiddenIds.has(id) ? "einblenden" : "ausblenden"} className="grid h-9 w-9 place-items-center rounded-lg text-muted hover:bg-surface2">{hiddenIds.has(id) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {!compact && <section className="space-y-3 lg:col-span-2">
        <div className="rounded-xl border border-line bg-surface p-4">
          <button onClick={() => setOpen(open === "care" ? null : "care")} aria-expanded={open === "care"} className="flex w-full items-center justify-between text-left font-semibold">{T(cfg.careTitle)}<span aria-hidden>{open === "care" ? "−" : "+"}</span></button>
          {open === "care" && (
            <div className="mt-3 grid gap-4 text-sm md:grid-cols-2">
              {([[U.dis, cfg.care.diseases], [U.sym, cfg.care.symptoms], ...(cfg.care.diagnostics ? [[U.diag, cfg.care.diagnostics]] : []), [U.act, cfg.care.actions], [U.mon, cfg.care.monitoring]] as [Row, string[]][]).map(([h, li]) => (
                <div key={h[0]}>
                  <h3 className="mb-1 font-semibold">{T(h)}</h3>
                  <ul className="list-disc space-y-0.5 pl-5">{li.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
              <div>
                <h3 className="mb-1 font-semibold">{T(U.terms)}</h3>
                <ul className="space-y-0.5">{cfg.care.terms.map(([a, b]) => <li key={a}><b>{a}</b>: {b}</li>)}</ul>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{T(U.lessons)}</h3>
                <ul className="space-y-0.5">{cfg.care.lessons.map((id) => <li key={id}><Link className="text-teal underline" href={`/learn/view/?id=${id}`}>{id}</Link></li>)}</ul>
              </div>
            </div>
          )}
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <button onClick={() => setOpen(open === "quiz" ? null : "quiz")} aria-expanded={open === "quiz"} className="flex w-full items-center justify-between text-left font-semibold">{T(U.quiz)}<span aria-hidden>{open === "quiz" ? "−" : "+"}</span></button>
          {open === "quiz" && (
            <ol className="mt-3 space-y-4 text-sm">
              {cfg.quiz.map((q, i) => (
                <li key={i}>
                  <p className="font-medium" dir={dirAttr}>{P(q.q)}</p>
                  <ul className="mt-1 list-[upper-alpha] space-y-0.5 pl-5">{[...q.o.slice(i % 4), ...q.o.slice(0, i % 4)].map((o) => <li key={o}>{o}</li>)}</ul>
                  <button onClick={() => setShown((p) => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n; })} className="mt-1 text-teal underline">{T(U.show)}</button>
                  {shown.has(i) && <p className="mt-1 rounded-lg bg-surface2 p-2"><span dir={dirAttr}><b>{q.o[0]}</b> — {P(q.why)}</span></p>}
                </li>
              ))}
            </ol>
          )}
        </div>
        {extra}
      </section>}
    </div>
  );
}
