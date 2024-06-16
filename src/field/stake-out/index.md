# How to Stake Out Points
[[toc]]

Points in your survey layers can be staked out. The <MobileAppNameShort /> will navigate you towards the selected point showing you the direction and distance.

There are two stake out modes *long navigation mode* and *short navigation mode* that is activated when you are less than 1 m away from the point.

:::tip
Accurate stake out in short navigation mode may require an [external GPS receiver](../external_gps/) with GPS corrections.
:::

## Stake out in Mergin Maps mobile app
1. Select a point in your map window. From the form tap the **Stake out** option:
![Stake out feature Mergin Maps mobile app](./stake-out.jpg "Stake out feature in Mergin Maps mobile app")

2. Stake out panel will display the current distance and a connecting line between your position and the point.
![Long range stake out panel](./stake-out-long.jpg "Long range stake out panel")

3. Once you are closer to the point (less than 1 m), the stake out panel will switch to the *short* navigation mode.
![Short range stake out panel](./stake-out-short.jpg "Short range stake out panel")

Precise stake out of the point (distance less than 10 cm) will be highlighted by green.


## Changing stake out distance units in QGIS
Distance units displayed by the <MobileAppNameShort /> are defined in your project properties:
1. Open your <MainPlatformNameLink /> project in QGIS
2. Navigate to **Project Properties**
3. In the **General** tab, you can define the **Units for distance measurement** by choosing from several options, such as metres, miles, yards or feet.

   Units defined here are then used by default when measuring distances in QGIS, as well as during stake out in the mobile app
   
   ![QGIS Project Properties Units for distance measurement](./qgis-properties-distance-units.jpg "QGIS Project Properties Units for distance measurement")
