<template>
  <div v-if="showHeader" class="page-header">
    <p>
      This document is machine translated,<br />read <a :href="url">original</a> version.
    </p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "PageHeader",
  components: {},
  data: function () {
    return {
      url: "https://merginmaps.com" + window.location.pathname,
      showHeader: ['localhost', 'www.merginmaps.com', 'merginmaps.com'].includes(window.location.hostname)
    }
  }
});
</script>

<style lang="scss" scoped>
.page-header {
  padding: .1rem 1.5rem;
  background-color: #f3f5f7;
  font-size: 0.9rem;
  align-items: center;
}
</style>
