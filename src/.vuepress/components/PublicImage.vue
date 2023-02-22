<template>
  <img :src="$withBase(`/${src}`)" :title="`${title}`" :alt="`${alt}`">
</template>

<script>
export default {
  name: "publicimage",
  props: {
    src: String,
    title: String,
    alt: String
  }
}
</script>

<style scoped>
</style>