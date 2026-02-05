<template>
  <div class="swiper gallery-swiper">
    <div class="swiper-wrapper">
      <div v-for="(image, index) in images" :key="index" class="swiper-slide">
        <nuxt-img class="gallery-swiper__image" :src="image" :alt="`Project photo ${index + 1}`" />
      </div>
    </div>
    <div class="swiper-button-next" />
    <div class="swiper-button-prev" />
  </div>
</template>
<script setup lang="ts">
import { Swiper } from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});

const swiper = ref<any>();

onMounted(() => {
  swiper.value = new Swiper('.gallery-swiper', {
    modules: [EffectFade, Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
  });
});
</script>
<style lang="scss" scoped>
.gallery-swiper {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 16px;

  --swiper-navigation-color: white;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
