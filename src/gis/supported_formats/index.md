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
Go to [Behind Data Synchronisation](../manage/synchronisation.md) to read more about how synchronisation works in <MainPlatformNameLink />.
:::

### PostgreSQL/PostGIS
PostgreSQL connection (username, password, host, port, etc.) can be set up:
- directly in QGIS PostgreSQL connection, if you want to reuse the same connection for everyone
- use a *Connection Service File* `pg_service.conf`, if you want to have different PostgreSQL user for each surveyor

To use a *Connection Service File*, you have to:
- create a `pg_service.conf` file as described in <QGISHelp ver="latest" link="user_manual/managing_data_source/opening_data.html#postgresql-service-connection-file" text="QGIS User Manual" /> and test it in QGIS Desktop
- [manually transfer](../manage/missing-data/index.md) the `pg_service.conf` file to <MobileAppName /> data folder. The data folder is shown in the [Diagnostic Log](../misc/troubleshoot/#diagnostic-log-on-mergin-maps-mobile-app)
- restart the <MobileAppNameShort />. Check the [Diagnostic Log](../misc/troubleshoot/#diagnostic-log-on-mergin-maps-mobile-app) to see if the file is found and used after restart.

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
See [our guide](./settingup_background_map.md) for setting up background layers.
:::

## Vector tiles on Mergin Maps mobile app

We support vector tiles just like QGIS does - in Mapbox Vector Tiles (MVT) format - and stored either in a MBTiles file (for offline use) or through a template URL (for online service) such as `http://example.com/{z}/{x}/{y}.pbf`.

::: tip 
See [our guide](./settingup_background_map.md) for setting up background layers.
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
  
  VRT -raster,multidimensional raster- (rw+v): Virtual Raster (*.vrt)
  DERIVED -raster- (ro): Derived datasets using VRT pixel functions
  GTI -raster- (rov): GDAL Raster Tile Index (*.gti.gpkg, *.gti.fgb, *.gti)
  SNAP_TIFF -raster- (rov): Sentinel Application Processing GeoTIFF
  GTiff -raster- (rw+vs): GeoTIFF (*.tif, *.tiff)
  COG -raster- (wv): Cloud optimized GeoTIFF generator (*.tif, *.tiff)
  NITF -raster- (rw+vs): National Imagery Transmission Format (*.ntf)
  RPFTOC -raster- (rovs): Raster Product Format TOC format (*.toc)
  ECRGTOC -raster- (rovs): ECRG TOC format (*.xml)
  HFA -raster- (rw+v): Erdas Imagine Images (.img) (*.img)
  SAR_CEOS -raster- (rov): CEOS SAR Image
  CEOS -raster- (rov): CEOS Image
  JAXAPALSAR -raster- (rov): JAXA PALSAR Product Reader (Level 1.1/1.5)
  GFF -raster- (rov): Ground-based SAR Applications Testbed File Format (.gff) (*.gff)
  ELAS -raster- (rw+v): ELAS
  ESRIC -raster- (rov): Esri Compact Cache (*.json, *.tpkx)
  AIG -raster- (rov): Arc/Info Binary Grid
  AAIGrid -raster- (rwv): Arc/Info ASCII Grid (*.asc)
  GRASSASCIIGrid -raster- (rov): GRASS ASCII Grid
  ISG -raster- (rov): International Service for the Geoid (*.isg)
  SDTS -raster- (rov): SDTS Raster (*.ddf)
  DTED -raster- (rwv): DTED Elevation Raster (*.dt0, *.dt1, *.dt2)
  PNG -raster- (rwv): Portable Network Graphics (*.png)
  JPEG -raster- (rwv): JPEG JFIF (*.jpg, *.jpeg)
  MEM -raster,multidimensional raster- (rw+): In Memory Raster
  JDEM -raster- (rov): Japanese DEM (.mem) (*.mem)
  ESAT -raster- (rov): Envisat Image Format (*.n1)
  BSB -raster- (rov): Maptech BSB Nautical Charts (*.kap)
  XPM -raster- (rwv): X11 PixMap Format (*.xpm)
  BMP -raster- (rw+v): MS Windows Device Independent Bitmap (*.bmp)
  DIMAP -raster- (rovs): SPOT DIMAP
  AirSAR -raster- (rov): AirSAR Polarimetric Image
  RS2 -raster- (rovs): RadarSat 2 XML Product
  SAFE -raster- (rov): Sentinel-1 SAR SAFE Product
  PCIDSK -raster,vector- (rw+v): PCIDSK Database File (*.pix)
  PCRaster -raster- (rw+): PCRaster Raster File (*.map)
  ILWIS -raster- (rw+v): ILWIS Raster Map (*.mpr, *.mpl)
  SGI -raster- (rw+v): SGI Image File Format 1.0 (*.rgb)
  SRTMHGT -raster- (rwv): SRTMHGT File Format (*.hgt)
  Leveller -raster- (rw+v): Leveller heightfield (*.ter)
  Terragen -raster- (rw+v): Terragen heightfield (*.ter)
  ISIS3 -raster- (rw+v): USGS Astrogeology ISIS cube (Version 3) (*.lbl, *.cub)
  ISIS2 -raster- (rw+v): USGS Astrogeology ISIS cube (Version 2)
  PDS -raster- (rov): NASA Planetary Data System
  PDS4 -raster,vector- (rw+vs): NASA Planetary Data System 4 (*.xml)
  VICAR -raster,vector- (rw+v): MIPL VICAR file
  TIL -raster- (rov): EarthWatch .TIL
  ERS -raster- (rw+v): ERMapper .ers Labelled (*.ers)
  L1B -raster- (rovs): NOAA Polar Orbiter Level 1b Data Set
  FIT -raster- (rwv): FIT Image
  GRIB -raster,multidimensional raster- (rwv): GRIdded Binary (.grb, .grb2) (*.grb, *.grb2, *.grib2)
  RMF -raster- (rw+v): Raster Matrix Format (*.rsw)
  WCS -raster- (rovs): OGC Web Coverage Service
  WMS -raster- (rwvs): OGC Web Map Service
  MSGN -raster- (rov): EUMETSAT Archive native (.nat) (*.nat)
  RST -raster- (rw+v): Idrisi Raster A.1 (*.rst)
  GSAG -raster- (rwv): Golden Software ASCII Grid (.grd) (*.grd)
  GSBG -raster- (rw+v): Golden Software Binary Grid (.grd) (*.grd)
  GS7BG -raster- (rw+v): Golden Software 7 Binary Grid (.grd) (*.grd)
  COSAR -raster- (rov): COSAR Annotated Binary Matrix (TerraSAR-X)
  TSX -raster- (rov): TerraSAR-X Product
  COASP -raster- (ro): DRDC COASP SAR Processor Raster (*.hdr)
  R -raster- (rwv): R Object Data Store (*.rda)
  MAP -raster- (rov): OziExplorer .MAP
  KMLSUPEROVERLAY -raster- (rwv): Kml Super Overlay (*.kml, *.kmz)
  WEBP -raster- (rwv): WEBP (*.webp)
  PDF -raster,vector- (w+): Geospatial PDF (*.pdf)
  Rasterlite -raster- (rwvs): Rasterlite (*.sqlite)
  MBTiles -raster,vector- (rw+v): MBTiles (*.mbtiles)
  PLMOSAIC -raster- (ro): Planet Labs Mosaics API
  CALS -raster- (rwv): CALS (Type 1) (*.cal, *.ct1)
  WMTS -raster- (rwv): OGC Web Map Tile Service
  SENTINEL2 -raster- (rovs): Sentinel 2
  MRF -raster- (rw+v): Meta Raster Format (*.mrf)
  PNM -raster- (rw+v): Portable Pixmap Format (netpbm) (*.pgm, *.ppm, *.pnm)
  DOQ1 -raster- (rov): USGS DOQ (Old Style)
  DOQ2 -raster- (rov): USGS DOQ (New Style)
  PAux -raster- (rw+v): PCI .aux Labelled
  MFF -raster- (rw+v): Vexcel MFF Raster (*.hdr)
  MFF2 -raster- (rw+): Vexcel MFF2 (HKV) Raster
  GSC -raster- (rov): GSC Geogrid
  FAST -raster- (rov): EOSAT FAST Format
  BT -raster- (rw+v): VTP .bt (Binary Terrain) 1.3 Format (*.bt)
  LAN -raster- (rw+v): Erdas .LAN/.GIS
  CPG -raster- (rov): Convair PolGASP
  NDF -raster- (rov): NLAPS Data Format
  EIR -raster- (rov): Erdas Imagine Raw
  DIPEx -raster- (rov): DIPEx
  LCP -raster- (rwv): FARSITE v.4 Landscape File (.lcp) (*.lcp)
  GTX -raster- (rw+v): NOAA Vertical Datum .GTX (*.gtx)
  LOSLAS -raster- (rov): NADCON .los/.las Datum Grid Shift
  NTv2 -raster- (rw+vs): NTv2 Datum Grid Shift (*.gsb, *.gvb)
  CTable2 -raster- (rw+v): CTable2 Datum Grid Shift
  ACE2 -raster- (rov): ACE2 (*.ACE2)
  SNODAS -raster- (rov): Snow Data Assimilation System (*.hdr)
  KRO -raster- (rw+v): KOLOR Raw (*.kro)
  ROI_PAC -raster- (rw+v): ROI_PAC raster
  RRASTER -raster- (rw+v): R Raster (*.grd)
  BYN -raster- (rw+v): Natural Resources Canada's Geoid (*.byn, *.err)
  NOAA_B -raster- (rov): NOAA GEOCON/NADCON5 .b format (*.b)
  NSIDCbin -raster- (rov): NSIDC Sea Ice Concentrations binary (.bin) (*.bin)
  RIK -raster- (rov): Swedish Grid RIK (.rik) (*.rik)
  USGSDEM -raster- (rwv): USGS Optional ASCII DEM (and CDED) (*.dem)
  GXF -raster- (rov): GeoSoft Grid Exchange Format (*.gxf)
  NWT_GRD -raster- (rw+v): Northwood Numeric Grid Format .grd/.tab (*.grd)
  NWT_GRC -raster- (rov): Northwood Classified Grid Format .grc/.tab (*.grc)
  ADRG -raster- (rw+vs): ARC Digitized Raster Graphics (*.gen)
  SRP -raster- (rovs): Standard Raster Product (ASRP/USRP) (*.img)
  BLX -raster- (rwv): Magellan topo (.blx) (*.blx)
  SAGA -raster- (rw+v): SAGA GIS Binary Grid (.sdat, .sg-grd-z) (*.sdat, *.sg-grd-z)
  XYZ -raster- (rwv): ASCII Gridded XYZ (*.xyz)
  HF2 -raster- (rwv): HF2/HFZ heightfield raster (*.hf2)
  OZI -raster- (rov): OziExplorer Image File
  CTG -raster- (rov): USGS LULC Composite Theme Grid
  ZMap -raster- (rwv): ZMap Plus Grid (*.dat)
  NGSGEOID -raster- (rov): NOAA NGS Geoid Height Grids (*.bin)
  IRIS -raster- (rov): IRIS data (.PPI, .CAPPi etc) (*.ppi)
  PRF -raster- (rov): Racurs PHOTOMOD PRF (*.prf)
  EEDAI -raster- (ros): Earth Engine Data API Image
  DAAS -raster- (ro): Airbus DS Intelligence Data As A Service driver
  SIGDEM -raster- (rwv): Scaled Integer Gridded DEM .sigdem (*.sigdem)
  TGA -raster- (rov): TGA/TARGA Image File Format (*.tga)
  OGCAPI -raster,vector- (rov): OGCAPI
  STACTA -raster- (rovs): Spatio-Temporal Asset Catalog Tiled Assets (*.json)
  STACIT -raster- (rovs): Spatio-Temporal Asset Catalog Items
  GPKG -raster,vector- (rw+vs): GeoPackage (*.gpkg, *.gpkg.zip)
  OpenFileGDB -raster,vector- (rw+v): ESRI FileGDB (*.gdb)
  PLSCENES -raster,vector- (ro): Planet Labs Scenes API
  NGW -raster,vector- (rw+s): NextGIS Web
  GenBin -raster- (rov): Generic Binary (.hdr Labelled)
  ENVI -raster- (rw+v): ENVI .hdr Labelled
  EHdr -raster- (rw+v): ESRI .hdr Labelled (*.bil)
  ISCE -raster- (rw+v): ISCE raster
  Zarr -raster,multidimensional raster- (rw+vs): Zarr
  HTTP -raster,vector- (ro): HTTP Fetching Wrapper
```

## Full list of supported OGR drivers

The <MobileAppNameShort /> is based on the <GitHubRepo id="MerginMaps/mobile-sdk" /> with custom OGR build. The currently supported formats are

```
./ogrinfo --formats
Supported Formats:

  PCIDSK -raster,vector- (rw+v): PCIDSK Database File (*.pix)
  PDS4 -raster,vector- (rw+vs): NASA Planetary Data System 4 (*.xml)
  VICAR -raster,vector- (rw+v): MIPL VICAR file
  PDF -raster,vector- (w+): Geospatial PDF (*.pdf)
  MBTiles -raster,vector- (rw+v): MBTiles (*.mbtiles)
  EEDA -vector- (ro): Earth Engine Data API
  OGCAPI -raster,vector- (rov): OGCAPI
  ESRI Shapefile -vector- (rw+v): ESRI Shapefile (*.shp, *.dbf, *.shz, *.shp.zip)
  MapInfo File -vector- (rw+v): MapInfo File (*.tab, *.mif, *.mid)
  UK .NTF -vector- (rov): UK .NTF
  LVBAG -vector- (rov): Kadaster LV BAG Extract 2.0 (*.xml)
  OGR_SDTS -vector- (rov): SDTS
  S57 -vector- (rw+v): IHO S-57 (ENC) (*.000)
  DGN -vector- (rw+v): Microstation DGN (*.dgn)
  OGR_VRT -vector- (rov): VRT - Virtual Datasource (*.vrt)
  Memory -vector- (rw+): Memory
  CSV -vector- (rw+v): Comma Separated Value (.csv) (*.csv, *.tsv, *.psv)
  GML -vector- (rw+v): Geography Markup Language (GML) (*.gml, *.xml)
  GPX -vector- (rw+v): GPX (*.gpx)
  KML -vector- (rw+v): Keyhole Markup Language (KML) (*.kml)
  GeoJSON -vector- (rw+v): GeoJSON (*.json, *.geojson)
  GeoJSONSeq -vector- (rw+v): GeoJSON Sequence (*.geojsonl, *.geojsons)
  ESRIJSON -vector- (rov): ESRIJSON (*.json)
  TopoJSON -vector- (rov): TopoJSON (*.json, *.topojson)
  OGR_GMT -vector- (rw+v): GMT ASCII Vectors (.gmt) (*.gmt)
  GPKG -raster,vector- (rw+vs): GeoPackage (*.gpkg, *.gpkg.zip)
  SQLite -vector- (rw+v): SQLite / Spatialite (*.sqlite, *.db)
  WAsP -vector- (rw+v): WAsP .map format (*.map)
  OpenFileGDB -raster,vector- (rw+v): ESRI FileGDB (*.gdb)
  DXF -vector- (rw+v): AutoCAD DXF (*.dxf)
  FlatGeobuf -vector- (rw+v): FlatGeobuf (*.fgb)
  Geoconcept -vector- (rw+v): Geoconcept (*.gxt, *.txt)
  GeoRSS -vector- (rw+v): GeoRSS
  VFK -vector- (ro): Czech Cadastral Exchange Data Format (*.vfk)
  PGDUMP -vector- (w+v): PostgreSQL SQL dump (*.sql)
  OSM -vector- (rov): OpenStreetMap XML and PBF (*.osm, *.pbf)
  GPSBabel -vector- (rw+): GPSBabel (*.mps, *.gdb, *.osm, *.tcx, *.igc)
  OGR_PDS -vector- (rov): Planetary Data Systems TABLE
  WFS -vector- (rov): OGC WFS (Web Feature Service)
  OAPIF -vector- (ro): OGC API - Features
  EDIGEO -vector- (rov): French EDIGEO exchange format (*.thf)
  SVG -vector- (rov): Scalable Vector Graphics (*.svg)
  Idrisi -vector- (rov): Idrisi Vector (.vct) (*.vct)
  XLS -vector- (ro): MS Excel format (*.xls)
  ODS -vector- (rw+v): Open Document/ LibreOffice / OpenOffice Spreadsheet (*.ods)
  XLSX -vector- (rw+v): MS Office Open XML spreadsheet (*.xlsx, *.xlsm)
  Elasticsearch -vector- (rw+): Elastic Search
  Carto -vector- (rw+): Carto
  AmigoCloud -vector- (rw+): AmigoCloud
  SXF -vector- (rov): Storage and eXchange Format (*.sxf)
  Selafin -vector- (rw+v): Selafin
  JML -vector- (rw+v): OpenJUMP JML (*.jml)
  PLSCENES -raster,vector- (ro): Planet Labs Scenes API
  CSW -vector- (ro): OGC CSW (Catalog  Service for the Web)
  VDV -vector- (rw+v): VDV-451/VDV-452/INTREST Data Format (*.txt, *.x10)
  MVT -vector- (rw+v): Mapbox Vector Tiles (*.mvt, *.mvt.gz, *.pbf)
  NGW -raster,vector- (rw+s): NextGIS Web
  MapML -vector- (rw+v): MapML
  GTFS -vector- (rov): General Transit Feed Specification (*.zip)
  PMTiles -vector- (rw+v): ProtoMap Tiles (*.pmtiles)
  JSONFG -vector- (rw+v): OGC Features and Geometries JSON (*.json)
  MiraMonVector -vector- (rw+v): MiraMon Vectors (.pol, .arc, .pnt) (*.pol, *.arc, *.pnt)
  TIGER -vector- (rov): U.S. Census TIGER/Line
  AVCBin -vector- (rov): Arc/Info Binary Coverage
  AVCE00 -vector- (rov): Arc/Info E00 (ASCII) Coverage (*.e00)
  HTTP -raster,vector- (ro): HTTP Fetching Wrapper
```

## How to convert between GDAL/OGR formats

To convert between various GDAL formats, you can use [gdal_translate](https://gdal.org/programs/gdal_translate.html) command-line utility.

## Support for new formats

If you find out that the <MobileAppName /> doesn't support your format, please open issue at <GitHubRepo id="MerginMaps/mobile-sdk" />.

If QGIS on desktop does not support the format of your choice, open issue at <GitHubRepo id="qgis/QGIS-Mac-Packager" /> for macOS, or <GitHubRepo id="qgis/QGIS" /> for other platforms.

For support of collaborative editing and versioning of vector data formats, please open issue at <GitHubRepo id="MerginMaps/geodiff" />.

