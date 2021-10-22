import React from "react";
import { ContentStyled, OverlayStyled, TriggerStyled } from "./Modal.styled";
import { Annotation, InternationalString } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { Figure } from "./Figure";
import { Viewer } from "./Viewer";

export interface FigureProps {
  manifestId: string;
  manifestLabel: InternationalString;
  painting: Annotation;
  sequence: Array<any>;
  type: string;
}

export const size: number = 275;

export const Modal: React.FC<FigureProps> = ({
  manifestId,
  manifestLabel,
  painting,
  sequence,
  type,
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
        <Viewer manifestId={manifestId} sequence={sequence} type={type} />
      </ContentStyled>
    </Dialog.Root>
  );
};
