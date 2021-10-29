import React from "react";
import { MetadataItem as MetadataItemPair } from "@hyperion-framework/types";
import { Label } from "./Label";
import { MetadataItemWrapper } from "./MetadataItem.styled";

export interface MetadataItemProps {
  item: MetadataItemPair;
}

export const MetadataItem: React.FC<MetadataItemProps> = ({ item }) => {
  if (!item) return <></>;

  return (
    <MetadataItemWrapper>
      <dt>
        <Label label={item.label} />s
      </dt>
      <dd>
        <Label label={item.value} />
      </dd>
    </MetadataItemWrapper>
  );
};
