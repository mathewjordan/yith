import React from "react";
import Yith from "./../../index";
import Prism from "prismjs";
import { Pre } from "../about";

export const InterstitialDocs: React.FC = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <h3>Interstitial</h3>
      <p>
        An interstitial provides a full width figure{" "}
        <code className="language-html">preview="interstitial"</code> and with
        the option to provide non-IIIF contextual information with a prop of{" "}
        <code className="language-html">text</code>. These are idealy utilized
        to break up the layout of the page as well as guide users towards the
        primary subject of a particular page.
      </p>

      <Yith
        type="projection"
        preview="interstitial"
        text="Quisque luctus diam lobortis c.1910"
      >
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/8991/manifest.json" />
      </Yith>

      <Pre>
        <code className="language-html">
          {`
/**
 * Preview of interstitial, with non-IIIF textual content
 */

<Yith
  type="projection"
  preview="interstitial"
  text="Quisque luctus diam lobortis c.1910"
>
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/8991/manifest.json" />
</Yith>
`}
        </code>
      </Pre>
    </>
  );
};
