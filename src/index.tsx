import React from "react";
import ReactDOM from "react-dom";
import { styled } from "@stitches/react";
import { YithProvider } from "./context/yith-context";
import { Manifest, ManifestProps } from "./components/Manifest";
import { Annotation, AnnotationProps } from "./components/Annotation";
import { Collection, CollectionProps } from "./components/Collection";
import { Canvas, CanvasProps } from "./components/Canvas";
import { Presentation, Projection } from "./screens";
import { ErrorBoundary } from "react-error-boundary";
import { uuid } from "./services/uuid";
import { Dom } from "dom";

interface YithProps {
  type: string;
  preview?: string;
  text?: string;
  children: React.ReactChild | React.ReactChild[];
}

interface YithComposition {
  Annotation: React.FC<AnnotationProps>;
  Canvas: React.FC<CanvasProps>;
  Collection: React.FC<CollectionProps>;
  Manifest: React.FC<ManifestProps>;
}
interface FallbackProps {
  error: any;
  resetErrorBoundary: any;
}

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export interface Sequence {
  id: string;
  items: Array<any>;
}

const Yith: React.FC<YithProps> & YithComposition = ({
  type,
  preview,
  text,
  children,
}) => {
  if (!window) return null;

  const instance: string = `yith-${uuid()}`;

  let sequence: Sequence = {
    id: instance,
    items: [],
  };

  // todo: write this as a hook OR two
  const clonedManifests = React.Children.toArray(children).map(
    (manifest: any) => {
      // add manifest to sequence

      sequence.items.push({
        id: manifest.props.id,
        type: "Manifest",
      });

      if (manifest.props.children)
        manifest.props.children.forEach((child: any) => {
          sequence.items.push({
            id: child.props.id,
            type: child.type.name,
            manifestId: manifest.props.id,
          });
        });

      // clone and add instance/type
      const clonedManifest = React.cloneElement(manifest, {
        instance,
        preview,
        text,
        type,
      });
      return clonedManifest;
    }
  );

  const screen = (type: string) => {
    switch (type) {
      case "presentation":
        return <Presentation children={clonedManifests as any} />;
      case "projection":
        return <Projection children={clonedManifests as any} />;
      default:
        return (
          <span>
            Error rendering screen type <strong>{type}</strong>.
          </span>
        );
    }
  };

  return (
    <YithProvider sequence={sequence as any}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Screen>{screen(type)}</Screen>
      </ErrorBoundary>
    </YithProvider>
  );
};

Yith.Annotation = Annotation;
Yith.Canvas = Canvas;
Yith.Collection = Collection;
Yith.Manifest = Manifest;

const Screen = styled("div", {
  fontFamily: "inherit, system-ui, -apple-system, Helvetica, Arial, sans-serif",
  display: "flex",
  alignItems: "flex-start",
});

export { Annotation, Canvas, Collection, Manifest };

export default Yith;

/**
 * Render to DOM (non-JSX method)
 */
Array.prototype.forEach.call(
  document.getElementsByClassName("yith-iiif"),
  function (element) {
    const type = element.dataset.type;
    const children = Array.from(element.children);
    ReactDOM.render(<Dom children={children} type={type} />, element);
  }
);
