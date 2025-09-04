<template>
  <div>
    <iframe
      type="text/html"
      width="100%"
      style="height: 100%"
      src=""
      frameborder="0"
      allowfullscreen
      ref="iframe"
      :title="title"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

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
const iframe = ref(null);

onMounted(() => {
  if (iframe.value) {
    iframe.value.src = `https://www.youtube.com/embed/${props.id}`;
  }
});
</script>

<style scoped>
div {
  background-color: #2c3e50;
  width: 100%;
  padding-top: min(500px, 56%);
  position: relative;
  border: 3px solid #eaecef;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
