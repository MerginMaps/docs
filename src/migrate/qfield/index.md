# Migrate from QField
[[toc]]

This guide is intended for current QField and QFieldCloud users considering switching to <MainPlatformName /> as well as for <MainPlatformName /> users looking to transfer their data from QField ecosystem.

Mergin Maps is the closest alternative to QField Ecosystem. Both QField and <MainPlatformName /> are open-source projects powered by QGIS. Their respective mobile apps are both officially recommended for QGIS projects by <QGIS link="en/site/forusers/download.html" text="QGIS.org" />. Both platforms support almost the same set of [supported formats](../../gis/supported_formats/) via QGIS data providers and GDAL. Moreover, the mobile apps are based on the same open-source GIS stack and technology. As such their projects are almost fully interoperable.

## QField and Mergin Maps ecosystems
The QField ecosystem consists of QField (mobile application), QFieldCloud (geo data collaboration server), QFieldSync (QGIS plugin) and QFieldCloud SDK (Python API client). Let's see the tools from <MainPlatformName /> that are counterparts:

| QField Ecosystem | <MainPlatformName /> | Note |
|---|---|---|
| QField | <MobileAppName /> | Mobile application powered by QGIS |
| QFieldCloud | <MainPlatformName /> | Web application (server) for sharing geo-data |
| QFieldSync | <QGISPluginName /> | QGIS Plugin for sync and manipulation of projects |
| QFieldCloud SDK and CLI | <GitHubRepo id="MerginMaps/python-api-client" desc="Python client" /> | Interaction with REST API via Python or console |


QFieldCloud is based on PostgreSQL and PostGIS database and there might be direct connection to these. <MainPlatformName /> is fully based on a file-based system, so it is not possible to connect directly to a PostGIS database. However, you can use the [DB Sync](../../dev/dbsync/) tool to map your <MainPlatformName /> project to a PostGIS database schema or vice versa.

On top of <GitHubRepo id="MerginMaps/python-api-client" desc="Python client" />, <MainPlatformName /> offers also other developer tools to manage projects for larger teams, such as [Media Sync](../../dev/media-sync/) and [Work Packages](../../dev/work-packages/).

You can also [customise](../../dev/customapp/) <MobileAppName /> and deploy your own <MainPlatformName /> servers as the [Mergin Maps Community Edition](../../dev/mergince/) or [Mergin Maps Enterprise Edition](../../dev/merginmaps-ee/).

### Users, organisations, workspaces
There are some similarities and differences in how QField and <MainPlatformName /> manage their users and projects:
* a *user* is a key management unit in both platforms. Each user needs to [have an account](../../setup/sign-up-to-mergin-maps/).
* a [*project*](../../manage/project/) is basically the same concept in both platforms (a `.qgz` file with associated files)
* *organisations* in QFieldCloud are similar to [*workspaces*](../../manage/workspaces/) in <MainPlatformName />
* *project collaborators* in QFieldCloud are [*workspace members or guests*](../../manage/permissions/) that have access to a project in <MainPlatformName />
* *organisation members* in QFieldCloud are [*workspace members*](../../manage/permissions/) in <MainPlatformName />

## Before we start
Before the start of migration, you need to have a <MainPlatformName /> account and a workspace to manage your projects. If you are already registered, feel free to skip these steps.

* [Sign up to <MainPlatformName />](../../setup/sign-up-to-mergin-maps/index.md) to create a <MainPlatformName /> account and a workspace
* [Install QGIS](../../setup/install-qgis/index.md) and [<QGISPluginName />](../../setup/install-mergin-maps-plugin-for-qgis/index.md)
* [Install <MobileAppName />](../../setup/install-input/)

We also recommend going through the [Get Started tutorial](../../tutorials/capturing-first-data/) to get familiar with <MainPlatformName />.

## Migrate QField project to Mergin Maps

Both platforms are using QGIS Projects (`.qgz` files) and associated online or offline geo-data sources.

Therefore, if you open the project in QGIS on your desktop, you will be able to upload it to <MainPlatformName />.


### Transfer QField project to the desktop
If you use a USB cable for synchronisation of your data, use your common workflow to transfer the project to your computer, e.g. by using the **Send compressed folder to** option in QField to send the compressed project to your email.

If you use QFieldCloud, use QFieldSync to synchronise the latest changes.

### Convert QField project to QGIS project
Now that you have your QField project on your computer, you need to convert it to a regular QGIS project. <MainPlatformName /> doesn't use offline editing, nor connections to QFieldCloud PostGIS databases, so we need to remove those.

1. Close QGIS

2. Find the project folder location on your computer (e.g. `C:\GIS\QField_MyProject`) and create a copy in a new location (e.g. `C:\GIS\MyProject`)
   - this folder should contain a single QGIS project file (`.qgz` or `.qgs`), local data files (such as GeoPackages `.GPKG`, Shapefiles `.SHP` or rasters) and other necessary files (such as photos `.jpg` or `.png`).
   - remove all hidden files and all files that are not strictly required by a regular plain QGIS project (such as QField configuration files, backups of the layers or offline synchronisation logs).

   :::tip
   Depending on your project, it might be easier to just copy the QGIS project file (`.qgz` or `.qgs`) and other required data sources to the new folder one by one.
   :::
 
