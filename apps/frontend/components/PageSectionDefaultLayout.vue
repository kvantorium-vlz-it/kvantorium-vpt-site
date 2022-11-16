<script setup lang="ts">
type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

withDefaults(defineProps<{
    heading?: Heading
}>(), {
    heading: 'h2',
})

</script>

<template>
    <component
        :is="heading"
        v-if="$slots.heading !== undefined"
        :class="$style.heading"
    >
        <slot name="heading" />
    </component>
    <p
        v-if="$slots.subheading !== undefined"
        :class="$style.subheading"
    >
        <slot name="subheading" />
    </p>
    <div :class="$style.content">
        <slot />
    </div>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.heading {
    margin: 0;
    margin-bottom: rem(16px);
    color: rgb(var(--text-heading));

    @include typo(h2-bold);
}
.subheading {
    margin: 0;
    margin-bottom: rem(12px);
    color: rgb(var(--text-subheading));

    @include typo(body-2-normal);
}
.content {
    color: rgb(var(--text-body));
}
</style>
Footer
