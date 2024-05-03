# Upgrade

Migration guides are here to help you migrate your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink /> to the latest server version. The main Cloud <DashboardLink desc="Mergin Maps Server"/> is always migrated to latest version by <MainPlatformName /> team. Read more about server platforms in [overview article](../index.md).

::: warning
Migrations must be performed one by one and cannot be skipped.

Make sure to always back up your database data before doing a migration.
:::

[[toc]]

## Migration guide from 2023.6.1 to 2024.2.1

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/docker-compose.yml" desc="docker-compose file" />  or update docker images manually to version `2024.2.1`.
Perform the migration:

<MigrationType type="CE" />

1. Start up your docker containers
    ```bash
    $ docker-compose -f docker-compose.yml up # or similarly, based on your deployment
    ```

2. Check that you are on a correct versions (`35af0c8be41e`, `3a77058a2fd7`).
    ```bash
    $ docker exec merginmaps-server flask db current
    INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
    INFO  [alembic.runtime.migration] Will assume transactional DDL.
    3a77058a2fd7
    35af0c8be41e
    ```

   - If you do not see the version numbers at all, run the following command:
    ```bash
    $ docker exec merginmaps-server flask db stamp 35af0c8be41e
    $ docker exec merginmaps-server flask db stamp 3a77058a2fd7
    ```

3. Run the database migration, there will be several updates:
    ```bash
    $ docker exec merginmaps-server flask db upgrade heads
    ```

<MigrationType type="EE" />
1. Start up your docker containers
    ```bash
    $ docker-compose -f docker-compose.yml up # or similarly, based on your deployment
    ```

2. Check that you are on a correct versions (`3a77058a2fd7`, `0d867687ab64`).
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

Get the latest <GitHubRepo id="MerginMaps/server/blob/master/docker-compose.yml" desc="docker-compose file" />  or update docker images manually to version `2023.6.1`.
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

2. Check that you are on a correct versions (`b6cb0a98ce20`, `0d867687ab64`)
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

 6. Set environment variables (<GitHubRepo desc=".prod.env" id="MerginMaps/server/blob/master/.prod.env" /> file). **Important** ⚠️

<MigrationType type="CE" />

As mentioned earlier, <CommunityPlatformName /> operates with one global workspace. We will set it up now.
Specify its name with the following environment variable:

 - `GLOBAL_WORKSPACE=ShinyWorkspace` - name of your workspace. A good fit is the name of your company or team. This value *should not be changed* later.

:::tip
You can find all available environment variables [here](../administer/environment.md) together with a tutorial on how to set them up.
:::

Further, you need to set a default role for people in your workspace *(learn more about our [permissions and roles system here](../../manage/permissions))*. 
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
