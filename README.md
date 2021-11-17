![image](https://user-images.githubusercontent.com/7376450/142130947-905bab5b-308a-4b05-a2c2-e2e8b3ca095c.png)

# Yith

A frontend tool that leverages IIIF manifests and interweaves them into flexible layouts.

[**View Demo**](https://yith.dev/)

## Types

### Under Development

- **Presentation** - Showcase individual manifests or compare multiple in separate deep-zoom windows
- **Projection** - Provide an immersive guided tour driven by region targeted annotations

### Proposed

- **Progression** - Tell a narrative story walking end users through multiple manifests

## Usage

```shell
<Yith type="projection">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/193664/manifest.json" />
</Yith>
```

## Build

- [Hyperion Framework](https://github.com/digirati-labs/hyperion) by [@stephenwf](https://github.com/stephenwf) of [Digirati](https://digirati.com/)
- [Mirador](https://github.com/ProjectMirador/mirador)
- [Radix Primitives](https://www.radix-ui.com/docs/primitives)
- [Stitches](https://stitches.dev/)
