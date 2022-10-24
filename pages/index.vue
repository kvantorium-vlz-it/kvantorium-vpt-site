<template>
    <the-hero />
    <div :class="$style.a">
        Lorem, ipsum.
    </div>
    <div class="jgkwa">
        Lorem, ipsum.
    </div>
</template>

<style module lang="scss">
@use '@/assets/css/functions.scss' as *;
@use '@/assets/css/breakpoints' as *;

.a {
    &::after {
        content: "#{$bp-min-desktop}";
    }
}
</style>
