import { styled } from "@stitches/react";

const ProjectionWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",

  "> button": {
    margin: "0 2rem 2rem 0",
    flexShrink: "1",

    "&:last-child": {
      marginRight: "0",
    },
  },
});

export { ProjectionWrapper };
