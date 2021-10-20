import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { ContentActions } from "./ViewerControls.styled";

export const ViewerControls: React.FC = () => {
  return (
    <ContentActions>
      <DialogClose>Close Viewer</DialogClose>
    </ContentActions>
  );
};
