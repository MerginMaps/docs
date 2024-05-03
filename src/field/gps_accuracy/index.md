# GPS Accuracy

::: warning
Our mobile app was redesigned. We are in the process of updating this content to reflect these changes.
:::

Your GPS accuracy depends on several parameters, such as:
- Your GPS device. [External GPS](../external_gps/) may be used to achieve higher accuracy.
- View of the clear sky that affects the number of satellites visible from your position 

When doing the survey, it is essential to be aware of the limitations of your GPS accuracy at the time of recording. 

Current GPS accuracy is displayed above the bottom navigation panel in the <MobileAppNameShort />. Also, there is a circle with the estimated size of the accuracy value around the position marker. 

Tapping the GPS button opens the [GPS info panel](../mobile-app-ui/#current-position-and-gps-info), which contains information about the horizontal and vertical accuracy, as well as number of satellites in use.
![GPS accuracy and GPS info in Mergin Maps mobile app](../mobile-app-ui/mobile-app-gps-info.jpg "GPS accuracy and GPS info in Mergin Maps mobile app")

If you'd like to have higher accuracy, you can wait for your device to acquire a better GPS signal. For precise measurements, you may need to connect your device to an [external GPS](../external_gps.md).

When assessing the overall quality of the survey, it may be beneficial to record some [extra position variables](../../layer/position_variables/), such as type and name of the used GPS device, the horizontal and vertical accuracy or the horizontal, vertical or position dilution of precision (HDOP, VDOP, PDOP). 


:::tip
GPS accuracy can be one of the reasons for misplaced or shifted field data. Visit our blog [Why are my survey points shifted?](https://www.lutraconsulting.co.uk/blog/2021/04/21/projections-field/) to read more about this topic.
:::
