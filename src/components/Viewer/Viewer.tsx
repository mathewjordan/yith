import React from "react";
// @ts-ignore
import findkey from "lodash.findkey";
import { ViewerControls, ViewerWrapper } from "./Viewer.styled";
import { DialogClose } from "@radix-ui/react-dialog";
import { Mirador } from "./Mirador";
import { getMiradorConfig } from "hooks/viewer/getMiradorConfig";
import { uuid } from "services/uuid";
import { Note } from "./Note";
import { getStepData } from "hooks/getStepData";

interface ViewerProps {
  manifestId: any;
  sequence: any;
  type: string;
}

export const Viewer: React.FC<ViewerProps> = ({
  manifestId,
  sequence,
  type,
}) => {
  /*
   * todo: allow presentation to send multiple windows
   */

  const defaultKey: number = parseInt(findkey(sequence, { id: manifestId }));
  const [key, setKey] = React.useState<number>(defaultKey);

  console.log(manifestId);

  const data = getStepData(sequence[key]);

  const doStep = (step: number) => {
    setKey(step);
  };

  const prefix: string = `mirador-${uuid()}`;
  const config = getMiradorConfig(type);

  return (
    <ViewerWrapper data-screen={type}>
      <ViewerControls>
        <DialogClose>Close Viewer</DialogClose>
        {sequence.length > 1 && (
          <>
            <ViewerNavigation
              label="Previous"
              stepKey={key}
              sequence={sequence}
              doStep={doStep}
            />
            <ViewerNavigation
              label="Next"
              stepKey={key}
              sequence={sequence}
              doStep={doStep}
            />
          </>
        )}
      </ViewerControls>
      {type === "projection" && <Note data={data.note} />}
      {/* <Mirador
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
      /> */}
    </ViewerWrapper>
  );
};
interface RenderNavigationProps {
  label: any;
  stepKey: number;
  sequence: any;
  doStep: (arg0: number) => void;
}

const ViewerNavigation: React.FC<RenderNavigationProps> = ({
  label,
  stepKey,
  sequence,
  doStep,
}) => {
  let disabled: boolean = false;
  let step: any = undefined;

  switch (label) {
    case "Previous":
      if (stepKey === 0) disabled = true;
      else step = stepKey + -1;
      break;
    case "Next":
      if (stepKey === sequence.length - 1) disabled = true;
      else step = stepKey + 1;
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
