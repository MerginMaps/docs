# Extra Position Variables

<MobileAppName /> provides the option to access GPS information using an extra position variables. Those can be used as [default values in feature forms](./settingup_forms.md). Note that location permission have to be allowed and location service has to be enabled.

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
 - `@position_from_gps` - True, if recorder/edited feature's geometry correspond with current user's position 
 (Position marker has the same location as the cross-hair marker).
