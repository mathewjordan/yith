import React from "react";
import Yith from "index";

interface DomShape {
  children: any;
  preview?: string;
  text?: string;
  type: string;
}

export const ByClass: React.FC<DomShape> = ({
  children,
  preview,
  text,
  type,
}) => {
  return (
    <Yith preview={preview} type={type} text={text}>
      {children.map((child: any) => {
        const { id } = child.dataset;
        return <Yith.Manifest key={id} id={id} />;
      })}
    </Yith>
  );
};
