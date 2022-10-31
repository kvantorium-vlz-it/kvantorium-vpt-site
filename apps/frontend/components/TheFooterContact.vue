<script setup lang="ts">
defineProps<{
    name: string;
    link: string;
}>()
</script>

<template>
    <div
        :class="$style.contact"
        :title="link"
    >
        <h4 :class="$style.contact__name">
            {{ name }}:
        </h4>
        <a
            :href="link"
            :class="$style.contact__link"
            target="blank"
        >
            <slot />
        </a>
    </div>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.contact {
    &__name {
        margin: 0;

        font-style: normal;
        color: rgb(var(--c-white));
        @include typo(body-2-bold);
    }

    &__link {
        font-style: normal;
        color: rgb(var(--c-white));
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
        @include typo(body-2-normal);
    }
}
</style>
