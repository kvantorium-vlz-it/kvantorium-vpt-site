<!-- Page header component -->
<template>
<header
    :class="{
        [$style.Header]: true,
        [$style.Opened]: isOpened,
    }"
>
    <page-header-summary @menu-button-click="toggle" />

    <div v-if="isOpened" :class="$style.Header__mobileMenu">
        <page-header-navigation />
    </div>

</header>
</template>

<script setup lang="ts">
const {
    isOpened,
    toggle,
} = useDropdown()
</script>

<style module lang="postcss">
.Header {
    @apply w-full;

    &__mobileMenu {
        @apply page-section;
        @apply header-gradient;
        @apply flex-1 overflow-y-auto;
    }

    &.Opened {
        @apply fixed h-screen;
        @apply flex flex-col;
    }

    @apply sticky top-0;
}
</style>