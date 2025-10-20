# External GPS

<!--- IMPORTANT: This permalink is referenced from Mergin Maps mobile app -->

[[toc]]

External GPS receivers can be connected to your mobile device via Bluetooth and used in <MobileAppName /> to achieve higher [GPS accuracy](../gps_accuracy/). 

There are several [extra position variables](../../layer/extra-variables/#extra-position-variables) that can be useful to record when doing the survey with external GPS, such as the GPS antenna height, GPS device name as well as metrics like horizontal, vertical or position dilution of precision (HDOP, VDOP, PDOP).

Note that external GPS devices usually return orthometric heights (ellipsoid with the geoid separation applied).

**Before you start**:
- Set up your device according to the instructions of its manufacturer. You should continue only when you are sure that the device is working and sending data.
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
GPS antenna height can be recorded during the survey by using the [extra position variable](../../layer/extra-variables/#extra-position-variables) `@position_gps_antenna_height` as a [default value](../../layer/default-values/).
:::

## External GPS on Android
In Android, there are two ways how to use an external GPS device in the <MobileAppNameShort /> :
- directly through the app as an external receiver
- connecting GPS receiver to your mobile device using an app that will provide mock location

It is strongly recommended to use the direct connection in the <MobileAppNameShort /> . It is easier, quicker, provides more data, such as HDOP and fix quality. The app will report which device is used and take care of reconnecting in case of lost connection. Using mock location should be used only when it is not possible to connect the GPS receiver directly via the <MobileAppNameShort /> .

### How to connect external GPS receiver in Android via Mergin Maps mobile app (recommended)
1. Connect the GPS receiver to your mobile device via Bluetooth

2. Open the <MobileAppNameShort /> and navigate to **Settings**
   ![Navigate to settings in Mergin Maps mobile app](./mobile-app-settings.jpg "Navigate to settings in Mergin Maps mobile app")

3. Tap on the **Manage GPS receivers** option. Here, you can see the currently used receiver.

   Tap on the **Connect new receiver** button.
   ![Select GPS receiver](./mobile-app-connect-gps-receiver.jpg "Select GPS receiver")

4. Choose your GPS receiver from the list of Bluetooth devices. 

   You might be asked to pair your device during this process.

   ![Connect to bluetooth GPS device](./mobile-app-connecting-external-gps.jpg "Connect to bluetooth GPS device")

5. The <MobileAppNameShort /> will now use the external GPS receiver to display and record your position.
   
   In **GPS info**, you will see additional data as reported by the external GPS.
   
   ![GPS info from external GPS in Mergin Maps mobile app](./mobile-app-external-gps-info.jpg "GPS info from external GPS in Mergin Maps mobile app") 

### How to connect external GPS receiver in Android via mock location
:::warning
Mock location should be only used if you are unable to connect the external GPS directly in the <MobileAppNameShort /> .
:::

External GPS can be connected and configured in Android to provide mock location using GPS apps (e.g. [Bluetooth GPS](https://play.google.com/store/apps/details?id=de.pilablu.gpsconnector) or apps from specific GPS manufacturers) as a source of GPS signal. the <MobileAppNameShort /> and other apps in your device will get the GPS position from the external GPS. 

:::tip
GPS manufacturer's apps often provide a setup for a NTRIP client, through which you are able to receive GPS corrections and achieve centimetre level accuracy.
:::

To enable **Allow mock locations** in Android:
- enable **Developer options**, which are hidden by default:
  - On newer Android versions, go to **Android Settings** > **About phone** and scroll down to find the **Build number**. Tap the build number 7 times. A message appears with a count-down until you **become a developer**.
  - On older Android versions, the developer settings can be made visible under the **Android Settings** > **Applications** > **Development**.
- Once you have the developers option enabled, go to **System** > **Advanced** > **Developer options** > **Select mock location app** and select your GPS app.

The mock location will be used by the <MobileAppNameShort /> automatically as if received from the internal receiver.

## External GPS on iOS

Direct connection via the <MobileAppNameShort /> is not possible on iOS devices. 

External GPS can be connected to your iOS device via Bluetooth. Depending on the GPS manufacturer, there may be a custom app, which then provides position to your iOS device. The <MobileAppNameShort /> sees this as an internal GPS receiver automatically, without additional configuration.

![iOS GPS receiver](./external-gps-ios.jpg "iOS GPS receiver")

## External GPS troubleshooting
If you encounter issues with external GPS in the <MobileAppNameShort /> , make sure that:
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
| Bad Elf | GPS Pro | yes | yes |
| Bad Elf | GPS Pro+ | yes | yes |
| Bad Elf | GNSS Surveyor | yes | yes |
| Bad Elf | Flex Mini (standard or extreme) | yes | yes |
| Bad Elf | Flex (standard or extreme) | yes | yes |
| Carlson | Carlson <NoSpellcheck id="Brx7" /><sup><a href="#link-1">1</a></sup> | yes (mock location) | unknown |
| Carlson | Carlson <NoSpellcheck id="xML2" /> <sup><a href="#link-1">1</a></sup>| yes (mock location) | unknown |
| Emlid | Emlid Reach RX<sup><a href="#link-2">2</a></sup> | yes | yes |
| Emlid | Emlid Reach RS+<sup><a href="#link-2">2</a></sup> | yes | no |
| Emlid | Emlid Reach RS2/RS2+<sup><a href="#link-2">2</a></sup> | yes | no |
| Emlid | Emlid Reach RS3<sup><a href="#link-2">2</a></sup> | yes | no |
| Garmin | GLO 2 | yes | yes |
| Geomax | <NoSpellcheck id="Zenith06" /><sup><a href="#link-8">8</a></sup>  | yes (mock location) | unknown |
| Geomax | <NoSpellcheck id="Zenith60" /><sup><a href="#link-8">8</a></sup>  | yes (mock location)  | unknown |
| Juniper Systems | Geode GNS3<sup><a href="#link-3">3</a></sup> | yes | yes |
| Leica | Leica FLX100<sup><a href="#link-4">4</a></sup> | yes (mock location) | no |
| Leica | Leica FLX100 plus<sup><a href="#link-4">4</a></sup> | yes (mock location) | yes<sup><a href="#link-**">**</a></sup>|
| Leica | Leica Zeno GG04plus<sup><a href="#link-4">4</a></sup> | yes (mock location) | yes<sup><a href="#link-**">**</a></sup> |
| <NoSpellcheck id="marXact" /> | UNI-GR1| yes | no |
| <NoSpellcheck id="marXact" /> | UNI-GR2| yes | no |
| <NoSpellcheck id="proNIVO" /> | <NoSpellcheck id="PNR21" /><sup><a href="#link-6">6</a></sup> | yes (mock location)| no |
| <NoSpellcheck id="SingularXYZ" /> | <NoSpellcheck id="P1" /><sup><a href="#link-7">7</a></sup> | yes | unknown |
| Trimble | Trimble Catalyst<sup><a href="#link-5">5</a></sup> | yes (mock location) | unknown |
| Trimble | Trimble R1<sup><a href="#link-5">5</a></sup> | yes (mock location) | unknown |
| Trimble | Trimble R2<sup><a href="#link-5">5</a></sup> | yes (mock location) | unknown |


- <a name="link-1">1</a>: **Carlson <NoSpellcheck id="Brx7" />**,  **Carlson <NoSpellcheck id="xML2" />** - through [Carlson Layout](https://www.carlsonsw.com/product/carlson-layout) which will set a mock location in Android.
- <a name="link-2">2</a>: **Emlid Reach RX**, **Emlid Reach RS+**, **Emlid Reach RS2/RS2+**, **Emlid Reach RS3** - directly via Bluetooth connection, has an internal NTRIP client to receive corrections. Possible to set a mock location and connect the receiver via Bluetooth using [GPS Connector](https://play.google.com/store/apps/details?id=de.pilablu.gpsconnector) or WiFi using [Lebefure NTRIP Client](https://play.google.com/store/apps/details?id=com.lefebure.ntripclient).
- <a name="link-3">3</a>: **Geode GNS3** - through *Geode Connect* app on [Android](https://play.google.com/store/apps/details?id=com.juniper.geode2a&hl=en_NZ&gl=US) or [iOS](https://apps.apple.com/us/app/geode-connect/id1446098695), which also acts as an NTRIP client and sends corrections to the device.
- <a name="link-4">4</a>: **Leica FLX100**, **Leica FLX100 plus**, **Leica Zeno GG04plus** - through *Leica Zeno Connect* app on [Android](https://play.google.com/store/apps/details?id=com.leica.zenoconnect&hl=en&gl=US) which also acts as a NTRIP client and sends the corrections to the device. The app will set a mock location in Android. It is also possible to connect directly via Bluetooth (even multiple phones can be connected at once), but if no phone has Zeno app running, there will be no corrections available. 
   <a name="link-**">**</a> *Leica Zeno Connect* is also available on [iOS](https://apps.apple.com/us/app/zeno-connect/id1310344749). It is known to support **Leica FLX100 plus** and **Leica Zeno GG04plus**.  However, on iOS, the vertical accuracy information is not transferred to <MobileAppName /> through *Leica Zeno Connect*. The <MobileAppNameShort />  will not display the correct value of the vertical accuracy.
- <a name="link-5">5</a>: **Trimble R1**, **Trimble R2**, **Trimble Catalyst** - through [*Trimble Mobile Manager* app](https://play.google.com/store/apps/details?id=com.trimble.trimblemobilemanager) which also acts as a NTRIP client and sends the corrections to the device. The app will set a mock location in Android.
- <a name="link-6">6</a>: **<NoSpellcheck id="proNIVO" /> <NoSpellcheck id="PNR21" />** - through *<NoSpellcheck id="Attenberger" /> Connector* app on [Android](https://play.google.com/store/apps/details?id=eu.apglos.attenbergerapp1&hl=en&gl=US).
- <a name="link-7">7</a>: **<NoSpellcheck id="SingularXYZ" /> <NoSpellcheck id="P1" />** - the device uses a SIM Card that can be configured for NTRIP. It can be connected to the <MobileAppNameShort /> via Bluetooth (without using a mock location).
- <a name="link-8">8</a>: **Geomax Zenith06, Zenith60** - through *Geomax X-PAD* app on Android, using a GNSS Mock licence from Geomax and the *Mock GNSS* option in the app.
- <a name="link-9">9</a>: **<NoSpellcheck id="ArduSimple kits" />** - through [*GNSS Master* app](https://play.google.com/store/apps/details?id=com.gnssmaster&hl=en&gl=US&pli=1) which also acts as a NTRIP client and sends the corrections to the device. Detailed steps can be found in the tutorial [How to connect <NoSpellcheck id="ArduSimple" /> kit to Mergin Maps for centimetre-accurate mapping](https://www.ardusimple.com/how-to-connect-ardusimple-kit-to-mergin-maps-for-centimeter-accuracte-mapping/).

**Did you use a GPS that is not in this list?** <GitHubRepo id="MerginMaps/docs/issues/124" desc="Share your experiences with us!" />
