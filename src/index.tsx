import React, { ReactChildren } from "react";
import {
  YithProvider,
  useYithState,
  useYithDispatch,
} from "context/yith-context";
import { Figure, FigureProps } from "components/Figure";

interface YithProps {
  type: string;
  children: ReactChildren;
}
interface YithComposition {
  Figure: React.FC<FigureProps>;
}

const Yith: React.FC<YithProps> & YithComposition = (props) => {
  const { type, children } = props;
  return (
    <YithProvider>
      {type}
      {children}
    </YithProvider>
  );
};

Yith.Figure = Figure;

export default Yith;
