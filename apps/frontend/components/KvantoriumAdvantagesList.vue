<script setup lang="ts">
interface IAdvantage {
    title: string;
    description: string;
    image: string;
}

defineProps<{
    advantages: IAdvantage[]
}>()
</script>

<template>
    <ul :class="$style.list">
        <li
            v-for="(advantage, index) in advantages"
            :key="index"
        >
            <kvantorium-advantage :advantage="advantage" />
        </li>
    </ul>
    <!-- <slot /> -->
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.list {
    display: flex;
    flex-direction: column;
    gap: #{rem(12px)};

    padding: 0;

    list-style: none;
}
</style>
