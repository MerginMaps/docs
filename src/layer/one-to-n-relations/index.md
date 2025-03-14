# How to Link Multiple Records to One Feature (1-N Relations)
[[toc]]

## Working with Non-spatial Tables

Non-spatial tables are often a key part of a survey project. The tables can be used either on their own to add new data or linked to a spatial layer, e.g. when linking multiple [photos](../attach-multiple-photos-to-features/) or [records](../one-to-n-relations/). They can be also used in [value relation](../form-widgets/#value-relation) widgets.

We recommend using **GeoPackage** format to save your non-spatial table. With this format, you can collaboratively edit the data and track changes.

## Enable editing and browsing of non-spatial layers
Ensure you have [enabled editing and browsing](../../gis/search_data/) of your non-spatial table in **Project Properties** in QGIS.

![QGIS project properties editing and browsing setup](./qgis_nonspatial_properties.jpg "QGIS project properties editing and browsing setup")

## Non-spatial layers in Mergin Maps mobile app
Non-spatial tables can be browsed, searched and edited in the <MobileAppNameShort />.

Tap the [**Layers**](../../field/layers/) button to open the list of layers, including non-spatial tables, in the project.

![Layers in Mergin Maps mobile app](./mobile-app-non-spatial-layers.jpg "Layers in Mergin Maps mobile app")

Tap on a layer to open its attributes table where you can browse the data and [search for values](../../field/layers/#browsing-features). It is also possible to [add and edit](../../field/mobile-features/#add-or-edit-non-spatial-features) entries in the table.

## 1-N relations
:::tip Example project available
You can clone these projects to take a closer look on 1-N relations:
   - Assigning multiple inspections to a single feature: <MerginMapsProject id="documentation/forms_one-to-many-relations" />
   - Adding multiple photos to a single feature: <MerginMapsProject id="documentation/forms_multiple_photos" />
:::

It is often the case that you have a set of spatial features and you want to record their status every now and then. For example, there is a GIS layer representing the manholes and the surveyors carry out regular inspections of the manholes using <MainPlatformNameLink />. Instead of duplicating the manhole layer and recording each inspection as a new feature, inspections can be recorded in a non-spatial table that is linked to the spatial layer. This way, multiple records can be linked to one feature.

The image below shows the manhole locations and a form with listed inspections in <MobileAppName />.

![Multiple inspections linked to one point in Mergin Maps mobile app](./mobile-1-n-relation.jpg "Multiple inspections linked to one point in Mergin Maps mobile app")

The manhole point layer has the following attribute table: 

| fid | Manhole | Manhole UUID |
|:---:|:---:|:---:|
| 1 | 1 | `{70c59616-492e-4757-aa9a-ee61b207ce94}` |
| 2 | 2 | `{be01b98f-3585-49d4-be74-4cf3530a2989}` |
| 3 | 3 | `{03178264-0070-45c8-a981-b2474627d7e0}` |

This layer contains only information about the manholes. `Manhole UUID` values are generated using [`uuid()` function as a default value](../attach-multiple-photos-to-features/) when a feature is created. This ensures that these values are **unique** even when multiple surveyors capture new features at the same time. This field will be used to link inspections and manholes.

:::danger Using UUID
**Why UUID?** FID can be changed during [synchronisation](../../manage/synchronisation/#synchronisation). As a result, records can end up being linked to wrong features. 

On the other hand, <QGISHelp ver="latest" link="user_manual/expressions/functions_list.html#uuid" text="UUID" /> (Universally Unique Identifier) is generated to be unique and will not be changed when synced. Therefore, we recommend always using UUID to link layers.
:::

Inspections are recorded in a separate [non-spatial table](../non-spatial-data) with attribute table such as:

| Inspection Date | Blocked? | Flooded? | Inspector  | Manhole UUID |
|:---:|:---:|:---:|:---:|:---:|
| 10/05/2022 |  | | <NoSpellcheck id="Joe Schmoe" /> | `{70c59616-492e-4757-aa9a-ee61b207ce94}` |
| 10/05/2022 |  | :heavy_check_mark: | <NoSpellcheck id="John Doe" /> | `{03178264-0070-45c8-a981-b2474627d7e0}` |
| 12/05/2022 | :heavy_check_mark:  |   | <NoSpellcheck id="Fred Bloggs" /> | `{70c59616-492e-4757-aa9a-ee61b207ce94}` |
| 14/05/2022 | :heavy_check_mark: | :heavy_check_mark:  | <NoSpellcheck id="Joe Schmoe" /> | `{be01b98f-3585-49d4-be74-4cf3530a2989}` |

In this table, all information about the inspections are recorded. `Manhole UUID` is filled in automatically based on a 1-N relation that we will set up in QGIS.

The same principle can be used when you want to capture [multiple photos for a single feature](../attach-multiple-photos-to-features/).


## How to set up 1-N relations in QGIS project
You can follow this example by cloning <MerginMapsProject id="documentation/forms_one-to-many-relations" />.

:::tip
Make sure that your survey layer has a **unique UUID** field to create the link correctly. You will find detailed steps how to set it up in [How to Attach Multiple Photos to Features](../attach-multiple-photos-to-features/)
:::

To configure 1-N relations in QGIS:
1. From the main menu, select **Projects** > **Properties ...**
2. In the **Relations** tab, select  **Add Relation**
   ![Layer properties in QGIS with highlighted Relations tab and Add Relation button](../attach-multiple-photos-to-features/qgis_relation_tab.jpg "Layer properties in QGIS with highlighted Relations tab and Add Relation button")
3. A new window will appear, where we can define the parent and child layers and the fields to link the two layers:
   - **Name** is the name of the relation, e.g. `Inspection`
   - **Referenced (parent)** is the spatial layer `manhole_locations`
   - **Field 1** of the **Referenced (parent)** is the field `Manhole UUID` that contains the **unique** UUID 
   - **Referencing (child)** is the non-spatial layer `inspections`
   - **Field 1** of the **Referencing (child)** layer is the `Manhole UUID`, which acts as a foreign key to link inspections to spatial features

   ![Add Relation form in QGIS with defined 1-N relation between the parent and the child layer](./qgis-add-relation.jpg "Add Relation form in QGIS with defined 1-N relation between the parent and the child layer")

4. Right-click on the survey layer, select **Properties** and go to the **Attributes** form tab.
5. Drag and drop the **Inspections** relation to the **Form Layout**.
   ![Relation added to the Drag and Drop Form Layout in QGIS](./qgis-forms-relations-setup.jpg "Relation added to the Drag and Drop Form Layout in QGIS")

Now you can add multiple inspections for each manhole location. The inspections records will be stored in the `inspections` table.

When you open the form for an existing record in the `manhole_locations` point layer, it will display existing inspection records and you can also add, delete or edit the records:
![Form view of a feature with 1-N relation in QGIS](./qgis-1-N-form.jpg "Form view of a feature with 1-N relation in QGIS")

In the <MobileAppNameShort />, the form will display all linked inspection records. Tapping the **+** button opens the inspection form and a new inspection record can be added.

![Form view of a feature with 1-N relation in Mergin Maps mobile app](./mobile-form-1-n-relation.jpg "Form view of a feature with 1-N relation in Mergin Maps mobile app")




