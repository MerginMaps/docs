# Upgrade

Migration guides are here to help you migrate your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink /> to the latest server version. The main Cloud <DashboardLink desc="Mergin Maps Server"/> is always migrated to latest version by <MainPlatformName /> team. Read more about server platforms in [overview article](../).

::: warning
Migrations must be performed one by one and cannot be skipped.

Make sure to always back up your database data before doing a migration.
:::

[[toc]]


## Migration guide from 2025.2.x to 2025.3.x

<MigrationType type="EE" />

::: tip Changes on deployment behaviour
Release 2025.3.x brings some changes on <MainPlatformName /> docker compose orchestration deployment procedure.
:::

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/deployment/enterprise/docker-compose.yml" desc="docker-compose file" />  or update docker images manually to version `2025.3.0`.
Perform the migration:

1. Stop your running docker containers
   ```bash
    $ docker compose -f docker-compose.yml down # or similarly, based on your previous deployment
    # INFO: After shutdown update the docker-compose.yml file to latest release
   ```
2. Please clone the <GitHubRepo id="MerginMaps/server/blob/master/" desc="server repository" /> or download <GitHubRepo id="MerginMaps/server/blob/master/deployment/" desc="deployment folder" />
   ```bash    
    $ cd server/deployment/enterprise
   ```
3. If you plan to use the new webmaps stacks, adapt your existing `.prod.env` and `docker-compose.yml` files. Move/copy them to the `enterprise` deployment folder  
   ```bash
    $ cp /some/path/.prod.env . # assuming you are located in `server/deployment/enterprise`
    $ cp /some/path/docker-compose.yml . # assuming you are located in `server/deployment/enterprise`
   ```
4. Start up your docker containers
   ```bash
    $ docker compose -f docker-compose.yml -d up # or similarly, based on your deployment
    $ docker compose -f docker-compose.maps.yml -d up # If you want to deploy webmaps stack
   ```
5. Check that you are on correct versions (`ba5051218de4`, `ba5ae5972c4a`).
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    ba5051218de4 (head)
    ba5ae5972c4a (head)
    ```

   - If you do not see the version numbers at all, run the following commands:
    ```bash
    $ docker exec merginmaps-server flask db stamp ba5051218de4
    $ docker exec merginmaps-server flask db stamp ba5ae5972c4a
    ```
6. Run the database migration:
    ```bash
    $ docker exec merginmaps-server flask db upgrade community@5ad13be6f7ef
    $ docker exec merginmaps-server flask db upgrade enterprise@819e6b20ee93
    ```

<br>

:::warning 🗺️ Enable background maps ⚠️
Your webmaps won’t display the default background map unless we enable them on our side. To do that, please [contact our support team](mailto:support@merginmaps.com?subject=Enable%20default%20background%20maps%20on%20Enterprise%20server&body=Dear%20support%2C%0A%0AI%27d%20like%20to%20request%20enabling%20background%20maps%20for%20our%20Enterprise%20edition%20server.%20%0AThe%20server%20is%20hosted%20at%3A%20%3Curl%3E) and share your server’s URL.

Alternatively, you can set up your own background maps using [environment variables](../environment/index.md#webmaps).
:::

## Migration guide from 2024.2.x to 2025.2.x (CE)

::: tip Before you upgrade!
Release 2025.2.x brings significant changes on <MainPlatformName /> docker compose orchestration infrastructure.

Previous individual `server` container is replaced by 3 service dedicated containers that split the core components of <MainPlatformName />, `server-gunicorn` the app, `celery-beat` Celery task scheduler and `celery-worker` a dedicated worker container for Celery tasks.
:::

<MigrationType type="CE" />

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/deployment/community/docker-compose.yml" desc="docker-compose file" />  or update docker images manually to version `2025.2.2`.
Perform the migration:

1. Stop your running docker containers
    ```bash
    $ docker compose -f docker-compose.yml down # or similarly, based on your deployment
    # INFO: After shutdown update the docker-compose.yml file to latest release
    ```

2. Double check if below environment variables are available and filled in `.prod.env` environment file. If not, add them.   
    ```bash
    SECURITY_EMAIL_SALT='<YOUR STRONG HASH>'
    SECURITY_BEARER_SALT='<YOUR STRONG HASH>'
    PORT=5000
    ```

3. Start up your docker containers
   - If you stopped the containers during step `1` with new version compose file, you need to manually stop and remove containers.
    ```bash
    $ docker stop merginmaps-db merginmaps-proxy merginmaps-redis merginmaps-server merginmaps-web
    $ docker rm merginmaps-db merginmaps-proxy merginmaps-redis merginmaps-server merginmaps-web
    ```

   - After this you can start the new containers
    ```bash
    $ docker compose -f docker-compose.yml -d up # or similarly, based on your deployment
    ```

4. Check that you are on correct versions (`35af0c8be41e`, `a5d4defded55`).
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    35af0c8be41e (head)
    a5d4defded55 
    ```

   - If you do not see the version numbers at all, run the following commands:
    ```bash
    $ docker exec merginmaps-server flask db stamp 35af0c8be41e
    $ docker exec merginmaps-server flask db stamp a5d4defded55
    ```

