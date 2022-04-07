## How to assign multiple records to a single feature (1-N relations)

It is often the case that you have a set of spatial features and you want to record some parameters every now and then. For example, there is a GIS layer representing the manholes and the surveyors carry out regular inspections of the manholes. Instead of duplicating the manhole layer and recording each inspection, you can create a non-spatial table and store each inspection as a new line.

The image below shows the manholes locations:

![Manhole locations](./input_forms_many-relations_concept1.png)

The manhole point layer has the following attribute table:

![Manhole locations](./input_forms_many-relations_concept2.png)

In a separate table (which is non-spatial), we can record the inspections:

![Manhole locations](./input_forms_many-relations_concept3.png)

In QGIS, we are using the **Manhole ID** from the point layer and the inspection table to create a 1-N relationship between the two tables.

Another example is when you capture [multiple photos for a single feature](../attach-multiple-photos-to-features/).

In the sections below, you can see how this type of relations can be set up in QGIS and utilised in the <MobileAppName />.

:::tip
See these example projects
   - Assigning multiple inspections to a single feature: <MerginMapsProject id="documentation/forms_one-to-many-relations" />
   - Adding multiple photos to a single feature: <MerginMapsProject id="documentation/forms_multiple_photos" />
:::

### Project preparation in QGIS

To configure 1-N relations in QGIS:
1. From the main menu, select **Projects** > **Properties ...**
2. In the new window, select the **Relations** tab
3. Select **Add Relation** to create a new one
4. A new window will appear, where we can define the parent and child layers and the fields to link the two layers:
   - For **Name** type **Inspection**
   - For the **Referenced(parent)** layer, select **manhole_locations**
   - For **Field 1** of the **Referenced(parent)** layer, select **Manhole**
   - For the **Referencing(child)** layer, select **inspections**
   - For **Field 1** of the **Referencing(child)** layer, select **Manhole ID**

![1-N relations in QGIS](./input_forms_many-relations1.png)

This should now allow you to add multiple inspections for each manhole location (**manhole_locations** point layer). The inspections records will be stored in the **inspections** table.

When you open the form for an existing record in the  **manhole_locations** point layer, you should be able to see the existing inspection records and optionally add, delete or edit the records:

![1-N relations in QGIS - form view](./input_forms_many-relations2.png)

The same project when you open add inspection to a manhole in Input will look like the image below:

![Many photos to a single feature](./input_forms_one-to-many.png)

