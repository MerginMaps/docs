<template>
  <div>
    <ParentLayout
      ><template #page-bottom><PageFooter /></template></ParentLayout
    >
  </div>
</template>

<script>
import PageFooter from "@theme/components/PageFooter.vue";
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  components: {
    ParentLayout,
    PageFooter
  },
};
</script>
