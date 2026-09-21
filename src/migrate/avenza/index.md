---
description: Do you consider switching from Avenza Maps to Mergin Maps? See the comparison of both platforms and practical tips for migrating to Mergin Maps.

outline: deep
---

# Migrate from Avenza Maps
[[toc]]

This guide is intended for current Avenza Maps users who consider switching to <QGIS link="en/site/forusers/download.html" text="QGIS" /> and <MainPlatformNameLink />. It might be helpful also to Mergin Maps users looking to transfer their maps and field data from the Avenza Maps ecosystem. 

::: tip Getting familiar with Mergin Maps and QGIS
Switching to a new platform can be challenging. This documentation is here to help with the basics as well as some more advanced or specific settings.

To get familiar with <MainPlatformNameLink />, we recommend starting with the [**tutorials**](../../tutorials/capturing-first-data/). If there are specific topics that are crucial for your workflows, feel free to explore the documentation or contact our <MerginMapsEmail id="sales" desc="sales team" /> or our <MerginMapsEmail id="support" desc="support team" /> to get more details.

QGIS is a powerful tool that comes with great community and resources. We recommend using <QGISHelp ver="latest" link="user_manual/index.html" text="QGIS User Guide" /> and <QGISHelp ver="latest" link="training_manual/index.html" text="QGIS Training Manual" /> to explore its functionality.
:::

## Avenza Maps and <MainPlatformName /> ecosystems

<MainPlatformNameLink /> is a platform that seamlessly integrates <QGIS link="en/site/forusers/download.html" text="QGIS" /> projects, providing a familiar workflow for GIS professionals. This connection ensures that <MainPlatformName /> users can benefit from the styling options, attributes form design, and data management capabilities provided by QGIS.
Avenza Maps is built around georeferenced map documents. Users bring in a map from the Avenza Map Store or import their own georeferenced file, then collect placemarks, lines, areas and tracks on top of it. Data is moved in and out of the app by importing and exporting files.

Key differences between the platforms include:
- **Projects and maps**

   In Avenza Maps, the map document is the starting point and feature layers are linked to it. Georeferenced raster documents (Geospatial PDF, TerraGo GeoPDF, GeoTIFF, or JPG packaged with a world file) are imported and tiled on the device. Alternatively, a basemap can be used as a starting point and the user can draw layers on top of it.
   
   <MainPlatformName /> follows the logic of a QGIS project: a project holds all the survey layers, background maps, symbology and forms together. You prepare it once in QGIS on your computer and synchronise it to every device, so field users do not need to assemble the map themselves.

- **Layers, features and attribute forms**
   
   Avenza Maps uses attribute schemas, which define an attribute name, its type and optional properties such as a picklist. Schemas are created in the app and shared between users as files.
   
   In <MainPlatformName />, the schema for created layers is standard. But it can be enhanced in QGIS through forms. [Forms are configured in QGIS with widgets](../../layer/overview/). Besides text, numbers, dates and value lists, you can use photos, relations, default values, constraints and conditional visibility to build forms that guide the surveyor and validate the data as it is entered.

- **Sharing data between the office and the field**
   
   In Avenza Maps, projects are transferred as exported files, one map or one layer at a time.
   
   <MainPlatformName /> synchronises the whole project. Changes made in the field are uploaded to the workspace and changes made in QGIS are pushed back to the devices, with project history recording every version and with support for collaborative editing by multiple surveyors on the same layers.

- **Supported formats of background maps**
   
   Avenza Maps works primarily with georeferenced rasters imported to the device.

   <MainPlatformName /> supports these raster maps as well, together with vector layers, XYZ tiles, MBTiles, WMS and WMTS services, and more (for more details, see the list of supported formats).

## Migrating from Avenza Maps to <MainPlatformName />

### Migrating your collected data
Map features collected in Avenza Maps can be exported in formats that QGIS reads directly, such as KML/KMZ, CSV, Shapefile or GeoPackage. Note that some export formats require an Avenza Maps Pro subscription.

