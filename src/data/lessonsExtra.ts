import type { Diagram } from "./diagram";
import type { LessonBlock } from "./lessons";
import { EXTRA_HERZ } from "./extraHerz";
import { EXTRA_ATMUNG } from "./extraAtmung";
import { EXTRA_NERVEN } from "./extraNerven";
import { EXTRA_BAUCH } from "./extraBauch";
import { EXTRA_KRANK_A } from "./extraKrankA";
import { EXTRA_KRANK_B } from "./extraKrankB";
import { EXTRA_PFLEGE_1 } from "./extraPflege1";
import { EXTRA_PFLEGE_2 } from "./extraPflege2";
import { EXTRA_PFLEGE_3 } from "./extraPflege3";
import { EXTRA_PFLEGE_4 } from "./extraPflege4";

export interface Extra {
  /** Zusätzliche Abschnitte */
  b?: LessonBlock[];
  /** Diagramme (eins bis zwei) */
  d?: Diagram[];
}

export const EXTRA: Record<string, Extra> = {
  ...EXTRA_HERZ,
  ...EXTRA_ATMUNG,
  ...EXTRA_NERVEN,
  ...EXTRA_BAUCH,
  ...EXTRA_KRANK_A,
  ...EXTRA_KRANK_B,
  ...EXTRA_PFLEGE_1,
  ...EXTRA_PFLEGE_2,
  ...EXTRA_PFLEGE_3,
  ...EXTRA_PFLEGE_4,
};
