import type { LessonTr } from "../lessonsI18n";
import { AR1 } from "./ar1";
import { AR2 } from "./ar2";
import { AR3 } from "./ar3";
import { AR4 } from "./ar4";
import { AR5 } from "./ar5";
import { AR6 } from "./ar6";
import { AR7 } from "./ar7";
import { AR8 } from "./ar8";
import { AR9 } from "./ar9";
import { AR10 } from "./ar10";
import { AR11 } from "./ar11";
import { AR12 } from "./ar12";
import { AR13 } from "./ar13";
import { AR14 } from "./ar14";
import { AR15 } from "./ar15";
import { AR16 } from "./ar16";
import { AR17 } from "./ar17";
import { AR18 } from "./ar18";
import { AR19 } from "./ar19";
import { AR20 } from "./ar20";

/** Übersetzte Lektionen (Arabisch), Schlüssel = Lektions-ID. Teile in ar1.ts, ar2.ts, ... */
export const AR: Record<string, LessonTr> = { ...AR1, ...AR2, ...AR3, ...AR4, ...AR5, ...AR6, ...AR7, ...AR8, ...AR9, ...AR10, ...AR11, ...AR12, ...AR13, ...AR14, ...AR15, ...AR16, ...AR17, ...AR18, ...AR19, ...AR20 };
