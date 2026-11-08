"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Box, Info } from "lucide-react";
import { Atlas3D } from "./Atlas3D";
import { AtlasViewer } from "./AtlasViewer";
import { RespSchemas } from "./RespSchemas";
import { RESP_CFG } from "@/data/atlasResp";
import { UrinarySchemas } from "./UrinarySchemas";
import { DigestiveSchemas } from "./DigestiveSchemas";
import { DIGESTIVE_CFG } from "@/data/atlasDigestive";
import { NervousSchemas } from "./NervousSchemas";
import { NERVOUS_CFG } from "@/data/atlasNervous";
import { MUSCULO_CFG } from "@/data/atlasMusculo";
import { MusculoSchemas } from "./MusculoSchemas";
import { URINARY_CFG } from "@/data/atlasUrinary";
import { Card, Notice, PageHeader, cn } from "./ui";
import { useLang } from "@/lib/i18n";

type Row = [string, string, string, string, string];
interface Sys { id: string; name: Row; lesson: string; d3: boolean }
const SYSTEMS: Sys[] = [
  { id: "herz", name: ["Herz-Kreislauf-System", "الجهاز القلبي الوعائي", "Cardiovascular system", "Système cardiovasculaire", "Kalp-damar sistemi"], lesson: "herzinfarkt", d3: true },
  { id: "atmung", name: ["Atmungssystem", "الجهاز التنفسي", "Respiratory system", "Système respiratoire", "Solunum sistemi"], lesson: "asthma", d3: true },
  { id: "verdauung", name: ["Verdauungssystem", "الجهاز الهضمي", "Digestive system", "Système digestif", "Sindirim sistemi"], lesson: "crohn", d3: true },
  { id: "niere", name: ["Harnsystem", "الجهاز البولي", "Urinary system", "Système urinaire", "Üriner sistem"], lesson: "niereninsuff", d3: true },
  { id: "nerven", name: ["Nervensystem", "الجهاز العصبي", "Nervous system", "Système nerveux", "Sinir sistemi"], lesson: "schlaganfall", d3: true },
  { id: "bewegung", name: ["Bewegungsapparat", "الجهاز الحركي", "Musculoskeletal system", "Appareil locomoteur", "Hareket sistemi"], lesson: "osteoporose", d3: true },
  { id: "stoffwechsel", name: ["Endokrines System", "الجهاز الصماوي", "Endocrine system", "Système endocrinien", "Endokrin sistem"], lesson: "diabetes", d3: false },
  { id: "geschlecht", name: ["Fortpflanzungssystem", "الجهاز التناسلي", "Reproductive system", "Système reproducteur", "Üreme sistemi"], lesson: "mammakarzinom", d3: false },
  { id: "haut", name: ["Haut", "الجلد", "Skin", "Peau", "Deri"], lesson: "verbrennung", d3: false },
  { id: "blut", name: ["Blut und Immunsystem", "الدم والجهاز المناعي", "Blood and immune system", "Sang et système immunitaire", "Kan ve bağışıklık"], lesson: "g7-blut-lymphom", d3: false },
];
const L = {
  title: ["Anatomie-Atlas", "أطلس التشريح", "Anatomy atlas", "Atlas d'anatomie", "Anatomi atlası"],
  sub: ["Zehn Organsysteme. Herz, Atmung, Harn- und Verdauungssystem sind als echte 3D-Modelle verfügbar; die weiteren Systeme folgen mit derselben Technik.", "عشرة أجهزة. القلب والتنفس والجهاز البولي والهضمي متوفرة كنماذج ثلاثية الأبعاد حقيقية، وبقية الأجهزة تأتي بالتقنية نفسها.", "Ten organ systems. Heart, respiration, urinary and digestive systems are available as real 3D models; the other systems follow with the same technique.", "Dix systèmes. Le cœur est disponible en vrai modèle 3D ; les autres suivront.", "On sistem. Kalp gerçek 3B model olarak mevcut; diğerleri aynı teknikle gelecek."],
  ready: ["3D verfügbar", "ثلاثي الأبعاد متاح", "3D available", "3D disponible", "3B mevcut"],
  soon: ["3D-Modell noch nicht integriert", "النموذج ثلاثي الأبعاد غير مدمج بعد", "3D model not yet integrated", "Modèle 3D pas encore intégré", "3B model henüz eklenmedi"],
  notice: ["Hinweis: Für die Systeme ohne 3D-Modell gibt es weiterhin die schematischen, anklickbaren Abbildungen in den Krankheits-Lektionen. Sie sind vereinfachte Lernzeichnungen und keine anatomischen Atlasbilder.", "تنبيه: الأجهزة التي لا تملك نموذجاً ثلاثي الأبعاد تبقى لها الرسوم التخطيطية القابلة للنقر داخل دروس الأمراض. هي رسوم تعليمية مبسطة وليست صور أطلس تشريحي.", "Note: Systems without a 3D model still have the schematic clickable figures in the disease lessons. They are simplified learning drawings, not anatomical atlas images.", "Remarque : les systèmes sans modèle 3D gardent les figures schématiques cliquables dans les leçons. Ce sont des dessins simplifiés, pas des planches d'atlas.", "Not: 3B modeli olmayan sistemler için ders içindeki şematik tıklanabilir şekiller sürer. Bunlar basitleştirilmiş çizimlerdir, atlas görüntüsü değildir."],
  lesson: ["Passende Lektion mit schematischer Abbildung", "الدرس المرتبط مع رسم تخطيطي", "Matching lesson with schematic figure", "Leçon avec figure schématique", "Şematik şekilli ders"],
  back: ["Alle Systeme", "كل الأجهزة", "All systems", "Tous les systèmes", "Tüm sistemler"],
};
const lg = ["de", "ar", "en", "fr", "tr"];

