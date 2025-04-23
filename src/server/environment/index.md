# Configure environment

There are several application settings which can be changed via <GitHubRepo desc="config variables" id="MerginMaps/server/blob/master/.prod.env" />. Some of them have defaults and some of them need to be modified, particularly those with required placeholders (marked with ⭐️ below).
​
#### Server basics
Variables marked with star ⭐️ need to be modified for production use.

| Variable name            | Type      | Default   | Description                                                                                                                                 |
|--------------------------|-----------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `MERGIN_BASE_URL`⭐️       | string    |        | Deployment URL where <MainPlatformName /> is hosted.                                                                                        |
| `COLLECT_STATISTICS`     | Boolean   | `true`    | Whether to send usage statistics for application improvements. For more information check this [page section](../administer#telemetry-service). |
| `CONTACT_EMAIL`         | string    |     ``      | Email contact for application administrator.                                                                                                |
| `SERVICE_ID`             | string    |           | Deployment UUID. Auto-generated on the first run.                                                                                           |
​
#### Security settings (important for production use)🛡️
Security settings are important for production use.

| Variable name            | Type      | Default   | Description |
|--------------------------|-----------|-----------|-------------|
| `BEARER_TOKEN_EXPIRATION`| integer   |  `43200`  | Lifetime of authorisation bearer token in seconds. When expired, users need to log in again. |
| `SECRET_KEY`⭐️            | string    |           | Secret key for authorisation, should be a generated strong string. |
| `SECURITY_EMAIL_SALT`⭐️| string    |           | Token salt for sending verification email, should be a generated strong string. |
| `SECURITY_BEARER_SALT`⭐️| string    |           | Bearer token salt for decode web token, should be a generated strong string.|
| `SECURITY_PASSWORD_SALT`⭐️| string    |           | Password salt for hashing, should be a generated strong string. |
| `WTF_CSRF_ENABLED`       | Boolean   |  `true`   | Enable CSRF protection. It is strongly recommended to have this on. |
| `WTF_CSRF_TIME_LIMIT`    | integer   |  `86400`  | Lifetime of CSRF token in seconds. When expired, users need to refresh it. |
​
#### Database settings
Mergin Maps uses PostgreSQL database to store its data.

| Variable name             | Type      | Default   | Description |
|---------------------------|-----------|-----------|-------------|
| `DB_APPLICATION_NAME`     | string    | `mergin`  | Comment in database connection string to better identify connection source.  |
| `DB_DATABASE` ⭐️          | string    |`postgres` | Database to store <MainPlatformName /> tables.  |
| `DB_HOST`                 | string    | `db`      | Database host. Mapped to docker-compose service name.  |
| `DB_PASSWORD` ⭐️          | string    |`postgres` | PostgreSQL user password.  |
| `DB_PORT`                 | integer   | `5432`    | Database port. If non-default, it should match the port exposed in the docker-compose file.  |
| `DB_POOL_MAX_OVERFLOW` | integer   | `10`      | Database `max_overflow` limit for [SQLAlchemy](https://docs.sqlalchemy.org/en/14/core/engines.html).  |
| `DB_POOL_SIZE`            | integer   | `2`       | Database pool size for SQLAlchemy. With overflow determines the maximum of concurrent connections to the database. |
| `DB_POOL_TIMEOUT`         | integer   | `300`     | Database pool timeout for SQLAlchemy. |
| `DB_USER` ⭐️              | string    |`postgres` | PostgreSQL user to connect to <MainPlatformName /> database.  |
​

#### User management
Settings for managing users.
<ServerType type="EE" />

| Variable name             | Type    | Default     | Description |
|---------------------------|---------|-------------|---------------------------|
| `USER_SELF_REGISTRATION`            | Boolean | `true`     | Users can register themselves. If disabled, they must be invited or registered by superuser.  |
| `ENABLE_SUPERADMIN_ASSIGNMENT` | Boolean | `true`     | If set to false, you will not be able to assign super admin role to user from admin panel. |

#### Permission management 
<ServerType type="CE" />
To ease the process of permission (user) management, you can set the following global variables that apply to all registered users.

| Variable name             | Type    | Default     | Description |
|---------------------------|---------|-------------|---------------------------|
| `GLOBAL_ADMIN`            | Boolean | `false`     | All registered users can create/delete projects.  |
| `GLOBAL_READ`             | Boolean | `false`      | All registered users have read access to all projects. If `false`, the application admin would need to grant project access to users manually.  |
| `GLOBAL_WRITE`            | Boolean | `false`     | All registered users have write access (can sync) to all projects.  |


#### Sending Emails
​Mergin Maps can connect to a SMTP server to send notifications and password recovery emails.

| Variable name           | Type    | Default   | Description |
|-------------------------|---------|-----------|-------------|
| `MAIL_SUPPRESS_SEND`    | Boolean | `false`    | Whether to suppress email sending. If set to `false`, you should define the following variables. |
| `MAIL_DEFAULT_SENDER`⭐️ | string  |           | Sender of <MainPlatformName /> emails. Best to have some no-reply address.  |
| `MAIL_SERVER`⭐️         | string  |`localhost`| SMTP mail server host.  |
| `MAIL_PORT`⭐️           | integer | `587`     | SMTP mail server port.  |
| `MAIL_USERNAME`         | string  |   `None`   | Username of user connecting to SMTP server.  |
| `MAIL_PASSWORD`         | string  |   `None`        | Password for user connecting to SMTP server.  |
| `MAIL_USE_TLS`🛡️       | Boolean |   `true`        | Use TLS encryption when connecting to SMTP server.  |
| `MAIL_USE_SSL`🛡️       | Boolean |   `false`        | Whether to use SSL encryption when connecting to SMTP server.  |
| `MAIL_BCC`              | string  |   `None`   | Email address to send copies of all sent emails. Should be system/application administrator. Mandatory in versions until 2024.4.0.  |
| `MERGIN_LOGO_URL`       | string  | ``    | Link to logo in emails. |

If you have issues with sending emails, follow [troubleshooting](../troubleshoot/) page.

#### Workspace management
Workspace settings.
<ServerType type="CE" />

| Variable name                | Type    | Default     | Description                                                                                                                                                                                                             |
|------------------------------|---------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `GLOBAL_WORKSPACE` ⭐️        | string  | `mergin`    | Common workspace name for all projects. All projects belong to this single workspace with certain permissions. Projects are then referenced with this name as part of URL, e.g. `/mergin/projectA`, `/mergin/projectB`. |
| `GLOBAL_STORAGE` ⭐️          | integer |`10737418240`| Storage limit <MainPlatformName /> can use to store projects (last version) in bytes (default is 10 GB). Should be reasonably large.                                                                                    |

<ServerType type="EE" />

| Variable name                     | Type    | Default      | Description |
|-----------------------------------|---------|--------------|---------------------------|
| `WORKSPACE_STORAGE_SIZE` ⭐️       | integer | `524288000`  | Storage limit workspace can use to store projects (last version) in bytes (default is 500 MB). |
| `WORKSPACE_INVITATION_EXPIRATION` | integer | `14`         | Expiration limit for pending invitation in days. |
| `PROJECT_TRANSFER_EXPIRATION`     | integer | `7`          | Expiration limit for pending project transfer in days. |
| `WORKSPACE_EXPIRATION`            | integer | `7`          | Expiration time in days for deleted workspaces before removed completely. |
| `USER_WORKSPACES_ALLOWED`         | Boolean | `true`       | Allow users to create their own workspaces else it is available for superuser only |

#### Data synchronisation and management
Other settings related to data management.

| Variable name                | Type     | Default                               | Description                                                                                                                                                                                               |
|------------------------------|----------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `LOCAL_PROJECTS`             | string   | `./projects`                          | Directory to store projects on a container. Please refer to volume mapping in docker-compose file.                                                                                                        |
| `TEMP_DIR`                   | string   | Result of `gettempdir()` call         | Trash directory for temp files being cleaned regularly. Please refer to volume mapping in docker-compose file.                                                                                            |
| `MAINTENANCE_FILE`           | string   | `/data/MAINTENANCE`                   | File to indicate server is in maintenance - read only mode. Please refer to volume mapping in docker-compose file.                                                                                        |
| `BLACKLIST`                  | string   | `.mergin/`, `.DS_Store`, `.directory` | Pattern to ignore when syncing files.                                                                                                                                                                     |
| `FILE_EXPIRATION`            | integer  | `172800`                              | When the GeoPackage file was updated with "<NoSpellcheck id="diffable" />" change, original data are being removed (as they can be reconstructed on demand) to save disk space. File lifetime in seconds. |
| `LOCKFILE_EXPIRATION`        | integer  | `300`                                 | Time in seconds for a project being locked while updated. If no change happens to the project in such time, the lockfile is removed.                                                                      |
| `MAX_CHUNK_SIZE`             | integer  | `10485760`                            | Maximum size of file chunk to be uploaded (and received by server) in bytes.                                                                                                                              |
| `MAX_DOWNLOAD_ARCHIVE_SIZE`  | integer  | `1073741824`                          | Maximum size of project zip archive in bytes for direct download. Too large projects may take too long to download or never complete in one request.                                                      |
| `USE_X_ACCEL` ⭐️             | Boolean  | `true`                                | Whether to use nginx to serve files. Should be enabled if used with nginx proxy for performance reasons. Read more [here](https://www.nginx.com/resources/wiki/start/topics/examples/x-accel/).           |
| `CLOSED_ACCOUNT_EXPIRATION`  | integer  | `1`                                   | Time in days after a user closed their account to all projects and files are permanently deleted. Please note that until the user is removed, the username/email is occupied.                             |
| `DELETED_PROJECT_EXPIRATION` | integer  | `7`                                   | Lifetime in days for deleted projects. Expired projects are removed permanently without possibility to restore afterwards.                                                                                |
| `PROJECT_ACCESS_REQUEST`     | integer  | `604800`                              | Lifetime of active project access request in seconds.                                                                                                                                                     |
| `TEMP_EXPIRATION`            | integer  | `7`                                   | Time in days after files in a temporary folder are permanently deleted.                                                                                                                                   |


#### Celery asynchronous tasks
Mergin Maps is using Celery and Redis to perform asynchronous tasks or doing regular jobs.

| Variable name         | Type | Default                         | Description |
|-----------------------|------|---------------------------------|-------------|
|`BROKER_URL`           |string|`redis://merginmaps-redis:6379/0`| Connection details to celery message broker. If non-default, it should match definition in `docker-compose` file.  |
|`CELERY_RESULT_BACKEND`|string|`redis://merginmaps-redis:6379/0`| Connection details to celery result back-end broker. If non-default, it should match definition in `docker-compose` file.  |

#### WebMaps 
<ServerType type="EE" />

| Variable name            | Type     | Default                       | Description                    |
|--------------------------|----------|-------------------------------|--------------------------------|
| `MAPS_ENABLED`           | boolean  | `true`                       | Flag to enable webmaps         |
| `VECTOR_TILES_URL`       | string   | `https://tiles-ee.merginmaps.com/data/default/{z}/{x}/{y}.pbf`                            | URL to vector tiles which are used as basemap layer in webmaps |
| `VECTOR_TILES_STYLE_URL` | string   | `https://tiles-ee.merginmaps.com/styles/default.json`                            | URL to vector tiles style |
