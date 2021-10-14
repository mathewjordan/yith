import React, { FC, useEffect } from "react";
import mirador from "mirador";

export const Mirador: FC = ({ manifestId }) => {
  useEffect(() => {
    mirador.viewer(
      {
        id: "mirador", // id selector where Mirador should be instantiated
      },
      []
    );
  }, []);

  //   miradorInstance.store.dispatch(actions.addWindow());
  return <div id="mirador">this</div>;
};
