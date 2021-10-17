import React, { FC } from "react";
import { Annotation, InternationalString } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import { Mirador } from "./Mirador";

export interface FigureProps {
  manifestId: string;
  manifestLabel: InternationalString;
  paintedAnnotation: Annotation;
}

const figureConfig = {
  workspace: {
    showZoomControls: true,
  },
  workspaceControlPanel: {
    enabled: false,
  },
  window: {
    allowClose: false,
    allowMaximize: false,
    allowTopMenuButton: true,
    allowWindowSideBar: true,
    defaultSidebarPanelWidth: 320,
    forceDrawAnnotations: false,
    hideWindowTitle: false,
    sideBarOpen: true,
  },
};

export const Figure: FC<FigureProps> = ({
  manifestId,
  manifestLabel,
  paintedAnnotation,
}) => {
  /*
   * todo: build a hook that gets the image from the image server
   */

  return (
    <Dialog.Root modal={true}>
      <StyledTrigger>
        <figure>
          <div>
            <img
              src={`${paintedAnnotation.body[0].service[0].id}/full/!300,300/0/default.jpg`}
            />
            <span>Expand in Viewer</span>
          </div>
          <figcaption>{manifestLabel.none[0]}</figcaption>
        </figure>
      </StyledTrigger>
      <StyledContent>
        <Dialog.Close>Close Viewer</Dialog.Close>
        <Mirador
          config={{
            windows: [
              {
                manifestId: manifestId,
              },
            ],
            ...figureConfig,
          }}
          plugins={[]}
        />
      </StyledContent>
    </Dialog.Root>
  );
};

const StyledTrigger = styled(Dialog.Trigger, {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",

  figure: {
    margin: "0",

    "> div": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",

      "> span": {
        position: "absolute",
        display: "inline",
        backgroundColor: "blue",
        color: "white",
        padding: "0.5rem 1rem",
        alignSelf: "center",
        opacity: "0",
      },
    },
  },

  figcaption: {
    display: "flex-inline",
  },

  "&:hover": {
    "figure > div > span": {
      opacity: "1",
    },
  },
});

const StyledContent = styled(Dialog.Content, {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  backgroundColor: "white",

  "> button": {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "1rem",
    cursor: "pointer",

    "&:hover, &:focus": {
      backgroundColor: "blue",
    },
  },

  "> [id^='yith-']": {
    position: "relative",
    flexGrow: "1",
  },
});
