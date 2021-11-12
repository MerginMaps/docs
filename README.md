[![Build Dist](https://github.com/MerginMaps/docs/actions/workflows/main.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/main.yml)
[![Markdown Checks](https://github.com/MerginMaps/docs/actions/workflows/checks.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/checks.yml)

# Mergin Maps Documentation

 - [Staging/Dev deployment](https://dev.merginmaps.com/docshttps://dev.merginmaps.com/docs)
 - [Production deployment](https://merginmaps.com/docs)

Source code for documentation hosted on [merginmaps.com/docs](https://merginmaps.com/docs)

- Modify content in [docs/src](./content) folder
- Check official [vuepress documentation](https://vuepress.vuejs.org/)

Use GitHub Pull Requests to propose changes, we will review and merge your changes!

## Development Workflow

 - For new features coming in the next release create pull request to `dev` branch. 
 - For fixed to the existing documentation, you can do pull request to `main` branch

## Dynamic server (for development)
To change docs locally, run the server, open `http://localhost:8080/` in your browser and modify markdowns

```bash
cd merginmaps/docs
yarn install
yarn dev
```

If `yarn install` fails with *ERROR: [Errno 2] No such file or directory: 'install'* then [check out this page](stackoverflow.com/questions/46013544/yarn-install-command-error-no-such-file-or-directory-install).

## Static generation (for deployments)

To generate static HTML files, run 

```bash
cd merginmaps/docs
yarn install
yarn build
```

and see the result in `dist` folder

## Documentation Guild lines

## Tip/Warning/Info/Note box

```
::: warning 
My warning 
:::
```

other options: tip (green), details (gray & expandable), warning (yellow), danger (red)

custom title 
```
::: danger STOP
Danger zone, do not proceed
:::
```

## Emoji

[list of emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

```
:tada:
```

## Labels/Badges

type is one of "tip"|"warning"|"error", see [vuepress docs](https://v1.vuepress.vuejs.org/guide/using-vue.html#badge)

```<Badge text="beta" type="warning"/>```

## Images


### Preparation

* Any image prepared should have an associated .xcf file containing the original, full resoluion image
* Screenshtos of QGIS should be taken with the window sized at 1024x768. [Sizer](http://www.brianapps.net/sizer/#:~:text=Sizer%20is%20a%20freeware%20utility,to%20an%20exact%2C%20predefined%20size.) is good for this task.
* Consistent buttons / toolbars in QGIS
* Windows, not linux
* Making dialogs as small as possible without scrollbars or other bad visuals
* Highlighting
	* New layer, black, called Black with 66% opacity
	* Tightly select what you want to highlight
	* Grow selection by:
		* Desktop: 3px
		* Mobile: 24px
	* Delete hole from Black layer
	* Add a layer called Red, transparent, 100% opacity
	* Stroke the selection with red, at width:
		* Desktop: 3px
		* Mobile: 12px
	


### Referencing

 - Do not add `docs` prefix (base)
 - Place images next to the markdown files that reference them
 - Do not start with `/`, use relative paths

e.g. `![](./cloudmergin.png)` if the image is in the same folder as your mardown file
 
 - For global pictures/assets placed in `src/.vuepress/public` do not prefix slash

e.g. `![](mergin.svg)`

## Table of Contents 

use `[[toc]]` in markdown 

## Links 

### Reference other markdowns 

 - use relative path to the current file
 - add `.md` extension
 - use `#` for anchors

e.g. `[see this](../web/otherfile.md#permissions)`

## Custom Components 

see `src/.vuepress/components`

 - add your component to `src/.vuepress/components/MyComponent.vue`
 - use in markdown as `<MyComponent></MyComponent>` or `<MyComponent />`

### Reference QGIS Help pages

Use `<QGISHelp>` component, e.g. `<QGISHelp ver="3.10" link="user_docs/intro.html" text="See QGIS Help page">`

### Embed YouTube content

Use `<YouTube>` component, e.g. `<YouTube id="DQXrINUqiFI" />`

### FIXME: Document how search indexes all H tags

### Reference Mergin project 

Use `<MerginMapsProject>` component, e.g. `<MerginMapsProject id="lutraconsulting/test_forms" />`

### Show Input App Google/Apple badges for download

Use `<AppDownload>` component, e.g. `<AppDownload />`

## Translations (i18n)

see [vuepress docs](https://v1.vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config)

not yet implemented

# License

The Mergin Maps product documentation in the `docs/content`and `docs/static` are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under a [MIT license](LICENSE-CODE).

# PROBLEMS

* Anchors don't work
* elements in anchors don't show
* elements also don't work in TOC
