<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSiteSettingsStore } from '@/store/siteSettings'

const siteSettingsStore = storeToRefs(useSiteSettingsStore())
</script>

<template>
  <page-section :class="$style.footer" as="footer">
    <div :class="$style.footer__sections">
      <the-footer-section
        name="Навигация"
        :class="$style.footer__section"
      >
        <the-footer-navigation />
      </the-footer-section>

      <the-footer-section
        name="Соц. сети"
        :class="$style.footer__section"
      >
        <the-footer-socials />
      </the-footer-section>

      <the-footer-section
        name="Контакты"
        :class="$style.footer__section"
      >
        <the-footer-contacts />
      </the-footer-section>
    </div>

    <hr :class="$style.footer__separator">
    <p :class="$style.footer__copyright">
      &#169;
      {{ new Date().getFullYear() }}
      {{ siteSettingsStore.footerCopyright }}
    </p>
  </page-section>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.footer {
    /* stylelint-disable-next-line order/order */
    background-color: rgb(var(--bg-footer));

    &__sections {
        --gap: #{rem(8px)};

        display: flex;
        flex-flow: row wrap;
        gap: var(--gap);
        justify-content: space-between;
    }

    &__section {
        width: calc((100% / 2) - var(--gap) / 2);
        max-width: calc((100% / 2) - var(--gap) / 2);
    }

    &__separator {
        margin-top: #{rem(8px)};
        margin-bottom: #{rem(4px)};

        border: 1px solid rgb(var(--c-white));
    }

    &__copyright {
        margin: 0;

        color: rgb(var(--c-white));
        text-align: center;
        @include typo(body-2-normal);
    }
    @include from-breakpoint(desktop) {
        &__section {
            width: auto;
        }
    }
}
</style>
