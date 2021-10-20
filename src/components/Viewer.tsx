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
  const [manifestId, setManifestId] = React.useState<string>(sequence[0].id);

  const updateSequence = (event: Event) => {
    if (event.target) setManifestId(event.target.dataset.step);
  };

  return (
    <>
      <ViewerControls>
        <DialogClose>Close Viewer</DialogClose>
        <button onClick={updateSequence} data-step={sequence[1].id}>
          Next
        </button>
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
