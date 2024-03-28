<script setup lang="ts">
interface Props {
    heading?: string
}

defineProps<Props>()
</script>

<template>
    <div :class="$style.section">
        <h2 :class="$style.heading">
            <slot name="heading">
                {{ heading }}
            </slot>
        </h2>

        <slot></slot>
    </div>
</template>

<style module>
.section {
    --heading-gap: 2rem;
    --section-margin: 5rem;

    margin-block: var(--section-margin);
}
.heading {
    font-size: 1.5rem;
    font-family: 'BankGothic';
    text-align: center;

    margin-bottom: var(--heading-gap);
}
</style>
