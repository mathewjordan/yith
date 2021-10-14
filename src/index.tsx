import React, { ReactChildren } from "react";
import { YithProvider } from "context/yith-context";
import { Figure, FigureProps } from "components/Figure";
import { Presentation } from "screens";

interface YithProps {
  type: string;
  children: ReactChildren;
}

interface YithComposition {
  Figure: React.FC<FigureProps>;
}

const Yith: React.FC<YithProps> & YithComposition = (props) => {
  const { type, children } = props;

  const screen = (type: string) => {
    switch (type) {
      case "presentation":
        return <Presentation children={children} />;
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

Yith.Figure = Figure;

export default Yith;
