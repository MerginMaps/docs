---
category: 'Mobile Input App'
permalink: /howto/settingup_forms_constraints
title: Constraint enforcement in forms
---

When collecting data, you may want to apply constraints to certain field(s) so that the correct information is entered.

## QGIS

To set up the default value for **x** field:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**

![photos](../images/qgis_forms_constraints.png)

  - Select **number** field under the right column (**Available Widgets**)
  - Under the **Constraints**:
    - Select **Not null**
    - Select **Enforce not null constraints**
    - For **Expression** type *"number" >= 1*
    - Select **Enforce expression constraint**

## Input

In Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**
- Open the project
- Select **Record** and add a point
- The form will appear
- Under **Data** tab, you need to set the **Number of plants:** and the value should be more than or equal 1.
