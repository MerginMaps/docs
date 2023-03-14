<template>
  <span class="sincebadge" v-if="type === 'App'" >since Input App {{ version }}</span>
  <span class="sincebadge" v-else-if="type === 'Plugin'">since Plugin {{ version }}</span>
  <span class="sincebadge" v-else-if="type === 'Server'">since Server {{ version }}</span>
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
  vertical-align top
  display inline-block
  font-size 14px
  height 18px
  line-height 18px
  border-radius 3px
  padding 0 6px
  color white
  background-color #42b983
  background-color $badgeTipColor
  margin-left 5px
</style>


