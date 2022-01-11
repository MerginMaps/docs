# Custom Projections 

<Badge text="Since Input 0.8.0" type="info"/>

## Using custom PROJ

When Input is launched, it searches for `<project folder>/proj` for custom PROJ datum shifts files in all available projects on the disk. These shift files can be then used in all projects for custom PROJ datum shift.

If you want to use your custom PROJ datum shifts, copy them to the folder `<project folder>/proj` to correctly render your QGIS project on <MobileAppName />. Note that one the project is firstly downloaded to <MobileAppName />, you have to restart <MobileAppName /> to load your custom datum shifts.

We recommend to use Mergin service to transfer the project with the required proj resources to your mobile device.
