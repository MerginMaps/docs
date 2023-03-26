# How to Add, Edit, Delete Features

[[toc]]

::: tip
If you are new to <MobileAppName />, follow our [tutorials](../tutorials/capturing-first-data/) to get familiar with the app.
:::

Adding, editing and deleting features in <MobileAppName /> is possible in <MainPlatformNameLink /> projects where you have [write permission](../manage/permissions/).

To be able to transfer your data to your mobile/tablet device, share your project and track changes, you will need to [sign up to Mergin Maps](../setup/sign-up-to-mergin-maps/).

## Add features
In <MobileAppName />, open a [project](./input_ui/#projects) you want to use.

To survey new features, tap the **Record** button on the bottom panel to enter the **recording mode**.

![Mergin Maps Input Record tab](./input-record.jpg "Mergin Maps Input Record tab") 

::: warning
If current [GPS accuracy](./gps_accuracy/) falls below the accuracy threshold, you will get a warning about low position accuracy. Accuracy thresholds can be changed in [Settings](./input_ui/#gps-settings).
:::

The crosshairs you will see on your map will be used as the recorded location. You can change the position of your point by pinching and dragging the background map. If you want to recenter the map to your current position, tap the **GPS** button.

Surveyed features are added to the active layer, which is shown just above the bottom panel. You can change the active layer by tapping on it and selecting one from the list of editable layers in the project.
![active survey layer](./input-active-layer.jpg "Active survey layer")

### Capture points
To capture a new point feature, simply tap **Add** on the bottom panel while in the [recording mode](#add-features). A form will open where you can fill in the attributes.

![Add point in Mergin Maps Input](./input-add-point.jpg "Add point in Mergin Maps Input")

### Capture lines or areas
There are two methods of capturing lines and areas: adding vertices one by one or using the *streaming mode* to capture features based on your position.

#### Adding points to survey vertices of lines or areas
Lines and areas can be captured by adding vertices one by one. When you are in the [**recording**](#add-features) mode and your active layer is a line or polygon, you will see line and areas editing tools in the bottom panel.

Tap **Add** to capture vertices of your line or area. If you want to change the position of the last vertex, tap **Remove**, move the vertex to the correct place and  **Release** it. **Undo** can be used to revert last changes.

Once the survey of the feature is completed, tap **Done** and fill in the form.
![Capturing lines](./input-capture-line.jpg)

### Streaming mode to survey lines or areas
Lines and areas can be also captured automatically based on your position. Make sure you are in the [**recording**](#add-features) mode and that your active layer is a line or polygon.

To turn on the streaming mode, long press the **GPS** button. To turn it off, long press the **GPS** button again.

![GPS streaming mode to survey lines](./input-streaming-line.jpg "GPS streaming mode to survey lines")

Once you are finished, tap **Done**. If you are capturing an area, the shape will be automatically closed by connecting the last and the first vertex.

You can change how often you want to capture a vertex in **Line rec. interval** in [**Settings**](./input_ui/#streaming-mode-and-recording-settings). The interval can be defined as time elapsed in seconds or as distance travelled in metres.

:::tip
<SinceBadge type="App" version="2.1.0" />
The recording interval can be now defined also in metres as distance travelled.
:::

## Edit attributes and geometry
Tap on a feature and press the edit button. Now you can change the attributes in the form. To edit the geometry of a feature, tap **Edit geometry** in the bottom panel.

![Edit attributes and geometry in Mergin Maps Input](./input-edit.jpg "Edit attributes and geometry")

To edit geometry of a point feature simply adjust the location by panning the map or use **GPS** in the same manner as when adding new features. Once you are happy with your changes, press **Done**.

### Edit geometry of lines or areas
<SinceBadge type="App" version="1.8.0" />

It is also possible to edit the geometry of lines and areas. Tap on a line or polygon feature and press the **Edit** button. Then select **Edit geometry**.

The vertices of the feature will be highlighted and you can move or remove them as needed. Press **Done** to confirm your changes.

![Editing polygon geometry](./input-edit-polygon.jpg "Editing polygon geometry")

### Redraw geometry of lines or areas
<SinceBadge type="App" version="1.8.0" />
The existing geometry of lines and areas can also be redrawn.

In the feature's form, tap the **Advanced** button and select the **Redraw geometry** option. Now you can record the new geometry using the tools in the bottom panel.

![Advanced editing redrawing geometry of polygons](./input-redraw-geometry.jpg "Advanced editing redrawing geometry of polygons")

### Split geometry of lines or areas
<SinceBadge type="App" version="1.6.0" />
Lines and areas can be split into two or more new features that will keep the same attributes as the original feature.

To split geometry of a feature:
1. Tap on a feature and press the edit button.
![Edit button in Mergin Maps Input](./input-edit-feature.jpg "Edit button in Mergin Maps Input")

2. Tap **Advanced** and select **Split geometry**
![Advanced editing split geometry](./input-split-geometry.jpg "Advanced editing split geometry")

3. Create the splitting line by adding points. When finished, tap **Done**
![Drawing splitting line to split geometry](./input-split-geom-point.jpg "Drawing splitting line to split geometry")

4. In this case, two individual features are created. Both have the same attributes, except for `Feature ID` (one feature keeps the original id, the other gets a new one).
![Geometry split successfully into two features](./input-split-geom-done.jpg "Geometry split successfully into two features")


## Snapping features
<SinceBadge type="App" version="1.6.0" />

Snapping can be enabled in your <MainPlatformName /> project to make the field survey easier. [How to Set Up Snapping](../gis/snapping/) will guide you through the snapping options.

If snapping is enabled, the crosshairs will turn purple and snap to vertices (left) or segments (right) of existing features when capturing new features or editing existing features.
![Snapping Vertices and Segments in Mergin Maps Input](../gis/snapping/input_basic_snapping.png "Snapping Vertices and Segments in Mergin Maps Input")

## Delete features
If you want to delete the feature, tap on it and press the edit button. Here you have the option to **Delete** the selected feature.

![Delete feature in Mergin Maps Input](./input-delete.jpg "Delete feature in Mergin Maps Input")

## Synchronise changes
Don't forget to upload your changes to <MainPlatformNameLink />!

Synchronisation in <MobileAppName /> can be done automatically or manually by pressing the sync button. For more details visit [Synchronisation in Input](./autosync/).

![Synchronise changes manually](./input-autosync.jpg "Synchronise changes manually")

:::tip
[Behind Data Synchronisation](../manage/synchronisation/) contains more information about the synchronisation process in general.

If needed, some files (for example photos) can be excluded from the synchronisation. You can read more about this option in [Selective Synchronisation](../manage/selective_sync/).
:::
