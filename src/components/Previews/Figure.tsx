import { Annotation } from "@hyperion-framework/types";
import { Label } from "components/Descriptive/Label";
import React from "react";
import { FigureStyled, LQIP } from "./Figure.styled";

export interface FigureProps {
  label: string;
  painting: Annotation;
  size: number;
}

export const Figure: React.FC<FigureProps> = ({ label, painting, size }) => {
  const resource: string = `${painting.body[0].service[0].id}`;
  const img: string = `${resource}/full/${size},/0/default.jpg`;
  const lqip: string = `${resource}/full/20,/0/default.jpg`;

  return (
    <FigureStyled>
      <div>
        <div>
          <span>Expand in Viewer</span>
          <img src={img} />
          <LQIP css={{ backgroundImage: `url(${lqip})` }} />
        </div>
      </div>
      <figcaption>
        <Label label={label} />
      </figcaption>
    </FigureStyled>
  );
};
