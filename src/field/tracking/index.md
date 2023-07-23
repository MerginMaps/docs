# How to Use Tracking in Mergin Maps Input
<SinceBadge type="App" version="2.2.0" />

Position tracking is useful when you want to record your tracks during the field survey. This can help you know the extent of areas you have already surveyed in addition to the surveyed features.

## Set up tracking in QGIS project
Tracking needs to be enabled in QGIS when [preparing your <MainPlatformName /> project](../../gis/features/#tracking).

1. Open your <MainPlatformName /> project in QGIS
2. Navigate to **Project** > **Properties** 
   ![QGIS Project Properties](../../gis/qgis-project-properties.jpg "QGIS Project Properties")

3. In the <MainPlatformName /> tab, check the **Enable tracking** option.
   ![Enable tracking in QGIS Mergin Maps project](../../gis/project-tracking.jpg "Enable tracking in QGIS Mergin Maps project")

   You can also choose how often the position should be recorded. 
   
   This affects the accuracy of the tracking and it may affect the battery usage: for longer surveys that don't require high accuracy, you may want to choose the **Low** option. If you need to have more detailed tracking, choose **Best** available accuracy.

4. Don't forget to save and synchronise your project!

Enabled tracking means that a new line layer for tracking will be created in your <MainPlatformName /> project called `tracking_layer.gpkg`. This layer is created with a set of fields with set up [default values](../../layer/settingup_forms_settings/#default-values):


| Field name               | Data Type      |  Default variable      | Description                          |
|--------------------------|----------------|------------------------|--------------------------------------|
| `tracking_start_time`    | DateTime       | `@tracking_start_time` | Date and time when tracking started  |
| `tracking_end_time`      | DateTime       | `@tracking_end_time`   | Date and time when tracking ended    |
| `total_distance`         | Real           | `$length`              | Tracked distance |
| `tracked_by`             | String         | `@mergin_username`     | Name of the current <MainPlatformNameLink /> user |

You can add new fields as needed, however, they should be set up with automatically generated [default values](../../layer/settingup_forms_settings/#default-values) as <MobileAppName /> will not open the form for manual inputs. You may use some of the QGIS functions, [extra position variables](../../layer/position_variables/) or [extra QGIS variables](../../layer/plugin-variables/).

## Using tracking in Mergin Maps Input

To use tracking in <MobileAppName />, make sure that you enabled tracking in the QGIS project's settings. 

1. Tap **More** and select the **Position tracking** option.
   ![Mergin Maps Input Position tracking](./input-position-tracking.jpg "Mergin Maps Input Position tracking")

2. Tap **Start tracking**. You can capture and edit features in the usual way even during the tracking.
   ![Start tracking in Mergin Maps Input](./input-start-tracking.jpg "Start tracking in Mergin Maps Input")
   
3. To stop tracking, go to **Position tracking** option and tap **Stop tracking**
   ![Stop tracking in Mergin Maps Input](./input-stop-tracking.jpg "Stop tracking in Mergin Maps Input")  
