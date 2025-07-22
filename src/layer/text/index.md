# Text

Adding or editing text is the most common method for inserting information within the forms. Text fields use the **Text Edit** widget by default.

It can be used for single-line or [multiline](#multiline-text) text inputs.

![QGIS Text Edit Widget Type](./qgis-form-text.jpg "QGIS Text Edit Widget Type")

:::tip Example project available
Both single-line and multiline text options are used in this public project: <MerginMapsProject id="documentation/form-widgets" />. Download or clone it to see this setup.
:::

Prefer a video? Here is a short tutorial about of text fields:
<YouTube id="0Y5GKyjmfqo" />

## Multiline text

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

## Recording text options

In the <MobileAppNameShort />, the text can be entered manually or using voice-to-text (if your mobile device supports this feature).

![Using voice to text in Mergin Maps mobile app](./mobile-form-text-voice-input.jpg "Using voice to text in Mergin Maps mobile app")
