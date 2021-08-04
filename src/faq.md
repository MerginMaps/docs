# FAQ 

## What is Mergin?

Mergin is a service to synchronise various data between different users and platforms. It is similar to generic file sharing platforms (e.g. Dropbox, Google Drive, etc) but more geared towards geo-spatial datasets.

## Where can I use Mergin?

You can interact with the Mergin service through QGIS, website and Input mobile application.

## What is a typical workflow for using the Mergin service?

After registering with the Mergin service, you will need to set up a QGIS project on your desktop. You can then upload your project and associated data to Mergin, either directly through the website, or via Mergin plugin in QGIS. The project can be accessed on Input mobile application. You can start collecting data and upload back the changes to the Mergin service.

## Can I share my projects with other collaborators?

Yes. For each project you can invite other Mergin users to view or edit your projects.

## Does Mergin synchronize only geo-spatial data?

No. All the files within your project folder, including photos, non-spatial tables, etc, get synchronised.

## What if, members of my team, have no knowledge of GIS and just want to collect data?

You can set up a project for them in QGIS, upload it to Mergin. They will be able to clone the project on the Mergin Website and continue working on it from Input.

## Can I use Mergin for free?

Yes. We offer free tier for up to 100 MB data usage for non-commercial usage after trial.
For more, you need to sign up to one of our [paid plans](https://public.cloudmergin.com/pricing).

## Is Mergin suitable for production work?

Yes, absolutely! Mergin is already being used for production work by many users.

## As a developer, can I programmatically interact with the Mergin service?

Yes. There is Python API available and more - see the [Integrations](./integrations/commandline.md) section.

## What is an Input project?

An Input project consists of a folder (with subfolders) with **one** QGIS project file and all its associated layers. The QGIS project is linked with relative path (the default option in QGIS) to all the layers.

## Why am I not able to see my project in the list (under Input > Projects > My Projects)

It is likely that you have no QGIS project (the extension for QGIS project is qgs or qgz file) or more than one project in your folder. To have a valid Input project you need **one and only one** QGIS project in your folder.

## I have loaded my project in Input, but I cannot see all my layers

You need to package all your layers with the folder uploaded to Mergin. They should be also linked accordingly to the packaged folder. For example, if you have a project where it has links to your shared server layers, those layers will not appear in Input.

If you are linking to an online layer (e.g. PostGIS/WMS), you need to have internet to the server.

## When I press Record, Input tells me there is no survey layers in the project

- Ensure you have all your survey layers uploaded with the project
- Ensure your survey layer is not marked as Read-only (Project Properties > Data Sources)

## When I synchronise my data, I get some files with 'conf' in their names

Input supports collaborative editing, if you use Geopackage file format for your survey layer. If you use for example ESRI Shapefile for your survey layer, Input is not able to detect changes from other users and overwrites them. It will keep a copy of the overwritten files with 'conf' in the name. So, in summary, **always use Geopackage for your survey layer**.

## I use Geopackage for my survey layer, but I still see 'conf' files

 Input does not support changing of the data schema. So, if you delete or add columns to your survey layer, Input cannot detect the change. Therefore, it is always recommended to stick with the same attribute table structure once you have set up your survey layer.

 Another reason you might be seeing conf files is due to [storing raster data in Geopackage](https://github.com/lutraconsulting/geodiff/issues/91) for your survey layer. We recommend using GeoTIFF or at least a separate Geopackage database for all your raster files. 

## I cannot synchronise changes from the Mergin server

 - Make sure you have data connectivity.
 - Ensure you have not exceeded or reached your storage allowance
