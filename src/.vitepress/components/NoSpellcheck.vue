<template>
  <span v-html="id" class="nospellcheck"></span>
</template>

<script>
export default {
  name: "nospellcheck",
  props: {
    id: String
  }
}
</script>

<style scoped>
</style>