# Install

Installation guide will help you to install your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink /> to the latest server version. <ServerCloudNameLink /> is always up-to-date and managed by <MainPlatformName /> team. Read more about server platforms in [overview article](../)

[[toc]]


## Installation System Requirements

We recommend using a dedicated host machine with **8 GB** of memory and **4 vCPUS**. The requirements for CPU and persistent storage depend largely on the frequency of project updates and the anticipated size of the data you expect to store respectively.
A very conservative rule of thumb, regarding needed disk size would be `qgis project size * number of versions`.

On OS level, we recommend to use a Linux distribution that has fully compatibility with Docker, since <MainPlatformName /> is deployed by default with `docker compose`.

A low-latency, high-bandwidth environment is preferred due to volume of data needed to perform synchronization with <MainPlatformName />. This is specially important on large projects with hundreds of megabytes in between syncs.


### Infrastructure overview

* **PostgreSQL** - Database that holds application data. Can be externalized and therefore excluded from install orchestration with proper [configuration](https://merginmaps.com/docs/server/environment/#database-settings).
* **Redis** - The caching and asynchronous task engine running on top of <MainPlatformName />
* **Celery-Beat** - The Celery task orchestrator used by <MainPlatformName />
* **Celery-Worker** - The Celery container responsible for workers that perform tasks on <MainPlatformName />
* **Server** - The server backend intance of <MainPlatformName />
* **Web** - The frontend instance for <MainPlatformName />
* **Proxy** - NGINX instance serving <MainPlatformName /> in reverse proxy configuration.

### Firewall ports

By default, only HTTP default ports (`80`, and `443` if SSL is enabled) need to be open on firewall side.
All other infrastructure instance will work within the same docker network group.


## Install Docker from official source

Please, use latest version of Docker and Docker Compose tools.
Follow the [official](https://docs.docker.com/engine/install/) guidelines in accordance to your OS system.

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
This step configures deployment settings by modifying environment variables.

Start by creating the `.prod.env` file (if it does not exist yet), by running:

```shell
cp .env.template .prod.env
```

Then, edit the `.prod.env` file and provide values for all variables marked as required in the list of [environment variables](../environment/).

### Start docker containers

Before proceeding, ensure you have both `docker` and `docker compose` installed on your system.

Once your environment is configured, you can start the containers by running the following commands for the Community and Enterprise editions.

Community edition stack:

```shell
$ mkdir -p mergin_db # database data directory
$ sh ../common/set_permissions.sh projects # application internal data directory
$ sh ../common/set_permissions.sh diagnostic_logs # directory to persist diagnostic logs (optional)
$ docker compose -f docker-compose.yml up -d
```

Enterprise edition stack:

```shell
$ mkdir -p mergin-db-enterprise # database data directory
$ sh ../common/set_permissions.sh data # application internal data directory
$ sh ../common/set_permissions.sh map_data # maps data directory (neccessary for maps)
$ sh ../common/set_permissions.sh diagnostic_logs # directory to persist diagnostic logs (optional)
$ docker compose -f docker-compose.yml up -d
$ docker compose -f docker-compose.maps.yml up -d # Run maps stack separately
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
