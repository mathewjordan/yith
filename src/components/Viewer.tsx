import React from "react";
import { ViewerControls } from "./Viewer.styled";
import { DialogClose } from "@radix-ui/react-dialog";
import { Mirador } from "./Mirador";

const defaultConfig = {
  workspace: {
    showZoomControls: true,
  },
  workspaceControlPanel: {
    enabled: false,
  },
  window: {
    allowClose: false,
    allowMaximize: false,
    allowTopMenuButton: true,
    allowWindowSideBar: true,
    defaultSidebarPanelWidth: 300,
    forceDrawAnnotations: false,
    hideWindowTitle: false,
    sideBarOpen: false,
  },
};

export const Viewer: React.FC = ({ sequence }) => {
  // todo: allow presentation to send multiple windows
  // const windows = sequence.map((manifest) => {
  //   return { manifestId: manifest.id };
  // });
  const [key, setKey] = React.useState<number>(0);

  const manifestId: string = sequence[key].id;

  const doStep = (step) => {
    setKey(step);
  };

  return (
    <>
      <ViewerControls>
        <DialogClose>Close Viewer</DialogClose>
        {renderNavigation("Previous", key, sequence, doStep)}
        {renderNavigation("Next", key, sequence, doStep)}
      </ViewerControls>
      <Mirador
        config={{
          windows: [
            {
              manifestId: manifestId,
            },
          ],
          ...defaultConfig,
        }}
        plugins={[]}
      />
    </>
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
