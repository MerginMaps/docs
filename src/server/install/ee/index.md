---
description: Mergin Maps Enterprise Edition enhanced features are only available on specific Docker images on our private Docker Hub repository. Here is how to retrieve them.
---

# Download your Mergin Maps EE images

During your <EnterprisePlatformName /> onboarding you'll be provided a personal token (PAT) to access Lutra's private Docker Hub where we host Docker images.

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

## AWS ECR Images

::: warning 
During this transition phase, the AWS ECR repository will still be maintained giving our costumers the ability to update and time to adapt.
Therefore, if you still have the AWS ECR repository configuration implemented, you can still perform:
:::

```bash
  docker pull 433835555346.dkr.ecr.eu-west-1.amazonaws.com/mergin/mergin-ee-back:2025.7.3
  docker pull 433835555346.dkr.ecr.eu-west-1.amazonaws.com/mergin/mergin-ee-frontend:2025.7.3  
```

::: note 
Please note that you need to tag the image after this step in order to be conformant with the main deployment workflow.
:::

```bash
  docker image tag 433835555346.dkr.ecr.eu-west-1.amazonaws.com/mergin/mergin-ee-back:2025.7.3 lutraconsulting/merginmaps-backend-ee:2025.7.3
  docker image tag 433835555346.dkr.ecr.eu-west-1.amazonaws.com/mergin/mergin-ee-front:2025.7.3 lutraconsulting/merginmaps-frontend-ee:2025.7.3
```