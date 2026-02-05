<template>
  <colage-grid />
  <div class="arts">
    <div class="arts__content">
      <div class="arts__wrapper">
        <div class="arts__item">
          <nuxt-img
            class="arts__logo"
            src="https://tts-nuxt.s3.eu-central-1.amazonaws.com/construction-icon.avif"
          />
          <h2 class="arts__title">{{ $t('home.renovation.title') }}</h2>
          <p class="arts__text">{{ $t('home.renovation.description') }}</p>
        </div>
      </div>

      <div class="arts__wrapper">
        <div class="arts__item" @click="navigateTo('/plumbing')">
          <nuxt-img
            class="arts__logo"
            src="https://tts-nuxt.s3.eu-central-1.amazonaws.com/plumbing-icon.avif"
          />
          <h2 class="arts__title">{{ $t('home.plumbing.title') }}</h2>
          <p class="arts__text">{{ $t('home.plumbing.description') }}</p>
        </div>
      </div>

      <div class="arts__wrapper">
        <div class="arts__item" @click="navigateTo('/tiles')">
          <nuxt-img class="arts__logo" src="https://tts-nuxt.s3.eu-central-1.amazonaws.com/tiles-icon.avif" />
          <h2 class="arts__title">{{ $t('home.tiles.title') }}</h2>
          <p class="arts__text">{{ $t('home.tiles.description') }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="videos-section">
    <mobile-vertical-video v-if="isMobile" />
    <div v-else class="videos-section__content">
      <vertical-video src="https://tts-nuxt.s3.eu-central-1.amazonaws.com/video-1.mov" />
      <vertical-video src="https://tts-nuxt.s3.eu-central-1.amazonaws.com/video-2.mov" />
      <vertical-video src="https://tts-nuxt.s3.eu-central-1.amazonaws.com/video-3.mov" />
    </div>
  </div>
</template>
<script setup lang="ts">
const appStore = useAppStore();

const isMobile = computed(() => appStore.isMobile);

definePageMeta({
  name: 'Index',
  layout: 'default',
});

useSeoMeta({
  title: `Tts`,
  description: $t('seo.index'),
});
</script>
<style lang="scss">
.videos-section {
  background-color: var(--dark-bg);
  padding: 96px 0;
  width: 100%;

  &__content {
    width: var(--max-content-width);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
  }
}

.arts {
  background-color: white;
  padding: 40px 0 96px 0;
  width: 100%;

  @include tablet {
    padding: 80px 0;
    width: calc(100% - 48px);
  }

  @include mobile {
    padding: 32px 0;
    width: 100%;
  }

  &__content {
    width: 50%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 32px;

    @include mobile {
      width: 100%;
      display: block;
      text-align: center;
    }
  }

  &__item {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    @include mobile {
      width: 100%;
    }
  }

  &__wrapper {
    @include mobile {
      display: inline-block;
      width: calc(50% - 16px);
      padding: 8px;
    }
  }

  &__logo {
    width: 65%;
  }

  &__title {
    font-family: 'Ruda';
    font-size: 30px;
    font-weight: 700;
    margin: 0;

    @include mobile {
      font-size: 26px;
    }
  }

  &__text {
    text-align: center;
    margin-top: 8px;
    margin-bottom: 0;
    color: var(--dark-text-color);
    font-size: 17px;

    @include mobile {
      font-size: 16px;
    }
  }
}
</style>
