# Mergin Maps QGIS Plugin Overview
[[toc]]

The <QGISPluginName /> allows you to work with your <MainPlatformNameLink /> projects in QGIS, whether it's downloading the project to your computer, making changes in the project, seeing the project's status or synchronising changes to the cloud. 

To get started, you will need to [install and configure the plugin](../../setup/install-mergin-maps-plugin-for-qgis/index.md). 

Once installed, plugin's entries will be added to the QGIS toolbar panel, Browser panel, Project properties and to the Processing toolbox.

:::tip
To ensure you can use the latest improvements, don't forget to [upgrade the plugin](../../setup/install-mergin-maps-plugin-for-qgis/#plugin-upgrade) whenever there is an update available!
:::

## Mergin Maps Plugin Toolbar
The plugin's toolbar contains three active buttons to configure the plugin, create a new project and synchronise changes in the current project.

![Mergin Maps Plugin Toolbar in QGIS](../../setup/install-mergin-maps-plugin-for-qgis/mergin-toolbar.jpg "Mergin Maps Plugin Toolbar in QGIS")

If you don't see <MainPlatformName /> plugin in QGIS toolbar, make sure it is enabled in

## Synchronisation in QGIS
Once you are happy with the changes to be uploaded/downloaded, you can synchronise your project and data. 

1. Click on the **Synchronise Mergin Maps project** icon from the <QGISPluginName /> toolbar or right-click on the project in the Browser panel and select **Synchronise**
   ![Mergin Maps plugin for QGIS synchronisation icon](./sync-status-toolbar.jpg "Mergin Maps plugin for QGIS synchronisation icon")
   ![QGIS browser synchronize Mergin Maps project option](./project-sync-2.jpg "QGIS browser synchronize Mergin Maps project option")

2. This will show the project status: a list of pending changes, warnings, and validation results of your project.
   ![Project status with pending changes](./project-sync.jpg "Project status with pending changes")

   Warnings are related to restructuring of a GeoPackage layer (adding/removing a field, adding/removing a layer in a GeoPackage database). Validations can point out missing layers or availability of a layer when working offline.

