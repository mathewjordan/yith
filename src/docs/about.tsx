import React from "react";
import { styled } from "@stitches/react";
import Yith from "./../index";
import Prism from "prismjs";

export const AboutDocs: React.FC = () => {
  return (
    <>
      <Yith type="projection">
        <Yith.Manifest id="https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json">
          <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/33ce3177-0fdc-44fd-8325-24a298322023.json" />
          <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/51cc30d8-0404-49fc-893e-c44c3e4a94f8.json" />
          <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/cb0ae5a2-e985-48ef-8318-3cab784ad24f.json" />
        </Yith.Manifest>
      </Yith>
    </>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  color: "#1f2233",
  height: "100%",
  letterSpacing: "0.01em",
});

const Aside = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  width: "calc(20% - 4rem)",
  height: "100%",
  flexShrink: "0",
  padding: "2rem",
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
  padding: "2rem",
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
