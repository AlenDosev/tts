<template>
  <header-main />

  <div class="content">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import './main.scss';
</script>
<style lang="scss" scoped>
.content {
  margin-top: 60px;
  min-height: calc(100dvh - 68px);
}
</style>
