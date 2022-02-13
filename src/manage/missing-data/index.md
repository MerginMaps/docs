# How to Recover Missing Data

[[toc]]{ includeLevel: [2, 4] }

Let's say you synchronise surveyed data from multiple devices (individual surveyors) and when you examine them, you find out there is something missing - new features that were captured in the field or changes made by one or more of your team members. 
The reasons why you didn't get all the data can vary. For instance, the data could not be synchronised correctly because of multiple surveyors editing the same feature or synchronisation of projects with different data schema. You can read more about this topic in [Synchronisation and Conflicts](../synchronisation.md).

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
If you can identify missing features visually, e.g. by finding out where the survey took place, you can copy and paste these feature to the survey layer. Make sure the values have been transferred over correctly!

### Resolving conflict files semi-automatically
Change the schema of the table in the conflict file to match the new schema and run *Detect dataset changes* algorithm from the Processing toolbox. You then need to go though the result and ensure the changes detected are the ones you expect for both attribute values and geometry.

![detect dataset changes](./qgis-detect-dataset-changes.png)

## There are no conflict files in the folder
If you don't see any conflict files in your folder, try to [download them manually from the mobile device](../data_sync.md#manual-data-transfer-android). Surveyed data are stored in the device that was to collect them. If you have access to this device, you can download data manually and process them in your computer.

## Next steps
If you were not able to solve your problem, see how you can contact the [support](../../misc//troubleshoot/#support) or get [diagnostic logs](../../misc/troubleshoot/#diagnostic-logs) to inspect the issues thoroughly.

<CommunityJoin />
