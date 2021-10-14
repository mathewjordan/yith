import React, { FC } from "react";
import { Annotation, InternationalString } from "@hyperion-framework/types";

export interface FigureProps {
  canvasLabel: InternationalString;
  manifestLabel: InternationalString;
  paintedAnnotation: Annotation;
}

export const Figure: FC<FigureProps> = ({
  canvasLabel,
  manifestLabel,
  paintedAnnotation,
}) => {
  /*
   * todo: build a hook that gets the image from the image server
   */

  return (
    <figure>
      <img
        src={`${paintedAnnotation.body[0].service[0].id}/full/!300,300/0/default.jpg`}
      />
      <figcaption>
        {canvasLabel && canvasLabel.none[0]}
        {manifestLabel.none[0]}
      </figcaption>
    </figure>
  );
};
