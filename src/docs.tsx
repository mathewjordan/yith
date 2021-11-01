import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Aside, AboutDocs, Main, Nav, Wrapper } from "./docs/about";
import { ProjectionDocs } from "./docs/projection";
import { PresentationDocs } from "./docs/presentation";
import { BuddhaDocs } from "./docs/examples/buddha";
import { FigureDocs } from "./docs/previews/figure";
import { InterstitialDocs } from "./docs/previews/interstitial";

const Docs: React.FC = () => {
  return (
    <Router>
      <Wrapper>
        <Aside>
          <h1>Yith</h1>
          <Nav>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Usage</Link>
              </li>
            </ul>
            <strong>Types</strong>
            <ul>
              <li>
                <Link to="/presentation">Presentation</Link>
              </li>
              <li>
                <Link to="/projection">Projection</Link>
              </li>
              <li>
                <a className="disabled">Progression</a>
              </li>
            </ul>
            <strong>Previews</strong>
            <ul>
              <li>
                <Link to="/presentation">Figure</Link>
              </li>
              <li>
                <a className="disabled">Hero</a>
              </li>
              <li>
                <Link to="/#interstitial">Interstitial</Link>
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
                <Link to="/examples/buddha">Six Impressions of Buddha</Link>
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
    </Router>
  );
};

ReactDOM.render(<Docs />, document.getElementById("root"));
