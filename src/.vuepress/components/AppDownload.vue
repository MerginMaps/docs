<template>
  <div>
    <a href='https://apps.apple.com/us/app/input/id1478603559?ls=1' target="_blank" rel="noopener noreferrer" @click="gtmEvent('apple')" class="app-store-btn">
      <img class="app_store" :src="$withBase('/app_store_badge_black.svg')" alt="Download on the App Store">
    </a>
    <a href='https://play.google.com/store/apps/details?id=uk.co.lutraconsulting' target="_blank" rel="noopener noreferrer" @click="gtmEvent('google')" class="google-play-btn">
      <img class="google_play" :src="$withBase('/google-play-badge.png')" alt="Get it on Google Play">
    </a>
  </div>
</template>

<script>
export default {
  name: "appdownload",
  props: {},
  methods: {
    gtmEvent: function (store) {
      if (!this.$gtm) return

      this.$gtm.trackEvent({
        event: null, // Event type [default = 'interaction'] (Optional)
        category: 'lc_engagement',
        action: `get_input_${store}`,
        label: '',
        value: null,
        noninteraction: false // Optional
      })
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
}

img {
  border: none
}

img.app_store {
  padding: 11px;
  height: 48px;
}

img.google_play {
  height: 70px;
}

</style>