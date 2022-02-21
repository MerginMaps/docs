# How to Deploy Revised Projects
[[toc]]

::: tip
It is recommended to design your data schema carefully when creating a new layer. See [the best practice tips](../../layer/best-practice/index.md) to make your work easier in the long run!
:::

Sometimes you may need to make changes in your project. Changing **forms** by adding/removing existing fields or changing their aliases should not cause any issues and you can just synchronise your project as usual. 

However, you should be extra careful, if you are **modifying the data schema** of your survey layer, such as adding new fields or changing data type of a field. Data schema changes can cause synchronisation issues - to avoid them, you need to deploy the revised project properly. Here, we provide two options on how to do it. Choose the one that fits better with your workflow and your ability to coordinate with your team.

:::warning
Always make sure that the project on Mergin is up-to-date with all the changes before data admin proceeds with change in GeoPackage data schema.
:::

## Using a new project after revisions
One way how to make sure the modified project is distributed correctly is to create a new project after change in data schema:
1. Synchronise **all devices** before you change the schema and make sure there are no pending changes
2. After the synchronisation, the project needs to be **removed** from all devices
3. [Clone](../create-project/#clone-an-existing-project-in-qgis) your survey project
4. Modify the data schema
5. Push the revised project to Mergin as a **new project**
6. Ask your team members to **use the new project** 

::: tip
You can change [permissions](../permissions/) for the old project to *read-only* to make sure that nobody will contribute to it by mistake.
:::

## Using the same project after change in database schema
If you want to use the same project after modifications of data schema, make sure to follow these steps:
1. Synchronise **all devices** before you change the schema
2. After the synchronisation, the project needs to be **removed** from all devices
3. Change the data schema in QGIS and synchronise the project to the cloud
4. **Fresh download of the revised project to all devices**

::: warning
If even one of your surveyors does not comply and forgets to get the project with the modified schema, they may not be able to synchronise their work correctly: features in the layer with modified schema may be missing. If this happens to you, see [how to recover missing data](../missing-data/index.md).
:::
