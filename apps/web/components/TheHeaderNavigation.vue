<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

interface NavigationItem {
    label: string
    to?: RouterLinkProps['to']
}

interface NavigationGroup {
    label: string
    items: NavigationItem[]
}

type Variant = 'light' | 'dark'

interface Props {
    items: (NavigationGroup | NavigationItem)[]
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    variant: 'light'
})

function isNavigationGroup(item: NavigationGroup | NavigationItem): item is NavigationGroup {
    return 'items' in item
}
</script>

<template>
    <nav>
        <ol :class="$style.list">
            <li v-for="item in items">
                <NavigationDropdownItem
                    v-if="isNavigationGroup(item)"
                    :="item"
                    :variant="variant"
                />
                <NavigationItem
                    v-else :="item"
                    :variant="variant"
                />
            </li>
        </ol>
    </nav>
</template>

<style module>
.list {
    align-items: center;
    display: flex;
    gap: 1rem;
    list-style: none;
}
</style>
