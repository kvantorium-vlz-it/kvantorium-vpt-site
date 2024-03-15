<template>
    <div :class="$style.badge">
        <slot></slot>
    </div>
</template>

<style module>
.badge {
    --text-color: var(--c-site-background);
    --border-color: var(--c-site-background);

    border: 2px solid var(--border-color);
    border-radius: 100vw;
    padding: 0.25rem 1rem;

    font-size: 1rem;
    font-family: 'Circe';
    color: var(--text-color);

    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
}
</style>
