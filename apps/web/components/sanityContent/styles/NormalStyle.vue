<script setup lang="ts">
defineProps<{
    children: any[]
}>()
</script>

<template>
    <KTypography
        font-family="Circe"
        :font-weight="400"
        #="{ classes }"
    >
        <p :class="[classes, $style.paragraph]" v-bind="$attrs">
            <slot></slot>
        </p>
    </KTypography>
</template>

<style module>
.paragraph {
    margin-block: 0.5em;
    text-indent: 1.5rem;
}
</style>
