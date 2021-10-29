import React from "react";
import { PresentationWrapper } from "./Presentation.styled";

interface Props {
  children: React.ReactChildren;
}

const Presentation: React.FC<Props> = ({ children }) => {
  return <PresentationWrapper>{children}</PresentationWrapper>;
};

export default Presentation;
