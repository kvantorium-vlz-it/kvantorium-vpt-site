<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <section>
        <p :class="$style.section__name">
            {{ name }}
        </p>
        <div :class="$style.section__wrapper">
            <slot></slot>
        </div>
    </section>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.section {
    display: inline-block;

    &__name {
        @include typo(body-1-bold);
        border-bottom: rem(2px) solid rgb(var(--c-white));

        margin: 0;
        margin-bottom: rem(4px);
    }
    &__wrapper {
        padding-left: rem(8px);
    }
}
</style>
