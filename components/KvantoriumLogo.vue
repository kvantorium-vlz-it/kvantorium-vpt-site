<template>
<div :class="$style.Logo">
    <base-icon :class="$style.Logo__icon" icon="logo_monocolor" />
    <div :class="$style.Logo__details">
        <span :class="$style.Logo__top">кванториум</span>
        <br>
        <span :class="$style.Logo__bottom">волжский политех</span>
    </div>
</div>
</template>

<style module lang="postcss">
.Logo {
    --gap: 0.5rem;
    --icon-width: calc(var(--fs-logo-top) + var(--fs-logo-bottom));

    display: inline-grid;
    grid-template-columns: minmax(0, var(--icon-width)) minmax(0, 1fr);
    align-items: center;
    gap: var(--gap);

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
