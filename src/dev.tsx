import React, { FC } from "react";
import ReactDOM from "react-dom";
import Yith from "./index";

const Dev: FC = () => {
  return (
    <>
      <Yith type="presentation">
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/193664/manifest.json" />
      </Yith>

      <Yith type="presentation">
        <Yith.Content manifestId="https://iiif.stack.rdc.library.northwestern.edu/public/97/21/96/ff/-d/61/4-/4b/76/-9/d1/2-/80/e1/8f/1f/37/c9-manifest.json" />
      </Yith>

      <Yith type="presentation">
        <Yith.Content manifestId="https://iiif.stack.rdc.library.northwestern.edu/public/b7/7f/b6/58/-4/ac/f-/4f/58/-b/b2/7-/86/fd/f7/f3/4c/83-manifest.json" />
      </Yith>

      <Yith type="presentation">
        <Yith.Content manifestId="https://iiif.stack.rdc.library.northwestern.edu/public/8c/c2/49/76/-3/38/3-/40/7d/-9/f4/f-/85/9d/0c/b7/0a/8c-manifest.json" />
      </Yith>

      <Yith type="presentation">
        <Yith.Content manifestId="https://iiif.harvardartmuseums.org/manifests/object/295813" />
      </Yith>

      <Yith type="presentation">
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/144971/manifest.json" />
      </Yith>
    </>
  );
};

ReactDOM.render(<Dev />, document.getElementById("root"));

{
  /* 

// default to Canvas items[0]
<Yith type="presentation">
  <Yith.Manifest id={} />
</Yith>

// default to Canvas id
<Yith type="presentation">
  <Yith.Figure manifest={} canvas={} />
</Yith>

// projection sequence
<Yith type="projection">
  <Yith.Manifest manifest={}  canvas={} />
  <Yith.Figure manifest={} />
    <Yith.Caption annotation={} />
    <Yith.Caption annotation={} />
  <Yith.Figure manifest={} />
</Yith>

// progression sequence
<Yith type="progression">
  <Yith.Figure manifest={} canvas={} />
  <Yith.Figure manifest={} />
  <Yith.Figure manifest={} />
</Yith>

*/
}
