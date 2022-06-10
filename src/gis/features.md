# QGIS Project Preparation
[[toc]]

Project preparation is done in QGIS. For more information about loading layers, styling the data and creating map themes, visit <QGISHelp ver="3.22" link="user_manual/index.html" text="QGIS documentation page" />. In addition, <MobileAppName /> uses some of the features within the project to help visualise, capture and browse the data. Here is an overview of the project preparations steps.

## Background layers
Various online and offline maps can be used as background layers for navigation during the field survey. You can find more information in [Background Maps](./settingup_background_map/).

## Project extent
In <MobileAppName />, there is an option to [zoom to the project extent](../field/input_ui/#zoom-to-project-browse-features-map-themes-settings).

To set the project extent, navigate to **Project** > **Properties**. Select **View Settings** and check the **Set Project Full Extent** option. Here, either enter the coordinate extent of your project bounding box or use the map canvas extent.

![qgis project extent](./qgis-project-extent.png)

If not set, <MobileAppName /> zooms to all visible layers. This is not particularly convenient when you have a layer with a large/global extent (e.g. Open Street Map).

## Project settings
- Ensure the paths are set to *Relative* in the **General** tab in Project Properties. All paths to the project data in <MobileAppName /> are relative to the project location.
![relative paths](./qgis_prj_relative_paths.png)
- Define the <QGISHelp ver="3.22" link="user_manual/introduction/qgis_configuration.html?highlight=properties#data-sources-properties" text="layers capabilities" /> in the **Data Sources** in Project Properties.
   - [Identifiable](./search_data/#setting-identifiable-layers-in-qgis-project) layers can be queried in <MobileAppName />. If you want to be able to search for attribute values in a layer, it needs to be identifiable and searchable.
   - **read-only** layers cannot be modified. If a vector layer is not intended to be used as a survey layer, set it as read-only.
   - [non-spatial](../layer/working_with_nonspatial_data/) layers need to be set as searchable to enable browsing, searching, or editing.

![Layer Capabilities](./qgis_project_properties.png)

### Map themes
[Map Themes](./setup_themes/) make possible to switch between different background maps in <MobileAppName /> (e.g. cartography maps and aerial imagery)

### Photo quality
<Badge text="since plugin 2022.3.2" type="warning"/> <Badge text="since Input 1.5.1" type="tip"/>
The quality of photographs and pictures that are saved in the Mergin Maps project can be set up in the **Mergin Maps** tab in **Project properties**. When pictures are added to the project (uploaded or taken with the camera), they will be resized accordingly.
By default, the quality is set to *Original* - the original pictures are stored. If you want to resize the pictures, you can choose from *High*, *Medium*, or *Low* quality. The [EXIF metadata](../layer/exif_metadata/) of the original file are kept.

![resize pics](./project_resize_pics.png)

## Survey layers
Vector layers can be used as survey layers in <MobileAppName />. You can apply styles and set up the forms to make your field survey easier.

### Layer symbology
The same symbology as defined in the QGIS project will be used in <MobileAppName />. However, <MobileAppName /> does not include all the SVG markers that are available within QGIS. Therefore, if you are using SVG markers for your layer styling, ensure those are copied to the project folder.

### Forms
During the field survey, it is often necessary to fill out some attributes in the form to record the properties of surveyed features. Forms can make the survey easier, consistent and more effective. Detailed description of form widgets and form configuration can be found in [Setting Up Form Widgets](../layer/settingup_forms/) and [Advanced Form Configuration](../layer/settingup_forms_settings/)

### Settings for Mergin Maps Input preview panel
What appears in the <MobileAppName /> preview panel can be defined in the **Display** tab in **Layer Properties**:
- **Display Name**: a field name or an expression.
- **HTML Map Tip**: the content of the preview panel. While QGIS always interprets the content of map tip as being HTML, <MobileAppName /> extends the syntax to allow two more modes: field values and images. If the map tip is not specified, <MobileAppName /> will try to use the first three fields and show their attribute values.

![Display setting in QGIS](./qgis_properties_display.png)

#### HTML
Sample map tip content that will show render as HTML page:

```
<p><strong>Notes:</strong>[% "notes" %]</p>
```

If the map tip does not contain any special marker, it is assumed that the map tip is HTML content. Only a limited subset of HTML is supported - see [Qt documentation](https://doc.qt.io/qt-5/richtext-html-subset.html)

#### Field values
Sample map tip content that will show "description" and "time" field values:

```
# fields
description
time
```

If the map tip content has `# fields` marker on the first line, the following lines will be understood as field names that should be listed in the preview. At most three fields will be shown. Expressions are not allowed.

#### Image
Sample map tip content that will cause an image to be show specified by file path in field "image_1" (containing path relative to the project folder):

```
# image
file:///[%@project_folder%]/[% "image_1" %]
```

If the map tip has `# image` marker on the first line, the following line is understood as the URL for the image. It can be a regular file on the file system, but it could be even a remote image from network. Expressions embedded in the image URL will be evaluated (enclosed in `[% 1+1 %]`).

![Preview panel in Input based on Display settings in QGIS](./input_preview_panel.png)

