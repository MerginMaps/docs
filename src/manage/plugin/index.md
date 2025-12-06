---
description: Create, set up and synchronise your Mergin Maps projects with Mergin Maps QGIS plugin. The plugin brings Mergin Maps functionalities to QGIS.
---

# Mergin Maps QGIS Plugin Overview
[[toc]]

The <QGISPluginName /> allows you to work with your <MainPlatformNameLink /> projects in QGIS, whether it's downloading the project to your computer, making changes in the project, seeing the project's status or synchronising changes to the cloud. 

To get started, you will need to [install and configure the plugin](../../setup/install-mergin-maps-plugin-for-qgis/). 

Once installed, plugin's entries will be added to the QGIS toolbar panel, Browser panel, Project properties and to the Processing toolbox.

:::tip Upgrade the plugin regularly
To ensure you can use the latest improvements, don't forget to [upgrade the plugin](../../setup/install-mergin-maps-plugin-for-qgis/#plugin-upgrade) whenever there is an update available!
:::

## Mergin Maps toolbar in QGIS
The <MainPlatformName /> toolbar is added to the QGIS toolbars panel after installation.

![Mergin Maps Plugin Toolbar in QGIS](../../setup/install-mergin-maps-plugin-for-qgis/mergin-toolbar.jpg "Mergin Maps Plugin Toolbar in QGIS")

If you don't see <MainPlatformName /> toolbar, make sure it is enabled in QGIS toolbars panel

![Enabling Mergin Maps plugin in QGIS toolbars panel](./enable-plugin.gif "Enabling Mergin Maps plugin in QGIS toolbars panel")

The toolbar contains following buttons:
- the <MainPlatformName />  logo is a shortcut to <AppDomainNameLink />
  ![A link to the Mergin Maps dashboard](./plugin-toolbar-logo.jpg "A link to the Mergin Maps dashboard")
  
