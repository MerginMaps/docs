# Migrate from QField and QFieldCloud

[[toc]]

This guide is intended for current QField and QFieldCloud users considering switching to <MainPlatformName /> and new <MainPlatformName /> users looking to transfer their data from QField ecosystem.
 
We'll cover everything from preparing for the migration to troubleshooting common issues so that you can make the transition as smooth as possible. By the end of this guide, you'll have all the information you need to successfully migrate your data from QField to <MainPlatformName /> and start taking advantage of all the features and benefits that <MainPlatformName /> has to offer.

## QField  and Mergin Maps ecosystems comparison

<MainPlatformName /> is the closest alternative to QField Ecosystem consisting of QField (mobile application), QFieldCloud (geo data collaboration server) and QFieldSync (QGIS plugin). They are both listed as the offically recommended touch device application for QGIS projects. The mobile applications are powered by QGIS and rest of open-source GIS libraries and as such their mobile projects are almost fully interoperable.

Both QField and <MainPlatformName /> are open-source projects with their community and weakly bound to QGIS ecosystem. 

To mention the key differences, <MainPlatformName /> is fully devoted to provide no-training mobile application, operated even for surveyors without any prior GIS knowledge. 
TODO: 
- QField is more GIS on mobile - MM Less buttons to confuse users than QF
- QF interface is a little bit difficult for non-technical users

For synchonisation part, <MainPlatformName /> is conceptually based on ideas from Git - [geodiff](TODO) creates difference files from GeoPackages that are send over network and applied. While QFieldCloud synchronisation uses concept of storage of differences made in SQL format and this difference log is then transmitted and applied. 
TODO: 
- QField synchonization is pain in the ass ; process of sync in QField is nightmare for end user
- MM Ease of synchronization ; Netly and simple collaborations

QF has per -user, I do not like it because we have many users and they are sometime from other companies

## Migrate QField Project


## Migrate QFieldCloud organisation

## Known Issues

TODO

If you are looking for specific feature, consider also looking at [wishlist](wishlist.merginmaps.com).