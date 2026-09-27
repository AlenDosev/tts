<template>
  <header-main />

  <main class="content">
    <NuxtPage />
  </main>
  <footer-main />
</template>
<script setup lang="ts">
import rudaFont from '~/assets/fonts/Ruda.woff2?url';
import urbanistFont from '~/assets/fonts/Urbanist.woff2?url';

const { locale } = useI18n();
const appStore = useAppStore();

let mobileQuery: MediaQueryList | null = null;

const onMobileQueryChange = (e: MediaQueryListEvent) => {
  appStore.isMobile = e.matches;
};

useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
  link: [
    { rel: 'preload', as: 'font', type: 'font/woff2', href: urbanistFont, crossorigin: '' },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: rudaFont, crossorigin: '' },
  ],
});

onMounted(() => {
  mobileQuery = window.matchMedia('(max-width: 767px)');
  appStore.isMobile = mobileQuery.matches;
  mobileQuery.addEventListener('change', onMobileQueryChange);
});

onUnmounted(() => {
  mobileQuery?.removeEventListener('change', onMobileQueryChange);
});
</script>
<style lang="scss" scoped>
.content {
  margin-top: 60px;
  min-height: calc(100dvh - 68px);

  @include tablet {
    min-height: calc(50dvh - 68px);
  }
}
</style>
