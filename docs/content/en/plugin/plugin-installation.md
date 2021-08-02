---
category: 'QGIS Desktop & Plugin'
title: Installing and configuring plugin
menuTitle: Install and configure
permalink: /plugin-installation
position: 601
---

## Installation

To install Mergin plugin in QGIS:

1. Open QGIS
2. From the main menu, Plugins > Manage and Install Plugins ...
3. A new window will appear:
	1. In the **Search** section, type: Mergin  
	2. Select Mergin in the filtered section and then click **Install Plugin**
4. Once installed, you should see Mergin in your QGIS Browser panel (note that if you are using QGIS 3.12 or earlier you will need to restart your QGIS for Mergin to appear in your browser panel):
	![](images/qgis-plugin/installation.png)
<alert type="warning">
if you cannot see your Browser panel, you can enable it by going to the QGIS main menu > View > Panels > Browser
</alert>
5. A new toolbar should also appear in your QGIS toolbars:

![](images/qgis-plugin/plugin_toolbar.png)

## Configuration

After installation, you need to configure the plugin by entering your Mergin username and password:

1. From the Mergin toolbar, click on **Configure**
![](images/qgis-plugin/configure-toolbar.png)
2. In the new window, type in your username (or email address used for signing up with Mergin) and password
![](images/qgis-plugin/configure.png)

You can select to store the password. For that you need to have already configured your [QGIS password manager](https://docs.qgis.org/3.16/en/docs/user_manual/auth_system/auth_overview.html?#master-password)
