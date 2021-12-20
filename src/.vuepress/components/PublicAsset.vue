<template>
  <a :href="$withBase(`/${src}`)" class="nospellcheck" v-text="src"></a>
</template>

<script>
export default {
  name: "publicasset",
  props: {
    src: String
  }
}
</script>

<style scoped>
</style>