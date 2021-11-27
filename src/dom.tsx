import Yith from "index";
import React from "react";

export interface DomShape {
  children: any;
  preview?: string;
  text?: string;
  type: string;
}

export const Dom: React.FC<DomShape> = ({ children, preview, text, type }) => {
  return (
    <Yith preview={preview} type={type} text={text}>
      {children.map((child: any) => {
        const { id } = child.dataset;
        return <Yith.Manifest key={id} id={id} />;
      })}
    </Yith>
  );
};
