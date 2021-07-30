# Mergin'Maps Documentation

Source code for documentation hosted on [merginmaps.com/docs](https://merginmaps.com/docs)

- Modify content in [docs/content](docs/content) folder 
- Improve images or assests in [docs/static](docs/static) folder
- Update or modify [nuxtjs/content-docs-theme](https://content.nuxtjs.org) for styling

Use GitHub Pull Requests to propose changes, we will review queue typically next working day!

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

To deploy on AWS Amplify, use this build settings 

```yaml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - yarn install
        build:
          commands:
            - yarn run generate
      artifacts:
        baseDirectory: dist
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
    appRoot: docs
```

# License

The Mergin'Map product documentation in the `docs/content`and `docs/static` are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under a [MIT license](LICENSE-CODE).
