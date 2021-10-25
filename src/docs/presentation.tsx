import { Pre } from "./about";
import React from "react";
import Yith from "./../index";

export const PresentationDocs: React.FC = () => {
  return (
    <>
      <h2>Presentation</h2>
      <h3>Single Manifest</h3>
      <Yith type="presentation">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
      </Yith>

      <Pre>
        <code className="language-html">
          {`
<Yith type="presentation">
    <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
</Yith>
`}
        </code>
      </Pre>

      <h3>Multiple Manifests</h3>
      <Yith type="presentation">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21090/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21101/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/14813/manifest.json" />
      </Yith>
      <Pre>
        <code className="language-html">
          {`
<Yith type="presentation">
    <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
    <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
    <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
</Yith>
`}
        </code>
      </Pre>
    </>
  );
};
