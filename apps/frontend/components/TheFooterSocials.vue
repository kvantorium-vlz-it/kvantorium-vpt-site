<template>
  <nav :class="$style.socials">
    <the-footer-socials-provider #="{ socials }">
      <the-footer-section-list :class="$style.socials__list">
        <li v-for="(social, index) in socials" :key="index">
          <the-footer-social
            :icon="social.icon"
            :link="social.link"
          />
        </li>
      </the-footer-section-list>
    </the-footer-socials-provider>
  </nav>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.socials {
    &__list {
        flex-direction: row;
        gap: #{rem(4px)};
    }
}
</style>
