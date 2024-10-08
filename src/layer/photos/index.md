# Capturing Photos
[[toc]]

When surveying, you might want to take a photo from your camera or attach an existing photo from the device gallery to your survey feature.

To capture and save photos using the <MobileAppNameShort />, the survey layer needs to have a field configured with the [attachment widget](../form-widgets/#attachment). 

In the <MobileAppNameShort />, this field will provide two options:
- **Take a picture** to use your camera app for taking a photos 
- **From gallery** to attach an existing photo from your device

![Mergin Maps mobile app photo widget](../form-widgets/mobile-form-attachment-photo.jpg "Mergin Maps mobile app photo widget")

:::tip
Do you need to attach multiple pictures to one feature? [How to attach multiple photos to features](../attach-multiple-photos-to-features/) will guide you through the setup.
:::

::: warning
Keep in mind that synchronising photos during the field survey can use up a lot of mobile data - depending on the amount of pictures taken and their size.

To reduce the data usage, you may consider using [selective synchronisation](../../manage/selective_sync/), [resizing pictures automatically](#resizing-pictures-automatically) or following the [offline field survey workflow](../../field/offline-use/#offline-field-survey-workflow). 
:::

## Photo attachment widget in QGIS

:::tip Example project available
Clone <MerginMapsProject id="documentation/form_setup" /> to follow this example!
:::

In QGIS, the [attachment widget](../form-widgets/#attachment) is used to set up a field to capture photos.

To set up the attachment widget:
1. Right-click on a layer, select **Properties** and go to the **Attributes form** tab.
2. In the list of **Available Widgets** select the text field you want to work with.
3. In the **Widget Display** tab:
   - From the drop-down menu, select **Attachment**
   - **Default path** defines where images will be saved. If it is not defined, the project home folder will be used.
   - Store the path as **Relative to project path** or **Relative to default path** depending on how you want to store the paths.
4. **Apply** the changes. Don't forget to save and sync your project!
![QGIS photo attachment widget form](./qgis_forms_photo.jpg "QGIS photo attachment widget form")

Here is an overview of paths that will be stored in various settings of the attachment widget. `path/to/project` represents the project home folder, where the project file is located. 

|        Default path       	|  Store path as 	|                Value               	|
|:-------------------------:	|:------------:	|:----------------------------------:	|
|             -             	| Relative to project path |              `image.jpg`             	|
|             -             	| Relative to default path |              `image.jpg`             	|
|      `@project_folder`      	| Relative to project path |              `image.jpg`             	|
|      `@project_folder`      	| Relative to default path |              `image.jpg`             	|
| `@project_home + '/photos'` 	| Relative to project path |          `/photos/image.jpg`         	|
| `@project_home + '/photos'` 	| Relative to default path |               `image.jpg`             	|

:::danger Avoid using absolute paths
Using *absolute paths* causes issues when working with your projects on different devices or working in a team: as each device or team member can use different paths, they may be unable to display the attachments.
:::

## How to set up a custom folder for storing photos
It can be useful to set up a custom folder for photos, e.g. if you want to use [selective synchronisation](../../manage/selective_sync/) or if you simply want to have your data organised.

To set up a custom folder:
1. Create a subfolder in the project folder (here: `photos`)
2. Open your project in QGIS
3. Open the **Properties** of the survey layer and navigate to the **Attributes form** tab. 
   Select the field, where photos are stored (here: `photo`) and make sure that the widget type is set to **Attachment**:
   ![QGIS photo attachment widget form](./qgis_form_photo.jpg "QGIS photo attachment widget form")
5. Now we need to change the **Default path** to the folder we have created. Click on the *Data defined override* icon and choose **Edit...**
   ![QGIS edit default path expression](./qgis_form_photo_edit_expr.jpg "QGIS edit default path expression")

6. In **Expression String Builder** enter the expression `@project_folder + '/photos'` (replace `photos` by the name of your folder). Click **OK**.
   ![QGIS enter default path expression](./qgis_forms_photo_expression.jpg "QGIS enter default path expression")

7. The **Default path** now refers to the custom folder.
   ![QGIS default path to custom folder](./qgis_custom_folder.jpg "QGIS default path to custom folder")

8. **Apply the changes**. Don't forget to save and sync your project!

## Resizing pictures automatically
Photos that are captured during the field survey or uploaded using <MobileAppName /> can be automatically resized, e.g. to save up storage space. The quality of the photos can be set up in the [<MainPlatformName /> project properties](../../gis/features/#photo-quality) using <QGISPluginName />.

## Customising photo name format with expressions
Photos taken in the field using <MobileAppName /> can be automatically renamed. This can be useful when browsing pictures in your <MainPlatformNameLink /> project and keeping them organised.

[**How to Set Photo Names Format**](../../gis/photo-names/) will guide you through the setup and provide examples of expressions that can be used to name your photos.

## Displaying photos in QGIS
Photos taken using <MobileAppName /> during the survey can be displayed in the feature's form in QGIS.

1. In QGIS, double click on a survey layer to open **Layer Properties**
2. In the **Attributes Form** tab, select the field that contains the path to the photo.

   Scroll to the **Integrated Document Viewer** in the panel on the right. Set the **Type** to *Image*.
   ![QGIS Integrated Document Viewer](./qgis-doc-viewer.jpg "QGIS Integrated Document Viewer")

3. **Apply** the changes and click **OK**.

Now when you click on a feature that contains a photo, it will be displayed in the form.

![Mergin Maps mobile app photo displayed in form](./qgis-form-view-photo.jpg "Mergin Maps mobile app photo displayed in form")

::: warning Image preview in QGIS 3.36+
QGIS may not display the preview of the image if you use QGIS 3.36 or higher. Despite this behaviour, the <MobileAppNameShort /> displays it correctly. Therefore we recommend trying the setup by opening the form in the <MobileAppNameShort /> to make sure it works as intended.
:::
