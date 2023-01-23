# How to Delete Files

Deleting files such as photos that are not needed anymore can help you free up storage on the <MainPlatformNameLink /> cloud and keep your project organised.

Files can be deleted through <AppDomainNameLink /> one by one. Deleting multiple files at once is possible on your computer using <QGISPluginName />.
[[toc]]

:::warning
Download and archive the data before deleting them if they may be needed in the future.
:::

## Delete files through merginmaps.com
Deleting files trough <MainDomainName /> is simple. However, you can only delete one file at the time.

1. Log in <AppDomainNameLink />
2. Open your project. In the **Files** tab you will see the list of files that are stored in the project's folder.
   ![project files](./project-files.png)
3. Select the file you are considering removing and review the details to make sure you want to remove it.

   Click **Remove File** to delete the photo.
   ![remove file](./remove-file.png)
4. Click **Update** in the **Data Sync** window to synchronise the changes.
   ![update](./remove-file-sync.png)

## Delete multiple files at once
If you want to delete multiple files, the best way to do this is on your computer.

1. [Download the project](../plugin-sync-project/#downloading-a-project-in-qgis) to your computer using <QGISPluginName />.
2. Navigate to the [project's folder](../project/#mergin-maps-project-folder) in your file browser and review the files inside the folder. There may be a [custom folder for photos](../../layer/settingup_forms_photo/#how-to-set-up-a-custom-folder-for-storing-photos) if it was set up before.

   Delete the files you do not want to keep anymore. 
   ![folder files](./folder-files.png)
3. [Synchronise the changes](../plugin-sync-project/#synchronisation-in-qgis) in QGIS using <QGISPluginName />. 

   **Local changes** in **Project status** will show the list of deleted files. After synchronisation, the files will be also deleted from the cloud.

   ![project status](./project-status.png)
   
