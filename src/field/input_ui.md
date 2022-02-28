# Mergin Maps Input Interface
[[toc]]

Below is a description of various items within the user interface. 

The map can be moved by dragging around and zoomed in/out by pinching open/close.

There are four tabs available in the bottom navigation panel: [Projects](#projects), [GPS](#gps), [Record](#record) and [More](#zoom-to-project-browse-features-map-themes-settings).

![Input user interface](./input_gui.png)

## Projects
**Projects** tab is where you can create a new project, upload it to the cloud, synchronise changes, or remove a local project from your device.
- **Home**: a list of all downloaded projects on your device. Only downloaded projects can be opened in the app.
- **My projects**: projects created by you and hosted on the Mergin service
- **Shared with me**: projects on the Mergin service shared with you by other users
- **Explore**: a full list of public projects by others on the Mergin service

![Projects screen](./input-projects.png) 

### Mergin account
To sign in to Mergin or to access your Mergin profile information, select the icon on the top right of the **Projects** screen.

![Sign in](./input-account.png)

## GPS
Tapping the GPS button centres the map to your current position. 

Pressing and holding GPS icon turns on / turns off the GPS auto-centre mode.

GPS signal colour on the map denotes the accuracy threshold set by user within the Input in [GPS settings](#gps-settings). GPS accuracy is displayed at the bottom of the map. 

![GPS](./input-gps.png) 

Tapping the GPS accuracy tab opens the GPS info panel:
- **Source**: internal GPS of the mobile device or external GPS receiver connected via Bluetooth
- **Longitude, Latitude**: current position
- **X, Y**: current position in project's coordinate reference system
- **Horizontal** and **Vertical accuracy** of the GPS position
- **Altitude**
- **Satellites (in use/view)**: number of satellites 
- **Speed**
- **Last fix**: time of the last received GPS position

![GPS info](./input-gps-info.png) 

## Record
**Record tab** is where you can [survey new features](./input_features/).

The active layer currently used for survey is displayed above the bottom navigation panel. Tapping on it opens a list of all editable layers in the project.

![Record](./input-record.png) 

![Active layer](./input-active-layer.png) 

## Zoom to project, Browse features, Map themes, Settings
**More** tab contains a list of additional options, such as:
- **Zoom to project**: a shortcut to zoom to the extent of all visible layers within the project
- **Browse features**: browse features and search in the project's layers
- **Map themes**: a list of map themes [set up in a QGIS project](../gis/setup_themes/)
- **Settings**: GPS and recording settings along with references to help, privacy policy, terms of service and diagnostic log

![More](./input-settings.png)

### GPS settings
- **Follow GPS with map**: if toggled on, the map will pan so the GPS point can be seen on the map
- **GPS accuracy**: shows the current GPS accuracy based on the *Accuracy threshold* using traffic light system. Green stands for GPS accuracy within the threshold, orange for GPS accuracy outside the threshold and red for no GPS position fix available.
- **Accuracy threshold**: value used to display GPS accuracy colours
- **Select GPS receiver**: option to switch between internal GPS and external GPS receiver connected via Bluetooth. See [External GPS](./external_gps/) for detailed steps.

![Settings](./input-settings2.png)

### Recording settings
- **Line rec. interval** the interval at which the GPS location is used as vertices when streaming GPS position for capturing lines
- **Reuse last value option** if used, last entered values of selected attributes will be automatically filled in when creating a new feature.
