<template>
  <div ref="swiperEl" class="swiper gallery-swiper">
    <div class="swiper-wrapper">
      <div v-for="(image, index) in images" :key="index" class="swiper-slide">
        <nuxt-img
          v-if="index <= loadedUpTo"
          class="gallery-swiper__image"
          :src="image"
          :alt="`Project photo ${index + 1}`"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :fetchpriority="priority && index === 0 ? 'high' : undefined"
          :preload="priority && index === 0 ? { fetchPriority: 'high' } : false"
        />
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
  priority: {
    type: Boolean,
    default: false,
  },
});

const swiperEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
const prevEl = ref<HTMLElement | null>(null);
const swiper = shallowRef<Swiper | null>(null);

// The fade effect stacks every slide in the viewport, which defeats native lazy loading.
// Only render images up to one slide ahead of the furthest slide visited.
const loadedUpTo = ref(1);

onMounted(() => {
  swiper.value = new Swiper(swiperEl.value!, {
    modules: [EffectFade, Navigation, Pagination],
    navigation: {
      nextEl: nextEl.value,
      prevEl: prevEl.value,
    },
    effect: 'fade',
    on: {
      slideChange: ({ activeIndex }) => {
        loadedUpTo.value = Math.max(loadedUpTo.value, activeIndex + 1);
      },
    },
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
