import {
  DialogTrigger,
  DialogContent,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import { FigureStyled, LQIP } from "components/Previews/Figure.styled";
import { InterstitialStyled } from "components/Previews/Interstitial.styled";

const TriggerStyled = styled(DialogTrigger, {
  cursor: "pointer",
  border: "none",
  justifyContent: "flex-start",
  width: "100%",
  backgroundColor: "transparent",

  dl: {
    opacity: "0.7",
    fontSize: "0.7222rem",
    disply: "flex",
  },

  "&:hover, &:focus": {
    [`${FigureStyled}`]: {
      img: {
        opacity: "0.75",
      },

      span: {
        opacity: "1",
      },

      [`${LQIP}`]: {
        opacity: "0.25",
      },
    },
    [`${InterstitialStyled}`]: {
      img: {
        opacity: "0.75",
      },

      a: {
        opacity: "1",
      },

      [`${LQIP}`]: {
        opacity: "0.25",
      },
    },
  },
});

const ContentStyled = styled(DialogContent, {
  position: "fixed",
  display: "flex",
  width: "100%",
  height: "100%",
  margin: "0",
  backgroundColor: "#DCDCDC",
});

const OverlayStyled = styled(DialogOverlay, {
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "#000000DD",
});

export { ContentStyled, OverlayStyled, TriggerStyled };
