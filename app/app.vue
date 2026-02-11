<template>
  <header-main />

  <main class="content">
    <NuxtPage />
  </main>
  <footer-main />
</template>
<script setup lang="ts">
import './main.scss';

const { locale } = useI18n();
const appStore = useAppStore();

let resizeObserver: ResizeObserver | null = null;

const calculateMobile = () => {
  appStore.isMobile = window.innerWidth < 768;
};

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});

onMounted(async () => {
  calculateMobile();

  resizeObserver = new ResizeObserver(calculateMobile);
  resizeObserver.observe(window.document.body);
});

watch(locale, newValue => {
  useHead({
    htmlAttrs: {
      lang: newValue,
    },
  });
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
