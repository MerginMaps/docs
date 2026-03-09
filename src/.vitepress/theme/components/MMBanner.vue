<template>
  <aside class="banner">
    <div class="banner-container">
      <img class="banner-image banner-image-full" :src="fullImageUrl" alt="Mergin Maps banner" />
      <img class="banner-image banner-image-small" :src="smallImageUrl" alt="Mergin Maps banner" />
      <header class="banner-header">
        <h2 class="banner-title">{{ title }}</h2>
        <p class="banner-text">{{ text }}</p>
      </header>
      <PrimaryLink
        :href="merginUrl"
        class="banner-button"
        >Learn More</PrimaryLink
      >
    </div>
  </aside>
</template>

<script>
import PrimaryLink from "@theme/components/PrimaryLink.vue";
import { defineComponent } from "vue";
import { withBase } from "vitepress";

export default defineComponent({
  name: "MMBanner",
  components: {
    PrimaryLink,
  },
  data() {
    return {
      title: "Mergin Maps",
      fullImageUrl: withBase("/banner-full.png"),
      smallImageUrl: withBase("/banner-mobile.png"),
      text: "Easy to use field data collection app for QGIS.",
      merginUrl: "https://merginmaps.com/?utm_source=documentation&utm_medium=footer&utm_campaign=docs"
    };
  },
});
</script>

<style scoped>
.banner {
  /* Add styles for the banner container here */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.banner-header {
  position: relative;
  z-index: 2;
}

.banner-button {
  position: relative;
  z-index: 2;
}

.banner-container {
  display: flex;
  gap: 20px;
  padding-inline: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  box-sizing: border-box;
  background-color: var(--mm-c-forest);
  justify-content: space-between;
  align-items: center;
  color: var(--vp-c-white);
  width: 100%;
  max-width: 740px;
}

h2.banner-title {
  /* Add styles for the banner title here */
  color: var(--vp-c-white);;
  border-bottom: none;
  margin: 0px;
  font-size: 1.125rem;
}

.banner-image {
  /* Add styles for the banner image here */
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  position: absolute;
  z-index: 1;
  cursor: initial;
}

.banner-text {
  /* Add styles for the banner text here */
  font-size: 0.75rem;
  margin: 0px;
}

.banner-image-full {
  inset: 0;
}

.banner-image-small {
  display: none;
  right: 0;
  left: auto;
  top: 0;
  width: auto
}

@media screen and (max-width: 991px) {
  .banner {
    margin-inline: 1rem;
  }

  .banner-container {
    flex-direction: column;
    align-items: start;
  }

  .banner-image-full {
    display: none;
  }

  .banner-image-small {
    display: block;
  }

  .banner-header {
    width: 50%
  }
}
</style>
