---
description: Add custom filters to sort and display only those features that you need during your field survey.
outline: deep
---

# Filtering Features in Mergin Maps Mobile App
[[toc]]

Custom filters can be added to the <MobileAppNameShort /> to easily filter features displayed on the map and in the [survey layers](../layers/#browsing-features).

![Filtering features in Mergin Maps mobile app](./mobile-filtering.gif "Filtering features in Mergin Maps mobile app")

::: tip Example project available
You can explore filtering by cloning our public project <MerginMapsProject id="documentation/filtering" />
:::

::: warning Feature filtering blog
You can read about this feature also on our blog <MainDomainNameLink id="blog/from-wishlist-to-app-feature-filtering-is-live" desc="From wishlist to app: Feature filtering is live"/>.
:::

## Enable and define filtering in QGIS
Filters can be enabled and defined in QGIS in **Project Properties** for GeoPackage layers.

::: tip Plugin upgrade
If you do not see the **Filtering** option in the **Project properties**, check for [plugin upgrades](../../setup/install-mergin-maps-plugin-for-qgis/#plugin-upgrade).
:::

Check the :heavy_check_mark: **Enable filtering** option in the <MainPlatformName /> tab, click on the **Add filter** button and select a filter type from the list. 

Then, define the filter:
   - **Type** - choose the filter type (see [Filter types](#filter-types) for more details).
   - **Layer** - choose from the project's GeoPackage layers
   - **Field** - choose from the fields of the layer. Only fields with data types compatible with the selected filter type are offered.
   - **Title** - the name of the filter, which will be displayed in the <MobileAppNameShort />
   
   ![Filtering in QGIS Mergin Maps project](./qgis-project-properties-enable-filtering.webp "Filtering in QGIS Mergin Maps project")

You can add as many filters as you need by using the **Add filter** button.

The order of filters can be changed by selecting a filter and using the **Up** and **Down** buttons. To remove a filter, select it and click the **Remove** button.
![Filtering in QGIS Mergin Maps project](./qgis-filtering.webp "Filtering in QGIS Mergin Maps project")

Don't forget to save your project and synchronise changes so that you can use the filters in the <MobileAppNameShort />.

## Filtering features in the mobile app
Filters defined in [<MainPlatformName /> project in QGIS](#enable-and-define-filtering-in-qgis) can be used in the <MobileAppNameShort />. 

You can filter features across multiple layers as well as use multiple filters on one layer. The filtering affects both the map display and the feature browsing list. 

Filters do not stay saved when the app is restarted.

Here is an example of how filtering works:

1. Tap the **More** button to open **Filters** defined in the project

   Filtering has to be enabled in the [QGIS project](#enable-and-define-filtering-in-qgis), otherwise this option is not displayed.
   ![Filtering button in Mergin Maps mobile app](./mobile-open-filters.webp "Filtering button in Mergin Maps mobile app")

2. Enter or select values in the filters. You can use more filters at once.

   Here, we will use a *Single select* filter on the *trees* layer and select a *tree species* value from the list.

   Tap on the **Apply filters** button to confirm the filtering.
  ![Filtering in Mergin Maps mobile app](./mobile-filter-single-selection.webp "Filtering in Mergin Maps mobile app")

3. With active filters, only features that match the criteria are displayed on the map as well as when [browsing features](../layers/#layers-legend-and-features).

   You can use the active **Filters** button to quickly access filters.
  ![Active filter in Mergin Maps mobile app](./mobile-filtered-features.webp "Active filter in Mergin Maps mobile app")

## Filter types
Here is an overview of available filter types.

In QGIS, you choose from the following filter types: [Text](#text), [Number](#number), [Date](#date), [Checkbox](#checkbox), [Single select](#single-select), [Multi select](#multi-select).

![QGIS filter types](./qgis-filter-types.webp "QGIS filter types")

In the <MobileAppNameShort />, the respective filters look like this:
![Mergin Maps mobile app filters](./mobile-filters.webp "Mergin Maps mobile app filters")

### Text

The text filter can be used to find all features where the selected field contains the entered text. 

Type in a word, a part of the word or a number into the filter and **Apply filters** to see the results.

Available for text and number field types.

![Mergin Maps mobile app Text filter](./mobile-filter-text.webp "Mergin Maps mobile app Text filter")

This filter uses the same logic as the SQL expression `"field" ILIKE '%input%'`. 

### Number
The number filter provides *from* and *to* number inputs.

Available for text and number field types.

![Mergin Maps mobile app Number filter](./mobile-filter-number.webp "Mergin Maps mobile app Number filter")

This filter uses the same logic as the SQL expression `"field" >= 'input_from' AND "field" <= 'input_to'`. 

### Date
The date filter provides *from* and *to* date calendar inputs.

Available for date field types configured with the [Date and time widget](../../layer/date-time/).

![Mergin Maps mobile app Date filter](./mobile-filter-date.webp "Mergin Maps mobile app Date filter")

This filter uses the same logic as the SQL expression `"field" >= 'input_from' AND "field" <= 'input_to'`. 

### Checkbox
The checkbox filter provides a toggle between *all*, *true* and *false* values. Available for Boolean, text and integer field types configured with the [Checkbox widget](../../layer/checkbox/).

![Mergin Maps mobile app Checkbox filter](./mobile-filter-checkbox.webp "Mergin Maps mobile app Checkbox filter")

This filter uses the same logic as the SQL expression `"field" == 'input'`. 

### Single select
The single select filter provides a drop-down menu of field values. One value can be selected at once. 

Available for all field types. For text, number, date and Boolean field types generates a list of used values. 

![Mergin Maps mobile app Single select filter](./mobile-filter-single-select.webp "Mergin Maps mobile app Single select filter")

This filter uses the same logic as the SQL expression `"field" == 'input'`.

Note that Value relations with *multiple selections* are currently **not** supported.

### Multi select
The multi select filter provides a drop-down menu of field values. Multiple values can be selected at once. 

Available for all field types. For text, number, date and Boolean field types generates a list of used values.

![Mergin Maps mobile app Multi select filter](./mobile-filter-multi-select.webp "Mergin Maps mobile app Multi select filter")

This filter uses the same logic as the SQL expression `"field" IN ('input')`.

Note that Value relations with *multiple selections* are currently **not** supported.