5. Run the database migration:
    ```bash
    $ docker exec merginmaps-server flask db upgrade heads    
    ```



## Migration guide from 2024.4.x to 2025.2.x

::: tip Before you upgrade!
Release 2025.2.x brings significant changes on <MainPlatformName /> docker compose orchestration infrastructure.

Previous individual `server` container is replaced by 3 service dedicated containers that split the core components of <MainPlatformName />, `server-gunicorn` the app, `celery-beat` Celery task scheduler and `celery-worker` a dedicated worker container for Celery tasks.
:::

<MigrationType type="EE" />

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/deployment/enterprise/docker-compose.yml" desc="docker-compose file" />  or update docker images manually to version `2025.2.0`.
Perform the migration:

1. Stop your running docker containers and build the new images
    ```bash
    $ docker compose -f docker-compose.yml down # or similarly, based on your deployment
    # INFO: After shutdown update the docker-compose.yml file to latest release
    ```

2. Double check if below environment variables are available and filled in `.prod.env` environment file. If not, add them.   
    ```bash
    SECURITY_EMAIL_SALT='<YOUR STRONG HASH>'
    SECURITY_BEARER_SALT='<YOUR STRONG HASH>'
    PORT=5000
    ```

3. Start up your docker containers
   - If you stopped the containers during step `1` with new version compose file, you need to manually stop and remove containers.
    ```bash
    $ docker stop merginmaps-db merginmaps-proxy merginmaps-redis merginmaps-server merginmaps-web
    $ docker rm merginmaps-db merginmaps-proxy merginmaps-redis merginmaps-server merginmaps-web
    ```

   - After this you can start the new containers
    ```bash
    $ docker compose -f docker-compose.yml -d up # or similarly, based on your deployment
    ```

4. Check that you are on correct versions (`07f2185e2428`, `df5b4efdae7b`).
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    07f2185e2428 (head)
    df5b4efdae7b (head)
    ```

   - If you do not see the version numbers at all, run the following commands:
    ```bash
    $ docker exec merginmaps-server flask db stamp 07f2185e2428
    $ docker exec merginmaps-server flask db stamp df5b4efdae7b
    ```

5. Run the database migration:
    ```bash
    $ docker exec merginmaps-server flask db upgrade community@ba5051218de4
    $ docker exec merginmaps-server flask db upgrade enterprise@ba5ae5972c4a
    ```


## Migration guide from 2024.3.x to 2024.4.x

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/deployment/enterprise/docker-compose.yml" desc="docker-compose file" />  or update docker images manually to version `2024.4.0`.
Perform the migration:

<MigrationType type="EE" />
1. Start up your docker containers
    ```bash
    $ docker-compose -f docker-compose.yml up # or similarly, based on your deployment
    ```

2. Check that you are on correct versions (`0e3fc92aeaaa`, `223e3be99e92`).
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    0e3fc92aeaaa
    223e3be99e92
    ```

   - If you do not see the version numbers at all, run the following commands:
    ```bash
    $ docker exec merginmaps-server flask db stamp 0e3fc92aeaaa
    $ docker exec merginmaps-server flask db stamp 223e3be99e92
    ```

3. Run the database migration:
    ```bash
    $ docker exec merginmaps-server flask db upgrade community@07f2185e2428
    $ docker exec merginmaps-server flask db upgrade enterprise@df5b4efdae7b
    ```

## Migration guide from 2024.2.x to 2024.3.x

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/deployment/enterprise/docker-compose.yml" desc="docker-compose file" />  or update docker images manually to version `2024.3.0`.
Perform the migration:

<MigrationType type="EE" />
1. Start up your docker containers
    ```bash
    $ docker-compose -f docker-compose.yml up # or similarly, based on your deployment
    ```

2. Check that you are on correct versions (`a5d4defded55`, `223e3be99e92`).
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    a5d4defded55
    223e3be99e92 (head)
    ```

   - If you do not see the version numbers at all, run the following commands:
    ```bash
    $ docker exec merginmaps-server flask db stamp a5d4defded55
    $ docker exec merginmaps-server flask db stamp 223e3be99e92
    ```

3. Run the database migration:
    ```bash
    $ docker exec merginmaps-server flask db upgrade community@0e3fc92aeaaa
    ```

## Migration guide from 2023.6.1 to 2024.2.x (CE)

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/deployment/community/docker-compose.yml" desc="docker-compose file" />  or update docker images manually.

<MigrationType type="CE" />
Update image to `2024.2.2` and perform the migration:

1. Start up your docker containers
    ```bash
    $ docker-compose -f docker-compose.yml up # or similarly, based on your deployment
    ```

2. Check that you are on correct versions (`35af0c8be41e`, `3a77058a2fd7`).
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    3a77058a2fd7
    35af0c8be41e
    ```

   - If you do not see the version numbers at all, run the following commands:
    ```bash
    $ docker exec merginmaps-server flask db stamp 35af0c8be41e
    $ docker exec merginmaps-server flask db stamp 3a77058a2fd7
    ```

