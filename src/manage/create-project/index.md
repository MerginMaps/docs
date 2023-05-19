# How to Create a New Project
[[toc]]

:::warning
This content may differ from what you encounter when working with <MainPlatformNameLink />. It will be updated soon to include recent changes in <MainPlatformNameLink />, <MobileAppName /> and <QGISPluginName />.
:::

There are several methods of creating a new <MainPlatformName /> project:
- [<MobileAppName /> ](./index.md#create-a-project-in-mergin-maps-input) offers the quickest (albeit limited) way of creating a <MainPlatformName /> project.
- If you want to take full advantage of <MainPlatformNameLink />, use [QGIS](./index.md#create-a-project-in-qgis) to prepare new projects.
- You can also use [merginmaps.com](./index.md#create-a-project-through-merginmaps-com), especially if your project files are already fully prepared and only need uploading.

If you want to make a copy of your projects or the ones shared with you, you can clone them in [QGIS](./index.md#clone-an-existing-project-in-qgis) or [merginmaps.com](./index.md#clone-an-existing-project-through-merginmaps-com).

## Create a project in Mergin Maps Input
::: tip
[Capturing Your First Field Data](../../tutorials/capturing-first-data/index.md) tutorial will show you how to create a new project and capture field data in <MobileAppName />.
:::

1. Open <MobileAppName /> on your mobile device
2. Go to the **Home** tab of the **Projects** screen and press **Create project**
   ![Create project in Mergin Maps Input](../../tutorials/capturing-first-data/merginmaps-mobile-home-tab-of-projects-screen.jpg "Create project in Mergin Maps Input")

3. Give the project a name 
   ![Mergin Maps Input new project name](../../tutorials/capturing-first-data/merginmaps-mobile-naming-new-project.jpg "Mergin Maps Input new project name")

4. Press **Create project**
   ![Mergin Maps Input create project](../../tutorials/capturing-first-data/merginmaps-mobile-create-new-project.jpg "Mergin Maps Input create project")
   
Your new project should now be visible on the **Home** tab of the **Projects** screen
![Mergin Maps Input home projects](../../tutorials/capturing-first-data/merginmaps-mobile-new-project-listed.jpg "Mergin Maps Input home projects")

## Create a project in QGIS
::: tip
[Creating a Project in QGIS](../../tutorials/creating-a-project-in-qgis/index.md) tutorial will show you how to create a new project in QGIS, add layers, configure attributes forms and save changes to <MainPlatformNameLink />. 
:::

To work with <MainPlatformName /> projects in QGIS, you will need to [install the <QGISPluginName />](../../setup/install-mergin-maps-plugin-for-qgis/index.md) first.

1. Open a blank or an existing project in QGIS.
2. Click on **Create Mergin Maps Project** from the toolbar.
   ![Create project icon in Mergin Maps plugin for QGIS](../../tutorials/creating-a-project-in-qgis/qgis-create-mergin-project.jpg "Create project icon in Mergin Maps plugin for QGIS")

3. There are three options available (the last two options are available only if you have an existing project open):
   ![Create Mergin Maps project options](./mergin_plugin_project_wizard_2.jpg "Create Mergin Maps project options")

   - **New basic QGIS project**. If you are new to QGIS, this is a good starting point. The new basic QGIS project will contain a survey layer (a point layer) and a background map (OpenStreetMap).

   - **Package current QGIS project**. This option will create a copy of your project and all the files in a single folder. There are three options for handling layers: package, keep as is (the layer will be referenced as is in the new project) or ignore (the layer will not be included in the new project). For more details, see [<MainPlatformName /> project](../project/#packaging-qgis-project).
     ![New Mergin Maps project Package current QGIS project](./mergin_plugin_project_wizard_3.jpg "New Mergin Maps project - Package current QGIS project")

   - **Use current QGIS project as is**. This is for cases when you already have a stand-alone folder with your project packaged.

4. Name the project and select a path where your project folder and associated files will be generated. 
   ![New Mergin Maps project name and folder](./mergin_plugin_project_wizard_4.jpg "New Mergin Maps project name and folder")
   
   :::danger WARNING
   Your project should be saved on a local drive. Using shared network drives and cloud storage (such as OneDrive or Google Drive) is **not supported**.
   :::

The new <MainPlatformName /> project will be created locally on your computer and also on the <MainPlatformNameLink /> server. 

### Clone an existing project in QGIS
Using <QGISPluginName />, you can make a copy of one of your existing projects or the ones shared with you. 

1. Navigate to **Mergin Maps** in the **Browser panel**
2. Find the project you want to clone, right-click on it and select **Clone**
   ![Clone public Mergin Maps project in QGIS](./plugin-clone.jpg "Clone public Mergin Maps project in QGIS")

3. Select the **Owner** from the drop-down menu and type your new **Project Name**.
   ![Clone Mergin Maps project in QGIS](./clone.jpg "Clone Mergin Maps project in QGIS")

## Create a project through merginmaps.com
1. Navigate to <AppDomainNameLink /> and sign in.
2. To create a new project, click on **Create** in the **Projects** section:
   ![Create Mergin Maps project through web](./web-create-project.jpg "Create Mergin Maps project through web")

3. Give the project a **name**
   - in **Template project**, you can select a template from the list
   - **Project owner** is you (your username) or your organisation
   - the project is private by default, you can use the checkbox to make it **Public**
   ![Create Mergin Maps project through web](./web-create-project-2.jpg "Create Mergin Maps project through web")

   After creating a new project, you will be directed to the project page. 

4. Add files to your project:
   - Click on **Drag & drop here to click and select file(s) to upload**
   - Select files or folders to upload
   - Once the files and folders are selected, press **Update** in the **Data Sync** window.
   ![Upload files to Mergin Maps project](./web-project-upload.jpg "Upload files to Mergin Maps project")

### Clone an existing project through merginmaps.com
You can also make a copy of your own existing project, a project that is shared with you or a public project in **Explore**.

1. Find the project you want to clone and click on it. 
   ![Explore public Mergin Maps projects](./web-explore-project.jpg "Explore public Mergin Maps projects")
   
   If a project was shared with you via link, open the project link in your web browser.
   
2. Click on the **Clone** button
   ![Clone Mergin Maps project through web](./web-clone-project.jpg "Clone Mergin Maps project through web")
   
3. In the new window, you can change the project name and set the project owner
   ![Clone Mergin Maps project through web](./web-clone-project-2.jpg "Clone Mergin Maps project through web")