To migrate your data:
1. Export your features from Avenza Maps. 
   KML is a safe choice, as it covers placemarks, lines, areas and tracks, and can carry attached photos. Navigate to your Map layers and select the Export option. Note that the free version supports only export of layers, not of the entire map (and only as .kml, .gpx and .csv).
2. Create a QGIS project and save it in a local folder.
3. Load the exported file(s) in QGIS using, e.g., [KML Tools plugin](https://plugins.qgis.org/plugins/kmltools/). 
   The plugin will retain all the attributes, but will convert certain types (such as Boolean or Dates) into Text type. It will also use a default symbology which has to be changed later.   
4. Use  <QGISHelp ver="latest" link="user_manual/processing_algs/qgis/vectortable.html#refactor-fields" text="Refactor Fields" /> (from the Processing Toolbox) on the imported layers to re-create your attribute schema as desired (delete extra fields, convert Text types back to Dates/Boolean etc.). Save the outputs as GeoPackages. 
5. Proceed with applying the appropriate symbology on your layers and implementing various widgets on their attributes (such as [List of Values](../../layer/value-select/) or [Date and time](../../layer/date-time/)). 
6. For Photo attachments, you can use the [Attachment widget](../../layer/photos/). 
   For this, your captured Photos must also be exported from your device and be placed in your local folder.
7. Now you can upload your QGIS project onto your <MainPlatformName /> workspace using the [<QGISPluginName />](../../manage/plugin/). 
   Your project will automatically sync across your other devices, and you can view it from there as well, using the [<MobileAppName />](../../tutorials/mobile/). 

### Migrating your maps
Georeferenced maps used in Avenza Maps can be reused as background maps in your QGIS project:
1. Add the GeoTIFF or geospatial PDF to QGIS as a raster layer and check that it is placed correctly.
2. If needed, convert the file to GeoTIFF using the <QGISHelp ver="latest" link="user_manual/processing_algs/gdal/index.html" text="GDAL" /> tools available in the QGIS Processing toolbox. This is worth doing for PDF documents with a lot of vector content, which can be slow to render.
3. Keep the file size reasonable and <QGISHelp ver="latest" link="user_manual/processing_algs/gdal/rastermiscellaneous.html#build-overviews-pyramids" text="build overviews (pyramids)" /> for large rasters, so that the map stays responsive on mobile devices.

:::warning Maps from the Avenza Map Store
Maps purchased or downloaded from the Avenza Map Store are licensed for use within the Avenza Maps app and cannot be transferred to another platform. Use your own georeferenced maps, or one of the background map options available in QGIS instead.
:::

### Using <MainPlatformName />
To use your QGIS project within the <MainPlatformNameLink /> platform:
1. [Sign up to <MainPlatformName />](../../setup/sign-up-to-mergin-maps/)
2. [Install the <QGISPluginName />](../../setup/install-mergin-maps-plugin-for-qgis/)
3. [Install the <MobileAppName />](../../setup/install-mobile-app/)
4. [Synchronise the QGIS project to the <MobileAppNameShort />](../../manage/synchronisation/) using the <QGISPluginNameShort />. See how the settings done in QGIS translate to the <MobileAppNameShort />.

## Troubleshoot
Struggling to migrate your projects? We are happy to help you!

Book a short video call with our <MerginMapsEmail id="sales" desc="sales team" /> or write your technical questions to our <MerginMapsEmail id="support" desc="support team" />. You can also chat with our open-source community.

<CommunityJoin />

If you are looking for a professional partner to migrate your workflow, you can ask our <MainDomainNameLink id="partners" desc="partners"/> network or <LutraConsultingWeb />, the developers of <MainPlatformName />.

<PublicImage src="lutra-logo.png" title="Lutra Consulting Ltd. logo" style="width:50%" />

## Credits

Avenza Maps is developed and corresponding trademarks are owned by Avenza Systems, Inc.
