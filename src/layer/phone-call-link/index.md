---
description: HTML widget can be used to initiate a phone call directly from the feature's form in Mergin Maps mobile app.
---

# How to Use a Phone Call Link

The HTML widget can be used to display a link that will trigger a phone call directly from the form in <MobileAppName />.

:::tip Example project available
Clone <MerginMapsProject id="documentation/phone-call-link" /> to see how this works.
:::

Add the [HTML widget](../info-widgets/) to the **Attributes form** of your survey layer. Use the following configuration (replace `123-456-789` by the phone number you want to use):
```
<a href="tel:123-456-789">123-456-789</a>
```

![QGIS Attributes form HTML widget with phone call link](./qgis-form-html-phone-call.webp "QGIS Attributes form HTML widget with phone call link")

In the <MobileAppNameShort />, the form now contains a link that can initiate a phone call.
![Mergin Maps mobile app form with phone call link](./mobile-form-html-phone-call.webp "Mergin Maps mobile app form with phone call link")


