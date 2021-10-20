import React from "react";
import { Annotation, InternationalString } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { Mirador } from "./Mirador";
import { StyledContent, StyledOverlay, StyledTrigger } from "./Modal.styled";
import { Figure } from "./Figure";
import { ViewerControls } from "./ViewerControls";
import { Viewer } from "./Viewer";

export interface FigureProps {
  manifestId: string;
  manifestLabel: InternationalString;
  paintedAnnotation: Annotation;
  sequence: Array<any>;
}

export const size: number = 275;

export const Modal: React.FC<FigureProps> = ({
  manifestId,
  manifestLabel,
  paintedAnnotation,
  sequence,
}) => {
  /*
   * todo: build a hook that gets the image from the image server
   */

  const thumbnail: string = `${paintedAnnotation.body[0].service[0].id}/full/!${size},${size}/0/default.jpg`;

  return (
    <Dialog.Root modal={true}>
      <StyledTrigger css={{ width: size }}>
        <Figure src={thumbnail} caption={manifestLabel.none[0]} />
      </StyledTrigger>
      <StyledOverlay />
      <StyledContent>
        <ViewerControls sequence={sequence} />
        <Viewer manifestId={manifestId} />
      </StyledContent>
    </Dialog.Root>
  );
};
