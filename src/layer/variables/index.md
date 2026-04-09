---
description: Mergin Maps variables (username, user email or project name) or GPS position variables can be used in QGIS expressions and as default values in forms.
---

# Variables

There are some useful variables that can be used as [default values](../default-values/). 

Here you can find the lists of:
- [project and user variables](#project-and-user-variables) introduced by <QGISPluginName /> that can be used to record information related to <MainPlatformNameLink /> workspace, project or users
- [position variables](#position-variables) that can be used to record GPS information

## Project and user variables


The <QGISPluginName /> adds several variables that can be used in QGIS expressions:

| Variable name           | Type       | Sample value   | Description |
|-------------------------|-----------------|----------------|-------------|
| `@mm_full_name`         | string| `Joe Schmoe`  | Full name of the currently logged in user, blank if the full name is not set  |
| `@mm_username`          | string | `joe-schmoe`  | Username of the user currently logged in to <MainPlatformNameLink />  |
| `@mm_user_email`        | string | `joe.schmoe@mail.com`  | Email of the user currently logged in to <MainPlatformName /> |
| `@mm_url`               | string | `https://app.merginmaps.com`  | URL of the <MainPlatformName /> service  |
| `@mm_project_name`      | string | `My project` | Name of the active <MainPlatformName /> project  |
| `@mm_project_full_name` | string | `my-team/My project` | Workspace and project name joined with a forward slash |
| `@mm_project_version`   | integer      | `9` | Current version of the active project |


A common use case is to use `@mm_username` or `@mm_user_email` as the [default value](../default-values/) for one of the fields in a survey layer to automatically track who has added (and/or modified) a particular record.

::: tip `mergin_` variable names still work!
QGIS variables listed here previously used the prefix `mergin_`. Now we use the prefix `mm_` standing for <MainPlatformName />.

Both naming options are functional and will continue to work in the future: `@mergin_user_email` and `@mm_user_email` provide the same value when used in QGIS expressions.
:::

## Position Variables

With <MobileAppName />, it is possible to access GPS information using extra position variables. Note that location permission has to be allowed and location service enabled.

Extra position variables can be used as [default values in feature forms](../default-values/).

| Variable name           | Type       | Description |
|-------------------------|-----------------|-------------|
| `@position_coordinate` | geometry | A point with the coordinates in WGS84 |
| `@position_latitude` | decimal | Latitude |
| `@position_longitude` | decimal | Longitude |
| `@position_elevation` | decimal | Orthometric or normal height |
| `@position_elevation_ellipsoid`  | decimal | Ellipsoidal height |
| `@position_geoid_separation`  | decimal | Geoid or quasi-geoid height (undulation) |
| `@position_direction`  | integer | The bearing measured in degrees clockwise from true north to the direction of travel |
| `@position_ground_speed`  | decimal | The ground speed, in meters/sec |
| `@position_vertical_speed`  | decimal | The vertical speed, in meters/sec |
| `@position_magnetic_variation`  | decimal | The angle between the horizontal component of the magnetic field and true north, in degrees. Also known as magnetic declination. A positive value indicates a clockwise direction from true north and a negative value indicates a counter-clockwise direction. |
| `@position_horizontal_accuracy`  | decimal | The accuracy of the provided latitude-longitude value, in meters |
| `@position_vertical_accuracy`  | decimal | The accuracy of the provided altitude value, in meters |
| `@position_from_gps`  | Boolean | *True* if recorded/edited feature's geometry corresponds with current user's position (position marker has the same location as the crosshairs marker) |
| `@position_satellites_visible`  | integer | Number of visible satellites |
| `@position_satellites_used`  | integer | Number of satellites used to calculate the position |
| `@position_gps_fix`  | string | GPS fix, e.g. "RTK float" |
| `@position_gps_antenna_height`  | decimal | Antenna height as defined in [GPS settings](../../field/mobile-app-ui/#gps-settings) |
| `@position_provider_type`  | string | GPS device type (for internal GPS, returns "internal", for external GPS, returns "external") |
| `@position_provider_name`  | string | GPS device name (for internal GPS, returns "Internal", for external GPS, returns the name of the external device) |
| `@position_provider_address`  | string | GPS device address (for internal GPS, returns "<NoSpellcheck id="devicegps" />", for external GPS, returns the MAC address) |
| `@position_hdop`  | decimal | Horizontal dilution of precision (HDOP) |
| `@position_vdop`  | decimal | Vertical dilution of precision (VDOP) |
| `@position_pdop`  | decimal | Position (3D) dilution of precision (PDOP) |

:::tip
**Dilution of precision** (DOP) is a useful value that reflects the confidence level of achieved position precision. In addition to the horizontal and vertical accuracy, the appropriate DOP value (horizontal, vertical, or 3D) can be used to assess the overall quality of your survey accuracy.

You can read more about this topic e.g. on [Wikipedia](https://en.wikipedia.org/wiki/Dilution_of_precision_(navigation)).
:::

