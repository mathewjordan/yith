import { ManifestNormalized } from "@hyperion-framework/types";
import { useYithState } from "context/yith-context";
import React from "react";

export interface FigureProps {
  manifest: string;
}

export const Figure: React.FC<FigureProps> = ({ manifest }) => {
  const state: any = useYithState();
  const { vault } = state;

  vault
    .loadManifest(manifest)
    .then((data: ManifestNormalized) => {
      // dispatch action?
      console.log(data.label);
    })
    .catch((error: any) => {
      console.log(`Manifest failed to load: ${error}`);
    })
    .finally(() => {
      // verify exists in vault
      console.log(
        vault.fromRef({
          id: manifest,
          type: "Manifest",
        })
      );
    });

  return <>{manifest}</>;
};
