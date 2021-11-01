import { styled } from "@stitches/react";

const FigureStyled = styled("figure", {
  margin: "0",

  "> div": {
    position: "relative",
    backgroundColor: "white",
    height: "0",
    width: "100%",
    overflow: "hidden",
    paddingTop: "77%",
    background: "white",

    "> div": {
      backgroundColor: "#0F111A",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

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
        width: "calc(100% - 2rem)",
        height: "calc(100% - 2rem)",
        objectFit: "contain",
        zIndex: "1",
        position: "relative",
        margin: "1rem",
        transition: "all 200ms ease-in-out",
      },
    },
  },

  figcaption: {
    margin: "1rem 0",
    display: "flex-inline",
    fontSize: "1rem",
    fontWeight: "900",
    textAlign: "center",
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
  opacity: "0.618",
  backgroundSize: "cover",
  filter: "blur(50px) contrast(1.15)",
  transform: "scale3d(1.15,1.15,1.15)",
});

export { FigureStyled, LQIP };
