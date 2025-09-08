// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme, { VPBadge } from "vitepress/theme";
import "./style.css";
import imageViewer from "vitepress-plugin-image-viewer";
import vImageViewer from "vitepress-plugin-image-viewer/lib/vImageViewer.vue";
import { useRoute } from "vitepress";
import { createGtm } from "@gtm-support/vue-gtm";
import PageFooter from "./components/PageFooter.vue";
import MMBanner from "./components/MMBanner.vue";
import NotFound from "./NotFound.vue";
import CookieConsentView from "../components/CookieConsentView.vue";


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => {
        return [h(MMBanner), h(PageFooter)];
      },
      'not-found': () => {
        return h(NotFound);
      },
      'layout-bottom': () => {
        return h(CookieConsentView);
      }
    });
  },
  enhanceApp({ app, router, siteData }) {
    import('@justinribeiro/lite-youtube')
    DefaultTheme.enhanceApp({ app, router, siteData });
    app.component("vImageViewer", vImageViewer);
    app.component('VPBadge', VPBadge);
    app.use(
      createGtm({
        id: "GTM-NW7ZGNB", // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryPararms: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}]
        defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
        enabled: false, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
        debug: false, // Whether or not display console logs debugs (optional)
        loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
        vueRouter: undefined, // Pass the router instance to automatically sync with router (optional)
        ignoredViews: [], // Don't trigger events for specified router names (case insensitive) (optional)
        trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
      })
    );

    // app.component("YouTube", YouTube);
    const components = import.meta.glob("../components/*.vue", { eager: true });
    Object.entries(components).forEach(([path, definition]) => {
      // Get name of component, based on filename
      // "./components/Fruits.vue" will become "Fruits"
      const componentName = path?.split('/').pop()?.replace(/\.\w+$/, '')
    
      // Register component on this Vue instance
      if (componentName) app.component(componentName, definition.default)
    })
  },
  setup: () => {
    const route = useRoute();
    imageViewer(route);
  }
} satisfies Theme;
