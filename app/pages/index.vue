<template>
  <hero-section />
  <services-section />
  <emergency-banner />
  <process-section />
  <div class="videos-section">
    <div class="videos-section__header">
      <div class="videos-section__eyebrow">{{ $t('videos.eyebrow') }}</div>
      <h2 class="videos-section__title">{{ $t('videos.title') }}</h2>
    </div>
    <mobile-vertical-video v-if="isMobile" />
    <template v-else>
      <div class="videos-section__content">
        <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-1.mov" />
        <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-2.mov" />
        <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-3.mov" />
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
const appStore = useAppStore();

const isMobile = computed(() => appStore.isMobile);

definePageMeta({
  name: 'Index',
  layout: 'default',
});

useSeoMeta({
  title: $t('seo.title'),
  description: $t('seo.index'),
});
</script>
<style lang="scss">
.videos-section {
  background-color: var(--dark-bg);
  padding: 96px 0;
  width: 100%;

  @include mobile {
    padding: 80px 0;
  }

  &__content {
    width: var(--max-content-width);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
  }

  &__header {
    width: var(--max-content-width);
    margin: 0 auto 32px auto;

    @include mobile {
      padding: 0 16px;
    }
  }

  &__eyebrow {
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b9beb9;
    font-weight: 700;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: '';
      width: 28px;
      height: 1px;
      background: #6f7572;
    }
  }

  &__title {
    font-family: 'Ruda';
    font-weight: 800;
    font-size: clamp(34px, 4.2vw, 56px);
    line-height: 1.02;
    letter-spacing: -0.015em;
    margin: 0;
    color: #fff;
    max-width: 18ch;
  }
}
</style>
