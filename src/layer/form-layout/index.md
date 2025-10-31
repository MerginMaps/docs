# Attributes Form Layout
[[toc]]

Collecting and editing data in the field can be more efficient with forms that are easy to navigate. QGIS offers a lot of options for improving the layout of your forms, such as using [tabs and groups](../tabs-and-groups/) to keep related fields together, displaying or hiding a group of fields based on [conditional visibility](../conditional-visibility/), or displaying tips and instructions in the forms using the [Text or HTML widget](../info-widgets/). The starting point for creating a form is [QGIS Drag and Drop Designer](#qgis-drag-and-drop-designer).


## QGIS Drag and Drop Designer
By default, the form is automatically generated and contains all the fields in the layer. However, you might want to change the order of the fields. Also, there may be some fields that do not need to be displayed during the survey, such as fields with [default values](../default-values) that are calculated from the geometry.

QGIS Drag and Drop designer is an easy tool for defining the form layouts:
1. Open your <MainPlatformNameLink /> project in QGIS
2. Right-click on a layer and select **Properties**
3. Navigate to the **Attributes form** tab. Here, switch to **Drag and Drop Designer**
4. Fields can be added and removed from the **Form Layout**. The order of the fields can be changed by simply dragging them higher or lower in the list.

   Only fields that are in the **Form layout** will appear in the form.

5. Click **OK** to confirm your changes.

![QGIS drag and drop form designer](./qgis-drag-n-drop.gif "QGIS drag and drop form designer")
   
## Spacer widget
<Badge text="since QGIS 3.30" type="tip"/>
The Spacer widget can be useful if you want to have some space between the fields in your form or add a horizontal line. 

It can be found in *Available Widgets* in the *Other Widgets* section when using the [Drag and Drop Designer](#qgis-drag-and-drop-designer).
![QGIS forms Spacer Widget](./qgis-form-spacer-widget.jpg "QGIS Spacer Widget")

When adding the spacer widget to the form, there is an option to check the **Draw horizontal line** option. Otherwise, a vertical space will be added to the form.
![QGIS Spacer Widget configuration](./qgis-configure-spacer-widget.jpg "QGIS Spacer Widget configuration")

And this is how the spacer widget looks like in the form in QGIS (left) and in the mobile app (right).
![Spacer widget in QGIS and mobile app form](./spacer-widget-forms.jpg "Spacer widget in QGIS and mobile app form")
