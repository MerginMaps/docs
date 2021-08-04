---
category: 'QGIS Desktop & Plugin'
title: Creating a new Mergin project
menuTitle: Create project
permalink: /plugin-new-project
position: 602
---

## Upload new project

To create a new project, you can start from a blank project or alternatively open an existing project. To start with, click on **Create Mergin Project** from the toolbar:

![](images/qgis-plugin/mergin_plugin_project_wizard_1.png)

A new window will appear which should give you three options (the last two options are available only if you have an existing project open):

![](images/qgis-plugin/mergin_plugin_project_wizard_2.png)

### New basic QGIS project

if you are new to QGIS, this is a good starting point. With this option, 
a project will be created. Within the project there will be a survey layer 
(a point layer) and background map (OpenStreetMap).

### Package current QGIS project 

this option will create a copy of your project and copies all the files 
to a single folder. The wizard tries to guess each format and offers users 
three options to package the layer, keep as is (i.e. the layer will be referenced 
as is in the new project) or ignore (the layer will not be included in the new 
project). The default for each layer type is as follows: the web services 
(e.g. WMTS, XYZ tiles, vector tile layers) will be referenced in the new 
project as they are. Vector layers will be all written to GeoPackage format 
(each vector in one GeoPackage database). Raster layers will be copied as 
they are. The layers will be referenced in the new project accordingly.

![](images/qgis-plugin/mergin_plugin_project_wizard_3.png)

### Use current QGIS project as is

this is for cases when you have already a stand-alone folder with your project packaged.

In the next window, you will be prompted to assign a project name and select a path where your project folder and associated files will be generated (this option is only available for the first two choices):

![](images/qgis-plugin/mergin_plugin_project_wizard_4.png)

After the wizard, the new project will be created locally and on the Mergin server.

## Clone existing project

With the plugin, you can make a copy of one of your existing projects or the ones shared with you. Simply right-click on the project under the **Browser panel > Mergin** and select **Clone**. In the new window, select the **Owner** from the drop-down menu and type your new **Project Name**.

![](images/qgis-plugin/plugin-clone.png)

![](images/qgis-plugin/clone.png)
