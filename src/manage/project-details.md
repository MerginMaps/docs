# Project History and Versions
<MainPlatformNameLink /> makes it possible to see the details of the changes made to the project from different devices or users. Each time you sync the project from your mobile device or from QGIS through the plugin, a new version will be created. 

On <AppDomainNameLink />, you can view what files have been added or removed. If you use GeoPackage for your survey, you can also see the list of the features which have been added, deleted or updated.

To view the project history:
1. Log in <AppDomainNameLink /> and open your project
2. Navigate to the **HISTORY** tab
3. Here you will see:
  - **Version**: the version of the project based on the number of synchronisations
  - **Created**: the time when the version was created
  - **Author**: <MainPlatformName /> username who created the version
  - The next three columns: Number of files added, deleted and updated respectively
  - **Size**: Size of the project
  - In the last column, you can download the version of project

![history advanced](./web-history-2.png)

:::tip
<QGISPluginName /> provides great tools to inspect the project history and compare changes between project versions:
- use [Create report](./plugin-sync-project/#create-report-processing-toolbox) to get an overview of changes for a range of project versions.
- use [Create diff](./plugin-sync-project/#create-diff-processing-toolbox) to extract changes made between two versions of a layer
:::

## Advanced changelog
To see more details of a specific version:
- Click on the version number you'd like to view the details
- In addition to version and author, you can see:
  - The exact time stamp under **Created**
  - **User Agent** indicates device, operating system and tool used to create the version
  - If you use GeoPackage for your survey, you can see a summary of features added, deleted or updated for each table (map layer). **File changes** can be expanded to include even more details.
  ![history](./web-history.png)
