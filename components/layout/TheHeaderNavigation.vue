<script setup lang="ts">
const navigation = ref<HTMLElement>(null)

onClickOutside(navigation, (_event) => {
    isOpen.value = false
})

const isOpen = ref<boolean>(false)

useSwipe(navigation, {
    onSwipeEnd: (_event, direction) => {
        if (direction === 'LEFT') {
            isOpen.value = false
        }
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
    </nav>
</template>

<style module lang="scss">
@use '@/assets/css/variables' as *;
@use '@/assets/css/mixins' as *;

$mobile-sidebar-width: 16rem;

@media (max-width: $max-bp-mobile) {
    .navigation {
        --br: var(--br-m);

        @include page-section;

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: var(--w-mobile-sidebar-width);

        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        background: var(--bg-sidebar);

        border-top-right-radius: var(--br);
        border-bottom-right-radius: var(--br);

        translate: calc(var(--w-mobile-sidebar-width) * -1);
        // transform: translateX(calc(var(--w-mobile-sidebar-width) * -1));

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
</style>
