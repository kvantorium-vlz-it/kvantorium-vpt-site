<script setup lang="ts">
interface Props {
    label: string
}

defineProps<Props>()
</script>

<template>
    <div>
        <KBaseTypography
            variant="heading-2"
            #="{ classes }"
        >
            <h3 :class="[$style.label, classes]">
                {{ label }}
            </h3>
        </KBaseTypography>

        <KBaseTypography
            variant="body-3"
            #="{ classes }"
        >
            <div :class="[$style.content, classes]">
                <slot></slot>
            </div>
        </KBaseTypography>
    </div>
</template>

<style module>
.label {
    /* font-size: 2rem; */
    /* font-weight: 400; */
    /* font-family: 'BankGothic'; */
    /* margin-bottom: 1.5rem; */
    color: var(--c-site-text);
    /* line-height: 1; */
}
.content {
    /* font-size: 1rem; */
    /* font-weight: 300; */
    color: var(--c-site-text-lighter-2);
    /* line-height: 1.3; */
    /* font-family: 'Circe'; */
}
</style>
