# Working with Non-spatial Tables
[[toc]]

::: warning
Our mobile app was redesigned. We are in the process of updating this content to reflect these changes.
:::

Non-spatial tables are often a key part of a survey project. The tables can be used either on their own to add new data or linked to a spatial layer, e.g. when linking multiple [photos](./attach-multiple-photos-to-features/) or [records](./one-to-n-relations/). They can be also used in [value relation](../layer/settingup_forms/#value-relation) widgets.

We recommend using **GeoPackage** format to save your non-spatial table. With this format, you can collaboratively edit the data and track changes.

## Enable editing and browsing of non-spatial layers
Ensure you have [enabled editing and browsing](../gis/search_data/) of your non-spatial table in **Project Properties** in QGIS.

![QGIS project properties editing and browsing setup](./qgis_nonspatial_properties.jpg "QGIS project properties editing and browsing setup")

## Non-spatial layers in Mergin Maps mobile app
Non-spatial tables can be browsed, searched and edited in the <MobileAppNameShort />.

Tap the [**Layers**](../field/layers/) button to open the list of layers, including non-spatial tables, in the project.

![Layers in Mergin Maps mobile app](./mobile-app-non-spatial-layers.jpg "Layers in Mergin Maps mobile app")

Tap on a layer to open its attributes table where you can browse the data and [search for values](../gis/search_data/#searching-for-values-in-mergin-maps-mobile-app). It is also possible to [add and edit](../field/mobile-features/#add-non-spatial-features) entries in the table.

