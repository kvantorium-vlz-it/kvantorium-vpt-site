<template>
    <div :class="$style.dot"></div>
</template>

<style module>
.dot {
    position: absolute;
    --circle-size: 1.5rem;
    min-height: var(--circle-size);
    min-width: var(--circle-size);
    width: fit-content;
    height: fit-content;
    background-color: var(--c-site-background);
    border: 2px solid var(--c-site-background-darker-2);
    border-radius: 100%;
    top: calc(var(--circle-size) / 2 * -1);
    left: calc(var(--circle-size) / 2 * -1);
}
</style>
