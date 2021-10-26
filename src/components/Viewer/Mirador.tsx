import React from "react";
import mirador from "mirador";

export const Mirador: React.FC = ({ config, plugins, step, region }) => {
  const [currentWindows, setCurrentWindows] = React.useState<object>({});
  const [miradorInstance, setMiradorInstance] = React.useState<object>();

  React.useEffect(() => {
    switch (step.type) {
      case "Annotation":
        if (currentWindows[0].manifestId !== config.windows[0].manifestId) {
          setCurrentWindows(config.windows);
        }
        panZoom(miradorInstance, region, 0);
        break;
      default:
        setCurrentWindows(config.windows);
    }
  }, [step]);

  React.useEffect(() => {
    setMiradorInstance(mirador.viewer(config, plugins));
  }, [currentWindows]);

  return <div id={config.id} />;
};

const panZoom = (miradorInstance, xywh, windowIndex) => {
  const windowId = Object.keys(miradorInstance.store.getState().windows)[
    windowIndex
  ];

  const boxToZoom = {
    x: parseInt(xywh[0]),
    y: parseInt(xywh[1]),
    width: parseInt(xywh[2]),
    height: parseInt(xywh[3]),
  };

  const zoomCenter = {
    x: boxToZoom.x + boxToZoom.width / 2,
    y: boxToZoom.y + boxToZoom.height / 2,
  };

  var action = mirador.actions.updateViewport(windowId, {
    x: zoomCenter.x,
    y: zoomCenter.y,
    zoom: 0.61888 / boxToZoom.width,
  });

  miradorInstance.store.dispatch(action);
};
