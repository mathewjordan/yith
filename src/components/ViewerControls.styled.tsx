import { styled } from "@stitches/react";

const ContentActions = styled("div", {
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

export { ContentActions };
