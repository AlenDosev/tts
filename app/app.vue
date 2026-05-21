<template>
  <header-main />

  <main class="content">
    <NuxtPage />
  </main>
  <footer-main />
</template>
<script setup lang="ts">
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
