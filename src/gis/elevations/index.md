---
description: See how Mergin Maps handles elevations, vertical transformations and data reported by GPS providers.
---

# Elevations

[[toc]]

Whether you use internal or [external](../../field/external_gps/) GPS during your field survey, <MobileAppName /> provides information about elevation. GPS receivers provide an *ellipsoid height* by default. However, for most applications, a *physical height* (also known as height above the sea level) is more appropriate. The difference between ellipsoid and physical height is called the *geoid separation* (also geoid height or undulation) and it can be applied to transform these heights.

::: tip Terminology
The terms *geoid*, *geoid separation* and *orthometric heights* are used in the <MobileAppNameShort /> and this documentation for simplicity. 

The same functionalities apply also if the used vertical reference system is defined by a *quasi-geoid*, another type of reference surface. Physical heights related to a quasi-geoid are called normal heights.
:::

Information about the altitude and geoid separation (if available) are displayed in the [GPS info panel](../../field/mobile-app-ui/#current-position-and-gps-info).

When transforming elevations, <MainPlatformNameLink /> uses the <NoSpellcheck id="EGM96" />  geoid model by default. However, it is also possible to use another geoid model as described in the [Using custom geoid](#using-custom-geoid) section. This may be especially useful when using [external GPS](../../field/external_gps/) for higher positional precision or when a specific vertical reference system is required. 

There are some differences in the functionality and available details depending on the GPS provider, the OS of the mobile device and the connection setup.

## Internal provider (no external device)

### Android
In Android, the [internal (fused)](../../field/mobile-app-ui/#gps-settings) GPS provider is used by default. It reports ellipsoid heights that are transformed by default to orthometric heights using the <NoSpellcheck id="EGM96" />  geoid model by adding the geoid height (undulation). These values are displayed in the [GPS info panel](../../field/mobile-app-ui/#current-position-and-gps-info) in the <MobileAppNameShort />.

Geoid height, ellipsoid height, and orthometric height values are available and can be stored using [position variables](../../layer/variables/#position-variables).

If needed, it is possible to use the <QGISPluginNameShort /> to [set up a different geoid model](#using-custom-geoid) and transform the elevations to a different vertical reference system.

### iOS
iOS reports *above the sea level* heights by default. Therefore <MainPlatformName /> takes and displays this information by default and does not transform the heights in any way.

??? iOS does not provide the ellipsoid height nor the geoid height, so these values are **not** available and cannot be displayed or used. This is why it also not possible to use custom geoid to transform the elevations to a different vertical reference system.


## External provider - Bluetooth
<Badge text="Android only" type="tip"/>
External GPS can be connected [using Bluetooth](../../field/external_gps/#how-to-connect-external-gps-receiver-in-android-via-mergin-maps-mobile-app-recommended). If possible, we recommend to use this option.

If there is no [user-defined transformation](#using-custom-geoid), the <MobileAppNameShort /> uses data reported by the GPS provider as-is, including the ellipsoid height and geoid separation. These values are available and can be used as [position variables](../../layer/variables/#position-variables). However, <MainPlatformName /> does not receive information about the geoid model used; this information should be supplied by the GPS provider.

It is possible to use the <QGISPluginNameShort /> to [set up a different geoid model](#using-custom-geoid) and transform the elevations to a different vertical reference system. In this case, the ellipsoid height and geoid separation are available. The defined geoid model is displayed in the <MobileAppNameShort />.


## External provider - Network
External GPS can be connected using network connection. The functionality works the same as described above in [External provider - Bluetooth ](#external-provider-bluetooth).

## External provider - Mock

::: warning
Mock location should be only used if you are unable to connect the external GPS directly in the <MobileAppNameShort />.
:::

### Android
If there is no [user-defined transformation](#using-custom-geoid), the <MobileAppNameShort /> uses data reported by the GPS provider as-is. The ellipsoid height and geoid separation values are **not** available.

It is possible to use the <QGISPluginNameShort /> to [set up a different geoid model](#using-custom-geoid) and transform the elevations to a different vertical reference system. However, it is necessary to set up **the mock app to report ellipsoid heights**, otherwise the geoid separation would be applied twice leading to incorrect elevation values.

### iOS
When using the mock location, iOS only sends a minimal subset of available GPS data, namely the coordinates (X, Y, elevation). It is not possible to obtain or display any other position variables, accuracy included.

## Using custom geoid

The geoid model can be specified in [<MainPlatformName /> Project Properties](../../manage/plugin/#mergin-maps-project-properties) in QGIS. The grid shift file then needs to be packages with the project.

In the <MobileAppNameShort />, the info about the custom geoid model is displayed in [GPS info panel](../../field/mobile-app-ui/#current-position-and-gps-info).