3. Run the database migration, there will be several updates:
    ```bash
    $ docker exec merginmaps-server flask db upgrade heads
    ```

<MigrationType type="EE" />
Update image to `2024.2.1` and perform the migration:

1. Start up your docker containers
    ```bash
    $ docker-compose -f docker-compose.yml up # or similarly, based on your deployment
    ```

2. Check that you are on correct versions (`3a77058a2fd7`, `0d867687ab64`).
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    3a77058a2fd7
    0d867687ab64
    ```

   - If you do not see the version numbers at all, run the following command:
    ```bash
    $ docker exec merginmaps-server flask db stamp 3a77058a2fd7
    $ docker exec merginmaps-server flask db stamp 0d867687ab64
    ```

3. Run the database migration, there will be several updates running in each script:
    ```bash
    $ docker exec merginmaps-server flask db upgrade community@a5d4defded55
    $ docker exec merginmaps-server flask db upgrade enterprise@head
    ```

## Migration guide from 2023.2.0+ to 2023.6.1

⚠️ If you are on a server version lower than `2023.2.0`, it is important to first [upgrade to `2023.2.0`](#migration-guide-from-any-previous-version-to-2023-2-0) before continuing with this migration.

-----

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/deployment/community/docker-compose.yml" desc="docker-compose file" />  or update docker images manually to version `2023.6.1`.
Perform the migration:

<MigrationType type="CE" />

1. Start up your docker containers
    ```bash
    $ docker-compose -f docker-compose.yml up # or similarly, based on your deployment
    ```

2. Check that you are on a correct version (`b6cb0a98ce20`)
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    b6cb0a98ce20 # <--- important
    ```

   - If you do not see the version number on the last line, run the following command:
    ```bash
    $ docker exec merginmaps-server flask db stamp b6cb0a98ce20
    ```

3. Run the database migration
    ```bash
    $ docker exec merginmaps-server flask db upgrade 3a77058a2fd7
    ```

<MigrationType type="EE" />
1. Start up your docker containers
    ```bash
    $ docker-compose -f docker-compose.yml up # or similarly, based on your deployment
    ```

