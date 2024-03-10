<script setup lang="ts">
interface Props {
    label: string
}

defineProps<Props>()
</script>

<template>
    <div>
        <h3 :class="$style.label">
            {{ label }}
        </h3>

        <div :class="$style.content">
            <slot></slot>
        </div>
    </div>
</template>

<style module>
.label {
    font-size: 2rem;
    font-weight: 400;
    font-family: 'BankGothic';
    margin-bottom: 1.5rem;
    color: var(--c-site-text);
    line-height: 1;
}
.content {
    font-size: 1rem;
    font-weight: 300;
    color: var(--c-site-text);
    line-height: 1.3;
    font-family: 'Circe';
}
</style>
