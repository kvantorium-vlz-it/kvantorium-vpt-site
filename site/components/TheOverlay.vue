<template>
<div
    ref="overlay"
    :class="$style.Overlay"
>
    <the-header
        @menu-button-click="toggle"
        :class="$style.Overlay__header"
    />
    <the-overlay-menu
        v-if="isOpened"
        ref="menu"
        :class="$style.Overlay__menu"
    />
</div>
</template>

<script setup lang="ts">
const {
    isOpened,
    toggle,
    close,
    open,
} = useOpenable()

const menu = ref<HTMLElement>(null)
const overlay = ref<HTMLElement>(null)

onClickOutside(menu, (event: PointerEvent) => {
    if (!(event.target instanceof Node)) return
    if (overlay.value.contains(event.target)) return

    close()
})

onMounted(() => {
    useSwipe(document.body, {
        onSwipeEnd: (_event, direction) => {
            if (direction === 'LEFT') close()
            if (direction === 'RIGHT') open()
        }
    })
})
</script>

<style module lang="postcss">
.Overlay {
    @apply sticky top-0;

    &__header {
        @apply sticky top-0 w-full;
    }
    &__menu {
        @apply w-4/5 h-screen;
        @apply fixed top-0 bottom-0 left-0;
    }
}
</style>