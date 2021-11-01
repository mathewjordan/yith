import { Example, Pre } from "./about";
import React from "react";
import Yith from "./../index";
import Prism from "prismjs";

export const ProjectionDocs: React.FC = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <h3>Projection</h3>
      <Example>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          An immersive guided tour driven by region targeted annotations,
          canvases, and manifests. Inspired by{" "}
          <a href="https://exhibit.so/">Exhibit</a> and{" "}
          <a href="https://exhibit.so/">Storiiies</a>.
        </p>
        <ul>
          <li>Full screen modal deep-zoom experience.</li>
          <li>Step in and out of canvases and manifests to tell a story.</li>
          <li>Auto pan-zooming to xywh regions in annotation targets.</li>
        </ul>
      </Example>

      <h5>Multiple Manifests</h5>
      <Yith type="projection">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/8991/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/127644/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/25865/manifest.json" />
      </Yith>
      <Pre>
        <code className="language-html">
          {`
<Yith type="projection">
<Yith.Manifest id="https://api.artic.edu/api/v1/artworks/8991/manifest.json" />
<Yith.Manifest id="https://api.artic.edu/api/v1/artworks/127644/manifest.json" />
<Yith.Manifest id="https://api.artic.edu/api/v1/artworks/25865/manifest.json" />
</Yith>
`}
        </code>
      </Pre>

      <h5>Multiple Canvases</h5>
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

      <h5>Using Annotations</h5>
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
</Yith>
`}
        </code>
      </Pre>

      <h5>Complex Example</h5>
      <Yith type="projection">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/18979/manifest.json" />
        <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/169542">
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/169542/canvas/canvas-469446512" />
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/169542/canvas/canvas-469454932" />
        </Yith.Manifest>
        <Yith.Manifest id="https://yith.dev/fixtures/iiif/manifests/the-emperor-sailing.json">
          <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/the-emperor-sailing/canvas/1/annotations/1" />
          <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/the-emperor-sailing/canvas/1/annotations/2" />
          <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/the-emperor-sailing/canvas/1/annotations/3" />
        </Yith.Manifest>
      </Yith>

      <Pre>
        <code className="language-html">
          {`
<Yith type="projection">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/18979/manifest.json" />
  <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/169542">
    <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/169542/canvas/canvas-469446512" />
    <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/169542/canvas/canvas-469454932" />
  </Yith.Manifest>
  <Yith.Manifest id="https://yith.dev/fixtures/iiif/manifests/the-emperor-sailing.json">
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/the-emperor-sailing/canvas/1/annotations/1" />
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/the-emperor-sailing/canvas/1/annotations/2" />
    <Yith.Annotation id="https://yith.dev/fixtures/iiif/manifests/the-emperor-sailing/canvas/1/annotations/3" />
  </Yith.Manifest>
</Yith>
`}
        </code>
      </Pre>
    </>
  );
};
