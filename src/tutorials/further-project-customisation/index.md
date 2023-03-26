# Further Project Customisation

::: warning
This tutorial may differ from what you encounter when working with <MainPlatformNameLink />. It will be updated soon to include recent changes in <MainPlatformNameLink />, <MobileAppName /> and <QGISPluginName />.
:::

In this tutorial you will learn how to customise your <MainPlatformNameLink /> project further, making it even more useful. The topics covered here are:

[[toc]]

::: tip
Previous tutorials already covered the minimum concepts for data collection so feel free to skip ahead to the [Working Collaboratively](../working-collaboratively/index.md) tutorial (and come back here later on) if you're super keen on collecting data right away.
:::

## Opening the project in QGIS
The various changes we will make to the project will be made in [QGIS](../../setup/install-qgis/) and their effect observed and tested in <MobileAppName />.

If you already have the ***trees-and-hedges*** project open in QGIS, skip to [Layer styles](#layer-styles).

1. Open QGIS
2. Expand the **Mergin Maps** entry in the Browser panel to show **My projects**:
   ![](./qgis-mergin-my-projects.jpg)

3. Expand **My projects** and locate the ***trees-and-hedges*** project
4. **Right-click** it and select **Open QGIS project**:
   ![](./qgis-mergin-open-project.jpg)

The project should now be loaded in QGIS. Don't worry if you cannot see the features you surveyed in the field - this is probably because you've not yet synchronised the project in QGIS.

## Layer styles
When using <MobileAppName /> in the field in the last tutorial, we noticed hedges were difficult to see against the background maps. We'll now fix that.

1. **Double-click** the **hedges** layer in QGIS:
   ![](./qgis-hedges-layer.jpg)
   
   Its layer properties dialog should appear.

2. Select the **Symbology tab** on the left hand side
3. Click the current colour to change it:
   ![](./qgis-symbology-colour.jpg)

4. **Pick a new colour** for hedges which stands out better
   ![](./qgis-select-colour-dialog.jpg)

5. Click **OK**
6. Increase the **line width** to 0.46mm and click **OK**
   ![](./qgis-symbology-width.jpg)

Lines in the hedges layer should now be drawn thicker and in a more prominent colour. 

In the next section we'll see what these changes look like in <MobileAppName />.

## Trialing changes in Mergin Maps Input
Seeing how the changes look like in <MobileAppName /> is easy:

1. In QGIS, save your project:
   ![](./qgis-save-project.jpg)

2. Use the **Synchronise Mergin Maps Project** tool:
   ![](./qgis-sync-mergin-project.jpg)

   The **Project status** window will open with the overview of local changes. Click **Sync** to synchronise the project:
   ![project status](../creating-a-project-in-qgis/qgis-sync-mergin-project-status.jpg)
   
   QGIS and your project in the cloud should now be synchronised.
   ![project synced](./qgis-mergin-project-sync.jpg)

3. Open <MobileAppName /> on your mobile device
4. Open the **Home** tab of the **Projects** page
   
   You should see a sync icon next to the trees-and-hedges project like this:
   ![](../mobile/merginmaps-mobile-sync-project.jpg)

::: tip
If you do not see a sync icon, switch to the **My projects** tab and back to the **Home** tab. This should force <MobileAppName /> to check again for project updates.
:::

5. Sync the project by pressing the sync icon
6. Tap the project to open it

   If you zoom in to the hedge you surveyed, you should see it drawn with the new style we made in the last section:
   ![](./merginmaps-mobile-better-line-style.jpg)

## Labels
Labels can be useful for showing attribute data or other information directly on the map. We'll now add labels to the ***trees*** layer so we can see tree species without having to open each tree's attributes:
![](./merginmaps-mobile-labels-example.jpg)

1. Double-click the ***trees*** layer in QGIS:
   ![](./qgis-trees-layer.jpg)
   
   Its layer properties dialog should appear.

2. Select the **Labels tab** on the left hand side
3. Set the labelling mode to **Single Labels**:
   ![](./qgis-symbology-labels.jpg)

4. Set the **Value** to the ***species*** attribute
   ![](./qgis-symbology-labels-2.jpg)

5. Enable **Draw text buffer** under **Buffer** settings and click **OK**
   ![](./qgis-symbology-labels-3.jpg)

6. Test out these settings in <MobileAppName /> as described in the [Trialing changes](#trialing-changes-in-mergin-maps-input) section above.

## Customising the preview panel
We will now learn how to control the content of the preview panel which is shown when you tap a feature in <MobileAppName />.

The panel for the trees layer looks like the left-hand image below. We will configure it to look like the right-hand image.
![](./merginmaps-mobile-preview-panel-changes.jpg)

1. **Double-click** the **trees** layer in QGIS:
   ![](./qgis-trees-layer.jpg)
   
   Its layer properties dialog should appear.

2. Select the **Display tab** on the left hand side
3. Set the **Display Name** to ***species***:
   ![](./qgis-display-name.jpg)

::: tip
If you notice subtle differences in the name / spelling of the field when you select it in the drop-down list, this is due to the field having been aliased.
:::

4. Set the HTML map tip to:
```
# fields
condition
```
   ![](./qgis-html-map-tip.jpg)

5. Click **OK**
6. Test out these settings in <MobileAppName /> as described in the [Trialing changes](#trialing-changes-in-mergin-maps-input) section above.

## Controlling layer visibility
You may have noticed that older versions of <MobileAppName /> doesn't have a layer switcher. It instead allowed users to switch between map themes. A map theme defines which layers will be displayed.

In a moment we'll define the following map themes:
* ***All layers*** includes all map layers
* ***Hedges*** contains just the ***hedges*** layer and the background map

1. In QGIS, click the **Manage Map Themes** button and select **Add Theme...**:
   ![](./qgis-add-theme.png)

2. Call the theme **All layers** and click **OK**
   ![](./qgis-name-theme.jpg)

3. **Uncheck** the trees and Survey notes layers:
   ![](./qgis-toggle-layers.jpg)

4. Add another theme like in step 1, calling it **Hedges** and click **OK**:
   ![](./qgis-name-theme-2.jpg)

   Switching between the two themes in QGIS causes the layer visibility to be updated accordingly.
   ![QGIS switch theme](./qgis-toggle-themes.png)

   The themes have now been created. Don't forget to save and sync your project!

5. Test out these settings in <MobileAppName /> as described in the [Trialing changes](#trialing-changes-in-mergin-maps-input) section above

   You can access map themes in <MobileAppName /> from the **More** menu:
   ![](./merginmaps-mobile-map-themes-button.jpg)

   ![](./merginmaps-mobile-map-themes.jpg)

## Zoom to project extent
If you experimented with the **Zoom to project** button in <MobileAppName /> you'll have seen that by default, it zooms to the extent of the somewhat large background map:
![](../capturing-first-data/merginmaps-mobile-location-shown-on-osm.jpg)

This is not very useful so we will learn how to specify the extent that this button will zoom to.

1. In QGIS, zoom / pan the map to your desired default extent:
   ![](./qgis-desired-project-extent.jpg)

2. Select **Project > Properties...**
   ![](./qgis-project-properties.jpg)

3. Select the **View Settings tab**
   ![](./qgis-project-properties-project-extent.png)

4. Check **Set Project Full Extent**
5. Click **Map Canvas Extent**:
   ![](./qgis-project-properties-project-extent-set-by-canvas.png)

6. Click **OK**
7. Test out these settings in <MobileAppName /> as described in the [Trialing changes](#trialing-changes-in-mergin-maps-input) section above
   
   The **Zoom to project** button can be found in <MobileAppName /> under the the **More** menu:
   ![](./merginmaps-mobile-zoom-to-project-button.jpg)

## Learning more
The aim of this tutorial was to introduce you to the main concepts of customising <MainPlatformName /> projects in QGIS and to cover common customisation workflows in a basic way.

You will find more tips on how to prepare your QGIS project in [Setup GIS Project](../../gis/features/).
