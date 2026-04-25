<template>
  <section class="emergency-banner__wrapper">
    <div class="emergency-banner">
      <div class="emergency-banner__inner">
        <div class="emergency-banner__pulse" aria-hidden="true">
          <phone-icon class="emergency-banner__pulse-icon" />
        </div>
        <div class="emergency-banner__text">
          <div class="emergency-banner__title">{{ $t('banner.emergency.title') }}</div>
          <div class="emergency-banner__sub">{{ $t('banner.emergency.sub') }}</div>
        </div>
        <a :href="`tel:${phone.replace(/\s/g, '')}`" class="emergency-banner__phone">
          <phone-icon class="emergency-banner__phone-icon" />
          {{ phone }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhoneIcon } from '@heroicons/vue/24/outline';

withDefaults(defineProps<{ phone?: string }>(), { phone: '+41 76 280 47 57' });
</script>

<style lang="scss" scoped>
.emergency-banner {
  max-width: var(--max-content-width);
  min-width: calc(var(--max-content-width) - 80px);

  @include mobile {
    margin: 32px 0;
    padding: 0 16px;
  }

  &__wrapper {
    background-color: var(--light-bg);
    padding: 64px 0;
    margin: 0;
    display: flex;
    justify-content: center;

    @include mobile {
      padding: 32px 0;
    }
  }

  &__inner {
    background: var(--dark-bg);
    color: #fff;
    border-radius: 22px;
    padding: 32px 38px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 24px;
    overflow: hidden;
    position: relative;

    @include mobile {
      grid-template-columns: 1fr;
      padding: 24px;
      gap: 20px;
    }
  }

  &__pulse {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--color-primary);
    display: grid;
    place-items: center;
    flex: 0 0 56px;
    box-shadow: 0 0 0 0 rgba(246, 116, 26, 0.55);
    animation: bannerPulse 2s ease-out infinite;

    &-icon {
      width: 24px;
      height: 24px;
      color: #fff;
      stroke-width: 2.2;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__title {
    font-family: 'Ruda';
    font-weight: 800;
    font-size: 26px;
    line-height: 1.1;
    letter-spacing: -0.01em;

    @include mobile {
      font-size: 22px;
    }
  }

  &__sub {
    font-size: 15px;
    color: #cfd3d6;
    max-width: 56ch;
  }

  &__phone {
    font-family: 'Ruda';
    font-weight: 800;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    padding: 14px 22px;
    border-radius: 999px;
    background: var(--color-primary);
    transition: background 0.2s ease;

    &:hover {
      background: var(--color-primary--darker);
    }

    &-icon {
      width: 18px;
      height: 18px;
      stroke-width: 2.2;
    }
  }
}

@keyframes bannerPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(246, 116, 26, 0.55);
  }
  70% {
    box-shadow: 0 0 0 22px rgba(246, 116, 26, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(246, 116, 26, 0);
  }
}
</style>
