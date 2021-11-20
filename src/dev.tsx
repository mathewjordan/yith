import React from "react";
import ReactDOM from "react-dom";
import Yith from "./index";

const App: React.FC = () => {
  return (
    <>
      <Yith type="presentation">
        <Yith.Collection id="https://api.artic.edu/api/v1/artworks/25865/manifest.json" />
      </Yith>
      <Yith type="presentation">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/25865/manifest.json" />
        <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/299837" />
      </Yith>
      <Yith type="projection">
        <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/55652">
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724207" />
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724210" />
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724213" />
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724214" />
        </Yith.Manifest>
      </Yith>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
