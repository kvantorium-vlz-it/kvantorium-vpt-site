<script setup lang="ts">
defineProps<{
    name: string;
}>()
</script>

<template>
    <section :class="$style.section">
        <h3 :class="$style.section__name">
            {{ name }}
        </h3>

        <div :class="$style.section__wrapper">
            <slot></slot>
        </div>
    </section>
</template>

<style module lang="scss">
@use '@/assets/css/mixins' as *;

.section {
    &__name {
        @include typo-body-1-bold;

        color: rgb(var(--c-white));
        border-bottom: 1px solid rgb(var(--c-primary-100));
        margin: 0;
        margin-bottom: 0.25rem;
    }

    &__wrapper {
        padding-left: 0.5rem;
    }
}
</style>
