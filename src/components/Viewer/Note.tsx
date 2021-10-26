import React from "react";
import { getLabel } from "hooks/getLabel";
import { MetadataItem } from "components/Descriptive/MetadataItem";
import { ViewerNote } from "./Viewer.styled";

export const Note: React.FC = ({ data }) => {
  return (
    <ViewerNote>
      <span>
        <strong>{getLabel(data.manifest.label, "en")}</strong>
        <em>{getLabel(data.canvas.label, "en")}</em>
      </span>
      {data.annotation && <p>{data.annotation}</p>}
      <span>
        <MetadataItem item={data.manifest.requiredStatement} language="en" />
      </span>
    </ViewerNote>
  );
};
