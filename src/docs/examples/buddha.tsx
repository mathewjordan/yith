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
      <h3>Six Impressions of Buddha</h3>
      <Example>
        <div>
          <div>
            <p>
              Aenean quis odio ultricies, bibendum velit vitae, viverra eros.
              Duis egestas sapien vel tellus auctor maximus. Donec pulvinar
              auctor nulla. Donec ac lectus ut lorem luctus finibus. Aenean non
              est hendrerit elit ullamcorper euismod ut et metus. Morbi id urna
              efficitur, semper tellus eget, tincidunt mauris. Nam sed aliquet
              est.{" "}
            </p>
            <p>
              Aenean quis odio ultricies, bibendum velit vitae, viverra eros.
              Duis egestas sapien vel tellus auctor maximus. Aenean non est
              hendrerit elit ullamcorper euismod ut et metus.Curabitur id turpis
              sed magna rhoncus sagittis. Morbi id urna efficitur, semper tellus
              eget, tincidunt mauris. Nam sed aliquet est.{" "}
            </p>
          </div>
          <Yith type="presentation">
            <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/238149" />
          </Yith>
        </div>
        <div style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <Yith type="presentation" style={{ marginTop: "1rem" }}>
            <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/80547/manifest.json" />
          </Yith>
          <div style={{ marginTop: "-1rem" }}>
            <p>
              Nulla sed neque et arcu ultrices ullamcorper eu a justo.
              Suspendisse eros risus, iaculis tristique erat quis, vulputate
              posuere velit. Quisque vitae est efficitur, rutrum ipsum sed,
              fringilla ligula. Donec pulvinar auctor nulla. Donec ac lectus ut
              lorem luctus finibus.{" "}
            </p>
            <p>
              Mauris vitae sodales neque, id ullamcorper libero. Curabitur eu
              blandit elit. Sed metus est, elementum eu eros sed, porta mattis
              lorem. Nulla at turpis a tortor volutpat rhoncus. Aenean nulla
              felis, finibus vitae augue in, porta tristique sapien. Curabitur
              id turpis sed magna rhoncus sagittis. Vivamus sit amet euismod
              massa. Aliquam lacinia dui eget aliquet euismod.{" "}
            </p>
            <p>
              Maecenas molestie a ipsum vitae sollicitudin. Sed consectetur,
              lorem vitae finibus rutrum, lectus odio egestas erat, et suscipit
              urna odio sit amet massa. In eget sodales neque, in posuere
              tortor. Suspendisse scelerisque elit orci, a imperdiet ex egestas
              in.
            </p>
            <p>
              Nulla sed neque et arcu ultrices ullamcorper eu a justo.
              Suspendisse eros risus, iaculis tristique erat quis, vulputate
              posuere velit. Quisque vitae est efficitur, rutrum ipsum sed,
              fringilla ligula. Donec pulvinar auctor nulla. Donec ac lectus ut
              lorem luctus finibus.{" "}
            </p>
          </div>
        </div>

        <Yith
          type="projection"
          preview="interstitial"
          text="Quisque luctus diam lobortis c.1910"
        >
          <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/204136">
            <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/204136/canvas/canvas-47459045" />
            <Yith.Canvas id="https://iiif.harvardartmuseums.org/manifests/object/204136/canvas/canvas-47752272" />
          </Yith.Manifest>
        </Yith>

        <p>
          Mauris vitae sodales neque, id ullamcorper libero. Curabitur eu
          blandit elit. Sed metus est, elementum eu eros sed, porta mattis
          lorem. Nulla at turpis a tortor volutpat rhoncus. Aenean nulla felis,
          finibus vitae augue in, porta tristique sapien. Curabitur id turpis
          sed magna rhoncus sagittis. Vivamus sit amet euismod massa. Aliquam
          lacinia dui eget aliquet euismod.{" "}
        </p>
        <p style={{ paddingBottom: "2rem" }}>
          Maecenas molestie a ipsum vitae sollicitudin. Sed consectetur, lorem
          vitae finibus rutrum, lectus odio egestas erat, et suscipit urna odio
          sit amet massa. In eget sodales neque, in posuere tortor. Suspendisse
          scelerisque elit orci, a imperdiet ex egestas in.
        </p>

        <Yith type="projection">
          <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/144397/manifest.json" />
          <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/26811/manifest.json" />
          <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/25318/manifest.json" />
        </Yith>

        <div>
          <div>
            <p>
              Mauris vitae sodales neque, id ullamcorper libero. Curabitur eu
              blandit elit. Sed metus est, elementum eu eros sed, porta mattis
              lorem. Nulla at turpis a tortor volutpat rhoncus. Aenean nulla
              felis, finibus vitae augue in, porta tristique sapien. Curabitur
              id turpis sed magna rhoncus sagittis. Vivamus sit amet euismod
              massa. Aliquam lacinia dui eget aliquet euismod.{" "}
            </p>
            <p>
              Maecenas molestie a ipsum vitae sollicitudin. Sed consectetur,
              lorem vitae finibus rutrum, lectus odio egestas erat, et suscipit
              urna odio sit amet massa. In eget sodales neque, in posuere
              tortor. Suspendisse scelerisque elit orci, a imperdiet ex egestas
              in.
            </p>
          </div>
        </div>
      </Example>
    </>
  );
};
