# CE to EE Migration Guide

::: tip Before you upgrade!

You'll need to buy a [Enterprise](https://merginmaps.com/pricing) license of Mergin Maps. Please contact [sales](https://merginmaps.com/contact-sales) if you haven't done it yet.

Follow this [guide](https://merginmaps.com/docs/server/install/ee/) on how to pull EE images from Mergin Maps AWS.

:::

## Step 1: Stop and backup running CE infrastructure

* Make you upgraded previously to latest CE [release](https://github.com/MerginMaps/server/releases)
* Locate yourself under `deployment\community`
* Stop the current running `CE` instance with `docker compose down`.
```shell  
  docker compose down
```
* Make sure all containers are stopped and removed correctly. If not remove them.
```shell
  docker compose ps
```
* Create backups for `projects` and `mergin_db` folders
* Rename `projects` folder to `data` and `mergin_db` to `mergin-db-enterprise`.
```shell
  mv projects data
  mv mergin_db mergin-db-enterprise
```
* Move these folders to `deployment\enterprise`
```shell
  mv data ..\enterprise
  mv mergin-db-enterprise ..\enterprise
```
* Locate yourself on `deployment\enterprise` folder for the next step scripts

## Step 2: Pull EE images and execute some DDL

* Once logged in on Mergin Maps AWS ECR, pull EE images.
```shell
  docker compose pull
```
* Uncomment the following line on the main `docker-compose.yml` file under `db` service.
```shell
  ...
  - ./ce_ee_migration:/ce_ee_migration
  ...
```
* Start database container
```shell
  docker compose up db
```
* Execute DDL files (replace `database_name` with your target database name and `database_user` with database user to perform data operations.)
```shell
  docker compose exec db psql -U database_user -d database_name -f /ce_ee_migration/000_ee_ddl.sql
  docker compose exec db psql -U database_user -d database_name -f /ce_ee_migration/001_workspace_inserts.sql
```
* Start remaining remaining EE containers
```shell
  docker compose up -d
```