3. If you want to inspect the pending changes more thoroughly, you can click on the **View changes** button to see the [local changes](#local-changes).
   ![Project status view changes button](./project-sync-view-changes.jpg "Project status view changes button")

4. If you want to proceed, click on the **Sync** button to synchronise your project and data.
  
::: warning
Project and data synchronisation works in both ways.

All your changes will be uploaded to the server and any pending changes from the server edition of your files will be downloaded and appended to your local files.
:::

When the synchronisation process is completed, your local files and the copy of files on the server will be identical.

Once you have installed the <QGISPluginNameShort /> and configured it with your <MainPlatformNameLink /> credentials, you should be able to see it in your QGIS Browser panel. The name of the current [workspace](../workspaces/) is displayed in the square brackets (here: `sarah`) and available projects are listed underneath. 

![Mergin Maps QGIS plugin in QGIS browser](./plugin-browser.jpg "Mergin Maps QGIS plugin in QGIS browser")

## Mergin Maps Plugin in QGIS Browser

### Downloading a project in QGIS

:::tip
Detailed steps on how to download and open your <MainPlatformNameLink /> project are included in the [Opening Surveyed Data on Your Computer](../../tutorials/opening-surveyed-data-on-your-computer/#locating-and-opening-your-project) tutorial.
:::

1. In the Browser panel, navigate to the <MainPlatformName /> entry. The name of the current [workspace](../workspaces/) is displayed in the square brackets (here: `sarah`) and available projects are listed underneath. 
2. Right-click on the project and select **Download**
   ![Download Mergin Maps project option in QGIS browser](../../tutorials/opening-surveyed-data-on-your-computer/qgis-download-project.jpg "Download Mergin Maps project option in QGIS browser")

3. Browse to the folder, where you want to save the project and click **Select folder**. The project will be downloaded here.

   :::danger WARNING
   Do not use shared network drives or cloud storage (such as OneDrive or Google Drive) to store your <MainPlatformName /> projects. It is not supported and can cause errors.
   :::

4. Once the download is completed, you will have the option to open the project in QGIS.

### Exploring public projects

1. Right-click on the <MainPlatformName /> entry in the QGIS Browser and select the **Explore public projects** option
   ![Explore public projects in QGIS Browser](./plugin-explore-public-projects.jpg "Explore public projects in QGIS Browser")

2. Find the project you are interested in. Use the search bar to limit the choices.
   ![List of public projects in QGIS Browser](./plugin-explore-public-projects-list.jpg "List of public projects in QGIS Browser")

3. Select the project and click **Open project**. Browse to the folder where you want to save the project. The project will be downloaded here.

::: tip
You can package this downloaded project using <QGISPluginName /> as described in [Create a project in QGIS](../create-project/#create-a-project-in-qgis) using the **Package current QGIS project** option and use it as your own <MainPlatformNameLink /> project.
:::

### Local changes
<SinceBadge type="Plugin" version="2022.4" />
The changes that you make in the project can be synchronised to the cloud and shared with your coworkers. Now these changes can also be visualised which is helpful when reviewing local changes to see what was actually modified and also to avoid unwanted edits.

:::tip
Visit our blog [View and track changes in QGIS](https://www.lutraconsulting.co.uk/blog/2022/11/08/mergin-maps-local-changes/) to read more about local changes.
:::

To see local changes:
1. Right-click on a layer and select **Show Local Changes** 
   ![QGIS layer show local changes](./plugin-local-changes.jpg "QGIS layer show local changes")

2. **Changes Viewer** opens. The colour-coded changes are listed in the table and shown in the map. Inserts are green, edits orange and deletions red.

   If you want to zoom to specific changes, select them in the table and use **Zoom to Selection**.
   
   ![Mergin Maps QGIS plugin changes viewer](./plugin-changes-viewer.jpg "Mergin Maps QGIS plugin changes viewer")

3. Changes can be added to the QGIS project as a new layer. Click **Add to project** and choose one of the options:
   ![Add local changes to QGIS project](./plugin-changes-viewer-add.jpg "Add local changes to QGIS project")
   
4. A temporary layer will be added to the **Layers** panel with colour-coded symbology
   ![Local changes added to QGIS project](./plugin-local-changes-added.jpg "Local changes added to QGIS project")
   
:::tip
Unless you want to use these layers in your <MainPlatformName /> project, remove them from the project before synchronisation.
:::

## Mergin Maps Plugin Tools in Processing Toolbox

### Extract local changes (Processing toolbox)
Local changes of a specific layer can also be extracted using the **Extract local changes** tool in the **Processing toolbox**.

1. Navigate to **Mergin Maps** tools in the **Processing toolbox**
   ![Mergin Maps tools in QGIS processing toolbox](./plugin-processing.jpg "Mergin Maps tools in QGIS processing toolbox")

2. Double click the **Extract local changes** tool. In the dialog window, enter your project directory and select the input layer. The output local changes layer can be saved as a file or as a temporary file. Click **Run**.
   ![QGIS extract local changes tool](./plugin-extract-local-changes.jpg "QGIS extract local changes tool")

3. The local changes layer is added to the **Layers** panel
   ![Local changes added to QGIS project](./plugin-extract-local-changes-layer.jpg "Local changes added to QGIS project")

### Create diff (Processing toolbox)
**Create diff** is a tool that extracts changes made between two versions of a layer in your <MainPlatformName /> project to make it easier to revise changes.

1. Navigate to **Mergin Maps** tools in the **Processing toolbox**
   ![Mergin Maps tools in QGIS processing toolbox](./plugin-processing-toolbox.jpg "Mergin Maps tools in QGIS processing toolbox")

2. Double click the **Create diff** tool and fill in the parameters in the dialog window. Click **Run**.
   ![Create diff tool dialog](./plugin-create-diff.jpg "Create diff tool dialog")

3. The diff layer is added to the **Layers** panel. Changes are visualised on the map and also in the attribute table of the layer.
   ![Diff layer added to QGIS layers panel](./plugin-create-diff-map.jpg "Diff layer added to QGIS layers panel")


### Create report (Processing toolbox)
**Create report** tool provides an overview of changes in your <MainPlatformName /> project for a range of project versions. The output is a <NoSpellcheck id="CSV" /> file, which can be opened in QGIS and also in common text and spreadsheets programs.

1. Navigate to **Mergin Maps** tools in the **Processing toolbox**
   ![Mergin Maps tools in QGIS processing toolbox](./plugin-processing-toolbox.jpg "Mergin Maps tools in QGIS processing toolbox")

2. Double click the **Create report** tool. 
   
   Fill in the parameters in the dialog window. If you want to get the report for a specified range of [versions](../project-details/), define also the start and end version. 

   Click **Run**.
   ![Create report tool dialog](./plugin-create-report.jpg "Create report tool dialog")

3. The report is added to the **Layers** panel.
   ![Create report tool result](./plugin-report.jpg "Create report tool result")

