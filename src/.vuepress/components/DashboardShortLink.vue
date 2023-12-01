<template>
  <a :href="`https://app.merginmaps.com/${id}`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">dashboard</span>
  </a>
</template>

<script>
export default {
  name: "dashboard",
  props: {
    id: {
      type: String,
      default: ''
    },
    desc: String
  }
}
</script>
