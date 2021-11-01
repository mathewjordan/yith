import React from "react";
import { styled, css } from "@stitches/react";
import Yith from "./../index";
import Prism from "prismjs";
import { transform } from "typescript";

export const AboutDocs: React.FC = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <h2>About</h2>
      <p className="lead">
        Yith is a frontend tool that leverages IIIF manifests and interweaves
        their lush content into flexible layouts in a usable, responsive, and
        accessible way.
      </p>
      <Example>
        <div>
          <div>
            <h3>Features</h3>
            <ul>
              <li>
                Blends IIIF content into modern and responsive web layouts
              </li>
              <li>Works with Presentation 2.0 and Presentation 3.0 APIs</li>
              <li>
                Empowers curators to craft narratives with IIIF manifests,
                canvases, and annotations
              </li>
              <li>Provides React JSX integration for developers</li>
            </ul>
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <Yith type="projection">
              <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/25865/manifest.json" />
              <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/299837" />
            </Yith>
          </div>
        </div>
        <Pre style={{ marginTop: "0 !important" }}>
          <code className="language-html">
            {`
/**
 * Two works by Winslow Homer wrapped in a Projection
 */         

<Yith type="projection">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/25865/manifest.json" />
  <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/299837" />
</Yith>
`}
          </code>
        </Pre>
        <h3>Goals and Roadmap</h3>
        <div>
          <div>
            <h4 className="bullet-header">Usable</h4>
            <p>
              Interacting with IIIF content is a joy so lets make it easier for
              curators and end users to showcase and explore them
            </p>
          </div>
          <div>
            <h4 className="bullet-header">Inclusive</h4>
            <p>
              All users should be able to explore IIIF content and we must seek
              to to showcase them in a fully WCAG 2.1 conformant way
            </p>
          </div>
          <div>
            <h4 className="bullet-header">Interoperable</h4>
            <p>
              Developers and curators alike should be empowered to deliver their
              manifests of all walks to their end users
            </p>
          </div>
        </div>
      </Example>
      <h2>Usage</h2>
      <Pre>
        <code className="language-bash">
          {`
npm install @yith/yith
`}
        </code>
      </Pre>
      <Pre>
        <code className="language-js">
          {`
import React from "react";
import Yith from "@yith/yith";
`}
        </code>
      </Pre>
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
    </>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  color: "#1f2233",
  height: "100%",
  letterSpacing: "0.01em",

  p: {
    lineHeight: "1.5em",
    fontWeight: "300",

    code: {
      fontSize: "0.8333rem",
      padding: "0.25rem 0.5rem",
    },

    "&.subtitle": {
      fontSize: "2rem",
      fontWeight: "900",
      margin: "0.5rem 0 0.25rem",
    },

    "&.lead": {
      fontSize: "1.25rem",
      margin: "0.5rem 0 1rem",
      fontWeight: "300",
    },
  },
});

const Aside = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  width: "calc(25% - 4rem)",
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
    marginRight: "3rem",

    "> div": {
      marginRight: "3rem",

      "&:last-child": {
        marginRight: "0 !important",
      },
    },
  },

  ul: {
    padding: "0",
    margin: "0 0 1rem",
    listStyle: "none",

    li: {
      marginBottom: "0.75rem",
      fontWeight: "300",
      paddingLeft: "1rem",

      "&::before": {
        display: "block",
        position: "absolute",
        width: "6px",
        height: "6px",
        borderRadius: "2px",
        marginTop: "7px",
        marginLeft: "-14px",
        content: "",
        backgroundColor: "#653787",
      },
    },
  },
});

const Main = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  left: "25%",
  width: "calc(75% - 4rem)",
  height: "100%",
  flexShrink: "1",
  overflowX: "hidden",
  overflowY: "scroll",
  padding: "1rem 2rem",
  borderTop: "1rem solid #47495d22",
});

const Nav = styled("nav", {
  margin: "1rem 0 0.5rem",

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
    margin: "0 0 1rem",
    listStyle: "none",

    li: {
      marginBottom: "0.25rem",
    },
  },

  hr: {
    display: "block",
    border: "none",
    backgroundColor: "#47495d22",
    width: "100%",
    height: "2px",
    margin: "2rem 0",
    fontWeight: "300",
  },

  "a, a:visited": {
    color: "#653787",
    textDecoration: "none",
    fontWeight: "700",

    "&:hover, &:focus": {
      color: "#00506d",
    },

    "&.disabled": {
      fontWeight: "300",
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
  margin: "2rem 0",
  marginBottom: "2em !important",
  overflow: "scroll",
  boxShadow: "2px 2px 5px #00000033",
  textShadow: "none !important",
  color: "white",

  code: { color: "white !important" },
});

export { Aside, Example, Main, Nav, Pre, Wrapper };
