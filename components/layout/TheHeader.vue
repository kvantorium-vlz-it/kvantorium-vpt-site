<script setup lang="ts">
const menuToggleButton = ref()

const handleCloseMobileMenu = () => {
    isMobileNavigationOpen.value = false
}

const toggleMobileMenu = () => {
    isMobileNavigationOpen.value = !isMobileNavigationOpen.value
}

const isMobileNavigationOpen = ref<boolean>(false)
</script>

<template>
<header :class="$style.header">
    <nuxt-link to="/" :class="$style.header__link">
        <kvantorium-logo />
    </nuxt-link>

    <the-header-navigation
        :is-open="isMobileNavigationOpen"
        @close="handleCloseMobileMenu"
    />

    <the-header-navigation-menu-button
        ref="menuToggleButton"
        :class="$style.header__navigationMenuButton"
        @click="toggleMobileMenu"
    />
</header>
</template>

<style module lang="scss">
@use '@/assets/css/mixins' as *;
@use '@/assets/css/variables' as *;

.header {
    @include page-section;

    background-color: rgb(var(--bg-header));

    display: flex;
    justify-content: space-between;
    align-items: center;

    &__link {
        text-decoration: none;
    }

    &__navigation {

    }
    @media (min-width: $min-bp-desktop) {
        &__navigationMenuButton {
            display: none;
        }
    }
}
</style>
