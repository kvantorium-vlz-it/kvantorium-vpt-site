<!-- Styled button with menu icon -->
<template>
<button>
    <icons-menu-icon
        :class="$style.Button__icon"
    />
</button>
</template>

<style module lang="postcss">
.Button {
    &__icon {
        @apply w-4 h-4 fill-primary-300;
    }
}
</style>