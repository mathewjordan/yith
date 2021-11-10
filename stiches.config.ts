import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export type { VariantProps } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {},
  media: {
    xs: "(min-width: 520px)",
    sm: "(min-width: 900px)",
    md: "(min-width: 1200px)",
    lg: "(min-width: 1800px)",
  },
});

export const globalStyles = globalCss({
  html: {},
});

export type CSS = Stitches.CSS<typeof config>;
