# How to Deploy Revised Projects
[[toc]]

Sometimes you may need to make changes in your project. Changing forms by adding/removing existing fields or changing their aliases should not cause any issues and you can just synchronise your project and usual. 
However, you should be extra careful, if you are **modifying the data schema** of your survey layer, such as adding new fields or changing data type of a field. Data schema changes can cause synchronisation issues - to avoid them, you need to deploy the revised project properly. Here, we provide two options on how to do it. Choose the one that fits better with your workflow and your ability to coordinate your team.

::: tip
It's for the best to think carefully about the data schema when creating a new layer. See [the best practice tips](../../layer/best-practice/index.md) to make your work easier in the long run!
:::

## Using a new project after revisions
One way how to make sure the modified project is distributed correctly is to create a new project after every revision:
1. [clone](../create-project/#clone-an-existing-project-in-qgis) your survey project
2. modify the data schema
3. push the revised project to Mergin as a **new project**
4. ask your team members to **use the new project** 

This way, it is easy to keep track of all project versions and to check that all your team members use the same project. 

::: tip
You can change [permissions](../permissions/) for the old project to *read-only* to make sure that nobody will use it by mistake.
:::

## Using the same project after revisions
If you want to use the same project after modifications of data schema, make sure to follow these steps:
1. Synchronise **all devices** before you change the schema
2. After the synchronisation, the project needs to be **removed** from all devices
3. Change the data schema in QGIS and synchronise the project to the cloud
4. **Fresh download of the revised project to all devices**

::: warning
If even one of your surveyors does not comply and forgets to get the project with the modified schema, they may not be able to synchronise their work correctly: features in the layer with modified schema may be missing. If this happens to you, see [how to recover missing data](../missing-data/index.md).
:::
