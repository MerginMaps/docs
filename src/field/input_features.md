# How to Add, Edit, Delete Features

[[toc]]

::: tip
If you are new to <MobileAppName />, follow our [tutorials](../tutorials/capturing-first-data/) to get familiar with the app.
:::

Open a project you want to work with in <MobileAppName />. This can be a project you own or a project that is shared with you, in which case you need to have [write permission](../manage/permissions/#workspace-and-project-permissions) to add or edit features.

::: tip
To be able to transfer your data to your mobile/tablet device, share your project and track changes, you will need to [sign up to Mergin Maps](../setup/sign-up-to-mergin-maps/).
:::

## Add features
To add a feature, tap the **Record** button from the bottom panel. 

::: warning
A warning will appear when [GPS accuracy](./gps_accuracy/) falls below a threshold. Accuracy thresholds can be changed in **Settings**.
:::

Surveyed features are added to the active layer, which is shown just above the bottom panel. You can change the active layer by tapping on it and selecting one from the list of editable layers in the project.
![active layer](./input-active-layer.png)

### Capture points
The crosshairs you will see on your map will be used as the recorded location. You can change the position of your point by pinching and dragging the background map. If you want to recenter the map to your current position, tap the **GPS** button. 

To capture your point, press **Add Point**. A form will open where you can fill in the attributes.

![Capturing point](../tutorials/capturing-first-data/merginmaps-mobile-default-point-position.jpg)

### Capture lines or areas
There are two methods of capturing lines and areas:
  - Using **Add point** to capture vertices of your line or area:
    ![Capturing lines](./input-capture-line.png)
  
  - Tracking your position using **GPS**. Long press the **GPS** button to turn the tracking on and the vertices will be captured automatically based on your position. You can change how often you want to capture a vertex in **Line rec. interval** in [**Settings**](./input_ui/#recording-settings). 
    
    To turn the tracking off, long press the **GPS** button again.
    ![GPS tracking](./input-gps-tracking.png)

Once you are finished, press **Done**. If your feature is an area, the shape will be automatically closed by connecting the last and the first vertex. 

### Snapping features
<Badge text="since Input 1.6.0" type="tip"/>

Snapping can be enabled in your <MainPlatformName /> project to make the field survey easier. [How to Set Up Snapping](../gis/snapping/) will guide you through the snapping options.

If snapping is enabled, the crosshairs will turn purple and snap to vertices (left) or segments (right) of existing features when capturing new features.
![input snapping](../gis/snapping/input_basic_snapping.png)

## Edit attributes and geometry
Tap on a feature and press the edit button. Now you can change the attributes in the form and modify the geometry of features.
![Edit button](./input-edit.png)

To edit the geometry of a feature, tap **Edit geometry** in the bottom panel. 

If you are editing a point feature simply adjust the location by panning the map or use **GPS** in the same manner as when adding new features. Once you are happy with your changes, press **Done**.

### Edit geometry of lines or areas
<Badge text="since Input 1.8.0" type="tip"/> 
It is also possible to edit the geometry of lines and areas. 

Tap on a feature and press the **Edit geometry** button. The vertices of the feature will be highlighted and you can move or remove them as needed. Press **Done** to confirm your changes.
![Edit](./input-edit-polygon.png)

### Redraw geometry of lines or areas
<Badge text="since Input 1.8.0" type="tip"/>
The existing geometry of lines and areas can also be redrawn.

Tap the **Advanced** button and select the **Redraw** option. Now you can record the new geometry using the tools in the bottom panel.

![advanced](./input-redraw-geometry.png)

### Split geometry of lines or areas
<Badge text="since Input 1.6.0" type="tip"/>
Lines and areas can be split into two or more new features that will keep the same attributes as the original feature.

To split geometry of a feature:
1. Tap on a feature and press the edit button.
![Edit button](./input-edit-feature.png)

2. Tap **Advanced** and select **Split geometry**
![split geometry](./input-split-geometry.png)

3. Create the splitting line by adding points. When finished, tap **Done**
![split geometry](./input-split-geom-point.png)

4. In this case, two individual features are created. Both have the same attributes, except for `Feature ID` (one feature keeps the original id, the other gets a new one).
![split geometry](./input-split-geom-done.png)

## Delete features
If you want to delete the feature, tap on it and press the edit button. Here you have the option to **Delete** the selected feature.

![Edit and delete](./input-delete.png)

## Synchronise changes
Don't forget to upload your changes to <MainPlatformNameLink />!

Synchronisation in <MobileAppName /> can be done automatically or manually by pressing the sync button. For more details visit [Synchronisation in Input](./autosync/).

![sync button](./input-autosync.png)

:::tip
[Behind Data Synchronisation](../manage/synchronisation/) contains more information about the synchronisation process in general.

If needed, some files (for example photos) can be excluded from the synchronisation. You can read more about this option in [Selective Synchronisation](../manage/selective_sync/).
:::
