<template>
  <div class="page">
    <h1 class="page__title">{{ $t('home.plumbing.title') }}</h1>
    <p class="page__description">{{ $t('plumbing.description') }}</p>
    <p class="page__description">{{ $t('plumbing.description2') }}</p>
  </div>
  <div class="tiles__gallery" />
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
</script>
<style lang="scss" scoped></style>
