# How to Use QGIS Plugin with Multiple Servers
[[toc]]

There is a default server <AppDomainNameLink /> which is configured in <QGISPluginName />. However, in some cases you might want to use some custom server, e.g. when you host it yourself.

## Custom server configuration
If you want to use a custom <MainPlatformNameLink /> server, you will need to configure it in <QGISPluginName />.

1. Click on the **Configure <MainPlatformName /> plugin** icon to open the configuration dialog
![configure icon](./configure-plugin.png)

2. Check the **Custom <MainPlatformName /> server** option and enter your custom server URL.
![config dialog](./config_dialog.png)

Now, the server URL is saved in current QGIS profile settings. So whenever you open QGIS with this profile, the <MainPlatformName /> server is associated with this URL. 

## Migration between Mergin Maps servers

You might have started working on one server (e.g. staging server, official cloud) and then you decided to migrate to a different <MainPlatformName />  server. If you change a server URL as in the config above, you will be connected to a different server and this option will hold in subsequent QGIS sessions until you change it again. This way you can switch between servers for a single QGIS profile. All projects for all your servers that you downloaded to your computer are still remembered. 

::: warning
 Plugin will not allow you to migrate projects from one server to another. Your local copies are already associated with the server they were downloaded from. If you really need to upload your local project from one server to another you will need to create a copy of that folder elsewhere (without hidden folder `.mergin`).
:::

## Using multiple servers simultaneously

If you need to handle two different servers at the same time, you will first need to create two user profiles in QGIS and download <QGISPluginName /> for both.

![](./new_profile.png)

Then you can configure <QGISPluginName /> for each of them using different server URL. Each session for given user profile will be connected to its own <MainPlatformName /> server as specified in the plugin configuration.

The limitation for transferring projects between servers still holds.
