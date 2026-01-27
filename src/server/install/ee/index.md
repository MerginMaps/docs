---
description: Mergin Maps Enterprise Edition enhanced features are only available on specific Docker images on our private Docker Hub repository. Here is how to retrieve them.
---

# Download your Mergin Maps EE images

During your <EnterprisePlatformName /> onboarding you'll be provided a personal token (PAT) to access Lutra's private Docker Hub were we host Docker images.

Once you receive it you can perform Docker login in two ways.

## Docker login from CLI

```bash
    docker login -u ee-support@merginmaps.com
    
    i Info → A Personal Access Token (PAT) can be used instead.
         To create a PAT, visit https://app.docker.com/settings
         
         
    Password:
```
Once you are prompted to fill in the password, you can type the provided token during onboarding.

Alternatively, you can pass the token via `--password-stdin`, although it's not safe to keep your token on a plain text file.

```bash
  cat ~/my_token.txt | docker login -u ee-support@merginmaps.com --password-stdin
```

## Credential stores

Please follow official Docker documentation on how to use [credential stores](https://docs.docker.com/reference/cli/docker/login/#credential-stores)

## Docker Pull

After login, please confirm you can pull the images.
```bash
  docker pull lutraconsulting/merginmaps-backend-ee:2025.7.3
  docker pull lutraconsulting/merginmaps-frontend-ee:2025.7.3  
```
*Please note the correct/latest version you want to pull from the available <GitHubRepo id="MerginMaps/server/releases" desc="releases" />