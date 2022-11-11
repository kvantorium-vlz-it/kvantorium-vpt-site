<template>
    <div :class="$style.decoration" />
</template>
<style module lang="scss">
@use '@styles/main.scss' as *;

.decoration {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;

    border-radius: inherit;

    &::after {
        $size: #{rem(112px)};

        content: '';

        position: absolute;
        top: 100%;
        left: 70%;
        transform: translate(-90%, -75%);

        box-sizing: content-box;
        aspect-ratio: 1;
        width: $size;
        height: $size;

        border: #{rem(24px)} solid rgb(var(--c-secondary-400));
        border-radius: var(--br-full);
        @include from-breakpoint(desktop) {
            right: 70%;
            left: auto;
            transform: translate(90%, -50%);
        }
    }
}
</style>
