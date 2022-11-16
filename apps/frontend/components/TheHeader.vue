<script setup lang="ts">
const menuButton = ref<HTMLElement>()

const isOpenDrawer = ref(false)

const toggleDrawer = () => {
    isOpenDrawer.value = !isOpenDrawer.value
}

const openDrawer = () => {
    isOpenDrawer.value = true
}

const clickOutsideDrawer = (target: EventTarget | null) => {
    if (menuButton.value?.contains(target as HTMLElement)) {
        return
    }

    isOpenDrawer.value = false
}

const slideLeftDrawer = () => {
    isOpenDrawer.value = false
}
</script>

<template>
    <PageSection
        as="header"
        :class="$style.header"
        :wrapper-class="$style.header__wrapper"
    >
        <NuxtLink
            to="/"
            :class="$style.header__logo"
        >
            <KvantoriumLogo />
        </NuxtLink>
        <NavigationProvider #="{ items }">
            <NavigationBar
                :class="$style.header__bar"
                :items="items"
            />
            <NavigationDrawer
                :class="$style.header__drawer"
                :is-open="isOpenDrawer"
                :items="items"
                @slide-left="slideLeftDrawer"
                @click-outside="clickOutsideDrawer"
            />
        </NavigationProvider>

        <button
            ref="menuButton"
            :class="$style.header__button"
            @click="openDrawer"
        >
            <NuxtIcon name="menu" />
        </button>
    </PageSection>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.header {
    background-color: rgb(var(--bg-header));

    &__wrapper {
        display: flex;
    }

    &__logo {
        margin-right: auto;
        text-decoration: none;
    }
    &__button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: 0;
        color: rgb(var(--c-white));

        @include typo(body-1-normal);
    }

    @include until-breakpoint(desktop) {
        &__bar {
            display: none;
        }
    }

    @include from-breakpoint(desktop) {
        &__button,
        &__drawer {
            display: none;
        }
    }
}
</style>
