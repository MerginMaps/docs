---
category: 'Mobile Input App'
permalink: /howto/settingup_forms_checkbox
title: Checkbox in from
---

Checkbox field becomes handy when you want to set up a Yes/No, True/Falss or On/Off in your field. Some file formats, such as Geopackage support **Boolean** data type. If you have a field set as **Boolean**, QGIS automatically assigns the checkbox for widget type.

## QGIS

To set up a checkbox widget:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**

![photos](../images/qgis_forms_checkbox.png)

  - Select **survey** field under the right column (**Available Widgets**)
  - Under the **Widget Display**:
  - Under **General**, for **Alias** type **Does it need surveying?**
  - Under **Widget Type** section, from the drop-down menu, select **Checkbox**

Ensure to save and synchronise your project.

## Input

To use the date/time widget in the form from Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**
- Open the project
- Select **Record** and add a point
- The form will appear, you can switch the status of the **Does it need surveying?** field to true or false using the checkbox

![photos](../images/input_forms_checkbox.png)
