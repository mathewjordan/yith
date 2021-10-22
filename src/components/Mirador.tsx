import React from "react";
import mirador from "mirador";
import { useYithState } from "context/yith-context";

export const Mirador: React.FC = ({ config, plugins, step }) => {
  const [currentWindows, setCurrentWindows] = React.useState<object>({});
  const [miradorInstance, setMiradorInstance] = React.useState<object>();

  const state: any = useYithState();
  const { vault } = state;

  React.useEffect(() => {
    switch (step.type) {
      case "Annotation":
        const manifest = vault.fromRef({
          id: step.manifestId,
          type: "Manifest",
        });
        const annotation = vault
          .allFromRef(manifest.annotations[0].items)
          .filter((item) => {
            if (item.id === step.id) return item;
          })[0];
        let region = annotation.target.split("#xywh=")[1].split(",");
        panZoom(miradorInstance, 0, region, 0);
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

const panZoom = (miradorInstance, ms, xywh, windowIndex) => {
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

  setTimeout(() => {
    miradorInstance.store.dispatch(action);
  }, ms);
};