4. Open the project from the **new** folder (e.g. `C:\GIS\MyProject`) in QGIS.

   For each layer, check its properties and verify that the sources do not point to any QFieldCloud databases.
   
   Some layers in the project may appear unavailable. Make sure they were copied to the folder or fix their data source.

5. If you made changes, save the project and close QGIS.

   Then, reopen the project in QGIS again to make sure that the project loads correctly.

:::tip
Some <MainPlatformName /> specific settings can be set up in the project, such as selective sync, default photo quality or custom photo names. Go to [QGIS Project Preparation](../../gis/features/) for inspiration.
:::

### Upload QGIS project to Mergin Maps
1. Use <QGISPluginName /> to package and upload the project to <MainPlatformName /> as explained [here](../../manage/project/#packaging-qgis-project)
2. Log in to <AppDomainNameLink /> to see that the project was successfully uploaded to the cloud
3. Open the project on <MobileAppName /> and check your project, especially feature forms and all the layers. 

## Migrate QFieldCloud Settings

### Organisations and permissions

There is no automatic tool to extract your QFieldCloud organisations and users and migrate them to <MainPlatformName />.

Therefore, you will have to manually set up workspaces (if needed) and assign appropriate [permissions](../../manage/permissions/) to your team members in <MainPlatformName />.

For a smooth transition, it is best to read about [working collaboratively](../../tutorials/working-collaboratively/index.md) in <MainPlatformName />.

### Billing, subscriptions and plans 

In <MainPlatformName />, each workspace has its own subscription. Read more about <MainPlatformName /> subscription [here](../../manage/subscriptions/).

* If you own Organisation plan in QFieldCloud, you will likely need <MainPlatformName /> Professional or Team subscription.
* If you own Pro plan in QFieldCloud, you will likely need <MainPlatformName /> Individual or Professional subscription.
* If you are Community plan in QFieldCloud, you will likely need <MainPlatformName /> Individual subscription or deploy your own <MainPlatformName /> Community Edition (<CommunityPlatformNameLink />)

While QFieldCloud has a per-seat model, the <MainPlatformName /> Team subscription has unlimited number of members.

## Known differences between QField and Mergin Maps platforms
Here are some key differences between QField and <MainPlatformName />.

- <MobileAppName /> is fully devoted to providing a no-training mobile application, operated even for users without any prior GIS knowledge. QField interface and workflows for various tools more resembles complex GIS applications like QGIS.
   Therefore <MobileAppName /> is more intuitive for non-technical users, still keeping all tools for advanced workflows.

- synchronisation in <MainPlatformName /> is conceptually based on ideas from Git. <GitHubRepo id="MerginMaps/geodiff" desc="Geodiff" /> creates difference files from GeoPackages that are sent over the network and applied. QFieldCloud synchronisation uses a concept of storage of differences made in SQL format and this difference log is then transmitted and applied. 
   In <MainPlatformName />, synchronisation is an inherent part of the platform. As such, it is already set up for end-users in a smart way and there are no extra steps needed for mobile users. All synchronisation on mobile devices is done by hitting a single button. 

Here is a non-definitive list of other known differences:

* QField mobile app can work without QFieldCloud (server) via USB transfer of the projects. This is not available in <MainPlatformName />, but you can [manually download](../../manage/missing-data/) your data or [upload large files](../../gis/settingup_background_map/#how-to-work-with-very-large-files-android) to your mobile device if needed.
* *Organisation teams* in QFieldCloud do not have any equivalent concept in <MainPlatformName />. On <MainPlatformName /> can have different workspaces for different teams.
* There is no concept of *secrets* in <MainPlatformName />. For `pg_service` configuration, you need to transfer it manually as described [here](../../gis/supported_formats/).
* There is no concept of *managing ongoing jobs* or *triggers* in <MainPlatformName /> accessible for users. Users see the results when jobs are finished (e.g. map rendering).
* It is not possible to connect directly to user accessible databases in <MainPlatformName />. Use [DB Sync](../../dev/dbsync/) to map your <MainPlatformName /> to PostGIS database schema.
* QField is built around *modes*. There is not such concept in <MainPlatformName />
* You can use the [*preview panel*](../../tutorials/further-project-customisation/#customising-the-preview-panel) in <MobileAppName />

If there is a feature missing in the <MobileAppName />, check our <WishListLink />.

## Troubleshoot
Struggling to migrate your projects? We are happy to help you!

Book a short video call with our <MerginMapsEmail id="sales" desc="sales team" /> or write your questions to our <MerginMapsEmail id="support" desc="support team" />. You can also chat with our open-source community.

<CommunityJoin />

If you are looking for a professional partner to migrate your workflow, you can ask our <MainDomainNameLink id="partners" desc="partners"/> network or Lutra Consulting Ltd., the developers of <MainPlatformName />
<PublicImage src="logo_lutra.svg" title="Lutra Consulting Ltd. logo" style="width:50%" />
