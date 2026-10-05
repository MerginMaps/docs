---
description: Do you consider switching from Felt to Mergin Maps? See the comparison of both platforms and practical tips for migrating to Mergin Maps.

outline: deep
---

# Migrate from Felt
[[toc]]

This guide is intended for current Felt users who are considering switching to <QGIS link="en/site/forusers/download.html" text="QGIS" /> and <MainPlatformNameLink />. It may also be helpful to Mergin Maps users looking to transfer their maps and field data from the Felt ecosystem. 

::: tip Getting familiar with <MainPlatformName /> and QGIS
Switching to a new platform can be challenging. This documentation is here to help with the basics as well as some more advanced or specific settings.

To get familiar with <MainPlatformNameLink />, we recommend starting with the [**tutorials**](../../tutorials/capturing-first-data/). If there are specific topics that are crucial for your workflows, feel free to explore the documentation or contact our <MerginMapsEmail id="sales" desc="sales team" /> or our <MerginMapsEmail id="support" desc="support team" /> to get more details.

QGIS is a powerful tool that comes with great community and resources. We recommend using <QGISHelp ver="latest" link="user_manual/index.html" text="QGIS User Guide" /> and <QGISHelp ver="latest" link="training_manual/index.html" text="QGIS Training Manual" /> to explore its functionality.
:::

## Felt and <MainPlatformName /> ecosystems

<MainPlatformNameLink /> is a platform that seamlessly integrates <QGIS link="en/site/forusers/download.html" text="QGIS" /> projects, providing a familiar workflow for GIS professionals. This connection ensures that <MainPlatformName /> users can benefit from the styling options, attributes form design, and data management capabilities provided by QGIS.

Felt is a browser-based mapping platform built around the map as the central object. Data is brought into a map by uploading files, pasting URLs or connecting a cloud data source, styled in the browser, and annotated on top. Field data is collected with the Felt Field App for iOS and Android, which works against the same map and syncs back to it.

Key differences between the platforms include:
- **Projects and maps**

   In Felt, the map is created in the browser and everything is assembled there: layers are uploaded or connected, then styled in the web interface, and the field app opens the resulting map on the device. 
   
   <MainPlatformName /> follows the logic of a QGIS project: a project holds all the survey layers, background maps, symbology and forms together. You prepare it once in QGIS on your computer and synchronise it to every device, which means the same desktop project you already use for analysis and map production is the one your field team carries.

- **QGIS interoperability**

   Both platforms connect to QGIS through a plugin, but the two plugins do different jobs. 
   
   The *Add to Felt* plugin publishes the visible layers of your QGIS project to Felt, either as a new map or into an existing one. It is a publishing step, so work done afterwards in Felt stays in Felt. 
   
   The *<QGISPluginName />* keeps the project and the platform in sync in both directions. You create the project from QGIS and push it to your workspace, then pull to bring down everything that has changed since your last synchronisation. Styling, forms and layers you adjust on the desktop go back up the same way, so the QGIS project stays in the single place where the project is defined.


- **Layers, features and attribute forms**
   
   Felt distinguishes between layers, which hold structured data and can be given attributes, and annotations, which are simply drawn on top of the map for markup. 
   
   <MainPlatformName /> makes a familiar distinction between annotations and layers, except annotations are spatial layers as well, stored in GeoPackages. The schema for created layers is standard, and it can be enhanced in QGIS through forms. [Forms are configured in QGIS with widgets](../../layer/overview/): besides text, numbers, dates and value lists, you can use photos, relations, default values, constraints and conditional visibility to build forms that guide the surveyor and validate the data as it is entered.

- **Sharing data between the office and the field**
   
   Felt keeps the working copy of the data on its servers and the field app edits that copy.
   
   <MainPlatformName /> synchronises the whole project. Changes made in the field are uploaded to the workspace and changes made in QGIS are pushed back to the devices, with [project history](../../manage/project-history/) recording every version and with support for collaborative editing by multiple surveyors on the same layers. Projects can also be shared as [webmaps](../../manage/dashboard-maps/) for colleagues who do not open QGIS.
   
- **Hosting**
   
   Felt is primarily a hosted service, and includes an option for advanced security with a self-hosted virtual private cloud. 
   
   <MainPlatformName /> can be used as a hosted service or [installed on your own server](../../server/), which is often a requirement for organisations that need their data to stay on their own infrastructure.

- **Supported formats of background maps**
   
   Both platforms read common GIS formats. 
   
   QGIS additionally connects directly to PostGIS, WMS, WMTS, WFS, XYZ tiles, MBTiles and many other sources, so most of what you have connected in Felt can be reconnected in QGIS without exporting anything. See the list of [supported formats](../../gis/supported_formats/).

## Migrating from Felt to <MainPlatformName />

### Migrating your collected data
Felt layers can be exported in formats that QGIS reads directly. Vector layers can be exported as GeoPackage, GeoJSON, Shapefile, KML, CSV, or GeoParquet, and raster layers as GeoTIFF. Annotations are exported separately, as GeoJSON.

