import type { AtlasConfig } from "./atlasTypes";
import { RESP_CFG } from "./atlasResp";
import { URINARY_CFG } from "./atlasUrinary";
import { DIGESTIVE_CFG } from "./atlasDigestive";
import { NERVOUS_CFG } from "./atlasNervous";
import { MUSCULO_CFG } from "./atlasMusculo";
import { ENDO_CFG } from "./atlasEndocrine";
import { REPRO_CFG } from "./atlasRepro";
import { SKIN_CFG } from "./atlasSkin";
import { BLOOD_CFG } from "./atlasBlood";
import { BREAST_CFG } from "./atlasBreast";
import { HEART_CFG } from "./atlasHeart";
import { ATLAS_PARTS } from "./atlasParts";
import { FLOW_PATHS } from "./atlasFlows";

/** Alle Atlanten; Bestandteile (atlasParts) werden den Strukturen zugeordnet. */
export const ATLAS_CFGS: AtlasConfig[] = [HEART_CFG, RESP_CFG, URINARY_CFG, DIGESTIVE_CFG, NERVOUS_CFG, MUSCULO_CFG, ENDO_CFG, REPRO_CFG, SKIN_CFG, BLOOD_CFG, BREAST_CFG];
for (const c of ATLAS_CFGS) for (const [id, parts] of Object.entries(ATLAS_PARTS[c.key] ?? {})) if (c.items[id]) c.items[id].parts = parts;

for (const c of ATLAS_CFGS) if (FLOW_PATHS[c.key]) c.paths = [...FLOW_PATHS[c.key], ...(c.paths ?? [])];

/** Zu einer Lektion passender Atlas (aus der Lektionsliste der Pflege-Übersicht) und die darin zu zeigenden Strukturen. */
export function atlasForLesson(lessonId: string): AtlasConfig | null {
  return ATLAS_CFGS.find((c) => c.care.lessons.includes(lessonId)) ?? null;
}
