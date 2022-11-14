<template>
    <div :class="$style.logo">
        <nuxt-icon :class="$style.logo__icon" name="logo_monocolor" />
        <div :class="$style.logo__details">
            <span :class="$style.logo__top">кванториум</span>
            <br>
            <span :class="$style.logo__bottom">волжский политех</span>
        </div>
    </div>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.logo {
    --icon-size: calc(var(--fs-logo-top) + var(--fs-logo-bottom));

    display: inline-flex;
    gap: rem(8px);
    align-items: center;
    color: rgb(var(--c-white));

    &__icon {
        font-size: var(--icon-size);
        line-height: 1;
    }
    &__icon,
    &__details {
        font-weight: var(--fw-bold);
        word-wrap: unset;
        white-space: nowrap;
    }
    &__top {
        @include typo(logo-top-bold);
    }
    &__bottom {
        @include typo(logo-bottom-bold);
    }
}
</style>
