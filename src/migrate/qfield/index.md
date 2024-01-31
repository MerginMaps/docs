# Migrate from QField

[[toc]]

This guide is intended for current QField and QFieldCloud users considering switching to <MainPlatformName /> and new <MainPlatformName /> users looking to transfer their data from QField ecosystem.
 
We'll cover everything from preparing for the migration to troubleshooting common issues so that you can make the transition as smooth as possible. By the end of this guide, you'll have all the information you need to successfully migrate your data from QField to <MainPlatformName /> and start taking advantage of all the features and benefits that <MainPlatformName /> has to offer.

## QField  and Mergin Maps ecosystems comparison

Both QField and <MainPlatformName /> are open-source projects with their community and weakly bound to QGIS ecosystem. 

<MainPlatformName /> is the closest alternative to QField Ecosystem consisting of QField (mobile application), QFieldCloud (geo data collaboration server) and QFieldSync (QGIS plugin). They are both listed as the offically recommended touch device application for QGIS projects. The mobile applications are powered by QGIS and rest of open-source GIS libraries and as such their mobile projects are almost fully interoperable.

To mention the key differences, <MobileAppName /> is fully devoted to provide no-training mobile application, operated even for surveyors without any prior GIS knowledge. QField is more focused on advanced GIS users and its interface more resemples full GIS applications like QGIS. Therefore <MobileAppName /> is more intuitive for non-technical user who are familiar for common mobile map applications like car navigations. 

For synchonisation part, <MainPlatformName /> is conceptually based on ideas from Git - [geodiff](TODO) creates difference files from GeoPackages that are send over network and applied. While QFieldCloud synchronisation uses concept of storage of differences made in SQL format and this difference log is then transmitted and applied. <MainPlatformName /> synchronisation is inevitable part of the platform and cannot be omitted from the process. As such it is already setup for end-user in smart way and not extra steps are needed for mobile users. 


| QField Ecosystem | <MainPlatformName /> Ecosystem | Note |
|---|---|---|
| QField | <MobileAppName />  | Mobile application powered by QGIS |
| QFieldCloud | <MainPlatformName />  | Server for sharing geo-data |
| QFieldSync | <QGISPluginName />  | QGIS Plugin for sync and manipulation of projects |
| QFieldCloud SDK and CLI | <GitHubRepo id="MerginMaps/python-api-client" desc="Python client" /> | Interaction with REST API via Python or console |
| QFieldCloud PostGIS | <GitHubRepo id="MerginMaps/db-sync" desc="db-sync" /> | Connection to PostGIS database |

## Before we start

Before start of migration, you need to have your workspace prepared so you can serve your projects. If you already have user and workspace, feel free to skip to next step.

* Register <MainPlatformName /> user and create new workspace as described [here](../../setup/sign-up-to-mergin-maps/index.md)
* Install QGIS as described [here](../../setup/install-qgis/index.md) and <QGISPluginName /> as described [here](../../setup/install-mergin-maps-plugin-for-qgis/index.md)
* It is recommeded to go through [Get Started tutorial](../../tutorials/capturing-first-data/)

## Migrate QField Project 

Both platforms are rendering and using QGIS Projects (`.qgz` files) and associated online or offline geo-data sources. Therefore the basic concept of migration is 

1. to transfer project from QField to your deskop computer (either via USB cable or QFieldCloud)
- e.g. use "Send compressed folder to" action in QField to get compressed. Consult "QField Storage Access" documentation
2. contert QField project to a regular QGIS project (if QFieldCloud is used)
- Remove offline editing from the layers and export layers to be local geopackages and not stored on QFieldCloud PostGIS servers.
3. use <QGISPluginName /> to package and upload project to <MainPlatformName />
4. setup specific <MainPlatformName /> features for your project, such as selective sync, photo quality in <MainPlatformName /> plugin

### Known Differences

1. QField is built around modes. There is not such concept in <MainPlatformName />
2. Both platforms support almost the same set of supported formats via QGIS data providers and GDAL. Read all formats supported by <MainPlatformName /> [here](../../gis/supported_formats/index.md)
3. You can use preview panel in <MobileAppName />,see [how to setup it](../../tutorials/further-project-customisation/index.md) how to use it

If you cannot find some feature in the <MobileAppName />, check our <WishListLink />

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

* If you own Organization plan in QFieldCloud, you will likely need <MainPlatformName /> Professional or Team subscription.
* If you own Pro plan in QFieldCloud, you will likely need <MainPlatformName /> Individual or Professional subscription.
* If you are Community plan in QFieldCloud, you will likely need <MainPlatformName /> Individual subscription or deploy your own <MainPlatformName /> Community Edition (<CommunityPlatformNameLink />)

<MainPlatformName /> are unlikely of QFieldCloud based on per-seat model, therefore with Team subscription you have unlimited members.

### Known Differences

1. Organization teams in QFieldCloud do not have any equivalent concept in <MainPlatformName />.
2. There is no concept of secrets in <MainPlatformName />. For `pg_service` configuration, you need to transfer it manually as described [here](../../gis/supported_formats/index.md)
3. There is no concept of managing ongoing jobs or triggers in <MainPlatformName /> accessible for users. Users are presented result when jobs are finished (e.g. map rendering)

If you cannot find some feature in the <MobileAppName />, check our <WishListLink />