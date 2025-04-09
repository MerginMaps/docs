# How to Share, Transfer or Delete Projects
[[toc]]

## Share projects and manage user access

You can share your <MainPlatformName /> project with others by inviting them to be [a member or a guest](../permissions/#workspace-members-and-guests) in your workspace. You can also make your <MainPlatformName /> project accessible to everyone by making it [public](#make-your-project-public-private).

:::warning
When granting access to workspaces and projects, it is important to set appropriate [**permissions**](../permissions/) to your team members to avoid unwanted modifications of projects.
:::

::: tip
You can follow our [Working collaboratively](../../tutorials/working-collaboratively/) tutorial to see detailed instructions on how to share your project by inviting a user to your workspace as a guest or by sharing a link to your project with your teammates.
:::

### Add users to a workspace
If you want to share all projects in your workspace with a group of users, you can invite them to become members or guests of a workspace.

You have to be the **admin** or **owner** of the workspace to manage access to the workspace. See [Member Roles and Permissions](../permissions/#workspace-member-roles-and-project-permissions) for more details.

To add users to a workspace:

1. Log into <AppDomainNameLink />

2. Go to the **Members** tab in the left panel and click on **Invite**
   ![Invite people to Mergin Maps workspace](./dashboard-workspace-invite.jpg "Invite people to Mergin Maps workspace")

3. In the form, enter the email addresses of people you want to invite and choose their [**workspace role**](../permissions/#workspace-member-roles-and-project-permissions) from the list.
   - If you want to grant them access to all projects in the workspace, select one of the member roles (*Reader*, *Writer*, *Admin* or *Owner*).
   - If you only want to invite them to some projects, select the *Guest* option and specify which projects should be shared with them.
    
   ![Invite people to workspace and set their role](./dashboard-workspace-invite-form.png "Invite people to workspace and set their role")

4. Click on the **Invite** button to send an invitation. 

   An email with a link will be sent to the recipients. If they already have a <MainPlatformNameLink /> account, they will also get a notification through the dashboard. 

After accepting the invitation, the invited users will become members or guests of your workspace.

### Add users to a project
Users can be invited to a specific project. Users with access to only some projects in the workspace are workspace **guests**.

1. Log into <AppDomainNameLink />

2. In the **Projects** tab, select the project you want to manage and navigate to **Collaborators**.

   Click on the **Share** button.
   ![Mergin Maps dashboard Project tab](./dashboard-projects-collaborators.jpg "Mergin Maps dashboard Project tab")

3. Enter the email addresses of the users you want to invite and select their **Project permission**.

   Click **Share** to send the invitation.
   ![Share project with teammate via email](./dashboard-project-share-form.jpg "Share project with another user")
       
After accepting the invitation, the invited users will become guests in your workspace and will have access to this project.

### Send a link to your project
Another method that is suitable for sharing a project with a large number of users is to send them a link to your project, such as <MerginMapsProject id="sarah/Basic survey/tree" />.

1. Log into <AppDomainNameLink />

2. Go to the project you want to share

3. Copy the link from your web browser and share it with your colleagues
   ![Copy link to Mergin Maps project](../../tutorials/working-collaboratively/dashboard-copy-url.jpg "Copy link to Mergin Maps project")

If you send a link to a [private](#make-your-project-public-private) project, users can **request access** after logging into the <DashboardShortLink />.
![Request Access to a private project](../../tutorials/working-collaboratively/dashboard-request-access-to-private-project.jpg "Request Access to a private project")

Once the user requests access, you (or another project owner) can grant them appropriate [permissions](../permissions/) and accept (or decline) their request.
![Project access requests in Mergin Maps](../../tutorials/working-collaboratively/dashboard-project-access-requests.jpg "Project access requests in Mergin Maps")

### Make your project public/private
Your projects are private by default. If you make it [public](../permissions/#public-and-private-projects), everyone can see your data and project history. However, they cannot contribute to your public project unless you grant them the write permission.

1. Log into <AppDomainNameLink />
2. Go to the project you want to make public
2. In the **Settings** tab, click on **Make public**

If you change your mind, you can make your project private by clicking **Make private**.

![Make project public button](./dashboard-project-make-public.jpg "Make project public button")

## Transfer a project
A <MainPlatformName /> project can be transferred to another workspace. This can be useful when there are personal changes in your team or if you have multiple workspaces and want to manage the storage between them.

1. Make sure to correctly synchronise all changes from your collaborators and devices. If you fail to do that, their local changes will be lost!

2. After synchronisation, all collaborators have to **remove** the project from their devices

3. Log in to <AppDomainNameLink /> and choose the project you want to transfer

4. Go to **Settings** and click on **Transfer project**
   ![Mergin Maps project settings](./dashboard-project-transfer.jpg "Mergin Maps project settings")
   
5. Enter the name of the workspace to which the project should be transferred and click on **Request transfer**
   ![Transfer project form](./dashboard-project-transfer-form.jpg "Transfer project form")
   
   The owner of the new workspace will be notified and will be able to accept or deny the request through the <DashboardShortLink />.
   ![Project transfer requests](./dashboard-project-transfer-request.jpg "Project transfer requests")
   
   The request is valid for 6 days. If the request is not accepted after this period, the project will remain in the original workspace.

6. If the same team wants to continue contributing to the project, they need to **download the transferred project** from the new workspace.

## Delete a project
If you want to delete a project, you can do so through <AppDomainNameLink /> or using the <QGISPluginName />. 

After deleting a project, it is kept on <MainPlatformNameLink /> servers for 14 days before it is deleted permanently. During this period, it can be restored if you contact <MerginMapsEmail id="support" />.

If you want to create a new project with the same name sooner, you can contact <MerginMapsEmail id="support" />.

:::warning
If you reuse the name of a deleted project, make sure to coordinate your team to follow the steps described in [How to Deploy Revised Projects](../deploy-new-project/). 

To avoid synchronisation issues, everyone should delete the old project from all devices and then download the new project. 
:::

### Delete a project through merginmaps.com

1. Log in to <AppDomainNameLink /> and navigate to the project you want to delete
2. Go to **Settings** and click on **Delete project**

![Mergin Maps dashboard delete project](./dashboard-project-delete.jpg "Mergin Maps dashboard delete project")


### Delete a project using the Mergin Maps QGIS plugin 
Using the <QGISPluginName />, you can delete a <MainPlatformName /> project either locally on your PC or on the <MainPlatformName /> server. To be able to delete the project on the server, you need to first delete the files locally.

1. In QGIS, go to the **<MainPlatformName />** in the Browser panel

2. Right-click on the project name and select **Remove locally**. This will remove the project from your PC. The project will be still available on the <MainPlatformName /> server. You will be able to download the project again.
   ![QGIS Remove Mergin Maps project locally in QGIS](./plugin-project-delete.jpg "QGIS Remove Mergin Maps project locally")

3. Right-click on the project name again and select **Remove from server** option. This will remove the <MainPlatformName /> project completely. 
   ![QGIS Remove Mergin Maps project from server](./plugin-project-delete-from-server.jpg "QGIS Remove Mergin Maps project from server")

