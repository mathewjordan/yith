import React from "react";
import { ContentStyled, OverlayStyled, TriggerStyled } from "./Modal.styled";
import { Annotation, InternationalString } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { Figure } from "./Figure";
import { ViewerControls } from "./ViewerControls";
import { Viewer } from "./Viewer";

export interface FigureProps {
  manifestLabel: InternationalString;
  painting: Annotation;
  sequence: Array<any>;
}

export const size: number = 275;

export const Modal: React.FC<FigureProps> = ({
  manifestLabel,
  painting,
  sequence,
}) => {
  /*
   * todo: build a hook that gets the image from the image server
   */

  return (
    <Dialog.Root modal={true}>
      <TriggerStyled css={{ width: size }}>
        <Figure
          size={size}
          painting={painting}
          caption={manifestLabel.none[0]}
        />
      </TriggerStyled>
      <OverlayStyled />
      <ContentStyled>
        <Viewer sequence={sequence} />
      </ContentStyled>
    </Dialog.Root>
  );
};
