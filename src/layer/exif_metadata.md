# Exif Metadata
[[toc]]

<MobileAppName /> comes with predefined default value expression functions which can be used to read the EXIF metadata of an image captured by the camera of your mobile device.

## Supported EXIF functions
Following functions are supported in <MobileAppName />:
- `read_exif('<ABSOLUTE_PATH_TO_IMAGE>', '<EXIF_TAG_STRING>')` 
    - returning string
- `read_exif_img_direction('<ABSOLUTE_PATH_TO_IMAGE>')` 
    - returning number
- `read_exif('<ABSOLUTE_PATH_TO_IMAGE>', 'GPSImgDirection')`
    - returning string (number fraction)
- `read_exif_latitude('<ABSOLUTE_PATH_TO_IMAGE>')` 
    - returning decimal number
- `read_exif('<ABSOLUTE_PATH_TO_IMAGE>', 'GPSLatitude')`
    - returning string
- `read_exif_longitude('<ABSOLUTE_PATH_TO_IMAGE>')` 
    - returning decimal number
- `read_exif(@project_home + '/' + "photo", 'GPSLongitude')`
    - returning string
- `read_exif(@project_home + '/' + "photo", 'GPSDateStamp')`
    - returning string     
        
::: tip
Explore <MerginMapsProject id="documentation/exif-metadata" /> to see the fields setup.
:::
    
## How to use EXIF metadata
To use EXIF metada, we have to set a parameter `<ABSOLUTE_PATH_TO_IMAGE>`. To get the absolute path to an image, we can use the value of the field used to store photos (here: `photo`). This is a [text field with attachment widget](./settingup_forms_photo/).
 
The value from the `photo` field can be used to get as a parameter for <MobileAppName />'s EXIF functions. Here we will use it to get the direction of the image when captured (`GPSImgDirection`) as follows:
`read_exif(@project_home + '/' + "photo", 'GPSImgDirection')`.

When taking photos with your mobile device, EXIF metadata are stored in the photo file. If you take a photo using <MobileAppName />, EXIF metadata can be used to automatically filled out fields in the form. 

![photos](./gps_exif_metadata.png)

:::warning
Make sure that <MobileAppName /> and your camera app can access the location of your device. 
:::

## Location tags
To use this functionality, **location tags have to be allowed** in the camera settings.

### Allowing location tags on Android
Open Camera app -> Camera settings -> Location tags. 
![photos](./android_geo_tags.jpg)

### Allowing location tags on iOS
Open Settings -> Privacy -> Location Services -> Camera (app).
![photos](./ios_geo_tags.png)
