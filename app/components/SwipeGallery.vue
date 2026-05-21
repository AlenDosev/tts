<template>
  <div ref="swiperEl" class="swiper gallery-swiper">
    <div class="swiper-wrapper">
      <div v-for="(image, index) in images" :key="index" class="swiper-slide">
        <nuxt-img class="gallery-swiper__image" :src="image" :alt="`Project photo ${index + 1}`" />
      </div>
    </div>
    <div ref="nextEl" class="swiper-button-next" />
    <div ref="prevEl" class="swiper-button-prev" />
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

const swiperEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
const prevEl = ref<HTMLElement | null>(null);
const swiper = ref<Swiper | null>(null);

onMounted(() => {
  swiper.value = new Swiper(swiperEl.value!, {
    modules: [EffectFade, Navigation, Pagination],
    navigation: {
      nextEl: nextEl.value,
      prevEl: prevEl.value,
    },
    effect: 'fade',
  });
});

onUnmounted(() => {
  swiper.value?.destroy(true, true);
  swiper.value = null;
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
