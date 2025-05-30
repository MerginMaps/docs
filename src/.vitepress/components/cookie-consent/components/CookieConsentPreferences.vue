<template>
  <div class="cookie-consent-preferences" @click.self="onCloseClick">
    <div class="cookie-consent-preferences__container">
      <!-- Close icon -->
      <div class="cookie-consent-preferences__close">
        <cookie-consent-button secondary icon @on-click="onCloseClick" :style="{ marginRight: '0.5rem' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </cookie-consent-button>
      </div>

      <!-- Main content -->
      <div class="cookie-consent-preferences__content">
        <h2>Privacy preference center</h2>
        <p class="cookie-consent-preferences__desc">
          When you visit websites, they may store or retrieve data in your
          browser. This storage is often necessary for the basic functionality
          of the website. The storage may be used for marketing, analytics, and
          personalization of the site, such as storing your preferences. Privacy
          is important to us, so you have the option of disabling certain types
          of storage that may not be necessary for the basic functioning of the
          website. Blocking categories may impact your experience on the
          website.
        </p>

        <div class="cookie-consent-preferences__item">
          <h3>Essential</h3>
          <p><b>Always Active</b></p>
        </div>
        <p class="cookie-consent-preferences__desc">
          These items are required to enable basic website functionality.
        </p>

        <div class="cookie-consent-preferences__item">
          <h3>Marketing</h3>
          <input type="checkbox" v-model="values.marketing" />
        </div>
        <p class="cookie-consent-preferences__desc">
          These items are used to deliver advertising that is more relevant to
          you and your interests. They may also be used to limit the number of
          times you see an advertisement and measure the effectiveness of
          advertising campaigns. Advertising networks usually place them with
          the website operator’s permission.
        </p>

        <div class="cookie-consent-preferences__item">
          <h3>Personalization</h3>
          <input type="checkbox" v-model="values.personalization" />
        </div>
        <p class="cookie-consent-preferences__desc">
          These items allow the website to remember choices you make (such as
          your user name, language, or the region you are in) and provide
          enhanced, more personal features. For example, a website may provide
          you with local weather reports or traffic news by storing data about
          your current location.
        </p>

        <div class="cookie-consent-preferences__item">
          <h3>Analytics</h3>
          <input type="checkbox" v-model="values.analytics" />
        </div>
        <p class="cookie-consent-preferences__desc">
          These items help the website operator understand how its website
          performs, how visitors interact with the site, and whether there may
          be technical issues. This storage type usually doesn’t collect
          information that identifies a visitor.
        </p>

        <div class="cookie-consent-preferences__buttons">
          <cookie-consent-button @on-click="onSaveClick">
            Confirm my preferences and close
          </cookie-consent-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import CookieConsentButton from "./CookieConsentButton.vue";

const props = defineProps({
  initialValues: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits(["on-save", "on-close"]);
const values = ref<{ marketing?: boolean, analytics?: boolean, personalization?: boolean }>({});
watch(
  props.initialValues,
  (value) => {
    values.value = { ...value };
  },
  { immediate: true }
);
function onSaveClick() {
  emits("on-save", values.value);
}
function onCloseClick() {
  emits("on-close");
}
</script>

<style lang="scss" scoped>
.cookie-consent-preferences {
  position: fixed;
  z-index: 999;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 5, 36, 0.6);

  &__container {
    position: relative;
    width: 80%;
    max-width: 600px;
    max-height: 70svh;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
  }

  &__content {
    overflow: auto;
    padding: 30px;

    // Reset some vuepress styling

    h2 {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
      font-size: 1.5rem;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-size: 0.75rem;

    input[type="checkbox"] {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    }

    input[type="checkbox"]:checked {
      accent-color: #00a884;
    }

    h3 {
      color: #00a884;
      margin: 0;
      font-size: 1rem;
    }

    // Reset some vuepress styling

    p {
      margin: 0;
    }
  }

  &__desc {
    font-size: 0.75rem;
  }

  &__buttons {
    display: flex;
    justify-content: end;
  }

  &__close {
    position: absolute;
    right: -1.5rem;
    top: -1rem;
  }
}
</style>
