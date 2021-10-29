import { styled } from "@stitches/react";

const ProjectionWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "wrap",

  "> button": {
    margin: "0 2rem 2rem 0",
  },
});

export { ProjectionWrapper };
