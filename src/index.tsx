import React, { FC, ReactChildren, Children, cloneElement } from "react";
import { styled } from "@stitches/react";
import { YithProvider } from "context/yith-context";
import { Content, ContentProps } from "components/Content";
import { Presentation, Projection } from "screens";
import { uuid } from "services/uuid";

interface YithProps {
  type: string;
  children: ReactChildren;
}

interface YithComposition {
  Content: React.FC<ContentProps>;
}

const Yith: FC<YithProps> & YithComposition = (props) => {
  const { type, children } = props;
  const instance: string = `yith-${uuid()}`;

  const clonedChildren = Children.toArray(children).map((child) => {
    var clonedElementWithMoreProps = React.cloneElement(child, {
      instance,
    });
    return clonedElementWithMoreProps;
  });

  const screen = (type: string) => {
    switch (type) {
      case "presentation":
        return <Presentation children={clonedChildren} />;
      case "projection":
        return <Projection children={clonedChildren} />;
      default:
        return (
          <span>
            Error rendering screen type <strong>{type}</strong>.
          </span>
        );
    }
  };

  return (
    <YithProvider instance={instance}>
      <Screen id={instance}>{screen(type)}</Screen>
    </YithProvider>
  );
};

Yith.Content = Content;

const Screen = styled("div", {
  fontFamily: "inherit, system-ui, -apple-system, Helvetica, Arial, sans-serif",
  display: "flex",
  alignItems: "flex-start",
});

export default Yith;
