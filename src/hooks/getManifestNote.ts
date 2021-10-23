import { useYithState } from "context/yith-context";
import { ManifestNormalized } from "@hyperion-framework/types";

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
  };
};
