<template>
  <div ref="dropDownWrapper" class="dropdown-menu">
    <div v-if="isOpen" ref="overlay" class="dropdown-menu__overlay" @click="close" />
    <button
      class="dropdown-menu__button"
      :class="{
        empty: !modelValue,
      }"
      @click.stop="open"
    >
      <span class="dropdown-menu__button-text">
        {{ buttonText }}
      </span>

      <svg class="dropdown-menu__button-icon" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <transition name="c-fade">
      <ul v-show="isOpen" class="dropdown-menu__list">
        <li
          v-for="option in options"
          :key="option.value"
          class="dropdown-menu__list-item"
          :class="{
            selected: isOptionSelected(option),
          }"
          @click.stop="selectOption(option)"
        >
          <span class="dropdown-menu__list-item-text">
            {{ option.label }}
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<DropdownOption[]>,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
});

const dropDownWrapper = ref<any>();
const isOpen = ref(false);

const selectedOption = computed((): DropdownOption => {
  const foundValue = props.options.find(x => x.value === props.modelValue);
  if (foundValue) {
    return foundValue;
  }

  return {
    value: '',
    label: '',
  };
});
const buttonText = computed((): string => {
  if (props.modelValue) {
    return selectedOption.value.label;
  }

  return props.label;
});

const calcBtnPosition = () => {
  const dropDownEl = dropDownWrapper.value;
  const dropdownList = dropDownEl?.querySelector('.dropdown-menu__list');
  const dropdownButton = dropDownEl?.querySelector('.dropdown-menu__button');

  const windowHeight = window.innerHeight;
  const dropDownListHeight = dropdownList?.getBoundingClientRect().height;
  const dropdownButtonOffSetTop = dropdownButton?.getBoundingClientRect().top;

  if (windowHeight - dropdownButtonOffSetTop > dropDownListHeight + 48) {
    dropdownList.style.bottom = 'auto';
  } else {
    dropdownList.style.bottom = '100%';
    dropdownList.style.top = 'auto';
  }
};

const close = () => {
  isOpen.value = false;
};

const open = () => {
  isOpen.value = true;
  setTimeout(() => {
    const dropdownList = dropDownWrapper.value?.querySelector('.dropdown-menu__list') as HTMLElement;
    if (dropdownList) {
      dropdownList.scrollTop = 0; // Scroll to the top
    }
  }, 10);
};

const selectOption = (option: DropdownOption) => {
  close();

  setTimeout(() => {
    emit('update:modelValue', option.value);
  }, 150);
};

const isOptionSelected = (option: DropdownOption): boolean => {
  return option.value === selectedOption.value.value;
};

watch(isOpen, () => {
  if (import.meta.server) {
    return;
  }

  if (isOpen.value) {
    setTimeout(() => {
      calcBtnPosition();
    }, 10);
  }
});
</script>

<style lang="scss" scoped>
.dropdown-menu {
  position: relative;
  width: fit-content;

  @include mobile {
    --dropdown-width: 100%;
  }

  &__overlay {
    position: fixed;
    top: var(--overlay-position-top, 0);
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--overlay-z-index, 24);
    opacity: var(--overlay-opacity, 0);
    height: 100dvh;
    width: 100dvw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--overlay-background, rgba(0, 0, 0, var(--overlay-opacity, 0.55)));
  }

  &__button {
    background-color: white;
    padding: 6px 12px;
    display: flex;
    gap: 6px;
    border-radius: 10px;
    border: solid 1px #dbdbdb;
    cursor: pointer;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    &:hover {
      background-color: #f9fafb;
    }

    &-text {
      color: black;
    }

    &-icon {
      width: 20px;
      fill: #9e9e9e;
    }
  }

  &__list {
    list-style-type: none;
    box-shadow:
      0 1px 1px 0 rgb(66 66 66 / 8%),
      0 1px 3px 1px rgb(66 66 66 / 16%);
    border-radius: 6px;
    padding: 4px;
    margin: 4px 0;
    top: var(--dropdown-height, unset);
    bottom: var(--dropdown-container-bottom);
    right: var(--dropdown-container-right);
    position: var(--dropdown-list-position, absolute);
    z-index: 25;
    will-change: transform;
    background-color: white;
    overflow-y: auto;
    scrollbar-width: auto;
    scrollbar-color: var(--c-onyx--300) #ffffff;
    width: var(--dropdown-list-width, auto);
    max-width: 80dvw;
    box-sizing: border-box;
    min-width: var(--dropdown-min-width, 40px);
    overflow-y: hidden;
    width: 100%;

    @include mobile {
      max-width: 94dvw;
    }
  }

  &__list-item {
    display: flex;
    align-items: center;
    padding: 14px 16px;
    border-radius: 6px;
    background-color: var(--c-white);
    justify-content: flex-start;
    gap: var(--dropdown-list-item-gap, 8px);
    font-family: var(--font-family--secondary);
    line-height: 1;
    font-size: var(--font-size--sm);
    font-weight: var(--font-weight--normal);
    cursor: pointer;

    @include mobile {
      --dropdown-list-item-padding: 9px 12px;
    }

    &:hover {
      background-color: var(--gray-bg);
    }

    &.selected {
      background-color: var(--gray-bg);
      font-weight: 500;
    }

    &-text {
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 18px;
    }
  }

  &--up {
    .c-dropdown__list {
      bottom: 100%;
      top: auto;
      max-height: 192px;
    }
  }

  &--right {
    .c-dropdown__list {
      --dropdown-container-right: 0;
    }
  }
}

.c-fade {
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
