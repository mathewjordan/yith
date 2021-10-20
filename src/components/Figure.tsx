import React from "react";
import { FigureStyled, LQIP } from "./Figure.styled";

export const Figure: React.FC = ({ src, caption }) => {
  return (
    <FigureStyled>
      <div>
        <div>
          <span>Expand in Viewer</span>
          <img src={src} />
          <LQIP css={{ backgroundImage: `url(${src})` }} />
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </FigureStyled>
  );
};
