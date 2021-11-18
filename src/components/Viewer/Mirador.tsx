// @ts-nocheck
import React from "react";
// @ts-ignore
import mirador from "mirador";

interface MiradorProps {
  config: any;
  plugins: Array<any>;
  step: any;
  region: Array<string>;
}

export const Mirador: React.FC<MiradorProps> = ({
  config,
  plugins,
  step,
  region,
}) => {
  const [currentWindows, setCurrentWindows] = React.useState<any>([{}]);
  const [miradorInstance, setMiradorInstance] = React.useState<any>();

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

function panZoom(
  miradorInstance: any,
  xywh: Array<string>,
  windowIndex: number
) {
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
}
