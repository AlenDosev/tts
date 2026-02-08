<template>
  <div class="page">
    <h1 class="page__title">{{ $t('home.renovation.title') }}</h1>
    <p class="page__description">{{ $t('renovation.description') }}</p>
    <p class="page__description">{{ $t('renovation.description2') }}</p>
  </div>
  <div class="tiles__gallery" />
</template>
<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  name: 'Renovation',
});

useSeoMeta({
  title: `Tts - ${t('home.renovation.title')}`,
  description: t('home.renovation.description'),
});
</script>
<style lang="scss" scoped></style>
