import React, { ReactChildren } from "react";

interface Props {
  children: ReactChildren;
}

const Presentation: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Presentation;
