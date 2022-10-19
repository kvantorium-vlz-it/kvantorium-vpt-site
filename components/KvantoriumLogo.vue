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
.logo {
    --gap: 0.5rem;
    --icon-width: calc(var(--fs-logo-top) + var(--fs-logo-bottom));

    display: inline-grid;
    grid-template-columns: minmax(0, var(--icon-width)) minmax(0, 1fr);
    align-items: center;
    gap: var(--gap);

    &__icon {
        font-size: calc(var(--fs-logo-top) + var(--fs-logo-bottom));
        line-height: 1;
        & > * {
            margin: 0 !important;
        }
    }
    &__icon,
    &__details {
        color: var(--white);
        font-weight: var(--fw-bold);
        word-wrap: unset;
        white-space: nowrap;
    }

    &__top {
        font-size: var(--fs-logo-top);
    }
    &__bottom {
        font-size: var(--fs-logo-bottom);
    }
}
</style>
