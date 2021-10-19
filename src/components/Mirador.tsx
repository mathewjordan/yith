import React from "react";
import mirador from "mirador";
import { uuid } from "services/uuid";

export const Mirador: React.FC = ({ config, plugins }) => {
  let miradorInstance = undefined;
  const prefix: string = `mirador-${uuid()}`;
  const miradorConfig: object = {
    id: prefix,
    createGenerateClassNameOptions: {
      productionPrefix: prefix,
    },
    ...config,
  };

  React.useEffect(() => {
    miradorInstance = mirador.viewer(miradorConfig, plugins);
    console.log(miradorInstance);
  }, [prefix]);

  //   miradorInstance.store.dispatch(actions.addWindow());
  return <div id={prefix} />;
};
