<template>
  <a :href="`mailto:${id}@merginmaps.com`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">{{ id }}@merginmaps.com</span>
  </a>
</template>

<script>
export default {
  name: "merginmapsemail",
  props: {
    id: String,
    desc: String
  }
}
</script>