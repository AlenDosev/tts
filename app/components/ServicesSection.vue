<template>
  <section class="services__wrapper">
    <div class="services">
      <header class="services__head">
        <div>
          <div class="services__eyebrow">{{ $t('home.services.eyebrow') }}</div>
          <h2 class="services__title">
            <span>{{ $t('home.services.title') }}</span>
            <br />
            <span>{{ $t('home.services.title2') }}</span>
          </h2>
        </div>
      </header>

      <div class="services__grid">
        <nuxt-link v-for="s in serviceCards" :key="s.key" :to="s.to" class="card">
          <div class="card__media" :style="{ backgroundImage: `url(${s.img})` }">
            <span class="card__count">{{ $t(s.countKey) }}</span>
          </div>
          <div class="card__body">
            <h3 class="card__title">{{ $t(s.titleKey) }}</h3>
            <p class="card__desc">{{ $t(s.descKey) }}</p>
            <div class="card__foot">
              <small>{{ $t(s.spanKey) }}</small>
              <span class="card__arrow" aria-hidden="true">
                <arrow-right-icon class="card__arrow-icon" />
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

const IMG = {
  renovation: 'https://defma1gvj98ta.cloudfront.net/renovation/p-1/1.avif',
  plumbing: 'https://defma1gvj98ta.cloudfront.net/plumbing/p-2/1.avif',
  tiles: 'https://defma1gvj98ta.cloudfront.net/tiles/p-2/1.avif',
};

const SERVICES = {
  renovation: {
    to: '/renovation',
    img: IMG.renovation,
    titleKey: 'home.renovation.title',
    descKey: 'home.renovation.description',
    chipKey: 'home.services.card.renovation.chip',
    countKey: 'home.services.card.renovation.count',
    spanKey: 'home.services.card.renovation.span',
  },
  plumbing: {
    to: '/plumbing',
    img: IMG.plumbing,
    titleKey: 'home.plumbing.title',
    descKey: 'home.plumbing.description',
    chipKey: 'home.services.card.plumbing.chip',
    countKey: 'home.services.card.plumbing.count',
    spanKey: 'home.services.card.plumbing.span',
  },
  tiles: {
    to: '/tiles',
    img: IMG.tiles,
    titleKey: 'home.tiles.title',
    descKey: 'home.tiles.description',
    chipKey: 'home.services.card.tiles.chip',
    countKey: 'home.services.card.tiles.count',
    spanKey: 'home.services.card.tiles.span',
  },
} as const;

type ServiceKey = keyof typeof SERVICES;
const DEFAULT_ORDER: ServiceKey[] = ['renovation', 'plumbing', 'tiles'];

const { t } = useI18n();

const serviceCards = computed(() => {
  const raw = t('home.services.order');
  const keys = (raw && raw !== 'home.services.order' ? raw.split(',') : DEFAULT_ORDER)
    .map(s => s.trim())
    .filter((s): s is ServiceKey => s in SERVICES);
  const order = keys.length ? keys : DEFAULT_ORDER;
  return order.map(key => ({ key, ...SERVICES[key] }));
});
</script>

<style lang="scss" scoped>
.services {
  max-width: var(--max-content-width);
  padding: 0 20px;

  @include mobile {
    margin-top: 64px;
    padding: 0 16px;
  }

  &__wrapper {
    background-color: var(--light-bg);
    padding: 64px 0 32px 0;
    margin: 64px 0 0 0;
    display: flex;
    justify-content: center;
  }

  &__head {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 24px;
    margin-bottom: 36px;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__eyebrow {
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--dark-text-color);
    font-weight: 700;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: '';
      width: 28px;
      height: 1px;
      background: currentColor;
      opacity: 0.6;
    }
  }

  &__title {
    font-family: 'Ruda';
    font-weight: 800;
    font-size: clamp(34px, 4.2vw, 56px);
    line-height: 1.02;
    letter-spacing: -0.015em;
    margin: 0;
    color: #111;
    max-width: 18ch;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include mobile-and-tablet {
      grid-template-columns: 1fr;
    }
  }
}

.card {
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  min-height: 480px;
  border: 1px solid #e6e6e6;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 60px -28px rgba(0, 0, 0, 0.18);
    border-color: #dcdcdc;
  }

  &__media {
    position: relative;
    aspect-ratio: 4 / 3;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.1));
    }
  }

  &__count {
    position: absolute;
    right: 14px;
    bottom: 14px;
    padding: 6px 11px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    z-index: 1;
  }

  &__body {
    padding: 24px 24px 26px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  &__title {
    font-family: 'Ruda';
    font-weight: 800;
    font-size: 30px;
    line-height: 1.02;
    letter-spacing: -0.01em;
    margin: 0;
    color: #111;
  }

  &__desc {
    font-size: 15px;
    line-height: 1.55;
    color: #5a6168;
    margin: 0;
  }

  &__foot {
    margin-top: auto;
    padding-top: 14px;
    border-top: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;

    small {
      color: #5a6168;
      font-weight: 500;
    }
  }

  &__arrow {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #111;
    color: #fff;
    display: grid;
    place-items: center;
    transition:
      background 0.2s ease,
      transform 0.2s ease;

    &-icon {
      width: 14px;
      height: 14px;
      stroke-width: 2.4;
    }
  }

  &:hover &__arrow {
    background: var(--color-primary);
    transform: translateX(2px);
  }
}
</style>
