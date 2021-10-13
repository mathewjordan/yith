import { useYithState } from "context/yith-context";
import React from "react";

interface Props {
  manifest: string;
}

const Figure: React.FC<Props> = ({ manifest }) => {
  const state: any = useYithState();
  const { vault } = state;

  vault
    .loadManifest(manifest)
    .then((data) => {
      // dispatch action?
    })
    .catch((error) => {
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

export default Figure;
