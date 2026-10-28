import { describe, expect, it } from "vitest";
import { norm, searchLessons, tokens } from "../src/lib/lessonSearch";

describe("Lektionssuche", () => {
  it("normalisiert Umlaute", () => {
    expect(norm("Schädel-Hirn-Trauma, Fuß")).toBe("schaedel-hirn-trauma, fuss");
    expect(tokens("Ä ae Atmung")).toEqual(["ae", "ae", "atmung"]);
  });
  it("findet Lektionen nach Titel, Inhalt und Diagramm", () => {
    expect(searchLessons("Barthel")[0].lesson.id).toBe("assess-barthel");
    expect(searchLessons("braden").some((h) => h.lesson.id === "assess-dekubitus")).toBe(true);
    expect(searchLessons("Lippenbremse").length).toBeGreaterThan(0);
  });
  it("findet auch mit ae statt ä und mit mehreren Wörtern", () => {
    const a = searchLessons("pflegegrad module");
    expect(a.length).toBeGreaterThan(0);
    expect(searchLessons("zzzzqq")).toEqual([]);
  });
  it("Titeltreffer stehen vor Inhaltstreffern", () => {
    const r = searchLessons("sturz");
    expect(r[0].lesson.title.toLowerCase()).toContain("sturz");
  });
});
