import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Aside, AboutDocs, Main, Nav, Wrapper } from "docs/about";
import { ProjectionDocs } from "docs/projection";
import { PresentationDocs } from "docs/presentation";

const Docs: React.FC = () => {
  return (
    <Router>
      <Wrapper>
        <Aside>
          <h1>Yith</h1>
          <p
            style={{
              fontSize: "0.8333rem",
              lineHeight: "1.45em",
              letterSpacing: "0.01em",
            }}
          >
            A frontend tool that leverages IIIF manifests and interweaves them
            into flexible layouts.
          </p>
          <Nav>
            <ul>
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
                <a className="disabled">Interstitial</a>
              </li>
            </ul>
            <strong>Extensions</strong>
            <ul>
              <li>
                <a className="disabled">WordPress</a>
              </li>
              <li>
                <a className="disabled">Omeka S</a>
              </li>
            </ul>
            <hr />
            <strong>Examples</strong>
            <ul>
              <li>
                <a className="disabled">The Nez Perce</a>
              </li>
              <li>
                <a className="disabled">Five Impressions of Buddha</a>
              </li>
              <li>
                <a className="disabled">Odilon Redon (1840-1916)</a>
              </li>
            </ul>
          </Nav>
        </Aside>
        <Main>
          <Switch>
            <Route exact path="/">
              <AboutDocs />
            </Route>
            <Route path="/projection">
              <ProjectionDocs />
            </Route>
            <Route path="/presentation">
              <PresentationDocs />
            </Route>
          </Switch>
        </Main>
      </Wrapper>
    </Router>
  );
};

ReactDOM.render(<Docs />, document.getElementById("root"));
