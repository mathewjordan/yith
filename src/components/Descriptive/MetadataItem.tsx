import React from "react";
import { MetadataItem as MetadataItemPair } from "@hyperion-framework/types";
import { Label } from "./Label";
import { styled } from "@stitches/react";

export interface MetadataItemProps {
  item: MetadataItemPair;
}

export const MetadataItem: React.FC<MetadataItemProps> = ({ item }) => {
  return (
    <>
      <dt>
        <Label label={item.label} />s
      </dt>
      <dd>
        <Label label={item.value} />
      </dd>
    </>
  );
};
