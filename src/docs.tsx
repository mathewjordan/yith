import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Aside, AboutDocs, Main, Nav, Wrapper } from "./docs/about";
import { ProjectionDocs } from "./docs/projection";
import { PresentationDocs } from "./docs/presentation";
import { BuddhaDocs } from "./docs/examples/buddha";

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
                <a className="disabled">Interstitial</a>
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
                <Link to="/examples/buddha">Five Impressions of Buddha</Link>
              </li>
              <li>
                <a className="disabled">The Nez Perce</a>
              </li>
              <li>
                <a className="disabled">Odilon Redon (1840-1916)</a>
              </li>
            </ul>
          </Nav>
        </Aside>
        <Main>
          <AboutDocs />
          <ProjectionDocs />
          <PresentationDocs />
          <BuddhaDocs />
        </Main>
      </Wrapper>
    </Router>
  );
};

ReactDOM.render(<Docs />, document.getElementById("root"));
