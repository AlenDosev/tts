<template>
  <section class="process">
    <header class="process__head">
      <div>
        <div class="process__eyebrow">{{ $t('process.eyebrow') }}</div>
        <h2 class="process__title">{{ $t('process.title') }}</h2>
      </div>
    </header>
    <div class="process__grid">
      <div v-for="n in 4" :key="n" class="process__step">
        <div class="process__num">{{ $t(`process.num.${n}`) }}</div>
        <h3>{{ $t(`process.step${n}.title`) }}</h3>
        <p>{{ $t(`process.step${n}.desc`) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.process {
  max-width: var(--max-content-width);
  margin: 96px auto;

  @include mobile {
    margin-top: 64px;
    padding: 0 16px;
  }

  &__head {
    margin-bottom: 36px;
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
    max-width: 21ch;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border-top: 1px solid #e6e6e6;

    @include mobile-and-tablet {
      grid-template-columns: 1fr 1fr;
    }

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__step {
    padding: 28px 24px 28px 0;
    border-right: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    gap: 14px;

    &:last-child {
      border-right: 0;
    }

    & + & {
      padding-left: 24px;
    }

    h3 {
      font-family: 'Ruda';
      font-weight: 700;
      font-size: 22px;
      letter-spacing: -0.01em;
      margin: 0;
    }

    p {
      color: var(--dark-text-color);
      font-size: 15px;
      line-height: 1.5;
      margin: 0;
    }

    @include mobile-and-tablet {
      padding: 24px 0 !important;
      border-right: 0;
      border-bottom: 1px solid #e6e6e6;

      &:last-child {
        border-bottom: 0;
      }
    }
  }

  &__num {
    font-family: 'Ruda';
    font-weight: 800;
    font-size: 14px;
    color: var(--color-primary);
    letter-spacing: 0.06em;
  }
}
</style>
