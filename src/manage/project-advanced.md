# How to Share, Transfer or Delete Projects
[[toc]]

## Share projects and manage user access
You can share your <MainPlatformName /> project with others by inviting them to be [a member or a guest](./permissions/#workspace-members-and-guests) in your workspace. You can also make your <MainPlatformName /> project accessible to everyone by making it [public](#make-your-project-public-private).

:::warning
When granting access to workspaces and projects, it is important to set appropriate [**permissions**](./permissions/) to your team members to avoid unwanted modifications of projects.
:::

::: tip
You can follow our [Working collaboratively](../tutorials/working-collaboratively/) tutorial to see detailed instructions on how to share your project by inviting a user to your workspace as a guest or by sharing a link to your project with your teammates.
:::

### Add users to a workspace
If you want to share all projects in your workspace with a group of users, you can invite them to be a **member** of a workspace. It is also possible to invite people as **guests** and share only selected projects with them.

To add users to a workspace:
1. Log into <AppDomainNameLink />
2. Select **Members** from the left panel and click on **Add People**
   ![add](../tutorials/working-collaboratively/web-workspace-add.png)
3. In the invite form, enter the email addresses of people you want to invite. If they already have a <MainPlatformName /> account, you can enter their username.
   Select if you invite them as **members** or as **guests**:
   - for **members**, select their [member role](./permissions/#workspace-and-project-permissions). Members have access to all projects in the workspace.
   - for **guests**, specify the projects to which they should have access. Guests can have [*read* or *write* permissions](./permissions/#workspace-and-project-permissions) to these projects.
  ![invite](./workspace-members-guests.png)

4. Click on **Invite** to send an invitation. An email with a link will be sent to the recipients. After they accept the invitation, they will become members or guests of your workspace.

To manage workspace permissions, you have to be the **admin** or **owner** of the workspace. Navigate to **Members** in the left panel in <AppDomainNameLink /> to see the list of members and guests. Here you can change their roles and permissions or remove them from the workspace.

### Add users to a project
Access to a specific project can be also managed in the project's settings. From here, you can also invite users to become guests in the workspace and gain access to this project.

1. Log into <AppDomainNameLink />
2. Select **Projects** from the left panel and click on the project you want to manage
   ![projects](./web-projects.png)

3. Go to **Settings**. Here you can manage the permissions of users who have access to the project or remove them from the project.
   ![project settings](./project-settings.png)

4. Click on **Share**
   ![share project](./project-share.png)

5. Enter the email addresses or <MainPlatformName /> usernames of the users you want to invite and click **Next**
   ![enter email](./project-share-name.png)

4. In the invite form, it is possible to add more projects to share and set the permissions. Click **Next**.
   ![guest invite](./project-share-invite.png)

5. Click on **Share** to send an email with a link to the recipients. After accepting the invitation, they will become a guest in your workspace.
   ![send invite](./project-share-invite2.png)

### Send a link to your project
Another method that is suitable for sharing a project with a large number of users is to send them a link to your project, such as <MerginMapsProject id="sarah/Basic survey/tree" />.

1. Log into <AppDomainNameLink />
2. Go to the project you want to share
3. Copy the link from your web browser and share it with your colleagues
![copy url](../tutorials/working-collaboratively/mergin-web-copy-url.png)

If you send a link to a [private](#make-your-project-public-private) project, users can **request access** after logging into <AppDomainNameLink />.
![sharing setting](./project_sharing_send_request.png)

Once the user requests access, you (or another project owner) can open the project settings and grant them appropriate [permissions](./permissions/) and accept their request.
![sharing setting](./project_sharing_requests.png)

### Make your project public/private
Your projects are private by default. If you make it [public](./permissions/#public-and-private-projects), everyone can see your data and project history. However, they cannot contribute to your public project unless you grant them the write permission.

1. Choose the project you want to make public
2. Go to **Settings** and click on **Make public**

If you change your mind, you can make your project private by clicking **Make private**.

![make project public](./project-make-public.png)

## Transfer a project
A <MainPlatformName /> project can be transferred to another workspace. This can be useful when there are personal changes in your team or if you have multiple workspaces and want to manage the storage between them.

1. Make sure to correctly synchronise all changes from your collaborators and devices. If you fail to do that, their local changes will be lost!
2. After synchronisation, all collaborators have to **remove** the project from their devices
3. Log in to <AppDomainNameLink /> and choose the project you want to transfer
4. Go to **Settings** and click on **Transfer project**
   ![transfer project](./project-transfer.png)
5. Enter the name of the workspace to which the project should be transferred and click on **Request transfer**
   ![transfer project](./project-transfer2.png)
   
   The owner of the new workspace will be notified and will be able to accept or deny the request through <AppDomainNameLink />.
   ![transfer request](./project-transfer-request.png)
   
   The request is valid for 6 days. If the request is not accepted after this period, the project will remain in the original workspace.

6. If the same team wants to continue contributing to the project, they need to **download the transferred project** from the new workspace.

## Delete a project
If you want to delete a project, you can do so through <AppDomainNameLink /> or using the <QGISPluginName />.

### Delete a project through merginmaps.com

1. Log in <AppDomainNameLink /> and choose the project you want to delete
2. Go to **Settings** and click on **Delete project**

![delete project](./project-delete.png)

::: danger
This operation cannot be undone and the project data are permanently deleted.
:::

### Delete a project using the Mergin Maps plugin 
Using the <QGISPluginName />, you can delete a <MainPlatformName /> project either locally on your PC or on the <MainPlatformName /> server. To be able to delete the project on the server, you need to first delete the files locally.

1. In QGIS, go to the **<MainPlatformName />** in the Browser panel
2. Right-click on the project name and select **Remove locally**. This will remove the project from your PC. The project will be still available on the <MainPlatformName /> server. You will be able to download the project again.
   ![remove project locally](./plugin-project-delete.png)

3. Right-click on the project name again and select **Remove from server** option. This will remove the <MainPlatformName /> project completely. 
   ![remove project locally](./plugin-project-delete-from-server.png)

::: danger
This operation cannot be undone and the project data are permanently deleted.
:::
