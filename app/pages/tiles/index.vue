<template>
  <div class="page">
    <h1 class="tiles__title">{{ $t('home.tiles.title') }}</h1>
    <p class="tiles__description">{{ $t('tiles.description') }}</p>
    <p class="tiles__description">{{ $t('tiles.description2') }}</p>
  </div>
  <div class="tiles__gallery">
    <div class="tiles__content">
      <swipe-gallery :images="p1Images" />
      <swipe-gallery :images="p2Images" />
      <swipe-gallery :images="p3Images" />
    </div>
  </div>
</template>
<script setup lang="ts">
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
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-1/7.avif',
];

const p2Images: string[] = [
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-2/1.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-2/2.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-2/3.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-2/4.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-2/5.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-2/6.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-2/7.avif',
];

const p3Images: string[] = [
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-3/1.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-3/2.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-3/3.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-3/4.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-3/5.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-3/6.avif',
  'https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles/p-3/7.avif',
];
</script>
<style lang="scss" scoped>
.tiles {
  &__title {
    font-size: 58px;
    margin: 0 0 16px;
    text-align: center;
    width: 100%;
    font-weight: 800;
    font-family: Ruda;

    @include mobile {
      font-size: 54px;
    }
  }

  &__description {
    color: #2f373f;
    font-size: 19px;
    font-weight: 500;
    line-height: 26px;
    margin: auto;
    text-align: center;
    width: 64%;
    margin-top: 16px;

    @include mobile {
      width: 100%;
    }
  }

  &__gallery {
    padding: 64px 128px;
    background-color: #232524;

    @include mobile {
      padding: 64px 16px;
    }
  }

  &__content {
    aspect-ratio: 2.4;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 0px;

    @include mobile {
      display: flex;
      flex-direction: column;
      gap: 24px;
      aspect-ratio: 0.75;
    }
  }
}
</style>
