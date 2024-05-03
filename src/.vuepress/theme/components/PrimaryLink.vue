<template>
  <a class="primary-link">
    <slot></slot>
  </a>
</template>
<script>
import Vue from "vue"

export default Vue.extend({
  name: 'PrimaryLink',
});
</script>
<style scoped lang="stylus">
.primary-link {
  font-size: 1rem;
  font-weight: 600;
  padding: 0.65em 2em;
  line-height: 1.85;
  border-radius: 30px;
  color: $primaryForestColor;
  background-color: $primaryGrassColor;
  transition: all 0.3s;
  text-decoration: capitalize;
}

.primary-link:hover {
  background-color: $fieldColor;
  color: $textColor
}
</style>

