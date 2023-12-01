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

<style lang="stylus" scoped>
.sincebadge
  display inline-block
  height 18px
  line-height 18px
  border-radius 3px
  padding 0 6px
  color white
  background-color $badgeTipColor
  margin-left 5px
</style>

