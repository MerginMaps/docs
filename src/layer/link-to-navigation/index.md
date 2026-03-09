---
description: Hyperlinks can be used in the attributes form in Mergin Maps mobile app to open a link to a navigation app directly from the feature's form.
---

# How to Open a Link to a Navigation App
[[toc]]

Attributes forms can include clickable links that can be used to open a navigation app directly from the form in <MobileAppName />.  

:::tip
Clone <MerginMapsProject id="documentation/forms-navigation-link" /> to follow this example!
:::

Let's say you want to find your surveyed features on Google Maps. It is possible to do so directly from <MobileAppName />, you just need to set up a **text field** that will open Google Maps and enter the coordinates of the feature to the Google Maps search bar.

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with. 
3. In the **Widget Display** tab:
   - Ensure that **Text Edit** is selected
   - Check the **Multiline** and **HTML** options
4. In the **Defaults** tab, use this string as **Default value**:
   `'<a href="'||'https://www.google.co.uk/maps/place/' || to_string( y(transform( $geometry, 'EPSG:3857', 'EPSG:4326'))) || ',' || to_string( x( transform( $geometry, 'EPSG:3857', 'EPSG:4326'))) || '">Open Google Map</a>'`
5. Check the **Apply default value on update** option
6. **Apply** the changes. Don't forget to save and sync your project!

![Link to Google maps in QGIS Attributes form](./qgis-google-maps.jpg "Link to Google Maps in QGIS Attributes form")

When you tap a feature in the <MobileAppNameShort />, the form will display a clickable link **Open Google Map** that opens the Google Map app at the position of the feature.

![Open Google map from Mergin Maps mobile app](./mobile-form-link-to-navigation-app.jpg "Open Google map from Mergin Maps mobile app")

