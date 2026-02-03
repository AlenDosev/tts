<template>
  <footer class="footer">
    <div class="footer__content">
      <h2>
        {{ $t('contact.emergency') }}
      </h2>
      <div class="footer__higher">
        <div class="footer__item">
          <div class="footer__item-row">
            <envelope-icon class="footer__item-icon" />
            <h4>E-Mail</h4>
          </div>

          <a href="mailto:tts.renovation@outlook.com" class="footer__link">tts.renovation@outlook.com</a>
        </div>
        <div class="footer__item">
          <div class="footer__item-row">
            <phone-icon class="footer__item-icon" />
            <h4>{{ $t('common.phone') }}</h4>
          </div>

          <a href="tel:+41761804757" class="footer__link">+41 76 180 47 57</a>
        </div>
      </div>
      <div class="footer__lower">
        <span>© 2026 TTS Renovation</span>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: var(--light-bg);
  padding: 64px 0 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @include tablet {
    padding: 48px 24px 24px 24px;
    width: calc(100% - 48px);
  }

  @include mobile {
    padding: 48px 16px 24px 16px;
    width: calc(100% - 32px);
  }

  &__content {
    width: var(--max-content-width);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  &__lower {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 32px;

    @include mobile {
      flex-direction: column;
      gap: 8px;
    }
  }

  &__higher {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 100%;
    margin: 0 auto;
  }

  &__item {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;

    &-row {
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
    }

    &-icon {
      width: 28px;
      border-radius: 8px;
    }
  }

  &__link {
    color: black;
  }
}
</style>
