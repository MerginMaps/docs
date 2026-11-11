---
description: With Mergin Maps mobile app, you can capture and edit points, lines, polygons and non-spatial features in the field using comprehensive editing tools.
outline: deep
---

# Editing Features

[[toc]]

The <MobileAppNameShort />  can be used to add, edit and delete features in the field by users with [writer or editor permission](../../manage/permissions/) to the <MainPlatformName /> project. 

Until the project is synchronised to <MainPlatformNameLink />, all changes are local (stored only on your mobile device). Changes can be [synchronised](../autosync/) manually or automatically.

## Editing features
Tap a feature on the map or *tap and hold* to select one from multiple overlaying features to display the form.

Use the **Edit** button to open the attributes form for editing. To edit the geometry of a feature, tap the **Edit geometry** button.

Once you are finished with your changes, use the **Save** :heavy_check_mark: button.

![Edit attributes and geometry in Mergin Maps mobile app](./mobile-edit-features.jpg "Edit attributes and geometry")

Features can also be browsed, edited and deleted through the [Layers](../layers/) panel. Layers that are set as [read-only](../../gis/enable_digitising/) in the project properties cannot be edited.
- Tap the **Layers** button in the bottom navigation panel and select a layer to see the list of features it contains. 
- Select a feature from the list in the **Layers** panel to display its form and edit the values or geometry. 

![Layers in Mergin Maps mobile app](./mobile-layers-browse-features.jpg "Layers in Mergin Maps mobile app")

### Editing geometry
There are multiple options of editing the geometry of features depending on the geometry type of the survey layer: editing the vertices, [redrawing](#redraw-geometry) or [splitting](#split-geometry-of-lines-or-areas) features.

To edit geometry of a point feature simply adjust the location in the same manner as when [adding new features](#capture-points).

Layers with MultiPoint, Line, MultiLine, Polygon and MultiPolygon geometries offer more options. Tap a feature, press the **Edit** button and then use **Edit geometry**. The vertices of the feature will be highlighted. You can move, **Release** or **Remove** them as needed. Tap the **Record** button to save the modified geometry.

![Editing line geometry in Mergin Maps mobile app](./mobile-edit-lines.jpg "Editing line geometry in Mergin Maps mobile app")

### Adding part of multipart geometry
Parts can be added to features from survey layers with multipart geometry type (MultiPoint, MultiLine, MultiPolygon) while editing geometry.

Tap the **More option** button while editing geometry and use the **Add part** option.

![Adding geometry part in Mergin Maps mobile app](./mobile-add-part.webp "Adding geometry part in Mergin Maps mobile app")

Capture the part by using the editing tools and **Record** your changes. The part is added to the geometry of the feature.

![Adding geometry part in Mergin Maps mobile app](./mobile-added-part.webp "Adding geometry part in Mergin Maps mobile app")

### Using streaming mode to edit geometry
The [streaming mode](#streaming-mode) can be also used while editing features with compatible geometry type. Tap the **More option** button and use the **Streaming mode**. 

![Editing line geometry streaming](./mobile-edit-streaming.jpg "Editing line geometry streaming")

### Redraw geometry
The existing geometry of MultiPoint, Line, MultiLine, Polygon and MultiPolygon geometry can also be redrawn.

Tap the **More option** button and select the **Redraw geometry** option. 

Capture the new geometry of the feature using the editing tools or streaming and use the **Record** button to save your changes.

![Redrawing geometry of a line feature](./mobile-redraw-features.jpg "Redrawing geometry of a line feature")

### Split geometry of lines or areas
Lines and areas can be split into two or more new features that will keep the same attributes as the original feature.

Tap the **More option** button and select the **Split geometry** option. Create the splitting line by using the **Add point** button. 

When finished, tap **Done**.
![Edit button in Mergin Maps mobile app](./mobile-split-features.jpg "Edit button in Mergin Maps mobile app")

In this case, two individual features are created. Both have the same attributes, except for `Feature ID` (one feature keeps the original id, the other gets a new one).
![Geometry split successfully into two features](./mobile-split-features-complete.jpg "Geometry split successfully into two features")

## Multi-features editing

Attributes of multiple features from the same layer can be edited at once.
![Multi-feature editing in Mergin Maps mobile app](./mobile-multi-feature-editing.gif "Multi-feature editing in Mergin Maps mobile app")

1. Tap on a feature on the map and select the **Select more** option.

   Depending on your mobile device, you may need to use a button next to **Edit** to display this option.
   ![Select more features button in Mergin Maps mobile app](./mobile-select-more.webp "Select more features button in Mergin Maps mobile app" )

2. Select all features that should be edited. 

3. In the attributes form, enter the new values of attributes and **Save**.

   All selected features have been modified at once.

## Edit non-spatial features
Non-spatial features, such as tables for [value relations](../../layer/value-select/#value-relation), can also be added or edited in the <MobileAppNameShort />.

1. Tap the **Layers** button and select the layer you want to edit
   ![Mergin Maps mobile app Layers panel](./mobile-non-spatial-layers.jpg "Mergin Maps mobile app Layers panel")

2. Tap an existing feature to change it or tap the **Add feature** button to create a new feature
   ![Editing non-spatial features in Mergin Maps mobile app](./mobile-edit-non-spatial-layers.jpg "Editing non-spatial features in Mergin Maps mobile app")
   
3. Fill in the attributes and **Save** :heavy_check_mark: the changes

