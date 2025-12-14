import { JSX } from "react";
import bodyText from "./body-text";

export default function rendererForContentBlock(blockType: string, data: Record<string, any>, index: number): JSX.Element | null {
  switch (blockType) {
    case "BodyText":
      return bodyText(data, index);
    default:
      console.warn(`No renderer found for block type: ${blockType}`);
      return null;
  }
}