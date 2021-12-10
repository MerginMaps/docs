# Reuse last entered values

Input supports faster digitising of similar features by allowing user to reuse values of repeating attributes. When attribute is marked for reuse, a next created feature has it already entered with value from last feature.

## Setup 

To allow this functionality, follow these steps:

 - Open any project from your home screen by clicking on its name
 - Click on three dots to open a menu and navigate to `Settings`
![photos](./input_more_icon.png)
 - Check option to `Reuse last value option`
![photos](./reuse_last_value_option.png)

## Use in Input App

 - Go back to map and click `Record`
 - Now try to create a new feature

::: tip
 You can learn how to create a feature in guide [Working with Input](./input-tour/index.md).
:::

 - In opened form you will see checkboxes next to attributes. In our example we have three editable attributes (besides `fid`). We set Input to remember values for attributes `Name` and `Value` by checking checkboxes next to each of the attributes.

![photos](./reuse_last_values_digitize_before.png)

 - Now hit `Save` and create a new feature
 - In a newly opened form checked attributes will have values filled with values from last created feature on this layer.

![photos](./reuse_last_values_digitize_after.png)

You can use this feature across multiple layers, Input will remember attributes for each layer separately.

This feature was inspired by QGIS functionality called _Reuse last entered attribute values_.
