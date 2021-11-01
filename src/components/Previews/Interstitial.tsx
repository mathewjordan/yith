import { Annotation, InternationalString } from "@hyperion-framework/types";
import { Label } from "components/Descriptive/Label";
import { getResourceURI } from "hooks/getResourceURI";
import React from "react";
import { InterstitialStyled, LQIP } from "./Interstitial.styled";
import { MetadataItem } from "components/Descriptive/MetadataItem";
import { MetadataItem as MetadataItemPair } from "@hyperion-framework/types";

export interface InterstitialProps {
  label: InternationalString;
  requiredStatement: MetadataItemPair;
  painting: Annotation;
  size: number;
  text: string;
}

export const Interstitial: React.FC<InterstitialProps> = ({
  label,
  requiredStatement,
  painting,
  size,
  text,
}) => {
  const resource: string = getResourceURI(painting);
  const img: string = `${resource}/full/${size},/0/default.jpg`;
  const lqip: string = `${resource}/full/20,/0/default.jpg`;

  return (
    <InterstitialStyled css={{ height: size }}>
      <div>
        <figcaption style={{ paddingRight: size }}>
          <span>{text}</span>
          <div>
            <Label label={label} />
            <dl>
              <MetadataItem item={requiredStatement as MetadataItemPair} />
            </dl>
          </div>
        </figcaption>
        <div>
          <img src={img} style={{ width: size }} />
          {/* <a>Expand in Viewer</a> */}
          <LQIP css={{ backgroundImage: `url(${lqip})` }} />
        </div>
      </div>
    </InterstitialStyled>
  );
};
