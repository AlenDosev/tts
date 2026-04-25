<template>
  <section class="hero">
    <div class="hero__grid">
      <div class="hero__copy">
        <div>
          <span class="hero__eyebrow">{{ $t('hero.eyebrow') }}</span>
          <h1 class="hero__title">
            {{ $t('hero.title') }}<br />
            <em>{{ $t('hero.title2') }}</em>
          </h1>
          <p class="hero__lede">
            {{ $t('hero.lede') }}
          </p>
          <div class="hero__ctas">
            <nuxt-link to="/contact" class="hero__btn hero__btn--primary">
              {{ $t('hero.ctaPrimary') }}
              <arrow-right-icon class="hero__btn-icon" />
            </nuxt-link>
            <a href="tel:+41762804757" class="hero__btn hero__btn--ghost">
              <phone-icon class="hero__btn-icon" />
              {{ $t('hero.ctaCall') }}
            </a>
          </div>
        </div>

        <div class="hero__meta">
          <div>
            <strong>6+</strong>
            <span>{{ $t('hero.stat1') }}</span>
          </div>
          <div>
            <strong>180+</strong>
            <span>{{ $t('hero.stat2') }}</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>{{ $t('hero.stat3') }}</span>
          </div>
        </div>
      </div>

      <div class="hero__collage">
        <div class="hero__cell hero__cell--1" />
        <div class="hero__cell hero__cell--2" />
        <div class="hero__cell hero__cell--3" />
        <div class="hero__cell hero__cell--4" />
        <div class="hero__cell hero__cell--5" />
        <div class="hero__cell hero__cell--6" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon, PhoneIcon } from '@heroicons/vue/24/outline';
</script>

<style lang="scss" scoped>
.hero {
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 28px 20px 0;

  @include mobile {
    padding: 16px 16px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1.05fr 1fr;
    gap: 28px;
    align-items: stretch;

    @include mobile-and-tablet {
      grid-template-columns: 1fr;
    }
  }

  &__copy {
    padding: 12px 0px 12px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 520px;

    @include mobile-and-tablet {
      min-height: auto;
      padding: 4px 0;
    }
  }

  &__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--dark-text-color);
    font-weight: 600;

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
    font-size: clamp(48px, 6.4vw, 84px);
    line-height: 0.96;
    letter-spacing: -0.02em;
    margin: 24px 0 0;
    color: var(--darkest-text-color);
    text-wrap: balance;

    em {
      font-style: normal;
      color: var(--color-primary);
    }
  }

  &__lede {
    color: var(--dark-text-color);
    font-size: 19px;
    line-height: 1.55;
    margin: 24px 0 0;
    max-width: 52ch;
  }

  &__ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 22px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition:
      transform 0.15s ease,
      background 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;

    &-icon {
      width: 16px;
      height: 16px;
      stroke-width: 2.2;
    }

    &--primary {
      background: var(--color-primary);
      color: #fff;

      &:hover {
        background: var(--color-primary--darker);
      }
    }

    &--ghost {
      background: #fff;
      color: var(--darkest-text-color);
      border: 1px solid #dcdcdc;

      &:hover {
        border-color: var(--darkest-text-color);
      }
    }
  }

  &__meta {
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4px;
    border-top: 1px solid #e6e6e6;
    padding-top: 24px;

    > div {
      padding-right: 16px;

      @include mobile {
        padding-right: 8px;
      }
    }

    strong {
      font-family: 'Ruda';
      font-weight: 800;
      font-size: 32px;
      display: block;
      color: var(--darkest-text-color);
      letter-spacing: -0.01em;
    }

    span {
      display: block;
      font-size: 13px;
      color: var(--dark-text-color);
      margin-top: 6px;
      line-height: 1.35;
    }
  }

  /* ───── collage ───── */
  &__collage {
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 8px;
    height: min(78vh, 640px);
    min-height: 520px;

    @include mobile {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 6px;
      height: 70dvh;
      min-height: 0;
    }
  }

  &__cell {
    position: relative;
    background-size: cover;
    background-position: center;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.15));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &:hover::after {
      opacity: 1;
    }

    &--1 {
      grid-column: 1 / span 3;
      grid-row: 1 / span 4;
      background-image: url('https://defma1gvj98ta.cloudfront.net/grid/dpdi5gsodi8lrftns8rt.avif');

      @include mobile {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
    }
    &--2 {
      grid-column: 4 / span 3;
      grid-row: 1 / span 2;
      background-image: url('https://defma1gvj98ta.cloudfront.net/grid/ymicspvehbncwt1utiwu.avif');

      @include mobile {
        grid-column: 3 / span 3;
        grid-row: 1 / span 1;
      }
    }
    &--3 {
      grid-column: 4 / span 2;
      grid-row: 3 / span 2;
      background-image: url('https://defma1gvj98ta.cloudfront.net/grid/rgmcjqcrrzacf5h6lgu6.avif');

      @include mobile {
        grid-column: 3 / span 1;
        grid-row: 2 / span 1;
      }
    }
    &--4 {
      grid-column: 6 / span 1;
      grid-row: 3 / span 4;
      background-image: url('https://defma1gvj98ta.cloudfront.net/grid/nuv3qevnx4ytksdhmvtu.avif');

      @include mobile {
        grid-column: 4 / span 2;
        grid-row: 2 / span 2;
      }
    }
    &--5 {
      grid-column: 1 / span 3;
      grid-row: 5 / span 2;
      background-image: url('https://defma1gvj98ta.cloudfront.net/grid/le4qretujxpekfkceyq4.avif');

      @include mobile {
        grid-column: 1 / span 3;
        grid-row: 3 / span 1;
      }
    }
    &--6 {
      grid-column: 4 / span 2;
      grid-row: 5 / span 2;
      background-image: url('https://defma1gvj98ta.cloudfront.net/grid/hwvbus2ziaued2cy7ugi.avif');

      @include mobile {
        display: none;
      }
    }
  }
}

@keyframes heroStickerSpin {
  to {
    transform: rotate(352deg);
  }
}
</style>
