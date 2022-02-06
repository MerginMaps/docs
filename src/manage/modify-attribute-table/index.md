# How to Modify Attribute Table

If you have to change database schema, follow the correct procedure to [avoid conflicts](./avoid-conflict-files/index.md) when synchronising your project.

1. **All devices** sync before you change the schema
2. The project gets **removed** from the devices after sync
3. Change of schema in QGIS and sync
4. **Fresh download of the projects on the devices**

What you need to do it that you migrate **ALL** the surveyors at the same time to new schema. So for example in the afternoon, let all of them sync their changes back to cloud. Then, you change the schema. In the morning, all surveyors sync their Input App to get the project with modified schema.

Other option is to clone your survey project, update the schema and then push it to Mergin as new project. Then you ask surveyors to **use new project** next day (you can also downgrade the rights to read-only to the old project to force it).

::: warning
If one of your surveyors does not comply and forget to get the project with the modified schema, you will end up with the conflict files (since `geodiff` is unable to merge sqlite databases with different schemata).
:::

If you have some hidden variables in form and you just add them to the form as visible, this should not cause any issues. However, you cannot change the data type or do any change in the sqlite (GeoPackage) file.
