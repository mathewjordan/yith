import React from "react";

import { MetadataItem as MetadataItemPair } from "@hyperion-framework/types";
import { Label } from "./Label";

export interface MetadataItemProps {
  item: MetadataItemPair;
  language: string;
}

export const MetadataItem: React.FC<MetadataItemProps> = ({
  item,
  language,
}) => {
  return (
    <span>
      <em>
        <strong>
          <Label label={item.label} />:
        </strong>
        <Label label={item.value} />
      </em>
    </span>
  );
};
