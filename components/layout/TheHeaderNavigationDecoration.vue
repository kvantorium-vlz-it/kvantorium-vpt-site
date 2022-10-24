<!-- Circle cutted by overflow if height more than vh -->
<template>
    <div :class="$style.decoration" />
</template>

<style module lang="scss">
.decoration {
    pointer-events: none;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;
    flex-shrink: 0;

    &::after {
        content: '';

        position: absolute;
        z-index: 5;
        right: 0;
        bottom: 0;
        transform: translate(25%, 25%);

        box-sizing: content-box;
        aspect-ratio: 1;
        width: calc(var(--w-mobile-sidebar-width) * 3 / 4);

        border: 3rem solid rgb(var(--c-secondary-200) 0.05);
        border-radius: 100vw;
    }
}
</style>
