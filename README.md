# Yith

A frontend tool that leverages IIIF manifests and interweaves them into flexible layouts. 

## Types

- **Presentation** - Showcase individual manifests or compare multiple in seperate deep-zoom windows
- **Progression** - Tell a narrative story walking end users through multiple manifests
- **Projection** - Provide an immersive guided tour driven by region targeted annotations

## Usage
```shell
<Yith type="presentation">
  <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/193664/manifest.json" />
</Yith>
```

## Build

- [Hyperion Framework](https://github.com/digirati-labs/hyperion) by [@stephenwf](https://github.com/stephenwf) of [Digirati](https://digirati.com/)
- [Mirador](https://github.com/ProjectMirador/mirador)
- [Radiux Primitives](https://www.radix-ui.com/docs/primitives)
- [Stitches](https://stitches.dev/)
