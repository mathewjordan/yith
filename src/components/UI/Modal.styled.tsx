import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import { FigureStyled, LQIP } from "components/Previews/Figure.styled";

const TriggerStyled = styled(Dialog.Trigger, {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  justifyContent: "flex-start",

  "> dl": {
    padding: " 0 0.5rem",
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
  },
});

const ContentStyled = styled(Dialog.Content, {
  position: "fixed",
  display: "flex",
  width: "100%",
  height: "100%",
  margin: "0",
  backgroundColor: "#DCDCDC",
});

const OverlayStyled = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "#000000DD",
});

export { ContentStyled, OverlayStyled, TriggerStyled };
