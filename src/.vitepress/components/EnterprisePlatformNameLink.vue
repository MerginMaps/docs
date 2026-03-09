<template>
  <a :href="`https://merginmaps.com/pricing`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">Mergin Maps EE</span>
  </a>
</template>

<script>
export default {
  name: "EnterprisePlatformNameLink",
  props: {
    id: {
      type: String,
      default: ''
    },
    desc: String
  }
}
</script>
