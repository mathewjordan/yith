import { Pre } from "./about";
import React, { useEffect } from "react";
import Yith from "./../index";

export const PresentationDocs: React.FC = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <h3>Presentation</h3>
      <h5>Single Manifest</h5>
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

      <h5>Multiple Manifests</h5>
      <Yith type="presentation">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21090/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21101/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/14813/manifest.json" />
      </Yith>
      <Pre>
        <code className="language-html">
          {`
<Yith type="presentation">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21090/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21101/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/14813/manifest.json" />
</Yith>
`}
        </code>
      </Pre>
    </>
  );
};
