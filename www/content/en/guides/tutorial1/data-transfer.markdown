---
category: 'Guides'
title: Transferring data from PC to mobile/tablet using the Mergin service
---

In this post, we will transfer the project and associated data set up in [the previous tutorial](./qgis-new-project.html) to the mobile device using the [Mergin service](https://public.cloudmergin.com/).



# Transferring data to mobile devices

You have 2 options to transfer your data to the mobile through the Mergin service: through website or [through Mergin plugin in QGIS](/working-with-qgis-plugin.html). In this tutorial we are going to use the Mergin plugin from within QGIS.

In QGIS, from the main menu, select **Plugins > Manage and Install Plugins ...**. A new window will appear. From the left panel, select **All** and then in the search section (on the top) search for **Mergin**. Select the plugin from the list and click on **Install plugin**. After installation, you need to **restart your QGIS**.

After the restart, you should be able to see the Mergin icon in your **Browser Panel**:

![Sharing projects through Mergin](/images/tutorials/input_basic_mergin-1.png)

In the **Browser Panel**, right click on the **Mergin** and select **Configure**. Type in your username (or email address) and password that you have registered with the Mergin service.

![Sharing projects through Mergin](/images/tutorials/input_basic_mergin-2.png)

Click on **Test Connection** and you should see a green OK.

If you have selected to **Save credentials** (so you do not need to type in the username and password again) and you have not configured QGIS password manager, you will be prompted to set a password for your QGIS password manager.

After clicking OK, you should see a list of folders on your Mergin connection in your browser panel:

![Sharing projects through Mergin](/images/tutorials/input_basic_mergin-3.png)

We can know upload the data:

Right click on the **Mergin** and select **Create new project**. A new window will appear:

For **Project name** type **Potholes survey**

Select **Initialize from local drive**

Click on ... and and select **data collection** folder

![Sharing projects through Mergin](/images/tutorials/input_basic_mergin-4.png)

Once click OK, the project will be created and content of the **data collection** folder will be uploaded there.

The project is now ready to be [downloaded on your mobile device](./using-input.html), so that you can start the survey.
