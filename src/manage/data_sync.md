# Data Synchronisation

<!--- IMPORTANT: This permalink is referenced from Input App -->

## Mergin Server (Android/iOS)

Input comes with built-in functionality to seamlessly synchronise your projects and data through Mergin. If you want to use this functionality, you will need to sign up to [Mergin](https://public.cloudmergin.com).

We provide a QGIS plugin for Mergin to easily synchronise your projects and data from within QGIS. See the [plugin user manual](./plugin-sync-project.md) for more information.

![mergin-plugin](./mergin_plugin.png)

You can also drag-and-drop your project folder (including layers, SVGs, etc) to Mergin project web page.

## Manual data transfer (Android)

This can be done by connecting your mobile device to the computer and copying data files to/from the device. Once your Android phone or tablet is recognised by the operating system after connecting it using USB cable, you can use file browser to copy files. On Android devices, data are stored in `Internal storage/Android/data/uk.co.lutraconsulting/files/projects` directory.

## Manual data transfer (iOS)

Input supports iTunes file sharing. Note that iTunes doesn't allow you to browse or edit data from the app data folder, only allows you to delete or copy data folder to another location. Instructions to access your data are following:

* Plug iOS device to a computer
* Open `Finder` file browser
* Go to Locations -> `<device_name>`
![iTunes](./itunes.png)
* Click on the tab named `files`  
* Select `Input` app from a list to see a data folder
![iTunes2](./itunes2.png)
* Drag-and-drop the INPUT` folder to another location to see the content
