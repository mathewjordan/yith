import React from "react";
import ReactDOM from "react-dom";
import Yith from "./index";

const manifest: string =
  "https://iiif.stack.rdc.library.northwestern.edu/public/97/21/96/ff/-d/61/4-/4b/76/-9/d1/2-/80/e1/8f/1f/37/c9-manifest.json";

const Dev: React.FC = () => {
  return (
    <>
      <Yith type="presentation">
        <Yith.Figure manifest={manifest} />
      </Yith>

      <Yith type="presentation">
        <Yith.Figure manifest={manifest} />
      </Yith>

      <Yith type="projection">
        <Yith.Figure manifest={manifest} />
        <Yith.Figure manifest={manifest} />
        <Yith.Figure manifest={manifest} />
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
