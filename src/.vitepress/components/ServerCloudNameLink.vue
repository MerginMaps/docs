<template>
  <a :href="`https://merginmaps.com/${id}`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">Mergin Maps Cloud</span>
  </a>
</template>

<script>
export default {
  name: "server-cloud-name-link",
  props: {
    id: {
      type: String,
      default: ''
    },
    desc: String
  }
}
</script>
