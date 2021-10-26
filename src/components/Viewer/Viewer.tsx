import React from "react";
import findkey from "lodash.findkey";
import { ViewerControls, ViewerWrapper } from "./Viewer.styled";
import { DialogClose } from "@radix-ui/react-dialog";
import { Mirador } from "./Mirador";
import { getMiradorConfig } from "hooks/viewer/getMiradorConfig";
import { uuid } from "services/uuid";
import { Note } from "./Note";
import { getStepData } from "hooks/getStepData";

export const Viewer: React.FC = ({ manifestId, sequence, type }) => {
  /*
   * todo: allow presentation to send multiple windows
   */

  const defaultKey: number = parseInt(findkey(sequence, { id: manifestId }));
  const [key, setKey] = React.useState<number>(defaultKey);

  const data = getStepData(sequence[key]);

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
      {type === "projection" && <Note data={data.note} />}
      <Mirador
        config={{
          id: prefix,
          createGenerateClassNameOptions: {
            productionPrefix: prefix,
          },
          windows: data.currentWindows,
          ...config,
        }}
        plugins={[]}
        step={sequence[key]}
        region={data.region}
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
