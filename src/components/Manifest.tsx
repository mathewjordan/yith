import React from "react";
import { Validator } from "@hyperion-framework/validator";
import { Vault } from "@hyperion-framework/vault";

interface Props {
  id: string;
}

const Manifest: React.FC<Props> = ({ id }) => {
  const vault = new Vault();
  const validator = new Validator();
  vault
    .loadManifest(id)
    .then((manifest) => {
      console.log(manifest);
      return validator.validateManifest(manifest);
    })
    .catch((error) => {
      console.log(`Manifest failed to load: ${error}`);
    });

  return <></>;
};

export default Manifest;
