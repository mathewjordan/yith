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
  boxShadow: "8px 8px 12px #00000033",

  "> div": {
    padding: "1rem",
  },

  ".yith-note-header": {
    strong: {
      display: "flex",
      fontSize: "1.15em",
    },

    span: {
      display: "flex",
      fontSize: "0.8333rem",
      marginTop: "0.5rem",
    },
  },

  ".yith-note-body": {
    borderTop: "2px solid #e0e0e0",
    fontSize: "0.8333rem",
  },

  ".yith-note-footer": {
    fontSize: "0.7222rem",
    backgroundColor: "#e0e0e0",
    borderBottomRightRadius: "3px",
    borderBottomLeftRadius: "3px",
  },
});

export { ViewerNote };
