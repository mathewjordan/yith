import React from "react";
import { MetadataItem } from "components/Descriptive/MetadataItem";
import { ViewerNote } from "./Note.styled";
import { Label } from "components/Descriptive/Label";

export const Note: React.FC = ({ data }) => {
  return (
    <ViewerNote>
      <div className="yith-note-header">
        <Label label={data.manifest.label} el="strong" />
        <Label label={data.canvas.label} />
      </div>

      {data.annotation && (
        <div className="yith-note-body">{data.annotation}</div>
      )}

      <div className="yith-note-footer">
        <MetadataItem item={data.manifest.requiredStatement} language="en" />
      </div>
    </ViewerNote>
  );
};
