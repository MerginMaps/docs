<template>
  <span>
    <a class="mm-link" :href="`https://docs.qgis.org/${ver}/en/docs/${link}`" target="_blank" rel="noopener noreferrer">
      <img alt="QGIS Documentation" :src="withBase('/QGIS.svg')" />
      <span v-html="text"></span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
          <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
          <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
        </svg>
      </span>
    </a>
  </span>
</template>

<script lang="ts" setup>
import { withBase } from "vitepress";

defineProps<{
  ver: string;
  link: string;
  text: string;
}>();
</script>

<style scoped>
img {
  border: none;
  height: 15px;
}
</style>