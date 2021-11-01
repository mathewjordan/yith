import { styled } from "@stitches/react";

const PresentationWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexGrow: "1",

  "> button": {
    flexShrink: "1",
    margin: "0 0 2rem 0",
  },
});

export { PresentationWrapper };
