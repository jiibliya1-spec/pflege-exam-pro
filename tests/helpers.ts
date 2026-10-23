import type { Question } from "@/lib/types";

export function mkQ(over: Partial<Question> & { id: string }): Question {
  return {
    order: 1,
    chapterId: "c1",
    label: "1",
    type: "single",
    text: "Frage?",
    originalText: "Frage?",
    source: { pdfPage: 1 },
    extraction: { status: "ok", confidence: 90 },
    tags: [],
    ...over,
  };
}

export const choice = (id: string, correct: string[], type: Question["type"] = "single", verified = true, extra: Partial<Question> = {}) =>
  mkQ({
    id,
    type,
    options: [
      { id: "A", text: "a" },
      { id: "B", text: "b" },
      { id: "C", text: "c" },
      { id: "D", text: "d" },
    ],
    modelAnswer: { text: "", status: verified ? "verified" : "unverified", correctOptionIds: correct },
    ...extra,
  });
