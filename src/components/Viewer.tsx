import React from "react";
import findkey from "lodash.findkey";
import { ViewerControls, ViewerNote, ViewerWrapper } from "./Viewer.styled";
import { DialogClose } from "@radix-ui/react-dialog";
import { Mirador } from "./Mirador";
import { getMiradorConfig } from "hooks/viewer/getMiradorConfig";
import { uuid } from "services/uuid";
import { useYithState } from "context/yith-context";
import {
  AnnotationNormalized,
  ManifestNormalized,
} from "@hyperion-framework/types";
import { getManifestNote } from "hooks/getManifestNote";
import { getLabel } from "hooks/getLabel";
import { MetadataItem } from "./MetadataItem";

export const Viewer: React.FC = ({ manifestId, sequence, type }) => {
  /*
   * todo: allow presentation to send multiple windows
   */

  const defaultKey: number = parseInt(findkey(sequence, { id: manifestId }));
  const [key, setKey] = React.useState<number>(defaultKey);
  let currentWindows = [{ manifestId: sequence[key].id }];

  const state: any = useYithState();
  const { vault } = state;

  /*
   * write this as a hook or three
   */

  let stepType: string = sequence[key].type;
  let region: string[] = [];
  let note: object = {};

  switch (stepType) {
    case "Manifest":
      currentWindows = [{ manifestId: sequence[key].id }];
      note.manifest = getManifestNote(sequence[key].id);
      break;
    case "Canvas":
      currentWindows = [
        { manifestId: sequence[key].manifestId, canvasId: sequence[key].id },
      ];
      note.manifest = getManifestNote(sequence[key].manifestId);
      break;
    case "Annotation":
      const manifest: ManifestNormalized = vault.fromRef({
        id: sequence[key].manifestId,
        type: "Manifest",
      });
      const annotation: AnnotationNormalized = vault
        .allFromRef(manifest.annotations[0].items)
        .filter((item: AnnotationNormalized) => {
          if (item.id === sequence[key].id) return item;
        })[0];

      const target: string[] = annotation.target.split("#xywh=");

      region = target[1].split(",");

      currentWindows = [
        { manifestId: sequence[key].manifestId, canvasId: target[0] },
      ];

      note.manifest = getManifestNote(sequence[key].manifestId);

      break;
    default:
      console.error(
        `Step "${stepType}" is unknown. Must be of type Manifest, Canvas, or Annotation.`
      );
  }

  /*
   *
   */

  const doStep = (step) => {
    setKey(step);
  };

  const prefix: string = `mirador-${uuid()}`;
  const config = getMiradorConfig(type);

  return (
    <ViewerWrapper data-screen={type}>
      <ViewerControls>
        <DialogClose>Close Viewer</DialogClose>
        {renderNavigation("Previous", key, sequence, doStep)}
        {renderNavigation("Next", key, sequence, doStep)}
      </ViewerControls>
      {type === "projection" && (
        <ViewerNote>
          <span>
            <strong>{getLabel(note.manifest.label, "en")}</strong>
            <em>Canvas Label</em>
          </span>
          <div>Annotation</div>
          <p>
            <MetadataItem
              item={note.manifest.requiredStatement}
              language="en"
            />
          </p>
        </ViewerNote>
      )}
      <Mirador
        config={{
          id: prefix,
          createGenerateClassNameOptions: {
            productionPrefix: prefix,
          },
          windows: currentWindows,
          ...config,
        }}
        plugins={[]}
        step={sequence[key]}
        region={region}
      />
    </ViewerWrapper>
  );
};

const renderNavigation = (label, key, sequence, doStep) => {
  let disabled = undefined;
  let step = undefined;

  switch (label) {
    case "Previous":
      if (key === 0) disabled = true;
      else step = key + -1;
      break;
    case "Next":
      if (key === sequence.length - 1) disabled = true;
      else step = key + 1;
      break;
    default:
      console.error(`Label "${label}" is unknown.`);
  }

  return (
    <button data-step={step} disabled={disabled} onClick={() => doStep(step)}>
      {label}
    </button>
  );
};
