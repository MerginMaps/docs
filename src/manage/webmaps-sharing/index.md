---
description: Mergin Maps webmaps can be shared using a URL link. You can also embed them directly on your website with a simple HTML code for seamless integration.
---

# Sharing and Embedding Webmaps <Badge text="Early access" type="warning"/>

::: warning Early access feature
Map sharing is in early access. If you would like to try it out, ask your workspace admin or owner to enable map sharing early access program in your [workspace settings](https://app.merginmaps.com/settings). The availability of the feature might change in the future.
:::

## Sharing maps via URL 

Webmaps can be shared via URL. [Admins or owners](../permissions/) can enable map sharing for a project, so that anyone with the link can display and explore your project in a web browser, without the need to log into  <MainPlatformNameLink /> or making the project [public](../project-advanced/#make-your-project-public-private).

1. Navigate to your project on the <DashboardShortLink />.
2. In the **Map** tab, click on the **Share map** button to generate a shareable link
3. Send the link to anyone to share your project

To see how this works, you can try a link to our [sample webmap](https://app.merginmaps.com/maps/grDTleg8yCdSracIxs-hmFIGdDs).

To disable the map sharing, click on the **Revoke sharing** button.

![Sharing maps via URL](./map-sharing-url.webp "Sharing maps via URL")


## Embedding webmaps using HTML

Webmaps that are shared can be also embedded on a website using HTML element `iframe` by using the [URL link](#sharing-maps-via-url) of the webmap.

For example, this code

```
<iframe src="https://app.merginmaps.com/maps/grDTleg8yCdSracIxs-hmFIGdDs" height="500" width="700" title="Mergin Maps Webmas Iframe Example"></iframe>
```

produces this map:

<iframe src="https://app.merginmaps.com/maps/grDTleg8yCdSracIxs-hmFIGdDs" height="500" width="700" title="Mergin Maps Webmas Iframe Example"></iframe>
