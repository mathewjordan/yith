import React from "react";
import ReactDOM from "react-dom";
import Yith from "./index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as Collapsible from "@radix-ui/react-collapsible";
import { styled } from "@stitches/react";

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
  backgroundColor: "#f6f6f6",
  boxShadow: "inset 2px 2px 5px #00000033",

  p: {
    fontSize: "1rem",
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
});

const Docs: React.FC = () => {
  return (
    <Router>
      <Wrapper>
        <Aside>
          <h1>Yith</h1>
          <p>
            A frontend tool that leverages IIIF manifests and interweaves them
            into flexible layouts.
          </p>
          <ul>
            <li>
              <Link to="/">Introduction</Link>
            </li>
            <li>
              <Link to="/">Usage</Link>
            </li>
          </ul>
          <strong>Types</strong>
          <ul>
            <li>
              <Link to="/">Presentation</Link>
            </li>
            <li>
              <Link to="/">Progression</Link>
            </li>
            <li>
              <Link to="/">Projection</Link>
            </li>
          </ul>
          <strong>Extensions</strong>
          <ul>
            <li>
              <Link to="/">WordPress</Link>
            </li>
            <li>
              <Link to="/">Omeka S</Link>
            </li>
          </ul>
        </Aside>
        <Main>
          <Switch>
            <Route path="/">
              <h2>Projection</h2>
              <h3>Using Annotations</h3>
              <Yith type="projection">
                <Yith.Manifest id="https://yith.dev/fixtures/iiif/manifests/tacoma.json">
                  <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/2" />
                  <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/3" />
                  <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/4" />
                  <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/5" />
                  <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/6" />
                  <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/7" />
                  <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/8" />
                </Yith.Manifest>
                <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
              </Yith>

              <Pre>
                <code className="language-html">
                  {`
<Yith type="projection">
  <Yith.Manifest id="https://yith.dev/fixtures/iiif/manifests/tacoma.json">
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/2" />
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/3" />
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/4" />
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/5" />
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/6" />
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/7" />
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/tacoma/canvas/1/annotations/8" />
  </Yith.Manifest>
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
</Yith>
`}
                </code>
              </Pre>

              <h3>Using Canvases</h3>
              <Yith type="projection">
                <Yith.Manifest id="https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json">
                  <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/33ce3177-0fdc-44fd-8325-24a298322023.json" />
                  <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/51cc30d8-0404-49fc-893e-c44c3e4a94f8.json" />
                  <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/cb0ae5a2-e985-48ef-8318-3cab784ad24f.json" />
                </Yith.Manifest>
              </Yith>
              <Pre>
                <code className="language-html">
                  {`
<Yith type="projection">
  <Yith.Manifest id="https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json">
    <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/33ce3177-0fdc-44fd-8325-24a298322023.json" />
    <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/51cc30d8-0404-49fc-893e-c44c3e4a94f8.json" />
    <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/cb0ae5a2-e985-48ef-8318-3cab784ad24f.json" />
  </Yith.Manifest>
</Yith>
`}
                </code>
              </Pre>
            </Route>
          </Switch>
        </Main>
      </Wrapper>
    </Router>
  );
};

ReactDOM.render(<Docs />, document.getElementById("root"));
