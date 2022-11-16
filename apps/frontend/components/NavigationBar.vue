<script setup lang="ts">
interface IItem {
    label: string
    to?: string
}

interface IGroup {
    name: string
    items: IItem[]
}

defineProps<{
    items: (IItem | IGroup)[]
}>()

const isItem = (target: any): target is IItem => 'label' in target
const isGroup = (target: any): target is IGroup => 'items' in target
</script>

<template>
    <nav :class="$style.navigation">
        <template
            v-for="(item, index) in items"
            :key="index"
        >
            <NavigationItem
                v-if="isItem(item)"
                :to="item.to"
            >
                {{ item.label }}
            </NavigationItem>
            <NavigationGroup
                v-else
                :items="item.items"
                :name="item.name"
                absolute
            />
        </template>
    </nav>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.navigation {
    display: flex;
    align-items: center;
    gap: rem(8px);
}
</style>
