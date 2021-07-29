---
category: 'Mobile Input App'
permalink: /howto/settingup_forms_number
title: Numeric fields in forms
---

To set a field in your form to a numeric one:

## QGIS

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **Points** layer and select **Properties**
  - In the new window, select **Attributes form**

![photos](../images/qgis_forms_number.png)

  - Select **Number** field under the right column (**Available Widgets**)
  - Under the **Widget Display**:
  - Under **Widget Type** section:
    - Select **Range** for widget type

Ensure to save and synchronise your project.

## Input

To use the numeric widget in your form from Input:

- Open Input on your device and from **Projects** > **Explore** download **lutraconsulting\test_forms**
- Open the project
- Select **Record** and add a point
- The form will appear
- Under **Group1** tab, you can type within the box under **Number** field:

![slider](../images/input_forms_number1.png)


Further details about number fields and their configuration with the range widget can be found [here](/howto/settingup_forms_range_widget)).
