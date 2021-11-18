import React from "react";
import {
  Annotation,
  AnnotationPageNormalized,
  CanvasNormalized,
  ContentResource,
  ManifestNormalized,
} from "@hyperion-framework/types";
import { useYithState } from "context/yith-context";
import { getSequence } from "hooks/getSequence";
import { Modal } from "./UI/Modal";

export interface ManifestProps {
  id: string;
  instance?: string | undefined;
  type?: string;
  text?: string;
  preview?: string;
  children?: React.ReactChild | React.ReactChild[];
}

export const Manifest: React.FC<ManifestProps> = ({
  id,
  instance,
  type,
  text,
  preview,
}) => {
  const [manifest, setManifest] = React.useState<ManifestNormalized>();
  const state: any = useYithState();
  const { vault, sequences } = state;

  const sequence = getSequence(sequences, instance as string);

  React.useEffect(() => {
    vault
      .loadManifest(id)
      .then((data: ManifestNormalized) => {
        setManifest(data);
      })
      .catch((error: any) => {
        console.log(`Manifest failed to load: ${error}`);
      });
  }, [id]);

  if (!manifest) return <>Loading...</>;

  /*
   * a hook here maybe should handle the below logic
   * retriving the content resource.
   */

  if (manifest) {
    const canvas: CanvasNormalized = vault.fromRef(manifest.items[0]);
    const annotationPage: AnnotationPageNormalized = vault.fromRef(
      canvas.items[0],
    );
    const annotations: Annotation[] = vault.allFromRef(annotationPage.items);

    const painting: Annotation[] = annotations.filter((annotation: any) => {
      if (annotation.motivation)
        if (annotation.motivation[0] === "painting") {
          const resource: ContentResource = vault.fromRef(annotation.body[0]);
          annotation.body[0] = resource;
          return annotation;
        }
    });

    // if (sequence[0].id !== id) return null;

    return (
      <Modal
        manifest={manifest}
        painting={painting[0]}
        sequence={sequence}
        type={type as string}
        text={text as string}
        preview={preview}
      />
    );
  }

  return <>The manifest {id} failed to load.</>;
};
