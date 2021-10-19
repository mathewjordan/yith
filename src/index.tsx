import React, { FC, ReactChildren } from "react";
import { styled } from "@stitches/react";
import { YithProvider } from "context/yith-context";
import { Content, ContentProps } from "components/Content";
import { Presentation, Projection } from "screens";

interface YithProps {
  type: string;
  children: ReactChildren;
}

interface YithComposition {
  Figure: React.FC<ContentProps>;
}

const Yith: FC<YithProps> & YithComposition = (props) => {
  const { type, children } = props;

  const screen = (type: string) => {
    switch (type) {
      case "presentation":
        return <Presentation children={children} />;
      case "projection":
        return <Projection children={children} />;
      default:
        return (
          <span>
            Error rendering screen type <strong>{type}</strong>.
          </span>
        );
    }
  };

  return (
    <YithProvider>
      <Screen>{screen(type)}</Screen>
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
