---
category: 'Mobile Input App'
permalink: settingup_forms_datetime
title: Calendar for date and time
---

If you want to record time and date when you capture the feature, you need to make sure you have a field with **Date** or **Date and Time** type present in your survey layer. Note that all GIS data formats support these types of field. It is assumed, you use Geopackage layer, hence this field type is supported.

## QGIS

To set up a data and time widget:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**

![photos](../images/qgis_forms_datetime.png)

  - Select **DateTime** field under the right column (**Available Widgets**)
  - Under the **Widget Display**, from **Widget Type** section:
    - From the drop-down menu, select **Date/Time**
    - Under **Widget Display**, select **Calendar popup**
  - Under **Defaults**, type **now()**

By setting the default value to **now()**, it will assign the date and time when the feature is captured.

Ensure to save and synchronise your project.

## Input

To use the date/time widget in the form from Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**
- Open the project
- Select **Record** and add a point
- The form will appear, when selecting the field for date and time a calendar will pop up with the current time automatically set:

![photos](../images/input_forms_datetime.png)
