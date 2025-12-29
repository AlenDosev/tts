<template>
  <header class="header">
    <div class="header__main">
      <div class="header__content">
        <nuxt-link to="/">
          <nuxt-img class="header__logo" src="https://tts-nuxt.s3.eu-central-1.amazonaws.com/logo-light.avif" />
        </nuxt-link>
        <div class="header__actions">
          <nav class="header__nav">
            <nuxt-link
              to="/contact"
              class="header__nav-item"
              :class="{
                selected: isSelected('Contact'),
              }"
            >
              {{ $t('nav.contact') }}
            </nuxt-link>
          </nav>
          <dropdown-menu
            :model-value="locale"
            :options="dropdownOptions"
            class="header__language-selector"
            @update:model-value="selectLanguage"
          />
        </div>
        <button class="header__mobile-action" @click="mobileMenuOpen = true">
          <bars3-icon class="header__mobile-action-icon" />
        </button>
      </div>
    </div>
    <header-mobile-nav-menu
      :mobile-menu-open="mobileMenuOpen"
      :dropdown-options="dropdownOptions"
      :locale="locale"
      @click:close="mobileMenuOpen = false"
      @select:language="selectLanguage"
    />
  </header>
</template>
<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/solid';
const { getSelectedLanguage } = useCommon();
const { locale } = useI18n();
const route = useRoute();

const mobileMenuOpen = ref(false);

const dropdownOptions = computed((): DropdownOption[] => {
  const result: DropdownOption[] = [];

  result.push({
    label: 'English',
    value: 'en',
  });
  result.push({
    label: 'Deutsch',
    value: 'de',
  });
  result.push({
    label: 'Français',
    value: 'fr',
  });
  return result;
});

const selectLanguage = (lang: 'en' | 'fr' | 'de') => {
  locale.value = lang;
  localStorage.setItem('tts_selectedLocale', lang);
};

const isSelected = (val: string) => {
  return val === route.name;
};

onBeforeMount(() => {
  locale.value = getSelectedLanguage();
});
</script>
<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: white;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  z-index: 2;

  &__main {
    background-color: white;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    width: var(--max-content-width);
    display: flex;
    justify-content: space-between;
    height: 100%;
    z-index: 2;
    padding: 0 16px;

    @include mobile-and-tablet {
      padding: 0;
    }
  }

  &__logo {
    height: 56px;

    @include mobile {
      height: 56px;
    }
  }

  &__btn {
    height: 40px;
  }

  &__nav {
    padding: 0 12px 0 16px;
    height: 100%;
    cursor: pointer;
    display: flex;

    &-item {
      padding: 0 16px;
      font-size: 20px;
      border-bottom: 3px white solid;
      height: calc(100% - 3px);
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--dark-text-color);
      font-weight: 400;
      background-color: white;
      text-decoration: none;

      &.selected {
        font-weight: 600;
      }

      &:hover {
        font-weight: 600;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;

    @include mobile-and-tablet {
      display: none;
    }
  }

  &__language-selector {
    margin-left: 24px;
    width: 108px;
    min-width: 108px;
  }

  &__mobile-action {
    display: none;

    @include tablet {
      margin: 0 16px;
    }

    @include mobile {
      margin: 0 8px;
    }

    @include mobile-and-tablet {
      width: 44px;
      height: 100%;
      background-color: white;
      border: none;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
    }

    &-icon {
      width: 24px;

      @include tablet {
        width: 26px;
      }
    }
  }
}

.slide-right {
  &-enter-active,
  &-leave-active {
    transition: transform 0.3s;
  }

  &-enter,
  &-enter-from,
  &-leave-to {
    transform: translate3d(100%, 0, 0);
    transition: transform 0.3s;
  }
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.28s linear;
  }

  &-enter,
  &-enter-from,
  &-leave,
  &-leave-to {
    transition: opacity 0.3s linear;
    opacity: 0 !important;
  }
}
</style>
