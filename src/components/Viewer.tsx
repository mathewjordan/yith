import React from "react";
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

export const Viewer: React.FC = ({ manifestId }) => {
  // todo: allow presentation to send multiple windows
  // const windows = sequence.map((manifest) => {
  //   return { manifestId: manifest.id };
  // });

  return (
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
  );
};
