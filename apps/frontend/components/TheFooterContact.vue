<script setup lang="ts">
import { AnchorHTMLAttributes } from 'vue'

interface IContact {
    title: string
    label: string
    link?: string
}
defineProps<{
    contact: IContact
    target?: AnchorHTMLAttributes['target']
}>()
</script>

<template>
    <div :class="$style.contact">
        <p :class="$style.contact__title">
            {{ contact.title }}:
        </p>
        <a
            :class="$style.contact__link"
            :href="contact.link"
            :target="target"
        >
            {{ contact.label }}
        </a>
    </div>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.contact {
    color: rgb(var(--c-white));
    font-style: normal;

    &__title {
        @include typo(body-2-bold);
        margin: 0;
    }
    &__link {
        @include typo(body-3-normal);

        text-decoration: none;
        color: inherit;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
