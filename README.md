[![Build test](https://github.com/MerginMaps/docs/actions/workflows/main.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/main.yml)
[![Check Spelling](https://github.com/MerginMaps/docs/actions/workflows/spellcheck.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/spellcheck.yml)
[![Check Broken Links](https://github.com/MerginMaps/docs/actions/workflows/brokenlinks.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/brokenlinks.yml)

# Mergin Maps Documentation

[Staging/Dev deployment](https://dev.d1qvlu9jr497xw.amplifyapp.com/docs)
[Production deployment](https://merginmaps.com/docs)

Source code for documentation hosted on [merginmaps.com/docs](https://merginmaps.com/docs)

- Modify content in [docs/content](docs/content) folder 
- Improve images or assets in [docs/static](docs/static) folder
- Update or modify [nuxtjs/content-docs-theme](https://content.nuxtjs.org) for styling

Use GitHub Pull Requests to propose changes, we will review queue typically next working day!

## Development Workflow

 - For new features coming in the next release create pull request to `dev` branch. 
 - For fixed to the existing documentation, you can do pull request to `main` branch

## Dynamic server (for development)
To change docs locally, run the server, open `http://localhost:3000/` in your browser and modify markdowns

```bash
cd merginmaps/docs/docs
yarn install
yarn dev
```

Tip: double-click on the page in the browser and edit the markdown in `http://localhost:3000/` deployment directly

## Static generation (for deployments)

To generate static HTML files, run 

```bash
cd merginmaps/docs/docs
yarn install
yarn generate
```

and see the result in `dist` folder

To deploy on AWS Amplify, see [amplify.yml](amplify.yml) config file used

## Dark Mode / Light Mode

Use css classes `light-img` or `dark-img`

e.g.
```
<a href='https://public.cloudmergin.com'><img alt='Use on the cloud' src='logo-light.svg' class="light-img" height="20" /></a>
<a href='https://public.cloudmergin.com'><img alt='Use on the cloud' src='logo-dark.svg' class="dark-img" height="20" /></a>
```

## Images 

 - Do not add `docs` prefix
 - Do not start with `/`, use relative path from `docs/static`

e.g. `![](images/cloudmergin.png` if the image is `docs/static/images/` folder on disk

## Reference other markdowns 
 - use relative path to the current file

e.g. `[](../mobile/othermarkdown.md)

## Translations (i18n)

see [i18n nuxtjs/content docs](https://content.nuxtjs.org/themes/docs#locales)

 - for new language, add it to `docs/docs/nuxt.config.js`
 - add new folder in `docs/docs/content/<lang>`

## Vue custom components

 - add your component to `docs/docs/components/MyComponent.vue`
 - use in markdown as `<template><MyComponent /></template>`

# Continuous Integration

## Spelling

- add false positives to `.wordlist.txt`
- sort and lowercase it before submitting

```bash
tr '[:upper:]' '[:lower:]' < .wordlist.txt > temp-wordlist.txt
cat temp-wordlist.txt | sort -u > .wordlist.txt
rm temp-wordlist.txt
```

## Broken links

you can manually run `./scripts/broken_links.bash` to check for any broken links

# License

The Mergin Maps product documentation in the `docs/content`and `docs/static` are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under a [MIT license](LICENSE-CODE).
