# Behind Data Synchronisation
<!-- concept / reference -->
[[toc]]

## Mergin Maps workflow
Synchronisation is a key process that makes effective collaboration possible: you and your team members can contribute to the same project simultaneously, see each other's edits and also smoothly transfer data between mobile devices and computers.

Let's look at a typical workflow in <MainPlatformNameLink />:
1. First, you [create](./create-project/#create-a-project-in-qgis) and [prepare](../gis/features/) a <MainPlatformName /> project in QGIS. This includes loading background and survey layers, setting up the forms, styling layers, setting up map themes and defining the layers to be used in a survey. The <MainPlatformName /> project consists of the project file (*.qgz) and data referenced in the project, such as GeoPackage layers, shapefiles, rasters or attachments. At this point, they are all saved in a project folder in your computer.
2. The <MainPlatformName /> project is uploaded to <MainPlatformNameLink /> Cloud using [<QGISPluginName />](./plugin-sync-project/). The project and data are now stored in the cloud.
3. Now you can work collaboratively! The project and data can be downloaded to a mobile device to do [the fieldwork using <MobileAppName /> ](../tutorials/mobile/) or to another computer with QGIS. Every collaborator works with their own local version of the project.
4. After finishing their work, the individual contributors synchronise their changes [to <MainPlatformName /> Cloud](../tutorials/mobile/#saving-data-to-the-cloud), where they are put together.

As you can see, <MainPlatformName /> Cloud acts as a link between individual contributors and also between PCs and mobile devices, synchronising the changes. When you make changes and upload them to the cloud, <MainPlatformNameLink /> will compare the content of GeoPackage layers and merge them, while copying attachments (such as photos), rasters and shapefiles as they are. That is why we recommend using GeoPackage format for your survey layer.

::: warning
Synchronising data and project works in both ways.
:::

## Synchronisation
How does it work? When you use GeoPackage, <MainPlatformNameLink /> compares two datasets with the same data schema using [Geodiff library](#geodiff-library) to create a list of entries that were inserted, updated, or deleted between the two datasets. 

![Scheme of detecting changes](./geodiff-diff.jpg "Scheme of detecting changes")

During field surveys, individual team members can change the same row of a table or add a new row with the same `ID`. If it is possible to solve these conflicts automatically, <MainPlatformName /> will do so:

![Scheme of merging changes from two users](./geodiff-rebase.jpg "Scheme of merging changes from two users")

There may be conflicts that can't be resolved automatically, e.g. if the same value is modified in different copies. These rare cases are written to a conflict file that can be [resolved later](./missing-data/#there-are-conflict-files-in-the-folder).

## Conflict files
Conflicts can happen when two users edit some files in a shared project at once. The technology behind <MainPlatformNameLink /> service makes an effort to merge changes from individual users automatically and therefore conflicts do not happen normally, even if multiple people edit a single data source (e.g. a GeoPackage). However, there are still some occasions when it is not possible to automatically resolve conflicts and <MainPlatformName /> will create conflict files in projects.

::: tip
Make your work easier and avoid unnecessary conflict files by following [these tips](../layer/best-practice/).
:::

There are two types of conflicts:
- edit conflicts
- conflicted copies

### Edit conflicts
Let's think of a survey of benches in a park conducted by Jack and Jill. They start with a vector layer of points with benches and they need to assess conditions of the benches by filling in a couple of attributes. They split the work into two halves and do the survey. By mistake, Jack also surveys a bench assigned to Jill - they both end up editing attributes of the same point, with slightly different values. How will <MainPlatformName /> handle that?

<!-- TODO: illustration of edits - diamond shape - base, Jack, Jill, result -->

If Jack is the first one to sync his changes and then Jill syncs her changes, at the time of Jill's sync <MainPlatformName /> knows they have a conflict in edits for that one bench. The editor who syncs last "wins", so in this case Jill's changes would be kept and Jack's changes would be overwritten (of course, all his non-conflicting edits to other benches would be kept). <MainPlatformName /> keeps a record about this, in case a project admin would want to investigate the edit conflict: if the survey is stored e.g. in `data.gpkg`, then a JSON file named data `(edit conflict, jack v123).json` would be created, containing list of conflicts. For each conflicting attribute value, the file lists the original value and the two different modified versions.

### Conflicted copy
If you change the data schema, such as deleting or adding columns to your survey layer or changing the data type of a field, <MainPlatformName /> cannot detect changes. If you try to synchronise a layer with modified data schema, you will get a conflict file.

If you need to change the data schema, [see how to deploy a revised project properly](./deploy-new-project/).
 
<!-- TODO: example when that happens (change of database schema) -->

## Geodiff library
A library called **Geodiff** is used by <MainPlatformNameLink /> to synchronise changes made by individual team members. You can find this library at <GitHubRepo id="MerginMaps/geodiff" /> .
