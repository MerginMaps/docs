# Enhancing Existing Project

::: danger TODO
NEEDS to be RM-RFed and reworked
this is 1-1 copy of https://help.cloudmergin.com/tutorials/qgis-new-project.html
:::

[[toc]]

In this guide, we will walk you through basic steps to set up a survey 
project in QGIS desktop, transfer it through the 
[Mergin service](https://public.cloudmergin.com/) and using 
it in [Input app](https://inputapp.io/) to collect data in field.

## Registration and signing up to the Mergin service

### Software needed
To start with, you will need to install the following software applications:
- [QGIS](www.qgis.org) - for your PC/laptop: [download](https://qgis.org/en/site/forusers/download.html) and install QGIS if you have not already done so
- [Input app](https://inputapp.io/) - for your mobile table: you can download the app from Google Play Store or Apple's App Store

<AppDownload></AppDownload>

In addition, you will need to register with the [Mergin](https://public.cloudmergin.com/) service. The [Mergin](https://public.cloudmergin.com/) service allows you to transfer data between your PC/laptop and mobile/table via the cloud. Follow the [registration help page](https://help.cloudmergin.com/registration.html) to sign up to the service.

### Configuring QGIS project

To be able to survey data, we need to set up a project in QGIS. Usually, you will need some data for your background layer (so that you can locate yourself!). In addition, you need to set up a table (or layer), to store your survey information.

For background data, we are going to use Open Street Map. For survey table, we need to decide on a form structure and the type of feature you want to survey (e.g. point of interest, tracks or parcel of land). In this case, we want to survey potholes. Also, it would be good to attach some notes for each pothole, take a photo of it and add a date for survey. The GIS format best suited to store spatial information, is Geopackage.

Let's start by opening QGIS and add the above layers to our project. To simplify things, we can create a folder on Desktop (referred to in this tutorial as **data collection** folder) and store everything there.

Open QGIS from your PC/laptop. From the **Browser panel** (usually located on the top left side), expand **XYZ Tiles** and double-click on **OpenStreetMap** to add it to QGIS:
![QGIS](src/tutorials/mergin-tour/input_basic_qgis.png)

![Browser panel in QGIS](src/tutorials/mergin-tour/input_basic_qgis_browser.png)

You should see the OSM layer:

![Adding OSM XYZ layer](src/tutorials/mergin-tour/input_basic_qgis_osm.png)

Save your project as **pothole survey** in the **data collection** folder.

To create a survey layer, in QGIS, from the main menu select **Layer > Create Layer > New Geopackage Layer ...**. Note that Geopackage is a file based database where you can store multiple tables (spatial or non-spatial). A new window will appear:

![Creating a geodatabase](src/tutorials/mergin-tour/input_basic_gpkg-1.png)

For **Database** click on **...** and select the **data collection** folder on your Desktop and then type **survey-db.gpkg** for the name of your database.

For **Table name**, type **Potholes**.

For **Geometry type**, select **Point**.

For Coordinate Reference System (CRS), click on the icon to the right of **EPSG:4326 - WGS84**. A new window will appear. Under **Filter** section on the top of the window, type: **3857** and under **Predefined Coordinate Reference Systems**, select **WGS 84 / Pseudo-Mercator EPSG:3857**. Then click OK.

![Assigning CRS](src/tutorials/mergin-tour/input_basic_gpkg-2.png)

We can now create the column headers for our table under **New Field** section. For this form, we want to create the following columns to store data: **Date, Notes, Photo**

For **Name**, type **Date**

For **Type**, select **Date**

Click on **Add to Field lists** to add your column.

Repeat the same process for **Notes** and **Photos** columns, **but** make sure to change the **Type** for those columns to **Text**. At this stage, you should see an image similar to the one below:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_gpkg-3.png)

Go ahead and click OK to create the layer and add it to QGIS.

### Styling layers and setting up forms

The default style applied to **Potholes** layer is not very visible probably. To change it:

In the **Layer Panels** right-click on **Potholes** layer and select **Properties**. A new window will appear. From the left panel, select **Symbology**. Try to change the style to something shown in the image below:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_style.png)

Click on **Apply**.

We can also change the way user fills in the form. By default, you have to type in the values. But by using different **widgets**, we can simplify filling the form in the field.

In the **Properties** window, from the left panel, select **Attribute forms**.

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_forms.png)

We are going to change the **Widget Type** for each of the **Fields**.

**fid** is an auto-increment field and we can keep it hidden from users. So, highlight the **fid** field under **Field** section and then from the **Widget Type** select **Hidden**

For **Data**, it should have automatically selected the correct widget type:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_widget-1.png)

For **Notes**, you can also leave the **Widget Type** as **Text Edit**.

For **Photos**, we need to change the **Widget Type** to **Attachment**. Also make sure to select the option for **Relative paths**. This will allow us to attach photos using mobile camera or gallery folder to the pothole point.

**Tip**: You can scroll further down and under **Integrated Document Viewer** and select **Type** as **Image**. This will show the image in QGIS forms too.

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_widget-2.png)

