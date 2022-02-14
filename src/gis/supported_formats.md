# Supported Formats
<!-- reference -->
  
[[toc]]

## Vector data 


| Format         | <MobileAppName /> (Android, iOS)  | QGIS (Windows, macOS, Linux)  | Note                                                                  |
|----------------|-----------------------------------|-------------------------------|-----------------------------------------------------------------------|
| GeoPackage     | :heart_eyes:                      | :heart_eyes:                  | Collaborative editing via <GitHubRepo id="lutraconsulting/geodiff" /> |
| Shapefile      | :warning:                         | :warning:                     | Not supported by <GitHubRepo id="lutraconsulting/geodiff" />          |
| Delimited text | :warning:                         | :warning:                     | Not supported by <GitHubRepo id="lutraconsulting/geodiff" />          | 
| Virtual layer  | :warning:                         | :warning:                     | Not supported by <GitHubRepo id="lutraconsulting/geodiff" />          |                 
| PostGIS        | :thumbsup:                        | :thumbsup:                    | Requires internet connection                                          |
| WFS            | :thumbsup:                        | :thumbsup:                    | Requires internet connection                                          |

::: tip
Read [more](../manage/synchronisation.md) how the synchronisation in Mergin Maps works.
:::


## Raster data 

| Format         | <MobileAppName /> (Android, iOS)  | QGIS (Windows, macOS, Linux)  | Note                                |   
|----------------|-----------------------------------|-------------------------------|-------------------------------------|
| GeoTIFF        | :thumbsup:                        | :thumbsup:                    | png, jpg and webp compression       |
| JPEG           | :thumbsup:                        | :thumbsup:                    |                                     |
| PNG            | :thumbsup:                        | :thumbsup:                    |                                     |
| COG (local)    | :thumbsup:                        | :thumbsup:                    |                                     |
| MBTiles        | :thumbsup:                        | :thumbsup:                    |  png, jpg compression               |
| MBTiles        | :thumbsup:                        | :thumbsup:                    |  local vector tiles                 |
| WM(T)S         | :thumbsup:                        | :thumbsup:                    |                                     |
| XYZ tiles      | :thumbsup:                        | :thumbsup:                    | OpenStreetMap, Google Aerial, Bing. |
| ECW            | :no_entry_sign:                   | :thumbsup:                    | Proprietary license                 |
| MrSID          | :no_entry_sign:                   | :thumbsup:                    | Proprietary license                 |
| COG (online)   | :no_entry_sign:                   | :thumbsup:                    |                                     |

::: tip
See [our guide](./settingup_background_map.md) for setting up background layers.
:::

## Vector Tiles

We support vector tiles in MBTiles container (local usage) or as online service. 

::: tip 
See [our guide](./settingup_background_map.md) for setting up background layers.
:::

## Full list of supported QGIS providers

<MobileAppName /> is based on the <GitHubRepo id="lutraconsulting/input-sdk" /> with custom QGIS core library build. The currently supported QGIS providers are
    
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

<MobileAppName /> is based on the <GitHubRepo id="lutraconsulting/input-sdk" /> with custom GDAL build. The currently supported formats are

```
   gdalinfo --formats
  
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
    DIMAP -raster- (rov): SPOT DIMAP
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
    MSGN -raster- (rov): EUMETSAT Archive native (.nat)
    RST -raster- (rw+v): Idrisi Raster A.1
    INGR -raster- (rw+v): Intergraph Raster
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
    CALS -raster- (rwv): CALS (Type 1)
    SENTINEL2 -raster- (rovs): Sentinel 2
    PNM -raster- (rw+v): Portable Pixmap Format (netpbm)
    DOQ1 -raster- (rov): USGS DOQ (Old Style)
    DOQ2 -raster- (rov): USGS DOQ (New Style)
    PAux -raster- (rw+v): PCI .aux Labelled
    MFF -raster- (rw+v): Vexcel MFF Raster
    MFF2 -raster- (rw+): Vexcel MFF2 (HKV) Raster
    FujiBAS -raster- (rov): Fuji BAS Scanner Image
    GSC -raster- (rov): GSC Geogrid
    FAST -raster- (rov): EOSAT FAST Format
    BT -raster- (rw+v): VTP .bt (Binary Terrain) 1.3 Format
    LAN -raster- (rw+v): Erdas .LAN/.GIS
    CPG -raster- (rov): Convair PolGASP
    IDA -raster- (rw+v): Image Data and Analysis
    NDF -raster- (rov): NLAPS Data Format
    EIR -raster- (rov): Erdas Imagine Raw
    DIPEx -raster- (rov): DIPEx
    LCP -raster- (rwv): FARSITE v.4 Landscape File (.lcp)
    GTX -raster- (rw+v): NOAA Vertical Datum .GTX
    LOSLAS -raster- (rov): NADCON .los/.las Datum Grid Shift
    NTv1 -raster- (rov): NTv1 Datum Grid Shift
    NTv2 -raster- (rw+vs): NTv2 Datum Grid Shift
    CTable2 -raster- (rw+v): CTable2 Datum Grid Shift
    ACE2 -raster- (rov): ACE2
    SNODAS -raster- (rov): Snow Data Assimilation System
    KRO -raster- (rw+v): KOLOR Raw
    ROI_PAC -raster- (rw+v): ROI_PAC raster
    RRASTER -raster- (rw+v): R Raster
    BYN -raster- (rw+v): Natural Resources Canada's Geoid
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
    IGNFHeightASCIIGrid -raster- (rov): IGN France height correction ASCII Grid
    XYZ -raster- (rwv): ASCII Gridded XYZ
    HF2 -raster- (rwv): HF2/HFZ heightfield raster
    OZI -raster- (rov): OziExplorer Image File
    CTG -raster- (rov): USGS LULC Composite Theme Grid
    E00GRID -raster- (rov): Arc/Info Export E00 GRID
    ZMap -raster- (rwv): ZMap Plus Grid
    NGSGEOID -raster- (rov): NOAA NGS Geoid Height Grids
    IRIS -raster- (rov): IRIS data (.PPI, .CAPPi etc)
    PRF -raster- (rov): Racurs PHOTOMOD PRF
    SIGDEM -raster- (rwv): Scaled Integer Gridded DEM .sigdem
    GPKG -raster,vector- (rw+vs): GeoPackage
    CAD -raster,vector- (rovs): AutoCAD Driver
    GenBin -raster- (rov): Generic Binary (.hdr Labelled)
    ENVI -raster- (rw+v): ENVI .hdr Labelled
    EHdr -raster- (rw+v): ESRI .hdr Labelled
    ISCE -raster- (rw+v): ISCE raster
```

## How to convert between GDAL formats

To convert between various GDAL formats, you can use [gdal_translate](https://gdal.org/programs/gdal_translate.html) command-line utility.

## Support for new formats

If you find out that the <MobileAppName /> doesn't support your format, please open issue at <GitHubRepo id="lutraconsulting/input-sdk" />.

If QGIS on desktop does not support, open issue at <GitHubRepo id="qgis/QGIS-Mac-Packager" /> for macOS, or <GitHubRepo id="qgis/QGIS" /> for other platforms.

For support of collaborative editing and versioning of vector data formats, please open issue at <GitHubRepo id="lutraconsulting/geodiff" />.


