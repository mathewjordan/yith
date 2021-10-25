import React from "react";
import ReactDOM from "react-dom";
import Yith from "./index";

const Dev: React.FC = () => {
  return (
    <>
      <h1>Yith</h1>
      <h2>Projection</h2>
      <p>Using Annotations</p>
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

      <p>Using Canvases</p>
      <Yith type="projection">
        <Yith.Manifest id="https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json">
          <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/33ce3177-0fdc-44fd-8325-24a298322023.json" />
          <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/51cc30d8-0404-49fc-893e-c44c3e4a94f8.json" />
          <Yith.Canvas id="https://iiif.bodleian.ox.ac.uk/iiif/canvas/cb0ae5a2-e985-48ef-8318-3cab784ad24f.json" />
        </Yith.Manifest>
      </Yith>

      <h2>Presentation</h2>
      <Yith type="presentation">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
      </Yith>

      <Yith type="presentation">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/79000/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/90291/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/79355/manifest.json" />
      </Yith>
    </>
  );
};

ReactDOM.render(<Dev />, document.getElementById("root"));
