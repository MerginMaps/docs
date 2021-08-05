[![Build test](https://github.com/MerginMaps/docs/actions/workflows/main.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/main.yml)
[![Check Spelling](https://github.com/MerginMaps/docs/actions/workflows/spellcheck.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/spellcheck.yml)
[![Check Broken Links](https://github.com/MerginMaps/docs/actions/workflows/brokenlinks.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/brokenlinks.yml)

# Mergin Maps Documentation

[Staging/Dev deployment](https://dev.d1qvlu9jr497xw.amplifyapp.com/docs)
[Production deployment](https://merginmaps.com/docs)

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

## Static generation (for deployments)

To generate static HTML files, run 

```bash
cd merginmaps/docs
yarn install
yarn build
```

and see the result in `dist` folder

To deploy on AWS Amplify, see [amplify.yml](amplify.yml) config file used

## Documentation Guild lines

## Tip/Warning/Info/Note box

```
::: warning 
My warning 
:::
```

other options ::: tip

## Labels/Badges

type is one of "tip"|"warning"|"error", see [vuepress docs](https://v1.vuepress.vuejs.org/guide/using-vue.html#badge)

```<Badge text="beta" type="warning"/>```

## Images 

 - Do not add `docs` prefix (base)
 - Place images next a markdown file that uses it  
 - Do not start with `/`, use relative paths

e.g. `![](./cloudmergin.png` if the image is in the same folder as your mardown file

## Embed YouTube content

Use `<YouTube>` component, e.g. `<YouTube id="DQXrINUqiFI"></YouTube>`

## Reference other markdowns 

 - use relative path to the current file
 - add `.md` extension
 - use `#` for anchors

e.g. `[see this](../web/otherfile.md#permissions)`

e.g. `[](../mobile/othermarkdown.md)

## Translations (i18n)

see [vuepress docs](https://v1.vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config)


## Vue custom components

 - add your component to `src/.vuepress/components/MyComponent.vue`
 - use in markdown as `<MyComponent></MyComponent>` or `<MyComponent />`

# License

The Mergin Maps product documentation in the `docs/content`and `docs/static` are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under a [MIT license](LICENSE-CODE).
