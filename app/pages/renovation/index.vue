<template>
  <div class="page">
    <h1 class="page__title">{{ $t('home.renovation.title') }}</h1>
    <p class="page__description">{{ $t('renovation.description') }}</p>
    <p class="page__description">{{ $t('renovation.description2') }}</p>
  </div>
  <div class="page__gallery">
    <div class="renovation__content">
      <swipe-gallery :images="p1Images" />
      <swipe-gallery :images="p2Images" class="renovation__landscape" />
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  name: 'Renovation',
});

useSeoMeta({
  title: `Tts - ${t('home.renovation.title')}`,
  description: t('home.renovation.description'),
});

const p1Images: string[] = [
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/1.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/2.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/3.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/4.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/5.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/6.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/7.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/8.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-1/9.avif',
];

const p2Images: string[] = [
  'https://defma1gvj98ta.cloudfront.net/renovation/p-2/1.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-2/2.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-2/3.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-2/4.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-2/5.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-2/6.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-2/7.avif',
  'https://defma1gvj98ta.cloudfront.net/renovation/p-2/8.avif',
];
</script>
<style lang="scss" scoped>
.renovation {
  &__content {
    aspect-ratio: 2.4;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 2fr;
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
