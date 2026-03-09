<template>
  <span>
    <VPBadge v-if="type === 'App'" :text="`Since Mobile app ${version}`" type="tip"/>
    <VPBadge v-else-if="type === 'Plugin'" :text="`Since QGIS plugin ${version}`" type="tip"/>
    <VPBadge v-else-if="type === 'Server'" :text="`Since Server ${version}`" type="tip"/>
  </span>
</template>


<script>
import { VPBadge } from "vitepress/theme";

export default {
  name: "sincebadge",
  props: {
    type: String,
    version: String
  }
}
</script>

<style scoped>

</style>
