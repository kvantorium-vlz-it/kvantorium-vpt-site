<script setup lang="ts">
type As = 'section' | 'main' | 'header' | 'footer' | 'div'

withDefaults(defineProps<{
  as?: As
  wrapperClass?: string
}>(), {
  as: 'div',
  wrapperClass: '',
})
</script>

<template>
  <component :is="as" :class="$style.section">
    <div :class="[$style.section__wrapper, wrapperClass]" v-bind="$attrs">
      <slot />
    </div>
  </component>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.section {
    --bg-color: var(--bg);

    background-color: rgb(var(--bg-color));

    &__wrapper {
        $shadow-width: rem($page-section-shadow-width);

        background-color: inherit;
        // @include page-section-padding;
        @include from-breakpoint(desktop) {
            position: relative;

            max-width: #{rem($desktop-page-section-max-width)};
            margin: 0 auto;

            &::after,
            &::before {
                content: '';

                position: absolute;
                top: 0;

                width: #{$shadow-width};
                height: 100%;
            }

            &::before {
                left: -#{$shadow-width};

                box-shadow: var(--bs-page-section-left);
            }

            &::after {
                right: -#{$shadow-width};

                box-shadow: var(--bs-page-section-right);
            }
        }
    }
}
</style>
