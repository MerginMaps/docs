# Search values from attribute fields

You can search for the content of your attribute data from Input. Input is also capable of **split search**: searching values from multiple fields.

## QGIS project configuration

To be able to search the attribute table of a layer, you need to first configure your <QGISHelp ver="3.10" link="user_manual/introduction/qgis_configuration.html?highlight=properties#data-sources-properties" text="QGIS project" />:

- Open QGIS Desktop with you QGIS Project
- In the Menu > Project > Properties click on "Data Sources"
![browse_enable](./qgis_data_sources.png)
- Under **Searchable** column, select the layers you'd like to search

## Search attribute data in Input

To search for a record, you first need to [open the attribute table](../mobile/enable_browsing.md). You can then type in the string and Input should shortlist the matching records.

Selecting an individual record, Input will open the form related to the feature.

![display_name](./input_search_data.png)
