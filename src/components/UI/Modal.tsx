import React from "react";
import { ContentStyled, OverlayStyled, TriggerStyled } from "./Modal.styled";
import {
  Annotation,
  InternationalString,
  ManifestNormalized,
} from "@hyperion-framework/types";
import Dialog from "@radix-ui/react-dialog";
import { Figure } from "./components/Previews/Figure";
import { Viewer } from "./components/Viewer/Viewer";
import { MetadataItem } from "./components/Descriptive/MetadataItem";
import { MetadataItem as MetadataItemPair } from "@hyperion-framework/types";

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
          label={manifest.label as unknown as InternationalString}
        />
        <dl>
          <MetadataItem item={manifest.requiredStatement as MetadataItemPair} />
        </dl>
      </TriggerStyled>
      <OverlayStyled />
      <ContentStyled>
        <Viewer manifestId={manifest.id} sequence={sequence} type={type} />
      </ContentStyled>
    </Dialog.Root>
  );
};
