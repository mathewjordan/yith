import { styled } from "@stitches/react";

const ViewerControls = styled("div", {
  display: "flex",
  position: "relative",
  zIndex: "1",
  backgroundColor: "#fff",
  width: "100%",

  "> button": {
    display: "flex",
    flexGrow: "1",
    color: "#1f1f1f",
    padding: "0.75rem 1rem",
    alignSelf: "flex-end",
    zIndex: "2",
    fontSize: "0.8333rem",
    fontWeight: "700",
    border: "none",
    transition: "all 200ms ease-in-out",
    cursor: "pointer",
    justifyContent: "center",
    backgroundColor: "transparent",

    "&:hover": {
      color: "#000",
    },

    "&[disabled='']": {
      color: "#666",
      fontWeight: "400",
    },
  },
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
    [`& ${ViewerControls}`]: {
      position: "absolute",
      backgroundColor: "#000e",

      "> button": {
        color: "#e0e0e0",

        "&:hover": {
          color: "#fff",
        },

        "&[disabled='']": {
          color: "#666",
        },
      },
    },

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

export { ViewerControls, ViewerWrapper };
