<template>
  <button :class="$style.chevron">
    <nuxt-icon name="chevron" />
  </button>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.chevron {
    cursor: pointer;

    padding: 0;

    font-size: #{rem(24px)};
    color: rgb(var(--c-primary-600));

    background: none;
    border: none;
    @include from-breakpoint(desktop) {
        font-size: #{rem(32px)};
    }
}
</style>
