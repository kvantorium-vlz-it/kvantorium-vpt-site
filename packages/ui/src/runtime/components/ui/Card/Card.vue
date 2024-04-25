<template>
    <div :class="$style.card">
        <slot></slot>
    </div>
</template>

<style module>
.card {
    --padding: 1rem;

    padding: var(--padding);
    border-radius: 0.75rem;
    border: 1px solid var(--c-site-background-darker-2);
    background-color: var(--c-site-background);
}
.card > *:first-child {
    margin-top: calc(var(--padding) * -1);
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
.card > *:last-child {
    margin-bottom: calc(var(--padding) * -1);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
}
</style>
