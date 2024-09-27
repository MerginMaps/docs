# Maps in Dashboard
[[toc]]

The spatial data of your project can be displayed in the **Map** tab of the project on the <DashboardShortLink />. You need to be logged in to see the maps.

![Mergin Maps dashboard map](./dashboard-webmap.gif "Mergin Maps dashboard map")

:::tip Usage details
Maps can be used with *Team*, *Academia* and *Non-profit* <MainDomainNameLink id="pricing" desc="subscription plans"/>.

They are not available for *Individual* or *Professional* subscriptions, <CommunityPlatformName /> and <EnterprisePlatformName />.

You can try this feature for free during the trial period.
:::

## Maps content

In the maps, you will see your survey layers or raster layers that are [packaged](../project/#packaging-qgis-project) with the project. Other layers, such as online [background maps](../../gis/settingup_background_map/#background-maps) or PostgreSQL layers are not displayed. The extent of maps is defined by the [extent set in the QGIS project](../../gis/features/#project-extent).

All maps in the <DashboardShortLink /> use [<MainPlatformName /> vector tile service](../../gis/settingup_background_map/#mergin-maps-vector-tile-service) as a background map.

The content of the maps and of the **Layers** panel is refreshed after every synchronisation of the project. This means you should always see your current spatial data here.

The **Layers** panel lists all layers displayed on the map. The check button :white_check_mark: controls the visibility of layers.

![Mergin Maps dashboard maps](../dashboard/mergin-maps-web-map.jpg "Mergin Maps dashboard maps")

## Troubleshooting

### Map config does not exist
The **Map** tab of a project on the <DashboardShortLink /> may display this error message:
`Map config does not exist, please try update the project`

![Mergin Maps webmap Map config does not exist](./webmap-map-config-issue.jpg "Mergin Maps webmap Map config does not exist")

This usually happens when the map was not initiated. All you need to do is to update the project: the map is refreshed after every synchronisation, so your update will activate the map content.

