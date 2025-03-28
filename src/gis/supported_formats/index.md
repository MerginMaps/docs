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

There are more formats supported, please see full list of supported [QGIS providers](#full-list-of-supported-qgis-providers) and [OGR drivers](#full-list-of-supported-ogr-drivers)

::: tip
Go to [Behind Data Synchronisation](../../manage/synchronisation/) to read more about how synchronisation works in <MainPlatformNameLink />.
:::

### PostgreSQL/PostGIS
PostgreSQL connection (username, password, host, port, etc.) can be set up:
- directly in QGIS PostgreSQL connection, if you want to reuse the same connection for everyone
- use a *Connection Service File* `pg_service.conf`, if you want to have different PostgreSQL user for each surveyor

To use a *Connection Service File*, you have to:
- create a `pg_service.conf` file as described in <QGISHelp ver="latest" link="user_manual/managing_data_source/opening_data.html#postgresql-service-connection-file" text="QGIS User Manual" /> and test it in QGIS Desktop
- [manually transfer](../../manage/missing-data/) the `pg_service.conf` file to <MobileAppName /> data folder. The data folder is shown in the [Diagnostic Log](../../misc/troubleshoot/#diagnostic-log-on-mergin-maps-mobile-app)
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

There are plenty of other raster formats we support through GDAL/OGR, please see [the full list](#full-list-of-supported-gdal-drivers)

::: tip
See [our guide](../settingup_background_map/) for setting up background layers.
:::

## Vector tiles on Mergin Maps mobile app

We support vector tiles just like QGIS does - in Mapbox Vector Tiles (MVT) format - and stored either in a MBTiles file (for offline use) or through a template URL (for online service) such as `http://example.com/{z}/{x}/{y}.pbf`.

::: tip 
See [our guide](../settingup_background_map/) for setting up background layers.
:::

## Full list of supported QGIS providers

The <MobileAppNameShort /> is based on the <GitHubRepo id="MerginMaps/mobile-sdk" /> with custom QGIS core library build. The currently supported QGIS providers are
    
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

## Full list of supported GDAL drivers

The <MobileAppNameShort /> is based on the <GitHubRepo id="MerginMaps/mobile-sdk" /> with custom GDAL build. The currently supported formats are

```
./gdalinfo --formats
Supported Formats:
  
  VRT -raster,multidimensional raster- (rw+v): Virtual Raster
  DERIVED -raster- (ro): Derived datasets using VRT pixel functions
  GTiff -raster- (rw+vs): GeoTIFF
  COG -raster- (wv): Cloud optimized GeoTIFF generator
  NITF -raster- (rw+vs): National Imagery Transmission Format
  RPFTOC -raster- (rovs): Raster Product Format TOC format
  ECRGTOC -raster- (rovs): ECRG TOC format
  HFA -raster- (rw+v): Erdas Imagine Images (.img)
  SAR_CEOS -raster- (rov): CEOS SAR Image
  CEOS -raster- (rov): CEOS Image
  JAXAPALSAR -raster- (rov): JAXA PALSAR Product Reader (Level 1.1/1.5)
  GFF -raster- (rov): Ground-based SAR Applications Testbed File Format (.gff)
  ELAS -raster- (rw+v): ELAS
  ESRIC -raster- (rov): Esri Compact Cache
  AIG -raster- (rov): Arc/Info Binary Grid
  AAIGrid -raster- (rwv): Arc/Info ASCII Grid
  GRASSASCIIGrid -raster- (rov): GRASS ASCII Grid
  ISG -raster- (rov): International Service for the Geoid
  SDTS -raster- (rov): SDTS Raster
  DTED -raster- (rwv): DTED Elevation Raster
  PNG -raster- (rwv): Portable Network Graphics
  JPEG -raster- (rwv): JPEG JFIF
  MEM -raster,multidimensional raster- (rw+): In Memory Raster
  JDEM -raster- (rov): Japanese DEM (.mem)
  ESAT -raster- (rov): Envisat Image Format
  BSB -raster- (rov): Maptech BSB Nautical Charts
  XPM -raster- (rwv): X11 PixMap Format
  BMP -raster- (rw+v): MS Windows Device Independent Bitmap
  DIMAP -raster- (rovs): SPOT DIMAP
  AirSAR -raster- (rov): AirSAR Polarimetric Image
  RS2 -raster- (rovs): RadarSat 2 XML Product
  SAFE -raster- (rov): Sentinel-1 SAR SAFE Product
  PCIDSK -raster,vector- (rw+v): PCIDSK Database File
  PCRaster -raster- (rw+): PCRaster Raster File
  ILWIS -raster- (rw+v): ILWIS Raster Map
  SGI -raster- (rw+v): SGI Image File Format 1.0
  SRTMHGT -raster- (rwv): SRTMHGT File Format
  Leveller -raster- (rw+v): Leveller heightfield
  Terragen -raster- (rw+v): Terragen heightfield
  ISIS3 -raster- (rw+v): USGS Astrogeology ISIS cube (Version 3)
  ISIS2 -raster- (rw+v): USGS Astrogeology ISIS cube (Version 2)
  PDS -raster- (rov): NASA Planetary Data System
  PDS4 -raster,vector- (rw+vs): NASA Planetary Data System 4
  VICAR -raster,vector- (rw+v): MIPL VICAR file
  TIL -raster- (rov): EarthWatch .TIL
  ERS -raster- (rw+v): ERMapper .ers Labelled
  L1B -raster- (rovs): NOAA Polar Orbiter Level 1b Data Set
  FIT -raster- (rwv): FIT Image
  GRIB -raster,multidimensional raster- (rwv): GRIdded Binary (.grb, .grb2)
  RMF -raster- (rw+v): Raster Matrix Format
  WCS -raster- (rovs): OGC Web Coverage Service
  WMS -raster- (rwvs): OGC Web Map Service
  MSGN -raster- (rov): EUMETSAT Archive native (.nat)
  RST -raster- (rw+v): Idrisi Raster A.1
  GSAG -raster- (rwv): Golden Software ASCII Grid (.grd)
  GSBG -raster- (rw+v): Golden Software Binary Grid (.grd)
  GS7BG -raster- (rw+v): Golden Software 7 Binary Grid (.grd)
  COSAR -raster- (rov): COSAR Annotated Binary Matrix (TerraSAR-X)
  TSX -raster- (rov): TerraSAR-X Product
  COASP -raster- (ro): DRDC COASP SAR Processor Raster
  R -raster- (rwv): R Object Data Store
  MAP -raster- (rov): OziExplorer .MAP
  KMLSUPEROVERLAY -raster- (rwv): Kml Super Overlay
  WEBP -raster- (rwv): WEBP
  PDF -raster,vector- (w+): Geospatial PDF
  Rasterlite -raster- (rwvs): Rasterlite
  MBTiles -raster,vector- (rw+v): MBTiles
  PLMOSAIC -raster- (ro): Planet Labs Mosaics API
  CALS -raster- (rwv): CALS (Type 1)
  WMTS -raster- (rwv): OGC Web Map Tile Service
  SENTINEL2 -raster- (rovs): Sentinel 2
  MRF -raster- (rw+v): Meta Raster Format
  PNM -raster- (rw+v): Portable Pixmap Format (netpbm)
  DOQ1 -raster- (rov): USGS DOQ (Old Style)
  DOQ2 -raster- (rov): USGS DOQ (New Style)
  PAux -raster- (rw+v): PCI .aux Labelled
  MFF -raster- (rw+v): Vexcel MFF Raster
  MFF2 -raster- (rw+): Vexcel MFF2 (HKV) Raster
  GSC -raster- (rov): GSC Geogrid
  FAST -raster- (rov): EOSAT FAST Format
  BT -raster- (rw+v): VTP .bt (Binary Terrain) 1.3 Format
  LAN -raster- (rw+v): Erdas .LAN/.GIS
  CPG -raster- (rov): Convair PolGASP
  NDF -raster- (rov): NLAPS Data Format
  EIR -raster- (rov): Erdas Imagine Raw
  DIPEx -raster- (rov): DIPEx
  LCP -raster- (rwv): FARSITE v.4 Landscape File (.lcp)
  GTX -raster- (rw+v): NOAA Vertical Datum .GTX
  LOSLAS -raster- (rov): NADCON .los/.las Datum Grid Shift
  NTv2 -raster- (rw+vs): NTv2 Datum Grid Shift
  CTable2 -raster- (rw+v): CTable2 Datum Grid Shift
  ACE2 -raster- (rov): ACE2
  SNODAS -raster- (rov): Snow Data Assimilation System
  KRO -raster- (rw+v): KOLOR Raw
  ROI_PAC -raster- (rw+v): ROI_PAC raster
  RRASTER -raster- (rw+v): R Raster
  BYN -raster- (rw+v): Natural Resources Canada's Geoid
  NOAA_B -raster- (rov): NOAA GEOCON/NADCON5 .b format
  NSIDCbin -raster- (rov): NSIDC Sea Ice Concentrations binary (.bin)
  ARG -raster- (rwv): Azavea Raster Grid format
  RIK -raster- (rov): Swedish Grid RIK (.rik)
  USGSDEM -raster- (rwv): USGS Optional ASCII DEM (and CDED)
  GXF -raster- (rov): GeoSoft Grid Exchange Format
  NWT_GRD -raster- (rw+v): Northwood Numeric Grid Format .grd/.tab
  NWT_GRC -raster- (rov): Northwood Classified Grid Format .grc/.tab
  ADRG -raster- (rw+vs): ARC Digitized Raster Graphics
  SRP -raster- (rovs): Standard Raster Product (ASRP/USRP)
  BLX -raster- (rwv): Magellan topo (.blx)
  SAGA -raster- (rw+v): SAGA GIS Binary Grid (.sdat, .sg-grd-z)
  XYZ -raster- (rwv): ASCII Gridded XYZ
  HF2 -raster- (rwv): HF2/HFZ heightfield raster
  OZI -raster- (rov): OziExplorer Image File
  CTG -raster- (rov): USGS LULC Composite Theme Grid
  ZMap -raster- (rwv): ZMap Plus Grid
  NGSGEOID -raster- (rov): NOAA NGS Geoid Height Grids
  IRIS -raster- (rov): IRIS data (.PPI, .CAPPi etc)
  PRF -raster- (rov): Racurs PHOTOMOD PRF
  EEDAI -raster- (ros): Earth Engine Data API Image
  DAAS -raster- (ro): Airbus DS Intelligence Data As A Service driver
  SIGDEM -raster- (rwv): Scaled Integer Gridded DEM .sigdem
  TGA -raster- (rov): TGA/TARGA Image File Format
  OGCAPI -raster,vector- (rov): OGCAPI
  STACTA -raster- (rovs): Spatio-Temporal Asset Catalog Tiled Assets
  STACIT -raster- (rovs): Spatio-Temporal Asset Catalog Items
  GPKG -raster,vector- (rw+vs): GeoPackage
  OpenFileGDB -raster,vector- (rw+v): ESRI FileGDB
  PLSCENES -raster,vector- (ro): Planet Labs Scenes API
  NGW -raster,vector- (rw+s): NextGIS Web
  GenBin -raster- (rov): Generic Binary (.hdr Labelled)
  ENVI -raster- (rw+v): ENVI .hdr Labelled
  EHdr -raster- (rw+v): ESRI .hdr Labelled
  ISCE -raster- (rw+v): ISCE raster
  Zarr -raster,multidimensional raster- (rw+vs): Zarr
  HTTP -raster,vector- (ro): HTTP Fetching Wrapper
```

## Full list of supported OGR drivers

The <MobileAppNameShort /> is based on the <GitHubRepo id="MerginMaps/mobile-sdk" /> with custom OGR build. The currently supported formats are

```
./ogrinfo --formats
Supported Formats:

  PCIDSK -raster,vector- (rw+v): PCIDSK Database File
  PDS4 -raster,vector- (rw+vs): NASA Planetary Data System 4
  VICAR -raster,vector- (rw+v): MIPL VICAR file
  PDF -raster,vector- (w+): Geospatial PDF
  MBTiles -raster,vector- (rw+v): MBTiles
  EEDA -vector- (ro): Earth Engine Data API
  OGCAPI -raster,vector- (rov): OGCAPI
  ESRI Shapefile -vector- (rw+v): ESRI Shapefile
  MapInfo File -vector- (rw+v): MapInfo File
  UK .NTF -vector- (rov): UK .NTF
  LVBAG -vector- (rov): Kadaster LV BAG Extract 2.0
  OGR_SDTS -vector- (rov): SDTS
  S57 -vector- (rw+v): IHO S-57 (ENC)
  DGN -vector- (rw+v): Microstation DGN
  OGR_VRT -vector- (rov): VRT - Virtual Datasource
  Memory -vector- (rw+): Memory
  CSV -vector- (rw+v): Comma Separated Value (.csv)
  GML -vector- (rw+v): Geography Markup Language (GML)
  GPX -vector- (rw+v): GPX
  KML -vector- (rw+v): Keyhole Markup Language (KML)
  GeoJSON -vector- (rw+v): GeoJSON
  GeoJSONSeq -vector- (rw+v): GeoJSON Sequence
  ESRIJSON -vector- (rov): ESRIJSON
  TopoJSON -vector- (rov): TopoJSON
  OGR_GMT -vector- (rw+v): GMT ASCII Vectors (.gmt)
  GPKG -raster,vector- (rw+vs): GeoPackage
  SQLite -vector- (rw+v): SQLite / Spatialite
  WAsP -vector- (rw+v): WAsP .map format
  OpenFileGDB -raster,vector- (rw+v): ESRI FileGDB
  DXF -vector- (rw+v): AutoCAD DXF
  FlatGeobuf -vector- (rw+v): FlatGeobuf
  Geoconcept -vector- (rw+v): Geoconcept
  GeoRSS -vector- (rw+v): GeoRSS
  VFK -vector- (ro): Czech Cadastral Exchange Data Format
  PGDUMP -vector- (w+v): PostgreSQL SQL dump
  OSM -vector- (rov): OpenStreetMap XML and PBF
  GPSBabel -vector- (rw+): GPSBabel
  OGR_PDS -vector- (rov): Planetary Data Systems TABLE
  WFS -vector- (rov): OGC WFS (Web Feature Service)
  OAPIF -vector- (ro): OGC API - Features
  EDIGEO -vector- (rov): French EDIGEO exchange format
  SVG -vector- (rov): Scalable Vector Graphics
  Idrisi -vector- (rov): Idrisi Vector (.vct)
  XLS -vector- (ro): MS Excel format
  ODS -vector- (rw+v): Open Document/ LibreOffice / OpenOffice Spreadsheet 
  XLSX -vector- (rw+v): MS Office Open XML spreadsheet
  Elasticsearch -vector- (rw+): Elastic Search
  Carto -vector- (rw+): Carto
  AmigoCloud -vector- (rw+): AmigoCloud
  SXF -vector- (rov): Storage and eXchange Format
  Selafin -vector- (rw+v): Selafin
  JML -vector- (rw+v): OpenJUMP JML
  PLSCENES -raster,vector- (ro): Planet Labs Scenes API
  CSW -vector- (ro): OGC CSW (Catalog  Service for the Web)
  VDV -vector- (rw+v): VDV-451/VDV-452/INTREST Data Format
  MVT -vector- (rw+v): Mapbox Vector Tiles
  NGW -raster,vector- (rw+s): NextGIS Web
  MapML -vector- (rw+v): MapML
  GTFS -vector- (rov): General Transit Feed Specification
  TIGER -vector- (rov): U.S. Census TIGER/Line
  AVCBin -vector- (rov): Arc/Info Binary Coverage
  AVCE00 -vector- (rov): Arc/Info E00 (ASCII) Coverage
  HTTP -raster,vector- (ro): HTTP Fetching Wrapper
```

## How to convert between GDAL/OGR formats

To convert between various GDAL formats, you can use [gdal_translate](https://gdal.org/programs/gdal_translate.html) command-line utility.

## Support for new formats

If you find out that the <MobileAppName /> doesn't support your format, please open issue at <GitHubRepo id="MerginMaps/mobile-sdk" />.

If QGIS on desktop does not support the format of your choice, open issue at <GitHubRepo id="qgis/QGIS-Mac-Packager" /> for macOS, or <GitHubRepo id="qgis/QGIS" /> for other platforms.

For support of collaborative editing and versioning of vector data formats, please open issue at <GitHubRepo id="MerginMaps/geodiff" />.

