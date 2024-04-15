<template>
  <span>
  <span class="servertypece" v-if="type === 'CE'" >Community Edition only</span>
  <span class="servertypeee" v-else-if="type === 'EE'">Enterprise Edition only</span>
  </span>
</template>


<script>
export default {
  name: "servertype",
  props: {
    type: String
  }
}
</script>

<style lang="stylus" scoped>
.servertypece
  display inline-block
  height 18px
  line-height 18px
  white-space nowrap 
  border-radius 3px
  padding 0 6px
  color white
  background-color $badgeWarningColor
  margin-left 5px
  
.servertypeee
  display inline-block
  height 18px
  line-height 18px
  white-space nowrap 
  border-radius 3px
  padding 0 6px
  color white
  background-color $badgeErrorColor
  margin-left 5px
</style>

