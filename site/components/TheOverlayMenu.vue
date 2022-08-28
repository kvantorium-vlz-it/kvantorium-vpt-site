<template>
<aside :class="$style.Menu">
    <vertical-navigation :class="$style.Menu__navigation" />
    <the-overlay-menu-decoration :class="$style.Menu__decoration" />
</aside>
</template>

<style module lang="postcss">
.Menu {
    @apply header-gradient page-section;
    @apply rounded-tr-3xl rounded-br-3xl shadow-overlay;
    @apply relative;

    &__navigation {
        @apply overflow-y-auto h-full z-20;
    }
    &__decoration {
        @apply absolute top-0 bottom-0 left-0 right-0 z-10;
    }
}
</style>