::: tip
GeoPackage is the best target format, because it preserves attribute types and is the format <MainPlatformName /> uses for [survey layers](../../gis/features/#survey-layers).
:::

To migrate your data:
1. Export your layers from Felt. To export a layer, select it and go to **Felt > File > Export Selected**. Alternatively, right click on the layer, and select **Export**. 
2. Export all your annotations or only the selection, from the **Felt > File menu**. 
3. Create a QGIS project and save it in a local folder, next to the exported files.
4. Load the exported file(s) in QGIS. If needed, use <QGISHelp ver="latest" link="user_manual/processing_algs/qgis/vectortable.html#refactor-fields" text="Refactor Fields" />  from the Processing Toolbox to restore attribute types that the exchange format may have flattened into text, and save the outputs as GeoPackage layers.
5. Apply symbology to your layers and configure their forms with [appropriate widgets](../../layer/form-widgets/), for example [List of Values](../../layer/value-select/) for the picklists in your surveys, [Date and time](../../layer/date-time/) for date fields and [Checkbox](../../layer/checkbox/) for true/false fields.
6. For photos collected in the field, use the [Attachment widget](../../layer/photos/). 
   The image files have to be placed in your local project folder, so that they are synchronised together with the data. If images were attached to features as an attribute in Felt, the exported GeoPackage keeps the links to Felt's servers, and you can use them to retrieve the files.
7. Upload the QGIS project to your <MainPlatformName /> workspace using the [<QGISPluginName />](../../manage/plugin/). The project then synchronises to every device, where it is opened with the [<MobileAppName />](../../tutorials/mobile/).

::: tip Data already in a database
If your Felt layers come from a PostgreSQL/PostGIS database, there is no need to export anything. In QGIS, connect to it from **Layer > Data Source Manager > PostgreSQL**. You can also use [DB Sync](../../dev/dbsync/) to keep the database and the Mergin Maps project in step, so field edits land back in the database automatically.
:::

### Migrating your background maps
Background layers can be moved over or simply reconnected:

1. Layers that you connected in Felt by URL, such as XYZ tiles, WMS, WMTS or Esri services, can be added to QGIS with the same URL, through the Browser panel. See [Background Maps](../../gis/settingup_background_map/).
2. Georeferenced rasters that you uploaded to Felt can be exported as GeoTIFF and added to the QGIS project as raster layers.
3. Keep raster file size reasonable and <QGISHelp ver="latest" link="user_manual/processing_algs/gdal/rastermiscellaneous.html#build-overviews-pyramids" text="build overviews (pyramids)" /> for large rasters, so that the map stays responsive on mobile devices. For offline use, consider packaging background maps as MBTiles.

::: warning Felt basemaps
The basemaps provided inside Felt are part of that platform and cannot be transferred. QGIS offers a wide range of background map options instead, from XYZ services to your own tiles.
 :::

### Recreating your surveys
A Felt survey defines which attributes the field app asks for. The same result is achieved in QGIS by configuring the layer form:
1. Recreate each survey attribute as a field of the same type in the GeoPackage layer. You can do that by opening the layer’s properties and selecting Fields tab.
2. Then go to Attributes Form (still in the layer’s properties), set up the corresponding [widget](../../layer/form-widgets/) for each field, and use [default values](../../layer/default-values/) and [constraints](../../layer/constraints/) to keep entries consistent and validated at the moment of capture.
3. For longer surveys, organise the fields with [tabs and groups](../../layer/tabs-and-groups/) and use [conditional visibility](../../layer/conditional-visibility/) so that surveyors only see the questions that apply.


### Using <MainPlatformName />
To use your QGIS project within the <MainPlatformNameLink /> platform:
1. [Sign up to <MainPlatformName />](../../setup/sign-up-to-mergin-maps/)
2. [Install the <QGISPluginName />](../../setup/install-mergin-maps-plugin-for-qgis/)
3. [Install the <MobileAppName />](../../setup/install-mobile-app/)
4. [Synchronise the QGIS project to the <MobileAppNameShort />](../../manage/synchronisation/) using the <QGISPluginNameShort />. See how the settings done in QGIS translate to the <MobileAppNameShort />.

## Troubleshoot
Struggling to migrate your projects? We are happy to help you!

Book a short video call with our <MerginMapsEmail id="sales" desc="sales team" /> or write to our <MerginMapsEmail id="support" desc="support team" /> with your technical questions. You can also chat with our open-source community.

<CommunityJoin />

If you are looking for a professional partner to migrate your workflow, you can ask our <MainDomainNameLink id="partners" desc="partners"/> network or <LutraConsultingWeb />, the developers of <MainPlatformName />.

<PublicImage src="lutra-logo.png" title="Lutra Consulting Ltd. logo" style="width:50%" />

## Credits

Felt is developed by Felt Maps, Inc., which owns the corresponding trademarks.
