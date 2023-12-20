# Mergin Maps Community Edition
[[toc]]

SaaS <MainPlatformName /> service is a web platform for storage and synchronisation of data between mobile devices, <MainPlatformNameLink /> service and QGIS Desktop. 

There is also <MainPlatformName /> Community Edition (<CommunityPlatformNameLink />) that is licensed as open source software. The source code for <CommunityPlatformName /> can be modified and used for custom deployments. You can contribute your code to <GitHubRepo id="MerginMaps/server" />.

[How to Use <MainPlatformName /> with a Custom Server](../manage/plugin-multi-server-use/) will explain how to use <QGISPluginName /> and <MobileAppName /> with your <CommunityPlatformName /> server.

::: tip
More information about <CommunityPlatformName /> and its features can be found on our [website](https://merginmaps.com/pricing-for-ce-and-ee) and in our blog [<MainPlatformName /> Community and Enterprise Editions](https://merginmaps.com/blog/introducing-mergin-maps-community-and-enterprise-editions). 

Need more functionality than <CommunityPlatformNameLink /> offers? Explore our [subscription plans](https://merginmaps.com/pricing).
:::

## Deployment
Follow these steps to run local <MainPlatformName /> instance.

### Start docker containers
Provided that `docker` and `docker-compose` are installed on your host, running <MainPlatformName /> stack should be as simple as running `docker-compose`. However, before doing that you would need to [configure](#configure-environment) your server setup via environment variables in <GitHubRepo desc=".prod.env" id="MerginMaps/server/blob/master/.prod.env" /> file. 

Once configured, you can run:
```shell
$ mkdir -p projects # or wherever you set it to be
$ sudo chown -R  901:999 ./projects/
$ sudo chmod g+s ./projects/
$ docker-compose -f docker-compose.yml up
```
​​
### Initialise database
If server is started for the first time, database needs to be initialised and super-user created (set admin username, password and email):
```shell
$ docker exec merginmaps-server flask init-db
$ docker exec merginmaps-server flask user create <username> <password> --is-admin --email <email>
```
​
### Configure environment
There are several application settings which can be changed via <GitHubRepo desc="config variables" id="MerginMaps/server/blob/master/.prod.env" />. Some of them have defaults and some of them needs to be modified, particularly those with `fixme` placeholder (marked with asterisks below).
​
#### Server basics
Variables marked with star ⭐️ need to be modified for production use.

| Variable name            | Type      | Default   | Description |
|--------------------------|-----------|-----------|-------------|
| `CONTACT_EMAIL`⭐️         | string    |           | Email contact for application administrator. |
| `COLLECT_STATISTICS`     | Boolean   | `true`    | Whether to send usage statistics for application improvements. |
| `MERGIN_BASE_URL`⭐️       | string    |           | Deployment URL where <MainPlatformName /> is hosted. |
| `SERVICE_ID`             | string    |           | Deployment UUID. Auto-generated on first run. |
​
#### Security settings (important for production use)🛡️
Security settings are important for production use.

| Variable name            | Type      | Default   | Description |
|--------------------------|-----------|-----------|-------------|
| `BEARER_TOKEN_EXPIRATION`| integer   |  `43200`  | Lifetime of authorisation bearer token in seconds. When expired, user needs to log in again. |
| `SECRET_KEY`⭐️            | string    |           | Secret key for authorisation, should be generated strong string. |
| `SECURITY_PASSWORD_SALT`⭐️| string    |           | Password salt for hashing, should be generated strong string. |
| `WTF_CSRF_ENABLED`       | Boolean   |  `true`   | Enable CSRF protection. It is strongly recommended to have this on. |
| `WTF_CSRF_TIME_LIMIT`    | integer   |  `86400`  | Lifetime of CSRF token in seconds. When expired, user needs to refresh it. |
​
#### Database settings
Mergin Maps uses PostgreSQL database to store its data.
​
| Variable name             | Type      | Default   | Description |
|---------------------------|-----------|-----------|-------------|
| `DB_APPLICATION_NAME`     | string    | `mergin`  | Comment in database connection string to better identify connection source.  |
| `DB_DATABASE`             | string    |`postgres` | Database to store <MainPlatformName /> tables.  |
| `DB_HOST`                 | string    | `db`      | Database host. Mapped to docker-compose service name.  |
| `DB_PASSWORD`            | string    |`postgres` | PostgreSQL user password.  |
| `DB_PORT`                 | integer   | `5432`    | Database port. If non-default should match port exposed in docker-compose file.  |
| `DB_POOL_MAX_OVERFLOW=10` | integer   | `10`      | Database `max_overflow` limit for [SQLAlchemy](https://docs.sqlalchemy.org/en/14/core/engines.html).  |
| `DB_POOL_SIZE`            | integer   | `2`       | Database pool size for SQLAlchemy. With overflow determines maximum of concurrent connections to database. |
| `DB_POOL_TIMEOUT`         | integer   | `300`     | Database pool timeout for SQLAlchemy. |
| `DB_USER`                | string    |`postgres` | PostgreSQL user to connect to <MainPlatformName /> database.  |
​
#### Permission management 
To ease the process of permission (user) management, you can set the following global variables that apply to all registered users.

| Variable name             | Type    | Default     | Description |
|---------------------------|---------|-------------|---------------------------|
| `GLOBAL_ADMIN`            | Boolean | `false`     | All registered users can create/delete projects.  |
| `GLOBAL_READ`             | Boolean | `false`      | All registered users have read access to all projects. If false, application admin would need to grant project access to users manually.  |
| `GLOBAL_WRITE`            | Boolean | `false`     | All registered users have write access (can sync) to all projects.  |


#### Sending Emails
​Mergin Maps can connect to SMTP server to send notifications and password recovery emails.
​
| Variable name             | Type      | Default   | Description |
|---------------------------|-----------|-----------|-------------|
| `MAIL_SUPPRESS_SEND`     | Boolean   | `true`    | Whether to suppress email sending. If set to true, you should define the following variables. |
| `MAIL_BCC`              | string    |           | Email address to send copies of all emails sent. Should be system/application administrator.  |
| `MAIL_DEFAULT_SENDER`   | string    |           | Sender of <MainPlatformName /> emails. Best to have some no-reply address.  |
| `MAIL_USERNAME`         | string    |           | Connection to SMTP server.  |
| `MAIL_PASSWORD`         | string    |           | Password for user connecting to SMTP server.  |
| `MAIL_PORT`             | integer   | `587`     | SMTP mail server port.  |
| `MAIL_SERVER`           | string    |`localhost`| SMTP mail server host.  |
| `MERGIN_LOGO_URL`       | string    | `null`    | Link to logo in emails. |


#### Data synchronisation and management
Other settings related to data management.

| Variable name             | Type    | Default     | Description |
|---------------------------|---------|-------------|---------------------------|
| `GLOBAL_WORKSPACE`      | string  | `mergin`    | Namespace (part of URL) for all projects. All projects belong to this single workspace with certain permissions (see below).  |
| `GLOBAL_STORAGE`        | integer |`10737418240`| Storage limit <MainPlatformName /> can use to store projects (last version) in bytes (default is 10 GB). Should be reasonably large.  |
| `LOCAL_PROJECTS`          | string  | `./projects` | Directory to store projects on container. Please refer to volume mapping in docker-compose file.     |
| `TEMP_DIR`                | string  | Result of `gettempdir()` call | Trash directory for temp files being cleaned regularly. Please refer to volume mapping in docker-compose file.    |
| `MAINTENANCE_FILE`        | string  |`/data/MAINTENANCE`| File to indicate server is in maintenance - read only mode. Please refer to volume mapping in docker-compose file.     |
| `BLACKLIST`               | string  | `.mergin/`, `.DS_Store`, `.directory`  | Pattern to ignore when syncing files.     |
| `FILE_EXPIRATION`         | integer | `172800`    | When GeoPackage file was updated with "<NoSpellcheck id="diffable" />" change, original data are being removed (as they can be reconstructed on demand) to save disk space. File lifetime in seconds.    |
| `LOCKFILE_EXPIRATION`     | integer | `300`       | Time in seconds for project being locked while updated. If no change happens to project in such time, lockfile is removed.    |
| `MAX_CHUNK_SIZE`          | integer | `10485760`  | Maximum size of file chunk to be uploaded (and received by server) in bytes. |
|`MAX_DOWNLOAD_ARCHIVE_SIZE`| integer | `1073741824`| Maximum size of project zip archive in bytes for direct download. Too large projects may take too long to download or never complete in one request. |
| `USE_X_ACCEL`            | Boolean | `false`     | Whether to use nginx do serve files. Should be enabled if used with nginx proxy for performance reasons. Read more [here](https://www.nginx.com/resources/wiki/start/topics/examples/x-accel/). |
|`CLOSED_ACCOUNT_EXPIRATION`| integer | `1`         | Time in days after user closed his account to all projects and files are permanently deleted. Please note than until user is removed username/email is occupied. |
| `DELETED_PROJECT_EXPIRATION`| integer| `7`        | Lifetime in days for deleted project. Expired projects are removed permanently without possibility to restore afterwards. |
| `PROJECT_ACCESS_REQUEST` | integer | `604800`    | Lifetime of active project access request in seconds. |
| `TEMP_EXPIRATION`        | integer | `7`         | Time in days after files in temporary folder are permanently deleted. |
​

#### Celery asynchronous tasks
​Mergin Maps is using Celery and Redis to perform asynchronous tasks or doing regular jobs.
​​
| Variable name         | Type | Default                         | Description |
|-----------------------|------|---------------------------------|-------------|
|`BROKER_URL`           |string|`redis://merginmaps-redis:6379/0`| Connection details to celery message broker. If non-default, it should match definition in `docker-compose` file.  |
|`CELERY_RESULT_BACKEND`|string|`redis://merginmaps-redis:6379/0`| Connection details to celery result back-end broker. If non-default, it should match definition in `docker-compose` file.  |
​

## Migration guides

Follow our [**Migration Guides**](./ce-migration/) to migrate from older server versions to the latest version of <CommunityPlatformName />.​


## Troubleshooting

Find the common server deployment issues here.

### Server is not properly configured
Did you get an error that the server is not properly configured?
![Mergin Maps CE server not configured error](./ce-server-not-configured.jpg "Mergin Maps CE server not configured error")

1. Check if `MERGIN_BASE_URL` docker environment variable is assigned correctly.
   `MERGIN_BASE_URL` should contain the URL of your <CommunityPlatformName /> server.
   
2. Restart the container with the `MERGIN_BASE_URL` variable


## Opt out of sending statistics
<SinceBadge type="Server" version="2023.2" />

By default, <CommunityPlatformName /> collects anonymous usage information to make the service better. There is a variable named `COLLECT_STATISTICS` that controls if statistics are collected and sent. 

If you do not want to provide these data, you can opt-out any time by setting this variable to *false* 
```
COLLECT_STATISTICS=false
```


