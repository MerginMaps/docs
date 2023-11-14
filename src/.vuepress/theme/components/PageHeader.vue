<template>
  <div
    :style="pageHeaderStyle"
    class="page-header"
  >
    <p>
      This document is machine translated, see
      <a :href="'#'" @click.prevent="switchLang('en')">original</a> version.
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
      showHeader: false,
      currentLang: null,
    };
  },
  mounted() {
    Weglot.initialize({
      api_key: this.$weglotApiKey,
      auto_switch: false,
      hide_switcher: true,
    });

    Weglot.on("initialized", () => {
      this.currentLang = Weglot.getCurrentLang();
    });

    Weglot.on("languageChanged", () => {
      this.currentLang = Weglot.getCurrentLang();
    });
  },
  computed: {
    pageHeaderStyle() {
      if (this.showHeader) {
        return {
          marginBottom: 'initial',
          visibility: "visible",
        }
      }
      return {
        marginBottom: "-6rem",
        visibility: "hidden",
      };
    }
  },
  methods: {
    switchLang(lang) {
      Weglot.switchTo(lang);
    },
  },
  watch: {
    currentLang: {
      immediate: true,
      handler(newLang) {
        this.showHeader = newLang && newLang !== "en";
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.page-header {
  padding: 0.1rem 1.5rem;
  background-color: #f3f5f7;
  font-size: 0.9rem;
  align-items: center;
}
</style>
