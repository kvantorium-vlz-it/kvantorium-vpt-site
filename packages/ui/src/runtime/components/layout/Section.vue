<script setup lang="ts">
interface Props {
    heading?: string
}

defineProps<Props>()
</script>

<template>
    <div :class="$style.section">
        <KTypography
            font-family="BankGothic"
            font-size="h0"
            :font-weight="500"
            #default="{ classes }"
        >
            <h2
                :class="[classes, $style.heading]"
                v-if="heading || $slots.heading"
            >
                <slot name="heading">
                    {{ heading }}
                </slot>
            </h2>
        </KTypography>

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
    text-align: center;
    text-transform: uppercase;

    margin-bottom: var(--heading-gap);
}
</style>
