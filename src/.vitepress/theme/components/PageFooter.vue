<template>
  <footer class="page-footer">
    <div class="page-footer__container">
      <div class="page-footer__row">
        <div class="page-footer__col">
          <img
            :src="
              withBase(
                darkMode
                  ? '/MM_logo_no gap_HORIZ_COLOR_POLAR.svg'
                  : '/MM_logo_HORIZ_COLOR_VECTOR_no_padding.svg'
              )
            "
            alt="Mergin Maps logo"
          />
          <p>Copyright &copy; 2021 - {{ year }}</p>
          <p>Lutra Consulting Limited</p>
          <p>All rights reserved.</p>
        </div>
        <div class="page-footer__col">
          <p class="title">Company</p>
          <a href="https://merginmaps.com" target="__blank">Homepage</a>
          <a href="https://merginmaps.com/start-for-free" target="__blank"
            >Start for free</a
          >
        </div>
      </div>
      <div class="page-footer__center">
        <div>
          <SocialIconsLink icon="bluesky" class="page-footer__icon" />
          <SocialIconsLink icon="slack" class="page-footer__icon" />
          <SocialIconsLink icon="linkedin" class="page-footer__icon" />
          <SocialIconsLink icon="facebook" class="page-footer__icon" />
          <SocialIconsLink icon="github" class="page-footer__icon" />
          <SocialIconsLink icon="youtube" class="page-footer__icon" />
          <SocialIconsLink icon="mastodon" class="page-footer__icon" />
        </div>
        <div>
          <a href="https://merginmaps.com/cookies" target="__blank"
            >Cookie policy</a
          >
          &#x2022;
          <a href="https://merginmaps.com/privacy-policy" target="__blank"
            >Privacy policy</a
          >
          &#x2022;
          <a
            href="https://merginmaps.com/licenses/terms-of-service"
            target="__blank"
            >Terms of service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import SocialIconsLink from "./SocialIconsLink.vue";
import { withBase, useData } from "vitepress";

import { computed, ref } from "vue";
const data = useData();

const year = ref(new Date().getFullYear());
const darkMode = computed(() => data.isDark.value);
</script>

<style lang="scss" scoped>
.page-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.9rem;

  &__icon {
    padding: 0 0.5rem;
    display: inline-flex;        /* keep it inline with surrounding text */
    align-items: center;         /* vertical centering */
    justify-content: center;
    vertical-align: middle;
  }

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 740px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  &__col {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    img {
      height: 2.2rem;
      align-self: start;
    }

    p {
      line-height: 2;
      margin: 0;
    }

    a {
      margin-bottom: 0.75rem;
      color: var(--vp-c-brand-1);
      transition: color 0.25s;
    }
    a:hover {
      color: var(--vp-c-brand-2);
    }

    .title {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }

  &__center {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
@media screen and (max-width: 911px) {
  .page-footer__row {
    flex-direction: column;
  }

  .page-footer__col {
    align-items: center;
    width: 100%;

    img {
      align-self: center;
    }
  }
}
</style>
