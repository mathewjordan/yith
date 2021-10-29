import React from "react";
import { styled } from "@stitches/react";
import Yith from "./../index";
import Prism from "prismjs";
import { transform } from "typescript";

export const AboutDocs: React.FC = () => {
  return (
    <>
      <h2>Usage</h2>
      <p>
        An immersive guided tour driven by region targeted annotations,
        canvases, and manifests. Inspired by{" "}
        <a href="https://exhibit.so/">Exhibit</a> and{" "}
        <a href="https://storiiies.cogapp.com/#examples">Storiiies</a>.
      </p>
      <h3>Features</h3>
      <Pre>
        <code className="language-js">
          {`
import Yith from "@yith/yith";
`}
        </code>
      </Pre>

      <h3>Example</h3>
      <Pre>
        <code className="language-html">
          {`
<Yith type="presentation">
  <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/230326" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/24645/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/24645/manifest.json" />
</Yith>
`}
        </code>
      </Pre>
      <Example>
        <h4>Five Impressions of Buddha</h4>
        <div>
          <div>
            <p>
              Aenean quis odio ultricies, bibendum velit vitae, viverra eros.
              Duis egestas sapien vel tellus auctor maximus. Aenean non est
              hendrerit elit ullamcorper euismod ut et metus. Morbi id urna
              efficitur, semper tellus eget, tincidunt mauris. Nam sed aliquet
              est.{" "}
            </p>
            <p>
              Aenean quis odio ultricies, bibendum velit vitae, viverra eros.
              Duis egestas sapien vel tellus auctor maximus. Aenean non est
              hendrerit elit ullamcorper euismod ut et metus. Morbi id urna
              efficitur, semper tellus eget, tincidunt mauris. Nam sed aliquet
              est.{" "}
            </p>
          </div>
          <Yith type="presentation">
            <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/80547/manifest.json" />
          </Yith>
        </div>
        <div>
          <Yith type="projection">
            <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/204136">
              <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/204136/canvas/canvas-47459045" />
              <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/204136/canvas/canvas-47752272" />
            </Yith.Manifest>
          </Yith>
          <p>
            Nulla sed neque et arcu ultrices ullamcorper eu a justo. Suspendisse
            eros risus, iaculis tristique erat quis, vulputate posuere velit.
            Quisque vitae est efficitur, rutrum ipsum sed, fringilla ligula.
            Donec pulvinar auctor nulla. Donec ac lectus ut lorem luctus
            finibus.{" "}
          </p>
        </div>
        <div>
          <Yith type="presentation">
            <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/106634/manifest.json" />
          </Yith>
        </div>
      </Example>
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

const Example = styled("div", {
  display: "flex",
  flexDirection: "column",

  "> div": {
    display: "flex",
    flexDirection: "row",
  },
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

const Nav = styled("nav", {
  strong: {
    display: "flex",
    margin: "1rem 0 0.5rem",
    fontWeight: "700",
    fontSize: "0.7222rem",
    textTransform: "uppercase",
    letterSpacing: "0.025em",
  },

  ul: {
    padding: "0",
    margin: "0",
    listStyle: "none",

    li: {
      marginBottom: "0.25em",
    },
  },

  "a, a:visited": {
    color: "#653787",
    fontWeight: "700",
    textDecoration: "none",

    "&:hover, &:focus": {
      color: "#00506d",
    },

    "&.disabled": {
      fontWeight: "400",
      color: "#47495d",
      opacity: "0.5",
    },
  },
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

export { Aside, Main, Nav, Pre, Wrapper };
