# Frequently Asked Questions
[[toc]]

## Key differences between <MigrationType type="CE" /> and <MigrationType type="EE" />
__________________

|                                  | CE        | EE                 |
|----------------------------------|-----------|--------------------|
| Users                            | Unlimited | Unlimited          |
| Workspaces                       | 1         | Unlimited          |
| Projects                         | Unlimited | Unlimited          |
| Storage Management               | :x:       | :white_check_mark: |
| Granular roles-based permissions | :x:       | :white_check_mark: |
|                                  |           |                    |
| SLA                              | :x:       | :white_check_mark: |
| SSO                              | :x:       | :white_check_mark: |

## Migration from <MigrationType type="CE" /> to <MigrationType type="EE" />

### Step 1

Make sure your CE instance is updated to the latest release. For more info check <MainPlatformName /> [releases](https://github.com/MerginMaps/server/releases).
If not, please upgrade your instance to the latest version prior to the migration.

### Step 2

#### a) New server machine migration
* Login to Lutra AWS ECR repository to fetch main Docker images from.
* Get the latest source code for EE from <MainPlatformName /> [releases](https://github.com/MerginMaps/server/releases) page.
* Adjust provided `.prod.env` environmental variables file with your settings. Most of them are likely present on your previous CE install. Check mandatory [envs](https://merginmaps.com/docs/server/environment/).
* Copy main `/data` folder from old server and **all of it's content** to the new server.
* Dump database running on old server and restore it on the new server machine. Temporarily start only database container for this purpose.
* Start main server container (`server-gunicorn`) and apply migrations. Follow the guide on migrations [page](https://merginmaps.com/docs/server/upgrade/)
* Start all containers

#### b) Same server machine migration
* Stop running CE containers
* Login to Lutra AWS ECR repository to fetch main Docker images from.
* Get the latest source code for EE from <MainPlatformName /> [releases](https://github.com/MerginMaps/server/releases) page.
* Adjust provided `.prod.env` environmental variables file with your settings. Most of them are likely present on your previous CE install. Check mandatory [envs](https://merginmaps.com/docs/server/environment/).
* If you are using the default database folder on CE, rename it from `mergin_db` to `mergin-db-enterprise`. If you are using other option to persist database files, please adjust the main `docker-compose.yml` file.
* Start main server container (`server-gunicorn`) and database container (`db`). Apply migrations afterwards. Follow the guide on migrations [page](https://merginmaps.com/docs/server/upgrade/)
* Start all containers