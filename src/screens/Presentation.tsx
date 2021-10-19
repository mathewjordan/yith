import React from "react";

interface Props {
  children: React.ReactChildren;
}

const Presentation: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Presentation;
