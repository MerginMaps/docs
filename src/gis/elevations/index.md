---
description: See how Mergin Maps handles elevations, vertical transformations and data reported by GPS providers.
outline: [2,3]
---

# Elevations

[[toc]]

When collecting data in the field, <MobileAppName /> provides information about your position and also elevation. By default, GPS receivers provide an *ellipsoidal height* that is related to the reference ellipsoid. However, for most applications, a *physical height* (also known as height above the sea level) is more appropriate.

An *orthometric* height is a physical height referred to a *geoid*, a special surface that resembles the mean sea level. The difference between ellipsoidal and orthometric height is called the *geoid separation* (also known as geoid height or undulation) and it can be applied to transform between these heights.

When transforming elevations from ellipsoidal to orthometric, <MainPlatformNameLink /> uses the EGM96 geoid model by default. However, it is also possible to use another geoid model as described in the [Using custom geoid](#using-custom-geoid) section. This may be especially useful when conducting more precise surveys or when a specific vertical reference system is required. 

:::warning Learn more
Height systems and elevations are complex topics. If you want to get more insight, we recommend going through some explanatory resources, such as [Height Systems](https://geodesy.science/item/height-systems/) by the International Association of Geodesy.
:::

::: tip Terminology
The terms *geoid*, *geoid separation* and *orthometric heights* are used in the <MobileAppNameShort /> and this documentation for simplicity. 

The same functionalities apply also if the used vertical reference system is defined by a *quasi-geoid*, another type of reference surface. Physical heights referred to a quasi-geoid are called *normal* heights.
:::

Information about the altitude and geoid separation (if available) are displayed in the [GPS info panel](../../field/mobile-app-ui/#current-position-and-gps-info).

![GPS info panel](../../field/mobile-app-ui/mobile-app-gps-info.webp "GPS info panel")

There are some differences in the functionality and available details depending on the GPS provider, the OS of the mobile device and the connection setup, namely the type of elevation provided, available [position variables](../../layer/variables/#position-variables) and whether it is possible to use [custom geoid](#using-custom-geoid).

## Internal provider (no external device)

### Android
On Android, the [internal (fused)](../../field/mobile-app-ui/#gps-settings) GPS provider is used by default. It reports ellipsoidal heights that <MainPlatformName /> transforms to **orthometric heights using the EGM96 geoid model** by default and displays them in the [GPS info panel](../../field/mobile-app-ui/#current-position-and-gps-info).

**Position variables**: :white_check_mark: *ellipsoidal elevation*, *orthometric elevation*, *geoid separation* values are available and can be stored using [position variables](../../layer/variables/#position-variables).

**Custom geoid**: :white_check_mark: It is possible to use the <QGISPluginNameShort /> to [set up a different geoid model](#using-custom-geoid) and transform the elevation to a different vertical reference system.

### iOS
On iOS, the GPS provider can provide orthometric and ellipsoidal heights.

#### Ellipsoidal height not available
If ellipsoidal height **is not** available, <MainPlatformName /> does not transform the elevation in any way. iOS reports *above the sea level* heights by default, so this information is displayed in the [GPS info panel](../../field/mobile-app-ui/#current-position-and-gps-info) in the <MobileAppNameShort />. 

**Position variables**: 
- :white_check_mark: *orthometric elevation* is available and can be stored using [position variables](../../layer/variables/#position-variables)
- :no_entry_sign: *ellipsoidal elevation* and *geoid separation* values are **not** available

**Custom geoid**: :no_entry_sign: It is not possible to use custom geoid model.

#### Ellipsoidal height available
If iOS provides also the ellipsoidal heights, <MainPlatformName /> transforms them to **orthometric elevations using the EGM96 geoid model** by default and displays them in the [GPS info panel](../../field/mobile-app-ui/#current-position-and-gps-info).

**Position variables**: :white_check_mark: *ellipsoidal elevation*, *orthometric elevation*, *geoid separation* values are available and can be stored using [position variables](../../layer/variables/#position-variables).

**Custom geoid**: :white_check_mark: It is possible to use the <QGISPluginNameShort /> to [set up a different geoid model](#using-custom-geoid) and transform the elevation to a different vertical reference system.


## External provider - Bluetooth
<Badge text="Android only" type="tip"/>
On Android, external GPS can be connected [using Bluetooth](../../field/external_gps/#how-to-connect-external-gps-receiver-in-android-via-mergin-maps-mobile-app-recommended). If possible, we recommend using this option.

If there is no [user-defined transformation](#using-custom-geoid), the <MobileAppNameShort /> uses data reported by the GPS provider as-is, including the ellipsoidal height and geoid separation. <MainPlatformName /> does not receive information about the geoid model used; this information should be supplied by the GPS provider.

**Position variables**: :white_check_mark: *ellipsoidal elevation*, *orthometric elevation*, *geoid separation* values are available and can be stored using [position variables](../../layer/variables/#position-variables).

**Custom geoid**: :white_check_mark: It is possible to use the <QGISPluginNameShort /> to [set up a different geoid model](#using-custom-geoid) and transform the elevation to a different vertical reference system. The defined geoid model is displayed in the <MobileAppNameShort />.

## External provider - Network
External GPS can be connected using network connection on both iOS and Android. We recommend using this option.

The functionality is the same as described above in [External provider - Bluetooth ](#external-provider-bluetooth).

## External provider - Mock location

Mock location should be only used if you are unable to connect the external GPS directly in the <MobileAppNameShort />. Because of system limitations, both Android and iOS send only a subset of available data. Some [position variables](../../layer/variables/#position-variables) may not be available.

### Android
If there is no [user-defined transformation](#using-custom-geoid) (custom geoid), the <MobileAppNameShort /> uses data reported by the GPS provider as-is.

**Position variables**: 
- :white_check_mark: *orthometric elevation* is available and can be stored using [position variables](../../layer/variables/#position-variables)
- :no_entry_sign: *ellipsoidal elevation* and *geoid separation* values are **not** available

**Custom geoid**: 
- :warning: It is possible to use the <QGISPluginNameShort /> to [set up a different geoid model](#using-custom-geoid) and transform the elevation to a different vertical reference system. However, it is necessary to **set up the mock app to report ellipsoidal heights**, otherwise the geoid separation would be applied twice leading to incorrect elevation values. 
- :white_check_mark: If custom geoid is used, the *orthometric elevation*, *ellipsoidal elevation* and *geoid separation* variables are available and can be stored using [position variables](../../layer/variables/#position-variables).

### iOS
If there is no [user-defined transformation](#using-custom-geoid) (custom geoid), the <MobileAppNameShort /> uses data reported by the GPS provider as-is.

**Position variables**:  
- :white_check_mark: *orthometric elevation* is available and can be stored using [position variables](../../layer/variables/#position-variables)
- :no_entry_sign: *ellipsoidal elevation* and *geoid separation* values are **not** available

**Custom geoid**: 
- :warning: It is possible to use the <QGISPluginNameShort /> to [set up a different geoid model](#using-custom-geoid) and transform the elevation to a different vertical reference system. However, it is necessary to **set up the mock app to report ellipsoidal heights**, otherwise the geoid separation would be applied twice leading to incorrect elevation values. 
- :white_check_mark: If custom geoid is used, the *orthometric elevation*, *ellipsoidal elevation* and *geoid separation* variables are available and can be stored using [position variables](../../layer/variables/#position-variables).

## Using custom geoid

The geoid model can be specified in [<MainPlatformName /> Project Properties](../../manage/plugin/#mergin-maps-project-properties) in QGIS. The grid shift file will be packaged with the project based on the selected vertical reference system.

In the <MobileAppNameShort />, the info about the custom geoid model is displayed in the [GPS info panel](../../field/mobile-app-ui/#current-position-and-gps-info).

1. Open your <MainPlatformName /> project and navigate to the <MainPlatformName />  tab in **Project Properties**

2. Check the *Report height in a specific vertical CRS* option :heavy_check_mark:
   ![Mergin Maps QGIS plugin vertical CRS](./plugin-vertical-crs.webp "Mergin Maps QGIS plugin vertical CRS")

3. Select a vertical CRS from the list or use the **Select CRS** button to choose from predefined CRS.
   
   Use the filter to narrow the search using a keyword or the EPSG code. 
   
   Select a CRS and click **OK**.
   ![Select target vertical CRS in QGIS](./plugin-target-vertical-crs.webp "Select target vertical CRS in QGIS")

4. **Apply** the changes in **Project Properties** and synchronise your changes.
   ![Mergin Maps QGIS plugin defined vertical CRS](./plugin-set-vertical-crs.webp "Mergin Maps QGIS plugin defined vertical CRS")
   
When recording and displaying heights in the <MobileAppNameShort />, the custom geoid will be used instead of the default EGM96 model.

### Multiple datum transformation available
For some vertical CRS, there may be multiple datum transformations available. If this is the case, you will get a warning when selecting the CRS.

![Mergin Maps QGIS plugin datum transformation warning](./plugin-transformation-warning.webp "Mergin Maps QGIS plugin datum transformation warning")

To make sure that <MainPlatformName /> uses the correct operation, ensure that the correct datum transformation is defined in the **Transformations** tab in **Project Properties**.

### Downloading grid shift files
Some specific vertical CRS transformations may not be included in QGIS by default (see [custom projections in QGIS](../proj/#custom-projections-in-qgis)). In this the case, the <QGISPluginNameShort /> will display a warning that it needs to download the geoid grid file.

Use the **click here** link to download the grid.

![Mergin Maps QGIS plugin geoid grid download](./plugin-download-grid-shift.webp "Mergin Maps QGIS plugin geoid grid download")

The geoid grid will be downloaded and packaged with your project.

![Mergin Maps QGIS plugin geoid grid download](./plugin-grid-shift-downloaded.webp "Mergin Maps QGIS plugin geoid grid download")
