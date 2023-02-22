<template>
  <span v-html="id" class="nospellcheck"></span>
</template>

<script>
export default {
  name: "nospellcheck",
  props: {
    id: String,
	title: String,
	alt: String
  }
}
</script>

<style scoped>
</style>