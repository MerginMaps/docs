# Download and Synchronise projects with QGIS Plugin
[[toc]]

<QGISPluginName /> allows you work with your Mergin Maps projects in QGIS, whether it's downloading the project to your computer, making changes in the project, seeing the project's status or synchronising changes to the cloud. 

To get started, you will need to [install and configure the plugin](../setup/install-mergin-maps-plugin-for-qgis/index.md).

## Downloading a project in QGIS

Once you have configured the plugin with your Mergin credentials, you should be able to see the following sections under the Mergin in your QGIS Browser panel:

- **My projects** lists all projects you have created
- **Shared with me** lists the projects that are shared with you (including your organisation projects)
- **Explore** lists all the public projects

To download a project:

1. Right-click on the project and select **Download**

![](./download.png)

2. Browse to the folder, where you want to save the project and click **Select folder**

![](./download-progress.png)

3. Once the download is completed, you will have the option to open the project in QGIS.

![](./download-open.png)


## Project status in QGIS

It is recommended to run the project status after changing your layers and project.

To see the status of your project and data, right-click on the project in the Browser panel or click on **Status** in the Mergin plugin panel:

![](./sync-status-toolbar.png)

This will show a list of pending changes, warnings, and validation results of your project. The warnings are related to restructuring of a GeoPackage layer (adding/removing a field, adding/removing a layer in a GeoPackage database). Validations can point out missing layers or availability of a layer when working offline.

![](./mergin_plugin_validation_1.png)

![](./mergin_plugin_validation_2.png)


## Synchronisation in QGIS

Once you are happy with the changes to be uploaded/downloaded, you can synchronise your project and data. Right-click on the project in the Browser panel or click on the **Synchronise** icon from the Mergin toolbar to sync your project and data.
![](./sync-toolbar.png)

::: warning
Synchronising data and project will work in both ways
:::

All your changes will be uploaded to the server and any pending changes from the server edition of your files will be downloaded and appended to your local files. Therefore, when synchronisation process is completed, your local files and the copy of files on the server will be identical.
