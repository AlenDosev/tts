<template>
  <div class="swiper gallery-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in images" :key="index">
        <img class="gallery-swiper__image" :src="image" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>
<script setup lang="ts">
import { Swiper } from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

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
  background-color: #232524;
  border-radius: 16px;

  --swiper-navigation-color: white;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
