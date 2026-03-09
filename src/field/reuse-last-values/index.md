---
description: In Mergin Maps mobile app, values from the last feature can be reused when a new feature is created, making digitising of similar features more efficient.  
---

# How to Reuse Last Entered Values

Reusing last entered values of selected attributes can make digitising of similar features in the <MobileAppNameShort /> faster. When attributes are marked for reuse, the values from the last feature are already entered when a new feature is created.

## Reuse last value option

To allow this functionality, follow these steps:

1. Open your <MainPlatformNameLink /> project in the <MobileAppNameShort />

2. Click on three dots to open a menu and navigate to **Settings**

   ![Mergin Maps mobile Settings](./mobile-app-settings.jpg "Mergin Maps mobile Settings")

3. Toggle on the `Reuse last entered value` option

![Settings Reuse last entered value option](./mobile-app-settings-reuse-values.jpg "Settings Reuse last entered value option")

4. Go back to the map. When capturing a new feature, there will be check boxes next to attributes in the form. 

   Select the attributes which values you want to reuse (here, we checked the `Habitat type`) and **Save** the feature.

   When recording another feature in this survey layer, the checked attributes in the form will contain the value that was entered in the last created feature.

![Value of selected attribute is reused in a new feature](./mobile-app-reuse-last-entered-values.jpg "Value of selected attribute is reused in a new feature")


You can use the `Reuse last value option` across multiple layers. The <MobileAppNameShort /> will remember attributes for each layer separately.

This feature was inspired by QGIS functionality called *Reuse last entered attribute values*.
