<template>
<section :class="$style.Section">
    <h2 :class="$style.Section__title">
        <slot name="title"></slot>
    </h2>
    <p
        v-if="useSlots().subtitle !== undefined"
        :class="$style.Section__subtitle"
    >
        <slot name="subtitle"></slot>
    </p>
    <div :class="$style.Section__content">
        <slot></slot>
    </div>
</section>
</template>

<style module lang="postcss">
.Section {
    @apply page-section;

    &__title {
        @apply text-heading36 text-primary-800 font-semibold;
    }
    &__subtitle {
        @apply text-body16 text-primary;
        @apply mt-1;
    }
    &__content {
        @apply mt-2;
    }
}
</style>