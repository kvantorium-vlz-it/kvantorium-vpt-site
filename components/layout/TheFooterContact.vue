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
.contact {
    &__name {
        color: rgb(var(--c-primary-200));
        font-style: normal;
        font-size: var(--fs-body-3);
        font-weight: var(--fw-regular);

        margin: 0;
    }
    &__link {
        color: rgb(var(--c-primary-100));
        font-size: var(--fs-body-2);
        font-style: normal;
        font-weight: var(--fw);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
