<template>
  <div>
    <div class="type-badge ce" v-if="type === 'CE'" >Community Edition</div>
    <div class="type-badge ee" v-else-if="type === 'EE'">Enterprise Edition</div>
  </div>
</template>


<script>
export default {
  name: "migration-type",
  props: {
    type: String
  }
}
</script>

<style lang="stylus" scoped>

.type-badge {
  display: inline-block;
  height: 18px;
  line-height: 18px;
  white-space: nowrap;
  border-radius: 3px;
  padding: 0 6px;
  color: white;
}

.ce {
  background-color: $badgeWarningColor;
}

.ee {
  background-color: $badgeErrorColor;
}

</style>

