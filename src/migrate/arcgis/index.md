# Migrate from ArcGIS
[[toc]]

This guide is intended for current ArcGIS ecosystem and it's field collection tools users considering switching to QGIS and <MainPlatformName /> as well as for <MainPlatformName /> users looking to transfer their data from ESRI ecosystem.

Users highlights cost savings, interoperability and flexibility in usage of QGIS and <MainPlatformName /> in comparison with ESRI's ArcGIS tools for field surveys such as Collector, Survey123, QuickCapture or Field Maps.

## ArcGIS vs QGIS ecosystems

In general, ArcGIS ecosystem contains properiatory tools while QGIS ecosystem is based on open-source philosophy. As such, combination of use of both ecosystem is usually not straightforward and it is preferred to stick with QGIS fully. Nevertheless, some data formats are possible to use in both of them. For field surveys with <MainPlatformName />, you prepare the project in QGIS and you have a single app to convey the survey. On the other hand, there are multiple applications in ArcGIS world for it, where <MobileAppName /> is closest to ArcGIS Field Maps. These 

| ArcGIS Ecosystem | <MainPlatformName /> | Note |
|---|---|---|
| ArcGIS Pro | QGIS | Desktop GIS application |
| ArcGIS QuickCapture | <MobileAppName /> | Field Survey App |
| ArcGIS Survey123 | <MobileAppName /> | Form-based Field Survey App |
| ArcGIS Field Maps | <MobileAppName /> | Field Survey App |
| ArcGIS Maps SDK | <GitHubRepo id="MerginMaps/python-api-client" desc="Python client" /> and QGIS API| Developer SDK |

ArcGIS Pro replaced [ArcMap](https://en.wikipedia.org/wiki/ArcMap)
ArcGIS Field Maps was replaced by ArcGIS Collector from end of [2021](https://www.esri.com/arcgis-blog/products/collector/field-mobility/arcgis-collector-on-windows-platform-is-retired/)

## Migrate ArcGIS project to QGIS project

To migrate the project, we recommend to
 
1. use SLYR plugin to transfer ArcGIS project to QGIS project (including styling, etc.). 
2. Convert your survey (vector) layers to GeoPackage (e.g from Shapefile, FileGDB), if it was not done so by SLYR already. 
3. Optionally convert rest of the data sources to formats [supported](../../gis/supported_formats.md) by <MainPlatformName />
4. Fine-tune the styling and setting of the QGIS project and its layers in QGIS 
5. Sync the project to <MobileAppName /> and check if you are satisfied with all your layers and styling and forms in your survey layers/ 

Alternatively you can convert the data files you use in the project to formats and then recreate the project and its styling in QGIS manually.

### SLYR 

The SLYR tool by [North Road](https://north-road.com) facilitates the migration from ArcGIS to QGIS by enabling the conversion of various propriatory data formats, styles and project files to QGIS-compatible formats, such as the conversion of MXD (ArcMap) and AXL (ArcIMS) files to QGIS project files. 
This tool helps users transition smoothly by preserving complex symbology, layouts, and project structure. It simplifies the shift from proprietary ESRI tools to the open-source QGIS environment, reducing the time and effort needed to replicate existing workflows. SLYR tool offers Community and Licensed version. 

- Community version is open-sourced on <GitHubRepo id="north-road/slyr" desc="GitHub" /> and can be freerly installed via QGIS Plugin Manager to mostly extract, parse, and convert of ESRI .lyr, .mxd and .style files to QGIS ecosystem formats. 
- Licensed version is closed-sourced and has features such as MXD/MXT import, print layout or very importantly conversion to GeoPackage files. 

Full comparison of the version can be found on North Road's [SLYR project page](https://north-road.com/slyr/). 

![SLYR logo](./slyr.png "SLYR logo")

### Data Formats

ArcGIS Pro supports [GeoPackages](https://pro.arcgis.com/en/pro-app/latest/help/data/databases/work-with-sqlite-databases-in-arcgis-pro.htm), which are the primary and recommended format for your survey layer in <MainPlatformName />. Both ArcGIS and QGIS can also handle Shapefile, GeoTIFF, GeoJSON, WMS, WFS, and PostGIS. However we do not recommened using [Shapefile](http://switchfromshapefile.org), where one of the primary reason is that <MainPlatformName /> does not support collaborative use for this particular format.

We recommend using SLYR's processing algorithm to convert project data to GeoPackage (GPKG). You can also use QGIS "Convert format" or "Package layers" processing algorithms. Alternatively export your data to [supported](../../gis/supported_formats.md) formats by <MainPlatformName /> even in ArcGIS Pro environment if you feel more confortable doing so there. Also `ogr2ogr` command line tool can be used for data conversion in the console.

## Hybrid setup 

If your data are stored in PostgreSQL/PostGIS database, you can work with them in ArcGIS Pro directly. You can setup `db_sync` to synchronise project data from PostgreSQL to <MainPlatformName /> project data (ie. GeoPackage stored on the server). Then you still need to have QGIS project to style your data in GeoPackage (see Migrate section). This way you can work with your data directly in ArcPro and also use <MobileAppName /> for data collection in the field. Collected data in the field will be synchronised to the server and via `db_sync` they will be also available in the PostgreSQL database for ArcGIS use. 

Note that this to work you need to use standart PostGIS geometry standard (`ST_Geometry`) and not ArcSDE geometry standart.

## Troubleshoot
Struggling to migrate your projects? We are happy to help you!

Book a short video call with our <MerginMapsEmail id="sales" desc="sales team" /> or write your technical questions to our <MerginMapsEmail id="support" desc="support team" />. You can also chat with our open-source community.

<CommunityJoin />

If you are looking for a professional partner to migrate your workflow, you can ask our <MainDomainNameLink id="partners" desc="partners"/> network or <LutraConsultingWeb />, the developers of <MainPlatformName />
<PublicImage src="logo_lutra.svg" title="Lutra Consulting Ltd. logo" style="width:50%" />

## Credits

ArcMap, ArcGIS Pro, ArcGIS Enterprise, ArcGIS Online, ArcGIS Server, ArcSDE, ArcGIS Survey123, Collector for ArcGIS, ArcGIS QuickCapture, ArcGIS FieldMaps are developed and corresponding trademarks are owned by <NoSpellcheck id="ESRI" />.
