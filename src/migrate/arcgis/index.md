# Migrate from ArcGIS
[[toc]]

This guide is intended for current ArcGIS ecosystem and it's field collection tools users considering switching to QGIS and <MainPlatformName /> as well as for <MainPlatformName /> users looking to transfer their data from ESRI ecosystem.

In general, ArcGIS ecosystem contains properiatory tools while QGIS ecosystem is based on open-source philosophy. As such, the ecosystems are not very well compatible and interchangable. Nevertheless, some data formats are possible to use in both of them; or the data can be transferred via usage of PostgreSQL database. We will explore the options in the article that follows. 

Users highlights cost savings, interoperability and flexibility in usage of QGIS and <MainPlatformName /> in comparison with ESRI's ArcGIS tools for field surveys such as Collector, Survey123 or Field Maps.

## ArcGIS vs QGIS ecosystems

QGIS ->
ArcGIS Pro , ArcMap 

Mergin Maps ->
ArcGIS Collector (Classic)
https://doc.arcgis.com/en/collector-classic/

Mergin Maps ->
ArcGIS Survey123
https://survey123.arcgis.com

Mergin Maps ->
ArcGIS Field Maps
https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/overview?srsltid=AfmBOor9jbPQpWXsR0oSCHAXPh6HJVTepZog7_q9cEjg91MfgmN6nU-C



## Migrate ArcGIS project to QGIS project

bla bla


### SLYR 

The SLYR tool by [North Road](https://north-road.com) facilitates the migration from ArcGIS to QGIS by enabling the conversion of various propriatory data formats, styles and project files to QGIS-compatible formats, such as the conversion of MXD (ArcMap) and AXL (ArcIMS) files to QGIS project files. 
This tool helps users transition smoothly by preserving complex symbology, layouts, and project structure. It simplifies the shift from proprietary ESRI tools to the open-source QGIS environment, reducing the time and effort needed to replicate existing workflows. SLYR tool offers Community and Licensed version. 

- Community version is open-sourced on <GitHubRepo id="north-road/slyr" desc="GitHub" /> and can be freerly installed via QGIS Plugin Manager to mostly extract, parse, and convert of ESRI .lyr, .mxd and .style files to QGIS ecosystem formats. 
- Licensed version is closed-sourced and has features such as MXD/MXT import, print layout or very importantly conversion to GeoPackage files. 

Full comparison of the version can be found on North Road's [SLYR project page](https://north-road.com/slyr/). 

![SLYR logo](./slyr.png "SLYR logo")

## Hybrid setup 

ArcGIS <-> PostgreSQL <-> db-sync <-> Mergin Maps <-> Mergin Maps app


## Troubleshoot
Struggling to migrate your projects? We are happy to help you!

Book a short video call with our <MerginMapsEmail id="sales" desc="sales team" /> or write your technical questions to our <MerginMapsEmail id="support" desc="support team" />. You can also chat with our open-source community.

<CommunityJoin />

If you are looking for a professional partner to migrate your workflow, you can ask our <MainDomainNameLink id="partners" desc="partners"/> network or <LutraConsultingWeb />, the developers of <MainPlatformName />
<PublicImage src="logo_lutra.svg" title="Lutra Consulting Ltd. logo" style="width:50%" />

## Credits

ArcMap, ArcGIS Pro, ArcGIS Enterprise, ArcGIS Online, ArcGIS Survey123, Collector for ArcGIS, ArcGIS FieldMaps are developed and corresponding trademarks are owned by <NoSpellcheck id="ESRI" />.
