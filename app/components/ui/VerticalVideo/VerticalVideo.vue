<template>
  <div class="vertical-video">
    <video
      ref="videoRef"
      class="vertical-video__element"
      muted
      playsinline
      preload="metadata"
      :src="props.src"
      @ended="isPlaying = false"
    />
    <button
      type="button"
      class="vertical-video__btn"
      :aria-label="isPlaying ? 'Pause video' : 'Play video'"
      @click="togglePlay"
    >
      <pause-icon v-show="isPlaying" class="vertical-video__btn-icon" aria-hidden="true" />
      <play-icon v-show="!isPlaying" class="vertical-video__btn-icon" aria-hidden="true" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { PauseIcon, PlayIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  src: {
    default: '',
    type: String,
  },
});

const videoRef = ref<HTMLVideoElement | null>(null);

const isPlaying = ref(false);

const pause = () => {
  isPlaying.value = false;
  if (videoRef.value) {
    videoRef.value.pause();
  }
};

const play = () => {
  isPlaying.value = true;
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      isPlaying.value = false;
    });
  }
};

const togglePlay = () => {
  if (isPlaying.value) {
    pause();
  } else {
    play();
  }
};
</script>
<style lang="scss">
.vertical-video {
  border-radius: 24px;
  aspect-ratio: 0.6;
  overflow: hidden;
  transition: transform 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.05);

    @include mobile {
      transform: scale(1);
    }
  }

  &__element {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--dark-bg);
  }

  &__btn {
    position: absolute;
    right: 32px;
    bottom: 32px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-radius: 100%;
    border: 0;
    background-color: var(--gray-bg);
    cursor: pointer;

    &.sound {
      right: 80px;
    }

    @include tablet {
      right: 24px;
      bottom: 24px;

      &.sound {
        right: 72px;
      }
    }

    @include mobile {
      right: 16px;
      bottom: 16px;

      &.sound {
        right: 64px;
      }
    }

    &:hover {
      --icon-color: black;
    }

    &-icon {
      width: 27px;
      color: var(--icon-color, var(--dark-text-color));
    }
  }
}
</style>
