---
description: In the Configure forms section, you will find everything you need to set up attributes forms for spatial and non-spatial layers in your Mergin Maps project.
---

# Configure Forms Overview

Capturing field data includes recording some information about surveyed points, lines, polygons or non-spatial features by filling in attributes form. This section will guide you through various settings of attributes forms for spatial and non-spatial layers.

There are various widgets available to use in the attributes form depending on the field data type and preferred type of data input. <MainPlatformNameLink /> supports the use of the majority of <QGISHelp ver="latest" link="user_manual/working_with_vector/vector_properties.html#attributes-form-properties" text="QGIS widgets" />.

Do you prefer a video? Check out this tutorial on how to configure QGIS widgets for survey forms.
<YouTube id="jc4p1PpXj3k" title="Widgets for survey forms" />

Extra configuration of attribute forms can be done to make data collection easier and more consistent, such as:
- using [default values](../default-values/) to automatically record attribute's values
- setting [constraints](../constraints/) to define valid inputs for the attributes
- designing the [attributes forms layout](../form-layout/) so that the forms are easy to work with

In [Use Cases](../use-cases), you can find step-by-step guides to deal with specific scenarios, such as [opening files](../open-file/) from within the form, [using hyperlinks](../external-link/), [displaying instructions](../display-instructions/) in the form and much more.


## Setting up form widgets

Attributes forms can be configured using <QGISHelp ver="latest" link="user_manual/working_with_vector/vector_properties.html#edit-widgets" text="QGIS widget types" /> in the **Attributes Form** tab in the **Layer Properties**. Note that the widget has to be compatible with the field data type. 

Each data type has a default widget: for instance, text fields use *Text edit* widget by default and are filled in by manually typing the value, while date fields use *Date/Time* widget and the value is selected using a calendar pop-up.

![QGIS Layer Properties Attributes Form tab](./qgis-attributes-form.gif "QGIS Layer Properties Attributes Form tab")
