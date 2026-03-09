<template>
  <div class="not-found vp-doc">
    <div class="not-found-container">
      <div class="not-found-container-content">
        <h1>404</h1>

        <blockquote>{{ getMsg() }}</blockquote>

        <a :href="withBase('/')"> Take me home. </a>
      </div>
    </div>
    <PageFooter :style="{ marginBottom: '2rem' }" />
  </div>
</template>

<script lang="ts" setup>
import PageFooter from "./components/PageFooter.vue";
import { withBase } from 'vitepress'

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
];

function getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.not-found-container-content {
  max-width: 740px;
  width: 100%;
}
</style>
