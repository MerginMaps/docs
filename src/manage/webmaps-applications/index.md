---
description: Mergin Maps webmaps can be customised by integrating map-script to build custom applications, as experimental feature.
---

# Building Webmap Applications <Badge text="Experimental 🧪" />

::: warning Experimental feature 🧪
Webmap applications is in experimental phase and its availability and functionality might change in the future. We are actively working on making these features easier to use.
:::

Webmaps behavior can be customized to your organisation specific needs via `map-script.js` file to build a webmap application.
This is a javascript file that runs with your map and lets you add custom controls and behaviour on top of the built-in OpenLayers map. The script runs in both the project map view and in shared/embedded public maps. 

It has reference to the map itself, API and other components to allow further customization, including WMS and WFS OGC API (read-only).

The code can reference `MerginMaps` global object as:
 - `MerginMaps.getMap()` - the OpenLayers `Map` instance
 - `MerginMaps.getMapElement()` - the map container DOM element

If your project is shared via URL, you can use the URL to access WFS and WMS endpoints in the script like this:
 - WFS - `https://app.merginmaps.com/app/ogc/<map_link>?SERVICE=WFS...`
 - WMS - `https://app.merginmaps.com/app/ogc/<map_link>?SERVICE=WMS...`

Map script must be placed in your project root folder and named `map-script.js`. Members with writer and higher permission can update the script.

## Helpful code snippets

OpenLayers submodules imports from CDN
```js
import TileLayer from 'https://esm.sh/ol@10.8.0/layer/Tile'
import { fromLonLat } from 'https://esm.sh/ol@10.8.0/proj'
import XYZ from 'https://esm.sh/ol@10.8.0/source/XYZ'
```

Add custom XYZ layer (e.g. a basemap)
```js
const layer = new TileLayer({
  name: 'My layer name',
  source: new XYZ({
    url: '...',
    attributions: '...',
  })
})

MerginMaps.getMap().addLayer(layer)
```

## Examples

OpenLayers API availability opens a wide range of possibilities. Here we list a couple of examples of what you can achieve.


| Example project | Map view | Map-script file |
|-------|------|-------| 
| Light basemap example | [View map](https://app.merginmaps.com/maps/2kkKbiNZNPqd2_rogueUJMvRItE?cx=-1.795099776978127&cy=51.78119919095403&cz=13) | [map-script.js](https://app.merginmaps.com/projects/MerginMaps-Showcase/AS%20w%20light/tree?file_path=map-script.js) |
| Example with measurement tools, address search and geolocation | [View map](https://app.merginmaps.com/maps/abPOz6uw9A7DeOeq2OTqIbJMtpg) | [map-script.js](https://app.merginmaps.com/projects/MerginMaps-Showcase/AS%20w%20measure/tree?file_path=map-script.js) |



## Custom webmap app with AI coding agent

If you are using any AI coding agent, this is an example prompt that can help you start off the development of custom application. Fill in the **"What I want"** section.

```
You are building a custom **map script** for a Mergin Maps web map project: a
standalone JavaScript ES module that runs on top of the project's OpenLayers map.

## What I want
[DESCRIBE YOUR FEATURE — e.g. "a button that centres the map on my GPS location
and drops a marker", "a panel listing every feature in layer X", "a tool to
measure distance and area".]

## Runtime environment
- The script runs inside a sandboxed `srcdoc` iframe embedded in the Mergin Maps
  map page. A global `MerginMaps` object gives you the map:
    - `MerginMaps.getMap()`        → the OpenLayers `Map` instance
    - `MerginMaps.getMapElement()` → the map container DOM element
- Import OpenLayers submodules from a CDN, e.g.
  `import Overlay from 'https://esm.sh/ol@10.8.0/Overlay'`. Pin the OpenLayers
  version your Mergin Maps uses (10.8.0 at the time of writing). No build step.

Project's layers are served over OGC here:
- WFS: `${parent.location.origin}/app/ogc/<map_link>?SERVICE=WFS...`
- WMS: `${parent.location.origin}/app/ogc/<map_link>?SERVICE=WMS...`
Note: `<map_link>` is generated only once the map is made public ("Share map" in the UI). If there is no map link, ask me to publish the map first. Read the map-link from the `GET app/projects/<project-id>/map-links` API endpoint.

## Guidelines for this environment
- Build UI with `document.createElement` and set styles via
  `Object.assign(el.style, {...})`. Append it to the map element with
  `position: absolute` and a high `z-index`.
- Do not inject `<style>` tags or rely on a stylesheet (`document.head` may be null) — use inline styles, and the Web Animations API (`el.animate(...)`) for animation.
- `document.getElementById` and `display:flex/grid` set via `innerHTML` are
  unreliable here — always create nodes imperatively and keep direct references.
- To draw geometry reliably above the map's existing layers, append your own
  `<canvas>` to the map element and redraw it on `map.on('postrender', ...)`.
- Attach keyboard listeners to the map element (not `document`) and call
  `mapElement.focus()` when your tool needs key input.
- If the built-in click-to-identify popup interferes with a click-based tool,
  suppress `singleclick`/`click` while your tool is active.

## Deliverable & deployment
- Deliver ONE self-contained file named exactly `map-script.js` — the map only loads a file with that name. Place it in the Mergin project's root folder.
- Deploy by syncing the project with the `mergin-client` Python library (CLI).

## Verify before finishing
1. Deploy the script (sync the project).
2. If you have browser access, open the project map in at
   `https://<your-mergin-server>/projects/<workspace>/<project>/map`.
3. Confirm your control appears and behaves as described, and check the browser console for errors. Iterate until it works and the console is clean.

```

We are keen to see what you built! Please do not hesitate to share your results with us on our [community](https://merginmaps.com/community/join)!
