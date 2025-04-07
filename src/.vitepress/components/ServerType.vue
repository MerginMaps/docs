<template>
  <span>
    <VPBadge v-if="type === 'CE'" text="Community Edition only" type="warning"/>
    <VPBadge v-else-if="type === 'EE'" text="Enterprise Edition only" type="warning"/>
  </span>
</template>


<script>
import { VPBadge } from "vitepress/theme";

export default {
  name: "servertype",
  props: {
    type: String
  }
}
</script>

<style scoped>

</style>
