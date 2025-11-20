---
description: Mergin Maps variables (username, user email or project name) or GPS position variables can be used in QGIS expressions and as default values in forms.
---

# Variables

There are some useful variables that can be used as [default values](../default-values/). 

Here you can find the lists of:
- [extra QGIS variables](#extra-qgis-variables) introduced by <QGISPluginName /> that can be used to record information related to <MainPlatformNameLink /> workspace, project or users
- [extra position variables](#extra-position-variables) that can be used to record GPS information

## Project and user variables

The <QGISPluginName /> adds several variables that can be used in QGIS expressions:

| Variable name               | Sample value                  | Scope   | Description |
|-----------------------------|-------------------------------|---------|-------------|
| `@mergin_username`          | `martin`                      | global  | Name of the user currently logged in to <MainPlatformNameLink /> |
| `@mergin_user_email`        | `martin@example.com` | global  | Email of the user currently logged in to <MainPlatformName />|
| `@mergin_url`               | `https://app.merginmaps.com`  | global  | URL of the <MainPlatformName /> service |
| `@mergin_project_name`      | `Tree survey`                 | project | Name of the active <MainPlatformName /> project  |
| `@mergin_project_owner`     | `martin`                      | project | Name of the owner of the active project |
| `@mergin_project_full_name` | `martin/Tree survey`          | project | Owner and project name joined with a forward slash |
| `@mergin_project_version`   | `42`                          | project | Current version of the active project |

A common use case is to use `@mergin_username` as the [default value](../default-values/) for one of the fields in a survey layer to automatically track who has added (and/or modified) a particular record.

## Position Variables

With <MobileAppName />, it is possible to access GPS information using extra position variables. Note that location permission has to be allowed and location service enabled.

Extra position variables can be used as [default values in feature forms](../default-values/).

Following variables are supported:
 - `@position_coordinate` - A point with the coordinates in WGS84.
 - `@position_latitude` - Latitude
 - `@position_longitude` - Longitude
 - `@position_altitude` - Altitude
 - `@position_direction` - The bearing measured in degrees clockwise from true north to the direction of travel.
 - `@position_ground_speed` - The ground speed, in meters/sec.
 - `@position_vertical_speed` - The vertical speed, in meters/sec.
 - `@position_magnetic_variation` - The angle between the horizontal component of the magnetic field and true north, in degrees. Also known as magnetic declination. A positive value indicates a clockwise direction from true north and a negative value indicates a counter-clockwise direction.
 - `@position_horizontal_accuracy` - The accuracy of the provided latitude-longitude value, in meters.
 - `@position_vertical_accuracy` - The accuracy of the provided altitude value, in meters.
 - `@position_from_gps` - True, if recorder/edited feature's geometry correspond with current user's position (Position marker has the same location as the crosshairs marker).
 - `@position_satellites_visible` - Number of visible satellites.
 - `@position_satellites_used` - Number of satellites used to calculate the position.
 - `@position_gps_fix` - GPS fix, e.g. "RTK float"
 - `@position_gps_antenna_height` - Antenna height as defined in [GPS settings](../../field/mobile-app-ui/#gps-settings)
 - `@position_provider_type` - GPS device type.
   - for internal GPS, returns "internal"
   - for external GPS, returns "external"
 - `@position_provider_name` - GPS device name.
   - for internal GPS, returns "Internal"
   - for external GPS, returns the name of the external device
 - `@position_provider_address` - GPS device address.
   - for internal GPS, returns "<NoSpellcheck id="devicegps" />"
   - for external GPS, returns the MAC address
 - `@position_hdop` - Horizontal dilution of precision (HDOP)
 - `@position_vdop` - Vertical dilution of precision (VDOP)
 - `@position_pdop` - Position (3D) dilution of precision (PDOP)

:::tip
**Dilution of precision** (DOP) is a useful value that reflects the confidence level of achieved position precision. In addition to the horizontal and vertical accuracy, the appropriate DOP value (horizontal, vertical, or 3D) can be used to assess the overall quality of your survey accuracy.

You can read more about this topic e.g. on [Wikipedia](https://en.wikipedia.org/wiki/Dilution_of_precision_(navigation)).
:::

