<template>
  <img :src="$withBase(`/${src}`)">
</template>

<script>
export default {
  name: "publicimage",
  props: {
    src: String
  }
}
</script>

<style scoped>
</style>