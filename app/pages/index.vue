<template>
  <hero-section />
  <services-section />
  <div class="videos-section">
    <mobile-vertical-video v-if="isMobile" />
    <div v-else class="videos-section__content">
      <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-1.mov" />
      <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-2.mov" />
      <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-3.mov" />
    </div>
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
  title: `Tts`,
  description: $t('seo.index'),
});
</script>
<style lang="scss">
.videos-section {
  background-color: var(--dark-bg);
  padding: 96px 0;
  width: 100%;

  &__content {
    width: var(--max-content-width);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
  }
}
</style>
