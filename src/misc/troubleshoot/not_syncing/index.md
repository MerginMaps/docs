---
description: Issues with Mergin Maps project synchronisation? See how to resolve Gateway Timeout or 502 Bad Gateway error.
---

# Project fails to sync
[[toc]]

## Gateway Timeout or 502 Bad Gateway

The most common cause of a **Gateway Timeout** or **502 Bad Gateway** error is that there are more files to upload than can be processed before the server returns a timeout error.  If this happens, this is the recommended workaround:

1. If the sync is from a mobile device, [transfer the project files](../../../manage/missing-data/#manual-data-transfer-android) from the mobile device with the following exceptions:

    - Only transfer the photo attachments from the mobile device project (if you are transferring from an iOS device, you can ignore this)
    - Recreate the same folder structure in the destination folder as the photos are stored in the mobile device. For example, if all photos are in the project folder, then transfer them to the same folder on your PC/laptop. If there are subfolders, recreate the subfolders and transfer photos to the correct subfolder on the destination device.

2. If you have not already downloaded the project on the PC/laptop, do so now [using the <QGISPluginName />](../../../tutorials/opening-surveyed-data-on-your-computer/#locating-and-opening-your-project), if you have downloaded the project already skip this step.

3. Open the project folder for the version downloaded from the <QGISPluginNameShort /> on your PC/laptop

4. Open the folder on your PC/laptop where you transferred the photos/project files from your mobile device

5. Cut and paste up to 100 photo attachments from the transferred project directory to the same location in your QGIS project directory (if photos are duplicates you can either overwrite or skip)

6. Open the project in QGIS and synchronise - if you get another Bad Gateway or Sever timeout error, remove the transferred photos from the QGIS project directory and try step 5 again but copy fewer photos 

7. Repeat steps 5 and 6 until all photos have been moved from the transferred directory to the QGIS project directory

8. Open the project on the mobile device and synchronise 
