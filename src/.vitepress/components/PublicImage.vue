<template>
  <img :src="withBase(`/${src}`)" :title="`${title}`" :alt="`${alt}`">
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'

defineProps<{
  src: string,
  title: string,
  alt: string
}>()
</script>

<style scoped>
</style>