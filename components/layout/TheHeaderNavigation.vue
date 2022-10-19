<script setup lang="ts">
const navigation = ref<HTMLElement>(null)

withDefaults(defineProps<{
    isOpen: boolean;
}>(), {
    isOpen: false,
})

const emit = defineEmits<{
    (e: 'close'): void;
    (e: 'open'): void;
}>()

onClickOutside(navigation, (_event) => {
    emit('close')
})

const swipeStartX = ref<number>(null)
useSwipe(navigation, {
    onSwipeEnd: (event, direction) => {
        const swipeEndX = event.changedTouches.item(0).clientX
        const deltaX = Math.abs(swipeStartX.value - swipeEndX)

        const sideBarWidth = parseFloat(getComputedStyle(navigation.value).width)

        const allowedDeltaToCloseSidebar = sideBarWidth / 4

        if (direction === 'RIGHT' || deltaX < allowedDeltaToCloseSidebar) {
            return
        }

        emit('close')
        swipeStartX.value = null
    },
    onSwipeStart: (event) => {
        swipeStartX.value = event.touches.item(0).clientX
    }
})
</script>

<template>
    <nav
        :class="{
            [$style.navigation]: true,
            [$style.open]: isOpen,
        }"
        ref="navigation"
    >
        <the-header-navigation-provider
            #="{ navigation, isGroup, isItem }"
        >
            <template
                v-for="(item, index) in navigation"
                :key="index"
            >
                <the-header-navigation-group
                    v-if="isGroup(item)"
                    :name="item.name"
                    :items="item.items"
                />
                <the-header-navigation-item
                    v-else-if="isItem(item)"
                    :to="item.to"
                >
                    {{ item.label }}
                </the-header-navigation-item>
            </template>
        </the-header-navigation-provider>

        <the-header-navigation-decoration :class="$style.navigation__decoration" />
    </nav>
</template>

<style module lang="scss">
@use '@/assets/css/variables' as *;
@use '@/assets/css/mixins' as *;

@media (max-width: $max-bp-mobile) {
    .navigation {
        --br: var(--br-m);

        @include page-section;

        position: fixed;
        max-height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        width: var(--w-mobile-sidebar-width);

        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        overflow: auto;

        background: var(--bg-sidebar);

        border-top-right-radius: var(--br);
        border-bottom-right-radius: var(--br);

        translate: calc(var(--w-mobile-sidebar-width) * -1);

        transition-property: transform;
        transition: ease-out 0.5s;

        & > * {
            width: 100%;
        }

        &.open {
            translate: 0;
            box-shadow: var(--bs-sidebar);
        }
    }
}
@media (min-width: $min-bp-desktop) {
    .navigation {
        display: flex;
        gap: 0.5rem;

        &__decoration {
            display: none;
        }
    }
}
</style>
