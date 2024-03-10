<script setup lang="ts" generic="T">
interface Props {
    label: string
    items: T[]
    isHorizontal?: boolean
}

withDefaults(defineProps<Props>(), {
    isHorizontal: false,
})
</script>

<template>
    <div :class="{
        [$style.navigation]: true,
        [$style.horizontal]: isHorizontal,
    }">
        <h3 :class="$style.label">
            {{ label }}
        </h3>

        <ul :class="$style.list">
            <li
                v-for="item, index in items"
                :key="index"
                :class="$style.item"
            >
                <slot :item="item"></slot>
            </li>
        </ul>
    </div>
</template>

<style module>
.label {
    font-size: 1rem;
    font-family: 'BankGothic';
    line-height: 1;
    margin-bottom: 0.75rem;
}
.list {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    padding: 0;
    list-style: none;
}
.horizontal .list {
    flex-direction: row;
    gap: 0.25rem;
    flex-wrap: wrap;
}
</style>
