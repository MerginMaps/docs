# Migrate from ArcGIS
[[toc]]

This guide is intended for current ArcGIS and ArcGIS field data collection tools users who consider switching to <QGIS link="en/site/forusers/download.html" text="QGIS" /> and <MainPlatformNameLink />. It might be helpful also for <MainPlatformName /> users looking to transfer their data from the Esri ecosystem.

From our experience, users highlight cost savings, interoperability and flexibility when using QGIS and <MainPlatformName /> in comparison with <NoSpellcheck id="Esri's" /> ArcGIS tools for field surveys such as Collector, Survey123, QuickCapture or Field Maps.

:::tip Getting familiar with <MainPlatformName /> 
Switching to a new platform can be challenging. This documentation is here to help with the basics as well as some more advanced or specific settings.

To get familiar with <MainPlatformNameLink />, we recommend starting with the [**tutorials**](../../tutorials/capturing-first-data/). If there are specific topics that are crucial for your workflows, feel free to explore the documentation or contact our <MerginMapsEmail id="sales" desc="sales team" /> or our <MerginMapsEmail id="support" desc="support team" /> to get more details.
:::

## ArcGIS vs QGIS ecosystems

In general, ArcGIS is a proprietary software platform while <QGIS link="en/site/forusers/download.html" text="QGIS" /> is based on open-source philosophy. As such, it is usually not easy or straightforward to have a workflow that combines both environments. Nevertheless, there are, e.g., some common [data formats](#data-formats) that can be used in both of them. 

When it comes to field data collection, there are multiple applications in the ArcGIS ecosystem and also some that can be used with QGIS. One of the QGIS-based applications is <MobileAppName />: a project is created and QGIS and this single <MobileAppNameShort /> is used to collect, update or browse data in the field. The most similar app to <MobileAppName /> is the ArcGIS Field Maps.

Here is a comparison of the main components of both ecosystems:

| ArcGIS | <MainPlatformName /> | Component |
|---|---|---|
| ArcGIS Pro* | <QGIS link="en/site/forusers/download.html" text="QGIS" /> | desktop GIS application |
| ArcGIS QuickCapture | <MobileAppName /> | field survey application |
| ArcGIS Survey123 | <MobileAppName /> | form-based field survey application |
| ArcGIS Field Maps** | <MobileAppName /> | field survey application |
| ArcGIS Maps SDK | [Python client](../../dev/integration/#python-client-module) and QGIS API| developer SDK |

*ArcGIS Pro replaced [ArcMap](https://en.wikipedia.org/wiki/ArcMap)
**ArcGIS Field Maps replaced ArcGIS Collector since the end of [2021](https://www.Esri.com/arcgis-blog/products/collector/field-mobility/arcgis-collector-on-windows-platform-is-retired/)

## Migrate from ArcGIS to QGIS

To migrate the project, we recommend to: 
1. Use the [**SLYR**](#slyr) plugin to transfer the ArcGIS project to QGIS project (including styling, etc.).
2. Convert your survey (vector) layers (e.g from Shapefile or File Geodatabase) to GeoPackage if not done already by SLYR 
3. Optionally, convert rest of the data sources to formats [supported](../../gis/supported_formats.md) by <MainPlatformName />
4. Fine-tune the styling and settings of the layers and QGIS project

Alternatively, you can convert the data files you use in the project to [supported](../../gis/supported_formats.md) formats and recreate the project and its settings in QGIS manually.

To use your QGIS project with the <MainPlatformNameLink /> platform:
1. [Sign up to <MainPlatformName />](../../setup/sign-up-to-mergin-maps/)
2. [Install the <QGISPluginName />](../../setup/install-mergin-maps-plugin-for-qgis/)
3. [Install the <MobileAppName />](../../setup/install-mobile-app/)
4. Sync the QGIS project to <MobileAppName /> using the <QGISPluginNameShort />. See how the settings done in QGIS translate to the <MobileAppNameShort />.

### SLYR 

The [SLYR tool](https://north-road.com/slyr/) by [North Road](https://north-road.com) facilitates the migration from ArcGIS to QGIS by enabling the conversion of various proprietary data formats, styles and project files to QGIS-compatible formats, such as the conversion of MXD (ArcMap) and AXL (<NoSpellcheck id="ArcIMS" />) files to QGIS project files.

This tool helps users transition smoothly by preserving complex symbology, layouts, and project structure. It simplifies the shift from Esri tools to the open-source QGIS environment, reducing the time and effort needed to replicate existing workflows. 

SLYR tool offers Community and Licensed version:
- Community version is open-sourced on <GitHubRepo id="north-road/slyr" desc="GitHub" /> and can be freely installed via QGIS Plugin Manager to extract, parse, and convert Esri `.lyr` and `.style` files to QGIS-compatible formats. 
- Licensed version is closed-sourced and has features such as converting `MXD/MXT` project files to `QGS` or converting various data formats to GeoPackage. 

Full comparison of the version can be found on North Road's [SLYR project page](https://north-road.com/slyr/). 

![SLYR logo](./slyr.png "SLYR logo")


### Domains 

ArcGIS Pro [domains](https://pro.arcgis.com/en/pro-app/latest/help/data/geodatabases/overview/create-modify-and-delete-domains.htm) are used to restrict the valid values allowed in an attribute field. Convert them manually to QGIS drop-down widgets - likely [Value Relation](../../layer/form-widgets) - could be time consuming. You can export the domains to CSV to be imported and set value relation widgets, along with it's custom expression visibility to mimic cascading forms. We again recommend using [SLYR](#slyr) to facilitate the conversion of domains to QGIS.

### Data Formats

ArcGIS Pro [supports GeoPackages](https://pro.arcgis.com/en/pro-app/latest/help/data/databases/work-with-sqlite-databases-in-arcgis-pro.htm), which are the primary and recommended format for your survey layer in <MainPlatformName />. Both ArcGIS and QGIS can also handle Shapefile, GeoTIFF, GeoJSON, WMS, WFS, and PostGIS layers. However, we do not recommend using [Shapefile](http://switchfromshapefile.org) in <MainPlatformName />, as we do not support collaborative use for this format.

There are multiple options for data conversion. We recommend using [SLYR](#slyr) processing algorithms to convert project data to GeoPackage (GPKG). You can also use QGIS *Convert format* or *Package layers* processing algorithms. Alternatively, export your data to [formats supported by <MainPlatformName />](../../gis/supported_formats.md) in ArcGIS Pro, if you feel more comfortable doing it there. Data conversion can be done also in the console using the `ogr2ogr` command line tool.

## Hybrid setup: using Mergin Maps with ArcGIS

It is possible to use ArcGIS and <MainPlatformName /> in a hybrid setup. If you store your data in PostgreSQL/PostGIS database, you can use our [DB Sync](../../dev/dbsync/) tool to synchronise project data from PostgreSQL to <MainPlatformName /> (i.e. storing data in GeoPackages on <MainPlatformName /> server). You still need to have a QGIS project to style your GeoPackage data and set up the project (see the [Migrate section](#migrate-from-arcgis-to-qgis)).

This way you can work with your data directly in ArcGIS Pro and also use <MainPlatformName /> tools, such as <MobileAppName /> for data collection in the field. Field data can be synchronised to the <MainPlatformName /> server and then to the PostgreSQL database via **DB Sync** tool for ArcGIS use.

Note that this requires using the PostGIS geometry standard (`ST_Geometry`) and not ArcSDE geometry.


## Troubleshoot
Struggling to migrate your projects? We are happy to help you!

Book a short video call with our <MerginMapsEmail id="sales" desc="sales team" /> or ask our <MerginMapsEmail id="support" desc="support team" />  your technical questions. We also have an active open-source community:

<CommunityJoin />

If you are looking for a professional partner to migrate your workflow, ask our <MainDomainNameLink id="partners" desc="partners network"/>  or <LutraConsultingWeb />, the developers of <MainPlatformName />.

<PublicImage src="logo_lutra.svg" title="Lutra Consulting Ltd. logo" style="width:50%" />

## Credits

ArcMap, ArcGIS Pro, ArcGIS Enterprise, ArcGIS Online, ArcGIS Server, ArcSDE, ArcGIS Survey123, Collector for ArcGIS, ArcGIS QuickCapture, ArcGIS FieldMaps are developed and corresponding trademarks are owned by [Esri](https://www.esri.com/en-us/home).
