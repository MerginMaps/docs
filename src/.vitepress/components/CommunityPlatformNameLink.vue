<template>
  <a :href="`https://github.com/MerginMaps`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">Mergin Maps CE</span>
  </a>
</template>

<script>
export default {
  name: "CommunityPlatformNameLink",
  props: {
    id: {
      type: String,
      default: ''
    },
    desc: String
  }
}
</script>
