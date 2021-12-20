<template>
  <a :href="`https://public.cloudmergin.com/${id}`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">cloudmergin.com</span>
  </a>
</template>

<script>
export default {
  name: "maindomainnamelink",
  props: {
    id: {
      type: String,
      default: ''
    },
    desc: String
  }
}
</script>