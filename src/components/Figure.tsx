import { useYithState } from "context/yith-context";
import React from "react";

interface Props {
  manifest: string;
}

const Figure: React.FC<Props> = ({ manifest }) => {
  // Get Context state
  const yithState: any = useYithState();
  const { vault } = yithState;

  const entity = vault.fromRef({
    id: manifest,
    type: "Manifest",
  });
  console.log(entity);
  vault
    .loadManifest(manifest)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(`Manifest failed to load: ${error}`);
    });
  return <>{manifest}</>;
};

export default Figure;
