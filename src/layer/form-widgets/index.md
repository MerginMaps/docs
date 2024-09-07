# Setting Up Widgets in Attributes Form

[[toc]]

Capturing field data often requires filling some attributes in the form to record the properties of surveyed points, lines or polygons. Attribute forms can simplify the data entry and even ensure to some extent that the correct information is filled in. Here, we will explore the possibilities of various QGIS widgets that can be used in <MobileAppName />. 

Extra configuration of attribute forms can be done to make data collection easier and more consistent, such as using default values, conditional visibility or constraint enforcement. These topics are covered in [Attributes Form Configuration](../form-configuration/) and [Attributes Form Layout](../form-layout/).

<YouTube id="jc4p1PpXj3k" />

## Widget gallery
Attributes forms can be configured using <QGISHelp ver="latest" link="user_manual/working_with_vector/vector_properties.html#edit-widgets" text="QGIS widget types" /> in the **Attributes Form** tab in the **Layer Properties**.

A number of QGIS widget types can be used in <MobileAppName />, such as *Text Edit*, *Range* widget for numbers, *Date/Time* widget with calendar popup, *Value Map* and *Value Relation* to select options from a drop-down menu, or the *Attachment* widget that is used to save photos. The widget has to be compatible with the data type of a field. 

Here is an overview of widgets commonly used both in <QGIS link="" text="QGIS" /> and the <MobileAppNameShort />.

