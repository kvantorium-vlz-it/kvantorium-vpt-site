<script setup lang="ts">
defineProps<{
    children: any[]
}>()
</script>

<template>
    <KBaseTypography
        variant="body-2"
        #="{ classes }"
    >
        <p :class="[classes, $style.paragraph]" v-bind="$attrs">
            <slot></slot>
        </p>
    </KBaseTypography>
</template>

<style module>
.paragraph {
    margin-block: 0.5em;
    text-wrap: balance;
}
</style>
