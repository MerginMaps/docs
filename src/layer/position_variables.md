# Extra Position Variables

With <MobileAppName />, it is possible to access GPS information using extra position variables. Note that location permission has to be allowed and location service enabled.

Extra position variables can be used as [default values in feature forms](./form-configuration/#default-values).

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
 - `@position_gps_antenna_height` - Antenna height as defined in [GPS settings](../field/mobile-app-ui/#gps-settings)
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
