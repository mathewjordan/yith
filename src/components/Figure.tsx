import React, { FC } from "react";
import { Annotation, InternationalString } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { Mirador } from "./Mirador";

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

  console.log(manifestId);

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
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
        <Mirador manifestId={manifestId} />
      </Dialog.Content>
    </Dialog.Root>
  );
};
