import React from "react";
import Yith from "./../../index";
import Prism from "prismjs";
import { Pre } from "../about";

export const FigureDocs: React.FC = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <h3>Figure</h3>
      <p>
        Figure is the default preview for all yith components. It does not need
        to be set, though may be set explicitly with prop of{" "}
        <code className="language-html">preview="figure"</code>. Each manifest
        within Yith components will be represented by a figure. In multicanvas
        manifests, the initial array item under `items` will eb the default
        canvas.
      </p>

      <Yith type="projection" preview="figure">
        <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/303703" />
      </Yith>

      <Pre>
        <code className="language-html">
          {`
/**
 * Explicitly propped preview of Figure
 */            
<Yith type="presentation" preview="figure">
  <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/303703" />
</Yith>


/**
 * Figure is the default preview and is not required
 */            
<Yith type="presentation">
  <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/303703" />
</Yith>
`}
        </code>
      </Pre>
    </>
  );
};
