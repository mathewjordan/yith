import { styled } from "@stitches/react";

const ViewerNote = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  backgroundColor: "white",
  zIndex: "2",
  left: "2rem",
  bottom: "2rem",
  maxWidth: "30vw",
  borderRadius: "3px",
  boxShadow: "8px 8px 13px #00000033",

  "> div": {
    padding: "1rem",
  },

  ".yith-note-header": {
    strong: {
      display: "flex",
      fontSize: "1.15em",
      fontWeight: "900",
    },

    span: {
      display: "flex",
      fontSize: "0.8333rem",
      marginTop: "0.5rem",
      color: "#666",
    },
  },

  ".yith-note-body": {
    paddingTop: "0",
    fontSize: "0.8333rem",
    fontWeight: "700",
  },

  ".yith-note-footer": {
    fontSize: "0.7222rem",
    backgroundColor: "#e0e0e0",
    borderBottomRightRadius: "3px",
    borderBottomLeftRadius: "3px",
    padding: "1rem",
    margin: "0",
    fontStyle: "italic",

    dt: {
      display: "inline",
      fontWeight: "700",
      ["&:after"]: { content: ": " },
    },

    dd: { display: "inline", margin: "0", padding: "0" },
  },
});

export { ViewerNote };
