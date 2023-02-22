[![Checks](https://github.com/MerginMaps/docs/actions/workflows/checks.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/checks.yml)
[![Deploy DEV](https://github.com/MerginMaps/docs/actions/workflows/dist-dev.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/dist-dev.yml)
[![Status DEV](https://github.com/MerginMaps/docs/actions/workflows/status-dev.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/status-dev.yml)
[![Deploy PROD](https://github.com/MerginMaps/docs/actions/workflows/dist-prod.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/dist-prod.yml)
[![Status PROD](https://github.com/MerginMaps/docs/actions/workflows/status-prod.yml/badge.svg)](https://github.com/MerginMaps/docs/actions/workflows/status-prod.yml)

# Mergin Maps Documentation

Source code for documentation hosted on [merginmaps.com/docs](https://merginmaps.com/docs)

- [Staging/Dev deployment](https://dev.merginmaps.com/docs)
- [Production deployment](https://merginmaps.com/docs)

Use GitHub Pull Requests to propose changes, we will review and merge your changes!

- Modify content in [docs/src](./content) folder
- Check official [vuepress documentation](https://vuepress.vuejs.org/)
- Check the [Mergin Maps Documentation Guidelines](https://merginmaps.com/docs/misc/write-docs/)

<div><img align="left" width="45" height="45" src="https://raw.githubusercontent.com/MerginMaps/docs/main/src/.vuepress/public/slack.svg"><a href="https://merginmaps.com/community/join">Join our community chat</a><br/>and ask questions!</div>

# Development

 - Create Pull Request to `main` branch
 - If you have changed any anchors/deleted pages atc, update REDIRECTS file
 - Core Documentation team will review the Pull Request
 - Request will be merged to main and you can check it on [staging deployment](https://dev.merginmaps.com/docs)
 - After repository is tagged, it is going live on [live](https://merginmaps.com/docs)
 
## Release procedure
 
 - Double check that [staging deployment](https://dev.merginmaps.com/docs) is what you want
 - Create [Docs Release](https://github.com/MerginMaps/docs/releases)
 - Ask sys-admin to manually deploy REDIRECTS to njinx
 - Check that [live](https://merginmaps.com/docs) is what you want and announce the news on Slack
 
## Dynamic server (for local development)
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

### Error for nodejs 17

If you get `opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ]`, run
 ```bash
 export NODE_OPTIONS=--openssl-legacy-provider
 ```
 
 or on Windows
 ```bash
 set NODE_OPTIONS=--openssl-legacy-provider
 ```
  
 or downgrade `nodejs` to 16 or less. More here: https://github.com/webpack/webpack/issues/14532

# License

The Mergin Maps product documentation in the `src` are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under a [MIT license](LICENSE-CODE).
