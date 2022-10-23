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
.section {
    &__name {
        font-size: var(--fs-body-1);
        font-weight: var(--fw-bold);
        color: rgb(var(--c-white));
        border-bottom: 1px solid rgb(var(--c-primary-100));
        margin-bottom: 0.25rem;
    }
    &__wrapper {
        padding-left: 0.5rem;
    }
}
</style>
