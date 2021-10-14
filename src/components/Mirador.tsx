import React, { FC, useEffect } from "react";
import mirador from "mirador";

export const Mirador: FC = ({ config }) => {
  useEffect(() => {
    mirador.viewer(config, []);
  }, []);

  //   miradorInstance.store.dispatch(actions.addWindow());
  return <div id={config.id} />;
};
