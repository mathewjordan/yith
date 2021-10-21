import React from "react";
import findkey from "lodash.findkey";
import { ViewerControls, ViewerWrapper } from "./Viewer.styled";
import { DialogClose } from "@radix-ui/react-dialog";
import { Mirador } from "./Mirador";
import { getMiradorConfig } from "hooks/viewer/getMiradorConfig";

export const Viewer: React.FC = ({ manifestId, sequence, type }) => {
  // todo: allow presentation to send multiple windows
  // const windows = sequence.map((manifest) => {
  //   return { manifestId: manifest.id };
  // });

  const defaultKey: number = parseInt(findkey(sequence, { id: manifestId }));
  const [key, setKey] = React.useState<number>(defaultKey);
  let currentManifestId: string = sequence[key].id;

  const doStep = (step) => {
    setKey(step);
  };

  const config = getMiradorConfig(type);

  return (
    <ViewerWrapper data-screen={type}>
      <ViewerControls>
        <DialogClose>Close Viewer</DialogClose>
        {renderNavigation("Previous", key, sequence, doStep)}
        {renderNavigation("Next", key, sequence, doStep)}
      </ViewerControls>
      <Mirador
        config={{
          windows: [
            {
              manifestId: currentManifestId,
            },
          ],
          ...config,
        }}
        plugins={[]}
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
