import React from "react";

interface Props {
  children: React.ReactChildren;
}

const Projection: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Projection;
