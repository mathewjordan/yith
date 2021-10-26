import { styled } from "@stitches/react";

const MetadataItemWrapper = styled("span", {
  margin: "0",
  fontStyle: "italic",
  justifyContent: "flex-start",
  display: "block",

  dt: {
    display: "inline",
    fontWeight: "700",
    ["&:after"]: { content: ": " },
  },

  dd: { display: "inline", margin: "0", padding: "0" },
});

export { MetadataItemWrapper };
