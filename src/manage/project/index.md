# Mergin Maps Project
[[toc]]

What is a <MainPlatformName /> project? 

It is basically a folder that contains data (such as vector layers, tables, rasters or photos), a [QGIS project](../../gis/features/), and some extra <MainPlatformName /> files needed to ensure everything works.

When <MainPlatformName /> project is created, it is saved to <MainPlatformName /> cloud. From the cloud, it can be downloaded to various devices, used by different team members in both QGIS and <MobileAppName />. Changes they made are tracked and synchronised back to the cloud.

## Creating project
:::tip
Different ways of how a <MainPlatformName /> project can be created are described in [How to Create a New Project](../create-project/) 
:::

In general, projects are prepared and managed in [QGIS](../../setup/install-qgis/), where you can get the most of the functionality, such as set up survey layers and their properties (symbology, forms, etc.), background maps, or other project settings. 

Typically, especially if your project is rather complex, you would:
1. Create a QGIS project with all necessary datasets and settings to fit your needs
2. Package it using <QGISPluginName /> to create a <MainPlatformName /> project that is saved to the cloud
3. Check that everything works as expected in the mobile app. If not, fix the issues in QGIS. Don't forget to save and sync the project. Repeat this step as necessary.
4. [Share the project](../project-advanced/#share-a-project) with your team members. Now you can collaborate safely and effectively.

:::tip
[QGIS Project Preparation](../../gis/features/) will guide you the project preparation steps. We also recommend following our [Best Practice Tips for Layers and Forms](../../layer/best-practice/).

If you need to make changes in the data schema of survey layers, please follow [How to Deploy Revised Projects](../deploy-new-project/) to avoid synchronisation issues.
:::

## Packaging QGIS project
When using <QGISPluginName /> to [create a <MainPlatformName /> project](../create-project/#create-a-project-in-qgis), there is an option to **Package current project**. This is what you will choose if you want to transform your QGIS project into <MainPlatformName /> project.
![package project](./package-project.png)

There are three options for handling layers:
   - **package** - layers will be copied and saved in the new <MainPlatformName /> project folder: by default, each vector layer will be saved as a GeoPackage, rasters (if possible) will be saved as GeoTIFF and local vector and raster MBTiles will be copied to the folder.
   - **keep as is** - the layer will be referenced "as is" in the new project. The location of the file will stay the same, it will **not** be copied to the new <MainPlatformName /> project folder. This is the default for some rasters and web services (e.g. WMS/WMTS, WFS, online vector and XYZ tiles).
   - **ignore** - the layer will **not** be included in the new project.
   
   ![](../create-project/mergin_plugin_project_wizard_3.png) 

After the layers for the new project are selected, you just need to enter the project's name and choose where to save it on your computer. It will also be saved on the <MainPlatformName /> server.
   ![](../create-project/mergin_plugin_project_wizard_4.png)

### Mergin Maps project folder
The project folder on your computer will contain the **QGIS project** and all layers that were selected to be **packaged**. These are the files that are referenced in the project - and only they will be updated when the project is synchronised! The original data can be archived as they will not be used or needed by <MainPlatformName /> project anymore.

Layers that were **kept as is** are not stored in the project folder.

![](./project-folder.png)

There are also some extra folders and files:
- **`.mergin`** folder contains the `Geodiff` files that are used to keep the [project history and versions](../project-details/) and [diagnostic log](../../misc/troubleshoot/#diagnostic-logs) in a file named `client-log.txt`
- **`proj`** folder contains, if needed, [custom projections](../../gis/proj/) files
- [conflict files](../missing-data/#there-are-conflict-files-in-the-folder) may appear if changes could not be properly synchronised
![tech files](./folder-tech-files.png)

And this is how the same project looks in <AppDomainNameLink />
![project cloud](./project-server.png)

