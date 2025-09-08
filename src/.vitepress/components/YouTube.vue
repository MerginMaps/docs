<template>
    <lite-youtube :videoid="id" :videotitle="title" posterquality="maxresdefault"></lite-youtube>
</template>

<script setup>
import { onMounted, ref } from "vue";
import '@justinribeiro/lite-youtube'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "YouTube video",
  },
});
</script>

<style scoped>
</style>
