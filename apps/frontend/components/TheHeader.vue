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
    <page-section
        as="header"
        :class="$style.header"
        :wrapper-class="$style.header__wrapper"
    >
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
    </page-section>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.header {
    background-color: rgb(var(--bg-header));

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__link {
        text-decoration: none;
    }
    @include from-breakpoint(desktop) {
        &__navigationMenuButton {
            display: none;
        }
    }
}
</style>
