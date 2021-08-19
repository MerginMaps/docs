# Capturing Photos

When surveying, you might want to take a photo from your camera or attach an existing photo from the device gallery to your survey feature.

### QGIS

To set up a photo widget:

  - Download and open <MerginMapsProject id="documentation/form_setup" /> in QGIS
  - From the layer panel, right-click on **survey** layer and select **Properties**
  - In the new window, select **Attributes form**

![photos](./qgis_forms_photo.png)

  - Select **photo** field under the right column (**Available Widgets**)
  - Under the **Widget Display**, from **Widget Type** section:
    - From the drop-down menu, select **Attachment**
    - Under **Path**, select **Relative paths** and **Relative to project path**

Ensure to save and synchronise your project.

### Input

To use the photo widget in the form from Input:

- Open Input on your device and from **Projects** > **Explore** download **documentation\form_setup**
- Open the project
- Select **Record** and add a point
- The form will appear and under **photo** field
  - Select **Take a photo** to use your camera app for taking a photos
  - Select **Add from gallery** to attach an existing photo from your device

![photos](./input_forms_photo.png)
