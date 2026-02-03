<template>
  <div class="page">
    <h1 class="tiles__title">{{ $t('home.tiles.title') }}</h1>
    <p class="tiles__description">{{ $t('home.tiles.description') }}</p>
  </div>
  <div class="tiles__content">
    <gallery :images="p1Images" />
    <gallery />
  </div>
</template>
<script setup lang="ts">
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline';

const { t } = useI18n();

definePageMeta({
  name: 'Tiles',
});

useSeoMeta({
  title: `Tts - ${t('home.tiles.title')}`,
  description: t('home.tiles.description'),
});

const p1Images: string[] = [
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-1/1.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-1/2.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-1/3.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-1/4.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-1/5.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-1/6.avif',
];
</script>
<style lang="scss" scoped>
.tiles {
  &__title {
    font-size: 58px;
    margin: 0 0 16px;
    text-align: center;
    width: 100%;
  }

  &__description {
    color: #2f373f;
    font-size: 19px;
    font-weight: 500;
    line-height: 26px;
    margin: auto;
    text-align: center;
    width: 50%;
  }

  &__content {
    aspect-ratio: 2.33;
    width: calc(100% - 64px);
    margin-left: 32px;

    display: grid;
    grid-template-columns: 0.3629fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 0px;
  }
}
</style>