Project set up is completed and we can save the project. Read further to transfer the data to your mobile device.

## Transferring data from PC to mobile/tablet using the Mergin service

In this section, we will transfer the project and associated data set up in the previous section to the mobile device using the [Mergin service](https://public.cloudmergin.com/).

### Transferring data to mobile devices

You have 2 options to transfer your data to the mobile through the Mergin service: through website or [through Mergin plugin in QGIS](src/old/components/plugin/README.md). In this tutorial we are going to use the Mergin plugin from within QGIS.

In QGIS, from the main menu, select **Plugins > Manage and Install Plugins ...**. A new window will appear. From the left panel, select **All** and then in the search section (on the top) search for **Mergin**. Select the plugin from the list and click on **Install plugin**. After installation, you need to **restart your QGIS**.

After the restart, you should be able to see the Mergin icon in your **Browser Panel**:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_mergin-1.png)

In the **Browser Panel**, right click on the **Mergin** and select **Configure**. Type in your username (or email address) and password that you have registered with the Mergin service.

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_mergin-2.png)

Click on **Test Connection** and you should see a green OK.

If you have selected to **Save credentials** (so you do not need to type in the username and password again) and you have not configured QGIS password manager, you will be prompted to set a password for your QGIS password manager.

After clicking OK, you should see a list of folders on your Mergin connection in your browser panel:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_mergin-3.png)

We can know upload the data:

Right click on the **Mergin** and select **Create new project**. A new window will appear:

For **Project name** type **Potholes survey**

Select **Initialize from local drive**

Click on ... and and select **data collection** folder

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_mergin-4.png)

Once click OK, the project will be created and content of the **data collection** folder will be uploaded there.

The project is now ready to be downloaded on your mobile device, so that you can start the survey.

## Collecting data using Input app

In this section, we will download the project uploaded to Mergin, to our mobile device and start collecting data using the [Input app](https://inputapp.io).

The project can now be accessed from the Input app. Open your Input app and for the first time you should see a screen similar to the image below:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-1.png)

To log in to the Mergin service, you can select **My projects** or the green and white icon on the top right.

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-2.png)

Type your Mergin username (or email address) and password and then select **Sign in**.

Once signed in, select **My projects** and you will see **Potholes survey** project in the lists

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-3.png)

Select the download icon on the right side of **Potholes survey** to download your project on the phone and make it ready for survey.

After downloading is completed, select **Home** and you should be able to see **Potholes survey**.

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-4.png)

Select **Potholes survey** and it will open the map:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-5.png)

To record a feature, select **Record** button and the pointer changes to a cross-hair.

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-6.png)

By default, the cross-hair centres to your location (the orange point) on the map. You can move the map and adjust the location. To recentre the map to your location, you can select **GPS** button. Once you are happy with the location, you can select **Add point** and the form for your point will appear:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-7.png)

Fill in the form and press **Save**. You should see the map with the newly captured pothole:

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-8.png)

Read further to synchronise your data back to the PC and visualise them in QGIS.

## Synchronising data

In this section, we will synchronise the data collected to Mergin. This will allow us to see the collected data on the PC using QGIS.

The data you have captured on your phone can be synchronised through the Mergin service.

In Input app, select **Projects** and then **My projects**. You should see a double arrow on the right side of the **Potholes survey**.

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_input-9.png)

Select the double arrow to sync your project. You can also open QGIS from your PC/laptop and synchronise changes back to your desktop:

In QGIS, from the **Browser Panel** under **Mergin > My projects** right-click on **Potholes survey** and select **Synchronize**

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_mergin-5.png)

After synchronising is completed, you should be able to see the point and its associated form on your QGIS.

![Sharing projects through Mergin](src/tutorials/mergin-tour/input_basic_mergin-6.png)