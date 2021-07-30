---
category: 'Mobile Input App'
permalink: /settingup_forms_slider
title: Slider in forms
---

For setting up a slider, ensure your field type is an integer.

## QGIS

To set up a slider widget:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**

![photos](../images/qgis_forms_slider.png)

  - Select **number** field under the right column (**Available Widgets**)
  - Under the **Widget Display**:
  - Under **General**, for **Alias** type **Number of plants**
  - Under **Widget Type** section:
    - From the drop-down menu, select **Range**
    - Set the edit widget to **Slider**
    - Set the **Minimum** to **0**
    - Set the **Maximum** to **10**
    - Set the **Step** to **1**


Ensure to save and synchronise your project.

## Input

To use the slider widget in the form from Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**
- Open the project
- Select **Record** and add a point
- The form will appear
- Under **Data** tab, you can set the **Number of plants:** by moving the slider:

![slider](../images/input_forms_slider.png)
