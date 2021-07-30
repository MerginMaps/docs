---
category: 'QGIS Desktop & Plugin'
title: Synchronising project and data
permalink: /plugin-sync-project
---

## Status

It is recommended to run the project status after changing your layers and project.

To see the status of your project and data:

1. From the Mergin plugin, click on **Status** :

<p align="center"><img src="../images/qgis-plugin/sync-status-toolbar.png"></p>

This will help getting a list of pending changes and also see any warnings or validations of your project. The warnings are related to restructuring of a GeoPackage layer (adding/removing a field or addding/removing a layer in a Geopackage database). Validations can be linked to missing layer or availability of a layer when working offline:

<p align="center"><img src="../images/qgis-plugin/mergin_plugin_validation_1.png"></p>

<p align="center"><img src="../images/qgis-plugin/mergin_plugin_validation_2.png"></p>


## Synchronisation

Once you are happy with the changes to be uploaded/downloaded, you can synchronise your project and data:

1. Click on the **Synchronize** icon from the Mergin toolbar to sync your project and data.

	<p align="center"><img src="../images/qgis-plugin/sync-toolbar.png"></p>

You can select the status and synchronisation options by right-clicking on the Mergin project from the Browser panel too.

**Note:** Synchronising data and project will work in both ways: all your changes will be uploaded to the server and any pending changes from the server edition of your files will be downloaded and appended to your local files. Therefore, when synchronisation process is completed, your local files and the copy of files on the server will be identical.
