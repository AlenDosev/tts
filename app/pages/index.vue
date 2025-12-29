<template>
  <h1 style="width: 100%; text-align: center">{{ locale }}</h1>
</template>
<script setup lang="ts">
const { locale } = useI18n();

definePageMeta({
  name: 'Index',
  layout: 'default',
});

useSeoMeta({
  title: `Tts`,
});
</script>
<style lang="scss"></style>
