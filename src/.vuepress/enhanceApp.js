/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import VueGtm from '@gtm-support/vue2-gtm'
import CookieConsentView from './components/CookieConsentView'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(
    VueGtm,
    {
      id: 'GTM-NW7ZGNB', // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryPararms: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}]
      defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
      enabled: false, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
      debug: false, // Whether or not display console logs debugs (optional)
      loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
      vueRouter: router, // Pass the router instance to automatically sync with router (optional)
      ignoredViews: [], // Don't trigger events for specified router names (case insensitive) (optional)
      trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
    },
    router
  )
}
