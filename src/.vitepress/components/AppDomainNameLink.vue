<template>
  <a :href="`https://app.merginmaps.com/${id}`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">app.merginmaps.com</span>
  </a>
</template>

<script>
export default {
  name: "AppDomainNameLink",
  props: {
    id: {
      type: String,
      default: ''
    },
    desc: String
  }
}
</script>
