# Offline Use of Mergin Maps Input
[[toc]]

The <MobileAppName /> app can be used  without internet connection, which is useful if you need to do the field survey in areas with poor cell phone signal or limited mobile internet. Collecting data in the field and synchronising them in the office using WiFi can be also more effective when working with large files. However, there are some features that work only online.

Even **offline** you can:
:white_check_mark:  see your position displayed (location services has to be enabled)
:white_check_mark:  [add, edit and delete feature](../input_features/) as well as see their details
:white_check_mark:  [capture photos](../../layer/settingup_forms_photo/)
:white_check_mark:  [stake out features](../stake-out/)
:white_check_mark:  see all layers that are packaged in your project, including offline [background maps](../../gis/settingup_background_map/#background-maps)

On the other hand, there are some features that require internet connection and **cannot be done offline** such as:
:no_entry_sign: [synchronising](../autosync/) changes to the cloud
:no_entry_sign: displaying online layers, such as [background maps](../../gis/settingup_background_map/)
:no_entry_sign: signing in or switching account
:no_entry_sign: switching to another [workspace](../../manage/workspaces/#switch-workspaces-in-mergin-maps-input)
:no_entry_sign: [create](../../manage/create-project/#create-a-project-in-mergin-maps-input) new projects, downloading projects from the cloud or browsing public projects


## Offline field survey workflow
The workflow 

/manage/workspaces/#switch-workspaces-in-mergin-maps-input

1. downloading the app, signing in
2. user has all the required layers offline - downloading project to the app
3. collects data/photos in area with no internet access
4. upload the data at the end of the day when back in the office.

## How to set up an offline project
Let's see what needs to be done when preparing the <MainPlatformName /> project in QGIS so that all data are available locally in your mobile device and the internet connection is not needed during the field survey.

When [creating a new Mergin Maps project](../../manage/project/#packaging-qgis-project) in QGIS, there is an option to **package** layers. 
![Package layers in Mergin Maps project](./qgis-layers-options.jpg "Package layers in Mergin Maps project")

Packaged layers are stored in the cloud. When downloading the project in <MobileAppName />, they are automatically downloaded to your mobile device and can be used offline in the same way as if you were online.

- **Survey layers** are packaged when <MainPlatformName /> project is created and stored in the cloud. 
   - Make sure to use **GeoPackage** format for survey layers so that changes made in the field are detected correctly during (online) synchronisation.

- Online **background maps** have to be prepared for offline use by generating **vector or raster tiles**. Detailed steps on how to do it can be found in [Background Maps](../../gis/settingup_background_map/). 
   - Vector and raster tiles can be packaged 
   - As these files can be rather large, it might be impractical to synchronise them trough <MainPlatformNameLink />. [How to work with very large files](../../gis/settingup_background_map/#how-to-work-with-very-large-files-android) will show you how to 

After making these preparation steps in QGIS:
- [package](../../manage/project/#packaging-qgis-project) the project if creating a new project
- save and synchronise the changes if modifying an existing project