- **Configure <MainPlatformName /> plugin** to [configure plugin](../../setup/install-mergin-maps-plugin-for-qgis/#plugin-configuration) to connect to <MainPlatformName /> or [a custom server](../../server/plugin-mobile-app/)
  ![Configure Mergin Maps Plugin](../../setup/install-mergin-maps-plugin-for-qgis/qgis-configure-mergin-plugin.jpg "Configure Mergin Maps Plugin")
  ![](./plugin-configure.jpg "")
  
- **Create <MainPlatformName /> project** to [create or package a QGIS project](../create-project/#create-a-project-in-qgis)
  ![Create Mergin Maps project button](./plugin-toolbar-create-project.jpg "Create Mergin Maps project button")
  ![Create Mergin Maps project options](../create-project/mergin_plugin_project_wizard_2.jpg "Create Mergin Maps project options")
    
- **Synchronise <MainPlatformName /> project** to inspect and [synchronise](../synchronisation/#synchronising-changes-in-qgis) or reset changes made in the current project
  ![Synchronise changes button](./plugin-toolbar-sync.jpg "Synchronise changes button")
  ![Mergin Maps project status with pending changes](./plugin-project-status.jpg "Mergin Maps project status with pending changes")

- **Project history** to inspect [project history and versions](../project-history/)
  ![Project history button](./plugin-toolbar-project-history.jpg "Project history button")
  ![Project history changes viewer](./plugin-history-viewer.jpg "Project history changes viewer")

## Mergin Maps plugin in QGIS Browser

Once you have installed the <QGISPluginNameShort /> and configured it with your <MainPlatformNameLink /> credentials, you should be able to see it in your QGIS Browser panel. 

The name of the current [workspace](../workspaces/) is displayed in the square brackets (here: `sarah`) and available projects are listed underneath.

![List of Mergin Maps projects in QGIS Browser](./plugin-browser-projects.jpg "List of Mergin Maps projects in QGIS Browser")

Right-click on the workspace name to easily access options to [configure the plugin](../../setup/install-mergin-maps-plugin-for-qgis/#plugin-configuration), refresh, [create new project](../create-project/#create-a-project-in-qgis), find a project in your workspace, [switch workspace](../workspaces/#switch-workspaces-in-qgis) or [explore public projects](#exploring-public-projects).

![Mergin Maps in QGIS browser](./plugin-browser.jpg "Mergin Maps in QGIS browser")

### Downloading a project in QGIS

:::tip
Detailed steps on how to download and open your <MainPlatformNameLink /> project are included in the [Opening Surveyed Data on Your Computer](../../tutorials/opening-surveyed-data-on-your-computer/#locating-and-opening-your-project) tutorial.
:::

1. Right-click on a project in the Browser panel and select **Download**
   ![Download Mergin Maps project option in QGIS browser](../../tutorials/opening-surveyed-data-on-your-computer/qgis-download-project.jpg "Download Mergin Maps project option in QGIS browser")

2. Browse to the folder, where you want to save the project and click **Select folder**. The project will be downloaded here.

   :::danger WARNING
   Do not use shared network drives or cloud storage (such as OneDrive or Google Drive) to store your <MainPlatformName /> projects. It is not supported and can cause errors.
   :::

3. Once the download is completed, you will have the option to open the project in QGIS.

### Exploring public projects

1. Right-click on the <MainPlatformName /> entry in the QGIS Browser and select the **Explore public projects** option
   ![Explore public projects in QGIS Browser](./plugin-explore-public-projects.jpg "Explore public projects in QGIS Browser")

2. Find the project you are interested in. Use the search bar to limit the choices.
   ![List of public projects in QGIS Browser](./plugin-explore-public-projects-list.jpg "List of public projects in QGIS Browser")

3. Select the project and click **Open project**. Browse to the folder where you want to save the project. The project will be downloaded here.

::: tip
You can package this downloaded project using <QGISPluginName /> as described in [Create a project in QGIS](../create-project/#create-a-project-in-qgis) using the **Package current QGIS project** option and use it as your own <MainPlatformNameLink /> project.
:::


## Mergin Maps Project Properties
Some settings of your [<MainPlatformName /> project](../project/) can be done through <QGISHelp ver="latest" link="user_manual/introduction/qgis_configuration.html#project-properties" text="Project Properties" />, such as:
- [**Selective sync**](../selective_sync/) to avoid synchronisation of unnecessary or large files
- [**Photo quality**](../../gis/features/#photo-quality) of pictures added to the project
- Enable [**snapping**](../../field/mobile-features/#snapping-features) in the <MobileAppNameShort />
- [**Photo name format**](../../gis/photo-names/) for photo attachments fields
- Enable [**position tracking**](../../field/tracking/) and choose its precision level
- Enable [**Map sketching**](../../field/map-sketching/)
- Set [**Layer order**](../../field/layers/#layer-order) for the <MobileAppNameShort />
- Enable [**Photo sketching**](../../field/photo-sketching/) to annotate pictures in the <MobileAppNameShort />

![Mergin Maps Project Properties in QGIS](./qgis-mergin-maps-project-properties.jpg "Mergin Maps Project Properties in QGIS")

![Mergin Maps Project Properties in QGIS](./qgis-mergin-maps-project-properties-2.jpg "Mergin Maps Project Properties in QGIS")


## Mergin Maps Tools in QGIS Processing Toolbox
Processing is a core plugin of QGIS. By installing <QGISPluginName />, <MainPlatformName /> tools are added to the  <QGISHelp ver="latest" link="user_manual//processing/intro.html" text="Processing Toolbox" />.

Use the **Toolbox** icon in the toolbar panel to display **Processing Toolbox** in QGIS.

![Mergin Maps tools in QGIS processing toolbox](./plugin-processing.jpg "Mergin Maps tools in QGIS processing toolbox")

### Create diff (Processing toolbox)
**Create diff** is a tool that extracts changes made between two versions of a layer in your <MainPlatformName /> project to make it easier to revise changes.

1. [Navigate to **Mergin Maps** tools](#mergin-maps-tools-in-qgis-processing-toolbox) in the **Processing toolbox** in QGIS

2. Double click the **Create diff** tool and fill in the parameters in the dialog window. Click **Run**.
   ![Create diff tool dialog](./plugin-create-diff.jpg "Create diff tool dialog")

3. The diff layer is added to the **Layers** panel. Changes are visualised on the map and also in the attribute table of the layer.
   ![Diff layer added to QGIS layers panel](./plugin-create-diff-map.jpg "Diff layer added to QGIS layers panel")


### Create report (Processing toolbox)
**Create report** tool provides an overview of changes in your <MainPlatformName /> project for a range of project versions. The output is a <NoSpellcheck id="CSV" /> file, which can be opened in QGIS and also in common text and spreadsheets programs.

1. [Navigate to **Mergin Maps** tools](#mergin-maps-tools-in-qgis-processing-toolbox) in the **Processing toolbox** in QGIS

2. Double click the **Create report** tool. 
   
   Fill in the parameters in the dialog window. If you want to get the report for a specified range of [versions](../project-history/), define also the start and end version. 

   Click **Run**.
   ![Create report tool dialog](./plugin-create-report.jpg "Create report tool dialog")

3. The report is added to the **Layers** panel.
   ![Create report tool result](./plugin-report.jpg "Create report tool result")

### Download vector tiles (Processing toolbox)
This tool can be used to easily download vector tiles for offline use. Go to [Downloading vector tiles using <QGISPluginName />](../../gis/settingup_background_map/#downloading-vector-tiles-using-mergin-maps-qgis-plugin) to see how it works.

### Extract local changes (Processing toolbox)
Local changes of a specific layer can also be extracted using the **Extract local changes** tool in the **Processing toolbox**.

1. [Navigate to **Mergin Maps** tools](#mergin-maps-tools-in-qgis-processing-toolbox)  in the **Processing toolbox** in QGIS

2. Double click the **Extract local changes** tool. In the dialog window, enter your project directory and select the input layer. The output local changes layer can be saved as a file or as a temporary file. Click **Run**.
   ![QGIS extract local changes tool](./plugin-extract-local-changes.jpg "QGIS extract local changes tool")

3. The local changes layer is added to the **Layers** panel
   ![Local changes added to QGIS project](./plugin-extract-local-changes-layer.jpg "Local changes added to QGIS project")

   
## Mergin Maps in QGIS Plugins menu bar
**Plugins** menu bar in QGIS contains also <MainPlatformName /> options:
- **<MainPlatformName />** is a shortcut to <AppDomainNameLink />
- **Configure <MainPlatformName /> plugin** can be used to [configure plugin](../../setup/install-mergin-maps-plugin-for-qgis/#plugin-configuration) to connect to <MainPlatformName /> or [a custom server](../../server/plugin-mobile-app/)
- **Configure DB sync** can help you generate a initial configuration file for [DB sync](../../dev/dbsync/)

![Mergin Maps in QGIS Plugins menu bar](./plugins-menu-bar.jpg "Mergin Maps in QGIS Plugins menu bar")
