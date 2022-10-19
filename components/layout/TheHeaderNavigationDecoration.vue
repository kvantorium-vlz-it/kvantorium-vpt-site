<!-- Circle cutted by overflow if height more than vh -->
<template>
    <div :class="$style.decoration"></div>
</template>

<style module lang="scss">
.decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;
    pointer-events: none;

    flex-shrink: 0;

    &::after {
        z-index: 5;
        position: sticky;
        content: '';
        width: calc(var(--w-mobile-sidebar-width) * 3 / 4);
        aspect-ratio: 1;
        box-sizing: content-box;
        border-radius: 100vw;
        border: 3rem solid rgba(var(--c-secondary-200), 0.05);
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(25%, 25%);
    }
}
</style>
