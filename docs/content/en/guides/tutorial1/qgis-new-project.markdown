---
category: 'Guides'
title: Registration and signing up to the Mergin service
---

In this post, we will walk you through basic steps to set up a survey project in QGIS desktop, transfer it through the [Mergin service](https://public.cloudmergin.com/) and using it in [Input app](https://inputapp.io/) to collect data in field.


# Software needed
To start with, you will need to install the following software applications:
- [QGIS](www.qgis.org) - for your PC/laptop: [download](https://qgis.org/en/site/forusers/download.html) and install QGIS if you have not already done so

- [Input app](https://inputapp.io/) - for your mobile table: you can download the app from [Google Play Store](https://play.google.com/store/apps/details?id=uk.co.lutraconsulting&ah=GSqwibzO2n63iMlCjHmMuBk89t4&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1) or [Apple's App Store](https://apps.apple.com/us/app/input/id1478603559?ls=1)

In addition, you will need to register with the [Mergin](https://public.cloudmergin.com/) service. The [Mergin](https://public.cloudmergin.com/) service allows you to transfer data between your PC/laptop and mobile/table via the cloud. Follow the [registration help page](https://help.cloudmergin.com/registration.html) to sign up to the service.

# Configuring QGIS project

To be able to survey data, we need to set up a project in QGIS. Usually, you will need some data for your background layer (so that you can locate yourself!). In addition, you need to set up a table (or layer), to store your survey information.

For background data, we are going to use Open Street Map. For survey table, we need to decide on a form structure and the type of feature you want to survey (e.g. point of interest, tracks or parcel of land). In this case, we want to survey potholes. Also, it would be good to attach some notes for each pothole, take a photo of it and add a date for survey. The GIS format best suited to store spatial information, is Geopackage.

Let's start by opening QGIS and add the above layers to our project. To simplify things, we can create a folder on Desktop (referred to in this tutorial as **data collection** folder) and store everything there.

Open QGIS from your PC/laptop. From the **Browser panel** (usually located on the top left side), expand **XYZ Tiles** and double-click on **OpenStreetMap** to add it to QGIS:
![QGIS](/images/tutorials/input_basic_qgis.png)

![Browser panel in QGIS](/images/tutorials/input_basic_qgis_browser.png)

You should see the OSM layer:

![Adding OSM XYZ layer](/images/tutorials/input_basic_qgis_osm.png)

Save your project as **pothole survey** in the **data collection** folder.

To create a survey layer, in QGIS, from the main menu select **Layer > Create Layer > New Geopackage Layer ...**. Note that Geopackage is a file based database where you can store multiple tables (spatial or non-spatial). A new window will appear:

![Creating a geodatabase](/images/tutorials/input_basic_gpkg-1.png)

For **Database** click on **...** and select the **data collection** folder on your Desktop and then type **survey-db.gpkg** for the name of your database.

For **Table name**, type **Potholes**.

For **Geometry type**, select **Point**.

For Coordinate Reference System (CRS), click on the icon to the right of **EPSG:4326 - WGS84**. A new window will appear. Under **Filter** section on the top of the window, type: **3857** and under **Predefined Coordinate Reference Systems**, select **WGS 84 / Pseudo-Mercator EPSG:3857**. Then click OK.

![Assigning CRS](/images/tutorials/input_basic_gpkg-2.png)

We can now create the column headers for our table under **New Field** section. For this form, we want to create the following columns to store data: **Date, Notes, Photo**

For **Name**, type **Date**

For **Type**, select **Date**

Click on **Add to Field lists** to add your column.

Repeat the same process for **Notes** and **Photos** columns, **but** make sure to change the **Type** for those columns to **Text**. At this stage, you should see an image similar to the one below:

![Sharing projects through Mergin](/images/tutorials/input_basic_gpkg-3.png)

Go ahead and click OK to create the layer and add it to QGIS.

# Styling layers and setting up forms

The default style applied to **Potholes** layer is not very visible probably. To change it:

In the **Layer Panels** right-click on **Potholes** layer and select **Properties**. A new window will appear. From the left panel, select **Symbology**. Try to change the style to something shown in the image below:

![Sharing projects through Mergin](/images/tutorials/input_basic_style.png)

Click on **Apply**.

We can also change the way user fills in the form. By default, you have to type in the values. But by using different **widgets**, we can simplify filling the form in the field.

In the **Properties** window, from the left panel, select **Attribute forms**.

![Sharing projects through Mergin](/images/tutorials/input_basic_forms.png)

We are going to change the **Widget Type** for each of the **Fields**.

**fid** is an auto-increment field and we can keep it hidden from users. So, highlight the **fid** field under **Field** section and then from the **Widget Type** select **Hidden**

For **Data**, it should have automatically selected the correct widget type:

![Sharing projects through Mergin](/images/tutorials/input_basic_widget-1.png)

For **Notes**, you can also leave the **Widget Type** as **Text Edit**.

For **Photos**, we need to change the **Widget Type** to **Attachment**. Also make sure to select the option for **Relative paths**. This will allow us to attach photos using mobile camera or gallery folder to the pothole point.

**Tip**: You can scroll further down and under **Integrated Document Viewer** and select **Type** as **Image**. This will show the image in QGIS forms too.

![Sharing projects through Mergin](/images/tutorials/input_basic_widget-2.png)

Project set up is completed and we can save the project. Read further to [transfer the data to your mobile device](./data-transfer.html).
