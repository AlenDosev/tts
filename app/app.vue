<template>
  <div>
    <h1>{{ $t('test.k') }}</h1>
    <button @click="selectLanguage('en')">English</button>
    <button @click="selectLanguage('fr')">French</button>
    <button @click="selectLanguage('de')">German</button>
    <h1>{{ locale }}</h1>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const selectLanguage = (lang: 'en' | 'fr' | 'de') => {
  locale.value = lang;
  // localStorage.setItem('colect.io_selectedLanguage', lang);
};
</script>
<style lang="css">
.test {
  max-height: 100dvh;
  height: 100dvh;
}

body {
  background-color: white;
  display: flex;
  justify-self: center;
  margin: 0;
  overflow: hidden;
}
</style>
