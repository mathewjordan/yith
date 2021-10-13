import React, { ReactChildren } from "react";
import {
  YithProvider,
  useYithState,
  useYithDispatch,
} from "context/yith-context";
import Figure from "components/Figure";

interface YithProps {
  type: string;
  children: ReactChildren;
}

export const Yith: React.FC<YithProps> = ({ type, children }) => {
  return (
    <YithProvider>
      {type}
      {children}
    </YithProvider>
  );
};

Yith.Figure = Figure;

export default Yith;
