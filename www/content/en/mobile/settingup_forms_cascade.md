---
category: 'Mobile Input App'
permalink: /howto/settingup_forms_cascade
title: Advanced forms with cascade or drill-down forms
---

Cascade or drill-down forms are the types of forms that the values listed in one field depend on the value selected in another field.

In this [example](https://public.cloudmergin.com/projects/documentation/form_cascade/tree), we have multiple databases:
  - car-model
  - car-manufacturer
  - car-types
  - wheel-check
  - color

In the steps below, we will capture points representing **car** layer: the choices from the value relation will be filtered based on the previous field user picks. For example, if user selects **Trucks** as **Car type (truck/car)**, the **Car-Manufacturer** field will present user with **DAF Trucks**, **Scania** or **MAN**. Likewise, the next drop-down menu for **Car-Model** will change accordingly based on the **Car-Manufacturer** selection.

## QGIS

To set up a the cascade form:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_cascade/tree) in QGIS
  - From the layer panel, right-click on **car** layer and select **Properties**
  - In the new window, select **Attributes form**

Notes:
  - See **Value Relations** configuration for the following fields:
    - Car-Type
    - Car-Manufacturer
    - Car-Model
    - Colorized
    - Wheel-Check
  - See also **Filter expressions** applied to the following fields:
    - Car-Manufacturer
    - Car-Model
    - Wheel-Check

  In addition to the value relations in the survey layer, we need to set up value relation for the following non-spatial tables and the associated fields:
    - **manufacturer** field from **car-model** table
    - **type** field from **car-manufacturer** table
    - **car-type** field from **wheel-check** table

## Input

To use the cascade form in Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_cascade**
- Open the project
- Select **Record** and add a point
- The form will appear
- Under **Survey** tab, for **Car-type** select **Car**.
- **Manufacturer** field should short list **Mercedes-Benz**, **Skoda** and **Audi**. Select **Audi**
- For **Car-Model** select **A8**

![slider](../images/input_forms_cascade.gif)
