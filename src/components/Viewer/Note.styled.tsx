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
      color: "#555555",
    },
  },

  ".yith-note-body": {
    paddingTop: "0",
    fontSize: "0.8333rem",
    fontWeight: "700",
  },

  ".yith-note-footer": {
    margin: "0",
    padding: "1rem",
    justifyContent: "flex-start",
    fontSize: "0.7222rem",
    backgroundColor: "#e0e0e0",
    color: "#555555",
    borderBottomRightRadius: "3px",
    borderBottomLeftRadius: "3px",
  },
});

export { ViewerNote };
