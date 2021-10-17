import React, { FC, useEffect } from "react";
import mirador from "mirador";
import { uuid } from "services/uuid";

export const Mirador: FC = ({ config, plugins }) => {
  let miradorInstance = undefined;
  const prefix: string = `yith-${uuid()}`;
  const miradorConfig = {
    id: prefix,
    createGenerateClassNameOptions: {
      productionPrefix: prefix,
    },
    ...config,
  };

  useEffect(() => {
    miradorInstance = mirador.viewer(miradorConfig, plugins);
    console.log(miradorInstance);
  }, [prefix]);

  //   miradorInstance.store.dispatch(actions.addWindow());
  return <div id={prefix} />;
};
