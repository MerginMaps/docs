# Synchronisation and Conflicts
<!-- concept / reference -->

[[toc]]


Sometimes Mergin users may see conflict files appearing in their projects. This page explains when conflicts can happen, how to deal with them and how to prevent them.

Conflicts can happen when two users edit some files in a shared project at once. The technology behind Mergin service makes effort to merge changes from individual users automatically and therefore conflicts do not happen normally, even if multiple people edit a single data source (e.g. a GeoPackage). However, there are still some occasions when Mergin is unable to automatically resolve conflicts and it will create conflict files in projects.

There are two types of conflicts:
- edit conflicts
- conflicted copies

::: tip
Make your work easier and avoid unnecessary conflict files by following [**these recommendations**](avoid-conflict-files/#how-to-avoid-conflict-files/index.md).
:::

## Edit conflicts

Let's think of a survey of benches in a park conducted by Jack and Jill. They start with a vector layer of points with benches and they need to asses conditions of the benches by filling in a couple of attributes. They split the work into two halves and do the survey. By mistake, Jack also surveys a bench assigned to Jill - they both end up editing attributes of the same point, with slightly different values. How will Mergin handle that?

<!-- TODO: illustration of edits - diamond shape - base, Jack, Jill, result -->

If Jack is the first one to sync his changes and then Jill syncs her changes, at the time of Jill's sync Mergin knows they have a conflict in edits for that one bench. The editor who syncs last "wins", so in this case Jill's changes would be kept and Jack's changes would be overwritten (of course, all his non-conflicting edits to other benches would be kept). Mergin keeps a record about this, in case a project admin would want to investigate the edit conflict: if the survey is stored e.g. in data.gpkg, then a JSON file named data (edit conflict, jack v123).json would be created, containing list of conflicts. For each conflicting attribute value, the file lists the original value and the two different modified versions.

<!--TODO: input wasn't creating edit conflicts at all - fixed in 1.3 release - lutraconsulting/input#1738

TODO: plugin not doing this naming yet - lutraconsulting/mergin-py-client#62 -->

## Conflicted copy
Input does not support changing of the data schema. So, if you delete or add columns to your survey layer, Input cannot detect the change. Therefore, it is always recommended to stick with the same attribute table structure once you have set up your survey layer.

If you need to change the data schema, [](./modify-attribute-table/index.md)
 
<!-- TODO: example when that happens (change of database schema) -->
