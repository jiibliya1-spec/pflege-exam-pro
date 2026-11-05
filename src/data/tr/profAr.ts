import type { Profile } from "../diseaseProfiles";
import { AR_P1 } from "./prof/ar1";
import { AR_P2 } from "./prof/ar2";
import { AR_P3 } from "./prof/ar3";
import { AR_P4 } from "./prof/ar4";
import { AR_P5 } from "./prof/ar5";
import { AR_P6 } from "./prof/ar6";
import { AR_P7 } from "./prof/ar7";
import { AR_P8 } from "./prof/ar8";
import { AR_P9 } from "./prof/ar9";
import { AR_P10 } from "./prof/ar10";
import { AR_P11 } from "./prof/ar11";
import { AR_P12 } from "./prof/ar12";
import { AR_P13 } from "./prof/ar13";
import { AR_P14 } from "./prof/ar14";
import { AR_P15 } from "./prof/ar15";

export const AR_PROFILES: Record<string, Profile> = { ...AR_P1, ...AR_P2, ...AR_P3, ...AR_P4, ...AR_P5, ...AR_P6, ...AR_P7, ...AR_P8, ...AR_P9, ...AR_P10, ...AR_P11, ...AR_P12, ...AR_P13, ...AR_P14, ...AR_P15 };
