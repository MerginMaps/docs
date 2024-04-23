<template>
  <div>
    <ParentLayout>
       <template #page-bottom><MMBanner /><PageFooter /></template>
    </ParentLayout>
  </div>
</template>

<script>
import PageFooter from "@theme/components/PageFooter.vue";
import MMBanner from "@theme/components/MMBanner.vue";
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  components: {
    ParentLayout,
    PageFooter,
    MMBanner
  },
};
</script>
