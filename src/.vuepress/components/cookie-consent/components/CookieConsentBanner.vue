<template>
  <div class="cookie-consent-banner">
    <p class="cookie-consent-banner__text">
      By clicking <b>“Accept All Cookies”</b>, you agree to the storing of
      cookies on your device to enhance site navigation, analyze site usage, and
      assist in our marketing efforts. View our
      <a
        class="cookie-consent-banner__text-link"
        href="https://merginmaps.com/cookies"
        target="__blank"
      >
        Cookie Policy</a
      >
      for more information. Deny cookies
      <a class="cookie-consent-banner__text-link" @click="onDenyClick">here</a>.
    </p>
    <div class="cookie-consent-banner__buttons">
      <a
        class="cookie-consent-banner__text-link"
        :style="{ marginRight: '2rem' }"
        @click="onPreferencesClick"
      >
        Preferences</a
      ><cookie-consent-button @on-click="onAllowClick">
        Accept all cookies
      </cookie-consent-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CookieConsentButton from './CookieConsentButton.vue'

export default Vue.extend({
  name: 'CookieConsentBanner',
  components: { CookieConsentButton },
  methods: {
    onAllowClick() {
      this.$emit('on-allow')
    },
    onPreferencesClick() {
      this.$emit('on-preferences')
    },
    onDenyClick() {
      this.$emit('on-deny')
    }
  }
})
</script>

<style lang="scss" scoped>
.cookie-consent-banner {
  position: fixed;
  z-index: 998;
  right: 0;
  left: 0;
  bottom: 0;
  top: auto;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top: 1px #acacac solid;
  background-color: #f9f9f9;

  &__text {
    margin-bottom: 0;
    margin-right: 2rem;
    max-width: 500px;
    width: 100%;
  }

  // reset links
  a {
    background-color: transparent;
  }
  a:active,
  a:hover {
    outline: 0;
  }

  &__text-link {
    color: #00a884;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer
  }

  &__buttons {
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 911px) {
  .cookie-consent-banner {
    flex-direction: column;

    &__text {
      margin-bottom: 2rem;
      margin-right: 0
    }
  }
}
</style>
