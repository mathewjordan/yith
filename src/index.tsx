import React from "react";
import Manifest from "components/Manifest";

interface Props {
  manifestId: string;
}

const Yith: React.FC<Props> = ({ manifestId }) => {
  return (
    <>
      {manifestId}
      <Manifest id={manifestId}></Manifest>
    </>
  );
};

export default Yith;
