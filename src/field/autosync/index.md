---
description: Changes in the project can be synced manually or automatically. With automatic sync, your updates are sent to the cloud without needing to press a button.
---

# Synchronisation in Mergin Maps Mobile App
[[toc]]

Changes in your project can be synchronised by using **Synchronise project** option on the main page of the <MobileAppNameShort /> or during the survey:
- [manually](#manual-synchronisation) by clicking the **Sync** button
- [automatically](#automatic-synchronisation) by using the **Automatically sync changes** option

![Synchronisation in Mergin Maps mobile app](./mobile-app-sync-options.jpg "Synchronisation in Mergin Maps mobile app")


To be able to synchronise a project, you need to:
- be signed in to your <MainPlatformNameLink /> account
- be connected to the internet
- have write [permission](../../manage/permissions/) to the project


:::tip More about synchronisation
Want to learn more about synchronisation in <MainPlatformNameLink />? Go to [**Synchronisation**](../../manage/synchronisation/) for more details.

Are you missing some data after synchronisation? [How to Recover Missing Data](../../manage/missing-data/) will show you how to deal with [conflict files](../../manage/missing-data/#there-are-conflict-files-in-the-folder) and how to [manually download](../../manage/missing-data/#there-are-no-conflict-files-in-the-folder) data from your mobile device.
:::

## Manual synchronisation
You can synchronise local changes by tapping the sync button in the map window. The sync button will stop rotating once the synchronisation process is finished and the **Successfully synchronised** message will appear at the top of the window.

![Successful synchronisation message](../mobile-app-ui/mobile-app-sync.jpg "Successful synchronisation message")

If you want to inspect what has changed before synchronising, tap on the **More** button and go to **Local changes**.

![Project status with pending changes](./mobile-app-more-local-changes.jpg "Project status with pending changes")

Here, you will see the overview of your local changes.

![Mergin maps mobile app Local changes](../mobile-app-ui/mobile-app-local-changes.jpg "Mergin maps mobile app Local changes")

## Automatic synchronisation
To allow automatic synchronisation in <MobileAppName />, navigate to **Settings** and toggle on **Automatically sync changes**. 

![Automatically synchronise changes settings in Mergin Maps mobile app](./mobile-app-autosync-settings.jpg "Automatically synchronise changes settings in Mergin Maps mobile app")

As changes will be done during the survey, such as adding new features or changing field values, the synchronisation will start automatically. The sync button will indicate that synchronisation is in progress and once it is done, the **Successfully synchronised** message will appear.

If changes can not be synchronised automatically, e.g. when internet connection is lost during the survey, the changes need to be synchronised manually after reconnecting to the internet. 

![Failed to synchronise changes error message](./mobile-app-sync-fail.jpg "Failed to synchronise changes error message")
