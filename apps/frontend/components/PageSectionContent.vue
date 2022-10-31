<script setup lang="ts">
</script>

<template>
    <div :class="$style.content__details" v-bind="$attrs">
        <h2 :class="$style.content__heading">
            <slot name="heading" />
        </h2>
        <p
            v-if="$slots.subheading !== undefined"
            :class="$style.content__subheading"
        >
            <slot name="subheading" />
        </p>
    </div>
    <slot />
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.content {
    &__details {
        margin-bottom: #{px-to-rem(12px)};
    }

    &__heading {
        margin: 0;

        color: rgb(var(--text-heading));
        @include typo(h2-bold);
    }

    &__subheading {
        margin: 0;
        margin-top: #{px-to-rem(16px)};

        color: rgb(var(--text-body));
        @include typo(body-2-normal);
    }
}
</style>
