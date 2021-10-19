import React from "react";

interface Props {
  children: React.ReactChildren;
}

const Progression: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Progression;
