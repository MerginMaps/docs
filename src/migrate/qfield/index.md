# Migrate from QField

[[toc]]

This guide is intended for current QField and QFieldCloud users considering switching to <MainPlatformName /> and <MainPlatformName /> users looking to transfer their data from QField ecosystem. This guide cover preparing for the migration and troubleshooting common issues so that you can make the transition as smooth as possible. 

<MainPlatformName /> is the closest alternative to QField Ecosystem. Both QField and <MainPlatformName /> are open-source projects powered by QGIS. Their mobile apps are ones of officially recommended touch device applications for QGIS projects by <QGIS link="en/site/forusers/download.html" text="QGIS.org" />. Moreover, the mobile apps are based on same open-source GIS stack and same technology, and as such their projects are almost fully interoperable. 

## QField  and Mergin Maps ecosystems

QField ecosystem consists of QField (mobile application), QFieldCloud (geo data collaboration server),  QFieldSync (QGIS plugin) and QFieldCloud SDK (Python API client). Let's see the tools from <MainPlatformName /> that are counterparts:

| QField Ecosystem | <MainPlatformName /> Ecosystem | Note |
|---|---|---|
| QField | <MobileAppName />  | Mobile application powered by QGIS |
| QFieldCloud | <MainPlatformName />  | Server for sharing geo-data |
| QFieldSync | <QGISPluginName />  | QGIS Plugin for sync and manipulation of projects |
| QFieldCloud SDK and CLI | <GitHubRepo id="MerginMaps/python-api-client" desc="Python client" /> | Interaction with REST API via Python or console |

QFieldCloud is based on PostgreSQL and PostGIS database and there might be direct connection to these. Unlikely <MainPlatformName /> is fully based on file-based system, so there is no central <MainPlatformName /> user accessible PostGIS database to connect to. Instead you can setup custom script <GitHubRepo id="MerginMaps/db-sync" desc="db-sync" /> to map your <MainPlatformName /> to PostGIS database schema.

On top of <GitHubRepo id="MerginMaps/python-api-client" desc="Python client" />, <MainPlatformName /> offers other developer tools  manage projects for larger teams:
- [Media Sync](../../dev/media-sync/)
- [Work Packages](../../dev/work-packages/)

You can also [customise](../../dev/customapp/) <MobileAppName /> and deploy own servers:
- [Mergin Maps Community Edition](../../dev/mergince/)
- [Mergin Maps Enterprise Edition](../../dev/merginmaps-ee/)

## Before we start

Before start of migration, you need to have your workspace prepared so you can serve your projects. If you already have user and workspace, feel free to skip to next step.

* Register <MainPlatformName /> user and create new workspace as described [here](../../setup/sign-up-to-mergin-maps/index.md)
* Install QGIS as described [here](../../setup/install-qgis/index.md) and <QGISPluginName /> as described [here](../../setup/install-mergin-maps-plugin-for-qgis/index.md)
* It is recommended to go through [Get Started tutorial](../../tutorials/capturing-first-data/)

## Migrate QField Project 

Both platforms are rendering and using QGIS Projects (`.qgz` files) and associated online or offline geo-data sources. Therefore the basic concept of migration is to get plain QGIS project on desktop and upload it to <MainPlatformName />.

### Transfer QField project to desktop 

If you use USB cable for synchronisation of your data, use your common workflow to transfer project to your desktop, e.g. use "Send compressed folder to" action in QField to get compressed project to your email.

If you are QFieldCloud user, use QFieldSync to synchronise your latest changes to your desktop. 

### Convert QField project to QGIS project

Now when you have your QField project on your computer, you need to convert it to a regular QGIS project. <MainPlatformName /> doesn't use offline editing, nor connection to QFieldCloud PostGIS databases, so we need to remove those.

1. Close QGIS

2. Find the folder location e.g. `C:\GIS\QField_MyProject` on your computer, and create its hard copy `C:\GIS\MyProject`. The folder should include single QGIS project file (`.qgz` or `.qgs`), some data sources (like GeoPackages `.GPKG` or base maps) or sometimes other files (e.g. photos `.jpg` or `.png`). Alternatively, you can create new folder `C:\GIS\MyProject` and just copy QGIS project file (`.qgz` or `.qgs`) and other required data sources to new folder one by one.

3. Open the folder `C:\GIS\MyProject` and remove all hidden files and all files that are not strictly required by regular plain QGIS project (such as QField configuration files or backups of the layers or offline synchronisation logs).  

4. Open QGIS and open project from the folder `C:\GIS\MyProject`. For each layer, check its properties and verify that the sources do not point to any QFieldCloud databases. 

5. Close and reopen QGIS for from the folder `C:\GIS\MyProject`. Make sure project loads correctly, and you have all data there.

### Upload QGIS project to Mergin Maps

1. Use <QGISPluginName /> to package and upload project to <MainPlatformName />. 
2. Verify that the project is present on <DashboardLink desc="server">.  
3. Download project on <MobileAppName /> and check you see your data and styling correctly.

