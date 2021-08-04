<template>
  <span>
    <a :href="`https://public.cloudmergin.com/projects/${id}/tree`"><span v-html="id"></span></a>
  </span>
</template>

<script>
export default {
  name: "merginmapsproject",
  props: {
    id: String
  }
}
</script>

<style scoped>
</style>