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

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue';
import Smartlook from 'smartlook-client';
import { useGtm } from '@gtm-support/vue-gtm';

import CookieConsentBanner from './cookie-consent/components/CookieConsentBanner.vue';
import CookieConsentPreferences from './cookie-consent/components/CookieConsentPreferences.vue';

const showBanner = ref(false);
const preferences = reactive({
  show: false,
  consents: {
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false,
    uncategorized: false,
  },
});

let cookie: any = null;
const gtm = useGtm();

onMounted(async () => {
  const module = await import('./cookie-consent/cookie');
  cookie = new module.default();
  const currentCookie = cookie.getConsentCookies();
  if (!currentCookie) {
    showBanner.value = true;
    return;
  }
  preferences.consents = currentCookie.consents;
});

function onAllowClick() {
  const currentCookie = cookie.allowCookies();
  showBanner.value = false;
  preferences.consents = currentCookie.consents;
}

function onPreferencesClick() {
  preferences.show = !preferences.show;
}

function onDenyClick() {
  const currentCookie = cookie.denyCookies();
  showBanner.value = false;
  preferences.consents = currentCookie.consents;
}

function onSavePreferencesClick(values: any) {
  cookie.savePreferences(values);
  showBanner.value = false;
  preferences.show = false;
  preferences.consents = values;
}

watch(
  () => preferences.consents.analytics,
  (value) => {
    if (value !== undefined) {
      gtm?.enable(value);
      const smartlookKey = import.meta.env.VITE_SMARTLOOK_KEY;
      if (value && smartlookKey && !Smartlook.initialized()) {
        Smartlook.init(smartlookKey, {
          region: 'eu',
        });
      }
    }
  },
  { immediate: true }
);
</script>

<style scoped></style>
