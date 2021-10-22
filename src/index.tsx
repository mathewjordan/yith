import React from "react";
import { styled } from "@stitches/react";
import { YithProvider } from "context/yith-context";
import { Manifest, ManifestProps } from "components/Manifest";
import { Annotation, AnnotationProps } from "components/Annotation";
import { Canvas, CanvasProps } from "components/Canvas";
import { Presentation, Projection } from "screens";
import { uuid } from "services/uuid";

interface YithProps {
  type: string;
  children: React.ReactChildren;
}

interface YithComposition {
  Annotation: React.FC<AnnotationProps>;
  Canvas: React.FC<CanvasProps>;
  Manifest: React.FC<ManifestProps>;
}

const Yith: React.FC<YithProps> & YithComposition = (props) => {
  const { type, children } = props;
  const instance: string = `yith-${uuid()}`;

  let sequence = {};
  sequence.id = instance;
  sequence.items = [];

  // todo: write this as a hook OR two
  const clonedManifests = React.Children.toArray(children).map((manifest) => {
    // add manifest to sequence
    sequence.items.push({
      id: manifest.props.id,
      type: "Manifest",
    });

    if (manifest.props.children)
      manifest.props.children.forEach((child) => {
        sequence.items.push({
          id: child.props.id,
          type: child.type.name,
          manifestId: manifest.props.id,
        });
      });

    // clone and add instance/type
    const clonedManifest = React.cloneElement(manifest, {
      instance,
      type,
    });
    return clonedManifest;
  });

  const screen = (type: string) => {
    switch (type) {
      case "presentation":
        return <Presentation children={clonedManifests} />;
      case "projection":
        return <Projection children={clonedManifests} />;
      default:
        return (
          <span>
            Error rendering screen type <strong>{type}</strong>.
          </span>
        );
    }
  };

  return (
    <YithProvider sequence={sequence}>
      <Screen>{screen(type)}</Screen>
    </YithProvider>
  );
};

Yith.Annotation = Annotation;
Yith.Canvas = Canvas;
Yith.Manifest = Manifest;

const Screen = styled("div", {
  fontFamily: "inherit, system-ui, -apple-system, Helvetica, Arial, sans-serif",
  display: "flex",
  alignItems: "flex-start",
});

module.exports = Yith;
