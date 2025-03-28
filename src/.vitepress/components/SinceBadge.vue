<template>
  <span>
  <span class="sincebadge" v-if="type === 'App'" >since Mobile app {{ version }}</span>
  <span class="sincebadge" v-else-if="type === 'Plugin'">since QGIS plugin {{ version }}</span>
  <span class="sincebadge" v-else-if="type === 'Server'">since Server {{ version }}</span>
  </span>
</template>


<script>
export default {
  name: "sincebadge",
  props: {
    type: String,
    version: String
  }
}
</script>

<style scoped>
.sincebadge {
  display: inline-block;
  line-height: 1;
  white-space: nowrap; 
  border-radius: 6px;
  padding: 0.25em 1em;
  color: var(--mm-badge-since-text-color);
  background-color: var(--mm-badge-since-bg);
  margin-left: 5px;
}
</style>

