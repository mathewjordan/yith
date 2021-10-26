import React from "react";
import { getLabel } from "hooks/getLabel";
import { MetadataItem } from "components/Descriptive/MetadataItem";
import { ViewerNote } from "./Viewer.styled";

export const Note: React.FC = ({ data }) => {
  return (
    <ViewerNote>
      <span>
        <strong>{getLabel(data.manifest.label, "en")}</strong>
        <em>Canvas Label</em>
      </span>
      <div>Annotation</div>
      <p>
        <MetadataItem item={data.manifest.requiredStatement} language="en" />
      </p>
    </ViewerNote>
  );
};
