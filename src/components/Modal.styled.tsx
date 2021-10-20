import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";

const StyledTrigger = styled(Dialog.Trigger, {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",

  "&:hover, &:focus": {
    img: {
      opacity: "0.5",
    },

    span: {
      opacity: "1",
    },
  },
});

const StyledContent = styled(Dialog.Content, {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  margin: "0",
  backgroundColor: "#DCDCDC",

  "> [id^='mirador-']": {
    position: "relative",
    flexGrow: "1",
  },
});

const StyledOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "#000000DD",
});

export { StyledContent, StyledOverlay, StyledTrigger };
