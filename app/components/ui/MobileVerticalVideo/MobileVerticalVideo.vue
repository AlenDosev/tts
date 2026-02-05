<template>
  <div class="swiper customer-swiper__swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide customer-swiper__slide">
        <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-1.mov" />
      </div>
      <div class="swiper-slide customer-swiper__slide">
        <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-2.mov" />
      </div>
      <div class="swiper-slide customer-swiper__slide">
        <vertical-video src="https://defma1gvj98ta.cloudfront.net/video-3.mov" />
      </div>
    </div>
    <div class="customer-swiper__actions">
      <button class="customer-swiper__prev customer-swiper__btn" aria-label="Previous Slide">
        <chevron-left-icon class="customer-swiper__icon" />
      </button>
      <button class="customer-swiper__next customer-swiper__btn" aria-label="Next Slide">
        <chevron-right-icon class="customer-swiper__icon" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline';

import 'swiper/css';
import 'swiper/css/navigation';

const swiper = ref<any>();

onMounted(() => {
  swiper.value = new Swiper('.customer-swiper__swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.customer-swiper__next',
      prevEl: '.customer-swiper__prev',
    },
    slidesPerView: 1.2,
    spaceBetween: 24,
    simulateTouch: true,
  });
});
</script>
<style lang="scss" scoped>
.customer-swiper {
  background-color: var(--dark-bg);
  padding: 96px 0;
  width: 100%;

  @include tablet {
    padding: 80px 0;
  }

  @include mobile {
    padding: 64px 0;
  }

  &__title {
    width: 100%;
    text-align: center;
    margin: 0 0 40px 0;
    color: white;

    @include tablet {
      padding: 0 24px;
    }

    @include mobile {
      font-size: 26px;
      padding: 0 16px;
      width: calc(100% - 32px);
    }
  }

  &__actions {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 12px;
    bottom: 0;
    z-index: 1;
    width: 100%;
  }

  &__btn {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: #d2d2d7a3;
    cursor: pointer;

    &.swiper-button-disabled {
      opacity: 0.42;
      cursor: default;
    }

    &:hover {
      background-color: #dfdfe3b2;
    }
  }

  &__icon {
    width: 26px;
    stroke-width: 2.8;
    color: #0000008f;
  }

  &__swiper {
    width: calc(var(--max-content-width) - 48px);
    --swiper-pagination-color: var(--color-primary);
    --swiper-pagination-bullet-inactive-color: white;
    --swiper-pagination-bullet-size: 10px;
    position: relative;
    padding: 0 0 64px 0;

    @include mobile {
      width: calc(var(--max-content-width) - 16px);
    }
  }

  &__slide {
    width: calc(33% - 24px);
    border-radius: 24px;
    overflow: hidden;

    &:hover {
      --content-transform: -32px;
      --transform-value: matrix(1.1, 0, 0, 1.1, 0, 0);
    }

    @include mobile {
      width: calc(50% - 8px);
      aspect-ratio: 0.6;
      border-radius: 16px;
    }
  }
}
</style>
