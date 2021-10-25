import React from "react";
import { ContentStyled, OverlayStyled, TriggerStyled } from "./Modal.styled";
import { Annotation, ManifestNormalized } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { Figure } from "./Figure";
import { Viewer } from "./Viewer";
import { getLabel } from "hooks/getLabel";
import { MetadataItem } from "./MetadataItem";

export interface FigureProps {
  manifest: ManifestNormalized;
  painting: Annotation;
  sequence: Array<any>;
  type: string;
}

export const size: number = 240;

export const Modal: React.FC<FigureProps> = ({
  manifest,
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
          caption={getLabel(manifest.label, "en")}
        />
        <MetadataItem item={manifest.requiredStatement} language="en" />
      </TriggerStyled>
      <OverlayStyled />
      <ContentStyled>
        <Viewer manifestId={manifest.id} sequence={sequence} type={type} />
      </ContentStyled>
    </Dialog.Root>
  );
};
