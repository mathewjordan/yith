import React, { ReactChildren } from "react";

interface Props {
  children: ReactChildren;
}

const Progression: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Progression;
