# Workspaces
[[toc]]

## Workspaces in Mergin Maps
Workspaces are used to efficiently manage projects, users and subscriptions. 

Every workspace is tied to a [subscription](https://merginmaps.com/pricing). The subscription plan defines the amount of data storage for the workspace as well as other features, such as commercial use or the level of [support](../../misc/troubleshoot/#support).

One workspace can contain multiple projects. The only limit is the storage quota (as defined by the subscription). If needed, projects can be transferred to another workspace.

Users can be invited to a workspace as [members or guests](../permissions/). These users don't need to have their own subscription.

## Transition to workspaces
There are some differences in how the transition to workspaces was implemented in <MainPlatformName /> Cloud (SaaS), <MainPlatformName /> Enterprise Edition (EE) and [<MainPlatformName /> Community Edition (CE)](../../dev/mergince/).

### Workspaces in Mergin Maps Cloud
Transition to workspaces in <MainPlatformName /> Cloud will be done as follows:
- a workspace is created for every **organisation**. This workspace contains all projects that were owned by the organisation.
- a workspace is created for every **user with at least one project**. This workspace contains all user's projects.

If a user does not have a project, a workspace is not created for them. However, if they want to create a new project in the future, they will be prompted to create a workspace.

### Workspaces in Mergin Maps Enterprise Edition
Using <MainPlatformName /> Enterprise Edition provides the most options and flexibility. Transition to workspaces is done in a straightforward manner: a new workspace is created for every organisation and every user. There are no changes in permissions to projects.

:::tip
Interested in <MainPlatformName /> EE? <MerginMapsEmail id="sales" desc="Contact us" /> to find out more!
:::

### Workspaces in Mergin Maps Community Edition
In [Mergin Community Edition](../../dev/mergince/), all projects will be moved into **one** workspace.

::: tip
This documentation is focused mostly on the <MainPlatformName /> Cloud. If you use <MainPlatformName /> CE, you might encounter some differences in the user interface or functionality.
:::
