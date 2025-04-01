# Migrate from Fulcrum
[[toc]]

This guide is intended for current Fulcrum field data collection tool users who consider switching to <QGIS link="" text="QGIS" /> and <MainPlatformNameLink />. It might be helpful also to <MainPlatformName /> users looking to transfer their data from the FulcrumApp ecosystem.

:::tip Getting familiar with <MainPlatformName /> and QGIS
Switching to a new platform can be challenging. This documentation is here to help with the basics as well as some more advanced or specific settings.

To get familiar with <MainPlatformNameLink />, we recommend starting with the [**tutorials**](../../tutorials/capturing-first-data/). If there are specific topics that are crucial for your workflows, feel free to explore the documentation or contact our <MerginMapsEmail id="sales" desc="sales team" /> or our <MerginMapsEmail id="support" desc="support team" /> to get more details.

QGIS is a powerful tool that comes with great community and resources. We recommend using <QGISHelp ver="latest" link="user_manual/index.html" text="QGIS User Guide" /> and <QGISHelp ver="latest" link="training_manual/index.html" text="QGIS Training Manual" /> to explore its functionality.
:::

## FulcrumApp and Mergin Maps Ecosystems

<MainPlatformNameLink /> is a platform that seamlessly integrates <QGIS link="" text="QGIS" /> projects, providing a familiar workflow for GIS professionals. This strong connection ensures that <MainPlatformName /> users can benefit from the styling options, attributes form design, and data management capabilities provided by QGIS.

FulcrumApp features a drag-and-drop form builder. Users can start with a blank form or import data in CSV or Shapefile format to build their data collection forms. Field data collection then follows within the Fulcrum environment.

Key differences between the platforms include:

- **Layers, datasets, forms and widgets**
   <MainPlatformName /> follows the logic of a QGIS project: you can have multiple layers with their own attributes form set up with QGIS [widgets](../../layer/form-widgets/) within a single project. All survey layers in a project can be edited in the <MobileAppNameShort /> in one session. 
   
   Fulcrum usually works best at *one app per layer*: having separate apps for different datasets and switching between the apps during the field survey. 

- **Supported formats of background maps**

   Fulcrum supports a selection of common formats, such as XYZ Tiles, MBTiles, WMS, GeoJSON, and ArcGIS Feature Services. 
   
   All of these and some more are supported by <MainPlatformName />, including raster formats such as GeoTIFF (for more details, see the [list of supported formats](../../gis/supported_formats/)).


## Migrating from Fulcrum to Mergin Maps

Data from Fulcrum can be exported to multiple formats that can be imported directly into QGIS, such as GeoJSON, KML or Shapefile. This enables users to display Fulcrum data in QGIS.

To migrate your data:
1. Export Data from Fulcrum as GeoJSON file (or other QGIS-supported format)
2. Open the GeoJSON file in QGIS. See <QGISHelp ver="latest" link="user_manual/managing_data_source/opening_data.html" text="QGIS User guide" /> for help. 
3. Save the GeoJSON data as GeoPackage. GeoPackage is a great data format to use to visualize, edit and manage data in QGIS. It is the recommended data format for survey layers in <MainPlatformName />.
4. Now you can use your data to create a QGIS project: set the symbology for your layers, define their attributes forms using various widgets or add background maps as needed.

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
