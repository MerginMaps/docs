# Best Practice Tips for Layers and Forms
[[toc]]

Here are some best practice tips to make your work easier in the long run.

## Working with layers
- Making changes in the data schema of layers can lead to issues in the synchronisation process. Be careful to [**deploy the revised project properly**](../../manage/deploy-new-project/). Design the data schema carefully when creating a layer to avoid the need to change it later.
- **Always use GeoPackage for survey layers**. If you use other formats, such as ESRI shapefile, it is not possible to detect changes from other users and they may be overwritten. Overwritten files are stored in a conflict file.
- **Add some extra back-up field attributes** when creating a survey layer with different types (e.g. a couple of texts, int, real, date/time) and hide them in the form design. These can serve as a backup: if you need extra fields later in the survey, just alias these extra fields and add them to form. 
- If you do not need a field, **remove it from the form**. You don't need to delete it from the table.
- **Instead of renaming a field, change its alias**.
- **Add new layers to your project as separate GeoPackages**. Do not add a new table to your existing GeoPackage that contains a survey layer. Just to be safe, it is better to have one GeoPackage for each of your survey layers.
- use **GeoTIFF** format for your raster files or store them in a separate GeoPackage database


<!--
## Working with forms
- when there is a lot of attributes, use tabs
- conditional visibility
- constraints
-->
