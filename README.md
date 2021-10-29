# Yith

[![Netlify Status](https://api.netlify.com/api/v1/badges/c7218204-0b13-42f3-a62f-bdd2102f2b79/deploy-status)](https://app.netlify.com/sites/yith/deploys)

A frontend tool that leverages IIIF manifests and interweaves them into flexible layouts.

## Types

### Under Development

- **Presentation** - Showcase individual manifests or compare multiple in separate deep-zoom windows
- **Projection** - Provide an immersive guided tour driven by region targeted annotations

### Proposed

- **Progression** - Tell a narrative story walking end users through multiple manifests

## Usage

```shell
<Yith type="presentation">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/193664/manifest.json" />
</Yith>
```

## Build

- [Hyperion Framework](https://github.com/digirati-labs/hyperion) by [@stephenwf](https://github.com/stephenwf) of [Digirati](https://digirati.com/)
- [Mirador](https://github.com/ProjectMirador/mirador)
- [Radiux Primitives](https://www.radix-ui.com/docs/primitives)
- [Stitches](https://stitches.dev/)
