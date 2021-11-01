import { styled } from "@stitches/react";

const InterstitialStyled = styled("figure", {
  margin: "0",
  width: "100%",

  "> div": {
    position: "relative",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    background: "white",
    display: "flex",

    "> div": {
      backgroundColor: "#0F111A",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "0",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",

      span: {
        position: "absolute",
        display: "inline",
        backgroundColor: "white",
        color: "#000000",
        padding: "0.5rem 1rem",
        alignSelf: "flex-end",
        opacity: "0",
        zIndex: "2",
        fontSize: "0.722rem",
        textTransform: "uppercase",
        fontWeight: "700",
        bottom: "1rem",
        boxShadow: "2px 2px 5px #00000011",
        transition: "all 200ms ease-in-out",
      },

      img: {
        opacity: "1",
        width: "calc(100% - 1rem)",
        height: "calc(100% - 4rem)",
        objectFit: "contain",
        zIndex: "1",
        position: "relative",
        margin: "2rem 0",
        transition: "all 200ms ease-in-out",
      },
    },
  },

  figcaption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: "1rem",
    textAlign: "left",
    position: "relative",
    color: "white",
    zIndex: "1",
    left: "0",
    top: "0",
    padding: "2rem",

    "> span": {
      display: "flex",
      flexShrink: "1",
      fontWeight: "200",
      fontSize: "1.75rem",
    },

    "> a": {
      display: "inline-flex",
      backgroundColor: "white",
      color: "#000000",
      width: "auto",
      margin: "0.5rem auto auto 0",
      padding: "0.5rem 1rem",
      zIndex: "2",
      fontSize: "0.722rem",
      textTransform: "uppercase",
      fontWeight: "700",
      boxShadow: "2px 2px 5px #00000011",
      transition: "all 200ms ease-in-out",
      opacity: "0",
    },

    "> div": {
      display: "flex",
      flexDirection: "column",
      flexGrow: "1",
      justifyContent: "flex-end",
      fontWeight: "800",
    },

    dl: {
      fontSize: "0.7222rem",
      marginBottom: "0",
      opacity: "0.7",
      fontWeight: "300",
    },
  },
});

const LQIP = styled("div", {
  position: "absolute",
  display: "flex",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  zIndex: "0",
  opacity: "0.382",
  backgroundSize: "cover",
  filter: "blur(50px) contrast(1.15)",
  transform: "scale3d(1.15,1.15,1.15)",
});

export { InterstitialStyled, LQIP };
