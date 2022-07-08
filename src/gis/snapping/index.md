# How to Set Up Snapping for Mergin Maps Input 
<Badge text="since plugin 2022.5" type="warning"/><Badge text="since Input 1.6.0" type="tip"/>

[[toc]]

Capturing data in the field using <MobileAppName /> can be easier, if you can can snap the vertices of new features to existing geometries. Snapping can also help you avoid creating topological errors in your datasets. 

<QGISPluginName /> provides three snapping options:
- *No snapping* - snapping is not allowed (default)
- *Basic snapping* - features are snapped to the vertices and segments of vector features in the project
- *Follow QGIS snapping* - uses the snapping preferences defined in the Snapping toolbar in QGIS


## Basic snapping
To set up basic snapping:
1. Open your <MainPlatformName /> project in QGIS
2. Go to the **Project Properties**
![project properties](./qgis-project-properties.png)

3. Navigate to the **<MainPlatformName />** tab and change the snapping settings to **Basic snapping**
![project properties](../project_snapping.png)

4. Apply the changes, save and sync your project. 
   
   Don't forget to synchronise the project also in <MobileAppName /> before the fieldwork.

Now you can use basic snapping in **<MobileAppName />**! When capturing a new feature near to an existing one, the cross hairs will turn purple and snap to the vertex (right) or to the segment (left) of this feature.
![project properties](./input_basic_snapping.png)

:::tip
If you don't want the cross hairs to snap to a feature, try zooming in. The snapping threshold is 20 pixels, so the more you zoom in, the closer you can place the vertex to the existing geometry without snapping.
:::


## Follow QGIS snapping
<QGISPluginName /> gives you the option to use the snapping preferences defined in the Snapping toolbar in QGIS:
1. Navigate to the **<MainPlatformName />** tab in the **Project Properties** and change the snapping settings to **Follow QGIS snapping**
   ![follow qgis snapping](./plugin-qgis-snapping.png)
2. Enable snapping in QGIS in the **Snapping toolbar**
   ![snapping](./qgis-snapping-enable.png)
   
   ::: tip
   If you cannot see the **Snapping toolbar** in QGIS, ensure it's enabled under **View** (top-level menu) > **Toolbars**
   :::
   
3. To snap only to, say, vertices and not to the segments of features, change the snapping mode
   ![snapping mode](./qgis-snapping-mode.png)

4. To exclude some layers from snapping, click on **Open Snapping Options**
   ![snapping options](./qgis-snapping-options.png)
   
5. In **Project Snapping Settings** Switch to **Advanced Configuration**. Vector layers in the project will be listed in the table. Snapping mode can be defined for each layer individually.
   
      Layers that are not checked will not be used for snapping.  
   
   ![snapping settings](./qgis-snapping-settings.png)
 
4. Save and sync your project.

   Don't forget to synchronise the project also in <MobileAppName /> before the fieldwork.

:::tip
You can learn more about snapping properties in <QGISHelp ver="3.22" link="user_manual/working_with_vector/editing_geometry_attributes.html?highlight=snapping#snapping-and-digitizing-options" text="QGIS User Guide" />.
:::
