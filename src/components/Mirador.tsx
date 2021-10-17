import React, { FC, useEffect } from "react";
import mirador from "mirador";

export const Mirador: FC = ({ config }) => {
  console.log(config.id);

  useEffect(() => {
    mirador.viewer(config, []);
  }, [config.id]);

  //   miradorInstance.store.dispatch(actions.addWindow());
  return <div id={config.id} />;
};
