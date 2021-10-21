import { styled } from "@stitches/react";

const ViewerControls = styled("div", {
  display: "flex",

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

const ViewerWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  margin: "0",
  backgroundColor: "#DCDCDC",

  "> [id^='mirador-']": {
    position: "relative",
    flexGrow: "1",
  },
});

export { ViewerControls, ViewerWrapper };
