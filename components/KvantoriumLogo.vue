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
@use '@/assets/css/mixins' as *;

.logo {
    --gap: 0.5rem;
    --icon-width: calc(var(--fs-logo-top) + var(--fs-logo-bottom));

    display: inline-grid;
    grid-template-columns: minmax(0, var(--icon-width)) minmax(0, 1fr);
    gap: var(--gap);
    align-items: center;

    &__icon {
        font-size: calc(var(--fs-logo-top) + var(--fs-logo-bottom));
        line-height: 1;

        & > * {
            margin: 0 !important;
        }
    }

    &__icon,
    &__details {
        font-weight: var(--fw-bold);
        color: rgb(var(--c-white));
        word-wrap: unset;
        white-space: nowrap;
    }

    &__top {
        @include typo-logo-top;
    }

    &__bottom {
        @include typo-logo-bottom;
    }
}
</style>
