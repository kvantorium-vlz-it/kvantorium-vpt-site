<script setup lang="ts">
type As = 'div' | 'section' | 'article' | 'main' | 'footer' | 'header'
withDefaults(defineProps<{
    as?: As
    wrapperClass?: string
}>(), {
    as: 'section',
})

</script>

<template>
    <div
        :class="$style.section"
    >
        <component
            :is="as"
            :class="[
                $style.section__wrapper,
                wrapperClass,
            ]"
        >
            <slot />
        </component>
    </div>
</template>

<style module lang="scss">
@use '../assets/styles/main' as *;

.section {
    --bg-color: var(--bg);
    --p-x: #{rem(16px)};
    --p-y: #{rem(12px)};

    background-color: rgb(var(--bg-color));

    &:only-child {
        height: 100%;
    }
    &:only-child &__wrapper {
        height: 100%;
    }

    &__wrapper {
        height: 100%;
        width: 100%;

        padding: var(--p-y) var(--p-x);
        background-color: inherit;
    }
    @include from-breakpoint(desktop) {
        &__wrapper {
            position: relative;
            max-width: rem($desktop-page-section-max-width);
            margin: 0 auto;

            &::after,
            &::before {
                content: '';
                position: absolute;
                top: 0;
                width: rem($page-section-shadow-width);
                height: 100%;
            }
            &::before {
                left: -#{$page-section-shadow-width};
                box-shadow: var(--bs-page-section-left);
            }
            &::after {
                right: -#{$page-section-shadow-width};
                box-shadow: var(--bs-page-section-right);
            }
        }
    }
}
</style>
