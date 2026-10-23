import type { Settings } from "./types";

export const DEFAULT_SETTINGS: Settings = {
  theme: "system",
  uiLanguage: "de",
  defaultMode: "practice",
  defaultQuestionCount: 10,
  defaultTimeLimitMin: 0,
  defaultFeedback: "instant",
  passPercent: 60,
  shuffleQuestions: false,
  shuffleOptions: false,
  sound: false,
  animations: true,
  reducedMotion: false,
  fontScale: 1,
  studyGoalPerDay: 10,
};

export const STORAGE_KEY = "pep:v1:state";
export const STATE_VERSION = 1;
