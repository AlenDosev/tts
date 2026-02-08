<template>
  <div class="page">
    <h1 class="page__title">{{ $t('home.tiles.title') }}</h1>
    <p class="page__description">{{ $t('tiles.description') }}</p>
    <p class="page__description">{{ $t('tiles.description2') }}</p>
  </div>
  <div class="page__gallery">
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
  'https://defma1gvj98ta.cloudfront.net/tiles/p-1/1.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-1/2.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-1/3.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-1/4.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-1/5.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-1/6.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-1/7.avif',
];

const p2Images: string[] = [
  'https://defma1gvj98ta.cloudfront.net/tiles/p-2/1.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-2/2.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-2/3.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-2/4.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-2/5.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-2/6.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-2/7.avif',
];

const p3Images: string[] = [
  'https://defma1gvj98ta.cloudfront.net/tiles/p-3/1.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-3/2.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-3/3.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-3/4.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-3/5.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-3/6.avif',
  'https://defma1gvj98ta.cloudfront.net/tiles/p-3/7.avif',
];
</script>
<style lang="scss" scoped>
.tiles {
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