|QGIS widget  | Description  |<div style="width:300px">Preview in <MobileAppName /> </div> |
|:---:|:---:|:---:|
|Text Edit  |[Text](#text)   | ![Mergin Maps mobile app text field form](./mobile-form-text-preview.jpg "Mergin Maps mobile app text field form") |
|QR & barcode scanner  |[Camera to scan QR and barcode](#qr-code)   | ![Mergin Maps mobile app QR code field form](./mobile-form-qrcode-preview.jpg "Mergin Maps mobile app QR code field form") |
|Range - Editable   |[Enter a number](#numbers)   | ![Mergin Maps mobile app numeric field form](./mobile-form-number-editable-preview.jpg "Mergin Maps mobile app numeric field form")  |
|Range - Slider  |[Select a number using the slider](#slider)   | ![Mergin Maps mobile app slider field form](./mobile-form-number-slider-preview.jpg "Mergin Maps mobile app slider field form")  |
|Date/Time   |[Calendar with time](#date-and-time)  |![Mergin Maps mobile app date time field form](./mobile-form-datetime-preview.jpg "Mergin Maps mobile app date time field form")   | 
|Checkbox   |[Checkbox](#checkbox)   |![Mergin Maps mobile app checkbox field form](./mobile-form-checkbox-preview.jpg "Mergin Maps mobile app checkbox field form")   |
|Value Map   |[Drop-down menu with predefined values](#value-map) |![Mergin Maps mobile app value map field form](./mobile-form-valuemap-preview.jpg "Mergin Maps mobile app value map field form")   |
|Value Relation   |[Drop-down menu with values from another table](#value-relation) |![Mergin Maps mobile app value relation field form](./mobile-form-value-relation-preview.jpg "Mergin Maps mobile app value relation field form")   |
|Attachment   |[Photos from device's camera or gallery](#attachment) | ![Mergin Maps mobile app attachment field form](./mobile-form-photo-preview.jpg "Mergin Maps mobile app attachment field form")  |

::: tip Public project available
:bulb: These widgets can be explored in this project: <MerginMapsProject id="documentation/form-widgets" />.
:::


## Text

Adding or editing text is the most common method for inserting information within the forms. In QGIS, the default widget for most types of fields is the **Text Edit**. It can be used for single line or [multiline](#multiline-text) text inputs. 

![QGIS Text Edit Widget Type](./qgis-form-text.jpg "QGIS Text Edit Widget Type")

In the <MobileAppNameShort />, the text can be entered manually or using voice-to-text (if your mobile device supports this feature).

![Using voice to text in Mergin Maps mobile app](./mobile-form-text-voice-input.jpg "Using voice to text in Mergin Maps mobile app")

### Multiline text

:::tip Example project available
Multiline text option is used in this public project: <MerginMapsProject id="documentation/form-widgets" />. Download or clone it to see this setup.
:::

The **Text Edit** widget offers the option to store multiple lines within a single field.
1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with (here: `text-multiline`)
3. In the **Widget Type** tab:
   - Ensure that **Text Edit** is selected
   - Check the **Multiline** option :heavy_check_mark:
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS multiline text field setup](./qgis-form-text-multiline.jpg "QGIS multiline text field setup")

In the <MobileAppNameShort />, the **multiline text edit widget** will look like this:
![Mergin Maps mobile app multiline text field form](./mobile-form-text-multiline.jpg "Mergin Maps mobile app multiline text field form")


## QR code

:::tip Example project available
A QR code field is used in this public project: <MerginMapsProject id="documentation/form-widgets" />. Download or clone it to see this setup.
:::

To be able to scan QR codes using your camera, the field name or the field alias has to contain the word `qrcode` (the text is not case sensitive, it can be in combination of lower or upper case letters). 

In the <MobileAppNameShort />, there will be a QR code icon next to the field. Tap on it to scan the QR code using your camera and the text (e.g. a link) will be filled in automatically to your field.

![Mergin Maps mobile app QR code field form](./mobile-form-qrcode.jpg "Mergin Maps mobile app QR code field form")


## Numbers

:::tip Example project available
This public project: <MerginMapsProject id="documentation/form-widgets" /> uses various options for entering numerical data. Download or clone it to see this setup.
:::

Integer fields can be handled by the **Range** widget. Two options are supported by the <MobileAppNameShort />: [editable range](#range) and [slider](#slider). 

Decimal (real) numbers use the **Text Edit** widget by default and are filled in manually.

### Range
To set up the **editable range widget**:

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the integer field you want to work with (here: `numbers-range-editable`). 
3. In the **Widget Type** tab the **Range** widget and the **Editable** option should be selected by default. If this is not the case, select these options from the drop-down menus.
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS number editable range field form](./qgis-form-number-range-editable.jpg "QGIS number editable range field form")

In the <MobileAppNameShort />, the numbers can be entered manually or by using the +/- buttons:

![Mergin Maps mobile app number range field form](./mobile-form-editable-range.jpg "Mergin Maps mobile app number range field form")

### Slider
To set up the **Slider**:

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the numeric field you want to work with (here: `numbers-range-slider`).
3. In the **Widget Type** tab:
   - the **Range** widget should be selected by default (if not, select it from the menu)
   - set the edit widget to **Slider**
   - set the **Minimum**, **Maximum** and **Step** values of the slider
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS number range field form](./qgis-form-number-range-slider.jpg "QGIS number range field form")

In the <MobileAppNameShort />, the **Slider** looks like this. The number can be filled in by moving the slider:

![Mergin Maps mobile app number range field form](./mobile-form-range-slider.jpg "Mergin Maps mobile app number range field form")

## Date and time

:::tip Example project available
Various options of setting up Date and Date&Time fields are included in this public project: <MerginMapsProject id="documentation/form-widgets" />. Download or clone it to explore it in more detail.
:::

**Date** or **Date and Time** fields can be used to record date and time. The most common use is to record when a feature was created or updated. This can be done manually or automatically by using [default values](../form-configuration/#default-values).

To set up the **Date/Time** widget:

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the Date and Time field you want to work with (here: `datetime`).
3. In the **Widget Type** tab and select the **Date/Time** widget. 
   - use the default or custom  **Display Format** (see [custom options](#custom-field-formats-and-widget-displays) below)
   - check the **Calendar popup** option :heavy_check_mark:
   - use the preview to confirm that this is the format you want to use to store your timestamps
4. If you want to automatically insert the date (or date and time) when the feature is created, use `now()` as a [default value](../form-configuration/#default-values) in the **Defaults** tab.
5. **Apply** the changes. Don't forget to save and sync your project!

![QGIS date time field form](./qgis-form-datetime.jpg "QGIS date time field form")

In the <MobileAppNameShort />, the date can be edited using a calendar pop up. If you tap the icon next to field, the current date and time will be filled in.

![Mergin Maps mobile app calendar form date time fields](./mobile-form-datetime.jpg "Mergin Maps mobile app calendar form date time fields")

### Custom field formats and widget displays
It is also possible to use custom Field Formats and Widget Displays.

:::warning
While working with QString fields with a date/time value and format function (used in a default value), it is important to match field format with a given format there.
:::

Following types are supported:

**Type: QDate**  

| field format 	| widget display 	| default value 	|   value   	|
|:------------:	|:--------------:	|:-------------:	|:----------:	|
|     Date     	|        -       	|       -       	| `0000-00-00` 	|
|     Date     	|        -       	|     `now()`     	| `2020-09-09` 	|
|     Date     	|   `dd/MM/yyyy`   	|     `now()`     	| `09/09/2020` 	|


**Type: QDateTime**  

| field format 	|    widget display   	| default value 	|        value       	|
|:------------:	|:-------------------:	|:-------------:	|:-------------------:	|
|     Time     	|          -          	|       -       	|       `00:00:00`      	|
|     Time     	|          -          	|     `now()`     	|       `12:34:56`      	|
|     Time     	|      `HH/mm/ss`      	|     `now()`     	|       `12/34/56`      	|
|   Date Time  	|          -          	|       -       	| `0000-00-00 00:00:00` 	|
|   Date Time  	|          -          	|     `now()`     	| `2020-09-09 12:34:56` 	|
|   Date Time  	| `dd/MM/yyyy hh-mm-ss`	|     `now()`     	| `09/09/2020 12-34-56` 	|

**Type: QString**  

|         Field Format          	|    Widget Display   	|               Default Value               	|        Value       	|
|:-------------------------------:	|:-------------------:	|:-----------------------------------------:	|:-------------------:	|
|             Date              	|          -          	|      `format_date(now(), 'yyyy-MM-dd')`     	|      `''2020-09-09'`     	|
|      Custom (`dd/MM/yyyy`)    	|      `dd/MM/yyyy`    	|      `format_date(now(), 'dd/MM/yyyy')`     	|      `'09/09/2020'`     	|
|             Time        ``    	|          -          	|       `format_date(now(), 'HH:mm:ss')`      	|       `'12:34:56'`      	|
|       Custom (`HH-mm-ss`)     	|       `HH-mm-ss`     	|       `format_date(now(), 'HH-mm-ss')`      	|       `'12-34-56'`      	|
|           Date Time           	|          -          	| `format_date(now(), 'yyyy-MM-dd HH:mm:ss')` 	| `'2020-09-09 12:34:56'` 	|
| Custom (`dd/MM/yyyy HH-mm-ss`)	| `dd/MM/yyyy HH-mm-ss`	| `format_date(now(), 'dd/MM/yyyy HH-mm-ss')` 	| `'09/09/2020 12-34-56'` 	|

## Checkbox

:::tip Example project available
Checkbox widget is used in this public project <MerginMapsProject id="documentation/form-widgets" />. Download or clone it to see the setup.
:::

Checkbox field becomes handy when you want to set up a Yes/No, True/False or On/Off in your field. 

If you have a field set as **Boolean** in your GeoPackage layer, QGIS assigns the checkbox widget type by default.

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with (here: `checkbox`).
3. In the **Widget Type** tab, the **Checkbox** widget should be set by default (if not, select it from the drop-down menu).
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS checkbox field form](./qgis-form-checkbox.jpg "QGIS checkbox field form")

Checkbox widget can be also used for **Text** (string) fields:
1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with (here: `checkbox-string`).
3. In the **Widget Type** tab, select the **Checkbox** widget and define values for the *Checked* and for the *Unchecked* state. Here we use `Yes` and `No`.
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS checkbox field form](./qgis-form-checkbox-string.jpg "QGIS checkbox field form")

In the <MobileAppNameShort />, the status of the checkbox field can be easily toggled on/off.

![Mergin Maps mobile app checkbox field form](./mobile-form-checkbox.jpg "Mergin Maps mobile app checkbox field form")


## Select value from a drop-down menu

Selecting values from a drop-down menu is faster then typing them in manually and it also ensures that there are no typos or spelling variations. To present the options as a drop-down menu in the form, you can use the [Value Map](#value-map) or [Value Relation](#value-relation) widgets in QGIS.

### Value Map

:::tip Example project available
This public project <MerginMapsProject id="documentation/form-widgets" /> contains a Value Map field. Download or clone it to see the setup.
:::

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with (here: `valuemap`)
3. In the **Widget Type** tab, select the **Value Map** option from the drop-down menu and fill in the table below. 
   **Value** is what will be stored in the field (these can be coded values or shortened names, here we use `1`, `2`, `3`). **Description** is what will be displayed in the form and in the attributes table (here: `value 1`, `value 2`, `value 3`).
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS value map field form](./qgis-form-valuemap.jpg "QGIS value map field form")

Now you can select the value from a drop-down menu in the <MobileAppNameShort />:
![Mergin Maps mobile app value map field form](./mobile-form-valuemap.jpg "Mergin Maps mobile app value map field form")


### Value relation

:::tip Example project available
This public project <MerginMapsProject id="documentation/form-widgets" /> contains a Value Relation setup. Download or clone it to explore it in more detail.
:::

The **Value Relation** widget is similar to the [Value Map](#value-map) tool, but the values for the drop-down menu come from another non-spatial table.

There are some benefits of using the Value Relation widget, such as:
  - Option to select multiple values from the list (in this case, the field needs to be of `text` data type).
  - The table that contains values can be edited in the field. For example, if you have missed a value in your list for the drop-down menu, you can edit the table in the <MobileAppNameShort />, add the value and use it during your survey. See [Working with non-spatial tables](../non-spatial-data/) for more details.
  - Searching the values: if you have a large list of values, it will become cumbersome to find the right value. With Value Relation widget, you will have to option to search for values in the list in the <MobileAppNameShort />.


To set up **Value Relation** in QGIS:

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with (here: `value-relation-multi-select`)
3. In the **Widget Type** tab, select **Value Relation** from the drop-down menu and set it up as follows:
   - Select the **Layer** that contains the values (here: `value-relation-table`)
   - **Key column** is the field that contains the values (here: `fid`)
   - **Value column** is the field that contains the alias (description) of the value (here: `value`)
   - Check the **Allow multiple selections** option :heavy_check_mark: if you want to have the option to select multiple values
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS value relation field form](./qgis-form-value-relation-multiselect.jpg "QGIS value relation field form")

When you open the field with **Value Relation** in the <MobileAppNameShort />, you will be able to select values from the list.

![Mergin Maps mobile app value relation multiple selection](./mobile-form-value-relation.jpg "Mergin Maps mobile app value relation multiple selection")

## Attachment

:::tip Example project available
Basic attachment widget is set up in the public project <MerginMapsProject id="documentation/form-widgets" />.
:::

When there is a field with the **Attachment** widget type in a survey layer, the <MobileAppNameShort /> automatically sees it as a field to **capture photos**. Such field exists in a survey layer in the basic <MainPlatformName /> project (created by using *New basic QGIS project* option when [creating a project in QGIS](../../manage/create-project/)). If you create your survey layers manually, you will need to set it up.

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the text field you want to work with (here: `attachment`)
3. In the **Widget Type** tab, select **Attachment** from the drop-down menu:
   - Default path defines where images will be saved. If it is not defined, the project home folder will be used.
   - Store the path as **Relative to project path** or **Relative to default path** depending on how you want to store the paths.
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS form photo attachment](./qgis-form-attachment-photo.jpg "QGIS form photo attachment")

In the <MobileAppNameShort />, you have the option to take a picture using the camera or upload a picture from the gallery of your mobile device:
![Mergin Maps mobile photo attachment](./mobile-form-attachment-photo.jpg "Mergin Maps mobile photo attachment")

:::tip More about this topic
There are much more settings that can make taking photos and storing them much more efficient. Learn more about this topic in [Capturing Photos](../photos/).
:::


## Capturing photos, cascade forms, 1-N relations,...

There is much more you can do to set up your forms efficiently, such as:
- Capture and display pictures, store them in a custom folder, resize them automatically or customise their name. The overview of <MainPlatformName /> functionality related to photos can be found in [Capturing Photos](../photos/).
- Create advanced forms with drill-down menu by setting up a [cascade form](../form-configuration/#drill-down-forms).
- Use 1-N relations to [link multiple records to one feature](../one-to-n-relations/) or to [attach multiple photos to one feature](../attach-multiple-photos-to-features/).
- Design an appropriate [form layout](../form-layout/) with groups and tabs, conditional visibility of fields or instructions for the fieldwork.
