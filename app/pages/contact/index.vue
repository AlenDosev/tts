<template>
  <div class="page contact">
    <h1 class="contact__title">{{ $t('nav.contact') }}</h1>
    <p class="contact__description">{{ $t('contact.title') }}</p>
    <div class="contact__grid">
      <div class="contact__grid-element">
        <div class="contact__grid-element-top">
          <envelope-icon class="contact__grid-element-icon" />
          <span class="contact__grid-element-label">{{ $t('contact.emailUs') }}</span>
        </div>
        <div class="contact__grid-element-bottom">
          <nuxt-link-locale href="mailto:info@colect.io" class="contact__grid-element-link">
            tts.renovation@outlook.com
          </nuxt-link-locale>
          <span class="contact__grid-element-description">{{ $t('contact.replies') }}</span>
        </div>
      </div>
      <div class="contact__grid-element">
        <div class="contact__grid-element-top">
          <phone-icon class="contact__grid-element-icon" />
          <span class="contact__grid-element-label">{{ $t('contact.callUs') }}</span>
        </div>
        <div class="contact__grid-element-bottom">
          <nuxt-link-locale href="tel:+31355334680" class="contact__grid-element-link">
            +41 76 180 47 57
          </nuxt-link-locale>
          <span class="contact__grid-element-description">{{ timesOpen }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="contact__office">
    <nuxt-img class="contact__office-img" src="https://tts-nuxt.s3.eu-central-1.amazonaws.com/contact.avif" />
  </div>
</template>
<script setup lang="ts">
import { defaultTo } from 'ramda';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';

const { t, locale } = useI18n();

definePageMeta({
  name: 'Contact',
});

useSeoMeta({
  title: `Tts - ${t('nav.contact')}`,
  description: t('seo.contact'),
});

const nl = ref('Netherlands');
const fr = ref('France');
const timesOpen = ref('Mon-Fri 9AM-5PM');

const calculateNames = () => {
  const localIntl = new Intl.DisplayNames([locale.value], {
    type: 'region',
  });

  nl.value = defaultTo('Netherlands', localIntl.of('NL'));
  fr.value = defaultTo('France', localIntl.of('FR'));

  const mondayDate = new Date(Date.UTC(2023, 0, 2));
  const fridayDate = new Date(Date.UTC(2023, 0, 6));
  const monday = Intl.DateTimeFormat(locale.value, { weekday: 'short' }).format(mondayDate).replace(/\./g, '');
  const friday = Intl.DateTimeFormat(locale.value, { weekday: 'short' }).format(fridayDate).replace(/\./g, '');
  timesOpen.value = `${monday}-${friday} 9AM-5PM`;
};

onBeforeMount(() => calculateNames());
watch(locale, () => calculateNames());
</script>
<style lang="scss" scoped>
.contact {
  @include tablet {
    padding: 24px 16px;
    width: calc(var(--max-content-width) - 32px);
  }

  @include mobile {
    padding: 24px 8px;
    width: calc(var(--max-content-width) - 16px);
  }

  &__title {
    font-size: 58px;
    text-align: center;
    width: 100%;
    margin: 0 0 16px 0;

    @include tablet {
      font-size: 56px;
    }

    @include mobile {
      font-size: 40px;
    }
  }

  &__description {
    color: var(--banner-description-color, #2f373f);
    font-size: 19px;
    line-height: 26px;
    font-family: var(--primary-font);
    text-align: center;
    font-weight: 500;
    width: 50%;
    margin: auto;

    @include tablet {
      width: 80%;
    }

    @include mobile {
      width: calc(100% - 32px);
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__grid {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-gap: 32px;
    grid-row-gap: 0px;
    margin-top: 40px;

    @include tablet {
      grid-column-gap: 16px;
    }

    @include mobile {
      flex-direction: column;
      gap: 16px;
    }

    &-element {
      border: solid 1px #dbdbdb;
      width: 30%;
      display: flex;
      flex-direction: column;
      border-radius: 24px;
      padding: 24px;
      gap: 40px;

      @include mobile-and-tablet {
        width: calc(100% - 32px);
        padding: 16px;
        border-radius: 20px;
      }

      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-bottom {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      &-icon {
        color: #9a2a33;
        fill: #fad6d9;
        background-color: #fad6d9;
        width: 32px;
        border-radius: 8px;
        padding: 9px;

        @include mobile-and-tablet {
          width: 30px;
          padding: 8px;
        }
      }

      &-label {
        font-size: 26px;
        font-weight: 600;

        @include tablet {
          font-size: 23px;
        }
      }

      &-link {
        font-weight: 500;
        font-size: 20px;
        text-decoration: none;
        text-align: end;
      }

      &-btn {
        width: fit-content;
        margin-left: auto;
      }

      &-description {
        color: #6f6f6f;
        font-weight: 500;
        text-align: end;

        @include tablet {
          font-size: 14.5px;
        }
      }
    }
  }

  &__office {
    width: var(--max-content-width);
    margin: auto;
    padding: 32px 0;
    position: relative;

    @include mobile {
      padding-bottom: 0;
    }

    &-img {
      width: 100%;
      border-radius: 12px;
      aspect-ratio: auto 1.544;

      @include tablet {
        width: calc(100% - 32px);
        margin-left: 16px;
      }

      @include mobile {
        object-fit: cover;
        aspect-ratio: 1;
        border-radius: 0px;
      }
    }
  }
}
</style>
