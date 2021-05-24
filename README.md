# Yith

[![buddy pipeline](https://app.buddy.works/utk-libraries/yith/pipelines/pipeline/326439/badge.svg?token=a08d633e5c643d3691ca9044dffdb440f63f3a962084d29bf363b91177438c2b "buddy pipeline")](https://app.buddy.works/utk-libraries/yith/pipelines/pipeline/326439) [![Netlify Status](https://api.netlify.com/api/v1/badges/15c8004a-e6f4-46c8-82a5-d0cd79f25e17/deploy-status)](https://app.netlify.com/sites/yith/deploys)

A frontend tool that leverages IIIF manifests and interweaves them into flexible layouts. Yith parses the initial HTML structure and renders a React.js based presentation wrapped around a Mirador 3 viewer for deep zoom capability, annotations, and the delivery of additonal metadata.

[View Demo](https://yith.netlify.app)

## Limitations

- Yith is a proof of concept and should net yet be used for production sites.
- Yith currently only works with IIIF Presentation 3.0 API manifests. 2.1 and 2.0 support will be coming soon.
- Yith is optimized for usage with manifests where the initial index of `items` in the `body` is of `"type": "Image"`.


## Components

### Projection
The Projection component presents an immersive modal display with the ability for a user to navigate through manifests. Projections are hidden by default and expanded using a toggle.
#### Multiple Manifests
```
<div class="yith yith-projection" id="flowers-projection" data-mode="projection">
    <a class="yith-expand" href="#">Heilman's Flora</a>
    <div class="yith-structure">
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/heilman/1004"></figure>
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/heilman/1010"></figure>
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/heilman/1011"></figure>
    </div>
</div>
```

#### Annotations on a Manifest
```
<div class="yith yith-projection" id="tacoma-projection" data-mode="projection">
    <a class="yith-expand" href="#">Tacoma, c.1890</a>
    <div class="yith-structure">
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma.json">
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma/canvas/1/annotations/1">
                <strong>c.1890, Tacoma, Wash.</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma/canvas/1/annotations/15">
                <strong>East Tacoma</strong>
                <p>Paellus tincidunt nec ante id mollis. Mauris quis molestie ipsum. Donec consectetur convallis eros.</p>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma/canvas/1/annotations/8">
                <strong>Industry of the Puget Sound</strong>
                <p>Mauris quis molestie ipsum. Donec consectetur convallis eros, vitae ornare dui.</p>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma/canvas/1/annotations/14">
                <strong>Pacific Ave.</strong>
                <p>Velit est vulputate ante, non porta metus. Sed pretium mattis tellus ut pharetra. Mauris quis molestie ipsum. Donec consectetur convallis eros, vitae ornare dui.</p>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma/canvas/1/annotations/13">
                <strong>Metal and Alloy Processing</strong>
                <p>Sed pretium mattis tellus ut pharetra. Donec consectetur convallis eros, vitae ornare dui.</p>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma/canvas/1/annotations/12">
                <strong>Clothing Manufacturing</strong>
                <p>Mattis tristique libero, non porta metus. Sed pretium mattis tellus ut pharetra.Donec consectetur convallis eros, vitae ornare dui.</p>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma/canvas/1/annotations/11">
                <strong>Transportation to Seattle</strong>
                <p>Donec consectetur convallis eros, vitae ornare dui. Proin in tristique libero, non porta metus. </p>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/static/iiif/uw-maps-68-tacoma/canvas/1/annotations/10">
                <strong>Commencement Bay</strong>
                <p>Mauris quis molestie ipsum. Donec consectetur convallis eros, vitae ornare dui.</p>
            </figure>
        </figure>
    </div>
</div>
```

### Chronology
A Chrononology component renders a fully responsive vertical timeline with manifests interweaved into its structure. Manifests can be expanded onto a modal with an embedded Miradror 3 viewer for deep zoom capability, additional metadata, and annotations. 
```
<div class="yith yith-chronology" id="galston-chronology" data-mode="chronology">
    <div class="yith-structure">
        <span>1900</span>
        <span>1901</span>
        <span class="yith-date">1902</span>
        <span class="yith-emblem">1902</span>
        <div class="yith-manifest"
             data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/710"></div>
        <span>1903</span>
        <span>1904</span>
        <span>1905</span>
        <span>1906</span>
        <span>1907</span>
        <span class="yith-date">1908</span>
        <span class="yith-emblem">1908</span>
        <div class="yith-manifest"
             data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703"
             data-region="1050,600,2000,1400"
             data-autozoom="true"></div>
        <span>1909</span>
        <span>1910</span>
        <span>1911</span>
    </div>
</div>
```
