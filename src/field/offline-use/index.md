# Offline Use of Mergin Maps Mobile App
[[toc]]

The <MobileAppName /> app can be used without internet connection, which is useful if you need to do the field survey in areas with poor cell phone signal or limited mobile internet. Collecting data in the field and synchronising them in the office using WiFi can be also more effective when working with large files. 

However, there are some actions that require internet connection and cannot be done offline, such as [synchronising](../autosync/) changes to the cloud, displaying online [background maps](../../gis/settingup_background_map/) or working with online PostGIS layers. Also, if you are offline, you will not be able to switch accounts or download projects from the cloud.


## Offline field survey workflow
Here is a typical workflow of offline data collection. 

We assume that the field surveyors have already [installed the <MobileAppNameShort />](../../setup/install-mobile-app/) and are signed in, as well as that the project used for field survey follows recommendations described in [How to set up an offline <MainPlatformName /> project](#how-to-set-up-an-offline-mergin-maps-project).

1. Make sure that your project is [synchronised](../../manage/synchronisation/#how-to-synchronise-changes-in-mergin-maps) to the <ServerCloudNameLink />
2. While being online, field surveyors [download the project](../../tutorials/mobile) to their mobile device using <MobileAppName />
3. Now they can go to do the field survey and collect data and photos while being offline
4. After finishing field survey and being back online in the office, all surveyors upload their changes back to the cloud

## How to set up an offline Mergin Maps project
Let's see what needs to be done when preparing the <MainPlatformName /> project in QGIS so that all data are available locally in your mobile device and the internet connection is not needed during the field survey.

Whether creating a new <MainPlatformNameLink /> project or editing an existing one, you have to see which layers in your project require internet connection. 

Layers that were packaged when [creating a new Mergin Maps project](../../manage/project/#packaging-qgis-project) in QGIS are stored in the cloud. When the project is downloaded to <MobileAppName />, they are automatically downloaded to your mobile device and can be used offline in the same way as if you were online.

In general, layers that do not work offline are:
- online [background maps](../../gis/settingup_background_map/), such as WMS/WMTS, WFS or online XYZ tiles
- online PostGIS layers

#### Offline background maps
Online background maps have to be prepared for offline use by generating **vector or raster tiles**. Detailed steps on how to do it can be found in [Background Maps](../../gis/settingup_background_map/). 

Vector and raster tiles can be packaged in the project. However, as these files can be rather large, it might be impractical to synchronise them trough <MainPlatformNameLink />. [How to work with very large files](../../gis/settingup_background_map/#how-to-work-with-very-large-files-android) will show you how to get them in your mobile device.

#### Offline PostGIS layers
If you use online PostGIS layers in your <MainPlatformName /> project and need to do an offline survey in the field, we recommend using [DB Sync](../../dev/dbsync/). DB Sync helps synchronising your PostGIS database and GeoPackage layers that can be edited offline using <MobileAppName />.

:::tip
After setting up an offline project, download it to <MobileAppName />. Then close the app, turn off the internet and open the project in <MobileAppName /> again while being offline to make sure that everything works as intended.
:::

