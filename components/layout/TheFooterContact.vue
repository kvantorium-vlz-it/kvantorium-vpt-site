<script setup lang="ts">
defineProps<{
    name: string;
    link: string;
}>()
</script>

<template>
    <div :class="$style.contact">
        <h4 :class="$style.contact__name">
            {{ name }}:
        </h4>
        <a :href="link" :class="$style.contact__link">
            <slot></slot>
        </a>
    </div>
</template>

<style module lang="scss">
@use '@/assets/css/mixins' as *;

.contact {
    &__name {
        margin: 0;

        color: rgb(var(--c-primary-200));

        @include typo-body-3;
    }

    &__link {
        color: rgb(var(--c-primary-100));
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }

        @include typo-body-2;
    }
}
</style>
