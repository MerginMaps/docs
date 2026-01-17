---
description: Webmaps display the map overview of your project's spatial data directly in your web browser, on Mergin Maps dashboard.
---

# Webmaps
[[toc]]

The spatial data of your project can be displayed and explored in the **Map** tab of the project on the <DashboardShortLink />. As an early access feature, they can also be [shared via URL](#sharing-maps-via-url).

![Mergin Maps dashboard map](./dashboard-webmap.gif "Mergin Maps dashboard map")

:::tip Usage details
Webmaps are available for <MainPlatformNameLink /> cloud and <EnterprisePlatformNameLink /> users.

Webmaps are **not** available for <CommunityPlatformNameLink />.
:::

## Webmaps content

On the webmaps, you will see your survey layers or raster layers that are [packaged](../project/#packaging-qgis-project) with the project. Other layers, such as online [background maps](../../gis/settingup_background_map/#background-maps) or PostgreSQL layers are not displayed. The extent of maps is defined by the [extent set in the QGIS project](../../gis/features/#project-extent).

All maps on the <DashboardShortLink /> use [<MainPlatformName /> vector tile service](../../gis/settingup_background_map/#online-services-1) as a background map.

The content of the maps and of the **Layers** panel is refreshed after every synchronisation of the project. This means you should always see your current spatial data here.

The **Layers** panel lists all layers displayed on the map. The check button :white_check_mark: controls the visibility of layers.

Click on a feature on the map to display its properties.

![Mergin Maps dashboard maps](./dashboard-map-properties.webp "Mergin Maps dashboard maps")

## Sharing maps via URL <Badge text="early access" type="warning"/>
::: warning Early access feature
Map sharing is in early access. If you would like to try it out, fill in [this form](https://wishlist.merginmaps.com/f/share-maps-via-url) to gain access to this feature.
:::

Webmaps can be shared via URL. [Admins or owners](../permissions/) can enable map sharing for a project, so that anyone with the link can display and explore your project in a web browser, without the need to log into  <MainPlatformNameLink />.

1. Navigate to your project on the <DashboardShortLink />.
2. In the **Map** tab, click on the **Share map** button to generate a shareable link, such as [https://app.merginmaps.com/maps/28oXI8-tyUv9dWvMGjnvEyqywBw](https://app.merginmaps.com/maps/28oXI8-tyUv9dWvMGjnvEyqywBw)
3. Send the link to anyone to share your project

To disable the map sharing, click on the **Revoke sharing** button.

![Sharing maps via URL](./map-sharing-url.webp "Sharing maps via URL")

::: tip Blog about shared maps
You can read about this functionality in our blog post <MainDomainNameLink id="blog/a-final-surprise-for-the-year---shared-maps-via-url" desc="A final surprise for the year - shared maps via URL"/>.
:::

## Webmaps extent

The extent of webmaps is defined in QGIS in the **Project Properties**. 

When displaying maps on the <DashboardShortLink />, <MainPlatformName /> uses primarily the [project full extent](../../gis/features/#project-extent) defined in the **View Settings** tab.

![QGIS set project extent](../../gis/features/qgis-project-extent.jpg "QGIS set project extent")

If this parameter is not defined, the map extent will be set as the *Advertised extent* from the **QGIS Server** tab. 

![Maps in dashboard extent set in QGIS project](./qgis-project-properties-qgis-server-extent.jpg "Maps in dashboard extent set in QGIS project")

If there are no extent settings in the QGIS project, <MainPlatformName /> will calculate the extent from layers in the project.

## Troubleshooting

### Map config does not exist
The **Map** tab of a project on the <DashboardShortLink /> may display this error message:
`Map config does not exist, please try update the project`

![Mergin Maps webmap Map config does not exist](./webmap-map-config-issue.webp "Mergin Maps webmap Map config does not exist")

This usually happens when the map was not initiated. All you need to do is to create a new version of the project: synchronisation of the project will activate the map content.

