import { Anchor, Example, Pre } from "./about";
import React from "react";
import Yith from "./../index";
import Prism from "prismjs";

export const ProjectionDocs: React.FC = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Anchor id="projection" />
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
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/129849/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/8980/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/8987/manifest.json" />
      </Yith>
      <Pre>
        <code className="language-html">
          {`
/**
 * Three unique manifests representing works by Vasily Kandinsky
 */    
 
<Yith type="projection">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/129849/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/8980/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/8987/manifest.json" />
</Yith>
`}
        </code>
      </Pre>

      <h5>Multiple Canvases</h5>
      <Yith type="projection">
        <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/55652">
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724207" />
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724210" />
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724213" />
          <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724214" />
        </Yith.Manifest>
      </Yith>
      <Pre>
        <code className="language-html">
          {`
/**
 * A single manifest with specific canvases curated
 */

<Yith type="projection">
  <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/55652">
    <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724207" />
    <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724210" />
    <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724213" />
    <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/55652/canvas/canvas-18724214" />
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
/**
 * A single manifest with specific annotations curated
 */

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
/**
 * Three manifests with mixed canvases and annotations curated
 */

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
