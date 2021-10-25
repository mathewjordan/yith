import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Aside, AboutDocs, Main, Wrapper } from "docs/about";
import { ProjectionDocs } from "docs/projection";

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
              <Link to="/">About</Link>
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
            <Route exact path="/">
              <AboutDocs />
            </Route>
            <Route path="/projection">
              <ProjectionDocs />
            </Route>
            <Route path="/presentation">bye</Route>
          </Switch>
        </Main>
      </Wrapper>
    </Router>
  );
};

ReactDOM.render(<Docs />, document.getElementById("root"));
