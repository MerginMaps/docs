# GPS Accuracy

::: warning
Our mobile app was redesigned. We are in the process of updating this content to reflect these changes.
:::

Your GPS accuracy depends on several parameters, such as:
- Your GPS device. [External GPS](../external_gps/) may be used to achieve higher accuracy.
- View of the clear sky that affects the number of satellites visible from your position 

When doing the survey, it is essential to be aware of the limitations of your GPS accuracy at the time of recording. Current GPS accuracy is displayed above the bottom navigation panel in <MobileAppName />. Also, there is a circle with the size of the accuracy value around the position marker.
![GPS accuracy displayed in Mergin Maps mobile app](../mobile-app-ui/mobile-app-gps-info.jpg "GPS accuracy displayed in Mergin Maps mobile app")

A warning will appear, if your accuracy is outside the GPS accuracy threshold. To get rid of this warning, you can increase your **Accuracy threshold** or turn off these warnings in [Settings](../mobile-app-ui/#gps-settings).

Tapping the GPS accuracy tab opens the [GPS info panel](../mobile-app-ui/#current-position-and-gps-info), which contains information about the horizontal and vertical accuracy, as well as number of satellites in use.
![GPS info panel](../mobile-app-ui/mobile-app-gps-info.jpg "GPS info panel")

If you'd like to have higher accuracy, you can wait for your device to acquire a better GPS signal. For precise measurements, you may need to connect your device to an [external GPS](../external_gps.md).

:::tip
When assessing the overall quality of the survey, it may be beneficial to record some [extra position variables](../../layer/position_variables/), such as type and name of the used GPS device, the horizontal and vertical accuracy or the horizontal, vertical or position dilution of precision (HDOP, VDOP, PDOP). 
:::

:::tip
GPS accuracy can be one of the reasons of misplaced or shifted field data. Visit our blog [Why are my survey points shifted?](https://www.lutraconsulting.co.uk/blog/2021/04/21/projections-field/) to read more about this topic.
:::
