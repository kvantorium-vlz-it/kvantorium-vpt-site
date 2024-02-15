<template>
    <div :class="$style.dot"></div>
</template>

<style module>
.dot {
    position: absolute;
    --circle-size: 40px;
    min-height: var(--circle-size);
    min-width: var(--circle-size);
    width: fit-content;
    height: fit-content;
    border: 1px solid black;
    border-radius: 100%;
    top: calc(var(--circle-size) / 2 * -1);
    left: calc(var(--circle-size) / 2 * -1);
}
</style>
