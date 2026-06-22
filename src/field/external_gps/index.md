---
description: External GPS receivers can be connected to your mobile device and used in the Mergin Maps mobile app to achieve higher GPS accuracy.

outline: deep
---

# External GPS

<!--- IMPORTANT: This permalink is referenced from Mergin Maps mobile app -->

[[toc]]

Connect external GPS receivers to your mobile device to achieve higher [GPS accuracy](../gps_accuracy/) of your survey with <MobileAppName />. 

There are several [extra position variables](../../layer/variables/#position-variables) that can be useful to record during the survey with external GPS, such as the GPS antenna height, GPS device name as well as metrics like horizontal, vertical or position dilution of precision (HDOP, VDOP, PDOP).

Note that external GPS devices usually return orthometric heights (ellipsoid with the geoid separation applied). The altitude and geoid separation in the [GPS info panel](../mobile-app-ui/#current-position-and-gps-info) in the <MobileAppNameShort /> is displayed as reported by the external GPS. 

**Before you start**:
- Follow the manufacturer's setup instructions. You should continue only when you are sure that the device is working and sending data.
- Make sure that your mobile device offers the functionality to pair with an external GPS device and that it communicates through a standard interface.

:::tip GPS and GNSS terminology
The term GPS, which stands for the Global Positioning System, is used in the <MobileAppNameShort /> and in this documentation in a broad sense as a synonym of the global navigation satellite systems (GNSS). We are aware that it is not exactly correct, but GPS is commonly used and understood in this context. 
If you have a device that can receive signals from other GNSS (such as BeiDou, Galileo, GLONASS), the <MobileAppNameShort /> can use them as well.
:::

## GPS antenna height
External GPS antenna is often used on a surveying pole. To obtain the correct ground elevation, it is necessary to subtract the height of the GPS sensor above the ground from the measured elevation.

The height of the GPS antenna can be set in the [**GPS settings**](../mobile-app-ui/#gps-settings) in the <MobileAppNameShort />. 

If GPS antenna height is set to a non-zero value, it is also displayed next to the GPS accuracy.

![GPS antenna height setup in Mergin Maps mobile app](./mobile-app-gps-antenna-height.jpg "GPS antenna height setup in Mergin Maps mobile app")

:::tip
GPS antenna height can be recorded during the survey by using the [extra position variable](../../layer/variables/#position-variables) `@position_gps_antenna_height` as a [default value](../../layer/default-values/).
:::

## Connecting external GPS
External GPS can be connected to the <MobileAppNameShort /> via [Bluetooth](#bluetooth-connection) or a [Network provider](#network-provider-connection). We recommend using one of these options as they provide more data, such as HDOP and fix quality (see [position variables](../../layer/variables/#position-variables)). Also, the <MobileAppNameShort /> will report which device is used and take care of reconnecting in case of lost connection.

If it is not possible to use these options, you can also set up a [Mock location](#mock-location). However, some of the data reported by GPS may not be available.

External GPS receivers report some additional GPS data that are displayed in the **GPS info** panel.

![GPS info from external GPS in Mergin Maps mobile app](./mobile-app-external-gps-info.jpg "GPS info from external GPS in Mergin Maps mobile app") 

### Bluetooth connection (Android only)
Connecting external GPS receivers via Bluetooth is available only on Android devices.

1. Connect the GPS receiver to your mobile device via Bluetooth

2. Open a project and navigate to the **Manage GPS receivers** option in [**Settings**](../mobile-app-ui/#settings)

3. Here, you can see the currently used receiver. Tap on the **Connect new receiver** button.
   ![Select GPS receiver](./mobile-app-connect-gps-receiver.webp "Select GPS receiver")

4. Select the **Bluetooth** connection type. 

   You might be asked to pair your device during this process.

   ![Connect to Bluetooth GPS device](./mobile-app-connecting-external-gps.webp "Connect to Bluetooth GPS device")

The <MobileAppNameShort /> will now use the external GPS receiver to display and record your position. In **GPS info**, you will see additional data as reported by the external GPS.


### Network provider connection
Connecting external GPS receivers using a network provider is available on both Android and iOS.

1. Open a project and navigate to the **Manage GPS receivers** option in [**Settings**](../mobile-app-ui/#settings)

2. Here, you can see the currently used receiver. Tap on the **Connect new receiver** button.
   ![Select GPS receiver](./mobile-app-connect-gps-receiver.webp "Select GPS receiver")

3. On Android, select the **Network (TCP, UDP)** connection type. On iOS, this is the only direct connection type.

   Fill in the network connection details (IP Address and Port). You can also use a receiver nickname.   
   
   ![Connect a GPS receiver using a network provider](./mobile-network-provider-connection.webp "Connect a GPS receiver using a network provider")

The <MobileAppNameShort /> will now use the external GPS receiver to display and record your position. In **GPS info**, you will see additional data as reported by the external GPS.

### Mock location
It is strongly recommended to use the direct connection via [Bluetooth (Android)](#bluetooth-connection-android-only) or [network provider (Android, iOS)](#network-provider-connection) in the <MobileAppNameShort />. Mock location should only be used if these options are not available.

#### Android mock location setup

:::warning Mock location and Internal (fused) GPS provider
When using an external GPS receiver on Android via mock location, we recommend using the *Internal (fused)* receiver option in [GPS Settings](../mobile-app-ui/#gps-settings) as this will show if mocked location is detected in the [GPS info](../mobile-app-ui/#current-position-and-gps-info) panel.
:::

External GPS can be connected and configured in Android to provide mock location using GPS apps (e.g. [Bluetooth GPS](https://play.google.com/store/apps/details?id=de.pilablu.gpsconnector) or apps from specific GPS manufacturers) as a source of GPS signal. The <MobileAppNameShort /> and other apps in your device will get the GPS position from the external GPS. 

:::tip NTRIP client and GPS corrections
GPS manufacturer's apps often provide a setup for a NTRIP client, through which you are able to receive GPS corrections and achieve centimetre level accuracy.
:::

To enable **Allow mock locations** in Android:
- enable **Developer options**, which are hidden by default:
  - On newer Android versions, go to **Android Settings** > **About phone** and scroll down to find the **Build number**. Tap the build number 7 times. A message appears with a count-down until you **become a developer**.
  - On older Android versions, the developer settings can be made visible under the **Android Settings** > **Applications** > **Development**.
- Once you have the developers option enabled, go to **System** > **Advanced** > **Developer options** > **Select mock location app** and select your GPS app.

The mock location will be used by the <MobileAppNameShort /> automatically as if received from the internal receiver.

#### iOS mock location setup

External GPS can be connected to your iOS device via Bluetooth. Depending on the GPS manufacturer, there may be a custom app, which then provides position to your iOS device. The <MobileAppNameShort /> sees this as an internal GPS receiver automatically, without additional configuration. The <MobileAppNameShort /> will report if an external GPS receiver is connected.

## External GPS troubleshooting
If you encounter issues with external GPS in the <MobileAppNameShort />, make sure that:
- your Bluetooth is turned on
- GPS is paired with your mobile device
- your GPS receiver is turned on, has battery and is sending data in NMEA format, which is readable by the <MobileAppNameShort />
- remove the device in the <MobileAppNameShort />, and add it again from the <MobileAppNameShort /> 

## List of known supported GPS devices
External GPS functionality depends on the manufacturer and on the specific model of your GPS device. These devices are currently known to work well:

| Manufacturer | Model | Android | iOS |
|---|---|---|---|
| <NoSpellcheck id="ArduSimple" />| RTK Calibrated Surveyor Kit<sup><a href="#link-9">9</a></sup> | yes | no |
| <NoSpellcheck id="ArduSimple" />| RTK Handheld Surveyor Kit<sup><a href="#link-9">9</a></sup>  | yes | no |
| <NoSpellcheck id="ArduSimple" />| RTK Portable Bluetooth Kit<sup><a href="#link-9">9</a></sup>  | yes | no |
| Bad Elf | GPS Pro | yes | yes (mock location) |
| Bad Elf | GPS Pro+ | yes | yes (mock location) |
| Bad Elf | GNSS Surveyor | yes | yes (mock location) |
| Bad Elf | Flex Mini (standard or extreme) | yes | yes (mock location) |
| Bad Elf | Flex (standard or extreme) | yes | yes (mock location) |
| Carlson | Carlson <NoSpellcheck id="Brx7" /><sup><a href="#link-1">1</a></sup> | yes (mock location) | unknown |
| Carlson | Carlson <NoSpellcheck id="xML2" /> <sup><a href="#link-1">1</a></sup>| yes (mock location) | unknown |
| Emlid | Emlid Reach RX<sup><a href="#link-2">2</a></sup> | yes | yes (mock location) |
| Emlid | Emlid Reach RS+<sup><a href="#link-2">2</a></sup> | yes | no |
| Emlid | Emlid Reach RS2/RS2+<sup><a href="#link-2">2</a></sup> | yes | no |
| Emlid | Emlid Reach RS3<sup><a href="#link-2">2</a></sup> | yes | no |
| Garmin | GLO 2 | yes | yes (mock location) |
| Geomax | <NoSpellcheck id="Zenith06" /><sup><a href="#link-8">8</a></sup>  | yes (mock location) | unknown |
| Geomax | <NoSpellcheck id="Zenith60" /><sup><a href="#link-8">8</a></sup>  | yes (mock location)  | unknown |
| Juniper Systems | Geode GNS3<sup><a href="#link-3">3</a></sup> | yes | yes (mock location) |
| Leica | Leica FLX100<sup><a href="#link-4">4</a></sup> | yes (mock location) | no |
| Leica | Leica FLX100 plus<sup><a href="#link-4">4</a></sup> | yes (mock location) | yes (mock location)<sup><a href="#link-**">**</a></sup>|
| Leica | Leica Zeno GG04plus<sup><a href="#link-4">4</a></sup> | yes (mock location) | yes (mock location)<sup><a href="#link-**">**</a></sup> |
| <NoSpellcheck id="marXact" /> | UNI-GR1| yes | no |
| <NoSpellcheck id="marXact" /> | UNI-GR2| yes | no |
| <NoSpellcheck id="proNIVO" /> | <NoSpellcheck id="PNR21" /><sup><a href="#link-6">6</a></sup> | yes (mock location)| no |
| <NoSpellcheck id="SingularXYZ" /> | <NoSpellcheck id="P1" /><sup><a href="#link-7">7</a></sup> | yes | unknown |
| Trimble | Trimble Catalyst<sup><a href="#link-5">5</a></sup> | yes (mock location) | unknown |
| Trimble | Trimble R1<sup><a href="#link-5">5</a></sup> | yes (mock location) | unknown |
| Trimble | Trimble R2<sup><a href="#link-5">5</a></sup> | yes (mock location) | unknown |


- <a id="link-1">1</a>: **Carlson <NoSpellcheck id="Brx7" />**,  **Carlson <NoSpellcheck id="xML2" />** - through [Carlson Layout](https://www.carlsonsw.com/product/carlson-layout) which will set a mock location in Android.
- <a id="link-2">2</a>: **Emlid Reach RX**, **Emlid Reach RS+**, **Emlid Reach RS2/RS2+**, **Emlid Reach RS3** - directly via Bluetooth connection, has an internal NTRIP client to receive corrections. Possible to set a mock location and connect the receiver via Bluetooth using [GPS Connector](https://play.google.com/store/apps/details?id=de.pilablu.gpsconnector) or WiFi using [Lebefure NTRIP Client](https://play.google.com/store/apps/details?id=com.lefebure.ntripclient).
- <a id="link-3">3</a>: **Geode GNS3** - through the *Geode Connect* app on [Android](https://play.google.com/store/apps/details?id=com.juniper.geode2a&hl=en_NZ&gl=US) or [iOS](https://apps.apple.com/us/app/geode-connect/id1446098695), which also acts as an NTRIP client and sends corrections to the device.
- <a id="link-4">4</a>: **Leica FLX100**, **Leica FLX100 plus**, **Leica Zeno GG04plus** - through the *Leica Zeno Connect* app on [Android](https://play.google.com/store/apps/details?id=com.leica.zenoconnect&hl=en&gl=US) which also acts as a NTRIP client and sends the corrections to the device. The app will set a mock location in Android. It is also possible to connect directly via Bluetooth (even multiple phones can be connected at once), but if no phone has Zeno app running, there will be no corrections available. 
   <a id="link-**">**</a> *Leica Zeno Connect* is also available on [iOS](https://apps.apple.com/us/app/zeno-connect/id1310344749). It is known to support **Leica FLX100 plus** and **Leica Zeno GG04plus**.  However, on iOS, the vertical accuracy information is not transferred to the <MobileAppName /> through *Leica Zeno Connect*. The <MobileAppNameShort />  will not display the correct value of the vertical accuracy.
- <a id="link-5">5</a>: **Trimble R1**, **Trimble R2**, **Trimble Catalyst** - through [*Trimble Mobile Manager* app](https://play.google.com/store/apps/details?id=com.trimble.trimblemobilemanager) which also acts as a NTRIP client and sends the corrections to the device. The app will set a mock location in Android.
- <a id="link-6">6</a>: **<NoSpellcheck id="proNIVO" /> <NoSpellcheck id="PNR21" />** - through *<NoSpellcheck id="Attenberger" /> Connector* app on [Android](https://play.google.com/store/apps/details?id=eu.apglos.attenbergerapp1&hl=en&gl=US).
- <a id="link-7">7</a>: **<NoSpellcheck id="SingularXYZ" /> <NoSpellcheck id="P1" />** - the device uses a SIM Card that can be configured for NTRIP. It can be connected to the <MobileAppNameShort /> via Bluetooth (without using a mock location).
- <a id="link-8">8</a>: **Geomax Zenith06, Zenith60** - through *Geomax X-PAD* app on Android, using a GNSS Mock licence from Geomax and the *Mock GNSS* option in the app.
- <a id="link-9">9</a>: **<NoSpellcheck id="ArduSimple kits" />** - through [*GNSS Master* app](https://play.google.com/store/apps/details?id=com.gnssmaster&hl=en&gl=US&pli=1) which also acts as a NTRIP client and sends the corrections to the device. Detailed steps can be found in the tutorial [How to connect <NoSpellcheck id="ArduSimple" /> kit to Mergin Maps for centimetre-accurate mapping](https://www.ardusimple.com/how-to-connect-ardusimple-kit-to-mergin-maps-for-centimeter-accuracte-mapping/).

**Did you use a GPS that is not in this list?** <GitHubRepo id="MerginMaps/docs/issues/124" desc="Share your experiences with us!" />
