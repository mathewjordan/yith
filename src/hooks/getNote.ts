import { useYithState } from "context/yith-context";
import {
  CanvasNormalized,
  ManifestNormalized,
} from "@hyperion-framework/types";

export const getManifestNote = (id) => {
  const state: any = useYithState();
  const { vault } = state;

  const manifest: ManifestNormalized = vault.fromRef({
    id,
    type: "Manifest",
  });

  return {
    id: manifest.id,
    label: manifest.label,
    requiredStatement: manifest.requiredStatement,
    items: manifest.items,
  };
};

export const getCanvasNote = (id) => {
  const state: any = useYithState();
  const { vault } = state;

  const canvas: CanvasNormalized = vault.fromRef({
    id,
    type: "Canvas",
  });

  return {
    id: canvas.id,
    label: canvas.label,
  };
};

export const getAnnotationNote = (annotation) => {
  if (!annotation.body.value) return null;

  return annotation.body.value;
};
