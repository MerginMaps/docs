<template>
  <button
    :class="[
      'cookie-consent-button',
      secondary ? 'button-secondary' : 'button-primary',
      icon && 'button-icon'
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CookieConsentButton',
  props: {
    /** Color scheme is opposite to green backgroud */
    secondary: {
      type: Boolean,
      default: false
    },
    /** Show only icon */
    icon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('on-click')
    }
  }
})
</script>

<style lang="scss" scoped>
// Copy from webflow currently, we need global button component
.cookie-consent-button {
  border-radius: 999rem;
  margin-right: 0.5rem;
  padding: 0.625rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: inherit;
  cursor: pointer;

  &.button-primary {
    background-color: #00a884;
    border: 2px solid #00a884;
    color: #fff;
  }

  &.button-secondary {
    background-color: #fff;
    border: 2px solid #00a884;
    color: #00a884;
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
