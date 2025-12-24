<template>
  <div class="c-collapsible" :class="{ open: isOpen, inverted }">
    <button
      :aria-expanded="isOpen ? 'true' : 'false'"
      :aria-controls="collapsibleId"
      class="c-collapsible__button large"
      :class="{ 'full-width': fullWidth, pure: $slots.title }"
      @click="toggle"
    >
      <slot v-if="$slots.title" name="title" />
      <span v-else class="c-collapsible__title">
        {{ title }}
      </span>
      <chevron-right-icon
        v-show="!disabled"
        class="c-collapsible__chevron"
        :class="{
          open: isOpen,
          inverted,
        }"
      />
    </button>
    <transition name="c-collapsible" @enter="enter" @after-enter="afterEnter" @leave="leave">
      <div v-show="isOpen" :id="collapsibleId" key="content" ref="contentRef" class="c-collapsible__content">
        <slot />
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import './CCollapsible.scss';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

const emit = defineEmits(['open', 'close']);
const props = defineProps({
  title: {
    default: '',
    type: String,
  },
  startOpened: {
    default: false,
    type: Boolean,
  },
  fullWidth: {
    default: false,
    type: Boolean,
  },
  inverted: {
    default: false,
    type: Boolean,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
});

const isOpen = ref(false);
const contentRef = ref<HTMLDivElement>();
const randomId = useId();

const collapsibleId = computed((): string => `c-collapsible-${randomId}`);
const toggle = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    emit('open');
  } else {
    emit('close');
  }
};

const close = () => {
  isOpen.value = false;
};

const open = () => {
  isOpen.value = true;
};

const enter = () => {
  if (!contentRef.value) {
    return;
  }

  const { width } = getComputedStyle(contentRef.value);
  contentRef.value.style.width = width;
  contentRef.value.style.position = 'absolute';
  contentRef.value.style.visibility = 'hidden';
  contentRef.value.style.height = 'auto';

  const { height } = getComputedStyle(contentRef.value);
  contentRef.value.style.width = '100%';
  contentRef.value.style.position = 'relative';
  contentRef.value.style.visibility = 'visible';
  contentRef.value.style.height = '0';

  setTimeout(() => {
    if (contentRef.value) {
      contentRef.value.style.height = height;
    }
  }, 10);
};

const afterEnter = () => {
  if (!contentRef.value) {
    return;
  }

  contentRef.value.style.height = 'auto';
};

const leave = () => {
  if (!contentRef.value) {
    return;
  }

  const { height } = getComputedStyle(contentRef.value);
  contentRef.value.style.height = height;

  setTimeout(() => {
    if (contentRef.value) {
      contentRef.value.style.height = '0';
    }
  }, 10);
};

watch(
  () => props.startOpened,
  newValue => {
    isOpen.value = newValue;
  }
);

onBeforeMount(() => {
  if (props.startOpened) {
    isOpen.value = true;
  }
});

defineExpose({
  toggle,
  open,
  close,
});
</script>
