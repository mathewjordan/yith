import { Annotation, InternationalString } from "@hyperion-framework/types";
import { Label } from "components/Descriptive/Label";
import { getResourceURI } from "hooks/getResourceURI";
import React from "react";
import { FigureStyled, LQIP } from "./Figure.styled";
import { MetadataItem } from "components/Descriptive/MetadataItem";
import { MetadataItem as MetadataItemPair } from "@hyperion-framework/types";

export interface FigureProps {
  label: InternationalString;
  painting: Annotation;
  size: number;
  requiredStatement: MetadataItemPair;
}

export const Figure: React.FC<FigureProps> = ({
  label,
  painting,
  size,
  requiredStatement,
}) => {
  const resource: string = getResourceURI(painting);
  const img: string = `${resource}/full/${size},/0/default.jpg`;
  const lqip: string = `${resource}/full/20,/0/default.jpg`;

  return (
    <FigureStyled css={{ width: `${size}px` }}>
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
      <dl>
        <MetadataItem item={requiredStatement as MetadataItemPair} />
      </dl>
    </FigureStyled>
  );
};
