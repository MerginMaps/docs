---
category: 'Mobile Input App'
permalink: /howto/settingup_forms_text
title: Text fields in forms
---

Adding or editing text fields are the most common method for inserting information within the forms.

## QGIS

In QGIS, the default widget for most types of fields is the **Text Edit** widget. In addition to a single line text, you can change the widget to accept multiple lines within a single field:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **Points** layer and select **Properties**
  - In the new window, select **Attributes form**

![text](../images/qgis_forms_text.png)

  - Select **text** field under the right column (**Available Widgets**)
  - Under the **Widget Display**:
  - Under **Widget Type** section:
    - Ensure **Text Edit** is selected
    - Select **Multiline**

Ensure to save and synchronise your project.

## Input

To use the multiline text edit widget in the form from Input:

- Open Input on your device and from **Projects** > **Explore** download **lutraconsulting\test_forms**
- Open the project
- Select **Record** and add a point
- The form will appear
- Under **Group1** tab, you can type within the box under **text** field:

![slider](../images/input_forms_text1.png)
