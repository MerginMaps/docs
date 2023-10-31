# How to Stake Out Points
[[toc]]

Points in your survey layers can be staked out. <MobileAppName /> will navigate you towards the selected point showing you the direction and distance.

There are two stake out modes:
- long navigation mode
- short navigation mode

:::tip
Accurate stake out in short navigation mode may require an [external GPS receiver](../external_gps/) with GPS corrections.
:::

## Stake out in Mergin Maps Input
1. Select a point in your map window. From the form select the **Stake out** icon:
![Stake out feature Mergin Maps Input](./stake-out.jpg "Stake out feature in Mergin Maps Input")

2. Stake out panel will appear showing the current distance and a connecting line between your position and the point.
![Long range stake out panel](./stake-out-long.jpg "Long range stake out panel")

3. Once you are closer to the point (less than 1 m), the stake out panel will switch to short navigation mode.
![Short range stake out panel](./stake-out-short.jpg "Short range stake out panel")

4. Precise stake out of the point (distance less than 10 cm) is highlighted by green:
![Highlighted precise stake out](./stake-out-short-done.jpg "Highlighted precise stake out")


## Changing stake out distance units in QGIS
Distance units displayed by <MobileAppName /> are defined in your project properties:
1. Open your <MainPlatformNameLink /> project in QGIS
2. Navigate to **Project Properties**
3. In the **General** tab, you can define the **Units for distance measurement** by choosing from several options, such as metres, miles, yards or feet.

   Units defined here are then used by default when measuring distances in QGIS, as well as during stake out in the mobile app
   
   ![QGIS Project Properties Units for distance measurement](./qgis-properties-distance-units.jpg "QGIS Project Properties Units for distance measurement")
