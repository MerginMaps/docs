<template>
  <div>
    <cookie-consent-banner
      v-if="showBanner"
      @on-allow="onAllowClick"
      @on-preferences="onPreferencesClick"
      @on-deny="onDenyClick"
    />
    <cookie-consent-preferences
      v-if="preferences.show"
      :initial-values="preferences.consents"
      @on-save="onSavePreferencesClick"
      @on-close="onPreferencesClick"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CookieConsentBanner from "./cookie-consent/components/CookieConsentBanner.vue";
import CookieConsentPreferences from "./cookie-consent/components/CookieConsentPreferences.vue";

export default Vue.extend({
  name: "CookieConsentView",
  components: { CookieConsentBanner, CookieConsentPreferences },
  data() {
    return {
      cookie: null,
      showBanner: false,
      preferences: {
        show: false,
        consents: {
          essential: true,
          analytics: false,
          marketing: false,
          personalization: false,
          uncategorized: false,
        },
      },
    };
  },
  mounted() {
    import("./cookie-consent/cookie").then((module) => {
      this.cookie = new module.default();
      const currentCookie = this.cookie.getConsentCookies();
      if (!currentCookie) {
        this.showBanner = true;
        return;
      }
      this.preferences = {
        show: false,
        consents: currentCookie.consents,
      };
    });
  },
  methods: {
    onAllowClick() {
      const currentCookie = this.cookie.allowCookies();
      this.showBanner = false;
      this.preferences.consents = currentCookie.consents;
    },
    onPreferencesClick() {
      this.preferences.show = !this.preferences.show;
    },
    onDenyClick() {
      const currentCookie = this.cookie.denyCookies();
      this.showBanner = false;
      this.preferences = {
        show: false,
        consents: currentCookie.consents,
      };
    },
    onSavePreferencesClick(values) {
      this.cookie.savePreferences(values);
      this.showBanner = false;
      this.preferences.show = false;
      this.preferences.consents = values;
    },
  },
  watch: {
    "preferences.consents.analytics": {
      immediate: true,
      handler: function (value) {
        this.$gtm && this.$gtm.enable(value);
      },
    },
  },
});
</script>

<style scoped></style>
