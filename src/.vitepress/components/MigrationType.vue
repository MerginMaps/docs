<template>
  <span>
    <VPBadge v-if="type === 'CE'" text="Community Edition" type="warning"/>
    <VPBadge v-else-if="type === 'EE'" text="Enterprise Edition" type="warning"/>
  </span>
</template>

<script>
import { VPBadge } from "vitepress/theme";

export default {
  name: "migration-type",
  props: {
    type: String
  }
}
</script>

<style scoped>

</style>
