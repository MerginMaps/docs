# Migrate from Fulcrum
[[toc]]

This guide is intended for current Fulcrum field data collection tool users who consider switching to <QGIS link="en/site/forusers/download.html" text="QGIS" /> and <MainPlatformNameLink />. It might be helpful also to <MainPlatformName /> users looking to transfer their data from the FulcrumApp ecosystem.

:::tip Getting familiar with <MainPlatformName /> and QGIS
Switching to a new platform can be challenging. This documentation is here to help with the basics as well as some more advanced or specific settings.

To get familiar with <MainPlatformNameLink />, we recommend starting with the [**tutorials**](../../tutorials/capturing-first-data/). If there are specific topics that are crucial for your workflows, feel free to explore the documentation or contact our <MerginMapsEmail id="sales" desc="sales team" /> or our <MerginMapsEmail id="support" desc="support team" /> to get more details.

QGIS is a powerful tool that comes with great community and resources. We recommend using <QGISHelp ver="latest" link="user_manual/index.html" text="QGIS User Guide" /> and <QGISHelp ver="latest" link="training_manual/index.html" text="QGIS Training Manual" /> to explore its functionality.
:::

## FulcrumApp and Mergin Maps Ecosystems

Mergin Maps Mobile is designed to seamlessly integrate with QGIS projects, providing a familiar workflow for GIS professionals. This strong connection to QGIS ensures that Mergin Maps can leverage QGIS's extensive styling, form design, and data management capabilities.

FulcrumApp features a drag-and-drop form builder. Users can start with a blank form or import data in CSV or Shapefile format to build their data collection forms. Field data collection then follows within the Fulcrum environment.

Key differences between the platforms include:

* Forms and Widgets: Mergin Maps benefits from QGIS's extensive form and widget options, allowing for customized and powerful data entry interfaces. Fulcrum offers a set of widgets, including a signature capture tool, which is currently unavailable in Mergin Maps. Mergin Maps allows multiple layers to be loaded into a geopackage, enabling the editing of multiple layers with dedicated forms — a significant advantage for managing complex datasets.

* Background Maps: Mergin Maps leverages QGIS projects as background maps, ensuring users can access detailed and customized reference layers during field data collection. Fulcrum provides a more limited selection of background options, including XYZ Tiles, MBTiles, WMS, GeoJSON, and ArcGIS Feature Services. Notably, Fulcrum does not support raster formats such as GeoTIFF for background layers.

## Migrating from Fulcrum to Mergin Maps

Fulcrum allows users to export data as GeoJSON, which can be imported directly into QGIS. This enables users to visualize Fulcrum data in QGIS, although editing requires additional steps.

To migrate your data:

* Export Data from Fulcrum: Use Fulcrum's export feature to generate a GeoJSON file. Users may consult FulcrumApp documentation for other means of exporting geodata, but it must be compatible with QGIS.
* Import into QGIS: Load the GeoJSON file into QGIS for visualization and further data preparation.
* Create a Geopackage: Save the imported data as a geopackage to set up a foundational data collection environment in Mergin Maps.
* Enhance with QGIS Forms and Widgets: Utilize QGIS's form-building capabilities to create dropdown lists, conditional fields, and other customized inputs to improve data collection workflows.

While Fulcrum often requires separate apps for different datasets (e.g., Trees, Fire Hydrants, and Light Poles), Mergin Maps enables users to manage multiple layers within a single project, improving efficiency and reducing app switching during fieldwork.

By leveraging QGIS's powerful tools and Mergin Maps' seamless integration, transitioning from Fulcrum can result in a streamlined and flexible data collection solution.

## Troubleshoot
Struggling to migrate your projects? We are happy to help you!

Book a short video call with our <MerginMapsEmail id="sales" desc="sales team" /> or ask our <MerginMapsEmail id="support" desc="support team" />  your technical questions. We also have an active open-source community:

<CommunityJoin />

If you are looking for a professional partner to migrate your workflow, ask our <MainDomainNameLink id="partners" desc="partners network"/>  or <LutraConsultingWeb />, the developers of <MainPlatformName />.

<PublicImage src="logo_lutra.svg" title="Lutra Consulting Ltd. logo" style="width:50%" />

## Credits

Fulcrum, FulcrumApp are developed and corresponding trademarks are owned by [Spatial Networks Inc.](https://www.fulcrumapp.com/company/).
