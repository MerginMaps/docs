# Using Mergin Maps Mobile App

[[toc]]

In the last tutorial we created a new <MainPlatformName /> project in QGIS with layers for surveying trees and hedges. You'll now learn how to:
* Open the QGIS project in <MobileAppName />
* Set GPS accuracy thresholds
* Switch between layers to capture new point and linear features
* Sync and save your data in <MainPlatformNameLink /> cloud

:::tip
Need help navigating <MobileAppName />? [<MobileAppName /> Interface](../../field/input_ui/) contains the overview of the functionality of the app's buttons and features.
:::

## Opening the project on your mobile device 
1. Open <MobileAppName /> on your mobile device
2. Open the **My projects** tab of the **Projects** page
3. **Download** the ***trees-and-hedges*** project:
   ![Downloading project from Projects tab](./merginmaps-mobile-download-my-project.jpg "Downloading project from Projects tab")

   The project should now be downloaded to the device:
   ![Downloading project progress bar](./merginmaps-mobile-project-downloading.jpg "Downloading project progress bar")

4. Switch to the **Home** tab and tap the ***trees-and-hedges project***
   ![Open downloaded project from Home tab](./merginmaps-mobile-open-project.jpg "Open downloaded project from Home tab")

   The project should now be shown:
   ![Project opened in Mergin Maps mobile app](../capturing-first-data/merginmaps-mobile-location-shown-on-osm.jpg "Project opened in Mergin Maps mobile app")

5. Pinch the screen to zoom in on your location. If you lose sight of your location, use the **GPS button** to recentre the map on your position.

## GPS accuracy
Current GPS accuracy affects the quality of field data that you capture in the field. 

Let's see what can happen when capturing field data. Press the **Record** button:
![Entering recording mode in Mergin Maps mobile app](../capturing-first-data/merginmaps-mobile-record.jpg "Entering recording mode in Mergin Maps mobile app")
   
You may now see a warning about GPS accuracy:
![Low GPS accuracy warning](./merginmaps-mobile-gps-accuracy-warning.jpg "Low GPS accuracy warning")

What does it mean? When GPS accuracy falls below a threshold, <MobileAppName /> reports this to the user using this warning. This threshold can be changed and it is highly recommended to set it to a sensible value as described below.
   
The <MobileAppNameShort /> uses a traffic light system to display GPS status:
* Green: OK - GPS accuracy within defined threshold
* Orange: Warning - GPS accuracy outside of defined threshold
* Red: No GPS - there's no GPS signal or the GPS is unavailable

The current value of GPS accuracy, traffic light dot and accuracy bubble is displayed here:
   ![GPS accuracy info in Mergin Maps mobile app](./merginmaps-mobile-accuracy-spot-and-bubble.jpg "GPS accuracy info in Mergin Maps mobile app")

### How to change the GPS accuracy threshold
1. Cancel recording and open **Settings**:
   ![Open settings in Mergin Maps mobile app](./merginmaps-mobile-open-settings.jpg "Open settings in Mergin Maps mobile app")

3. **Set Accuracy** threshold to a sensible value
   Typical values could range between 2m and 25m and typically depend on the accuracy of your mobile device and your use case. Higher accuracy can be achieved by using [external GPS antenna](../../field/external_gps/).
   ![Accuracy threshold setup in Settings](./merginmaps-mobile-setting-accuracy-threshold.jpg "Accuracy threshold setup in Settings")

   Watch the traffic light change colour as you change the accuracy threshold.

## The active layer
In a moment we'll survey a tree. Surveyed features are added to the **active layer**. The project contains three different layers so we'll now ensure the ***trees*** layer is set as the active layer.

1. Press the **Record** button:
   ![Entering the recording mode in Mergin Maps mobile app](../capturing-first-data/merginmaps-mobile-record.jpg "Entering the recording mode in Mergin Maps mobile app")

   The active layer is shown just above the button bar:
   ![Active layer highlighted in Mergin Maps mobile app](./merginmaps-mobile-active-layer.jpg "Active layer highlighted in Mergin Maps mobile app")

2. Tap the active layer and set it to ***trees***:
   ![List of editable layers](./merginmaps-mobile-active-layer-set-to-trees.jpg "List of editable layers")

3. Press the **Add Point** button to survey a new tree.

   Notice how the form (e.g. species drop-down list) reflects how we configured the project in QGIS:
   ![Drop down form in Mergin Maps mobile app](./merginmaps-mobile-forms-with-drop-down.jpg "Drop down form in Mergin Maps mobile app")

4. Enter some values and **Save** the new point

## Editing features and the preview panel
Tapping a map feature shows its preview panel.

1. Tap the tree you just surveyed:
   ![Detail of surveyed tree](./merginmaps-mobile-default-preview-panel.jpg "Detail of surveyed tree")

   Information shown in the preview panel can be customised. We'll learn how in the next tutorial.
   
2. Experiment with editing the tree's species and location using the **edit** button:
   ![Edit button icon](./merginmaps-mobile-edit-button.jpg "Edit button icon")

   The edit button can be used to edit the feature's attributes (e.g. species, condition) and even its location/geometry.

## Survey linear features

When creating the project in QGIS, we included a layer for linear features called ***hedges***. We'll now learn how to survey lines in the <MobileAppNameShort />.

::: tip
Areas can be captured in a similar way to lines if the project has editable area/polygon layers.
:::

1. Set ***hedges*** as the **active layer**.
   
   Refer back to [the active layer section](#the-active-layer) if you cannot remember how to do this.
   
   We'll now survey a hedge feature.

2. Use tools in the bottom panel to survey the line: use **Add Point** to add points along the line and tab **Done** when finished
   ![Surveying line feature in Mergin Maps mobile app](./merginmaps-mobile-digitising-line.jpg "Surveying line feature in Mergin Maps mobile app")

::: tip
Drag the map to position points manually or press **GPS** to recentre the map on your location.
:::

3. Enter some **attributes** and a **photo** for the hedge:
   ![Feature form in Mergin Maps mobile app](./merginmaps-mobile-hedge-attributes-and-photo.jpg "Feature form in Mergin Maps mobile app")

When I surveyed my hedge, it was quite difficult to distinguish from the background map - it was a thin, light green line: 
![Poor symbology of feature on the map](./merginmaps-mobile-poor-symbology.jpg "Poor symbology of feature on the map")

We will learn how to change layer styles in the [next tutorial](../further-project-customisation/).

## Saving data to the cloud
To conclude this tutorial we will push the data we just collected back to <MainPlatformNameLink />.
1. Open the **Home** tab of the **Projects** page
2. Press the sync button:
   ![Synchronising changes to Mergin Maps cloud](./merginmaps-mobile-sync-project.jpg "Synchronising changes to Mergin Maps cloud")

When the sync process has completed your data has been stored safely in the cloud.
