# Migrate from Fulcrum
[[toc]]

This guide is intended for current Fulcrum field data collection tool users who consider switching to <QGIS link="" text="QGIS" /> and <MainPlatformNameLink />. It might be helpful also to <MainPlatformName /> users looking to transfer their data from the FulcrumApp ecosystem.

:::tip Getting familiar with <MainPlatformName /> and QGIS
Switching to a new platform can be challenging. This documentation is here to help with the basics as well as some more advanced or specific settings.

To get familiar with <MainPlatformNameLink />, we recommend starting with the [**tutorials**](../../tutorials/capturing-first-data/). If there are specific topics that are crucial for your workflows, feel free to explore the documentation or contact our <MerginMapsEmail id="sales" desc="sales team" /> or our <MerginMapsEmail id="support" desc="support team" /> to get more details.

QGIS is a powerful tool that comes with great community and resources. We recommend using <QGISHelp ver="latest" link="user_manual/index.html" text="QGIS User Guide" /> and <QGISHelp ver="latest" link="training_manual/index.html" text="QGIS Training Manual" /> to explore its functionality.
:::

## FulcrumApp and Mergin Maps Ecosystems

<MainPlatformNameLink /> is a platform that seamlessly integrates <QGIS link="" text="QGIS" /> projects, providing a familiar workflow for GIS professionals. This strong connection ensures that <MainPlatformName /> users can benefit from the extensive styling options, attributes form design, and data management capabilities provided by QGIS.

FulcrumApp features a drag-and-drop form builder. Users can start with a blank form or import data in CSV or Shapefile format to build their data collection forms. Field data collection then follows within the Fulcrum environment.

Key differences between the platforms include:

- **Layers and datasets**: While Fulcrum often requires separate *apps* for different datasets (e.g., Trees, Fire Hydrants, and Light Poles), in <MainPlatformName /> you can have multiple layers within a single project without the need to switch apps during fieldwork.

- **Forms and Widgets**: <MainPlatformName /> uses QGIS extensive form and widget options, allowing for customised and powerful data entry interfaces for each layer in the project. Fulcrum offers a set of widgets, including a signature capture tool, which is currently unavailable in <MainPlatformName />.

- **Background Maps** are an essential part of field data collection. Compared to <MainPlatformName />, Fulcrum supports fewer formats, such as XYZ Tiles, MBTiles, WMS, GeoJSON, and ArcGIS Feature Services. All of these and some more are supported by <MainPlatformName />, including raster formats such as GeoTIFF (for more details, see the [list of supported formats](../../gis/supported_formats/)).


## Migrating from Fulcrum to Mergin Maps

Fulcrum allows users to export data as GeoJSON, which can be imported directly into QGIS. This enables users to display Fulcrum data in QGIS. However, it requires additional steps to make them editable both in QGIS and <MainPlatformName />.

To migrate your data:
1. Export Data from Fulcrum as GeoJSON file

2. Open the GeoJSON file in QGIS. See <QGISHelp ver="latest" link="user_manual/managing_data_source/opening_data.html" text="QGIS User guide" /> for help. 
   
3. Save the GeoJSON data as a GeoPackage

   GeoPackage is the recommended data format to use in <MainPlatformName />.

4. Now you can use your data to create a QGIS project and set the symbology for your layers, define their attributes forms using various widgets or add background maps as needed.

To use this QGIS project within the <MainPlatformNameLink /> platform:
1. [Sign up to <MainPlatformName />](../../setup/sign-up-to-mergin-maps/)
2. [Install the <QGISPluginName />](../../setup/install-mergin-maps-plugin-for-qgis/)
3. [Install the <MobileAppName />](../../setup/install-mobile-app/)
4. [Synchronise the QGIS project to the <MobileAppNameShort />](../../manage/synchronisation/) using the <QGISPluginNameShort />. See how the settings done in QGIS translate to the <MobileAppNameShort />.

## Troubleshoot
Struggling to migrate your projects? We are happy to help you!

Book a short video call with our <MerginMapsEmail id="sales" desc="sales team" /> or ask our <MerginMapsEmail id="support" desc="support team" />  your technical questions. We also have an active open-source community:

<CommunityJoin />

If you are looking for a professional partner to migrate your workflow, ask our <MainDomainNameLink id="partners" desc="partners network"/>  or <LutraConsultingWeb />, the developers of <MainPlatformName />.

<PublicImage src="lutra-logo.png" title="Lutra Consulting Ltd. logo" style="width:50%" />

## Credits

Fulcrum, FulcrumApp are developed and corresponding trademarks are owned by Spatial Networks Inc.
