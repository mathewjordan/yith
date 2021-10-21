export const getMiradorConfig = (type: string) => {
  let config = {};

  switch (type) {
    case "projection":
      config = minimalConfig;
      break;
    default:
      config = defaultConfig;
  }

  return config;
};

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

const minimalConfig = {
  workspace: {
    showZoomControls: false,
  },
  workspaceControlPanel: {
    enabled: false,
  },
  window: {
    allowClose: false,
    allowMaximize: false,
    allowTopMenuButton: false,
    allowWindowSideBar: false,
    defaultSidebarPanelWidth: 0,
    forceDrawAnnotations: false,
    hideWindowTitle: true,
    sideBarOpen: false,
  },
};
