<template>
  <div>
    <ParentLayout>
       <template #sidebar-top><PageHeader /></template> 
       <template #page-bottom><PageFooter /></template>
    </ParentLayout>
  </div>
</template>

<script>
import PageFooter from "@theme/components/PageFooter.vue";
import PageHeader from "@theme/components/PageHeader.vue";
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  components: {
    ParentLayout,
    PageFooter,
    PageHeader
  },
};
</script>
