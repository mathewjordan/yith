import React, { FC } from "react";
import { Annotation, InternationalString } from "@hyperion-framework/types";
import * as Dialog from "@radix-ui/react-dialog";
import { css, styled } from "@stitches/react";
import { Mirador } from "./Mirador";

export interface FigureProps {
  manifestId: string;
  manifestLabel: InternationalString;
  paintedAnnotation: Annotation;
}

const size: number = 275;

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

  const thumbnail: string = `${paintedAnnotation.body[0].service[0].id}/full/!${size},${size}/0/default.jpg`;

  return (
    <Dialog.Root modal={true}>
      <StyledTrigger>
        <figure>
          <div>
            <div>
              <span>Expand in Viewer</span>
              <img src={thumbnail} />
              <Placeholder css={{ backgroundImage: `url(${thumbnail})` }} />
            </div>
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

const Placeholder = styled("div", {
  position: "absolute",
  display: "flex",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  zIndex: "0",
  opacity: "0.38",
  filter: "blur(10px)",
  transform: "scale3d(1.15,1.15,1.15)",
});

const StyledTrigger = styled(Dialog.Trigger, {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  width: size,

  figure: {
    margin: "0",
    width: "100%",

    "> div": {
      position: "relative",
      backgroundColor: "white",
      height: "0",
      width: "100%",
      overflow: "hidden",
      paddingTop: "100%",
      background: "white",
      borderRadius: "3px",
      boxShadow: "2px 2px 5px #00000011",

      "> div": {
        backgroundColor: "#000000",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        span: {
          position: "absolute",
          display: "inline",
          backgroundColor: "white",
          color: "#000000",
          padding: "0.5rem 1rem",
          alignSelf: "center",
          opacity: "1",
          zIndex: "2",
          fontSize: "0.722rem",
          textTransform: "uppercase",
          fontWeight: "700",
          borderRadius: "3px",
          boxShadow: "2px 2px 5px #00000011",
        },

        img: {
          opacity: "1",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: "1",
          position: "relative",
        },
      },
    },
  },

  figcaption: {
    margin: "0.5rem 0",
    display: "flex-inline",
    fontSize: "1rem",
    fontWeight: "700",
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
