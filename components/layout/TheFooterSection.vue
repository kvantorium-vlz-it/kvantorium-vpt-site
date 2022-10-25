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
            <slot />
        </div>
    </section>
</template>

<style module lang="scss">
@use '@styles/main' as *;

.section {
    &__name {
        margin: 0;
        margin-bottom: 0.25rem;

        color: rgb(var(--c-white));

        border-bottom: 1px solid rgb(var(--c-primary-100));
        @include typo(body-1-bold);
    }

    &__wrapper {
        padding-left: 0.5rem;
    }
}
</style>
