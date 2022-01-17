# Reuse last entered values

<MobileAppName /> supports faster digitising of similar features by allowing users to reuse last entered values of selected attributes. When attributes are marked for reuse, the values from the last feature are already entered when a new feature is created.

::: tip
 You can learn how to work with <MobileAppName />  by following our [Get started tutorials](../tutorials/capturing-first-data/).
:::

## Setup 

To allow this functionality, follow these steps:

 - Open your project from the home screen
 - Click on three dots to open a menu and navigate to `Settings`
![photos](./input_more_icon.png)
 - Toggle on `Reuse last value option`
![photos](./reuse_last_value_option.png)

## Use in Input App

 - Go back to map
 - Click `Record` and create a new feature
 - In the form you will see checkboxes next to attributes. Here, we have three editable attributes (besides `fid`). We set Input to remember values for attributes `Name` and `Value` by checking the checkboxes next to these attributes.

![photos](./reuse_last_values_digitize_before.png)

 - `Save` the feature
 - When creating another feature, the checked attributes in the form will contain last entered values from the previous feature.

![photos](./reuse_last_values_digitize_after.png)

You can use the `Reuse last value option` across multiple layers. Input will remember attributes for each layer separately.

This feature was inspired by QGIS functionality called _Reuse last entered attribute values_.
