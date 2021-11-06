import React from "react";
import { ContentStyled, OverlayStyled, TriggerStyled } from "./Modal.styled";
import {
  Annotation,
  InternationalString,
  ManifestNormalized,
} from "@hyperion-framework/types";
import { Figure } from "components/Previews/Figure";
import { Viewer } from "components/Viewer/Viewer";
import { Interstitial } from "components/Previews/Interstitial";
import { MetadataItem as MetadataItemPair } from "@hyperion-framework/types";
import { Dialog } from "@radix-ui/react-dialog";

export interface FigureProps {
  manifest: ManifestNormalized;
  painting: Annotation;
  sequence: Array<any>;
  type: string;
  text: string;
  preview?: string;
}

export const size: number = 240;

export const Modal: React.FC<FigureProps> = ({
  manifest,
  painting,
  sequence,
  type,
  text,
  preview = "figure",
}) => {
  /*
   * todo: build a hook that gets the image from the image server
   */

  return (
    <Dialog modal={true}>
      <TriggerStyled>
        {preview === "figure" && (
          <>
            <Figure
              size={size}
              painting={painting}
              requiredStatement={
                manifest.requiredStatement as unknown as MetadataItemPair
              }
              label={manifest.label as unknown as InternationalString}
            />
          </>
        )}
        {preview === "interstitial" && (
          <Interstitial
            size={size}
            painting={painting}
            requiredStatement={
              manifest.requiredStatement as unknown as MetadataItemPair
            }
            text={text}
            label={manifest.label as unknown as InternationalString}
          />
        )}
      </TriggerStyled>
      <OverlayStyled />
      <ContentStyled>
        <Viewer manifestId={manifest.id} sequence={sequence} type={type} />
      </ContentStyled>
    </Dialog>
  );
};
