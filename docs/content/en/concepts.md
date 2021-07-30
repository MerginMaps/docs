---
category: ''
title: Concepts
position: 3
---

## Main Components 

The ecosystem consist of 3 components:

 - [QGIS & Mergin Plugin](https://plugins.qgis.org/plugins/Mergin/) > Powerful GIS Desktop application 
 - [Mergin Maps Cloud](https://public.cloudmergin.com) > SaaS Cloud Service based on Open Source Mergin CE
 - [Mergin Maps Input](https://inputapp.io) > Input App for iOS and Android

Typically

 - You register your [user](#users-and-organizations)
 - (Optionally) you register your [organization](#users-and-organizations)   
 - You prepare [project](#project) in QGIS Desktop 
 - Share with your team through Mergin SaaS service.
 - Download the project in Input App and use in the field

## Project

Mergin Maps Project is technically content of a single folder on your local disk 
containing QGIS Project (`.qgz`) with the required resources (e.g. photos, GeoPackages, shapefiles).

## Users and Organizations 

Each person should register user on the [public.cloudmergin.com](https://public.cloudmergin.com).
[Organisations](web/working-with-organisations) can be used for easier management of users and projects within your team.

## Permissions 

There are several levels of permissions to control access to your projects in Mergin.

### Public and private projects

A private project is a project that only you and those who you choose to share the project with will have access to the files, history and settings. A public project is a project that everyone (including those who are not registered with Mergin) can view the data and project history. They cannot contribute to your public project unless you have shared the project with them with write access (see below for permissions)

### Project permissions

There are three levels of permissions when you [share a project](sharing-project) with other Mergin users:

- **Read**: users will be able to view the project data and [history](project-details)
- **Write**: in addition to the **Read** access, users can edit data (adding/removing/updating files and features). This is the most appropriate permission level you should assign to those who you want to contribute to your projects
- **Owner**: in addition to the **Write** access, users with this level of access can delete the project or transfer it to another user or organisation

### Organisation permissions

Similar to project permissions, you can assign permissions to the members of your organisation. By default, all members will be assigned **Read** access. You can change their global permissions under [members' settings](working-with-organisations) or the project level (see above section).

For members in an organisation, you have 4 levels of permissions:

- **Read**: users will be able to view the list of project, projects data and [history](project-details)
- **Write**: in addition to the **Read** access, users can edit data of projects (adding/removing/updating files and features).
- **Admin**: in addition to the **Write** access, users with this level of access can delete the project or transfer it to another user or organisation. Admins can also create new projects, and add/remove organisation members
- **Owner**:  Similar to the **Admin** permission and in addition access to invoicing and subscription settings. 

