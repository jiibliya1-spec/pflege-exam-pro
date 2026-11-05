import type { QuizTopic } from "./types";
import { T1 } from "./topics1";
import { T2 } from "./topics2";
import { T3 } from "./topics3";
export type { QuizTopic, QTuple } from "./types";
export const QUIZ_TOPICS: QuizTopic[] = [...T1, ...T2, ...T3];
