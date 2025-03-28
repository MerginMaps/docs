<template>
  <span>
  <span class="servertype servertype-ce" v-if="type === 'CE'" >Community Edition only</span>
  <span class="servertype servertype-ee" v-else-if="type === 'EE'">Enterprise Edition only</span>
  </span>
</template>


<script>
export default {
  name: "servertype",
  props: {
    type: String
  }
}
</script>

<style scoped>
.servertype {
  display: inline-block;
  line-height: 18px;
  white-space: nowrap;
  border-radius: 6px;
  padding: 0.25em 1em;
  color: white;
  margin-left: 5px;
}

.servertype-ce {
  background-color: var(--mm-badge-ce-bg);
}

.servertype-ee {
  background-color: var(--mm-badge-ee-bg);
}
</style>

