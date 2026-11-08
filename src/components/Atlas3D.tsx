"use client";
import { AtlasViewer } from "./AtlasViewer";
import { HEART_CFG } from "@/data/atlasHeart";

/** 3D-Herz (BodyParts3D, CC BY 4.0). */
export function Atlas3D() {
  return <AtlasViewer cfg={HEART_CFG} />;
}
