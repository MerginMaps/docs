<template>
  <a :href="`https://www.lutraconsulting.co.uk/${id}`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">Lutra Consulting Ltd.</span>
  </a>
</template>

<script>
export default {
  name: "lutraconsultingweb",
  props: {
    id: String,
    desc: String
  }
}
</script>