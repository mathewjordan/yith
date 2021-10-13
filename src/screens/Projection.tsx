import React, { ReactChildren } from "react";

interface Props {
  children: ReactChildren;
}

const Projection: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Projection;