### Fine-tune Mergin Maps project

Setup specific <MainPlatformName /> features for your project, such as selective sync, photo quality in <MainPlatformName /> plugin

## Migrate QFieldCloud Settings

There is no automatic tool to extract your QFieldCloud organisations and users and create them in <MainPlatformName />. Therefore you need to 
manually create users and workspaces and recreate the projects <MainPlatformName /> [workspace](../../manage/workspaces). 
For smooth transition, best is to read about [management of workspaces](../../tutorials/working-collaboratively/index.md).

### Users, Organisations and projects

* Users is key management unit in both platforms. Each user needs a separate user account. Read how to [sign up](../../setup/sign-up-to-mergin-maps/index.md)
* Projects are same for both platforms (single `.qgz` file with associated files). Read more about [projects](../../manage/project/index.md)
* Project collaborators in QFieldCloud are represented by users given direct access for a project in <MainPlatformName />. Read more about [collaboration](../../tutorials/working-collaboratively/index.md) and [permissions](../../manage/permissions/index.md)
* Organisations in QFieldCloud are represented by workspaces in <MainPlatformName />. Read more about [workspaces](../../manage/workspaces/index.md)
* Organisation members in QFieldCloud are workspace members in <MainPlatformName />. Read more about [collaboration](../../tutorials/working-collaboratively/index.md) and [permissions](../../manage/permissions/index.md)

### Billing, subscriptions and plans 

In <MainPlatformName /> each workspace has subscription associated. Read more about <MainPlatformName /> subscription [here](../../manage/subscriptions/index.md)

* If you own Organisation plan in QFieldCloud, you will likely need <MainPlatformName /> Professional or Team subscription.
* If you own Pro plan in QFieldCloud, you will likely need <MainPlatformName /> Individual or Professional subscription.
* If you are Community plan in QFieldCloud, you will likely need <MainPlatformName /> Individual subscription or deploy your own <MainPlatformName /> Community Edition (<CommunityPlatformNameLink />)

<MainPlatformName /> are unlikely of QFieldCloud based on per-seat model, therefore with Team subscription you have unlimited members.

## Known Differences

To mention the key differences, <MobileAppName /> is fully devoted to provide no-training mobile application, operated even for surveyors without any prior GIS knowledge. QField is more focused on advanced GIS users and its interface more resembles full GIS applications like QGIS. Therefore <MobileAppName /> is more intuitive for non-technical users. 

For synchronisation part, <MainPlatformName /> is conceptually based on ideas from Git - <GitHubRepo id="MerginMaps/geodiff" desc="Geodiff" /> - creates difference files from GeoPackages that are send over network and applied. While QFieldCloud synchronisation uses concept of storage of differences made in SQL format and this difference log is then transmitted and applied. <MainPlatformName /> synchronisation is inevitable part of the platform and cannot be omitted from the process. As such it is already setup for end-user in smart way and not extra steps are needed for mobile users. 

Here is the non-definitive list of known differences:

* QField mobile app can without QFieldCloud (server) via USB transfer of the projects. This is not available in <MainPlatformName />, but you can allows [manually download](../../manage/missing-data/index.md) your data from your mobile devices if needed or 
* Organisation teams in QFieldCloud do not have any equivalent concept in <MainPlatformName />.
* There is no concept of secrets in <MainPlatformName />. For `pg_service` configuration, you need to transfer it manually as described [here](../../gis/supported_formats/index.md)
* There is no concept of managing ongoing jobs or triggers in <MainPlatformName /> accessible for users. Users are presented result when jobs are finished (e.g. map rendering)
* Use <GitHubRepo id="MerginMaps/db-sync" desc="db-sync" /> to map your <MainPlatformName /> to PostGIS database schema. <MainPlatformName /> doesn't have user accessible database.
* QField is built around modes. There is not such concept in <MainPlatformName />
* Both platforms support almost the same set of supported formats via QGIS data providers and GDAL. Read all formats supported by <MainPlatformName /> [here](../../gis/supported_formats/index.md)
* You can use preview panel in <MobileAppName />,see [how to setup it](../../tutorials/further-project-customisation/index.md) how to use it

If you cannot find some feature in the <MobileAppName />, check our <WishListLink /> 

## Troubleshoot

If you struggle to migrate your projects, we are happy to help you. Book your short video call with our <MerginMapsEmail id="sales" desc="sales team" />, for direct technical queries you can also write to our official <MerginMapsEmail id="support" desc="support team" /> our or chat with our open-source community.

<CommunityJoin />

If you are looking for professional partner to migrate your workflow    , you can ask our <MainDomainNameLink id="partners" desc="partners"/> network or Lutra Consulting Ltd., developers of <MainPlatformName />  

<PublicImage src="logo_lutra.svg" title="Lutra Consulting Ltd. logo" />
