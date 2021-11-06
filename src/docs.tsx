import React from "react";
import ReactDOM from "react-dom";
import { Aside, AboutDocs, Main, Nav, Wrapper } from "./docs/about";
import { ProjectionDocs } from "./docs/projection";
import { PresentationDocs } from "./docs/presentation";
import { BuddhaDocs } from "./docs/examples/buddha";
import { FigureDocs } from "./docs/previews/figure";
import { InterstitialDocs } from "./docs/previews/interstitial";

const Docs: React.FC = () => {
  return (
    <Wrapper>
      <Aside>
        <h1>Yith</h1>
        <Nav>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Usage</a>
            </li>
          </ul>
          <strong>Types</strong>
          <ul>
            <li>
              <a href="/presentation">Presentation</a>
            </li>
            <li>
              <a href="/projection">Projection</a>
            </li>
            <li>
              <a className="disabled">Progression</a>
            </li>
          </ul>
          <strong>Previews</strong>
          <ul>
            <li>
              <a href="/presentation">Figure</a>
            </li>
            <li>
              <a className="disabled">Hero</a>
            </li>
            <li>
              <a href="/#interstitial">Interstitial</a>
            </li>
          </ul>
          <strong>Plugins</strong>
          <ul>
            <li>
              <a className="disabled">Omeka S</a>
            </li>
            <li>
              <a className="disabled">WordPress</a>
            </li>
          </ul>
          <hr />
          <strong>Examples</strong>
          <ul>
            <li>
              <a href="/examples/buddha">Six Impressions of Buddha</a>
            </li>
            <li>
              <a className="disabled">Nimíipuu, The Nez Percé</a>
            </li>
            <li>
              <a className="disabled">Odilon Redon (1840-1916)</a>
            </li>
          </ul>
        </Nav>
      </Aside>
      <Main>
        <AboutDocs />
        <h2>Types</h2>
        <ProjectionDocs />
        <PresentationDocs />
        <h2>Previews</h2>
        <FigureDocs />
        <InterstitialDocs />
        <h2>Examples</h2>
        <BuddhaDocs />
      </Main>
    </Wrapper>
  );
};

ReactDOM.render(<Docs />, document.getElementById("root"));
