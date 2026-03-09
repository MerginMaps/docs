<template>
  <button
    :class="[
      'cookie-consent-button',
      secondary ? 'button-secondary' : 'button-primary',
      icon && 'button-icon',
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const emits = defineEmits(["on-click"]);
defineProps({
  secondary: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});
function onClick() {
  emits("on-click");
}
</script>

<style lang="scss" scoped>
// Copy from webflow currently, we need global button component
.cookie-consent-button {  
  font-size: 1rem;
  font-weight: 600;
  padding: 0.65em 2em;
  line-height: 1.85;
  border-radius: 30px;
  color: var(--mm-c-forest);
  background-color: var(--mm-c-grass);
  transition: all 0.3s;
  text-decoration: capitalize;

  &.button-primary {
    background-color: var(--mm-c-grass);
    border: 2px solid var(--mm-c-grass);
    color: var(--mm-c-forest);
  }

  &.button-primary:hover {
    background-color: var(--mm-c-forest);
    border: 2px solid var(--mm-c-forest);
    color: var(--mm-c-grass);
  }

  &.button-secondary {
    background-color: #fff;
    border: 2px solid var(--mm-c-forest);
    color: var(--mm-c-forest);
  }

  &.button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media screen and (max-width: 911px) {
  .cookie-consent-button {
    width: 100%;
  }
}
</style>
