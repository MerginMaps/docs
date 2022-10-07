# Geodiff Library
[[toc]]

Geodiff is a library for handling differences of spatial data. It can be used to compare two datasets to get and apply changesets or to merge changes from multiple sources. In <MainPlatformName />, Geodiff is used to synchronise changes made by individual team members, see [Behind Data Synchronisation](../../manage/synchronisation/). 

Geodiff works with GeoPackage files and PostGIS databases as well as with non-spatial SQLite and PostgreSQL databases. That means one can seamlessly find differences between tables of two schemas in a PostGIS database and apply the changes to a GeoPackage (or vice versa). Thanks to that, it is possible to keep data in sync even if the back-ends are completely different.

**Interested in using Geodiff?** <GitHubRepo id="MerginMaps/geodiff" /> repository contains the source code and more details on how to use it.
