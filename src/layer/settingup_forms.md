# Setting Up Form Widgets

[[toc]]

::: warning
Our mobile app was redesigned. We are in the process of updating this content to reflect these changes.
:::

Capturing field data often requires filling some attributes in the form to record the properties of surveyed points, lines or polygons. Forms can simplify the data entry and even ensure to some extent that the correct information is filled in.

<YouTube id="jc4p1PpXj3k" />

## Widget gallery

A number of edit widget types for forms can be used in <MobileAppName />, including drop-down options, slider, date and time, checkbox, or photos. 

Forms can be configured using <QGISHelp ver="latest" link="user_manual/working_with_vector/vector_properties.html#edit-widgets" text="QGIS widget types" /> .

|QGIS widget  | Description  |<div style="width:300px">Preview in <MobileAppName /> </div> |Example project   |
|:---:|:---:|:---:|:---:|
|Text Edit  |[Text](#text)   | ![Mergin Maps mobile app text field form](./input_forms_text.jpg "Mergin Maps mobile app text field form") | <MerginMapsProjectShort id="documentation/test_forms" />|
|QR & barcode scanner  |[Camera to scan QR and barcode](#qr-code)   | ![Mergin Maps mobile app QR code field form](./input_forms_qrcode1.jpg "Mergin Maps mobile app QR code field form") | <MerginMapsProjectShort id="documentation/test_qrcode" /> |
|Range   |[Numeric field](#numbers)   | ![Mergin Maps mobile app numeric field form](./input_forms_numbers.jpg "Mergin Maps mobile app numeric field form")  | <MerginMapsProjectShort id="documentation/form_setup" /> |
|Range   |[Slider](#slider)   | ![Mergin Maps mobile app slider field form](./input_forms_slider1.jpg "Mergin Maps mobile app slider field form")  | <MerginMapsProjectShort id="documentation/form_setup" /> |
|Date&Time   |[Calendar with time](#date-and-time)  |![Mergin Maps mobile app date time field form](./input_forms_datetime1.jpg "Mergin Maps mobile app date time field form")   | <MerginMapsProjectShort id="documentation/form_setup" /> |
|Attachment   |[Photos from device's camera or gallery](./settingup_forms_photo.md) | ![Mergin Maps mobile app attachment field form](./input_forms_photo1.jpg "Mergin Maps mobile app attachment field form")  |<MerginMapsProjectShort id="documentation/form_setup" /> |
|Checkbox   |[Checkbox](#checkbox)   |![Mergin Maps mobile app checkbox field form](./input_forms_checkbox2.jpg "Mergin Maps mobile app checkbox field form")   |<MerginMapsProjectShort id="documentation/form_setup" /> |
|Value Map   |[Drop-down menu with predefined values](#value-map) |![Mergin Maps mobile app value map field form](./input_forms_valuemap1.jpg "Mergin Maps mobile app value map field form")   |<MerginMapsProjectShort id="documentation/form_setup" /> |
|Value Relation   |[Drop-down menu with values from another table](#value-relation) |![Mergin Maps mobile app value relation field form](./input_forms_valuerelation.jpg "Mergin Maps mobile app value relation field form")   | <MerginMapsProjectShort id="documentation/test_forms" /> |

:::tip
Extra configuration can be done to the form layout to make the data collection easier and more consistent, such as using default values, conditional visibility or constraint enforcement. See [Advanced Form Configuration](./settingup_forms_settings/) for more details.
:::

## Text

Adding or editing text is the most common method for inserting information within the forms. In QGIS, the default widget for most types of fields is the **Text Edit**. It can be used for single line or [multiline](#multiline-text) text inputs. 

In <MobileAppName /> , the text can be entered manually or using voice-to-text (if your mobile device supports this feature).

![Voice to text in Mergin Maps mobile app form](./input-voice-to-text.jpg "Voice to text in Mergin Maps mobile app form")

### Multiline text

:::tip
Clone <MerginMapsProject id="documentation/test_forms" /> to follow this example!
:::

 you can change the widget to accept multiple lines within a single field.
1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with. 
3. In the **Widget Display** tab:
   - Ensure that **Text Edit** is selected
   - Check the **Multiline** option
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS multiline text field form](./qgis_forms_text.jpg "QGIS multiline text field form")

In <MobileAppName />, the **multiline text edit widget** will look like this:
![Mergin Maps mobile app multiline text field form](./input_forms_text1.jpg "Mergin Maps mobile app multiline text field form")


## QR code

:::tip
Clone <MerginMapsProject id="documentation/test_qrcode" /> to follow this example!
:::

To be able to scan QR codes using your camera, the field name or the field alias has to contain the word **qrcode** (the text is not case sensitive and it can be in combination of lower or upper case letters). 

In <MobileAppName />, there will be a QR code icon next to the field. Click on the QR code icon to read the QR code using your camera - the text (e.g. a link) will be filled in automatically.

![Mergin Maps mobile app QR code field form](./input_forms_qrcode.jpg "Mergin Maps mobile app QR code field form")


## Numbers

:::tip
Clone <MerginMapsProject id="documentation/form_setup" /> to follow this example!
:::

Numeric fields can be handled by the **Range** widget, which allows two options:
- **Editable** to enter a number manually
- **Slider**

### Range
To set up the **editable range widget**:

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the numeric field you want to work with. 
3. In the **Widget Display** tab select **Range** from the drop-down menu.
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS number range field form](./qgis_forms_number.jpg "QGIS number range field form")

In <MobileAppName />, the **editable range widget** will look like the `number` field here:

![Mergin Maps mobile app number range field form](./input_forms_number1.jpg "Mergin Maps mobile app number range field form")

### Slider
When setting up a slider, ensure your field type is integer.

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the numeric field you want to work with.
3. In the **Widget Display** tab:
   - select **Range** from the drop-down menu
   - set the edit widget to **Slider**
   - set the **Minimum**, **Maximum** and **Step** values of the slider
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS number range field form](./qgis_forms_slider.jpg "QGIS number range field form")

In <MobileAppName />, the **slider** will look like the `Number of plants` field. It can be filled in by moving the slider:

![Mergin Maps mobile app number range field form](./input_forms_slider.jpg "Mergin Maps mobile app number range field form")


## Date and time

:::tip
Clone <MerginMapsProject id="documentation/form_setup" /> to follow this example!
:::

If you want to record time and date when you capture the feature, you need to make sure you have a field with **Date** or **Date and Time** type present in your survey layer.

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the date field you want to work with.
3. In the **Widget Display** tab:
   - select **Date/Time** from the drop-down menu
   - select the Date Time **Field Format**
   - in **Widget Display** tab, check the **Calendar popup** option
4. If you want to automatically insert the date (or date and time) when the feature is created, type **now()** as a default value in the **Defaults** tab.
5. **Apply** the changes. Don't forget to save and sync your project!

![QGIS date time field form](./qgis_forms_datetime.jpg "QGIS date time field form")

In <MobileAppName />, the date can be edited using a calendar pop up. If you use **now()** as the default value, the current date and time will be automatically filled in.

![Mergin Maps mobile app calendar form](./input_forms_datetime.jpg "Mergin Maps mobile app calendar form")

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

:::tip
Clone <MerginMapsProject id="documentation/form_setup" /> to follow this example!
:::

Checkbox field becomes handy when you want to set up a Yes/No, True/False or On/Off in your field. Some file formats, such as GeoPackage support **Boolean** data type. If you have a field set as **Boolean**, QGIS automatically assigns the checkbox for widget type.

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with.
3. In the **Widget Display** tab, select **Checkbox** from the drop-down menu.
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS checkbox field form](./qgis_forms_checkbox.jpg "QGIS checkbox field form")

In <MobileAppName />, the status of the checkbox field can be easily toggled on/off.

![Mergin Maps mobile app checkbox field form](./input_forms_checkbox.jpg "Mergin Maps mobile app checkbox field form")


## Select value from a drop-down menu

To present the options as a drop-down menu in the form, you can use the **Value Map** or **Value Relation** widget in QGIS.

### Value Map

:::tip
Clone <MerginMapsProject id="documentation/form_setup" /> to follow this example!
:::

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with.
3. In the **Widget Display** tab:
   - select **Value Map** from the drop-down menu
   - for **Value** and **Description** type what you want to include in the drop-down menu (here we use: In-door, Woodland, Farmland, Grassland, Marine, Peatlands and Other).
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS value map field form](./qgis_forms_valuemap.jpg "QGIS value map field form")

Now you can select the value from a drop-down menu in <MobileAppName />!

<!--add screenshot -->

### Value relation

:::tip
Clone <MerginMapsProject id="documentation/test_forms" /> to follow this example!
:::

The **Value Relation** widget is similar to the [Value Map](#value-map) tool, but the values for the drop-down menu come from another table (e.g. a CSV or another GeoPackage table).

The advantage of having this widget:
  - Editing the values in the field: for example, if you have missed a value in your list for the drop-down menu, you can edit the table in <MobileAppName /> and add the value. See [Working with non-spatial tables](./working_with_nonspatial_data.md) section for more information.
  - Searching the values: when you have a large list of values, it will become cumbersome to find the right value. With this widget, you will be able to search for values in the list.
  - Selecting multiple values.

To set up **Value Relation** in QGIS:

1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the field you want to work with.
3. In the **Widget Display** tab:
   - select **Value Relation** from the drop-down menu
   - select the **Layer** that contains the values
   - **Key column** is the field that contains the values
   - **Value column** is the field that contains the alias (description) of the value
   - if you want to be able to select multiple values, check the **Allow multiple selections** option
4. **Apply** the changes. Don't forget to save and sync your project!

![QGIS value relation field form](./qgis_forms_valuerelation.jpg "QGIS value relation field form")

When you open the field with **Value Relation** in the <MobileAppNameShort />, you will be able to select values from the list.

![Mergin Maps mobile app value relation field form](./input_forms_valuerelation1.jpg "Mergin Maps mobile app value relation field form")
![Mergin Maps mobile app value relation options](./input_forms_valuerelation2.jpg "Mergin Maps mobile app value relation options")
![Mergin Maps mobile app value relation filled](./input_forms_valuerelation3.jpg "Mergin Maps mobile app value relation filled")


## Attachments, cascade form, 1-N relations,...

There is much more you can do to set up your forms efficiently, such as:
- capture [photos](./settingup_forms_photo/) as attachments
- create advanced forms with drill-down menu by setting up a [cascade form](./settingup_forms_settings/#drill-down-forms)
- using 1-N relations to [link multiple records to one feature](./one-to-n-relations/) or to [attach multiple photos to one feature](./attach-multiple-photos-to-features/) 
- design an appropriate [form layout](./form-layout/) with groups and tabs, conditional visibility of fields or instructions for the fieldwork
