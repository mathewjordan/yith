import React from "react";

import { MetadataItem as MetadataItemPair } from "@hyperion-framework/types";
import { getLabel } from "hooks/getLabel";

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
        <strong>{getLabel(item.label, language)}: </strong>
        {getLabel(item.value, language)}
      </em>
    </span>
  );
};