export function AtlasHome() {
  const lang = useLang();
  const T = (r: Row) => r[Math.max(0, lg.indexOf(lang))];
  const sp = useSearchParams();
  const sys = sp.get("sys");
  const open = sys === "herz" || sys === "atmung" || sys === "niere" || sys === "verdauung" || sys === "nerven" || sys === "bewegung";
  return (
    <div className="space-y-4">
      <PageHeader title={T(L.title as Row)} subtitle={T(L.sub as Row)} actions={open ? <Link href="/atlas/" className="text-sm text-teal underline">{T(L.back as Row)}</Link> : undefined} />
      {open ? (
        sys === "atmung" ? <AtlasViewer cfg={RESP_CFG} extra={<RespSchemas />} /> : sys === "niere" ? <AtlasViewer cfg={URINARY_CFG} extra={<UrinarySchemas />} /> : sys === "verdauung" ? <AtlasViewer cfg={DIGESTIVE_CFG} extra={<DigestiveSchemas />} /> : sys === "nerven" ? <AtlasViewer cfg={NERVOUS_CFG} extra={<NervousSchemas />} /> : sys === "bewegung" ? <AtlasViewer cfg={MUSCULO_CFG} extra={<MusculoSchemas />} /> : <Atlas3D />
      ) : (
        <>
          <Notice tone="teal"><span className="flex items-start gap-2"><Info className="mt-0.5 h-4 w-4 shrink-0" />{T(L.notice as Row)}</span></Notice>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="atlas-systems">
            {SYSTEMS.map((s) => (
              <li key={s.id}>
                <Card className={cn("flex h-full flex-col gap-2 p-4", s.d3 && "border-teal")}>
                  <div className="flex items-center gap-2 font-semibold"><Box className="h-5 w-5 text-teal" />{T(s.name)}</div>
                  {s.d3 ? (
                    <Link href={`/atlas/?sys=${s.id === "atmung" ? "atmung" : s.id === "niere" ? "niere" : s.id === "verdauung" ? "verdauung" : s.id === "nerven" ? "nerven" : s.id === "bewegung" ? "bewegung" : "herz"}`} className="mt-auto inline-flex min-h-10 items-center justify-center rounded-lg bg-teal px-4 text-sm font-semibold text-white dark:text-[#04222a]" data-testid={`atlas-open-${s.id}`}>{T(L.ready as Row)} →</Link>
                  ) : (
                    <>
                      <p className="text-sm text-muted">{T(L.soon as Row)}</p>
                      <Link href={`/learn/view/?id=${s.lesson}`} className="mt-auto text-sm text-teal underline">{T(L.lesson as Row)}</Link>
                    </>
                  )}
                </Card>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
