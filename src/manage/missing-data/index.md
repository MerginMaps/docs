# How to Recover Missing Data

[[toc]]{ includeLevel: [2, 4] }

Let's say you synchronise surveyed data from multiple devices (individual surveyors) and when you examine them, you find out there is something missing - new features that were captured in the field or changes made by one or more of your team members. 
The reasons why you didn't get all the data can vary. For instance, the data could not be synchronised correctly because of multiple surveyors editing the same feature or synchronisation of projects with different data schema. You can read more about this topic in [Behind Data Synchronisation](../synchronisation.md).

Here we will try to guide you through common techniques that can help you to retrieve your data.

::: warning
If you cannot synchronise changes, make sure you are connected to the internet and that you have not exceeded your storage limit.
:::

## Inspect your folder for conflict files
- Navigate to your project folder
- See if there are any files that contain `conf` or `conflict` in their names. 

Depending on your data format, you can get something like `survey_lines.gpkg_conflict_jill_v6`, which is a conflict file for data from a user called Jill, project version 6.

## There are conflict files in the folder
Conflict files can appear in your project when Mergin could not synchronise changes automatically and they indicate there may be some issues that you should be fixed.

You can add conflict files to your QGIS project and check whether their contain the data you are missing. Then you can resolve them manually or semi-automatically, depending on the scope of your issue.

### Resolving conflict files manually
If you can identify missing features visually, e.g. by finding out where the survey took place, you can copy and paste these features to the survey layer. Make sure the values have been transferred over correctly!

### Resolving conflict files semi-automatically
Change the schema of the table in the conflict file to match the new schema and run the *Detect dataset changes* algorithm from the *Processing toolbox*. You then need to go though the result and ensure the changes detected are the ones you expect for both attribute values and geometry.

![detect dataset changes](./qgis-detect-dataset-changes.png)

## There are no conflict files in the folder
If you don't see any conflict files in your folder, try to download them manually from the mobile device. Surveyed data are stored in the device that was to collect them. So, if you have access to this device, you can download data manually and process them in your computer.

### Manual data transfer (Android)
Manual data transfer from an Android device can be done by connecting your device to the computer and copying data files to/from the device. Once your Android phone or tablet is recognised by the operating system after connecting it using USB cable, you can use file browser to copy files. 

On Android devices, data are stored in `Internal storage/Android/data/uk.co.lutraconsulting/files/projects` directory.

### Manual data transfer (between iOS and Mac)
Input supports iTunes file sharing. Note that iTunes doesn't allow you to browse or edit data from the app data folder, only allows you to delete or copy the data folder to another location. 

You can access your data by following these steps:
1. Plug iOS device to a computer
2. Open `Finder` file browser
3. Go to Locations and select your `<device_name>`
![iTunes](./itunes.png)
4. Click on the tab named `files`  
5. Select `Input` app from a list to see a data folder
![iTunes2](./itunes2.png)
6 Drag-and-drop the `INPUT` folder to another location to see the content

### Manual data transfer (between iOS and Windows)
Here are the steps to transfer the data from iPhone/iPad to a Windows PC.

1. Make sure you have installed [iTunes](https://support.apple.com/en-us/HT210384)
2. Sign into iTunes
3. [Connect your iOS device to the PC](https://support.apple.com/en-gb/guide/iphone/iph42d9b3178/15.0/ios/15.0) and unlock the screen
4. In iTunes, click on the phone icon in the toolbar
![iTunes phone icon](./ios_win_itunes.png)
5. From the left panel, select **File Sharing**
6. Select **Input** in Apps tab
7. Under Input Documents, select **INPUT** folder
8. Press **Save...**
![iTunes save](./ios_win_itunes_input.png)
9. Select a path to save the folder on your computer.

## Next steps
If you were not able to solve your problem, you can contact the [support](../../misc//troubleshoot/#support) or get [diagnostic logs](../../misc/troubleshoot/#diagnostic-logs) to inspect the issues thoroughly.

<CommunityJoin />
