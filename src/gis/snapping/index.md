# How to Set Up Snapping for Mergin Maps Input 
<Badge text="since plugin 2022.5" type="warning"/><Badge text="since Input 1.6.0" type="tip"/>

[[toc]]

Capturing data in the field using <MobileAppName /> can be easier, if you can snap the vertices of new features to existing geometries. Snapping can also help you avoid creating topological errors in your datasets. 

[<QGISPluginName />](../../manage/plugin-sync-project/) provides three snapping options:
- *No snapping* - snapping is not enabled (default)
- *Basic snapping* - features are snapped to the vertices and segments of vector features in the project
- *Follow QGIS snapping* - uses the snapping preferences defined in the QGIS project


## Basic snapping
To set up basic snapping:
1. Open your <MainPlatformName /> project in QGIS
2. Go to the **Project Properties**
![project properties](./qgis-project-properties.png)

3. Navigate to the **<MainPlatformName />** tab and change the snapping settings to **Basic snapping**
![project properties](../project_snapping.png)

4. Apply the changes, save and sync your project. 
   
   Don't forget to synchronise the project also in <MobileAppName /> before the fieldwork.

Now you can use basic snapping in <MobileAppName />! 

When capturing a new feature near an existing one, the crosshairs will turn purple and snap to its vertex (left) or to its segment (right).
![project properties](./input_basic_snapping.png)

:::tip
If you don't want the crosshairs to snap to a feature, try zooming in. The snapping threshold is 20 pixels, so the more you zoom in, the closer you can place the vertex to the existing geometry without snapping.

If you want to change the snapping threshold, use the *[Follow QGIS snapping](#follow-qgis-snapping)* option and define the snapping tolerance in your <MainPlatformName /> project in QGIS.
:::


## Follow QGIS snapping
<QGISPluginName /> gives you the option to use the snapping preferences defined in QGIS project. This means you can, for instance, exclude some layers from snapping, choose the snapping mode or change the snapping threshold.

1. Navigate to the **<MainPlatformName />** tab in the **Project Properties** and change the snapping settings to **Follow QGIS snapping**
   ![follow qgis snapping](./plugin-qgis-snapping.png)

2. Enable snapping in the **Snapping toolbar** and set your snapping preferences.
   ![snapping](./qgis-snapping-enable.png)
   
   ::: tip
   If you cannot see the **Snapping toolbar** in QGIS, ensure it's enabled under **View** (top-level menu) > **Toolbars**
   :::
   
3. Snapping preferences can also be set through the **Snapping Options** in the **Project** menu
   ![snapping options](./qgis-snapping-options.png)
   
4. Switch to **Advanced Configuration**
   ![advanced configuration](./qgis-snapping-advanced.png)
   
5. Here, snapping settings can be defined for each layer individually:
   - enable/disable snapping for specific layers. Layers that are not checked will not be used for snapping.
   - in the *Type* column, you can choose if you want to snap to vertices, segments or both
   - set the *Tolerance* (the snapping threshold). This defines how close the crosshairs need to be to an existing feature to snap to its geometry.
   
   ![snapping settings](./qgis-snapping-settings.png)
 
4. Save and sync your project.

   Don't forget to synchronise the project also in <MobileAppName /> before the fieldwork.

Snapping in <MobileAppName /> will now follow the snapping settings as defined in the QGIS project.

:::tip
You can learn more about snapping in QGIS in <QGISHelp ver="3.22" link="user_manual/working_with_vector/editing_geometry_attributes.html?highlight=snapping#snapping-and-digitizing-options" text="QGIS User Guide" />.
:::
