<template>
  <div class="page">
    <h1 class="page__title">{{ $t('home.plumbing.title') }}</h1>
    <p class="page__description">{{ $t('plumbing.description') }}</p>
    <p class="page__description">{{ $t('plumbing.description2') }}</p>
  </div>
  <div class="page__gallery">
    <div class="plumbing__content">
      <swipe-gallery :images="p1Images" />
      <swipe-gallery :images="p2Images" class="plumbing__landscape" />
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  name: 'Plumbing',
});

useSeoMeta({
  title: `Tts - ${t('home.plumbing.title')}`,
  description: t('home.plumbing.description'),
});

const p1Images: string[] = [
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/1.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/2.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/3.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/4.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/5.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/6.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/7.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/8.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-1/9.avif',
];

const p2Images: string[] = [
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/1.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/2.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/3.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/4.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/5.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/6.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/7.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/8.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/9.avif',
  'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/10.avif',
];
</script>
<style lang="scss" scoped>
.plumbing {
  &__content {
    aspect-ratio: 2.4;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 2fr;
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

  &__landscape {
    height: 80dvw;
  }
}
</style>
