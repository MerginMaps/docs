<template>
  <a :href="`https://app.merginmaps.com/${id}`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">Mergin Maps Dashboard</span>
  </a>
</template>

<script>
export default {
  name: "Mergin Maps Dashboard",
  props: {
    id: {
      type: String,
      default: ''
    },
    desc: String
  }
}
</script>
