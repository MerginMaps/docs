<template>
  <a class="primary-link">
    <slot></slot>
  </a>
</template>
<script laang="ts" setup>
</script>
<style scoped>
.primary-link {
  font-size: 1rem;
  font-weight: 600;
  padding: 0.65em 2em;
  line-height: 1.85;
  border-radius: 30px;
  color: var(--mm-c-forest);
  background-color: var(--mm-c-grass);
  transition: all 0.3s;
  text-decoration: capitalize;
}

.primary-link:hover {
  background-color: var(--mm-c-field);
  color: var(--mm-c-forest);
}
</style>

