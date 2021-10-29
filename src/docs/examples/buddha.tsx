import React from "react";
import Yith from "./../../index";
import Prism from "prismjs";
import { Example } from "docs/about";

export const BuddhaDocs: React.FC = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <h2>Five Impressions of Buddha</h2>
      <Example>
        <div>
          <div>
            <p>
              Aenean quis odio ultricies, bibendum velit vitae, viverra eros.
              Duis egestas sapien vel tellus auctor maximus. Aenean non est
              hendrerit elit ullamcorper euismod ut et metus. Morbi id urna
              efficitur, semper tellus eget, tincidunt mauris. Nam sed aliquet
              est.{" "}
            </p>
            <p>
              Aenean quis odio ultricies, bibendum velit vitae, viverra eros.
              Duis egestas sapien vel tellus auctor maximus. Aenean non est
              hendrerit elit ullamcorper euismod ut et metus. Morbi id urna
              efficitur, semper tellus eget, tincidunt mauris. Nam sed aliquet
              est.{" "}
            </p>
          </div>
          <Yith type="presentation">
            <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/80547/manifest.json" />
          </Yith>
        </div>
        <div>
          <Yith type="projection">
            <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/204136">
              <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/204136/canvas/canvas-47459045" />
              <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/204136/canvas/canvas-47752272" />
            </Yith.Manifest>
          </Yith>
          <p>
            Nulla sed neque et arcu ultrices ullamcorper eu a justo. Suspendisse
            eros risus, iaculis tristique erat quis, vulputate posuere velit.
            Quisque vitae est efficitur, rutrum ipsum sed, fringilla ligula.
            Donec pulvinar auctor nulla. Donec ac lectus ut lorem luctus
            finibus.{" "}
          </p>
        </div>
        <div>
          <Yith type="presentation">
            <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/106634/manifest.json" />
          </Yith>
        </div>
      </Example>
    </>
  );
};
