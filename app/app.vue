<template>
  <header-main />

  <div class="content">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import './main.scss';

const appStore = useAppStore();

let resizeObserver: ResizeObserver | null = null;

const calculateMobile = () => {
  appStore.isMobile = window.innerWidth < 768;
};

onMounted(async () => {
  calculateMobile();

  resizeObserver = new ResizeObserver(calculateMobile);
  resizeObserver.observe(window.document.body);
});
</script>
<style lang="scss" scoped>
.content {
  margin-top: 60px;
  min-height: calc(100dvh - 68px);
}
</style>