2. Check that you are on correct versions (`b6cb0a98ce20`, `0d867687ab64`)
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    b6cb0a98ce20
    0d867687ab64
    ```

   - If you do not see the version numbers, run the following command:
    ```bash
    $ docker exec merginmaps-server flask db stamp b6cb0a98ce20
    $ docker exec merginmaps-server flask db stamp 0d867687ab64
    ```

3. Run the database migration
    ```bash
    $ docker exec merginmaps-server flask db upgrade community@3a77058a2fd7
    ```

## Migration guide from any previous version to 2023.2.0

Besides various fixes, enhancements and performance improvements the most notable change recently introduced is the concept of workspaces. For Community Edition it means there is a **common shared workspace (global workspace)** for all users where all projects are stored, instead of having a personal or organisational namespace for projects.

:::tip
In case you do not need your previous data, we advise to start with [clean deployment](../install/) without the need to follow this migration guide.
:::

**Upgrading to 2023.2**

 1. Synchronise **all your projects and devices** using <MobileAppName /> and <QGISPluginName />. Make sure there are no pending changes. 

 2. After synchronisation, all downloaded projects need to be **removed** from all devices using  <MobileAppName /> and <QGISPluginName />

 3. Backup your database ⚠️

```bash
$ docker exec mergin-db pg_dump -U postgres -Fc postgres > pg_backup.dump
```

 4. Stop all running <MainPlatformName /> services (from project root folder)
```bash
$ docker-compose -f docker-compose.yml stop
```

 5. Pull the latest changes
```bash
$ git pull
```

 6. Set environment variables `.prod.env`. **Important** ⚠️

<MigrationType type="CE" />

As mentioned earlier, <CommunityPlatformName /> operates with one global workspace. We will set it up now.
Specify its name with the following environment variable:

 - `GLOBAL_WORKSPACE=ShinyWorkspace` - name of your workspace. A good fit is the name of your company or team. This value *should not be changed* later.

:::tip
You can find all available environment variables [here](../environment/) together with a tutorial on how to set them up.
:::

Further, you need to set a default role for people in your workspace *(learn more about our [permissions and roles system here](../../manage/permissions/))*. 
**Pick one** of these options :
 - `GLOBAL_READ=0` everyone will have guest role (without access to any project unless explicitly granted)
 - `GLOBAL_READ=1` everyone will have reader role (they can read/download all projects in the workspace)
 - `GLOBAL_WRITE=1` everyone will have writer role (they can contribute to all projects in the workspace, e.g. upload files)
 - `GLOBAL_ADMIN=1` everyone will have admin role (they can create new projects and share projects with others)

You can specify the maximum storage for your shiny new workspace 🌟 with the following variable:

 - `GLOBAL_STORAGE=10737418240` - workspace storage in bytes (10 GB in the example)

:::tip
New users can be created from <MainPlatformName /> administration panel, by navigating to `<your_url>/admin`.
:::

<MigrationType type="EE" />
There are few settings you may want to change values for:

 - `WORKSPACE_STORAGE_SIZE=104857600` - workspace storage in bytes (100 MB in the example)
 - `WORKSPACE_INVITATION_EXPIRATION=7` - days for valid invitation to expire
 - `WORKSPACE_EXPIRATION=7` - days for deleted workspace to be cleaned up
 - `USER_WORKSPACES_ALLOWED=1` - whether users can create their own workspaces
 - `USER_SELF_REGISTRATION=1` - whether users can register themselves, if set to 0, new users can be only added by admin


7. Make sure projects volume mounts in `docker-compose` file still match (You can set up new volumes by following the [quick start guide](../install/)). Switch to new server version and PostgreSQL to at least version 12 (14 recommended) by running new docker containers:
```bash
$ docker-compose -f docker-compose.yml up
```

8. Restore backup from older PostgreSQL version, e.g.:

```bash
$ docker cp pg_backup.dump merginmaps-db:/tmp
$ docker exec -it merginmaps-db bash
root@merginmaps-db$ pg_restore -U postgres -Fc -d postgres < /tmp/pg_backup.dump 
```

*You might see some warnings about using public schema, you can safely ignore those.*

:::warning
If your PostgreSQL settings were custom, you might need to follow official instructions for upgrading the PostgreSQL cluster.
:::

**Database migration**

<MigrationType type="CE" />
In this step we will select a global workspace (e.g. my-company) where all your projects will be merged. Your projects are migrated as follows: former namespace is prepended to project name and whole project is moved to new global workspace, for example:

	john.doe/survey -> my-company/john.doe_survey
    my-org/projectA -> my-company/my-org_projectA

Run DB migration scripts in `merginmaps-server` container:

```bash
$ docker exec -it merginmaps-server bash

# stamp database to state of release 2021.6.1, 
# if there is existing alembic record you might need to patch it manually 
$ flask db stamp 2686074eff45 # ← state of 2021.6.1
$ flask db upgrade dbd428cda965 # sync with pre-2023 releases
$ flask db upgrade 0ab6a1fbf974

$ echo $GLOBAL_WORKSPACE # make sure the GLOBAL_WORKSPACE variable is set and has the desired value

$ flask db upgrade 35af0c8be41e
$ flask db upgrade 1fcbea2a0f2c
$ flask db upgrade 3daefa84ce67
$ flask db upgrade b6cb0a98ce20
```

If all goes well your database should end up in the following state

```bash
$ flask db current
INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
INFO  [alembic.runtime.migration] Will assume transactional DDL.
b6cb0a98ce20 (head)
35af0c8be41e (head)
```

<MigrationType type="EE" />
In this step all your user and organisation namespaces will be migrated to workspaces keeping their original names. From now on there won't be any difference between user and organisation namespace.

Run DB migration scripts in `merginmaps-server` container:

```bash
$ docker exec -it merginmaps-server bash

# stamp database to state of release 2021.6.1, 
# if there is existing alembic record you might need to patch it manually 
$ flask db stamp 2686074eff45 # ← state of 2021.6.1
$ flask db stamp f2f038cbae06 # ← state of 2021.6.1 (enterprise branch)
$ flask db upgrade community@dbd428cda965  # sync with pre-2023 releases

# run bunch of workspace related updates
$ flask db upgrade community@0ab6a1fbf974 
$ flask db upgrade enterprise@92a63acb7973
$ flask db upgrade community@1fcbea2a0f2c
$ flask db upgrade community@3daefa84ce67
$ flask db upgrade community@b6cb0a98ce20
$ flask db upgrade enterprise@0d867687ab64
```

If all goes well your database should end up in the following state

```bash
$ flask db current
INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
INFO  [alembic.runtime.migration] Will assume transactional DDL.
0d867687ab64 (head)
b6cb0a98ce20 (head)
```


Your should be successfully migrated. Please note that files on your disk were not touched, only project names (namespaces) were changed.

You can now download and continue working with your projects.
