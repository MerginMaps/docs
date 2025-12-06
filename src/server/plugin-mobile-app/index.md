---
description: Configure Mergin Maps mobile app and QGIS plugin for use with your custom Mergin Maps CE or EE server.
---

# Using Mergin Maps Mobile App and QGIS Plugin with a Custom Server
[[toc]]

There is a default server <AppDomainNameLink /> which is configured in <QGISPluginName /> and in the <MobileAppNameShort />. However, you might want to use some custom server, e.g. when using [<MainPlatformName /> Community Edition](../) or [<MainPlatformName /> Enterprise Edition](../).

To do this, we need to set up the custom server in the [plugin](#custom-server-configuration-in-mergin-maps-qgis-plugin) as well as in the [mobile app](#custom-server-configuration-in-mergin-maps-mobile-app).

::: warning Server version compatibility
Please note that the <MobileAppName /> and <QGISPluginName /> require the server version 2023.2 or higher.

See how to [upgrade](../upgrade/) your server if needed. 
:::

::: tip Diagnostic logs on custom servers
[Diagnostic logs](../../misc/troubleshoot/#diagnostic-logs) are by default saved to the `diagnostic_logs` folder on your server. 

They contain detailed information about application run, so they may help you resolve issues you can encounter when using the <MobileAppNameShort /> and <QGISPluginNameShort /> with your custom server.
:::

## Custom server configuration in Mergin Maps QGIS plugin
To configure a custom <MainPlatformName /> server in the <QGISPluginNameShort />:

1. Click on the **Configure <MainPlatformName /> plugin** icon to open the configuration dialog
![Configure Mergin Maps Plugin](../../setup/install-mergin-maps-plugin-for-qgis/qgis-configure-mergin-plugin.jpg "Configure Mergin Maps Plugin")

2. Check the **Custom <MainPlatformName /> server** option and enter your custom server URL.
![Custom server in Mergin Maps QGIS plugin setup](./config_dialog.jpg "Custom server in Mergin Maps QGIS plugin setup")

Now, the server URL is saved in current QGIS profile settings. So whenever you open QGIS with this profile, the <MainPlatformName /> server is associated with this URL. 

### Migration between Mergin Maps servers

You might have started working on one server (e.g. staging server, official cloud) and then you decided to migrate to a different <MainPlatformName />  server. If you change a server URL as in the config above, you will be connected to a different server and this option will hold in subsequent QGIS sessions until you change it again. This way you can switch between servers for a single QGIS profile. All projects for all your servers that you downloaded to your computer are still remembered. 

::: warning
 Plugin will not allow you to migrate projects from one server to another. Your local copies are already associated with the server they were downloaded from. If you really need to upload your local project from one server to another you will need to create a copy of that folder elsewhere (without hidden folder `.mergin`).
:::

### Using multiple servers simultaneously

If you need to handle two different servers at the same time, you will first need to create two user profiles in QGIS and download the <QGISPluginNameShort /> for both.

![QGIS new profile](./new_profile.jpg "Create new profile in QGIS")

Then you can configure <QGISPluginName /> for each of them using different server URL. Each session for given user profile will be connected to its own <MainPlatformName /> server as specified in the plugin configuration.

The limitation for transferring projects between servers still holds.

## Custom server configuration in Mergin Maps mobile app
To configure a custom <MainPlatformName /> server in <MobileAppName />:

1. Navigate to the **Log in** page. Make sure you are signed out.

   The current server URL is displayed at the bottom of the page.
 
   ![Mergin Maps mobile app current server URL](./mobile-app-server.jpg "Mergin Maps mobile app current server URL")

2. Tap on server URL to change the <MainPlatformName /> server. Enter the URL of your server and tap **Confirm**.

   ![Changing server URL in Mergin Maps mobile app](./mobile-app-change-server-url.jpg "Changing server URL in Mergin Maps mobile app")

3. Use the username and password that is associated with this server and **Sign in**.
   ![Custom server in Mergin Maps mobile app](./mobile-app-custom-server-log-in.jpg "Custom server in Mergin Maps mobile app")

Now you are all set to use the <MobileAppNameShort /> with the custom server!
