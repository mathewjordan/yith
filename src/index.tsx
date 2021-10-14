import React, { FC, ReactChildren } from "react";
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

  return <YithProvider>{screen(type)}</YithProvider>;
};

Yith.Content = Content;

export default Yith;
