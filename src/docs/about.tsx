import React from "react";
import { styled } from "@stitches/react";
import Prism from "prismjs";

export const AboutDocs: React.FC = () => {
  return (
    <>
      <Pre>
        <code className="language-html">
          {`
<Yith type="presentation">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
</Yith>
`}
        </code>
      </Pre>
    </>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  color: "#0F111A",
  letterSpacing: "0.01em",
});

const Aside = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  width: "calc(20% - 2rem)",
  height: "100%",
  flexShrink: "0",
  padding: "1rem",
  backgroundColor: "#fff",
  boxShadow: "2px 2px 5px #00000011",
});

const Main = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  left: "20%",
  width: "calc(80% - 4rem)",
  height: "100%",
  flexShrink: "1",
  overflowX: "hidden",
  overflowY: "scroll",
  padding: "1rem 2rem",
});

const Pre = styled("pre", {
  fontFamily: "'Roboto Mono', monospace",
  fontSize: "0.8333rem !important",
  backgroundColor: "#0f111a !important",
  padding: "1rem 2.5rem 2rem !important",
  borderRadius: "5px",
  margin: "2rem 0 !important",
  overflow: "scroll",
  boxShadow: "2px 2px 5px #00000033",
  textShadow: "none !important",
  color: "white",

  code: { color: "white !important" },
});

export { Aside, Main, Pre, Wrapper };
