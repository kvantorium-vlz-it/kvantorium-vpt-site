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
@use '@styles/main' as *;

.header {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgb(var(--bg-header));

    &__link {
        text-decoration: none;
    }
    @include from-desktop {
        &__navigationMenuButton {
            display: none;
        }
    }
}
</style>
