import Yith from "index";
import React from "react";

export interface DomShape {
  children: any;
  type: string;
}

export const Dom: React.FC<DomShape> = ({ children, type }) => {
  console.log(type);
  return (
    <Yith type={type}>
      {children.map((child: any) => {
        const { id } = child.dataset;
        return <Yith.Manifest key={id} id={id} />;
      })}
    </Yith>
  );
};
