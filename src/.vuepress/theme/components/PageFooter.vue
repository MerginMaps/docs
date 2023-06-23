<template>
  <footer class="page-footer">
    <div class="page-footer__container">
      <div class="page-footer__row">
        <div class="page-footer__col">
          <h4>Company</h4>
          <a href="https://merginmaps.com" target="__blank">Homepage</a>
          <a href="https://merginmaps.com/start-for-free" target="__blank">Start for free</a>
        </div>
        <div class="page-footer__col">
          <img src="/mm_logo_positive_half_padding.png" />
          <p>Copyright &copy; 2021 - {{ year }}</p>
					<p>Lutra Consulting Limited</p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div class="page-footer__center">
        <div>
          <SocialIconsLink icon="linkedin" class="page-footer__icon" />
          <SocialIconsLink icon="twitter" class="page-footer__icon" />
          <SocialIconsLink icon="github" class="page-footer__icon" />
        </div>
        <div>
            <a href="https://merginmaps.com/cookies" target="__blank">Cookie policy</a> &#x2022
            <a href="https://merginmaps.com/privacy-policy" target="__blank">Privacy policy</a> &#x2022
            <a href="https://merginmaps.com/licenses/terms-of-service" target="__blank">Terms of service</a>
          </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from "vue";
import SocialIconsLink from "@theme/components/SocialIconsLink.vue";

export default Vue.extend({
  name: "PageFooter",
  components: { SocialIconsLink },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>

<style lang="scss" scoped>
.page-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.9rem;

  &__icon {
    padding: 0 0.5rem
  }

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 740px;
    border-top: 1px #acacac solid;
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
    width: 33%;

    img {
      height: 2.2rem;
      align-self: start;
    }

    p {
      line-height: 2;
      margin: 0;
    }

    a {
      margin-bottom: 1rem;
    }

    h4 {
      margin-top: 0;
      margin-bottom: 1rem
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
	width:100%;

    img {
      align-self: center;
    }
  }
}
</style>
