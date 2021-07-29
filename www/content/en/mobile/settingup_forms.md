---
category: 'Mobile Input App'
permalink: settingup_forms
title: Setting up forms
---

**Note**: You can follow the examples in this section by cloning the following projects:
  - [lutraconsulting\test_forms](https://public.cloudmergin.com/projects/lutraconsulting/test_forms/tree)
  - [documentation\form_setup](https://public.cloudmergin.com/projects/documentation/form_setup/tree)
  - [documentation\form_cascade](https://public.cloudmergin.com/projects/documentation/form_cascade/tree)

When capturing geo-data, it is often required to fill in a form related to the surveyed point, line or area. The forms set up can simplifying filling the data and can also ensure the correct information is populated.

# Widget types
Input supports a number of edit widget types for forms such as: drop-down options, slider, date and time, checkbox, photos.

Setting up forms can be configured using [QGIS widget types](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/vector_properties.html#edit-widgets).

In the sections below, we go through examples of setting up different widgets for forms in QGIS and Input:

|QGIS edit widget name   | Description  |Preview in Input   |
|---|---|---|
|Text Edit  |[Text](./settingup_forms_text)   | ![layout](/images/input_forms_text.png) |
|QR & barcode scanner  |[Camera to scan QR and barcode](./settingup_forms_qrcode)   | ![layout](/images/input_forms_qrcode1.png) |
|Range   |[Numeric field](./settingup_forms_number)   | ![layout](/images/input_forms_numbers.png)  |
|Range   |[Slider](./settingup_forms_slider)   | ![layout](/images/input_forms_slider1.png)  |
|Date&Time   |[Calendar with time](./settingup_forms_datetime)  |![layout](/images/input_forms_datetime1.png)   |
|Attachment   |[Photos from device's camera or gallery](./settingup_forms_photos) | ![layout](/images/input_forms_photo1.png)  |
|Checkbox   |[Checkbox](./settingup_forms_checkbox)   |![layout](/images/input_forms_checkbox2.png)   |
|Value Map   |[Drop-down menu with pre-defined values](./settingup_forms_valuemap) |![layout](/images/input_forms_valuemap1.png)   |
|Value Relation   |[Drop-down menu with values from another table](./settingup_forms_valuerelation) |![layout](/images/input_forms_valuerelation.png)   |

# Advanced form setup
In addition to the edit widgets, extra configuration can be done to the fields and form layout to make the data collection easier and more consistent. For example: setting a default value, conditional visibility and constraint enforcemnt.

## Form layout
To have multiple tabs with subgroups in your form (with conditional visibility) see [form layout setup](./settingup_forms_layout):

![layout](/images/input_forms_layout1.png)

## Default value

To have pre-populated values within the field (e.g. name of the surveyor, date/time of the survey, latitude and longitude of the feature), see [defaults in forms](./settingup_forms_defaults):

![layout](/images/input_forms_defaults1.png)

## Constraints
To enforce constraints on a field in your forms, visit [constraints setup](./settingup_forms_constraints)

![layout](/images/input_forms_slider1.png)

## Advanced value relation with drill-down forms
To have a more advanced form with drill-down menu option, see [cascade form setup](./settingup_forms_cascade)

## QR code reader
To be able to use your camera in forms to scan QR codes and populate the text in the field, see [QR code reader](./settingup_forms_qrcode)
