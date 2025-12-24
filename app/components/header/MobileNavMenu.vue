<template>
  <div class="mobile-nav">
    <transition name="fade" appear>
      <div v-if="mobileMenuOpen" class="mobile-nav__overlay" @click="$emit('click:close')" />
    </transition>

    <transition name="slide-right" appear>
      <aside v-if="mobileMenuOpen" class="mobile-nav__content">
        <button class="mobile-nav__close" @click="$emit('click:close')">
          <x-mark-icon class="header__mobile-action-icon" />
        </button>
        <c-collapsible full-width :title="$t('common.language')" class="mobile-nav__collapsible">
          <button
            v-for="language in dropdownOptions"
            :key="language.value"
            class="mobile-nav__language"
            :class="{
              selected: language.value === locale,
            }"
            @click="$emit('select:language', language.value)"
          >
            {{ language.label }}
          </button>
        </c-collapsible>
      </aside>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';

defineEmits(['click:close', 'select:language']);

defineProps({
  mobileMenuOpen: {
    default: false,
    type: Boolean,
  },
  dropdownOptions: {
    default: () => [],
    type: Array as PropType<DropdownOption[]>,
  },
  locale: {
    default: 'en',
    type: String,
  },
});
</script>

<style lang="scss">
.mobile-nav {
  display: none;

  @include mobile-and-tablet {
    display: block;
  }

  &__overlay {
    width: 100dvw;
    height: 100dvh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.55);
    position: fixed;
    right: 0;
    top: 0;
  }

  &__content {
    display: flex;
    position: fixed;
    width: 79dvw;
    height: calc(100dvh - 80px);
    background-color: var(--gray-bg);
    right: 0;
    top: 0;
    z-index: 11;
    flex-direction: column;
    overflow-y: auto;

    @include tablet {
      padding: 64px 24px 24px 24px;
    }

    @include mobile {
      padding: 64px 16px 16px 16px;
    }
  }

  &__close {
    position: absolute;
    top: 12px;
    border-radius: 6px;
    width: 40px;
    height: 40px;
    background-color: white;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    color: black;

    @include tablet {
      right: 24px;
    }

    @include mobile {
      right: 16px;
    }
  }

  &__collapsible {
    padding: 6px 16px;
    --collapsible-width: calc(100% - 32px);
    background-color: white;
    border-top: solid 1px var(--gray-bg);
    justify-content: center;

    &:first-of-type {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &:last-of-type {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .c-collapsible__content {
      display: flex;
      flex-direction: column;
    }

    &-element {
      font-size: 16px;
      padding: 12px 8px;
      border-top: solid 1px var(--gray-bg);
      color: black;
      text-decoration: none;

      &:first-of-type {
        border-top: none;
      }
    }
  }

  &__language {
    font-size: 16px;
    margin-top: 4px;
    display: flex;
    justify-content: flex-start;
    padding: 12px 8px;
    background-color: transparent;
    border: none;
    border-top: solid 1px var(--gray-bg);
    color: black;

    &.selected {
      font-weight: 700;
    }
  }
}
</style>
