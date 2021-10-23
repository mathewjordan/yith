import { styled } from "@stitches/react";

const ViewerControls = styled("div", {
  display: "flex",
  position: "relative",
  zIndex: "1",

  "> button": {
    display: "flex",
    flexGrow: "1",
    backgroundColor: "white",
    color: "#000000",
    padding: "0.75rem 1rem",
    alignSelf: "flex-end",
    zIndex: "2",
    fontSize: "0.722rem",
    textTransform: "uppercase",
    fontWeight: "700",
    border: "none",
    transition: "all 200ms ease-in-out",
    cursor: "pointer",
    justifyContent: "center",

    "&:hover, &:focus": {
      color: "#fff",
      backgroundColor: "#000",
    },
  },
});

const ViewerNote = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  backgroundColor: "white",
  padding: "1rem",
  zIndex: "2",
  left: "2rem",
  bottom: "2rem",
});

const ViewerWrapper = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  margin: "0",
  backgroundColor: "#DCDCDC",

  "&[data-screen='projection']": {
    ".mirador-viewer": {
      background: "none",
      backgroundColor: "black",

      ".mosaic-root": {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",

        ".mosaic-window": {
          backgroundColor: "transparent",
        },

        ".mirador-window": {
          backgroundColor: "black",

          "> div > header": {
            display: "none",
          },
        },

        ".mirador-osd-info, .mirador-osd-navigation": {
          margin: "0",
          display: "none",
        },
      },
    },
  },

  "> [id^='mirador-']": {
    position: "relative",
    flexGrow: "1",
    zIndex: "0",
  },
});

export { ViewerControls, ViewerNote, ViewerWrapper };
