---
category: 'Mobile Input App'
permalink: working_with_nonspatial_data
title: Working with non-spatial tables
---

Non-spatial tables are often a key part of a survey project. The tables can be used either on their own to add new data or alternatively as a link to a spatial layer (e.g. value relation).

We recommend using Geopackage to save your non-spatial table. With this format, you can collaboratively edit the data and track changes.

# QGIS project configuration

Ensure you have enabled editing and searching of your non-spatial table in QGIS [QGIS project](https://docs.qgis.org/3.10/en/docs/user_manual/introduction/qgis_configuration.html?highlight=properties#data-sources-properties):

![browse_enable](/images/qgis_nonspatial_properties.png)

# Browse, search and edit non-spatial data in Input

To browse, search or edit a non-spatial table, first you need to [open the attribute table](/howto/browse_data.html).

To add a new record, select **Add Feature**. This will open a form to fill. By pressing **Save**, the new record will be added and Input will take you back to the attribute of your table.

Similar to the vector layer attribute table, you can [search](./search_data.html) your data.

Selecting an individual record, Input will open the form related to the feature.

![display_name](../images/input_nonspatial_data.png)
