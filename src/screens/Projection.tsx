import React from "react";
import { ProjectionWrapper } from "./Projection.styled";

interface Props {
  children: React.ReactChildren;
}

const Projection: React.FC<Props> = ({ children }) => {
  return <ProjectionWrapper>{children}</ProjectionWrapper>;
};

export default Projection;
