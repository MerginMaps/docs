# How to Link Multiple Records to One Feature
[[toc]]

You can follow this example by cloning <MerginMapsProject id="documentation/forms_one-to-many-relations" />.

:::tip
Make sure that your survey layer has a **unique UUID** field to correctly link records to the feature. You will find detailed steps how to set it up in [How to Attach Multiple Photos to Features](../attach-multiple-photos-to-features/)
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

