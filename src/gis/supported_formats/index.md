# Supported Formats
<!-- reference -->

When working with <MobileAppName />, you can keep using standard data formats you are used to in QGIS. In general, most of the data formats that QGIS can load, can be also used in the <MobileAppNameShort />. There are however some minor differences worth highlighting.

[[toc]]

## Vector data on Mergin Maps mobile app

For survey layers used on the field, we strongly recommend GeoPackage, to be able to work fully offline, benefit from automatic merging of data (collaborative editing) and versioning.

| Format         |  Android/iOS  | Note                                                                                                |
|----------------|---------------|-----------------------------------------------------------------------------------------------------|
| GeoPackage     | :heart_eyes:  | collaborative editing and versioning by <GitHubRepo id="MerginMaps/geodiff" desc="geodiff" />  |
| Shapefile      | :warning:     | collaborative editing not supported                                                              |
| Delimited text | :warning:     | collaborative editing not supported                                                              | 
| Virtual layer  | :warning:     | collaborative editing not supported                                                              |                 
| [PostGIS](#postgresql-postgis)        | :thumbsup:    | requires internet connection              |
| WFS            | :warning:    | requires internet connection                                                                        |

There are more formats supported, please see full list of supported [QGIS providers](#supported-qgis-providers), [OGR and GDAL drivers](#supported-gdal-and-ogr-drivers).

::: tip
Go to [Behind Data Synchronisation](../../manage/synchronisation/index.md) to read more about how synchronisation works in <MainPlatformNameLink />.
:::

### PostgreSQL/PostGIS
PostgreSQL connection (username, password, host, port, etc.) can be set up:
- directly in QGIS PostgreSQL connection, if you want to reuse the same connection for everyone
- use a *Connection Service File* `pg_service.conf`, if you want to have different PostgreSQL user for each surveyor

To use a *Connection Service File*, you have to:
- create a `pg_service.conf` file as described in <QGISHelp ver="latest" link="user_manual/managing_data_source/opening_data.html#postgresql-service-connection-file" text="QGIS User Manual" /> and test it in QGIS Desktop
- [manually transfer](../../manage/missing-data/index.md) the `pg_service.conf` file to <MobileAppName /> data folder. The data folder is shown in the [Diagnostic Log](../../misc/troubleshoot/#diagnostic-log-on-mergin-maps-mobile-app)
- restart the <MobileAppNameShort />. Check the [Diagnostic Log](../../misc/troubleshoot/#diagnostic-log-on-mergin-maps-mobile-app) to see if the file is found and used after restart.

## Raster data on Mergin Maps mobile app

| Format         | Android/iOS      | Note                                                                                                       |   
|----------------|------------------|------------------------------------------------------------------------------------------------------------|
| GeoTIFF        | :thumbsup:        | jpg and webp compression                                                                                  |
| JPEG           | :thumbsup:        |                                                                                                           |
| PNG            | :thumbsup:        |                                                                                                           |
| COG (local)    | :thumbsup:        |                                                                                                           |
| MBTiles        | :thumbsup:        | png, jpg compression                                                                                      |
| <NoSpellcheck id="Geospatial" /> PDF | :thumbsup:        |                                                                                                           |
| WM(T)S         | :thumbsup:        | requires internet connection                                                                              |
| XYZ tiles      | :thumbsup:        | requires internet connection (e.g. OpenStreetMap)                                                         |
| COG (online)   | :thumbsup:   | requires internet connection |
| ECW            | :no_entry_sign:   | proprietary license                                                                                       |
| MrSID          | :no_entry_sign:   | proprietary license                                                                                       |

There are plenty of other raster formats we support through GDAL/OGR, please see [the full list](#supported-gdal-and-ogr-drivers).

::: tip
See [our guide](../settingup_background_map/index.md) for setting up background layers.
:::

## Vector tiles on Mergin Maps mobile app

We support vector tiles just like QGIS does - in Mapbox Vector Tiles (MVT) format - and stored either in a MBTiles file (for offline use) or through a template URL (for online service) such as `http://example.com/{z}/{x}/{y}.pbf`.

::: tip 
See [our guide](../settingup_background_map/index.md) for setting up background layers.
:::

## Supported QGIS providers

The currently supported QGIS providers are:
    
```
OGC API - Features data provider
WFS data provider
ArcGIS Feature Service data provider
ArcGIS Map Service data provider
Delimited text data provider
GDAL data provider
Memory provider
Mesh memory provider
OGR data provider
PostgreSQL/PostGIS data provider
SpatiaLite data provider
Vector tile provider
Virtual layer data provider
OGC Web Coverage Service version 1.0/1.1 data provider
OGC Web Map Service version 1.3 data provider
```

## Supported GDAL and OGR drivers

Full list of supported GDAL and OGR drivers can be found in <GitHubRepo id="MerginMaps/mobile/tree/master/docs/supported_formats.txt" desc="Mergin Maps mobile" /> repository.

## How to convert between GDAL/OGR formats

To convert between various GDAL formats, you can use [gdal_translate](https://gdal.org/programs/gdal_translate.html) command-line utility.

## Support for new formats

If you find out that the <MobileAppName /> doesn't support your format, please open issue at <GitHubRepo id="MerginMaps/mobile" />.

If QGIS on desktop does not support the format of your choice, open issue at <GitHubRepo id="qgis/QGIS-Mac-Packager" /> for macOS, or <GitHubRepo id="qgis/QGIS" /> for other platforms.

For support of collaborative editing and versioning of vector data formats, please open issue at <GitHubRepo id="MerginMaps/geodiff" />.

