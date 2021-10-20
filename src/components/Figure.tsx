import React from "react";
import { FigureStyled, LQIP } from "./Figure.styled";

export const Figure: React.FC = ({ caption, painting, size }) => {
  const resource: string = `${painting.body[0].service[0].id}`;
  const img: string = `${resource}/full/!${size},${size}/0/default.jpg`;
  const lqip: string = `${resource}/full/!20,20/0/default.jpg`;

  return (
    <FigureStyled>
      <div>
        <div>
          <span>Expand in Viewer</span>
          <img src={img} />
          <LQIP css={{ backgroundImage: `url(${lqip})` }} />
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </FigureStyled>
  );
};
