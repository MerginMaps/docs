<template>
  <a :href="`https://wishlist.merginmaps.com/${id}`" target="_blank" class="nospellcheck">
    <span v-if="desc" v-html="desc"></span>
    <span v-else class="nospellcheck">wishlist.merginmaps.com</span>
  </a>
</template>

<script>
export default {
  name: "WishListLink",
  props: {
    id: {
      type: String,
      default: ''
    }
    desc: String
  }
}
</script>
