import React from "react";
import {
  YithProvider,
  useYithState,
  useYithDispatch,
} from "context/yith-context";
import Figure from "components/Figure";

export const Yith = ({ type, children }) => {
  return (
    <YithProvider>
      {type}
      {React.Children.map(children, (child) => {
        return child;
      })}
    </YithProvider>
  );
};

Yith.Figure = Figure;

export default Yith;

{
  /* 

// default to Canvas items[0]
<Yith type="presentation">
  <Yith.Manifest id={} />
</Yith>

// default to Canvas id
<Yith type="presentation">
  <Yith.Figure manifest={} canvas={} />
</Yith>

// projection sequence
<Yith type="projection">
  <Yith.Manifest manifest={}  canvas={} />
  <Yith.Figure manifest={} />
    <Yith.Caption annotation={} />
    <Yith.Caption annotation={} />
  <Yith.Figure manifest={} />
</Yith>

// progression sequence
<Yith type="progression">
  <Yith.Figure manifest={} canvas={} />
  <Yith.Figure manifest={} />
  <Yith.Figure manifest={} />
</Yith>

*/
}
