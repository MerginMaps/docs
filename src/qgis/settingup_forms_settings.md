---
category: 'QGIS Project'
position: 501
permalink: setting_up_forms_advanced
title: Advanced form configuration
menuTitle: Form Layout & Settings
---

**Note**: You can follow the examples in this section by cloning the following projects:
  - [lutraconsulting\test_forms](https://public.cloudmergin.com/projects/lutraconsulting/test_forms/tree)
  - [documentation\form_setup](https://public.cloudmergin.com/projects/documentation/form_setup/tree)
  - [documentation\form_cascade](https://public.cloudmergin.com/projects/documentation/form_cascade/tree)

In addition to the edit widgets, extra configuration can be done to the fields and form layout to make the data collection easier and more consistent. For example: setting a default value, conditional visibility and constraint enforcement.

## Form layout
If your form contains more than a handful number of fields, it becomes difficult to navigate and enter or view the data. In this section, we can change the layout in QGIS.

![layout](images/input_forms_layout1.png)

### QGIS

To set form layout, we are going to use **Drag-n-Drop** designer:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**


![photos](images/qgis_forms_layout.png)

  - From the top of the drop-down menu, select **Drag-n-Drop Designer**

We can add multiple groups and move **Fields** from the left column to the newly generated groups.

In this example, we have created the following two groups and a subgroup:
  - Information
    - Location
  - Data

  The form will appear as below in QGIS now:

  ![photos](images/qgis_forms_layout_attribute.png)

We can set the visibility of **Location** tab depending on the value of **survey** field:
  - If **survey** is set to **False**, **Location** tab will not be present
  - If **survey** is set to **True**, **Location** tab will appear

To set the visibility of **Location** depending on the value of **survey**:

  - Select **Location** from the **Form Layout** column
  - Select the option for **Control Visibility by Expression**
  - Type the following expression in the box below:
    `"survey" IS TRUE`

![photos](images/qgis_forms_layout_visibility.png)

### Input

To view the new layout in Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**

- Open the project
- Select **Record** and add a point
- The form will appear and you can see 3 tabs in your forms

![layout](images/input_forms_layout1.png)
![layout](images/input_forms_layout2.png)

## Default value

To have pre-populated values within the field (e.g. name of the surveyor, date/time of the survey, latitude and longitude of the feature):

![layout](images/input_forms_defaults1.png)

The default value can be a text, number or a QGIS expression. In the example below, we are going to set the default values for **x** and **y** field to be longitude and latitude.

### QGIS

To set up the default value for **x** field:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**

![photos](images/qgis_forms_defaults.png)

  - Select **x** field under the right column (**Available Widgets**)
  - Under the **Widget Display**:
  - Set the **Alias** to **Longitude**
  - Under **Defaults**:
    - For **Default value** type: *x( transform( $geometry, 'EPSG:3857', 'EPSG:4326'))*
  - Select the option to **Apply default value on update**

Note that the expression transforms the point from EPSG:3857 (map and layer coordinate reference system) to EPSG:4326.

Repeat the same for **y** field and set the default value to *y( transform( $geometry, 'EPSG:3857', 'EPSG:4326'))*

Ensure to save and synchronise your project.

### Input

To see the default values in Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**
- Open the project
- Select **Record** and add a point
- The form will appear
- Under **Location** tab, you can see the default pre-populated values :

![slider](images/input_forms_defaults.png)

## Constraints
When collecting data, you may want to apply constraints to certain field(s) so that the correct information is entered.

### QGIS

To set up the default value for **x** field:

  - Download and open [this example project](https://public.cloudmergin.com/projects/documentation/form_setup/tree) in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**

![photos](images/qgis_forms_constraints.png)

  - Select **number** field under the right column (**Available Widgets**)
  - Under the **Constraints**:
    - Select **Not null**
    - Select **Enforce not null constraints**
    - For **Expression** type *"number" >= 1*
    - Select **Enforce expression constraint**
    
### Input

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**
- Open the project
- Select **Record** and add a point
- The form will appear
- Under **Data** tab, you need to set the **Number of plants:** and the value should be more than or equal 1.


![layout](images/input_forms_slider1.png)

## Advanced value relation with drill-down forms

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

![slider](images/input_forms_cascade.gif)
