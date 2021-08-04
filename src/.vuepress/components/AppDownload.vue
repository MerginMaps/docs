<template>
  <div>
    <a href='https://apps.apple.com/us/app/input/id1478603559?ls=1'><img class="app_store" :src="$withBase('/app_store_badge_black.svg')" alt="Download on the App Store"></a>
    <a href='https://play.google.com/store/apps/details?id=uk.co.lutraconsulting'><img class="google_play" :src="$withBase('/google-play-badge.png')" alt="Get it on Google Play"></a>
  </div>
</template>

<script>
export default {
  name: "appdownload",
  props: {}
}
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
}

img.app_store {
  padding: 11px;
  height: 48px;
}

img.google_play {
  height: 70px;
}

</style>