# Install

Installation guide will help you to install your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink /> to the latest server version. The main Cloud <DashboardLink desc="Mergin Maps Server"/> is always up-to-date and managed by <MainPlatformName /> team. Read more about server platforms in [overview article](../)

[[toc]]


## Installation System Requirements

We recommend using a dedicated host machine with 8 GB of memory. The requirements for CPU and persistent storage depend largely on the frequency of project updates and the anticipated size of the data you expect to store respectively.

## Mergin Maps CE Docker Images
<ServerType type="CE" />

The <CommunityPlatformName /> images are stored on publicly accessible <DockerHubLink id="u/lutraconsulting" desc="Lutra Consulting's Docker" />.

Follow the deployment guidelines to install and configure it.

## Mergin Maps EE Docker Images
<ServerType type="EE" />


The <EnterprisePlatformName /> enhanced features are only available on specific Docker images stored on Lutra Consulting's private AWS repository. To get access, you need your contract and licence from our <MerginMapsEmail id="sales" desc="sales team" />. 

Afterwards, you can follow [this guide](./ee/) to retrieve your <EnterprisePlatformName /> images.

::: warning Enable <MainPlatformName /> Telemetry
Make sure you follow deployment guidelines to <b>ensure any firewalls in your infrastructure are configured to allow the [`call-home`](../administer/#telemetry-service) functionality to send usage data</b>.
:::

## Deployment

Follow these steps to run a local <MainPlatformName /> instance.

Clone the <MainPlatformName /> github repository locally or download <GitHubRepo id="MerginMaps/server/blob/master/deployment/" desc="deployment folder" />.
```bash
$ git clone git@github.com:MerginMaps/server.git
```

Locate yourself on the proper <MainPlatformName /> edition.
```shell
# For community edition
cd deployment/community

# For enterprise edition
cd deployment/enterprise
```

### Setup environment
​
Now tweak deployment settings by modifying environment variables. You have to fix all variables marked as required in this list of [environment variables](../environment/). However, before doing that you would need to setup environment variables in `.prod.env` file.
If you have not created this file yet, please do so from the provided `.env.template` file.

```shell
cp .env.template .prod.env
```

### Start docker containers

Provided that `docker` and `docker-compose` are installed on your host, running <MainPlatformName /> stack should be as simple as running `docker-compose`.

Once configured, you can run:
```shell
# For community edition
$ mkdir -p mergin_db # or wherever you set it to be
$ sh ../common/set_permissions.sh projects
$ docker-compose -f docker-compose.yml up -d

# For enterprise edition
$ mkdir -p mergin-db-enterprise # or wherever you set it to be
$ sh ../common/set_permissions.sh data
$ sh ../common/set_permissions.sh map_data
$ docker-compose -f docker-compose.yml up -d
$ docker-compose -f docker-compose.maps.yml up -d # Run maps stack separately
```
​​
### Initialise database
If server is started for the first time, database needs to be initialised and super-user created. Use the `init` command which will perform it automatically (the command generates password for the admin account):
```shell
$ docker exec merginmaps-server flask init
```

If you don't have `CONTACT_EMAIL` variable set, you will be asked to provide a super user email using the `-e`/`--email` option. The `init` will also check your server setup (celery jobs, emails, etc.) and print out a list of missing variables. If you see any errors in the console output, you can run the command again as the database and super user will not be re-initialised.

:::tip
If you want to create another users manually, you can use the following command:
```shell
$ docker exec merginmaps-server flask user create <username> <password> --is-admin --email <email>
```
:::

## Test deployment

In order to test your deployment there are some utility commands to perform basic checks.

Overall basic check on server configuration:

```shell
$ docker exec merginmaps-server flask server check
```

Output will be similar to the next snippet. The utility will try to provide some background information if some needed environment variable is missing or wrongly set (ex: `MERGIN_BASE_URL`)

```shell
# Server health check

Mergin Maps edition: Enterprise Edition
Mergin Maps version: 2025.2.0  
Error: No base URL set. Please set MERGIN_BASE_URL environment variable
Error: No contact email set. Please set CONTACT_EMAIL environment variable
Database initialized properly
Celery running properly  
```

To test email configuration:

```shell
$ docker exec merginmaps-server flask send-check-email --email me@myorg.com
```

By default, email notifications are disabled, so output will be similar to this:

```shell
    # Sending check email to specified email address me@myorg.com.

  Error: Sending emails is disabled. Please set MAIL_SUPPRESS_SEND=False to enable sending emails.

```

To enable them, set variable `MAIL_SUPPRESS_SEND` in accordance to above and fill all `MAIL_*` related variables with your company SMTP server configuration.

Some of the most common issues with custom deployments are listed in the [troubleshoot](../troubleshoot/) section.
