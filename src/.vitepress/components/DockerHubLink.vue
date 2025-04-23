<template>
  <a :href="`https://hub.docker.com/${id}`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">Mergin Maps docker repository</span>
  </a>
</template>

<script>
export default {
  name: "DockerHub Link",
  props: {
    id: {
      type: String,
      default: ''
    },
    desc: String
  }
}
</script>
