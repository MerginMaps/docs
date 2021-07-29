---
category: 'Mobile Input App'
permalink: settingup_forms_layout
title: Form layout
---

If your form contains more than a handful number of fields, it becomes to difficult to navigate and enter or view the data. In this section, we can change the layout in QGIS.

## QGIS

To set form layout, we are going to use **Drag-n-Drop** designer:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**


![photos](../images/qgis_forms_layout.png)

  - From the top of the drop-down menu, select **Drag-n-Drop Designer**

We can add multiple groups and move **Fields** from the left column to the newly generated groups.

In this example, we have created the following two groups and a subgroup:
  - Information
    - Location
  - Data

  The form will appear as below in QGIS now:

  ![photos](../images/qgis_forms_layout_attribute.png)

We can set the visibility of **Location** tab depending on the value of **survey** field:
  - If **survey** is set to **False**, **Location** tab will not be present
  - If **survey** is set to **True**, **Location** tab will appear

To set the visibility of **Location** depending on the value of **survey**:

  - Select **Location** from the **Form Layout** column
  - Select the option for **Control Visibility by Expression**
  - Type the following expression in the box below:
    `"survey" IS TRUE`

![photos](../images/qgis_forms_layout_visibility.png)

## Input

To view the new layout in Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**

- Open the project
- Select **Record** and add a point
- The form will appear and you can see 3 tabs in your forms

![layout](../images/input_forms_layout1.png)
![layout](../images/input_forms_layout2.png)
