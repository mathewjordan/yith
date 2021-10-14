import React, { FC } from "react";
import { Annotation, InternationalString } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { Mirador } from "./Mirador";
import { styled } from "@stitches/react";
export interface FigureProps {
  manifestId: string;
  manifestLabel: InternationalString;
  paintedAnnotation: Annotation;
}

export const Figure: FC<FigureProps> = ({
  manifestId,
  manifestLabel,
  paintedAnnotation,
}) => {
  /*
   * todo: build a hook that gets the image from the image server
   */

  return (
    <Dialog.Root modal={true}>
      <Dialog.Trigger>
        <figure>
          <img
            src={`${paintedAnnotation.body[0].service[0].id}/full/!300,300/0/default.jpg`}
          />
          <figcaption>{manifestLabel.none[0]}</figcaption>
        </figure>
      </Dialog.Trigger>
      <StyledContent>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
        <Mirador
          config={{
            id: `yith`,
            createGenerateClassNameOptions: {
              // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
              productionPrefix: `yith`,
            },
            windows: [
              {
                manifestId: manifestId,
              },
            ],
          }}
        />
      </StyledContent>
    </Dialog.Root>
  );
};

const StyledContent = styled(Dialog.Content, {
  position: "fixed",
  width: "100%",
  height: "100%",
});
