import React, { FC, useState, useEffect } from "react";
import {
  Annotation,
  AnnotationPageNormalized,
  CanvasNormalized,
  ManifestNormalized,
} from "@hyperion-framework/types";
import { useYithDispatch, useYithState } from "context/yith-context";
import { Figure } from "./Figure";

export interface ContentProps {
  manifestId: string;
  instance: string;
}

export const Content: FC<ContentProps> = ({ manifestId }) => {
  const [manifest, setManifest] = useState<ManifestNormalized>();
  const dispatch: any = useYithDispatch();
  const state: any = useYithState();
  const { vault, sequences } = state;

  console.log(`sequences`, sequences);

  useEffect(() => {
    vault
      .loadManifest(manifestId)
      .then((data: ManifestNormalized) => {
        setManifest(data);
      })
      .catch((error: any) => {
        console.log(`Manifest failed to load: ${error}`);
      });
  }, [manifestId]);

  if (!manifest) return <>Loading...</>;

  /*
   * a hook here maybe should handle the below logic
   * retriving the content resource.
   */

  if (manifest) {
    const canvas: CanvasNormalized = vault.fromRef(manifest.items[0]);
    const annotationPage: AnnotationPageNormalized = vault.fromRef(
      canvas.items[0]
    );
    const annotations: Annotation[] = vault.allFromRef(annotationPage.items);

    const painting: Annotation[] = annotations.filter((annotation) => {
      if (annotation.motivation[0] === "painting") {
        annotation.body[0] = vault.fromRef(annotation.body[0]);
        return annotation;
      }
    });

    return (
      <Figure
        manifestId={manifestId}
        manifestLabel={manifest.label}
        paintedAnnotation={painting[0]}
      />
    );
  }
};
