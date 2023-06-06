# Workspaces
[[toc]]

## Workspaces in Mergin Maps
Workspaces are used to efficiently manage projects, users and subscriptions. 

Every workspace is tied to a [subscription](https://merginmaps.com/pricing). The subscription plan defines the amount of data storage for the workspace as well as other features, such as commercial use or the level of [support](../../misc/troubleshoot/#support).

One workspace can contain multiple projects. The only limit is the storage quota (as defined by the subscription). If needed, projects can be transferred to another workspace.

Users can be invited to a workspace as [members or guests](../permissions/). These users don't need to have their own subscription. 

::: tip
Want to read more about workspaces and why they were introduced to <MainPlatformName />? Visit our blog [Introducing Workspaces: Simplified Collaboration](https://merginmaps.com/blog/introducing-workspaces-simplified-collaboration).
:::

<YouTube id="SZf93akn0tM" />

:::tip
Integrations like [PostgreSQL DB Sync](../../dev/dbsync/), [Media Sync](../../dev/media-sync/) and [Work Packages](../../dev/work-packages/) do not share the concept of *active workspace*. They simply work with one specific project from any workspace.
:::

## How to switch between workspaces
You may participate in multiple workspaces. For instance, you can have your personal workspace and be a member of the workspaces of other users.

### Switch workspaces in merginmaps.com

When logged in to <AppDomainNameLink />, you will see the current workspace under the account name in the right corner of the screen.
![Mergin Maps web dashboard current workspace](./web-workspace.jpg "Current workspace in Mergin Maps web dashboard")

Click on the account to see the list of all workspaces that are available to you. The active workspace is highlighted. Switch to another workspace by simply clicking on its name in the list.
![Mergin Maps web workspaces list](./web-switch-workspace.jpg "Mergin Maps web workspaces list")

### Switch workspaces in Mergin Maps Input
Navigate to **My Account** in <MobileAppName />. Here you will see the name of the current workspace and workspace details.
![Switch workspace button in Mergin Maps Input](./input-switch-workspace.jpg "Switch workspace button in Mergin Maps Input")

Tap on the **Switch workspace** button. From the list of available workspaces, select the one you want to switch to:
![Select workspace in Mergin Maps Input](./input-select-workspace.jpg "Select workspace in Mergin Maps Input")

### Switch workspaces in QGIS
Navigate to <MainPlatformName /> in the **Browser** panel. The name of the current workspace is displayed in square brackets.

Right click on the plugin's name and select **Switch workspace**
![Switch workspace in Mergin Maps plugin for QGIS](./plugin-switch-workspace.jpg "Switch workspace in Mergin Maps plugin for QGIS")

From the list of available workspaces, select the one you want to switch to:
![Select workspace in Mergin Maps plugin for QGIS](./plugin-select-workspace.jpg "Select workspace in Mergin Maps plugin for QGIS")

## How to create a new workspace
1. Log in to <AppDomainNameLink />
2. Click on your account and navigate to **Manage workspaces**
   ![Manage workspaces in Mergin Maps web dashboard](./web-manage-workspaces.jpg "Manage workspaces in Mergin Maps web dashboard")
3. Here, you can see the overview of your existing workspaces. Click on **Create workspace**
   ![Create workspace in Mergin Maps web dashboard](./web-create-workspace.jpg "Create workspace in Mergin Maps web dashboard")
4. Fill in the name and description of your new workspace
   ![Create workspace in Mergin Maps web dashboard details](./web-new-workspace.jpg "Create workspace in Mergin Maps web dashboard details")
5. Now you have a new workspace! You can [create projects](../create-project/) in the workspace and [invite other users](../project-advanced/#add-users-to-a-workspace) to contribute.
   ![Mergin Maps web dashboard workspaces overview](./web-new-workspace-created.jpg "Mergin Maps web dashboard workspaces overview")

Currently, it is possible to have up to 3 workspaces in the trial plan (without subscription). Note that every workspace has its own subscription. When created, the workspace starts with the free trial. After the trial period, you will have to [switch to a paid subscription](../../manage/subscriptions/#changing-a-subscription-from-web). 

See our [pricing](https://merginmaps.com/pricing) for details about different plans.


## How to delete a workspace
1. Make sure you are in the workspace you want to remove
2. Navigate to **Settings** and select **Close workspace**
   ![Delete workspace in Mergin Maps web dashboard](./web-delete-workspace.jpg "Delete workspace in Mergin Maps web dashboard")
3. Confirm the closing of a workspace by typing the workspace name and click on **Delete**
   ![Delete workspace confirmation](./web-delete-workspace-confirm.jpg "Delete workspace confirmation")

