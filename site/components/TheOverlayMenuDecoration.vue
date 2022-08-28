<template>
<div :class="$style.Decoration">
    <div :class="$style.Decoration__bottomCircle"></div>
</div>
</template>

<style module lang="postcss">
.Decoration {
    @apply overflow-hidden pointer-events-none;

    &__bottomCircle {
        @apply w-60 h-60 aspect-square box-content;
        @apply border-primary-400 border-16 rounded-full opacity-20;
        @apply absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3;
    }
}
</style>